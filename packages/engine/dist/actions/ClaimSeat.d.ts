import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class ClaimSeatAction implements Action {
    playerId: string;
    payload: {
        targetSeatId: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        targetSeatId: string;
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
//# sourceMappingURL=ClaimSeat.d.ts.map