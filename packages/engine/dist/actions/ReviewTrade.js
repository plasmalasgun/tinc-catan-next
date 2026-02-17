export class ReviewTradeAction {
    playerId;
    payload;
    type = 'REVIEW_TRADE';
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        if (!state.activeTrade)
            return { valid: false, error: "No active trade to review." };
        if (this.playerId === state.activeTrade.senderId) {
            return { valid: false, error: "You cannot review your own trade." };
        }
        return { valid: true };
    }
    execute(state) {
        const trade = state.activeTrade;
        // Update the response for this player
        trade.responses.set(this.playerId, this.payload.accept ? 'ACCEPTED' : 'REJECTED');
        return {
            success: true,
            message: this.payload.accept ? "You accepted the trade." : "You declined the trade.",
            newState: state
        };
    }
}
//# sourceMappingURL=ReviewTrade.js.map