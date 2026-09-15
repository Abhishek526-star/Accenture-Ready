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
  },
  '5x5-grid': {
    id: '5x5-grid',
    name: '5×5 Grid',
    gridSize: 5,
    numberOfKeys: 1,
    difficulty: 'Master',
    timeLimit: 280, // 4:40
    description: 'A larger 5x5 invisible maze requiring keen spatial memory. Find the key and unlock the exit door.'
  },
  '5x5-two-keys': {
    id: '5x5-two-keys',
    name: '5×5 Two Keys',
    gridSize: 5,
    numberOfKeys: 2,
    difficulty: 'Grandmaster',
    timeLimit: 300, // 5:00
    description: 'A challenging 5x5 maze with 2 hidden keys. Collect Key 1 and Key 2 before reaching the door.'
  },
  '6x6-grid': {
    id: '6x6-grid',
    name: '6×6 Grid',
    gridSize: 6,
    numberOfKeys: 1,
    difficulty: 'Legend',
    timeLimit: 320, // 5:20
    description: 'A massive 6x6 invisible maze. Navigate the winding hidden path, collect the key and unlock the exit door.'
  },
  '6x6-two-keys': {
    id: '6x6-two-keys',
    name: '6×6 Two Keys',
    gridSize: 6,
    numberOfKeys: 2,
    difficulty: 'Mythic',
    timeLimit: 360, // 6:00
    description: 'The ultimate challenge — a 6x6 invisible maze with 2 hidden keys spread across the grid. Collect both before reaching the door.'
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
 * BFS to find the shortest path between two points avoiding walls
 */
function bfsShortestPath(cells, size, fromPt, toPt) {
  const queue = [[fromPt.r, fromPt.c]];
  const visited = Array.from({ length: size }, () => Array(size).fill(false));
  const parent = Array.from({ length: size }, () => Array(size).fill(null));
  visited[fromPt.r][fromPt.c] = true;

  while (queue.length > 0) {
    const [r, c] = queue.shift();
    if (r === toPt.r && c === toPt.c) {
      const path = [];
      let curr = [r, c];
      while (curr) {
        path.push({ r: curr[0], c: curr[1] });
        curr = parent[curr[0]][curr[1]];
      }
      return path.reverse();
    }

    const currentCell = cells[r][c];

    // UP
    if (r > 0 && !currentCell.walls.top && !visited[r - 1][c]) {
      visited[r - 1][c] = true;
      parent[r - 1][c] = [r, c];
      queue.push([r - 1, c]);
    }
    // DOWN
    if (r < size - 1 && !currentCell.walls.bottom && !visited[r + 1][c]) {
      visited[r + 1][c] = true;
      parent[r + 1][c] = [r, c];
      queue.push([r + 1, c]);
    }
    // LEFT
    if (c > 0 && !currentCell.walls.left && !visited[r][c - 1]) {
      visited[r][c - 1] = true;
      parent[r][c - 1] = [r, c];
      queue.push([r, c - 1]);
    }
    // RIGHT
    if (c < size - 1 && !currentCell.walls.right && !visited[r][c + 1]) {
      visited[r][c + 1] = true;
      parent[r][c + 1] = [r, c];
      queue.push([r, c + 1]);
    }
  }

  return [];
}

/**
 * Computes the optimal step-by-step path from Start to Key(s) to Door
 */
export function computeOptimalSolution(cells, size, start, keys, door) {
  function getPathForOrder(keyOrder) {
    let fullPath = [];
    let current = start;
    for (const k of keyOrder) {
      const segment = bfsShortestPath(cells, size, current, k);
      if (segment.length === 0) return null;
      fullPath = fullPath.length > 0 ? fullPath.concat(segment.slice(1)) : segment;
      current = k;
    }
    const finalSegment = bfsShortestPath(cells, size, current, door);
    if (finalSegment.length === 0) return null;
    return fullPath.length > 0 ? fullPath.concat(finalSegment.slice(1)) : finalSegment;
  }

  if (!keys || keys.length === 0) {
    return bfsShortestPath(cells, size, start, door);
  }

  let best = getPathForOrder(keys);
  if (keys.length === 2) {
    const alt = getPathForOrder([keys[1], keys[0]]);
    if (!best || (alt && alt.length < best.length)) {
      best = alt;
    }
  }

  return best || [];
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
  } else if (variantKey === '4x4-two-keys') {
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
  } else if (variantKey === '5x5-grid') {
    // 5×5 Grid — 1 Key  (Master difficulty, harder)
    // Start: (0,0) | Key: (3,1) | Door: (4,4)
    // Serpentine path (22 steps):
    // (0,0)→(0,1)→(0,2)→(0,3)→(1,3)→(1,2)→(1,1)→(1,0)→(2,0)→(2,1)
    //      →(3,1)[KEY]→(3,0)→(4,0)→(4,1)→(4,2)→(3,2)→(2,2)→(2,3)
    //      →(2,4)→(3,4)→(3,3)→(4,3)→(4,4)[DOOR]
    start = { r: 0, c: 0 };
    keys = [{ r: 3, c: 1, id: 'k1', label: 'Key 1' }];
    door = { r: 4, c: 4 };

    addWall(cells, 0, 0, 1, 0);  // force going RIGHT from start
    addWall(cells, 0, 3, 0, 4);  // block row-0 far-right
    addWall(cells, 0, 4, 1, 4);  // block col-4 top
    addWall(cells, 1, 3, 1, 4);  // block row-1 right
    addWall(cells, 1, 4, 2, 4);  // block col-4 upper-mid
    addWall(cells, 2, 0, 3, 0);  // block col-0 mid shortcut
    addWall(cells, 2, 1, 2, 2);  // block row-2 center shortcut
    addWall(cells, 2, 3, 3, 3);  // block col-3 mid
    addWall(cells, 3, 1, 3, 2);  // block row-3 left of key
    addWall(cells, 3, 2, 3, 3);  // block row-3 center
    addWall(cells, 3, 4, 4, 4);  // block col-4 right side
    addWall(cells, 4, 2, 4, 3);  // block row-4 center
  } else if (variantKey === '5x5-two-keys') {
    // 5×5 Two Keys  (Grandmaster difficulty, harder)
    // Start: (0,0) | Key1: (0,4) | Key2: (4,0) | Door: (4,4)
    // Cross-path K1-first (23 steps):
    // (0,0)→(1,0)→(2,0)→(2,1)→(1,1)→(0,1)→(0,2)→(0,3)→(0,4)[K1]
    //      →(1,4)→(1,3)→(2,3)→(2,4)→(3,4)→(3,3)→(3,2)→(3,1)→(3,0)
    //      →(4,0)[K2]→(4,1)→(4,2)→(4,3)→(4,4)[DOOR]
    start = { r: 0, c: 0 };
    keys = [
      { r: 0, c: 4, id: 'k1', label: 'Key 1' },
      { r: 4, c: 0, id: 'k2', label: 'Key 2' }
    ];
    door = { r: 4, c: 4 };

    addWall(cells, 0, 0, 0, 1);  // block right from start — must go DOWN
    addWall(cells, 0, 2, 1, 2);  // block col-2 rows 0-1
    addWall(cells, 0, 3, 1, 3);  // block col-3 rows 0-1
    addWall(cells, 1, 0, 1, 1);  // block row-1 left shortcut
    addWall(cells, 1, 1, 1, 2);  // block row-1 center
    addWall(cells, 1, 2, 1, 3);  // block row-1 further
    addWall(cells, 2, 0, 3, 0);  // block col-0 mid
    addWall(cells, 2, 1, 3, 1);  // block col-1 mid
    addWall(cells, 2, 2, 2, 3);  // block row-2 center
    addWall(cells, 2, 2, 3, 2);  // block col-2 mid
    addWall(cells, 3, 3, 4, 3);  // block col-3 lower
    addWall(cells, 3, 4, 4, 4);  // block col-4 lower
  } else if (variantKey === '6x6-grid') {
    // 6×6 Grid – 1 Key  (Legend difficulty)
    // Start: (0,0) | Key 1: (4,2) | Door: (5,5)
    // Serpentine path (20 steps):
    // (0,0)→(1,0)→(2,0)→(2,1)→(2,2)→(1,2)→(0,2)→(0,3)→(0,4)
    //      →(1,4)→(1,5)→(2,5)→(3,5)→(3,4)→(3,3)→(3,2)→(4,2)[KEY]
    //      →(4,3)→(5,3)→(5,4)→(5,5)[DOOR]
    start = { r: 0, c: 0 };
    keys  = [{ r: 4, c: 2, id: 'k1', label: 'Key 1' }];
    door  = { r: 5, c: 5 };

    // Traps near start — block obvious "go right"
    addWall(cells, 0, 0, 0, 1);  // block right from start — must go DOWN
    addWall(cells, 0, 1, 1, 1);  // block (0,1)↔(1,1) trap
    addWall(cells, 0, 1, 0, 2);  // block row-0 early slide

    // Chokepoints in the middle
    addWall(cells, 0, 3, 1, 3);  // block (0,3)↔(1,3) — can't shortcut down mid
    addWall(cells, 0, 4, 0, 5);  // block row-0 far-right — must detour via (1,4)
    addWall(cells, 0, 5, 1, 5);  // block col-5 top approach
    addWall(cells, 1, 2, 1, 3);  // block row-1 mid (force U-shape via row 0)
    addWall(cells, 1, 3, 1, 4);  // block row-1 right section
    addWall(cells, 2, 1, 3, 1);  // block col-1 mid — can't shortcut via col 1
    addWall(cells, 2, 4, 2, 5);  // block (2,4)↔(2,5) — can't shortcut col-5 early
    addWall(cells, 2, 0, 3, 0);  // block col-0 lower

    // Near key
    addWall(cells, 3, 1, 3, 2);  // block row-3 left — must approach key from above
    addWall(cells, 3, 5, 4, 5);  // block col-5 lower-right bypass

    // Near door — force specific approach
    addWall(cells, 4, 0, 4, 1);  // block row-4 left trap
    addWall(cells, 4, 2, 5, 2);  // block going down from key
    addWall(cells, 4, 3, 4, 4);  // block row-4 right — must go down via (5,3)
    addWall(cells, 4, 4, 5, 4);  // block col-4 approach to door
    addWall(cells, 4, 5, 5, 5);  // block (4,5)↔(5,5) top-of-door trap
    addWall(cells, 5, 0, 5, 1);  // seal bottom-left dead end
    addWall(cells, 5, 1, 5, 2);  // seal bottom row left
    addWall(cells, 5, 2, 5, 3);  // seal bottom row — force (5,3)→(5,4)→(5,5)
    // Extra blocking walls — seal left column and lower-left traps
    addWall(cells, 1, 0, 1, 1);  // block row-1 right from col-0
    addWall(cells, 2, 0, 3, 0);  // block col-0 rows 2-3
    addWall(cells, 3, 0, 4, 0);  // block col-0 rows 3-4
    addWall(cells, 4, 0, 5, 0);  // block col-0 rows 4-5
    addWall(cells, 4, 1, 5, 1);  // block col-1 rows 4-5 (lower-left trap)
  } else {
    // 6×6 Two Keys  (Mythic difficulty — border walls edition)
    // Start: (0,0) | Key 1: (0,5) | Key 2: (5,0) | Door: (5,5)
    // Interior serpentine path (27 steps, K1-first):
    // (0,0)→(1,0)→(1,1)→(2,1)→(2,2)→(1,2)→(1,3)→(1,4)→(0,4)→(0,5)[K1]
    //      →(1,5)→(2,5)→(2,4)→(3,4)→(3,3)→(3,2)→(3,1)→(3,0)
    //      →(4,0)→(5,0)[K2]→(5,1)→(5,2)→(5,3)→(4,3)→(4,4)→(5,4)→(5,5)[DOOR]
    start = { r: 0, c: 0 };
    keys  = [
      { r: 0, c: 5, id: 'k1', label: 'Key 1' },
      { r: 5, c: 0, id: 'k2', label: 'Key 2' }
    ];
    door  = { r: 5, c: 5 };

    // Border walls — seal top row (only gate: (0,4)↔(0,5) to reach K1)
    addWall(cells, 0, 0, 0, 1);  // top-left locked
    addWall(cells, 0, 1, 0, 2);  // top row locked
    addWall(cells, 0, 2, 0, 3);  // top row locked
    addWall(cells, 0, 3, 0, 4);  // top row locked — only (0,4)↔(0,5) stays open

    // Border walls — seal left col (gates: (0,0)↔(1,0), (3,0)↔(4,0), (4,0)↔(5,0))
    addWall(cells, 1, 0, 2, 0);  // left col rows 1-2 locked
    addWall(cells, 2, 0, 3, 0);  // left col rows 2-3 locked

    // Border walls — seal right col (gates: (0,5)↔(1,5), (1,5)↔(2,5))
    addWall(cells, 2, 5, 3, 5);  // right col rows 2-3 locked
    addWall(cells, 3, 5, 4, 5);  // right col rows 3-4 locked
    addWall(cells, 4, 5, 5, 5);  // right col rows 4-5 locked

    // Border walls — seal bottom row (gates: (5,0)↔(5,1), (5,1)↔(5,2), (5,2)↔(5,3), (5,4)↔(5,5))
    addWall(cells, 5, 3, 5, 4);  // bottom row sealed — force (5,3)→(4,3) UP

    // Interior walls — block shortcuts through the open interior
    addWall(cells, 0, 1, 1, 1);  // (0,1)↔(1,1) trap near start
    addWall(cells, 1, 4, 2, 4);  // block col-4 mid
    addWall(cells, 2, 2, 2, 3);  // row-2 center shortcut
    addWall(cells, 2, 3, 2, 4);  // row-2 right shortcut
    addWall(cells, 3, 2, 4, 2);  // (3,2)↔(4,2) block lower-center
    addWall(cells, 3, 3, 4, 3);  // (3,3)↔(4,3) trap near door approach
    addWall(cells, 4, 1, 4, 2);  // row-4 left-center
    addWall(cells, 4, 1, 5, 1);  // (4,1)↔(5,1) col-1 lower trap
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
    const fallbackPath = computeOptimalSolution(cleanCells, size, start, keys, door);
    return {
      variant: config,
      size,
      cells: cleanCells,
      start,
      keys,
      door,
      solutionPath: fallbackPath
    };
  }

  const solutionPath = computeOptimalSolution(cells, size, start, keys, door);

  return {
    variant: config,
    size,
    cells,
    start,
    keys,
    door,
    solutionPath
  };
}
