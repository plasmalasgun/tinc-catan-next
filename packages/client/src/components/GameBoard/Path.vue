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

// Pixel coordinates of the two endpoints (centers of the two adjacent hexes)
const p1 = computed(() => {
  if (!props.coords || props.coords.length < 2) return { x: 0, y: 0 };
  return getPixelCoords(props.coords[0].q, props.coords[0].r);
});

const p2 = computed(() => {
  if (!props.coords || props.coords.length < 2) return { x: 0, y: 0 };
  return getPixelCoords(props.coords[1].q, props.coords[1].r);
});

// Midpoint between the two hex centers (this is the exact center of the edge)
const mid = computed(() => ({
  x: (p1.value.x + p2.value.x) / 2,
  y: (p1.value.y + p2.value.y) / 2,
}));

// The angle of the vector between the two hex centers.
// The edge itself is perpendicular to this vector (+90 degrees).
const rotation = computed(() => {
  const dx = p2.value.x - p1.value.x;
  const dy = p2.value.y - p1.value.y;
  return (Math.atan2(dy, dx) * 180) / Math.PI + 90;
});
</script>

<template>
  <!-- Group the entire path area so the hover effect and click area apply cleanly -->
  <g class="path-node" @click="emit('click', props.id)">
    
    <!-- Invisible hitbox for easier clicking (so they don't have to click exactly on the pixels) -->
    <rect
      :x="mid.x - 25"
      :y="mid.y - 15"
      width="50"
      height="30"
      fill="transparent"
      :transform="`rotate(${rotation}, ${mid.x}, ${mid.y})`"
      class="hitbox"
    />

    <!-- Road: A bordered rectangle properly aligned along the edge -->
    <rect
      v-if="road"
      :x="mid.x - 22"
      :y="mid.y - 6"
      width="44"
      height="12"
      :fill="color"
      stroke="white"
      stroke-width="1.5"
      :transform="`rotate(${rotation}, ${mid.x}, ${mid.y})`"
      class="path-road"
    />

    <!-- Empty path (no road) – ghostly rectangle indicator -->
    <rect
      v-else
      :x="mid.x - 15"
      :y="mid.y - 4"
      width="30"
      height="8"
      fill="rgba(255,255,255,0.2)"
      :transform="`rotate(${rotation}, ${mid.x}, ${mid.y})`"
      class="path-empty"
    />
  </g>
</template>

<style scoped>
.path-node {
  cursor: pointer;
}
.path-node:hover .path-empty {
  fill: rgba(255, 255, 255, 0.6);
}
.path-road {
  transition: filter 0.1s;
}
.path-node:hover .path-road {
  filter: brightness(1.2);
}
</style>