import { ResourceType } from '../types/index.js';
export declare class Board {
    tiles: Map<string, Tile>;
    intersections: Map<string, Intersection>;
    paths: Map<string, Path>;
    constructor();
    /**
     * Universal method to add a tile.
     */
    addTile(q: number, r: number, s: number, type: ResourceType, value: number): void;
    /**
     * Simple serializer for Agents and the GUI
     */
    serialize(): {

        return {
            // We filter out any potential nulls/undefineds before they ever leave the engine
            tiles: Array.from(this.tiles.values()).filter(t => t !== undefined),
            intersections: Array.from(this.intersections.values())
            .filter(int => int !== undefined && int.coords && int.coords.length > 0)
            .map(int => ({
                ...int,
                // Ensure coords are clean
                coords: int.coords.filter(c => c !== undefined && c !== null)
            })),
            paths: Array.from(this.paths.values())
            .filter(p => p !== undefined && p.coords && p.coords.length > 0)
            .map(p => ({
                ...p,
                coords: p.coords.filter(c => c !== undefined && c !== null)
            }))
    };
}
//# sourceMappingURL=Board.d.ts.map