# Path Finder — Documentation

Path Finder is a grid puzzle (Accenture-style "Image rotation" practice game): rotate/flip
path tiles so the Start icon connects to the End icon within a time limit.

## Files required to run the game on a new website

Copy these 4 files together (same folder, no build step, no npm install needed):

| File | Role | Docs |
|---|---|---|
| `index.html` | Page shell: all CSS (inline in `<head>`), DOM mount points, script load order | [01-index-html.md](01-index-html.md) |
| `logic.js` | Core engine: shapes, rotate/flip, path validation (ray-trace), DFS solver | [02-logic-js.md](02-logic-js.md) |
| `data.js` | Puzzle data: all 5 practice variants (3x3, 3x3-2, 3x3-3, 4x4, 5x5) | [03-data-js.md](03-data-js.md) |
| `app.js` | UI layer: instructions, board rendering, timer, controls, modals, results, all SVG icons | [04-app-js.md](04-app-js.md) |

Load order in `index.html` (strict): `logic.js` -> `data.js` -> `app.js`.
Global names shared: `PF` (from logic.js) and `PF_DATA` (from data.js) are consumed by app.js.
DOM IDs required: `pfTabs`, `pfCard`, `pfStage` (all in index.html).

## Test / verification scripts (Node, dev only — not needed on the website)

Run from the `pathfinder/` folder. `npm i jsdom` is required only for `smoke.js`.

| Script | What it does | Docs |
|---|---|---|
| `test.js` | Unit sanity tests: initially-invalid boards, solved layout valid, rot4/flipN identity, reachability, grid sizes/time limits, built-in solver | [05-test-scripts.md](05-test-scripts.md) |
| `dfs.js` | Exact DFS solvability check with lazy block-state assignment (CLI: `node dfs.js 5x5`) | [05-test-scripts.md](05-test-scripts.md) |
| `solvetest.js` | Simulated-annealing hill-climb solver over rotate/flip ops for every variant | [05-test-scripts.md](05-test-scripts.md) |
| `verify2.js` | Verifies the reference solved maps for 3x3-2 and 5x5: valid + reachable per block | [05-test-scripts.md](05-test-scripts.md) |
| `smoke.js` | End-to-end DOM smoke test: boots index.html in jsdom and plays the real UI | [05-test-scripts.md](05-test-scripts.md) |

## Game flow (implemented in app.js)

`instructions (9 slides)` -> `practice board` -> on success modal -> `game stage (Section 2)` ->
advance per puzzle -> `results (total score / total moves)`.

Scoring: each solved game adds `max(0, 100 - 2 * moves)` to total score.
Time limit: 240 s per board; at 0 s the board auto-advances.
