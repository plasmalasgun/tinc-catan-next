//ActionProcessor.ts

import { Action, ActionResponse } from './actions/Action.js';
import { GameState } from './types/index.js';

import { BuildSettlementAction }        from './actions/BuildSettlement.js';
import { BuyDevCardAction }             from './actions/BuyDevCard.js';
import { ExecuteTradeAction }           from './actions/ExecuteTrade.js';
import { MonopolyChoiceAction }         from './actions/MonopolyChoice.js';
import { MoveRobberAction }             from './actions/MoveRobber.js';
import { PlaceInitialRoadAction }       from './actions/PlaceInitialRoad.js';
import { PlaceInitialSettlementAction } from './actions/PlaceInitialSettlement.js';
import { PlayKnightAction }             from './actions/PlayKnight.js';
import { ProposeTradeAction }           from './actions/ProposeTrade.js';
import { ReviewTradeAction }            from './actions/ReviewTrade.js';
import { RollDiceAction }               from './actions/RollDice.js';
import { TakeCardAction }               from './actions/TakeCard.js';
import { ToggleControllerAction }       from './actions/ToggleController.js';
import { YearOfPlentyChoiceAction }     from './actions/YearOfPlentyChoice.js';
import { StartGameAction }              from './actions/StartGame.js';
import { AddSeatAction }                from './actions/AddSeat.js';
import { RemoveSeatAction }             from './actions/RemoveSeat.js';
import { ConfigureAgentAction }         from './actions/ConfigureAgent.js';
import { ConfigurePlayerAction }        from './actions/ConfigurePlayer.js';
import { ClaimSeatAction }              from './actions/ClaimSeat.js';
import { ChangeColorAction }            from './actions/ChangeColor.js';
import { EndTurnAction }                from './actions/EndTurn.js';

/**
 * Admin / lobby actions that:
 *   1. bypass the "is it your turn?" check, and
 *   2. receive the raw session ID (not the seat ID) so their
 *      hostSessionId checks keep working.
 */
const ADMIN_ACTIONS = new Set([
  'START_GAME',
  'ADD_SEAT',
  'REMOVE_SEAT',
  'TOGGLE_CONTROLLER',
  'CONFIGURE_AGENT',
  'CONFIGURE_PLAYER',
  'CLAIM_SEAT',
  'CHANGE_COLOR',
]);

export class ActionProcessor {
  /**
   * Entry-point.  rawAction.playerId is always the caller's SESSION id
   * (e.g. "user_xyz" for a human, "seat_abc" for an agent that passes its
   * own seat id).
   *
   * For game actions we resolve that to the matching SEAT id so every
   * action handler can safely do `players.find(p => p.id === this.playerId)`.
   *
   * For admin actions we leave it as the session id because those handlers
   * compare against `state.hostSessionId`.
   */
  public static process(state: GameState, rawAction: any): ActionResponse {
    const isAdmin = ADMIN_ACTIONS.has(rawAction.type);

    // ------------------------------------------------------------------
    // RESOLVE: session-id  →  seat-id  (only for game actions)
    // Matches on controllerId first (human: "user_xyz" → seat),
    // then falls back to p.id (bot: already passes its own seat id).
    // ------------------------------------------------------------------
    let resolvedPlayerId = rawAction.playerId;

    if (!isAdmin) {
      const seat = state.players.find(
        p => p.controllerId === rawAction.playerId || p.id === rawAction.playerId,
      );
      if (seat) {
        resolvedPlayerId = seat.id;
      }
    }

    // ------------------------------------------------------------------
    // TURN GUARD (game actions only)
    // ------------------------------------------------------------------
    if (!isAdmin && state.currentPlayerId !== resolvedPlayerId) {
      return {
        success: false,
        message: `Wait for your turn! (current: ${state.currentPlayerId}, you: ${resolvedPlayerId})`,
      };
    }

    // ------------------------------------------------------------------
    // BUILD + VALIDATE + EXECUTE
    // ------------------------------------------------------------------
    const action = this.createAction({ ...rawAction, playerId: resolvedPlayerId });

    if (!action) {
      return { success: false, message: `Unknown command: ${rawAction.type}` };
    }

    const validation = action.validate(state);
    if (!validation.valid) {
      return { success: false, message: validation.error };
    }

    return action.execute(state);
  }

  private static createAction(raw: any): Action | null {
    const { playerId, payload } = raw;

    switch (raw.type) {
      // ── GAME ACTIONS ────────────────────────────────────────────────
      case 'ROLL_DICE':                return new RollDiceAction(playerId, payload);
      case 'END_TURN':                 return new EndTurnAction(playerId, payload);
      case 'BUILD_SETTLEMENT':         return new BuildSettlementAction(playerId, payload);
      case 'MOVE_ROBBER':              return new MoveRobberAction(playerId, payload);
      case 'STEAL_CARD':               return new TakeCardAction(playerId, payload);
      case 'PROPOSE_TRADE':            return new ProposeTradeAction(playerId, payload);
      case 'REVIEW_TRADE':             return new ReviewTradeAction(playerId, payload);
      case 'EXECUTE_TRADE':            return new ExecuteTradeAction(playerId, payload);
      case 'PLACE_INITIAL_SETTLEMENT': return new PlaceInitialSettlementAction(playerId, payload);
      case 'PLACE_INITIAL_ROAD':       return new PlaceInitialRoadAction(playerId, payload);
      case 'PLAY_KNIGHT':              return new PlayKnightAction(playerId, payload);
      case 'MONOPOLY_CHOICE':          return new MonopolyChoiceAction(playerId, payload);
      case 'YEAR_OF_PLENTY_CHOICE':    return new YearOfPlentyChoiceAction(playerId, payload);
      case 'BUY_DEV_CARD':             return new BuyDevCardAction(playerId, payload);
      // ── ADMIN / LOBBY ACTIONS ────────────────────────────────────────
      case 'START_GAME':               return new StartGameAction(playerId, payload);
      case 'ADD_SEAT':                 return new AddSeatAction(playerId, payload);
      case 'REMOVE_SEAT':              return new RemoveSeatAction(playerId, payload);
      case 'CONFIGURE_AGENT':          return new ConfigureAgentAction(playerId, payload);
      case 'CONFIGURE_PLAYER':         return new ConfigurePlayerAction(playerId, payload);
      case 'TOGGLE_CONTROLLER':        return new ToggleControllerAction(playerId, payload);
      case 'CLAIM_SEAT':               return new ClaimSeatAction(playerId, payload);
      case 'CHANGE_COLOR':             return new ChangeColorAction(playerId, payload);
      default:                         return null;
    }
  }
}