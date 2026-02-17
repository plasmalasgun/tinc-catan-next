<script setup lang="ts">
import { computed } from 'vue';
import { getPixelCoords, getHexPoints } from '../../utils/layout';

const props = defineProps<{
  coord: Object, // The hex object {q, r, s}
  type: String,
  value: Number
}>();

// HEARTBEAT
console.log("TRACER: Rendering Tile", props.value, "at", props.coord);

if (!props.coord) {
  console.error("TRACER: Tile", props.value, "FAILED. Coord is undefined.");
}

const transform = computed(() => {
  // If coord is missing, use 0,0 to prevent the "_s" crash
  const q = props.coord?.q ?? 0;
  const r = props.coord?.r ?? 0;
  const { x, y } = getPixelCoords(q, r);
  return `translate(${x}, ${y})`;
});

const colorMap: Record<string, string> = {
  WHEAT: '#f1c40f',
  WOOD: '#27ae60',
  BRICK: '#e67e22',
  SHEEP: '#95a5a6',
  ORE: '#7f8c8d',
  DESERT: '#edbf81'
};
</script>

<template>
  <g :transform="transform" class="hex-tile">
    <polygon :points="getHexPoints()" :fill="colorMap[type]" stroke="#fff" />
    <circle v-if="type !== 'DESERT'" r="15" fill="rgba(255,255,255,0.8)" />
    <text v-if="type !== 'DESERT'" text-anchor="middle" dy="5" font-weight="bold">
      {{ value }}
    </text>
  </g>
</template>