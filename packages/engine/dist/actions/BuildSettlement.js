export class BuildSettlementAction {
    playerId;
    payload;
    type = 'BUILD_SETTLEMENT';
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        const player = state.players.find(p => p.id === this.playerId);
        if (!player) {
            return { valid: false, error: "Player not found in this game." };
        }
        const intersection = state.board.intersections.get(this.payload.intersectionId);
        if (!intersection)
            return { valid: false, error: "Intersection does not exist" };
        if (intersection.building)
            return { valid: false, error: "Spot already taken" };
        // Distance Rule: No settlement within 1 edge of another settlement
        // (This is where our Topology math pays off!)
        const isTooClose = this.checkDistanceRule(state, this.payload.intersectionId);
        if (isTooClose)
            return { valid: false, error: "Too close to another settlement" };
        // Resource Check
        if (player.resources.brick < 1 || player.resources.wood < 1 ||
            player.resources.wheat < 1 || player.resources.sheep < 1) {
            return { valid: false, error: "Insufficient resources" };
        }
        return { valid: true };
    }
    execute(state) {
        const player = state.players.find(p => p.id === this.playerId);
        const intersection = state.board.intersections.get(this.payload.intersectionId);
        // Deduct Resources
        player.resources.brick -= 1;
        player.resources.wood -= 1;
        player.resources.wheat -= 1;
        player.resources.sheep -= 1;
        // Place Building
        intersection.building = {
            type: 'SETTLEMENT',
            playerId: this.playerId
        };
        player.victoryPoints += 1;
        return { success: true, newState: state };
    }
    checkDistanceRule(state, intId) {
        // Logic: Get neighbors of this intersection from the Board graph
        // If any neighbor has a building, return true.
        return false; // simplified for now
    }
}
//# sourceMappingURL=BuildSettlement.js.map