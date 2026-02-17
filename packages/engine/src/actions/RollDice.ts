import { Action, ActionResponse } from './Action.js';
import { GameState, ResourceType, Tile, Intersection } from '../types/index.js';

export class RollDiceAction implements Action {
  type = 'ROLL_DICE';

  constructor(
    public playerId: string,
    public payload: { payloadId: string }
  ) {}

  validate(state: GameState) {
    if (state.phase !== 'ROLLING') {
      return { valid: false, error: "Dice have already been rolled this turn." };
    }
    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    // 1. Generate Roll
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    const total = die1 + die2;
    state.diceResult = [die1, die2];

    // 2. Branch Logic
    if (total === 7) {
      return this.handleSevenRoll(state);
    } else {
      return this.distributeResources(state, total);
    }
  }

  private handleSevenRoll(state: GameState): ActionResponse {
    // Check if anyone needs to discard (cards > 7)
    const playersNeedingDiscard = state.players.filter(p => this.getTotalCards(p) > 7);

    if (playersNeedingDiscard.length > 0) {
      state.phase = 'ROBBER_DISCARD';
      return { 
        success: true, 
        message: "7 Rolled! Players must discard half their hand.",
        followUp: 'DROP_CARDS', 
        newState: state 
      };
    }

    state.phase = 'ROBBER_MOVE';
    return { 
      success: true, 
      message: "7 Rolled! Move the robber.",
      followUp: 'MOVE_ROBBER', 
      newState: state 
    };
  }

  private distributeResources(state: GameState, roll: number): ActionResponse {
    // We tell TypeScript: "t" is a "Tile"
    const luckyTiles = Array.from(state.board.tiles.values()).filter(
      (t: Tile) => t.value === roll && !t.hasRobber
    );

    luckyTiles.forEach((tile: Tile) => {
      // We tell TypeScript: "intersection" is an "Intersection"
      const adjacentIntersections = Array.from(state.board.intersections.values()).filter(
        (intersection: Intersection) => intersection.coords.some(c => c.q === tile.coord.q && c.r === tile.coord.r)
      );

      adjacentIntersections.forEach((intersection: Intersection) => {
        if (intersection.building) {
          const player = state.players.find(p => p.id === intersection.building!.playerId);
          if (player) {
            const amount = intersection.building!.type === 'CITY' ? 2 : 1;
            this.addResource(player, tile.type as ResourceType, amount);
          }
        }
      });
    });

    state.phase = 'TRADING_BUILDING';
    return { success: true, message: `Rolled a ${roll}. Resources distributed.`, newState: state };
  }

  private addResource(player: any, type: ResourceType, amount: number) {
    if (type === 'DESERT') return;
    const key = type.toLowerCase() as keyof typeof player.resources;
    player.resources[key] += amount;
  }

  private getTotalCards(player: any): number {
    return Object.values(player.resources).reduce((a: any, b: any) => a + b, 0) as number;
  }
}