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

// ---------------------------------------------------------------- Additional Variants (4x4-2, 4x4-3, 5x5-2, 5x5-3, 6x6, 6x6-2)
var PATH_BLOCKS = {
  L_to_R: { shape: 'straight', rot: 0, flip: 0 },
  R_to_L: { shape: 'straight', rot: 2, flip: 0 },
  T_to_B: { shape: 'straight', rot: 1, flip: 0 },
  B_to_T: { shape: 'straight', rot: 3, flip: 0 },
  L_to_B: { shape: 'lshape', rot: 0, flip: 0 },
  L_to_T: { shape: 'lshape', rot: 1, flip: 1 },
  T_to_R: { shape: 'lshape', rot: 2, flip: 1 },
  T_to_L: { shape: 'lshape', rot: 1, flip: 0 },
  B_to_R: { shape: 'lshape', rot: 3, flip: 0 },
  B_to_L: { shape: 'lshape', rot: 0, flip: 1 },
  R_to_B: { shape: 'lshape', rot: 3, flip: 1 },
  R_to_T: { shape: 'lshape', rot: 2, flip: 0 }
};

function createScrambledBlocks(count, pathSpecs) {
  var blocksMap = {};
  pathSpecs.forEach(function (spec) {
    var p = PATH_BLOCKS[spec[2]];
    blocksMap[spec[0] + '_' + spec[1]] = PF.Wv(spec[0], spec[1], p.shape, p.rot, p.flip);
  });
  var allBlocks = [];
  for (var br = 0; br < count; br++) {
    for (var bc = 0; bc < count; bc++) {
      var b = blocksMap[br + '_' + bc];
      allBlocks.push(b || PF.Wv(br, bc, 'tshape', (br + bc) % 4, (br * bc) % 6));
    }
  }
  var scrambled = PF.cloneBlocks(allBlocks);
  scrambled.forEach(function (b, idx) {
    var rots = ((idx * 3 + 1) % 3) + 1;
    for (var r = 0; r < rots; r++) PF.rotateBlock(b);
    if ((idx + (b.blockRow % 2)) % 2 === 1) PF.flipBlock(b);
  });
  return scrambled;
}

// 4x4-2
function blocks4x42() {
  return createScrambledBlocks(4, [
    [0, 0, 'L_to_R'], [0, 1, 'L_to_R'], [0, 2, 'L_to_B'],
    [1, 2, 'T_to_L'], [1, 1, 'R_to_B'], [2, 1, 'T_to_R'],
    [2, 2, 'L_to_B'], [3, 2, 'T_to_R'], [3, 3, 'L_to_R']
  ]);
}
var v4x42 = {
  practice: PF.b_('practice_4x4_2', blocks4x42(), 16, { row: 1, col: 0 }, { row: 10, col: 11 }, true, 4),
  games: [PF.b_('game_4x4_2', blocks4x42(), 16, { row: 1, col: 0 }, { row: 10, col: 11 }, true, 4)]
};

// 4x4-3
function blocks4x43() {
  return createScrambledBlocks(4, [
    [3, 0, 'L_to_T'], [2, 0, 'B_to_T'], [1, 0, 'B_to_R'],
    [1, 1, 'L_to_B'], [2, 1, 'T_to_R'], [2, 2, 'L_to_T'],
    [1, 2, 'B_to_R'], [1, 3, 'L_to_T'], [0, 3, 'B_to_R']
  ]);
}
var v4x43 = {
  practice: PF.b_('practice_4x4_3', blocks4x43(), 16, { row: 10, col: 0 }, { row: 1, col: 11 }, true, 4),
  games: [PF.b_('game_4x4_3', blocks4x43(), 16, { row: 10, col: 0 }, { row: 1, col: 11 }, true, 4)]
};

// 5x5-2
function blocks5x52() {
  return createScrambledBlocks(5, [
    [0, 0, 'L_to_R'], [0, 1, 'L_to_R'], [0, 2, 'L_to_R'], [0, 3, 'L_to_R'], [0, 4, 'L_to_B'],
    [1, 4, 'T_to_L'], [1, 3, 'R_to_L'], [1, 2, 'R_to_L'], [1, 1, 'R_to_B'],
    [2, 1, 'T_to_R'], [2, 2, 'L_to_R'], [2, 3, 'L_to_B'],
    [3, 3, 'T_to_L'], [3, 2, 'R_to_B'],
    [4, 2, 'T_to_R'], [4, 3, 'L_to_R'], [4, 4, 'L_to_R']
  ]);
}
var v5x52 = {
  practice: PF.b_('practice_5x5_2', blocks5x52(), 20, { row: 1, col: 0 }, { row: 13, col: 14 }, true, 5),
  games: [PF.b_('game_5x5_2', blocks5x52(), 20, { row: 1, col: 0 }, { row: 13, col: 14 }, true, 5)]
};

