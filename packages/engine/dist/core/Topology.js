export var VertexDir;
(function (VertexDir) {
    VertexDir["UP"] = "UP";
    VertexDir["DOWN"] = "DOWN";
})(VertexDir || (VertexDir = {}));
export var EdgeDir;
(function (EdgeDir) {
    EdgeDir["NORTH_WEST"] = "NW";
    EdgeDir["NORTH_EAST"] = "NE";
    EdgeDir["EAST"] = "E";
})(EdgeDir || (EdgeDir = {}));
export class IntersectionCoord {
    hex;
    dir;
    constructor(hex, dir) {
        this.hex = hex;
        this.dir = dir;
    }
    // This is the "Secret Sauce" for flexibility.
    // It converts different hex-relative positions into one unique string.
    toCanonical() {
        // Logic: Always represent the intersection by the hex with the lowest coordinate values
        // to ensure that 3 hexes sharing a corner point to the same key.
        return `int:${this.hex.toString()}:${this.dir}`;
    }
}
//# sourceMappingURL=Topology.js.map