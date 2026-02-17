import { Action, ActionResponse } from './Action.js';
import { GameState, ResourceHand } from '../types/index.js';

export class YearOfPlentyChoiceAction implements Action {
  type = 'YEAR_OF_PLENTY_CHOICE';

  constructor(
    public playerId: string,
    public payload: { resources: Partial<ResourceHand> }
  ) {}

  validate(state: GameState) {
    if (state.phase !== 'YEAR_OF_PLENTY') return { valid: false, error: "Not in Year of Plenty phase." };
    
    // 1. We start our counter at zero
    let totalSelected: number = 0;

    // 2. We get the list of values (e.g., [1, 1, 0, 0, 0])
    const resourceAmounts = Object.values(this.payload.resources);

    // 3. We go through the list one by one
    for (const amount of resourceAmounts) {
      // 4. We check if 'amount' is actually a number 
      if (typeof amount === 'number') {
        // 5. We manually add it to our total
        totalSelected = totalSelected + amount;
      }
    }

    // Now you can use 'totalSelected' to check if it equals 2
    if (totalSelected !== 2) {
      return { valid: false, error: "You must pick exactly 2 resources." };
    }
    
    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    const player = state.players.find(p => p.id === this.playerId)!;
    
    // Add selected resources to hand
    for (const [res, amount] of Object.entries(this.payload.resources)) {
      (player.resources as any)[res] += amount;
    }

    state.phase = 'TRADING_BUILDING'; // Return to normal play
    return { success: true, message: "Resources added to your hand.", newState: state };
  }
}