// src/games/PathFinder/data.js
// Puzzle data — exact port of docs/Path Finder/03-data-js.md. Depends on logic.js (`PF`).

import * as PF from './logic.js';

// Helper: block from explicit local cells [[localRow, localCol, dir|null], ...]
function n(br, bc, shape, cells) {
  return PF.lD(
    br, bc, shape, 0, 0,
    cells.map(function (c) { return { localR: c[0], localC: c[1], dir: c[2] }; })
  );
}

function straightR(br, bc) {
  return n(br, bc, 'straight', [[1, 0, 'right'], [1, 1, 'right'], [1, 2, 'right']]);
}

function straightL(br, bc) {
  return n(br, bc, 'straight', [[1, 0, 'left'], [1, 1, 'left'], [1, 2, 'left']]);
}

// ---------------------------------------------------------------- 3x3 (9x9 grid)
// "row,col":arrow|null layout map over the whole grid.
var P3_MAP = {
  '0,1': 'up',
  '1,0': null, '1,1': 'upleft', '1,2': 'left',
  '1,3': 'right', '1,4': 'downright', '1,6': 'right', '1,7': 'downright',
  '2,4': 'down', '2,7': 'down',
  '3,4': 'up', '3,7': 'down',
  '4,0': 'right', '4,1': 'downright', '4,4': 'upleft', '4,5': 'left', '4,7': 'down',
  '5,1': 'down', '5,4': null, '5,7': 'down',
  '6,1': 'up', '6,4': 'down', '6,7': 'up',
  '7,0': null, '7,1': 'up', '7,2': null, '7,4': 'downright', '7,5': 'right',
  '7,6': 'right', '7,7': 'upright',
  '8,1': 'up'
};

var p3Blocks = PF.layoutToBlocks(P3_MAP, 3);
var p3Practice = PF.b_('practice_3x3', p3Blocks, 12, { row: 1, col: 0 }, { row: 1, col: 8 }, true, 3);

// Reference solved layout for the 3x3 practice board (derived from the built-in solver,
// verified with PF.validate — used by tests).
function solvedMapFrom(puzzle, blocks) {
  var res = PF.solve(puzzle, blocks);
  if (!res) return null;
  var map = {};
  res.blocks.forEach(function (b) {
    b.cells.forEach(function (c) {
      if (c.isDark) map[c.row + ',' + c.col] = c.arrow;
    });
  });
  return map;
}
var P3_SOLVED_MAP = solvedMapFrom(p3Practice, p3Blocks);

var v3x3 = {
  practice: p3Practice,
  games: [1, 2, 3, 4, 5].map(function (i) {
    return PF.b_(
      'game_' + i,
      PF.cloneBlocks(p3Blocks),
      12,
      { row: 1, col: 0 },
      { row: 1, col: 8 },
      true,
      3
    );
  }),
  solvedMap: P3_SOLVED_MAP
};


// ---------------------------------------------------------------- 3x3-2 (9x9 grid)
function blocks3x32() {
  return [
    n(0, 0, 'straight', [[1, 0, 'left'], [1, 1, 'left'], [1, 2, 'left']]),
    n(0, 1, 'lshape', [[0, 1, 'up'], [1, 1, 'upleft'], [1, 2, 'left']]),
    n(0, 2, 'straight', [[0, 1, 'up'], [1, 1, 'up'], [2, 1, 'up']]),
    n(1, 0, 'lshape', [[0, 1, 'up'], [1, 1, 'upleft'], [1, 2, 'left']]),
    n(1, 1, 'lshape', [[1, 0, 'left'], [1, 1, 'upleft'], [2, 1, 'up']]),
    n(1, 2, 'tshape', [[1, 0, 'left'], [1, 1, 'left'], [1, 2, 'left'], [2, 1, null]]),
    n(2, 0, 'plus', [[0, 1, 'up'], [1, 0, null], [1, 1, 'upleft'], [1, 2, 'left'], [2, 1, null]]),
    n(2, 1, 'tshape', [[0, 1, null], [1, 1, 'upright'], [1, 2, 'right'], [2, 1, 'up']]),
    n(2, 2, 'lshape', [[2, 1, 'up'], [1, 1, 'upright'], [1, 2, 'right']])
  ];
}

var v3x32 = {
  practice: PF.b_('practice_3x3_2', blocks3x32(), 12, { row: 4, col: 0 }, { row: 1, col: 8 }, true, 3),
  games: [PF.b_('game_3x3_2', blocks3x32(), 12, { row: 4, col: 0 }, { row: 1, col: 8 }, true, 3)]
};

// ---------------------------------------------------------------- 3x3-3 (9x9 grid)
function blocks3x33() {
  return [
    n(0, 0, 'lshape', [[1, 0, 'left'], [1, 1, 'upleft'], [2, 1, 'up']]),
    n(0, 1, 'straight', [[1, 0, 'left'], [1, 1, 'left'], [1, 2, 'left']]),
    PF.Wv(0, 2, 'tshape', 1, 0),
    n(1, 0, 'lshape', [[0, 1, 'down'], [1, 1, 'downright'], [1, 2, 'right']]),
    n(1, 1, 'tshape', [[0, 1, 'up'], [1, 0, 'right'], [1, 1, 'upright'], [2, 1, null]]),
    PF.Wv(1, 2, 'plus', 0, 7),
    PF.Wv(2, 0, 'tshape', 1, 0),
    n(2, 1, 'plus', [[0, 1, 'up'], [1, 0, null], [1, 1, 'up'], [1, 2, null], [2, 1, 'up']]),
    n(2, 2, 'lshape', [[1, 1, 'upright'], [1, 2, 'right'], [2, 1, 'up']])
  ];
}

