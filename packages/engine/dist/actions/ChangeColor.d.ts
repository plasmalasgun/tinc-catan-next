import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class ChangeColorAction implements Action {
    playerId: string;
    payload: {
        targetSeatId: string;
        color: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        targetSeatId: string;
        color: string;
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
//# sourceMappingURL=ChangeColor.d.ts.map