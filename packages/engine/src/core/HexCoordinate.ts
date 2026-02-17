export class HexCoordinate {
  // By putting 'public readonly' inside the constructor, 
  // TypeScript automatically creates the "Name Tags" for q, r, and s.
  constructor(
    public readonly q: number,
    public readonly r: number,
    public readonly s: number = -q - r
  ) {
    // The "Dictum" check
    if (Math.round(this.q + this.r + this.s) !== 0) {
      throw new Error("Invalid HexCoordinate: q + r + s must equal 0");
    }
  }

  public toString(): string {
    return `${this.q},${this.r},${this.s}`;
  }

  public getNeighbors(): HexCoordinate[] {
    const directions = [
      [1, -1, 0], [1, 0, -1], [0, 1, -1],
      [-1, 1, 0], [-1, 0, 1], [0, -1, 1]
    ];
    
    return directions.map(d => {
      return new HexCoordinate(
        this.q + (d[0] || 0), 
        this.r + (d[1] || 0), 
        this.s + (d[2] || 0)
      );
    });
  }
}