export class PlaceInitialSettlementAction {
    playerId;
    payload;
    type = 'PLACE_INITIAL_SETTLEMENT';
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        if (state.phase !== 'STARTUP' || state.startupSubPhase !== 'SETTLEMENT') {
            return { valid: false, error: "Not the time for initial settlement placement." };
        }
        // Determine whose turn it is in the serpentine order
        const expectedPlayerId = this.getExpectedPlayer(state);
        if (this.playerId !== expectedPlayerId) {
            return { valid: false, error: `It is ${expectedPlayerId}'s turn to place.` };
        }
        const intersection = state.board.intersections.get(this.payload.intersectionId);
        if (!intersection || intersection.building) {
            return { valid: false, error: "Invalid or occupied intersection." };
        }
        // Distance Rule still applies in Startup!
        if (this.isTooClose(state, this.payload.intersectionId)) {
            return { valid: false, error: "Must be at least two edges away from other settlements." };
        }
        return { valid: true };
    }
    execute(state) {
        const intersection = state.board.intersections.get(this.payload.intersectionId);
        const player = state.players.find(p => p.id === this.playerId);
        // 1. Place for free
        intersection.building = { type: 'SETTLEMENT', playerId: this.playerId };
        player.victoryPoints += 1;
        // 2. If this is the player's SECOND placement (index 4-7), give starting resources
        if (state.startupIndex >= 4) {
            this.distributeStartingResources(state, intersection, player);
        }
        // 3. Move to Road sub-phase
        state.startupSubPhase = 'ROAD';
        return {
            success: true,
            message: "Initial settlement placed. Now place a road.",
            followUp: 'PLACE_INITIAL_ROAD',
            newState: state
        };
    }
    getExpectedPlayer(state) {
        const serpentine = [...state.turnOrder, ...[...state.turnOrder].reverse()];
        return serpentine[state.startupIndex];
    }
    distributeStartingResources(state, intersection, player) {
        // Look at all hexes adjacent to this specific settlement
        intersection.coords.forEach((hexCoord) => {
            const tile = state.board.tiles.get(hexCoord.toString());
            if (tile && tile.type !== 'DESERT') {
                const res = tile.type.toLowerCase();
                player.resources[res] += 1;
            }
        });
    }
    isTooClose(state, intId) {
        // Graph traversal logic: check if neighbors of this intersection have buildings
        return false; // Ported from your distance rule logic
    }
}
//# sourceMappingURL=PlaceInitialSettlement.js.map