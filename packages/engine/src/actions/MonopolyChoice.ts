import { Action, ActionResponse } from './Action.js';
import { GameState, ResourceHand } from '../types/index.js';

export class MonopolyChoiceAction implements Action {
  type = 'MONOPOLY_CHOICE';

  constructor(
    public playerId: string,
    public payload: { resourceType: string }
  ) {}

  validate(state: GameState) {
    if (state.phase !== 'MONOPOLY') return { valid: false, error: "Not in Monopoly phase." };
    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    const thief = state.players.find(p => p.id === this.playerId)!;
    const resType = this.payload.resourceType as keyof ResourceHand;
    let totalStolen = 0;

    state.players.forEach(victim => {
      if (victim.id !== this.playerId) {
        totalStolen += victim.resources[resType];
        victim.resources[resType] = 0;
      }
    });

    thief.resources[resType] += totalStolen;
    state.phase = 'TRADING_BUILDING';

    return { 
      success: true, 
      message: `Monopoly! You stole ${totalStolen} ${String(resType)} from other players.`, 
      newState: state 
    };
  }
}