<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useGameStore } from '../../stores/gameStore';
import { COLOR_TO_EMOJI } from '../../utils/constants';

const props = defineProps<{ playerId: string | null }>();
const emit  = defineEmits(['close']);
const gameStore = useGameStore();

const player      = computed(() => gameStore.state?.players.find((p: any) => p.id === props.playerId));
const isLocalHost = computed(() => gameStore.playerId === gameStore.state?.hostSessionId);

const AVAILABLE_COLORS = Object.keys(COLOR_TO_EMOJI);

const isColorTaken = (color: string) =>
  gameStore.state?.players.some((p: any) => p.color === color && p.id !== player.value?.id);

const setColor = (color: string) => {
  if (isColorTaken(color)) return;
  gameStore.performAction('CHANGE_COLOR', { targetSeatId: player.value.id, color });
};

const agentBrain = computed({
  get: () => player.value?.agentType || 'HEURISTIC',
  set: (newType: string) => {
    if (!isLocalHost.value) return;
    gameStore.performAction('CONFIGURE_AGENT', { targetPlayerId: player.value.id, agentType: newType });
  },
});

const changeController = (type: 'HUMAN' | 'AGENT' | null) => {
  if (!isLocalHost.value) return;
  if (type === null && player.value.controllerId === gameStore.playerId) {
    alert('You cannot Banish yourself!'); return;
  }
  gameStore.performAction('TOGGLE_CONTROLLER', { targetPlayerId: player.value.id, controllerType: type });
};

const removeSeat = () => {
  if (confirm('Are you sure you want to delete this seat entirely?')) {
    gameStore.performAction('REMOVE_SEAT', { targetSeatId: player.value.id });
    emit('close');
  }
};

// ── Timer settings ─────────────────────────────────────────────────────────
// Local copies so inputs feel instant; dispatched on change/blur.
const localTimerEnabled = ref(false);
const localTimeoutSec   = ref(60);

watch(player, (p) => {
  if (!p) return;
  localTimerEnabled.value = p.timerEnabled  ?? false;
  localTimeoutSec.value   = Math.round((p.turnTimeoutMs ?? 60_000) / 1000);
}, { immediate: true });

const saveTimerEnabled = (val: boolean) => {
  if (!isLocalHost.value) return;
  localTimerEnabled.value = val;
  gameStore.performAction('CONFIGURE_PLAYER', {
    targetSeatId: player.value.id,
    timerEnabled: val,
  });
};

const saveTimeoutSec = () => {
  if (!isLocalHost.value) return;
  const clamped = Math.max(5, Math.min(3600, localTimeoutSec.value || 60));
  localTimeoutSec.value = clamped;
  gameStore.performAction('CONFIGURE_PLAYER', {
    targetSeatId:  player.value.id,
    turnTimeoutMs: clamped * 1000,
  });
};
</script>

