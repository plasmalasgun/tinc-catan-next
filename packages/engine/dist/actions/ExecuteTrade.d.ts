import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class ExecuteTradeAction implements Action {
    playerId: string;
    payload: {
        partnerId: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        partnerId: string;
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
//# sourceMappingURL=ExecuteTrade.d.ts.map