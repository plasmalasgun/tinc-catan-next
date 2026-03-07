import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';

export class ChangeColorAction implements Action {
  type = 'CHANGE_COLOR';

  constructor(
    public playerId: string,
    public payload: { targetSeatId: string; color: string },
  ) {}

  validate(state: GameState) {
    const isRootAdmin  = this.playerId === state.hostSessionId;
    const actorSeat    = state.players.find(p => p.controllerId === this.playerId);
    const isColorTaken = state.players.some(p => p.color === this.payload.color);

    if (isColorTaken) return { valid: false, error: 'Color is already in use.' };

    // Root Admin can change any seat's color; others can only change their own.
    if (!isRootAdmin && actorSeat?.id !== this.payload.targetSeatId) {
      return { valid: false, error: 'You can only change your own color.' };
    }

    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    const seat = state.players.find(p => p.id === this.payload.targetSeatId)!;
    seat.color = this.payload.color;
    return { success: true, newState: state };
  }
}