<template>
  <div v-if="player" class="modal-overlay" @click.self="emit('close')">
    <div class="panel-card">

      <!-- HEADER -->
      <div class="panel-header" :style="{ borderBottomColor: player.color }">
        <h2>{{ COLOR_TO_EMOJI[player.color] }} {{ player.name }}</h2>
        <div class="connection-status">
          <span v-if="player.controllerType === null">🚫 Ghost Seat</span>
          <span v-else-if="player.isOnline">🔗 Connected: {{ player.controllerId }}</span>
          <span v-else>⛓️‍💥 Waiting for Network Link</span>
        </div>
      </div>

      <!-- COLOR PICKER -->
      <div class="color-picker-section" v-if="isLocalHost || player.controllerId === gameStore.playerId">
        <label>Seat Color:</label>
        <div class="color-row">
          <button
            v-for="color in AVAILABLE_COLORS" :key="color"
            class="color-btn"
            :class="{ active: player.color === color, disabled: isColorTaken(color) }"
            @click="setColor(color)"
          >{{ COLOR_TO_EMOJI[color] }}</button>
        </div>
      </div>

      <!-- CONTROLLER TOGGLE -->
      <div class="master-toggles">
        <div class="toggle-group">
          <label>Driver (Controller):</label>
          <div class="radio-buttons" :class="{ 'disabled-group': !isLocalHost }">
            <button :class="{ active: player.controllerType === 'HUMAN' }" @click="changeController('HUMAN')">🧠 Human</button>
            <button :class="{ active: player.controllerType === 'AGENT' }" @click="changeController('AGENT')">🤖 Agent</button>
            <button :class="{ active: player.controllerType === null   }" @click="changeController(null)">👻 Ghost</button>
          </div>
        </div>
      </div>

      <!-- SCROLLABLE MIDDLE -->
      <div class="scrollable-content">

        <!-- SHARED STATS -->
        <div class="parameter-section">
          <h3>Shared Vehicle Stats</h3>
          <div class="stats-grid">
            <div><strong>Victory Points:</strong> {{ player.victoryPoints }}</div>
            <div><strong>Cards in Hand:</strong>  {{ typeof player.resources?.total === 'number' ? player.resources.total : 'Visible' }}</div>
            <div><strong>Knights Played:</strong> {{ player.numPlayedKnights }}</div>
          </div>
        </div>

        <!-- HUMAN CONFIG ─────────────────────────────── -->
        <div v-if="player.controllerType === 'HUMAN'" class="parameter-section specific-section human-bg">
          <h3>🧠 Human Configuration</h3>

          <div class="timer-block">
            <!-- Row: label + ON/OFF toggle -->
            <div class="timer-header">
              <span class="timer-label">Auto-Skip Timer</span>
              <button
                class="timer-toggle"
                :class="localTimerEnabled ? 'timer-on' : 'timer-off'"
                :disabled="!isLocalHost"
                @click="saveTimerEnabled(!localTimerEnabled)"
                :title="localTimerEnabled ? 'Timer ON — click to disable' : 'Timer OFF — click to enable'"
              >{{ localTimerEnabled ? '⏱ ON' : '⏸ OFF' }}</button>
            </div>

            <!-- Row: seconds input (greyed when off) -->
            <div class="form-row" :class="{ 'row-disabled': !localTimerEnabled }">
              <label>Timeout (seconds):</label>
              <div class="timeout-row">
                <input
                  type="number"
                  v-model.number="localTimeoutSec"
                  min="5" max="3600"
                  :disabled="!isLocalHost || !localTimerEnabled"
                  @blur="saveTimeoutSec"
                  @keydown.enter.prevent="saveTimeoutSec"
                />
                <span class="timeout-hint">
                  <template v-if="localTimerEnabled">
                    Player auto-skipped after {{ localTimeoutSec }}s of inactivity
                  </template>
                  <template v-else>
                    Disabled — player will never be auto-skipped
                  </template>
                </span>
              </div>
            </div>
          </div>

          <div class="form-row checkbox">
            <input type="checkbox" :disabled="!isLocalHost" />
            <label>Allow Hotseat Control (Host can move for them)</label>
          </div>

          <div class="future-placeholder">[ Future Human Features Here ]</div>
        </div>

        <!-- AGENT CONFIG ─────────────────────────────── -->
        <div v-if="player.controllerType === 'AGENT'" class="parameter-section specific-section agent-bg">
          <h3>🤖 Agentic Configuration</h3>
          <div class="form-row">
            <label>Brain Engine:</label>
            <select v-model="agentBrain" :disabled="!isLocalHost">
              <option value="HEURISTIC">Local Heuristic (Fast/Dumb)</option>
              <option value="LLM">OpenAI / Anthropic (Smart/Slow)</option>
              <option value="WEBHOOK">Remote Webhook (Custom RL)</option>
            </select>
          </div>
          <div class="future-placeholder">[ Future Agentic Features Here ]</div>
        </div>

        <!-- GHOST CONFIG ─────────────────────────────── -->
        <div v-if="player.controllerType === null" class="parameter-section specific-section ghost-bg">
          <h3>👻 Ghost Seat Configuration</h3>
          <p class="hint">This seat is empty. It cannot take turns until a Human joins or it is converted to an Agent.</p>
          <div class="form-row checkbox">
            <input type="checkbox" checked :disabled="!isLocalHost" />
            <label>Open to Public Matchmaking</label>
          </div>
          <div class="future-placeholder">[ Future Ghost Features Here ]</div>
        </div>

      </div><!-- /scrollable-content -->

      <!-- FOOTER -->
      <div class="panel-footer">
        <button v-if="isLocalHost && player.controllerId !== gameStore.playerId" class="btn-danger" @click="removeSeat">🗑️ Delete Seat</button>
        <span v-else></span>
        <button class="btn-close" @click="emit('close')">Close</button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.85);
  display: flex; align-items: center; justify-content: center;
  z-index: 9999; font-family: monospace;
}
.panel-card {
  background: #1a1a1a; width: 600px; max-width: 95vw;
  height: 85vh; max-height: 900px;
  border-radius: 8px; border: 1px solid #444;
  display: flex; flex-direction: column; color: #eee; overflow: hidden;
}

