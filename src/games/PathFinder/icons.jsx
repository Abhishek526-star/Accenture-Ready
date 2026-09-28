// src/games/PathFinder/icons.jsx
// Exact SVG icons from docs/Path Finder/04-app-js.md (lucide path data + game glyphs).

import React from 'react';

function Svg({ size, children }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

// Lucide `d` attributes, in doc order.
const IC = {
  check: ['M20 6 9 17l-5-5'],
  chevL: ['m15 18-6-6 6-6'],
  chevR: ['m9 18 6-6-6-6'],
  rotate: [
    'M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8',
    'M21 3v5h-5',
    'M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16',
    'M8 16H3v5'
  ],
  flip: [
    'm17 2 4 4-4 4',
    'M3 11v-1a4 4 0 0 1 4-4h14',
    'm7 22-4-4 4-4',
    'M21 13v1a4 4 0 0 1-4 4H3'
  ],
  bulb: [
    'M9 18h6',
    'M10 22h4',
    'M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.65 4.65 0 0 1 8.91 14'
  ]
};

export function UiIcon({ name, size = 16 }) {
  return <Svg size={size}>{(IC[name] || []).map((d, i) => <path key={i} d={d} />)}</Svg>;
}

const ARROW_ROT = {
  right: 0, down: 90, left: 180, up: 270,
  upright: -45, downright: 45, downleft: 135, upleft: -135
};

// Tile arrow glyph (base points right, rotated per direction).
export function ArrowSvg({ dir }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={{ transform: 'rotate(' + (ARROW_ROT[dir] || 0) + 'deg)' }}
    >
      <path
        d="M5 12h11M13 7l5 5-5 5"
        fill="none"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Start icon (astronaut/helmet).
export function StartIcon({ size = 36 }) {
  return (
    <svg viewBox="0 0 40 40" style={{ width: size + 'px', height: size + 'px' }}>
      <path
        fill="currentColor"
        d="M8 22c0-6 4-12 12-14 0 0-2 6-2 10l4 2 4-2c0-4-2-10-2-10 8 2 12 8 12 14 0 2-1 4-2 5l2 3H8l2-3c-1-1-2-3-2-5z"
      />
      <circle cx="20" cy="14" r="3" fill="currentColor" />
    </svg>
  );
}

// End icon (planet/moon).
export function EndIcon({ size = 36 }) {
  return (
    <svg viewBox="0 0 40 40" style={{ width: size + 'px', height: size + 'px' }}>
      <circle cx="18" cy="20" r="12" fill="currentColor" />
      <circle cx="14" cy="16" r="3" fill="#e5e5e5" opacity=".35" />
      <circle cx="22" cy="23" r="2" fill="#e5e5e5" opacity=".35" />
      <circle cx="30" cy="12" r="4" fill="currentColor" />
    </svg>
  );
}
