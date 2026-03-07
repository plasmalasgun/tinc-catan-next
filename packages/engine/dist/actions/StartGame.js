export class StartGameAction {
    playerId;
    payload;
    type = 'START_GAME';
    constructor(playerId, payload = {}) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        // Only the Root Admin (session-level crown) may manifest the game.
        // They don't need a seat — a pure spectator-admin is a valid scenario.
        const isRootAdmin = this.playerId === state.hostSessionId;
        if (!isRootAdmin) {
            return { valid: false, error: 'Only the Root Admin can start the game.' };
        }
        // No ghost seats allowed at launch
        const hasGhosts = state.players.some(p => p.controllerType === null);
        if (hasGhosts) {
            return {
                valid: false,
                error: 'Cannot start: All seats must have a Brain 🧠 or a Robot 🤖.',
            };
        }
        if (state.players.length < 2) {
            return { valid: false, error: 'Need at least 2 players.' };
        }
        return { valid: true };
    }
    execute(state) {
        // 1. MANIFEST AGENTS: Any ghost that slipped through becomes a bot
        state.players.forEach((seat) => {
            if (seat.controllerType === null) {
                seat.controllerType = 'AGENT';
                seat.controllerId = `bot_${seat.id}`;
                seat.isOnline = true;
                seat.name = `Agent_${seat.id.split('_')[1]}`;
            }
        });
        // 2. RANDOMISE TURN ORDER
        state.turnOrder = state.players.map(p => p.id).sort(() => Math.random() - 0.5);
        // 3. GENERATE SERPENTINE SETUP SEQUENCE  [1,2,3,4,4,3,2,1]
        const forward = [...state.turnOrder];
        const backward = [...state.turnOrder].reverse();
        state.setupSequence = [...forward, ...backward];
        // 4. TRANSITION TO STARTUP PHASE
        state.phase = 'STARTUP';
        state.startupIndex = 0;
        state.currentPlayerId = state.setupSequence[0];
        return {
            success: true,
            message: 'The game has been manifested. Begin Startup Placements.',
            newState: state,
        };
    }
}
//# sourceMappingURL=StartGame.js.map