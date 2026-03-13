<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue';
import { useGameStore } from '../../stores/gameStore';
import { RESOURCE_TYPES } from '../../utils/constants';
import { getPixelCoords, getHexPoints } from '../../utils/layout';

const gameStore = useGameStore();

// Local map settings
const mapName = ref('Classic Pangaea');
const mapSize = ref<19 | 30 | 37>(19);
const mapMode = ref<'PANGAEA' | 'ARCHIPELAGO'>('PANGAEA');

// Inject "PORT" locally for the editor palette
const EDITOR_RESOURCES = {
  ...RESOURCE_TYPES,
  port: { label: 'Harbor', color: '#2c3e50', icon: '⚓' }
};

// ─── MAP DISTRIBUTIONS & RULES ────────────────────────────────────────────
const DISTRIBUTIONS = {
  19: {
    resources: { WHEAT: 4, BRICK: 3, WOOD: 4, SHEEP: 4, ORE: 3, DESERT: 1 },
    numbers: { 2:1, 3:2, 4:2, 5:2, 6:2, 8:2, 9:2, 10:2, 11:2, 12:1 }
  },
  30: {
    resources: { WHEAT: 6, BRICK: 5, WOOD: 6, SHEEP: 6, ORE: 5, DESERT: 2 },
    numbers: { 2:2, 3:3, 4:3, 5:3, 6:3, 8:3, 9:3, 10:3, 11:3, 12:2 } // 28 total
  },
  37: {
    resources: { WHEAT: 7, BRICK: 6, WOOD: 7, SHEEP: 7, ORE: 7, DESERT: 3 },
    numbers: { 2:2, 3:3, 4:4, 5:4, 6:4, 8:4, 9:4, 10:4, 11:3, 12:2 } // 34 total
  }
};

// ─── DRAFT MAP STATE ──────────────────────────────────────────────────────
const draftHexes = ref<any[]>([]);

// Generates the exact Pangea shapes requested
const generateBlankGrid = () => {
  const hexes =[];
  
  if (mapSize.value === 19) {
    // Standard Radius 2
    for (let q = -2; q <= 2; q++) {
      let r1 = Math.max(-2, -q - 2);
      let r2 = Math.min(2, -q + 2);
      for (let r = r1; r <= r2; r++) hexes.push({ q, r, s: -q - r, type: 'DESERT', value: 0 });
    }
  } 
  else if (mapSize.value === 37) {
    // Standard Radius 3
    for (let q = -3; q <= 3; q++) {
      let r1 = Math.max(-3, -q - 3);
      let r2 = Math.min(3, -q + 3);
      for (let r = r1; r <= r2; r++) hexes.push({ q, r, s: -q - r, type: 'DESERT', value: 0 });
    }
  } 
  else if (mapSize.value === 30) {
    // Elongated 5-6 player board (4, 5, 6, 6, 5, 4 rows)
    const bounds: Record<number, number[]> = {
      "-2": [-1, 2], "-1":[-2, 2], "0": [-3, 2],
      "1": [-3, 2],  "2":[-3, 1], "3": [-3, 0]
    };
    for (const [rStr,[qMin, qMax]] of Object.entries(bounds)) {
      const r = parseInt(rStr);
      for (let q = qMin; q <= qMax; q++) {
        hexes.push({ q, r, s: -q - r, type: 'DESERT', value: 0 });
      }
    }
  }
  
  draftHexes.value = hexes;
};

onMounted(() => generateBlankGrid());
watch(mapSize, () => generateBlankGrid());

// ─── PAINTBRUSH LOGIC ─────────────────────────────────────────────────────
const numberTokens =[2, 3, 4, 5, 6, 8, 9, 10, 11, 12];

const getDots = (num: number) => {
  const count = 6 - Math.abs(7 - num);
  return '.'.repeat(count);
};

const selectResource = (res: string) => {
  gameStore.mapEditor.toolCategory = 'RESOURCE';
  gameStore.mapEditor.selectedResource = res;
};

const selectNumber = (num: number) => {
  gameStore.mapEditor.toolCategory = 'NUMBER';
  gameStore.mapEditor.selectedNumber = num;
};

