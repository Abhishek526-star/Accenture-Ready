// src/pages/MistakesPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  RotateCcw,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { mistakesStorage } from '../services/mistakesStorage.js';

export default function MistakesPage({ theme = 'dark' }) {
  const [mistakes, setMistakes] = useState(() => mistakesStorage.getMistakes());

  const activeMistakes = mistakes.filter(m => !m.resolved);
  const resolvedMistakes = mistakes.filter(m => m.resolved);

  const handleResolve = (id, type) => {
    mistakesStorage.resolveMistake(id, type);
    setMistakes(mistakesStorage.getMistakes());
  };

  const handleDelete = (id, type) => {
    mistakesStorage.deleteMistake(id, type);
    setMistakes(mistakesStorage.getMistakes());
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      {/* Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)',
        border: '1px solid rgba(239, 68, 68, 0.3)',
        borderRadius: '16px',
        padding: '2rem',
        marginBottom: '2rem'
      }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          <RotateCcw size={14} /> ADAPTIVE ERROR REMEDIATION
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 0.5rem 0' }}>
          Questions You Should Retry
        </h1>
        <p style={{ color: '#94a3b8', margin: 0, fontSize: '1rem', maxWidth: '680px' }}>
          Whenever you fail test cases or make a syntax error, questions are logged here. Retrying mistakes directly reinforces weakness conversion into interview strengths.
        </p>
      </div>

      {/* Active Mistakes Section */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#f8fafc', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>❌ Unresolved Mistakes</span>
          <span style={{ fontSize: '0.8rem', padding: '2px 8px', borderRadius: '10px', background: '#ef444425', color: '#ef4444', fontWeight: 700 }}>
            {activeMistakes.length}
          </span>
        </h2>

        {activeMistakes.length === 0 ? (
          <div style={{
            background: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '14px',
            padding: '3rem 2rem',
            textAlign: 'center'
          }}>
            <CheckCircle2 size={40} style={{ color: '#4ade80', margin: '0 auto 1rem auto' }} />
            <h3 style={{ color: '#f8fafc', fontSize: '1.2rem', marginBottom: '0.4rem' }}>Zero Pending Mistakes!</h3>
            <p style={{ color: '#94a3b8', maxWidth: '460px', margin: '0 auto 1.5rem auto', fontSize: '0.95rem' }}>
              You have resolved all failed question attempts. Keep up the high standard in upcoming practice rounds!
            </p>
            <Link
              to="/practice"
              className="btn btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: '#38bdf8',
                color: '#0f172a',
                border: 'none',
                fontWeight: 700,
                padding: '9px 16px',
                borderRadius: '8px',
                textDecoration: 'none'
              }}
            >
              <span>Practice More Questions</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
            {activeMistakes.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#1e293b',
                  border: '1px solid rgba(239, 68, 68, 0.4)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ef4444', background: '#ef444415', padding: '2px 8px', borderRadius: '6px' }}>
                      {item.type.toUpperCase()} • Attempt #{item.attemptCount || 1}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                      {item.difficulty}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc', margin: '0.25rem 0 0.5rem 0' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#cbd5e1', background: '#0f172a', padding: '8px 12px', borderRadius: '6px', border: '1px solid #334155', margin: '0 0 1rem 0' }}>
                    <strong>Error Note:</strong> {item.errorSummary}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <Link
                    to={item.route || '/practice'}
                    style={{
                      flex: 1,
                      textAlign: 'center',
                      padding: '8px 14px',
                      background: '#ef4444',
                      color: '#ffffff',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <span>Practice Again</span>
                    <ExternalLink size={14} />
                  </Link>

                  <button
                    onClick={() => handleResolve(item.id, item.type)}
                    style={{
                      padding: '8px 12px',
                      background: '#0f172a',
                      border: '1px solid #334155',
                      color: '#4ade80',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    Mark Solved
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Resolved Mistakes Section */}
      {resolvedMistakes.length > 0 && (
        <div>
          <h2 style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
            ✓ Successfully Resolved Mistakes ({resolvedMistakes.length})
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {resolvedMistakes.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: '#1e293b',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  padding: '10px 14px'
                }}
              >
                <div>
                  <span style={{ color: '#4ade80', fontWeight: 600, marginRight: '10px' }}>✓</span>
                  <span style={{ color: '#f8fafc', fontSize: '0.9rem', fontWeight: 500 }}>{item.title}</span>
                  <span style={{ color: '#64748b', fontSize: '0.8rem', marginLeft: '10px' }}>({item.category})</span>
                </div>
                <button
                  onClick={() => handleDelete(item.id, item.type)}
                  style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: '0.8rem' }}
                >
                  Clear
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
