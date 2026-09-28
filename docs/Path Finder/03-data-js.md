# data.js — puzzle data (exposes global `PF_DATA`, exports `VARIANTS`)

Depends on `PF` (logic.js): uses `PF.Wv`, `PF.lD`, `PF.b_`, `PF.layoutToBlocks`.
Helper `n(br, bc, shape, cells)` = `PF.lD(br, bc, shape, 0, 0, cells.map(c => {localR: c[0], localC: c[1], dir: c[2]}))`.

## Structure of a variant

```js
{ id, label, data: {
    practice: puzzle,   // replayable practice board
    games: [puzzle, ...], // Section 2 puzzles (one move each advances)
    solvedMap: {...}    // only for 3x3: reference solved layout (used by tests)
} }
```

Puzzle = `PF.b_(id, blocks, minMoves, startCell, endCell, customLayout=true, blocksCount)`:
`gridSize = 3*blocksCount`, `timeLimit = 240` s.

## Variants (VARIANTS array, in tab order)

### 1. "3x3" (label "3×3") — 9x9 grid, 3x3 blocks
- Start `{row:1, col:0}`, End `{row:1, col:8}`, minMoves 12.
- Blocks built from `P3_MAP` (a `"row,col":arrow` layout map over the whole grid) via `PF.layoutToBlocks(P3_MAP, 3)`.
- `P3_MAP` dark cells (row,col -> arrow): "0,1":"up", "1,0":null, "1,1":"upleft", "1,2":"left",
  "1,3":"right", "1,4":"downright", "1,6":"right", "1,7":"downright", "2,4":"down", "2,7":"down",
  "3,4":"up", "3,7":"down", "4,0":"right", "4,1":"downright", "4,4":"upleft", "4,5":"left",
  "4,7":"down", "5,1":"down", "5,4":null, "5,7":"down", "6,1":"up", "6,4":"down", "6,7":"up",
  "7,0":null, "7,1":"up", "7,2":null, "7,4":"downright", "7,5":"right", "7,6":"right",
  "7,7":"upright", "8,1":"up".
- `P3_SOLVED_MAP` = verified solved layout (used by test.js to validate the solver/validator).
- `games`: 5 identical boards `game_1`..`game_5` (12 min-moves each).

### 2. "3x3-2" (label "3×3 Practice 2") — 9x9 grid
- Start `{row:4, col:0}`, End `{row:1, col:8}`, minMoves 12.
- Blocks (explicit, `n(br,bc,shape,[[r,c,dir],...])`):
  - (0,0) straight: (1,0)left,(1,1)left,(1,2)left
  - (0,1) lshape: (0,1)up,(1,1)upleft,(1,2)left
  - (0,2) straight: (0,1)up,(1,1)up,(2,1)up
  - (1,0) lshape: (0,1)up,(1,1)upleft,(1,2)left
  - (1,1) lshape: (1,0)left,(1,1)upleft,(2,1)up
  - (1,2) tshape: (1,0)left,(1,1)left,(1,2)left,(2,1)null
  - (2,0) plus: (0,1)up,(1,0)null,(1,1)upleft,(1,2)left,(2,1)null
  - (2,1) tshape: (0,1)null,(1,1)upright,(1,2)right,(2,1)up
  - (2,2) lshape: (2,1)up,(1,1)upright,(1,2)right
- `games`: 1 board (`game_3x3_2`).

### 3. "3x3-3" (label "3×3 Practice 3") — 9x9 grid
- Start `{row:7, col:1}`, End `{row:1, col:8}`, minMoves 12.
- Blocks: (0,0) lshape (1,0)left,(1,1)upleft,(2,1)up · (0,1) straight (1,0..2)left ·
  (0,2) `PF.Wv(0,2,"tshape",1,0)` · (1,0) lshape (0,1)down,(1,1)downright,(1,2)right ·
  (1,1) tshape (0,1)up,(1,0)right,(1,1)upright,(2,1)null · (1,2) `Wv(1,2,"plus",0,7)` ·
  (2,0) `Wv(2,0,"tshape",1,0)` · (2,1) plus (0,1)up,(1,0)null,(1,1)up,(1,2)null,(2,1)up ·
  (2,2) lshape (1,1)upright,(1,2)right,(2,1)up.
