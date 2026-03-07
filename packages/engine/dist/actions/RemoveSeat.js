export class RemoveSeatAction {
    playerId;
    payload;
    type = 'REMOVE_SEAT';
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        // Only the Root Admin (session-level crown) may remove seats.
        const isRootAdmin = this.playerId === state.hostSessionId;
        if (!isRootAdmin) {
            return { valid: false, error: 'Only the Root Admin can remove seats.' };
        }
        const target = state.players.find(p => p.id === this.payload.targetSeatId);
        if (target?.controllerType === 'HUMAN' && target.isOnline) {
            return { valid: false, error: 'Cannot remove a connected human.' };
        }
        return { valid: true };
    }
    execute(state) {
        state.players = state.players.filter(p => p.id !== this.payload.targetSeatId);
        return { success: true, message: 'Seat removed.', newState: state };
    }
}
//# sourceMappingURL=RemoveSeat.js.map