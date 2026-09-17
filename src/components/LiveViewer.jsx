// src/components/LiveViewer.jsx
// Real-time live viewer badge displaying server-verified online learner count with zero layout shift

import React from 'react';
import { useLiveViewer } from '../hooks/useLiveViewer.js';

export default function LiveViewer({
  room = 'website',
  compact = false,
  className = '',
  style = {}
}) {
  const { count, isConnected } = useLiveViewer(room);

  const formattedCount = Number(count).toLocaleString();
  const label = count === 1 ? 'learner online' : 'learners online';

  return (
    <div
      className={`live-viewer-badge ${compact ? 'live-viewer-compact' : ''} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.45rem',
        padding: compact ? '4px 8px' : '5px 12px',
        borderRadius: '20px',
        background: 'rgba(15, 23, 42, 0.75)',
        border: '1px solid rgba(56, 189, 248, 0.25)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
        color: '#f8fafc',
        fontSize: compact ? '0.75rem' : '0.8rem',
        fontWeight: 600,
        letterSpacing: '0.01em',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        minWidth: compact ? '76px' : '136px',
        justifyContent: 'center',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        ...style
      }}
      title={isConnected ? `${formattedCount} active ${label} right now` : 'Connecting to live presence...'}
      aria-live="polite"
    >
      {/* Live Pulsing Dot */}
      <span
        style={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '8px',
          height: '8px',
          flexShrink: 0
        }}
      >
        {/* Animated pulse ring */}
        <span
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: isConnected ? '#22c55e' : '#94a3b8',
            opacity: 0.75,
            animation: isConnected ? 'liveViewerPulse 2s cubic-bezier(0, 0, 0.2, 1) infinite' : 'none'
          }}
        />
        {/* Solid center dot */}
        <span
          style={{
            position: 'relative',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: isConnected ? '#4ade80' : '#cbd5e1'
          }}
        />
      </span>

      {/* Counter and Text */}
      <span
        style={{
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          fontWeight: 700,
          color: isConnected ? '#f8fafc' : '#94a3b8',
          fontVariantNumeric: 'tabular-nums'
        }}
      >
        {formattedCount}
      </span>

      <span
        style={{
          color: isConnected ? '#cbd5e1' : '#94a3b8',
          fontWeight: 500,
          fontSize: compact ? '0.7rem' : '0.75rem'
        }}
      >
        {compact ? 'online' : label}
      </span>

      {/* Keyframe animation for glowing pulse ring */}
      <style>{`
        @keyframes liveViewerPulse {
          0% {
            transform: scale(0.95);
            opacity: 0.85;
          }
          50% {
            transform: scale(2.2);
            opacity: 0;
          }
          100% {
            transform: scale(0.95);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
