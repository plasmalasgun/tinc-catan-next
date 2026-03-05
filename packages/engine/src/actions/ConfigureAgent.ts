import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';

export class ConfigureAgentAction implements Action {
  type = 'CONFIGURE_AGENT';

  constructor(
    public playerId: string, // The Host making the change
    public payload: { targetPlayerId: string; agentType: 'HEURISTIC' | 'LLM' | 'WEBHOOK' }
  ) {}

  validate(state: GameState) {
    const actor = state.players.find(p => p.controllerId === this.playerId);
    
    // Only the Host can change the wiring of a robot
    if (!actor?.isHost) {
      return { valid: false, error: "Only the 👑 Host can configure Agents." };
    }

    const targetSeat = state.players.find(p => p.id === this.payload.targetPlayerId);
    if (targetSeat?.controllerType !== 'AGENT') {
      return { valid: false, error: "You can only configure Brains for Agents." };
    }

    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    const seat = state.players.find(p => p.id === this.payload.targetPlayerId)!;
    
    // Plug in the new Lego Block data
    seat.agentType = this.payload.agentType;

    return { 
      success: true, 
      message: `Agent ${seat.name} is now using the ${this.payload.agentType} Brain.`, 
      newState: state 
    };
  }
}