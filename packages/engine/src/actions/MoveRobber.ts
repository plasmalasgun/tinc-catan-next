import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';

export class MoveRobberAction implements Action {
  type = 'MOVE_ROBBER';

  constructor(
    public playerId: string, 
    public payload: { hexId: string } // The string coordinate e.g. "0,1,-1"
  ) {}

  validate(state: GameState) {
    if (state.phase !== 'ROBBER_MOVE') {
      return { valid: false, error: "Not the time to move the robber." };
    }
    if (state.robberTileId === this.payload.hexId) {
      return { valid: false, error: "You must move the robber to a DIFFERENT tile." };
    }
    if (!state.board.tiles.has(this.payload.hexId)) {
      return { valid: false, error: "Target tile does not exist." };
    }
    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    // 1. Move the Robber
    state.robberTileId = this.payload.hexId;

    // 2. Identify Potential Victims
    // Find intersections adjacent to this hex that have buildings NOT owned by the current player
    const victims = new Set<string>();
    const hexCoord = state.board.tiles.get(this.payload.hexId)!.coord;

    for (const intersection of state.board.intersections.values()) {
      const isAdjacent = intersection.coords.some(c => c.q === hexCoord.q && c.r === hexCoord.r);
      if (isAdjacent && intersection.building && intersection.building.playerId !== this.playerId) {
        // Only players with cards can be stolen from
        const victimPlayer = state.players.find(p => p.id === intersection.building!.playerId);
        if (this.getTotalCards(victimPlayer) > 0) {
          victims.add(intersection.building.playerId);
        }
      }
    }

    state.victimsAvailable = Array.from(victims);

    // 3. Branching Logic
    if (state.victimsAvailable.length === 0) {
      state.phase = 'TRADING_BUILDING';
      return { success: true, message: "No victims available. Move to building phase.", newState: state };
    } 
    
    if (state.victimsAvailable.length === 1) {
       // Logic optimization: If only one victim, we could auto-steal, 
       // but for an Agent API, it's better to be explicit.
       state.phase = 'ROBBER_STEAL';
       return { success: true, message: "Choose a player to steal from.", followUp: 'STEAL_CARD', newState: state };
    }

    state.phase = 'ROBBER_STEAL';
    return { success: true, message: "Multiple victims available. Choose one.", followUp: 'STEAL_CARD', newState: state };
  }

  private getTotalCards(player: any): number {
    return Object.values(player.resources).reduce((a: any, b: any) => a + b, 0) as number;
  }
}