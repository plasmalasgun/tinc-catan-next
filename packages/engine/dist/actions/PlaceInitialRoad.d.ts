import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class PlaceInitialRoadAction implements Action {
    playerId: string;
    payload: {
        pathId: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        pathId: string;
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
//# sourceMappingURL=PlaceInitialRoad.d.ts.map