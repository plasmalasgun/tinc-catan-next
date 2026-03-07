export const COLOR_TO_EMOJI = {
  "#e74c3c": "🔴", // Red
  "#e67e22": "🟠", // Orange
  "#f1c40f": "🟡", // Yellow
  "#27ae60": "🟢", // Green
  "#3498db": "🔵", // Blue
  "#9b59b6": "🟣", // Purple
  "#222222": "⚫", // Black
  "#ffffff": "⚪", // White
  "#8b4513": "🟤", // Brown
};

export const RESOURCE_TYPES = {
  brick: { label: 'Brick', color: '#e67e22', icon: '🧱' },
  wood: { label: 'Wood', color: '#27ae60', icon: '🌲' },
  wheat: { label: 'Wheat', color: '#f1c40f', icon: '🌾' },
  sheep: { label: 'Sheep', color: '#95a5a6', icon: '🐑' },
  ore: { label: 'Ore', color: '#7f8c8d', icon: '🪨' }
};

export const COSTS = {
  ROAD: { brick: 1, wood: 1 },
  SETTLEMENT: { brick: 1, wood: 1, wheat: 1, sheep: 1 },
  CITY: { wheat: 2, ore: 3 },
  DEV_CARD: { wheat: 1, sheep: 1, ore: 1 }
};