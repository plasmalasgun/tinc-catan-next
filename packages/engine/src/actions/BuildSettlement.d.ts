import { Action, ActionResponse } from './Action';
import { GameState } from '../types';
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
        error?: never;
    };
    execute(state: GameState): ActionResponse;
    private checkDistanceRule;
}
//# sourceMappingURL=BuildSettlement.d.ts.map