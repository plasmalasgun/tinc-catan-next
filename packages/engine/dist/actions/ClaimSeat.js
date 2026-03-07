export class ClaimSeatAction {
    playerId;
    payload;
    type = 'CLAIM_SEAT';
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        const seat = state.players.find(p => p.id === this.payload.targetSeatId);
        if (!seat)
            return { valid: false, error: "Seat not found." };
        if (seat.controllerType !== null)
            return { valid: false, error: "Seat is already taken!" };
        // Prevent someone who already has a seat from grabbing another one
        const existingSeat = state.players.find(p => p.controllerId === this.playerId);
        if (existingSeat)
            return { valid: false, error: "You already have a seat." };
        return { valid: true };
    }
    execute(state) {
        const seat = state.players.find(p => p.id === this.payload.targetSeatId);
        seat.controllerType = 'HUMAN';
        seat.controllerId = this.playerId;
        seat.isOnline = true;
        seat.name = this.playerId.substring(this.playerId.length - 5);
        // If there is no active host anywhere, give this new player the Crown
        const hasHost = state.players.some(p => p.isHost);
        if (!hasHost)
            seat.isHost = true;
        return { success: true, message: `You claimed ${seat.id}`, newState: state };
    }
}
//# sourceMappingURL=ClaimSeat.js.map