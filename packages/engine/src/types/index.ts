import { HexCoordinate } from '../core/HexCoordinate.js';



export type GamePhase = 'STARTUP' | 'ROLLING' | 'TRADING_BUILDING' | 'WAITING_FOR_TRADE' | 'ROBBER_DISCARD' | 'ROBBER_MOVE' | 'ROBBER_STEAL' | 'YEAR_OF_PLENTY' | 'MONOPOLY';

export enum DevCardType {
  KNIGHT = 'KNIGHT',
  MONOPOLY = 'MONOPOLY',
  YEAR_OF_PLENTY = 'YEAR_OF_PLENTY',
  ROAD_BUILDING = 'ROAD_BUILDING',
  VICTORY_POINT = 'VICTORY_POINT'
}

export enum ResourceType {
  WHEAT = 'WHEAT', WOOD = 'WOOD', BRICK = 'BRICK', SHEEP = 'SHEEP', ORE = 'ORE', DESERT = 'DESERT'
}

export interface DevCard {
  id: string;
  type: string;
  boughtTurn: number; // To enforce "can't play same turn" rule
}

export interface Player {
  id: string;
  name: string;
  color: string;
  
  controllerId: string | null; // Which User ID is currently driving?
  controllerType: 'HUMAN' | 'AGENT' | null; // Who is driving?
  
  isHost: boolean;
  isOnline: boolean; // Track connection status

  resources: {
    brick: number;
    wood: number;
    wheat: number;
    sheep: number;
    ore: number;
  };
  victoryPoints: number;
  devCards: any[];
  numPlayedKnights: number;
  numSettlements: number;
  hasLargestArmy: boolean;
  hasLongestRoad: boolean;
}

export interface Tile {
  id: string;
  coord: HexCoordinate;
  type: ResourceType;
  value: number;
  hasRobber: boolean;
}


export interface GameState {
  id: string;
  phase: string;
  startupIndex: number;
  startupSubPhase: string;
  currentPlayerId: string;
  players: Player[];
  board: {
    tiles: Map<string, Tile>;
    intersections: Map<string, Intersection>;
    paths: Map<string, Path>;
  };
  turnOrder: string[];
  robberTileId: string;
  victimsAvailable: string[];
  diceResult?: [number, number];
  activeTrade?: any;
  turnNumber: number;
  playedDevCardThisTurn: boolean;
  devCardDeck: string[];
}

export interface Intersection {
  id: string; // The Canonical ID
  coords: HexCoordinate[]; // The 1-3 hexes that share this corner
  building?: {
    type: 'SETTLEMENT' | 'CITY';
    playerId: string;
  };
}

export interface LogEntry {
  id: string;
  timestamp: number;
  type: 'SYSTEM' | 'CHAT' | 'ACTION';
  playerId?: string;
  message: string;
  metadata?: any; // To store roll results, etc.
}

export interface Path {
  id: string; // The Canonical ID
  coords: HexCoordinate[]; // The 1-2 hexes that share this edge
  road?: {
    playerId: string;
  };
}

export interface ResourceHand {
  brick: number; wood: number; wheat: number; sheep: number; ore: number;
}


export interface TradeOffer {
  senderId: string;
  offering: ResourceHand; // What the sender gives
  requesting: ResourceHand; // What the sender wants
  responses: Map<string, 'ACCEPTED' | 'REJECTED' | 'PENDING'>;
}