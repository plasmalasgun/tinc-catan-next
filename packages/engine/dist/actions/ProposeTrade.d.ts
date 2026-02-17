import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class ProposeTradeAction implements Action {
    playerId: string;
    payload: {
        offering: any;
        requesting: any;
    };
    type: string;
    constructor(playerId: string, payload: {
        offering: any;
        requesting: any;
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
//# sourceMappingURL=ProposeTrade.d.ts.map