import { Board } from '../core/Board.js';
import { ResourceType } from '../types/index.js';

export class LayoutFactory {
  /**
   * The classic 19-hex Catan board
   */
  static createStandard(board: Board) {
    // Array of coordinates for a radius-2 hexagonal grid
    const coords = [
      [0,0,0], [0,-1,1], [0,1,-1], [1,-1,0], [1,0,-1], [-1,1,0], [-1,0,1], // ... etc
    ];
    
    // In a real implementation, we'd map these to standard resources/numbers
    coords.forEach(([q, r, s]) => {
      board.addTile(q, r, s, ResourceType.WHEAT, 8); 
    });
  }

  /**
   * For the Agent: A completely random or elongated board
   */
  static createRectangle(board: Board, width: number, height: number) {
     // Custom logic to fill a rectangular grid with hexes
  }
}