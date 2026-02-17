export class TakeCardAction {
    playerId;
    payload;
    type = 'STEAL_CARD';
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        if (state.phase !== 'ROBBER_STEAL') {
            return { valid: false, error: "Not the time to steal a card." };
        }
        if (!state.victimsAvailable.includes(this.payload.victimId)) {
            return { valid: false, error: "That player is not at the robber's location." };
        }
        return { valid: true };
    }
    execute(state) {
        const thief = state.players.find(p => p.id === this.playerId);
        const victim = state.players.find(p => p.id === this.payload.victimId);
        // 1. Pick a random resource from the victim
        const resources = victim.resources;
        const availableTypes = Object.keys(resources).filter(type => resources[type] > 0);
        if (availableTypes.length === 0) {
            state.phase = 'TRADING_BUILDING';
            return { success: true, message: "Victim has no cards.", newState: state };
        }
        const randomType = availableTypes[Math.floor(Math.random() * availableTypes.length)];
        // 2. Transfer
        victim.resources[randomType]--;
        thief.resources[randomType]++;
        // 3. Clean up
        state.victimsAvailable = [];
        state.phase = 'TRADING_BUILDING';
        return {
            success: true,
            message: `You stole 1 ${String(randomType)} from ${victim.id}`,
            newState: state
        };
    }
}
//# sourceMappingURL=TakeCard.js.map