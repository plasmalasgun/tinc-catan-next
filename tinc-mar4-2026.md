This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
packages/
  client/
    .vscode/
      extensions.json
    public/
      vite.svg
    src/
      assets/
        vue.svg
      components/
        GameBoard/
          Board.vue
          Intersection.vue
          Path.vue
          Tile.vue
        HUD/
          DevCardHand.vue
          ResourceHud.vue
        Modals/
          ChoiceModal.vue
          TradeModal.vue
        Sidebar/
          ActionMenu.vue
          CommandConsole.vue
          PlayerCard.vue
          PlayerList.vue
        HelloWorld.vue
      stores/
        gameStore.ts
      utils/
        constants.ts
        layout.ts
      App.vue
      main.ts
      style.css
    .gitignore
    index.html
    package.json
    README.md
    tsconfig.app.json
    tsconfig.json
    tsconfig.node.json
    vite.config.ts
  engine/
    dist/
      actions/
        Action.d.ts
        Action.d.ts.map
        Action.js
        Action.js.map
        AddSeat.d.ts
        AddSeat.d.ts.map
        AddSeat.js
        AddSeat.js.map
        BuildSettlement.d.ts
        BuildSettlement.d.ts.map
        BuildSettlement.js
        BuildSettlement.js.map
        BuyDevCard.d.ts
        BuyDevCard.d.ts.map
        BuyDevCard.js
        BuyDevCard.js.map
        ExecuteTrade.d.ts
        ExecuteTrade.d.ts.map
        ExecuteTrade.js
        ExecuteTrade.js.map
        MonopolyChoice.d.ts
        MonopolyChoice.d.ts.map
        MonopolyChoice.js
        MonopolyChoice.js.map
        MoveRobber.d.ts
        MoveRobber.d.ts.map
        MoveRobber.js
        MoveRobber.js.map
        PlaceInitialRoad.d.ts
        PlaceInitialRoad.d.ts.map
        PlaceInitialRoad.js
        PlaceInitialRoad.js.map
        PlaceInitialSettlement.d.ts
        PlaceInitialSettlement.d.ts.map
        PlaceInitialSettlement.js
        PlaceInitialSettlement.js.map
        PlayKnight.d.ts
        PlayKnight.d.ts.map
        PlayKnight.js
        PlayKnight.js.map
        ProposeTrade.d.ts
        ProposeTrade.d.ts.map
        ProposeTrade.js
        ProposeTrade.js.map
        RemoveSeat.d.ts
        RemoveSeat.d.ts.map
        RemoveSeat.js
        RemoveSeat.js.map
        ReviewTrade.d.ts
        ReviewTrade.d.ts.map
        ReviewTrade.js
        ReviewTrade.js.map
        RollDice.d.ts
        RollDice.d.ts.map
        RollDice.js
        RollDice.js.map
        StartGame.d.ts
        StartGame.d.ts.map
        StartGame.js
        StartGame.js.map
        TakeCard.d.ts
        TakeCard.d.ts.map
        TakeCard.js
        TakeCard.js.map
        ToggleController.d.ts
        ToggleController.d.ts.map
        ToggleController.js
        ToggleController.js.map
        YearOfPlentyChoice.d.ts
        YearOfPlentyChoice.d.ts.map
        YearOfPlentyChoice.js
        YearOfPlentyChoice.js.map
      core/
        AchievementManager.d.ts
        AchievementManager.d.ts.map
        AchievementManager.js
        AchievementManager.js.map
        Board.d.ts
        Board.d.ts.map
        Board.js
        Board.js.map
        HexCoordinate.d.ts
        HexCoordinate.d.ts.map
        HexCoordinate.js
        HexCoordinate.js.map
        Topology.d.ts
        Topology.d.ts.map
        Topology.js
        Topology.js.map
      layouts/
        LayoutFactory.d.ts
        LayoutFactory.d.ts.map
        LayoutFactory.js
        LayoutFactory.js.map
      types/
        index.d.ts
        index.d.ts.map
        index.js
        index.js.map
      ActionProcessor.d.ts
      ActionProcessor.d.ts.map
      ActionProcessor.js
      ActionProcessor.js.map
      coordinates.d.ts
      coordinates.d.ts.map
      coordinates.js
      coordinates.js.map
      index.d.ts
      index.d.ts.map
      index.js
      index.js.map
    src/
      actions/
        Action.d.ts
        Action.ts
        AddSeat.ts
        BuildSettlement.d.ts
        BuildSettlement.ts
        BuyDevCard.d.ts
        BuyDevCard.ts
        ExecuteTrade.d.ts
        ExecuteTrade.ts
        MonopolyChoice.d.ts
        MonopolyChoice.ts
        MoveRobber.d.ts
        MoveRobber.ts
        PlaceInitialRoad.d.ts
        PlaceInitialRoad.ts
        PlaceInitialSettlement.d.ts
        PlaceInitialSettlement.ts
        PlayKnight.d.ts
        PlayKnight.ts
        ProposeTrade.d.ts
        ProposeTrade.ts
        RemoveSeat.ts
        ReviewTrade.d.ts
        ReviewTrade.ts
        RollDice.d.ts
        RollDice.ts
        StartGame.ts
        TakeCard.d.ts
        TakeCard.ts
        ToggleController.ts
        YearOfPlentyChoice.d.ts
        YearOfPlentyChoice.ts
      core/
        AchievementManager.d.ts
        AchievementManager.ts
        Board.d.ts
        Board.ts
        HexCoordinate.d.ts
        HexCoordinate.ts
        Topology.d.ts
        Topology.ts
      layouts/
        LayoutFactory.d.ts
        LayoutFactory.ts
      types/
        index.ts
      ActionProcessor.d.ts
      ActionProcessor.ts
      coordinates.d.ts
      coordinates.ts
      index.d.ts
      index.ts
    package.json
    tsconfig.json
  server/
    dist/
      GameManager.js
      index.js
    src/
      GameManager.ts
      index.ts
    package.json
    tsconfig.json
package.json
```

# Files

## File: packages/engine/dist/actions/AddSeat.d.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class AddSeatAction implements Action {
    playerId: string;
    payload: any;
    type: string;
    constructor(playerId: string, payload?: any);
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: undefined;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=AddSeat.d.ts.map
```

## File: packages/engine/dist/actions/AddSeat.d.ts.map
```
{"version":3,"file":"AddSeat.d.ts","sourceRoot":"","sources":["../../src/actions/AddSeat.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,MAAM,EAAE,cAAc,EAAE,MAAM,aAAa,CAAC;AACrD,OAAO,EAAE,SAAS,EAAU,MAAM,mBAAmB,CAAC;AAEtD,qBAAa,aAAc,YAAW,MAAM;IAEvB,QAAQ,EAAE,MAAM;IAAS,OAAO,EAAE,GAAG;IADxD,IAAI,SAAc;gBACC,QAAQ,EAAE,MAAM,EAAS,OAAO,GAAE,GAAQ;IAE7D,QAAQ,CAAC,KAAK,EAAE,SAAS;;;;;;;IAOzB,OAAO,CAAC,KAAK,EAAE,SAAS,GAAG,cAAc;CAyB1C"}
```

## File: packages/engine/dist/actions/AddSeat.js
```javascript
export class AddSeatAction {
    playerId;
    payload;
    type = 'ADD_SEAT';
    constructor(playerId, payload = {}) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        const actor = state.players.find(p => p.controllerId === this.playerId);
        if (!actor?.isHost)
            return { valid: false, error: "Only the Host can add seats." };
        if (state.players.length >= 4)
            return { valid: false, error: "Max 4 players." };
        return { valid: true };
    }
    execute(state) {
        const colors = ["#3498db", "#f1c40f", "#27ae60", "#9b59b6", "#8e44ad"];
        const usedColors = state.players.map(p => p.color);
        const nextColor = colors.find(c => !usedColors.includes(c)) || "#ffffff";
        const ghostSeat = {
            id: `seat_${Math.random().toString(36).substr(2, 4)}`,
            name: "Empty_Seat",
            color: nextColor,
            isHost: false,
            isOnline: false,
            controllerId: null,
            controllerType: null, // 👻
            resources: { brick: 0, wood: 0, wheat: 0, sheep: 0, ore: 0 },
            victoryPoints: 0,
            devCards: [],
            numPlayedKnights: 0,
            numSettlements: 5,
            hasLargestArmy: false,
            hasLongestRoad: false
        };
        state.players.push(ghostSeat);
        return { success: true, message: "Seat added.", newState: state };
    }
}
//# sourceMappingURL=AddSeat.js.map
```

## File: packages/engine/dist/actions/AddSeat.js.map
```
{"version":3,"file":"AddSeat.js","sourceRoot":"","sources":["../../src/actions/AddSeat.ts"],"names":[],"mappings":"AAGA,MAAM,OAAO,aAAa;IAEL;IAAyB;IAD5C,IAAI,GAAG,UAAU,CAAC;IAClB,YAAmB,QAAgB,EAAS,UAAe,EAAE;QAA1C,aAAQ,GAAR,QAAQ,CAAQ;QAAS,YAAO,GAAP,OAAO,CAAU;IAAG,CAAC;IAEjE,QAAQ,CAAC,KAAgB;QACvB,MAAM,KAAK,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,YAAY,KAAK,IAAI,CAAC,QAAQ,CAAC,CAAC;QACxE,IAAI,CAAC,KAAK,EAAE,MAAM;YAAE,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,8BAA8B,EAAE,CAAC;QACnF,IAAI,KAAK,CAAC,OAAO,CAAC,MAAM,IAAI,CAAC;YAAE,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,gBAAgB,EAAE,CAAC;QAChF,OAAO,EAAE,KAAK,EAAE,IAAI,EAAE,CAAC;IACzB,CAAC;IAED,OAAO,CAAC,KAAgB;QACtB,MAAM,MAAM,GAAG,CAAC,SAAS,EAAE,SAAS,EAAE,SAAS,EAAE,SAAS,EAAE,SAAS,CAAC,CAAC;QACvE,MAAM,UAAU,GAAG,KAAK,CAAC,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC;QACnD,MAAM,SAAS,GAAG,MAAM,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,UAAU,CAAC,QAAQ,CAAC,CAAC,CAAC,CAAC,IAAI,SAAS,CAAC;QAEzE,MAAM,SAAS,GAAW;YACxB,EAAE,EAAE,QAAQ,IAAI,CAAC,MAAM,EAAE,CAAC,QAAQ,CAAC,EAAE,CAAC,CAAC,MAAM,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE;YACrD,IAAI,EAAE,YAAY;YAClB,KAAK,EAAE,SAAS;YAChB,MAAM,EAAE,KAAK;YACb,QAAQ,EAAE,KAAK;YACf,YAAY,EAAE,IAAI;YAClB,cAAc,EAAE,IAAI,EAAE,KAAK;YAC3B,SAAS,EAAE,EAAE,KAAK,EAAE,CAAC,EAAE,IAAI,EAAE,CAAC,EAAE,KAAK,EAAE,CAAC,EAAE,KAAK,EAAE,CAAC,EAAE,GAAG,EAAE,CAAC,EAAE;YAC5D,aAAa,EAAE,CAAC;YAChB,QAAQ,EAAE,EAAE;YACZ,gBAAgB,EAAE,CAAC;YACnB,cAAc,EAAE,CAAC;YACjB,cAAc,EAAE,KAAK;YACrB,cAAc,EAAE,KAAK;SACtB,CAAC;QAEF,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,SAAS,CAAC,CAAC;QAC9B,OAAO,EAAE,OAAO,EAAE,IAAI,EAAE,OAAO,EAAE,aAAa,EAAE,QAAQ,EAAE,KAAK,EAAE,CAAC;IACpE,CAAC;CACF"}
```

