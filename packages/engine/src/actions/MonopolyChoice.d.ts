export declare class MonopolyChoiceAction implements Action {
    playerId: string;
    payload: {
        resourceType: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        resourceType: string;
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: never;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=MonopolyChoice.d.ts.map