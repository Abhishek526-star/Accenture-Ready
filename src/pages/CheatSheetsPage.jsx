// src/pages/CheatSheetsPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Copy,
  Check,
  Search,
  ArrowLeft,
  BookOpen,
  Sparkles,
  Table,
  Layers,
  Code2
} from 'lucide-react';
import { cheatSheets } from '../data/cheatSheets.js';

export default function CheatSheetsPage({ theme = 'dark' }) {
  const [activeSheetId, setActiveSheetId] = useState(cheatSheets[0].id);
  const [copiedSectionIndex, setCopiedSectionIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Java & DSA', 'Java', 'SQL', 'DSA', 'Language'];

  const filteredSheets = cheatSheets.filter(s => {
    const matchesCat = selectedCategory === 'All' || s.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !q ||
      s.title.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  const activeSheet =
    cheatSheets.find(s => s.id === activeSheetId) ||
    filteredSheets[0] ||
    cheatSheets[0];

  const handleCopyCode = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedSectionIndex(index);
    setTimeout(() => setCopiedSectionIndex(null), 2000);
  };

  return (
    <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      {/* Breadcrumb */}
      <div style={{ marginBottom: '1.25rem' }}>
        <Link to="/learn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#94a3b8', fontSize: '0.875rem', textDecoration: 'none' }}>
          <ArrowLeft size={16} /> Back to Learning Hub
        </Link>
      </div>

      {/* Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)',
        border: '1px solid rgba(168, 85, 247, 0.3)',
        borderRadius: '16px',
        padding: '2rem 2.25rem',
        marginBottom: '2rem',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)'
      }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', padding: '4px 12px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          <Sparkles size={14} /> HIGH-YIELD ASSESSMENT REVISION
        </div>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 0.5rem 0' }}>
          Accenture Technical Cheat Sheets
        </h1>
        <p style={{ color: '#94a3b8', margin: 0, fontSize: '1rem', maxWidth: '820px', lineHeight: 1.6 }}>
          Quick-revision guides for Java DSA (C++ to Java transition), Collections, Arrays, Strings, SQL execution hierarchy, decision tables, and asymptotic Big-O complexities.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {categories.map(cat => {
          const isActive = selectedCategory === cat;
          const count = cat === 'All' ? cheatSheets.length : cheatSheets.filter(s => s.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '6px 14px',
                borderRadius: '10px',
                border: isActive ? '1px solid #a855f7' : '1px solid #334155',
                background: isActive ? 'rgba(168, 85, 247, 0.2)' : '#1e293b',
                color: isActive ? '#c084fc' : '#cbd5e1',
                fontSize: '0.85rem',
                fontWeight: isActive ? 700 : 500,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.15s'
              }}
            >
              <span>{cat}</span>
              <span style={{
                fontSize: '0.75rem',
                background: isActive ? '#7e22ce' : '#0f172a',
                color: '#ffffff',
                padding: '1px 6px',
                borderRadius: '8px',
                fontWeight: 700
              }}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Two Column Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 380px) 1fr', gap: '1.5rem', alignItems: 'start' }}>
        {/* Navigation Sidebar */}
        <div>
          <div style={{ position: 'relative', marginBottom: '1rem' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
            <input
              type="text"
              placeholder="Search cheat sheets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px 10px 36px',
                background: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '10px',
                color: '#f8fafc',
                fontSize: '0.875rem',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {filteredSheets.map((sheet) => {
              const isSelected = sheet.id === activeSheet.id;
              return (
                <button
                  key={sheet.id}
                  onClick={() => setActiveSheetId(sheet.id)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    width: '100%',
                    padding: '1rem 1.15rem',
                    background: isSelected ? 'rgba(168, 85, 247, 0.15)' : '#1e293b',
                    border: isSelected ? '1px solid #a855f7' : '1px solid #334155',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '0.35rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.95rem', fontWeight: 700, color: isSelected ? '#c084fc' : '#f8fafc' }}>
                      {sheet.title}
                    </span>
                    <span style={{
                      fontSize: '0.7rem',
                      padding: '2px 8px',
                      borderRadius: '8px',
                      background: '#0f172a',
                      color: isSelected ? '#c084fc' : '#94a3b8',
                      fontWeight: 600,
                      whiteSpace: 'nowrap'
                    }}>
                      {sheet.category}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.45 }}>
                    {sheet.description}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Viewer Panel */}
        <div style={{
          background: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.25)'
        }}>
          {/* Header Info */}
          <div style={{ marginBottom: '2rem', borderBottom: '1px solid #334155', paddingBottom: '1.25rem' }}>
            <span style={{ fontSize: '0.75rem', color: '#c084fc', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {activeSheet.category} Reference
            </span>
            <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#f8fafc', margin: '0.35rem 0 0.5rem 0' }}>
              {activeSheet.title}
            </h2>
            <p style={{ color: '#cbd5e1', margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>
              {activeSheet.description}
            </p>
          </div>

          {/* Sections List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {activeSheet.sections.map((sec, idx) => (
              <div key={idx} style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.05rem', color: '#f8fafc', margin: 0, fontWeight: 700 }}>
                    {sec.heading}
                  </h3>
                  {sec.code && (
                    <button
                      onClick={() => handleCopyCode(sec.code, idx)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '5px 12px',
                        background: '#1e293b',
                        border: '1px solid #334155',
                        borderRadius: '6px',
                        color: copiedSectionIndex === idx ? '#4ade80' : '#cbd5e1',
                        cursor: 'pointer',
                        fontSize: '0.75rem',
                        fontWeight: 600
                      }}
                    >
                      {copiedSectionIndex === idx ? <Check size={14} /> : <Copy size={14} />}
                      <span>{copiedSectionIndex === idx ? 'Copied' : 'Copy Code'}</span>
                    </button>
                  )}
                </div>

                {/* Code Block */}
                {sec.code && (
                  <pre style={{
                    background: '#070a12',
                    padding: '1.25rem',
                    borderRadius: '8px',
                    border: '1px solid #1e293b',
                    overflowX: 'auto',
                    color: '#e2e8f0',
                    fontFamily: "'JetBrains Mono', Consolas, monospace",
                    fontSize: '0.85rem',
                    lineHeight: 1.55,
                    margin: 0
                  }}>
                    <code>{sec.code}</code>
                  </pre>
                )}

                {/* Table Comparison View */}
                {sec.table && (
                  <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid #1e293b', background: '#070a12' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                      <thead>
                        <tr style={{ background: '#1e293b', borderBottom: '2px solid #334155' }}>
                          {sec.table.headers.map((h, hIdx) => (
                            <th key={hIdx} style={{ padding: '10px 14px', color: '#38bdf8', fontWeight: 700, whiteSpace: 'nowrap' }}>
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {sec.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} style={{ borderBottom: '1px solid #1e293b', background: rIdx % 2 === 0 ? 'transparent' : 'rgba(15, 23, 42, 0.4)' }}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} style={{
                                padding: '10px 14px',
                                color: cIdx === 0 ? '#f8fafc' : (cIdx === 1 ? '#facc15' : '#4ade80'),
                                fontFamily: cIdx > 0 ? "'JetBrains Mono', monospace" : 'inherit',
                                fontWeight: cIdx === 0 ? 600 : 500
                              }}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Key Points Bullet List */}
                {sec.points && (
                  <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.65 }}>
                    {sec.points.map((pt, pIdx) => (
                      <li key={pIdx} style={{ marginBottom: '0.5rem' }}>{pt}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
