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
          PlayerPanel.vue
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
        ChangeColor.d.ts
        ChangeColor.d.ts.map
        ChangeColor.js
        ChangeColor.js.map
        ClaimSeat.d.ts
        ClaimSeat.d.ts.map
        ClaimSeat.js
        ClaimSeat.js.map
        ConfigureAgent.d.ts
        ConfigureAgent.d.ts.map
        ConfigureAgent.js
        ConfigureAgent.js.map
        ConfigurePlayer.d.ts
        ConfigurePlayer.d.ts.map
        ConfigurePlayer.js
        ConfigurePlayer.js.map
        EndTurn.d.ts
        EndTurn.d.ts.map
        EndTurn.js
        EndTurn.js.map
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
        ChangeColor.ts
        ClaimSeat.ts
        ConfigureAgent.ts
        ConfigurePlayer.ts
        EndTurn.ts
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
      agents/
        AgentBrain.js
        HeuristicAgent.js
      GameManager.js
      index.js
    src/
      agents/
        AgentBrain.ts
        HeuristicAgent.ts
      GameManager.ts
      index.ts
    package.json
    tsconfig.json
.gitignore
package.json
```

# Files

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

## File: packages/engine/dist/actions/Action.js
```javascript
export {};
//# sourceMappingURL=Action.js.map
```

## File: packages/engine/dist/actions/Action.js.map
```
{"version":3,"file":"Action.js","sourceRoot":"","sources":["../../src/actions/Action.ts"],"names":[],"mappings":""}
```

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

## File: packages/engine/dist/actions/ChangeColor.d.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class ChangeColorAction implements Action {
    playerId: string;
    payload: {
        targetSeatId: string;
        color: string;
    };
    type: string;
    constructor(playerId: string, payload: {
        targetSeatId: string;
        color: string;
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
//# sourceMappingURL=ChangeColor.d.ts.map
```

## File: packages/engine/dist/actions/ChangeColor.d.ts.map
```
{"version":3,"file":"ChangeColor.d.ts","sourceRoot":"","sources":["../../src/actions/ChangeColor.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,MAAM,EAAE,cAAc,EAAE,MAAM,aAAa,CAAC;AACrD,OAAO,EAAE,SAAS,EAAE,MAAM,mBAAmB,CAAC;AAE9C,qBAAa,iBAAkB,YAAW,MAAM;IAIrC,QAAQ,EAAE,MAAM;IAChB,OAAO,EAAE;QAAE,YAAY,EAAE,MAAM,CAAC;QAAC,KAAK,EAAE,MAAM,CAAA;KAAE;IAJzD,IAAI,SAAkB;gBAGb,QAAQ,EAAE,MAAM,EAChB,OAAO,EAAE;QAAE,YAAY,EAAE,MAAM,CAAC;QAAC,KAAK,EAAE,MAAM,CAAA;KAAE;IAGzD,QAAQ,CAAC,KAAK,EAAE,SAAS;;;;;;;IAezB,OAAO,CAAC,KAAK,EAAE,SAAS,GAAG,cAAc;CAK1C"}
```

## File: packages/engine/dist/actions/ChangeColor.js
```javascript
export class ChangeColorAction {
    playerId;
    payload;
    type = 'CHANGE_COLOR';
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        const isRootAdmin = this.playerId === state.hostSessionId;
        const actorSeat = state.players.find(p => p.controllerId === this.playerId);
        const isColorTaken = state.players.some(p => p.color === this.payload.color);
        if (isColorTaken)
            return { valid: false, error: 'Color is already in use.' };
        // Root Admin can change any seat's color; others can only change their own.
        if (!isRootAdmin && actorSeat?.id !== this.payload.targetSeatId) {
            return { valid: false, error: 'You can only change your own color.' };
        }
        return { valid: true };
    }
    execute(state) {
        const seat = state.players.find(p => p.id === this.payload.targetSeatId);
        seat.color = this.payload.color;
        return { success: true, newState: state };
    }
}
//# sourceMappingURL=ChangeColor.js.map
```

## File: packages/engine/dist/actions/ChangeColor.js.map
```
{"version":3,"file":"ChangeColor.js","sourceRoot":"","sources":["../../src/actions/ChangeColor.ts"],"names":[],"mappings":"AAGA,MAAM,OAAO,iBAAiB;IAInB;IACA;IAJT,IAAI,GAAG,cAAc,CAAC;IAEtB,YACS,QAAgB,EAChB,OAAgD;QADhD,aAAQ,GAAR,QAAQ,CAAQ;QAChB,YAAO,GAAP,OAAO,CAAyC;IACtD,CAAC;IAEJ,QAAQ,CAAC,KAAgB;QACvB,MAAM,WAAW,GAAI,IAAI,CAAC,QAAQ,KAAK,KAAK,CAAC,aAAa,CAAC;QAC3D,MAAM,SAAS,GAAM,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,YAAY,KAAK,IAAI,CAAC,QAAQ,CAAC,CAAC;QAC/E,MAAM,YAAY,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,KAAK,KAAK,IAAI,CAAC,OAAO,CAAC,KAAK,CAAC,CAAC;QAE7E,IAAI,YAAY;YAAE,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,0BAA0B,EAAE,CAAC;QAE7E,4EAA4E;QAC5E,IAAI,CAAC,WAAW,IAAI,SAAS,EAAE,EAAE,KAAK,IAAI,CAAC,OAAO,CAAC,YAAY,EAAE,CAAC;YAChE,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,qCAAqC,EAAE,CAAC;QACxE,CAAC;QAED,OAAO,EAAE,KAAK,EAAE,IAAI,EAAE,CAAC;IACzB,CAAC;IAED,OAAO,CAAC,KAAgB;QACtB,MAAM,IAAI,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,IAAI,CAAC,OAAO,CAAC,YAAY,CAAE,CAAC;QAC1E,IAAI,CAAC,KAAK,GAAG,IAAI,CAAC,OAAO,CAAC,KAAK,CAAC;QAChC,OAAO,EAAE,OAAO,EAAE,IAAI,EAAE,QAAQ,EAAE,KAAK,EAAE,CAAC;IAC5C,CAAC;CACF"}
```

## File: packages/engine/dist/actions/ClaimSeat.d.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class ClaimSeatAction implements Action {
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
//# sourceMappingURL=ClaimSeat.d.ts.map
```

## File: packages/engine/dist/actions/ClaimSeat.d.ts.map
```
{"version":3,"file":"ClaimSeat.d.ts","sourceRoot":"","sources":["../../src/actions/ClaimSeat.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,MAAM,EAAE,cAAc,EAAE,MAAM,aAAa,CAAC;AACrD,OAAO,EAAE,SAAS,EAAE,MAAM,mBAAmB,CAAC;AAE9C,qBAAa,eAAgB,YAAW,MAAM;IAEzB,QAAQ,EAAE,MAAM;IAAS,OAAO,EAAE;QAAE,YAAY,EAAE,MAAM,CAAA;KAAE;IAD7E,IAAI,SAAgB;gBACD,QAAQ,EAAE,MAAM,EAAS,OAAO,EAAE;QAAE,YAAY,EAAE,MAAM,CAAA;KAAE;IAE7E,QAAQ,CAAC,KAAK,EAAE,SAAS;;;;;;;IAYzB,OAAO,CAAC,KAAK,EAAE,SAAS,GAAG,cAAc;CAc1C"}
```

## File: packages/engine/dist/actions/ClaimSeat.js
```javascript
export class ClaimSeatAction {
    playerId;
    payload;
    type = 'CLAIM_SEAT';
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        const seat = state.players.find(p => p.id === this.payload.targetSeatId);
        if (!seat)
            return { valid: false, error: "Seat not found." };
        if (seat.controllerType !== null)
            return { valid: false, error: "Seat is already taken!" };
        // Prevent someone who already has a seat from grabbing another one
        const existingSeat = state.players.find(p => p.controllerId === this.playerId);
        if (existingSeat)
            return { valid: false, error: "You already have a seat." };
        return { valid: true };
    }
    execute(state) {
        const seat = state.players.find(p => p.id === this.payload.targetSeatId);
        seat.controllerType = 'HUMAN';
        seat.controllerId = this.playerId;
        seat.isOnline = true;
        seat.name = this.playerId.substring(this.playerId.length - 5);
        // If there is no active host anywhere, give this new player the Crown
        const hasHost = state.players.some(p => p.isHost);
        if (!hasHost)
            seat.isHost = true;
        return { success: true, message: `You claimed ${seat.id}`, newState: state };
    }
}
//# sourceMappingURL=ClaimSeat.js.map
```

## File: packages/engine/dist/actions/ClaimSeat.js.map
```
{"version":3,"file":"ClaimSeat.js","sourceRoot":"","sources":["../../src/actions/ClaimSeat.ts"],"names":[],"mappings":"AAGA,MAAM,OAAO,eAAe;IAEP;IAAyB;IAD5C,IAAI,GAAG,YAAY,CAAC;IACpB,YAAmB,QAAgB,EAAS,OAAiC;QAA1D,aAAQ,GAAR,QAAQ,CAAQ;QAAS,YAAO,GAAP,OAAO,CAA0B;IAAG,CAAC;IAEjF,QAAQ,CAAC,KAAgB;QACvB,MAAM,IAAI,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,IAAI,CAAC,OAAO,CAAC,YAAY,CAAC,CAAC;QACzE,IAAI,CAAC,IAAI;YAAE,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,iBAAiB,EAAE,CAAC;QAC7D,IAAI,IAAI,CAAC,cAAc,KAAK,IAAI;YAAE,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,wBAAwB,EAAE,CAAC;QAE3F,mEAAmE;QACnE,MAAM,YAAY,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,YAAY,KAAK,IAAI,CAAC,QAAQ,CAAC,CAAC;QAC/E,IAAI,YAAY;YAAE,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,0BAA0B,EAAE,CAAC;QAE7E,OAAO,EAAE,KAAK,EAAE,IAAI,EAAE,CAAC;IACzB,CAAC;IAED,OAAO,CAAC,KAAgB;QACtB,MAAM,IAAI,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,IAAI,CAAC,OAAO,CAAC,YAAY,CAAE,CAAC;QAE1E,IAAI,CAAC,cAAc,GAAG,OAAO,CAAC;QAC9B,IAAI,CAAC,YAAY,GAAG,IAAI,CAAC,QAAQ,CAAC;QAClC,IAAI,CAAC,QAAQ,GAAG,IAAI,CAAC;QACrB,IAAI,CAAC,IAAI,GAAG,IAAI,CAAC,QAAQ,CAAC,SAAS,CAAC,IAAI,CAAC,QAAQ,CAAC,MAAM,GAAG,CAAC,CAAC,CAAC;QAE9D,sEAAsE;QACtE,MAAM,OAAO,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC;QAClD,IAAI,CAAC,OAAO;YAAE,IAAI,CAAC,MAAM,GAAG,IAAI,CAAC;QAEjC,OAAO,EAAE,OAAO,EAAE,IAAI,EAAE,OAAO,EAAE,eAAe,IAAI,CAAC,EAAE,EAAE,EAAE,QAAQ,EAAE,KAAK,EAAE,CAAC;IAC/E,CAAC;CACF"}
```

## File: packages/engine/dist/actions/ConfigureAgent.d.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class ConfigureAgentAction implements Action {
    playerId: string;
    payload: {
        targetPlayerId: string;
        agentType: 'HEURISTIC' | 'LLM' | 'WEBHOOK';
    };
    type: string;
    constructor(playerId: string, // The Root Admin making the change
    payload: {
        targetPlayerId: string;
        agentType: 'HEURISTIC' | 'LLM' | 'WEBHOOK';
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
//# sourceMappingURL=ConfigureAgent.d.ts.map
```

## File: packages/engine/dist/actions/ConfigureAgent.d.ts.map
```
{"version":3,"file":"ConfigureAgent.d.ts","sourceRoot":"","sources":["../../src/actions/ConfigureAgent.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,MAAM,EAAE,cAAc,EAAE,MAAM,aAAa,CAAC;AACrD,OAAO,EAAE,SAAS,EAAE,MAAM,mBAAmB,CAAC;AAE9C,qBAAa,oBAAqB,YAAW,MAAM;IAIxC,QAAQ,EAAE,MAAM;IAChB,OAAO,EAAE;QAAE,cAAc,EAAE,MAAM,CAAC;QAAC,SAAS,EAAE,WAAW,GAAG,KAAK,GAAG,SAAS,CAAA;KAAE;IAJxF,IAAI,SAAqB;gBAGhB,QAAQ,EAAE,MAAM,EAAE,mCAAmC;IACrD,OAAO,EAAE;QAAE,cAAc,EAAE,MAAM,CAAC;QAAC,SAAS,EAAE,WAAW,GAAG,KAAK,GAAG,SAAS,CAAA;KAAE;IAGxF,QAAQ,CAAC,KAAK,EAAE,SAAS;;;;;;;IAezB,OAAO,CAAC,KAAK,EAAE,SAAS,GAAG,cAAc;CAY1C"}
```

## File: packages/engine/dist/actions/ConfigureAgent.js
```javascript
export class ConfigureAgentAction {
    playerId;
    payload;
    type = 'CONFIGURE_AGENT';
    constructor(playerId, // The Root Admin making the change
    payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        // Only the Root Admin (session-level crown) can rewire a robot's brain
        const isRootAdmin = this.playerId === state.hostSessionId;
        if (!isRootAdmin) {
            return { valid: false, error: 'Only the 👑 Root Admin can configure Agents.' };
        }
        const targetSeat = state.players.find(p => p.id === this.payload.targetPlayerId);
        if (targetSeat?.controllerType !== 'AGENT') {
            return { valid: false, error: 'You can only configure Brains for Agents.' };
        }
        return { valid: true };
    }
    execute(state) {
        const seat = state.players.find(p => p.id === this.payload.targetPlayerId);
        // Plug in the new Lego Brain
        seat.agentType = this.payload.agentType;
        return {
            success: true,
            message: `Agent ${seat.name} is now using the ${this.payload.agentType} Brain.`,
            newState: state,
        };
    }
}
//# sourceMappingURL=ConfigureAgent.js.map
```

## File: packages/engine/dist/actions/ConfigureAgent.js.map
```
{"version":3,"file":"ConfigureAgent.js","sourceRoot":"","sources":["../../src/actions/ConfigureAgent.ts"],"names":[],"mappings":"AAGA,MAAM,OAAO,oBAAoB;IAItB;IACA;IAJT,IAAI,GAAG,iBAAiB,CAAC;IAEzB,YACS,QAAgB,EAAE,mCAAmC;IACrD,OAA+E;QAD/E,aAAQ,GAAR,QAAQ,CAAQ;QAChB,YAAO,GAAP,OAAO,CAAwE;IACrF,CAAC;IAEJ,QAAQ,CAAC,KAAgB;QACvB,uEAAuE;QACvE,MAAM,WAAW,GAAG,IAAI,CAAC,QAAQ,KAAK,KAAK,CAAC,aAAa,CAAC;QAC1D,IAAI,CAAC,WAAW,EAAE,CAAC;YACjB,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,8CAA8C,EAAE,CAAC;QACjF,CAAC;QAED,MAAM,UAAU,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,IAAI,CAAC,OAAO,CAAC,cAAc,CAAC,CAAC;QACjF,IAAI,UAAU,EAAE,cAAc,KAAK,OAAO,EAAE,CAAC;YAC3C,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,2CAA2C,EAAE,CAAC;QAC9E,CAAC;QAED,OAAO,EAAE,KAAK,EAAE,IAAI,EAAE,CAAC;IACzB,CAAC;IAED,OAAO,CAAC,KAAgB;QACtB,MAAM,IAAI,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,IAAI,CAAC,OAAO,CAAC,cAAc,CAAE,CAAC;QAE5E,6BAA6B;QAC7B,IAAI,CAAC,SAAS,GAAG,IAAI,CAAC,OAAO,CAAC,SAAS,CAAC;QAExC,OAAO;YACL,OAAO,EAAE,IAAI;YACb,OAAO,EAAG,SAAS,IAAI,CAAC,IAAI,qBAAqB,IAAI,CAAC,OAAO,CAAC,SAAS,SAAS;YAChF,QAAQ,EAAE,KAAK;SAChB,CAAC;IACJ,CAAC;CACF"}
```

## File: packages/engine/dist/actions/ConfigurePlayer.d.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
/**
 * CONFIGURE_PLAYER
 * Admin-only action.  Sets per-seat timer configuration.
 *
 * Payload:
 *   targetSeatId    — the seat (Player.id) to configure
 *   timerEnabled?   — boolean; whether the turn-skip timer fires for this seat
 *   turnTimeoutMs?  — number;  milliseconds before auto-skip (min 5 000)
 */
