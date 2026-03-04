import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class AddSeatAction implements Action {
    playerId: string;
    payload: any;
    type: string;
    constructor(playerId: string, payload?: any);
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: undefined;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=AddSeat.d.ts.map