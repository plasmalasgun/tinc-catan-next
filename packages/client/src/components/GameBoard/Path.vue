<script setup lang="ts">
import { computed } from 'vue';
import { getAveragePixelCoords } from '../../utils/layout';

const props = defineProps<{
  id: string;
  coords: {q: number, r: number}[];
  road?: { playerId: string };
}>();

const emit = defineEmits(['click']);

// For a path (edge), we need the midpoint to rotate a line, 
// but it's easier to just draw a line between the two intersections.
// For now, we'll use a simple circle/indicator at the midpoint.
const pos = computed(() => getAveragePixelCoords(props.coords));
</script>

<template>
  <g :transform="`translate(${pos.x}, ${pos.y})`" 
     @click="emit('click', props.id)"
     class="path-node">
    
    <rect v-if="road" 
          x="-10" y="-3" width="20" height="6" 
          :fill="road.playerId === 'p1' ? '#e74c3c' : '#3498db'" />
    
    <circle v-else r="4" fill="rgba(255,255,255,0.2)" class="hitbox" />
  </g>
</template>