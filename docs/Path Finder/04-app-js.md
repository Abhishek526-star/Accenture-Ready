# app.js — UI layer (all icons, slides, game flow)

IIFE, no exports. Depends on globals `PF` (logic.js) and `PF_DATA` (data.js).
Targets DOM: `#pfTabs`, `#pfCard`, `#pfStage`. Debug hook: `window.__pfBoard()` returns live board state.

## 1. Global state

```js
var variantId = "3x3";          // active tab id
var stage = "instructions";     // instructions | practice | game | results
var slide = 0;                  // instruction slide index (0..8)
var gameIndex = 0, totalScore = 0, totalMoves = 0;
var B = null;                   // live board state
var timerHandle = null;
```

Board state `B` (created by `newBoard(puzzle)`): `{ puzzle, blocks: PF.cloneBlocks(puzzle.blocks),
selected: null, moves: 0, seconds: puzzle.timeLimit, highlight: [], shake: false, animating: false, done: false }`.
Timer: `setInterval` every 1000 ms decrements `B.seconds`; at 0 -> `B.done = true`, stop timer, `onTimeUp()`.

## 2. ICONS (exact SVG markup — lucide path data)

Generic builder (all UI icons use this):

```html
<svg width=S height=S viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="..."/> ...
</svg>
```

`IC` table (path `d` attributes, in order):

| Key | Use | Paths (d) |
|---|---|---|
| `check` | Submit button + success modal | `M20 6 9 17l-5-5` |
| `chevL` | Instruction prev | `m15 18-6-6 6-6` |
| `chevR` | Instruction next | `m9 18 6-6-6-6` |
| `rotate` | Rotate control (refresh-cw) | `M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`, `M21 3v5h-5`, `M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`, `M8 16H3v5` |
| `flip` | Flip control (repeat-2) | `m17 2 4 4-4 4`, `M3 11v-1a4 4 0 0 1 4-4h14`, `m7 22-4-4 4-4`, `M21 13v1a4 4 0 0 1-4 4H3` |
| `bulb` | Show solution (lightbulb) | `M9 18h6`, `M10 22h4`, `M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.65 4.65 0 0 1 8.91 14` |

Sizes used: 24px (nav chevrons), 32px (modal check), 16px (control buttons).

### Tile arrow icon

```js
ARROW_ROT = { right: 0, down: 90, left: 180, up: 270,
              upright: -45, downright: 45, downleft: 135, upleft: -135 }
```

```html
<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" style="transform:rotate(Xdeg)">
  <path d="M5 12h11M13 7l5 5-5 5" fill="none" stroke="#fff" stroke-width="2.5"
        stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```
(X = `ARROW_ROT[dir]`.) Base glyph points right.

### Start icon (astronaut/helmet, currentColor)

```html
<svg viewBox="0 0 40 40" style="width:Spx;height:Spx">
  <path fill="currentColor" d="M8 22c0-6 4-12 12-14 0 0-2 6-2 10l4 2 4-2c0-4-2-10-2-10 8 2 12 8 12 14 0 2-1 4-2 5l2 3H8l2-3c-1-1-2-3-2-5z"/>
  <circle cx="20" cy="14" r="3" fill="currentColor"/>
</svg>
```

### End icon (planet/moon)

```html
<svg viewBox="0 0 40 40" style="width:Spx;height:Spx">
  <circle cx="18" cy="20" r="12" fill="currentColor"/>
  <circle cx="14" cy="16" r="3" fill="#e5e5e5" opacity=".35"/>
  <circle cx="22" cy="23" r="2" fill="#e5e5e5" opacity=".35"/>
  <circle cx="30" cy="12" r="4" fill="currentColor"/>
</svg>
```

(The same start glyph is also the card watermark in index.html as a data-URI at opacity .04.)

## 3. Instruction slides (verbatim, 9 slides)

Rendered in `.pf-instr-text` (pre-line). Emojis in slides 4/5/7: 🗘 = `\uD83D\uDDD8` (pencil), ⇆ = `\u21C6`, ✓ = `\u2713`.

