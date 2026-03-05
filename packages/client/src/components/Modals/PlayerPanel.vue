<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { useGameStore } from '../../stores/gameStore';
  import { COLOR_TO_EMOJI } from '../../utils/constants';

  const props = defineProps<{
    playerId: string | null;
  }>();

  const emit = defineEmits(['close']);

  const gameStore = useGameStore();

  // Get the specific player object we clicked on
  const player = computed(() => {
    return gameStore.state?.players.find((p: any) => p.id === props.playerId);
  });

  // Check if the local user looking at the screen is the Host (King)
  const isLocalHost = computed(() => {
    return gameStore.state?.players.find((p: any) => p.controllerId === gameStore.playerId)?.isHost;
  });

  // REAL LEGO BLOCK TOGGLE
  const agentBrain = computed({
    get: () => player.value?.agentType || 'HEURISTIC', // Read from Engine
    set: (newType: string) => { // Write to Engine
      if (!isLocalHost.value) return;
      gameStore.performAction('CONFIGURE_AGENT', {
        targetPlayerId: player.value.id,
        agentType: newType
      });
    }
  });


  const agentPrompt = ref('You are a ruthless capitalist playing Catan. You hoard sheep.');
  const agentDelay = ref(2000);

  // Action: Change the Controller Type
  const changeController = (type: 'HUMAN' | 'AGENT' | null) => {
    if (!isLocalHost.value) return;

    // SAFETY NET: Prevent the host from Ghosting themselves!
    if (type === null && player.value.controllerId === gameStore.playerId) {
      alert("You cannot Banish yourself! Give the Crown to someone else first.");
      return;
    }

    gameStore.performAction('TOGGLE_CONTROLLER', {
      targetPlayerId: player.value.id,
      controllerType: type
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

      <!-- MASTER TOGGLES -->
      <div class="master-toggles">
        <div class="toggle-group">
          <label>Driver (Controller):</label>
          <div class="radio-buttons" :class="{ 'disabled-group': !isLocalHost }">
            <button :class="{ active: player.controllerType === 'HUMAN' }" @click="changeController('HUMAN')">🧠 Human</button>
            <button :class="{ active: player.controllerType === 'AGENT' }" @click="changeController('AGENT')">🤖 Agent</button>
            <button :class="{ active: player.controllerType === null }" @click="changeController(null)">👻 Ghost</button>
          </div>
        </div>

        <div class="toggle-group">
          <label>Role (Permissions):</label>
          <div class="radio-buttons disabled-group">
            <button :class="{ active: player.isHost }">👑 Host</button>
            <button :class="{ active: !player.isHost }">👨‍🌾 Client</button>
          </div>
        </div>
      </div>

      <!-- COMMON PARAMETERS (A) -->
      <div class="parameter-section">
        <h3>Shared Vehicle Stats</h3>
        <div class="stats-grid">
          <div><strong>Victory Points:</strong> {{ player.victoryPoints }}</div>
          <div><strong>Cards in Hand:</strong> {{ typeof player.resources.total === 'number' ? player.resources.total : 'Visible' }}</div>
          <div><strong>Knights Played:</strong> {{ player.numPlayedKnights }}</div>
        </div>
      </div>

      <!-- CONDITIONAL PARAMETERS -->
      
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
      </div>

      <!-- GHOST STUFF -->
      <div v-if="player.controllerType === null" class="parameter-section specific-section ghost-bg">
        <h3>👻 Ghost Seat Configuration</h3>
        <p class="hint">This seat is empty. It cannot take turns until a Human joins or it is converted to an Agent.</p>
        <div class="form-row checkbox">
          <input type="checkbox" checked :disabled="!isLocalHost" />
          <label>Open to Public Matchmaking</label>
        </div>
      </div>

      <!-- FOOTER -->
      <div class="panel-footer">
        <button class="btn-close" @click="emit('close')">Close Panel</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed; inset: 0; background: rgba(0, 0, 0, 0.85);
  display: flex; align-items: center; justify-content: center; z-index: 9999;
  font-family: 'Courier New', Courier, monospace;
}
.panel-card {
  background: #1a1a1a; width: 600px; max-width: 95vw;
  border-radius: 8px; border: 1px solid #444; display: flex; flex-direction: column;
  color: #eee; box-shadow: 0 10px 40px rgba(0,0,0,0.8);
}
.panel-header { padding: 15px 20px; border-bottom: 3px solid #666; display: flex; justify-content: space-between; align-items: center; }
.panel-header h2 { margin: 0; font-size: 1.2rem; }
.connection-status { font-size: 0.8rem; color: #aaa; }
.master-toggles { padding: 15px 20px; background: #222; }
.toggle-group { margin-bottom: 10px; display: flex; align-items: center; justify-content: space-between;}
.radio-buttons { display: flex; gap: 5px; }
.radio-buttons button { background: #333; color: #888; border: 1px solid #555; padding: 5px 10px; border-radius: 4px; cursor: pointer; }
.radio-buttons button.active { background: #4caf50; color: white; border-color: #4caf50; font-weight: bold; }
.disabled-group { pointer-events: none; opacity: 0.6; }
.parameter-section { padding: 15px 20px; border-bottom: 1px solid #333; }
.parameter-section h3 { margin-top: 0; font-size: 1rem; color: #ccc; border-bottom: 1px dashed #555; padding-bottom: 5px; }
.stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 0.9rem; }
.specific-section { min-height: 150px; }
.human-bg { background: rgba(52, 152, 219, 0.05); }
.agent-bg { background: rgba(155, 89, 182, 0.05); }
.ghost-bg { background: rgba(149, 165, 166, 0.05); }
.form-row { display: flex; flex-direction: column; margin-bottom: 12px; }
.form-row.checkbox { flex-direction: row; align-items: center; gap: 10px; }
.form-row label { font-size: 0.8rem; color: #aaa; margin-bottom: 4px; text-transform: uppercase; }
input[type="number"], select, textarea { background: #000; color: #00ff00; border: 1px solid #555; padding: 8px; border-radius: 4px; font-family: inherit; }
input:disabled, select:disabled, textarea:disabled { opacity: 0.5; cursor: not-allowed; }
.hint { font-size: 0.8rem; color: #888; font-style: italic; }
.panel-footer { padding: 15px 20px; text-align: right; background: #222; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; }
.btn-close { background: #555; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; }
.btn-close:hover { background: #777; }
</style>