const paintHex = (hex: any) => {
  const tool = gameStore.mapEditor;
  if (tool.toolCategory === 'RESOURCE') {
    hex.type = tool.selectedResource;
    if (hex.type === 'DESERT' || hex.type === 'PORT') hex.value = 0;
  } else if (tool.toolCategory === 'NUMBER') {
    if (hex.type !== 'DESERT' && hex.type !== 'PORT') {
      hex.value = tool.selectedNumber;
    }
  }
};

// ─── AUTO SHUFFLERS ───────────────────────────────────────────────────────
const shuffleResources = () => {
  const dist = DISTRIBUTIONS[mapSize.value].resources;
  let pool: string[] = [];
  Object.entries(dist).forEach(([res, count]) => {
    for(let i=0; i<count; i++) pool.push(res);
  });
  
  pool.sort(() => Math.random() - 0.5);

  // Only assign to land hexes (ignore ports)
  const landHexes = draftHexes.value.filter(h => h.type !== 'PORT');
  landHexes.forEach((hex, i) => {
    if (pool[i]) {
      hex.type = pool[i];
      if (hex.type === 'DESERT') hex.value = 0;
    }
  });
};

const shuffleNumbers = () => {
  const dist = DISTRIBUTIONS[mapSize.value].numbers;
  let pool: number[] =[];
  Object.entries(dist).forEach(([num, count]) => {
    for(let i=0; i<count; i++) pool.push(Number(num));
  });
  
  pool.sort(() => Math.random() - 0.5);

  const producingHexes = draftHexes.value.filter(h => h.type !== 'DESERT' && h.type !== 'PORT');
  producingHexes.forEach((hex, i) => {
    if (pool[i]) hex.value = pool[i];
  });
};

// ─── METRICS & VALIDATION ─────────────────────────────────────────────────
const metrics = computed(() => {
  const resCounts: Record<string, number> = {};
  const numCounts: Record<number, number> = {};
  
  draftHexes.value.forEach((t: any) => {
    resCounts[t.type] = (resCounts[t.type] || 0) + 1;
    if (t.value > 0) numCounts[t.value] = (numCounts[t.value] || 0) + 1;
  });

  return { resCounts, numCounts };
});

const warnings = computed(() => {
  const w: string[] =[];
  const dist = DISTRIBUTIONS[mapSize.value];

  // Check resource limits
  Object.entries(dist.resources).forEach(([res, maxCount]) => {
    const current = metrics.value.resCounts[res] || 0;
    if (current > maxCount) w.push(`Too many ${res} hexes (${current}/${maxCount})`);
  });

  // Check number limits
  Object.entries(dist.numbers).forEach(([numStr, maxCount]) => {
    const num = Number(numStr);
    const current = metrics.value.numCounts[num] || 0;
    if (current > maxCount) w.push(`Too many ${num} tokens (${current}/${maxCount})`);
  });

  return w;
});

const downloadMap = () => {
  const template = {
    name: mapName.value,
    mode: mapMode.value,
    size: mapSize.value,
    hexes: draftHexes.value
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(template, null, 2));
  const dlAnchorElem = document.createElement('a');
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download", `${mapName.value.replace(/\s+/g, '_')}.json`);
  dlAnchorElem.click();
};
</script>

