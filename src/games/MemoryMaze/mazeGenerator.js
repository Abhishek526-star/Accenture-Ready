// src/games/MemoryMaze/mazeGenerator.js

/**
 * Memory Maze Config & Generator
 * Authentic Invisible-Wall Model:
 * Each cell internally contains wall flags for { top, right, bottom, left }.
 * Movement from cell to cell is blocked if the shared edge has a wall.
 * 
 * 4 Variants:
 * 1. Find the Key: 3x3, 1 Key, 1 Door (matching Screenshot 1: Start at (1,1), Key at (0,0), Door at (2,2))
 * 2. Practice 2: 3x3, 1 Key, 1 Door (alternative layout)
 * 3. 4x4 Grid: 4x4, 1 Key, 1 Door
 * 4. 4x4 Two Keys: 4x4, 2 Keys, 1 Door (must collect both keys)
 */

export const MEMORY_MAZE_VARIANTS = {
  'find-the-key': {
    id: 'find-the-key',
    name: 'Find the Key',
    gridSize: 3,
    numberOfKeys: 1,
    difficulty: 'Easy',
    timeLimit: 233, // 3:53 matching Screenshot 1
    description: 'Learn invisible wall locations through trial and error. Collect the key and reach the door in the fewest attempts.'
  },
  'practice-2': {
    id: 'practice-2',
    name: 'Practice 2',
    gridSize: 3,
    numberOfKeys: 1,
    difficulty: 'Medium',
    timeLimit: 233,
    description: 'A 3x3 practice maze with a trickier hidden wall arrangement.'
  },
  '4x4-grid': {
    id: '4x4-grid',
    name: '4×4 Grid',
    gridSize: 4,
    numberOfKeys: 1,
    difficulty: 'Hard',
    timeLimit: 240, // 4:00
    description: 'A larger 4x4 invisible maze requiring keen spatial memory.'
  },
  '4x4-two-keys': {
    id: '4x4-two-keys',
    name: '4×4 Two Keys',
    gridSize: 4,
    numberOfKeys: 2,
    difficulty: 'Expert',
    timeLimit: 260, // 4:20
    description: 'Collect both Key 1 and Key 2 before the door unlocks.'
  }
};

/**
 * Helper to create an empty cell
 */
function createCell(r, c) {
  return {
    row: r,
    column: c,
    walls: {
      top: false,
      right: false,
      bottom: false,
      left: false
    }
  };
}

/**
 * Adds an internal bidirectional wall between (r1, c1) and (r2, c2)
 */
function addWall(cells, r1, c1, r2, c2) {
  if (r1 === r2) {
    // Horizontal neighbors
    const leftCol = Math.min(c1, c2);
    const rightCol = Math.max(c1, c2);
    if (cells[r1] && cells[r1][leftCol] && cells[r1][rightCol]) {
      cells[r1][leftCol].walls.right = true;
      cells[r1][rightCol].walls.left = true;
    }
  } else if (c1 === c2) {
    // Vertical neighbors
    const topRow = Math.min(r1, r2);
    const bottomRow = Math.max(r1, r2);
    if (cells[topRow] && cells[bottomRow] && cells[topRow][c1] && cells[bottomRow][c1]) {
      cells[topRow][c1].walls.bottom = true;
      cells[bottomRow][c1].walls.top = true;
    }
  }
}

/**
 * BFS to verify target reachable from start through open cell-edge passages
 */
function isReachable(cells, size, start, target) {
  const queue = [[start.r, start.c]];
  const visited = Array.from({ length: size }, () => Array(size).fill(false));
  visited[start.r][start.c] = true;

  while (queue.length > 0) {
    const [r, c] = queue.shift();
    if (r === target.r && c === target.c) return true;

    const currentCell = cells[r][c];

    // UP
    if (r > 0 && !currentCell.walls.top && !visited[r - 1][c]) {
      visited[r - 1][c] = true;
      queue.push([r - 1, c]);
    }
    // DOWN
    if (r < size - 1 && !currentCell.walls.bottom && !visited[r + 1][c]) {
      visited[r + 1][c] = true;
      queue.push([r + 1, c]);
    }
    // LEFT
    if (c > 0 && !currentCell.walls.left && !visited[r][c - 1]) {
      visited[r][c - 1] = true;
      queue.push([r, c - 1]);
    }
    // RIGHT
    if (c < size - 1 && !currentCell.walls.right && !visited[r][c + 1]) {
      visited[r][c + 1] = true;
      queue.push([r, c + 1]);
    }
  }

  return false;
}

