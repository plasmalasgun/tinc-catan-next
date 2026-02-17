import { defineStore } from 'pinia';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

export const useGameStore = defineStore('game', {
  state: () => ({
    state: null as any,
    // sessionStorage creates a new ID per tab, but keeps it on refresh
    playerId: sessionStorage.getItem('catan_id') || `user_${Math.random().toString(36).substring(2, 7)}`,
    logs: [] as any[],
    isTrading: false
  }),
  actions: {
    init() {
      console.log("DEBUG: Socket.io connecting...");

      // Save the ID to the specific session (tab)
      sessionStorage.setItem('catan_id', this.playerId)

      socket.on('connect', () => {
        console.log("OnSocketConnect - ID:", socket.id);
      });

      // 1. Listen for successful state updates
      socket.on('game_state_update', (newState) => {
        // TRACER: Log the raw incoming board
        console.log("DEBUG: Raw Data Arrived!");
        console.log("Tiles Count:", newState?.board?.tiles?.length);
        console.log("First Tile Sample:", newState?.board?.tiles?.[0]);
        
        if (newState?.board?.tiles?.[0] && !newState.board.tiles[0].coord) {
          console.error("CRITICAL: Tile 0 is missing its 'coord' property!");
        }

        this.state = newState;
      });
      
       // Listen for new log entries
      socket.on('new_log_entry', (entry) => {
        this.logs.push(entry);
      });

      // 2. Listen for errors (The fix you needed)
      socket.on('action_error', ({ message }) => {
        alert(`Error: ${message}`);
      });

      // 3. Join the game
      socket.emit('join_game', 'game-uuid-123', this.playerId);
    },

    getPlayerColor(id?: string) {
      const p = this.state?.players.find((p: any) => p.id === id);
      return p ? p.color : '#bdc3c7';
    },

    performAction(type: string, payload: any) {
      // Send action to server
      socket.emit('perform_action', 'game-uuid-123', this.playerId, { 
        type, 
        payload 
      });
    }
  }
});