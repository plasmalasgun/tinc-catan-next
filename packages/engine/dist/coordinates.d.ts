/**
 * Represents a Tile on the board using Axial or Cube coordinates.
 * Catan usually uses Cube coordinates (q, r, s) where q + r + s = 0.
 */
export declare class HexCoordinate {
    readonly q: number;
    readonly r: number;
    readonly s: number;
    constructor(q: number, r: number, s?: number);
    equals(other: HexCoordinate): boolean;
    toString(): string;
}
/**
 * Intersections are the corners of the hexes (where Settlements/Cities go).
 * Each hex has 6 intersections.
 */
export declare enum Direction {
    NORTH = 0,
    NORTH_EAST = 1,
    SOUTH_EAST = 2,
    SOUTH = 3,
    SOUTH_WEST = 4,
    NORTH_WEST = 5
}
export declare class IntersectionCoordinate {
    readonly hex: HexCoordinate;
    readonly direction: Direction;
    constructor(hex: HexCoordinate, direction: Direction);
}
/**
 * Paths are the edges between hexes (where Roads go).
 */
export declare class PathCoordinate {
    readonly hex: HexCoordinate;
    readonly direction: Direction;
    constructor(hex: HexCoordinate, direction: Direction);
}
//# sourceMappingURL=coordinates.d.ts.map