<template>
  <div class="map-tab">
    <div class="sidebar-header">
      <h3>🗺️ MAP BLUEPRINTS</h3>
      <div class="subtitle">Design or load a template</div>
    </div>

    <div class="scrollable-content">
      
      <!-- MAP SETTINGS -->
      <div class="section">
        <div class="form-row split">
          <div>
            <label>Map Name</label>
            <input type="text" v-model="mapName" />
          </div>
          <div>
            <label>Map Size (Hexes)</label>
            <select v-model="mapSize">
              <option :value="19">19 (Standard)</option>
              <option :value="30">30 (Elongated)</option>
              <option :value="37">37 (Large)</option>
            </select>
          </div>
        </div>
      </div>

      <!-- DRAFT CANVAS (Isolated SVG inside the modal) -->
      <div class="editor-canvas-container">
        <svg viewBox="-300 -300 600 600" class="editor-svg">
          <g 
            v-for="(hex, idx) in draftHexes" 
            :key="idx"
            :transform="`translate(${getPixelCoords(hex.q, hex.r).x}, ${getPixelCoords(hex.q, hex.r).y})`"
            class="draft-hex"
            @click="paintHex(hex)"
          >
            <!-- Hexagon Shape -->
            <polygon 
              :points="getHexPoints()" 
              :fill="EDITOR_RESOURCES[hex.type.toLowerCase() as keyof typeof EDITOR_RESOURCES]?.color || '#edbf81'" 
              stroke="#111" 
              stroke-width="2" 
            />
            
            <!-- Number Token -->
            <g v-if="hex.type !== 'DESERT' && hex.type !== 'PORT'">
              <circle r="18" fill="#fdf6e3" stroke="#ccc" stroke-width="1" />
              <text 
                text-anchor="middle" 
                dy="4" 
                font-weight="900" 
                font-size="16"
                :fill="(hex.value === 6 || hex.value === 8) ? '#e74c3c' : '#222'"
              >
                {{ hex.value || '?' }}
              </text>
              <text 
                v-if="hex.value"
                text-anchor="middle" 
                dy="14" 
                font-weight="bold" 
                font-size="12"
                letter-spacing="2"
                :fill="(hex.value === 6 || hex.value === 8) ? '#e74c3c' : '#222'"
              >
                {{ getDots(hex.value) }}
              </text>
            </g>

            <!-- Port Icon -->
            <text v-if="hex.type === 'PORT'" text-anchor="middle" dy="8" font-size="24">⚓</text>
          </g>
        </svg>
      </div>

      <!-- PAINTBRUSH PALETTE -->
      <div class="section palette-section">
        
        <!-- Terrain Tools -->
        <div class="tool-group">
          <div class="tool-header">
            <label>Terrain Types</label>
            <button class="btn-shuffle" @click="shuffleResources">🔀 Shuffle</button>
          </div>
          <div class="grid-buttons">
            <button 
              v-for="(info, key) in EDITOR_RESOURCES" :key="key"
              class="paint-btn res-btn"
              :class="{ 
                active: gameStore.mapEditor.toolCategory === 'RESOURCE' && gameStore.mapEditor.selectedResource === key.toUpperCase(),
                desert: key === 'desert' 
              }"
              :style="{ borderBottomColor: info.color }"
              @click="selectResource(key.toUpperCase())"
            >
              {{ info.icon }} {{ info.label }}
            </button>
          </div>
        </div>

        <!-- Number Tools -->
        <div class="tool-group">
          <div class="tool-header">
            <label>Number Tokens</label>
            <button class="btn-shuffle" @click="shuffleNumbers">🔀 Shuffle</button>
          </div>
          <div class="grid-buttons numbers">
            <button 
              v-for="num in numberTokens" :key="num"
              class="paint-btn num-btn"
              :class="{ 
                active: gameStore.mapEditor.toolCategory === 'NUMBER' && gameStore.mapEditor.selectedNumber === num,
                red: num === 6 || num === 8 
              }"
              @click="selectNumber(num)"
            >
              <div class="num-val">{{ num }}</div>
              <div class="num-dots">{{ getDots(num) }}</div>
            </button>
          </div>
        </div>
      </div>

      <!-- VALIDATION WARNINGS -->
      <div v-if="warnings.length > 0" class="section warnings-section">
        <h4>🚨 Rule Violations</h4>
        <div v-for="w in warnings" :key="w" class="warning-text">⚠️ {{ w }}</div>
      </div>

    </div>

    <!-- FOOTER ACTIONS -->
    <div class="sidebar-footer">
      <button class="btn-action download" @click="downloadMap">💾 Download JSON</button>
      <button class="btn-action upload">📂 Load JSON</button>
    </div>
  </div>
</template>

<style scoped>
.map-tab {
  display: flex;
  flex-direction: column;
  height: 100%;
  color: #e0e0e0;
  font-family: 'Courier New', Courier, monospace;
}

