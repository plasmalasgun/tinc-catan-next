// packages/engine/src/index.ts

// Export everything the outside world (Server, Agent, GUI) needs

export * from './core/Board.js';
export * from './core/HexCoordinate.js';
export * from './types/index.js';        // This reveals GameState
export * from './ActionProcessor.js';    // This reveals ActionProcessor
export * from './layouts/LayoutFactory.js'; // This reveals LayoutFactory
