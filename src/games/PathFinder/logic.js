// src/games/PathFinder/logic.js
// Core game engine — exact port of docs/Path Finder/02-logic-js.md (global `PF` in the docs).
// Pure ES module; no React/DOM dependencies.

var ROTATE_CW = {
  right: 'down', down: 'left', left: 'up', up: 'right',
  upright: 'downright', downright: 'downleft', downleft: 'upleft', upleft: 'upright'
};

var OPPOSITE = {
  right: 'left', left: 'right', up: 'down', down: 'up',
  upright: 'downleft', downleft: 'upright', downright: 'upleft', upleft: 'downright'
};

var VEC = { right: [0, 1], left: [0, -1], up: [-1, 0], down: [1, 0] };
var DIAG = {
  downright: { right: 'down', down: 'right' },
  upright: { right: 'up', up: 'right' },
  downleft: { left: 'down', down: 'left' },
  upleft: { left: 'up', up: 'left' }
};
var CARDINAL = { up: 1, down: 1, left: 1, right: 1 };

function rotateArrow(arrow, times) {
  if (arrow == null) return null;
  var a = arrow;
  var t = ((times % 4) + 4) % 4;
  for (var i = 0; i < t; i++) a = ROTATE_CW[a];
  return a;
}

function rotatePos(row, col, times) {
  var e = row, o = col;
  var t = ((times % 4) + 4) % 4;
  for (var i = 0; i < t; i++) {
    var tmp = 2 - e;
    e = o;
    o = tmp;
  }
  return { row: e, col: o };
}

// Canonical shapes: each shape = list of flip variants; each variant = {localRow, localCol, arrow}
// cells on a 3x3 local grid, at rotateState 0.
var SHAPES = {
  straight: [
    [
      { localRow: 1, localCol: 0, arrow: 'right' },
      { localRow: 1, localCol: 1, arrow: 'right' },
      { localRow: 1, localCol: 2, arrow: 'right' }
    ],
    [
      { localRow: 1, localCol: 0, arrow: 'left' },
      { localRow: 1, localCol: 1, arrow: 'left' },
      { localRow: 1, localCol: 2, arrow: 'left' }
    ]
  ],
  lshape: [
    [
      { localRow: 1, localCol: 0, arrow: 'right' },
      { localRow: 1, localCol: 1, arrow: 'downright' },
      { localRow: 2, localCol: 1, arrow: 'down' }
    ],
    [
      { localRow: 1, localCol: 0, arrow: 'left' },
      { localRow: 1, localCol: 1, arrow: 'upleft' },
      { localRow: 2, localCol: 1, arrow: 'up' }
    ]
  ],
  tshape: [
    [
      { localRow: 0, localCol: 1, arrow: 'up' },
      { localRow: 1, localCol: 0, arrow: null },
      { localRow: 1, localCol: 1, arrow: 'upleft' },
      { localRow: 1, localCol: 2, arrow: 'left' }
    ],
    [
      { localRow: 0, localCol: 1, arrow: 'up' },
      { localRow: 1, localCol: 0, arrow: 'right' },
      { localRow: 1, localCol: 1, arrow: 'upright' },
      { localRow: 1, localCol: 2, arrow: null }
    ],
    [
      { localRow: 0, localCol: 1, arrow: null },
      { localRow: 1, localCol: 0, arrow: 'right' },
      { localRow: 1, localCol: 1, arrow: 'right' },
      { localRow: 1, localCol: 2, arrow: 'right' }
    ],
    [
      { localRow: 0, localCol: 1, arrow: 'down' },
      { localRow: 1, localCol: 0, arrow: null },
      { localRow: 1, localCol: 1, arrow: 'downright' },
      { localRow: 1, localCol: 2, arrow: 'right' }
    ],
    [
      { localRow: 0, localCol: 1, arrow: 'down' },
      { localRow: 1, localCol: 0, arrow: 'left' },
      { localRow: 1, localCol: 1, arrow: 'downleft' },
      { localRow: 1, localCol: 2, arrow: null }
    ],
    [
      { localRow: 0, localCol: 1, arrow: null },
      { localRow: 1, localCol: 0, arrow: 'left' },
      { localRow: 1, localCol: 1, arrow: 'left' },
      { localRow: 1, localCol: 2, arrow: 'left' }
    ]
  ]
};

