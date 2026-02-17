/**
 * Represents a Tile on the board using Axial or Cube coordinates.
 * Catan usually uses Cube coordinates (q, r, s) where q + r + s = 0.
 */
export class HexCoordinate {
    q;
    r;
    s;
    constructor(q, r, s = -q - r) {
        this.q = q;
        this.r = r;
        this.s = s;
        if (Math.round(q + r + s) !== 0) {
            throw new Error("Invalid HexCoordinate: q + r + s must equal 0");
        }
    }
    equals(other) {
        return this.q === other.q && this.r === other.r;
    }
    toString() {
        return `Hex(${this.q},${this.r},${this.s})`;
    }
}
/**
 * Intersections are the corners of the hexes (where Settlements/Cities go).
 * Each hex has 6 intersections.
 */
export var Direction;
(function (Direction) {
    Direction[Direction["NORTH"] = 0] = "NORTH";
    Direction[Direction["NORTH_EAST"] = 1] = "NORTH_EAST";
    Direction[Direction["SOUTH_EAST"] = 2] = "SOUTH_EAST";
    Direction[Direction["SOUTH"] = 3] = "SOUTH";
    Direction[Direction["SOUTH_WEST"] = 4] = "SOUTH_WEST";
    Direction[Direction["NORTH_WEST"] = 5] = "NORTH_WEST";
})(Direction || (Direction = {}));
export class IntersectionCoordinate {
    hex;
    direction;
    constructor(hex, direction) {
        this.hex = hex;
        this.direction = direction;
    }
}
/**
 * Paths are the edges between hexes (where Roads go).
 */
export class PathCoordinate {
    hex;
    direction;
    constructor(hex, direction) {
        this.hex = hex;
        this.direction = direction;
    }
}
//# sourceMappingURL=coordinates.js.map