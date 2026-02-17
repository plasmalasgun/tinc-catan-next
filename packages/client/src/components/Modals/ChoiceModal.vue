<script setup lang="ts">
import { ref, computed } from 'vue';
import { useGameStore } from '../../stores/gameStore';
import { RESOURCE_TYPES } from '../../utils/constants';

const gameStore = useGameStore();
const phase = computed(() => gameStore.state?.phase);

// Year of Plenty Local State
const yopChoices = ref({ brick: 0, wood: 0, wheat: 0, sheep: 0, ore: 0 });
const yopTotal = computed(() => Object.values(yopChoices.value).reduce((a, b) => a + b, 0));

// Monopoly Local State
const monopolyRes = ref('');

const submitYop = () => {
  if (yopTotal.value !== 2) return;
  gameStore.performAction('YEAR_OF_PLENTY_CHOICE', { resources: yopChoices.value });
};

const submitMonopoly = (res: string) => {
  gameStore.performAction('MONOPOLY_CHOICE', { resourceType: res });
};
</script>

<template>
  <div v-if="phase === 'YEAR_OF_PLENTY' || phase === 'MONOPOLY'" class="modal-overlay">
    <div class="choice-card">
      
      <!-- Year of Plenty View -->
      <div v-if="phase === 'YEAR_OF_PLENTY'">
        <h3>Year of Plenty</h3>
        <p>Pick 2 resources from the bank</p>
        <div class="resource-grid">
          <div v-for="(info, key) in RESOURCE_TYPES" :key="key" class="choice-item">
            <span class="icon">{{ info.icon }}</span>
            <div class="counter">
              <button @click="yopChoices[key]--" :disabled="yopChoices[key] <= 0">-</button>
              <span>{{ yopChoices[key] }}</span>
              <button @click="yopChoices[key]++" :disabled="yopTotal >= 2">+</button>
            </div>
          </div>
        </div>
        <button class="btn-primary" :disabled="yopTotal !== 2" @click="submitYop">Take Resources</button>
      </div>

      <!-- Monopoly View -->
      <div v-if="phase === 'MONOPOLY'">
        <h3>Monopoly</h3>
        <p>Pick a resource to take from ALL players</p>
        <div class="resource-grid">
          <button v-for="(info, key) in RESOURCE_TYPES" 
                  :key="key" 
                  class="monopoly-btn"
                  @click="submitMonopoly(key)">
            <span class="icon">{{ info.icon }}</span>
            <label>{{ key }}</label>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
  .modal-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.85);
  display: flex; align-items: center; justify-content: center; z-index: 2000;
  }
  .choice-card {
  background: #2c3e50; padding: 30px; border-radius: 12px; color: white; text-align: center;
  }
  .resource-grid { display: flex; gap: 15px; margin: 20px 0; justify-content: center; }
  .choice-item { display: flex; flex-direction: column; align-items: center; gap: 10px; }
  .counter { display: flex; align-items: center; gap: 10px; background: #34495e; padding: 5px; border-radius: 4px; }
  .monopoly-btn {
  background: #34495e; border: 2px solid transparent; padding: 15px; border-radius: 8px;
  cursor: pointer; color: white; display: flex; flex-direction: column; transition: 0.2s;
  }
  .monopoly-btn:hover { border-color: #f1c40f; background: #2c3e50; }
  .icon { font-size: 2rem; }
  .btn-primary { width: 100%; padding: 10px; background: #27ae60; color: white; border: none; border-radius: 4px; cursor: pointer; }
  .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
</style>