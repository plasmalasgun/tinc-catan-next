/**
 * CONFIGURE_PLAYER
 * Admin-only action.  Sets per-seat timer configuration.
 *
 * Payload:
 *   targetSeatId    — the seat (Player.id) to configure
 *   timerEnabled?   — boolean; whether the turn-skip timer fires for this seat
 *   turnTimeoutMs?  — number;  milliseconds before auto-skip (min 5 000)
 */
export class ConfigurePlayerAction {
    playerId;
    payload;
    type = 'CONFIGURE_PLAYER';
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        if (this.playerId !== state.hostSessionId) {
            return { valid: false, error: 'Only the Root Admin can configure player settings.' };
        }
        const seat = state.players.find(p => p.id === this.payload.targetSeatId);
        if (!seat) {
            return { valid: false, error: `Seat ${this.payload.targetSeatId} not found.` };
        }
        if (this.payload.turnTimeoutMs !== undefined &&
            this.payload.turnTimeoutMs < 5_000) {
            return { valid: false, error: 'Turn timeout must be at least 5 000 ms (5 seconds).' };
        }
        return { valid: true };
    }
    execute(state) {
        const seat = state.players.find(p => p.id === this.payload.targetSeatId);
        if (this.payload.timerEnabled !== undefined) {
            seat.timerEnabled = this.payload.timerEnabled;
        }
        if (this.payload.turnTimeoutMs !== undefined) {
            seat.turnTimeoutMs = this.payload.turnTimeoutMs;
        }
        const status = seat.timerEnabled
            ? `enabled (${seat.turnTimeoutMs / 1000}s)`
            : 'disabled';
        return {
            success: true,
            message: `Timer for ${seat.name} is now ${status}.`,
            newState: state,
        };
    }
}
//# sourceMappingURL=ConfigurePlayer.js.map