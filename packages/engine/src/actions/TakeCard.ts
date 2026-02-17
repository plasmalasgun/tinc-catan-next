import { Action, ActionResponse } from './Action.js';
import { GameState, ResourceType } from '../types/index.js';

export class TakeCardAction implements Action {
  type = 'STEAL_CARD';

  constructor(
    public playerId: string,
    public payload: { victimId: string }
  ) {}

  validate(state: GameState) {
    if (state.phase !== 'ROBBER_STEAL') {
      return { valid: false, error: "Not the time to steal a card." };
    }
    if (!state.victimsAvailable.includes(this.payload.victimId)) {
      return { valid: false, error: "That player is not at the robber's location." };
    }
    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    const thief = state.players.find(p => p.id === this.playerId)!;
    const victim = state.players.find(p => p.id === this.payload.victimId)!;

    // 1. Pick a random resource from the victim
    const resources = victim.resources;
    const availableTypes = (Object.keys(resources) as Array<keyof typeof resources>).filter(
      type => resources[type] > 0
    );

    if (availableTypes.length === 0) {
       state.phase = 'TRADING_BUILDING';
       return { success: true, message: "Victim has no cards.", newState: state };
    }

    const randomType = availableTypes[Math.floor(Math.random() * availableTypes.length)];

    // 2. Transfer
    victim.resources[randomType]--;
    thief.resources[randomType]++;

    // 3. Clean up
    state.victimsAvailable = [];
    state.phase = 'TRADING_BUILDING';

    return { 
      success: true, 
      message: `You stole 1 ${String(randomType)} from ${victim.id}`, 
      newState: state 
    };
  }
}