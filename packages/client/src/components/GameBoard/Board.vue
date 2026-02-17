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