import { GameState } from '../types';
export interface ActionResponse {
    success: boolean;
    message?: string;
    newState?: GameState;
    followUp?: string;
}
export interface Action {
    type: string;
    playerId: string;
    payload: any;
    validate(state: GameState): {
        valid: boolean;
        error?: string;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=Action.d.ts.map