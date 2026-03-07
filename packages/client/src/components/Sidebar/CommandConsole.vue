<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue';
import { useGameStore }   from '../../stores/gameStore';
import { COLOR_TO_EMOJI } from '../../utils/constants';

const props = defineProps<{ isOpen: boolean }>();
const emit  = defineEmits<{ (e: 'toggle'): void }>();

const gameStore      = useGameStore();
const logContainer   = ref<HTMLElement | null>(null);
const autoScroll     = ref(true);
const filter         = ref<'ALL' | 'ACTION' | 'SYSTEM' | 'ERROR'>('ALL');
const rawJson        = ref('{\n  "type": "ROLL_DICE",\n  "payload": {}\n}');
const showEditor     = ref(false);
const lastSendStatus = ref('');

// ── Width ─────────────────────────────────────────────────────────────────
const MIN_WIDTH  = 330;
const MAX_WIDTH  = () => Math.floor(window.innerWidth * 0.75);
const panelWidth = ref(380);

// ── Drag ──────────────────────────────────────────────────────────────────
const isDragging = ref(false);
let dragStartX   = 0;
let dragStartW   = 0;
let hasDragged   = false;

function onPillMouseDown(e: MouseEvent) {
  if (e.button !== 0) return;
  isDragging.value = true;
  dragStartX = e.clientX;
  dragStartW = panelWidth.value;
  hasDragged = false;
  window.addEventListener('mousemove', onDragMove);
  window.addEventListener('mouseup',   onDragEnd);
  e.preventDefault();
}

function onDragMove(e: MouseEvent) {
  const delta = e.clientX - dragStartX;
  if (Math.abs(delta) > 4) hasDragged = true;
  if (hasDragged) {
    panelWidth.value = Math.min(MAX_WIDTH(), Math.max(MIN_WIDTH, dragStartW + delta));
  }
}

function onDragEnd() {
  window.removeEventListener('mousemove', onDragMove);
  window.removeEventListener('mouseup',   onDragEnd);
  if (!hasDragged) emit('toggle');
  isDragging.value = false;
}

// ── Scroll ────────────────────────────────────────────────────────────────
watch(() => gameStore.logs.length, async () => {
  if (!autoScroll.value) return;
  await nextTick();
  if (logContainer.value) logContainer.value.scrollTop = logContainer.value.scrollHeight;
});

const filteredLogs = computed(() =>
  filter.value === 'ALL'
    ? gameStore.logs
    : gameStore.logs.filter((e: any) => e.type === filter.value),
);

const sendRawAction = () => {
  try {
    const action = JSON.parse(rawJson.value);
    gameStore.performAction(action.type, action.payload ?? {});
    lastSendStatus.value = '✅ Sent';
    setTimeout(() => (lastSendStatus.value = ''), 2000);
  } catch {
    lastSendStatus.value = '❌ Invalid JSON';
  }
};
</script>

