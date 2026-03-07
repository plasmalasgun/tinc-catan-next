<script setup lang="ts">
import { computed } from 'vue';
import { useGameStore } from '../../stores/gameStore';
import { COLOR_TO_EMOJI } from '../../utils/constants';

const props = defineProps<{ playerId: string | null; }>();
const emit = defineEmits(['close']);
const gameStore = useGameStore();

const player = computed(() => gameStore.state?.players.find((p: any) => p.id === props.playerId));
const isLocalHost = computed(() => gameStore.playerId === gameStore.state?.hostSessionId);

const AVAILABLE_COLORS = Object.keys(COLOR_TO_EMOJI);

const isColorTaken = (color: string) => {
  return gameStore.state?.players.some((p: any) => p.color === color && p.id !== player.value.id);
};

const setColor = (color: string) => {
  if (isColorTaken(color)) return;
  gameStore.performAction('CHANGE_COLOR', { targetSeatId: player.value.id, color });
};

const agentBrain = computed({
  get: () => player.value?.agentType || 'HEURISTIC',
  set: (newType: string) => {
    if (!isLocalHost.value) return;
    gameStore.performAction('CONFIGURE_AGENT', { targetPlayerId: player.value.id, agentType: newType });
  }
});

const changeController = (type: 'HUMAN' | 'AGENT' | null) => {
  if (!isLocalHost.value) return;
  if (type === null && player.value.controllerId === gameStore.playerId) {
    alert("You cannot Banish yourself!"); return;
  }
  gameStore.performAction('TOGGLE_CONTROLLER', { targetPlayerId: player.value.id, controllerType: type });
};

const removeSeat = () => {
  if (confirm("Are you sure you want to delete this seat entirely?")) {
    gameStore.performAction('REMOVE_SEAT', { targetSeatId: player.value.id });
    emit('close');
  }
};
</script>

<template>
  <div v-if="player" class="modal-overlay" @click.self="emit('close')">
    <div class="panel-card">
      
      <!-- HEADER (Fixed at top) -->
      <div class="panel-header" :style="{ borderBottomColor: player.color }">
        <h2>{{ COLOR_TO_EMOJI[player.color] }} {{ player.name }}</h2>
        <div class="connection-status">
          <span v-if="player.controllerType === null">🚫 Ghost Seat</span>
          <span v-else-if="player.isOnline">🔗 Connected: {{ player.controllerId }}</span>
          <span v-else>⛓️‍💥 Waiting for Network Link</span>
        </div>
      </div>

      <!-- COLOR PICKER (Fixed at top) -->
      <div class="color-picker-section" v-if="isLocalHost || player.controllerId === gameStore.playerId">
        <label>Seat Color:</label>
        <div class="color-row">
          <button 
            v-for="color in AVAILABLE_COLORS" :key="color"
            class="color-btn" 
            :class="{ active: player.color === color, disabled: isColorTaken(color) }"
            @click="setColor(color)"
          >
            {{ COLOR_TO_EMOJI[color] }}
          </button>
        </div>
      </div>

      <!-- MASTER TOGGLES (Fixed at top) -->
      <div class="master-toggles">
        <div class="toggle-group">
          <label>Driver (Controller):</label>
          <div class="radio-buttons" :class="{ 'disabled-group': !isLocalHost }">
            <button :class="{ active: player.controllerType === 'HUMAN' }" @click="changeController('HUMAN')">🧠 Human</button>
            <button :class="{ active: player.controllerType === 'AGENT' }" @click="changeController('AGENT')">🤖 Agent</button>
            <button :class="{ active: player.controllerType === null }" @click="changeController(null)">👻 Ghost</button>
          </div>
        </div>
      </div>

      <!-- ========================================== -->
      <!-- SCROLLABLE MIDDLE SECTION (The "Real Estate") -->
      <!-- ========================================== -->
      <div class="scrollable-content">
        
        <!-- COMMON PARAMETERS -->
        <div class="parameter-section">
          <h3>Shared Vehicle Stats</h3>
          <div class="stats-grid">
            <div><strong>Victory Points:</strong> {{ player.victoryPoints }}</div>
            <div><strong>Cards in Hand:</strong> {{ typeof player.resources.total === 'number' ? player.resources.total : 'Visible' }}</div>
            <div><strong>Knights Played:</strong> {{ player.numPlayedKnights }}</div>
          </div>
        </div>

        <!-- HUMAN STUFF -->
        <div v-if="player.controllerType === 'HUMAN'" class="parameter-section specific-section human-bg">
          <h3>🧠 Human Configuration</h3>
          <div class="form-row">
            <label>Turn Timer (seconds):</label>
            <input type="number" value="60" :disabled="!isLocalHost" />
          </div>
          <div class="form-row checkbox">
            <input type="checkbox" :disabled="!isLocalHost" />
            <label>Allow Hotseat Control (Host can move for them)</label>
          </div>
          
          <!-- Mocking empty space to show the scrollbar working -->
          <div style="height: 300px; display: flex; align-items: center; justify-content: center; color: #555; border: 1px dashed #444; margin-top: 20px;">[ Future Human Features Here ]
          </div>
        </div>

        <!-- AGENT STUFF -->
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
          <div class="form-row" v-if="agentBrain === 'LLM'">
            <label>System Prompt / Persona:</label>
            <textarea v-model="agentPrompt" rows="3" :disabled="!isLocalHost"></textarea>
          </div>
          <div class="form-row">
            <label>Action Delay (ms):</label>
            <input type="range" min="0" max="5000" step="500" v-model="agentDelay" :disabled="!isLocalHost" />
            <span>{{ agentDelay }}ms</span>
          </div>

          <!-- Mocking empty space to show the scrollbar working -->
          <div style="height: 300px; display: flex; align-items: center; justify-content: center; color: #555; border: 1px dashed #444; margin-top: 20px;">
            [ Future Agentic Features Here ]
          </div>
        </div>

        <!-- GHOST STUFF -->
        <div v-if="player.controllerType === null" class="parameter-section specific-section ghost-bg">
          <h3>👻 Ghost Seat Configuration</h3>
          <p class="hint">This seat is empty. It cannot take turns until a Human joins or it is converted to an Agent.</p>
          <div class="form-row checkbox">
            <input type="checkbox" checked :disabled="!isLocalHost" />
            <label>Open to Public Matchmaking</label>
          </div>
          
          <!-- Mocking empty space to show the scrollbar working -->
          <div style="height: 300px; display: flex; align-items: center; justify-content: center; color: #555; border: 1px dashed #444; margin-top: 20px;">
            [ Future Ghost Features Here ]
          </div>
        </div>

      </div> <!-- End of scrollable-content -->

      <!-- FOOTER (Fixed at bottom) -->
      <div class="panel-footer">
        <button v-if="isLocalHost && player.controllerId !== gameStore.playerId" class="btn-danger" @click="removeSeat">🗑️ Delete Seat</button>
        <span v-else></span> <!-- Spacer to push close button right -->
        <button class="btn-close" @click="emit('close')">Close</button>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* OVERLAY & CARD SIZING */
