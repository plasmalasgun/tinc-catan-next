export function updateLargestArmy(state) {
    let currentLeader = state.players.find(p => p.hasLargestArmy);
    let maxKnights = currentLeader ? currentLeader.numPlayedKnights : 2; // Threshold is 3
    state.players.forEach(p => {
        if (p.numPlayedKnights > maxKnights) {
            // Clear previous leader
            if (currentLeader) {
                currentLeader.hasLargestArmy = false;
                currentLeader.victoryPoints -= 2;
            }
            // New leader
            p.hasLargestArmy = true;
            p.victoryPoints += 2;
            currentLeader = p;
            maxKnights = p.numPlayedKnights;
        }
    });
}
//# sourceMappingURL=AchievementManager.js.map