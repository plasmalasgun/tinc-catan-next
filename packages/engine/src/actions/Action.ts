import { GameState } from '../types/index.js';

export interface ActionResponse {
  success: boolean;
  message?: string;
  newState?: GameState;
  followUp?: string; // e.g., "MOVE_ROBBER"
  currentPlayerId?: string;
}

export interface Action {
  type: string;
  playerId: string;
  payload: any;
  
  // Validation: Can this move be made?
  validate(state: GameState): { valid: boolean; error?: string };
  
  // Execution: Update the state
  execute(state: GameState): ActionResponse;
}