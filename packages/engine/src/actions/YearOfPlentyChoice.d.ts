import { Action, ActionResponse } from './Action';
import { GameState, ResourceHand } from '../types';
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
        error?: never;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=YearOfPlentyChoice.d.ts.map