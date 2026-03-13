<script setup lang="ts">
import { ref } from 'vue';
import PlayerList from './PlayerList.vue';
import CommandConsole from './CommandConsole.vue';
import MapEditor from './MapEditor.vue'; // <-- THIS IS THE MISSING WIRE!

// State for which tab is currently active
const activeTab = ref<'LOBBY' | 'MAP' | 'CONSOLE'>('LOBBY');

// Track if the sidebar is collapsed (like a drawer)
const isCollapsed = ref(false);

const setTab = (tabName: 'LOBBY' | 'MAP' | 'CONSOLE') => {
  activeTab.value = tabName;
  if (isCollapsed.value) {
    isCollapsed.value = false;
  }
};
</script>

<template>
  <aside class="sidebar-container" :class="{ 'collapsed': isCollapsed }">
    
    <!-- THE MAIN CONTENT AREA (Swaps based on tab) -->
    <div class="sidebar-content">
      <PlayerList v-if="activeTab === 'LOBBY'" />
      
      <!-- THIS IS THE NEW MAP EDITOR COMPONENT -->
      <MapEditor v-else-if="activeTab === 'MAP'" />

      <CommandConsole v-else-if="activeTab === 'CONSOLE'" />
    </div>

    <!-- THE TAB STRIP (Always visible on the right edge) -->
    <div class="tab-strip">
      <button class="toggle-btn" @click="isCollapsed = !isCollapsed">
        {{ isCollapsed ? '◀' : '▶' }}
      </button>

      <button 
        class="tab-btn" 
        :class="{ active: activeTab === 'LOBBY' }"
        @click="setTab('LOBBY')"
        title="Lobby & Players"
      >
        👥
      </button>

      <button 
        class="tab-btn" 
        :class="{ active: activeTab === 'MAP' }"
        @click="setTab('MAP')"
        title="Map Editor"
      >
        🗺️
      </button>

      <button 
        class="tab-btn" 
        :class="{ active: activeTab === 'CONSOLE' }"
        @click="setTab('CONSOLE')"
        title="Developer Console"
      >
        💻
      </button>
    </div>
  </aside>
</template>

<style scoped>
.sidebar-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 440px; /* 400px content + 40px tab strip */
  display: flex;
  z-index: 1000;
  transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
  box-shadow: -5px 0 15px rgba(0,0,0,0.5);
}

.sidebar-container.collapsed {
  /* Push it right, leaving ONLY the 40px tab strip visible */
  transform: translateX(400px); 
}

.sidebar-content {
  width: 400px;
  height: 100%;
  background: rgba(10,10,10,0.95);
  border-left: 1px solid #333;
  display: flex;
  flex-direction: column;
}

/* ── TAB STRIP ─────────────────────────────────────────────── */
.tab-strip {
  width: 40px;
  height: 100%;
  background: #1a1a1a;
  border-left: 1px solid #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  gap: 15px;
}

.toggle-btn {
  background: transparent;
  border: none;
  color: #888;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: color 0.2s;
}
.toggle-btn:hover { color: #fff; }

.tab-btn {
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.2s;
  padding: 8px 0;
  width: 100%;
}
.tab-btn:hover { opacity: 0.8; background: rgba(255,255,255,0.1); }
.tab-btn.active {
  opacity: 1;
  background: rgba(46,204,113,0.2);
  border-left: 3px solid #2ecc71;
}
</style>