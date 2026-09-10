// src/components/pseudocode/PseudocodeHandbookModal.jsx
import React from 'react';
import { X, BookOpen, Zap, Shield, CheckCircle2 } from 'lucide-react';
import { PSEUDOCODE_HANDBOOK } from '../../data/pseudocodeQuestions.js';

export default function PseudocodeHandbookModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(4px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '750px',
          maxHeight: '85vh',
          background: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '16px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 24px',
          borderBottom: '1px solid #334155',
          background: '#0f172a'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen size={20} className="text-amber-400" />
            <h2 style={{ margin: 0, fontSize: '1.25rem', color: '#f8fafc', fontWeight: 800 }}>
              {PSEUDOCODE_HANDBOOK.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '4px' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div style={{ padding: '20px 24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {PSEUDOCODE_HANDBOOK.sections.map((sec, idx) => (
            <div key={idx} style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '12px', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1.05rem', color: '#38bdf8', margin: '0 0 0.75rem 0', fontWeight: 700 }}>
                {sec.heading}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {sec.content.map((line, lIdx) => (
                  <div key={lIdx} style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: 1.5 }}>
                    {line}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div style={{ padding: '12px 24px', background: '#090d16', borderTop: '1px solid #1e293b', display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={onClose}
            style={{ padding: '8px 18px', background: '#0284c7', border: 'none', borderRadius: '8px', color: '#ffffff', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}
          >
            Close Handbook
          </button>
        </div>
      </div>
    </div>
  );
}
