import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';

export class ReviewTradeAction implements Action {
  type = 'REVIEW_TRADE';

  constructor(
    public playerId: string,
    public payload: { accept: boolean }
  ) {}

  validate(state: GameState) {
    if (!state.activeTrade) return { valid: false, error: "No active trade to review." };
    if (this.playerId === state.activeTrade.senderId) {
      return { valid: false, error: "You cannot review your own trade." };
    }
    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    const trade = state.activeTrade!;
    
    // Update the response for this player
    trade.responses.set(this.playerId, this.payload.accept ? 'ACCEPTED' : 'REJECTED');

    return { 
      success: true, 
      message: this.payload.accept ? "You accepted the trade." : "You declined the trade.",
      newState: state 
    };
  }
}