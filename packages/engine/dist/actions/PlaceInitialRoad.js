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
            return { valid: false, error: 'Not the time for initial road placement.' };
        }
        const path = state.board.paths.get(this.payload.pathId);
        if (!path || path.road) {
            return { valid: false, error: 'Invalid or occupied path.' };
        }
        return { valid: true };
    }
    execute(state) {
        const path = state.board.paths.get(this.payload.pathId);
        path.road = { playerId: this.playerId };
        // Advance the serpentine index FIRST
        state.startupIndex += 1;
        state.startupSubPhase = 'SETTLEMENT';
        // Startup complete (2 settlements + 2 roads per player = 8 placements for 2 players,
        // scales with player count via setupSequence.length)
        if (state.startupIndex >= state.setupSequence.length) {
            state.phase = 'ROLLING';
            state.currentPlayerId = state.turnOrder[0]; // Player 1 rolls first
            return {
                success: true,
                message: 'Startup finished! Begin the game.',
                newState: state,
            };
        }
        // ── THE FIX ──────────────────────────────────────────────────────────
        // Advance currentPlayerId to whoever is next in the serpentine sequence.
        // Without this line the human can never take a second turn — every
        // ActionProcessor turn-check sees "seat_old" !== "seat_next" and rejects.
        // ─────────────────────────────────────────────────────────────────────
        state.currentPlayerId = state.setupSequence[state.startupIndex];
        return {
            success: true,
            message: `Road placed. ${state.currentPlayerId}'s turn.`,
            newState: state,
        };
    }
}
//# sourceMappingURL=PlaceInitialRoad.js.map