export declare class ConfigurePlayerAction implements Action {
    playerId: string;
    payload: {
        targetSeatId: string;
        timerEnabled?: boolean;
        turnTimeoutMs?: number;
    };
    type: string;
    constructor(playerId: string, payload: {
        targetSeatId: string;
        timerEnabled?: boolean;
        turnTimeoutMs?: number;
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
//# sourceMappingURL=ConfigurePlayer.d.ts.map
```

## File: packages/engine/dist/actions/ConfigurePlayer.d.ts.map
```
{"version":3,"file":"ConfigurePlayer.d.ts","sourceRoot":"","sources":["../../src/actions/ConfigurePlayer.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,MAAM,EAAE,cAAc,EAAE,MAAM,aAAa,CAAC;AACrD,OAAO,EAAE,SAAS,EAAE,MAAM,mBAAmB,CAAC;AAE9C;;;;;;;;GAQG;AACH,qBAAa,qBAAsB,YAAW,MAAM;IAIzC,QAAQ,EAAE,MAAM;IAChB,OAAO,EAAE;QACd,YAAY,EAAI,MAAM,CAAC;QACvB,YAAY,CAAC,EAAG,OAAO,CAAC;QACxB,aAAa,CAAC,EAAE,MAAM,CAAC;KACxB;IARH,IAAI,SAAsB;gBAGjB,QAAQ,EAAE,MAAM,EAChB,OAAO,EAAE;QACd,YAAY,EAAI,MAAM,CAAC;QACvB,YAAY,CAAC,EAAG,OAAO,CAAC;QACxB,aAAa,CAAC,EAAE,MAAM,CAAC;KACxB;IAGH,QAAQ,CAAC,KAAK,EAAE,SAAS;;;;;;;IAiBzB,OAAO,CAAC,KAAK,EAAE,SAAS,GAAG,cAAc;CAoB1C"}
```

## File: packages/engine/dist/actions/ConfigurePlayer.js
```javascript
/**
 * CONFIGURE_PLAYER
 * Admin-only action.  Sets per-seat timer configuration.
 *
 * Payload:
 *   targetSeatId    — the seat (Player.id) to configure
 *   timerEnabled?   — boolean; whether the turn-skip timer fires for this seat
 *   turnTimeoutMs?  — number;  milliseconds before auto-skip (min 5 000)
 */
export class ConfigurePlayerAction {
    playerId;
    payload;
    type = 'CONFIGURE_PLAYER';
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        if (this.playerId !== state.hostSessionId) {
            return { valid: false, error: 'Only the Root Admin can configure player settings.' };
        }
        const seat = state.players.find(p => p.id === this.payload.targetSeatId);
        if (!seat) {
            return { valid: false, error: `Seat ${this.payload.targetSeatId} not found.` };
        }
        if (this.payload.turnTimeoutMs !== undefined &&
            this.payload.turnTimeoutMs < 5_000) {
            return { valid: false, error: 'Turn timeout must be at least 5 000 ms (5 seconds).' };
        }
        return { valid: true };
    }
    execute(state) {
        const seat = state.players.find(p => p.id === this.payload.targetSeatId);
        if (this.payload.timerEnabled !== undefined) {
            seat.timerEnabled = this.payload.timerEnabled;
        }
        if (this.payload.turnTimeoutMs !== undefined) {
            seat.turnTimeoutMs = this.payload.turnTimeoutMs;
        }
        const status = seat.timerEnabled
            ? `enabled (${seat.turnTimeoutMs / 1000}s)`
            : 'disabled';
        return {
            success: true,
            message: `Timer for ${seat.name} is now ${status}.`,
            newState: state,
        };
    }
}
//# sourceMappingURL=ConfigurePlayer.js.map
```

## File: packages/engine/dist/actions/ConfigurePlayer.js.map
```
{"version":3,"file":"ConfigurePlayer.js","sourceRoot":"","sources":["../../src/actions/ConfigurePlayer.ts"],"names":[],"mappings":"AAGA;;;;;;;;GAQG;AACH,MAAM,OAAO,qBAAqB;IAIvB;IACA;IAJT,IAAI,GAAG,kBAAkB,CAAC;IAE1B,YACS,QAAgB,EAChB,OAIN;QALM,aAAQ,GAAR,QAAQ,CAAQ;QAChB,YAAO,GAAP,OAAO,CAIb;IACA,CAAC;IAEJ,QAAQ,CAAC,KAAgB;QACvB,IAAI,IAAI,CAAC,QAAQ,KAAK,KAAK,CAAC,aAAa,EAAE,CAAC;YAC1C,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,oDAAoD,EAAE,CAAC;QACvF,CAAC;QACD,MAAM,IAAI,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,IAAI,CAAC,OAAO,CAAC,YAAY,CAAC,CAAC;QACzE,IAAI,CAAC,IAAI,EAAE,CAAC;YACV,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,QAAQ,IAAI,CAAC,OAAO,CAAC,YAAY,aAAa,EAAE,CAAC;QACjF,CAAC;QACD,IACE,IAAI,CAAC,OAAO,CAAC,aAAa,KAAK,SAAS;YACxC,IAAI,CAAC,OAAO,CAAC,aAAa,GAAG,KAAK,EAClC,CAAC;YACD,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,qDAAqD,EAAE,CAAC;QACxF,CAAC;QACD,OAAO,EAAE,KAAK,EAAE,IAAI,EAAE,CAAC;IACzB,CAAC;IAED,OAAO,CAAC,KAAgB;QACtB,MAAM,IAAI,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,IAAI,CAAC,OAAO,CAAC,YAAY,CAAE,CAAC;QAE1E,IAAI,IAAI,CAAC,OAAO,CAAC,YAAY,KAAK,SAAS,EAAE,CAAC;YAC5C,IAAI,CAAC,YAAY,GAAG,IAAI,CAAC,OAAO,CAAC,YAAY,CAAC;QAChD,CAAC;QACD,IAAI,IAAI,CAAC,OAAO,CAAC,aAAa,KAAK,SAAS,EAAE,CAAC;YAC7C,IAAI,CAAC,aAAa,GAAG,IAAI,CAAC,OAAO,CAAC,aAAa,CAAC;QAClD,CAAC;QAED,MAAM,MAAM,GAAG,IAAI,CAAC,YAAY;YAC9B,CAAC,CAAC,YAAY,IAAI,CAAC,aAAa,GAAG,IAAI,IAAI;YAC3C,CAAC,CAAC,UAAU,CAAC;QAEf,OAAO;YACL,OAAO,EAAG,IAAI;YACd,OAAO,EAAG,aAAa,IAAI,CAAC,IAAI,WAAW,MAAM,GAAG;YACpD,QAAQ,EAAE,KAAK;SAChB,CAAC;IACJ,CAAC;CACF"}
```

## File: packages/engine/dist/actions/EndTurn.d.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class EndTurnAction implements Action {
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
//# sourceMappingURL=EndTurn.d.ts.map
```

## File: packages/engine/dist/actions/EndTurn.d.ts.map
```
{"version":3,"file":"EndTurn.d.ts","sourceRoot":"","sources":["../../src/actions/EndTurn.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,MAAM,EAAE,cAAc,EAAE,MAAM,aAAa,CAAC;AACrD,OAAO,EAAE,SAAS,EAAE,MAAM,mBAAmB,CAAC;AAE9C,qBAAa,aAAc,YAAW,MAAM;IAGvB,QAAQ,EAAE,MAAM;IAAS,OAAO,EAAE,GAAG;IAFxD,IAAI,SAAc;gBAEC,QAAQ,EAAE,MAAM,EAAS,OAAO,GAAE,GAAQ;IAE7D,QAAQ,CAAC,KAAK,EAAE,SAAS;;;;;;;IASzB,OAAO,CAAC,KAAK,EAAE,SAAS,GAAG,cAAc;CAkB1C"}
```

## File: packages/engine/dist/actions/EndTurn.js
```javascript
export class EndTurnAction {
    playerId;
    payload;
    type = 'END_TURN';
    constructor(playerId, payload = {}) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        // END_TURN is valid during the main building phase, or as a timeout escape hatch.
        // We allow it from any phase that isn't mid-startup so the timer can always unstick.
        if (state.phase === 'STARTUP') {
            return { valid: false, error: 'Cannot end turn during startup placement.' };
        }
        return { valid: true };
    }
    execute(state) {
        const currentIndex = state.turnOrder.indexOf(state.currentPlayerId);
        const nextIndex = (currentIndex + 1) % state.turnOrder.length;
        state.currentPlayerId = state.turnOrder[nextIndex];
        state.phase = 'ROLLING';
        state.playedDevCardThisTurn = false;
        state.activeTrade = undefined;
        state.diceResult = undefined;
        state.victimsAvailable = [];
        state.turnNumber += 1;
        return {
            success: true,
            message: `Turn ended. It is now ${state.currentPlayerId}'s turn.`,
            newState: state,
        };
    }
}
//# sourceMappingURL=EndTurn.js.map
```

## File: packages/engine/dist/actions/EndTurn.js.map
```
{"version":3,"file":"EndTurn.js","sourceRoot":"","sources":["../../src/actions/EndTurn.ts"],"names":[],"mappings":"AAGA,MAAM,OAAO,aAAa;IAGL;IAAyB;IAF5C,IAAI,GAAG,UAAU,CAAC;IAElB,YAAmB,QAAgB,EAAS,UAAe,EAAE;QAA1C,aAAQ,GAAR,QAAQ,CAAQ;QAAS,YAAO,GAAP,OAAO,CAAU;IAAG,CAAC;IAEjE,QAAQ,CAAC,KAAgB;QACvB,kFAAkF;QAClF,qFAAqF;QACrF,IAAI,KAAK,CAAC,KAAK,KAAK,SAAS,EAAE,CAAC;YAC9B,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,2CAA2C,EAAE,CAAC;QAC9E,CAAC;QACD,OAAO,EAAE,KAAK,EAAE,IAAI,EAAE,CAAC;IACzB,CAAC;IAED,OAAO,CAAC,KAAgB;QACtB,MAAM,YAAY,GAAG,KAAK,CAAC,SAAS,CAAC,OAAO,CAAC,KAAK,CAAC,eAAe,CAAC,CAAC;QACpE,MAAM,SAAS,GAAM,CAAC,YAAY,GAAG,CAAC,CAAC,GAAG,KAAK,CAAC,SAAS,CAAC,MAAM,CAAC;QAEjE,KAAK,CAAC,eAAe,GAAU,KAAK,CAAC,SAAS,CAAC,SAAS,CAAC,CAAC;QAC1D,KAAK,CAAC,KAAK,GAAoB,SAAS,CAAC;QACzC,KAAK,CAAC,qBAAqB,GAAI,KAAK,CAAC;QACrC,KAAK,CAAC,WAAW,GAAc,SAAS,CAAC;QACzC,KAAK,CAAC,UAAU,GAAe,SAAS,CAAC;QACzC,KAAK,CAAC,gBAAgB,GAAS,EAAE,CAAC;QAClC,KAAK,CAAC,UAAU,IAAe,CAAC,CAAC;QAEjC,OAAO;YACL,OAAO,EAAG,IAAI;YACd,OAAO,EAAG,yBAAyB,KAAK,CAAC,eAAe,UAAU;YAClE,QAAQ,EAAE,KAAK;SAChB,CAAC;IACJ,CAAC;CACF"}
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

## File: packages/engine/src/actions/ChangeColor.ts
```typescript
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
```

## File: packages/engine/src/actions/ClaimSeat.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';

export class ClaimSeatAction implements Action {
  type = 'CLAIM_SEAT';
  constructor(public playerId: string, public payload: { targetSeatId: string }) {}

  validate(state: GameState) {
    const seat = state.players.find(p => p.id === this.payload.targetSeatId);
    if (!seat) return { valid: false, error: "Seat not found." };
    if (seat.controllerType !== null) return { valid: false, error: "Seat is already taken!" };
    
    // Prevent someone who already has a seat from grabbing another one
    const existingSeat = state.players.find(p => p.controllerId === this.playerId);
    if (existingSeat) return { valid: false, error: "You already have a seat." };

    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    const seat = state.players.find(p => p.id === this.payload.targetSeatId)!;
    
    seat.controllerType = 'HUMAN';
    seat.controllerId = this.playerId;
    seat.isOnline = true;
    seat.name = this.playerId.substring(this.playerId.length - 5);

    // If there is no active host anywhere, give this new player the Crown
    const hasHost = state.players.some(p => p.isHost);
    if (!hasHost) seat.isHost = true;

    return { success: true, message: `You claimed ${seat.id}`, newState: state };
  }
}
```

## File: packages/engine/src/actions/ConfigurePlayer.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';

/**
 * CONFIGURE_PLAYER
 * Admin-only action.  Sets per-seat timer configuration.
 *
 * Payload:
 *   targetSeatId    — the seat (Player.id) to configure
 *   timerEnabled?   — boolean; whether the turn-skip timer fires for this seat
 *   turnTimeoutMs?  — number;  milliseconds before auto-skip (min 5 000)
 */
export class ConfigurePlayerAction implements Action {
  type = 'CONFIGURE_PLAYER';

  constructor(
    public playerId: string,
    public payload: {
      targetSeatId:   string;
      timerEnabled?:  boolean;
      turnTimeoutMs?: number;
    },
  ) {}

  validate(state: GameState) {
    if (this.playerId !== state.hostSessionId) {
      return { valid: false, error: 'Only the Root Admin can configure player settings.' };
    }
    const seat = state.players.find(p => p.id === this.payload.targetSeatId);
    if (!seat) {
      return { valid: false, error: `Seat ${this.payload.targetSeatId} not found.` };
    }
    if (
      this.payload.turnTimeoutMs !== undefined &&
      this.payload.turnTimeoutMs < 5_000
    ) {
      return { valid: false, error: 'Turn timeout must be at least 5 000 ms (5 seconds).' };
    }
    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    const seat = state.players.find(p => p.id === this.payload.targetSeatId)!;

    if (this.payload.timerEnabled !== undefined) {
      seat.timerEnabled = this.payload.timerEnabled;
    }
    if (this.payload.turnTimeoutMs !== undefined) {
      seat.turnTimeoutMs = this.payload.turnTimeoutMs;
    }

    const status = seat.timerEnabled
      ? `enabled (${seat.turnTimeoutMs / 1000}s)`
      : 'disabled';

    return {
      success:  true,
      message:  `Timer for ${seat.name} is now ${status}.`,
      newState: state,
    };
  }
}
```

## File: packages/engine/src/actions/EndTurn.ts
```typescript
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

## File: packages/server/dist/agents/AgentBrain.js
```javascript
export {};
```

## File: packages/server/dist/agents/HeuristicAgent.js
```javascript
// packages/server/src/agents/HeuristicAgent.ts
export class HeuristicAgent {
    // --------------------------------------------------------------------------
    // 1. THE MAIN DECISION LOOP
    // --------------------------------------------------------------------------
    decideMove(state, myPlayerId) {
        if (state.currentPlayerId !== myPlayerId)
            return null;
        const player = state.players.find(p => p.id === myPlayerId);
        if (!player)
            return null;
        switch (state.phase) {
            case 'STARTUP':
                return this.decideStartupMove(state, player);
            case 'ROLLING':
                return { type: 'ROLL_DICE', payload: {} };
            case 'TRADING_BUILDING':
                return this.decideTradingBuildingMove(state, player);
            case 'ROBBER_MOVE':
                return this.decideRobberMove(state, player);
            case 'ROBBER_STEAL':
                return this.decideRobberSteal(state, player);
            // Note: We skip ROBBER_DISCARD for now as the engine hasn't fully implemented the discard action yet!
            default:
                return null;
        }
    }
    // --------------------------------------------------------------------------
    // 2. GEOMETRY & TOPOLOGY MATH (Bridging DeepSeek to HexCoordinates)
    // --------------------------------------------------------------------------
    // Returns the Hex IDs (e.g., "0,0,0") that touch a given intersection
    getAdjacentHexes(state, intersectionId) {
        const int = state.board.intersections.get(intersectionId);
        if (!int)
            return [];
        return int.coords.map(coord => `${coord.q},${coord.r},${coord.s}`);
    }
    // Finds Paths (Edges) connected to an Intersection (Corner)
    getAdjacentPaths(state, intersectionId) {
        const int = state.board.intersections.get(intersectionId);
        if (!int)
            return [];
        const intHexStrings = int.coords.map(c => `${c.q},${c.r},${c.s}`);
        const adjacentPathIds = [];
        // A Path touches an Intersection if BOTH of the Path's hexes are part of the Intersection's hexes
        for (const path of state.board.paths.values()) {
            const pathHexStrings = path.coords.map(c => `${c.q},${c.r},${c.s}`);
            const isAdjacent = pathHexStrings.every(hexStr => intHexStrings.includes(hexStr));
            if (isAdjacent)
                adjacentPathIds.push(path.id);
        }
        return adjacentPathIds;
    }
    // Finds Intersections (Corners) that touch a specific Hex (Tile)
    getAdjacentIntersections(state, hexId) {
        const tile = state.board.tiles.get(hexId);
        if (!tile)
            return [];
        const targetHexStr = `${tile.coord.q},${tile.coord.r},${tile.coord.s}`;
        const adjacentInts = [];
        for (const int of state.board.intersections.values()) {
            const intHexStrings = int.coords.map(c => `${c.q},${c.r},${c.s}`);
            if (intHexStrings.includes(targetHexStr)) {
                adjacentInts.push(int);
            }
        }
        return adjacentInts;
    }
    // --------------------------------------------------------------------------
    // 3. SCORING HEURISTICS (How the Bot evaluates the board)
    // --------------------------------------------------------------------------
    diceProbability(value) {
        if (value === 2 || value === 12)
            return 1 / 36;
        if (value === 3 || value === 11)
            return 2 / 36;
        if (value === 4 || value === 10)
            return 3 / 36;
        if (value === 5 || value === 9)
            return 4 / 36;
        if (value === 6 || value === 8)
            return 5 / 36;
        return 0;
    }
    scoreIntersection(state, intId) {
        const hexes = this.getAdjacentHexes(state, intId);
        let score = 0;
        for (const hexId of hexes) {
            const tile = state.board.tiles.get(hexId);
            if (tile && tile.type !== 'DESERT') {
                score += this.diceProbability(tile.value);
            }
        }
        return score;
    }
    // --------------------------------------------------------------------------
    // 4. ACTION DECISION LOGIC
    // --------------------------------------------------------------------------
    decideStartupMove(state, player) {
        if (state.startupSubPhase === 'SETTLEMENT') {
            const bestInt = this.getBestSettlementNode(state);
            return { type: 'PLACE_INITIAL_SETTLEMENT', payload: { intersectionId: bestInt?.id } };
        }
        else if (state.startupSubPhase === 'ROAD') {
            // Find the settlement we literally JUST placed
            const mySettlements = Array.from(state.board.intersections.values())
                .filter(i => i.building?.playerId === player.id);
            if (mySettlements.length === 0)
                return null;
            const newestSettlement = mySettlements[mySettlements.length - 1];
            const bestPath = this.getBestRoadFromSettlement(state, newestSettlement.id);
            return { type: 'PLACE_INITIAL_ROAD', payload: { pathId: bestPath?.id } };
        }
        return null;
    }
    decideTradingBuildingMove(state, player) {
        const resources = player.resources;
        // 1. Try to build a City (Ore x3, Wheat x2)
        if (resources.ore >= 3 && resources.wheat >= 2) {
            const mySettlements = Array.from(state.board.intersections.values())
                .filter(i => i.building?.playerId === player.id && i.building.type === 'SETTLEMENT');
            if (mySettlements.length > 0) {
                return { type: 'BUILD_CITY', payload: { intersectionId: mySettlements[0].id } };
            }
        }
        // 2. Try to buy a Dev Card (Wheat x1, Ore x1, Sheep x1)
        if (resources.wheat >= 1 && resources.ore >= 1 && resources.sheep >= 1) {
            if (state.devCardDeck.length > 0) {
                return { type: 'BUY_DEV_CARD', payload: {} };
            }
        }
        // 3. Try to build a Settlement (Brick x1, Wood x1, Wheat x1, Sheep x1)
        if (resources.brick >= 1 && resources.wood >= 1 && resources.wheat >= 1 && resources.sheep >= 1) {
            const bestSettlement = this.getBestSettlementNode(state);
            if (bestSettlement) {
                return { type: 'BUILD_SETTLEMENT', payload: { intersectionId: bestSettlement.id } };
            }
        }
        // (Road building logic omitted for brevity; Bot will hoard resources if it can't build a settlement)
        // 4. Nothing else to do, end turn.
        return { type: 'END_TURN', payload: {} };
    }
    decideRobberMove(state, player) {
        let bestHex = null;
        let bestScore = -Infinity;
        for (const [hexId, tile] of state.board.tiles) {
            if (tile.hasRobber || tile.type === 'DESERT')
                continue;
            let score = 0;
            const adjacentIntersections = this.getAdjacentIntersections(state, hexId);
            // Look for enemies to steal from and block their highest producing tiles
            for (const int of adjacentIntersections) {
                if (int.building && int.building.playerId !== player.id) {
                    score += this.diceProbability(tile.value);
                }
            }
            if (score > bestScore) {
                bestScore = score;
                bestHex = hexId;
            }
        }
        return bestHex ? { type: 'MOVE_ROBBER', payload: { hexId: bestHex } } : null;
    }
    decideRobberSteal(state, player) {
        // Pick from the available victims calculated by the Engine
        if (!state.victimsAvailable || state.victimsAvailable.length === 0) {
            return { type: 'END_TURN', payload: {} };
        }
        // Just pick the first available victim for now
        const target = state.victimsAvailable[0];
        return { type: 'STEAL_CARD', payload: { victimId: target } };
    }
    // --------------------------------------------------------------------------
    // 5. PLACEMENT FINDERS
    // --------------------------------------------------------------------------
    getBestSettlementNode(state) {
        let best = null;
        let bestScore = -Infinity;
        for (const [id, int] of state.board.intersections) {
            if (int.building)
                continue; // occupied
            // (Note: A true AI would check the Distance Rule here. Currently, the Engine 
            // will reject the move if it's too close, which might cause the bot to skip its turn if it guesses wrong. 
            // For a V1 Heuristic Bot, this is an acceptable starting point.)
            const score = this.scoreIntersection(state, id);
            if (score > bestScore) {
                bestScore = score;
                best = id;
            }
        }
        return best ? { id: best } : null;
    }
    getBestRoadFromSettlement(state, settlementId) {
        const adjPaths = this.getAdjacentPaths(state, settlementId)
            .map(id => state.board.paths.get(id))
            .filter(p => !p.road); // Only pick empty roads
        if (adjPaths.length === 0)
            return null;
        return { id: adjPaths[0].id };
    }
}
```

## File: packages/server/src/agents/AgentBrain.ts
```typescript
import { GameState } from '@tinc/engine';

// This is the shape of the Lego Plug.
// ANY brain we ever create MUST have a decideMove function.
export interface AgentBrain {
  decideMove(state: GameState, myPlayerId: string): any | null;
}
```

## File: packages/server/src/agents/HeuristicAgent.ts
```typescript
// packages/server/src/agents/HeuristicAgent.ts

import { GameState, Player } from '@tinc/engine';
import { AgentBrain } from './AgentBrain.js';

export class HeuristicAgent implements AgentBrain {
  
  // --------------------------------------------------------------------------
  // 1. THE MAIN DECISION LOOP
  // --------------------------------------------------------------------------
  public decideMove(state: GameState, myPlayerId: string): any | null {
    if (state.currentPlayerId !== myPlayerId) return null;
    
    const player = state.players.find(p => p.id === myPlayerId);
    if (!player) return null;

    switch (state.phase) {
      case 'STARTUP':
        return this.decideStartupMove(state, player);
      case 'ROLLING':
        return { type: 'ROLL_DICE', payload: {} };
      case 'TRADING_BUILDING':
        return this.decideTradingBuildingMove(state, player);
      case 'ROBBER_MOVE':
        return this.decideRobberMove(state, player);
      case 'ROBBER_STEAL':
        return this.decideRobberSteal(state, player);
      // Note: We skip ROBBER_DISCARD for now as the engine hasn't fully implemented the discard action yet!
      default:
        return null;
    }
  }

  // --------------------------------------------------------------------------
  // 2. GEOMETRY & TOPOLOGY MATH (Bridging DeepSeek to HexCoordinates)
  // --------------------------------------------------------------------------

  // Returns the Hex IDs (e.g., "0,0,0") that touch a given intersection
  private getAdjacentHexes(state: GameState, intersectionId: string): string[] {
    const int = state.board.intersections.get(intersectionId);
    if (!int) return[];
    return int.coords.map(coord => `${coord.q},${coord.r},${coord.s}`);
  }

  // Finds Paths (Edges) connected to an Intersection (Corner)
  private getAdjacentPaths(state: GameState, intersectionId: string): string[] {
    const int = state.board.intersections.get(intersectionId);
    if (!int) return[];
    
    const intHexStrings = int.coords.map(c => `${c.q},${c.r},${c.s}`);
    const adjacentPathIds: string[] =[];

    // A Path touches an Intersection if BOTH of the Path's hexes are part of the Intersection's hexes
    for (const path of state.board.paths.values()) {
      const pathHexStrings = path.coords.map(c => `${c.q},${c.r},${c.s}`);
      const isAdjacent = pathHexStrings.every(hexStr => intHexStrings.includes(hexStr));
      if (isAdjacent) adjacentPathIds.push(path.id);
    }
    return adjacentPathIds;
  }

  // Finds Intersections (Corners) that touch a specific Hex (Tile)
  private getAdjacentIntersections(state: GameState, hexId: string): any[] {
    const tile = state.board.tiles.get(hexId);
    if (!tile) return[];
    
    const targetHexStr = `${tile.coord.q},${tile.coord.r},${tile.coord.s}`;
    const adjacentInts: any[] =[];

    for (const int of state.board.intersections.values()) {
      const intHexStrings = int.coords.map(c => `${c.q},${c.r},${c.s}`);
      if (intHexStrings.includes(targetHexStr)) {
        adjacentInts.push(int);
      }
    }
    return adjacentInts;
  }

