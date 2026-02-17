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
export class ActionProcessor {
    /**
     * This is the entry point. It receives a command and the current game state.
     */
    static process(state, rawAction) {
        // 1. Identify which action to create
        const action = this.createAction(rawAction);
        if (!action) {
            return { success: false, message: `The game doesn't recognize the command: ${rawAction.type}` };
        }
        // 2. Check if it is the player's turn
        if (state.currentPlayerId !== action.playerId) {
            return { success: false, message: "Wait for your turn!" };
        }
        // 3. Ask the Action to validate itself (Rules check)
        const validation = action.validate(state);
        if (!validation.valid) {
            return { success: false, message: validation.error };
        }
        // 4. If all is well, perform the action and return the result
        return action.execute(state);
    }
    /**
     * This is the "Factory". It matches the text type (e.g. 'ROLL_DICE')
     * to the actual code logic (RollDiceAction).
     */
    static createAction(raw) {
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
            case 'TOGGLE_CONTROLLER':
                return new ToggleControllerAction(playerId, payload);
            default:
                return null;
        }
    }
}
//# sourceMappingURL=ActionProcessor.js.map