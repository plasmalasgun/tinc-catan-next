import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';

export class ToggleControllerAction implements Action {
  type = 'TOGGLE_CONTROLLER';

  constructor(
    public playerId: string,
    public payload: { targetPlayerId: string; controllerType: 'HUMAN' | 'AGENT' | null },
  ) {}

  validate(state: GameState) {
    // Only the Root Admin OR the occupant of a seat may modify it.
    const isRootAdmin = this.playerId === state.hostSessionId;
    const actorSeat   = state.players.find(p => p.controllerId === this.playerId);

    if (!isRootAdmin && actorSeat?.id !== this.payload.targetPlayerId) {
      return { valid: false, error: 'Only the Root Admin can modify other seats.' };
    }

    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    const seat = state.players.find(p => p.id === this.payload.targetPlayerId);

    if (seat) {
      seat.controllerType = this.payload.controllerType;

      if (seat.controllerType === 'AGENT') {
        // Manifest a Bot
        seat.isOnline     = true; // Agents are always "online"
        seat.controllerId = `bot_${seat.id}`;
        seat.name         = `Agent_${seat.id.substring(seat.id.length - 4)}`;
      } else if (seat.controllerType === 'HUMAN') {
        // Open the seat for a network Human to claim
        seat.isOnline     = false; // Waiting for a human to connect
        seat.controllerId = null;
        seat.name         = 'Open_Seat';
      } else {
        // null → Ghost Seat (empty, uncontrolled)
        seat.isOnline     = false;
        seat.controllerId = null;
        seat.name         = 'Empty_Seat';
        // NOTE: We intentionally do NOT touch hostSessionId here.
        // The Crown belongs to the session (GameState.hostSessionId),
        // not to any seat, so emptying a seat never affects admin control.
      }
    }

    return {
      success: true,
      message: `Seat updated to ${this.payload.controllerType ?? 'GHOST'}.`,
      newState: state,
    };
  }
}