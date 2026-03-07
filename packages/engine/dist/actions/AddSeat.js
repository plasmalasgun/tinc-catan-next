export class AddSeatAction {
    playerId;
    payload;
    type = 'ADD_SEAT';
    constructor(playerId, payload = {}) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        // Only the Root Admin (session-level crown) may add seats.
        // They don't need to be seated themselves.
        const isRootAdmin = this.playerId === state.hostSessionId;
        if (!isRootAdmin) {
            return { valid: false, error: 'Only the Root Admin can add seats.' };
        }
        if (state.players.length >= 4) {
            return { valid: false, error: 'Max 4 players.' };
        }
        return { valid: true };
    }
    execute(state) {
        const colors = ['#3498db', '#f1c40f', '#27ae60', '#9b59b6', '#8e44ad'];
        const usedColors = state.players.map(p => p.color);
        const nextColor = colors.find(c => !usedColors.includes(c)) ?? '#ffffff';
        const ghostSeat = {
            id: `seat_${Math.random().toString(36).substr(2, 4)}`,
            name: 'Empty_Seat',
            color: nextColor,
            isHost: false,
            isOnline: false,
            controllerId: null,
            controllerType: null,
            timerEnabled: false,
            turnTimeoutMs: 60_000,
            resources: { brick: 0, wood: 0, wheat: 0, sheep: 0, ore: 0 },
            victoryPoints: 0,
            devCards: [],
            numPlayedKnights: 0,
            numSettlements: 5,
            hasLargestArmy: false,
            hasLongestRoad: false,
        };
        state.players.push(ghostSeat);
        return { success: true, message: 'Seat added.', newState: state };
    }
}
//# sourceMappingURL=AddSeat.js.map