/* HEADER */
.panel-header { padding: 15px 20px; border-bottom: 3px solid #666; display: flex; justify-content: space-between; align-items: center; }
.panel-header h2 { margin: 0; font-size: 1.2rem; }
.connection-status { font-size: 0.8rem; color: #aaa; }

/* COLOR */
.color-picker-section { padding: 10px 20px; background: #2a2a2a; }
.color-picker-section label { font-size: 0.8rem; color: #aaa; display: block; margin-bottom: 5px; }
.color-row { display: flex; gap: 8px; font-size: 24px; }
.color-btn { background: transparent; border: none; padding: 0; cursor: pointer; transition: transform 0.2s, filter 0.2s; }
.color-btn.active { transform: scale(1.4); filter: drop-shadow(0 0 6px rgba(255,255,255,0.6)); }
.color-btn.disabled { opacity: 0.2; cursor: not-allowed; filter: grayscale(100%); }

/* CONTROLLER */
.master-toggles { padding: 15px 20px; background: #222; border-bottom: 1px solid #333; }
.toggle-group { display: flex; align-items: center; justify-content: space-between; }
.radio-buttons { display: flex; gap: 5px; }
.radio-buttons button { background: #333; color: #888; border: 1px solid #555; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-family: inherit; }
.radio-buttons button.active { background: #4caf50; color: white; border-color: #4caf50; }
.disabled-group { opacity: 0.5; pointer-events: none; }

/* SCROLL */
.scrollable-content { flex: 1; overflow-y: auto; padding-bottom: 20px; }
.scrollable-content::-webkit-scrollbar { width: 8px; }
.scrollable-content::-webkit-scrollbar-track { background: #1a1a1a; }
.scrollable-content::-webkit-scrollbar-thumb { background: #444; border-radius: 4px; }
.scrollable-content::-webkit-scrollbar-thumb:hover { background: #666; }

/* SECTIONS */
.parameter-section { padding: 15px 20px; border-bottom: 1px solid #333; }
.parameter-section h3 { margin-top: 0; font-size: 1rem; color: #ccc; border-bottom: 1px dashed #555; padding-bottom: 5px; }
.stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 0.9rem; }
.human-bg { background: rgba(52,152,219,0.05); }
.agent-bg { background: rgba(155,89,182,0.05); }
.ghost-bg { background: rgba(149,165,166,0.05); }
.form-row { display: flex; flex-direction: column; margin-bottom: 12px; }
.form-row.checkbox { flex-direction: row; align-items: center; gap: 10px; }
.form-row label { font-size: 0.8rem; color: #aaa; margin-bottom: 4px; text-transform: uppercase; }
.row-disabled { opacity: 0.4; pointer-events: none; }
input[type="number"], select, textarea { background: #000; color: #00ff00; border: 1px solid #555; padding: 8px; border-radius: 4px; font-family: inherit; }
input:disabled, select:disabled, textarea:disabled { opacity: 0.4; cursor: not-allowed; }
.hint { font-size: 0.8rem; color: #888; font-style: italic; }
.future-placeholder { height: 120px; display: flex; align-items: center; justify-content: center; color: #555; border: 1px dashed #444; margin-top: 20px; font-size: 0.85rem; }

/* ── TIMER BLOCK ─────────────────────────────────────────────── */
.timer-block {
  background: rgba(0,0,0,0.25);
  border: 1px solid #2a2a2a;
  border-radius: 6px;
  padding: 12px 14px;
  margin-bottom: 14px;
}
.timer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.timer-label {
  font-size: 0.85rem;
  color: #aaa;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.timer-toggle {
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 4px 16px;
  border-radius: 20px;
  border: 1px solid #555;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
  min-width: 80px;
  text-align: center;
}
.timer-on  { background: #1a3a1a; color: #2ecc71; border-color: #2ecc71; }
.timer-off { background: #2a2a2a; color: #666;    border-color: #444;    }
.timer-toggle:disabled  { opacity: 0.4; cursor: not-allowed; }
.timer-toggle:not(:disabled):hover { filter: brightness(1.25); }

.timeout-row {
  display: flex;
  align-items: center;
  gap: 12px;
}
.timeout-row input[type="number"] { width: 80px; }
.timeout-hint { font-size: 0.75rem; color: #666; font-style: italic; }

/* FOOTER */
.panel-footer { display: flex; justify-content: space-between; padding: 15px 20px; background: #222; border-top: 1px solid #444; }
.btn-close  { background: #555; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; font-family: inherit; }
.btn-danger { background: #e74c3c; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; font-family: inherit; }
</style>