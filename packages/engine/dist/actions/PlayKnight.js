export class PlayKnightAction {
    playerId;
    payload;
    type = 'PLAY_KNIGHT';
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        if (state.playedDevCardThisTurn)
            return { valid: false, error: "Already played a card this turn." };
        const player = state.players.find(p => p.id === this.playerId);
        const card = player.devCards.find(c => c.id === this.payload.cardId);
        if (!card || card.type !== 'KNIGHT')
            return { valid: false, error: "You don't have a Knight card." };
        if (card.boughtTurn === state.turnNumber)
            return { valid: false, error: "Cannot play card on the turn it was bought." };
        return { valid: true };
    }
    execute(state) {
        const player = state.players.find(p => p.id === this.playerId);
        // Remove card and increment army
        player.devCards = player.devCards.filter(c => c.id !== this.payload.cardId);
        player.numPlayedKnights++;
        state.playedDevCardThisTurn = true;
        // Trigger Robber flow
        state.phase = 'ROBBER_MOVE';
        return { success: true, message: "Knight played! Move the robber.", followUp: 'MOVE_ROBBER', newState: state };
    }
}
//# sourceMappingURL=PlayKnight.js.map