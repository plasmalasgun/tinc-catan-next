import { Action, ActionResponse } from './Action.js';
import { GameState, ResourceHand } from '../types/index.js';
export declare class YearOfPlentyChoiceAction implements Action {
    playerId: string;
    payload: {
        resources: Partial<ResourceHand>;
    };
    type: string;
    constructor(playerId: string, payload: {
        resources: Partial<ResourceHand>;
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
//# sourceMappingURL=YearOfPlentyChoice.d.ts.map