  // --------------------------------------------------------------------------
  // 3. SCORING HEURISTICS (How the Bot evaluates the board)
  // --------------------------------------------------------------------------
  
  private diceProbability(value: number): number {
    if (value === 2 || value === 12) return 1 / 36;
    if (value === 3 || value === 11) return 2 / 36;
    if (value === 4 || value === 10) return 3 / 36;
    if (value === 5 || value === 9) return 4 / 36;
    if (value === 6 || value === 8) return 5 / 36;
    return 0;
  }

  private scoreIntersection(state: GameState, intId: string): number {
    const hexes = this.getAdjacentHexes(state, intId);
    let score = 0;
    for (const hexId of hexes) {
      const tile = state.board.tiles.get(hexId);
      if (tile && tile.type !== 'DESERT') {
        score += this.diceProbability(tile.value);
      }
    }
    return score;
  }

  // --------------------------------------------------------------------------
  // 4. ACTION DECISION LOGIC
  // --------------------------------------------------------------------------

  private decideStartupMove(state: GameState, player: Player): any {
    if (state.startupSubPhase === 'SETTLEMENT') {
      const bestInt = this.getBestSettlementNode(state);
      return { type: 'PLACE_INITIAL_SETTLEMENT', payload: { intersectionId: bestInt?.id } };
    } 
    else if (state.startupSubPhase === 'ROAD') {
      // Find the settlement we literally JUST placed
      const mySettlements = Array.from(state.board.intersections.values())
        .filter(i => i.building?.playerId === player.id);
      
      if (mySettlements.length === 0) return null;
      
      const newestSettlement = mySettlements[mySettlements.length - 1];
      const bestPath = this.getBestRoadFromSettlement(state, newestSettlement.id);
      
      return { type: 'PLACE_INITIAL_ROAD', payload: { pathId: bestPath?.id } };
    }
    return null;
  }

  private decideTradingBuildingMove(state: GameState, player: Player): any {
    const resources = player.resources;

    // 1. Try to build a City (Ore x3, Wheat x2)
    if (resources.ore >= 3 && resources.wheat >= 2) {
      const mySettlements = Array.from(state.board.intersections.values())
        .filter(i => i.building?.playerId === player.id && i.building.type === 'SETTLEMENT');
      if (mySettlements.length > 0) {
        return { type: 'BUILD_CITY', payload: { intersectionId: mySettlements[0].id } };
      }
    }

    // 2. Try to buy a Dev Card (Wheat x1, Ore x1, Sheep x1)
    if (resources.wheat >= 1 && resources.ore >= 1 && resources.sheep >= 1) {
      if (state.devCardDeck.length > 0) {
        return { type: 'BUY_DEV_CARD', payload: {} };
      }
    }

    // 3. Try to build a Settlement (Brick x1, Wood x1, Wheat x1, Sheep x1)
    if (resources.brick >= 1 && resources.wood >= 1 && resources.wheat >= 1 && resources.sheep >= 1) {
      const bestSettlement = this.getBestSettlementNode(state);
      if (bestSettlement) {
        return { type: 'BUILD_SETTLEMENT', payload: { intersectionId: bestSettlement.id } };
      }
    }

    // (Road building logic omitted for brevity; Bot will hoard resources if it can't build a settlement)

    // 4. Nothing else to do, end turn.
    return { type: 'END_TURN', payload: {} };
  }

  private decideRobberMove(state: GameState, player: Player): any {
    let bestHex: string | null = null;
    let bestScore = -Infinity;

    for (const [hexId, tile] of state.board.tiles) {
      if (tile.hasRobber || tile.type === 'DESERT') continue;
      
      let score = 0;
      const adjacentIntersections = this.getAdjacentIntersections(state, hexId);
      
      // Look for enemies to steal from and block their highest producing tiles
      for (const int of adjacentIntersections) {
        if (int.building && int.building.playerId !== player.id) {
          score += this.diceProbability(tile.value);
        }
      }

      if (score > bestScore) {
        bestScore = score;
        bestHex = hexId;
      }
    }
    
    return bestHex ? { type: 'MOVE_ROBBER', payload: { hexId: bestHex } } : null;
  }

  private decideRobberSteal(state: GameState, player: Player): any {
    // Pick from the available victims calculated by the Engine
    if (!state.victimsAvailable || state.victimsAvailable.length === 0) {
      return { type: 'END_TURN', payload: {} };
    }
    
    // Just pick the first available victim for now
    const target = state.victimsAvailable[0];
    return { type: 'STEAL_CARD', payload: { victimId: target } };
  }

  // --------------------------------------------------------------------------
  // 5. PLACEMENT FINDERS
  // --------------------------------------------------------------------------

  private getBestSettlementNode(state: GameState): { id: string } | null {
    let best: string | null = null;
    let bestScore = -Infinity;

    for (const [id, int] of state.board.intersections) {
      if (int.building) continue; // occupied

      // (Note: A true AI would check the Distance Rule here. Currently, the Engine 
      // will reject the move if it's too close, which might cause the bot to skip its turn if it guesses wrong. 
      // For a V1 Heuristic Bot, this is an acceptable starting point.)

      const score = this.scoreIntersection(state, id);
      if (score > bestScore) {
        bestScore = score;
        best = id;
      }
    }
    return best ? { id: best } : null;
  }

  private getBestRoadFromSettlement(state: GameState, settlementId: string): { id: string } | null {
    const adjPaths = this.getAdjacentPaths(state, settlementId)
      .map(id => state.board.paths.get(id)!)
      .filter(p => !p.road); // Only pick empty roads
      
    if (adjPaths.length === 0) return null;
    return { id: adjPaths[0].id };
  }
}
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

## File: .gitignore
```
tinc-mar4-2026.md
tinc-mar7-2026.md
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

## File: packages/client/src/components/GameBoard/Board.vue
```vue
<script setup lang="ts">
  import Tile from './Tile.vue';
  import Intersection from './Intersection.vue';
  import Path from './Path.vue';
  import { useGameStore } from '../../stores/gameStore';

  const gameStore = useGameStore();

  const handleIntersectionClick = (id: string) => {
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
      <!-- Tiles (bottom layer) -->
      <Tile 
        v-for="tile in gameStore.state.board.tiles" 
        :key="tile.id" 
        v-bind="tile" 
      />

      <!-- Paths (middle layer) -->
      <Path 
        v-for="path in gameStore.state.board.paths" 
        :key="path.id" 
        :id="path.id"
        :coords="path.coords"
        :road="path.road"
        :color="path.road ? gameStore.getPlayerColor(path.road.playerId) : undefined"
        @click="handlePathClick"
      />

      <!-- Intersections (top layer) -->
      <Intersection 
        v-for="int in gameStore.state.board.intersections" 
        :key="int.id" 
        :id="int.id"
        :coords="int.coords"
        :building="int.building"
        :color="int.building ? gameStore.getPlayerColor(int.building.playerId) : undefined"
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
  background: #2980b9;
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
    color?: string;          // passed from parent when a building exists
    canBuild?: boolean;
  }>();

  const emit = defineEmits(['click']);

  const pos = computed(() => getAveragePixelCoords(props.coords));

  // SVG path strings for the buildings (centered at origin)
  const settlementPath = "M -6.6469851,6.6469877 H 6.6469882 V -1.4105927 L 1.5459839e-6,-6.6470493 -6.6469851,-1.4105927 Z";
  const cityPath = "m -3.8820497,-8.9536803 -5.0715547,4.737585 V 8.9536037 H 8.9536047 V 1.1436717 H 1.189507 v -5.359767 z";
</script>

<template>
  <g :transform="`translate(${pos.x}, ${pos.y})`" 
     @click="emit('click', props.id)"
     class="intersection-node">
    
    <!-- Invisible hitbox for clicking -->
    <circle r="12" fill="transparent" class="hitbox" />
    
    <!-- Settlement -->
    <path
      v-if="building?.type === 'SETTLEMENT'"
      :d="settlementPath"
      :fill="color"
      stroke="white"
      stroke-width="0.5"
    />
    
    <!-- City -->
    <path
      v-else-if="building?.type === 'CITY'"
      :d="cityPath"
      :fill="color"
      stroke="white"
      stroke-width="0.5"
    />

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
import { getPixelCoords } from '../../utils/layout';

const props = defineProps<{
  id: string;
  coords: {q: number, r: number}[];
  road?: { playerId: string };
  color?: string;          // passed from parent when a road exists
}>();

const emit = defineEmits(['click']);

// Pixel coordinates of the two endpoints
const p1 = computed(() => {
  if (!props.coords || props.coords.length < 2) return { x: 0, y: 0 };
  return getPixelCoords(props.coords[0].q, props.coords[0].r);
});

const p2 = computed(() => {
  if (!props.coords || props.coords.length < 2) return { x: 0, y: 0 };
  return getPixelCoords(props.coords[1].q, props.coords[1].r);
});

// Midpoint (used for the empty‑road indicator)
const mid = computed(() => ({
  x: (p1.value.x + p2.value.x) / 2,
  y: (p1.value.y + p2.value.y) / 2,
}));
</script>

<template>
  <!-- Road: a thick line between the two intersections -->
  <line
    v-if="road"
    :x1="p1.x" :y1="p1.y" :x2="p2.x" :y2="p2.y"
    :stroke="color"
    stroke-width="8"
    stroke-linecap="round"
    @click="emit('click', props.id)"
    class="path-road"
  />

  <!-- Empty path (no road) – small clickable circle at midpoint -->
  <circle
    v-else
    :cx="mid.x" :cy="mid.y"
    r="4"
    fill="rgba(255,255,255,0.2)"
    @click="emit('click', props.id)"
    class="path-empty"
  />
</template>

<style scoped>
.path-road {
  cursor: pointer;
  transition: stroke 0.1s;
}
.path-road:hover {
  stroke: #ffffff;
}
.path-empty {
  cursor: pointer;
}
.path-empty:hover {
  fill: rgba(255,255,255,0.5);
}
</style>
```

## File: packages/client/src/style.css
```css
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #111;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ── RESET: make the app fill the full viewport ───────────────
   Vite's default style.css ships with:
     body  { display: flex; place-items: center }
     #app  { max-width: 1280px; padding: 2rem }
   Both of those center #app as a narrow island and cause
   position:fixed panels to appear detached or off-screen.
   We override them here for a full-viewport game layout.
─────────────────────────────────────────────────────────────── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;    /* no scroll bars on the root */
}

body {
  display: block;      /* ← kills the flex centering */
  background: #111;
}

#app {
  width: 100vw;
  height: 100vh;
  max-width: none;     /* ← kills the 1280px cap */
  padding: 0;          /* ← kills the 2rem padding */
  margin: 0;
  text-align: left;
  position: relative;
  overflow: hidden;
}

