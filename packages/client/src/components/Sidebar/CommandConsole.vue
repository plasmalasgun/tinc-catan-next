<script setup>
import { ref } from 'vue';
import { useGameStore } from '../../stores/gameStore';

const gameStore = useGameStore();
const rawJson = ref('{\n  "type": "ROLL_DICE",\n  "payload": {}\n}');
const lastResponse = ref(null);

const sendRawAction = () => {
  try {
    const action = JSON.parse(rawJson.value);
    gameStore.performAction(action.type, action.payload);
    lastResponse.value = "Sent successfully";
  } catch (e) {
    lastResponse.value = "Error: Invalid JSON";
  }
};
</script>

<template>
  <div class="command-console">
    <h3>Agentic Console</h3>
    <textarea v-model="rawJson" rows="5"></textarea>
    <div class="actions">
      <button @click="sendRawAction">Execute API Command</button>
    </div>
    <div v-if="lastResponse" class="response">{{ lastResponse }}</div>
  </div>
</template>

<style scoped>
.command-console {
  background: #1e1e1e;
  padding: 15px;
  border-top: 2px solid #444;
  color: #00ff00; /* Matrix/Hacker green */
  font-family: monospace;
}
textarea {
  width: 100%;
  background: #000;
  color: #00ff00;
  border: 1px solid #333;
  font-family: monospace;
  font-size: 11px;
}
button {
  background: #333;
  color: white;
  border: 1px solid #555;
  cursor: pointer;
  margin-top: 5px;
}
.response { font-size: 10px; color: #aaa; margin-top: 5px; }
</style>