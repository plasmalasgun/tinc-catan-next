export class ToggleControllerAction {
    playerId;
    payload;
    type = 'TOGGLE_CONTROLLER';
    // We add the constructor so ActionProcessor can pass in the ID and Payload
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    // Every action must have a validation step
    validate(state) {
        const player = state.players.find(p => p.id === this.playerId);
        // Rule: Only the Host can change someone else's controller, 
        // OR a player can change their own controller.
        if ((!player?.isHost) &&
            (this.playerId !== this.payload.targetPlayerId)) {
            return { valid: false, error: "You do not have permission to change this controller." };
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
                // Banishing to a Ghost Seat
                seat.isOnline = false; // 🚫
                seat.controllerId = null;
                seat.name = `Empty_Seat`;
            }
        }
        return {
            success: true,
            message: `Seat ${this.payload.targetPlayerId} is now a ${this.payload.controllerType || 'GHOST'}.`,
            newState: state
        };
    }
}
//# sourceMappingURL=ToggleController.js.map