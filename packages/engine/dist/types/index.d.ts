import { HexCoordinate } from '../core/HexCoordinate.js';
export type GamePhase = 'STARTUP' | 'ROLLING' | 'TRADING_BUILDING' | 'WAITING_FOR_TRADE' | 'ROBBER_DISCARD' | 'ROBBER_MOVE' | 'ROBBER_STEAL' | 'YEAR_OF_PLENTY' | 'MONOPOLY';
export declare enum DevCardType {
    KNIGHT = "KNIGHT",
    MONOPOLY = "MONOPOLY",
    YEAR_OF_PLENTY = "YEAR_OF_PLENTY",
    ROAD_BUILDING = "ROAD_BUILDING",
    VICTORY_POINT = "VICTORY_POINT"
}
export declare enum ResourceType {
    WHEAT = "WHEAT",
    WOOD = "WOOD",
    BRICK = "BRICK",
    SHEEP = "SHEEP",
    ORE = "ORE",
    DESERT = "DESERT"
}
export interface DevCard {
    id: string;
    type: string;
    boughtTurn: number;
}
export interface Player {
    id: string;
    name: string;
    color: string;
    controllerId: string | null;
    controllerType: 'HUMAN' | 'AGENT' | null;
    agentType?: 'HEURISTIC' | 'LLM' | 'WEBHOOK' | null;
    /** @deprecated Crown lives on GameState.hostSessionId */
    isHost: boolean;
    isOnline: boolean;
    timerEnabled: boolean;
    turnTimeoutMs: number;
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
    hostSessionId: string;
    phase: string;
    startupIndex: number;
    startupSubPhase: string;
    setupSequence: string[];
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
    id: string;
    coords: HexCoordinate[];
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
    metadata?: any;
}
export interface Path {
    id: string;
    coords: HexCoordinate[];
    road?: {
        playerId: string;
    };
}
export interface ResourceHand {
    brick: number;
    wood: number;
    wheat: number;
    sheep: number;
    ore: number;
}
export interface TradeOffer {
    senderId: string;
    offering: ResourceHand;
    requesting: ResourceHand;
    responses: Map<string, 'ACCEPTED' | 'REJECTED' | 'PENDING'>;
}
export type MapMode = 'PANGAEA' | 'ARCHIPELAGO';
export interface HexBlueprint {
    q: number;
    r: number;
    s: number;
    type: ResourceType;
    value: number;
}
export interface MapTemplate {
    name: string;
    mode: MapMode;
    radius: number;
    hexes: HexBlueprint[];
}
//# sourceMappingURL=index.d.ts.map