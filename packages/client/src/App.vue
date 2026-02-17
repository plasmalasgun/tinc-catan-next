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
