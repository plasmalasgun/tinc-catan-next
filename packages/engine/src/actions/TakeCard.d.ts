import { Action, ActionResponse } from './Action';
import { GameState } from '../types';
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
        error?: never;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=TakeCard.d.ts.map