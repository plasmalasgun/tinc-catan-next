import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
/**
 * CONFIGURE_PLAYER
 * Admin-only action.  Sets per-seat timer configuration.
 *
 * Payload:
 *   targetSeatId    — the seat (Player.id) to configure
 *   timerEnabled?   — boolean; whether the turn-skip timer fires for this seat
 *   turnTimeoutMs?  — number;  milliseconds before auto-skip (min 5 000)
 */
export declare class ConfigurePlayerAction implements Action {
    playerId: string;
    payload: {
        targetSeatId: string;
        timerEnabled?: boolean;
        turnTimeoutMs?: number;
    };
    type: string;
    constructor(playerId: string, payload: {
        targetSeatId: string;
        timerEnabled?: boolean;
        turnTimeoutMs?: number;
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
//# sourceMappingURL=ConfigurePlayer.d.ts.map