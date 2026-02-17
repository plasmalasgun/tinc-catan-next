<script setup lang="ts">
import { ref, computed } from 'vue';
import { useGameStore } from '../../stores/gameStore';
import { RESOURCE_TYPES } from '../../utils/constants';

const gameStore = useGameStore();

// Local state for drafting a new trade
const offering = ref({ brick: 0, wood: 0, wheat: 0, sheep: 0, ore: 0 });
const requesting = ref({ brick: 0, wood: 0, wheat: 0, sheep: 0, ore: 0 });

const activeTrade = computed(() => gameStore.state?.activeTrade);
const isProposer = computed(() => activeTrade.value?.senderId === gameStore.playerId);
const hasResponded = computed(() => activeTrade.value?.responses[gameStore.playerId] !== 'PENDING');

// Actions
const propose = () => {
  gameStore.performAction('PROPOSE_TRADE', { 
    offering: { ...offering.value }, 
    requesting: { ...requesting.value } 
  });
};

const respond = (accept: boolean) => {
  gameStore.performAction('REVIEW_TRADE', { accept });
};

const finalize = (partnerId: string) => {
  gameStore.performAction('EXECUTE_TRADE', { partnerId });
};

const cancel = () => {
  gameStore.performAction('CANCEL_TRADE', {}); // Logic to clear activeTrade
};
</script>

<template>
  <div v-if="activeTrade || gameStore.isTrading" class="modal-overlay">
    <div class="trade-card">
      
      <!-- MODE A: Drafting a new trade -->
      <div v-if="!activeTrade" class="draft-view">
        <h3>Propose a Trade</h3>
        <div class="trade-cols">
          <div class="col">
            <label>You Give</label>
            <div v-for="(info, res) in RESOURCE_TYPES" :key="res" class="counter">
              <span>{{ info.icon }}</span>
              <input type="number" v-model.number="offering[res]" min="0" />
            </div>
          </div>
          <div class="col">
            <label>You Get</label>
            <div v-for="(info, res) in RESOURCE_TYPES" :key="res" class="counter">
              <span>{{ info.icon }}</span>
              <input type="number" v-model.number="requesting[res]" min="0" />
            </div>
          </div>
        </div>
        <div class="actions">
          <button @click="propose" class="btn-primary">Send Offer</button>
          <button @click="gameStore.isTrading = false">Cancel</button>
        </div>
      </div>

      <!-- MODE B: Receiving an offer -->
      <div v-else-if="!isProposer" class="respond-view">
        <h3>Trade Offer from {{ activeTrade.senderId }}</h3>
        <p>They give: <span v-for="(v, k) in activeTrade.offering">{{ v > 0 ? `${v} ${k} ` : '' }}</span></p>
        <p>They want: <span v-for="(v, k) in activeTrade.requesting">{{ v > 0 ? `${v} ${k} ` : '' }}</span></p>
        
        <div v-if="!hasResponded" class="actions">
          <button @click="respond(true)" class="btn-success">Accept</button>
          <button @click="respond(false)" class="btn-danger">Decline</button>
        </div>
        <div v-else class="status">Waiting for proposer to finalize...</div>
      </div>

      <!-- MODE C: Waiting for responses (Proposer View) -->
      <div v-else class="finalize-view">
        <h3>Your Trade Offer</h3>
        <div class="response-list">
          <div v-for="(status, pId) in activeTrade.responses" :key="pId" class="response-row">
            <span>{{ pId }}: <strong>{{ status }}</strong></span>
            <button v-if="status === 'ACCEPTED'" @click="finalize(pId)" class="btn-small">Finalize</button>
          </div>
        </div>
        <button @click="cancel" class="btn-danger">Withdraw Offer</button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.trade-card {
  background: #2c3e50;
  padding: 30px;
  border-radius: 8px;
  color: white;
  min-width: 400px;
  box-shadow: 0 10px 50px rgba(0,0,0,0.5);
}
.trade-cols { display: flex; gap: 40px; margin-bottom: 20px; }
.counter { display: flex; align-items: center; gap: 10px; margin-bottom: 5px; }
.counter input { width: 50px; background: #34495e; border: none; color: white; padding: 5px; }
.actions { display: flex; gap: 10px; margin-top: 20px; }
button { padding: 10px 20px; border: none; cursor: pointer; border-radius: 4px; font-weight: bold; }
.btn-primary { background: #3498db; color: white; }
.btn-success { background: #2ecc71; color: white; }
.btn-danger { background: #e74c3c; color: white; }
</style>