// 5x5-3
function blocks5x53() {
  return createScrambledBlocks(5, [
    [2, 0, 'L_to_T'], [1, 0, 'B_to_T'], [0, 0, 'B_to_R'], [0, 1, 'L_to_R'], [0, 2, 'L_to_B'],
    [1, 2, 'T_to_B'], [2, 2, 'T_to_L'], [2, 1, 'R_to_B'], [3, 1, 'T_to_R'], [3, 2, 'L_to_R'],
    [3, 3, 'L_to_T'], [2, 3, 'B_to_T'], [1, 3, 'B_to_R'], [1, 4, 'L_to_B'], [2, 4, 'T_to_R']
  ]);
}
var v5x53 = {
  practice: PF.b_('practice_5x5_3', blocks5x53(), 20, { row: 7, col: 0 }, { row: 7, col: 14 }, true, 5),
  games: [PF.b_('game_5x5_3', blocks5x53(), 20, { row: 7, col: 0 }, { row: 7, col: 14 }, true, 5)]
};

// 6x6
function blocks6x6() {
  return createScrambledBlocks(6, [
    [0, 0, 'L_to_R'], [0, 1, 'L_to_R'], [0, 2, 'L_to_R'], [0, 3, 'L_to_R'], [0, 4, 'L_to_R'], [0, 5, 'L_to_B'],
    [1, 5, 'T_to_L'], [1, 4, 'R_to_L'], [1, 3, 'R_to_L'], [1, 2, 'R_to_L'], [1, 1, 'R_to_B'],
    [2, 1, 'T_to_R'], [2, 2, 'L_to_R'], [2, 3, 'L_to_R'], [2, 4, 'L_to_B'],
    [3, 4, 'T_to_L'], [3, 3, 'R_to_L'], [3, 2, 'R_to_B'],
    [4, 2, 'T_to_R'], [4, 3, 'L_to_R'], [4, 4, 'L_to_R'], [4, 5, 'L_to_B'],
    [5, 5, 'T_to_R']
  ]);
}
var v6x6 = {
  practice: PF.b_('practice_6x6', blocks6x6(), 24, { row: 1, col: 0 }, { row: 16, col: 17 }, true, 6),
  games: [PF.b_('game_6x6', blocks6x6(), 24, { row: 1, col: 0 }, { row: 16, col: 17 }, true, 6)]
};

// 6x6-2
function blocks6x62() {
  return createScrambledBlocks(6, [
    [5, 0, 'L_to_T'],
    [4, 0, 'B_to_R'], [4, 1, 'L_to_R'], [4, 2, 'L_to_T'],
    [3, 2, 'B_to_L'], [3, 1, 'R_to_T'],
    [2, 1, 'B_to_R'], [2, 2, 'L_to_R'], [2, 3, 'L_to_R'], [2, 4, 'L_to_T'],
    [1, 4, 'B_to_L'], [1, 3, 'R_to_T'],
    [0, 3, 'B_to_R'], [0, 4, 'L_to_R'], [0, 5, 'L_to_R']
  ]);
}
var v6x62 = {
  practice: PF.b_('practice_6x6_2', blocks6x62(), 24, { row: 16, col: 0 }, { row: 1, col: 17 }, true, 6),
  games: [PF.b_('game_6x6_2', blocks6x62(), 24, { row: 16, col: 0 }, { row: 1, col: 17 }, true, 6)]
};

// ---------------------------------------------------------------- exports
export var VARIANTS = [
  { id: '3x3', label: '3×3', data: v3x3 },
  { id: '3x3-2', label: '3×3 Practice 2', data: v3x32 },
  { id: '3x3-3', label: '3×3 Practice 3', data: v3x33 },
  { id: '4x4', label: '4×4', data: v4x4 },
  { id: '4x4-2', label: '4×4 Practice 2', data: v4x42 },
  { id: '4x4-3', label: '4×4 Practice 3', data: v4x43 },
  { id: '5x5', label: '5×5', data: v5x5 },
  { id: '5x5-2', label: '5×5 Practice 2', data: v5x52 },
  { id: '5x5-3', label: '5×5 Practice 3', data: v5x53 },
  { id: '6x6', label: '6×6 Grid', data: v6x6 },
  { id: '6x6-2', label: '6×6 Practice 2', data: v6x62 }
];

export default { VARIANTS: VARIANTS };
