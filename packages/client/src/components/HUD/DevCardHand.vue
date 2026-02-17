<script setup lang="ts">
import { computed } from 'vue';
import { useGameStore } from '../../stores/gameStore';

const gameStore = useGameStore();

// Map types to visual icons
const cardMeta: Record<string, { icon: string }> = {
  KNIGHT: { icon: '🛡️' },
  MONOPOLY: { icon: '💰' },
  YEAR_OF_PLENTY: { icon: '🌱' },
  ROAD_BUILDING: { icon: '🛣️' },
  VICTORY_POINT: { icon: '🏆' }
};

const myDevCards = computed(() => {
  const me = gameStore.state?.players.find((p: any) => p.id === gameStore.playerId);
  return me?.devCards || [];
});

const canPlay = (card: any) => {
  // 1. Victory points are never "played", they are just counted.
  if (card.type === 'VICTORY_POINT') return false;

  // 2. Cannot play a card on the same turn it was bought.
  // 3. Cannot play more than one development card per turn.
  return (
    card.boughtTurn < gameStore.state.turnNumber && 
    !gameStore.state.playedDevCardThisTurn &&
    gameStore.state.currentPlayerId === gameStore.playerId
  );
};

const playCard = (card: any) => {
  if (!canPlay(card)) return;

  /**
   * TRIGGERING FROM HAND:
   * This sends 'PLAY_KNIGHT', 'PLAY_MONOPOLY', etc.
   * The Engine will catch this, remove the card from your hand, 
   * and change the 'state.phase' to trigger the ChoiceModals we built.
   */
  gameStore.performAction(`PLAY_${card.type}`, { cardId: card.id });
};
</script>

<template>
  <div class="dev-card-hand" v-if="myDevCards.length > 0">
    <div 
      v-for="card in myDevCards" 
      :key="card.id" 
      :class="['card', { 'disabled': !canPlay(card) }]"
      @click="playCard(card)"
    >
      <div class="card-icon">{{ cardMeta[card.type]?.icon || '❓' }}</div>
      <div class="card-label">{{ card.type.replace(/_/g, ' ') }}</div>
      
      <!-- Tooltip or helper for new cards -->
      <div v-if="card.boughtTurn === gameStore.state.turnNumber" class="new-tag">
        NEW
      </div>
    </div>
  </div>
</template>

<style scoped>
.dev-card-hand {
  position: fixed;
  bottom: 120px; /* Positioned above the Resource HUD */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 100;
}

.card {
  background: #34495e;
  padding: 12px;
  border-radius: 8px;
  width: 85px;
  text-align: center;
  cursor: pointer;
  border: 2px solid #bdc3c7;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}

.card:hover:not(.disabled) {
  transform: translateY(-15px);
  background: #2c3e50;
  border-color: #f1c40f;
}

.card.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  filter: grayscale(1);
}

.card-icon {
  font-size: 1.8rem;
  margin-bottom: 5px;
}

.card-label {
  font-size: 0.65rem;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  line-height: 1.1;
}

.new-tag {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #e74c3c;
  color: white;
  font-size: 0.5rem;
  padding: 2px 5px;
  border-radius: 4px;
  font-weight: bold;
}
</style>