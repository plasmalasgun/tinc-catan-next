import { ActionResponse } from './actions/Action.js';
import { GameState } from './types/index.js';
export declare class ActionProcessor {
    /**
     * Entry-point.  rawAction.playerId is always the caller's SESSION id
     * (e.g. "user_xyz" for a human, "seat_abc" for an agent that passes its
     * own seat id).
     *
     * For game actions we resolve that to the matching SEAT id so every
     * action handler can safely do `players.find(p => p.id === this.playerId)`.
     *
     * For admin actions we leave it as the session id because those handlers
     * compare against `state.hostSessionId`.
     */
    static process(state: GameState, rawAction: any): ActionResponse;
    private static createAction;
}
//# sourceMappingURL=ActionProcessor.d.ts.map