SHAPES.plus = [
  [
    { localRow: 0, localCol: 1, arrow: 'up' },
    { localRow: 1, localCol: 0, arrow: null },
    { localRow: 1, localCol: 1, arrow: 'up' },
    { localRow: 1, localCol: 2, arrow: null },
    { localRow: 2, localCol: 1, arrow: 'up' }
  ],
  [
    { localRow: 0, localCol: 1, arrow: 'up' },
    { localRow: 1, localCol: 0, arrow: 'right' },
    { localRow: 1, localCol: 1, arrow: 'upright' },
    { localRow: 1, localCol: 2, arrow: null },
    { localRow: 2, localCol: 1, arrow: null }
  ],
  [
    { localRow: 0, localCol: 1, arrow: null },
    { localRow: 1, localCol: 0, arrow: 'right' },
    { localRow: 1, localCol: 1, arrow: 'right' },
    { localRow: 1, localCol: 2, arrow: 'right' },
    { localRow: 2, localCol: 1, arrow: null }
  ],
  [
    { localRow: 0, localCol: 1, arrow: 'down' },
    { localRow: 1, localCol: 0, arrow: null },
    { localRow: 1, localCol: 1, arrow: 'downright' },
    { localRow: 1, localCol: 2, arrow: 'right' },
    { localRow: 2, localCol: 1, arrow: null }
  ],
  [
    { localRow: 0, localCol: 1, arrow: 'down' },
    { localRow: 1, localCol: 0, arrow: null },
    { localRow: 1, localCol: 1, arrow: 'down' },
    { localRow: 1, localCol: 2, arrow: null },
    { localRow: 2, localCol: 1, arrow: 'down' }
  ],
  [
    { localRow: 0, localCol: 1, arrow: null },
    { localRow: 1, localCol: 0, arrow: null },
    { localRow: 1, localCol: 1, arrow: 'downleft' },
    { localRow: 1, localCol: 2, arrow: 'left' },
    { localRow: 2, localCol: 1, arrow: 'down' }
  ],
  [
    { localRow: 0, localCol: 1, arrow: null },
    { localRow: 1, localCol: 0, arrow: 'left' },
    { localRow: 1, localCol: 1, arrow: 'left' },
    { localRow: 1, localCol: 2, arrow: 'left' },
    { localRow: 2, localCol: 1, arrow: null }
  ],
  [
    { localRow: 0, localCol: 1, arrow: null },
    { localRow: 1, localCol: 0, arrow: 'left' },
    { localRow: 1, localCol: 1, arrow: 'upleft' },
    { localRow: 1, localCol: 2, arrow: null },
    { localRow: 2, localCol: 1, arrow: 'up' }
  ]
];

function numVariants(shape) {
  return SHAPES[shape].length;
}

function variantCells(shape, rot, flip) {
  var n = SHAPES[shape].length;
  var variant = SHAPES[shape][((flip % n) + n) % n];
  return variant.map(function (c) {
    var p = rotatePos(c.localRow, c.localCol, rot);
    return { localRow: p.row, localCol: p.col, arrow: rotateArrow(c.arrow, rot) };
  });
}


function Wv(blockRow, blockCol, shapeType, rotateState, flipState) {
  var local = variantCells(shapeType, ((rotateState % 4) + 4) % 4, flipState);
  return {
    id: 'block_' + blockRow + '_' + blockCol,
    blockRow: blockRow,
    blockCol: blockCol,
    shapeType: shapeType,
    rotateState: ((rotateState % 4) + 4) % 4,
    flipState: flipState,
    cells: expandCells(local, blockRow, blockCol)
  };
}

