import { ActionResponse } from './actions/Action.js';
import { GameState } from './types/index.js';
export declare class ActionProcessor {
    /**
     * This is the entry point. It receives a command and the current game state.
     */
    static process(state: GameState, rawAction: any): ActionResponse;
    /**
     * This is the "Factory". It matches the text type (e.g. 'ROLL_DICE')
     * to the actual code logic (RollDiceAction).
     */
    private static createAction;
}
//# sourceMappingURL=ActionProcessor.d.ts.map