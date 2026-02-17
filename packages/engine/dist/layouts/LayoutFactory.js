import { ResourceType } from '../types/index.js';
export class LayoutFactory {
    /**
     * The classic 19-hex Catan board
     */
    static createStandard(board) {
        // Array of coordinates for a radius-2 hexagonal grid
        const coords = [
            [0, 0, 0], [0, -1, 1], [0, 1, -1], [1, -1, 0], [1, 0, -1], [-1, 1, 0], [-1, 0, 1], // ... etc
        ];
        // In a real implementation, we'd map these to standard resources/numbers
        coords.forEach(([q, r, s]) => {
            board.addTile(q, r, s, ResourceType.WHEAT, 8);
        });
    }
    /**
     * For the Agent: A completely random or elongated board
     */
    static createRectangle(board, width, height) {
        // Custom logic to fill a rectangular grid with hexes
    }
}
//# sourceMappingURL=LayoutFactory.js.map