## File: packages/engine/dist/actions/RemoveSeat.d.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class RemoveSeatAction implements Action {
    playerId: string;
    payload: {
        targetSeatId: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        targetSeatId: string;
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: undefined;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=RemoveSeat.d.ts.map
```

## File: packages/engine/dist/actions/RemoveSeat.d.ts.map
```
{"version":3,"file":"RemoveSeat.d.ts","sourceRoot":"","sources":["../../src/actions/RemoveSeat.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,MAAM,EAAE,cAAc,EAAE,MAAM,aAAa,CAAC;AACrD,OAAO,EAAE,SAAS,EAAE,MAAM,mBAAmB,CAAC;AAE9C,qBAAa,gBAAiB,YAAW,MAAM;IAE1B,QAAQ,EAAE,MAAM;IAAS,OAAO,EAAE;QAAE,YAAY,EAAE,MAAM,CAAA;KAAE;IAD7E,IAAI,SAAiB;gBACF,QAAQ,EAAE,MAAM,EAAS,OAAO,EAAE;QAAE,YAAY,EAAE,MAAM,CAAA;KAAE;IAE7E,QAAQ,CAAC,KAAK,EAAE,SAAS;;;;;;;IAQzB,OAAO,CAAC,KAAK,EAAE,SAAS,GAAG,cAAc;CAI1C"}
```

## File: packages/engine/dist/actions/RemoveSeat.js
```javascript
export class RemoveSeatAction {
    playerId;
    payload;
    type = 'REMOVE_SEAT';
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        const actor = state.players.find(p => p.controllerId === this.playerId);
        if (!actor?.isHost)
            return { valid: false, error: "Only the Host can remove seats." };
        const target = state.players.find(p => p.id === this.payload.targetSeatId);
        if (target?.controllerType === 'HUMAN' && target.isOnline)
            return { valid: false, error: "Cannot remove a connected human." };
        return { valid: true };
    }
    execute(state) {
        state.players = state.players.filter(p => p.id !== this.payload.targetSeatId);
        return { success: true, message: "Seat removed.", newState: state };
    }
}
//# sourceMappingURL=RemoveSeat.js.map
```

## File: packages/engine/dist/actions/RemoveSeat.js.map
```
{"version":3,"file":"RemoveSeat.js","sourceRoot":"","sources":["../../src/actions/RemoveSeat.ts"],"names":[],"mappings":"AAGA,MAAM,OAAO,gBAAgB;IAER;IAAyB;IAD5C,IAAI,GAAG,aAAa,CAAC;IACrB,YAAmB,QAAgB,EAAS,OAAiC;QAA1D,aAAQ,GAAR,QAAQ,CAAQ;QAAS,YAAO,GAAP,OAAO,CAA0B;IAAG,CAAC;IAEjF,QAAQ,CAAC,KAAgB;QACvB,MAAM,KAAK,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,YAAY,KAAK,IAAI,CAAC,QAAQ,CAAC,CAAC;QACxE,IAAI,CAAC,KAAK,EAAE,MAAM;YAAE,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,iCAAiC,EAAE,CAAC;QACtF,MAAM,MAAM,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,IAAI,CAAC,OAAO,CAAC,YAAY,CAAC,CAAC;QAC3E,IAAI,MAAM,EAAE,cAAc,KAAK,OAAO,IAAI,MAAM,CAAC,QAAQ;YAAE,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,kCAAkC,EAAE,CAAC;QAC9H,OAAO,EAAE,KAAK,EAAE,IAAI,EAAE,CAAC;IACzB,CAAC;IAED,OAAO,CAAC,KAAgB;QACtB,KAAK,CAAC,OAAO,GAAG,KAAK,CAAC,OAAO,CAAC,MAAM,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,IAAI,CAAC,OAAO,CAAC,YAAY,CAAC,CAAC;QAC9E,OAAO,EAAE,OAAO,EAAE,IAAI,EAAE,OAAO,EAAE,eAAe,EAAE,QAAQ,EAAE,KAAK,EAAE,CAAC;IACtE,CAAC;CACF"}
```

## File: packages/engine/src/actions/AddSeat.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState, Player } from '../types/index.js';

export class AddSeatAction implements Action {
  type = 'ADD_SEAT';
  constructor(public playerId: string, public payload: any = {}) {}

  validate(state: GameState) {
    const actor = state.players.find(p => p.controllerId === this.playerId);
    if (!actor?.isHost) return { valid: false, error: "Only the Host can add seats." };
    if (state.players.length >= 4) return { valid: false, error: "Max 4 players." };
    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    const colors = ["#3498db", "#f1c40f", "#27ae60", "#9b59b6", "#8e44ad"];
    const usedColors = state.players.map(p => p.color);
    const nextColor = colors.find(c => !usedColors.includes(c)) || "#ffffff";

    const ghostSeat: Player = {
      id: `seat_${Math.random().toString(36).substr(2, 4)}`,
      name: "Empty_Seat",
      color: nextColor,
      isHost: false,
      isOnline: false,
      controllerId: null,
      controllerType: null, // 👻
      resources: { brick: 0, wood: 0, wheat: 0, sheep: 0, ore: 0 },
      victoryPoints: 0,
      devCards: [],
      numPlayedKnights: 0,
      numSettlements: 5,
      hasLargestArmy: false,
      hasLongestRoad: false
    };

    state.players.push(ghostSeat);
    return { success: true, message: "Seat added.", newState: state };
  }
}
```

## File: packages/engine/src/actions/RemoveSeat.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';

export class RemoveSeatAction implements Action {
  type = 'REMOVE_SEAT';
  constructor(public playerId: string, public payload: { targetSeatId: string }) {}

  validate(state: GameState) {
    const actor = state.players.find(p => p.controllerId === this.playerId);
    if (!actor?.isHost) return { valid: false, error: "Only the Host can remove seats." };
    const target = state.players.find(p => p.id === this.payload.targetSeatId);
    if (target?.controllerType === 'HUMAN' && target.isOnline) return { valid: false, error: "Cannot remove a connected human." };
    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    state.players = state.players.filter(p => p.id !== this.payload.targetSeatId);
    return { success: true, message: "Seat removed.", newState: state };
  }
}
```

## File: packages/client/.vscode/extensions.json
```json
{
  "recommendations": ["Vue.volar"]
}
```

## File: packages/client/public/vite.svg
```xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
```

## File: packages/client/src/assets/vue.svg
```xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="37.07" height="36" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 198"><path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"></path><path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"></path><path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"></path></svg>
```

## File: packages/client/src/components/GameBoard/Board.vue
```vue
<script setup lang="ts">
  import Tile from './Tile.vue';
  import Intersection from './Intersection.vue';
  import Path from './Path.vue';
  import { useGameStore } from '../../stores/gameStore';

  const gameStore = useGameStore();

  const handleIntersectionClick = (id: string) => {
    // Logic: determine action based on phase
    const actionType = gameStore.state.phase === 'STARTUP' 
      ? 'PLACE_INITIAL_SETTLEMENT' 
      : 'BUILD_SETTLEMENT';
      
    gameStore.performAction(actionType, { intersectionId: id });
  };

  const handlePathClick = (id: string) => {
    const actionType = gameStore.state.phase === 'STARTUP' 
      ? 'PLACE_INITIAL_ROAD' 
      : 'BUILD_ROAD';
      
    gameStore.performAction(actionType, { pathId: id });
  };
</script>

<template>
  <div class="board-container">
    <svg viewBox="-400 -400 800 800" preserveAspectRatio="xMidYMid meet">
      <!-- 1. Render Tiles First (Bottom Layer) -->
      <Tile 
        v-for="tile in gameStore.state.board.tiles" 
        :key="tile.id" 
        v-bind="tile" 
      />

      <!-- 2. Render Paths (Middle Layer) -->
      <Path 
        v-for="path in gameStore.state.board.paths" 
        :key="path.id" 
        v-bind="path"
        @click="handlePathClick"
      />

      <!-- 3. Render Intersections (Top Layer) -->
      <Intersection 
        v-for="int in gameStore.state.board.intersections" 
        :key="int.id" 
        v-bind="int"
        :canBuild="gameStore.state.phase === 'STARTUP'"
        @click="handleIntersectionClick"
      />
    </svg>
  </div>
</template>

<style scoped>
.board-container {
  width: 100%;
  height: 100vh;
  background: #2980b9; /* Sea color */
}
svg { width: 100%; height: 100%; }
</style>
```

## File: packages/client/src/components/GameBoard/Intersection.vue
```vue
<script setup lang="ts">
  import { computed } from 'vue';
  import { getAveragePixelCoords } from '../../utils/layout';

  const props = defineProps<{
    id: string;
    coords: {q: number, r: number}[];
    building?: { type: string, playerId: string };
    canBuild?: boolean;
  }>();

  const emit = defineEmits(['click']);

  const pos = computed(() => getAveragePixelCoords(props.coords));

  const color = computed(() => {
    if (!props.building) return 'transparent';
    return props.building.playerId === 'p1' ? '#e74c3c' : '#3498db'; // Red vs Blue
  });
</script>

<template>
  <g :transform="`translate(${pos.x}, ${pos.y})`" 
     @click="emit('click', props.id)"
     class="intersection-node">
    
    <!-- Invisible Hitbox for clicking -->
    <circle r="12" fill="transparent" class="hitbox" />
    
    <!-- The Actual Building -->
    <rect v-if="building?.type === 'SETTLEMENT'" 
          x="-6" y="-6" width="12" height="12" :fill="color" stroke="white" />
    
    <circle v-else-if="building?.type === 'CITY'" 
            r="8" :fill="color" stroke="white" />

    <!-- Ghost indicator for building placement -->
    <circle v-else-if="canBuild" 
            r="6" fill="rgba(255,255,255,0.5)" class="ghost" />
  </g>
</template>

<style scoped>
  .intersection-node { cursor: pointer; }
  .hitbox:hover + .ghost { fill: rgba(255,255,255,0.8); }
</style>
```

## File: packages/client/src/components/GameBoard/Path.vue
```vue
<script setup lang="ts">
import { computed } from 'vue';
import { getAveragePixelCoords } from '../../utils/layout';

const props = defineProps<{
  id: string;
  coords: {q: number, r: number}[];
  road?: { playerId: string };
}>();

const emit = defineEmits(['click']);

// For a path (edge), we need the midpoint to rotate a line, 
// but it's easier to just draw a line between the two intersections.
// For now, we'll use a simple circle/indicator at the midpoint.
const pos = computed(() => getAveragePixelCoords(props.coords));
</script>

<template>
  <g :transform="`translate(${pos.x}, ${pos.y})`" 
     @click="emit('click', props.id)"
     class="path-node">
    
    <rect v-if="road" 
          x="-10" y="-3" width="20" height="6" 
          :fill="road.playerId === 'p1' ? '#e74c3c' : '#3498db'" />
    
    <circle v-else r="4" fill="rgba(255,255,255,0.2)" class="hitbox" />
  </g>
</template>
```

## File: packages/client/src/components/GameBoard/Tile.vue
```vue
<script setup lang="ts">
import { computed } from 'vue';
import { getPixelCoords, getHexPoints } from '../../utils/layout';

const props = defineProps<{
  coord: Object, // The hex object {q, r, s}
  type: String,
  value: Number
}>();

// HEARTBEAT
console.log("TRACER: Rendering Tile", props.value, "at", props.coord);

if (!props.coord) {
  console.error("TRACER: Tile", props.value, "FAILED. Coord is undefined.");
}

const transform = computed(() => {
  // If coord is missing, use 0,0 to prevent the "_s" crash
  const q = props.coord?.q ?? 0;
  const r = props.coord?.r ?? 0;
  const { x, y } = getPixelCoords(q, r);
  return `translate(${x}, ${y})`;
});

const colorMap: Record<string, string> = {
  WHEAT: '#f1c40f',
  WOOD: '#27ae60',
  BRICK: '#e67e22',
  SHEEP: '#95a5a6',
  ORE: '#7f8c8d',
  DESERT: '#edbf81'
};
</script>

<template>
  <g :transform="transform" class="hex-tile">
    <polygon :points="getHexPoints()" :fill="colorMap[type]" stroke="#fff" />
    <circle v-if="type !== 'DESERT'" r="15" fill="rgba(255,255,255,0.8)" />
    <text v-if="type !== 'DESERT'" text-anchor="middle" dy="5" font-weight="bold">
      {{ value }}
    </text>
  </g>
</template>
```

## File: packages/client/src/components/HUD/DevCardHand.vue
```vue
<script setup lang="ts">
import { computed } from 'vue';
import { useGameStore } from '../../stores/gameStore';

const gameStore = useGameStore();

// Map types to visual icons
const cardMeta: Record<string, { icon: string }> = {
  KNIGHT: { icon: '🛡️' },
  MONOPOLY: { icon: '💰' },
  YEAR_OF_PLENTY: { icon: '🌱' },
  ROAD_BUILDING: { icon: '🛣️' },
  VICTORY_POINT: { icon: '🏆' }
};

const myDevCards = computed(() => {
  const me = gameStore.state?.players.find((p: any) => p.id === gameStore.playerId);
  return me?.devCards || [];
});

const canPlay = (card: any) => {
  // 1. Victory points are never "played", they are just counted.
  if (card.type === 'VICTORY_POINT') return false;

  // 2. Cannot play a card on the same turn it was bought.
  // 3. Cannot play more than one development card per turn.
  return (
    card.boughtTurn < gameStore.state.turnNumber && 
    !gameStore.state.playedDevCardThisTurn &&
    gameStore.state.currentPlayerId === gameStore.playerId
  );
};

const playCard = (card: any) => {
  if (!canPlay(card)) return;

  /**
   * TRIGGERING FROM HAND:
   * This sends 'PLAY_KNIGHT', 'PLAY_MONOPOLY', etc.
   * The Engine will catch this, remove the card from your hand, 
   * and change the 'state.phase' to trigger the ChoiceModals we built.
   */
  gameStore.performAction(`PLAY_${card.type}`, { cardId: card.id });
};
</script>

<template>
  <div class="dev-card-hand" v-if="myDevCards.length > 0">
    <div 
      v-for="card in myDevCards" 
      :key="card.id" 
      :class="['card', { 'disabled': !canPlay(card) }]"
      @click="playCard(card)"
    >
      <div class="card-icon">{{ cardMeta[card.type]?.icon || '❓' }}</div>
      <div class="card-label">{{ card.type.replace(/_/g, ' ') }}</div>
      
      <!-- Tooltip or helper for new cards -->
      <div v-if="card.boughtTurn === gameStore.state.turnNumber" class="new-tag">
        NEW
      </div>
    </div>
  </div>
</template>

<style scoped>
.dev-card-hand {
  position: fixed;
  bottom: 120px; /* Positioned above the Resource HUD */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 100;
}

.card {
  background: #34495e;
  padding: 12px;
  border-radius: 8px;
  width: 85px;
  text-align: center;
  cursor: pointer;
  border: 2px solid #bdc3c7;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}

.card:hover:not(.disabled) {
  transform: translateY(-15px);
  background: #2c3e50;
  border-color: #f1c40f;
}

.card.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  filter: grayscale(1);
}

.card-icon {
  font-size: 1.8rem;
  margin-bottom: 5px;
}

.card-label {
  font-size: 0.65rem;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  line-height: 1.1;
}

.new-tag {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #e74c3c;
  color: white;
  font-size: 0.5rem;
  padding: 2px 5px;
  border-radius: 4px;
  font-weight: bold;
}
</style>
```

## File: packages/client/src/components/HUD/ResourceHud.vue
```vue
<script setup lang="ts">
  import { computed } from 'vue';
  import { useGameStore } from '../../stores/gameStore';
  import { RESOURCE_TYPES, COSTS } from '../../utils/constants';

  const gameStore = useGameStore();

  const currentPlayer = computed(() => {
    return gameStore.state?.players.find(p => p.id === gameStore.playerId);
  });

  const resources = computed(() => currentPlayer.value?.resources || {});

  // Logic to check affordability for the UI
  const canAfford = (item: keyof typeof COSTS) => {
    const cost = COSTS[item];
    return Object.entries(cost).every(([res, amount]) => 
        (resources.value[res as keyof typeof RESOURCE_TYPES] || 0) >= amount
    );
  };
</script>

<template>
  <div v-if="currentPlayer" class="hud-container">
    <!-- Resource Counts -->
    <div class="resource-bar">
      <div v-for="(info, key) in RESOURCE_TYPES" :key="key" class="resource-item">
        <span class="icon">{{ info.icon }}</span>
        <span class="count">{{ resources[key as keyof typeof RESOURCE_TYPES] || 0 }}</span>
        <label>{{ info.label }}</label>
      </div>
    </div>

    <!-- Quick Build Status -->
    <div class="build-status">
      <div :class="['build-pill', { available: canAfford('ROAD') }]">Road</div>
      <div :class="['build-pill', { available: canAfford('SETTLEMENT') }]">Settlement</div>
      <div :class="['build-pill', { available: canAfford('CITY') }]">City</div>
      <div :class="['build-pill', { available: canAfford('DEV_CARD') }]">Dev Card</div>
    </div>
  </div>
</template>

<style scoped>
.hud-container {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  padding: 15px 30px;
  border-radius: 50px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  backdrop-filter: blur(5px);
}

.resource-bar {
  display: flex;
  gap: 20px;
}

.resource-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon { font-size: 1.5rem; }
.count { font-size: 1.2rem; font-weight: bold; color: #fff; }
.resource-item label { font-size: 0.7rem; text-transform: uppercase; opacity: 0.7; }

.build-status {
  display: flex;
  gap: 10px;
}

.build-pill {
  font-size: 0.6rem;
  padding: 4px 10px;
  border-radius: 10px;
  background: #444;
  text-transform: uppercase;
  opacity: 0.5;
}

.build-pill.available {
  background: #27ae60;
  opacity: 1;
}
</style>
```

## File: packages/client/src/components/Modals/ChoiceModal.vue
```vue
<script setup lang="ts">
import { ref, computed } from 'vue';
import { useGameStore } from '../../stores/gameStore';
import { RESOURCE_TYPES } from '../../utils/constants';

const gameStore = useGameStore();
const phase = computed(() => gameStore.state?.phase);

// Year of Plenty Local State
const yopChoices = ref({ brick: 0, wood: 0, wheat: 0, sheep: 0, ore: 0 });
const yopTotal = computed(() => Object.values(yopChoices.value).reduce((a, b) => a + b, 0));

// Monopoly Local State
const monopolyRes = ref('');

const submitYop = () => {
  if (yopTotal.value !== 2) return;
  gameStore.performAction('YEAR_OF_PLENTY_CHOICE', { resources: yopChoices.value });
};

const submitMonopoly = (res: string) => {
  gameStore.performAction('MONOPOLY_CHOICE', { resourceType: res });
};
</script>

<template>
  <div v-if="phase === 'YEAR_OF_PLENTY' || phase === 'MONOPOLY'" class="modal-overlay">
    <div class="choice-card">
      
      <!-- Year of Plenty View -->
      <div v-if="phase === 'YEAR_OF_PLENTY'">
        <h3>Year of Plenty</h3>
        <p>Pick 2 resources from the bank</p>
        <div class="resource-grid">
          <div v-for="(info, key) in RESOURCE_TYPES" :key="key" class="choice-item">
            <span class="icon">{{ info.icon }}</span>
            <div class="counter">
              <button @click="yopChoices[key]--" :disabled="yopChoices[key] <= 0">-</button>
              <span>{{ yopChoices[key] }}</span>
              <button @click="yopChoices[key]++" :disabled="yopTotal >= 2">+</button>
            </div>
          </div>
        </div>
        <button class="btn-primary" :disabled="yopTotal !== 2" @click="submitYop">Take Resources</button>
      </div>

      <!-- Monopoly View -->
      <div v-if="phase === 'MONOPOLY'">
        <h3>Monopoly</h3>
        <p>Pick a resource to take from ALL players</p>
        <div class="resource-grid">
          <button v-for="(info, key) in RESOURCE_TYPES" 
                  :key="key" 
                  class="monopoly-btn"
                  @click="submitMonopoly(key)">
            <span class="icon">{{ info.icon }}</span>
            <label>{{ key }}</label>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
  .modal-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.85);
  display: flex; align-items: center; justify-content: center; z-index: 2000;
  }
  .choice-card {
  background: #2c3e50; padding: 30px; border-radius: 12px; color: white; text-align: center;
  }
  .resource-grid { display: flex; gap: 15px; margin: 20px 0; justify-content: center; }
  .choice-item { display: flex; flex-direction: column; align-items: center; gap: 10px; }
  .counter { display: flex; align-items: center; gap: 10px; background: #34495e; padding: 5px; border-radius: 4px; }
  .monopoly-btn {
  background: #34495e; border: 2px solid transparent; padding: 15px; border-radius: 8px;
  cursor: pointer; color: white; display: flex; flex-direction: column; transition: 0.2s;
  }
  .monopoly-btn:hover { border-color: #f1c40f; background: #2c3e50; }
  .icon { font-size: 2rem; }
  .btn-primary { width: 100%; padding: 10px; background: #27ae60; color: white; border: none; border-radius: 4px; cursor: pointer; }
  .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
</style>
```

## File: packages/client/src/components/Modals/TradeModal.vue
```vue
<script setup lang="ts">
import { ref, computed } from 'vue';
import { useGameStore } from '../../stores/gameStore';
import { RESOURCE_TYPES } from '../../utils/constants';

const gameStore = useGameStore();

// Local state for drafting a new trade
const offering = ref({ brick: 0, wood: 0, wheat: 0, sheep: 0, ore: 0 });
const requesting = ref({ brick: 0, wood: 0, wheat: 0, sheep: 0, ore: 0 });

const activeTrade = computed(() => gameStore.state?.activeTrade);
const isProposer = computed(() => activeTrade.value?.senderId === gameStore.playerId);
const hasResponded = computed(() => activeTrade.value?.responses[gameStore.playerId] !== 'PENDING');

// Actions
const propose = () => {
  gameStore.performAction('PROPOSE_TRADE', { 
    offering: { ...offering.value }, 
    requesting: { ...requesting.value } 
  });
};

const respond = (accept: boolean) => {
  gameStore.performAction('REVIEW_TRADE', { accept });
};

const finalize = (partnerId: string) => {
  gameStore.performAction('EXECUTE_TRADE', { partnerId });
};

const cancel = () => {
  gameStore.performAction('CANCEL_TRADE', {}); // Logic to clear activeTrade
};
</script>

<template>
  <div v-if="activeTrade || gameStore.isTrading" class="modal-overlay">
    <div class="trade-card">
      
      <!-- MODE A: Drafting a new trade -->
      <div v-if="!activeTrade" class="draft-view">
        <h3>Propose a Trade</h3>
        <div class="trade-cols">
          <div class="col">
            <label>You Give</label>
            <div v-for="(info, res) in RESOURCE_TYPES" :key="res" class="counter">
              <span>{{ info.icon }}</span>
              <input type="number" v-model.number="offering[res]" min="0" />
            </div>
          </div>
          <div class="col">
            <label>You Get</label>
            <div v-for="(info, res) in RESOURCE_TYPES" :key="res" class="counter">
              <span>{{ info.icon }}</span>
              <input type="number" v-model.number="requesting[res]" min="0" />
            </div>
          </div>
        </div>
        <div class="actions">
          <button @click="propose" class="btn-primary">Send Offer</button>
          <button @click="gameStore.isTrading = false">Cancel</button>
        </div>
      </div>

      <!-- MODE B: Receiving an offer -->
      <div v-else-if="!isProposer" class="respond-view">
        <h3>Trade Offer from {{ activeTrade.senderId }}</h3>
        <p>They give: <span v-for="(v, k) in activeTrade.offering">{{ v > 0 ? `${v} ${k} ` : '' }}</span></p>
        <p>They want: <span v-for="(v, k) in activeTrade.requesting">{{ v > 0 ? `${v} ${k} ` : '' }}</span></p>
        
        <div v-if="!hasResponded" class="actions">
          <button @click="respond(true)" class="btn-success">Accept</button>
          <button @click="respond(false)" class="btn-danger">Decline</button>
        </div>
        <div v-else class="status">Waiting for proposer to finalize...</div>
      </div>

      <!-- MODE C: Waiting for responses (Proposer View) -->
      <div v-else class="finalize-view">
        <h3>Your Trade Offer</h3>
        <div class="response-list">
          <div v-for="(status, pId) in activeTrade.responses" :key="pId" class="response-row">
            <span>{{ pId }}: <strong>{{ status }}</strong></span>
            <button v-if="status === 'ACCEPTED'" @click="finalize(pId)" class="btn-small">Finalize</button>
          </div>
        </div>
        <button @click="cancel" class="btn-danger">Withdraw Offer</button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.trade-card {
  background: #2c3e50;
  padding: 30px;
  border-radius: 8px;
  color: white;
  min-width: 400px;
  box-shadow: 0 10px 50px rgba(0,0,0,0.5);
}
.trade-cols { display: flex; gap: 40px; margin-bottom: 20px; }
.counter { display: flex; align-items: center; gap: 10px; margin-bottom: 5px; }
.counter input { width: 50px; background: #34495e; border: none; color: white; padding: 5px; }
.actions { display: flex; gap: 10px; margin-top: 20px; }
button { padding: 10px 20px; border: none; cursor: pointer; border-radius: 4px; font-weight: bold; }
.btn-primary { background: #3498db; color: white; }
.btn-success { background: #2ecc71; color: white; }
.btn-danger { background: #e74c3c; color: white; }
</style>
```

## File: packages/client/src/components/Sidebar/ActionMenu.vue
```vue
<script setup lang="ts">
import { computed } from 'vue';
import { useGameStore } from '../../stores/gameStore';

const gameStore = useGameStore();

const isMyTurn = computed(() => {
  return gameStore.state?.currentPlayerId === gameStore.playerId;
});

const currentPhase = computed(() => gameStore.state?.phase);

// Action handlers
const rollDice = () => gameStore.performAction('ROLL_DICE', {});
const endTurn = () => gameStore.performAction('END_TURN', {});
</script>

<template>
  <div v-if="isMyTurn" class="action-menu">
    <div class="menu-label">Your Turn</div>

    <!-- Phase 1: Rolling -->
    <button 
      v-if="currentPhase === 'ROLLING'" 
      @click="rollDice" 
      class="btn-action roll"
    >
      🎲 Roll Dice
    </button>

    <!-- Phase 2: Building/Trading -->
    <div v-if="currentPhase === 'TRADING_BUILDING'" class="button-group">
      <button @click="endTurn" class="btn-action end">
        ⏩ End Turn
      </button>
    </div>

    <!-- Inside ActionMenu.vue -->
    <button 
      v-if="currentPhase === 'TRADING_BUILDING'" 
      @click="gameStore.isTrading = true" 
      class="btn-action trade"
      >
      🤝 Propose Trade
    </button>


    <!-- Special Phases (Prompts) -->
    <div v-if="currentPhase === 'ROBBER_MOVE'" class="prompt-box">
      Click a tile to move the Robber
    </div>

    <div v-if="currentPhase === 'ROBBER_STEAL'" class="prompt-box">
      Select a player to steal from
    </div>
  </div>

  <div v-else class="action-menu waiting">
    <div class="menu-label">Waiting for {{ gameStore.state.currentPlayerId }}...</div>
  </div>
</template>

<style scoped>
.action-menu {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.menu-label {
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #bdc3c7;
  margin-bottom: 5px;
}

.btn-action {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  color: white;
}

.roll { background: #e67e22; }
.roll:hover { background: #d35400; transform: translateY(-2px); }

.end { background: #2c3e50; border: 1px solid #34495e; }
.end:hover { background: #34495e; }

.prompt-box {
  background: rgba(46, 204, 113, 0.2);
  border: 1px solid #2ecc71;
  color: #2ecc71;
  padding: 10px;
  font-size: 0.8rem;
  text-align: center;
  border-radius: 4px;
}

.waiting { opacity: 0.5; filter: grayscale(1); pointer-events: none; }
</style>
```

## File: packages/client/src/components/Sidebar/CommandConsole.vue
```vue
<script setup>
import { ref } from 'vue';
import { useGameStore } from '../../stores/gameStore';

const gameStore = useGameStore();
const rawJson = ref('{\n  "type": "ROLL_DICE",\n  "payload": {}\n}');
const lastResponse = ref(null);

const sendRawAction = () => {
  try {
    const action = JSON.parse(rawJson.value);
    gameStore.performAction(action.type, action.payload);
    lastResponse.value = "Sent successfully";
  } catch (e) {
    lastResponse.value = "Error: Invalid JSON";
  }
};
</script>

<template>
  <div class="command-console">
    <h3>Agentic Console</h3>
    <textarea v-model="rawJson" rows="5"></textarea>
    <div class="actions">
      <button @click="sendRawAction">Execute API Command</button>
    </div>
    <div v-if="lastResponse" class="response">{{ lastResponse }}</div>
  </div>
</template>

<style scoped>
.command-console {
  background: #1e1e1e;
  padding: 15px;
  border-top: 2px solid #444;
  color: #00ff00; /* Matrix/Hacker green */
  font-family: monospace;
}
textarea {
  width: 100%;
  background: #000;
  color: #00ff00;
  border: 1px solid #333;
  font-family: monospace;
  font-size: 11px;
}
button {
  background: #333;
  color: white;
  border: 1px solid #555;
  cursor: pointer;
  margin-top: 5px;
}
.response { font-size: 10px; color: #aaa; margin-top: 5px; }
</style>
```

## File: packages/client/src/components/Sidebar/PlayerCard.vue
```vue
<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  player: any;
  isActive: boolean;
  isLocalPlayer: boolean;
}>();

// Dynamic styles based on player color
const cardStyle = computed(() => ({
  borderLeft: `8px solid ${props.player.color}`,
  backgroundColor: props.isActive ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.3)'
}));
</script>

<template>
  <div class="player-card" :style="cardStyle" :class="{ 'active': isActive }">
    <div class="header">
      <span class="name">
        {{ player.name }} 
        <span v-if="isLocalPlayer" class="me-tag">(You)</span>
      </span>
      <span class="vp">{{ player.victoryPoints }} VP</span>
    </div>

    <div class="stats">
      <div class="stat-item" title="Resource Cards">
        🎴 {{ player.numResourceCards }}
      </div>
      <div class="stat-item" title="Development Cards">
        🛡️ {{ player.numDevelopmentCards }}
      </div>
      <div class="stat-item" title="Settlements Left">
        🏠 {{ player.numSettlements }}
      </div>
    </div>

    <!-- Achievements -->
    <div class="achievements">
      <span v-if="player.hasLongestRoad" class="badge road">Longest Road</span>
      <span v-if="player.hasLargestArmy" class="badge army">Largest Army</span>
    </div>

    <!-- Active Turn Indicator -->
    <div v-if="isActive" class="turn-indicator">
      CURRENT TURN
    </div>
  </div>
</template>

<style scoped>
.player-card {
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 4px;
  color: white;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.active {
  transform: scale(1.02);
  box-shadow: 0 0 15px v-bind('player.color');
}

.header {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 8px;
}

.me-tag { font-size: 0.7rem; opacity: 0.6; margin-left: 4px; }
.vp { color: #f1c40f; }

.stats {
  display: flex;
  gap: 15px;
  font-size: 0.85rem;
}

.badge {
  display: inline-block;
  font-size: 0.6rem;
  padding: 2px 6px;
  border-radius: 4px;
  margin-top: 8px;
  margin-right: 5px;
  background: #444;
  text-transform: uppercase;
}

.badge.road { background: #d35400; }
.badge.army { background: #2980b9; }

.turn-indicator {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 0.5rem;
  padding: 2px 8px;
  background: v-bind('player.color');
  font-weight: bold;
}
</style>
```

## File: packages/client/src/components/HelloWorld.vue
```vue
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
```

## File: packages/client/src/stores/gameStore.ts
```typescript
import { defineStore } from 'pinia';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

export const useGameStore = defineStore('game', {
  state: () => ({
    state: null as any,
    // sessionStorage creates a new ID per tab, but keeps it on refresh
    playerId: sessionStorage.getItem('catan_id') || `user_${Math.random().toString(36).substring(2, 7)}`,
    logs: [] as any[],
    isTrading: false
  }),
  actions: {
    init() {
      console.log("DEBUG: Socket.io connecting...");

      // Save the ID to the specific session (tab)
      sessionStorage.setItem('catan_id', this.playerId)

      socket.on('connect', () => {
        console.log("OnSocketConnect - ID:", socket.id);
      });

      // 1. Listen for successful state updates
      socket.on('game_state_update', (newState) => {
        // TRACER: Log the raw incoming board
        console.log("OnSocketGameStateUpdate - ID:", socket.id);
        console.log("DEBUG: Raw Data Arrived!");
        console.log("Tiles Count:", newState?.board?.tiles?.length);
        console.log("First Tile Sample:", newState?.board?.tiles?.[0]);
        
        if (newState?.board?.tiles?.[0] && !newState.board.tiles[0].coord) {
          console.error("CRITICAL: Tile 0 is missing its 'coord' property!");
        }

        this.state = newState;
      });
      
       // Listen for new log entries
      socket.on('new_log_entry', (entry) => {
        this.logs.push(entry);
      });

      // 2. Listen for errors (The fix you needed)
      socket.on('OnSocketActionError -', ({ message }) => {
        alert(`Error: ${message}`);
      });

      // 3. Join the game
      socket.emit('join_game', 'game-uuid-123', this.playerId);
    },

    getPlayerColor(id?: string) {
      const p = this.state?.players.find((p: any) => p.id === id);
      return p ? p.color : '#bdc3c7';
    },

    performAction(type: string, payload: any) {
      // Send action to server
      socket.emit('perform_action', 'game-uuid-123', this.playerId, { 
        type, 
        payload 
      });
    }
  }
});
```

## File: packages/client/src/utils/constants.ts
```typescript
export const COLOR_TO_EMOJI = {
  "#e74c3c": "🔴", // Red
  "#e67e22": "🟠", // Orange
  "#f1c40f": "🟡", // Yellow
  "#27ae60": "🟢", // Green
  "#3498db": "🔵", // Blue
  "#9b59b6": "🟣", // Purple
  "#7f8c8d": "⚫", // Gray
  "#ffffff": "⚪", // White
  "#8b4513": "🟤", // Brown
};

export const RESOURCE_TYPES = {
  brick: { label: 'Brick', color: '#e67e22', icon: '🧱' },
  wood: { label: 'Wood', color: '#27ae60', icon: '🌲' },
  wheat: { label: 'Wheat', color: '#f1c40f', icon: '🌾' },
  sheep: { label: 'Sheep', color: '#95a5a6', icon: '🐑' },
  ore: { label: 'Ore', color: '#7f8c8d', icon: '🪨' }
};

export const COSTS = {
  ROAD: { brick: 1, wood: 1 },
  SETTLEMENT: { brick: 1, wood: 1, wheat: 1, sheep: 1 },
  CITY: { wheat: 2, ore: 3 },
  DEV_CARD: { wheat: 1, sheep: 1, ore: 1 }
};
```

## File: packages/client/src/utils/layout.ts
```typescript
import { getPixelCoords } from './layout';
export const HEX_SIZE = 50; // Radius of the hex

export function getPixelCoords(q: number, r: number) {
  
  // If either value is missing, return a safe coordinate and STOP.
  // This prevents the code from even TRYING to read 's' (or '_s').
  if (q === undefined || r === undefined || q === null || r === null) {
    console.log("client/src/utils/layout.ts->getPixelCoords - (q === undefined || r === undefined || q === null || r === null)");
    return { x: 0, y: 0 };
  }

 // console.log("client/src/utils/layout.ts->getPixelCoords - q:"+q+" r:"+r);
  
  const x = HEX_SIZE * (Math.sqrt(3) * q + (Math.sqrt(3) / 2) * r);
  const y = HEX_SIZE * (3/2) * r;
  return { x, y };
}

export function getHexPoints() {
  const points = [];
  for (let i = 0; i < 6; i++) {
    const angle_deg = 60 * i - 30;
    const angle_rad = (Math.PI / 180) * angle_deg;
    points.push(
      `${HEX_SIZE * Math.cos(angle_rad)},${HEX_SIZE * Math.sin(angle_rad)}`
    );
  }
  return points.join(" ");
}

/**
 * Calculates the visual center point of an intersection or path 
 * by averaging the pixel coordinates of the hexes that share it.
 */
export function getAveragePixelCoords(coords) {
  if (!coords || !Array.isArray(coords) || coords.length === 0) {
    return { x: 0, y: 0 };
  }

  // Filter out any "ghost" coordinates that are undefined
  const valid = coords.filter(c => c && typeof c.q === 'number' && typeof c.r === 'number');
  
  if (valid.length === 0) return { x: 0, y: 0 };

  const pixels = valid.map(c => getPixelCoords(c.q, c.r));
  const avgX = pixels.reduce((sum, p) => sum + p.x, 0) / pixels.length;
  const avgY = pixels.reduce((sum, p) => sum + p.y, 0) / pixels.length;
  
  return { x: avgX, y: avgY };
}
```

## File: packages/client/src/App.vue
```vue
<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useGameStore } from './stores/gameStore';
  import Board from './components/GameBoard/Board.vue';
  import TradeModal from './components/Modals/TradeModal.vue';
  import ChoiceModal from './components/Modals/ChoiceModal.vue';
  import PlayerList from './components/Sidebar/PlayerList.vue';
  import ResourceHud from './components/HUD/ResourceHud.vue';

  const gameStore = useGameStore();

  onMounted(() => {
    gameStore.init(); // Connect to Socket.io
  });
</script>

<template>



  <div v-if="!gameStore.state" class="loading">
    <h1>TINC IS NOT CATAN</h1>
    <p>Connected: {{ !!gameStore.state }}</p>
    <p>Tiles found: {{ gameStore.state?.board?.tiles?.length || 0 }}</p>
    
    <!-- This will show the raw JSON if it arrives but is broken -->
    <pre style="font-size: 10px; text-align: left; background: #eee; color: #333;">
      {{ JSON.stringify(gameStore.state?.board, null, 2) }}
      Connecting to Game Server...
    </pre>

  </div>  

  <main v-else>
    <Board />
    <PlayerList />
    <ResourceHud />
    <TradeModal />
    <ChoiceModal />
  </main>

</template>

<style>
  .debug-loading {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white; /* Changed from sea blue to see clearly */
    color: black;
  }
</style>
```

## File: packages/client/src/main.ts
```typescript
import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'

// GLOBAL TRACER: Catch every error before the app dies
window.onerror = function(message, source, lineno, colno, error) {
  console.log("!!! GLOBAL CRASH DETECTED !!!");
  console.log("Message:", message);
  console.log("File:", source, "Line:", lineno);
  return false;
};

const app = createApp(App);
app.use(createPinia());
app.mount('#app');
```

## File: packages/client/src/style.css
```css
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.card {
  padding: 2em;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
```

## File: packages/client/.gitignore
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

## File: packages/client/index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>client</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

## File: packages/client/package.json
```json
{
  "name": "@tinc/client",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tinc/engine": "file:../engine",
    "vue": "^3.4.0",
    "pinia": "^2.1.7",
    "socket.io-client": "^4.7.2"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.0",
    "typescript": "^5.0.0",
    "vite": "^5.0.0",
    "vue-tsc": "^1.8.0"
  }
}
```

## File: packages/client/README.md
```markdown
# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).
```

## File: packages/client/tsconfig.app.json
```json
{
  "extends": "@vue/tsconfig/tsconfig.dom.json",
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "types": ["vite/client"],

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue"]
}
```

## File: packages/client/tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "Bundler", // Vite prefers 'Bundler'
    "jsx": "preserve",
    "strict": false,               // Turn off strict mode to save your sanity
    "esModuleInterop": true,
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@tinc/engine": ["../engine/src/index.ts"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"]
}
```

## File: packages/client/tsconfig.node.json
```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2023",
    "lib": ["ES2023"],
    "module": "ESNext",
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}
```

## File: packages/client/vite.config.ts
```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    minify: false,
    sourcemap: true
  }  
})
```

## File: packages/engine/dist/actions/Action.d.ts
```typescript
import { GameState } from '../types/index.js';
export interface ActionResponse {
    success: boolean;
    message?: string;
    newState?: GameState;
    followUp?: string;
}
export interface Action {
    type: string;
    playerId: string;
    payload: any;
    validate(state: GameState): {
        valid: boolean;
        error?: string;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=Action.d.ts.map
```

## File: packages/engine/dist/actions/Action.d.ts.map
```
{"version":3,"file":"Action.d.ts","sourceRoot":"","sources":["../../src/actions/Action.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,SAAS,EAAE,MAAM,mBAAmB,CAAC;AAE9C,MAAM,WAAW,cAAc;IAC7B,OAAO,EAAE,OAAO,CAAC;IACjB,OAAO,CAAC,EAAE,MAAM,CAAC;IACjB,QAAQ,CAAC,EAAE,SAAS,CAAC;IACrB,QAAQ,CAAC,EAAE,MAAM,CAAC;CACnB;AAED,MAAM,WAAW,MAAM;IACrB,IAAI,EAAE,MAAM,CAAC;IACb,QAAQ,EAAE,MAAM,CAAC;IACjB,OAAO,EAAE,GAAG,CAAC;IAGb,QAAQ,CAAC,KAAK,EAAE,SAAS,GAAG;QAAE,KAAK,EAAE,OAAO,CAAC;QAAC,KAAK,CAAC,EAAE,MAAM,CAAA;KAAE,CAAC;IAG/D,OAAO,CAAC,KAAK,EAAE,SAAS,GAAG,cAAc,CAAC;CAC3C"}
```

## File: packages/engine/dist/actions/Action.js
```javascript
export {};
//# sourceMappingURL=Action.js.map
```

## File: packages/engine/dist/actions/Action.js.map
```
{"version":3,"file":"Action.js","sourceRoot":"","sources":["../../src/actions/Action.ts"],"names":[],"mappings":""}
```

## File: packages/engine/dist/actions/BuildSettlement.d.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class BuildSettlementAction implements Action {
    playerId: string;
    payload: {
        intersectionId: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        intersectionId: string;
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: undefined;
    };
    execute(state: GameState): ActionResponse;
    private checkDistanceRule;
}
//# sourceMappingURL=BuildSettlement.d.ts.map
```

## File: packages/engine/dist/actions/BuildSettlement.d.ts.map
```
{"version":3,"file":"BuildSettlement.d.ts","sourceRoot":"","sources":["../../src/actions/BuildSettlement.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,MAAM,EAAE,cAAc,EAAE,MAAM,aAAa,CAAC;AACrD,OAAO,EAAE,SAAS,EAAE,MAAM,mBAAmB,CAAC;AAE9C,qBAAa,qBAAsB,YAAW,MAAM;IAIzC,QAAQ,EAAE,MAAM;IAChB,OAAO,EAAE;QAAE,cAAc,EAAE,MAAM,CAAA;KAAE;IAJ5C,IAAI,SAAsB;gBAGjB,QAAQ,EAAE,MAAM,EAChB,OAAO,EAAE;QAAE,cAAc,EAAE,MAAM,CAAA;KAAE;IAG5C,QAAQ,CAAC,KAAK,EAAE,SAAS;;;;;;;IAyBzB,OAAO,CAAC,KAAK,EAAE,SAAS,GAAG,cAAc;IAqBzC,OAAO,CAAC,iBAAiB;CAK1B"}
```

## File: packages/engine/dist/actions/BuildSettlement.js
```javascript
export class BuildSettlementAction {
    playerId;
    payload;
    type = 'BUILD_SETTLEMENT';
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        const player = state.players.find(p => p.id === this.playerId);
        if (!player) {
            return { valid: false, error: "Player not found in this game." };
        }
        const intersection = state.board.intersections.get(this.payload.intersectionId);
        if (!intersection)
            return { valid: false, error: "Intersection does not exist" };
        if (intersection.building)
            return { valid: false, error: "Spot already taken" };
        // Distance Rule: No settlement within 1 edge of another settlement
        // (This is where our Topology math pays off!)
        const isTooClose = this.checkDistanceRule(state, this.payload.intersectionId);
        if (isTooClose)
            return { valid: false, error: "Too close to another settlement" };
        // Resource Check
        if (player.resources.brick < 1 || player.resources.wood < 1 ||
            player.resources.wheat < 1 || player.resources.sheep < 1) {
            return { valid: false, error: "Insufficient resources" };
        }
        return { valid: true };
    }
    execute(state) {
        const player = state.players.find(p => p.id === this.playerId);
        const intersection = state.board.intersections.get(this.payload.intersectionId);
        // Deduct Resources
        player.resources.brick -= 1;
        player.resources.wood -= 1;
        player.resources.wheat -= 1;
        player.resources.sheep -= 1;
        // Place Building
        intersection.building = {
            type: 'SETTLEMENT',
            playerId: this.playerId
        };
        player.victoryPoints += 1;
        return { success: true, newState: state };
    }
    checkDistanceRule(state, intId) {
        // Logic: Get neighbors of this intersection from the Board graph
        // If any neighbor has a building, return true.
        return false; // simplified for now
    }
}
//# sourceMappingURL=BuildSettlement.js.map
```

## File: packages/engine/dist/actions/BuildSettlement.js.map
```
{"version":3,"file":"BuildSettlement.js","sourceRoot":"","sources":["../../src/actions/BuildSettlement.ts"],"names":[],"mappings":"AAGA,MAAM,OAAO,qBAAqB;IAIvB;IACA;IAJT,IAAI,GAAG,kBAAkB,CAAC;IAE1B,YACS,QAAgB,EAChB,OAAmC;QADnC,aAAQ,GAAR,QAAQ,CAAQ;QAChB,YAAO,GAAP,OAAO,CAA4B;IACzC,CAAC;IAEJ,QAAQ,CAAC,KAAgB;QACvB,MAAM,MAAM,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,IAAI,CAAC,QAAQ,CAAE,CAAC;QAEhE,IAAI,CAAC,MAAM,EAAE,CAAC;YACZ,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,gCAAgC,EAAE,CAAC;QACnE,CAAC;QACD,MAAM,YAAY,GAAG,KAAK,CAAC,KAAK,CAAC,aAAa,CAAC,GAAG,CAAC,IAAI,CAAC,OAAO,CAAC,cAAc,CAAC,CAAC;QAEhF,IAAI,CAAC,YAAY;YAAE,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,6BAA6B,EAAE,CAAC;QACjF,IAAI,YAAY,CAAC,QAAQ;YAAE,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,oBAAoB,EAAE,CAAC;QAEhF,mEAAmE;QACnE,8CAA8C;QAC9C,MAAM,UAAU,GAAG,IAAI,CAAC,iBAAiB,CAAC,KAAK,EAAE,IAAI,CAAC,OAAO,CAAC,cAAc,CAAC,CAAC;QAC9E,IAAI,UAAU;YAAE,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,iCAAiC,EAAE,CAAC;QAElF,iBAAiB;QACjB,IAAI,MAAM,CAAC,SAAS,CAAC,KAAK,GAAG,CAAC,IAAI,MAAM,CAAC,SAAS,CAAC,IAAI,GAAG,CAAC;YACvD,MAAM,CAAC,SAAS,CAAC,KAAK,GAAG,CAAC,IAAI,MAAM,CAAC,SAAS,CAAC,KAAK,GAAG,CAAC,EAAE,CAAC;YAC7D,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,wBAAwB,EAAE,CAAC;QAC3D,CAAC;QAED,OAAO,EAAE,KAAK,EAAE,IAAI,EAAE,CAAC;IACzB,CAAC;IAED,OAAO,CAAC,KAAgB;QACtB,MAAM,MAAM,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,IAAI,CAAC,QAAQ,CAAE,CAAC;QAChE,MAAM,YAAY,GAAG,KAAK,CAAC,KAAK,CAAC,aAAa,CAAC,GAAG,CAAC,IAAI,CAAC,OAAO,CAAC,cAAc,CAAE,CAAC;QAEjF,mBAAmB;QACnB,MAAM,CAAC,SAAS,CAAC,KAAK,IAAI,CAAC,CAAC;QAC5B,MAAM,CAAC,SAAS,CAAC,IAAI,IAAI,CAAC,CAAC;QAC3B,MAAM,CAAC,SAAS,CAAC,KAAK,IAAI,CAAC,CAAC;QAC5B,MAAM,CAAC,SAAS,CAAC,KAAK,IAAI,CAAC,CAAC;QAE5B,iBAAiB;QACjB,YAAY,CAAC,QAAQ,GAAG;YACtB,IAAI,EAAE,YAAY;YAClB,QAAQ,EAAE,IAAI,CAAC,QAAQ;SACxB,CAAC;QAEF,MAAM,CAAC,aAAa,IAAI,CAAC,CAAC;QAE1B,OAAO,EAAE,OAAO,EAAE,IAAI,EAAE,QAAQ,EAAE,KAAK,EAAE,CAAC;IAC5C,CAAC;IAEO,iBAAiB,CAAC,KAAgB,EAAE,KAAa;QACvD,iEAAiE;QACjE,+CAA+C;QAC/C,OAAO,KAAK,CAAC,CAAC,qBAAqB;IACrC,CAAC;CACF"}
```

## File: packages/engine/dist/actions/BuyDevCard.d.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class BuyDevCardAction implements Action {
    playerId: string;
    payload: {
        payloadId: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        payloadId: string;
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: undefined;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=BuyDevCard.d.ts.map
```

## File: packages/engine/dist/actions/BuyDevCard.d.ts.map
```
{"version":3,"file":"BuyDevCard.d.ts","sourceRoot":"","sources":["../../src/actions/BuyDevCard.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,MAAM,EAAE,cAAc,EAAE,MAAM,aAAa,CAAC;AACrD,OAAO,EAAE,SAAS,EAAe,MAAM,mBAAmB,CAAC;AAE3D,qBAAa,gBAAiB,YAAW,MAAM;IAIpC,QAAQ,EAAE,MAAM;IAChB,OAAO,EAAE;QAAE,SAAS,EAAE,MAAM,CAAA;KAAE;IAJvC,IAAI,SAAkB;gBAGb,QAAQ,EAAE,MAAM,EAChB,OAAO,EAAE;QAAE,SAAS,EAAE,MAAM,CAAA;KAAE;IAGvC,QAAQ,CAAC,KAAK,EAAE,SAAS;;;;;;;IAWzB,OAAO,CAAC,KAAK,EAAE,SAAS,GAAG,cAAc;CAgB1C"}
```

## File: packages/engine/dist/actions/BuyDevCard.js
```javascript
export class BuyDevCardAction {
    playerId;
    payload;
    type = 'BUY_DEV_CARD';
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        const player = state.players.find(p => p.id === this.playerId);
        if (state.devCardDeck.length === 0)
            return { valid: false, error: "No cards left in deck" };
        // Cost: 1 Wheat, 1 Sheep, 1 Ore
        if (player.resources.wheat < 1 || player.resources.sheep < 1 || player.resources.ore < 1) {
            return { valid: false, error: "Insufficient resources for a Dev Card" };
        }
        return { valid: true };
    }
    execute(state) {
        const player = state.players.find(p => p.id === this.playerId);
        // Deduct resources
        player.resources.wheat--;
        player.resources.sheep--;
        player.resources.ore--;
        // Draw card
        const type = state.devCardDeck.pop();
        player.devCards.push({
            id: Math.random().toString(36),
            type,
            boughtTurn: state.turnNumber
        });
        return { success: true, message: "You bought a Development Card!", newState: state };
    }
}
//# sourceMappingURL=BuyDevCard.js.map
```

## File: packages/engine/dist/actions/BuyDevCard.js.map
```
{"version":3,"file":"BuyDevCard.js","sourceRoot":"","sources":["../../src/actions/BuyDevCard.ts"],"names":[],"mappings":"AAGA,MAAM,OAAO,gBAAgB;IAIlB;IACA;IAJT,IAAI,GAAG,cAAc,CAAC;IAEtB,YACS,QAAgB,EAChB,OAA8B;QAD9B,aAAQ,GAAR,QAAQ,CAAQ;QAChB,YAAO,GAAP,OAAO,CAAuB;IACpC,CAAC;IAEJ,QAAQ,CAAC,KAAgB;QACvB,MAAM,MAAM,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,IAAI,CAAC,QAAQ,CAAE,CAAC;QAChE,IAAI,KAAK,CAAC,WAAW,CAAC,MAAM,KAAK,CAAC;YAAE,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,uBAAuB,EAAE,CAAC;QAE5F,gCAAgC;QAChC,IAAI,MAAM,CAAC,SAAS,CAAC,KAAK,GAAG,CAAC,IAAI,MAAM,CAAC,SAAS,CAAC,KAAK,GAAG,CAAC,IAAI,MAAM,CAAC,SAAS,CAAC,GAAG,GAAG,CAAC,EAAE,CAAC;YACzF,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,uCAAuC,EAAE,CAAC;QAC1E,CAAC;QACD,OAAO,EAAE,KAAK,EAAE,IAAI,EAAE,CAAC;IACzB,CAAC;IAED,OAAO,CAAC,KAAgB;QACtB,MAAM,MAAM,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,IAAI,CAAC,QAAQ,CAAE,CAAC;QAEhE,mBAAmB;QACnB,MAAM,CAAC,SAAS,CAAC,KAAK,EAAE,CAAC;QAAC,MAAM,CAAC,SAAS,CAAC,KAAK,EAAE,CAAC;QAAC,MAAM,CAAC,SAAS,CAAC,GAAG,EAAE,CAAC;QAE3E,YAAY;QACZ,MAAM,IAAI,GAAG,KAAK,CAAC,WAAW,CAAC,GAAG,EAAG,CAAC;QACtC,MAAM,CAAC,QAAQ,CAAC,IAAI,CAAC;YACnB,EAAE,EAAE,IAAI,CAAC,MAAM,EAAE,CAAC,QAAQ,CAAC,EAAE,CAAC;YAC9B,IAAI;YACJ,UAAU,EAAE,KAAK,CAAC,UAAU;SAC7B,CAAC,CAAC;QAEH,OAAO,EAAE,OAAO,EAAE,IAAI,EAAE,OAAO,EAAE,gCAAgC,EAAE,QAAQ,EAAE,KAAK,EAAE,CAAC;IACvF,CAAC;CACF"}
```

## File: packages/engine/dist/actions/ExecuteTrade.d.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class ExecuteTradeAction implements Action {
    playerId: string;
    payload: {
        partnerId: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        partnerId: string;
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: undefined;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=ExecuteTrade.d.ts.map
```

## File: packages/engine/dist/actions/ExecuteTrade.d.ts.map
```
{"version":3,"file":"ExecuteTrade.d.ts","sourceRoot":"","sources":["../../src/actions/ExecuteTrade.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,MAAM,EAAE,cAAc,EAAE,MAAM,aAAa,CAAC;AACrD,OAAO,EAAE,SAAS,EAAE,MAAM,mBAAmB,CAAC;AAE9C,qBAAa,kBAAmB,YAAW,MAAM;IAItC,QAAQ,EAAE,MAAM;IAChB,OAAO,EAAE;QAAE,SAAS,EAAE,MAAM,CAAA;KAAE;IAJvC,IAAI,SAAmB;gBAGd,QAAQ,EAAE,MAAM,EAChB,OAAO,EAAE;QAAE,SAAS,EAAE,MAAM,CAAA;KAAE;IAGvC,QAAQ,CAAC,KAAK,EAAE,SAAS;;;;;;;IASzB,OAAO,CAAC,KAAK,EAAE,SAAS,GAAG,cAAc;CAqB1C"}
```

## File: packages/engine/dist/actions/ExecuteTrade.js
```javascript
export class ExecuteTradeAction {
    playerId;
    payload;
    type = 'EXECUTE_TRADE';
    constructor(playerId, payload // The person they chose to trade with
    ) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        const trade = state.activeTrade;
        if (!trade)
            return { valid: false, error: "No active trade." };
        if (trade.responses.get(this.payload.partnerId) !== 'ACCEPTED') {
            return { valid: false, error: "This player has not accepted the trade." };
        }
        return { valid: true };
    }
    execute(state) {
        const trade = state.activeTrade;
        const sender = state.players.find(p => p.id === trade.senderId);
        const partner = state.players.find(p => p.id === this.payload.partnerId);
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
//# sourceMappingURL=ExecuteTrade.js.map
```

## File: packages/engine/dist/actions/ExecuteTrade.js.map
```
{"version":3,"file":"ExecuteTrade.js","sourceRoot":"","sources":["../../src/actions/ExecuteTrade.ts"],"names":[],"mappings":"AAGA,MAAM,OAAO,kBAAkB;IAIpB;IACA;IAJT,IAAI,GAAG,eAAe,CAAC;IAEvB,YACS,QAAgB,EAChB,OAA8B,CAAC,sCAAsC;;QADrE,aAAQ,GAAR,QAAQ,CAAQ;QAChB,YAAO,GAAP,OAAO,CAAuB;IACpC,CAAC;IAEJ,QAAQ,CAAC,KAAgB;QACvB,MAAM,KAAK,GAAG,KAAK,CAAC,WAAW,CAAC;QAChC,IAAI,CAAC,KAAK;YAAE,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,kBAAkB,EAAE,CAAC;QAC/D,IAAI,KAAK,CAAC,SAAS,CAAC,GAAG,CAAC,IAAI,CAAC,OAAO,CAAC,SAAS,CAAC,KAAK,UAAU,EAAE,CAAC;YAC/D,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,yCAAyC,EAAE,CAAC;QAC5E,CAAC;QACD,OAAO,EAAE,KAAK,EAAE,IAAI,EAAE,CAAC;IACzB,CAAC;IAED,OAAO,CAAC,KAAgB;QACtB,MAAM,KAAK,GAAG,KAAK,CAAC,WAAY,CAAC;QACjC,MAAM,MAAM,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,KAAK,CAAC,QAAQ,CAAE,CAAC;QACjE,MAAM,OAAO,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,IAAI,CAAC,OAAO,CAAC,SAAS,CAAE,CAAC;QAE1E,4BAA4B;QAC5B,KAAK,MAAM,GAAG,IAAI,KAAK,CAAC,QAAQ,EAAE,CAAC;YACjC,MAAM,CAAC,SAAS,CAAC,GAAG,CAAC,IAAI,KAAK,CAAC,QAAQ,CAAC,GAAG,CAAC,CAAC;YAC7C,OAAO,CAAC,SAAS,CAAC,GAAG,CAAC,IAAI,KAAK,CAAC,QAAQ,CAAC,GAAG,CAAC,CAAC;QAChD,CAAC;QACD,KAAK,MAAM,GAAG,IAAI,KAAK,CAAC,UAAU,EAAE,CAAC;YACnC,MAAM,CAAC,SAAS,CAAC,GAAG,CAAC,IAAI,KAAK,CAAC,UAAU,CAAC,GAAG,CAAC,CAAC;YAC/C,OAAO,CAAC,SAAS,CAAC,GAAG,CAAC,IAAI,KAAK,CAAC,UAAU,CAAC,GAAG,CAAC,CAAC;QAClD,CAAC;QAED,WAAW;QACX,KAAK,CAAC,WAAW,GAAG,SAAS,CAAC;QAC9B,KAAK,CAAC,KAAK,GAAG,kBAAkB,CAAC;QAEjC,OAAO,EAAE,OAAO,EAAE,IAAI,EAAE,OAAO,EAAE,+BAA+B,EAAE,QAAQ,EAAE,KAAK,EAAE,CAAC;IACtF,CAAC;CACF"}
```

## File: packages/engine/dist/actions/MonopolyChoice.d.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class MonopolyChoiceAction implements Action {
    playerId: string;
    payload: {
        resourceType: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        resourceType: string;
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: undefined;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=MonopolyChoice.d.ts.map
```

## File: packages/engine/dist/actions/MonopolyChoice.d.ts.map
```
{"version":3,"file":"MonopolyChoice.d.ts","sourceRoot":"","sources":["../../src/actions/MonopolyChoice.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,MAAM,EAAE,cAAc,EAAE,MAAM,aAAa,CAAC;AACrD,OAAO,EAAE,SAAS,EAAgB,MAAM,mBAAmB,CAAC;AAE5D,qBAAa,oBAAqB,YAAW,MAAM;IAIxC,QAAQ,EAAE,MAAM;IAChB,OAAO,EAAE;QAAE,YAAY,EAAE,MAAM,CAAA;KAAE;IAJ1C,IAAI,SAAqB;gBAGhB,QAAQ,EAAE,MAAM,EAChB,OAAO,EAAE;QAAE,YAAY,EAAE,MAAM,CAAA;KAAE;IAG1C,QAAQ,CAAC,KAAK,EAAE,SAAS;;;;;;;IAKzB,OAAO,CAAC,KAAK,EAAE,SAAS,GAAG,cAAc;CAqB1C"}
```

## File: packages/engine/dist/actions/MonopolyChoice.js
```javascript
export class MonopolyChoiceAction {
    playerId;
    payload;
    type = 'MONOPOLY_CHOICE';
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        if (state.phase !== 'MONOPOLY')
            return { valid: false, error: "Not in Monopoly phase." };
        return { valid: true };
    }
    execute(state) {
        const thief = state.players.find(p => p.id === this.playerId);
        const resType = this.payload.resourceType;
        let totalStolen = 0;
        state.players.forEach(victim => {
            if (victim.id !== this.playerId) {
                totalStolen += victim.resources[resType];
                victim.resources[resType] = 0;
            }
        });
        thief.resources[resType] += totalStolen;
        state.phase = 'TRADING_BUILDING';
        return {
            success: true,
            message: `Monopoly! You stole ${totalStolen} ${String(resType)} from other players.`,
            newState: state
        };
    }
}
//# sourceMappingURL=MonopolyChoice.js.map
```

## File: packages/engine/dist/actions/MonopolyChoice.js.map
```
{"version":3,"file":"MonopolyChoice.js","sourceRoot":"","sources":["../../src/actions/MonopolyChoice.ts"],"names":[],"mappings":"AAGA,MAAM,OAAO,oBAAoB;IAItB;IACA;IAJT,IAAI,GAAG,iBAAiB,CAAC;IAEzB,YACS,QAAgB,EAChB,OAAiC;QADjC,aAAQ,GAAR,QAAQ,CAAQ;QAChB,YAAO,GAAP,OAAO,CAA0B;IACvC,CAAC;IAEJ,QAAQ,CAAC,KAAgB;QACvB,IAAI,KAAK,CAAC,KAAK,KAAK,UAAU;YAAE,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,wBAAwB,EAAE,CAAC;QACzF,OAAO,EAAE,KAAK,EAAE,IAAI,EAAE,CAAC;IACzB,CAAC;IAED,OAAO,CAAC,KAAgB;QACtB,MAAM,KAAK,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,IAAI,CAAC,QAAQ,CAAE,CAAC;QAC/D,MAAM,OAAO,GAAG,IAAI,CAAC,OAAO,CAAC,YAAkC,CAAC;QAChE,IAAI,WAAW,GAAG,CAAC,CAAC;QAEpB,KAAK,CAAC,OAAO,CAAC,OAAO,CAAC,MAAM,CAAC,EAAE;YAC7B,IAAI,MAAM,CAAC,EAAE,KAAK,IAAI,CAAC,QAAQ,EAAE,CAAC;gBAChC,WAAW,IAAI,MAAM,CAAC,SAAS,CAAC,OAAO,CAAC,CAAC;gBACzC,MAAM,CAAC,SAAS,CAAC,OAAO,CAAC,GAAG,CAAC,CAAC;YAChC,CAAC;QACH,CAAC,CAAC,CAAC;QAEH,KAAK,CAAC,SAAS,CAAC,OAAO,CAAC,IAAI,WAAW,CAAC;QACxC,KAAK,CAAC,KAAK,GAAG,kBAAkB,CAAC;QAEjC,OAAO;YACL,OAAO,EAAE,IAAI;YACb,OAAO,EAAE,uBAAuB,WAAW,IAAI,MAAM,CAAC,OAAO,CAAC,sBAAsB;YACpF,QAAQ,EAAE,KAAK;SAChB,CAAC;IACJ,CAAC;CACF"}
```

## File: packages/engine/dist/actions/MoveRobber.d.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class MoveRobberAction implements Action {
    playerId: string;
    payload: {
        hexId: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        hexId: string;
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: undefined;
    };
    execute(state: GameState): ActionResponse;
    private getTotalCards;
}
//# sourceMappingURL=MoveRobber.d.ts.map
```

## File: packages/engine/dist/actions/MoveRobber.d.ts.map
```
{"version":3,"file":"MoveRobber.d.ts","sourceRoot":"","sources":["../../src/actions/MoveRobber.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,MAAM,EAAE,cAAc,EAAE,MAAM,aAAa,CAAC;AACrD,OAAO,EAAE,SAAS,EAAE,MAAM,mBAAmB,CAAC;AAE9C,qBAAa,gBAAiB,YAAW,MAAM;IAIpC,QAAQ,EAAE,MAAM;IAChB,OAAO,EAAE;QAAE,KAAK,EAAE,MAAM,CAAA;KAAE;IAJnC,IAAI,SAAiB;gBAGZ,QAAQ,EAAE,MAAM,EAChB,OAAO,EAAE;QAAE,KAAK,EAAE,MAAM,CAAA;KAAE;IAGnC,QAAQ,CAAC,KAAK,EAAE,SAAS;;;;;;;IAazB,OAAO,CAAC,KAAK,EAAE,SAAS,GAAG,cAAc;IAuCzC,OAAO,CAAC,aAAa;CAGtB"}
```

## File: packages/engine/dist/actions/MoveRobber.js
```javascript
export class MoveRobberAction {
    playerId;
    payload;
    type = 'MOVE_ROBBER';
    constructor(playerId, payload // The string coordinate e.g. "0,1,-1"
    ) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
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
    execute(state) {
        // 1. Move the Robber
        state.robberTileId = this.payload.hexId;
        // 2. Identify Potential Victims
        // Find intersections adjacent to this hex that have buildings NOT owned by the current player
        const victims = new Set();
        const hexCoord = state.board.tiles.get(this.payload.hexId).coord;
        for (const intersection of state.board.intersections.values()) {
            const isAdjacent = intersection.coords.some(c => c.q === hexCoord.q && c.r === hexCoord.r);
            if (isAdjacent && intersection.building && intersection.building.playerId !== this.playerId) {
                // Only players with cards can be stolen from
                const victimPlayer = state.players.find(p => p.id === intersection.building.playerId);
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
    getTotalCards(player) {
        return Object.values(player.resources).reduce((a, b) => a + b, 0);
    }
}
//# sourceMappingURL=MoveRobber.js.map
```

## File: packages/engine/dist/actions/MoveRobber.js.map
```
{"version":3,"file":"MoveRobber.js","sourceRoot":"","sources":["../../src/actions/MoveRobber.ts"],"names":[],"mappings":"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"}
```

## File: packages/engine/dist/actions/PlaceInitialRoad.d.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class PlaceInitialRoadAction implements Action {
    playerId: string;
    payload: {
        pathId: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        pathId: string;
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: undefined;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=PlaceInitialRoad.d.ts.map
```

## File: packages/engine/dist/actions/PlaceInitialRoad.d.ts.map
```
{"version":3,"file":"PlaceInitialRoad.d.ts","sourceRoot":"","sources":["../../src/actions/PlaceInitialRoad.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,MAAM,EAAE,cAAc,EAAE,MAAM,aAAa,CAAC;AACrD,OAAO,EAAE,SAAS,EAAE,MAAM,mBAAmB,CAAC;AAE9C,qBAAa,sBAAuB,YAAW,MAAM;IAI1C,QAAQ,EAAE,MAAM;IAChB,OAAO,EAAE;QAAE,MAAM,EAAE,MAAM,CAAA;KAAE;IAJpC,IAAI,SAAwB;gBAGnB,QAAQ,EAAE,MAAM,EAChB,OAAO,EAAE;QAAE,MAAM,EAAE,MAAM,CAAA;KAAE;IAGpC,QAAQ,CAAC,KAAK,EAAE,SAAS;;;;;;;IAazB,OAAO,CAAC,KAAK,EAAE,SAAS,GAAG,cAAc;CAqB1C"}
```

## File: packages/engine/dist/actions/PlaceInitialRoad.js
```javascript
export class PlaceInitialRoadAction {
    playerId;
    payload;
    type = 'PLACE_INITIAL_ROAD';
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        if (state.phase !== 'STARTUP' || state.startupSubPhase !== 'ROAD') {
            return { valid: false, error: "Not the time for initial road placement." };
        }
        const path = state.board.paths.get(this.payload.pathId);
        if (!path || path.road)
            return { valid: false, error: "Invalid or occupied path." };
        // Rule: Must be connected to a settlement owned by the player
        // In Startup, specifically the one they just placed.
        return { valid: true };
    }
    execute(state) {
        const path = state.board.paths.get(this.payload.pathId);
        path.road = { playerId: this.playerId };
        // Increment Startup Progress
        state.startupIndex += 1;
        state.startupSubPhase = 'SETTLEMENT';
        // Check if Startup is finished
        if (state.startupIndex === 8) {
            state.phase = 'ROLLING';
            state.currentPlayerId = state.turnOrder[0]; // Back to player 1
            return { success: true, message: "Startup finished! Begin the game.", newState: state };
        }
        return {
            success: true,
            message: "Road placed. Next player's turn.",
            newState: state
        };
    }
}
//# sourceMappingURL=PlaceInitialRoad.js.map
```

## File: packages/engine/dist/actions/PlaceInitialRoad.js.map
```
{"version":3,"file":"PlaceInitialRoad.js","sourceRoot":"","sources":["../../src/actions/PlaceInitialRoad.ts"],"names":[],"mappings":"AAGA,MAAM,OAAO,sBAAsB;IAIxB;IACA;IAJT,IAAI,GAAG,oBAAoB,CAAC;IAE5B,YACS,QAAgB,EAChB,OAA2B;QAD3B,aAAQ,GAAR,QAAQ,CAAQ;QAChB,YAAO,GAAP,OAAO,CAAoB;IACjC,CAAC;IAEJ,QAAQ,CAAC,KAAgB;QACvB,IAAI,KAAK,CAAC,KAAK,KAAK,SAAS,IAAI,KAAK,CAAC,eAAe,KAAK,MAAM,EAAE,CAAC;YAClE,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,0CAA0C,EAAE,CAAC;QAC7E,CAAC;QAED,MAAM,IAAI,GAAG,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,GAAG,CAAC,IAAI,CAAC,OAAO,CAAC,MAAM,CAAC,CAAC;QACxD,IAAI,CAAC,IAAI,IAAI,IAAI,CAAC,IAAI;YAAE,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,2BAA2B,EAAE,CAAC;QAEpF,8DAA8D;QAC9D,qDAAqD;QACrD,OAAO,EAAE,KAAK,EAAE,IAAI,EAAE,CAAC;IACzB,CAAC;IAED,OAAO,CAAC,KAAgB;QACtB,MAAM,IAAI,GAAG,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,GAAG,CAAC,IAAI,CAAC,OAAO,CAAC,MAAM,CAAE,CAAC;QACzD,IAAI,CAAC,IAAI,GAAG,EAAE,QAAQ,EAAE,IAAI,CAAC,QAAQ,EAAE,CAAC;QAExC,6BAA6B;QAC7B,KAAK,CAAC,YAAY,IAAI,CAAC,CAAC;QACxB,KAAK,CAAC,eAAe,GAAG,YAAY,CAAC;QAErC,+BAA+B;QAC/B,IAAI,KAAK,CAAC,YAAY,KAAK,CAAC,EAAE,CAAC;YAC7B,KAAK,CAAC,KAAK,GAAG,SAAS,CAAC;YACxB,KAAK,CAAC,eAAe,GAAG,KAAK,CAAC,SAAS,CAAC,CAAC,CAAC,CAAC,CAAC,mBAAmB;YAC/D,OAAO,EAAE,OAAO,EAAE,IAAI,EAAE,OAAO,EAAE,mCAAmC,EAAE,QAAQ,EAAE,KAAK,EAAE,CAAC;QAC1F,CAAC;QAED,OAAO;YACL,OAAO,EAAE,IAAI;YACb,OAAO,EAAE,kCAAkC;YAC3C,QAAQ,EAAE,KAAK;SAChB,CAAC;IACJ,CAAC;CACF"}
```

## File: packages/engine/dist/actions/PlaceInitialSettlement.d.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class PlaceInitialSettlementAction implements Action {
    playerId: string;
    payload: {
        intersectionId: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        intersectionId: string;
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: undefined;
    };
    execute(state: GameState): ActionResponse;
    private getExpectedPlayer;
    private distributeStartingResources;
    private isTooClose;
}
//# sourceMappingURL=PlaceInitialSettlement.d.ts.map
```

## File: packages/engine/dist/actions/PlaceInitialSettlement.d.ts.map
```
{"version":3,"file":"PlaceInitialSettlement.d.ts","sourceRoot":"","sources":["../../src/actions/PlaceInitialSettlement.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,MAAM,EAAE,cAAc,EAAE,MAAM,aAAa,CAAC;AACrD,OAAO,EAAE,SAAS,EAAgB,MAAM,mBAAmB,CAAC;AAE5D,qBAAa,4BAA6B,YAAW,MAAM;IAIhD,QAAQ,EAAE,MAAM;IAChB,OAAO,EAAE;QAAE,cAAc,EAAE,MAAM,CAAA;KAAE;IAJ5C,IAAI,SAA8B;gBAGzB,QAAQ,EAAE,MAAM,EAChB,OAAO,EAAE;QAAE,cAAc,EAAE,MAAM,CAAA;KAAE;IAG5C,QAAQ,CAAC,KAAK,EAAE,SAAS;;;;;;;IAwBzB,OAAO,CAAC,KAAK,EAAE,SAAS,GAAG,cAAc;IAwBzC,OAAO,CAAC,iBAAiB;IAKzB,OAAO,CAAC,2BAA2B;IAWnC,OAAO,CAAC,UAAU;CAInB"}
```

## File: packages/engine/dist/actions/PlaceInitialSettlement.js
```javascript
export class PlaceInitialSettlementAction {
    playerId;
    payload;
    type = 'PLACE_INITIAL_SETTLEMENT';
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        if (state.phase !== 'STARTUP' || state.startupSubPhase !== 'SETTLEMENT') {
            return { valid: false, error: "Not the time for initial settlement placement." };
        }
        // Determine whose turn it is in the serpentine order
        const expectedPlayerId = this.getExpectedPlayer(state);
        if (this.playerId !== expectedPlayerId) {
            return { valid: false, error: `It is ${expectedPlayerId}'s turn to place.` };
        }
        const intersection = state.board.intersections.get(this.payload.intersectionId);
        if (!intersection || intersection.building) {
            return { valid: false, error: "Invalid or occupied intersection." };
        }
        // Distance Rule still applies in Startup!
        if (this.isTooClose(state, this.payload.intersectionId)) {
            return { valid: false, error: "Must be at least two edges away from other settlements." };
        }
        return { valid: true };
    }
    execute(state) {
        const intersection = state.board.intersections.get(this.payload.intersectionId);
        const player = state.players.find(p => p.id === this.playerId);
        // 1. Place for free
        intersection.building = { type: 'SETTLEMENT', playerId: this.playerId };
        player.victoryPoints += 1;
        // 2. If this is the player's SECOND placement (index 4-7), give starting resources
        if (state.startupIndex >= 4) {
            this.distributeStartingResources(state, intersection, player);
        }
        // 3. Move to Road sub-phase
        state.startupSubPhase = 'ROAD';
        return {
            success: true,
            message: "Initial settlement placed. Now place a road.",
            followUp: 'PLACE_INITIAL_ROAD',
            newState: state
        };
    }
    getExpectedPlayer(state) {
        const serpentine = [...state.turnOrder, ...[...state.turnOrder].reverse()];
        return serpentine[state.startupIndex];
    }
    distributeStartingResources(state, intersection, player) {
        // Look at all hexes adjacent to this specific settlement
        intersection.coords.forEach((hexCoord) => {
            const tile = state.board.tiles.get(hexCoord.toString());
            if (tile && tile.type !== 'DESERT') {
                const res = tile.type.toLowerCase();
                player.resources[res] += 1;
            }
        });
    }
    isTooClose(state, intId) {
        // Graph traversal logic: check if neighbors of this intersection have buildings
        return false; // Ported from your distance rule logic
    }
}
//# sourceMappingURL=PlaceInitialSettlement.js.map
```

## File: packages/engine/dist/actions/PlaceInitialSettlement.js.map
```
{"version":3,"file":"PlaceInitialSettlement.js","sourceRoot":"","sources":["../../src/actions/PlaceInitialSettlement.ts"],"names":[],"mappings":"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"}
```

## File: packages/engine/dist/actions/PlayKnight.d.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class PlayKnightAction implements Action {
    playerId: string;
    payload: {
        cardId: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        cardId: string;
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: undefined;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=PlayKnight.d.ts.map
```

## File: packages/engine/dist/actions/PlayKnight.d.ts.map
```
{"version":3,"file":"PlayKnight.d.ts","sourceRoot":"","sources":["../../src/actions/PlayKnight.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,MAAM,EAAE,cAAc,EAAE,MAAM,aAAa,CAAC;AACrD,OAAO,EAAE,SAAS,EAAE,MAAM,mBAAmB,CAAC;AAC9C,qBAAa,gBAAiB,YAAW,MAAM;IAG1B,QAAQ,EAAE,MAAM;IAAS,OAAO,EAAE;QAAE,MAAM,EAAE,MAAM,CAAA;KAAE;IAFvE,IAAI,SAAiB;gBAEF,QAAQ,EAAE,MAAM,EAAS,OAAO,EAAE;QAAE,MAAM,EAAE,MAAM,CAAA;KAAE;IAEvE,QAAQ,CAAC,KAAK,EAAE,SAAS;;;;;;;IAWzB,OAAO,CAAC,KAAK,EAAE,SAAS,GAAG,cAAc;CAa1C"}
```

## File: packages/engine/dist/actions/PlayKnight.js
```javascript
export class PlayKnightAction {
    playerId;
    payload;
    type = 'PLAY_KNIGHT';
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        if (state.playedDevCardThisTurn)
            return { valid: false, error: "Already played a card this turn." };
        const player = state.players.find(p => p.id === this.playerId);
        const card = player.devCards.find(c => c.id === this.payload.cardId);
        if (!card || card.type !== 'KNIGHT')
            return { valid: false, error: "You don't have a Knight card." };
        if (card.boughtTurn === state.turnNumber)
            return { valid: false, error: "Cannot play card on the turn it was bought." };
        return { valid: true };
    }
    execute(state) {
        const player = state.players.find(p => p.id === this.playerId);
        // Remove card and increment army
        player.devCards = player.devCards.filter(c => c.id !== this.payload.cardId);
        player.numPlayedKnights++;
        state.playedDevCardThisTurn = true;
        // Trigger Robber flow
        state.phase = 'ROBBER_MOVE';
        return { success: true, message: "Knight played! Move the robber.", followUp: 'MOVE_ROBBER', newState: state };
    }
}
//# sourceMappingURL=PlayKnight.js.map
```

## File: packages/engine/dist/actions/PlayKnight.js.map
```
{"version":3,"file":"PlayKnight.js","sourceRoot":"","sources":["../../src/actions/PlayKnight.ts"],"names":[],"mappings":"AAEA,MAAM,OAAO,gBAAgB;IAGR;IAAyB;IAF5C,IAAI,GAAG,aAAa,CAAC;IAErB,YAAmB,QAAgB,EAAS,OAA2B;QAApD,aAAQ,GAAR,QAAQ,CAAQ;QAAS,YAAO,GAAP,OAAO,CAAoB;IAAG,CAAC;IAE3E,QAAQ,CAAC,KAAgB;QACvB,IAAI,KAAK,CAAC,qBAAqB;YAAE,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,kCAAkC,EAAE,CAAC;QACpG,MAAM,MAAM,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,IAAI,CAAC,QAAQ,CAAE,CAAC;QAChE,MAAM,IAAI,GAAG,MAAM,CAAC,QAAQ,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,IAAI,CAAC,OAAO,CAAC,MAAM,CAAC,CAAC;QAErE,IAAI,CAAC,IAAI,IAAI,IAAI,CAAC,IAAI,KAAK,QAAQ;YAAE,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,+BAA+B,EAAE,CAAC;QACrG,IAAI,IAAI,CAAC,UAAU,KAAK,KAAK,CAAC,UAAU;YAAE,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,6CAA6C,EAAE,CAAC;QAExH,OAAO,EAAE,KAAK,EAAE,IAAI,EAAE,CAAC;IACzB,CAAC;IAED,OAAO,CAAC,KAAgB;QACtB,MAAM,MAAM,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,IAAI,CAAC,QAAQ,CAAE,CAAC;QAEhE,iCAAiC;QACjC,MAAM,CAAC,QAAQ,GAAG,MAAM,CAAC,QAAQ,CAAC,MAAM,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,IAAI,CAAC,OAAO,CAAC,MAAM,CAAC,CAAC;QAC5E,MAAM,CAAC,gBAAgB,EAAE,CAAC;QAC1B,KAAK,CAAC,qBAAqB,GAAG,IAAI,CAAC;QAEnC,sBAAsB;QACtB,KAAK,CAAC,KAAK,GAAG,aAAa,CAAC;QAE5B,OAAO,EAAE,OAAO,EAAE,IAAI,EAAE,OAAO,EAAE,iCAAiC,EAAE,QAAQ,EAAE,aAAa,EAAE,QAAQ,EAAE,KAAK,EAAE,CAAC;IACjH,CAAC;CACF"}
```

## File: packages/engine/dist/actions/ProposeTrade.d.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class ProposeTradeAction implements Action {
    playerId: string;
    payload: {
        offering: any;
        requesting: any;
    };
    type: string;
    constructor(playerId: string, payload: {
        offering: any;
        requesting: any;
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: undefined;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=ProposeTrade.d.ts.map
```

## File: packages/engine/dist/actions/ProposeTrade.d.ts.map
```
{"version":3,"file":"ProposeTrade.d.ts","sourceRoot":"","sources":["../../src/actions/ProposeTrade.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,MAAM,EAAE,cAAc,EAAE,MAAM,aAAa,CAAC;AACrD,OAAO,EAAE,SAAS,EAAE,MAAM,mBAAmB,CAAC;AAE9C,qBAAa,kBAAmB,YAAW,MAAM;IAItC,QAAQ,EAAE,MAAM;IAChB,OAAO,EAAE;QAAE,QAAQ,EAAE,GAAG,CAAC;QAAC,UAAU,EAAE,GAAG,CAAA;KAAE;IAJpD,IAAI,SAAmB;gBAGd,QAAQ,EAAE,MAAM,EAChB,OAAO,EAAE;QAAE,QAAQ,EAAE,GAAG,CAAC;QAAC,UAAU,EAAE,GAAG,CAAA;KAAE;IAGpD,QAAQ,CAAC,KAAK,EAAE,SAAS;;;;;;;IAgBzB,OAAO,CAAC,KAAK,EAAE,SAAS,GAAG,cAAc;CAsB1C"}
```

## File: packages/engine/dist/actions/ProposeTrade.js
```javascript
export class ProposeTradeAction {
    playerId;
    payload;
    type = 'PROPOSE_TRADE';
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        if (state.phase !== 'TRADING_BUILDING') {
            return { valid: false, error: "You can only trade during your building phase." };
        }
        // Check if player actually HAS the resources they are offering
        const player = state.players.find(p => p.id === this.playerId);
        for (const res in this.payload.offering) {
            if (player.resources[res] < this.payload.offering[res]) {
                return { valid: false, error: `You don't have enough ${res} to trade.` };
            }
        }
        return { valid: true };
    }
    execute(state) {
        // Create the trade object
        const responses = new Map();
        state.players.forEach(p => {
            if (p.id !== this.playerId)
                responses.set(p.id, 'PENDING');
        });
        state.activeTrade = {
            senderId: this.playerId,
            offering: this.payload.offering,
            requesting: this.payload.requesting,
            responses: responses
        };
        state.phase = 'WAITING_FOR_TRADE';
        return {
            success: true,
            message: "Trade proposed to all players.",
            newState: state
        };
    }
}
//# sourceMappingURL=ProposeTrade.js.map
```

## File: packages/engine/dist/actions/ProposeTrade.js.map
```
{"version":3,"file":"ProposeTrade.js","sourceRoot":"","sources":["../../src/actions/ProposeTrade.ts"],"names":[],"mappings":"AAGA,MAAM,OAAO,kBAAkB;IAIpB;IACA;IAJT,IAAI,GAAG,eAAe,CAAC;IAEvB,YACS,QAAgB,EAChB,OAA2C;QAD3C,aAAQ,GAAR,QAAQ,CAAQ;QAChB,YAAO,GAAP,OAAO,CAAoC;IACjD,CAAC;IAEJ,QAAQ,CAAC,KAAgB;QACvB,IAAI,KAAK,CAAC,KAAK,KAAK,kBAAkB,EAAE,CAAC;YACvC,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,gDAAgD,EAAE,CAAC;QACnF,CAAC;QAED,+DAA+D;QAC/D,MAAM,MAAM,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,IAAI,CAAC,QAAQ,CAAE,CAAC;QAChE,KAAK,MAAM,GAAG,IAAI,IAAI,CAAC,OAAO,CAAC,QAAQ,EAAE,CAAC;YACxC,IAAI,MAAM,CAAC,SAAS,CAAC,GAAG,CAAC,GAAG,IAAI,CAAC,OAAO,CAAC,QAAQ,CAAC,GAAG,CAAC,EAAE,CAAC;gBACvD,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,yBAAyB,GAAG,YAAY,EAAE,CAAC;YAC3E,CAAC;QACH,CAAC;QAED,OAAO,EAAE,KAAK,EAAE,IAAI,EAAE,CAAC;IACzB,CAAC;IAED,OAAO,CAAC,KAAgB;QACtB,0BAA0B;QAC1B,MAAM,SAAS,GAAG,IAAI,GAAG,EAAe,CAAC;QACzC,KAAK,CAAC,OAAO,CAAC,OAAO,CAAC,CAAC,CAAC,EAAE;YACxB,IAAI,CAAC,CAAC,EAAE,KAAK,IAAI,CAAC,QAAQ;gBAAE,SAAS,CAAC,GAAG,CAAC,CAAC,CAAC,EAAE,EAAE,SAAS,CAAC,CAAC;QAC7D,CAAC,CAAC,CAAC;QAEH,KAAK,CAAC,WAAW,GAAG;YAClB,QAAQ,EAAE,IAAI,CAAC,QAAQ;YACvB,QAAQ,EAAE,IAAI,CAAC,OAAO,CAAC,QAAQ;YAC/B,UAAU,EAAE,IAAI,CAAC,OAAO,CAAC,UAAU;YACnC,SAAS,EAAE,SAAS;SACrB,CAAC;QAEF,KAAK,CAAC,KAAK,GAAG,mBAAmB,CAAC;QAElC,OAAO;YACL,OAAO,EAAE,IAAI;YACb,OAAO,EAAE,gCAAgC;YACzC,QAAQ,EAAE,KAAK;SAChB,CAAC;IACJ,CAAC;CACF"}
```

## File: packages/engine/dist/actions/ReviewTrade.d.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class ReviewTradeAction implements Action {
    playerId: string;
    payload: {
        accept: boolean;
    };
    type: string;
    constructor(playerId: string, payload: {
        accept: boolean;
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: undefined;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=ReviewTrade.d.ts.map
```

## File: packages/engine/dist/actions/ReviewTrade.d.ts.map
```
{"version":3,"file":"ReviewTrade.d.ts","sourceRoot":"","sources":["../../src/actions/ReviewTrade.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,MAAM,EAAE,cAAc,EAAE,MAAM,aAAa,CAAC;AACrD,OAAO,EAAE,SAAS,EAAE,MAAM,mBAAmB,CAAC;AAE9C,qBAAa,iBAAkB,YAAW,MAAM;IAIrC,QAAQ,EAAE,MAAM;IAChB,OAAO,EAAE;QAAE,MAAM,EAAE,OAAO,CAAA;KAAE;IAJrC,IAAI,SAAkB;gBAGb,QAAQ,EAAE,MAAM,EAChB,OAAO,EAAE;QAAE,MAAM,EAAE,OAAO,CAAA;KAAE;IAGrC,QAAQ,CAAC,KAAK,EAAE,SAAS;;;;;;;IAQzB,OAAO,CAAC,KAAK,EAAE,SAAS,GAAG,cAAc;CAY1C"}
```

## File: packages/engine/dist/actions/ReviewTrade.js
```javascript
export class ReviewTradeAction {
    playerId;
    payload;
    type = 'REVIEW_TRADE';
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        if (!state.activeTrade)
            return { valid: false, error: "No active trade to review." };
        if (this.playerId === state.activeTrade.senderId) {
            return { valid: false, error: "You cannot review your own trade." };
        }
        return { valid: true };
    }
    execute(state) {
        const trade = state.activeTrade;
        // Update the response for this player
        trade.responses.set(this.playerId, this.payload.accept ? 'ACCEPTED' : 'REJECTED');
        return {
            success: true,
            message: this.payload.accept ? "You accepted the trade." : "You declined the trade.",
            newState: state
        };
    }
}
//# sourceMappingURL=ReviewTrade.js.map
```

## File: packages/engine/dist/actions/ReviewTrade.js.map
```
{"version":3,"file":"ReviewTrade.js","sourceRoot":"","sources":["../../src/actions/ReviewTrade.ts"],"names":[],"mappings":"AAGA,MAAM,OAAO,iBAAiB;IAInB;IACA;IAJT,IAAI,GAAG,cAAc,CAAC;IAEtB,YACS,QAAgB,EAChB,OAA4B;QAD5B,aAAQ,GAAR,QAAQ,CAAQ;QAChB,YAAO,GAAP,OAAO,CAAqB;IAClC,CAAC;IAEJ,QAAQ,CAAC,KAAgB;QACvB,IAAI,CAAC,KAAK,CAAC,WAAW;YAAE,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,4BAA4B,EAAE,CAAC;QACrF,IAAI,IAAI,CAAC,QAAQ,KAAK,KAAK,CAAC,WAAW,CAAC,QAAQ,EAAE,CAAC;YACjD,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,mCAAmC,EAAE,CAAC;QACtE,CAAC;QACD,OAAO,EAAE,KAAK,EAAE,IAAI,EAAE,CAAC;IACzB,CAAC;IAED,OAAO,CAAC,KAAgB;QACtB,MAAM,KAAK,GAAG,KAAK,CAAC,WAAY,CAAC;QAEjC,sCAAsC;QACtC,KAAK,CAAC,SAAS,CAAC,GAAG,CAAC,IAAI,CAAC,QAAQ,EAAE,IAAI,CAAC,OAAO,CAAC,MAAM,CAAC,CAAC,CAAC,UAAU,CAAC,CAAC,CAAC,UAAU,CAAC,CAAC;QAElF,OAAO;YACL,OAAO,EAAE,IAAI;YACb,OAAO,EAAE,IAAI,CAAC,OAAO,CAAC,MAAM,CAAC,CAAC,CAAC,yBAAyB,CAAC,CAAC,CAAC,yBAAyB;YACpF,QAAQ,EAAE,KAAK;SAChB,CAAC;IACJ,CAAC;CACF"}
```

## File: packages/engine/dist/actions/RollDice.d.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class RollDiceAction implements Action {
    playerId: string;
    payload: {
        payloadId: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        payloadId: string;
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: undefined;
    };
    execute(state: GameState): ActionResponse;
    private handleSevenRoll;
    private distributeResources;
    private addResource;
    private getTotalCards;
}
//# sourceMappingURL=RollDice.d.ts.map
```

## File: packages/engine/dist/actions/RollDice.d.ts.map
```
{"version":3,"file":"RollDice.d.ts","sourceRoot":"","sources":["../../src/actions/RollDice.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,MAAM,EAAE,cAAc,EAAE,MAAM,aAAa,CAAC;AACrD,OAAO,EAAE,SAAS,EAAoC,MAAM,mBAAmB,CAAC;AAEhF,qBAAa,cAAe,YAAW,MAAM;IAIlC,QAAQ,EAAE,MAAM;IAChB,OAAO,EAAE;QAAE,SAAS,EAAE,MAAM,CAAA;KAAE;IAJvC,IAAI,SAAe;gBAGV,QAAQ,EAAE,MAAM,EAChB,OAAO,EAAE;QAAE,SAAS,EAAE,MAAM,CAAA;KAAE;IAGvC,QAAQ,CAAC,KAAK,EAAE,SAAS;;;;;;;IAOzB,OAAO,CAAC,KAAK,EAAE,SAAS,GAAG,cAAc;IAezC,OAAO,CAAC,eAAe;IAuBvB,OAAO,CAAC,mBAAmB;IA2B3B,OAAO,CAAC,WAAW;IAMnB,OAAO,CAAC,aAAa;CAGtB"}
```

## File: packages/engine/dist/actions/RollDice.js
```javascript
export class RollDiceAction {
    playerId;
    payload;
    type = 'ROLL_DICE';
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        if (state.phase !== 'ROLLING') {
            return { valid: false, error: "Dice have already been rolled this turn." };
        }
        return { valid: true };
    }
    execute(state) {
        // 1. Generate Roll
        const die1 = Math.floor(Math.random() * 6) + 1;
        const die2 = Math.floor(Math.random() * 6) + 1;
        const total = die1 + die2;
        state.diceResult = [die1, die2];
        // 2. Branch Logic
        if (total === 7) {
            return this.handleSevenRoll(state);
        }
        else {
            return this.distributeResources(state, total);
        }
    }
    handleSevenRoll(state) {
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
    distributeResources(state, roll) {
        // We tell TypeScript: "t" is a "Tile"
        const luckyTiles = Array.from(state.board.tiles.values()).filter((t) => t.value === roll && !t.hasRobber);
        luckyTiles.forEach((tile) => {
            // We tell TypeScript: "intersection" is an "Intersection"
            const adjacentIntersections = Array.from(state.board.intersections.values()).filter((intersection) => intersection.coords.some(c => c.q === tile.coord.q && c.r === tile.coord.r));
            adjacentIntersections.forEach((intersection) => {
                if (intersection.building) {
                    const player = state.players.find(p => p.id === intersection.building.playerId);
                    if (player) {
                        const amount = intersection.building.type === 'CITY' ? 2 : 1;
                        this.addResource(player, tile.type, amount);
                    }
                }
            });
        });
        state.phase = 'TRADING_BUILDING';
        return { success: true, message: `Rolled a ${roll}. Resources distributed.`, newState: state };
    }
    addResource(player, type, amount) {
        if (type === 'DESERT')
            return;
        const key = type.toLowerCase();
        player.resources[key] += amount;
    }
    getTotalCards(player) {
        return Object.values(player.resources).reduce((a, b) => a + b, 0);
    }
}
//# sourceMappingURL=RollDice.js.map
```

## File: packages/engine/dist/actions/RollDice.js.map
```
{"version":3,"file":"RollDice.js","sourceRoot":"","sources":["../../src/actions/RollDice.ts"],"names":[],"mappings":"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"}
```

## File: packages/engine/dist/actions/StartGame.d.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class StartGameAction implements Action {
    playerId: string;
    payload: any;
    type: string;
    constructor(playerId: string, payload?: any);
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: undefined;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=StartGame.d.ts.map
```

## File: packages/engine/dist/actions/StartGame.d.ts.map
```
{"version":3,"file":"StartGame.d.ts","sourceRoot":"","sources":["../../src/actions/StartGame.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,MAAM,EAAE,cAAc,EAAE,MAAM,aAAa,CAAC;AACrD,OAAO,EAAE,SAAS,EAAU,MAAM,mBAAmB,CAAC;AAEtD,qBAAa,eAAgB,YAAW,MAAM;IAGzB,QAAQ,EAAE,MAAM;IAAS,OAAO,EAAE,GAAG;IAFxD,IAAI,SAAgB;gBAED,QAAQ,EAAE,MAAM,EAAS,OAAO,GAAE,GAAQ;IAE7D,QAAQ,CAAC,KAAK,EAAE,SAAS;;;;;;;IAczB,OAAO,CAAC,KAAK,EAAE,SAAS,GAAG,cAAc;CAmC1C"}
```

## File: packages/engine/dist/actions/StartGame.js
```javascript
export class StartGameAction {
    playerId;
    payload;
    type = 'START_GAME';
    constructor(playerId, payload = {}) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        const actor = state.players.find(p => p.controllerId === this.playerId);
        if (!actor?.isHost)
            return { valid: false, error: "Unauthorized." };
        // THE NEW RULE: No Ghosts allowed when starting
        const hasGhosts = state.players.some(p => p.controllerType === null);
        if (hasGhosts) {
            return { valid: false, error: "Cannot start: All seats must have a Brain 🧠 or a Robot 🤖." };
        }
        if (state.players.length < 2)
            return { valid: false, error: "Need at least 2 players." };
        return { valid: true };
    }
    execute(state) {
        // 1. MANIFEST AGENTS: Turn all Ghosts into Robots
        state.players.forEach((seat) => {
            if (seat.controllerType === null) {
                seat.controllerType = 'AGENT';
                seat.controllerId = `bot_${seat.id}`;
                seat.isOnline = true; // Agents are effectively always online
                seat.name = `Agent_${seat.id.split('_')[1]}`;
            }
        });
        // 2. SET TURN ORDER: 
        // We shuffle the seat IDs to determine who is "Player 1", "Player 2", etc.
        state.turnOrder = state.players.map(p => p.id).sort(() => Math.random() - 0.5);
        // 3. GENERATE SERPENTINE SEQUENCE (Logic from Setup.java:80)
        // Catan setup goes: [1, 2, 3, 4, 4, 3, 2, 1]
        // We store this as a flat array of Seat IDs
        const forward = [...state.turnOrder];
        const backward = [...state.turnOrder].reverse();
        state.setupSequence = [...forward, ...backward]; // Should be length 8 for 4 players
        // 4. TRANSITION PHASE
        state.phase = 'STARTUP';
        state.startupIndex = 0; // Start at the first item in the serpentine sequence
        state.currentPlayerId = state.setupSequence[0];
        return {
            success: true,
            message: "The game has been manifested. Begin Startup Placements.",
            newState: state
        };
    }
}
//# sourceMappingURL=StartGame.js.map
```

## File: packages/engine/dist/actions/StartGame.js.map
```
{"version":3,"file":"StartGame.js","sourceRoot":"","sources":["../../src/actions/StartGame.ts"],"names":[],"mappings":"AAGA,MAAM,OAAO,eAAe;IAGP;IAAyB;IAF5C,IAAI,GAAG,YAAY,CAAC;IAEpB,YAAmB,QAAgB,EAAS,UAAe,EAAE;QAA1C,aAAQ,GAAR,QAAQ,CAAQ;QAAS,YAAO,GAAP,OAAO,CAAU;IAAG,CAAC;IAEjE,QAAQ,CAAC,KAAgB;QACvB,MAAM,KAAK,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,YAAY,KAAK,IAAI,CAAC,QAAQ,CAAC,CAAC;QACxE,IAAI,CAAC,KAAK,EAAE,MAAM;YAAE,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,eAAe,EAAE,CAAC;QAEpE,gDAAgD;QAChD,MAAM,SAAS,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,cAAc,KAAK,IAAI,CAAC,CAAC;QACrE,IAAI,SAAS,EAAE,CAAC;YACd,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,6DAA6D,EAAE,CAAC;QAChG,CAAC;QAED,IAAI,KAAK,CAAC,OAAO,CAAC,MAAM,GAAG,CAAC;YAAE,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,0BAA0B,EAAE,CAAC;QACzF,OAAO,EAAE,KAAK,EAAE,IAAI,EAAE,CAAC;IACzB,CAAC;IAED,OAAO,CAAC,KAAgB;QACtB,kDAAkD;QAClD,KAAK,CAAC,OAAO,CAAC,OAAO,CAAC,CAAC,IAAY,EAAE,EAAE;YACrC,IAAI,IAAI,CAAC,cAAc,KAAK,IAAI,EAAE,CAAC;gBACjC,IAAI,CAAC,cAAc,GAAG,OAAO,CAAC;gBAC9B,IAAI,CAAC,YAAY,GAAG,OAAO,IAAI,CAAC,EAAE,EAAE,CAAC;gBACrC,IAAI,CAAC,QAAQ,GAAG,IAAI,CAAC,CAAC,uCAAuC;gBAC7D,IAAI,CAAC,IAAI,GAAG,SAAS,IAAI,CAAC,EAAE,CAAC,KAAK,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC;YAC/C,CAAC;QACH,CAAC,CAAC,CAAC;QAEH,sBAAsB;QACtB,2EAA2E;QAC3E,KAAK,CAAC,SAAS,GAAG,KAAK,CAAC,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC,GAAG,EAAE,CAAC,IAAI,CAAC,MAAM,EAAE,GAAG,GAAG,CAAC,CAAC;QAE/E,6DAA6D;QAC7D,6CAA6C;QAC7C,4CAA4C;QAC5C,MAAM,OAAO,GAAG,CAAC,GAAG,KAAK,CAAC,SAAS,CAAC,CAAC;QACrC,MAAM,QAAQ,GAAG,CAAC,GAAG,KAAK,CAAC,SAAS,CAAC,CAAC,OAAO,EAAE,CAAC;QAChD,KAAK,CAAC,aAAa,GAAG,CAAC,GAAG,OAAO,EAAE,GAAG,QAAQ,CAAC,CAAC,CAAC,mCAAmC;QAEpF,sBAAsB;QACtB,KAAK,CAAC,KAAK,GAAG,SAAS,CAAC;QACxB,KAAK,CAAC,YAAY,GAAG,CAAC,CAAC,CAAC,qDAAqD;QAC7E,KAAK,CAAC,eAAe,GAAG,KAAK,CAAC,aAAa,CAAC,CAAC,CAAC,CAAC;QAE/C,OAAO;YACL,OAAO,EAAE,IAAI;YACb,OAAO,EAAE,yDAAyD;YAClE,QAAQ,EAAE,KAAK;SAChB,CAAC;IAEJ,CAAC;CAEF"}
```

## File: packages/engine/dist/actions/TakeCard.d.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class TakeCardAction implements Action {
    playerId: string;
    payload: {
        victimId: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        victimId: string;
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: undefined;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=TakeCard.d.ts.map
```

## File: packages/engine/dist/actions/TakeCard.d.ts.map
```
{"version":3,"file":"TakeCard.d.ts","sourceRoot":"","sources":["../../src/actions/TakeCard.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,MAAM,EAAE,cAAc,EAAE,MAAM,aAAa,CAAC;AACrD,OAAO,EAAE,SAAS,EAAgB,MAAM,mBAAmB,CAAC;AAE5D,qBAAa,cAAe,YAAW,MAAM;IAIlC,QAAQ,EAAE,MAAM;IAChB,OAAO,EAAE;QAAE,QAAQ,EAAE,MAAM,CAAA;KAAE;IAJtC,IAAI,SAAgB;gBAGX,QAAQ,EAAE,MAAM,EAChB,OAAO,EAAE;QAAE,QAAQ,EAAE,MAAM,CAAA;KAAE;IAGtC,QAAQ,CAAC,KAAK,EAAE,SAAS;;;;;;;IAUzB,OAAO,CAAC,KAAK,EAAE,SAAS,GAAG,cAAc;CA+B1C"}
```

## File: packages/engine/dist/actions/TakeCard.js
```javascript
export class TakeCardAction {
    playerId;
    payload;
    type = 'STEAL_CARD';
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        if (state.phase !== 'ROBBER_STEAL') {
            return { valid: false, error: "Not the time to steal a card." };
        }
        if (!state.victimsAvailable.includes(this.payload.victimId)) {
            return { valid: false, error: "That player is not at the robber's location." };
        }
        return { valid: true };
    }
    execute(state) {
        const thief = state.players.find(p => p.id === this.playerId);
        const victim = state.players.find(p => p.id === this.payload.victimId);
        // 1. Pick a random resource from the victim
        const resources = victim.resources;
        const availableTypes = Object.keys(resources).filter(type => resources[type] > 0);
        if (availableTypes.length === 0) {
            state.phase = 'TRADING_BUILDING';
            return { success: true, message: "Victim has no cards.", newState: state };
        }
        const randomType = availableTypes[Math.floor(Math.random() * availableTypes.length)];
        // 2. Transfer
        victim.resources[randomType]--;
        thief.resources[randomType]++;
        // 3. Clean up
        state.victimsAvailable = [];
        state.phase = 'TRADING_BUILDING';
        return {
            success: true,
            message: `You stole 1 ${String(randomType)} from ${victim.id}`,
            newState: state
        };
    }
}
//# sourceMappingURL=TakeCard.js.map
```

## File: packages/engine/dist/actions/TakeCard.js.map
```
{"version":3,"file":"TakeCard.js","sourceRoot":"","sources":["../../src/actions/TakeCard.ts"],"names":[],"mappings":"AAGA,MAAM,OAAO,cAAc;IAIhB;IACA;IAJT,IAAI,GAAG,YAAY,CAAC;IAEpB,YACS,QAAgB,EAChB,OAA6B;QAD7B,aAAQ,GAAR,QAAQ,CAAQ;QAChB,YAAO,GAAP,OAAO,CAAsB;IACnC,CAAC;IAEJ,QAAQ,CAAC,KAAgB;QACvB,IAAI,KAAK,CAAC,KAAK,KAAK,cAAc,EAAE,CAAC;YACnC,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,+BAA+B,EAAE,CAAC;QAClE,CAAC;QACD,IAAI,CAAC,KAAK,CAAC,gBAAgB,CAAC,QAAQ,CAAC,IAAI,CAAC,OAAO,CAAC,QAAQ,CAAC,EAAE,CAAC;YAC5D,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,8CAA8C,EAAE,CAAC;QACjF,CAAC;QACD,OAAO,EAAE,KAAK,EAAE,IAAI,EAAE,CAAC;IACzB,CAAC;IAED,OAAO,CAAC,KAAgB;QACtB,MAAM,KAAK,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,IAAI,CAAC,QAAQ,CAAE,CAAC;QAC/D,MAAM,MAAM,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,IAAI,CAAC,OAAO,CAAC,QAAQ,CAAE,CAAC;QAExE,4CAA4C;QAC5C,MAAM,SAAS,GAAG,MAAM,CAAC,SAAS,CAAC;QACnC,MAAM,cAAc,GAAI,MAAM,CAAC,IAAI,CAAC,SAAS,CAAmC,CAAC,MAAM,CACrF,IAAI,CAAC,EAAE,CAAC,SAAS,CAAC,IAAI,CAAC,GAAG,CAAC,CAC5B,CAAC;QAEF,IAAI,cAAc,CAAC,MAAM,KAAK,CAAC,EAAE,CAAC;YAC/B,KAAK,CAAC,KAAK,GAAG,kBAAkB,CAAC;YACjC,OAAO,EAAE,OAAO,EAAE,IAAI,EAAE,OAAO,EAAE,sBAAsB,EAAE,QAAQ,EAAE,KAAK,EAAE,CAAC;QAC9E,CAAC;QAED,MAAM,UAAU,GAAG,cAAc,CAAC,IAAI,CAAC,KAAK,CAAC,IAAI,CAAC,MAAM,EAAE,GAAG,cAAc,CAAC,MAAM,CAAC,CAAC,CAAC;QAErF,cAAc;QACd,MAAM,CAAC,SAAS,CAAC,UAAU,CAAC,EAAE,CAAC;QAC/B,KAAK,CAAC,SAAS,CAAC,UAAU,CAAC,EAAE,CAAC;QAE9B,cAAc;QACd,KAAK,CAAC,gBAAgB,GAAG,EAAE,CAAC;QAC5B,KAAK,CAAC,KAAK,GAAG,kBAAkB,CAAC;QAEjC,OAAO;YACL,OAAO,EAAE,IAAI;YACb,OAAO,EAAE,eAAe,MAAM,CAAC,UAAU,CAAC,SAAS,MAAM,CAAC,EAAE,EAAE;YAC9D,QAAQ,EAAE,KAAK;SAChB,CAAC;IACJ,CAAC;CACF"}
```

## File: packages/engine/dist/actions/ToggleController.d.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class ToggleControllerAction implements Action {
    playerId: string;
    payload: {
        targetPlayerId: string;
        controllerType: 'HUMAN' | 'AGENT';
    };
    type: string;
    constructor(playerId: string, payload: {
        targetPlayerId: string;
        controllerType: 'HUMAN' | 'AGENT';
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: undefined;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=ToggleController.d.ts.map
```

## File: packages/engine/dist/actions/ToggleController.d.ts.map
```
{"version":3,"file":"ToggleController.d.ts","sourceRoot":"","sources":["../../src/actions/ToggleController.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,MAAM,EAAE,cAAc,EAAE,MAAM,aAAa,CAAC;AACrD,OAAO,EAAE,SAAS,EAAE,MAAM,mBAAmB,CAAC;AAE9C,qBAAa,sBAAuB,YAAW,MAAM;IAM1C,QAAQ,EAAE,MAAM;IAChB,OAAO,EAAE;QAAE,cAAc,EAAE,MAAM,CAAC;QAAC,cAAc,EAAE,OAAO,GAAG,OAAO,CAAA;KAAE;IAL/E,IAAI,SAAuB;gBAIlB,QAAQ,EAAE,MAAM,EAChB,OAAO,EAAE;QAAE,cAAc,EAAE,MAAM,CAAC;QAAC,cAAc,EAAE,OAAO,GAAG,OAAO,CAAA;KAAE;IAK/E,QAAQ,CAAC,KAAK,EAAE,SAAS;;;;;;;IAezB,OAAO,CAAC,KAAK,EAAE,SAAS,GAAG,cAAc;CAsB1C"}
```

## File: packages/engine/dist/actions/ToggleController.js
```javascript
export class ToggleControllerAction {
    playerId;
    payload;
    type = 'TOGGLE_CONTROLLER';
    // We add the constructor so ActionProcessor can pass in the ID and Payload
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    // Every action must have a validation step
    validate(state) {
        const player = state.players.find(p => p.id === this.playerId);
        // Rule: Only the Host can change someone else's controller, 
        // OR a player can change their own controller.
        if ((!player?.isHost) &&
            (this.playerId !== this.payload.targetPlayerId)) {
            return { valid: false, error: "You do not have permission to change this controller." };
        }
        return { valid: true };
    }
    execute(state) {
        const seat = state.players.find(p => p.id === this.payload.targetPlayerId);
        if (seat) {
            // Logic: Update the "Driver" type for this "Seat"
            seat.controllerType = this.payload.controllerType;
            // Logic: If it's becoming an Agent, we mark it as "Online" 
            // because the computer is now at the wheel.
            if (seat.controllerType === 'AGENT') {
                seat.isOnline = true;
                seat.name = `Bot_${seat.id.substring(seat.id.length - 4)}`;
            }
        }
        return {
            success: true,
            message: `Controller for ${this.payload.targetPlayerId} updated to ${this.payload.controllerType}`,
            newState: state
        };
    }
}
//# sourceMappingURL=ToggleController.js.map
```

## File: packages/engine/dist/actions/ToggleController.js.map
```
{"version":3,"file":"ToggleController.js","sourceRoot":"","sources":["../../src/actions/ToggleController.ts"],"names":[],"mappings":"AAGA,MAAM,OAAO,sBAAsB;IAMxB;IACA;IALT,IAAI,GAAG,mBAAmB,CAAC;IAEzB,2EAA2E;IAC7E,YACS,QAAgB,EAChB,OAAsE;QADtE,aAAQ,GAAR,QAAQ,CAAQ;QAChB,YAAO,GAAP,OAAO,CAA+D;IAC5E,CAAC;IAGF,2CAA2C;IAC7C,QAAQ,CAAC,KAAgB;QACvB,MAAM,MAAM,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,IAAI,CAAC,QAAQ,CAAC,CAAC;QAE/D,6DAA6D;QAC7D,+CAA+C;QAC/C,IAAK,CAAE,CAAC,MAAM,EAAE,MAAM,CAA+B;YAChD,CAAE,IAAI,CAAC,QAAQ,KAAK,IAAI,CAAC,OAAO,CAAC,cAAc,CAAC,EACrD,CAAC;YACC,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,uDAAuD,EAAE,CAAC;QAC1F,CAAC;QAED,OAAO,EAAE,KAAK,EAAE,IAAI,EAAE,CAAC;IACzB,CAAC;IAGD,OAAO,CAAC,KAAgB;QACtB,MAAM,IAAI,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,IAAI,CAAC,OAAO,CAAC,cAAc,CAAC,CAAC;QAE3E,IAAI,IAAI,EAAE,CAAC;YACT,kDAAkD;YAClD,IAAI,CAAC,cAAc,GAAG,IAAI,CAAC,OAAO,CAAC,cAAc,CAAC;YAElD,4DAA4D;YAC5D,4CAA4C;YAC5C,IAAI,IAAI,CAAC,cAAc,KAAK,OAAO,EAAE,CAAC;gBACpC,IAAI,CAAC,QAAQ,GAAG,IAAI,CAAC;gBACrB,IAAI,CAAC,IAAI,GAAG,OAAO,IAAI,CAAC,EAAE,CAAC,SAAS,CAAC,IAAI,CAAC,EAAE,CAAC,MAAM,GAAG,CAAC,CAAC,EAAE,CAAC;YAC7D,CAAC;QACH,CAAC;QAED,OAAO;YACL,OAAO,EAAE,IAAI;YACb,OAAO,EAAE,kBAAkB,IAAI,CAAC,OAAO,CAAC,cAAc,eAAe,IAAI,CAAC,OAAO,CAAC,cAAc,EAAE;YAClG,QAAQ,EAAE,KAAK;SAChB,CAAC;IACJ,CAAC;CAEF"}
```

## File: packages/engine/dist/actions/YearOfPlentyChoice.d.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState, ResourceHand } from '../types/index.js';
export declare class YearOfPlentyChoiceAction implements Action {
    playerId: string;
    payload: {
        resources: Partial<ResourceHand>;
    };
    type: string;
    constructor(playerId: string, payload: {
        resources: Partial<ResourceHand>;
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: undefined;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=YearOfPlentyChoice.d.ts.map
```

## File: packages/engine/dist/actions/YearOfPlentyChoice.d.ts.map
```
{"version":3,"file":"YearOfPlentyChoice.d.ts","sourceRoot":"","sources":["../../src/actions/YearOfPlentyChoice.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,MAAM,EAAE,cAAc,EAAE,MAAM,aAAa,CAAC;AACrD,OAAO,EAAE,SAAS,EAAE,YAAY,EAAE,MAAM,mBAAmB,CAAC;AAE5D,qBAAa,wBAAyB,YAAW,MAAM;IAI5C,QAAQ,EAAE,MAAM;IAChB,OAAO,EAAE;QAAE,SAAS,EAAE,OAAO,CAAC,YAAY,CAAC,CAAA;KAAE;IAJtD,IAAI,SAA2B;gBAGtB,QAAQ,EAAE,MAAM,EAChB,OAAO,EAAE;QAAE,SAAS,EAAE,OAAO,CAAC,YAAY,CAAC,CAAA;KAAE;IAGtD,QAAQ,CAAC,KAAK,EAAE,SAAS;;;;;;;IA0BzB,OAAO,CAAC,KAAK,EAAE,SAAS,GAAG,cAAc;CAW1C"}
```

## File: packages/engine/dist/actions/YearOfPlentyChoice.js
```javascript
export class YearOfPlentyChoiceAction {
    playerId;
    payload;
    type = 'YEAR_OF_PLENTY_CHOICE';
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        if (state.phase !== 'YEAR_OF_PLENTY')
            return { valid: false, error: "Not in Year of Plenty phase." };
        // 1. We start our counter at zero
        let totalSelected = 0;
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
    execute(state) {
        const player = state.players.find(p => p.id === this.playerId);
        // Add selected resources to hand
        for (const [res, amount] of Object.entries(this.payload.resources)) {
            player.resources[res] += amount;
        }
        state.phase = 'TRADING_BUILDING'; // Return to normal play
        return { success: true, message: "Resources added to your hand.", newState: state };
    }
}
//# sourceMappingURL=YearOfPlentyChoice.js.map
```

## File: packages/engine/dist/actions/YearOfPlentyChoice.js.map
```
{"version":3,"file":"YearOfPlentyChoice.js","sourceRoot":"","sources":["../../src/actions/YearOfPlentyChoice.ts"],"names":[],"mappings":"AAGA,MAAM,OAAO,wBAAwB;IAI1B;IACA;IAJT,IAAI,GAAG,uBAAuB,CAAC;IAE/B,YACS,QAAgB,EAChB,OAA6C;QAD7C,aAAQ,GAAR,QAAQ,CAAQ;QAChB,YAAO,GAAP,OAAO,CAAsC;IACnD,CAAC;IAEJ,QAAQ,CAAC,KAAgB;QACvB,IAAI,KAAK,CAAC,KAAK,KAAK,gBAAgB;YAAE,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,8BAA8B,EAAE,CAAC;QAErG,kCAAkC;QAClC,IAAI,aAAa,GAAW,CAAC,CAAC;QAE9B,uDAAuD;QACvD,MAAM,eAAe,GAAG,MAAM,CAAC,MAAM,CAAC,IAAI,CAAC,OAAO,CAAC,SAAS,CAAC,CAAC;QAE9D,uCAAuC;QACvC,KAAK,MAAM,MAAM,IAAI,eAAe,EAAE,CAAC;YACrC,gDAAgD;YAChD,IAAI,OAAO,MAAM,KAAK,QAAQ,EAAE,CAAC;gBAC/B,qCAAqC;gBACrC,aAAa,GAAG,aAAa,GAAG,MAAM,CAAC;YACzC,CAAC;QACH,CAAC;QAED,0DAA0D;QAC1D,IAAI,aAAa,KAAK,CAAC,EAAE,CAAC;YACxB,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,oCAAoC,EAAE,CAAC;QACvE,CAAC;QAED,OAAO,EAAE,KAAK,EAAE,IAAI,EAAE,CAAC;IACzB,CAAC;IAED,OAAO,CAAC,KAAgB;QACtB,MAAM,MAAM,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,IAAI,CAAC,QAAQ,CAAE,CAAC;QAEhE,iCAAiC;QACjC,KAAK,MAAM,CAAC,GAAG,EAAE,MAAM,CAAC,IAAI,MAAM,CAAC,OAAO,CAAC,IAAI,CAAC,OAAO,CAAC,SAAS,CAAC,EAAE,CAAC;YAClE,MAAM,CAAC,SAAiB,CAAC,GAAG,CAAC,IAAI,MAAM,CAAC;QAC3C,CAAC;QAED,KAAK,CAAC,KAAK,GAAG,kBAAkB,CAAC,CAAC,wBAAwB;QAC1D,OAAO,EAAE,OAAO,EAAE,IAAI,EAAE,OAAO,EAAE,+BAA+B,EAAE,QAAQ,EAAE,KAAK,EAAE,CAAC;IACtF,CAAC;CACF"}
```

## File: packages/engine/dist/core/AchievementManager.d.ts
```typescript
import { GameState } from '../types/index.js';
export declare function updateLargestArmy(state: GameState): void;
//# sourceMappingURL=AchievementManager.d.ts.map
```

## File: packages/engine/dist/core/AchievementManager.d.ts.map
```
{"version":3,"file":"AchievementManager.d.ts","sourceRoot":"","sources":["../../src/core/AchievementManager.ts"],"names":[],"mappings":"AACA,OAAO,EAAE,SAAS,EAAE,MAAM,mBAAmB,CAAC;AAG9C,wBAAgB,iBAAiB,CAAC,KAAK,EAAE,SAAS,QAkBjD"}
```

## File: packages/engine/dist/core/AchievementManager.js
```javascript
export function updateLargestArmy(state) {
    let currentLeader = state.players.find(p => p.hasLargestArmy);
    let maxKnights = currentLeader ? currentLeader.numPlayedKnights : 2; // Threshold is 3
    state.players.forEach(p => {
        if (p.numPlayedKnights > maxKnights) {
            // Clear previous leader
            if (currentLeader) {
                currentLeader.hasLargestArmy = false;
                currentLeader.victoryPoints -= 2;
            }
            // New leader
            p.hasLargestArmy = true;
            p.victoryPoints += 2;
            currentLeader = p;
            maxKnights = p.numPlayedKnights;
        }
    });
}
//# sourceMappingURL=AchievementManager.js.map
```

## File: packages/engine/dist/core/AchievementManager.js.map
```
{"version":3,"file":"AchievementManager.js","sourceRoot":"","sources":["../../src/core/AchievementManager.ts"],"names":[],"mappings":"AAIA,MAAM,UAAU,iBAAiB,CAAC,KAAgB;IAChD,IAAI,aAAa,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,cAAc,CAAC,CAAC;IAC9D,IAAI,UAAU,GAAG,aAAa,CAAC,CAAC,CAAC,aAAa,CAAC,gBAAgB,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,iBAAiB;IAEtF,KAAK,CAAC,OAAO,CAAC,OAAO,CAAC,CAAC,CAAC,EAAE;QACxB,IAAI,CAAC,CAAC,gBAAgB,GAAG,UAAU,EAAE,CAAC;YACpC,wBAAwB;YACxB,IAAI,aAAa,EAAE,CAAC;gBAClB,aAAa,CAAC,cAAc,GAAG,KAAK,CAAC;gBACrC,aAAa,CAAC,aAAa,IAAI,CAAC,CAAC;YACnC,CAAC;YACD,aAAa;YACb,CAAC,CAAC,cAAc,GAAG,IAAI,CAAC;YACxB,CAAC,CAAC,aAAa,IAAI,CAAC,CAAC;YACrB,aAAa,GAAG,CAAC,CAAC;YAClB,UAAU,GAAG,CAAC,CAAC,gBAAgB,CAAC;QAClC,CAAC;IACH,CAAC,CAAC,CAAC;AACL,CAAC"}
```

## File: packages/engine/dist/core/Board.d.ts
```typescript
import { ResourceType, Tile, Intersection, Path } from '../types/index.js';
export declare class Board {
    tiles: Map<string, Tile>;
    intersections: Map<string, Intersection>;
    paths: Map<string, Path>;
    constructor();
    /**
     * Universal method to add a tile.
     */
    addTile(q: number, r: number, s: number, type: ResourceType, value: number): void;
    private generateTopologyForTile;
    /**
     * Simple serializer for Agents and the GUI
     */
    serialize(): {
        tiles: {
            id: string;
            type: ResourceType;
            value: number;
            hasRobber: boolean;
            coord: {
                q: number;
                r: number;
                s: number;
            };
        }[];
        intersections: {
            id: string;
            building: {
                type: "SETTLEMENT" | "CITY";
                playerId: string;
            } | null;
            coords: {
                q: number;
                r: number;
                s: number;
            }[];
        }[];
        paths: {
            id: string;
            road: {
                playerId: string;
            } | null;
            coords: {
                q: number;
                r: number;
                s: number;
            }[];
        }[];
    };
}
//# sourceMappingURL=Board.d.ts.map
```

## File: packages/engine/dist/core/Board.d.ts.map
```
{"version":3,"file":"Board.d.ts","sourceRoot":"","sources":["../../src/core/Board.ts"],"names":[],"mappings":"AAEA,OAAO,EAAE,YAAY,EAAE,IAAI,EAAE,YAAY,EAAE,IAAI,EAAE,MAAM,mBAAmB,CAAC;AAE3E,qBAAa,KAAK;IAET,KAAK,oBAA2B;IAChC,aAAa,4BAAmC;IAChD,KAAK,oBAA2B;;IAIvC;;OAEG;IACI,OAAO,CAAC,CAAC,EAAE,MAAM,EAAE,CAAC,EAAE,MAAM,EAAE,CAAC,EAAE,MAAM,EAAE,IAAI,EAAE,YAAY,EAAE,KAAK,EAAE,MAAM;IAejF,OAAO,CAAC,uBAAuB;IA8C/B;;OAEG;IACI,SAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;CA8BjB"}
```

## File: packages/engine/dist/core/Board.js
```javascript
// packages/engine/src/core/Board.ts
import { HexCoordinate } from './HexCoordinate.js';
import { ResourceType } from '../types/index.js';
export class Board {
    // We use Maps for O(1) lookup by coordinate strings
    tiles = new Map();
    intersections = new Map();
    paths = new Map();
    constructor() { }
    /**
     * Universal method to add a tile.
     */
    addTile(q, r, s, type, value) {
        const coord = new HexCoordinate(q, r, s);
        const tile = {
            id: `tile-${coord.toString()}`,
            coord,
            type,
            value,
            hasRobber: type === ResourceType.DESERT
        };
        this.tiles.set(coord.toString(), tile);
        // This is what we will write next:
        this.generateTopologyForTile(coord);
    }
    generateTopologyForTile(tileCoord) {
        const neighbors = tileCoord.getNeighbors();
        /**
         * 1. GENERATE PATHS (Edges)
         * A path is shared by the current tile and ONE neighbor.
         */
        neighbors.forEach((neighborCoord) => {
            // Create a unique key by sorting the two hex IDs alphabetically
            // Example: "0,0,0|0,1,-1" will always be the same regardless of which hex we start from
            const pathKey = [tileCoord.toString(), neighborCoord.toString()].sort().join('|');
            if (!this.paths.has(pathKey)) {
                this.paths.set(pathKey, {
                    id: pathKey,
                    coords: [tileCoord, neighborCoord],
                });
            }
        });
        /**
         * 2. GENERATE INTERSECTIONS (Corners)
         * An intersection is shared by the current tile and TWO adjacent neighbors.
         */
        for (let i = 0; i < 6; i++) {
            const n1 = neighbors[i];
            const n2 = neighbors[(i + 1) % 6];
            // An intersection is the meeting point of: Current Tile, Neighbor 1, and Neighbor 2
            const intersectionCoords = [tileCoord, n1, n2];
            // Canonical Key: Sort the 3 hex strings
            const intKey = intersectionCoords
                .map(c => c.toString())
                .sort()
                .join('|');
            if (!this.intersections.has(intKey)) {
                this.intersections.set(intKey, {
                    id: intKey,
                    coords: intersectionCoords,
                });
            }
        }
    }
    /**
     * Simple serializer for Agents and the GUI
     */
    serialize() {
        const tilesArr = this.tiles ? Array.from(this.tiles.values()) : [];
        const intArr = this.intersections ? Array.from(this.intersections.values()) : [];
        const pathArr = this.paths ? Array.from(this.paths.values()) : [];
        console.log(`ENGINE: Serializing ${tilesArr.length} tiles`);
        return {
            tiles: Array.from(this.tiles.values()).map(t => ({
                id: t.id,
                type: t.type,
                value: t.value,
                hasRobber: t.hasRobber,
                // FORCE the coordinate into a simple object
                coord: { q: t.coord.q, r: t.coord.r, s: t.coord.s }
            })),
            intersections: Array.from(this.intersections.values()).map(i => ({
                id: i.id,
                building: i.building ? { ...i.building } : null,
                // FORCE every coordinate in the array to be a simple object
                coords: i.coords.map(c => ({ q: c.q, r: c.r, s: c.s }))
            })),
            paths: Array.from(this.paths.values()).map(p => ({
                id: p.id,
                road: p.road ? { ...p.road } : null,
                coords: p.coords.map(c => ({ q: c.q, r: c.r, s: c.s }))
            }))
        };
    }
}
//# sourceMappingURL=Board.js.map
```

## File: packages/engine/dist/core/Board.js.map
```
{"version":3,"file":"Board.js","sourceRoot":"","sources":["../../src/core/Board.ts"],"names":[],"mappings":"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"}
```

## File: packages/engine/dist/core/HexCoordinate.d.ts
```typescript
export declare class HexCoordinate {
    readonly q: number;
    readonly r: number;
    readonly s: number;
    constructor(q: number, r: number, s?: number);
    toString(): string;
    getNeighbors(): HexCoordinate[];
}
//# sourceMappingURL=HexCoordinate.d.ts.map
```

## File: packages/engine/dist/core/HexCoordinate.d.ts.map
```
{"version":3,"file":"HexCoordinate.d.ts","sourceRoot":"","sources":["../../src/core/HexCoordinate.ts"],"names":[],"mappings":"AAAA,qBAAa,aAAa;aAIN,CAAC,EAAE,MAAM;aACT,CAAC,EAAE,MAAM;aACT,CAAC,EAAE,MAAM;gBAFT,CAAC,EAAE,MAAM,EACT,CAAC,EAAE,MAAM,EACT,CAAC,GAAE,MAAe;IAQ7B,QAAQ,IAAI,MAAM;IAIlB,YAAY,IAAI,aAAa,EAAE;CAcvC"}
```

## File: packages/engine/dist/core/HexCoordinate.js
```javascript
export class HexCoordinate {
    q;
    r;
    s;
    // By putting 'public readonly' inside the constructor, 
    // TypeScript automatically creates the "Name Tags" for q, r, and s.
    constructor(q, r, s = -q - r) {
        this.q = q;
        this.r = r;
        this.s = s;
        // The "Dictum" check
        if (Math.round(this.q + this.r + this.s) !== 0) {
            throw new Error("Invalid HexCoordinate: q + r + s must equal 0");
        }
    }
    toString() {
        return `${this.q},${this.r},${this.s}`;
    }
    getNeighbors() {
        const directions = [
            [1, -1, 0], [1, 0, -1], [0, 1, -1],
            [-1, 1, 0], [-1, 0, 1], [0, -1, 1]
        ];
        return directions.map(d => {
            return new HexCoordinate(this.q + (d[0] || 0), this.r + (d[1] || 0), this.s + (d[2] || 0));
        });
    }
}
//# sourceMappingURL=HexCoordinate.js.map
```

## File: packages/engine/dist/core/HexCoordinate.js.map
```
{"version":3,"file":"HexCoordinate.js","sourceRoot":"","sources":["../../src/core/HexCoordinate.ts"],"names":[],"mappings":"AAAA,MAAM,OAAO,aAAa;IAIN;IACA;IACA;IALlB,wDAAwD;IACxD,oEAAoE;IACpE,YACkB,CAAS,EACT,CAAS,EACT,IAAY,CAAC,CAAC,GAAG,CAAC;QAFlB,MAAC,GAAD,CAAC,CAAQ;QACT,MAAC,GAAD,CAAC,CAAQ;QACT,MAAC,GAAD,CAAC,CAAiB;QAElC,qBAAqB;QACrB,IAAI,IAAI,CAAC,KAAK,CAAC,IAAI,CAAC,CAAC,GAAG,IAAI,CAAC,CAAC,GAAG,IAAI,CAAC,CAAC,CAAC,KAAK,CAAC,EAAE,CAAC;YAC/C,MAAM,IAAI,KAAK,CAAC,+CAA+C,CAAC,CAAC;QACnE,CAAC;IACH,CAAC;IAEM,QAAQ;QACb,OAAO,GAAG,IAAI,CAAC,CAAC,IAAI,IAAI,CAAC,CAAC,IAAI,IAAI,CAAC,CAAC,EAAE,CAAC;IACzC,CAAC;IAEM,YAAY;QACjB,MAAM,UAAU,GAAG;YACjB,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC;YAClC,CAAC,CAAC,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC;SACnC,CAAC;QAEF,OAAO,UAAU,CAAC,GAAG,CAAC,CAAC,CAAC,EAAE;YACxB,OAAO,IAAI,aAAa,CACtB,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,EACpB,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,EACpB,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CACrB,CAAC;QACJ,CAAC,CAAC,CAAC;IACL,CAAC;CACF"}
```

## File: packages/engine/dist/core/Topology.d.ts
```typescript
import { HexCoordinate } from './HexCoordinate.js';
export declare enum VertexDir {
    UP = "UP",
    DOWN = "DOWN"
}
export declare enum EdgeDir {
    NORTH_WEST = "NW",
    NORTH_EAST = "NE",
    EAST = "E"
}
export declare class IntersectionCoord {
    readonly hex: HexCoordinate;
    readonly dir: VertexDir;
    constructor(hex: HexCoordinate, dir: VertexDir);
    toCanonical(): string;
}
//# sourceMappingURL=Topology.d.ts.map
```

## File: packages/engine/dist/core/Topology.d.ts.map
```
{"version":3,"file":"Topology.d.ts","sourceRoot":"","sources":["../../src/core/Topology.ts"],"names":[],"mappings":"AACA,OAAO,EAAE,aAAa,EAAE,MAAM,oBAAoB,CAAC;AAEnD,oBAAY,SAAS;IAAG,EAAE,OAAO;IAAE,IAAI,SAAS;CAAE;AAClD,oBAAY,OAAO;IAAG,UAAU,OAAO;IAAE,UAAU,OAAO;IAAE,IAAI,MAAM;CAAE;AAExE,qBAAa,iBAAiB;aAEV,GAAG,EAAE,aAAa;aAClB,GAAG,EAAE,SAAS;gBADd,GAAG,EAAE,aAAa,EAClB,GAAG,EAAE,SAAS;IAKzB,WAAW,IAAI,MAAM;CAK7B"}
```

## File: packages/engine/dist/core/Topology.js
```javascript
export var VertexDir;
(function (VertexDir) {
    VertexDir["UP"] = "UP";
    VertexDir["DOWN"] = "DOWN";
})(VertexDir || (VertexDir = {}));
export var EdgeDir;
(function (EdgeDir) {
    EdgeDir["NORTH_WEST"] = "NW";
    EdgeDir["NORTH_EAST"] = "NE";
    EdgeDir["EAST"] = "E";
})(EdgeDir || (EdgeDir = {}));
export class IntersectionCoord {
    hex;
    dir;
    constructor(hex, dir) {
        this.hex = hex;
        this.dir = dir;
    }
    // This is the "Secret Sauce" for flexibility.
    // It converts different hex-relative positions into one unique string.
    toCanonical() {
        // Logic: Always represent the intersection by the hex with the lowest coordinate values
        // to ensure that 3 hexes sharing a corner point to the same key.
        return `int:${this.hex.toString()}:${this.dir}`;
    }
}
//# sourceMappingURL=Topology.js.map
```

## File: packages/engine/dist/core/Topology.js.map
```
{"version":3,"file":"Topology.js","sourceRoot":"","sources":["../../src/core/Topology.ts"],"names":[],"mappings":"AAGA,MAAM,CAAN,IAAY,SAAsC;AAAlD,WAAY,SAAS;IAAG,sBAAS,CAAA;IAAE,0BAAa,CAAA;AAAC,CAAC,EAAtC,SAAS,KAAT,SAAS,QAA6B;AAClD,MAAM,CAAN,IAAY,OAA4D;AAAxE,WAAY,OAAO;IAAG,4BAAiB,CAAA;IAAE,4BAAiB,CAAA;IAAE,qBAAU,CAAA;AAAC,CAAC,EAA5D,OAAO,KAAP,OAAO,QAAqD;AAExE,MAAM,OAAO,iBAAiB;IAEV;IACA;IAFlB,YACkB,GAAkB,EAClB,GAAc;QADd,QAAG,GAAH,GAAG,CAAe;QAClB,QAAG,GAAH,GAAG,CAAW;IAC7B,CAAC;IAEJ,8CAA8C;IAC9C,uEAAuE;IAChE,WAAW;QAChB,wFAAwF;QACxF,iEAAiE;QACjE,OAAO,OAAO,IAAI,CAAC,GAAG,CAAC,QAAQ,EAAE,IAAI,IAAI,CAAC,GAAG,EAAE,CAAC;IAClD,CAAC;CACF"}
```

## File: packages/engine/dist/layouts/LayoutFactory.d.ts
```typescript
import { Board } from '../core/Board.js';
export declare class LayoutFactory {
    /**
     * The classic 19-hex Catan board
     */
    static createStandard(board: Board): void;
    /**
     * For the Agent: A completely random or elongated board
     */
    static createRectangle(board: Board, width: number, height: number): void;
}
//# sourceMappingURL=LayoutFactory.d.ts.map
```

## File: packages/engine/dist/layouts/LayoutFactory.d.ts.map
```
{"version":3,"file":"LayoutFactory.d.ts","sourceRoot":"","sources":["../../src/layouts/LayoutFactory.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,KAAK,EAAE,MAAM,kBAAkB,CAAC;AAGzC,qBAAa,aAAa;IACxB;;OAEG;IACH,MAAM,CAAC,cAAc,CAAC,KAAK,EAAE,KAAK;IAYlC;;OAEG;IACH,MAAM,CAAC,eAAe,CAAC,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,MAAM,EAAE,MAAM,EAAE,MAAM;CAGnE"}
```

## File: packages/engine/dist/layouts/LayoutFactory.js
```javascript
import { ResourceType } from '../types/index.js';
export class LayoutFactory {
    /**
     * The classic 19-hex Catan board
     */
    static createStandard(board) {
        // Array of coordinates for a radius-2 hexagonal grid
        const coords = [
            [0, 0, 0], [0, -1, 1], [0, 1, -1], [1, -1, 0], [1, 0, -1], [-1, 1, 0], [-1, 0, 1], // ... etc
        ];
        // In a real implementation, we'd map these to standard resources/numbers
        coords.forEach(([q, r, s]) => {
            board.addTile(q, r, s, ResourceType.WHEAT, 8);
        });
    }
    /**
     * For the Agent: A completely random or elongated board
     */
    static createRectangle(board, width, height) {
        // Custom logic to fill a rectangular grid with hexes
    }
}
//# sourceMappingURL=LayoutFactory.js.map
```

## File: packages/engine/dist/layouts/LayoutFactory.js.map
```
{"version":3,"file":"LayoutFactory.js","sourceRoot":"","sources":["../../src/layouts/LayoutFactory.ts"],"names":[],"mappings":"AACA,OAAO,EAAE,YAAY,EAAE,MAAM,mBAAmB,CAAC;AAEjD,MAAM,OAAO,aAAa;IACxB;;OAEG;IACH,MAAM,CAAC,cAAc,CAAC,KAAY;QAChC,qDAAqD;QACrD,MAAM,MAAM,GAAG;YACb,CAAC,CAAC,EAAC,CAAC,EAAC,CAAC,CAAC,EAAE,CAAC,CAAC,EAAC,CAAC,CAAC,EAAC,CAAC,CAAC,EAAE,CAAC,CAAC,EAAC,CAAC,EAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,EAAC,CAAC,CAAC,EAAC,CAAC,CAAC,EAAE,CAAC,CAAC,EAAC,CAAC,EAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAC,CAAC,EAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAC,CAAC,EAAC,CAAC,CAAC,EAAE,UAAU;SAChF,CAAC;QAEF,yEAAyE;QACzE,MAAM,CAAC,OAAO,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,EAAE,EAAE;YAC3B,KAAK,CAAC,OAAO,CAAC,CAAC,EAAE,CAAC,EAAE,CAAC,EAAE,YAAY,CAAC,KAAK,EAAE,CAAC,CAAC,CAAC;QAChD,CAAC,CAAC,CAAC;IACL,CAAC;IAED;;OAEG;IACH,MAAM,CAAC,eAAe,CAAC,KAAY,EAAE,KAAa,EAAE,MAAc;QAC/D,qDAAqD;IACxD,CAAC;CACF"}
```

## File: packages/engine/dist/types/index.d.ts
```typescript
import { HexCoordinate } from '../core/HexCoordinate.js';
export type GamePhase = 'STARTUP' | 'ROLLING' | 'TRADING_BUILDING' | 'WAITING_FOR_TRADE' | 'ROBBER_DISCARD' | 'ROBBER_MOVE' | 'ROBBER_STEAL' | 'YEAR_OF_PLENTY' | 'MONOPOLY';
export declare enum DevCardType {
    KNIGHT = "KNIGHT",
    MONOPOLY = "MONOPOLY",
    YEAR_OF_PLENTY = "YEAR_OF_PLENTY",
    ROAD_BUILDING = "ROAD_BUILDING",
    VICTORY_POINT = "VICTORY_POINT"
}
export declare enum ResourceType {
    WHEAT = "WHEAT",
    WOOD = "WOOD",
    BRICK = "BRICK",
    SHEEP = "SHEEP",
    ORE = "ORE",
    DESERT = "DESERT"
}
export interface DevCard {
    id: string;
    type: string;
    boughtTurn: number;
}
export interface Player {
    id: string;
    name: string;
    color: string;
    controllerId: string | null;
    controllerType: 'HUMAN' | 'AGENT' | null;
    isHost: boolean;
    isOnline: boolean;
    resources: {
        brick: number;
        wood: number;
        wheat: number;
        sheep: number;
        ore: number;
    };
    victoryPoints: number;
    devCards: any[];
    numPlayedKnights: number;
    numSettlements: number;
    hasLargestArmy: boolean;
    hasLongestRoad: boolean;
}
export interface Tile {
    id: string;
    coord: HexCoordinate;
    type: ResourceType;
    value: number;
    hasRobber: boolean;
}
export interface GameState {
    id: string;
    phase: string;
    startupIndex: number;
    startupSubPhase: string;
    setupSequence: string[];
    currentPlayerId: string;
    players: Player[];
    board: {
        tiles: Map<string, Tile>;
        intersections: Map<string, Intersection>;
        paths: Map<string, Path>;
    };
    turnOrder: string[];
    robberTileId: string;
    victimsAvailable: string[];
    diceResult?: [number, number];
    activeTrade?: any;
    turnNumber: number;
    playedDevCardThisTurn: boolean;
    devCardDeck: string[];
}
export interface Intersection {
    id: string;
    coords: HexCoordinate[];
    building?: {
        type: 'SETTLEMENT' | 'CITY';
        playerId: string;
    };
}
export interface LogEntry {
    id: string;
    timestamp: number;
    type: 'SYSTEM' | 'CHAT' | 'ACTION';
    playerId?: string;
    message: string;
    metadata?: any;
}
export interface Path {
    id: string;
    coords: HexCoordinate[];
    road?: {
        playerId: string;
    };
}
export interface ResourceHand {
    brick: number;
    wood: number;
    wheat: number;
    sheep: number;
    ore: number;
}
export interface TradeOffer {
    senderId: string;
    offering: ResourceHand;
    requesting: ResourceHand;
    responses: Map<string, 'ACCEPTED' | 'REJECTED' | 'PENDING'>;
}
//# sourceMappingURL=index.d.ts.map
```

## File: packages/engine/dist/types/index.d.ts.map
```
{"version":3,"file":"index.d.ts","sourceRoot":"","sources":["../../src/types/index.ts"],"names":[],"mappings":"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"}
```

## File: packages/engine/dist/types/index.js
```javascript
export var DevCardType;
(function (DevCardType) {
    DevCardType["KNIGHT"] = "KNIGHT";
    DevCardType["MONOPOLY"] = "MONOPOLY";
    DevCardType["YEAR_OF_PLENTY"] = "YEAR_OF_PLENTY";
    DevCardType["ROAD_BUILDING"] = "ROAD_BUILDING";
    DevCardType["VICTORY_POINT"] = "VICTORY_POINT";
})(DevCardType || (DevCardType = {}));
export var ResourceType;
(function (ResourceType) {
    ResourceType["WHEAT"] = "WHEAT";
    ResourceType["WOOD"] = "WOOD";
    ResourceType["BRICK"] = "BRICK";
    ResourceType["SHEEP"] = "SHEEP";
    ResourceType["ORE"] = "ORE";
    ResourceType["DESERT"] = "DESERT";
})(ResourceType || (ResourceType = {}));
//# sourceMappingURL=index.js.map
```

## File: packages/engine/dist/types/index.js.map
```
{"version":3,"file":"index.js","sourceRoot":"","sources":["../../src/types/index.ts"],"names":[],"mappings":"AAMA,MAAM,CAAN,IAAY,WAMX;AAND,WAAY,WAAW;IACrB,gCAAiB,CAAA;IACjB,oCAAqB,CAAA;IACrB,gDAAiC,CAAA;IACjC,8CAA+B,CAAA;IAC/B,8CAA+B,CAAA;AACjC,CAAC,EANW,WAAW,KAAX,WAAW,QAMtB;AAED,MAAM,CAAN,IAAY,YAEX;AAFD,WAAY,YAAY;IACtB,+BAAe,CAAA;IAAE,6BAAa,CAAA;IAAE,+BAAe,CAAA;IAAE,+BAAe,CAAA;IAAE,2BAAW,CAAA;IAAE,iCAAiB,CAAA;AAClG,CAAC,EAFW,YAAY,KAAZ,YAAY,QAEvB"}
```

## File: packages/engine/dist/ActionProcessor.d.ts
```typescript
import { ActionResponse } from './actions/Action.js';
import { GameState } from './types/index.js';
export declare class ActionProcessor {
    /**
     * This is the entry point. It receives a command and the current game state.
     */
    static process(state: GameState, rawAction: any): ActionResponse;
    /**
     * This is the "Factory". It matches the text type (e.g. 'ROLL_DICE')
     * to the actual code logic (RollDiceAction).
     */
    private static createAction;
}
//# sourceMappingURL=ActionProcessor.d.ts.map
```

## File: packages/engine/dist/ActionProcessor.d.ts.map
```
{"version":3,"file":"ActionProcessor.d.ts","sourceRoot":"","sources":["../src/ActionProcessor.ts"],"names":[],"mappings":"AAAA,OAAO,EAAU,cAAc,EAAE,MAAM,qBAAqB,CAAC;AAC7D,OAAO,EAAE,SAAS,EAAE,MAAM,kBAAkB,CAAC;AAmC7C,qBAAa,eAAe;IAC1B;;OAEG;WACW,OAAO,CAAC,KAAK,EAAE,SAAS,EAAE,SAAS,EAAE,GAAG,GAAG,cAAc;IAuBvE;;;OAGG;IACH,OAAO,CAAC,MAAM,CAAC,YAAY;CA6D5B"}
```

## File: packages/engine/dist/ActionProcessor.js
```javascript
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
import { YearOfPlentyChoiceAction } from './actions/YearOfPlentyChoice.js';
import { StartGameAction } from './actions/StartGame.js';
import { AddSeatAction } from './actions/AddSeat.js';
import { RemoveSeatAction } from './actions/RemoveSeat.js';
//import { AssignControllerAction } from './actions/AssignController.js';
/*
      case 'START_GAME':
        return new StartGameAction(playerId, payload);
      
      // NEW COMMANDS FOR THE KING:
      case 'ADD_SEAT':
        return new AddSeatAction(playerId, payload);
        
      case 'REMOVE_SEAT':
        return new RemoveSeatAction(playerId, payload);
        
      case 'ASSIGN_CONTROLLER':
        return new AssignControllerAction(playerId, payload);
*/
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
            case 'START_GAME':
                return new StartGameAction(playerId, payload);
            // NEW COMMANDS FOR THE KING:
            case 'ADD_SEAT':
                return new AddSeatAction(playerId, payload);
            case 'REMOVE_SEAT':
                return new RemoveSeatAction(playerId, payload);
            // case 'ASSIGN_CONTROLLER':
            //   return new AssignControllerAction(playerId, payload);
            default:
                return null;
        }
    }
}
//# sourceMappingURL=ActionProcessor.js.map
```

## File: packages/engine/dist/ActionProcessor.js.map
```
{"version":3,"file":"ActionProcessor.js","sourceRoot":"","sources":["../src/ActionProcessor.ts"],"names":[],"mappings":"AAEA,OAAO,EAAE,qBAAqB,EAAE,MAAM,8BAA8B,CAAC;AACrE,OAAO,EAAE,gBAAgB,EAAE,MAAM,yBAAyB,CAAC;AAC3D,OAAO,EAAE,kBAAkB,EAAE,MAAM,2BAA2B,CAAC;AAC/D,OAAO,EAAE,oBAAoB,EAAE,MAAM,6BAA6B,CAAC;AACnE,OAAO,EAAE,gBAAgB,EAAE,MAAM,yBAAyB,CAAC;AAC3D,OAAO,EAAE,sBAAsB,EAAE,MAAM,+BAA+B,CAAC;AACvE,OAAO,EAAE,4BAA4B,EAAE,MAAM,qCAAqC,CAAC;AACnF,OAAO,EAAE,gBAAgB,EAAE,MAAM,yBAAyB,CAAC;AAC3D,OAAO,EAAE,kBAAkB,EAAE,MAAM,2BAA2B,CAAC;AAC/D,OAAO,EAAE,iBAAiB,EAAE,MAAM,0BAA0B,CAAC;AAC7D,OAAO,EAAE,cAAc,EAAE,MAAM,uBAAuB,CAAC;AACvD,OAAO,EAAE,cAAc,EAAE,MAAM,uBAAuB,CAAC;AAEvD,OAAO,EAAE,wBAAwB,EAAE,MAAM,iCAAiC,CAAC;AAC3E,OAAO,EAAE,eAAe,EAAE,MAAM,wBAAwB,CAAC;AACzD,OAAO,EAAE,aAAa,EAAE,MAAM,sBAAsB,CAAC;AACrD,OAAO,EAAE,gBAAgB,EAAE,MAAM,yBAAyB,CAAC;AAC3D,yEAAyE;AAEzE;;;;;;;;;;;;;EAaE;AAEF,MAAM,OAAO,eAAe;IAC1B;;OAEG;IACI,MAAM,CAAC,OAAO,CAAC,KAAgB,EAAE,SAAc;QACpD,qCAAqC;QACrC,MAAM,MAAM,GAAG,IAAI,CAAC,YAAY,CAAC,SAAS,CAAC,CAAC;QAE5C,IAAI,CAAC,MAAM,EAAE,CAAC;YACZ,OAAO,EAAE,OAAO,EAAE,KAAK,EAAE,OAAO,EAAE,2CAA2C,SAAS,CAAC,IAAI,EAAE,EAAE,CAAC;QAClG,CAAC;QAED,sCAAsC;QACtC,IAAI,KAAK,CAAC,eAAe,KAAK,MAAM,CAAC,QAAQ,EAAE,CAAC;YAC9C,OAAO,EAAE,OAAO,EAAE,KAAK,EAAE,OAAO,EAAE,qBAAqB,EAAE,CAAC;QAC5D,CAAC;QAED,qDAAqD;QACrD,MAAM,UAAU,GAAG,MAAM,CAAC,QAAQ,CAAC,KAAK,CAAC,CAAC;QAC1C,IAAI,CAAC,UAAU,CAAC,KAAK,EAAE,CAAC;YACtB,OAAO,EAAE,OAAO,EAAE,KAAK,EAAE,OAAO,EAAE,UAAU,CAAC,KAAK,EAAE,CAAC;QACvD,CAAC;QAED,8DAA8D;QAC9D,OAAO,MAAM,CAAC,OAAO,CAAC,KAAK,CAAC,CAAC;IAC/B,CAAC;IAED;;;OAGG;IACK,MAAM,CAAC,YAAY,CAAC,GAAQ;QAClC,+EAA+E;QAC/E,MAAM,EAAE,QAAQ,EAAE,OAAO,EAAE,GAAG,GAAG,CAAC;QAElC,QAAQ,GAAG,CAAC,IAAI,EAAE,CAAC;YACjB,KAAK,WAAW;gBACd,OAAO,IAAI,cAAc,CAAC,QAAQ,EAAE,OAAO,CAAC,CAAC;YAE/C,KAAK,kBAAkB;gBACrB,OAAO,IAAI,qBAAqB,CAAC,QAAQ,EAAE,OAAO,CAAC,CAAC;YAEtD,KAAK,aAAa;gBAChB,OAAO,IAAI,gBAAgB,CAAC,QAAQ,EAAE,OAAO,CAAC,CAAC;YAEjD,KAAK,YAAY;gBACf,OAAO,IAAI,cAAc,CAAC,QAAQ,EAAE,OAAO,CAAC,CAAC;YAE/C,KAAK,eAAe;gBAClB,OAAO,IAAI,kBAAkB,CAAC,QAAQ,EAAE,OAAO,CAAC,CAAC;YAEnD,KAAK,cAAc;gBACjB,OAAO,IAAI,iBAAiB,CAAC,QAAQ,EAAE,OAAO,CAAC,CAAC;YAElD,KAAK,eAAe;gBAClB,OAAO,IAAI,kBAAkB,CAAC,QAAQ,EAAE,OAAO,CAAC,CAAC;YAEnD,KAAK,0BAA0B;gBAC7B,OAAO,IAAI,4BAA4B,CAAC,QAAQ,EAAE,OAAO,CAAC,CAAC;YAE7D,KAAK,oBAAoB;gBACvB,OAAO,IAAI,sBAAsB,CAAC,QAAQ,EAAE,OAAO,CAAC,CAAC;YAEvD,KAAK,aAAa;gBAChB,OAAO,IAAI,gBAAgB,CAAC,QAAQ,EAAE,OAAO,CAAC,CAAC;YAEjD,KAAK,iBAAiB;gBACpB,OAAO,IAAI,oBAAoB,CAAC,QAAQ,EAAE,OAAO,CAAC,CAAC;YAErD,KAAK,uBAAuB;gBAC1B,OAAO,IAAI,wBAAwB,CAAC,QAAQ,EAAE,OAAO,CAAC,CAAC;YAEzD,KAAK,cAAc;gBACjB,OAAO,IAAI,gBAAgB,CAAC,QAAQ,EAAE,OAAO,CAAC,CAAC;YAEjD,KAAK,YAAY;gBACf,OAAO,IAAI,eAAe,CAAC,QAAQ,EAAE,OAAO,CAAC,CAAC;YAEhD,6BAA6B;YAC7B,KAAK,UAAU;gBACb,OAAO,IAAI,aAAa,CAAC,QAAQ,EAAE,OAAO,CAAC,CAAC;YAE9C,KAAK,aAAa;gBAChB,OAAO,IAAI,gBAAgB,CAAC,QAAQ,EAAE,OAAO,CAAC,CAAC;YAEjD,4BAA4B;YAC5B,0DAA0D;YAE1D;gBACE,OAAO,IAAI,CAAC;QAChB,CAAC;IACH,CAAC;CACF"}
```

## File: packages/engine/dist/coordinates.d.ts
```typescript
/**
 * Represents a Tile on the board using Axial or Cube coordinates.
 * Catan usually uses Cube coordinates (q, r, s) where q + r + s = 0.
 */
export declare class HexCoordinate {
    readonly q: number;
    readonly r: number;
    readonly s: number;
    constructor(q: number, r: number, s?: number);
    equals(other: HexCoordinate): boolean;
    toString(): string;
}
/**
 * Intersections are the corners of the hexes (where Settlements/Cities go).
 * Each hex has 6 intersections.
 */
export declare enum Direction {
    NORTH = 0,
    NORTH_EAST = 1,
    SOUTH_EAST = 2,
    SOUTH = 3,
    SOUTH_WEST = 4,
    NORTH_WEST = 5
}
export declare class IntersectionCoordinate {
    readonly hex: HexCoordinate;
    readonly direction: Direction;
    constructor(hex: HexCoordinate, direction: Direction);
}
/**
 * Paths are the edges between hexes (where Roads go).
 */
export declare class PathCoordinate {
    readonly hex: HexCoordinate;
    readonly direction: Direction;
    constructor(hex: HexCoordinate, direction: Direction);
}
//# sourceMappingURL=coordinates.d.ts.map
```

## File: packages/engine/dist/coordinates.d.ts.map
```
{"version":3,"file":"coordinates.d.ts","sourceRoot":"","sources":["../src/coordinates.ts"],"names":[],"mappings":"AAAA;;;GAGG;AACH,qBAAa,aAAa;aAEN,CAAC,EAAE,MAAM;aACT,CAAC,EAAE,MAAM;aACT,CAAC,EAAE,MAAM;gBAFT,CAAC,EAAE,MAAM,EACT,CAAC,EAAE,MAAM,EACT,CAAC,GAAE,MAAe;IAOpC,MAAM,CAAC,KAAK,EAAE,aAAa,GAAG,OAAO;IAIrC,QAAQ,IAAI,MAAM;CAGnB;AAED;;;GAGG;AACH,oBAAY,SAAS;IAAG,KAAK,IAAI;IAAE,UAAU,IAAI;IAAE,UAAU,IAAI;IAAE,KAAK,IAAI;IAAE,UAAU,IAAI;IAAE,UAAU,IAAI;CAAE;AAE9G,qBAAa,sBAAsB;aAEf,GAAG,EAAE,aAAa;aAClB,SAAS,EAAE,SAAS;gBADpB,GAAG,EAAE,aAAa,EAClB,SAAS,EAAE,SAAS;CAKvC;AAED;;GAEG;AACH,qBAAa,cAAc;aAEP,GAAG,EAAE,aAAa;aAClB,SAAS,EAAE,SAAS;gBADpB,GAAG,EAAE,aAAa,EAClB,SAAS,EAAE,SAAS;CAEvC"}
```

## File: packages/engine/dist/coordinates.js
```javascript
/**
 * Represents a Tile on the board using Axial or Cube coordinates.
 * Catan usually uses Cube coordinates (q, r, s) where q + r + s = 0.
 */
export class HexCoordinate {
    q;
    r;
    s;
    constructor(q, r, s = -q - r) {
        this.q = q;
        this.r = r;
        this.s = s;
        if (Math.round(q + r + s) !== 0) {
            throw new Error("Invalid HexCoordinate: q + r + s must equal 0");
        }
    }
    equals(other) {
        return this.q === other.q && this.r === other.r;
    }
    toString() {
        return `Hex(${this.q},${this.r},${this.s})`;
    }
}
/**
 * Intersections are the corners of the hexes (where Settlements/Cities go).
 * Each hex has 6 intersections.
 */
export var Direction;
(function (Direction) {
    Direction[Direction["NORTH"] = 0] = "NORTH";
    Direction[Direction["NORTH_EAST"] = 1] = "NORTH_EAST";
    Direction[Direction["SOUTH_EAST"] = 2] = "SOUTH_EAST";
    Direction[Direction["SOUTH"] = 3] = "SOUTH";
    Direction[Direction["SOUTH_WEST"] = 4] = "SOUTH_WEST";
    Direction[Direction["NORTH_WEST"] = 5] = "NORTH_WEST";
})(Direction || (Direction = {}));
export class IntersectionCoordinate {
    hex;
    direction;
    constructor(hex, direction) {
        this.hex = hex;
        this.direction = direction;
    }
}
/**
 * Paths are the edges between hexes (where Roads go).
 */
export class PathCoordinate {
    hex;
    direction;
    constructor(hex, direction) {
        this.hex = hex;
        this.direction = direction;
    }
}
//# sourceMappingURL=coordinates.js.map
```

## File: packages/engine/dist/coordinates.js.map
```
{"version":3,"file":"coordinates.js","sourceRoot":"","sources":["../src/coordinates.ts"],"names":[],"mappings":"AAAA;;;GAGG;AACH,MAAM,OAAO,aAAa;IAEN;IACA;IACA;IAHlB,YACkB,CAAS,EACT,CAAS,EACT,IAAY,CAAC,CAAC,GAAG,CAAC;QAFlB,MAAC,GAAD,CAAC,CAAQ;QACT,MAAC,GAAD,CAAC,CAAQ;QACT,MAAC,GAAD,CAAC,CAAiB;QAElC,IAAI,IAAI,CAAC,KAAK,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,EAAE,CAAC;YAChC,MAAM,IAAI,KAAK,CAAC,+CAA+C,CAAC,CAAC;QACnE,CAAC;IACH,CAAC;IAED,MAAM,CAAC,KAAoB;QACzB,OAAO,IAAI,CAAC,CAAC,KAAK,KAAK,CAAC,CAAC,IAAI,IAAI,CAAC,CAAC,KAAK,KAAK,CAAC,CAAC,CAAC;IAClD,CAAC;IAED,QAAQ;QACN,OAAO,OAAO,IAAI,CAAC,CAAC,IAAI,IAAI,CAAC,CAAC,IAAI,IAAI,CAAC,CAAC,GAAG,CAAC;IAC9C,CAAC;CACF;AAED;;;GAGG;AACH,MAAM,CAAN,IAAY,SAAkG;AAA9G,WAAY,SAAS;IAAG,2CAAS,CAAA;IAAE,qDAAc,CAAA;IAAE,qDAAc,CAAA;IAAE,2CAAS,CAAA;IAAE,qDAAc,CAAA;IAAE,qDAAc,CAAA;AAAC,CAAC,EAAlG,SAAS,KAAT,SAAS,QAAyF;AAE9G,MAAM,OAAO,sBAAsB;IAEf;IACA;IAFlB,YACkB,GAAkB,EAClB,SAAoB;QADpB,QAAG,GAAH,GAAG,CAAe;QAClB,cAAS,GAAT,SAAS,CAAW;IACnC,CAAC;CAIL;AAED;;GAEG;AACH,MAAM,OAAO,cAAc;IAEP;IACA;IAFlB,YACkB,GAAkB,EAClB,SAAoB;QADpB,QAAG,GAAH,GAAG,CAAe;QAClB,cAAS,GAAT,SAAS,CAAW;IACnC,CAAC;CACL"}
```

## File: packages/engine/dist/index.d.ts
```typescript
export * from './core/Board.js';
export * from './core/HexCoordinate.js';
export * from './types/index.js';
export * from './ActionProcessor.js';
export * from './layouts/LayoutFactory.js';
//# sourceMappingURL=index.d.ts.map
```

## File: packages/engine/dist/index.d.ts.map
```
{"version":3,"file":"index.d.ts","sourceRoot":"","sources":["../src/index.ts"],"names":[],"mappings":"AAIA,cAAc,iBAAiB,CAAC;AAChC,cAAc,yBAAyB,CAAC;AACxC,cAAc,kBAAkB,CAAC;AACjC,cAAc,sBAAsB,CAAC;AACrC,cAAc,4BAA4B,CAAC"}
```

## File: packages/engine/dist/index.js
```javascript
// packages/engine/src/index.ts
// Export everything the outside world (Server, Agent, GUI) needs
export * from './core/Board.js';
export * from './core/HexCoordinate.js';
export * from './types/index.js'; // This reveals GameState
export * from './ActionProcessor.js'; // This reveals ActionProcessor
export * from './layouts/LayoutFactory.js'; // This reveals LayoutFactory
//# sourceMappingURL=index.js.map
```

## File: packages/engine/dist/index.js.map
```
{"version":3,"file":"index.js","sourceRoot":"","sources":["../src/index.ts"],"names":[],"mappings":"AAAA,+BAA+B;AAE/B,iEAAiE;AAEjE,cAAc,iBAAiB,CAAC;AAChC,cAAc,yBAAyB,CAAC;AACxC,cAAc,kBAAkB,CAAC,CAAQ,yBAAyB;AAClE,cAAc,sBAAsB,CAAC,CAAI,+BAA+B;AACxE,cAAc,4BAA4B,CAAC,CAAC,6BAA6B"}
```

## File: packages/engine/src/actions/Action.d.ts
```typescript
import { GameState } from '../types';
export interface ActionResponse {
    success: boolean;
    message?: string;
    newState?: GameState;
    followUp?: string;
}
export interface Action {
    type: string;
    playerId: string;
    payload: any;
    validate(state: GameState): {
        valid: boolean;
        error?: string;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=Action.d.ts.map
```

## File: packages/engine/src/actions/Action.ts
```typescript
import { GameState } from '../types/index.js';

export interface ActionResponse {
  success: boolean;
  message?: string;
  newState?: GameState;
  followUp?: string; // e.g., "MOVE_ROBBER"
}

export interface Action {
  type: string;
  playerId: string;
  payload: any;
  
  // Validation: Can this move be made?
  validate(state: GameState): { valid: boolean; error?: string };
  
  // Execution: Update the state
  execute(state: GameState): ActionResponse;
}
```

## File: packages/engine/src/actions/BuildSettlement.d.ts
```typescript
import { Action, ActionResponse } from './Action';
import { GameState } from '../types';
export declare class BuildSettlementAction implements Action {
    playerId: string;
    payload: {
        intersectionId: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        intersectionId: string;
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: never;
    };
    execute(state: GameState): ActionResponse;
    private checkDistanceRule;
}
//# sourceMappingURL=BuildSettlement.d.ts.map
```

## File: packages/engine/src/actions/BuildSettlement.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';

export class BuildSettlementAction implements Action {
  type = 'BUILD_SETTLEMENT';
  
  constructor(
    public playerId: string, 
    public payload: { intersectionId: string }
  ) {}

  validate(state: GameState) {
    const player = state.players.find(p => p.id === this.playerId)!;

    if (!player) {
      return { valid: false, error: "Player not found in this game." };
    }
    const intersection = state.board.intersections.get(this.payload.intersectionId);

    if (!intersection) return { valid: false, error: "Intersection does not exist" };
    if (intersection.building) return { valid: false, error: "Spot already taken" };

    // Distance Rule: No settlement within 1 edge of another settlement
    // (This is where our Topology math pays off!)
    const isTooClose = this.checkDistanceRule(state, this.payload.intersectionId);
    if (isTooClose) return { valid: false, error: "Too close to another settlement" };

    // Resource Check
    if (player.resources.brick < 1 || player.resources.wood < 1 || 
        player.resources.wheat < 1 || player.resources.sheep < 1) {
      return { valid: false, error: "Insufficient resources" };
    }

    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    const player = state.players.find(p => p.id === this.playerId)!;
    const intersection = state.board.intersections.get(this.payload.intersectionId)!;

    // Deduct Resources
    player.resources.brick -= 1;
    player.resources.wood -= 1;
    player.resources.wheat -= 1;
    player.resources.sheep -= 1;

    // Place Building
    intersection.building = {
      type: 'SETTLEMENT',
      playerId: this.playerId
    };

    player.victoryPoints += 1;

    return { success: true, newState: state };
  }

  private checkDistanceRule(state: GameState, intId: string): boolean {
    // Logic: Get neighbors of this intersection from the Board graph
    // If any neighbor has a building, return true.
    return false; // simplified for now
  }
}
```

## File: packages/engine/src/actions/BuyDevCard.d.ts
```typescript
import { Action, ActionResponse } from './Action';
import { GameState } from '../types';
export declare class BuyDevCardAction implements Action {
    playerId: string;
    type: string;
    constructor(playerId: string);
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: never;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=BuyDevCard.d.ts.map
```

## File: packages/engine/src/actions/BuyDevCard.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState, DevCardType } from '../types/index.js';

export class BuyDevCardAction implements Action {
  type = 'BUY_DEV_CARD';

  constructor(
    public playerId: string,
    public payload: { payloadId: string }
  ) {}

  validate(state: GameState) {
    const player = state.players.find(p => p.id === this.playerId)!;
    if (state.devCardDeck.length === 0) return { valid: false, error: "No cards left in deck" };
    
    // Cost: 1 Wheat, 1 Sheep, 1 Ore
    if (player.resources.wheat < 1 || player.resources.sheep < 1 || player.resources.ore < 1) {
      return { valid: false, error: "Insufficient resources for a Dev Card" };
    }
    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    const player = state.players.find(p => p.id === this.playerId)!;
    
    // Deduct resources
    player.resources.wheat--; player.resources.sheep--; player.resources.ore--;

    // Draw card
    const type = state.devCardDeck.pop()!;
    player.devCards.push({
      id: Math.random().toString(36),
      type,
      boughtTurn: state.turnNumber
    });

    return { success: true, message: "You bought a Development Card!", newState: state };
  }
}
```

## File: packages/engine/src/actions/ExecuteTrade.d.ts
```typescript
export declare class ExecuteTradeAction implements Action {
    playerId: string;
    payload: {
        partnerId: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        partnerId: string;
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: never;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=ExecuteTrade.d.ts.map
```

## File: packages/engine/src/actions/ExecuteTrade.ts
```typescript
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
```

## File: packages/engine/src/actions/MonopolyChoice.d.ts
```typescript
export declare class MonopolyChoiceAction implements Action {
    playerId: string;
    payload: {
        resourceType: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        resourceType: string;
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: never;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=MonopolyChoice.d.ts.map
```

## File: packages/engine/src/actions/MonopolyChoice.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState, ResourceHand } from '../types/index.js';

export class MonopolyChoiceAction implements Action {
  type = 'MONOPOLY_CHOICE';

  constructor(
    public playerId: string,
    public payload: { resourceType: string }
  ) {}

  validate(state: GameState) {
    if (state.phase !== 'MONOPOLY') return { valid: false, error: "Not in Monopoly phase." };
    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    const thief = state.players.find(p => p.id === this.playerId)!;
    const resType = this.payload.resourceType as keyof ResourceHand;
    let totalStolen = 0;

    state.players.forEach(victim => {
      if (victim.id !== this.playerId) {
        totalStolen += victim.resources[resType];
        victim.resources[resType] = 0;
      }
    });

    thief.resources[resType] += totalStolen;
    state.phase = 'TRADING_BUILDING';

    return { 
      success: true, 
      message: `Monopoly! You stole ${totalStolen} ${String(resType)} from other players.`, 
      newState: state 
    };
  }
}
```

## File: packages/engine/src/actions/MoveRobber.d.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class MoveRobberAction implements Action {
    playerId: string;
    payload: {
        hexId: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        hexId: string;
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: never;
    };
    execute(state: GameState): ActionResponse;
    private getTotalCards;
}
//# sourceMappingURL=MoveRobber.d.ts.map
```

## File: packages/engine/src/actions/MoveRobber.ts
```typescript
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
```

## File: packages/engine/src/actions/PlaceInitialRoad.d.ts
```typescript
import { Action, ActionResponse } from './Action';
import { GameState } from '../types';
export declare class PlaceInitialRoadAction implements Action {
    playerId: string;
    payload: {
        pathId: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        pathId: string;
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: never;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=PlaceInitialRoad.d.ts.map
```

## File: packages/engine/src/actions/PlaceInitialRoad.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';

export class PlaceInitialRoadAction implements Action {
  type = 'PLACE_INITIAL_ROAD';

  constructor(
    public playerId: string,
    public payload: { pathId: string }
  ) {}

  validate(state: GameState) {
    if (state.phase !== 'STARTUP' || state.startupSubPhase !== 'ROAD') {
      return { valid: false, error: "Not the time for initial road placement." };
    }

    const path = state.board.paths.get(this.payload.pathId);
    if (!path || path.road) return { valid: false, error: "Invalid or occupied path." };

    // Rule: Must be connected to a settlement owned by the player
    // In Startup, specifically the one they just placed.
    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    const path = state.board.paths.get(this.payload.pathId)!;
    path.road = { playerId: this.playerId };

    // Increment Startup Progress
    state.startupIndex += 1;
    state.startupSubPhase = 'SETTLEMENT';

    // Check if Startup is finished
    if (state.startupIndex === 8) {
      state.phase = 'ROLLING';
      state.currentPlayerId = state.turnOrder[0]; // Back to player 1
      return { success: true, message: "Startup finished! Begin the game.", newState: state };
    }

    return { 
      success: true, 
      message: "Road placed. Next player's turn.", 
      newState: state 
    };
  }
}
```

## File: packages/engine/src/actions/PlaceInitialSettlement.d.ts
```typescript
import { Action, ActionResponse } from './Action';
import { GameState } from '../types/index.js';
export declare class PlaceInitialSettlementAction implements Action {
    playerId: string;
    payload: {
        intersectionId: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        intersectionId: string;
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: never;
    };
    execute(state: GameState): ActionResponse;
    private getExpectedPlayer;
    private distributeStartingResources;
    private isTooClose;
}
//# sourceMappingURL=PlaceInitialSettlement.d.ts.map
```

## File: packages/engine/src/actions/PlaceInitialSettlement.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState, ResourceType } from '../types/index.js';

export class PlaceInitialSettlementAction implements Action {
  type = 'PLACE_INITIAL_SETTLEMENT';

  constructor(
    public playerId: string,
    public payload: { intersectionId: string }
  ) {}

  validate(state: GameState) {
    if (state.phase !== 'STARTUP' || state.startupSubPhase !== 'SETTLEMENT') {
      return { valid: false, error: "Not the time for initial settlement placement." };
    }
    
    // Determine whose turn it is in the serpentine order
    const expectedPlayerId = this.getExpectedPlayer(state);
    if (this.playerId !== expectedPlayerId) {
      return { valid: false, error: `It is ${expectedPlayerId}'s turn to place.` };
    }

    const intersection = state.board.intersections.get(this.payload.intersectionId);
    if (!intersection || intersection.building) {
      return { valid: false, error: "Invalid or occupied intersection." };
    }

    // Distance Rule still applies in Startup!
    if (this.isTooClose(state, this.payload.intersectionId)) {
      return { valid: false, error: "Must be at least two edges away from other settlements." };
    }

    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    const intersection = state.board.intersections.get(this.payload.intersectionId)!;
    const player = state.players.find(p => p.id === this.playerId)!;

    // 1. Place for free
    intersection.building = { type: 'SETTLEMENT', playerId: this.playerId };
    player.victoryPoints += 1;

    // 2. If this is the player's SECOND placement (index 4-7), give starting resources
    if (state.startupIndex >= 4) {
      this.distributeStartingResources(state, intersection, player);
    }

    // 3. Move to Road sub-phase
    state.startupSubPhase = 'ROAD';

    return { 
      success: true, 
      message: "Initial settlement placed. Now place a road.", 
      followUp: 'PLACE_INITIAL_ROAD',
      newState: state 
    };
  }

  private getExpectedPlayer(state: GameState): string {
    const serpentine = [...state.turnOrder, ...[...state.turnOrder].reverse()];
    return serpentine[state.startupIndex];
  }

  private distributeStartingResources(state: GameState, intersection: any, player: any) {
    // Look at all hexes adjacent to this specific settlement
    intersection.coords.forEach((hexCoord: any) => {
      const tile = state.board.tiles.get(hexCoord.toString());
      if (tile && tile.type !== 'DESERT') {
        const res = tile.type.toLowerCase() as keyof typeof player.resources;
        player.resources[res] += 1;
      }
    });
  }

  private isTooClose(state: GameState, intId: string): boolean {
    // Graph traversal logic: check if neighbors of this intersection have buildings
    return false; // Ported from your distance rule logic
  }
}
```

## File: packages/engine/src/actions/PlayKnight.d.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class PlayKnightAction implements Action {
    playerId: string;
    payload: {
        cardId: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        cardId: string;
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: never;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=PlayKnight.d.ts.map
```

## File: packages/engine/src/actions/PlayKnight.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export class PlayKnightAction implements Action {
  type = 'PLAY_KNIGHT';

  constructor(public playerId: string, public payload: { cardId: string }) {}

  validate(state: GameState) {
    if (state.playedDevCardThisTurn) return { valid: false, error: "Already played a card this turn." };
    const player = state.players.find(p => p.id === this.playerId)!;
    const card = player.devCards.find(c => c.id === this.payload.cardId);

    if (!card || card.type !== 'KNIGHT') return { valid: false, error: "You don't have a Knight card." };
    if (card.boughtTurn === state.turnNumber) return { valid: false, error: "Cannot play card on the turn it was bought." };

    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    const player = state.players.find(p => p.id === this.playerId)!;
    
    // Remove card and increment army
    player.devCards = player.devCards.filter(c => c.id !== this.payload.cardId);
    player.numPlayedKnights++;
    state.playedDevCardThisTurn = true;

    // Trigger Robber flow
    state.phase = 'ROBBER_MOVE';

    return { success: true, message: "Knight played! Move the robber.", followUp: 'MOVE_ROBBER', newState: state };
  }
}
```

## File: packages/engine/src/actions/ProposeTrade.d.ts
```typescript
export {};
//# sourceMappingURL=ProposeTrade.d.ts.map
```

## File: packages/engine/src/actions/ProposeTrade.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';

export class ProposeTradeAction implements Action {
  type = 'PROPOSE_TRADE';

  constructor(
    public playerId: string,
    public payload: { offering: any, requesting: any }
  ) {}

  validate(state: GameState) {
    if (state.phase !== 'TRADING_BUILDING') {
      return { valid: false, error: "You can only trade during your building phase." };
    }
    
    // Check if player actually HAS the resources they are offering
    const player = state.players.find(p => p.id === this.playerId)!;
    for (const res in this.payload.offering) {
      if (player.resources[res] < this.payload.offering[res]) {
        return { valid: false, error: `You don't have enough ${res} to trade.` };
      }
    }

    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    // Create the trade object
    const responses = new Map<string, any>();
    state.players.forEach(p => {
      if (p.id !== this.playerId) responses.set(p.id, 'PENDING');
    });

    state.activeTrade = {
      senderId: this.playerId,
      offering: this.payload.offering,
      requesting: this.payload.requesting,
      responses: responses
    };

    state.phase = 'WAITING_FOR_TRADE';

    return { 
      success: true, 
      message: "Trade proposed to all players.", 
      newState: state 
    };
  }
}
```

## File: packages/engine/src/actions/ReviewTrade.d.ts
```typescript
export declare class ReviewTradeAction implements Action {
    playerId: string;
    payload: {
        accept: boolean;
    };
    type: string;
    constructor(playerId: string, payload: {
        accept: boolean;
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: never;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=ReviewTrade.d.ts.map
```

## File: packages/engine/src/actions/ReviewTrade.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';

export class ReviewTradeAction implements Action {
  type = 'REVIEW_TRADE';

  constructor(
    public playerId: string,
    public payload: { accept: boolean }
  ) {}

  validate(state: GameState) {
    if (!state.activeTrade) return { valid: false, error: "No active trade to review." };
    if (this.playerId === state.activeTrade.senderId) {
      return { valid: false, error: "You cannot review your own trade." };
    }
    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    const trade = state.activeTrade!;
    
    // Update the response for this player
    trade.responses.set(this.playerId, this.payload.accept ? 'ACCEPTED' : 'REJECTED');

    return { 
      success: true, 
      message: this.payload.accept ? "You accepted the trade." : "You declined the trade.",
      newState: state 
    };
  }
}
```

## File: packages/engine/src/actions/RollDice.d.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class RollDiceAction implements Action {
    playerId: string;
    type: string;
    constructor(playerId: string);
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: never;
    };
    execute(state: GameState): ActionResponse;
    private handleSevenRoll;
    private distributeResources;
    private addResource;
    private getTotalCards;
}
//# sourceMappingURL=RollDice.d.ts.map
```

## File: packages/engine/src/actions/RollDice.ts
```typescript
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
```

## File: packages/engine/src/actions/StartGame.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState, Player } from '../types/index.js';

export class StartGameAction implements Action {
  type = 'START_GAME';

  constructor(public playerId: string, public payload: any = {}) {}

  validate(state: GameState) {
    const actor = state.players.find(p => p.controllerId === this.playerId);
    if (!actor?.isHost) return { valid: false, error: "Unauthorized." };
    
    // THE NEW RULE: No Ghosts allowed when starting
    const hasGhosts = state.players.some(p => p.controllerType === null);
    if (hasGhosts) {
      return { valid: false, error: "Cannot start: All seats must have a Brain 🧠 or a Robot 🤖." };
    }

    if (state.players.length < 2) return { valid: false, error: "Need at least 2 players." };
    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    // 1. MANIFEST AGENTS: Turn all Ghosts into Robots
    state.players.forEach((seat: Player) => {
      if (seat.controllerType === null) {
        seat.controllerType = 'AGENT';
        seat.controllerId = `bot_${seat.id}`;
        seat.isOnline = true; // Agents are effectively always online
        seat.name = `Agent_${seat.id.split('_')[1]}`; 
      }
    });

    // 2. SET TURN ORDER: 
    // We shuffle the seat IDs to determine who is "Player 1", "Player 2", etc.
    state.turnOrder = state.players.map(p => p.id).sort(() => Math.random() - 0.5);

    // 3. GENERATE SERPENTINE SEQUENCE (Logic from Setup.java:80)
    // Catan setup goes: [1, 2, 3, 4, 4, 3, 2, 1]
    // We store this as a flat array of Seat IDs
    const forward = [...state.turnOrder];
    const backward = [...state.turnOrder].reverse();
    state.setupSequence = [...forward, ...backward]; // Should be length 8 for 4 players
    
    // 4. TRANSITION PHASE
    state.phase = 'STARTUP';
    state.startupIndex = 0; // Start at the first item in the serpentine sequence
    state.currentPlayerId = state.setupSequence[0];

    return { 
      success: true, 
      message: "The game has been manifested. Begin Startup Placements.", 
      newState: state 
    };
    
  }

}
```

## File: packages/engine/src/actions/TakeCard.d.ts
```typescript
import { Action, ActionResponse } from './Action';
import { GameState } from '../types';
export declare class TakeCardAction implements Action {
    playerId: string;
    payload: {
        victimId: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        victimId: string;
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: never;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=TakeCard.d.ts.map
```

## File: packages/engine/src/actions/TakeCard.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState, ResourceType } from '../types/index.js';

export class TakeCardAction implements Action {
  type = 'STEAL_CARD';

  constructor(
    public playerId: string,
    public payload: { victimId: string }
  ) {}

  validate(state: GameState) {
    if (state.phase !== 'ROBBER_STEAL') {
      return { valid: false, error: "Not the time to steal a card." };
    }
    if (!state.victimsAvailable.includes(this.payload.victimId)) {
      return { valid: false, error: "That player is not at the robber's location." };
    }
    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    const thief = state.players.find(p => p.id === this.playerId)!;
    const victim = state.players.find(p => p.id === this.payload.victimId)!;

    // 1. Pick a random resource from the victim
    const resources = victim.resources;
    const availableTypes = (Object.keys(resources) as Array<keyof typeof resources>).filter(
      type => resources[type] > 0
    );

    if (availableTypes.length === 0) {
       state.phase = 'TRADING_BUILDING';
       return { success: true, message: "Victim has no cards.", newState: state };
    }

    const randomType = availableTypes[Math.floor(Math.random() * availableTypes.length)];

    // 2. Transfer
    victim.resources[randomType]--;
    thief.resources[randomType]++;

    // 3. Clean up
    state.victimsAvailable = [];
    state.phase = 'TRADING_BUILDING';

    return { 
      success: true, 
      message: `You stole 1 ${String(randomType)} from ${victim.id}`, 
      newState: state 
    };
  }
}
```

## File: packages/engine/src/actions/ToggleController.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';

export class ToggleControllerAction implements Action {
  
  type = 'TOGGLE_CONTROLLER';

    // We add the constructor so ActionProcessor can pass in the ID and Payload
  constructor(
    public playerId: string,
    public payload: { targetPlayerId: string, controllerType: 'HUMAN' | 'AGENT' }
  ) {}


    // Every action must have a validation step
  validate(state: GameState) {
    const player = state.players.find(p => p.id === this.playerId);
    
    // Rule: Only the Host can change someone else's controller, 
    // OR a player can change their own controller.
    if ( ( !player?.isHost                              ) &&
         ( this.playerId !== this.payload.targetPlayerId)    )
    {
      return { valid: false, error: "You do not have permission to change this controller." };
    }

    return { valid: true };
  }


  execute(state: GameState): ActionResponse {
    const seat = state.players.find(p => p.id === this.payload.targetPlayerId);
    
    if (seat) {
      // Logic: Update the "Driver" type for this "Seat"
      seat.controllerType = this.payload.controllerType;
      
      // Logic: If it's becoming an Agent, we mark it as "Online" 
      // because the computer is now at the wheel.
      if (seat.controllerType === 'AGENT') {
        seat.isOnline = true;
        seat.name = `Bot_${seat.id.substring(seat.id.length - 4)}`;
      }
    }

    return { 
      success: true, 
      message: `Controller for ${this.payload.targetPlayerId} updated to ${this.payload.controllerType}`, 
      newState: state 
    };
  }

}
```

## File: packages/engine/src/actions/YearOfPlentyChoice.d.ts
```typescript
import { Action, ActionResponse } from './Action';
import { GameState, ResourceHand } from '../types';
export declare class YearOfPlentyChoiceAction implements Action {
    playerId: string;
    payload: {
        resources: Partial<ResourceHand>;
    };
    type: string;
    constructor(playerId: string, payload: {
        resources: Partial<ResourceHand>;
    });
    validate(state: GameState): {
        valid: boolean;
        error: string;
    } | {
        valid: boolean;
        error?: never;
    };
    execute(state: GameState): ActionResponse;
}
//# sourceMappingURL=YearOfPlentyChoice.d.ts.map
```

## File: packages/engine/src/actions/YearOfPlentyChoice.ts
```typescript
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
```

## File: packages/engine/src/core/AchievementManager.d.ts
```typescript
export declare function updateLargestArmy(state: GameState): void;
//# sourceMappingURL=AchievementManager.d.ts.map
```

## File: packages/engine/src/core/AchievementManager.ts
```typescript
import { GameState } from '../types/index.js';


export function updateLargestArmy(state: GameState) {
  let currentLeader = state.players.find(p => p.hasLargestArmy);
  let maxKnights = currentLeader ? currentLeader.numPlayedKnights : 2; // Threshold is 3

  state.players.forEach(p => {
    if (p.numPlayedKnights > maxKnights) {
      // Clear previous leader
      if (currentLeader) {
        currentLeader.hasLargestArmy = false;
        currentLeader.victoryPoints -= 2;
      }
      // New leader
      p.hasLargestArmy = true;
      p.victoryPoints += 2;
      currentLeader = p;
      maxKnights = p.numPlayedKnights;
    }
  });
}
```

## File: packages/engine/src/core/Board.d.ts
```typescript
import { ResourceType } from '../types/index.js';
export declare class Board {
    tiles: Map<string, Tile>;
    intersections: Map<string, Intersection>;
    paths: Map<string, Path>;
    constructor();
    /**
     * Universal method to add a tile.
     */
    addTile(q: number, r: number, s: number, type: ResourceType, value: number): void;
    /**
     * Simple serializer for Agents and the GUI
     */
    serialize(): {

        return {
            // We filter out any potential nulls/undefineds before they ever leave the engine
            tiles: Array.from(this.tiles.values()).filter(t => t !== undefined),
            intersections: Array.from(this.intersections.values())
            .filter(int => int !== undefined && int.coords && int.coords.length > 0)
            .map(int => ({
                ...int,
                // Ensure coords are clean
                coords: int.coords.filter(c => c !== undefined && c !== null)
            })),
            paths: Array.from(this.paths.values())
            .filter(p => p !== undefined && p.coords && p.coords.length > 0)
            .map(p => ({
                ...p,
                coords: p.coords.filter(c => c !== undefined && c !== null)
            }))
    };
}
//# sourceMappingURL=Board.d.ts.map
```

## File: packages/engine/src/core/Board.ts
```typescript
// packages/engine/src/core/Board.ts
import { HexCoordinate } from './HexCoordinate.js';
import { ResourceType, Tile, Intersection, Path } from '../types/index.js';

export class Board {
  // We use Maps for O(1) lookup by coordinate strings
  public tiles = new Map<string, Tile>();
  public intersections = new Map<string, Intersection>();
  public paths = new Map<string, Path>();

  constructor() {}

  /**
   * Universal method to add a tile.
   */
  public addTile(q: number, r: number, s: number, type: ResourceType, value: number) {
    const coord = new HexCoordinate(q, r, s);
    const tile: Tile = {
      id: `tile-${coord.toString()}`,
      coord,
      type,
      value,
      hasRobber: type === ResourceType.DESERT
    };
    this.tiles.set(coord.toString(), tile);
    
    // This is what we will write next:
    this.generateTopologyForTile(coord);
  }

  private generateTopologyForTile(tileCoord: HexCoordinate) {
    const neighbors = tileCoord.getNeighbors();

    /**
     * 1. GENERATE PATHS (Edges)
     * A path is shared by the current tile and ONE neighbor.
     */
    neighbors.forEach((neighborCoord) => {
        // Create a unique key by sorting the two hex IDs alphabetically
        // Example: "0,0,0|0,1,-1" will always be the same regardless of which hex we start from
        const pathKey = [tileCoord.toString(), neighborCoord.toString()].sort().join('|');

        if (!this.paths.has(pathKey)) {
        this.paths.set(pathKey, {
            id: pathKey,
            coords: [tileCoord, neighborCoord],
        });
        }
    });

    /**
     * 2. GENERATE INTERSECTIONS (Corners)
     * An intersection is shared by the current tile and TWO adjacent neighbors.
     */
    for (let i = 0; i < 6; i++) {
        const n1 = neighbors[i];
        const n2 = neighbors[(i + 1) % 6];

        // An intersection is the meeting point of: Current Tile, Neighbor 1, and Neighbor 2
        const intersectionCoords = [tileCoord, n1, n2];
        
        // Canonical Key: Sort the 3 hex strings
        const intKey = intersectionCoords
        .map(c => c.toString())
        .sort()
        .join('|');

        if (!this.intersections.has(intKey)) {
        this.intersections.set(intKey, {
            id: intKey,
            coords: intersectionCoords,
        });
        }
    }
  }

  /**
   * Simple serializer for Agents and the GUI
   */
  public serialize() {
    const tilesArr = this.tiles ? Array.from(this.tiles.values()) : [];
    const intArr = this.intersections ? Array.from(this.intersections.values()) : [];
    const pathArr = this.paths ? Array.from(this.paths.values()) : [];

    console.log(`ENGINE: Serializing ${tilesArr.length} tiles`);

    return {
      tiles: Array.from(this.tiles.values()).map(t => ({
        id: t.id,
        type: t.type,
        value: t.value,
        hasRobber: t.hasRobber,
        // FORCE the coordinate into a simple object
        coord: { q: t.coord.q, r: t.coord.r, s: t.coord.s }
      })),
      intersections: Array.from(this.intersections.values()).map(i => ({
        id: i.id,
        building: i.building ? { ...i.building } : null,
        // FORCE every coordinate in the array to be a simple object
        coords: i.coords.map(c => ({ q: c.q, r: c.r, s: c.s }))
      })),
      paths: Array.from(this.paths.values()).map(p => ({
        id: p.id,
        road: p.road ? { ...p.road } : null,
        coords: p.coords.map(c => ({ q: c.q, r: c.r, s: c.s }))
      }))
    };
  }

}
```

## File: packages/engine/src/core/HexCoordinate.d.ts
```typescript
export declare class HexCoordinate {
    readonly q: number;
    readonly r: number;
    readonly s: number;
    constructor(q: number, r: number, s: number);
    toString(): string;
    getNeighbors(): HexCoordinate[];
}
//# sourceMappingURL=HexCoordinate.d.ts.map
```

## File: packages/engine/src/core/HexCoordinate.ts
```typescript
export class HexCoordinate {
  // By putting 'public readonly' inside the constructor, 
  // TypeScript automatically creates the "Name Tags" for q, r, and s.
  constructor(
    public readonly q: number,
    public readonly r: number,
    public readonly s: number = -q - r
  ) {
    // The "Dictum" check
    if (Math.round(this.q + this.r + this.s) !== 0) {
      throw new Error("Invalid HexCoordinate: q + r + s must equal 0");
    }
  }

  public toString(): string {
    return `${this.q},${this.r},${this.s}`;
  }

  public getNeighbors(): HexCoordinate[] {
    const directions = [
      [1, -1, 0], [1, 0, -1], [0, 1, -1],
      [-1, 1, 0], [-1, 0, 1], [0, -1, 1]
    ];
    
    return directions.map(d => {
      return new HexCoordinate(
        this.q + (d[0] || 0), 
        this.r + (d[1] || 0), 
        this.s + (d[2] || 0)
      );
    });
  }
}
```

## File: packages/engine/src/core/Topology.d.ts
```typescript
export declare enum VertexDir {
    UP = "UP",
    DOWN = "DOWN"
}
export declare enum EdgeDir {
    NORTH_WEST = "NW",
    NORTH_EAST = "NE",
    EAST = "E"
}
export declare class IntersectionCoord {
    readonly hex: HexCoordinate;
    readonly dir: VertexDir;
    constructor(hex: HexCoordinate, dir: VertexDir);
    toCanonical(): string;
}
//# sourceMappingURL=Topology.d.ts.map
```

## File: packages/engine/src/core/Topology.ts
```typescript
// packages/engine/src/core/Topology.ts
import { HexCoordinate } from './HexCoordinate.js';

export enum VertexDir { UP = 'UP', DOWN = 'DOWN' }
export enum EdgeDir { NORTH_WEST = 'NW', NORTH_EAST = 'NE', EAST = 'E' }

export class IntersectionCoord {
  constructor(
    public readonly hex: HexCoordinate,
    public readonly dir: VertexDir
  ) {}

  // This is the "Secret Sauce" for flexibility.
  // It converts different hex-relative positions into one unique string.
  public toCanonical(): string {
    // Logic: Always represent the intersection by the hex with the lowest coordinate values
    // to ensure that 3 hexes sharing a corner point to the same key.
    return `int:${this.hex.toString()}:${this.dir}`;
  }
}
```

## File: packages/engine/src/layouts/LayoutFactory.d.ts
```typescript
import { Board } from '../core/Board';
export declare class LayoutFactory {
    /**
     * The classic 19-hex Catan board
     */
    static createStandard(board: Board): void;
    /**
     * For the Agent: A completely random or elongated board
     */
    static createRectangle(board: Board, width: number, height: number): void;
}
//# sourceMappingURL=LayoutFactory.d.ts.map
```

## File: packages/engine/src/layouts/LayoutFactory.ts
```typescript
import { Board } from '../core/Board.js';
import { ResourceType } from '../types/index.js';

export class LayoutFactory {
  /**
   * The classic 19-hex Catan board
   */
  static createStandard(board: Board) {
    // Array of coordinates for a radius-2 hexagonal grid
    const coords = [
      [0,0,0], [0,-1,1], [0,1,-1], [1,-1,0], [1,0,-1], [-1,1,0], [-1,0,1], // ... etc
    ];
    
    // In a real implementation, we'd map these to standard resources/numbers
    coords.forEach(([q, r, s]) => {
      board.addTile(q, r, s, ResourceType.WHEAT, 8); 
    });
  }

  /**
   * For the Agent: A completely random or elongated board
   */
  static createRectangle(board: Board, width: number, height: number) {
     // Custom logic to fill a rectangular grid with hexes
  }
}
```

## File: packages/engine/src/types/index.ts
```typescript
import { HexCoordinate } from '../core/HexCoordinate.js';



export type GamePhase = 'STARTUP' | 'ROLLING' | 'TRADING_BUILDING' | 'WAITING_FOR_TRADE' | 'ROBBER_DISCARD' | 'ROBBER_MOVE' | 'ROBBER_STEAL' | 'YEAR_OF_PLENTY' | 'MONOPOLY';

export enum DevCardType {
  KNIGHT = 'KNIGHT',
  MONOPOLY = 'MONOPOLY',
  YEAR_OF_PLENTY = 'YEAR_OF_PLENTY',
  ROAD_BUILDING = 'ROAD_BUILDING',
  VICTORY_POINT = 'VICTORY_POINT'
}

export enum ResourceType {
  WHEAT = 'WHEAT', WOOD = 'WOOD', BRICK = 'BRICK', SHEEP = 'SHEEP', ORE = 'ORE', DESERT = 'DESERT'
}

export interface DevCard {
  id: string;
  type: string;
  boughtTurn: number; // To enforce "can't play same turn" rule
}

export interface Player {
  id: string;
  name: string;
  color: string;
  
  controllerId: string | null; // Which User ID is currently driving?
  controllerType: 'HUMAN' | 'AGENT' | null; // Who is driving?
  
  isHost: boolean;
  isOnline: boolean; // Track connection status

  resources: {
    brick: number;
    wood: number;
    wheat: number;
    sheep: number;
    ore: number;
  };
  victoryPoints: number;
  devCards: any[];
  numPlayedKnights: number;
  numSettlements: number;
  hasLargestArmy: boolean;
  hasLongestRoad: boolean;
}

export interface Tile {
  id: string;
  coord: HexCoordinate;
  type: ResourceType;
  value: number;
  hasRobber: boolean;
}


export interface GameState {
  id: string;
  phase: string;
  startupIndex: number;    // Current position in the sequence (0-7)
  startupSubPhase: string;  
  setupSequence: string[]; // Array of Seat IDs in serpentine order
  currentPlayerId: string;
  players: Player[];
  board: {
    tiles: Map<string, Tile>;
    intersections: Map<string, Intersection>;
    paths: Map<string, Path>;
  };
  turnOrder: string[];
  robberTileId: string;
  victimsAvailable: string[];
  diceResult?: [number, number];
  activeTrade?: any;
  turnNumber: number;
  playedDevCardThisTurn: boolean;
  devCardDeck: string[];
}

export interface Intersection {
  id: string; // The Canonical ID
  coords: HexCoordinate[]; // The 1-3 hexes that share this corner
  building?: {
    type: 'SETTLEMENT' | 'CITY';
    playerId: string;
  };
}

export interface LogEntry {
  id: string;
  timestamp: number;
  type: 'SYSTEM' | 'CHAT' | 'ACTION';
  playerId?: string;
  message: string;
  metadata?: any; // To store roll results, etc.
}

export interface Path {
  id: string; // The Canonical ID
  coords: HexCoordinate[]; // The 1-2 hexes that share this edge
  road?: {
    playerId: string;
  };
}

export interface ResourceHand {
  brick: number; wood: number; wheat: number; sheep: number; ore: number;
}


export interface TradeOffer {
  senderId: string;
  offering: ResourceHand; // What the sender gives
  requesting: ResourceHand; // What the sender wants
  responses: Map<string, 'ACCEPTED' | 'REJECTED' | 'PENDING'>;
}
```

## File: packages/engine/src/ActionProcessor.d.ts
```typescript
import { ActionResponse } from './actions/Action';
import { GameState } from './types';
export declare class ActionProcessor {
    /**
     * This is the entry point for both Agents and the GUI.
     */
    static process(state: GameState, rawAction: any): ActionResponse;
    private static createAction;
}
//# sourceMappingURL=ActionProcessor.d.ts.map
```

## File: packages/engine/src/ActionProcessor.ts
```typescript
import { Action, ActionResponse } from './actions/Action.js';
import { GameState } from './types/index.js';
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
//import { AssignControllerAction } from './actions/AssignController.js';

/*
      case 'START_GAME':
        return new StartGameAction(playerId, payload);
      
      // NEW COMMANDS FOR THE KING:
      case 'ADD_SEAT':
        return new AddSeatAction(playerId, payload);
        
      case 'REMOVE_SEAT':
        return new RemoveSeatAction(playerId, payload);
        
      case 'ASSIGN_CONTROLLER':
        return new AssignControllerAction(playerId, payload);
*/

export class ActionProcessor {
  /**
   * This is the entry point. It receives a command and the current game state.
   */
  public static process(state: GameState, rawAction: any): ActionResponse {
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

      case 'START_GAME':
        return new StartGameAction(playerId, payload);
      
      // NEW COMMANDS FOR THE KING:
      case 'ADD_SEAT':
        return new AddSeatAction(playerId, payload);
        
      case 'REMOVE_SEAT':
        return new RemoveSeatAction(playerId, payload);
        
      // case 'ASSIGN_CONTROLLER':
      //   return new AssignControllerAction(playerId, payload);
      
      default:
        return null;
    }
  }
}
```

## File: packages/engine/src/coordinates.d.ts
```typescript
/**
 * Represents a Tile on the board using Axial or Cube coordinates.
 * Catan usually uses Cube coordinates (q, r, s) where q + r + s = 0.
 */
export declare class HexCoordinate {
    readonly q: number;
    readonly r: number;
    readonly s: number;
    constructor(q: number, r: number, s?: number);
    equals(other: HexCoordinate): boolean;
    toString(): string;
}
/**
 * Intersections are the corners of the hexes (where Settlements/Cities go).
 * Each hex has 6 intersections.
 */
export declare enum Direction {
    NORTH = 0,
    NORTH_EAST = 1,
    SOUTH_EAST = 2,
    SOUTH = 3,
    SOUTH_WEST = 4,
    NORTH_WEST = 5
}
export declare class IntersectionCoordinate {
    readonly hex: HexCoordinate;
    readonly direction: Direction;
    constructor(hex: HexCoordinate, direction: Direction);
}
/**
 * Paths are the edges between hexes (where Roads go).
 */
export declare class PathCoordinate {
    readonly hex: HexCoordinate;
    readonly direction: Direction;
    constructor(hex: HexCoordinate, direction: Direction);
}
//# sourceMappingURL=coordinates.d.ts.map
```

## File: packages/engine/src/coordinates.ts
```typescript
/**
 * Represents a Tile on the board using Axial or Cube coordinates.
 * Catan usually uses Cube coordinates (q, r, s) where q + r + s = 0.
 */
export class HexCoordinate {
  constructor(
    public readonly q: number,
    public readonly r: number,
    public readonly s: number = -q - r
  ) {
    if (Math.round(q + r + s) !== 0) {
      throw new Error("Invalid HexCoordinate: q + r + s must equal 0");
    }
  }

  equals(other: HexCoordinate): boolean {
    return this.q === other.q && this.r === other.r;
  }

  toString(): string {
    return `Hex(${this.q},${this.r},${this.s})`;
  }
}

/**
 * Intersections are the corners of the hexes (where Settlements/Cities go).
 * Each hex has 6 intersections.
 */
export enum Direction { NORTH = 0, NORTH_EAST = 1, SOUTH_EAST = 2, SOUTH = 3, SOUTH_WEST = 4, NORTH_WEST = 5 }

export class IntersectionCoordinate {
  constructor(
    public readonly hex: HexCoordinate,
    public readonly direction: Direction 
  ) {}

  // In a real port, we'd add logic here to normalize coordinates 
  // (since one intersection is shared by 3 hexes).
}

/**
 * Paths are the edges between hexes (where Roads go).
 */
export class PathCoordinate {
  constructor(
    public readonly hex: HexCoordinate,
    public readonly direction: Direction
  ) {}
}
```

## File: packages/engine/src/index.d.ts
```typescript
export * from './core/Board';
export * from './core/HexCoordinate';
export * from './types/index.js';
//# sourceMappingURL=index.d.ts.map
```

## File: packages/engine/src/index.ts
```typescript
// packages/engine/src/index.ts

// Export everything the outside world (Server, Agent, GUI) needs

export * from './core/Board.js';
export * from './core/HexCoordinate.js';
export * from './types/index.js';        // This reveals GameState
export * from './ActionProcessor.js';    // This reveals ActionProcessor
export * from './layouts/LayoutFactory.js'; // This reveals LayoutFactory
```

## File: packages/engine/package.json
```json
{
  "name": "@tinc/engine",
  "version": "1.0.0",
  "type": "module", 
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": "./dist/index.js"
  },
  "scripts": {
    "build": "tsc",
    "dev": "tsc -w"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}
```

## File: packages/engine/tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "lib": ["ESNext", "DOM"],
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "noImplicitAny": false,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "verbatimModuleSyntax": false 
  },
  "include": ["src/**/*"]
}
```

## File: packages/server/dist/index.js
```javascript
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { GameManager } from './GameManager.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: { origin: "*" }
});
const gameManager = new GameManager();
/**
 * SOCKET.IO LOGIC
 */
io.on('connection', (socket) => {
    console.log('User connected:', socket.id);
    socket.on('join_game', (gameId, playerId) => {
        //  Save the playerId to the socket instance for masking
        socket.playerId = playerId;
        // Store gameId on socket for disconnect logic
        socket.currentGameId = gameId;
        socket.join(gameId);
        let state = gameManager.getGameState(gameId);
        if (!state) {
            console.log(`Game ${gameId} not found. Creating new instance...`);
            gameManager.createGame(playerId, {}); // Use your GameManager's create method
            state = gameManager.getGameState(gameId);
        }
        else {
            console.log(`Guest ${playerId} is joining existing game.`);
            gameManager.joinGame(gameId, playerId);
            state;
        }
        console.log(`Guest ${playerId} is joining existing game.`);
        const updatedState = gameManager.joinGame(gameId, playerId);
        // Notify room of join via log
        io.to(gameId).emit('new_log_entry', {
            id: Math.random().toString(36).substr(2, 9),
            timestamp: Date.now(),
            type: 'SYSTEM',
            message: `Player ${playerId} has entered the room.`
        });
        // io.to(gameId).fetchSockets().then(sockets => {
        //   sockets.forEach(s => {
        //     const sPlayerId = (s as any).playerId; 
        //     s.emit('game_state_update', maskStateForPlayer(updatedState, sPlayerId));
        //   });
        // });
        broadcastState(gameId, updatedState);
    });
    socket.on('perform_action', (gameId, playerId, action) => {
        try {
            const result = gameManager.handleAction(gameId, playerId, action);
            if (result.success) {
                const gameState = result.newState;
                // FIX 2: Generate the log entry
                const logEntry = generateLogEntry(playerId, action);
                // FIX 3: Broadcast the log entry to everyone in the room
                io.to(gameId).emit('new_log_entry', logEntry);
                // Send personalized (masked) states to each player
                io.to(gameId).fetchSockets().then(sockets => {
                    sockets.forEach(s => {
                        const sPlayerId = s.playerId;
                        s.emit('game_state_update', maskStateForPlayer(gameState, sPlayerId));
                    });
                });
            }
            else {
                socket.emit('action_error', { message: result.message });
            }
        }
        catch (err) {
            console.error("Action processing error:", err);
        }
    });
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
    socket.on('disconnecting', () => {
        const pId = socket.playerId;
        const gId = socket.currentGameId;
        if (pId && gId) {
            console.log(`User: ${pId} disconnecting ...`);
            const updatedState = gameManager.setPlayerOffline(gId, pId);
            if (updatedState) {
                // 1. Log the disconnect in the chat for others
                io.to(gId).emit('new_log_entry', {
                    id: Math.random().toString(36).substr(2, 9),
                    timestamp: Date.now(),
                    type: 'SYSTEM',
                    message: `Player ${pId} has gone offline.`
                });
                // 2. Broadcast updated state (showing isOnline: false)
                broadcastState(gId, updatedState);
            }
        }
    });
});
/**
 * NEW HELPER FUNCTION: broadcastState
 * This ensures every single player gets a "Refresh" signal that is
 * personalized for them (masking other people's cards).
 */
async function broadcastState(gameId, state) {
    const sockets = await io.in(gameId).fetchSockets();
    sockets.forEach(s => {
        const sPlayerId = s.playerId;
        // We call the masking function specifically for THIS person's ID
        s.emit('game_state_update', maskStateForPlayer(state, sPlayerId));
    });
}
/**
 * PRODUCTION DEPLOYMENT LOGIC
 * Serve the static files from the Vue build directory.
 * In the Docker/Monorepo structure, client dist is 2 levels up from server dist.
 */
const clientDistPath = path.join(__dirname, '../../client/dist');
app.use(express.static(clientDistPath));
// Fallback for Single Page Application (Vue Router)
app.get('*', (req, res) => {
    res.sendFile(path.join(clientDistPath, 'index.html'));
});
/**
 * HELPER FUNCTIONS
 */
function generateLogEntry(playerId, action) {
    let message = '';
    switch (action.type) {
        case 'ROLL_DICE':
            message = `rolled the dice.`;
            break;
        case 'BUILD_SETTLEMENT':
            message = `built a settlement.`;
            break;
        case 'BUILD_ROAD':
            message = `built a road.`;
            break;
        case 'PLACE_INITIAL_SETTLEMENT':
            message = `placed an initial settlement.`;
            break;
        case 'PLACE_INITIAL_ROAD':
            message = `placed an initial road.`;
            break;
        case 'END_TURN':
            message = `ended their turn.`;
            break;
        case 'PROPOSE_TRADE':
            message = `proposed a trade.`;
            break;
        case 'EXECUTE_TRADE':
            message = `completed a trade.`;
            break;
        default: message = `performed ${action.type}`;
    }
    return {
        id: Math.random().toString(36).substr(2, 9),
        timestamp: Date.now(),
        type: 'ACTION',
        playerId: playerId,
        message: message
    };
}
function maskStateForPlayer(state, playerId) {
    // Debug: Log to see if the engine actually has tiles
    console.log(`--- DEBUG MASKING ---`);
    console.log(`Player: ${playerId}`);
    console.log(`Tiles in raw state: ${state.board.tiles.size}`);
    state.players.forEach(p => {
        console.log(`AUDIT: Seat ${p.color} | Type: ${p.controllerType} | ID: ${p.controllerId}`);
    });
    const serializedBoard = state.board.serialize(); // This uses the fix from Step 1
    console.log(`Tiles after serialization: ${serializedBoard.tiles.length}`);
    return {
        ...state,
        board: serializedBoard, // Ensure the GUI gets the CLEAN version
        players: state.players.map((p) => ({
            ...p,
            resources: p.id === playerId ? p.resources : { total: getTotal(p.resources) },
            devCards: p.id === playerId ? p.devCards : { count: p.devCards?.length || 0 }
        }))
    };
}
function getTotal(res) {
    if (!res)
        return 0;
    return Object.values(res).reduce((a, b) => a + b, 0);
}
/**
 * START SERVER
 */
const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
    console.log(`Catan Production Server running on http://localhost:${PORT}`);
});
```

## File: packages/server/src/index.ts
```typescript
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { GameManager } from './GameManager.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: "*" } 
});

const gameManager = new GameManager();

/**
 * SOCKET.IO LOGIC
 */
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('join_game', (gameId: string, playerId: string) => {

    //  Save the playerId to the socket instance for masking
    (socket as any).playerId = playerId;

    // Store gameId on socket for disconnect logic
    (socket as any).currentGameId = gameId;    

    socket.join(gameId);

    let state = gameManager.getGameState(gameId);
    if (!state) {
      console.log(`Game ${gameId} not found. Creating new instance...`);        
      gameManager.createGame(playerId, {}); // Use your GameManager's create method
      state = gameManager.getGameState(gameId);
    }
    else {
      console.log(`Guest ${playerId} is joining existing game.`);
      gameManager.joinGame(gameId, playerId);
      state
    }
    
    console.log(`Guest ${playerId} is joining existing game.`);
    const updatedState = gameManager.joinGame(gameId, playerId);

    // Notify room of join via log
    io.to(gameId).emit('new_log_entry', {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
      type: 'SYSTEM',
      message: `Player ${playerId} has entered the room.`
    });

    // io.to(gameId).fetchSockets().then(sockets => {
    //   sockets.forEach(s => {
    //     const sPlayerId = (s as any).playerId; 
    //     s.emit('game_state_update', maskStateForPlayer(updatedState, sPlayerId));
    //   });
    // });
    broadcastState(gameId, updatedState);
    
  });

  socket.on('perform_action', (gameId: string, playerId: string, action: any) => {
    try {
      const result = gameManager.handleAction(gameId, playerId, action);

      if (result.success) {
        const gameState = result.newState!;

        // FIX 2: Generate the log entry
        const logEntry = generateLogEntry(playerId, action);
        
        // FIX 3: Broadcast the log entry to everyone in the room
        io.to(gameId).emit('new_log_entry', logEntry);

        // Send personalized (masked) states to each player
        io.to(gameId).fetchSockets().then(sockets => {
          sockets.forEach(s => {
            const sPlayerId = (s as any).playerId; 
            s.emit('game_state_update', maskStateForPlayer(gameState, sPlayerId));
          });
        });

      } else {
        socket.emit('action_error', { message: result.message });
      }
    } catch (err) {
      console.error("Action processing error:", err);
    }
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('disconnecting', () => {
    const pId = (socket as any).playerId;
    const gId = (socket as any).currentGameId;
    
    if (pId && gId) {
      console.log(`User: ${pId} disconnecting ...`);
      
      const updatedState = gameManager.setPlayerOffline(gId, pId);

      if (updatedState) {
        // 1. Log the disconnect in the chat for others
        io.to(gId).emit('new_log_entry', {
          id: Math.random().toString(36).substr(2, 9),
          timestamp: Date.now(),
          type: 'SYSTEM',
          message: `Player ${pId} has gone offline.`
        });

        // 2. Broadcast updated state (showing isOnline: false)
        broadcastState(gId, updatedState);
      }
    }
  });

});

/**
 * NEW HELPER FUNCTION: broadcastState
 * This ensures every single player gets a "Refresh" signal that is 
 * personalized for them (masking other people's cards).
 */
async function broadcastState(gameId, state) {
  const sockets = await io.in(gameId).fetchSockets();
  
  sockets.forEach(s => {
    const sPlayerId = (s as any).playerId;
    // We call the masking function specifically for THIS person's ID
    s.emit('game_state_update', maskStateForPlayer(state, sPlayerId));
  });
}


/**
 * PRODUCTION DEPLOYMENT LOGIC
 * Serve the static files from the Vue build directory.
 * In the Docker/Monorepo structure, client dist is 2 levels up from server dist.
 */
const clientDistPath = path.join(__dirname, '../../client/dist');
app.use(express.static(clientDistPath));

// Fallback for Single Page Application (Vue Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(clientDistPath, 'index.html'));
});

/**
 * HELPER FUNCTIONS
 */
function generateLogEntry(playerId: string, action: any) {
  let message = '';
  switch(action.type) {
    case 'ROLL_DICE': message = `rolled the dice.`; break;
    case 'BUILD_SETTLEMENT': message = `built a settlement.`; break;
    case 'BUILD_ROAD': message = `built a road.`; break;
    case 'PLACE_INITIAL_SETTLEMENT': message = `placed an initial settlement.`; break;
    case 'PLACE_INITIAL_ROAD': message = `placed an initial road.`; break;
    case 'END_TURN': message = `ended their turn.`; break;
    case 'PROPOSE_TRADE': message = `proposed a trade.`; break;
    case 'EXECUTE_TRADE': message = `completed a trade.`; break;
    default: message = `performed ${action.type}`;
  }

  return {
    id: Math.random().toString(36).substr(2, 9),
    timestamp: Date.now(),
    type: 'ACTION',
    playerId: playerId,
    message: message
  };
}

function maskStateForPlayer(state, playerId) {
  // Debug: Log to see if the engine actually has tiles
  console.log(`--- DEBUG MASKING ---`);
  console.log(`Player: ${playerId}`);
  console.log(`Tiles in raw state: ${state.board.tiles.size}`);

  state.players.forEach(p => {
    console.log(`AUDIT: Seat ${p.color} | Type: ${p.controllerType} | ID: ${p.controllerId}`);
  })

  const serializedBoard = state.board.serialize(); // This uses the fix from Step 1

  console.log(`Tiles after serialization: ${serializedBoard.tiles.length}`);

  return {
    ...state,
    board: serializedBoard, // Ensure the GUI gets the CLEAN version
    players: state.players.map((p) => ({
      ...p,
      resources: p.id === playerId ? p.resources : { total: getTotal(p.resources) },
      devCards: p.id === playerId ? p.devCards : { count: p.devCards?.length || 0 }
    }))
  };
}

function getTotal(res: any) {
  if (!res) return 0;
  return Object.values(res).reduce((a: any, b: any) => a + b, 0);
}

/**
 * START SERVER
 */
const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`Catan Production Server running on http://localhost:${PORT}`);
});
```

## File: packages/server/package.json
```json
{
  "name": "@tinc/server",
  "version": "1.0.0",
  "type": "module",
  "main": "dist/index.js",
  "scripts": {
    "build": "tsc",
    "dev": "ts-node-dev src/index.ts",
    "start": "node dist/index.js"
  },
  "dependencies": {
    "@tinc/engine": "file:../engine",
    "express": "^4.18.2",
    "socket.io": "^4.7.2",
    "uuid": "^9.0.1",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/node": "^20.10.0",
    "@types/uuid": "^9.0.7",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.0.0"
  }
}
```

## File: packages/server/tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": false,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "noImplicitAny": false,

  },
  "include": ["src/**/*"]
}
```

## File: package.json
```json
{
  "name": "tinc-catan-next",
  "private": true,
  "description": "Catan Migration Monorepo",
  "workspaces": [
    "packages/*"
  ],
  "scripts": {
    "install-all": "npm install",
    "build": "npm run build -w packages/engine && npm run build -w packages/server && npm run build -w packages/client",
    "start": "node packages/server/dist/index.js",
    "dev:server": "npm run dev -w packages/server",
    "dev:client": "npm run dev -w packages/client"
  }
}
```

## File: packages/client/src/components/Sidebar/PlayerList.vue
```vue
<script setup lang="ts">
  import { computed } from 'vue';
  import { useGameStore } from '../../stores/gameStore';
  import { COLOR_TO_EMOJI } from '../../utils/constants';
  import CommandConsole from './CommandConsole.vue';

  const gameStore = useGameStore();

  const isKing = computed(() => {
    return gameStore.state?.players.find(p => p.controllerId === gameStore.playerId)?.isHost;
  });

  const canManifest = computed(() => {
    if (!gameStore.state) return false;
    const noGhosts = gameStore.state.players.every(p => p.controllerType !== null);
    return noGhosts && gameStore.state.players.length >= 2;
  });

  const getControllerIcon = (type) => {
    if (type === 'HUMAN') return '🧠';
    if (type === 'AGENT') return '🤖';
    if (type === null || type === undefined) return '👻'; // THE FIX
  
    return '❓'; 
  };

  const getConnectionIcon = (player) => {
    // Ghosts don't have broken links; they have NO links (✖️).
    if (player.controllerType === null) {
      return '✖️'; 
    }
    return player.isOnline ? '🔗' : '⛓️‍💥';
  };

  const getCargoCount = (player) => {
    if (!player.resources) return 0;
    
    // If the resources are masked (sent as { total: X })
    if (typeof player.resources.total === 'number') {
      return player.resources.total;
    }
    
    // If it's the local player, sum the individual resource values
    return Object.values(player.resources).reduce((sum, count) => sum + count, 0);
  };

  // Helper to get the correct prefix
  const getPlayerPrefix = (player) => {
    return player.isHost ? 'Host' : 'Client';
  };

  // Icon Suggestion: Turn Indicator 🎲
  const isCurrentTurn = (playerId) => {
    return gameStore.state.currentPlayerId === playerId;
  };

  const isHost = computed(() => {
    const me = gameStore.state?.players.find(p => p.controllerId === gameStore.playerId);
    return me?.isHost || false;
  });

  const startGame = () => {
    gameStore.performAction('START_GAME', {});
  };

  // Check if the local user is the Host
  const isLocalHost = computed(() => {
    return gameStore.state?.players.find(p => p.controllerId === gameStore.playerId)?.isHost;
  });

  const handleManifest = () => {
    gameStore.performAction('START_GAME', {});
  };

  const addSeat = () => gameStore.performAction('ADD_SEAT', {});
  const removeSeat = (id) => gameStore.performAction('REMOVE_SEAT', { targetSeatId: id });
  const assignBot = (id) => gameStore.performAction('TOGGLE_CONTROLLER', { targetPlayerId: id, controllerType: 'AGENT' });
</script>


<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <h3>AGENTIC LOBBY</h3>
      <div class="my-id">LOCAL_USER: {{ gameStore.playerId }}</div>

      <button 
        v-if="isKing && gameStore.state?.players.length < 4"
        @click="addSeat" class="btn-small">➕ Add Seat
      </button>
    </div>




    <div class="player-list">
      <div v-for="player in gameStore.state?.players" :key="player.id" class="player-row">
        <!-- Spacer Column -->
        <div class="spacer-col">
          <button v-if="isKing && player.controllerType === null" @click="removeSeat(player.id)" title="Remove Seat">✖️</button>
          <span v-else> </span>
        </div>

        <span class="stat-icon">{{ COLOR_TO_EMOJI[player.color] }}</span>
        
        <!-- Controller Toggle (Click Ghost to make Bot) -->
        <span class="stat-icon pointer" @click="player.controllerType === null ? assignBot(player.id) : null">
          {{ player.controllerType === 'HUMAN' ? '🧠' : (player.controllerType === 'AGENT' ? '🤖' : '👻') }}
        </span>

        <span class="stat-icon">{{ player.isHost ? '👑' : '👨‍🌾' }}</span>
        
        <!-- Connection Link or Prohibited -->
        <span class="stat-icon">
          {{ player.controllerType === null ? '🚫' : (player.isOnline ? '🔗' : '⛓️‍💥') }}
        </span>

        <span class="stat-data">🎒x0 🏆x{{ player.victoryPoints }}</span>
        
        <span class="player-name">
          {{ player.isHost ? 'Host' : 'Client' }}_{{ player.name }}
        </span>
      </div>
    </div>
    
    <button 
      v-if="isKing && gameStore.state?.phase === 'LOBBY'" 
      :disabled="!canManifest" 
      @click="gameStore.performAction('START_GAME', {})"
      class="btn-manifest"
    >
      🚀 MANIFEST GAME
    </button>

    <!-- Extra States Suggestion: Game Phase Info -->
    <div class="phase-badge">
      🛰️ SYSTEM_PHASE: {{ gameStore.state.phase }}
    </div>
  </aside>
</template>

<style scoped>
  .is-ghost {
    color: #666;
    font-style: italic;
    text-decoration: line-through;
  }

  .sidebar {
    position: fixed; right: 0; top: 0; bottom: 0;
    width: 400px; /* Widened to fit new data */
    background: rgba(10, 10, 10, 0.9);
    color: #e0e0e0; padding: 15px; border-left: 1px solid #333;
    font-family: 'Courier New', Courier, monospace;
    z-index: 1000;
  }

  .player-row {
    display: flex;
    align-items: center;
    padding: 8px;
    margin-bottom: 5px;
    border: 1px solid transparent;
    border-radius: 4px;
    white-space: nowrap; /* Keep the data on one line */
  }

  .active-turn {
    background: rgba(0, 255, 0, 0.05);
    border-color: rgba(0, 255, 0, 0.3);
  }

  .stat-icon {
    margin-right: 4px;
    font-size: 16px;
  }

  .stat-data {
    margin-right: 8px;
    font-size: 12px;
    color: #bdc3c7;
    min-width: 45px; /* Aligns the columns */
  }

  .player-name {
    margin-left: 5px;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .is-me {
    color: #00ff00;
    text-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
  }

  .turn-dice {
    margin-left: auto;
    animation: blink 1s infinite;
  }

  .phase-badge {
    margin-top: 20px;
    font-size: 10px;
    background: #222;
    padding: 5px;
    border-radius: 3px;
    color: #aaa;
  }

  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0.3; }
    100% { opacity: 1; }
  }

  .host-controls {
    margin-top: 20px;
    padding: 15px;
    background: rgba(0, 255, 0, 0.1);
    border: 1px solid #00ff00;
    border-radius: 4px;
    text-align: center;
  }

  .start-btn {
    width: 100%;
    padding: 12px;
    background: #00ff00;
    color: black;
    border: none;
    font-weight: bold;
    font-family: 'Courier New', monospace;
    cursor: pointer;
    transition: all 0.2s;
  }

  .start-btn:hover {
    background: #00cc00;
    box-shadow: 0 0 15px #00ff00;
  }

  .hint {
    font-size: 10px;
    color: #aaa;
    margin-top: 8px;
  }

  .spacer-col { width: 30px; display: flex; justify-content: center; color: #444; }
  .pointer { cursor: pointer; }
  .btn-manifest:disabled { filter: grayscale(1); opacity: 0.3; cursor: not-allowed; }

  button[title="Remove Seat"] {
  background: none !important;      /* Remove background */
  border: none !important;          /* Remove border */
  padding: 0 !important;            /* Remove padding */
  margin: 0 !important;             /* Remove margin */
  box-shadow: none !important;      /* Remove any shadows */
  outline: none !important;         /* Remove focus outline (but consider accessibility) */
  font-size: inherit;               /* Match surrounding text size */
  cursor: pointer;                  /* Keep pointer cursor */
  width: auto;                      /* Let icon determine width */
  height: auto;                     /* Let icon determine height */
  display: inline-block;            /* Keep it inline but clickable */
  line-height: 1;                   /* Prevent extra height */
  color: currentColor;              /* Match text color of parent */
}

/* Optional: Add a subtle hover effect if you want */
button[title="Remove Seat"]:hover {
  opacity: 0.7;                     /* Slight fade on hover */
  transform: scale(1.1);            /* Optional: slight pop effect */
  transition: all 0.2s ease;        /* Smooth transition */
}

/* Optional: Keep focus visible for keyboard navigation (accessibility) */
button[title="Remove Seat"]:focus-visible {
  outline: 2px solid currentColor;  /* Show outline only when tabbing */
  outline-offset: 2px;
}

</style>
```

## File: packages/server/dist/GameManager.js
```javascript
import { ActionProcessor, Board, LayoutFactory } from '@tinc/engine';
export class GameManager {
    games = new Map();
    timers = new Map();
    // Settings for the "Agentic" behavior
    TURN_TIMEOUT_MS = 60000; // 60 seconds
    constructor() { }
    /**
     * Creates a new game instance
     */
    createGame(creatorId, settings) {
        const gameId = "game-uuid-123"; //uuidv4();    
        const board = new Board();
        LayoutFactory.createStandard(board); // Flexible layout!
        console.log(`Server.GameManager.createGame: Board generated. Size: ${board.tiles.size}`);
        const shortId = creatorId.substring(creatorId.length - 5);
        // Initialize Rules (State)
        const initialState = {
            id: gameId,
            phase: 'LOBBY',
            startupIndex: 0,
            startupSubPhase: 'SETTLEMENT',
            currentPlayerId: creatorId,
            turnOrder: [creatorId],
            board: board,
            robberTileId: '0,0,0',
            victimsAvailable: [],
            turnNumber: 1,
            playedDevCardThisTurn: false,
            devCardDeck: [],
            setupSequence: [],
            players: [
                // SEAT 1: The Human Host
                this.createNewPlayer(creatorId, shortId, "#e74c3c", true),
                // SEATS 2-4: Explicit Ghosts
                this.createEmptySeat("player_2", "Blue_Seat", "#3498db"),
                this.createEmptySeat("player_3", "Orange_Seat", "#e67e22"),
                this.createEmptySeat("player_4", "Green_Seat", "#27ae60")
            ]
        };
        this.games.set(gameId, initialState);
        return gameId;
    }
    // packages/server/src/GameManager.ts
    joinGame(gameId, playerId) {
        const state = this.games.get(gameId);
        if (!state)
            throw new Error("Server.GameManager.joinGame: Game not found");
        // 1. RECYCLING LOGIC: Check if this player already has a seat (Broken Link ⛓️‍💥)
        const existingSeat = state.players.find(p => p.controllerId === playerId);
        if (existingSeat) {
            console.log(`Server.GameManager.joinGame: RE-LINKING: Player ${playerId} is reclaiming their seat ${existingSeat.id}`);
            existingSeat.isOnline = true; // Turn ⛓️‍💥 back into 🔗
            return state;
        }
        // 2. CLAIM LOGIC: If player is new, find the first available Vacant Seat (No Link ✖️)
        const vacantSeat = state.players.find(p => p.controllerType === null);
        if (vacantSeat) {
            const shortId = playerId.substring(playerId.length - 5);
            console.log(`Server.GameManager.joinGame: CLAIMING: Player ${playerId} taking vacant seat ${vacantSeat.id}`);
            vacantSeat.controllerId = playerId;
            vacantSeat.controllerType = 'HUMAN';
            vacantSeat.name = shortId;
            vacantSeat.isOnline = true; // Turn ✖️ into 🔗
            return state;
        }
        throw new Error("Server.GameManager.joinGame: Game is full! No seats available.");
    }
    // Added this function to handle disconnects in the state
    setPlayerOffline(gameId, playerId) {
        const state = this.games.get(gameId);
        if (!state)
            return null;
        const playerLeaving = state.players.find(p => p.id === playerId || p.controllerId === playerId);
        if (playerLeaving) {
            playerLeaving.isOnline = false;
            if (playerLeaving.isHost) {
                playerLeaving.isHost = false;
                const nextHost = state.players.find(p => p.isOnline && p.controllerType === 'HUMAN');
                if (nextHost)
                    nextHost.isHost = true;
                if (nextHost) {
                    nextHost.isHost = true;
                    console.log(`CROWN PASSING: The crown has been bestowed upon ${nextHost.name}`);
                }
                else {
                    console.log(`CROWN PASSING: No online humans available to take the crown.`);
                }
            }
        }
        return state;
    }
    // Helper to create a "Brain-dead" seat
    createEmptySeat(id, name, color) {
        return {
            id, name, color,
            isHost: false,
            isOnline: false, // Skulls are never "online"
            controllerId: null,
            controllerType: null, // This triggers the 👻 icon
            resources: { brick: 0, wood: 0, wheat: 0, sheep: 0, ore: 0 },
            victoryPoints: 0,
            devCards: [],
            numPlayedKnights: 0,
            numSettlements: 5,
            hasLargestArmy: false,
            hasLongestRoad: false
        };
    }
    // Inside GameManager.ts (as a private helper)
    createNewPlayer(id, name, color, isHost = false) {
        console.log(`Server.GameManager.createNewPlayer: ${id} - ${name}`);
        return {
            id: `seat_${id.substring(0, 3)}`,
            name, color, isHost,
            isOnline: true,
            controllerId: id,
            controllerType: 'HUMAN',
            resources: { brick: 0, wood: 0, wheat: 0, sheep: 0, ore: 0 },
            victoryPoints: 0,
            devCards: [],
            numPlayedKnights: 0,
            numSettlements: 5,
            hasLargestArmy: false,
            hasLongestRoad: false
        };
    }
    /**
     * The single point of entry for actions (Human or Agent)
     */
    handleAction(gameId, playerId, rawAction) {
        const state = this.games.get(gameId);
        if (!state)
            throw new Error("Game not found");
        // 1. Process the logic via our Engine
        const result = ActionProcessor.process(state, { ...rawAction, playerId });
        if (result.success) {
            // 2. If action succeeded, update memory
            this.games.set(gameId, result.newState);
            // 3. Reset the Turn Timer
            this.resetTimer(gameId);
            return result;
        }
        return result;
    }
    reassignHost(state) {
        // 1. Check if the current host is still online
        const currentHost = state.players.find(p => p.isHost && p.isOnline);
        if (currentHost)
            return; // Host is fine, no change needed.
        // 2. If host is offline, find the next available HUMAN who is online
        const nextHost = state.players.find(p => p.isOnline && p.controllerType === 'HUMAN');
        if (nextHost) {
            // Clear old host flags
            state.players.forEach(p => p.isHost = false);
            // Bestow the crown
            nextHost.isHost = true;
            console.log(`CROWN PASSING: ${nextHost.name} is the new Host.`);
        }
    }
    resetTimer(gameId) {
        // Clear existing timer
        if (this.timers.has(gameId)) {
            clearTimeout(this.timers.get(gameId));
        }
        // Set new timer for "Auto-Move" or "Timeout"
        const timer = setTimeout(() => {
            this.handleTimeout(gameId);
        }, this.TURN_TIMEOUT_MS);
        this.timers.set(gameId, timer);
    }
    /**
     * Agentic Logic: What happens if a player (Human or Agent) stalls?
     */
    handleTimeout(gameId) {
        const state = this.games.get(gameId);
        if (!state)
            return;
        console.log(`Game ${gameId}: Player ${state.currentPlayerId} timed out.`);
        // In a professional "Agentic" server, we might force an 'END_TURN' 
        // or trigger a 'BotAction' here so the game never gets stuck.
        this.handleAction(gameId, state.currentPlayerId, { type: 'END_TURN' });
    }
    getGameState(gameId) {
        return this.games.get(gameId);
    }
}
```

## File: packages/server/src/GameManager.ts
```typescript
import { GameState,
         ActionProcessor,
         Board,
         LayoutFactory,
         Player } from '@tinc/engine';

import { v4 as uuidv4 } from 'uuid';

export class GameManager {
  private games: Map<string, GameState> = new Map();
  private timers: Map<string, NodeJS.Timeout> = new Map();
  
  // Settings for the "Agentic" behavior
  private TURN_TIMEOUT_MS = 60000; // 60 seconds

  constructor() {}

  /**
   * Creates a new game instance
   */
  public createGame( creatorId: string,
                     settings: any      ): string
 {
    const gameId = "game-uuid-123"; //uuidv4();    
    const board = new Board();
    LayoutFactory.createStandard(board); // Flexible layout!

    console.log(`Server.GameManager.createGame: Board generated. Size: ${board.tiles.size}`);
    const shortId = creatorId.substring(creatorId.length - 5);

    // Initialize Rules (State)
    const initialState: GameState = {
      id: gameId,
      phase: 'LOBBY',
      startupIndex: 0,
      startupSubPhase: 'SETTLEMENT',
      currentPlayerId: creatorId,
      turnOrder: [creatorId],
      board: board,
      robberTileId: '0,0,0',
      victimsAvailable: [],
      turnNumber: 1,
      playedDevCardThisTurn: false,
      devCardDeck: [],
      setupSequence: [],
      players: [
          // SEAT 1: The Human Host
          this.createNewPlayer(creatorId, shortId, "#e74c3c", true),
          // SEATS 2-4: Explicit Ghosts
          this.createEmptySeat("player_2", "Blue_Seat", "#3498db"),
          this.createEmptySeat("player_3", "Orange_Seat", "#e67e22"),
          this.createEmptySeat("player_4", "Green_Seat", "#27ae60")
      ]
    };

    this.games.set(gameId, initialState);
    return gameId;
  }

  // packages/server/src/GameManager.ts

  public joinGame( gameId: string,
                   playerId: string ): GameState
  {
    const state = this.games.get(gameId);
    if (!state) throw new Error("Server.GameManager.joinGame: Game not found");

    // 1. RECYCLING LOGIC: Check if this player already has a seat (Broken Link ⛓️‍💥)
    const existingSeat = state.players.find(p => p.controllerId === playerId);
    
    if (existingSeat) {
      console.log(`Server.GameManager.joinGame: RE-LINKING: Player ${playerId} is reclaiming their seat ${existingSeat.id}`);
      existingSeat.isOnline = true; // Turn ⛓️‍💥 back into 🔗
      return state;
    }

    // 2. CLAIM LOGIC: If player is new, find the first available Vacant Seat (No Link ✖️)
    const vacantSeat = state.players.find(p => p.controllerType === null);

    if (vacantSeat) {
      const shortId = playerId.substring(playerId.length - 5);
      console.log(`Server.GameManager.joinGame: CLAIMING: Player ${playerId} taking vacant seat ${vacantSeat.id}`);
      
      vacantSeat.controllerId = playerId;
      vacantSeat.controllerType = 'HUMAN';
      vacantSeat.name = shortId;
      vacantSeat.isOnline = true; // Turn ✖️ into 🔗
      
      return state;
    }

    throw new Error("Server.GameManager.joinGame: Game is full! No seats available.");
  }

  // Added this function to handle disconnects in the state
  public setPlayerOffline( gameId: string,
                           playerId: string ): GameState | null
  {
    const state = this.games.get(gameId);
    if (!state) return null;

    const playerLeaving = 
      state.players.find(p => p.id === playerId || p.controllerId === playerId);

    if (playerLeaving) {
      playerLeaving.isOnline = false;

      if(playerLeaving.isHost) {
        playerLeaving.isHost = false;

        const nextHost = state.players.find(p => p.isOnline && p.controllerType === 'HUMAN');
        if (nextHost) nextHost.isHost = true;

        if (nextHost) {
          nextHost.isHost = true;
          console.log(`CROWN PASSING: The crown has been bestowed upon ${nextHost.name}`);
        }
        else
        {
          console.log(`CROWN PASSING: No online humans available to take the crown.`);
        }
      }
    }

    return state;
  }

  // Helper to create a "Brain-dead" seat
  private createEmptySeat(id: string, name: string, color: string): Player {
    return {
      id, name, color,
      isHost: false,
      isOnline: false, // Skulls are never "online"
      controllerId: null, 
      controllerType: null, // This triggers the 👻 icon
      resources: { brick: 0, wood: 0, wheat: 0, sheep: 0, ore: 0 },
      victoryPoints: 0,
      devCards: [],
      numPlayedKnights: 0,
      numSettlements: 5,
      hasLargestArmy: false,
      hasLongestRoad: false
    };
  }

  // Inside GameManager.ts (as a private helper)
  private createNewPlayer( id: string,
                           name: string,
                           color: string,
                           isHost: boolean = false ): Player {

    console.log( `Server.GameManager.createNewPlayer: ${id} - ${name}`);

    return {
      id: `seat_${id.substring(0,3)}`,
      name, color, isHost,
      isOnline: true,
      controllerId: id,
      controllerType: 'HUMAN',
      resources: { brick: 0, wood: 0, wheat: 0, sheep: 0, ore: 0 },
      victoryPoints: 0,
      devCards: [],
      numPlayedKnights: 0,
      numSettlements: 5,
      hasLargestArmy: false,
      hasLongestRoad: false      
    };

  }


  /**
   * The single point of entry for actions (Human or Agent)
   */
  public handleAction(gameId: string, playerId: string, rawAction: any) {
    const state = this.games.get(gameId);
    if (!state) throw new Error("Game not found");

    // 1. Process the logic via our Engine
    const result = ActionProcessor.process(state, { ...rawAction, playerId });

    if (result.success) {
      // 2. If action succeeded, update memory
      this.games.set(gameId, result.newState!);
      
      // 3. Reset the Turn Timer
      this.resetTimer(gameId);
      
      return result;
    }
    
    return result;
  }

  private reassignHost(state: GameState) {
    // 1. Check if the current host is still online
    const currentHost = state.players.find(p => p.isHost && p.isOnline);
    if (currentHost) return; // Host is fine, no change needed.

    // 2. If host is offline, find the next available HUMAN who is online
    const nextHost = state.players.find(p => p.isOnline && p.controllerType === 'HUMAN');
    
    if (nextHost) {
      // Clear old host flags
      state.players.forEach(p => p.isHost = false);
      // Bestow the crown
      nextHost.isHost = true;
      console.log(`CROWN PASSING: ${nextHost.name} is the new Host.`);
    }
  }

  private resetTimer(gameId: string) {
    // Clear existing timer
    if (this.timers.has(gameId)) {
      clearTimeout(this.timers.get(gameId)!);
    }

    // Set new timer for "Auto-Move" or "Timeout"
    const timer = setTimeout(() => {
      this.handleTimeout(gameId);
    }, this.TURN_TIMEOUT_MS);

    this.timers.set(gameId, timer);
  }

  /**
   * Agentic Logic: What happens if a player (Human or Agent) stalls?
   */
  private handleTimeout(gameId: string) {
    const state = this.games.get(gameId);
    if (!state) return;

    console.log(`Game ${gameId}: Player ${state.currentPlayerId} timed out.`);

    // In a professional "Agentic" server, we might force an 'END_TURN' 
    // or trigger a 'BotAction' here so the game never gets stuck.
    this.handleAction(gameId, state.currentPlayerId, { type: 'END_TURN' });
  }

  public getGameState(gameId: string): GameState | undefined {
    return this.games.get(gameId);
  }
}
```
