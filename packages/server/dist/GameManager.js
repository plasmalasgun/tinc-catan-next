import { EventEmitter } from 'events';
import { ActionProcessor, Board, LayoutFactory, } from '@tinc/engine';
import { HeuristicAgent } from './agents/HeuristicAgent.js';
export class GameManager extends EventEmitter {
    games = new Map();
    timers = new Map();
    TURN_TIMEOUT_MS = 60_000;
    /** Registry of pluggable Agent Brains ("Lego Box") */
    brainRegistry = {
        'HEURISTIC': new HeuristicAgent(),
        // 'LLM':     new LLMAgent(),
        // 'WEBHOOK': new WebhookAgent(),
    };
    constructor() {
        super(); // Required for EventEmitter
    }
    // ---------------------------------------------------------------------------
    // LOBBY LIFECYCLE
    // ---------------------------------------------------------------------------
    createGame(creatorId, settings) {
        const gameId = 'game-uuid-123';
        const board = new Board();
        LayoutFactory.createStandard(board);
        const shortId = creatorId.substring(creatorId.length - 5);
        const colors = ['#e74c3c', '#e67e22', '#f1c40f', '#27ae60', '#3498db', '#9b59b6', '#8b4513', '#ffffff', '#222222'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const initialState = {
            id: gameId,
            hostSessionId: creatorId,
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
    joinGame(gameId, playerId) {
        const state = this.games.get(gameId);
        if (!state)
            throw new Error('Game not found');
        const assignedSeat = state.players.find(p => p.controllerId === playerId);
        if (assignedSeat)
            assignedSeat.isOnline = true;
        if (!state.hostSessionId) {
            state.hostSessionId = playerId;
            console.log(`👑 ROOT CROWN CLAIMED: ${playerId} is now the Admin.`);
        }
        return state;
    }
    setPlayerOffline(gameId, playerId) {
        const state = this.games.get(gameId);
        if (!state)
            return null;
        const playerLeaving = state.players.find(p => p.controllerId === playerId);
        if (playerLeaving)
            playerLeaving.isOnline = false;
        if (playerId === state.hostSessionId) {
            const nextHost = state.players.find(p => p.isOnline && p.controllerType === 'HUMAN' && p.controllerId);
            if (nextHost?.controllerId) {
                state.hostSessionId = nextHost.controllerId;
                console.log(`👑 CROWN PASSING to ${nextHost.name}`);
            }
            else {
                state.hostSessionId = '';
                console.log('👑 CROWN DORMANT');
            }
        }
        return state;
    }
    // ---------------------------------------------------------------------------
    // PLAYER / SEAT FACTORIES
    // ---------------------------------------------------------------------------
    createEmptySeat(id, name, color) {
        return {
            id, name, color,
            isHost: false,
            isOnline: false,
            controllerId: null,
            controllerType: null,
            timerEnabled: false,
            turnTimeoutMs: 60_000,
            resources: { brick: 0, wood: 0, wheat: 0, sheep: 0, ore: 0 },
            victoryPoints: 0,
            devCards: [],
            numPlayedKnights: 0,
            numSettlements: 5,
            hasLargestArmy: false,
            hasLongestRoad: false,
        };
    }
    createNewPlayer(id, name, color) {
        console.log(`Server.GameManager.createNewPlayer: ${id} - ${name}`);
        return {
            id: `seat_${id.substring(0, 3)}`,
            name, color,
            isHost: false,
            isOnline: true,
            controllerId: id,
            controllerType: 'HUMAN',
            timerEnabled: false,
            turnTimeoutMs: 60_000,
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
    handleAction(gameId, playerId, rawAction) {
        const state = this.games.get(gameId);
        if (!state)
            throw new Error('Game not found');
        const result = ActionProcessor.process(state, { ...rawAction, playerId });
        if (result.success) {
            this.games.set(gameId, result.newState);
            this.resetTimer(gameId);
            // 🔊 Fire broadcast event — index.ts handles the socket push
            const actionId = Math.random().toString(36).substr(2, 7);
            this.emit('action_success', {
                gameId,
                playerId,
                action: rawAction,
                actionId,
                result,
                newState: result.newState,
            });
            // Schedule next agent move (short delay so humans can watch the board)
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
            console.log(`🤖 Agent couldn't decide — skipping turn.`);
            this.handleAction(gameId, activePlayer.id, { type: 'END_TURN', payload: {} });
        }
    }
    // ---------------------------------------------------------------------------
    // TURN TIMER
    // ---------------------------------------------------------------------------
    resetTimer(gameId) {
        if (this.timers.has(gameId)) {
            clearTimeout(this.timers.get(gameId));
            this.timers.delete(gameId);
        }
        const state = this.games.get(gameId);
        if (!state)
            return;
        const currentSeat = state.players.find(p => p.id === state.currentPlayerId);
        if (!currentSeat)
            return;
        // Humans only get a timer when explicitly opted in; agents always get one
        if (currentSeat.controllerType === 'HUMAN' && !currentSeat.timerEnabled) {
            console.log(`[TIMER] Skipping timer for human ${currentSeat.name} (timerEnabled=false)`);
            return;
        }
        const timeoutMs = currentSeat.controllerType === 'HUMAN'
            ? currentSeat.turnTimeoutMs
            : this.TURN_TIMEOUT_MS;
        const timer = setTimeout(() => this.handleTimeout(gameId), timeoutMs);
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
