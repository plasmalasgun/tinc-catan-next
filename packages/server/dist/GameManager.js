import { ActionProcessor, Board, LayoutFactory } from '@tinc/engine';
export class GameManager {
    games = new Map();
    timers = new Map();
    // Settings for the "Agentic" behavior
    TURN_TIMEOUT_MS = 60000; // 60 seconds
    constructor() { }
    /**
     * Creates a new game instance
     */
    createGame(creatorId, settings) {
        const gameId = "game-uuid-123"; //uuidv4();    
        const board = new Board();
        LayoutFactory.createStandard(board); // Flexible layout!
        console.log(`Server.GameManager.createGame: Board generated. Size: ${board.tiles.size}`);
        const shortId = creatorId.substring(creatorId.length - 5);
        // Initialize Rules (State)
        const initialState = {
            id: gameId,
            phase: 'LOBBY',
            startupIndex: 0,
            startupSubPhase: 'SETTLEMENT',
            currentPlayerId: creatorId,
            turnOrder: [creatorId],
            board: board,
            robberTileId: '0,0,0',
            victimsAvailable: [],
            turnNumber: 1,
            playedDevCardThisTurn: false,
            devCardDeck: [],
            setupSequence: [],
            players: [
                // SEAT 1: The Human Host
                this.createNewPlayer(creatorId, shortId, "#e74c3c", true),
                // SEATS 2-4: Explicit Ghosts
                this.createEmptySeat("player_2", "Blue_Seat", "#3498db"),
                this.createEmptySeat("player_3", "Orange_Seat", "#e67e22"),
                this.createEmptySeat("player_4", "Green_Seat", "#27ae60")
            ]
        };
        this.games.set(gameId, initialState);
        return gameId;
    }
    // packages/server/src/GameManager.ts
    joinGame(gameId, playerId) {
        const state = this.games.get(gameId);
        if (!state)
            throw new Error("Server.GameManager.joinGame: Game not found");
        // 1. RECYCLING LOGIC: Check if this player already has a seat (Broken Link ⛓️‍💥)
        const existingSeat = state.players.find(p => p.controllerId === playerId);
        if (existingSeat) {
            console.log(`Server.GameManager.joinGame: RE-LINKING: Player ${playerId} is reclaiming their seat ${existingSeat.id}`);
            existingSeat.isOnline = true; // Turn ⛓️‍💥 back into 🔗
            return state;
        }
        // 2. CLAIM LOGIC: If player is new, find the first available Vacant Seat (No Link ✖️)
        const vacantSeat = state.players.find(p => p.controllerType === null);
        if (vacantSeat) {
            const shortId = playerId.substring(playerId.length - 5);
            console.log(`Server.GameManager.joinGame: CLAIMING: Player ${playerId} taking vacant seat ${vacantSeat.id}`);
            vacantSeat.controllerId = playerId;
            vacantSeat.controllerType = 'HUMAN';
            vacantSeat.name = shortId;
            vacantSeat.isOnline = true; // Turn ✖️ into 🔗
            return state;
        }
        throw new Error("Server.GameManager.joinGame: Game is full! No seats available.");
    }
    // Added this function to handle disconnects in the state
    setPlayerOffline(gameId, playerId) {
        const state = this.games.get(gameId);
        if (!state)
            return null;
        const playerLeaving = state.players.find(p => p.id === playerId || p.controllerId === playerId);
        if (playerLeaving) {
            playerLeaving.isOnline = false;
            if (playerLeaving.isHost) {
                playerLeaving.isHost = false;
                const nextHost = state.players.find(p => p.isOnline && p.controllerType === 'HUMAN');
                if (nextHost)
                    nextHost.isHost = true;
                if (nextHost) {
                    nextHost.isHost = true;
                    console.log(`CROWN PASSING: The crown has been bestowed upon ${nextHost.name}`);
                }
                else {
                    console.log(`CROWN PASSING: No online humans available to take the crown.`);
                }
            }
        }
        return state;
    }
    // Helper to create a "Brain-dead" seat
    createEmptySeat(id, name, color) {
        return {
            id, name, color,
            isHost: false,
            isOnline: false, // Skulls are never "online"
            controllerId: null,
            controllerType: null, // This triggers the 👻 icon
            resources: { brick: 0, wood: 0, wheat: 0, sheep: 0, ore: 0 },
            victoryPoints: 0,
            devCards: [],
            numPlayedKnights: 0,
            numSettlements: 5,
            hasLargestArmy: false,
            hasLongestRoad: false
        };
    }
    // Inside GameManager.ts (as a private helper)
    createNewPlayer(id, name, color, isHost = false) {
        console.log(`Server.GameManager.createNewPlayer: ${id} - ${name}`);
        return {
            id: `seat_${id.substring(0, 3)}`,
            name, color, isHost,
            isOnline: true,
            controllerId: id,
            controllerType: 'HUMAN',
            resources: { brick: 0, wood: 0, wheat: 0, sheep: 0, ore: 0 },
            victoryPoints: 0,
            devCards: [],
            numPlayedKnights: 0,
            numSettlements: 5,
            hasLargestArmy: false,
            hasLongestRoad: false
        };
    }
    /**
     * The single point of entry for actions (Human or Agent)
     */
    handleAction(gameId, playerId, rawAction) {
        const state = this.games.get(gameId);
        if (!state)
            throw new Error("Game not found");
        // 1. Process the logic via our Engine
        const result = ActionProcessor.process(state, { ...rawAction, playerId });
        if (result.success) {
            // 2. If action succeeded, update memory
            this.games.set(gameId, result.newState);
            // 3. Reset the Turn Timer
            this.resetTimer(gameId);
            return result;
        }
        return result;
    }
    reassignHost(state) {
        // 1. Check if the current host is still online
        const currentHost = state.players.find(p => p.isHost && p.isOnline);
        if (currentHost)
            return; // Host is fine, no change needed.
        // 2. If host is offline, find the next available HUMAN who is online
        const nextHost = state.players.find(p => p.isOnline && p.controllerType === 'HUMAN');
        if (nextHost) {
            // Clear old host flags
            state.players.forEach(p => p.isHost = false);
            // Bestow the crown
            nextHost.isHost = true;
            console.log(`CROWN PASSING: ${nextHost.name} is the new Host.`);
        }
    }
    resetTimer(gameId) {
        // Clear existing timer
        if (this.timers.has(gameId)) {
            clearTimeout(this.timers.get(gameId));
        }
        // Set new timer for "Auto-Move" or "Timeout"
        const timer = setTimeout(() => {
            this.handleTimeout(gameId);
        }, this.TURN_TIMEOUT_MS);
        this.timers.set(gameId, timer);
    }
    /**
     * Agentic Logic: What happens if a player (Human or Agent) stalls?
     */
    handleTimeout(gameId) {
        const state = this.games.get(gameId);
        if (!state)
            return;
        console.log(`Game ${gameId}: Player ${state.currentPlayerId} timed out.`);
        // In a professional "Agentic" server, we might force an 'END_TURN' 
        // or trigger a 'BotAction' here so the game never gets stuck.
        this.handleAction(gameId, state.currentPlayerId, { type: 'END_TURN' });
    }
    getGameState(gameId) {
        return this.games.get(gameId);
    }
}
