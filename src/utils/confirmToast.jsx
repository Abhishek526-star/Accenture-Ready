// src/utils/confirmToast.jsx
// Shared helper: replaces window.confirm() / alert() with styled react-hot-toast notifications
import React from 'react';
import toast from 'react-hot-toast';

const baseToastStyle = {
  background: '#0f172a',
  color: '#f1f5f9',
  border: '1px solid rgba(249,115,22,0.35)',
  borderRadius: '10px',
  padding: '14px 16px',
  fontSize: '0.875rem',
  maxWidth: '380px',
  boxShadow: '0 8px 24px rgba(0,0,0,0.55)',
};

const btnBase = {
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '0.8rem',
  fontWeight: 700,
  padding: '5px 14px',
  transition: 'all 0.15s ease',
};

/**
 * Show a non-blocking confirmation toast with Confirm + Cancel buttons.
 * @param {string}   message       - The question to ask the user
 * @param {Function} onConfirm     - Called when user clicks the confirm button
 * @param {object}   [options]
 * @param {string}   [options.icon]          - Emoji prefix
 * @param {string}   [options.confirmLabel]  - Confirm button label (default "Yes, proceed")
 * @param {'warning'|'danger'|'info'} [options.type]  - Visual variant
 */
export function confirmToast(message, onConfirm, options = {}) {
  const { icon = '⚠️', confirmLabel = 'Yes, proceed', type = 'warning' } = options;

  const accentColor = type === 'danger' ? '#ef4444' : type === 'info' ? '#38bdf8' : '#f59e0b';

  toast(
    (t) => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
          <span style={{ fontSize: '1rem', lineHeight: 1.4 }}>{icon}</span>
          <span style={{ lineHeight: 1.5, color: '#e2e8f0' }}>{message}</span>
        </div>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <button
            style={{
              ...btnBase,
              background: 'rgba(255,255,255,0.07)',
              color: '#94a3b8',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
          <button
            style={{
              ...btnBase,
              background: accentColor,
              color: '#ffffff',
              boxShadow: `0 2px 8px ${accentColor}55`,
            }}
            onClick={() => {
              toast.dismiss(t.id);
              onConfirm();
            }}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    ),
    {
      duration: Infinity,
      id: 'confirm-toast',
      style: baseToastStyle,
    }
  );
}

/**
 * Show a simple informational / error toast (replaces alert()).
 */
export function infoToast(message, { icon = 'ℹ️', type = 'info' } = {}) {
  const accentColor = type === 'error' ? '#ef4444' : type === 'success' ? '#22c55e' : '#38bdf8';
  toast(
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span>{icon}</span>
      <span style={{ color: '#e2e8f0' }}>{message}</span>
    </div>,
    {
      duration: 4000,
      style: { ...baseToastStyle, borderColor: `${accentColor}55` },
    }
  );
}
