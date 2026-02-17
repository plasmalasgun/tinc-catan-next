/**
 * Represents a Tile on the board using Axial or Cube coordinates.
 * Catan usually uses Cube coordinates (q, r, s) where q + r + s = 0.
 */
export class HexCoordinate {
  constructor(
    public readonly q: number,
    public readonly r: number,
    public readonly s: number = -q - r
  ) {
    if (Math.round(q + r + s) !== 0) {
      throw new Error("Invalid HexCoordinate: q + r + s must equal 0");
    }
  }

  equals(other: HexCoordinate): boolean {
    return this.q === other.q && this.r === other.r;
  }

  toString(): string {
    return `Hex(${this.q},${this.r},${this.s})`;
  }
}

/**
 * Intersections are the corners of the hexes (where Settlements/Cities go).
 * Each hex has 6 intersections.
 */
export enum Direction { NORTH = 0, NORTH_EAST = 1, SOUTH_EAST = 2, SOUTH = 3, SOUTH_WEST = 4, NORTH_WEST = 5 }

export class IntersectionCoordinate {
  constructor(
    public readonly hex: HexCoordinate,
    public readonly direction: Direction 
  ) {}

  // In a real port, we'd add logic here to normalize coordinates 
  // (since one intersection is shared by 3 hexes).
}

/**
 * Paths are the edges between hexes (where Roads go).
 */
export class PathCoordinate {
  constructor(
    public readonly hex: HexCoordinate,
    public readonly direction: Direction
  ) {}
}