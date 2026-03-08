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