// src/components/pseudocode/PseudocodeScratchpad.jsx
import React, { useState, useEffect } from 'react';
import { Edit3, Check, Trash2 } from 'lucide-react';
import { pseudocodeStorage } from '../../utils/pseudocodeStorage.js';

export default function PseudocodeScratchpad({ questionId }) {
  const [content, setContent] = useState(() => pseudocodeStorage.getScratchpad(questionId));
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setContent(pseudocodeStorage.getScratchpad(questionId));
    setSaved(false);
  }, [questionId]);

  const handleChange = (e) => {
    const val = e.target.value;
    setContent(val);
    pseudocodeStorage.saveScratchpad(questionId, val);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  const handleClear = () => {
    setContent('');
    pseudocodeStorage.saveScratchpad(questionId, '');
  };

  return (
    <div style={{
      background: '#0f172a',
      border: '1px solid #334155',
      borderRadius: '12px',
      padding: '1rem',
      marginBottom: '1.5rem'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#94a3b8', fontSize: '0.8rem', fontWeight: 600 }}>
          <Edit3 size={14} />
          <span>Candidate Working Scratchpad / Binary Notes</span>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {saved && <span style={{ fontSize: '0.75rem', color: '#4ade80' }}>Auto-saved</span>}
          <button
            onClick={handleClear}
            style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', padding: '2px' }}
            title="Clear scratchpad"
          >
            <Trash2 size={13} />
          </button>
        </div>
      </div>

      <textarea
        placeholder="Type scratch calculations here e.g.:
a = 4 (100 in bin)
b = 6 (110 in bin)
a ^ b = 010 (2)..."
        value={content}
        onChange={handleChange}
        rows={4}
        style={{
          width: '100%',
          background: '#090d16',
          border: '1px solid #1e293b',
          borderRadius: '8px',
          color: '#f8fafc',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.85rem',
          padding: '8px 10px',
          resize: 'vertical',
          outline: 'none',
          boxSizing: 'border-box',
          lineHeight: 1.4
        }}
      />
    </div>
  );
}
