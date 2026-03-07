// packages/server/src/agents/HeuristicAgent.ts
export class HeuristicAgent {
    // --------------------------------------------------------------------------
    // 1. THE MAIN DECISION LOOP
    // --------------------------------------------------------------------------
    decideMove(state, myPlayerId) {
        if (state.currentPlayerId !== myPlayerId)
            return null;
        const player = state.players.find(p => p.id === myPlayerId);
        if (!player)
            return null;
        switch (state.phase) {
            case 'STARTUP':
                return this.decideStartupMove(state, player);
            case 'ROLLING':
                return { type: 'ROLL_DICE', payload: {} };
            case 'TRADING_BUILDING':
                return this.decideTradingBuildingMove(state, player);
            case 'ROBBER_MOVE':
                return this.decideRobberMove(state, player);
            case 'ROBBER_STEAL':
                return this.decideRobberSteal(state, player);
            // Note: We skip ROBBER_DISCARD for now as the engine hasn't fully implemented the discard action yet!
            default:
                return null;
        }
    }
    // --------------------------------------------------------------------------
    // 2. GEOMETRY & TOPOLOGY MATH (Bridging DeepSeek to HexCoordinates)
    // --------------------------------------------------------------------------
    // Returns the Hex IDs (e.g., "0,0,0") that touch a given intersection
    getAdjacentHexes(state, intersectionId) {
        const int = state.board.intersections.get(intersectionId);
        if (!int)
            return [];
        return int.coords.map(coord => `${coord.q},${coord.r},${coord.s}`);
    }
    // Finds Paths (Edges) connected to an Intersection (Corner)
    getAdjacentPaths(state, intersectionId) {
        const int = state.board.intersections.get(intersectionId);
        if (!int)
            return [];
        const intHexStrings = int.coords.map(c => `${c.q},${c.r},${c.s}`);
        const adjacentPathIds = [];
        // A Path touches an Intersection if BOTH of the Path's hexes are part of the Intersection's hexes
        for (const path of state.board.paths.values()) {
            const pathHexStrings = path.coords.map(c => `${c.q},${c.r},${c.s}`);
            const isAdjacent = pathHexStrings.every(hexStr => intHexStrings.includes(hexStr));
            if (isAdjacent)
                adjacentPathIds.push(path.id);
        }
        return adjacentPathIds;
    }
    // Finds Intersections (Corners) that touch a specific Hex (Tile)
    getAdjacentIntersections(state, hexId) {
        const tile = state.board.tiles.get(hexId);
        if (!tile)
            return [];
        const targetHexStr = `${tile.coord.q},${tile.coord.r},${tile.coord.s}`;
        const adjacentInts = [];
        for (const int of state.board.intersections.values()) {
            const intHexStrings = int.coords.map(c => `${c.q},${c.r},${c.s}`);
            if (intHexStrings.includes(targetHexStr)) {
                adjacentInts.push(int);
            }
        }
        return adjacentInts;
    }
    // --------------------------------------------------------------------------
    // 3. SCORING HEURISTICS (How the Bot evaluates the board)
    // --------------------------------------------------------------------------
    diceProbability(value) {
        if (value === 2 || value === 12)
            return 1 / 36;
        if (value === 3 || value === 11)
            return 2 / 36;
        if (value === 4 || value === 10)
            return 3 / 36;
        if (value === 5 || value === 9)
            return 4 / 36;
        if (value === 6 || value === 8)
            return 5 / 36;
        return 0;
    }
    scoreIntersection(state, intId) {
        const hexes = this.getAdjacentHexes(state, intId);
        let score = 0;
        for (const hexId of hexes) {
            const tile = state.board.tiles.get(hexId);
            if (tile && tile.type !== 'DESERT') {
                score += this.diceProbability(tile.value);
            }
        }
        return score;
    }
    // --------------------------------------------------------------------------
    // 4. ACTION DECISION LOGIC
    // --------------------------------------------------------------------------
    decideStartupMove(state, player) {
        if (state.startupSubPhase === 'SETTLEMENT') {
            const bestInt = this.getBestSettlementNode(state);
            return { type: 'PLACE_INITIAL_SETTLEMENT', payload: { intersectionId: bestInt?.id } };
        }
        else if (state.startupSubPhase === 'ROAD') {
            // Find the settlement we literally JUST placed
            const mySettlements = Array.from(state.board.intersections.values())
                .filter(i => i.building?.playerId === player.id);
            if (mySettlements.length === 0)
                return null;
            const newestSettlement = mySettlements[mySettlements.length - 1];
            const bestPath = this.getBestRoadFromSettlement(state, newestSettlement.id);
            return { type: 'PLACE_INITIAL_ROAD', payload: { pathId: bestPath?.id } };
        }
        return null;
    }
    decideTradingBuildingMove(state, player) {
        const resources = player.resources;
        // 1. Try to build a City (Ore x3, Wheat x2)
        if (resources.ore >= 3 && resources.wheat >= 2) {
            const mySettlements = Array.from(state.board.intersections.values())
                .filter(i => i.building?.playerId === player.id && i.building.type === 'SETTLEMENT');
            if (mySettlements.length > 0) {
                return { type: 'BUILD_CITY', payload: { intersectionId: mySettlements[0].id } };
            }
        }
        // 2. Try to buy a Dev Card (Wheat x1, Ore x1, Sheep x1)
        if (resources.wheat >= 1 && resources.ore >= 1 && resources.sheep >= 1) {
            if (state.devCardDeck.length > 0) {
                return { type: 'BUY_DEV_CARD', payload: {} };
            }
        }
        // 3. Try to build a Settlement (Brick x1, Wood x1, Wheat x1, Sheep x1)
        if (resources.brick >= 1 && resources.wood >= 1 && resources.wheat >= 1 && resources.sheep >= 1) {
            const bestSettlement = this.getBestSettlementNode(state);
            if (bestSettlement) {
                return { type: 'BUILD_SETTLEMENT', payload: { intersectionId: bestSettlement.id } };
            }
        }
        // (Road building logic omitted for brevity; Bot will hoard resources if it can't build a settlement)
        // 4. Nothing else to do, end turn.
        return { type: 'END_TURN', payload: {} };
    }
    decideRobberMove(state, player) {
        let bestHex = null;
        let bestScore = -Infinity;
        for (const [hexId, tile] of state.board.tiles) {
            if (tile.hasRobber || tile.type === 'DESERT')
                continue;
            let score = 0;
            const adjacentIntersections = this.getAdjacentIntersections(state, hexId);
            // Look for enemies to steal from and block their highest producing tiles
            for (const int of adjacentIntersections) {
                if (int.building && int.building.playerId !== player.id) {
                    score += this.diceProbability(tile.value);
                }
            }
            if (score > bestScore) {
                bestScore = score;
                bestHex = hexId;
            }
        }
        return bestHex ? { type: 'MOVE_ROBBER', payload: { hexId: bestHex } } : null;
    }
    decideRobberSteal(state, player) {
        // Pick from the available victims calculated by the Engine
        if (!state.victimsAvailable || state.victimsAvailable.length === 0) {
            return { type: 'END_TURN', payload: {} };
        }
        // Just pick the first available victim for now
        const target = state.victimsAvailable[0];
        return { type: 'STEAL_CARD', payload: { victimId: target } };
    }
    // --------------------------------------------------------------------------
    // 5. PLACEMENT FINDERS
    // --------------------------------------------------------------------------
    getBestSettlementNode(state) {
        let best = null;
        let bestScore = -Infinity;
        for (const [id, int] of state.board.intersections) {
            if (int.building)
                continue; // occupied
            // (Note: A true AI would check the Distance Rule here. Currently, the Engine 
            // will reject the move if it's too close, which might cause the bot to skip its turn if it guesses wrong. 
            // For a V1 Heuristic Bot, this is an acceptable starting point.)
            const score = this.scoreIntersection(state, id);
            if (score > bestScore) {
                bestScore = score;
                best = id;
            }
        }
        return best ? { id: best } : null;
    }
    getBestRoadFromSettlement(state, settlementId) {
        const adjPaths = this.getAdjacentPaths(state, settlementId)
            .map(id => state.board.paths.get(id))
            .filter(p => !p.road); // Only pick empty roads
        if (adjPaths.length === 0)
            return null;
        return { id: adjPaths[0].id };
    }
}