// Build a block from an explicit local cell list (used by data.js).
function lD(blockRow, blockCol, shapeType, rotateState, flipState, localCells) {
  var local = localCells.map(function (c) {
    return { localRow: c.localR, localCol: c.localC, arrow: c.dir };
  });
  return {
    id: 'block_' + blockRow + '_' + blockCol,
    blockRow: blockRow,
    blockCol: blockCol,
    shapeType: shapeType,
    rotateState: ((rotateState % 4) + 4) % 4,
    flipState: flipState,
    cells: expandCells(local, blockRow, blockCol)
  };
}

function fillBlocks(list, count) {
  var byPos = {};
  list.forEach(function (b) { byPos[b.blockRow + '_' + b.blockCol] = b; });
  var out = [];
  for (var br = 0; br < count; br++) {
    for (var bc = 0; bc < count; bc++) {
      var b = byPos[br + '_' + bc];
      out.push(b || Wv(br, bc, 'tshape', 0, 0));
    }
  }
  return out;
}

function b_(id, blocks, minMoves, startCell, endCell, customLayout, blocksCount) {
  return {
    id: id,
    gridSize: 3 * blocksCount,
    blocksCount: blocksCount,
    blocks: blocks,
    startCell: startCell,
    endCell: endCell,
    timeLimit: 240,
    minMoves: minMoves,
    customLayout: customLayout
  };
}

// map: { "row,col": arrow|null } over the whole grid -> blocks. Shape inferred from dark-cell count.
function layoutToBlocks(map, count) {
  var groups = {};
  Object.keys(map).forEach(function (key) {
    var parts = key.split(',');
    var row = parseInt(parts[0], 10);
    var col = parseInt(parts[1], 10);
    var br = Math.floor(row / 3);
    var bc = Math.floor(col / 3);
    if (!groups[br + '_' + bc]) groups[br + '_' + bc] = [];
    groups[br + '_' + bc].push({ localR: row % 3, localC: col % 3, dir: map[key] });
  });
  var list = [];
  for (var br = 0; br < count; br++) {
    for (var bc = 0; bc < count; bc++) {
      var cells = groups[br + '_' + bc];
      if (!cells) continue;
      var cnt = cells.length;
      var shape = cnt >= 5 ? 'plus' : cnt === 4 ? 'tshape' : cnt === 3 ? 'lshape' : 'straight';
      list.push(lD(br, bc, shape, 0, 0, cells));
    }
  }
  return fillBlocks(list, count);
}

// Try all (rotateState 0..3) x (all flip variants); return exact canonical match of
// positions + arrows for the block's dark cells, else null.
function matchCanonical(b) {
  var dark = b.cells
    .filter(function (c) { return c.isDark; })
    .map(function (c) {
      return { localRow: c.row - 3 * b.blockRow, localCol: c.col - 3 * b.blockCol, arrow: c.arrow };
    });
  var n = numVariants(b.shapeType);
  for (var rot = 0; rot < 4; rot++) {
    for (var flip = 0; flip < n; flip++) {
      var cand = variantCells(b.shapeType, rot, flip);
      if (cand.length !== dark.length) continue;
      var key = function (c) { return c.localRow + ',' + c.localCol + ',' + c.arrow; };
      var set = {};
      cand.forEach(function (c) { set[key(c)] = true; });
      var ok = dark.every(function (c) { return set[key(c)]; });
      if (ok) return { rotateState: rot, flipState: flip };
    }
  }
  return null;
}

// 90 degrees CW. Mutates the block in place (live-board semantics used by the UI layer).
function rotateBlock(b) {
  var m = matchCanonical(b);
  if (m) {
    var nextRot = (m.rotateState + 1) % 4;
    b.cells = expandCells(variantCells(b.shapeType, nextRot, m.flipState), b.blockRow, b.blockCol);
    b.rotateState = nextRot;
  } else {
    b.cells.forEach(function (c) {
      if (!c.isDark) return;
      var local = rotatePos(c.row - 3 * b.blockRow, c.col - 3 * b.blockCol, 1);
      c.row = 3 * b.blockRow + local.row;
      c.col = 3 * b.blockCol + local.col;
      c.arrow = rotateArrow(c.arrow, 1);
    });
    b.rotateState = (b.rotateState + 1) % 4;
  }
  return b;
}

