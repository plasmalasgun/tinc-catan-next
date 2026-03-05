<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { useGameStore } from '../../stores/gameStore';
  import { COLOR_TO_EMOJI } from '../../utils/constants';
  import PlayerPanel from '../Modals/PlayerPanel.vue'; // <-- IMPORT THE NEW MODAL

  const gameStore = useGameStore();

  // State to track which player's panel is open
  const selectedPlayerId = ref<string | null>(null);

  const isKing = computed(() => {
    return gameStore.state?.players.find((p: any) => p.controllerId === gameStore.playerId)?.isHost;
  });

  const canManifest = computed(() => {
    if (!gameStore.state) return false;
    const noGhosts = gameStore.state.players.every((p: any) => p.controllerType !== null);
    return noGhosts && gameStore.state.players.length >= 2;
  });

  const addSeat = () => gameStore.performAction('ADD_SEAT', {});
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
      <!-- Added a hover effect and click handler to the whole row -->
      <div 
        v-for="player in gameStore.state?.players" 
        :key="player.id" 
        class="player-row clickable-row"
        @click="selectedPlayerId = player.id"
      >
        <span class="stat-icon">{{ COLOR_TO_EMOJI[player.color] }}</span>
        
        <!-- Icon shows the current state -->
        <span class="stat-icon">
          {{ player.controllerType === 'HUMAN' ? '🧠' : (player.controllerType === 'AGENT' ? '🤖' : '👻') }}
        </span>

        <span class="stat-icon">{{ player.isHost ? '👑' : '👨‍🌾' }}</span>
        
        <!-- Connection Link -->
        <span class="stat-icon">
          {{ player.controllerType === null ? '🚫' : (player.isOnline ? '🔗' : '⛓️‍💥') }}
        </span>

        <span class="stat-data">🎒x{{ typeof player.resources.total === 'number' ? player.resources.total : Object.values(player.resources).reduce((a, b) => a + b, 0) }} 🏆x{{ player.victoryPoints }}</span>
        
        <span class="player-name">
          {{ player.isHost ? 'Host' : 'Client' }}_{{ player.name }}
        </span>
        
        <!-- Little gear icon to indicate it opens settings -->
        <span class="settings-gear">⚙️</span>
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

    <div class="phase-badge">
      🛰️ SYSTEM_PHASE: {{ gameStore.state?.phase || 'CONNECTING' }}
    </div>

    <!-- RENDER THE MODAL IF A PLAYER IS SELECTED -->
    <PlayerPanel 
      v-if="selectedPlayerId" 
      :playerId="selectedPlayerId" 
      @close="selectedPlayerId = null" 
    />
  </aside>
</template>

<style scoped>
  .sidebar {
    position: fixed; right: 0; top: 0; bottom: 0;
    width: 400px; 
    background: rgba(10, 10, 10, 0.9);
    color: #e0e0e0; padding: 15px; border-left: 1px solid #333;
    font-family: 'Courier New', Courier, monospace;
    z-index: 1000;
  }

  .player-row {
    display: flex; align-items: center; padding: 8px; margin-bottom: 5px;
    border: 1px solid transparent; border-radius: 4px; white-space: nowrap;
    transition: background 0.2s, border-color 0.2s;
  }

  /* Make it clear the row can be clicked to open settings */
  .clickable-row {
    cursor: pointer;
  }
  .clickable-row:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
  }

  .settings-gear {
    margin-left: auto;
    font-size: 12px;
    opacity: 0;
    transition: opacity 0.2s;
  }
  .clickable-row:hover .settings-gear {
    opacity: 1;
  }

  .stat-icon { margin-right: 4px; font-size: 16px; }
  .stat-data { margin-right: 8px; font-size: 12px; color: #bdc3c7; min-width: 45px; }
  .player-name { margin-left: 5px; font-size: 13px; overflow: hidden; text-overflow: ellipsis; }
  .phase-badge { margin-top: 20px; font-size: 10px; background: #222; padding: 5px; border-radius: 3px; color: #aaa; }
  .btn-manifest { width: 100%; padding: 12px; background: #00ff00; color: black; border: none; font-weight: bold; cursor: pointer; margin-top: 15px; }
  .btn-manifest:hover { box-shadow: 0 0 15px #00ff00; }
  .btn-manifest:disabled { filter: grayscale(1); opacity: 0.3; cursor: not-allowed; }
</style>