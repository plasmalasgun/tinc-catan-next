<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useGameStore } from './stores/gameStore';
  import Board           from './components/GameBoard/Board.vue';
  import TradeModal      from './components/Modals/TradeModal.vue';
  import ChoiceModal     from './components/Modals/ChoiceModal.vue';
  import RightSidebar    from './components/Sidebar/RightSidebar.vue';
  import ResourceHud     from './components/HUD/ResourceHud.vue';

  // Initialize the store
  const gameStore = useGameStore();

  onMounted(() => {
    gameStore.init();
  });
</script>

<template>
  <!-- Optional chaining `?.` prevents the crash if state is temporarily null -->
  <div v-if="!gameStore?.state" class="loading">
    <h1>TINC IS NOT CATAN</h1>
    <p>Connecting to Game Server...</p>
  </div>

  <main v-else class="game-root">
    <!-- ONLY render the live board if the game has actually started -->
    <Board v-if="gameStore.state.phase !== 'LOBBY'" />
    
    <!-- If in Lobby, show a clean, empty holding screen -->
    <div v-else class="lobby-screen">
      <h1>TINC LOBBY</h1>
      <p>Configure the map and players in the sidebar to begin.</p>
    </div>

    <!-- Always show the sidebar and HUD elements once state is loaded -->
    <RightSidebar />
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
  .loading, .lobby-screen {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #0f0;
    font-family: monospace;
    background: #0a0a0a;
    gap: 12px;
  }
  .lobby-screen h1 { color: #555; letter-spacing: 5px; }
  .lobby-screen p { color: #444; }
</style>