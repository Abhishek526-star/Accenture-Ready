# logic.js — core game engine (exposes global `PF`)

IIFE returning an object; also `module.exports = PF` for Node tests.
Exported API: `SHAPES, ROTATE_CW, OPPOSITE, Wv, lD, b_, layoutToBlocks, rotateBlock, flipBlock, validate, cloneBlocks, numVariants, solve`.

## 1. Direction tables

Arrow names: `right, down, left, up` (cardinal) and `upright, downright, downleft, upleft` (diagonal). `null` = no arrow.

```js
ROTATE_CW = { right:"down", down:"left", left:"up", up:"right",
              upright:"downright", downright:"downleft", downleft:"upleft", upleft:"upright" }
OPPOSITE  = { right:"left", left:"right", up:"down", down:"up",
              upright:"downleft", downleft:"upright", downright:"upleft", upleft:"downright" }
```

- `rotateArrow(arrow, times)`: applies `ROTATE_CW` `times mod 4` times (null stays null).
- `rotatePos(row, col, times)`: rotates a local (0..2, 0..2) position CW `times` x 90° via
  `e = row; o = col;` then per step `{ tmp = 2 - e; e = o; o = tmp; }`.

## 2. Canonical shapes (SHAPES) — flip states at rotateState 0

Each shape is a list of variants; each variant = array of `{localRow, localCol, arrow}` on a 3x3 local grid.
`numVariants(shape)` = `SHAPES[shape].length`.

- **straight** (2 variants):
  - v0: cells (1,0)"right", (1,1)"right", (1,2)"right"
  - v1: cells (1,0)"left", (1,1)"left", (1,2)"left"
- **lshape** (2 variants):
  - v0: (1,0)"right", (1,1)"downright", (2,1)"down"
  - v1: (1,0)"left", (1,1)"upleft", (2,1)"up"
- **tshape** (6 variants):
  1. (0,1)"up", (1,0)null, (1,1)"upleft", (1,2)"left"
  2. (0,1)"up", (1,0)"right", (1,1)"upright", (1,2)null
  3. (0,1)null, (1,0)"right", (1,1)"right", (1,2)"right"
  4. (0,1)"down", (1,0)null, (1,1)"downright", (1,2)"right"
  5. (0,1)"down", (1,0)"left", (1,1)"downleft", (1,2)null
  6. (0,1)null, (1,0)"left", (1,1)"left", (1,2)"left"
- **plus** (8 variants):
  1. (0,1)"up", (1,0)null, (1,1)"up", (1,2)null, (2,1)"up"
  2. (0,1)"up", (1,0)"right", (1,1)"upright", (1,2)null, (2,1)null
  3. (0,1)null, (1,0)"right", (1,1)"right", (1,2)"right", (2,1)null
  4. (0,1)"down", (1,0)null, (1,1)"downright", (1,2)"right", (2,1)null
  5. (0,1)"down", (1,0)null, (1,1)"down", (1,2)null, (2,1)"down"
  6. (0,1)null, (1,0)null, (1,1)"downleft", (1,2)"left", (2,1)"down"
  7. (0,1)null, (1,0)"left", (1,1)"left", (1,2)"left", (2,1)null
  8. (0,1)null, (1,0)"left", (1,1)"upleft", (1,2)null, (2,1)"up"

## 3. Block construction

- `variantCells(shape, rot, flip)`: pick `SHAPES[shape][flip mod nVariants]`, rotate each cell position
  and arrow by `rot` (CW).
- `expandCells(localCells, blockRow, blockCol)`: build full 3x3 (9) cells row-major with global
  `row = 3*blockRow + r, col = 3*blockCol + c`; `isDark = true` for cells present in localCells, `arrow` carried (null allowed).
- `Wv(blockRow, blockCol, shapeType, rotateState, flipState)` -> canonical block
  `{ id:"block_<br>_<bc>", blockRow, blockCol, shapeType, rotateState (mod 4), flipState, cells }`.
