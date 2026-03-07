export class ConfigureAgentAction {
    playerId;
    payload;
    type = 'CONFIGURE_AGENT';
    constructor(playerId, // The Root Admin making the change
    payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        // Only the Root Admin (session-level crown) can rewire a robot's brain
        const isRootAdmin = this.playerId === state.hostSessionId;
        if (!isRootAdmin) {
            return { valid: false, error: 'Only the 👑 Root Admin can configure Agents.' };
        }
        const targetSeat = state.players.find(p => p.id === this.payload.targetPlayerId);
        if (targetSeat?.controllerType !== 'AGENT') {
            return { valid: false, error: 'You can only configure Brains for Agents.' };
        }
        return { valid: true };
    }
    execute(state) {
        const seat = state.players.find(p => p.id === this.payload.targetPlayerId);
        // Plug in the new Lego Brain
        seat.agentType = this.payload.agentType;
        return {
            success: true,
            message: `Agent ${seat.name} is now using the ${this.payload.agentType} Brain.`,
            newState: state,
        };
    }
}
//# sourceMappingURL=ConfigureAgent.js.map