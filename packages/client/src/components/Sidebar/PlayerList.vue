<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useGameStore } from '../../stores/gameStore';
  import { COLOR_TO_EMOJI } from '../../utils/constants';
  import CommandConsole from './CommandConsole.vue';

  const gameStore = useGameStore();

  const getControllerIcon = (type) => {
    if (type === 'HUMAN') return '🧠';
    if (type === 'AGENT') return '🤖';
    return '👻'; // Default to Skull if type is null or undefined
  };

  const getConnectionIcon = (player) => {
    // Dead seats (Skull) shouldn't show a link status, they show a "No Connection" mark
    if (player.controllerType === null || player.controllerType === undefined) {
      return '✖️'; 
    }
    return player.isOnline ? '🔗' : '⛓️‍💥';
  };

  const getCargoCount = (player) => {
    if (!player.resources) return 0;
    
    // If the resources are masked (sent as { total: X })
    if (typeof player.resources.total === 'number') {
      return player.resources.total;
    }
    
    // If it's the local player, sum the individual resource values
    return Object.values(player.resources).reduce((sum, count) => sum + count, 0);
  };

  // Helper to get the correct prefix
  const getPlayerPrefix = (player) => {
    return player.isHost ? 'Host' : 'Client';
  };

  // Icon Suggestion: Turn Indicator 🎲
  const isCurrentTurn = (playerId) => {
    return gameStore.state.currentPlayerId === playerId;
  };

  const isHost = computed(() => {
    const me = gameStore.state?.players.find(p => p.controllerId === gameStore.playerId);
    return me?.isHost || false;
  });

  const startGame = () => {
    gameStore.performAction('START_GAME', {});
  };
</script>


<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <h3>AGENTIC LOBBY</h3>
      <div class="my-id">LOCAL_USER: {{ gameStore.playerId }}</div>
    </div>


    <!-- THE START BUTTON: Only for the King during Lobby -->
    <div v-if="gameStore.state?.phase === 'LOBBY' && isHost" class="host-controls">
      <button @click="startGame" class="start-btn">
        🚀 MANIFEST GAME
      </button>
      <p class="hint">Remaining 👻 will become 🤖</p>
    </div>

    <div class="player-list">
      <div 
        v-for="player in gameStore.state.players" 
        :key="player.id" 
        class="player-row"
        :class="{ 'active-turn': isCurrentTurn(player.id) }"
      >
        <!-- 1. Seat Color Emoji -->
        <span class="stat-icon">{{ COLOR_TO_EMOJI[player.color] || '⚪' }}</span>

        <!-- 2. Controller Type (Brain vs Robot) -->
        <span class="stat-icon">{{ player.controllerType === 'HUMAN' ? '🧠' : '🤖' }}</span>

        <!-- 3. Role (King vs Farmer) -->
        <span class="stat-icon">{{ player.isHost ? '👑' : '👨‍🌾' }}</span>

        <!-- 4. Link / Broken / Dead -->
        <span class="stat-icon">{{ getConnectionIcon(player) }}</span>

        <!-- 5. Cargo (Total Resources) -->
        <span class="stat-data">🎒x{{ getCargoCount(player) }}</span>

        <!-- 6. Target (Victory Points) -->
        <span class="stat-data">🏆x{{ player.victoryPoints }}</span>

        <!-- 7. Dynamic Name -->
        <span class="player-name" :class="{ 'is-ghost': player.controllerType === null }">
          {{ player.name }}
        </span>

        <!-- 8. Suggested Icon: Turn Indicator -->
        <span v-if="isCurrentTurn(player.id)" class="turn-dice">🎲</span>
      </div>
    </div>
    
    <!-- Extra States Suggestion: Game Phase Info -->
    <div class="phase-badge">
      🛰️ SYSTEM_PHASE: {{ gameStore.state.phase }}
    </div>
  </aside>
</template>

<style scoped>
  .is-ghost {
    color: #666;
    font-style: italic;
    text-decoration: line-through;
  }

  .sidebar {
    position: fixed; right: 0; top: 0; bottom: 0;
    width: 400px; /* Widened to fit new data */
    background: rgba(10, 10, 10, 0.9);
    color: #e0e0e0; padding: 15px; border-left: 1px solid #333;
    font-family: 'Courier New', Courier, monospace;
    z-index: 1000;
  }

  .player-row {
    display: flex;
    align-items: center;
    padding: 8px;
    margin-bottom: 5px;
    border: 1px solid transparent;
    border-radius: 4px;
    white-space: nowrap; /* Keep the data on one line */
  }

  .active-turn {
    background: rgba(0, 255, 0, 0.05);
    border-color: rgba(0, 255, 0, 0.3);
  }

  .stat-icon {
    margin-right: 4px;
    font-size: 16px;
  }

  .stat-data {
    margin-right: 8px;
    font-size: 12px;
    color: #bdc3c7;
    min-width: 45px; /* Aligns the columns */
  }

  .player-name {
    margin-left: 5px;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .is-me {
    color: #00ff00;
    text-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
  }

  .turn-dice {
    margin-left: auto;
    animation: blink 1s infinite;
  }

  .phase-badge {
    margin-top: 20px;
    font-size: 10px;
    background: #222;
    padding: 5px;
    border-radius: 3px;
    color: #aaa;
  }

  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0.3; }
    100% { opacity: 1; }
  }

  .host-controls {
    margin-top: 20px;
    padding: 15px;
    background: rgba(0, 255, 0, 0.1);
    border: 1px solid #00ff00;
    border-radius: 4px;
    text-align: center;
  }

  .start-btn {
    width: 100%;
    padding: 12px;
    background: #00ff00;
    color: black;
    border: none;
    font-weight: bold;
    font-family: 'Courier New', monospace;
    cursor: pointer;
    transition: all 0.2s;
  }

  .start-btn:hover {
    background: #00cc00;
    box-shadow: 0 0 15px #00ff00;
  }

  .hint {
    font-size: 10px;
    color: #aaa;
    margin-top: 8px;
  }

</style>