import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class RollDiceAction implements Action {
    playerId: string;
    payload: {
        payloadId: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        payloadId: string;
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: undefined;
    };
    execute(state: GameState): ActionResponse;
    private handleSevenRoll;
    private distributeResources;
    private addResource;
    private getTotalCards;
}
//# sourceMappingURL=RollDice.d.ts.map