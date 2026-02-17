import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';

export class ExecuteTradeAction implements Action {
  type = 'EXECUTE_TRADE';

  constructor(
    public playerId: string,
    public payload: { partnerId: string } // The person they chose to trade with
  ) {}

  validate(state: GameState) {
    const trade = state.activeTrade;
    if (!trade) return { valid: false, error: "No active trade." };
    if (trade.responses.get(this.payload.partnerId) !== 'ACCEPTED') {
      return { valid: false, error: "This player has not accepted the trade." };
    }
    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    const trade = state.activeTrade!;
    const sender = state.players.find(p => p.id === trade.senderId)!;
    const partner = state.players.find(p => p.id === this.payload.partnerId)!;

    // Perform the resource swap
    for (const res in trade.offering) {
      sender.resources[res] -= trade.offering[res];
      partner.resources[res] += trade.offering[res];
    }
    for (const res in trade.requesting) {
      sender.resources[res] += trade.requesting[res];
      partner.resources[res] -= trade.requesting[res];
    }

    // Clean up
    state.activeTrade = undefined;
    state.phase = 'TRADING_BUILDING';

    return { success: true, message: "Trade completed successfully!", newState: state };
  }
}