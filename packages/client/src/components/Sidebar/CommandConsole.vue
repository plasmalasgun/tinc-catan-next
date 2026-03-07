<script setup lang="ts">
import { ref, watch, nextTick } from 'vue';
import { useGameStore } from '../../stores/gameStore';

const props = defineProps<{ isOpen: boolean }>();
const gameStore = useGameStore();

const rawJson = ref('{\n  "type": "ROLL_DICE",\n  "payload": {}\n}');
const logsContainer = ref<HTMLElement | null>(null);

// Auto-scroll the console to the bottom whenever a new log arrives
watch(() => gameStore.logs.length, async () => {
  await nextTick();
  if (logsContainer.value) {
    logsContainer.value.scrollTop = logsContainer.value.scrollHeight;
  }
});

const sendRawAction = () => {
  if (!rawJson.value.trim()) return;

  try {
    const action = JSON.parse(rawJson.value);
    
    if (!action.type) {
      throw new Error("JSON must include a 'type' property.");
    }
    
    // Execute the action (Store will automatically log the outgoing request)
    gameStore.performAction(action.type, action.payload || {});
    
    // Reset the input for the next command
    rawJson.value = '{\n  "type": "",\n  "payload": {}\n}';

  } catch (e: any) {
    // If they type bad JSON, print the error directly into the console
    gameStore.addLocalLog(`SYNTAX ERROR: ${e.message}`, 'ERROR');
  }
};

const formatTime = (ts: number) => {
  const d = new Date(ts);
  return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}`;
};
</script>

<template>
  <aside class="quake-console" :class="{ 'is-open': isOpen }">
    <div class="console-header">
      <h3>> DEV_CONSOLE</h3>
      <span class="hint">Toggle with [TAB]</span>
    </div>

    <!-- TERMINAL OUTPUT -->
    <div class="logs-container" ref="logsContainer">
      <div v-for="log in gameStore.logs" :key="log.id" class="log-entry" :class="log.type.toLowerCase()">
        <span class="timestamp">[{{ formatTime(log.timestamp) }}]</span>
        <span class="log-type">[{{ log.type }}]</span>
        <span class="message">{{ log.message }}</span>
      </div>
    </div>

    <!-- TERMINAL INPUT -->
    <div class="input-area">
      <textarea 
        v-model="rawJson" 
        rows="4" 
        placeholder="Enter JSON command here..."
        @keydown.enter.exact.prevent="sendRawAction"
      ></textarea>
      <div class="input-footer">
        <span class="help-text">Press ENTER to submit.</span>
        <button @click="sendRawAction">EXECUTE</button>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.quake-console {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 400px;
  background: rgba(15, 15, 15, 0.95);
  border-right: 2px solid #333;
  color: #00ff00;
  font-family: 'Courier New', Courier, monospace;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  transform: translateX(-100%);
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 10px 0 30px rgba(0,0,0,0.8);
}

.quake-console.is-open {
  transform: translateX(0);
}

.console-header {
  padding: 15px;
  background: #111;
  border-bottom: 1px solid #333;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.console-header h3 { margin: 0; font-size: 1.1rem; text-shadow: 0 0 5px #00ff00; }
.hint { color: #555; font-size: 0.7rem; }

.logs-container {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* Scrollbar styling for a terminal feel */
.logs-container::-webkit-scrollbar { width: 8px; }
.logs-container::-webkit-scrollbar-track { background: #111; }
.logs-container::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }

.log-entry { font-size: 0.8rem; line-height: 1.3; word-wrap: break-word; }
.timestamp { color: #555; margin-right: 6px; }
.log-type { margin-right: 6px; font-weight: bold; }

/* Log Colors */
.log-entry.system { color: #f1c40f; }
.log-entry.action { color: #3498db; }
.log-entry.client { color: #00ff00; }
.log-entry.error { color: #e74c3c; text-shadow: 0 0 5px rgba(231, 76, 60, 0.5); }

.input-area {
  padding: 15px;
  background: #0a0a0a;
  border-top: 1px solid #333;
}

textarea {
  width: 100%;
  background: #000;
  color: #00ff00;
  border: 1px solid #333;
  padding: 10px;
  font-family: inherit;
  font-size: 0.85rem;
  resize: none;
  outline: none;
}
textarea:focus { border-color: #00ff00; box-shadow: inset 0 0 5px rgba(0,255,0,0.2); }

.input-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.help-text { font-size: 0.7rem; color: #555; }

button {
  background: #222;
  color: #00ff00;
  border: 1px solid #00ff00;
  padding: 6px 15px;
  cursor: pointer;
  font-family: inherit;
  font-weight: bold;
}
button:hover { background: #00ff00; color: #000; }
</style>