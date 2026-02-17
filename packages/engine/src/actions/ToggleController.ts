import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';

export class ToggleControllerAction implements Action {
  
  type = 'TOGGLE_CONTROLLER';

    // We add the constructor so ActionProcessor can pass in the ID and Payload
  constructor(
    public playerId: string,
    public payload: { targetPlayerId: string, controllerType: 'HUMAN' | 'AGENT' }
  ) {}


    // Every action must have a validation step
  validate(state: GameState) {
    const player = state.players.find(p => p.id === this.playerId);
    
    // Rule: Only the Host can change someone else's controller, 
    // OR a player can change their own controller.
    if ( ( !player?.isHost                              ) &&
         ( this.playerId !== this.payload.targetPlayerId)    )
    {
      return { valid: false, error: "You do not have permission to change this controller." };
    }

    return { valid: true };
  }


  execute(state: GameState): ActionResponse {
    const seat = state.players.find(p => p.id === this.payload.targetPlayerId);
    
    if (seat) {
      // Logic: Update the "Driver" type for this "Seat"
      seat.controllerType = this.payload.controllerType;
      
      // Logic: If it's becoming an Agent, we mark it as "Online" 
      // because the computer is now at the wheel.
      if (seat.controllerType === 'AGENT') {
        seat.isOnline = true;
        seat.name = `Bot_${seat.id.substring(seat.id.length - 4)}`;
      }
    }

    return { 
      success: true, 
      message: `Controller for ${this.payload.targetPlayerId} updated to ${this.payload.controllerType}`, 
      newState: state 
    };
  }

}