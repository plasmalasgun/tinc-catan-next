<script setup lang="ts">
  import { computed } from 'vue';
  import { getAveragePixelCoords } from '../../utils/layout';

  const props = defineProps<{
    id: string;
    coords: {q: number, r: number}[];
    building?: { type: string, playerId: string };
    canBuild?: boolean;
  }>();

  const emit = defineEmits(['click']);

  const pos = computed(() => getAveragePixelCoords(props.coords));

  const color = computed(() => {
    if (!props.building) return 'transparent';
    return props.building.playerId === 'p1' ? '#e74c3c' : '#3498db'; // Red vs Blue
  });
</script>

<template>
  <g :transform="`translate(${pos.x}, ${pos.y})`" 
     @click="emit('click', props.id)"
     class="intersection-node">
    
    <!-- Invisible Hitbox for clicking -->
    <circle r="12" fill="transparent" class="hitbox" />
    
    <!-- The Actual Building -->
    <rect v-if="building?.type === 'SETTLEMENT'" 
          x="-6" y="-6" width="12" height="12" :fill="color" stroke="white" />
    
    <circle v-else-if="building?.type === 'CITY'" 
            r="8" :fill="color" stroke="white" />

    <!-- Ghost indicator for building placement -->
    <circle v-else-if="canBuild" 
            r="6" fill="rgba(255,255,255,0.5)" class="ghost" />
  </g>
</template>

<style scoped>
  .intersection-node { cursor: pointer; }
  .hitbox:hover + .ghost { fill: rgba(255,255,255,0.8); }
</style>