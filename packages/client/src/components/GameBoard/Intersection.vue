<script setup lang="ts">
  import { computed } from 'vue';
  import { getAveragePixelCoords } from '../../utils/layout';

  const props = defineProps<{
    id: string;
    coords: {q: number, r: number}[];
    building?: { type: string, playerId: string };
    color?: string;          // passed from parent when a building exists
    canBuild?: boolean;
  }>();

  const emit = defineEmits(['click']);

  const pos = computed(() => getAveragePixelCoords(props.coords));

  // SVG path strings for the buildings (centered at origin)
  const settlementPath = "M -6.6469851,6.6469877 H 6.6469882 V -1.4105927 L 1.5459839e-6,-6.6470493 -6.6469851,-1.4105927 Z";
  const cityPath = "m -3.8820497,-8.9536803 -5.0715547,4.737585 V 8.9536037 H 8.9536047 V 1.1436717 H 1.189507 v -5.359767 z";
</script>

<template>
  <g :transform="`translate(${pos.x}, ${pos.y})`" 
     @click="emit('click', props.id)"
     class="intersection-node">
    
    <!-- Invisible hitbox for clicking -->
    <circle r="12" fill="transparent" class="hitbox" />
    
    <!-- Settlement -->
    <path
      v-if="building?.type === 'SETTLEMENT'"
      :d="settlementPath"
      :fill="color"
      stroke="white"
      stroke-width="0.5"
    />
    
    <!-- City -->
    <path
      v-else-if="building?.type === 'CITY'"
      :d="cityPath"
      :fill="color"
      stroke="white"
      stroke-width="0.5"
    />

    <!-- Ghost indicator for building placement -->
    <circle v-else-if="canBuild" 
            r="6" fill="rgba(255,255,255,0.5)" class="ghost" />
  </g>
</template>

<style scoped>
  .intersection-node { cursor: pointer; }
  .hitbox:hover + .ghost { fill: rgba(255,255,255,0.8); }
</style>