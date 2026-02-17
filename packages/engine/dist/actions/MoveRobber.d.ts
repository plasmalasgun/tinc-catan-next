import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class MoveRobberAction implements Action {
    playerId: string;
    payload: {
        hexId: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        hexId: string;
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: undefined;
    };
    execute(state: GameState): ActionResponse;
    private getTotalCards;
}
//# sourceMappingURL=MoveRobber.d.ts.map