import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class MonopolyChoiceAction implements Action {
    playerId: string;
    payload: {
        resourceType: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        resourceType: string;
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
//# sourceMappingURL=MonopolyChoice.d.ts.map