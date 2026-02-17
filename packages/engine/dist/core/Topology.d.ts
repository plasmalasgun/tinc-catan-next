import { HexCoordinate } from './HexCoordinate.js';
export declare enum VertexDir {
    UP = "UP",
    DOWN = "DOWN"
}
export declare enum EdgeDir {
    NORTH_WEST = "NW",
    NORTH_EAST = "NE",
    EAST = "E"
}
export declare class IntersectionCoord {
    readonly hex: HexCoordinate;
    readonly dir: VertexDir;
    constructor(hex: HexCoordinate, dir: VertexDir);
    toCanonical(): string;
}
//# sourceMappingURL=Topology.d.ts.map