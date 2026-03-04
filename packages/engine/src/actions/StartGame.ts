import { Action, ActionResponse } from './Action.js';
import { GameState, Player } from '../types/index.js';

export class StartGameAction implements Action {
  type = 'START_GAME';

  constructor(public playerId: string, public payload: any = {}) {}

  validate(state: GameState) {
    const actor = state.players.find(p => p.controllerId === this.playerId);
    if (!actor?.isHost) return { valid: false, error: "Unauthorized." };
    
    // THE NEW RULE: No Ghosts allowed when starting
    const hasGhosts = state.players.some(p => p.controllerType === null);
    if (hasGhosts) {
      return { valid: false, error: "Cannot start: All seats must have a Brain 🧠 or a Robot 🤖." };
    }

    if (state.players.length < 2) return { valid: false, error: "Need at least 2 players." };
    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    // 1. MANIFEST AGENTS: Turn all Ghosts into Robots
    state.players.forEach((seat: Player) => {
      if (seat.controllerType === null) {
        seat.controllerType = 'AGENT';
        seat.controllerId = `bot_${seat.id}`;
        seat.isOnline = true; // Agents are effectively always online
        seat.name = `Agent_${seat.id.split('_')[1]}`; 
      }
    });

    // 2. SET TURN ORDER: 
    // We shuffle the seat IDs to determine who is "Player 1", "Player 2", etc.
    state.turnOrder = state.players.map(p => p.id).sort(() => Math.random() - 0.5);

    // 3. GENERATE SERPENTINE SEQUENCE (Logic from Setup.java:80)
    // Catan setup goes: [1, 2, 3, 4, 4, 3, 2, 1]
    // We store this as a flat array of Seat IDs
    const forward = [...state.turnOrder];
    const backward = [...state.turnOrder].reverse();
    state.setupSequence = [...forward, ...backward]; // Should be length 8 for 4 players
    
    // 4. TRANSITION PHASE
    state.phase = 'STARTUP';
    state.startupIndex = 0; // Start at the first item in the serpentine sequence
    state.currentPlayerId = state.setupSequence[0];

    return { 
      success: true, 
      message: "The game has been manifested. Begin Startup Placements.", 
      newState: state 
    };
    
  }

}