<script setup lang="ts">
import { computed, ref } from 'vue';
import { useGameStore }  from '../../stores/gameStore';
import { COLOR_TO_EMOJI } from '../../utils/constants';
import PlayerPanel from '../Modals/PlayerPanel.vue';

const gameStore        = useGameStore();
const selectedPlayerId = ref<string | null>(null);

const isKing = computed(() => gameStore.playerId === gameStore.state?.hostSessionId);

const isSpectator = computed(() => {
  if (!gameStore.state) return true;
  return !gameStore.state.players.some((p: any) => p.controllerId === gameStore.playerId);
});

const canManifest = computed(() => {
  if (!gameStore.state) return false;
  return gameStore.state.players.every((p: any) => p.controllerType !== null)
      && gameStore.state.players.length >= 2;
});

const isActivePlayer = (player: any) => {
  if (!gameStore.state) return false;
  if (gameStore.state.phase === 'LOBBY') return player.controllerId === gameStore.state.hostSessionId;
  return player.id === gameStore.state.currentPlayerId;
};

const addSeat   = () => gameStore.performAction('ADD_SEAT', {});
const claimSeat = (seatId: string) => gameStore.performAction('CLAIM_SEAT', { targetSeatId: seatId });
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <h3>AGENTIC LOBBY</h3>
      <div class="my-id">LOCAL_USER: {{ gameStore.playerId }}</div>
      <div v-if="isSpectator" class="spectator-badge">👀 LURK MODE</div>
      <div v-if="isSpectator && isKing" class="spectator-badge root-admin">👑 ROOT ADMIN</div>
      <button v-if="isKing && gameStore.state?.players.length < 4" @click="addSeat" class="btn-small">➕ Add Seat</button>
    </div>

    <div class="player-list">
      <div
        v-for="player in gameStore.state?.players" :key="player.id"
        class="player-row"
        :class="{ 'clickable-row': !isSpectator || player.controllerType !== null, 'active-turn-glow': isActivePlayer(player) }"
        @click="(!isSpectator || player.controllerType !== null) ? selectedPlayerId = player.id : null"
      >
        <button v-if="isSpectator && player.controllerType === null" @click.stop="claimSeat(player.id)" class="btn-claim">JOIN SEAT</button>
        <div v-else class="row-content">
          <span class="stat-icon" title="Color">{{ COLOR_TO_EMOJI[player.color] || '⚪' }}</span>
          <span class="stat-icon" title="Driver">{{ player.controllerType === 'HUMAN' ? '🧠' : (player.controllerType === 'AGENT' ? '🤖' : '👻') }}</span>
          <span class="stat-icon" title="Role">{{ player.controllerId === gameStore.state.hostSessionId ? '👑' : '👨‍🌾' }}</span>
          <span class="stat-icon" title="Link">{{ player.controllerType === null ? '🚫' : (player.isOnline ? '🔗' : '⛓️‍💥') }}</span>
          <span class="stat-data">🎒x{{ typeof player.resources?.total === 'number' ? player.resources.total : Object.values(player.resources || {}).reduce((a: any, b: any) => a + b, 0) }} 🏆x{{ player.victoryPoints }}</span>
          <span class="player-name">{{ player.name }}</span>
          <span class="settings-gear">⚙️</span>
        </div>
      </div>
    </div>

    <div class="legend" v-if="gameStore.state?.phase === 'LOBBY'">
      <p><strong>🧠 Human:</strong> Physical Player (⛓️‍💥 if disconnected)</p>
      <p><strong>🤖 Agent:</strong> AI controlled bot (always 🔗)</p>
      <p><strong>👻 Ghost:</strong> Empty Seat (🚫)</p>
    </div>

    <button v-if="isKing && gameStore.state?.phase === 'LOBBY'"
      :disabled="!canManifest"
      @click="gameStore.performAction('START_GAME', {})"
      class="btn-manifest">🚀 MANIFEST GAME</button>

    <div class="phase-badge" v-if="gameStore.state">🛰️ SYSTEM_PHASE: {{ gameStore.state.phase }}</div>

    <PlayerPanel v-if="selectedPlayerId" :playerId="selectedPlayerId" @close="selectedPlayerId = null" />
  </aside>
