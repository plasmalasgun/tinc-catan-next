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