.sidebar-header { padding: 15px; border-bottom: 1px solid #333; }
.sidebar-header h3 { margin: 0; color: #3498db; }
.subtitle { font-size: 0.8rem; color: #888; }

.scrollable-content {
  flex: 1;
  overflow-y: auto;
  padding: 15px;
}
.scrollable-content::-webkit-scrollbar { width: 6px; }
.scrollable-content::-webkit-scrollbar-thumb { background: #444; border-radius: 3px; }

/* ── DRAFT CANVAS ──────────────────────────── */
.editor-canvas-container {
  background: #151515;
  border: 1px solid #333;
  border-radius: 6px;
  margin-bottom: 15px;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: inset 0 0 20px rgba(0,0,0,0.8);
}
.editor-svg {
  width: 100%;
  height: 100%;
}
.draft-hex {
  cursor: crosshair;
  transition: transform 0.05s ease;
}
.draft-hex:hover polygon {
  filter: brightness(1.2);
  stroke: #fff;
  stroke-width: 3;
}
.draft-hex:active {
  transform: scale(0.92);
}

/* ── SETTINGS & SECTIONS ───────────────────── */
.section {
  background: rgba(0,0,0,0.2);
  border: 1px solid #2a2a2a;
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 15px;
}
.section h4 { margin: 0 0 10px 0; color: #ccc; border-bottom: 1px dashed #444; padding-bottom: 5px; }

.form-row { display: flex; flex-direction: column; margin-bottom: 10px; }
.form-row.split { flex-direction: row; gap: 10px; }
.form-row.split > div { flex: 1; display: flex; flex-direction: column; }
label { font-size: 0.75rem; color: #aaa; text-transform: uppercase; margin-bottom: 4px; }
input, select { background: #111; color: #fff; border: 1px solid #444; padding: 6px; border-radius: 4px; font-family: inherit; }
input:focus, select:focus { outline: none; border-color: #3498db; }

/* Palette Tools */
.tool-group { margin-bottom: 15px; }
.tool-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px; }
.btn-shuffle { background: #2c3e50; color: #fff; border: 1px solid #34495e; padding: 3px 8px; border-radius: 4px; cursor: pointer; font-size: 0.7rem; }
.btn-shuffle:hover { background: #34495e; }

.grid-buttons { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; }
.grid-buttons.numbers { grid-template-columns: repeat(5, 1fr); }

.paint-btn {
  background: #1a1a1a; color: #aaa; border: 1px solid #333;
  padding: 6px; border-radius: 4px; cursor: pointer; font-size: 0.8rem;
  border-bottom-width: 3px; transition: 0.1s; display: flex; flex-direction: column; align-items: center;
}
.paint-btn:hover { background: #2a2a2a; color: #fff; }
.paint-btn.active { 
  background: #3498db; color: #fff; border-color: #2980b9; 
  transform: scale(1.05); z-index: 10; box-shadow: 0 0 10px rgba(52,152,219,0.5); 
}
.res-btn.desert { border-bottom-color: #edbf81; }

.num-btn { 
  background: #fdf6e3; color: #222; border-bottom-color: #bdc3c7; 
  border-radius: 50%; width: 45px; height: 45px; justify-content: center;
}
.num-btn:hover { background: #fff; color: #000; }
.num-btn.active { background: #3498db; color: #fff; }
.num-val { font-weight: 900; font-size: 1.1rem; line-height: 1; }
.num-dots { font-size: 0.7rem; letter-spacing: 2px; font-weight: bold; line-height: 0.5; margin-top: 2px; }
.num-btn.red .num-val, .num-btn.red .num-dots { color: #e74c3c; }
.num-btn.active.red .num-val, .num-btn.active.red .num-dots { color: #fff; }
.num-btn.active.red { background: #e74c3c; border-color: #c0392b; box-shadow: 0 0 10px rgba(231,76,60,0.5); }

/* Warnings */
.warnings-section { border-color: #e74c3c; background: rgba(231,76,60,0.1); }
.warnings-section h4 { color: #e74c3c; border-bottom-color: #e74c3c; }
.warning-text { font-size: 0.8rem; color: #ffcccc; margin-bottom: 4px; }

/* Footer */
.sidebar-footer { display: flex; gap: 10px; padding: 15px; background: #1a1a1a; border-top: 1px solid #333; }
.btn-action { width: 100%; padding: 8px; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; font-family: inherit; transition: 0.2s; }
.download { background: #27ae60; color: white; }
.download:hover { background: #2ecc71; box-shadow: 0 0 15px rgba(46,204,113,0.4); }
.upload { background: #8e44ad; color: white; }
.upload:hover { background: #9b59b6; }
</style>