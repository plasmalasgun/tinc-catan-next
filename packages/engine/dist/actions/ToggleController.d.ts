import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class ToggleControllerAction implements Action {
    playerId: string;
    payload: {
        targetPlayerId: string;
        controllerType: 'HUMAN' | 'AGENT';
    };
    type: string;
    constructor(playerId: string, payload: {
        targetPlayerId: string;
        controllerType: 'HUMAN' | 'AGENT';
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
//# sourceMappingURL=ToggleController.d.ts.map