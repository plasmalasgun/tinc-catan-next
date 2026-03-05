import { GameState,
         ActionProcessor,
         Board,
         LayoutFactory,
         Player } from '@tinc/engine';

import { v4 as uuidv4 } from 'uuid';

export class GameManager {
  private games: Map<string, GameState> = new Map();
  private timers: Map<string, NodeJS.Timeout> = new Map();
  
  // Settings for the "Agentic" behavior
  private TURN_TIMEOUT_MS = 60000; // 60 seconds

  constructor() {}

  /**
   * Creates a new game instance
   */
  public createGame( creatorId: string,
                     settings: any      ): string
 {
    const gameId = "game-uuid-123"; //uuidv4();    
    const board = new Board();
    LayoutFactory.createStandard(board); // Flexible layout!

    console.log(`Server.GameManager.createGame: Board generated. Size: ${board.tiles.size}`);
    const shortId = creatorId.substring(creatorId.length - 5);

    // Initialize Rules (State)
    const initialState: GameState = {
      id: gameId,
      phase: 'LOBBY',
      startupIndex: 0,
      startupSubPhase: 'SETTLEMENT',
      currentPlayerId: creatorId,
      turnOrder: [creatorId],
      board: board,
      robberTileId: '0,0,0',
      victimsAvailable: [],
      turnNumber: 1,
      playedDevCardThisTurn: false,
      devCardDeck: [],
      setupSequence: [],
      players: [
          // SEAT 1: The Human Host
          this.createNewPlayer(creatorId, shortId, "#e74c3c", true),
          // SEATS 2-4: Explicit Ghosts
          this.createEmptySeat("player_2", "Blue_Seat", "#3498db"),
          this.createEmptySeat("player_3", "Orange_Seat", "#e67e22"),
          this.createEmptySeat("player_4", "Green_Seat", "#27ae60")
      ]
    };

    this.games.set(gameId, initialState);
    return gameId;
  }

  // packages/server/src/GameManager.ts

public joinGame( gameId: string, playerId: string ): GameState {
    const state = this.games.get(gameId);
    if (!state) throw new Error("Server.GameManager.joinGame: Game not found");

    // PILLAR 1: RECLAIM SEAT (Session Token Matching)
    let assignedSeat = state.players.find(p => p.controllerId === playerId);
    
    if (assignedSeat) {
      console.log(`RE-LINKING: Player ${playerId} reclaiming seat ${assignedSeat.id}`);
      assignedSeat.isOnline = true;
    } else {
      // CLAIM NEW SEAT
      assignedSeat = state.players.find(p => p.controllerType === null);
      if (assignedSeat) {
        console.log(`CLAIMING: Player ${playerId} taking vacant seat ${assignedSeat.id}`);
        assignedSeat.controllerId = playerId;
        assignedSeat.controllerType = 'HUMAN';
        assignedSeat.name = playerId.substring(playerId.length - 5);
        assignedSeat.isOnline = true;
      } else {
        throw new Error("Game is full! The Host must kick an offline player to free a seat.");
      }
    }

    // PILLAR 2: HOST MIGRATION (Crown Passing)
    // Is there any active Host currently online?
    const isAnyHostOnline = state.players.some(p => p.isHost && p.isOnline);
    
    if (!isAnyHostOnline) {
      // Strip the dormant crown from anyone who might have it
      state.players.forEach(p => p.isHost = false);
      
      // Bestow the crown to this connecting player
      assignedSeat.isHost = true;
      console.log(`👑 CROWN CLAIMED: ${assignedSeat.name} is now the Host.`);
    }

    return state;
  }

