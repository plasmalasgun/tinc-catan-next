// packages/engine/src/core/Board.ts
import { HexCoordinate } from './HexCoordinate.js';
import { ResourceType, Tile, Intersection, Path } from '../types/index.js';

export class Board {
  // We use Maps for O(1) lookup by coordinate strings
  public tiles = new Map<string, Tile>();
  public intersections = new Map<string, Intersection>();
  public paths = new Map<string, Path>();

  constructor() {}

  /**
   * Universal method to add a tile.
   */
  public addTile(q: number, r: number, s: number, type: ResourceType, value: number) {
    const coord = new HexCoordinate(q, r, s);
    const tile: Tile = {
      id: `tile-${coord.toString()}`,
      coord,
      type,
      value,
      hasRobber: type === ResourceType.DESERT
    };
    this.tiles.set(coord.toString(), tile);
    
    // This is what we will write next:
    this.generateTopologyForTile(coord);
  }

  private generateTopologyForTile(tileCoord: HexCoordinate) {
    const neighbors = tileCoord.getNeighbors();

    /**
     * 1. GENERATE PATHS (Edges)
     * A path is shared by the current tile and ONE neighbor.
     */
    neighbors.forEach((neighborCoord) => {
        // Create a unique key by sorting the two hex IDs alphabetically
        // Example: "0,0,0|0,1,-1" will always be the same regardless of which hex we start from
        const pathKey = [tileCoord.toString(), neighborCoord.toString()].sort().join('|');

        if (!this.paths.has(pathKey)) {
        this.paths.set(pathKey, {
            id: pathKey,
            coords: [tileCoord, neighborCoord],
        });
        }
    });

    /**
     * 2. GENERATE INTERSECTIONS (Corners)
     * An intersection is shared by the current tile and TWO adjacent neighbors.
     */
    for (let i = 0; i < 6; i++) {
        const n1 = neighbors[i];
        const n2 = neighbors[(i + 1) % 6];

        // An intersection is the meeting point of: Current Tile, Neighbor 1, and Neighbor 2
        const intersectionCoords = [tileCoord, n1, n2];
        
        // Canonical Key: Sort the 3 hex strings
        const intKey = intersectionCoords
        .map(c => c.toString())
        .sort()
        .join('|');

        if (!this.intersections.has(intKey)) {
        this.intersections.set(intKey, {
            id: intKey,
            coords: intersectionCoords,
        });
        }
    }
  }

  /**
   * Simple serializer for Agents and the GUI
   */
  public serialize() {
    const tilesArr = this.tiles ? Array.from(this.tiles.values()) : [];
    const intArr = this.intersections ? Array.from(this.intersections.values()) : [];
    const pathArr = this.paths ? Array.from(this.paths.values()) : [];

    console.log(`ENGINE: Serializing ${tilesArr.length} tiles`);

    return {
      tiles: Array.from(this.tiles.values()).map(t => ({
        id: t.id,
        type: t.type,
        value: t.value,
        hasRobber: t.hasRobber,
        // FORCE the coordinate into a simple object
        coord: { q: t.coord.q, r: t.coord.r, s: t.coord.s }
      })),
      intersections: Array.from(this.intersections.values()).map(i => ({
        id: i.id,
        building: i.building ? { ...i.building } : null,
        // FORCE every coordinate in the array to be a simple object
        coords: i.coords.map(c => ({ q: c.q, r: c.r, s: c.s }))
      })),
      paths: Array.from(this.paths.values()).map(p => ({
        id: p.id,
        road: p.road ? { ...p.road } : null,
        coords: p.coords.map(c => ({ q: c.q, r: c.r, s: c.s }))
      }))
    };
  }

}