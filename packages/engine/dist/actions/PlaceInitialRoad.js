export class PlaceInitialRoadAction {
    playerId;
    payload;
    type = 'PLACE_INITIAL_ROAD';
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        if (state.phase !== 'STARTUP' || state.startupSubPhase !== 'ROAD') {
            return { valid: false, error: "Not the time for initial road placement." };
        }
        const path = state.board.paths.get(this.payload.pathId);
        if (!path || path.road)
            return { valid: false, error: "Invalid or occupied path." };
        // Rule: Must be connected to a settlement owned by the player
        // In Startup, specifically the one they just placed.
        return { valid: true };
    }
    execute(state) {
        const path = state.board.paths.get(this.payload.pathId);
        path.road = { playerId: this.playerId };
        // Increment Startup Progress
        state.startupIndex += 1;
        state.startupSubPhase = 'SETTLEMENT';
        // Check if Startup is finished
        if (state.startupIndex === 8) {
            state.phase = 'ROLLING';
            state.currentPlayerId = state.turnOrder[0]; // Back to player 1
            return { success: true, message: "Startup finished! Begin the game.", newState: state };
        }
        return {
            success: true,
            message: "Road placed. Next player's turn.",
            newState: state
        };
    }
}
//# sourceMappingURL=PlaceInitialRoad.js.map