- `lD(blockRow, blockCol, shapeType, rotateState, flipState, localCells)` -> same block shape but from
  explicit `{localR, localC, dir}` cell list (used by data.js).
- `fillBlocks(list, count)`: index blocks by `blockRow_blockCol`; any missing position is filled with
  `Wv(br, bc, "tshape", 0, 0)`.
- `b_(id, blocks, minMoves, startCell, endCell, customLayout, blocksCount)` -> puzzle
  `{ id, gridSize: 3*blocksCount, blocks, startCell, endCell, timeLimit: 240, minMoves, customLayout }`.
- `layoutToBlocks(map, count)`: map keys `"row,col"` -> arrow|null; groups entries into 3x3 blocks and
  infers shape from dark-cell count: `>=5 -> plus, 4 -> tshape, 3 -> lshape, else straight`.

## 4. rotateBlock / flipBlock (the two player moves)

`matchCanonical(b)`: extracts dark cells to local coords, tries all `rotateState` 0..3 x all flip variants;
returns `{rotateState, flipState}` if an exact match of positions+arrows exists, else null.

- **rotateBlock(b)** (90° CW): if canonical match -> build from `variantCells(shape, rot+1 mod 4, flip)`.
  Else rotate each dark cell position + arrow CW by 1 manually. `rotateState` becomes `(rotateState+1) mod 4`.
- **flipBlock(b)** (⇆ change route direction):
  - tshape/plus: if canonical match -> `flipState = (match.flipState + 1) mod numVariants` (cycles variants);
    else reverse every dark cell arrow via `OPPOSITE` and bump `flipState mod numVariants`.
  - straight/lshape: always reverse arrows via `OPPOSITE`; `flipState = flipState + 1`.

Invariants (tested in test.js): rotate x4 == identity; flip x numVariants == identity.

## 5. validate(puzzle, blocks) — ray-trace

```js
VEC = { right:[0,1], left:[0,-1], up:[-1,0], down:[1,0] }
DIAG = { downright:{right:"down",down:"right"}, upright:{right:"up",up:"right"},
         downleft:{left:"down",down:"left"}, upleft:{left:"up",up:"left"} }
CARDINAL = { up:1, down:1, left:1, right:1 }
```

1. Build `map["row,col"] = cell`.
2. Start at `puzzle.startCell`; initial entering direction: from col 0 -> "right", col n-1 -> "left",
   row 0 -> "down", row n-1 -> "up", else "right".
3. Loop up to `n*n + 4` steps (also stop on revisited cell):
   - push cell into `path`; if current == `endCell` -> `{valid: true, path}`.
   - cell must be dark with a non-null arrow, else break -> `{valid:false, path}`.
   - cardinal arrow -> exit = arrow; diagonal arrow -> `exit = DIAG[arrow][entering]` (direction-dependent bend;
     undefined pair = broken path).
   - step; if next is off-grid: valid only if `next.col === n && next.row === endCell.row` (exit right edge
     at the end row) -> push end cell and return valid.
4. Otherwise invalid.

## 6. solve(puzzle, blocks, nodeLimit = 2,000,000)

Exact DFS with lazy per-block state assignment:
- `reachableStates(block)`: BFS over rotate/flip until no new states (dedup key = JSON of `[row,col,isDark,arrow]` per cell).
- DFS from start with entering dir (same rule as validate). Memo key: `"r,c|entering|assign.join(,)"`.
- At cell: block index `bi = floor(row/3)*nb + floor(col/3)` (nb = gridSize/3). If block unassigned, try all
  reachable states; else only the assigned one. Cell must be dark with arrow; exit via cardinal/DIAG rule;
  stepping off the right edge at end row = success.
- On success, splice assigned states into final blocks and **re-verify with validate()**; returns
  `{blocks, path}` or null. Node limit guards against runaway search.

## 7. cloneBlocks(blocks)

Deep copy: `{id, blockRow, blockCol, shapeType, rotateState (null->0), flipState (null->0), cells:[{row,col,isDark,arrow}]}`.
