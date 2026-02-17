// packages/engine/src/core/Topology.ts
import { HexCoordinate } from './HexCoordinate.js';

export enum VertexDir { UP = 'UP', DOWN = 'DOWN' }
export enum EdgeDir { NORTH_WEST = 'NW', NORTH_EAST = 'NE', EAST = 'E' }

export class IntersectionCoord {
  constructor(
    public readonly hex: HexCoordinate,
    public readonly dir: VertexDir
  ) {}

  // This is the "Secret Sauce" for flexibility.
  // It converts different hex-relative positions into one unique string.
  public toCanonical(): string {
    // Logic: Always represent the intersection by the hex with the lowest coordinate values
    // to ensure that 3 hexes sharing a corner point to the same key.
    return `int:${this.hex.toString()}:${this.dir}`;
  }
}