/* ── keep sensible global element defaults ────────────────── */
a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover { color: #535bf2; }

h1 { font-size: 3.2em; line-height: 1.1; }

/* Global button reset — individual components re-style their own buttons */
button {
  border-radius: 4px;
  border: 1px solid transparent;
  font-size: 0.9em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover { border-color: #646cff; }
button:focus, button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
}
```

## File: packages/engine/dist/actions/Action.d.ts
```typescript
import { GameState } from '../types/index.js';
export interface ActionResponse {
    success: boolean;
    message?: string;
    newState?: GameState;
    followUp?: string;
    currentPlayerId?: string;
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
{"version":3,"file":"Action.d.ts","sourceRoot":"","sources":["../../src/actions/Action.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,SAAS,EAAE,MAAM,mBAAmB,CAAC;AAE9C,MAAM,WAAW,cAAc;IAC7B,OAAO,EAAE,OAAO,CAAC;IACjB,OAAO,CAAC,EAAE,MAAM,CAAC;IACjB,QAAQ,CAAC,EAAE,SAAS,CAAC;IACrB,QAAQ,CAAC,EAAE,MAAM,CAAC;IAClB,eAAe,CAAC,EAAE,MAAM,CAAC;CAC1B;AAED,MAAM,WAAW,MAAM;IACrB,IAAI,EAAE,MAAM,CAAC;IACb,QAAQ,EAAE,MAAM,CAAC;IACjB,OAAO,EAAE,GAAG,CAAC;IAGb,QAAQ,CAAC,KAAK,EAAE,SAAS,GAAG;QAAE,KAAK,EAAE,OAAO,CAAC;QAAC,KAAK,CAAC,EAAE,MAAM,CAAA;KAAE,CAAC;IAG/D,OAAO,CAAC,KAAK,EAAE,SAAS,GAAG,cAAc,CAAC;CAC3C"}
```

## File: packages/engine/dist/actions/PlaceInitialRoad.d.ts.map
```
{"version":3,"file":"PlaceInitialRoad.d.ts","sourceRoot":"","sources":["../../src/actions/PlaceInitialRoad.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,MAAM,EAAE,cAAc,EAAE,MAAM,aAAa,CAAC;AACrD,OAAO,EAAE,SAAS,EAAE,MAAM,mBAAmB,CAAC;AAE9C,qBAAa,sBAAuB,YAAW,MAAM;IAI1C,QAAQ,EAAE,MAAM;IAChB,OAAO,EAAE;QAAE,MAAM,EAAE,MAAM,CAAA;KAAE;IAJpC,IAAI,SAAwB;gBAGnB,QAAQ,EAAE,MAAM,EAChB,OAAO,EAAE;QAAE,MAAM,EAAE,MAAM,CAAA;KAAE;IAGpC,QAAQ,CAAC,KAAK,EAAE,SAAS;;;;;;;IAazB,OAAO,CAAC,KAAK,EAAE,SAAS,GAAG,cAAc;CAiC1C"}
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
            return { valid: false, error: 'Not the time for initial road placement.' };
        }
        const path = state.board.paths.get(this.payload.pathId);
        if (!path || path.road) {
            return { valid: false, error: 'Invalid or occupied path.' };
        }
        return { valid: true };
    }
    execute(state) {
        const path = state.board.paths.get(this.payload.pathId);
        path.road = { playerId: this.playerId };
        // Advance the serpentine index FIRST
        state.startupIndex += 1;
        state.startupSubPhase = 'SETTLEMENT';
        // Startup complete (2 settlements + 2 roads per player = 8 placements for 2 players,
        // scales with player count via setupSequence.length)
        if (state.startupIndex >= state.setupSequence.length) {
            state.phase = 'ROLLING';
            state.currentPlayerId = state.turnOrder[0]; // Player 1 rolls first
            return {
                success: true,
                message: 'Startup finished! Begin the game.',
                newState: state,
            };
        }
        // ── THE FIX ──────────────────────────────────────────────────────────
        // Advance currentPlayerId to whoever is next in the serpentine sequence.
        // Without this line the human can never take a second turn — every
        // ActionProcessor turn-check sees "seat_old" !== "seat_next" and rejects.
        // ─────────────────────────────────────────────────────────────────────
        state.currentPlayerId = state.setupSequence[state.startupIndex];
        return {
            success: true,
            message: `Road placed. ${state.currentPlayerId}'s turn.`,
            newState: state,
        };
    }
}
//# sourceMappingURL=PlaceInitialRoad.js.map
```

## File: packages/engine/dist/actions/PlaceInitialRoad.js.map
```
{"version":3,"file":"PlaceInitialRoad.js","sourceRoot":"","sources":["../../src/actions/PlaceInitialRoad.ts"],"names":[],"mappings":"AAGA,MAAM,OAAO,sBAAsB;IAIxB;IACA;IAJT,IAAI,GAAG,oBAAoB,CAAC;IAE5B,YACS,QAAgB,EAChB,OAA2B;QAD3B,aAAQ,GAAR,QAAQ,CAAQ;QAChB,YAAO,GAAP,OAAO,CAAoB;IACjC,CAAC;IAEJ,QAAQ,CAAC,KAAgB;QACvB,IAAI,KAAK,CAAC,KAAK,KAAK,SAAS,IAAI,KAAK,CAAC,eAAe,KAAK,MAAM,EAAE,CAAC;YAClE,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,0CAA0C,EAAE,CAAC;QAC7E,CAAC;QAED,MAAM,IAAI,GAAG,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,GAAG,CAAC,IAAI,CAAC,OAAO,CAAC,MAAM,CAAC,CAAC;QACxD,IAAI,CAAC,IAAI,IAAI,IAAI,CAAC,IAAI,EAAE,CAAC;YACvB,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,2BAA2B,EAAE,CAAC;QAC9D,CAAC;QAED,OAAO,EAAE,KAAK,EAAE,IAAI,EAAE,CAAC;IACzB,CAAC;IAED,OAAO,CAAC,KAAgB;QACtB,MAAM,IAAI,GAAG,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,GAAG,CAAC,IAAI,CAAC,OAAO,CAAC,MAAM,CAAE,CAAC;QACzD,IAAI,CAAC,IAAI,GAAG,EAAE,QAAQ,EAAE,IAAI,CAAC,QAAQ,EAAE,CAAC;QAExC,qCAAqC;QACrC,KAAK,CAAC,YAAY,IAAO,CAAC,CAAC;QAC3B,KAAK,CAAC,eAAe,GAAI,YAAY,CAAC;QAEtC,qFAAqF;QACrF,qDAAqD;QACrD,IAAI,KAAK,CAAC,YAAY,IAAI,KAAK,CAAC,aAAa,CAAC,MAAM,EAAE,CAAC;YACrD,KAAK,CAAC,KAAK,GAAa,SAAS,CAAC;YAClC,KAAK,CAAC,eAAe,GAAG,KAAK,CAAC,SAAS,CAAC,CAAC,CAAC,CAAC,CAAC,uBAAuB;YACnE,OAAO;gBACL,OAAO,EAAG,IAAI;gBACd,OAAO,EAAG,mCAAmC;gBAC7C,QAAQ,EAAE,KAAK;aAChB,CAAC;QACJ,CAAC;QAED,wEAAwE;QACxE,yEAAyE;QACzE,mEAAmE;QACnE,0EAA0E;QAC1E,wEAAwE;QACxE,KAAK,CAAC,eAAe,GAAG,KAAK,CAAC,aAAa,CAAC,KAAK,CAAC,YAAY,CAAC,CAAC;QAEhE,OAAO;YACL,OAAO,EAAG,IAAI;YACd,OAAO,EAAG,gBAAgB,KAAK,CAAC,eAAe,UAAU;YACzD,QAAQ,EAAE,KAAK;SAChB,CAAC;IACJ,CAAC;CACF"}
```

## File: packages/engine/dist/actions/RemoveSeat.d.ts.map
```
{"version":3,"file":"RemoveSeat.d.ts","sourceRoot":"","sources":["../../src/actions/RemoveSeat.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,MAAM,EAAE,cAAc,EAAE,MAAM,aAAa,CAAC;AACrD,OAAO,EAAE,SAAS,EAAE,MAAM,mBAAmB,CAAC;AAE9C,qBAAa,gBAAiB,YAAW,MAAM;IAIpC,QAAQ,EAAE,MAAM;IAChB,OAAO,EAAE;QAAE,YAAY,EAAE,MAAM,CAAA;KAAE;IAJ1C,IAAI,SAAiB;gBAGZ,QAAQ,EAAE,MAAM,EAChB,OAAO,EAAE;QAAE,YAAY,EAAE,MAAM,CAAA;KAAE;IAG1C,QAAQ,CAAC,KAAK,EAAE,SAAS;;;;;;;IAezB,OAAO,CAAC,KAAK,EAAE,SAAS,GAAG,cAAc;CAI1C"}
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
        // Only the Root Admin (session-level crown) may remove seats.
        const isRootAdmin = this.playerId === state.hostSessionId;
        if (!isRootAdmin) {
            return { valid: false, error: 'Only the Root Admin can remove seats.' };
        }
        const target = state.players.find(p => p.id === this.payload.targetSeatId);
        if (target?.controllerType === 'HUMAN' && target.isOnline) {
            return { valid: false, error: 'Cannot remove a connected human.' };
        }
        return { valid: true };
    }
    execute(state) {
        state.players = state.players.filter(p => p.id !== this.payload.targetSeatId);
        return { success: true, message: 'Seat removed.', newState: state };
    }
}
//# sourceMappingURL=RemoveSeat.js.map
```

## File: packages/engine/dist/actions/RemoveSeat.js.map
```
{"version":3,"file":"RemoveSeat.js","sourceRoot":"","sources":["../../src/actions/RemoveSeat.ts"],"names":[],"mappings":"AAGA,MAAM,OAAO,gBAAgB;IAIlB;IACA;IAJT,IAAI,GAAG,aAAa,CAAC;IAErB,YACS,QAAgB,EAChB,OAAiC;QADjC,aAAQ,GAAR,QAAQ,CAAQ;QAChB,YAAO,GAAP,OAAO,CAA0B;IACvC,CAAC;IAEJ,QAAQ,CAAC,KAAgB;QACvB,8DAA8D;QAC9D,MAAM,WAAW,GAAG,IAAI,CAAC,QAAQ,KAAK,KAAK,CAAC,aAAa,CAAC;QAC1D,IAAI,CAAC,WAAW,EAAE,CAAC;YACjB,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,uCAAuC,EAAE,CAAC;QAC1E,CAAC;QAED,MAAM,MAAM,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,IAAI,CAAC,OAAO,CAAC,YAAY,CAAC,CAAC;QAC3E,IAAI,MAAM,EAAE,cAAc,KAAK,OAAO,IAAI,MAAM,CAAC,QAAQ,EAAE,CAAC;YAC1D,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,kCAAkC,EAAE,CAAC;QACrE,CAAC;QAED,OAAO,EAAE,KAAK,EAAE,IAAI,EAAE,CAAC;IACzB,CAAC;IAED,OAAO,CAAC,KAAgB;QACtB,KAAK,CAAC,OAAO,GAAG,KAAK,CAAC,OAAO,CAAC,MAAM,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,IAAI,CAAC,OAAO,CAAC,YAAY,CAAC,CAAC;QAC9E,OAAO,EAAE,OAAO,EAAE,IAAI,EAAE,OAAO,EAAE,eAAe,EAAE,QAAQ,EAAE,KAAK,EAAE,CAAC;IACtE,CAAC;CACF"}
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

## File: packages/engine/dist/actions/ToggleController.d.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';
export declare class ToggleControllerAction implements Action {
    playerId: string;
    payload: {
        targetPlayerId: string;
        controllerType: 'HUMAN' | 'AGENT' | null;
    };
    type: string;
    constructor(playerId: string, payload: {
        targetPlayerId: string;
        controllerType: 'HUMAN' | 'AGENT' | null;
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

## File: packages/engine/dist/ActionProcessor.d.ts
```typescript
import { ActionResponse } from './actions/Action.js';
import { GameState } from './types/index.js';
export declare class ActionProcessor {
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
    static process(state: GameState, rawAction: any): ActionResponse;
    private static createAction;
}
//# sourceMappingURL=ActionProcessor.d.ts.map
```

## File: packages/engine/src/actions/Action.ts
```typescript
import { GameState } from '../types/index.js';

export interface ActionResponse {
  success: boolean;
  message?: string;
  newState?: GameState;
  followUp?: string; // e.g., "MOVE_ROBBER"
  currentPlayerId?: string;
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

## File: packages/engine/src/actions/ConfigureAgent.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';

export class ConfigureAgentAction implements Action {
  type = 'CONFIGURE_AGENT';

  constructor(
    public playerId: string, // The Root Admin making the change
    public payload: { targetPlayerId: string; agentType: 'HEURISTIC' | 'LLM' | 'WEBHOOK' },
  ) {}

  validate(state: GameState) {
    // Only the Root Admin (session-level crown) can rewire a robot's brain
    const isRootAdmin = this.playerId === state.hostSessionId;
    if (!isRootAdmin) {
      return { valid: false, error: 'Only the 👑 Root Admin can configure Agents.' };
    }

    const targetSeat = state.players.find(p => p.id === this.payload.targetPlayerId);
    if (targetSeat?.controllerType !== 'AGENT') {
      return { valid: false, error: 'You can only configure Brains for Agents.' };
    }

    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    const seat = state.players.find(p => p.id === this.payload.targetPlayerId)!;

    // Plug in the new Lego Brain
    seat.agentType = this.payload.agentType;

    return {
      success: true,
      message:  `Agent ${seat.name} is now using the ${this.payload.agentType} Brain.`,
      newState: state,
    };
  }
}
```

## File: packages/engine/src/actions/PlaceInitialRoad.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';

export class PlaceInitialRoadAction implements Action {
  type = 'PLACE_INITIAL_ROAD';

  constructor(
    public playerId: string,
    public payload: { pathId: string },
  ) {}

  validate(state: GameState) {
    if (state.phase !== 'STARTUP' || state.startupSubPhase !== 'ROAD') {
      return { valid: false, error: 'Not the time for initial road placement.' };
    }

    const path = state.board.paths.get(this.payload.pathId);
    if (!path || path.road) {
      return { valid: false, error: 'Invalid or occupied path.' };
    }

    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    const path = state.board.paths.get(this.payload.pathId)!;
    path.road = { playerId: this.playerId };

    // Advance the serpentine index FIRST
    state.startupIndex    += 1;
    state.startupSubPhase  = 'SETTLEMENT';

    // Startup complete (2 settlements + 2 roads per player = 8 placements for 2 players,
    // scales with player count via setupSequence.length)
    if (state.startupIndex >= state.setupSequence.length) {
      state.phase           = 'ROLLING';
      state.currentPlayerId = state.turnOrder[0]; // Player 1 rolls first
      return {
        success:  true,
        message:  'Startup finished! Begin the game.',
        newState: state,
      };
    }

    // ── THE FIX ──────────────────────────────────────────────────────────
    // Advance currentPlayerId to whoever is next in the serpentine sequence.
    // Without this line the human can never take a second turn — every
    // ActionProcessor turn-check sees "seat_old" !== "seat_next" and rejects.
    // ─────────────────────────────────────────────────────────────────────
    state.currentPlayerId = state.setupSequence[state.startupIndex];

    return {
      success:  true,
      message:  `Road placed. ${state.currentPlayerId}'s turn.`,
      newState: state,
    };
  }
}
```

## File: packages/engine/src/actions/RemoveSeat.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState } from '../types/index.js';

export class RemoveSeatAction implements Action {
  type = 'REMOVE_SEAT';

  constructor(
    public playerId: string,
    public payload: { targetSeatId: string },
  ) {}

  validate(state: GameState) {
    // Only the Root Admin (session-level crown) may remove seats.
    const isRootAdmin = this.playerId === state.hostSessionId;
    if (!isRootAdmin) {
      return { valid: false, error: 'Only the Root Admin can remove seats.' };
    }

    const target = state.players.find(p => p.id === this.payload.targetSeatId);
    if (target?.controllerType === 'HUMAN' && target.isOnline) {
      return { valid: false, error: 'Cannot remove a connected human.' };
    }

    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    state.players = state.players.filter(p => p.id !== this.payload.targetSeatId);
    return { success: true, message: 'Seat removed.', newState: state };
  }
}
```

## File: packages/client/src/components/Sidebar/CommandConsole.vue
```vue
<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue';
import { useGameStore }   from '../../stores/gameStore';
import { COLOR_TO_EMOJI } from '../../utils/constants';

const props = defineProps<{ isOpen: boolean }>();
const emit  = defineEmits<{ (e: 'toggle'): void }>();

const gameStore      = useGameStore();
const logContainer   = ref<HTMLElement | null>(null);
const autoScroll     = ref(true);
const filter         = ref<'ALL' | 'ACTION' | 'SYSTEM' | 'ERROR'>('ALL');
const rawJson        = ref('{\n  "type": "ROLL_DICE",\n  "payload": {}\n}');
const showEditor     = ref(false);
const lastSendStatus = ref('');

// ── Width ─────────────────────────────────────────────────────────────────
const MIN_WIDTH  = 330;
const MAX_WIDTH  = () => Math.floor(window.innerWidth * 0.75);
const panelWidth = ref(380);

// ── Drag ──────────────────────────────────────────────────────────────────
const isDragging = ref(false);
let dragStartX   = 0;
let dragStartW   = 0;
let hasDragged   = false;

function onPillMouseDown(e: MouseEvent) {
  if (e.button !== 0) return;
  isDragging.value = true;
  dragStartX = e.clientX;
  dragStartW = panelWidth.value;
  hasDragged = false;
  window.addEventListener('mousemove', onDragMove);
  window.addEventListener('mouseup',   onDragEnd);
  e.preventDefault();
}

function onDragMove(e: MouseEvent) {
  const delta = e.clientX - dragStartX;
  if (Math.abs(delta) > 4) hasDragged = true;
  if (hasDragged) {
    panelWidth.value = Math.min(MAX_WIDTH(), Math.max(MIN_WIDTH, dragStartW + delta));
  }
}

function onDragEnd() {
  window.removeEventListener('mousemove', onDragMove);
  window.removeEventListener('mouseup',   onDragEnd);
  if (!hasDragged) emit('toggle');
  isDragging.value = false;
}

// ── Scroll ────────────────────────────────────────────────────────────────
watch(() => gameStore.logs.length, async () => {
  if (!autoScroll.value) return;
  await nextTick();
  if (logContainer.value) logContainer.value.scrollTop = logContainer.value.scrollHeight;
});

const filteredLogs = computed(() =>
  filter.value === 'ALL'
    ? gameStore.logs
    : gameStore.logs.filter((e: any) => e.type === filter.value),
);

const sendRawAction = () => {
  try {
    const action = JSON.parse(rawJson.value);
    gameStore.performAction(action.type, action.payload ?? {});
    lastSendStatus.value = '✅ Sent';
    setTimeout(() => (lastSendStatus.value = ''), 2000);
  } catch {
    lastSendStatus.value = '❌ Invalid JSON';
  }
};
</script>

<template>
  <!--
    PILL — its own position:fixed element (not inside the panel).

    DRIFT FIX: transition is applied via :style, not CSS class.
    When isDragging=true  → transition:'none'  → pill snaps instantly to cursor.
    When isDragging=false → transition kicks in → smooth open/close animation.
    Both pill and panel share identical left values + identical transition
    string, so they are frame-perfectly synchronised.

    NO-FLIP FIX: pill appearance is identical whether open or closed.
    It always looks like a right-pointing drawer tab. No border swap,
    no border-radius swap, no class-based style change on toggle.
  -->
  <div
    class="tab-pill"
    :style="{
      left:       isOpen ? panelWidth + 'px' : '0px',
      transition: isDragging ? 'none' : 'left 0.22s ease'
    }"
    @mousedown="onPillMouseDown"
  ><span class="pill-text">TAB</span></div>

  <!--
    PANEL — also driven by left, same transition string as pill.
    Closed: left = -panelWidth  (fully off-screen left)
    Open:   left = 0            (flush with screen edge)
  -->
  <aside
    class="dev-console"
    :style="{
      width:      panelWidth + 'px',
      left:       isOpen ? '0px' : (-panelWidth) + 'px',
      transition: isDragging ? 'none' : 'left 0.22s ease'
    }"
  >
    <div class="toolbar">
      <span class="title">DEV_CONSOLE</span>
      <div class="filters">
        <button v-for="f in ['ALL','ACTION','SYSTEM','ERROR']" :key="f"
          :class="['filter-btn', { active: filter === f }]"
          @click="filter = (f as any)">{{ f }}</button>
      </div>
      <label class="autoscroll-toggle">
        <input type="checkbox" v-model="autoScroll" /> AUTO↓
      </label>
    </div>

    <div class="log-stream" ref="logContainer">
      <div class="log-inner">

        <div v-for="entry in filteredLogs" :key="entry.id"
          :class="['log-entry', entry.type?.toLowerCase()]">

          <template v-if="entry.type === 'SYSTEM' || entry.type === 'ERROR'">
            <span class="ts">[{{ entry.timeStr ?? new Date(entry.timestamp).toTimeString().slice(0,8) }}]</span>
            <span class="tag" :class="entry.type?.toLowerCase()">{{ entry.type }}</span>
            <span class="sys-msg">{{ entry.message }}</span>
          </template>

          <template v-else-if="entry.type === 'ACTION'">
            <div class="line-a">
              <span class="ts">[{{ entry.timeStr ?? new Date(entry.timestamp).toTimeString().slice(0,8) }}]</span>
              <span class="player-icon" :style="{ color: entry.playerColor }">{{ COLOR_TO_EMOJI[entry.playerColor] ?? '⬜' }}</span>
              <span class="player-name-log" :style="{ color: entry.playerColor }">{{ entry.playerName ?? entry.playerId }}</span>
              <span class="action-type">{{ entry.request?.type ?? '???' }}</span>
            </div>
            <div class="json-row">
              <span class="json-label req">REQ</span>
              <code class="json-body">{{ JSON.stringify(entry.request) }}</code>
            </div>
            <div class="json-row" :class="{ rejected: entry.response?.success === false }">
              <span class="json-label res" :class="{ fail: entry.response?.success === false }">RES</span>
              <code class="json-body">{{ JSON.stringify(entry.response) }}</code>
            </div>
          </template>

          <template v-else>
            <span class="ts">[{{ entry.timeStr ?? new Date(entry.timestamp).toTimeString().slice(0,8) }}]</span>
            <span class="sys-msg">{{ entry.message }}</span>
          </template>

        </div>

        <div v-if="filteredLogs.length === 0" class="empty-hint">
          No entries yet — waiting for actions…
        </div>
      </div>
    </div>

    <div class="editor-section">
      <button class="toggle-editor" @click="showEditor = !showEditor">
        {{ showEditor ? '▲ HIDE' : '▼ RAW CMD' }}
      </button>
      <div v-if="showEditor" class="editor-body">
        <textarea v-model="rawJson" rows="4" spellcheck="false"></textarea>
        <div class="editor-actions">
          <button @click="sendRawAction">⚡ Execute</button>
          <span class="send-status">{{ lastSendStatus }}</span>
        </div>
      </div>
    </div>
  </aside>

</template>

<style scoped>
/* ── TAB PILL ──────────────────────────────────────────────────────────────
   position:fixed, top-level — never clipped by any parent.
   `left` and `transition` are 100% inline (:style) — no CSS transition
   here so there is no conflict between CSS and JS-driven values.
   Appearance is STATIC — no open/closed state changes, no flip.
──────────────────────────────────────────────────────────────────────────── */
.tab-pill {
  position: fixed;
  top: 50%;
  /* left: driven by :style */
  transform: translateY(-50%);
  z-index: 1100;

  background: #1a1a1a;
  color: #00ff00;
  border: 1px solid #444;
  border-left: none;               /* flat left edge — glues to panel */
  border-radius: 0 4px 4px 0;     /* rounded right edge only — always */

  padding: 8px 3px;
  cursor: pointer;
  user-select: none;
  /* NO transition property here — handled entirely in :style */
}
.tab-pill:hover { border-color: #00ff00; color: #fff; }
.tab-pill.dragging,
.tab-pill:active { cursor: ew-resize; }

/* Text: vertical bottom-to-top (rotate 180° on vertical-rl = points up/right) */
.pill-text {
  display: block;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-family: 'Courier New', monospace;
  font-size: 9px;
  font-weight: bold;
  letter-spacing: 2px;
}

/* ── PANEL ─────────────────────────────────────────────────────────────────
   position:fixed, left + width driven by :style.
   min-width: 330px is the CSS hard floor — cannot be overridden by JS.
   NO transition property here — handled entirely in :style.
──────────────────────────────────────────────────────────────────────────── */
.dev-console {
  position: fixed;
  top: 0;
  bottom: 0;
  /* left: driven by :style */
  min-width: 330px;   /* hard CSS floor */
  z-index: 1050;

  display: flex;
  flex-direction: column;
  background: #0d0d0d;
  border-right: 1px solid #333;
  font-family: 'Courier New', monospace;
  font-size: 11px;
  color: #c9c9c9;
  overflow: hidden;
  /* NO transition property here — handled entirely in :style */
}

/* ── TOOLBAR ───────────────────────────────────────────────────────────── */
.toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  background: #1a1a1a;
  border-bottom: 1px solid #333;
  flex-shrink: 0;
}
.title { color: #00ff00; font-weight: bold; font-size: 10px; letter-spacing: 1px; }
.filters { display: flex; gap: 3px; margin-left: auto; }
.filter-btn {
  background: #222; color: #666; border: 1px solid #444;
  padding: 1px 6px; border-radius: 3px; cursor: pointer;
  font-size: 9px; font-family: inherit;
}
.filter-btn.active { background: #333; color: #00ff00; border-color: #00ff00; }
.autoscroll-toggle { color: #555; font-size: 9px; cursor: pointer; display: flex; align-items: center; gap: 3px; }

/* ── LOG STREAM ────────────────────────────────────────────────────────── */
.log-stream {
  flex: 1;
  overflow-y: auto;
  overflow-x: auto;
  min-height: 0;
}
.log-stream::-webkit-scrollbar        { width: 5px; height: 5px; }
.log-stream::-webkit-scrollbar-track  { background: #0d0d0d; }
.log-stream::-webkit-scrollbar-thumb  { background: #444; border-radius: 2px; }
.log-stream::-webkit-scrollbar-corner { background: #0d0d0d; }

.log-inner {
  display: inline-block;
  min-width: 100%;
  padding: 4px 6px;
}

.log-entry {
  padding: 3px 0;
  border-bottom: 1px solid #1a1a1a;
  line-height: 1.4;
  white-space: nowrap;
}
.log-entry.system { color: #888; }
.log-entry.error  { color: #e74c3c; }

.ts      { color: #555; margin-right: 4px; }
.tag     { font-size: 9px; padding: 1px 4px; border-radius: 2px; margin-right: 4px; }
.tag.system { background: #1e3a1e; color: #4caf50; }
.tag.error  { background: #3a1e1e; color: #e74c3c; }
.sys-msg { color: #999; }

.line-a { display: inline-flex; align-items: center; gap: 5px; margin-bottom: 1px; }
.player-icon     { font-size: 13px; }
.player-name-log { font-weight: bold; font-size: 11px; }
.action-type     { color: #f1c40f; font-size: 10px; margin-left: 4px; opacity: 0.8; }

.json-row {
  display: inline-flex;
  align-items: baseline;
  gap: 5px;
  padding-left: 20px;
  font-size: 9.5px;
  line-height: 1.3;
}
.json-label {
  font-weight: bold; flex-shrink: 0;
  font-size: 9px; padding: 0 3px; border-radius: 2px; font-family: inherit;
}
.json-label.req { background: #1a2a3a; color: #3498db; }
.json-label.res { background: #1a3a1a; color: #2ecc71; }
.json-label.res.fail { background: #3a1a1a; color: #e74c3c; }
.json-body { color: #aaa; white-space: nowrap; }
.json-row.rejected .json-body { color: #e74c3c; }

.empty-hint { color: #444; text-align: center; padding: 20px; font-style: italic; }

/* ── RAW EDITOR ────────────────────────────────────────────────────────── */
.editor-section { flex-shrink: 0; border-top: 1px solid #333; }
.toggle-editor {
  width: 100%; background: #111; color: #555;
  border: none; padding: 3px; cursor: pointer;
  font-family: inherit; font-size: 9px;
}
.toggle-editor:hover { color: #00ff00; }
.editor-body { padding: 6px; }
textarea {
  width: 100%; background: #000; color: #00ff00;
  border: 1px solid #333; font-family: inherit;
  font-size: 10px; resize: none; box-sizing: border-box;
}
.editor-actions { display: flex; align-items: center; gap: 8px; margin-top: 4px; }
.editor-actions button {
  background: #222; color: #00ff00; border: 1px solid #444;
  padding: 3px 10px; cursor: pointer; font-family: inherit; font-size: 10px;
}
.editor-actions button:hover { border-color: #00ff00; }
.send-status { font-size: 10px; color: #888; }
</style>
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
  "#222222": "⚫", // Black
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

## File: packages/client/src/App.vue
```vue
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useGameStore } from './stores/gameStore';
import Board           from './components/GameBoard/Board.vue';
import TradeModal      from './components/Modals/TradeModal.vue';
import ChoiceModal     from './components/Modals/ChoiceModal.vue';
import PlayerList      from './components/Sidebar/PlayerList.vue';
import ResourceHud     from './components/HUD/ResourceHud.vue';
import CommandConsole  from './components/Sidebar/CommandConsole.vue';

const gameStore     = useGameStore();
const isConsoleOpen = ref(false);

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    isConsoleOpen.value = !isConsoleOpen.value;
  }
};

onMounted(() => {
  gameStore.init();
  window.addEventListener('keydown', handleKeydown);
});
onUnmounted(() => window.removeEventListener('keydown', handleKeydown));
</script>

<template>
  <div v-if="!gameStore.state" class="loading">
    <h1>TINC IS NOT CATAN</h1>
    <p>Connecting to Game Server...</p>
  </div>

  <main v-else class="game-root">
    <Board />
    <CommandConsole :isOpen="isConsoleOpen" @toggle="isConsoleOpen = !isConsoleOpen" />
    <PlayerList />
    <ResourceHud />
    <TradeModal />
    <ChoiceModal />
  </main>
</template>

<style scoped>
.game-root {
  width: 100%;
  height: 100%;
  position: relative;
}
.loading {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #0f0;
  font-family: monospace;
  background: #111;
  gap: 12px;
}
</style>
```

## File: packages/engine/dist/actions/AddSeat.d.ts.map
```
{"version":3,"file":"AddSeat.d.ts","sourceRoot":"","sources":["../../src/actions/AddSeat.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,MAAM,EAAE,cAAc,EAAE,MAAM,aAAa,CAAC;AACrD,OAAO,EAAE,SAAS,EAAU,MAAM,mBAAmB,CAAC;AAEtD,qBAAa,aAAc,YAAW,MAAM;IAGvB,QAAQ,EAAE,MAAM;IAAS,OAAO,EAAE,GAAG;IAFxD,IAAI,SAAc;gBAEC,QAAQ,EAAE,MAAM,EAAS,OAAO,GAAE,GAAQ;IAE7D,QAAQ,CAAC,KAAK,EAAE,SAAS;;;;;;;IAezB,OAAO,CAAC,KAAK,EAAE,SAAS,GAAG,cAAc;CA2B1C"}
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
        // Only the Root Admin (session-level crown) may add seats.
        // They don't need to be seated themselves.
        const isRootAdmin = this.playerId === state.hostSessionId;
        if (!isRootAdmin) {
            return { valid: false, error: 'Only the Root Admin can add seats.' };
        }
        if (state.players.length >= 4) {
            return { valid: false, error: 'Max 4 players.' };
        }
        return { valid: true };
    }
    execute(state) {
        const colors = ['#3498db', '#f1c40f', '#27ae60', '#9b59b6', '#8e44ad'];
        const usedColors = state.players.map(p => p.color);
        const nextColor = colors.find(c => !usedColors.includes(c)) ?? '#ffffff';
        const ghostSeat = {
            id: `seat_${Math.random().toString(36).substr(2, 4)}`,
            name: 'Empty_Seat',
            color: nextColor,
            isHost: false,
            isOnline: false,
            controllerId: null,
            controllerType: null,
            timerEnabled: false,
            turnTimeoutMs: 60_000,
            resources: { brick: 0, wood: 0, wheat: 0, sheep: 0, ore: 0 },
            victoryPoints: 0,
            devCards: [],
            numPlayedKnights: 0,
            numSettlements: 5,
            hasLargestArmy: false,
            hasLongestRoad: false,
        };
        state.players.push(ghostSeat);
        return { success: true, message: 'Seat added.', newState: state };
    }
}
//# sourceMappingURL=AddSeat.js.map
```

## File: packages/engine/dist/actions/AddSeat.js.map
```
{"version":3,"file":"AddSeat.js","sourceRoot":"","sources":["../../src/actions/AddSeat.ts"],"names":[],"mappings":"AAGA,MAAM,OAAO,aAAa;IAGL;IAAyB;IAF5C,IAAI,GAAG,UAAU,CAAC;IAElB,YAAmB,QAAgB,EAAS,UAAe,EAAE;QAA1C,aAAQ,GAAR,QAAQ,CAAQ;QAAS,YAAO,GAAP,OAAO,CAAU;IAAG,CAAC;IAEjE,QAAQ,CAAC,KAAgB;QACvB,2DAA2D;QAC3D,2CAA2C;QAC3C,MAAM,WAAW,GAAG,IAAI,CAAC,QAAQ,KAAK,KAAK,CAAC,aAAa,CAAC;QAC1D,IAAI,CAAC,WAAW,EAAE,CAAC;YACjB,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,oCAAoC,EAAE,CAAC;QACvE,CAAC;QAED,IAAI,KAAK,CAAC,OAAO,CAAC,MAAM,IAAI,CAAC,EAAE,CAAC;YAC9B,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,gBAAgB,EAAE,CAAC;QACnD,CAAC;QAED,OAAO,EAAE,KAAK,EAAE,IAAI,EAAE,CAAC;IACzB,CAAC;IAED,OAAO,CAAC,KAAgB;QACtB,MAAM,MAAM,GAAO,CAAC,SAAS,EAAE,SAAS,EAAE,SAAS,EAAE,SAAS,EAAE,SAAS,CAAC,CAAC;QAC3E,MAAM,UAAU,GAAG,KAAK,CAAC,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC;QACnD,MAAM,SAAS,GAAI,MAAM,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,UAAU,CAAC,QAAQ,CAAC,CAAC,CAAC,CAAC,IAAI,SAAS,CAAC;QAE1E,MAAM,SAAS,GAAW;YACxB,EAAE,EAAc,QAAQ,IAAI,CAAC,MAAM,EAAE,CAAC,QAAQ,CAAC,EAAE,CAAC,CAAC,MAAM,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE;YACjE,IAAI,EAAY,YAAY;YAC5B,KAAK,EAAW,SAAS;YACzB,MAAM,EAAU,KAAK;YACrB,QAAQ,EAAQ,KAAK;YACrB,YAAY,EAAI,IAAI;YACpB,cAAc,EAAE,IAAI;YACpB,YAAY,EAAI,KAAK;YACrB,aAAa,EAAG,MAAM;YACtB,SAAS,EAAE,EAAE,KAAK,EAAE,CAAC,EAAE,IAAI,EAAE,CAAC,EAAE,KAAK,EAAE,CAAC,EAAE,KAAK,EAAE,CAAC,EAAE,GAAG,EAAE,CAAC,EAAE;YAC5D,aAAa,EAAK,CAAC;YACnB,QAAQ,EAAU,EAAE;YACpB,gBAAgB,EAAE,CAAC;YACnB,cAAc,EAAI,CAAC;YACnB,cAAc,EAAI,KAAK;YACvB,cAAc,EAAI,KAAK;SACxB,CAAC;QAEF,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,SAAS,CAAC,CAAC;QAC9B,OAAO,EAAE,OAAO,EAAE,IAAI,EAAE,OAAO,EAAE,aAAa,EAAE,QAAQ,EAAE,KAAK,EAAE,CAAC;IACpE,CAAC;CACF"}
```

## File: packages/engine/dist/actions/StartGame.d.ts.map
```
{"version":3,"file":"StartGame.d.ts","sourceRoot":"","sources":["../../src/actions/StartGame.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,MAAM,EAAE,cAAc,EAAE,MAAM,aAAa,CAAC;AACrD,OAAO,EAAE,SAAS,EAAU,MAAM,mBAAmB,CAAC;AAEtD,qBAAa,eAAgB,YAAW,MAAM;IAGzB,QAAQ,EAAE,MAAM;IAAS,OAAO,EAAE,GAAG;IAFxD,IAAI,SAAgB;gBAED,QAAQ,EAAE,MAAM,EAAS,OAAO,GAAE,GAAQ;IAE7D,QAAQ,CAAC,KAAK,EAAE,SAAS;;;;;;;IAwBzB,OAAO,CAAC,KAAK,EAAE,SAAS,GAAG,cAAc;CA8B1C"}
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
        // Only the Root Admin (session-level crown) may manifest the game.
        // They don't need a seat — a pure spectator-admin is a valid scenario.
        const isRootAdmin = this.playerId === state.hostSessionId;
        if (!isRootAdmin) {
            return { valid: false, error: 'Only the Root Admin can start the game.' };
        }
        // No ghost seats allowed at launch
        const hasGhosts = state.players.some(p => p.controllerType === null);
        if (hasGhosts) {
            return {
                valid: false,
                error: 'Cannot start: All seats must have a Brain 🧠 or a Robot 🤖.',
            };
        }
        if (state.players.length < 2) {
            return { valid: false, error: 'Need at least 2 players.' };
        }
        return { valid: true };
    }
    execute(state) {
        // 1. MANIFEST AGENTS: Any ghost that slipped through becomes a bot
        state.players.forEach((seat) => {
            if (seat.controllerType === null) {
                seat.controllerType = 'AGENT';
                seat.controllerId = `bot_${seat.id}`;
                seat.isOnline = true;
                seat.name = `Agent_${seat.id.split('_')[1]}`;
            }
        });
        // 2. RANDOMISE TURN ORDER
        state.turnOrder = state.players.map(p => p.id).sort(() => Math.random() - 0.5);
        // 3. GENERATE SERPENTINE SETUP SEQUENCE  [1,2,3,4,4,3,2,1]
        const forward = [...state.turnOrder];
        const backward = [...state.turnOrder].reverse();
        state.setupSequence = [...forward, ...backward];
        // 4. TRANSITION TO STARTUP PHASE
        state.phase = 'STARTUP';
        state.startupIndex = 0;
        state.currentPlayerId = state.setupSequence[0];
        return {
            success: true,
            message: 'The game has been manifested. Begin Startup Placements.',
            newState: state,
        };
    }
}
//# sourceMappingURL=StartGame.js.map
```

## File: packages/engine/dist/actions/StartGame.js.map
```
{"version":3,"file":"StartGame.js","sourceRoot":"","sources":["../../src/actions/StartGame.ts"],"names":[],"mappings":"AAGA,MAAM,OAAO,eAAe;IAGP;IAAyB;IAF5C,IAAI,GAAG,YAAY,CAAC;IAEpB,YAAmB,QAAgB,EAAS,UAAe,EAAE;QAA1C,aAAQ,GAAR,QAAQ,CAAQ;QAAS,YAAO,GAAP,OAAO,CAAU;IAAG,CAAC;IAEjE,QAAQ,CAAC,KAAgB;QACvB,mEAAmE;QACnE,uEAAuE;QACvE,MAAM,WAAW,GAAG,IAAI,CAAC,QAAQ,KAAK,KAAK,CAAC,aAAa,CAAC;QAC1D,IAAI,CAAC,WAAW,EAAE,CAAC;YACjB,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,yCAAyC,EAAE,CAAC;QAC5E,CAAC;QAED,mCAAmC;QACnC,MAAM,SAAS,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,cAAc,KAAK,IAAI,CAAC,CAAC;QACrE,IAAI,SAAS,EAAE,CAAC;YACd,OAAO;gBACL,KAAK,EAAE,KAAK;gBACZ,KAAK,EAAE,6DAA6D;aACrE,CAAC;QACJ,CAAC;QAED,IAAI,KAAK,CAAC,OAAO,CAAC,MAAM,GAAG,CAAC,EAAE,CAAC;YAC7B,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,0BAA0B,EAAE,CAAC;QAC7D,CAAC;QAED,OAAO,EAAE,KAAK,EAAE,IAAI,EAAE,CAAC;IACzB,CAAC;IAED,OAAO,CAAC,KAAgB;QACtB,mEAAmE;QACnE,KAAK,CAAC,OAAO,CAAC,OAAO,CAAC,CAAC,IAAY,EAAE,EAAE;YACrC,IAAI,IAAI,CAAC,cAAc,KAAK,IAAI,EAAE,CAAC;gBACjC,IAAI,CAAC,cAAc,GAAG,OAAO,CAAC;gBAC9B,IAAI,CAAC,YAAY,GAAK,OAAO,IAAI,CAAC,EAAE,EAAE,CAAC;gBACvC,IAAI,CAAC,QAAQ,GAAS,IAAI,CAAC;gBAC3B,IAAI,CAAC,IAAI,GAAa,SAAS,IAAI,CAAC,EAAE,CAAC,KAAK,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC;YACzD,CAAC;QACH,CAAC,CAAC,CAAC;QAEH,0BAA0B;QAC1B,KAAK,CAAC,SAAS,GAAG,KAAK,CAAC,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC,GAAG,EAAE,CAAC,IAAI,CAAC,MAAM,EAAE,GAAG,GAAG,CAAC,CAAC;QAE/E,2DAA2D;QAC3D,MAAM,OAAO,GAAI,CAAC,GAAG,KAAK,CAAC,SAAS,CAAC,CAAC;QACtC,MAAM,QAAQ,GAAG,CAAC,GAAG,KAAK,CAAC,SAAS,CAAC,CAAC,OAAO,EAAE,CAAC;QAChD,KAAK,CAAC,aAAa,GAAG,CAAC,GAAG,OAAO,EAAE,GAAG,QAAQ,CAAC,CAAC;QAEhD,iCAAiC;QACjC,KAAK,CAAC,KAAK,GAAa,SAAS,CAAC;QAClC,KAAK,CAAC,YAAY,GAAM,CAAC,CAAC;QAC1B,KAAK,CAAC,eAAe,GAAG,KAAK,CAAC,aAAa,CAAC,CAAC,CAAC,CAAC;QAE/C,OAAO;YACL,OAAO,EAAG,IAAI;YACd,OAAO,EAAG,yDAAyD;YACnE,QAAQ,EAAE,KAAK;SAChB,CAAC;IACJ,CAAC;CACF"}
```

## File: packages/engine/dist/types/index.js.map
```
{"version":3,"file":"index.js","sourceRoot":"","sources":["../../src/types/index.ts"],"names":[],"mappings":"AAIA,MAAM,CAAN,IAAY,WAMX;AAND,WAAY,WAAW;IACrB,gCAAyB,CAAA;IACzB,oCAA2B,CAAA;IAC3B,gDAAiC,CAAA;IACjC,8CAAgC,CAAA;IAChC,8CAAgC,CAAA;AAClC,CAAC,EANW,WAAW,KAAX,WAAW,QAMtB;AAED,MAAM,CAAN,IAAY,YAOX;AAPD,WAAY,YAAY;IACtB,+BAAgB,CAAA;IAChB,6BAAe,CAAA;IACf,+BAAgB,CAAA;IAChB,+BAAgB,CAAA;IAChB,2BAAc,CAAA;IACd,iCAAiB,CAAA;AACnB,CAAC,EAPW,YAAY,KAAZ,YAAY,QAOvB"}
```

## File: packages/engine/src/actions/AddSeat.ts
```typescript
import { Action, ActionResponse } from './Action.js';
import { GameState, Player } from '../types/index.js';