// "Change route direction". Mutates the block in place.
function flipBlock(b) {
  var n = numVariants(b.shapeType);
  if (b.shapeType === 'tshape' || b.shapeType === 'plus') {
    var m = matchCanonical(b);
    if (m) {
      var nextFlip = (m.flipState + 1) % n;
      b.cells = expandCells(variantCells(b.shapeType, m.rotateState, nextFlip), b.blockRow, b.blockCol);
      b.rotateState = m.rotateState;
      b.flipState = nextFlip;
    } else {
      b.cells.forEach(function (c) {
        if (c.isDark && c.arrow != null) c.arrow = OPPOSITE[c.arrow];
      });
      b.flipState = (b.flipState + 1) % n;
    }
  } else {
    // straight / lshape: always reverse arrows
    b.cells.forEach(function (c) {
      if (c.isDark && c.arrow != null) c.arrow = OPPOSITE[c.arrow];
    });
    b.flipState = b.flipState + 1;
  }
  return b;
}


function expandCells(localCells, blockRow, blockCol) {
  var cells = [];
  for (var r = 0; r < 3; r++) {
    for (var c = 0; c < 3; c++) {
      cells.push({ row: 3 * blockRow + r, col: 3 * blockCol + c, isDark: false, arrow: null });
    }
  }
  localCells.forEach(function (lc) {
    var idx = lc.localRow * 3 + lc.localCol;
    cells[idx].isDark = true;
    cells[idx].arrow = lc.arrow;
  });
  return cells;
}

// Ray-trace path validation.
function validate(puzzle, blocks) {
  var n = puzzle.gridSize;
  var map = {};
  (blocks || puzzle.blocks).forEach(function (b) {
    b.cells.forEach(function (c) { map[c.row + ',' + c.col] = c; });
  });

  var cur = { row: puzzle.startCell.row, col: puzzle.startCell.col };
  var entering;
  if (cur.col === 0) entering = 'right';
  else if (cur.col === n - 1) entering = 'left';
  else if (cur.row === 0) entering = 'down';
  else if (cur.row === n - 1) entering = 'up';
  else entering = 'right';

  var path = [];
  var seen = {};
  var limit = n * n + 4;

  for (var step = 0; step < limit; step++) {
    var key = cur.row + ',' + cur.col;
    if (seen[key]) break;
    seen[key] = true;
    path.push(key);

    if (cur.row === puzzle.endCell.row && cur.col === puzzle.endCell.col) {
      return { valid: true, path: path };
    }

    var cell = map[key];
    if (!cell || !cell.isDark || cell.arrow == null) break;

    var exit;
    if (CARDINAL[cell.arrow]) {
      exit = cell.arrow;
    } else {
      exit = DIAG[cell.arrow][entering];
      if (!exit) break;
    }

    var v = VEC[exit];
    var next = { row: cur.row + v[0], col: cur.col + v[1] };

    if (next.row < 0 || next.row >= n || next.col < 0 || next.col >= n) {
      if (next.col === n && next.row === puzzle.endCell.row) {
        path.push(puzzle.endCell.row + ',' + puzzle.endCell.col);
        return { valid: true, path: path };
      }
      break;
    }

    cur = next;
    entering = exit;
  }

  return { valid: false, path: path };
}

function cellsKey(cells) {
  return JSON.stringify(cells.map(function (c) { return [c.row, c.col, c.isDark, c.arrow]; }));
}

// All states reachable from a block via rotate/flip ops (BFS to fixpoint).
function reachableStates(block) {
  var start = cloneBlocks([block])[0];
  var states = [start.cells];
  var seen = {};
  seen[cellsKey(start.cells)] = 0;
  var queue = [start];
  while (queue.length) {
    var cur = queue.shift();
    [rotateBlock, flipBlock].forEach(function (op) {
      var nb = cloneBlocks([cur])[0];
      op(nb);
      var k = cellsKey(nb.cells);
      if (!(k in seen)) {
        seen[k] = states.length;
        states.push(nb.cells);
        queue.push(nb);
      }
    });
  }
  return states;
}

