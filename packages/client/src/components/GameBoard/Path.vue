<script setup lang="ts">
import { computed } from 'vue';
import { getPixelCoords } from '../../utils/layout';

const props = defineProps<{
  id: string;
  coords: {q: number, r: number}[];
  road?: { playerId: string };
  color?: string;          // passed from parent when a road exists
}>();

const emit = defineEmits(['click']);

// Pixel coordinates of the two endpoints
const p1 = computed(() => {
  if (!props.coords || props.coords.length < 2) return { x: 0, y: 0 };
  return getPixelCoords(props.coords[0].q, props.coords[0].r);
});

const p2 = computed(() => {
  if (!props.coords || props.coords.length < 2) return { x: 0, y: 0 };
  return getPixelCoords(props.coords[1].q, props.coords[1].r);
});

// Midpoint (used for the empty‑road indicator)
const mid = computed(() => ({
  x: (p1.value.x + p2.value.x) / 2,
  y: (p1.value.y + p2.value.y) / 2,
}));
</script>

<template>
  <!-- Road: a thick line between the two intersections -->
  <line
    v-if="road"
    :x1="p1.x" :y1="p1.y" :x2="p2.x" :y2="p2.y"
    :stroke="color"
    stroke-width="8"
    stroke-linecap="round"
    @click="emit('click', props.id)"
    class="path-road"
  />

  <!-- Empty path (no road) – small clickable circle at midpoint -->
  <circle
    v-else
    :cx="mid.x" :cy="mid.y"
    r="4"
    fill="rgba(255,255,255,0.2)"
    @click="emit('click', props.id)"
    class="path-empty"
  />
</template>

<style scoped>
.path-road {
  cursor: pointer;
  transition: stroke 0.1s;
}
.path-road:hover {
  stroke: #ffffff;
}
.path-empty {
  cursor: pointer;
}
.path-empty:hover {
  fill: rgba(255,255,255,0.5);
}
</style>