var v3x33 = {
  practice: PF.b_('practice_3x3_3', blocks3x33(), 12, { row: 7, col: 1 }, { row: 1, col: 8 }, true, 3),
  games: [PF.b_('game_3x3_3', blocks3x33(), 12, { row: 7, col: 1 }, { row: 1, col: 8 }, true, 3)]
};

// ---------------------------------------------------------------- 4x4 (12x12 grid)
function blocks4x4() {
  return [
    n(0, 0, 'straight', [[1, 0, 'right'], [1, 1, 'right'], [1, 2, 'right']]),
    n(0, 1, 'tshape', [[1, 0, null], [1, 1, 'upright'], [1, 2, 'right'], [2, 1, 'up']]),
    n(0, 2, 'straight', [[0, 1, 'up'], [1, 1, 'up'], [2, 1, 'up']]),
    straightR(0, 3),
    n(1, 0, 'straight', [[0, 1, 'up'], [1, 1, 'up'], [2, 1, 'up']]),
    n(1, 1, 'tshape', [[0, 1, 'up'], [1, 0, null], [1, 1, 'upleft'], [1, 2, 'left']]),
    n(1, 2, 'lshape', [[0, 1, 'up'], [1, 0, 'right'], [1, 1, 'upright']]),
    straightR(1, 3),
    n(2, 0, 'lshape', [[0, 1, 'down'], [1, 0, 'left'], [1, 1, 'downleft']]),
    straightR(2, 1),
    n(2, 2, 'straight', [[0, 1, 'up'], [1, 1, 'up'], [2, 1, 'up']]),
    straightR(2, 3),
    n(3, 0, 'plus', [[0, 1, 'down'], [1, 0, null], [1, 1, 'downright'], [1, 2, 'right'], [2, 1, null]]),
    straightR(3, 1),
    n(3, 2, 'tshape', [[0, 1, null], [1, 1, 'downleft'], [1, 2, 'left'], [2, 1, 'down']]),
    straightR(3, 3)
  ];
}

var v4x4 = {
  practice: PF.b_('practice_4x4', blocks4x4(), 16, { row: 7, col: 0 }, { row: 1, col: 11 }, true, 4),
  games: [PF.b_('game_4x4', blocks4x4(), 16, { row: 7, col: 0 }, { row: 1, col: 11 }, true, 4)]
};

// ---------------------------------------------------------------- 5x5 (15x15 grid)
function blocks5x5() {
  return [
    n(0, 0, 'tshape', [[1, 0, 'right'], [1, 1, 'right'], [1, 2, 'right'], [2, 1, null]]),
    n(0, 1, 'lshape', [[0, 1, 'up'], [1, 1, 'upleft'], [1, 2, 'left']]),
    n(0, 2, 'plus', [[0, 1, null], [1, 0, 'right'], [1, 1, 'right'], [1, 2, 'right'], [2, 1, null]]),
    straightR(0, 3),
    straightR(0, 4),
    n(1, 0, 'lshape', [[1, 0, 'right'], [1, 1, 'downright'], [2, 1, 'down']]),
    n(1, 1, 'plus', [[0, 1, null], [1, 0, 'right'], [1, 1, 'right'], [1, 2, 'right'], [2, 1, null]]),
    n(1, 2, 'lshape', [[1, 0, 'right'], [1, 1, 'downright'], [2, 1, 'down']]),
    n(1, 3, 'lshape', [[1, 0, 'left'], [1, 1, 'upleft'], [2, 1, 'up']]),
    straightR(1, 4),
    n(2, 0, 'lshape', [[1, 0, 'right'], [1, 1, 'downright'], [2, 1, 'down']]),
    straightR(2, 1),
    n(2, 2, 'plus', [[0, 1, null], [1, 0, 'left'], [1, 1, 'left'], [1, 2, 'left'], [2, 1, null]]),
    n(2, 3, 'plus', [[0, 1, 'up'], [1, 0, 'right'], [1, 1, 'upright'], [1, 2, null], [2, 1, null]]),
    n(2, 4, 'lshape', [[1, 0, 'right'], [1, 1, 'downright'], [2, 1, 'down']]),
    n(3, 0, 'tshape', [[1, 0, null], [1, 1, 'upright'], [1, 2, 'right'], [2, 1, 'up']]),
    straightR(3, 1),
    n(3, 2, 'lshape', [[1, 1, 'downleft'], [1, 2, 'left'], [2, 1, 'down']]),
    straightL(3, 3),
    n(3, 4, 'lshape', [[0, 1, 'down'], [1, 0, 'left'], [1, 1, 'downleft']]),
    n(4, 0, 'plus', [[0, 1, null], [1, 0, 'right'], [1, 1, 'right'], [1, 2, 'right'], [2, 1, null]]),
    straightR(4, 1),
    n(4, 2, 'lshape', [[1, 1, 'upright'], [1, 2, 'right'], [2, 1, 'up']]),
    straightR(4, 3),
    straightR(4, 4)
  ];
}

var v5x5 = {
  practice: PF.b_('practice_5x5', blocks5x5(), 20, { row: 13, col: 0 }, { row: 1, col: 14 }, true, 5),
  games: [PF.b_('game_5x5', blocks5x5(), 20, { row: 13, col: 0 }, { row: 1, col: 14 }, true, 5)]
};

// ---------------------------------------------------------------- exports
export var VARIANTS = [
  { id: '3x3', label: '3×3', data: v3x3 },
  { id: '3x3-2', label: '3×3 Practice 2', data: v3x32 },
  { id: '3x3-3', label: '3×3 Practice 3', data: v3x33 },
  { id: '4x4', label: '4×4', data: v4x4 },
  { id: '5x5', label: '5×5', data: v5x5 }
];

export default { VARIANTS: VARIANTS };
