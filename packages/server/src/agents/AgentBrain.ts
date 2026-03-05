import { GameState } from '@tinc/engine';

// This is the shape of the Lego Plug.
// ANY brain we ever create MUST have a decideMove function.
export interface AgentBrain {
  decideMove(state: GameState, myPlayerId: string): any | null;
}