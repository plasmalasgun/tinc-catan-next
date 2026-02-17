import { Action, ActionResponse } from './Action';
import { GameState } from '../types';
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
        error?: never;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=PlaceInitialRoad.d.ts.map