  // Added this function to handle disconnects in the state
  public setPlayerOffline( gameId: string, playerId: string ): GameState | null {
    const state = this.games.get(gameId);
    if (!state) return null;

    const playerLeaving = state.players.find(p => p.controllerId === playerId);

    if (playerLeaving) {
      playerLeaving.isOnline = false; // They are offline (⛓️‍💥), NOT a ghost (👻)

      if(playerLeaving.isHost) {
        // Try to pass the crown immediately to another online human
        const nextHost = state.players.find(p => p.isOnline && p.controllerType === 'HUMAN');
        
        if (nextHost) {
          playerLeaving.isHost = false;
          nextHost.isHost = true;
          console.log(`👑 CROWN PASSING: The crown passed to ${nextHost.name}`);
        } else {
          console.log(`👑 CROWN DORMANT: No online humans available. Crown waiting for next connection.`);
          // We leave them as host. The moment ANYONE connects, joinGame() will snatch it.
        }
      }
    }

    return state;
  }

  // Helper to create a "Brain-dead" seat
  private createEmptySeat(id: string, name: string, color: string): Player {
    return {
      id, name, color,
      isHost: false,
      isOnline: false, // Skulls are never "online"
      controllerId: null, 
      controllerType: null, // This triggers the 👻 icon
      resources: { brick: 0, wood: 0, wheat: 0, sheep: 0, ore: 0 },
      victoryPoints: 0,
      devCards: [],
      numPlayedKnights: 0,
      numSettlements: 5,
      hasLargestArmy: false,
      hasLongestRoad: false
    };
  }

  // Inside GameManager.ts (as a private helper)
  private createNewPlayer( id: string,
                           name: string,
                           color: string,
                           isHost: boolean = false ): Player {

    console.log( `Server.GameManager.createNewPlayer: ${id} - ${name}`);

    return {
      id: `seat_${id.substring(0,3)}`,
      name, color, isHost,
      isOnline: true,
      controllerId: id,
      controllerType: 'HUMAN',
      resources: { brick: 0, wood: 0, wheat: 0, sheep: 0, ore: 0 },
      victoryPoints: 0,
      devCards: [],
      numPlayedKnights: 0,
      numSettlements: 5,
      hasLargestArmy: false,
      hasLongestRoad: false      
    };

  }


  /**
   * The single point of entry for actions (Human or Agent)
   */
  public handleAction(gameId: string, playerId: string, rawAction: any) {
    const state = this.games.get(gameId);
    if (!state) throw new Error("Game not found");

    // 1. Process the logic via our Engine
    const result = ActionProcessor.process(state, { ...rawAction, playerId });

    if (result.success) {
      // 2. If action succeeded, update memory
      this.games.set(gameId, result.newState!);
      
      // 3. Reset the Turn Timer
      this.resetTimer(gameId);
      
      return result;
    }
    
    return result;
  }

  private reassignHost(state: GameState) {
    // 1. Check if the current host is still online
    const currentHost = state.players.find(p => p.isHost && p.isOnline);
    if (currentHost) return; // Host is fine, no change needed.

    // 2. If host is offline, find the next available HUMAN who is online
    const nextHost = state.players.find(p => p.isOnline && p.controllerType === 'HUMAN');
    
    if (nextHost) {
      // Clear old host flags
      state.players.forEach(p => p.isHost = false);
      // Bestow the crown
      nextHost.isHost = true;
      console.log(`CROWN PASSING: ${nextHost.name} is the new Host.`);
    }
  }

  private resetTimer(gameId: string) {
    // Clear existing timer
    if (this.timers.has(gameId)) {
      clearTimeout(this.timers.get(gameId)!);
    }

    // Set new timer for "Auto-Move" or "Timeout"
    const timer = setTimeout(() => {
      this.handleTimeout(gameId);
    }, this.TURN_TIMEOUT_MS);

    this.timers.set(gameId, timer);
  }

  /**
   * Agentic Logic: What happens if a player (Human or Agent) stalls?
   */
  private handleTimeout(gameId: string) {
    const state = this.games.get(gameId);
    if (!state) return;

    console.log(`Game ${gameId}: Player ${state.currentPlayerId} timed out.`);

    // In a professional "Agentic" server, we might force an 'END_TURN' 
    // or trigger a 'BotAction' here so the game never gets stuck.
    this.handleAction(gameId, state.currentPlayerId, { type: 'END_TURN' });
  }

  public getGameState(gameId: string): GameState | undefined {
    return this.games.get(gameId);
  }
}