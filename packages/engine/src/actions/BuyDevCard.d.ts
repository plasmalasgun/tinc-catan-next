import { Action, ActionResponse } from './Action';
import { GameState } from '../types';
export declare class BuyDevCardAction implements Action {
    playerId: string;
    type: string;
    constructor(playerId: string);
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: never;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=BuyDevCard.d.ts.map