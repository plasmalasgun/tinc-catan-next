export class HexCoordinate {
    q;
    r;
    s;
    // By putting 'public readonly' inside the constructor, 
    // TypeScript automatically creates the "Name Tags" for q, r, and s.
    constructor(q, r, s = -q - r) {
        this.q = q;
        this.r = r;
        this.s = s;
        // The "Dictum" check
        if (Math.round(this.q + this.r + this.s) !== 0) {
            throw new Error("Invalid HexCoordinate: q + r + s must equal 0");
        }
    }
    toString() {
        return `${this.q},${this.r},${this.s}`;
    }
    getNeighbors() {
        const directions = [
            [1, -1, 0], [1, 0, -1], [0, 1, -1],
            [-1, 1, 0], [-1, 0, 1], [0, -1, 1]
        ];
        return directions.map(d => {
            return new HexCoordinate(this.q + (d[0] || 0), this.r + (d[1] || 0), this.s + (d[2] || 0));
        });
    }
}
//# sourceMappingURL=HexCoordinate.js.map