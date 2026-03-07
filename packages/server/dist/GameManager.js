import { ActionProcessor, Board, LayoutFactory, } from '@tinc/engine';
import { HeuristicAgent } from './agents/HeuristicAgent.js';
export class GameManager {
    games = new Map();
    timers = new Map();
    TURN_TIMEOUT_MS = 60_000; // 60 seconds
    /** Registry of pluggable Agent Brains ("Lego Box") */
    brainRegistry = {
        'HEURISTIC': new HeuristicAgent(),
        // 'LLM':     new LLMAgent(),
        // 'WEBHOOK': new WebhookAgent(),
    };
    constructor() { }
    // ---------------------------------------------------------------------------
    // LOBBY LIFECYCLE
    // ---------------------------------------------------------------------------
    /**
     * Creates a new game instance.
     * The creator automatically holds the Root Crown (hostSessionId).
     */
    createGame(creatorId, settings) {
        const gameId = 'game-uuid-123';
        const board = new Board();
        LayoutFactory.createStandard(board);
        const shortId = creatorId.substring(creatorId.length - 5);
        const colors = ['#e74c3c', '#e67e22', '#f1c40f', '#27ae60', '#3498db', '#9b59b6', '#8b4513', '#ffffff', '#111111'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const initialState = {
            id: gameId,
            hostSessionId: creatorId, // 👑 ROOT CROWN — belongs to the session, not any seat
            phase: 'LOBBY',
            startupIndex: 0,
            startupSubPhase: 'SETTLEMENT',
            currentPlayerId: creatorId,
            turnOrder: [creatorId],
            board,
            robberTileId: '0,0,0',
            victimsAvailable: [],
            turnNumber: 1,
            playedDevCardThisTurn: false,
            devCardDeck: [],
            setupSequence: [],
            players: [
                this.createNewPlayer(creatorId, shortId, randomColor),
            ],
        };
        this.games.set(gameId, initialState);
        return gameId;
    }
    /**
     * Reconnects an existing session or lets them spectate.
     * If the lobby has no Crown yet, the first person to join claims it.
     */
    joinGame(gameId, playerId) {
        const state = this.games.get(gameId);
        if (!state)
            throw new Error('Game not found');
        // Reclaim seat (if they had one) or lurk as Spectator
        const assignedSeat = state.players.find(p => p.controllerId === playerId);
        if (assignedSeat) {
            assignedSeat.isOnline = true;
        }
        // If the Crown is dormant, the next person in gets it
        if (!state.hostSessionId) {
            state.hostSessionId = playerId;
            console.log(`👑 ROOT CROWN CLAIMED: ${playerId} is now the Admin.`);
        }
        return state;
    }
    /**
     * Marks a player offline and, if they held the Crown, passes it to the
     * next available online Human.
     */
    setPlayerOffline(gameId, playerId) {
        const state = this.games.get(gameId);
        if (!state)
            return null;
        // Mark the seat offline (if they had one)
        const playerLeaving = state.players.find(p => p.controllerId === playerId);
        if (playerLeaving)
            playerLeaving.isOnline = false;
        // Crown passing: if the leaving session held the Root Crown, find a new heir
        if (playerId === state.hostSessionId) {
            const nextHost = state.players.find(p => p.isOnline && p.controllerType === 'HUMAN' && p.controllerId);
            if (nextHost?.controllerId) {
                state.hostSessionId = nextHost.controllerId;
                console.log(`👑 CROWN PASSING to ${nextHost.name}`);
            }
            else {
                state.hostSessionId = ''; // Dormant – claimed by next joiner
                console.log('👑 CROWN DORMANT');
            }
        }
        return state;
    }
    // ---------------------------------------------------------------------------
    // PLAYER / SEAT FACTORIES
    // ---------------------------------------------------------------------------
    /** Creates an empty (ghost) seat – no controller, no crown. */
    createEmptySeat(id, name, color) {
        return {
            id, name, color,
            isOnline: false,
            controllerId: null,
            controllerType: null,
            resources: { brick: 0, wood: 0, wheat: 0, sheep: 0, ore: 0 },
            victoryPoints: 0,
            devCards: [],
            numPlayedKnights: 0,
            numSettlements: 5,
            hasLargestArmy: false,
            hasLongestRoad: false,
        };
    }
    /** Creates a Human seat for the original game creator. */
    createNewPlayer(id, name, color) {
        console.log(`Server.GameManager.createNewPlayer: ${id} - ${name}`);
        return {
            id: `seat_${id.substring(0, 3)}`,
            name, color,
            isOnline: true,
            controllerId: id,
            controllerType: 'HUMAN',
            resources: { brick: 0, wood: 0, wheat: 0, sheep: 0, ore: 0 },
            victoryPoints: 0,
            devCards: [],
            numPlayedKnights: 0,
            numSettlements: 5,
            hasLargestArmy: false,
            hasLongestRoad: false,
        };
    }
    // ---------------------------------------------------------------------------
    // ACTION PIPELINE
    // ---------------------------------------------------------------------------
    /** Single entry-point for all actions (Human or Agent). */
    handleAction(gameId, playerId, rawAction) {
        const state = this.games.get(gameId);
        if (!state)
            throw new Error('Game not found');
        const result = ActionProcessor.process(state, { ...rawAction, playerId });
        if (result.success) {
            this.games.set(gameId, result.newState);
            this.resetTimer(gameId);
            // Let humans see the board update before the bot fires
            setTimeout(() => this.triggerAgentIfTurn(gameId), 1500);
        }
        return result;
    }
    // ---------------------------------------------------------------------------
    // AGENT EXECUTION LOOP
    // ---------------------------------------------------------------------------
    triggerAgentIfTurn(gameId) {
        const state = this.games.get(gameId);
        if (!state)
            return;
        const activePlayer = state.players.find(p => p.id === state.currentPlayerId);
        if (!activePlayer || activePlayer.controllerType !== 'AGENT')
            return;
        const brainType = activePlayer.agentType || 'HEURISTIC';
        const brain = this.brainRegistry[brainType];
        if (!brain) {
            console.error(`ERROR: Brain type "${brainType}" not found in registry!`);
            return;
        }
        console.log(`🤖 Agent ${activePlayer.name} (${brainType}) is thinking...`);
        const nextMove = brain.decideMove(state, activePlayer.id);
        if (nextMove) {
            console.log(`🤖 Agent decided: ${nextMove.type}`);
            this.handleAction(gameId, activePlayer.id, nextMove);
        }
        else {
            console.log(`🤖 Agent couldn't decide – skipping turn.`);
            this.handleAction(gameId, activePlayer.id, { type: 'END_TURN', payload: {} });
        }
    }
    // ---------------------------------------------------------------------------
    // TURN TIMER
    // ---------------------------------------------------------------------------
    resetTimer(gameId) {
        if (this.timers.has(gameId))
            clearTimeout(this.timers.get(gameId));
        const timer = setTimeout(() => this.handleTimeout(gameId), this.TURN_TIMEOUT_MS);
        this.timers.set(gameId, timer);
    }
    handleTimeout(gameId) {
        const state = this.games.get(gameId);
        if (!state)
            return;
        console.log(`Game ${gameId}: Player ${state.currentPlayerId} timed out.`);
        this.handleAction(gameId, state.currentPlayerId, { type: 'END_TURN' });
    }
    // ---------------------------------------------------------------------------
    // READ
    // ---------------------------------------------------------------------------
    getGameState(gameId) {
        return this.games.get(gameId);
    }
}
