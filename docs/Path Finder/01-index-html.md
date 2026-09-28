# index.html — page shell, CSS, DOM contract

Single static page. No external dependencies, no build step.

## Head

```html
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Path Finder — Free Practice</title>
<style> /* ALL styles live here, inline */ </style>
```

## Body structure (DOM contract — app.js targets these IDs)

```html
<header>
  <h1>Path Finder — Free Practice</h1>
  <p class="desc">...intro copy...</p>
</header>
<div id="pfTabs" role="tablist" aria-label="Practice variants"></div> <!-- tabs injected by app.js -->
<div id="pfCard"><div id="pfStage"></div></div>                        <!-- stage injected by app.js -->
<script src="logic.js"></script>
<script src="data.js"></script>
<script src="app.js"></script>
```

## CSS reference (exact values)

### Global
- `html, body { background: #0a0c0e; }` body font: `ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif`; color `#fff`.
- `header h1`: 32px / 800 / letter-spacing -0.5px. `header p.desc`: `#cbd5e1`, 15px, max-width 980px.
- `@media (max-width: 640px)`: h1 24px, `#pfCard` margin `0 10px 16px`.

### Tabs (`#pfTabs`)
- Container: flex, wrap, gap 8px, padding `26px 32px 22px`.
- `.pf-tab`: pill (`border-radius:9999px`), border `1px solid #262b31`, bg `#15181b`, color `#9aa3ab`, padding `7px 14px`, font 14px.
- `.pf-tab:hover`: border `#3a4149`, color `#d1d5db`.
- `.pf-tab.on` (active): bg + border `#f97316` (orange), color `#fff`.

### Card
- `#pfCard`: margin `0 24px 24px`, radius 12px, bg `#f5f5f5`, shadow `0 0 40px rgba(0,0,0,.06)`, padding `26px 12px 30px`.
- `#pfCard::before`: watermark pattern — inline SVG data URI (40x40 astronaut/helmet glyph, fill `%23000`) at opacity .04, background-size `168px 168px`, repeat.
- `#pfStage { position: relative; z-index: 1; }`

### Instructions
- `.pf-instr-wrap`: flex center, padding `8px 16px`.
- `.pf-instr-card`: max-width 560px, white, border `#d1d5db`, radius 8px, padding 20px.
- `.pf-instr-text`: `white-space: pre-line`, centered, `#262626`, 12.5px, padding `0 34px`.
- `.pf-instr-nav`: absolutely positioned chevron buttons (left/right, vertically centered); transparent, `#9ca3af`; hover bg `#f3f4f6`.
- `.pf-dots` / `.pf-dot`: 8px circles, border `#9ca3af`; `.pf-dot.on` bg `#262626`.
- `.pf-dark-btn`: bg `#333`, white, radius 6px, padding `10px 32px`, 13px 600 uppercase; hover `#555`.
- `.pf-preview`: `pointer-events:none`, opacity .8, margin-top 28px, flex center.

### Board
- `.pf-game-wrap`: flex column center, padding `4px 8px`.
- `.pf-boardrow`: flex, gap 12px, color `#000`.
- `.pf-boardbox.shake .pf-boardrow`: animation `shake .4s ease-in-out`; keyframes translateX 0/-6/6/-4/4 px.
- `.pf-side`: flex center, `flex-shrink:0` (start/end icon columns).
- `.pf-grid`: border `3px solid #4b5563`, radius 10px, bg white, shadow.
- `.pf-gridin`: `display:grid` (grid-template set inline by app.js).
- `.pf-cell`: flex center, bg white, border-right/bottom `1px solid #d1d5db`, cursor pointer; `:disabled` cursor default.
- `.pf-cell.dark`: bg `#757575`; hover `#6b6b6b`. `.pf-cell.hl`: bg `#9e9e9e` (path highlight).
- `.pf-cell.sel`: `box-shadow: inset 0 0 0 2px #facc15` (yellow selection ring).
- `.pf-cell.sepr` / `.sepb`: `2px solid #6b7280` right/bottom — block separator lines every 3 cells.

### Controls
- `.pf-controls`: flex center, gap 12px, margin-top 10px.
- `.pf-timer`: 56x56 relative; svg absolute inset 0; `.pf-timetext` absolute centered, 12px 600 `#404040`, tabular-nums.
- `.pf-ctl`: 40x40, radius 8px, bg `#333`, white; hover `#555`; disabled opacity .4.
- `.pf-ctl.pf-solution`: bg `#f97316`; hover `#ea580c`.
- `.pf-moves`: margin-top 8px, 12px, `#737373`.
- `.pf-section`: 13px `#737373` centered; `.pf-sectiondots` 11px `#a3a3a3`.

### Modals
- `.pf-modal`: fixed inset 0, z-50, bg `rgba(0,0,0,.6)`, flex center, fadeIn .2s.
- `.pf-modal-card`: max-width 384px, white, radius 16px, padding 24px, big shadow.
- `.pf-modal-ic`: 56x56 circle, bg `#dcfce7`, color `#16a34a` (green check circle).
- `.pf-continue`: orange `#f97316`, 40px tall, radius 8px; hover `#ea580c`.
- `.pf-sol-card`: max-width 660px; `.pf-sol-board`: pointer-events none, overflow auto, `.pf-cell.dark:hover` bg `#757575`, `.hl` bg `#9e9e9e`.

### Results
- `.pf-results` column centered, padding `32px 16px`; h1 24px `#171717`.
- `.pf-stats`: grid 2 columns gap 16px margin-top 32px.
- `.pf-stat`: border `#e5e7eb`, bg `#f9fafb`, radius 8px, padding `16px 32px`; label 13px `#737373`, value 30px 700 `#171717`.
