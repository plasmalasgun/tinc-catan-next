import { Action, ActionResponse } from './actions/Action.js';
import { GameState } from './types/index.js';

// Imports
import { BuildSettlementAction } from './actions/BuildSettlement.js';
import { BuyDevCardAction } from './actions/BuyDevCard.js';
import { ExecuteTradeAction } from './actions/ExecuteTrade.js';
import { MonopolyChoiceAction } from './actions/MonopolyChoice.js';
import { MoveRobberAction } from './actions/MoveRobber.js';
import { PlaceInitialRoadAction } from './actions/PlaceInitialRoad.js';
import { PlaceInitialSettlementAction } from './actions/PlaceInitialSettlement.js';
import { PlayKnightAction } from './actions/PlayKnight.js';
import { ProposeTradeAction } from './actions/ProposeTrade.js';
import { ReviewTradeAction } from './actions/ReviewTrade.js';
import { RollDiceAction } from './actions/RollDice.js';
import { TakeCardAction } from './actions/TakeCard.js';
import { ToggleControllerAction } from './actions/ToggleController.js';
import { YearOfPlentyChoiceAction } from './actions/YearOfPlentyChoice.js';
import { StartGameAction } from './actions/StartGame.js';
import { AddSeatAction } from './actions/AddSeat.js';
import { RemoveSeatAction } from './actions/RemoveSeat.js';


export class ActionProcessor {
  /**
   * This is the entry point. It receives a command and the current game state.
   */
public static process(state: GameState, rawAction: any): ActionResponse {
    const action = this.createAction(rawAction);
    
    if (!action) {
      return { success: false, message: `The game doesn't recognize the command: ${rawAction.type}` };
    }

    // META-ACTIONS: These are lobby/admin commands that bypass the "turn order" rules
    const adminActions =['START_GAME', 'ADD_SEAT', 'REMOVE_SEAT', 'TOGGLE_CONTROLLER'];

    // Check if it is the player's turn (Only applies to in-game actions like rolling or building)
    if (!adminActions.includes(action.type) && state.currentPlayerId !== action.playerId) {
      return { success: false, message: "Wait for your turn!" };
    }

    const validation = action.validate(state);
    if (!validation.valid) {
      return { success: false, message: validation.error };
    }

    return action.execute(state);
  }

  /**
   * This is the "Factory". It matches the text type (e.g. 'ROLL_DICE') 
   * to the actual code logic (RollDiceAction).
   */
  private static createAction(raw: any): Action | null {
    // We pull 'playerId' and 'payload' out of the 'raw' message sent by the player
    const { playerId, payload } = raw;

    switch (raw.type) {
      case 'ROLL_DICE':
        return new RollDiceAction(playerId, payload);
      
      case 'BUILD_SETTLEMENT':
        return new BuildSettlementAction(playerId, payload);
      
      case 'MOVE_ROBBER':
        return new MoveRobberAction(playerId, payload);

      case 'STEAL_CARD':
        return new TakeCardAction(playerId, payload);

      case 'PROPOSE_TRADE':
        return new ProposeTradeAction(playerId, payload);

      case 'REVIEW_TRADE':
        return new ReviewTradeAction(playerId, payload);

      case 'EXECUTE_TRADE':
        return new ExecuteTradeAction(playerId, payload);

      case 'PLACE_INITIAL_SETTLEMENT':
        return new PlaceInitialSettlementAction(playerId, payload);

      case 'PLACE_INITIAL_ROAD':
        return new PlaceInitialRoadAction(playerId, payload);

      case 'PLAY_KNIGHT':
        return new PlayKnightAction(playerId, payload);

      case 'MONOPOLY_CHOICE':
        return new MonopolyChoiceAction(playerId, payload);

      case 'YEAR_OF_PLENTY_CHOICE':
        return new YearOfPlentyChoiceAction(playerId, payload);

      case 'BUY_DEV_CARD':
        return new BuyDevCardAction(playerId, payload);

      // ADMIN COMMANDS
      case 'START_GAME':
        return new StartGameAction(playerId, payload);
      
      case 'ADD_SEAT':
        return new AddSeatAction(playerId, payload);
        
      case 'REMOVE_SEAT':
        return new RemoveSeatAction(playerId, payload);
        
      // FIX: Added the missing switch case!
      case 'TOGGLE_CONTROLLER': 
        return new ToggleControllerAction(playerId, payload);
      
      default:
        return null;
    }
  }
}