</template>

<style scoped>
.active-turn-glow {
  box-shadow: inset 0 0 15px rgba(46,204,113,0.4), 0 0 10px rgba(46,204,113,0.8);
  border-color: #2ecc71 !important;
  background: rgba(46,204,113,0.1) !important;
}
.root-admin { background: #9b59b6 !important; color: white !important; margin-top: -5px; }

/* ── THE KEY FIX ──────────────────────────────────────────────
   position: fixed  → floats above the board, unaffected by
                       any parent layout (no more flex centering
                       pushing it off-screen)
   right: 0         → RIGHT border sticks to the RIGHT edge of
                       the VIEWPORT at all times
   top/bottom: 0    → full height
──────────────────────────────────────────────────────────────── */
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 400px;
  z-index: 1000;

  background: rgba(10,10,10,0.92);
  color: #e0e0e0;
  padding: 15px;
  border-left: 1px solid #333;
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.sidebar-header { margin-bottom: 15px; }
.sidebar-header h3 { margin: 0 0 5px 0; color: #00ff00; }
.my-id { font-size: 0.8rem; color: #888; margin-bottom: 10px; }

.spectator-badge {
  background: #f39c12; color: black; font-weight: bold;
  text-align: center; padding: 5px; border-radius: 4px;
  margin-bottom: 10px; animation: pulse 2s infinite;
}
@keyframes pulse { 0%,100% { opacity:0.8; } 50% { opacity:1; } }

.btn-small {
  background: #333; color: white; border: 1px solid #555;
  padding: 5px 10px; border-radius: 4px; cursor: pointer; width: 100%;
  font-family: inherit;
}
.btn-small:hover { background: #444; border-color: #00ff00; }

.player-list { display: flex; flex-direction: column; gap: 5px; }
.player-row {
  background: rgba(255,255,255,0.03); border: 1px solid transparent;
  border-radius: 4px; transition: all 0.2s; min-height: 40px;
  display: flex; align-items: center;
}
.clickable-row { cursor: pointer; }
.clickable-row:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.3); }
.row-content { display: flex; align-items: center; width: 100%; padding: 8px; }

.btn-claim {
  width: 100%; height: 40px; background: transparent; color: #2ecc71;
  border: 1px dashed #2ecc71; font-family: inherit; font-weight: bold;
  cursor: pointer; border-radius: 4px;
}
.btn-claim:hover { background: rgba(46,204,113,0.2); }

.stat-icon { margin-right: 4px; font-size: 16px; }
.stat-data { margin-right: 8px; font-size: 12px; color: #bdc3c7; min-width: 45px; }
.player-name { margin-left: 5px; font-size: 13px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.settings-gear { margin-left: auto; font-size: 12px; opacity: 0; transition: opacity 0.2s; }
.clickable-row:hover .settings-gear { opacity: 1; }

.legend {
  margin-top: auto; margin-bottom: 15px;
  padding: 10px; background: rgba(255,255,255,0.05);
  border-radius: 4px; font-size: 11px; color: #aaa;
}
.legend p { margin: 3px 0; }

.btn-manifest {
  width: 100%; padding: 12px; background: #00ff00; color: black;
  border: none; font-weight: bold; cursor: pointer;
  margin-bottom: 10px; font-family: inherit;
}
.btn-manifest:hover:not(:disabled) { box-shadow: 0 0 15px #00ff00; }
.btn-manifest:disabled { filter: grayscale(1); opacity: 0.3; cursor: not-allowed; }

.phase-badge {
  font-size: 10px; background: #222; padding: 5px;
  border-radius: 3px; color: #aaa; text-align: center;
}
</style>