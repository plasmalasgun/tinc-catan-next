import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class ConfigureAgentAction implements Action {
    playerId: string;
    payload: {
        targetPlayerId: string;
        agentType: 'HEURISTIC' | 'LLM' | 'WEBHOOK';
    };
    type: string;
    constructor(playerId: string, // The Root Admin making the change
    payload: {
        targetPlayerId: string;
        agentType: 'HEURISTIC' | 'LLM' | 'WEBHOOK';
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
//# sourceMappingURL=ConfigureAgent.d.ts.map