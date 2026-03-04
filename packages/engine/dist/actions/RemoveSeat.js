export class RemoveSeatAction {
    playerId;
    payload;
    type = 'REMOVE_SEAT';
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        const actor = state.players.find(p => p.controllerId === this.playerId);
        if (!actor?.isHost)
            return { valid: false, error: "Only the Host can remove seats." };
        const target = state.players.find(p => p.id === this.payload.targetSeatId);
        if (target?.controllerType === 'HUMAN' && target.isOnline)
            return { valid: false, error: "Cannot remove a connected human." };
        return { valid: true };
    }
    execute(state) {
        state.players = state.players.filter(p => p.id !== this.payload.targetSeatId);
        return { success: true, message: "Seat removed.", newState: state };
    }
}
//# sourceMappingURL=RemoveSeat.js.map