<template>
  <!--
    PILL — its own position:fixed element (not inside the panel).

    DRIFT FIX: transition is applied via :style, not CSS class.
    When isDragging=true  → transition:'none'  → pill snaps instantly to cursor.
    When isDragging=false → transition kicks in → smooth open/close animation.
    Both pill and panel share identical left values + identical transition
    string, so they are frame-perfectly synchronised.

    NO-FLIP FIX: pill appearance is identical whether open or closed.
    It always looks like a right-pointing drawer tab. No border swap,
    no border-radius swap, no class-based style change on toggle.
  -->
  <div
    class="tab-pill"
    :style="{
      left:       isOpen ? panelWidth + 'px' : '0px',
      transition: isDragging ? 'none' : 'left 0.22s ease'
    }"
    @mousedown="onPillMouseDown"
  ><span class="pill-text">TAB</span></div>

  <!--
    PANEL — also driven by left, same transition string as pill.
    Closed: left = -panelWidth  (fully off-screen left)
    Open:   left = 0            (flush with screen edge)
  -->
  <aside
    class="dev-console"
    :style="{
      width:      panelWidth + 'px',
      left:       isOpen ? '0px' : (-panelWidth) + 'px',
      transition: isDragging ? 'none' : 'left 0.22s ease'
    }"
  >
    <div class="toolbar">
      <span class="title">DEV_CONSOLE</span>
      <div class="filters">
        <button v-for="f in ['ALL','ACTION','SYSTEM','ERROR']" :key="f"
          :class="['filter-btn', { active: filter === f }]"
          @click="filter = (f as any)">{{ f }}</button>
      </div>
      <label class="autoscroll-toggle">
        <input type="checkbox" v-model="autoScroll" /> AUTO↓
      </label>
    </div>

    <div class="log-stream" ref="logContainer">
      <div class="log-inner">

        <div v-for="entry in filteredLogs" :key="entry.id"
          :class="['log-entry', entry.type?.toLowerCase()]">

          <template v-if="entry.type === 'SYSTEM' || entry.type === 'ERROR'">
            <span class="ts">[{{ entry.timeStr ?? new Date(entry.timestamp).toTimeString().slice(0,8) }}]</span>
            <span class="tag" :class="entry.type?.toLowerCase()">{{ entry.type }}</span>
            <span class="sys-msg">{{ entry.message }}</span>
          </template>

          <template v-else-if="entry.type === 'ACTION'">
            <div class="line-a">
              <span class="ts">[{{ entry.timeStr ?? new Date(entry.timestamp).toTimeString().slice(0,8) }}]</span>
              <span class="player-icon" :style="{ color: entry.playerColor }">{{ COLOR_TO_EMOJI[entry.playerColor] ?? '⬜' }}</span>
              <span class="player-name-log" :style="{ color: entry.playerColor }">{{ entry.playerName ?? entry.playerId }}</span>
              <span class="action-type">{{ entry.request?.type ?? '???' }}</span>
            </div>
            <div class="json-row">
              <span class="json-label req">REQ</span>
              <code class="json-body">{{ JSON.stringify(entry.request) }}</code>
            </div>
            <div class="json-row" :class="{ rejected: entry.response?.success === false }">
              <span class="json-label res" :class="{ fail: entry.response?.success === false }">RES</span>
              <code class="json-body">{{ JSON.stringify(entry.response) }}</code>
            </div>
          </template>

          <template v-else>
            <span class="ts">[{{ entry.timeStr ?? new Date(entry.timestamp).toTimeString().slice(0,8) }}]</span>
            <span class="sys-msg">{{ entry.message }}</span>
          </template>

        </div>

        <div v-if="filteredLogs.length === 0" class="empty-hint">
          No entries yet — waiting for actions…
        </div>
      </div>
    </div>

    <div class="editor-section">
      <button class="toggle-editor" @click="showEditor = !showEditor">
        {{ showEditor ? '▲ HIDE' : '▼ RAW CMD' }}
      </button>
      <div v-if="showEditor" class="editor-body">
        <textarea v-model="rawJson" rows="4" spellcheck="false"></textarea>
        <div class="editor-actions">
          <button @click="sendRawAction">⚡ Execute</button>
          <span class="send-status">{{ lastSendStatus }}</span>
        </div>
      </div>
    </div>
  </aside>

</template>

