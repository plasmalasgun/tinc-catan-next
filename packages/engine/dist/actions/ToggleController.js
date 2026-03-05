export class ToggleControllerAction {
    playerId;
    payload;
    type = 'TOGGLE_CONTROLLER';
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        // 1. Find the physical human trying to make this change
        const actor = state.players.find(p => p.controllerId === this.playerId);
        if (!actor) {
            return { valid: false, error: "You are not recognized in this lobby." };
        }
        // 2. You must be the Host, UNLESS you are changing your own seat.
        // actor.id is their Seat (e.g., 'seat_123'). payload.targetPlayerId is the seat being clicked.
        if (!actor.isHost && actor.id !== this.payload.targetPlayerId) {
            return { valid: false, error: "Only the 👑 Host can modify other seats." };
        }
        return { valid: true };
    }
    execute(state) {
        const seat = state.players.find(p => p.id === this.payload.targetPlayerId);
        if (seat) {
            seat.controllerType = this.payload.controllerType;
            if (seat.controllerType === 'AGENT') {
                // Manifesting an Agent
                seat.isOnline = true; // Agents are always online
                seat.controllerId = `bot_${seat.id}`;
                seat.name = `Agent_${seat.id.substring(seat.id.length - 4)}`;
            }
            else if (seat.controllerType === 'HUMAN') {
                // Opening the seat for a Network Human
                seat.isOnline = false; // ⛓️‍💥 Waiting for a human to connect
                seat.controllerId = null;
                seat.name = `Open_Seat`;
            }
            else if (seat.controllerType === null) {
                // PILLAR 3: THE KICK. Banishing to a Ghost Seat
                seat.isOnline = false; // 🚫
                seat.controllerId = null;
                seat.name = `Empty_Seat`;
                seat.isHost = false; // A ghost can never hold the crown!
            }
        }
        return {
            success: true,
            message: `Seat updated to ${this.payload.controllerType || 'GHOST'}.`,
            newState: state
        };
    }
}
//# sourceMappingURL=ToggleController.js.map