- `games`: 1 board (`game_3x3_3`).

### 4. "4x4" (label "4×4") — 12x12 grid, 16 blocks
- Start `{row:7, col:0}`, End `{row:1, col:11}`, minMoves 16.
- Blocks: (0,0) straight R · (0,1) tshape (1,0)null,(1,1)upright,(1,2)right,(2,1)up ·
  (0,2) straight U · (0,3) straight R · (1,0) straight U · (1,1) tshape (0,1)up,(1,0)null,(1,1)upleft,(1,2)left ·
  (1,2) lshape (0,1)up,(1,0)right,(1,1)upright · (1,3) straight R · (2,0) lshape (0,1)down,(1,0)left,(1,1)downleft ·
  (2,1) straight R · (2,2) straight U · (2,3) straight R · (3,0) plus (0,1)down,(1,0)null,(1,1)downright,(1,2)right,(2,1)null ·
  (3,1) straight R · (3,2) tshape (0,1)null,(1,1)downleft,(1,2)left,(2,1)down · (3,3) straight R.
- `games`: 1 board (`game_4x4`).

### 5. "5x5" (label "5×5") — 15x15 grid, 25 blocks
- Start `{row:13, col:0}`, End `{row:1, col:14}`, minMoves 20.
- Helpers `straightR(br,bc)` = (1,0..2)"right"; `straightL(br,bc)` = (1,0..2)"left".
- Blocks: (0,0) tshape (1,0)R,(1,1)R,(1,2)R,(2,1)null · (0,1) lshape (0,1)up,(1,1)upleft,(1,2)left ·
  (0,2) plus (0,1)null,(1,0)R,(1,1)R,(1,2)R,(2,1)null · straightR(0,3),(0,4) ·
  (1,0) lshape (1,0)R,(1,1)downright,(2,1)down · (1,1) plus same as (0,2) · (1,2) lshape (1,0)R,(1,1)downright,(2,1)down ·
  (1,3) lshape (1,0)left,(1,1)upleft,(2,1)up · straightR(1,4) ·
  (2,0) lshape (1,0)R,(1,1)downright,(2,1)down · straightR(2,1) · (2,2) plus (0,1)null,(1,0)left,(1,1)left,(1,2)left,(2,1)null ·
  (2,3) plus (0,1)up,(1,0)R,(1,1)upright,(1,2)null,(2,1)null · (2,4) lshape (1,0)R,(1,1)downright,(2,1)down ·
  (3,0) tshape (1,0)null,(1,1)upright,(1,2)R,(2,1)up · straightR(3,1) · (3,2) lshape (1,1)downleft,(1,2)left,(2,1)down ·
  straightL(3,3) · (3,4) lshape (0,1)down,(1,0)left,(1,1)downleft ·
  (4,0) plus (0,1)null,(1,0)R,(1,1)R,(1,2)R,(2,1)null · straightR(4,1) · (4,2) lshape (1,1)upright,(1,2)R,(2,1)up ·
  straightR(4,3),(4,4).
- `games`: 1 board (`game_5x5`).

## Exported

```js
PF_DATA.VARIANTS = [
  { id: "3x3",   label: "3×3",             data: v3x3   },
  { id: "3x3-2", label: "3×3 Practice 2",  data: v3x32  },
  { id: "3x3-3", label: "3×3 Practice 3",  data: v3x33  },
  { id: "4x4",   label: "4×4",             data: v4x4   },
  { id: "5x5",   label: "5×5",             data: v5x5   }
];
// Node: module.exports = PF_DATA
```
