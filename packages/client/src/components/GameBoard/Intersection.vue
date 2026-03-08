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
  const settlementPath = "M -4.43132,4.4313451 H 4.431326 V 0.03981408 L 3.0479889e-6,-4.4313859 -4.43132,0.03981408 Z";
  const cityPath = "M -3.6238055,-7.2545167 -8.0044301,-2.751278 V 7.2544297 H 8.0044245 V -0.16917887 H 0.75681904 V -2.751278 Z";
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