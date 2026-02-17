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