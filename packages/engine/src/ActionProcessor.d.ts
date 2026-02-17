import { ActionResponse } from './actions/Action';
import { GameState } from './types';
export declare class ActionProcessor {
    /**
     * This is the entry point for both Agents and the GUI.
     */
    static process(state: GameState, rawAction: any): ActionResponse;
    private static createAction;
}
//# sourceMappingURL=ActionProcessor.d.ts.map