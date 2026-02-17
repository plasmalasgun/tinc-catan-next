import { getPixelCoords } from './layout';
export const HEX_SIZE = 50; // Radius of the hex

export function getPixelCoords(q: number, r: number) {
  
  // If either value is missing, return a safe coordinate and STOP.
  // This prevents the code from even TRYING to read 's' (or '_s').
  if (q === undefined || r === undefined || q === null || r === null) {
    console.log("client/src/utils/layout.ts->getPixelCoords - (q === undefined || r === undefined || q === null || r === null)");
    return { x: 0, y: 0 };
  }

 // console.log("client/src/utils/layout.ts->getPixelCoords - q:"+q+" r:"+r);
  
  const x = HEX_SIZE * (Math.sqrt(3) * q + (Math.sqrt(3) / 2) * r);
  const y = HEX_SIZE * (3/2) * r;
  return { x, y };
}

export function getHexPoints() {
  const points = [];
  for (let i = 0; i < 6; i++) {
    const angle_deg = 60 * i - 30;
    const angle_rad = (Math.PI / 180) * angle_deg;
    points.push(
      `${HEX_SIZE * Math.cos(angle_rad)},${HEX_SIZE * Math.sin(angle_rad)}`
    );
  }
  return points.join(" ");
}

/**
 * Calculates the visual center point of an intersection or path 
 * by averaging the pixel coordinates of the hexes that share it.
 */
export function getAveragePixelCoords(coords) {
  if (!coords || !Array.isArray(coords) || coords.length === 0) {
    return { x: 0, y: 0 };
  }

  // Filter out any "ghost" coordinates that are undefined
  const valid = coords.filter(c => c && typeof c.q === 'number' && typeof c.r === 'number');
  
  if (valid.length === 0) return { x: 0, y: 0 };

  const pixels = valid.map(c => getPixelCoords(c.q, c.r));
  const avgX = pixels.reduce((sum, p) => sum + p.x, 0) / pixels.length;
  const avgY = pixels.reduce((sum, p) => sum + p.y, 0) / pixels.length;
  
  return { x: avgX, y: avgY };
}