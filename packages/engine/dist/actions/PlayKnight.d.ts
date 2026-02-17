import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class PlayKnightAction implements Action {
    playerId: string;
    payload: {
        cardId: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        cardId: string;
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
//# sourceMappingURL=PlayKnight.d.ts.map