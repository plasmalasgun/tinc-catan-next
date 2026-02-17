import { ResourceType, Tile, Intersection, Path } from '../types/index.js';
export declare class Board {
    tiles: Map<string, Tile>;
    intersections: Map<string, Intersection>;
    paths: Map<string, Path>;
    constructor();
    /**
     * Universal method to add a tile.
     */
    addTile(q: number, r: number, s: number, type: ResourceType, value: number): void;
    private generateTopologyForTile;
    /**
     * Simple serializer for Agents and the GUI
     */
    serialize(): {
        tiles: {
            id: string;
            type: ResourceType;
            value: number;
            hasRobber: boolean;
            coord: {
                q: number;
                r: number;
                s: number;
            };
        }[];
        intersections: {
            id: string;
            building: {
                type: "SETTLEMENT" | "CITY";
                playerId: string;
            } | null;
            coords: {
                q: number;
                r: number;
                s: number;
            }[];
        }[];
        paths: {
            id: string;
            road: {
                playerId: string;
            } | null;
            coords: {
                q: number;
                r: number;
                s: number;
            }[];
        }[];
    };
}
//# sourceMappingURL=Board.d.ts.map