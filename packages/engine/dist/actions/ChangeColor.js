export class ChangeColorAction {
    playerId;
    payload;
    type = 'CHANGE_COLOR';
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        const isRootAdmin = this.playerId === state.hostSessionId;
        const actorSeat = state.players.find(p => p.controllerId === this.playerId);
        const isColorTaken = state.players.some(p => p.color === this.payload.color);
        if (isColorTaken)
            return { valid: false, error: 'Color is already in use.' };
        // Root Admin can change any seat's color; others can only change their own.
        if (!isRootAdmin && actorSeat?.id !== this.payload.targetSeatId) {
            return { valid: false, error: 'You can only change your own color.' };
        }
        return { valid: true };
    }
    execute(state) {
        const seat = state.players.find(p => p.id === this.payload.targetSeatId);
        seat.color = this.payload.color;
        return { success: true, newState: state };
    }
}
//# sourceMappingURL=ChangeColor.js.map