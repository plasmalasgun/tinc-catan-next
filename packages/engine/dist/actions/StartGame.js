export class StartGameAction {
    playerId;
    payload;
    type = 'START_GAME';
    constructor(playerId, payload = {}) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        const player = state.players.find(p => p.controllerId === this.playerId);
        // 1. Only the King (Host) can start the game
        if (!player?.isHost) {
            return { valid: false, error: "Only the Host can start the game." };
        }
        // 2. Can only start from the Lobby
        if (state.phase !== 'LOBBY') {
            return { valid: false, error: "Game has already started." };
        }
        // 3. Minimum player check (standard Catan needs at least 3, but we allow 2 for testing)
        if (state.players.length < 2) {
            return { valid: false, error: "Need at least 2 players to begin." };
        }
        return { valid: true };
    }
    execute(state) {
        // 1. MANIFESTATION: Fill all Ghost Seats with Agents
        state.players.forEach((seat) => {
            if (seat.controllerType === null) {
                seat.controllerType = 'AGENT';
                seat.controllerId = `bot_${seat.id}`;
                seat.isOnline = true; // Robots are always online
                seat.name = `Agent_${seat.color.replace('#', '')}`;
                console.log(`ENGINE: Manifesting Agent in ${seat.color} seat.`);
            }
        });
        // 2. SETUP TURN ORDER: Randomly shuffle the seats
        const seatIds = state.players.map(p => p.id);
        state.turnOrder = seatIds.sort(() => Math.random() - 0.5);
        // 3. INITIALIZE STATE: Set phase and current player
        state.phase = 'STARTUP';
        state.currentPlayerId = state.turnOrder[0];
        state.turnNumber = 1;
        return {
            success: true,
            message: "The game has begun! Ghosts have been replaced by Agents.",
            newState: state
        };
    }
}
//# sourceMappingURL=StartGame.js.map