1. "This practice exercise will provide you with instructions and practice items for a task designed to measure Image rotation ability.\n\nPlease take the time to read the instructions carefully and use the practice items to familiarize yourself with the task."
2. "Your goal is to create a path from the icon on the left to the icon on the right by rotating the tiles and changing the arrow directions. You should try to generate a path in the least number of moves."
3. "Tap/click on a tile to select it."
4. "Tap/click \uD83D\uDDD8 to rotate the tile clockwise."
5. "Tap/click \u21C6 to change the direction of route."
6. "Arrow directions can point left, right, up, down, and around any angles of the tile path."
7. "Once the route is complete, select \u2713. If you have successfully created a path, the task is complete. If you have not successfully created a path, you will be able to try again."
8. "Your goal is to create a valid path in the least number of moves. You do not need to rush. However, if you have been unable to find a valid path within the time limit, you will progress automatically to the next question.\n\nA timer is located at the bottom of the screen to indicate time remaining."
9. "The practice exercise will have 2 grids to solve.\n\nThe first grid will be one that you can replay, so you should take this opportunity to practice how to rotate and change arrow directions for all types of tile patterns."

UI: chevL nav shown when slide > 0; chevR nav hidden on last slide; 9 dots; button says "Next"
(slides 1-8) or "Practice" (slide 9 -> starts practice board). Slides 2-8 (indices 1..7) also show a
`.pf-preview` copy of the practice board with `block_1_1` selected.

## 4. Board rendering (`boardHtml`)

- Cell size by blocks count: `{3: 42, 4: 28, 5: 20}px` (key = gridSize/3).
- Icon size x = clamp(cellSize - 2, 28..40).
- Layout: `.pf-boardrow` = Start icon column | grid | End icon column. Icon columns width x+4,
  height gridSize*cellSize, `padding-top = cellRow * cellSize + (cellSize - x)/2`.
- Grid: `grid-template-columns/rows: repeat(n, <cell>px)`; one `<button class="pf-cell">` per cell,
  `data-b="block_r_c"`; classes: `dark` (isDark), `hl` (in highlight path), `sel` (selected block),
  `sepr`/`sepb` on every 3rd row/col (block separators); non-dark cells are `disabled`.
- Dark cells with an arrow render `arrowSvg(dir)` inside.

## 5. Controls bar

Structure: timer ring (two circles r=22, track `#e5e5e5`, progress `#pfRing`, svg rotated -90°) +
`#pfTime` text + `#pfRotate` + `#pfFlip` + `#pfSubmit` + `#pfSolution` buttons.

Timer ring math (`updateTimer`):
- text `m:ss`; color `#dc2626` when seconds <= 60 else `#404040`; ring stroke matches.
- `w = 2*PI*22`; `stroke-dasharray = w`; `stroke-dashoffset = w - (seconds/timeLimit)*w`.

Button enable rules: Rotate/Flip need a selection (`!B.selected` disables), all disabled while
`animating` or `done`; Submit/Solution disabled only while animating/done.

Moves: Rotate and Flip each increment `B.moves` ("Moves: N").

Game-stage indicator (only when games.length > 1):
`Section 2 of 2 — Puzzle {i+1} of {n}` + dots `● ○`.

## 6. Actions

- **Select**: click any dark cell -> `B.selected = data-b`, re-render (yellow ring).
- **Submit** (`submit()`): `PF.validate(B.puzzle, B.blocks)`; invalid -> `B.shake = true` for 450 ms
  (shake animation), no move consumed. Valid -> `B.animating = true`, `animatePath(res.path, cb)`
  (280 ms per cell, highlight accumulates, 400 ms pause, then `showModal(B.moves + 1)`).
- **Success modal**: green check circle, "Great! You found the path", "Solved in N move(s).",
  Continue button. On practice -> switch to game stage (`gameIndex = 0`, reset score/moves, load `games[0]`).
  In game -> `advanceGame(moves)`.
- **advanceGame(moves)**: `totalScore += max(0, 100 - 2*moves)`, `totalMoves += moves`; if last game ->
  results stage; else next board.
- **onTimeUp()**: practice -> jump to game stage (fresh boards); game -> `advanceGame(0)` (0 score).
- **Show solution** (`showSolution()`): `PF.solve(B.puzzle, B.blocks)`; no solution -> shake;
  else modal `.pf-sol-modal` with heading "Solution path", subtitle, frozen board render with the
  path highlighted (`.hl`), Close button. Live board is untouched.
- **Results**: "Well done!" + "You completed the path finder assessment." + stats cards
  (Total score, Total moves) + "Practice Again" button (resets to instructions slide 0).

## 7. Tabs & boot

`buildTabs()` renders one `.pf-tab` per `PF_DATA.VARIANTS` (label text from data); clicking sets
`variantId`, resets to instructions, rebuilds. `boot()` on DOMContentLoaded: stageEl = `#pfStage`,
buildTabs, render.
