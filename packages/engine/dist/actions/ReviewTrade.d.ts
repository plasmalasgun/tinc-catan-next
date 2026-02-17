import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class ReviewTradeAction implements Action {
    playerId: string;
    payload: {
        accept: boolean;
    };
    type: string;
    constructor(playerId: string, payload: {
        accept: boolean;
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: undefined;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=ReviewTrade.d.ts.map