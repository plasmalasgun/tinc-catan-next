export class MonopolyChoiceAction {
    playerId;
    payload;
    type = 'MONOPOLY_CHOICE';
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        if (state.phase !== 'MONOPOLY')
            return { valid: false, error: "Not in Monopoly phase." };
        return { valid: true };
    }
    execute(state) {
        const thief = state.players.find(p => p.id === this.playerId);
        const resType = this.payload.resourceType;
        let totalStolen = 0;
        state.players.forEach(victim => {
            if (victim.id !== this.playerId) {
                totalStolen += victim.resources[resType];
                victim.resources[resType] = 0;
            }
        });
        thief.resources[resType] += totalStolen;
        state.phase = 'TRADING_BUILDING';
        return {
            success: true,
            message: `Monopoly! You stole ${totalStolen} ${String(resType)} from other players.`,
            newState: state
        };
    }
}
//# sourceMappingURL=MonopolyChoice.js.map