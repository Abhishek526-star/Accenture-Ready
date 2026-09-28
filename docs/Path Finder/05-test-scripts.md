# Test / verification scripts (Node, dev only)

All run from the `pathfinder/` folder. `smoke.js` needs `npm i` (jsdom); the others need only Node.
These are NOT required on the website — they exist to verify logic.js / data.js / app.js.

---

## dfs.js — exact DFS solvability check

**Run:** `node dfs.js 5x5` (arg = variant id: 3x3, 3x3-2, 3x3-3, 4x4, 5x5; default 5x5). Output:
`5x5 SOLVABLE nodes=1234 45ms`.

**How it works** (standalone duplicate of `PF.solve` logic):
- `statesOf(block)`: BFS over `PF.rotateBlock`/`PF.flipBlock` until fixpoint; dedup key = JSON of each
  cell `[row, col, isDark, arrow]`. Produces every reachable orientation per block.
- `solvable(puzzle, nodeLimit = 3e6)`: DFS from startCell (entering dir from edge: col 0 -> right,
  col n-1 -> left, row 0 -> down, else up). Memo key `"r,c|entering|assign.join(,)"` prevents re-exploring
  the same (position, entering, assignment) state.
- Lazy assignment: a block has no orientation until the ray first touches it; then that orientation is
  pinned (`assign[bi]`) and later visits only try the pinned one.
- Cell exit rule identical to `PF.validate`: cardinal arrow = exit; diagonal = `DIAG[arrow][entering]`.
- Stepping off the right edge at the end row = solution (`[[bi, si], ...]` chain).
- Reports node count and elapsed ms.

---

## solvetest.js — annealing solver check

**Run:** `node solvetest.js`. Iterates every variant; per variant prints `SOLVABLE in N moves, path M cells`
or `no solution found`, plus a `revalidate: true/false` double check.

**How it works:** hill-climb / simulated-annealing over per-block rotate/flip ops using the REAL
`PF.validate` as scorer:
- score = 100000 if valid, else `path.length` (longer ray = closer).
- 400000 total iterations, 30 random restarts; accept strictly better moves always, worse moves with
  probability `0.15 * (1 - i/iters)` (temperature decays).
- Keeps the best (fewest-move valid) solution across restarts.

---

## verify2.js — reference solved-map verification

**Run:** `node verify2.js`.

Checks two verbatim reference solved layouts against the engine:
- `U32` — solved map for the "3x3-2" variant (3x3 blocks).
- `M55` — solved map for the "5x5" variant (5x5 blocks).

Per map (`analyze`):
1. `PF.layoutToBlocks(map, count)` builds target blocks; `PF.validate` on them must return valid
   (prints `reference solved map valid: true (path N)`).
2. Every target block must be reachable from the variant's initial (scrambled) block of the same
   (blockRow, blockCol): BFS over rotate/flip ops, dedup by cell-JSON key; dark-cell counts must match.
   Prints `all solved blocks reachable: true` or lists unreachable block ids.

---

## test.js — unit sanity tests

**Run:** `node test.js`. Prints PASS/FAIL per check; ends with `ALL TESTS PASSED` or `N FAILURES`
(exit code 0/1).

The 6 suites:
1. **Initially invalid**: every variant's practice board returns `valid === false` from `PF.validate`.
2. **Solved reference valid**: 3x3 `solvedMap` -> `layoutToBlocks` -> validate must be `true` (prints path length).
3. **Idempotency**: for every 3x3 block, rotate x4 == original cells; flip x numVariants == original cells.
4. **Reachability**: each 3x3 solved block reachable from its scrambled counterpart via BFS over
   rotate/flip ops (key = sorted JSON of cells).
5. **Constants**: gridSizes `3x3/3x3-2/3x3-3 = 9`, `4x4 = 12`, `5x5 = 15`; all timeLimits = 240.
6. **Built-in solver**: `PF.solve` returns a solution from every variant's initial state and the result
   re-validates true.

---

## smoke.js — end-to-end DOM smoke test (jsdom)

**Run:** `npm i` (installs jsdom), then `node smoke.js`. Prints PASS/FAIL per check and
`SMOKE-OK` / `N SMOKE FAILURES` (exit 0/1). Waits up to 8 s for the path animation before the final checks.

**How it works:** loads `index.html` into jsdom (`runScripts: "outside-only"`), evals logic.js, data.js,
app.js in the window, then drives the REAL UI via synthetic mouse events.

Checks in order:
1. **Boot**: 5 tabs rendered; active tab text "3×3"; instruction slide 1 contains "Image rotation ability".
2. **Instructions**: 8 clicks of the "Next" button; preview board present on slide 2; 9th button says
   "Practice"; clicking it renders the practice board.
3. **Practice board**: `.pf-grid` exists; dark-cell count matches puzzle data; timer text matches
   `/^\d:\d{2}$/`; rotate disabled before selection.
4. **Selection + moves**: clicking a dark cell adds `.pf-cell.sel` and enables rotate; rotate ->
   "Moves: 1"; flip -> "Moves: 2".
5. **Invalid submit**: board gets `.pf-boardbox.shake`.
6. **Solution popup**: `#pfSolution` opens `.pf-sol-modal` with >5 `.hl` cells; live board untouched
   (no `.hl`, still "Moves: 2"); Close removes the modal.
7. **Fresh board**: click the 3x3 tab, click through all 9 instruction buttons -> "Moves: 0".
8. **Full solve through the UI**: internal `solveWithOps` DFS (same ray-trace + lazy assignment; BFS
   states tagged with op strings like "rfr") finds per-block op sequences; the test clicks the right
   dark cell and performs the exact rotate/flip clicks; `window.__pfBoard()` state must validate true;
   clicking `#pfSubmit` -> success modal appears with "Solved in"; Continue -> game stage
   ("Puzzle 1 of 5" text present).
