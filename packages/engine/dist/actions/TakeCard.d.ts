import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class TakeCardAction implements Action {
    playerId: string;
    payload: {
        victimId: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        victimId: string;
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
//# sourceMappingURL=TakeCard.d.ts.map