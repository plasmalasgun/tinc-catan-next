import { Action, ActionResponse } from './Action.js';
import { GameState, DevCardType } from '../types/index.js';

export class BuyDevCardAction implements Action {
  type = 'BUY_DEV_CARD';

  constructor(
    public playerId: string,
    public payload: { payloadId: string }
  ) {}

  validate(state: GameState) {
    const player = state.players.find(p => p.id === this.playerId)!;
    if (state.devCardDeck.length === 0) return { valid: false, error: "No cards left in deck" };
    
    // Cost: 1 Wheat, 1 Sheep, 1 Ore
    if (player.resources.wheat < 1 || player.resources.sheep < 1 || player.resources.ore < 1) {
      return { valid: false, error: "Insufficient resources for a Dev Card" };
    }
    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    const player = state.players.find(p => p.id === this.playerId)!;
    
    // Deduct resources
    player.resources.wheat--; player.resources.sheep--; player.resources.ore--;

    // Draw card
    const type = state.devCardDeck.pop()!;
    player.devCards.push({
      id: Math.random().toString(36),
      type,
      boughtTurn: state.turnNumber
    });

    return { success: true, message: "You bought a Development Card!", newState: state };
  }
}