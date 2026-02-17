import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class BuildSettlementAction implements Action {
    playerId: string;
    payload: {
        intersectionId: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        intersectionId: string;
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: undefined;
    };
    execute(state: GameState): ActionResponse;
    private checkDistanceRule;
}
//# sourceMappingURL=BuildSettlement.d.ts.map