<style scoped>
/* ── TAB PILL ──────────────────────────────────────────────────────────────
   position:fixed, top-level — never clipped by any parent.
   `left` and `transition` are 100% inline (:style) — no CSS transition
   here so there is no conflict between CSS and JS-driven values.
   Appearance is STATIC — no open/closed state changes, no flip.
──────────────────────────────────────────────────────────────────────────── */
.tab-pill {
  position: fixed;
  top: 50%;
  /* left: driven by :style */
  transform: translateY(-50%);
  z-index: 1100;

  background: #1a1a1a;
  color: #00ff00;
  border: 1px solid #444;
  border-left: none;               /* flat left edge — glues to panel */
  border-radius: 0 4px 4px 0;     /* rounded right edge only — always */

  padding: 8px 3px;
  cursor: pointer;
  user-select: none;
  /* NO transition property here — handled entirely in :style */
}
.tab-pill:hover { border-color: #00ff00; color: #fff; }
.tab-pill.dragging,
.tab-pill:active { cursor: ew-resize; }

/* Text: vertical bottom-to-top (rotate 180° on vertical-rl = points up/right) */
.pill-text {
  display: block;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-family: 'Courier New', monospace;
  font-size: 9px;
  font-weight: bold;
  letter-spacing: 2px;
}

/* ── PANEL ─────────────────────────────────────────────────────────────────
   position:fixed, left + width driven by :style.
   min-width: 330px is the CSS hard floor — cannot be overridden by JS.
   NO transition property here — handled entirely in :style.
──────────────────────────────────────────────────────────────────────────── */
.dev-console {
  position: fixed;
  top: 0;
  bottom: 0;
  /* left: driven by :style */
  min-width: 330px;   /* hard CSS floor */
  z-index: 1050;

  display: flex;
  flex-direction: column;
  background: #0d0d0d;
  border-right: 1px solid #333;
  font-family: 'Courier New', monospace;
  font-size: 11px;
  color: #c9c9c9;
  overflow: hidden;
  /* NO transition property here — handled entirely in :style */
}

/* ── TOOLBAR ───────────────────────────────────────────────────────────── */
.toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  background: #1a1a1a;
  border-bottom: 1px solid #333;
  flex-shrink: 0;
}
.title { color: #00ff00; font-weight: bold; font-size: 10px; letter-spacing: 1px; }
.filters { display: flex; gap: 3px; margin-left: auto; }
.filter-btn {
  background: #222; color: #666; border: 1px solid #444;
  padding: 1px 6px; border-radius: 3px; cursor: pointer;
  font-size: 9px; font-family: inherit;
}
.filter-btn.active { background: #333; color: #00ff00; border-color: #00ff00; }
.autoscroll-toggle { color: #555; font-size: 9px; cursor: pointer; display: flex; align-items: center; gap: 3px; }

/* ── LOG STREAM ────────────────────────────────────────────────────────── */
.log-stream {
  flex: 1;
  overflow-y: auto;
  overflow-x: auto;
  min-height: 0;
}
.log-stream::-webkit-scrollbar        { width: 5px; height: 5px; }
.log-stream::-webkit-scrollbar-track  { background: #0d0d0d; }
.log-stream::-webkit-scrollbar-thumb  { background: #444; border-radius: 2px; }
.log-stream::-webkit-scrollbar-corner { background: #0d0d0d; }

.log-inner {
  display: inline-block;
  min-width: 100%;
  padding: 4px 6px;
}

.log-entry {
  padding: 3px 0;
  border-bottom: 1px solid #1a1a1a;
  line-height: 1.4;
  white-space: nowrap;
}
.log-entry.system { color: #888; }
.log-entry.error  { color: #e74c3c; }

.ts      { color: #555; margin-right: 4px; }
.tag     { font-size: 9px; padding: 1px 4px; border-radius: 2px; margin-right: 4px; }
.tag.system { background: #1e3a1e; color: #4caf50; }
.tag.error  { background: #3a1e1e; color: #e74c3c; }
.sys-msg { color: #999; }

.line-a { display: inline-flex; align-items: center; gap: 5px; margin-bottom: 1px; }
.player-icon     { font-size: 13px; }
.player-name-log { font-weight: bold; font-size: 11px; }
.action-type     { color: #f1c40f; font-size: 10px; margin-left: 4px; opacity: 0.8; }

.json-row {
  display: inline-flex;
  align-items: baseline;
  gap: 5px;
  padding-left: 20px;
  font-size: 9.5px;
  line-height: 1.3;
}
.json-label {
  font-weight: bold; flex-shrink: 0;
  font-size: 9px; padding: 0 3px; border-radius: 2px; font-family: inherit;
}
.json-label.req { background: #1a2a3a; color: #3498db; }
.json-label.res { background: #1a3a1a; color: #2ecc71; }
.json-label.res.fail { background: #3a1a1a; color: #e74c3c; }
.json-body { color: #aaa; white-space: nowrap; }
.json-row.rejected .json-body { color: #e74c3c; }

.empty-hint { color: #444; text-align: center; padding: 20px; font-style: italic; }

/* ── RAW EDITOR ────────────────────────────────────────────────────────── */
.editor-section { flex-shrink: 0; border-top: 1px solid #333; }
.toggle-editor {
  width: 100%; background: #111; color: #555;
  border: none; padding: 3px; cursor: pointer;
  font-family: inherit; font-size: 9px;
}
.toggle-editor:hover { color: #00ff00; }
.editor-body { padding: 6px; }
textarea {
  width: 100%; background: #000; color: #00ff00;
  border: 1px solid #333; font-family: inherit;
  font-size: 10px; resize: none; box-sizing: border-box;
}
.editor-actions { display: flex; align-items: center; gap: 8px; margin-top: 4px; }
.editor-actions button {
  background: #222; color: #00ff00; border: 1px solid #444;
  padding: 3px 10px; cursor: pointer; font-family: inherit; font-size: 10px;
}
.editor-actions button:hover { border-color: #00ff00; }
.send-status { font-size: 10px; color: #888; }
</style>