.modal-overlay { 
  position: fixed; inset: 0; background: rgba(0,0,0,0.85); 
  display: flex; align-items: center; justify-content: center; z-index: 9999; font-family: monospace; 
}

.panel-card { 
  background: #1a1a1a; 
  width: 600px; 
  max-width: 95vw; 
  height: 85vh;          /* SCROLLBAR FIX: Takes up 85% of screen height */
  max-height: 900px;     /* Cap the height on giant monitors */
  border-radius: 8px; 
  border: 1px solid #444; 
  display: flex;         /* Allows us to flex the middle section */
  flex-direction: column; 
  color: #eee; 
  overflow: hidden;      /* Prevents the card itself from getting an ugly outer scrollbar */
}

/* FIXED TOP SECTIONS */
.panel-header { padding: 15px 20px; border-bottom: 3px solid #666; display: flex; justify-content: space-between; align-items: center; }
.panel-header h2 { margin: 0; font-size: 1.2rem; }
.connection-status { font-size: 0.8rem; color: #aaa; }

.color-picker-section { padding: 10px 20px; background: #2a2a2a; }
.color-picker-section label { font-size: 0.8rem; color: #aaa; display: block; margin-bottom: 5px;}
.color-row { display: flex; gap: 8px; font-size: 24px; }
.color-btn { background: transparent; border: none; padding: 0; cursor: pointer; transition: transform 0.2s, filter 0.2s; }
.color-btn.active { transform: scale(1.4); filter: drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.6)); }
.color-btn.disabled { opacity: 0.2; cursor: not-allowed; filter: grayscale(100%); }

.master-toggles { padding: 15px 20px; background: #222; border-bottom: 1px solid #333; }
.toggle-group { display: flex; align-items: center; justify-content: space-between;}
.radio-buttons { display: flex; gap: 5px; }
.radio-buttons button { background: #333; color: #888; border: 1px solid #555; padding: 5px 10px; border-radius: 4px; cursor: pointer; }
.radio-buttons button.active { background: #4caf50; color: white; border-color: #4caf50; }

/* THE MAGIC SCROLLABLE MIDDLE */
.scrollable-content {
  flex: 1;               /* Tells this div to stretch and fill all remaining space */
  overflow-y: auto;      /* Adds a scrollbar ONLY to this div if contents overflow */
  padding-bottom: 20px;
}

/* Customizing the Scrollbar to look cool and dark */
.scrollable-content::-webkit-scrollbar { width: 8px; }
.scrollable-content::-webkit-scrollbar-track { background: #1a1a1a; }
.scrollable-content::-webkit-scrollbar-thumb { background: #444; border-radius: 4px; }
.scrollable-content::-webkit-scrollbar-thumb:hover { background: #666; }

/* CONTENT STYLES INSIDE SCROLL AREA */
.parameter-section { padding: 15px 20px; border-bottom: 1px solid #333; }
.parameter-section h3 { margin-top: 0; font-size: 1rem; color: #ccc; border-bottom: 1px dashed #555; padding-bottom: 5px; }
.stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 0.9rem; }
.human-bg { background: rgba(52, 152, 219, 0.05); }
.agent-bg { background: rgba(155, 89, 182, 0.05); }
.ghost-bg { background: rgba(149, 165, 166, 0.05); }
.form-row { display: flex; flex-direction: column; margin-bottom: 12px; }
.form-row.checkbox { flex-direction: row; align-items: center; gap: 10px; }
.form-row label { font-size: 0.8rem; color: #aaa; margin-bottom: 4px; text-transform: uppercase; }
input[type="number"], select, textarea { background: #000; color: #00ff00; border: 1px solid #555; padding: 8px; border-radius: 4px; font-family: inherit; }
input:disabled, select:disabled, textarea:disabled { opacity: 0.5; cursor: not-allowed; }
.hint { font-size: 0.8rem; color: #888; font-style: italic; }

/* FIXED BOTTOM FOOTER */
.panel-footer { 
  display: flex; 
  justify-content: space-between; 
  padding: 15px 20px; 
  background: #222; 
  border-top: 1px solid #444; /* Clean edge above the footer */
}
.btn-close { background: #555; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; }
.btn-danger { background: #e74c3c; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; }
</style>