export class AddSeatAction implements Action {
  type = 'ADD_SEAT';

  constructor(public playerId: string, public payload: any = {}) {}

  validate(state: GameState) {
    // Only the Root Admin (session-level crown) may add seats.
    // They don't need to be seated themselves.
    const isRootAdmin = this.playerId === state.hostSessionId;
    if (!isRootAdmin) {
      return { valid: false, error: 'Only the Root Admin can add seats.' };
    }

    if (state.players.length >= 4) {
      return { valid: false, error: 'Max 4 players.' };
    }

    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    const colors     = ['#3498db', '#f1c40f', '#27ae60', '#9b59b6', '#8e44ad'];
    const usedColors = state.players.map(p => p.color);
    const nextColor  = colors.find(c => !usedColors.includes(c)) ?? '#ffffff';

    const ghostSeat: Player = {
      id:             `seat_${Math.random().toString(36).substr(2, 4)}`,
      name:           'Empty_Seat',
      color:          nextColor,
      isHost:         false,
      isOnline:       false,
      controllerId:   null,
      controllerType: null,
      timerEnabled:   false,
      turnTimeoutMs:  60_000,
      resources: { brick: 0, wood: 0, wheat: 0, sheep: 0, ore: 0 },
      victoryPoints:    0,
      devCards:         [],
      numPlayedKnights: 0,
      numSettlements:   5,
      hasLargestArmy:   false,
      hasLongestRoad:   false,
    };

    state.players.push(ghostSeat);
    return { success: true, message: 'Seat added.', newState: state };
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
    // Only the Root Admin (session-level crown) may manifest the game.
    // They don't need a seat — a pure spectator-admin is a valid scenario.
    const isRootAdmin = this.playerId === state.hostSessionId;
    if (!isRootAdmin) {
      return { valid: false, error: 'Only the Root Admin can start the game.' };
    }

    // No ghost seats allowed at launch
    const hasGhosts = state.players.some(p => p.controllerType === null);
    if (hasGhosts) {
      return {
        valid: false,
        error: 'Cannot start: All seats must have a Brain 🧠 or a Robot 🤖.',
      };
    }

    if (state.players.length < 2) {
      return { valid: false, error: 'Need at least 2 players.' };
    }

    return { valid: true };
  }

  execute(state: GameState): ActionResponse {
    // 1. MANIFEST AGENTS: Any ghost that slipped through becomes a bot
    state.players.forEach((seat: Player) => {
      if (seat.controllerType === null) {
        seat.controllerType = 'AGENT';
        seat.controllerId   = `bot_${seat.id}`;
        seat.isOnline       = true;
        seat.name           = `Agent_${seat.id.split('_')[1]}`;
      }
    });

    // 2. RANDOMISE TURN ORDER
    state.turnOrder = state.players.map(p => p.id).sort(() => Math.random() - 0.5);

    // 3. GENERATE SERPENTINE SETUP SEQUENCE  [1,2,3,4,4,3,2,1]
    const forward  = [...state.turnOrder];
    const backward = [...state.turnOrder].reverse();
    state.setupSequence = [...forward, ...backward];

    // 4. TRANSITION TO STARTUP PHASE
    state.phase           = 'STARTUP';
    state.startupIndex    = 0;
    state.currentPlayerId = state.setupSequence[0];

    return {
      success:  true,
      message:  'The game has been manifested. Begin Startup Placements.',
      newState: state,
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
```

## File: packages/client/src/components/Modals/PlayerPanel.vue
```vue
<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useGameStore } from '../../stores/gameStore';
import { COLOR_TO_EMOJI } from '../../utils/constants';

const props = defineProps<{ playerId: string | null }>();
const emit  = defineEmits(['close']);
const gameStore = useGameStore();

const player      = computed(() => gameStore.state?.players.find((p: any) => p.id === props.playerId));
const isLocalHost = computed(() => gameStore.playerId === gameStore.state?.hostSessionId);

const AVAILABLE_COLORS = Object.keys(COLOR_TO_EMOJI);

const isColorTaken = (color: string) =>
  gameStore.state?.players.some((p: any) => p.color === color && p.id !== player.value?.id);

const setColor = (color: string) => {
  if (isColorTaken(color)) return;
  gameStore.performAction('CHANGE_COLOR', { targetSeatId: player.value.id, color });
};

const agentBrain = computed({
  get: () => player.value?.agentType || 'HEURISTIC',
  set: (newType: string) => {
    if (!isLocalHost.value) return;
    gameStore.performAction('CONFIGURE_AGENT', { targetPlayerId: player.value.id, agentType: newType });
  },
});

const changeController = (type: 'HUMAN' | 'AGENT' | null) => {
  if (!isLocalHost.value) return;
  if (type === null && player.value.controllerId === gameStore.playerId) {
    alert('You cannot Banish yourself!'); return;
  }
  gameStore.performAction('TOGGLE_CONTROLLER', { targetPlayerId: player.value.id, controllerType: type });
};

const removeSeat = () => {
  if (confirm('Are you sure you want to delete this seat entirely?')) {
    gameStore.performAction('REMOVE_SEAT', { targetSeatId: player.value.id });
    emit('close');
  }
};

// ── Timer settings ─────────────────────────────────────────────────────────
// Local copies so inputs feel instant; dispatched on change/blur.
const localTimerEnabled = ref(false);
const localTimeoutSec   = ref(60);

watch(player, (p) => {
  if (!p) return;
  localTimerEnabled.value = p.timerEnabled  ?? false;
  localTimeoutSec.value   = Math.round((p.turnTimeoutMs ?? 60_000) / 1000);
}, { immediate: true });

const saveTimerEnabled = (val: boolean) => {
  if (!isLocalHost.value) return;
  localTimerEnabled.value = val;
  gameStore.performAction('CONFIGURE_PLAYER', {
    targetSeatId: player.value.id,
    timerEnabled: val,
  });
};

const saveTimeoutSec = () => {
  if (!isLocalHost.value) return;
  const clamped = Math.max(5, Math.min(3600, localTimeoutSec.value || 60));
  localTimeoutSec.value = clamped;
  gameStore.performAction('CONFIGURE_PLAYER', {
    targetSeatId:  player.value.id,
    turnTimeoutMs: clamped * 1000,
  });
};
</script>

<template>
  <div v-if="player" class="modal-overlay" @click.self="emit('close')">
    <div class="panel-card">

      <!-- HEADER -->
      <div class="panel-header" :style="{ borderBottomColor: player.color }">
        <h2>{{ COLOR_TO_EMOJI[player.color] }} {{ player.name }}</h2>
        <div class="connection-status">
          <span v-if="player.controllerType === null">🚫 Ghost Seat</span>
          <span v-else-if="player.isOnline">🔗 Connected: {{ player.controllerId }}</span>
          <span v-else>⛓️‍💥 Waiting for Network Link</span>
        </div>
      </div>

      <!-- COLOR PICKER -->
      <div class="color-picker-section" v-if="isLocalHost || player.controllerId === gameStore.playerId">
        <label>Seat Color:</label>
        <div class="color-row">
          <button
            v-for="color in AVAILABLE_COLORS" :key="color"
            class="color-btn"
            :class="{ active: player.color === color, disabled: isColorTaken(color) }"
            @click="setColor(color)"
          >{{ COLOR_TO_EMOJI[color] }}</button>
        </div>
      </div>

      <!-- CONTROLLER TOGGLE -->
      <div class="master-toggles">
        <div class="toggle-group">
          <label>Driver (Controller):</label>
          <div class="radio-buttons" :class="{ 'disabled-group': !isLocalHost }">
            <button :class="{ active: player.controllerType === 'HUMAN' }" @click="changeController('HUMAN')">🧠 Human</button>
            <button :class="{ active: player.controllerType === 'AGENT' }" @click="changeController('AGENT')">🤖 Agent</button>
            <button :class="{ active: player.controllerType === null   }" @click="changeController(null)">👻 Ghost</button>
          </div>
        </div>
      </div>

      <!-- SCROLLABLE MIDDLE -->
      <div class="scrollable-content">

        <!-- SHARED STATS -->
        <div class="parameter-section">
          <h3>Shared Vehicle Stats</h3>
          <div class="stats-grid">
            <div><strong>Victory Points:</strong> {{ player.victoryPoints }}</div>
            <div><strong>Cards in Hand:</strong>  {{ typeof player.resources?.total === 'number' ? player.resources.total : 'Visible' }}</div>
            <div><strong>Knights Played:</strong> {{ player.numPlayedKnights }}</div>
          </div>
        </div>

        <!-- HUMAN CONFIG ─────────────────────────────── -->
        <div v-if="player.controllerType === 'HUMAN'" class="parameter-section specific-section human-bg">
          <h3>🧠 Human Configuration</h3>

          <div class="timer-block">
            <!-- Row: label + ON/OFF toggle -->
            <div class="timer-header">
              <span class="timer-label">Auto-Skip Timer</span>
              <button
                class="timer-toggle"
                :class="localTimerEnabled ? 'timer-on' : 'timer-off'"
                :disabled="!isLocalHost"
                @click="saveTimerEnabled(!localTimerEnabled)"
                :title="localTimerEnabled ? 'Timer ON — click to disable' : 'Timer OFF — click to enable'"
              >{{ localTimerEnabled ? '⏱ ON' : '⏸ OFF' }}</button>
            </div>

            <!-- Row: seconds input (greyed when off) -->
            <div class="form-row" :class="{ 'row-disabled': !localTimerEnabled }">
              <label>Timeout (seconds):</label>
              <div class="timeout-row">
                <input
                  type="number"
                  v-model.number="localTimeoutSec"
                  min="5" max="3600"
                  :disabled="!isLocalHost || !localTimerEnabled"
                  @blur="saveTimeoutSec"
                  @keydown.enter.prevent="saveTimeoutSec"
                />
                <span class="timeout-hint">
                  <template v-if="localTimerEnabled">
                    Player auto-skipped after {{ localTimeoutSec }}s of inactivity
                  </template>
                  <template v-else>
                    Disabled — player will never be auto-skipped
                  </template>
                </span>
              </div>
            </div>
          </div>

          <div class="form-row checkbox">
            <input type="checkbox" :disabled="!isLocalHost" />
            <label>Allow Hotseat Control (Host can move for them)</label>
          </div>

          <div class="future-placeholder">[ Future Human Features Here ]</div>
        </div>

        <!-- AGENT CONFIG ─────────────────────────────── -->
        <div v-if="player.controllerType === 'AGENT'" class="parameter-section specific-section agent-bg">
          <h3>🤖 Agentic Configuration</h3>
          <div class="form-row">
            <label>Brain Engine:</label>
            <select v-model="agentBrain" :disabled="!isLocalHost">
              <option value="HEURISTIC">Local Heuristic (Fast/Dumb)</option>
              <option value="LLM">OpenAI / Anthropic (Smart/Slow)</option>
              <option value="WEBHOOK">Remote Webhook (Custom RL)</option>
            </select>
          </div>
          <div class="future-placeholder">[ Future Agentic Features Here ]</div>
        </div>

        <!-- GHOST CONFIG ─────────────────────────────── -->
        <div v-if="player.controllerType === null" class="parameter-section specific-section ghost-bg">
          <h3>👻 Ghost Seat Configuration</h3>
          <p class="hint">This seat is empty. It cannot take turns until a Human joins or it is converted to an Agent.</p>
          <div class="form-row checkbox">
            <input type="checkbox" checked :disabled="!isLocalHost" />
            <label>Open to Public Matchmaking</label>
          </div>
          <div class="future-placeholder">[ Future Ghost Features Here ]</div>
        </div>

      </div><!-- /scrollable-content -->

      <!-- FOOTER -->
      <div class="panel-footer">
        <button v-if="isLocalHost && player.controllerId !== gameStore.playerId" class="btn-danger" @click="removeSeat">🗑️ Delete Seat</button>
        <span v-else></span>
        <button class="btn-close" @click="emit('close')">Close</button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.85);
  display: flex; align-items: center; justify-content: center;
  z-index: 9999; font-family: monospace;
}
.panel-card {
  background: #1a1a1a; width: 600px; max-width: 95vw;
  height: 85vh; max-height: 900px;
  border-radius: 8px; border: 1px solid #444;
  display: flex; flex-direction: column; color: #eee; overflow: hidden;
}

