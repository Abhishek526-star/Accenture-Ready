// src/components/FrontendFunctionsGuide.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { Code2, ChevronDown, X, Search, Copy, Check, Sparkles, BookOpen } from 'lucide-react';
import { frontendCategories } from '../data/frontendFunctionsData.js';

export default function FrontendFunctionsGuide({ isOpen, onClose }) {
  const [openFnSection, setOpenFnSection] = useState('dom-selection');
  const [examplePopup, setExamplePopup] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (examplePopup) {
          setExamplePopup(null);
        } else if (isOpen && onClose) {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, examplePopup, onClose]);

  const toggleFnSection = (key) => {
    setOpenFnSection((prev) => (prev === key ? null : key));
  };

  const handleCopyCode = (text) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Filter categories based on search query
  const filteredCategories = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return frontendCategories;

    return frontendCategories
      .map((cat) => {
        const matchingRows = cat.rows.filter(([fn, ex, out, detail]) => {
          return (
            fn.toLowerCase().includes(q) ||
            ex.toLowerCase().includes(q) ||
            out.toLowerCase().includes(q) ||
            detail?.attempt?.toLowerCase().includes(q) ||
            detail?.note?.toLowerCase().includes(q)
          );
        });
        if (matchingRows.length > 0 || cat.label.toLowerCase().includes(q)) {
          return {
            ...cat,
            rows: matchingRows.length > 0 ? matchingRows : cat.rows
          };
        }
        return null;
      })
      .filter(Boolean);
  }, [searchQuery]);

  // Automatically open first matching section if searching
  useEffect(() => {
    if (searchQuery.trim() && filteredCategories.length > 0) {
      setOpenFnSection(filteredCategories[0].key);
    }
  }, [searchQuery, filteredCategories]);

  if (!isOpen) return null;

  return (
    <div
      className="frontend-guide-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(3, 7, 18, 0.78)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        animation: 'fadeIn 0.2s ease-out'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget && onClose) onClose();
      }}
    >
      <div
        className="frontend-guide-modal-container"
        style={{
          width: '100%',
          maxWidth: '1080px',
          height: '85vh',
          maxHeight: '90vh',
          background: '#090e1a',
          border: '1px solid rgba(56, 189, 248, 0.25)',
          borderRadius: '16px',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 35px rgba(56, 189, 248, 0.12)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div
          style={{
            padding: '1.1rem 1.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.9) 0%, rgba(9, 14, 26, 0.95) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexShrink: 0
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(168, 85, 247, 0.2))',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#38bdf8'
              }}
            >
              <Code2 size={20} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
                  Frontend Functions & CSS with Examples
                </h2>
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '9999px',
                    background: 'rgba(56, 189, 248, 0.15)',
                    color: '#38bdf8',
                    border: '1px solid rgba(56, 189, 248, 0.3)'
                  }}
                >
                  10 TOPICS
                </span>
              </div>
              <p style={{ margin: 0, fontSize: '0.8rem', color: '#94a3b8' }}>
                Interactive DOM methods, event handlers, JavaScript utilities & memorized CSS properties with live examples
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Search Input */}
            <div style={{ position: 'relative', width: '260px' }}>
              <Search
                size={14}
                style={{
                  position: 'absolute',
                  left: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#64748b'
                }}
              />
              <input
                type="text"
                placeholder="Search functions (e.g. classList, flex)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.45rem 0.75rem 0.45rem 2rem',
                  fontSize: '0.78rem',
                  borderRadius: '8px',
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#f8fafc',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#64748b',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  <X size={13} />
                </button>
              )}
            </div>

            <button
              onClick={onClose}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#94a3b8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.15s'
              }}
              title="Close Guide (Esc)"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body: Standard block container so cards never compress or overlap */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1.25rem 1.5rem',
            minHeight: 0
          }}
        >
          {filteredCategories.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#94a3b8' }}>
              <Search size={32} style={{ marginBottom: '0.5rem', opacity: 0.5 }} />
              <p>No functions or CSS properties match "{searchQuery}".</p>
              <button
                className="btn btn-outline"
                onClick={() => setSearchQuery('')}
                style={{ fontSize: '0.8rem', padding: '0.35rem 0.8rem' }}
              >
                Clear Search Filter
              </button>
            </div>
          ) : (
            filteredCategories.map(({ key, label, color, bg, border, rows, note, type }) => (
              <div
                key={key}
                style={{
                  border: `1px solid ${border}`,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: '#070b16',
                  marginBottom: '0.75rem',
                  transition: 'border-color 0.2s ease'
                }}
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleFnSection(key)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1.15rem',
                    background: bg,
                    border: 'none',
                    cursor: 'pointer',
                    color,
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    letterSpacing: '0.2px',
                    transition: 'background 0.15s'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <span>{label}</span>
                    <span
                      style={{
                        fontSize: '0.65rem',
                        fontWeight: 800,
                        padding: '1px 6px',
                        borderRadius: '4px',
                        background: `${color}20`,
                        border: `1px solid ${color}40`,
                        color
                      }}
                    >
                      {type}
                    </span>
                  </div>
                  <ChevronDown
                    size={16}
                    style={{
                      transition: 'transform 0.25s ease',
                      transform: openFnSection === key ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  />
                </button>

                {/* Accordion Body */}
                {openFnSection === key && (
                  <div style={{ padding: '0.75rem 1rem 1rem' }}>
                    {/* Optional Note Alert */}
                    {note && (
                      <div
                        style={{
                          marginBottom: '0.85rem',
                          padding: '0.55rem 0.85rem',
                          borderRadius: '8px',
                          background: `${color}0d`,
                          border: `1px solid ${color}30`,
                          fontSize: '0.78rem',
                          color: '#e2e8f0',
                          lineHeight: 1.5
                        }}
                      >
                        <span style={{ fontWeight: 700, color }}>💡 Pro Tip: </span>
                        {note}
                      </div>
                    )}

                    {/* Functions Table */}
                    <div style={{ overflowX: 'auto' }}>
                      <table
                        style={{
                          width: '100%',
                          borderCollapse: 'collapse',
                          fontSize: '0.82rem',
                          minWidth: '540px'
                        }}
                      >
                        <thead>
                          <tr style={{ background: 'rgba(255, 255, 255, 0.04)' }}>
                            {['Function / Property', 'Example', 'Output / Purpose', ''].map((h, hi) => (
                              <th
                                key={hi}
                                style={{
                                  padding: '0.5rem 0.75rem',
                                  textAlign: 'left',
                                  color,
                                  fontWeight: 700,
                                  borderBottom: `1px solid ${border}`,
                                  whiteSpace: 'nowrap'
                                }}
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {rows.map(([fn, ex, out, detail], i) => (
                            <tr
                              key={i}
                              style={{
                                background: i % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.02)',
                                transition: 'background 0.12s'
                              }}
                            >
                              <td
                                style={{
                                  padding: '0.5rem 0.75rem',
                                  color,
                                  fontWeight: 700,
                                  fontFamily: 'monospace',
                                  whiteSpace: 'nowrap'
                                }}
                              >
                                {fn}
                              </td>
                              <td
                                style={{
                                  padding: '0.5rem 0.75rem',
                                  color: '#94a3b8',
                                  fontFamily: 'monospace',
                                  fontSize: '0.78rem'
                                }}
                              >
                                {ex}
                              </td>
                              <td
                                style={{
                                  padding: '0.5rem 0.75rem',
                                  color: '#e2e8f0'
                                }}
                              >
                                {out}
                              </td>
                              <td style={{ padding: '0.35rem 0.5rem', whiteSpace: 'nowrap', textAlign: 'right' }}>
                                {detail && (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setExamplePopup({
                                        ...detail,
                                        fnName: fn,
                                        color,
                                        type: type || 'JAVASCRIPT'
                                      })
                                    }
                                    style={{
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      gap: '0.3rem',
                                      padding: '0.25rem 0.65rem',
                                      background: `${color}18`,
                                      border: `1px solid ${color}55`,
                                      borderRadius: '6px',
                                      color,
                                      fontSize: '0.72rem',
                                      fontWeight: 700,
                                      cursor: 'pointer',
                                      transition: 'all 0.15s'
                                    }}
                                  >
                                    <Code2 size={11} /> Example
                                  </button>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: '0.75rem 1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            background: 'rgba(15, 23, 42, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.76rem',
            color: '#64748b'
          }}
        >
          <div>
            Press <kbd style={{ padding: '2px 5px', borderRadius: '4px', background: 'rgba(255,255,255,0.08)' }}>Esc</kbd> to close
          </div>
          <button
            onClick={onClose}
            className="btn btn-secondary"
            style={{ padding: '0.35rem 0.9rem', fontSize: '0.78rem' }}
          >
            Close Guide
          </button>
        </div>
      </div>

      {/* ── Sub-Modal: Exact </> Example Popup matching MySQL style ── */}
      {examplePopup && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            background: 'rgba(3, 7, 18, 0.85)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            animation: 'fadeIn 0.15s ease-out'
          }}
          onClick={() => setExamplePopup(null)}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '680px',
              maxHeight: '88vh',
              overflowY: 'auto',
              background: '#0a0f1d',
              border: `1px solid ${examplePopup.color}55`,
              borderRadius: '16px',
              boxShadow: `0 25px 70px -10px rgba(0,0,0,0.95), 0 0 35px ${examplePopup.color}25`,
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Code2 size={18} style={{ color: examplePopup.color }} />
                <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#f8fafc', fontFamily: 'monospace' }}>
                  {examplePopup.fnName}
                </span>
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    padding: '2px 7px',
                    borderRadius: '5px',
                    background: `${examplePopup.color}18`,
                    color: examplePopup.color,
                    border: `1px solid ${examplePopup.color}44`
                  }}
                >
                  {examplePopup.type || 'JAVASCRIPT'}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setExamplePopup(null)}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: '#94a3b8',
                  width: '30px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={15} />
              </button>
            </div>

            {/* ❓ HOW TO ATTEMPT? */}
            <div>
              <div
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: examplePopup.color,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '0.4rem'
                }}
              >
                ❓ How to Attempt?
              </div>
              <div
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: `1px solid ${examplePopup.color}30`,
                  borderRadius: '8px',
                  padding: '0.75rem 1rem',
                  fontSize: '0.85rem',
                  color: '#e2e8f0',
                  lineHeight: 1.55
                }}
              >
                {examplePopup.attempt}
              </div>
            </div>

            {/* 📋 SAMPLE HTML / CONTEXT */}
            {examplePopup.sampleCode && (
              <div>
                <div
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: examplePopup.color,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '0.4rem'
                  }}
                >
                  📋 Sample HTML / Context
                </div>
                <pre
                  style={{
                    background: '#040810',
                    border: `1px solid ${examplePopup.color}30`,
                    borderRadius: '8px',
                    padding: '0.75rem 1rem',
                    margin: 0,
                    fontFamily: 'monospace',
                    fontSize: '0.8rem',
                    lineHeight: 1.6,
                    color: '#94a3b8',
                    overflowX: 'auto'
                  }}
                >
                  {examplePopup.sampleCode}
                </pre>
              </div>
            )}

            {/* 💻 JAVASCRIPT / CSS CODE */}
            {examplePopup.code && (
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.4rem'
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: examplePopup.color,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    💻 Solution Code
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyCode(examplePopup.code)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      background: 'none',
                      border: 'none',
                      color: copiedCode ? '#4ade80' : '#94a3b8',
                      fontSize: '0.72rem',
                      cursor: 'pointer'
                    }}
                  >
                    {copiedCode ? <Check size={12} /> : <Copy size={12} />}
                    {copiedCode ? 'Copied!' : 'Copy Code'}
                  </button>
                </div>
                <pre
                  style={{
                    background: '#040810',
                    border: `1px solid ${examplePopup.color}40`,
                    borderRadius: '8px',
                    padding: '0.75rem 1rem',
                    margin: 0,
                    fontFamily: 'monospace',
                    fontSize: '0.82rem',
                    lineHeight: 1.6,
                    color: '#38bdf8',
                    overflowX: 'auto'
                  }}
                >
                  {examplePopup.code}
                </pre>
              </div>
            )}

            {/* 📊 OUTPUT / RESULT TABLE */}
            {examplePopup.output && (
              <div>
                <div
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: examplePopup.color,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '0.4rem'
                  }}
                >
                  📊 Expected Output / State Result
                </div>
                <div style={{ overflowX: 'auto' }}>
                  <table
                    style={{
                      borderCollapse: 'collapse',
                      fontSize: '0.8rem',
                      width: '100%',
                      background: '#040810',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      border: `1px solid ${examplePopup.color}25`
                    }}
                  >
                    <thead>
                      <tr style={{ background: `${examplePopup.color}14` }}>
                        {examplePopup.output.headers.map((h, hi) => (
                          <th
                            key={hi}
                            style={{
                              padding: '0.4rem 0.75rem',
                              textAlign: 'left',
                              color: examplePopup.color,
                              fontWeight: 700,
                              borderBottom: `1px solid ${examplePopup.color}40`,
                              whiteSpace: 'nowrap'
                            }}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {examplePopup.output.rows.map((row, ri) => (
                        <tr
                          key={ri}
                          style={{
                            background: ri % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)',
                            borderBottom: '1px solid rgba(255,255,255,0.04)'
                          }}
                        >
                          {row.map((cell, ci) => (
                            <td
                              key={ci}
                              style={{
                                padding: '0.4rem 0.75rem',
                                color: ci === 0 ? examplePopup.color : '#e2e8f0',
                                fontFamily: ci === 0 ? 'monospace' : 'inherit'
                              }}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 💡 Key Note */}
            {examplePopup.note && (
              <div
                style={{
                  background: `${examplePopup.color}0d`,
                  border: `1px solid ${examplePopup.color}35`,
                  borderRadius: '8px',
                  padding: '0.65rem 0.9rem',
                  fontSize: '0.78rem',
                  color: '#e2e8f0',
                  lineHeight: 1.5
                }}
              >
                <span style={{ fontWeight: 700, color: examplePopup.color }}>💡 Key Note: </span>
                {examplePopup.note}
              </div>
            )}

            {/* Close Button */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.25rem' }}>
              <button
                type="button"
                onClick={() => setExamplePopup(null)}
                style={{
                  padding: '0.45rem 1.15rem',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  background: `${examplePopup.color}22`,
                  border: `1px solid ${examplePopup.color}55`,
                  color: examplePopup.color,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.15s'
                }}
              >
                Close Example
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
