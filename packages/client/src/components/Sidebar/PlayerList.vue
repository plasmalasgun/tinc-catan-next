<script setup lang="ts">
  import { computed } from 'vue';
  import { useGameStore } from '../../stores/gameStore';
  import { COLOR_TO_EMOJI } from '../../utils/constants';
  import CommandConsole from './CommandConsole.vue';

  const gameStore = useGameStore();

  const isKing = computed(() => {
    return gameStore.state?.players.find(p => p.controllerId === gameStore.playerId)?.isHost;
  });

  const canManifest = computed(() => {
    if (!gameStore.state) return false;
    const noGhosts = gameStore.state.players.every(p => p.controllerType !== null);
    return noGhosts && gameStore.state.players.length >= 2;
  });

  const getControllerIcon = (type) => {
    if (type === 'HUMAN') return '🧠';
    if (type === 'AGENT') return '🤖';
    if (type === null || type === undefined) return '👻'; // THE FIX
  
    return '❓'; 
  };

  const getConnectionIcon = (player) => {
    // Ghosts don't have broken links; they have NO links (✖️).
    if (player.controllerType === null) {
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

  // Check if the local user is the Host
  const isLocalHost = computed(() => {
    return gameStore.state?.players.find(p => p.controllerId === gameStore.playerId)?.isHost;
  });

  const handleManifest = () => {
    gameStore.performAction('START_GAME', {});
  };

  const addSeat = () => gameStore.performAction('ADD_SEAT', {});
  const removeSeat = (id) => gameStore.performAction('REMOVE_SEAT', { targetSeatId: id });
  const assignBot = (id) => gameStore.performAction('TOGGLE_CONTROLLER', { targetPlayerId: id, controllerType: 'AGENT' });
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
      <div v-for="player in gameStore.state?.players" :key="player.id" class="player-row">
        <!-- Spacer Column -->
        <div class="spacer-col">
          <button v-if="isKing && player.controllerType === null" @click="removeSeat(player.id)" title="Remove Seat">✖️</button>
          <span v-else> </span>
        </div>

        <span class="stat-icon">{{ COLOR_TO_EMOJI[player.color] }}</span>
        
        <!-- Controller Toggle (Click Ghost to make Bot) -->
        <span class="stat-icon pointer" @click="player.controllerType === null ? assignBot(player.id) : null">
          {{ player.controllerType === 'HUMAN' ? '🧠' : (player.controllerType === 'AGENT' ? '🤖' : '👻') }}
        </span>

        <span class="stat-icon">{{ player.isHost ? '👑' : '👨‍🌾' }}</span>
        
        <!-- Connection Link or Prohibited -->
        <span class="stat-icon">
          {{ player.controllerType === null ? '🚫' : (player.isOnline ? '🔗' : '⛓️‍💥') }}
        </span>

        <span class="stat-data">🎒x0 🏆x{{ player.victoryPoints }}</span>
        
        <span class="player-name">
          {{ player.isHost ? 'Host' : 'Client' }}_{{ player.name }}
        </span>
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

  .spacer-col { width: 30px; display: flex; justify-content: center; color: #444; }
  .pointer { cursor: pointer; }
  .btn-manifest:disabled { filter: grayscale(1); opacity: 0.3; cursor: not-allowed; }

  button[title="Remove Seat"] {
  background: none !important;      /* Remove background */
  border: none !important;          /* Remove border */
  padding: 0 !important;            /* Remove padding */
  margin: 0 !important;             /* Remove margin */
  box-shadow: none !important;      /* Remove any shadows */
  outline: none !important;         /* Remove focus outline (but consider accessibility) */
  font-size: inherit;               /* Match surrounding text size */
  cursor: pointer;                  /* Keep pointer cursor */
  width: auto;                      /* Let icon determine width */
  height: auto;                     /* Let icon determine height */
  display: inline-block;            /* Keep it inline but clickable */
  line-height: 1;                   /* Prevent extra height */
  color: currentColor;              /* Match text color of parent */
}

/* Optional: Add a subtle hover effect if you want */
button[title="Remove Seat"]:hover {
  opacity: 0.7;                     /* Slight fade on hover */
  transform: scale(1.1);            /* Optional: slight pop effect */
  transition: all 0.2s ease;        /* Smooth transition */
}

/* Optional: Keep focus visible for keyboard navigation (accessibility) */
button[title="Remove Seat"]:focus-visible {
  outline: 2px solid currentColor;  /* Show outline only when tabbing */
  outline-offset: 2px;
}

</style>