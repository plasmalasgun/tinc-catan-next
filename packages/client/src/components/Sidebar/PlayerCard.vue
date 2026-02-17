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