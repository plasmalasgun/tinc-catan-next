import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';

export class EndTurnAction implements Action {
  type = 'END_TURN';

  constructor(public playerId: string, public payload: any = {}) {}

  validate(state: GameState) {
    // END_TURN is valid during the main building phase, or as a timeout escape hatch.
    // We allow it from any phase that isn't mid-startup so the timer can always unstick.
    if (state.phase === 'STARTUP') {
      return { valid: false, error: 'Cannot end turn during startup placement.' };
    }
    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    const currentIndex = state.turnOrder.indexOf(state.currentPlayerId);
    const nextIndex    = (currentIndex + 1) % state.turnOrder.length;

    state.currentPlayerId        = state.turnOrder[nextIndex];
    state.phase                  = 'ROLLING';
    state.playedDevCardThisTurn  = false;
    state.activeTrade            = undefined;
    state.diceResult             = undefined;
    state.victimsAvailable       = [];
    state.turnNumber            += 1;

    return {
      success:  true,
      message:  `Turn ended. It is now ${state.currentPlayerId}'s turn.`,
      newState: state,
    };
  }
}