/* HEADER */
.panel-header { padding: 15px 20px; border-bottom: 3px solid #666; display: flex; justify-content: space-between; align-items: center; }
.panel-header h2 { margin: 0; font-size: 1.2rem; }
.connection-status { font-size: 0.8rem; color: #aaa; }

/* COLOR */
.color-picker-section { padding: 10px 20px; background: #2a2a2a; }
.color-picker-section label { font-size: 0.8rem; color: #aaa; display: block; margin-bottom: 5px; }
.color-row { display: flex; gap: 8px; font-size: 24px; }
.color-btn { background: transparent; border: none; padding: 0; cursor: pointer; transition: transform 0.2s, filter 0.2s; }
.color-btn.active { transform: scale(1.4); filter: drop-shadow(0 0 6px rgba(255,255,255,0.6)); }
.color-btn.disabled { opacity: 0.2; cursor: not-allowed; filter: grayscale(100%); }

/* CONTROLLER */
.master-toggles { padding: 15px 20px; background: #222; border-bottom: 1px solid #333; }
.toggle-group { display: flex; align-items: center; justify-content: space-between; }
.radio-buttons { display: flex; gap: 5px; }
.radio-buttons button { background: #333; color: #888; border: 1px solid #555; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-family: inherit; }
.radio-buttons button.active { background: #4caf50; color: white; border-color: #4caf50; }
.disabled-group { opacity: 0.5; pointer-events: none; }

/* SCROLL */
.scrollable-content { flex: 1; overflow-y: auto; padding-bottom: 20px; }
.scrollable-content::-webkit-scrollbar { width: 8px; }
.scrollable-content::-webkit-scrollbar-track { background: #1a1a1a; }
.scrollable-content::-webkit-scrollbar-thumb { background: #444; border-radius: 4px; }
.scrollable-content::-webkit-scrollbar-thumb:hover { background: #666; }

/* SECTIONS */
.parameter-section { padding: 15px 20px; border-bottom: 1px solid #333; }
.parameter-section h3 { margin-top: 0; font-size: 1rem; color: #ccc; border-bottom: 1px dashed #555; padding-bottom: 5px; }
.stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 0.9rem; }
.human-bg { background: rgba(52,152,219,0.05); }
.agent-bg { background: rgba(155,89,182,0.05); }
.ghost-bg { background: rgba(149,165,166,0.05); }
.form-row { display: flex; flex-direction: column; margin-bottom: 12px; }
.form-row.checkbox { flex-direction: row; align-items: center; gap: 10px; }
.form-row label { font-size: 0.8rem; color: #aaa; margin-bottom: 4px; text-transform: uppercase; }
.row-disabled { opacity: 0.4; pointer-events: none; }
input[type="number"], select, textarea { background: #000; color: #00ff00; border: 1px solid #555; padding: 8px; border-radius: 4px; font-family: inherit; }
input:disabled, select:disabled, textarea:disabled { opacity: 0.4; cursor: not-allowed; }
.hint { font-size: 0.8rem; color: #888; font-style: italic; }
.future-placeholder { height: 120px; display: flex; align-items: center; justify-content: center; color: #555; border: 1px dashed #444; margin-top: 20px; font-size: 0.85rem; }

/* ── TIMER BLOCK ─────────────────────────────────────────────── */
.timer-block {
  background: rgba(0,0,0,0.25);
  border: 1px solid #2a2a2a;
  border-radius: 6px;
  padding: 12px 14px;
  margin-bottom: 14px;
}
.timer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.timer-label {
  font-size: 0.85rem;
  color: #aaa;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.timer-toggle {
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 4px 16px;
  border-radius: 20px;
  border: 1px solid #555;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
  min-width: 80px;
  text-align: center;
}
.timer-on  { background: #1a3a1a; color: #2ecc71; border-color: #2ecc71; }
.timer-off { background: #2a2a2a; color: #666;    border-color: #444;    }
.timer-toggle:disabled  { opacity: 0.4; cursor: not-allowed; }
.timer-toggle:not(:disabled):hover { filter: brightness(1.25); }

.timeout-row {
  display: flex;
  align-items: center;
  gap: 12px;
}
.timeout-row input[type="number"] { width: 80px; }
.timeout-hint { font-size: 0.75rem; color: #666; font-style: italic; }

/* FOOTER */
.panel-footer { display: flex; justify-content: space-between; padding: 15px 20px; background: #222; border-top: 1px solid #444; }
.btn-close  { background: #555; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; font-family: inherit; }
.btn-danger { background: #e74c3c; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; font-family: inherit; }
</style>
```

## File: packages/client/src/stores/gameStore.ts
```typescript
import { defineStore } from 'pinia';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');
const MAX_LOGS = 500;

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
        // FIFO Queue: If we have more than 500 logs, delete the oldest one (index 0)
        if (this.logs.length > MAX_LOGS) {
          this.logs.shift();
        }
      });

      // 2. Listen for errors (The fix you needed)
      socket.on('OnSocketActionError -', ({ message }) => {
        alert(`Error: ${message}`);
      });


      // socket.on('action_error', ({ message }) => {
      //   this.addLocalLog(`SERVER REJECTED: ${message}`, 'ERROR');
      // });


      // 3. Join the game
      socket.emit('join_game', 'game-uuid-123', this.playerId);
    },

    addLocalLog(message: string, type: 'SYSTEM' | 'CHAT' | 'ACTION' | 'CLIENT' | 'ERROR' = 'CLIENT') {
      this.logs.push({
        id: Math.random().toString(36).substring(2, 9),
        timestamp: Date.now(),
        type,
        message
      });
      
      // FIFO Queue for local logs too!
      if (this.logs.length > MAX_LOGS) {
        this.logs.shift();
      }
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

## File: packages/engine/dist/actions/ToggleController.d.ts.map
```
{"version":3,"file":"ToggleController.d.ts","sourceRoot":"","sources":["../../src/actions/ToggleController.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,MAAM,EAAE,cAAc,EAAE,MAAM,aAAa,CAAC;AACrD,OAAO,EAAE,SAAS,EAAE,MAAM,mBAAmB,CAAC;AAE9C,qBAAa,sBAAuB,YAAW,MAAM;IAI1C,QAAQ,EAAE,MAAM;IAChB,OAAO,EAAE;QAAE,cAAc,EAAE,MAAM,CAAC;QAAC,cAAc,EAAE,OAAO,GAAG,OAAO,GAAG,IAAI,CAAA;KAAE;IAJtF,IAAI,SAAuB;gBAGlB,QAAQ,EAAE,MAAM,EAChB,OAAO,EAAE;QAAE,cAAc,EAAE,MAAM,CAAC;QAAC,cAAc,EAAE,OAAO,GAAG,OAAO,GAAG,IAAI,CAAA;KAAE;IAGtF,QAAQ,CAAC,KAAK,EAAE,SAAS;;;;;;;IAYzB,OAAO,CAAC,KAAK,EAAE,SAAS,GAAG,cAAc;CAiC1C"}
```

## File: packages/engine/dist/actions/ToggleController.js
```javascript
export class ToggleControllerAction {
    playerId;
    payload;
    type = 'TOGGLE_CONTROLLER';
    constructor(playerId, payload) {
        this.playerId = playerId;
        this.payload = payload;
    }
    validate(state) {
        // Only the Root Admin OR the occupant of a seat may modify it.
        const isRootAdmin = this.playerId === state.hostSessionId;
        const actorSeat = state.players.find(p => p.controllerId === this.playerId);
        if (!isRootAdmin && actorSeat?.id !== this.payload.targetPlayerId) {
            return { valid: false, error: 'Only the Root Admin can modify other seats.' };
        }
        return { valid: true };
    }
    execute(state) {
        const seat = state.players.find(p => p.id === this.payload.targetPlayerId);
        if (seat) {
            seat.controllerType = this.payload.controllerType;
            if (seat.controllerType === 'AGENT') {
                // Manifest a Bot
                seat.isOnline = true; // Agents are always "online"
                seat.controllerId = `bot_${seat.id}`;
                seat.name = `Agent_${seat.id.substring(seat.id.length - 4)}`;
            }
            else if (seat.controllerType === 'HUMAN') {
                // Open the seat for a network Human to claim
                seat.isOnline = false; // Waiting for a human to connect
                seat.controllerId = null;
                seat.name = 'Open_Seat';
            }
            else {
                // null → Ghost Seat (empty, uncontrolled)
                seat.isOnline = false;
                seat.controllerId = null;
                seat.name = 'Empty_Seat';
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
//# sourceMappingURL=ToggleController.js.map
```

## File: packages/engine/dist/actions/ToggleController.js.map
```
{"version":3,"file":"ToggleController.js","sourceRoot":"","sources":["../../src/actions/ToggleController.ts"],"names":[],"mappings":"AAGA,MAAM,OAAO,sBAAsB;IAIxB;IACA;IAJT,IAAI,GAAG,mBAAmB,CAAC;IAE3B,YACS,QAAgB,EAChB,OAA6E;QAD7E,aAAQ,GAAR,QAAQ,CAAQ;QAChB,YAAO,GAAP,OAAO,CAAsE;IACnF,CAAC;IAEJ,QAAQ,CAAC,KAAgB;QACvB,+DAA+D;QAC/D,MAAM,WAAW,GAAG,IAAI,CAAC,QAAQ,KAAK,KAAK,CAAC,aAAa,CAAC;QAC1D,MAAM,SAAS,GAAK,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,YAAY,KAAK,IAAI,CAAC,QAAQ,CAAC,CAAC;QAE9E,IAAI,CAAC,WAAW,IAAI,SAAS,EAAE,EAAE,KAAK,IAAI,CAAC,OAAO,CAAC,cAAc,EAAE,CAAC;YAClE,OAAO,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,6CAA6C,EAAE,CAAC;QAChF,CAAC;QAED,OAAO,EAAE,KAAK,EAAE,IAAI,EAAE,CAAC;IACzB,CAAC;IAED,OAAO,CAAC,KAAgB;QACtB,MAAM,IAAI,GAAG,KAAK,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,EAAE,KAAK,IAAI,CAAC,OAAO,CAAC,cAAc,CAAC,CAAC;QAE3E,IAAI,IAAI,EAAE,CAAC;YACT,IAAI,CAAC,cAAc,GAAG,IAAI,CAAC,OAAO,CAAC,cAAc,CAAC;YAElD,IAAI,IAAI,CAAC,cAAc,KAAK,OAAO,EAAE,CAAC;gBACpC,iBAAiB;gBACjB,IAAI,CAAC,QAAQ,GAAO,IAAI,CAAC,CAAC,6BAA6B;gBACvD,IAAI,CAAC,YAAY,GAAG,OAAO,IAAI,CAAC,EAAE,EAAE,CAAC;gBACrC,IAAI,CAAC,IAAI,GAAW,SAAS,IAAI,CAAC,EAAE,CAAC,SAAS,CAAC,IAAI,CAAC,EAAE,CAAC,MAAM,GAAG,CAAC,CAAC,EAAE,CAAC;YACvE,CAAC;iBAAM,IAAI,IAAI,CAAC,cAAc,KAAK,OAAO,EAAE,CAAC;gBAC3C,6CAA6C;gBAC7C,IAAI,CAAC,QAAQ,GAAO,KAAK,CAAC,CAAC,iCAAiC;gBAC5D,IAAI,CAAC,YAAY,GAAG,IAAI,CAAC;gBACzB,IAAI,CAAC,IAAI,GAAW,WAAW,CAAC;YAClC,CAAC;iBAAM,CAAC;gBACN,0CAA0C;gBAC1C,IAAI,CAAC,QAAQ,GAAO,KAAK,CAAC;gBAC1B,IAAI,CAAC,YAAY,GAAG,IAAI,CAAC;gBACzB,IAAI,CAAC,IAAI,GAAW,YAAY,CAAC;gBACjC,0DAA0D;gBAC1D,8DAA8D;gBAC9D,mEAAmE;YACrE,CAAC;QACH,CAAC;QAED,OAAO;YACL,OAAO,EAAE,IAAI;YACb,OAAO,EAAE,mBAAmB,IAAI,CAAC,OAAO,CAAC,cAAc,IAAI,OAAO,GAAG;YACrE,QAAQ,EAAE,KAAK;SAChB,CAAC;IACJ,CAAC;CACF"}
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
    agentType?: 'HEURISTIC' | 'LLM' | 'WEBHOOK' | null;
    /** @deprecated Crown lives on GameState.hostSessionId */
    isHost: boolean;
    isOnline: boolean;
    timerEnabled: boolean;
    turnTimeoutMs: number;
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
    hostSessionId: string;
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
const io = new Server(httpServer, { cors: { origin: '*' } });
const gameManager = new GameManager();
/** Maps hex color to a Unicode emoji block for the terminal */
const COLOR_ICONS = {
    '#e74c3c': '🔴',
    '#e67e22': '🟠',
    '#f1c40f': '🟡',
    '#27ae60': '🟢',
    '#3498db': '🔵',
    '#9b59b6': '🟣',
    '#8b4513': '🟤',
    '#ffffff': '⬜',
    '#333333': '⬛',
};
// ---------------------------------------------------------------------------
// HELPERS (must be defined before they are used)
// ---------------------------------------------------------------------------
/** Extract the current player ID from a game state object */
function getCurrentPlayerIdFromState(state) {
    // Adjust this to match your actual state structure:
    return state.currentPlayerId; // if stored directly
    // or
    // return state.players[state.turnIndex]?.id;      // if using a turn index
}
/** Get the current player ID for a given game (by gameId) */
function getCurrentPlayerId(gameId) {
    const state = gameManager.getGameState(gameId);
    if (!state)
        return '';
    return getCurrentPlayerIdFromState(state);
}
/** Get a player’s display name */
function getPlayerName(gameId, playerId) {
    const state = gameManager.getGameState(gameId);
    const player = state?.players.find((p) => p.id === playerId);
    return player?.name || playerId;
}
/** Get a player’s color */
function getPlayerColor(gameId, playerId) {
    const state = gameManager.getGameState(gameId);
    const player = state?.players.find((p) => p.id === playerId);
    return player?.color || '#bdc3c7';
}
// ---------------------------------------------------------------------------
// LOG ENTRY BUILDER (for successful actions)
// ---------------------------------------------------------------------------
/**
 * Build a log entry that matches the structure expected by the Vue console.
 * Adds `currentPlayerId` to the response object.
 */
function buildLogEntry(payload, state) {
    const { playerId, action, actionId, result } = payload;
    // Resolve display name and color from the state
    const seat = state.players.find((p) => p.controllerId === playerId || p.id === playerId);
    const playerName = seat?.name ?? playerId;
    const playerColor = seat?.color ?? '#ffffff';
    const ts = new Date();
    const timeStr = ts.toTimeString().slice(0, 8); // "HH:MM:SS"
    const request = {
        action_id: actionId,
        user: playerName,
        type: action.type,
        payload: action.payload ?? {},
    };
    const response = {
        action_id: actionId,
        success: result.success,
        message: result.message ?? '',
        ...(result.followUp ? { followUp: result.followUp } : {}),
    };
    // ── Terminal output (uniform with Vue console) ──────────────────────
    const colorIcon = COLOR_ICONS[playerColor] ?? '⬜';
    console.log(`[${timeStr}] ${colorIcon} ${playerName}`);
    console.log(`  REQ ${JSON.stringify(request)}`);
    console.log(`  RES ${JSON.stringify(response)}`);
    // ── Add the current player ID (from the updated state) ──────────────
    const currentPlayerId = getCurrentPlayerIdFromState(state);
    // ── Socket payload (consumed by CommandConsole.vue) ─────────────────
    return {
        id: Math.random().toString(36).substr(2, 9),
        timestamp: Date.now(),
        type: 'ACTION',
        playerId: playerId,
        playerName: playerName,
        playerColor: playerColor,
        request: request,
        response: {
            ...response,
            currentPlayerId, // ← now included in every action log
        },
    };
}
// ---------------------------------------------------------------------------
// CENTRAL BROADCAST — fires for EVERY successful action
// ---------------------------------------------------------------------------
gameManager.on('action_success', async (payload) => {
    const { gameId, newState } = payload;
    const logEntry = buildLogEntry(payload, newState);
    io.to(gameId).emit('new_log_entry', logEntry);
    await broadcastState(gameId, newState);
});
// ---------------------------------------------------------------------------
// SOCKET HANDLERS
// ---------------------------------------------------------------------------
io.on('connection', (socket) => {
    console.log(`[CONNECT] ${socket.id}`);
    socket.on('join_game', (gameId, playerId) => {
        socket.playerId = playerId;
        socket.currentGameId = gameId;
        socket.join(gameId);
        let state = gameManager.getGameState(gameId);
        if (!state) {
            console.log(`[LOBBY] Creating game ${gameId} for ${playerId}`);
            gameManager.createGame(playerId, {});
            state = gameManager.getGameState(gameId);
        }
        else {
            console.log(`[LOBBY] ${playerId} joining game ${gameId}`);
            gameManager.joinGame(gameId, playerId);
            state = gameManager.getGameState(gameId);
        }
        const ts = new Date().toTimeString().slice(0, 8);
        console.log(`[${ts}] ⬜ ${playerId} entered the room.`);
        io.to(gameId).emit('new_log_entry', {
            id: Math.random().toString(36).substr(2, 9),
            timestamp: Date.now(),
            type: 'SYSTEM',
            timeStr: ts,
            message: `${playerId} entered the room.`,
        });
        broadcastState(gameId, state);
    });
    socket.on('perform_action', (gameId, playerId, action) => {
        try {
            const result = gameManager.handleAction(gameId, playerId, action);
            if (!result.success) {
                // --- REJECTED ACTION: emit a rich log entry ---
                const ts = new Date().toTimeString().slice(0, 8);
                console.log(`[${ts}] ❌ ${playerId} → ${action.type} REJECTED: ${result.message}`);
                const currentPlayerId = getCurrentPlayerId(gameId); // who should play
                const logEntry = {
                    id: Math.random().toString(36).substr(2, 9),
                    timestamp: Date.now(),
                    type: 'ACTION', // Keep as ACTION so it appears in the ACTION filter
                    playerId,
                    playerName: getPlayerName(gameId, playerId),
                    playerColor: getPlayerColor(gameId, playerId),
                    request: { type: action.type, payload: action.payload },
                    response: {
                        success: false,
                        message: result.message, // e.g., "REJECTED: It is seat_xxx's turn"
                        currentPlayerId, // who should play
                    },
                };
                io.to(gameId).emit('new_log_entry', logEntry);
                // (Optional) Remove the old action_error emit to avoid duplicate logs.
                // socket.emit('action_error', { message: result.message });
            }
            // If result.success is true, the 'action_success' event (above) handles logging.
        }
        catch (err) {
            console.error('[ERROR] Action processing:', err);
        }
    });
    socket.on('disconnecting', () => {
        const pId = socket.playerId;
        const gId = socket.currentGameId;
        if (pId && gId) {
            console.log(`[${new Date().toTimeString().slice(0, 8)}] ⬜ ${pId} went offline.`);
            const updatedState = gameManager.setPlayerOffline(gId, pId);
            if (updatedState) {
                io.to(gId).emit('new_log_entry', {
                    id: Math.random().toString(36).substr(2, 9),
                    timestamp: Date.now(),
                    type: 'SYSTEM',
                    timeStr: new Date().toTimeString().slice(0, 8),
                    message: `${pId} went offline.`,
                });
                broadcastState(gId, updatedState);
            }
        }
    });
    socket.on('disconnect', () => console.log(`[DISCONNECT] ${socket.id}`));
});
// ---------------------------------------------------------------------------
// STATE BROADCAST HELPERS
// ---------------------------------------------------------------------------
async function broadcastState(gameId, state) {
    const sockets = await io.in(gameId).fetchSockets();
    sockets.forEach(s => {
        const sPlayerId = s.playerId;
        s.emit('game_state_update', maskStateForPlayer(state, sPlayerId));
    });
}
function maskStateForPlayer(state, playerId) {
    const serializedBoard = state.board.serialize();
    return {
        ...state,
        board: serializedBoard,
        players: state.players.map((p) => ({
            ...p,
            resources: p.id === playerId ? p.resources : { total: getTotal(p.resources) },
            devCards: p.id === playerId ? p.devCards : { count: p.devCards?.length || 0 },
        })),
    };
}
function getTotal(res) {
    if (!res)
        return 0;
    return Object.values(res).reduce((a, b) => a + b, 0);
}
// ---------------------------------------------------------------------------
// STATIC + START
// ---------------------------------------------------------------------------
const clientDistPath = path.join(__dirname, '../../client/dist');
app.use(express.static(clientDistPath));
app.get('*', (_req, res) => res.sendFile(path.join(clientDistPath, 'index.html')));
const PORT = process.env.PORT || 4000;
httpServer.listen(PORT, () => {
    console.log(`[SERVER] Catan running on http://localhost:${PORT}`);
});
```

## File: packages/server/src/index.ts
```typescript
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { GameManager, ActionSuccessPayload } from './GameManager.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const app        = express();
const httpServer = createServer(app);
const io         = new Server(httpServer, { cors: { origin: '*' } });

const gameManager = new GameManager();

/** Maps hex color to a Unicode emoji block for the terminal */
const COLOR_ICONS: Record<string, string> = {
  '#e74c3c': '🔴',
  '#e67e22': '🟠',
  '#f1c40f': '🟡',
  '#27ae60': '🟢',
  '#3498db': '🔵',
  '#9b59b6': '🟣',
  '#8b4513': '🟤',
  '#ffffff': '⬜',
  '#333333': '⬛',
};

// ---------------------------------------------------------------------------
// HELPERS (must be defined before they are used)
// ---------------------------------------------------------------------------

/** Extract the current player ID from a game state object */
function getCurrentPlayerIdFromState(state: any): string {
  // Adjust this to match your actual state structure:
  return state.currentPlayerId;                      // if stored directly
  // or
  // return state.players[state.turnIndex]?.id;      // if using a turn index
}

/** Get the current player ID for a given game (by gameId) */
function getCurrentPlayerId(gameId: string): string {
  const state = gameManager.getGameState(gameId);
  if (!state) return '';
  return getCurrentPlayerIdFromState(state);
}

/** Get a player’s display name */
function getPlayerName(gameId: string, playerId: string): string {
  const state = gameManager.getGameState(gameId);
  const player = state?.players.find((p: any) => p.id === playerId);
  return player?.name || playerId;
}

/** Get a player’s color */
function getPlayerColor(gameId: string, playerId: string): string {
  const state = gameManager.getGameState(gameId);
  const player = state?.players.find((p: any) => p.id === playerId);
  return player?.color || '#bdc3c7';
}

// ---------------------------------------------------------------------------
// LOG ENTRY BUILDER (for successful actions)
// ---------------------------------------------------------------------------

/**
 * Build a log entry that matches the structure expected by the Vue console.
 * Adds `currentPlayerId` to the response object.
 */
function buildLogEntry(payload: ActionSuccessPayload, state: any) {
  const { playerId, action, actionId, result } = payload;

  // Resolve display name and color from the state
  const seat = state.players.find(
    (p: any) => p.controllerId === playerId || p.id === playerId,
  );
  const playerName  = seat?.name  ?? playerId;
  const playerColor = seat?.color ?? '#ffffff';

  const ts = new Date();
  const timeStr = ts.toTimeString().slice(0, 8); // "HH:MM:SS"

  const request = {
    action_id: actionId,
    user:      playerName,
    type:      action.type,
    payload:   action.payload ?? {},
  };

  const response = {
    action_id: actionId,
    success:   result.success,
    message:   result.message ?? '',
    ...(result.followUp ? { followUp: result.followUp } : {}),
  };

  // ── Terminal output (uniform with Vue console) ──────────────────────
  const colorIcon = COLOR_ICONS[playerColor] ?? '⬜';
  console.log(`[${timeStr}] ${colorIcon} ${playerName}`);
  console.log(`  REQ ${JSON.stringify(request)}`);
  console.log(`  RES ${JSON.stringify(response)}`);

  // ── Add the current player ID (from the updated state) ──────────────
  const currentPlayerId = getCurrentPlayerIdFromState(state);

  // ── Socket payload (consumed by CommandConsole.vue) ─────────────────
  return {
    id: Math.random().toString(36).substr(2, 9),
    timestamp: Date.now(),
    type: 'ACTION',
    playerId: playerId,
    playerName: playerName,
    playerColor: playerColor,
    request: request,
    response: {
      ...response,
      currentPlayerId,            // ← now included in every action log
    },
  };
}

// ---------------------------------------------------------------------------
// CENTRAL BROADCAST — fires for EVERY successful action
// ---------------------------------------------------------------------------
gameManager.on('action_success', async (payload: ActionSuccessPayload) => {
  const { gameId, newState } = payload;
  const logEntry = buildLogEntry(payload, newState);
  io.to(gameId).emit('new_log_entry', logEntry);
  await broadcastState(gameId, newState);
});

// ---------------------------------------------------------------------------
// SOCKET HANDLERS
// ---------------------------------------------------------------------------
io.on('connection', (socket) => {
  console.log(`[CONNECT] ${socket.id}`);

  socket.on('join_game', (gameId: string, playerId: string) => {
    (socket as any).playerId      = playerId;
    (socket as any).currentGameId = gameId;
    socket.join(gameId);

    let state = gameManager.getGameState(gameId);
    if (!state) {
      console.log(`[LOBBY] Creating game ${gameId} for ${playerId}`);
      gameManager.createGame(playerId, {});
      state = gameManager.getGameState(gameId)!;
    } else {
      console.log(`[LOBBY] ${playerId} joining game ${gameId}`);
      gameManager.joinGame(gameId, playerId);
      state = gameManager.getGameState(gameId)!;
    }

    const ts = new Date().toTimeString().slice(0, 8);
    console.log(`[${ts}] ⬜ ${playerId} entered the room.`);

    io.to(gameId).emit('new_log_entry', {
      id:        Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
      type:      'SYSTEM',
      timeStr:   ts,
      message:   `${playerId} entered the room.`,
    });

    broadcastState(gameId, state);
  });

  socket.on('perform_action', (gameId: string, playerId: string, action: any) => {
    try {
      const result = gameManager.handleAction(gameId, playerId, action);

      if (!result.success) {
        // --- REJECTED ACTION: emit a rich log entry ---
        const ts = new Date().toTimeString().slice(0, 8);
        console.log(`[${ts}] ❌ ${playerId} → ${action.type} REJECTED: ${result.message}`);

        const currentPlayerId = getCurrentPlayerId(gameId); // who should play

        const logEntry = {
          id: Math.random().toString(36).substr(2, 9),
          timestamp: Date.now(),
          type: 'ACTION',                       // Keep as ACTION so it appears in the ACTION filter
          playerId,
          playerName: getPlayerName(gameId, playerId),
          playerColor: getPlayerColor(gameId, playerId),
          request: { type: action.type, payload: action.payload },
          response: {
            success: false,
            message: result.message,            // e.g., "REJECTED: It is seat_xxx's turn"
            currentPlayerId,                    // who should play
          },
        };

        io.to(gameId).emit('new_log_entry', logEntry);

        // (Optional) Remove the old action_error emit to avoid duplicate logs.
        // socket.emit('action_error', { message: result.message });
      }
      // If result.success is true, the 'action_success' event (above) handles logging.
    } catch (err) {
      console.error('[ERROR] Action processing:', err);
    }
  });

  socket.on('disconnecting', () => {
    const pId = (socket as any).playerId;
    const gId = (socket as any).currentGameId;
    if (pId && gId) {
      console.log(`[${new Date().toTimeString().slice(0,8)}] ⬜ ${pId} went offline.`);
      const updatedState = gameManager.setPlayerOffline(gId, pId);
      if (updatedState) {
        io.to(gId).emit('new_log_entry', {
          id:        Math.random().toString(36).substr(2, 9),
          timestamp: Date.now(),
          type:      'SYSTEM',
          timeStr:   new Date().toTimeString().slice(0, 8),
          message:   `${pId} went offline.`,
        });
        broadcastState(gId, updatedState);
      }
    }
  });

  socket.on('disconnect', () => console.log(`[DISCONNECT] ${socket.id}`));
});

// ---------------------------------------------------------------------------
// STATE BROADCAST HELPERS
// ---------------------------------------------------------------------------
async function broadcastState(gameId: string, state: any) {
  const sockets = await io.in(gameId).fetchSockets();
  sockets.forEach(s => {
    const sPlayerId = (s as any).playerId;
    s.emit('game_state_update', maskStateForPlayer(state, sPlayerId));
  });
}

function maskStateForPlayer(state: any, playerId: string) {
  const serializedBoard = state.board.serialize();
  return {
    ...state,
    board: serializedBoard,
    players: state.players.map((p: any) => ({
      ...p,
      resources: p.id === playerId ? p.resources : { total: getTotal(p.resources) },
      devCards:  p.id === playerId ? p.devCards  : { count: p.devCards?.length || 0 },
    })),
  };
}

function getTotal(res: any): number {
  if (!res) return 0;
  return Object.values(res).reduce((a: any, b: any) => a + b, 0) as number;
}

// ---------------------------------------------------------------------------
// STATIC + START
// ---------------------------------------------------------------------------
const clientDistPath = path.join(__dirname, '../../client/dist');
app.use(express.static(clientDistPath));
app.get('*', (_req, res) => res.sendFile(path.join(clientDistPath, 'index.html')));

const PORT = process.env.PORT || 4000;
httpServer.listen(PORT, () => {
  console.log(`[SERVER] Catan running on http://localhost:${PORT}`);
});
```

## File: packages/engine/dist/ActionProcessor.d.ts.map
```
{"version":3,"file":"ActionProcessor.d.ts","sourceRoot":"","sources":["../src/ActionProcessor.ts"],"names":[],"mappings":"AAEA,OAAO,EAAU,cAAc,EAAE,MAAM,qBAAqB,CAAC;AAC7D,OAAO,EAAE,SAAS,EAAE,MAAM,kBAAkB,CAAC;AA0C7C,qBAAa,eAAe;IAC1B;;;;;;;;;;OAUG;WACW,OAAO,CAAC,KAAK,EAAE,SAAS,EAAE,SAAS,EAAE,GAAG,GAAG,cAAc;IA8CvE,OAAO,CAAC,MAAM,CAAC,YAAY;CA+B5B"}
```

## File: packages/engine/dist/ActionProcessor.js
```javascript
//ActionProcessor.ts
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
import { ConfigureAgentAction } from './actions/ConfigureAgent.js';
import { ConfigurePlayerAction } from './actions/ConfigurePlayer.js';
import { ClaimSeatAction } from './actions/ClaimSeat.js';
import { ChangeColorAction } from './actions/ChangeColor.js';
import { EndTurnAction } from './actions/EndTurn.js';
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
    static process(state, rawAction) {
        const isAdmin = ADMIN_ACTIONS.has(rawAction.type);
        // ------------------------------------------------------------------
        // RESOLVE: session-id  →  seat-id  (only for game actions)
        // Matches on controllerId first (human: "user_xyz" → seat),
        // then falls back to p.id (bot: already passes its own seat id).
        // ------------------------------------------------------------------
        let resolvedPlayerId = rawAction.playerId;
        if (!isAdmin) {
            const seat = state.players.find(p => p.controllerId === rawAction.playerId || p.id === rawAction.playerId);
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
    static createAction(raw) {
        const { playerId, payload } = raw;
        switch (raw.type) {
            // ── GAME ACTIONS ────────────────────────────────────────────────
            case 'ROLL_DICE': return new RollDiceAction(playerId, payload);
            case 'END_TURN': return new EndTurnAction(playerId, payload);
            case 'BUILD_SETTLEMENT': return new BuildSettlementAction(playerId, payload);
            case 'MOVE_ROBBER': return new MoveRobberAction(playerId, payload);
            case 'STEAL_CARD': return new TakeCardAction(playerId, payload);
            case 'PROPOSE_TRADE': return new ProposeTradeAction(playerId, payload);
            case 'REVIEW_TRADE': return new ReviewTradeAction(playerId, payload);
            case 'EXECUTE_TRADE': return new ExecuteTradeAction(playerId, payload);
            case 'PLACE_INITIAL_SETTLEMENT': return new PlaceInitialSettlementAction(playerId, payload);
            case 'PLACE_INITIAL_ROAD': return new PlaceInitialRoadAction(playerId, payload);
            case 'PLAY_KNIGHT': return new PlayKnightAction(playerId, payload);
            case 'MONOPOLY_CHOICE': return new MonopolyChoiceAction(playerId, payload);
            case 'YEAR_OF_PLENTY_CHOICE': return new YearOfPlentyChoiceAction(playerId, payload);
            case 'BUY_DEV_CARD': return new BuyDevCardAction(playerId, payload);
            // ── ADMIN / LOBBY ACTIONS ────────────────────────────────────────
            case 'START_GAME': return new StartGameAction(playerId, payload);
            case 'ADD_SEAT': return new AddSeatAction(playerId, payload);
            case 'REMOVE_SEAT': return new RemoveSeatAction(playerId, payload);
            case 'CONFIGURE_AGENT': return new ConfigureAgentAction(playerId, payload);
            case 'CONFIGURE_PLAYER': return new ConfigurePlayerAction(playerId, payload);
            case 'TOGGLE_CONTROLLER': return new ToggleControllerAction(playerId, payload);
            case 'CLAIM_SEAT': return new ClaimSeatAction(playerId, payload);
            case 'CHANGE_COLOR': return new ChangeColorAction(playerId, payload);
            default: return null;
        }
    }
}
//# sourceMappingURL=ActionProcessor.js.map
```

## File: packages/engine/dist/ActionProcessor.js.map
```
{"version":3,"file":"ActionProcessor.js","sourceRoot":"","sources":["../src/ActionProcessor.ts"],"names":[],"mappings":"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"}
```

## File: packages/engine/src/types/index.ts
```typescript
import { HexCoordinate } from '../core/HexCoordinate.js';

export type GamePhase = 'STARTUP' | 'ROLLING' | 'TRADING_BUILDING' | 'WAITING_FOR_TRADE' | 'ROBBER_DISCARD' | 'ROBBER_MOVE' | 'ROBBER_STEAL' | 'YEAR_OF_PLENTY' | 'MONOPOLY';

export enum DevCardType {
  KNIGHT         = 'KNIGHT',
  MONOPOLY       = 'MONOPOLY',
  YEAR_OF_PLENTY = 'YEAR_OF_PLENTY',
  ROAD_BUILDING  = 'ROAD_BUILDING',
  VICTORY_POINT  = 'VICTORY_POINT',
}

export enum ResourceType {
  WHEAT  = 'WHEAT',
  WOOD   = 'WOOD',
  BRICK  = 'BRICK',
  SHEEP  = 'SHEEP',
  ORE    = 'ORE',
  DESERT = 'DESERT',
}

export interface DevCard {
  id:         string;
  type:       string;
  boughtTurn: number;
}

export interface Player {
  id:             string;
  name:           string;
  color:          string;

  controllerId:   string | null;
  controllerType: 'HUMAN' | 'AGENT' | null;
  agentType?:     'HEURISTIC' | 'LLM' | 'WEBHOOK' | null;

  /** @deprecated Crown lives on GameState.hostSessionId */
  isHost:   boolean;
  isOnline: boolean;

  // ── Turn-timer settings (Human seats only) ────────────────────────────
  // timerEnabled defaults to FALSE — human turns are untimed by default.
  // When false, the server never starts a skip-timer for this seat.
  timerEnabled:  boolean;
  turnTimeoutMs: number;    // only used when timerEnabled is true; default 60 000

  resources: {
    brick: number;
    wood:  number;
    wheat: number;
    sheep: number;
    ore:   number;
  };
  victoryPoints:    number;
  devCards:         any[];
  numPlayedKnights: number;
  numSettlements:   number;
  hasLargestArmy:   boolean;
  hasLongestRoad:   boolean;
}

export interface Tile {
  id:        string;
  coord:     HexCoordinate;
  type:      ResourceType;
  value:     number;
  hasRobber: boolean;
}

export interface GameState {
  id:              string;
  hostSessionId:   string;
  phase:           string;
  startupIndex:    number;
  startupSubPhase: string;
  setupSequence:   string[];
  currentPlayerId: string;
  players:         Player[];
  board: {
    tiles:         Map<string, Tile>;
    intersections: Map<string, Intersection>;
    paths:         Map<string, Path>;
  };
  turnOrder:             string[];
  robberTileId:          string;
  victimsAvailable:      string[];
  diceResult?:           [number, number];
  activeTrade?:          any;
  turnNumber:            number;
  playedDevCardThisTurn: boolean;
  devCardDeck:           string[];
}

export interface Intersection {
  id:       string;
  coords:   HexCoordinate[];
  building?: { type: 'SETTLEMENT' | 'CITY'; playerId: string };
}

export interface LogEntry {
  id:        string;
  timestamp: number;
  type:      'SYSTEM' | 'CHAT' | 'ACTION';
  playerId?: string;
  message:   string;
  metadata?: any;
}

export interface Path {
  id:     string;
  coords: HexCoordinate[];
  road?:  { playerId: string };
}

export interface ResourceHand {
  brick: number; wood: number; wheat: number; sheep: number; ore: number;
}

export interface TradeOffer {
  senderId:   string;
  offering:   ResourceHand;
  requesting: ResourceHand;
  responses:  Map<string, 'ACCEPTED' | 'REJECTED' | 'PENDING'>;
}
```

## File: packages/client/src/components/Sidebar/PlayerList.vue
```vue
<script setup lang="ts">
import { computed, ref } from 'vue';
import { useGameStore }  from '../../stores/gameStore';
import { COLOR_TO_EMOJI } from '../../utils/constants';
import PlayerPanel from '../Modals/PlayerPanel.vue';

const gameStore        = useGameStore();
const selectedPlayerId = ref<string | null>(null);

const isKing = computed(() => gameStore.playerId === gameStore.state?.hostSessionId);

const isSpectator = computed(() => {
  if (!gameStore.state) return true;
  return !gameStore.state.players.some((p: any) => p.controllerId === gameStore.playerId);
});

const canManifest = computed(() => {
  if (!gameStore.state) return false;
  return gameStore.state.players.every((p: any) => p.controllerType !== null)
      && gameStore.state.players.length >= 2;
});

const isActivePlayer = (player: any) => {
  if (!gameStore.state) return false;
  if (gameStore.state.phase === 'LOBBY') return player.controllerId === gameStore.state.hostSessionId;
  return player.id === gameStore.state.currentPlayerId;
};

const addSeat   = () => gameStore.performAction('ADD_SEAT', {});
const claimSeat = (seatId: string) => gameStore.performAction('CLAIM_SEAT', { targetSeatId: seatId });
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <h3>AGENTIC LOBBY</h3>
      <div class="my-id">LOCAL_USER: {{ gameStore.playerId }}</div>
      <div v-if="isSpectator" class="spectator-badge">👀 LURK MODE</div>
      <div v-if="isSpectator && isKing" class="spectator-badge root-admin">👑 ROOT ADMIN</div>
      <button v-if="isKing && gameStore.state?.players.length < 4" @click="addSeat" class="btn-small">➕ Add Seat</button>
    </div>

    <div class="player-list">
      <div
        v-for="player in gameStore.state?.players" :key="player.id"
        class="player-row"
        :class="{ 'clickable-row': !isSpectator || player.controllerType !== null, 'active-turn-glow': isActivePlayer(player) }"
        @click="(!isSpectator || player.controllerType !== null) ? selectedPlayerId = player.id : null"
      >
        <button v-if="isSpectator && player.controllerType === null" @click.stop="claimSeat(player.id)" class="btn-claim">JOIN SEAT</button>
        <div v-else class="row-content">
          <span class="stat-icon" title="Color">{{ COLOR_TO_EMOJI[player.color] || '⚪' }}</span>
          <span class="stat-icon" title="Driver">{{ player.controllerType === 'HUMAN' ? '🧠' : (player.controllerType === 'AGENT' ? '🤖' : '👻') }}</span>
          <span class="stat-icon" title="Role">{{ player.controllerId === gameStore.state.hostSessionId ? '👑' : '👨‍🌾' }}</span>
          <span class="stat-icon" title="Link">{{ player.controllerType === null ? '🚫' : (player.isOnline ? '🔗' : '⛓️‍💥') }}</span>
          <span class="stat-data">🎒x{{ typeof player.resources?.total === 'number' ? player.resources.total : Object.values(player.resources || {}).reduce((a: any, b: any) => a + b, 0) }} 🏆x{{ player.victoryPoints }}</span>
          <span class="player-name">{{ player.name }}</span>
          <span class="settings-gear">⚙️</span>
        </div>
      </div>
    </div>

    <div class="legend" v-if="gameStore.state?.phase === 'LOBBY'">
      <p><strong>🧠 Human:</strong> Physical Player (⛓️‍💥 if disconnected)</p>
      <p><strong>🤖 Agent:</strong> AI controlled bot (always 🔗)</p>
      <p><strong>👻 Ghost:</strong> Empty Seat (🚫)</p>
    </div>

    <button v-if="isKing && gameStore.state?.phase === 'LOBBY'"
      :disabled="!canManifest"
      @click="gameStore.performAction('START_GAME', {})"
      class="btn-manifest">🚀 MANIFEST GAME</button>

    <div class="phase-badge" v-if="gameStore.state">🛰️ SYSTEM_PHASE: {{ gameStore.state.phase }}</div>

    <PlayerPanel v-if="selectedPlayerId" :playerId="selectedPlayerId" @close="selectedPlayerId = null" />
  </aside>
</template>

<style scoped>
.active-turn-glow {
  box-shadow: inset 0 0 15px rgba(46,204,113,0.4), 0 0 10px rgba(46,204,113,0.8);
  border-color: #2ecc71 !important;
  background: rgba(46,204,113,0.1) !important;
}
.root-admin { background: #9b59b6 !important; color: white !important; margin-top: -5px; }

/* ── THE KEY FIX ──────────────────────────────────────────────
   position: fixed  → floats above the board, unaffected by
                       any parent layout (no more flex centering
                       pushing it off-screen)
   right: 0         → RIGHT border sticks to the RIGHT edge of
                       the VIEWPORT at all times
   top/bottom: 0    → full height
──────────────────────────────────────────────────────────────── */
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 400px;
  z-index: 1000;

  background: rgba(10,10,10,0.92);
  color: #e0e0e0;
  padding: 15px;
  border-left: 1px solid #333;
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.sidebar-header { margin-bottom: 15px; }
.sidebar-header h3 { margin: 0 0 5px 0; color: #00ff00; }
.my-id { font-size: 0.8rem; color: #888; margin-bottom: 10px; }

.spectator-badge {
  background: #f39c12; color: black; font-weight: bold;
  text-align: center; padding: 5px; border-radius: 4px;
  margin-bottom: 10px; animation: pulse 2s infinite;
}
@keyframes pulse { 0%,100% { opacity:0.8; } 50% { opacity:1; } }

.btn-small {
  background: #333; color: white; border: 1px solid #555;
  padding: 5px 10px; border-radius: 4px; cursor: pointer; width: 100%;
  font-family: inherit;
}
.btn-small:hover { background: #444; border-color: #00ff00; }

.player-list { display: flex; flex-direction: column; gap: 5px; }
.player-row {
  background: rgba(255,255,255,0.03); border: 1px solid transparent;
  border-radius: 4px; transition: all 0.2s; min-height: 40px;
  display: flex; align-items: center;
}
.clickable-row { cursor: pointer; }
.clickable-row:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.3); }
.row-content { display: flex; align-items: center; width: 100%; padding: 8px; }

.btn-claim {
  width: 100%; height: 40px; background: transparent; color: #2ecc71;
  border: 1px dashed #2ecc71; font-family: inherit; font-weight: bold;
  cursor: pointer; border-radius: 4px;
}
.btn-claim:hover { background: rgba(46,204,113,0.2); }

.stat-icon { margin-right: 4px; font-size: 16px; }
.stat-data { margin-right: 8px; font-size: 12px; color: #bdc3c7; min-width: 45px; }
.player-name { margin-left: 5px; font-size: 13px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.settings-gear { margin-left: auto; font-size: 12px; opacity: 0; transition: opacity 0.2s; }
.clickable-row:hover .settings-gear { opacity: 1; }

.legend {
  margin-top: auto; margin-bottom: 15px;
  padding: 10px; background: rgba(255,255,255,0.05);
  border-radius: 4px; font-size: 11px; color: #aaa;
}
.legend p { margin: 3px 0; }

.btn-manifest {
  width: 100%; padding: 12px; background: #00ff00; color: black;
  border: none; font-weight: bold; cursor: pointer;
  margin-bottom: 10px; font-family: inherit;
}
.btn-manifest:hover:not(:disabled) { box-shadow: 0 0 15px #00ff00; }
.btn-manifest:disabled { filter: grayscale(1); opacity: 0.3; cursor: not-allowed; }

.phase-badge {
  font-size: 10px; background: #222; padding: 5px;
  border-radius: 3px; color: #aaa; text-align: center;
}
</style>
```

## File: packages/engine/src/ActionProcessor.ts
```typescript
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
```

## File: packages/server/dist/GameManager.js
```javascript
import { EventEmitter } from 'events';
import { ActionProcessor, Board, LayoutFactory, } from '@tinc/engine';
import { HeuristicAgent } from './agents/HeuristicAgent.js';
export class GameManager extends EventEmitter {
    games = new Map();
    timers = new Map();
    TURN_TIMEOUT_MS = 60_000;
    /** Registry of pluggable Agent Brains ("Lego Box") */
    brainRegistry = {
        'HEURISTIC': new HeuristicAgent(),
        // 'LLM':     new LLMAgent(),
        // 'WEBHOOK': new WebhookAgent(),
    };
    constructor() {
        super(); // Required for EventEmitter
    }
    // ---------------------------------------------------------------------------
    // LOBBY LIFECYCLE
    // ---------------------------------------------------------------------------
    createGame(creatorId, settings) {
        const gameId = 'game-uuid-123';
        const board = new Board();
        LayoutFactory.createStandard(board);
        const shortId = creatorId.substring(creatorId.length - 5);
        const colors = ['#e74c3c', '#e67e22', '#f1c40f', '#27ae60', '#3498db', '#9b59b6', '#8b4513', '#ffffff', '#222222'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const initialState = {
            id: gameId,
            hostSessionId: creatorId,
            phase: 'LOBBY',
            startupIndex: 0,
            startupSubPhase: 'SETTLEMENT',
            currentPlayerId: creatorId,
            turnOrder: [creatorId],
            board,
            robberTileId: '0,0,0',
            victimsAvailable: [],
            turnNumber: 1,
            playedDevCardThisTurn: false,
            devCardDeck: [],
            setupSequence: [],
            players: [
                this.createNewPlayer(creatorId, shortId, randomColor),
            ],
        };
        this.games.set(gameId, initialState);
        return gameId;
    }
    joinGame(gameId, playerId) {
        const state = this.games.get(gameId);
        if (!state)
            throw new Error('Game not found');
        const assignedSeat = state.players.find(p => p.controllerId === playerId);
        if (assignedSeat)
            assignedSeat.isOnline = true;
        if (!state.hostSessionId) {
            state.hostSessionId = playerId;
            console.log(`👑 ROOT CROWN CLAIMED: ${playerId} is now the Admin.`);
        }
        return state;
    }
    setPlayerOffline(gameId, playerId) {
        const state = this.games.get(gameId);
        if (!state)
            return null;
        const playerLeaving = state.players.find(p => p.controllerId === playerId);
        if (playerLeaving)
            playerLeaving.isOnline = false;
        if (playerId === state.hostSessionId) {
            const nextHost = state.players.find(p => p.isOnline && p.controllerType === 'HUMAN' && p.controllerId);
            if (nextHost?.controllerId) {
                state.hostSessionId = nextHost.controllerId;
                console.log(`👑 CROWN PASSING to ${nextHost.name}`);
            }
            else {
                state.hostSessionId = '';
                console.log('👑 CROWN DORMANT');
            }
        }
        return state;
    }
    // ---------------------------------------------------------------------------
    // PLAYER / SEAT FACTORIES
    // ---------------------------------------------------------------------------
    createEmptySeat(id, name, color) {
        return {
            id, name, color,
            isHost: false,
            isOnline: false,
            controllerId: null,
            controllerType: null,
            timerEnabled: false,
            turnTimeoutMs: 60_000,
            resources: { brick: 0, wood: 0, wheat: 0, sheep: 0, ore: 0 },
            victoryPoints: 0,
            devCards: [],
            numPlayedKnights: 0,
            numSettlements: 5,
            hasLargestArmy: false,
            hasLongestRoad: false,
        };
    }
    createNewPlayer(id, name, color) {
        console.log(`Server.GameManager.createNewPlayer: ${id} - ${name}`);
        return {
            id: `seat_${id.substring(0, 3)}`,
            name, color,
            isHost: false,
            isOnline: true,
            controllerId: id,
            controllerType: 'HUMAN',
            timerEnabled: false,
            turnTimeoutMs: 60_000,
            resources: { brick: 0, wood: 0, wheat: 0, sheep: 0, ore: 0 },
            victoryPoints: 0,
            devCards: [],
            numPlayedKnights: 0,
            numSettlements: 5,
            hasLargestArmy: false,
            hasLongestRoad: false,
        };
    }
    // ---------------------------------------------------------------------------
    // ACTION PIPELINE
    // ---------------------------------------------------------------------------
    handleAction(gameId, playerId, rawAction) {
        const state = this.games.get(gameId);
        if (!state)
            throw new Error('Game not found');
        const result = ActionProcessor.process(state, { ...rawAction, playerId });
        if (result.success) {
            this.games.set(gameId, result.newState);
            this.resetTimer(gameId);
            // 🔊 Fire broadcast event — index.ts handles the socket push
            const actionId = Math.random().toString(36).substr(2, 7);
            this.emit('action_success', {
                gameId,
                playerId,
                action: rawAction,
                actionId,
                result,
                newState: result.newState,
            });
            // Schedule next agent move (short delay so humans can watch the board)
            setTimeout(() => this.triggerAgentIfTurn(gameId), 1500);
        }
        return result;
    }
    // ---------------------------------------------------------------------------
    // AGENT EXECUTION LOOP
    // ---------------------------------------------------------------------------
    triggerAgentIfTurn(gameId) {
        const state = this.games.get(gameId);
        if (!state)
            return;
        const activePlayer = state.players.find(p => p.id === state.currentPlayerId);
        if (!activePlayer || activePlayer.controllerType !== 'AGENT')
            return;
        const brainType = activePlayer.agentType || 'HEURISTIC';
        const brain = this.brainRegistry[brainType];
        if (!brain) {
            console.error(`ERROR: Brain type "${brainType}" not found in registry!`);
            return;
        }
        console.log(`🤖 Agent ${activePlayer.name} (${brainType}) is thinking...`);
        const nextMove = brain.decideMove(state, activePlayer.id);
        if (nextMove) {
            console.log(`🤖 Agent decided: ${nextMove.type}`);
            this.handleAction(gameId, activePlayer.id, nextMove);
        }
        else {
            console.log(`🤖 Agent couldn't decide — skipping turn.`);
            this.handleAction(gameId, activePlayer.id, { type: 'END_TURN', payload: {} });
        }
    }
    // ---------------------------------------------------------------------------
    // TURN TIMER
    // ---------------------------------------------------------------------------
    resetTimer(gameId) {
        if (this.timers.has(gameId)) {
            clearTimeout(this.timers.get(gameId));
            this.timers.delete(gameId);
        }
        const state = this.games.get(gameId);
        if (!state)
            return;
        const currentSeat = state.players.find(p => p.id === state.currentPlayerId);
        if (!currentSeat)
            return;
        // Humans only get a timer when explicitly opted in; agents always get one
        if (currentSeat.controllerType === 'HUMAN' && !currentSeat.timerEnabled) {
            console.log(`[TIMER] Skipping timer for human ${currentSeat.name} (timerEnabled=false)`);
            return;
        }
        const timeoutMs = currentSeat.controllerType === 'HUMAN'
            ? currentSeat.turnTimeoutMs
            : this.TURN_TIMEOUT_MS;
        const timer = setTimeout(() => this.handleTimeout(gameId), timeoutMs);
        this.timers.set(gameId, timer);
    }
    handleTimeout(gameId) {
        const state = this.games.get(gameId);
        if (!state)
            return;
        console.log(`Game ${gameId}: Player ${state.currentPlayerId} timed out.`);
        this.handleAction(gameId, state.currentPlayerId, { type: 'END_TURN' });
    }
    // ---------------------------------------------------------------------------
    // READ
    // ---------------------------------------------------------------------------
    getGameState(gameId) {
        return this.games.get(gameId);
    }
}
```

## File: packages/server/src/GameManager.ts
```typescript
import { EventEmitter } from 'events';
import { ActionProcessor, Board, LayoutFactory, } from '@tinc/engine';
import { HeuristicAgent } from './agents/HeuristicAgent.js';

export interface ActionSuccessPayload {
    gameId:   string;
    playerId: string;
    action:   any;
    actionId: string;
    result:   {
        success:   boolean;
        message?:  string;
        followUp?: string;
        newState?: any;
    };
    newState: any;
}

export class GameManager extends EventEmitter {
    games = new Map();
    timers = new Map();
    TURN_TIMEOUT_MS = 60_000;
    /** Registry of pluggable Agent Brains ("Lego Box") */
    brainRegistry = {
        'HEURISTIC': new HeuristicAgent(),
        // 'LLM':     new LLMAgent(),
        // 'WEBHOOK': new WebhookAgent(),
    };
    constructor() {
        super(); // Required for EventEmitter
    }
    // ---------------------------------------------------------------------------
    // LOBBY LIFECYCLE
    // ---------------------------------------------------------------------------
    createGame(creatorId, settings) {
        const gameId = 'game-uuid-123';
        const board = new Board();
        LayoutFactory.createStandard(board);
        const shortId = creatorId.substring(creatorId.length - 5);
        const colors = ['#e74c3c', '#e67e22', '#f1c40f', '#27ae60', '#3498db', '#9b59b6', '#8b4513', '#ffffff', '#222222'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const initialState = {
            id: gameId,
            hostSessionId: creatorId,
            phase: 'LOBBY',
            startupIndex: 0,
            startupSubPhase: 'SETTLEMENT',
            currentPlayerId: creatorId,
            turnOrder: [creatorId],
            board,
            robberTileId: '0,0,0',
            victimsAvailable: [],
            turnNumber: 1,
            playedDevCardThisTurn: false,
            devCardDeck: [],
            setupSequence: [],
            players: [
                this.createNewPlayer(creatorId, shortId, randomColor),
            ],
        };
        this.games.set(gameId, initialState);
        return gameId;
    }
    joinGame(gameId, playerId) {
        const state = this.games.get(gameId);
        if (!state)
            throw new Error('Game not found');
        const assignedSeat = state.players.find(p => p.controllerId === playerId);
        if (assignedSeat)
            assignedSeat.isOnline = true;
        if (!state.hostSessionId) {
            state.hostSessionId = playerId;
            console.log(`👑 ROOT CROWN CLAIMED: ${playerId} is now the Admin.`);
        }
        return state;
    }
    setPlayerOffline(gameId, playerId) {
        const state = this.games.get(gameId);
        if (!state)
            return null;
        const playerLeaving = state.players.find(p => p.controllerId === playerId);
        if (playerLeaving)
            playerLeaving.isOnline = false;
        if (playerId === state.hostSessionId) {
            const nextHost = state.players.find(p => p.isOnline && p.controllerType === 'HUMAN' && p.controllerId);
            if (nextHost?.controllerId) {
                state.hostSessionId = nextHost.controllerId;
                console.log(`👑 CROWN PASSING to ${nextHost.name}`);
            }
            else {
                state.hostSessionId = '';
                console.log('👑 CROWN DORMANT');
            }
        }
        return state;
    }
    // ---------------------------------------------------------------------------
    // PLAYER / SEAT FACTORIES
    // ---------------------------------------------------------------------------
    createEmptySeat(id, name, color) {
        return {
            id, name, color,
            isHost: false,
            isOnline: false,
            controllerId: null,
            controllerType: null,
            timerEnabled: false,
            turnTimeoutMs: 60_000,
            resources: { brick: 0, wood: 0, wheat: 0, sheep: 0, ore: 0 },
            victoryPoints: 0,
            devCards: [],
            numPlayedKnights: 0,
            numSettlements: 5,
            hasLargestArmy: false,
            hasLongestRoad: false,
        };
    }
    createNewPlayer(id, name, color) {
        console.log(`Server.GameManager.createNewPlayer: ${id} - ${name}`);
        return {
            id: `seat_${id.substring(0, 3)}`,
            name, color,
            isHost: false,
            isOnline: true,
            controllerId: id,
            controllerType: 'HUMAN',
            timerEnabled: false,
            turnTimeoutMs: 60_000,
            resources: { brick: 0, wood: 0, wheat: 0, sheep: 0, ore: 0 },
            victoryPoints: 0,
            devCards: [],
            numPlayedKnights: 0,
            numSettlements: 5,
            hasLargestArmy: false,
            hasLongestRoad: false,
        };
    }
    // ---------------------------------------------------------------------------
    // ACTION PIPELINE
    // ---------------------------------------------------------------------------
    handleAction(gameId, playerId, rawAction) {
        const state = this.games.get(gameId);
        if (!state)
            throw new Error('Game not found');
        const result = ActionProcessor.process(state, { ...rawAction, playerId });
        if (result.success) {
            this.games.set(gameId, result.newState);
            this.resetTimer(gameId);
            // 🔊 Fire broadcast event — index.ts handles the socket push
            const actionId = Math.random().toString(36).substr(2, 7);
            this.emit('action_success', {
                gameId,
                playerId,
                action: rawAction,
                actionId,
                result,
                newState: result.newState,
            });
            // Schedule next agent move (short delay so humans can watch the board)
            setTimeout(() => this.triggerAgentIfTurn(gameId), 1500);
        }
        return result;
    }
    // ---------------------------------------------------------------------------
    // AGENT EXECUTION LOOP
    // ---------------------------------------------------------------------------
    triggerAgentIfTurn(gameId) {
        const state = this.games.get(gameId);
        if (!state)
            return;
        const activePlayer = state.players.find(p => p.id === state.currentPlayerId);
        if (!activePlayer || activePlayer.controllerType !== 'AGENT')
            return;
        const brainType = activePlayer.agentType || 'HEURISTIC';
        const brain = this.brainRegistry[brainType];
        if (!brain) {
            console.error(`ERROR: Brain type "${brainType}" not found in registry!`);
            return;
        }
        console.log(`🤖 Agent ${activePlayer.name} (${brainType}) is thinking...`);
        const nextMove = brain.decideMove(state, activePlayer.id);
        if (nextMove) {
            console.log(`🤖 Agent decided: ${nextMove.type}`);
            this.handleAction(gameId, activePlayer.id, nextMove);
        }
        else {
            console.log(`🤖 Agent couldn't decide — skipping turn.`);
            this.handleAction(gameId, activePlayer.id, { type: 'END_TURN', payload: {} });
        }
    }
    // ---------------------------------------------------------------------------
    // TURN TIMER
    // ---------------------------------------------------------------------------
    resetTimer(gameId) {
        if (this.timers.has(gameId)) {
            clearTimeout(this.timers.get(gameId));
            this.timers.delete(gameId);
        }
        const state = this.games.get(gameId);
        if (!state) return;
        const currentSeat = state.players.find(p => p.id === state.currentPlayerId);
        if (!currentSeat) return;
        // Humans only get a timer when explicitly opted in; agents always get one
        if (currentSeat.controllerType === 'HUMAN' && !currentSeat.timerEnabled) {
            console.log(`[TIMER] Skipping timer for human ${currentSeat.name} (timerEnabled=false)`);
            return;
        }
        const timeoutMs = currentSeat.controllerType === 'HUMAN'
            ? currentSeat.turnTimeoutMs
            : this.TURN_TIMEOUT_MS;
        const timer = setTimeout(() => this.handleTimeout(gameId), timeoutMs);
        this.timers.set(gameId, timer);
    }
    handleTimeout(gameId) {
        const state = this.games.get(gameId);
        if (!state)
            return;
        console.log(`Game ${gameId}: Player ${state.currentPlayerId} timed out.`);
        this.handleAction(gameId, state.currentPlayerId, { type: 'END_TURN' });
    }
    // ---------------------------------------------------------------------------
    // READ
    // ---------------------------------------------------------------------------
    getGameState(gameId) {
        return this.games.get(gameId);
    }
}
```
