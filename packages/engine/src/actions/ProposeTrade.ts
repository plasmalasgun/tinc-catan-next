import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';

export class ProposeTradeAction implements Action {
  type = 'PROPOSE_TRADE';

  constructor(
    public playerId: string,
    public payload: { offering: any, requesting: any }
  ) {}

  validate(state: GameState) {
    if (state.phase !== 'TRADING_BUILDING') {
      return { valid: false, error: "You can only trade during your building phase." };
    }
    
    // Check if player actually HAS the resources they are offering
    const player = state.players.find(p => p.id === this.playerId)!;
    for (const res in this.payload.offering) {
      if (player.resources[res] < this.payload.offering[res]) {
        return { valid: false, error: `You don't have enough ${res} to trade.` };
      }
    }

    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    // Create the trade object
    const responses = new Map<string, any>();
    state.players.forEach(p => {
      if (p.id !== this.playerId) responses.set(p.id, 'PENDING');
    });

    state.activeTrade = {
      senderId: this.playerId,
      offering: this.payload.offering,
      requesting: this.payload.requesting,
      responses: responses
    };

    state.phase = 'WAITING_FOR_TRADE';

    return { 
      success: true, 
      message: "Trade proposed to all players.", 
      newState: state 
    };
  }
}