// Exact DFS solver with lazy per-block state assignment.
function solve(puzzle, blocks, nodeLimit) {
  if (nodeLimit == null) nodeLimit = 2000000;
  var n = puzzle.gridSize;
  var nb = n / 3;
  var src = blocks || puzzle.blocks;

  var states = src.map(function (b) { return reachableStates(b); });

  var memo = {};
  var nodes = 0;
  var result = null;

  function enteringAt(row, col) {
    if (col === 0) return 'right';
    if (col === n - 1) return 'left';
    if (row === 0) return 'down';
    if (row === n - 1) return 'up';
    return 'right';
  }

  function dfs(row, col, entering, assign, path) {
    if (result) return;
    if (nodes++ > nodeLimit) return;

    var key = row + ',' + col + '|' + entering + '|' + assign.join(',');
    if (memo[key]) return;
    memo[key] = true;

    path.push(row + ',' + col);

    var bi = Math.floor(row / 3) * nb + Math.floor(col / 3);
    var options = assign[bi] >= 0 ? [assign[bi]] : states[bi].map(function (_, i) { return i; });

    for (var oi = 0; oi < options.length; oi++) {
      var si = options[oi];
      var cells = states[bi][si];
      var localIdx = (row % 3) * 3 + (col % 3);
      var cell = cells[localIdx];
      if (!cell || !cell.isDark || cell.arrow == null) continue;

      var exit;
      if (CARDINAL[cell.arrow]) {
        exit = cell.arrow;
      } else {
        exit = DIAG[cell.arrow][entering];
        if (!exit) continue;
      }

      var v = VEC[exit];
      var nr = row + v[0];
      var nc = col + v[1];

      if (nr < 0 || nr >= n || nc < 0 || nc >= n) {
        if (nc === n && nr === puzzle.endCell.row) {
          var finalAssign = assign.slice();
          finalAssign[bi] = si;
          result = {
            assign: finalAssign,
            path: path.concat([puzzle.endCell.row + ',' + puzzle.endCell.col])
          };
          path.pop();
          return;
        }
        continue;
      }

      var nextAssign = assign.slice();
      nextAssign[bi] = si;
      dfs(nr, nc, exit, nextAssign, path);
      if (result) { path.pop(); return; }
    }

    path.pop();
  }

  var startAssign = src.map(function () { return -1; });
  dfs(
    puzzle.startCell.row,
    puzzle.startCell.col,
    enteringAt(puzzle.startCell.row, puzzle.startCell.col),
    startAssign,
    []
  );

  if (!result) return null;

  var finalBlocks = cloneBlocks(src);
  for (var bi = 0; bi < finalBlocks.length; bi++) {
    if (result.assign[bi] >= 0) {
      finalBlocks[bi].cells = states[bi][result.assign[bi]].map(function (c) {
        return { row: c.row, col: c.col, isDark: c.isDark, arrow: c.arrow };
      });
    }
  }

  var check = validate(puzzle, finalBlocks);
  if (!check.valid) return null;
  return { blocks: finalBlocks, path: check.path };
}

function cloneBlocks(blocks) {
  return blocks.map(function (b) {
    return {
      id: b.id,
      blockRow: b.blockRow,
      blockCol: b.blockCol,
      shapeType: b.shapeType,
      rotateState: b.rotateState == null ? 0 : b.rotateState,
      flipState: b.flipState == null ? 0 : b.flipState,
      cells: b.cells.map(function (c) {
        return { row: c.row, col: c.col, isDark: c.isDark, arrow: c.arrow };
      })
    };
  });
}

export {
  SHAPES, ROTATE_CW, OPPOSITE, VEC, DIAG, CARDINAL,
  rotateArrow, rotatePos, numVariants, variantCells, expandCells,
  Wv, lD, fillBlocks, b_, layoutToBlocks,
  matchCanonical, rotateBlock, flipBlock,
  validate, reachableStates, solve, cloneBlocks
};