/**
 * Generate a validated, 100% solvable Memory Maze for a given variant
 */
export function generateMemoryMaze(variantKey = 'find-the-key') {
  const config = MEMORY_MAZE_VARIANTS[variantKey] || MEMORY_MAZE_VARIANTS['find-the-key'];
  const size = config.gridSize;

  // Initialize cells
  const cells = Array.from({ length: size }, (_, r) =>
    Array.from({ length: size }, (_, c) => createCell(r, c))
  );

  let start, keys, door;

  if (variantKey === 'find-the-key') {
    // Screenshot 1 exact setup:
    // 3x3 Grid
    // Start at center (1, 1)
    // Key at top-left (0, 0)
    // Door at bottom-right (2, 2)
    start = { r: 1, c: 1 };
    keys = [{ r: 0, c: 0, id: 'k1', label: 'Key 1' }];
    door = { r: 2, c: 2 };

    // Walls configuration:
    // Wall between (1,1) and (0,1) -> Player can't move straight UP to (0,1)
    // Wall between (1,0) and (2,0) -> Left-down passage blocked
    // Wall between (1,2) and (2,2) -> Direct step to door from right blocked
    // Valid route: (1,1) -> LEFT to (1,0) -> UP to (0,0)[KEY!] -> RIGHT to (0,1) -> RIGHT to (0,2) -> DOWN to (1,2) -> ...
    addWall(cells, 1, 1, 0, 1);
    addWall(cells, 1, 0, 2, 0);
    addWall(cells, 1, 2, 2, 2);
  } else if (variantKey === 'practice-2') {
    // 3x3 Practice 2
    start = { r: 2, c: 0 };
    keys = [{ r: 0, c: 2, id: 'k1', label: 'Key 1' }];
    door = { r: 0, c: 0 };

    addWall(cells, 2, 0, 1, 0);
    addWall(cells, 1, 1, 1, 2);
    addWall(cells, 0, 1, 0, 2);
  } else if (variantKey === '4x4-grid') {
    // 4x4 Grid with 1 Key
    start = { r: 0, c: 0 };
    keys = [{ r: 2, c: 1, id: 'k1', label: 'Key 1' }];
    door = { r: 3, c: 3 };

    addWall(cells, 0, 0, 1, 0);
    addWall(cells, 0, 2, 0, 3);
    addWall(cells, 1, 1, 2, 1);
    addWall(cells, 2, 2, 2, 3);
    addWall(cells, 2, 3, 3, 3);
  } else {
    // 4x4 Two Keys
    start = { r: 0, c: 0 };
    keys = [
      { r: 0, c: 3, id: 'k1', label: 'Key 1' },
      { r: 3, c: 0, id: 'k2', label: 'Key 2' }
    ];
    door = { r: 3, c: 3 };

    addWall(cells, 0, 1, 1, 1);
    addWall(cells, 1, 2, 1, 3);
    addWall(cells, 2, 0, 2, 1);
    addWall(cells, 2, 2, 3, 2);
    addWall(cells, 2, 3, 3, 3);
  }

  // Verify solvability
  let currentPt = start;
  let solvable = true;
  for (const k of keys) {
    if (!isReachable(cells, size, currentPt, k)) {
      solvable = false;
      break;
    }
    currentPt = k;
  }
  if (solvable && !isReachable(cells, size, currentPt, door)) {
    solvable = false;
  }

  // If ever unsolvable, clear offending wall
  if (!solvable) {
    console.warn(`Memory Maze ${variantKey} was unsolvable, resetting walls to ensure path`);
    const cleanCells = Array.from({ length: size }, (_, r) =>
      Array.from({ length: size }, (_, c) => createCell(r, c))
    );
    return {
      variant: config,
      size,
      cells: cleanCells,
      start,
      keys,
      door
    };
  }

  return {
    variant: config,
    size,
    cells,
    start,
    keys,
    door
  };
}
