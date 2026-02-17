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