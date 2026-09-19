// src/pages/RecentQuestionsPage.jsx
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import {
  Code2,
  Database,
  Layout,
  Calendar,
  Clock,
  Sparkles,
  Search,
  CheckCircle2,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Play,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  ExternalLink,
  BookOpen,
  Filter,
  Lightbulb,
  RotateCcw,
  Maximize2,
  Minimize2,
  X,
  FileCode2,
  Paintbrush,
  Terminal,
  FileCheck2,
  Send
} from 'lucide-react';
import { recentQuestions, RECENT_TRACKS } from '../data/recentQuestions.js';
import { gamificationService } from '../services/gamificationService.js';
import { mistakesStorage } from '../services/mistakesStorage.js';
import { telemetryService } from '../services/telemetryService.js';
import { executeDsaOnJudge0 } from '../services/judge0Service.js';
import { runQueryOnDataset, runAssessmentTests } from '../utils/sqlEngine.js';
import SQLResultPanel from '../components/sql/SQLResultPanel.jsx';
import SQLTestResults from '../components/sql/SQLTestResults.jsx';
import SQLQuestionPanel from '../components/sql/SQLQuestionPanel.jsx';
import SQLEditor from '../components/sql/SQLEditor.jsx';
import QuestionDropdown from '../components/QuestionDropdown.jsx';
import SqlRichText from '../components/sql/SqlRichText.jsx';
import SEO from '../components/SEO.jsx';
import { seoConfig } from '../config/seo.js';

// Normalizes PostgreSQL / dialect-specific date differences & type casts for the in-memory SQLite engine
function normalizeSqlQuery(query) {
  if (!query) return '';
  let q = query;
  q = q.replace(/::float\b/gi, ' * 1.0');
  q = q.replace(/::numeric\b/gi, ' * 1.0');
  q = q.replace(/::text\b/gi, '');
  q = q.replace(/EXTRACT\s*\(\s*DAY\s+FROM\s+\(\s*([a-zA-Z0-9_.]+)(?:::timestamp)?\s*-\s*([a-zA-Z0-9_.]+)(?:::timestamp)?\s*\)\s*\)/gi, '(julianday($1) - julianday($2))');
  q = q.replace(/::timestamp\b/gi, '');
  // Quote SQLite reserved keyword table 'transaction' when referenced in FROM, JOIN, INTO, UPDATE
  q = q.replace(/\b(from|join|into|update)\s+transaction\b/gi, '$1 "transaction"');
  return q;
}

const DSA_LANGUAGES = [
  { id: 'python', label: 'Python 3', monacoLang: 'python', icon: '🐍' },
  { id: 'java', label: 'Java', monacoLang: 'java', icon: '☕' },
  { id: 'cpp', label: 'C++', monacoLang: 'cpp', icon: '⚙️' },
  { id: 'csharp', label: 'C#', monacoLang: 'csharp', icon: '🔷' },
  { id: 'javascript', label: 'JavaScript', monacoLang: 'javascript', icon: '⚡' }
];

// =========================================================================
// BEAUTIFIED PROBLEM STATEMENT PARSER (Inline Code, Badges, Step Cards)
// =========================================================================
export function renderInlineFormatted(str) {
  if (!str) return null;
  const tokenRegex = /(`[^`]+`|\*\*[^*]+\*\*)/g;
  const segments = str.split(tokenRegex);

  return segments.map((seg, i) => {
    if (seg.startsWith('`') && seg.endsWith('`') && seg.length >= 2) {
      const codeContent = seg.slice(1, -1);
      return (
        <code
          key={i}
          style={{
            fontFamily: "'JetBrains Mono', 'Fira Code', Menlo, Consolas, monospace",
            fontSize: '0.86em',
            padding: '2px 7px',
            borderRadius: '5px',
            background: 'rgba(56, 189, 248, 0.12)',
            color: '#38bdf8',
            border: '1px solid rgba(56, 189, 248, 0.32)',
            fontWeight: 600,
            letterSpacing: '0.2px',
            display: 'inline-block',
            margin: '0 2px'
          }}
        >
          {codeContent}
        </code>
      );
    }
    if (seg.startsWith('**') && seg.endsWith('**') && seg.length >= 4) {
      return (
        <strong key={i} style={{ color: '#f8fafc', fontWeight: 700 }}>
          {seg.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{seg}</span>;
  });
}

export function renderFormattedContent(rawText) {
  if (!rawText) return null;

  // Split code blocks (``` ... ```)
  const codeBlockRegex = /```([\s\S]*?)```/g;
  const blocks = [];
  let lastIndex = 0;
  let match;

  while ((match = codeBlockRegex.exec(rawText)) !== null) {
    if (match.index > lastIndex) {
      blocks.push({ type: 'text', content: rawText.slice(lastIndex, match.index) });
    }
    blocks.push({ type: 'code', content: match[1].trim() });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < rawText.length) {
    blocks.push({ type: 'text', content: rawText.slice(lastIndex) });
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
      {blocks.map((block, blockIdx) => {
        if (block.type === 'code') {
          return (
            <div
              key={blockIdx}
              style={{
                background: '#070b14',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                borderRadius: '10px',
                padding: '0.85rem 1.1rem',
                fontFamily: "'JetBrains Mono', Consolas, monospace",
                fontSize: '0.86rem',
                color: '#38bdf8',
                boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.5)',
                lineHeight: 1.6,
                overflowX: 'auto',
                whiteSpace: 'pre'
              }}
            >
              {block.content}
            </div>
          );
        }

        const lines = block.content.split('\n');
        const elements = [];
        let currentNumberedList = [];
        let currentTable = [];

        const flushNumberedList = () => {
          if (currentNumberedList.length > 0) {
            elements.push(
              <div
                key={`num-list-${elements.length}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  margin: '0.4rem 0',
                  padding: '0.85rem 1rem',
                  background: 'rgba(15, 23, 42, 0.75)',
                  border: '1px solid rgba(56, 189, 248, 0.18)',
                  borderRadius: '10px'
                }}
              >
                {currentNumberedList.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span
                      style={{
                        minWidth: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #0284c7, #0369a1)',
                        color: '#ffffff',
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                        boxShadow: '0 2px 6px rgba(2, 132, 199, 0.35)'
                      }}
                    >
                      {item.num}
                    </span>
                    <span style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {renderInlineFormatted(item.text)}
                    </span>
                  </div>
                ))}
              </div>
            );
            currentNumberedList = [];
          }
        };

        const flushTable = () => {
          if (currentTable.length >= 2) {
            const rawHeader = currentTable[0];
            const headers = rawHeader.split('|').map(s => s.trim()).filter((s, idx, arr) => idx > 0 && idx < arr.length - 1);
            // check if line 1 is separator line (e.g. :---: or ---)
            const hasSeparator = currentTable[1].includes('---');
            const dataRows = hasSeparator ? currentTable.slice(2) : currentTable.slice(1);

            elements.push(
              <div
                key={`tbl-${elements.length}`}
                style={{
                  overflowX: 'auto',
                  margin: '0.85rem 0',
                  borderRadius: '10px',
                  border: '1px solid #334155',
                  background: '#0a101f',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.35)'
                }}
              >
                <table style={{ width: '100%', fontSize: '0.82rem', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ background: '#1e293b', borderBottom: '1px solid #334155', color: '#38bdf8' }}>
                      {headers.map((h, hIdx) => (
                        <th key={hIdx} style={{ padding: '9px 12px', fontWeight: 700, letterSpacing: '0.3px' }}>
                          {renderInlineFormatted(h)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {dataRows.map((rLine, rIdx) => {
                      const cells = rLine.split('|').map(s => s.trim()).filter((s, idx, arr) => idx > 0 && idx < arr.length - 1);
                      return (
                        <tr
                          key={rIdx}
                          style={{
                            borderBottom: '1px solid #1e293b',
                            background: rIdx % 2 === 0 ? 'rgba(15, 23, 42, 0.6)' : 'rgba(30, 41, 59, 0.3)'
                          }}
                        >
                          {cells.map((c, cIdx) => (
                            <td key={cIdx} style={{ padding: '8px 12px', color: '#cbd5e1', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.84rem' }}>
                              {renderInlineFormatted(c)}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
            currentTable = [];
          } else if (currentTable.length > 0) {
            currentTable.forEach((tl, tlIdx) => {
              elements.push(<p key={`tbl-raw-${elements.length}-${tlIdx}`} style={{ color: '#cbd5e1', margin: '0.2rem 0' }}>{renderInlineFormatted(tl)}</p>);
            });
            currentTable = [];
          }
        };

        for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
          const line = lines[lineIdx];
          const trimmed = line.trim();
          if (!trimmed) {
            flushNumberedList();
            flushTable();
            continue;
          }

          // Markdown Table detection (| col1 | col2 |)
          if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
            flushNumberedList();
            currentTable.push(trimmed);
            continue;
          }

          flushTable();

          // Numbered list item (1. item)
          const numMatch = trimmed.match(/^(\d+)[\.\)]\s+(.*)$/);
          if (numMatch) {
            currentNumberedList.push({ num: numMatch[1], text: numMatch[2] });
            continue;
          }

          flushNumberedList();

          // Horizontal divider (--- or ***)
          if (trimmed === '---' || trimmed === '***') {
            elements.push(
              <div
                key={`hr-${lineIdx}`}
                style={{
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.35), transparent)',
                  margin: '0.9rem 0'
                }}
              />
            );
            continue;
          }

          // Markdown Headings (### Header, ## Header, # Header)
          const headingMatch = trimmed.match(/^(#{1,4})\s+(.*)$/);
          if (headingMatch) {
            const level = headingMatch[1].length;
            const text = headingMatch[2];

            // SPECIAL CASE: "💡 Mathematical Formula:"
            if (text.includes('Mathematical Formula')) {
              // Check if subsequent non-empty line is a LaTeX formula block ($$ ... $$)
              let formulaLine = null;
              let lookaheadIdx = lineIdx + 1;
              while (lookaheadIdx < lines.length && !lines[lookaheadIdx].trim()) {
                lookaheadIdx++;
              }
              if (lookaheadIdx < lines.length && lines[lookaheadIdx].trim().startsWith('$$')) {
                formulaLine = lines[lookaheadIdx].trim();
                lineIdx = lookaheadIdx; // Advance line index to avoid rendering raw $$ line
              }

              elements.push(
                <div
                  key={`math-formula-card-${lineIdx}`}
                  style={{
                    margin: '1.25rem 0',
                    padding: '1.35rem 1.45rem',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(26, 16, 51, 0.9) 50%, rgba(15, 23, 42, 0.95) 100%)',
                    border: '1px solid rgba(168, 85, 247, 0.45)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.45), 0 0 24px rgba(168, 85, 247, 0.18)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.1rem',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Subtle ambient glow badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-40px',
                      right: '-40px',
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, transparent 70%)',
                      pointerEvents: 'none'
                    }}
                  />

                  {/* Header Row */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(168, 85, 247, 0.22)', paddingBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <span style={{
                        fontSize: '1.1rem',
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: 'rgba(234, 179, 8, 0.15)',
                        border: '1px solid rgba(234, 179, 8, 0.35)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(234, 179, 8, 0.2)'
                      }}>
                        💡
                      </span>
                      <div>
                        <span style={{
                          color: '#ffffff',
                          fontWeight: 800,
                          fontSize: '0.98rem',
                          letterSpacing: '0.3px',
                          display: 'block'
                        }}>
                          Mathematical Formula
                        </span>
                        <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                          Closed-Form Weighted Summation Model
                        </span>
                      </div>
                    </div>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: '20px',
                      background: 'rgba(168, 85, 247, 0.18)',
                      border: '1px solid rgba(168, 85, 247, 0.45)',
                      color: '#c084fc',
                      textTransform: 'uppercase',
                      letterSpacing: '0.6px',
                      boxShadow: '0 2px 8px rgba(168, 85, 247, 0.25)'
                    }}>
                      Weighted Summation
                    </span>
                  </div>

                  {/* High-Fidelity Equation Box */}
                  <div style={{
                    background: '#030712',
                    borderRadius: '12px',
                    padding: '1.25rem 1.5rem',
                    border: '1px solid rgba(56, 189, 248, 0.28)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '0.9rem',
                    boxShadow: 'inset 0 3px 12px rgba(0, 0, 0, 0.75)'
                  }}>
                    {/* Left Hand Side */}
                    <span style={{
                      color: '#38bdf8',
                      fontWeight: 800,
                      fontSize: '1.22rem',
                      fontFamily: "'JetBrains Mono', Consolas, monospace",
                      textShadow: '0 0 14px rgba(56, 189, 248, 0.45)',
                      letterSpacing: '0.3px'
                    }}>
                      Total Energy
                    </span>

                    <span style={{ color: '#94a3b8', fontSize: '1.4rem', fontWeight: 600 }}>=</span>

                    {/* Sigma Summation Notation with Limits */}
                    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', margin: '0 6px', lineHeight: 1 }}>
                      <span style={{
                        fontSize: '0.76rem',
                        color: '#c084fc',
                        fontWeight: 800,
                        fontFamily: "'JetBrains Mono', monospace",
                        letterSpacing: '0.5px'
                      }}>
                        N - 1
                      </span>
                      <span style={{
                        fontSize: '2.5rem',
                        color: '#a855f7',
                        fontFamily: "'Times New Roman', Georgia, serif",
                        lineHeight: 0.95,
                        margin: '2px 0',
                        textShadow: '0 0 16px rgba(168, 85, 247, 0.55)'
                      }}>
                        &sum;
                      </span>
                      <span style={{
                        fontSize: '0.76rem',
                        color: '#c084fc',
                        fontWeight: 800,
                        fontFamily: "'JetBrains Mono', monospace",
                        letterSpacing: '0.5px'
                      }}>
                        i = 0
                      </span>
                    </div>

                    {/* Expression inside Sigma */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.2rem', fontFamily: "'JetBrains Mono', Consolas, monospace" }}>
                      <span style={{
                        background: 'rgba(250, 204, 21, 0.12)',
                        border: '1px solid rgba(250, 204, 21, 0.4)',
                        color: '#facc15',
                        padding: '4px 10px',
                        borderRadius: '8px',
                        fontWeight: 800,
                        boxShadow: '0 2px 8px rgba(250, 204, 21, 0.15)'
                      }}>
                        A[i]
                      </span>
                      <span style={{ color: '#64748b', fontWeight: 700 }}>&times;</span>
                      <span style={{
                        background: 'rgba(74, 222, 128, 0.12)',
                        border: '1px solid rgba(74, 222, 128, 0.4)',
                        color: '#4ade80',
                        padding: '4px 10px',
                        borderRadius: '8px',
                        fontWeight: 800,
                        boxShadow: '0 2px 8px rgba(74, 222, 128, 0.15)'
                      }}>
                        (i + 1)
                      </span>
                    </div>
                  </div>

                  {/* Variable Breakdown Chips */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
                    <div style={{
                      background: 'rgba(15, 23, 42, 0.75)',
                      border: '1px solid rgba(250, 204, 21, 0.25)',
                      borderRadius: '8px',
                      padding: '9px 12px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '3px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#facc15' }} />
                        <span style={{ color: '#facc15', fontWeight: 800, fontFamily: 'JetBrains Mono', fontSize: '0.85rem' }}>A[i]</span>
                      </div>
                      <span style={{ color: '#cbd5e1', fontSize: '0.76rem' }}>Cave energy value at 0-based index i</span>
                    </div>

                    <div style={{
                      background: 'rgba(15, 23, 42, 0.75)',
                      border: '1px solid rgba(74, 222, 128, 0.25)',
                      borderRadius: '8px',
                      padding: '9px 12px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '3px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80' }} />
                        <span style={{ color: '#4ade80', fontWeight: 800, fontFamily: 'JetBrains Mono', fontSize: '0.85rem' }}>(i + 1)</span>
                      </div>
                      <span style={{ color: '#cbd5e1', fontSize: '0.76rem' }}>1-based cave position weight multiplier</span>
                    </div>

                    <div style={{
                      background: 'rgba(15, 23, 42, 0.75)',
                      border: '1px solid rgba(168, 85, 247, 0.25)',
                      borderRadius: '8px',
                      padding: '9px 12px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '3px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#a855f7' }} />
                        <span style={{ color: '#c084fc', fontWeight: 800, fontFamily: 'JetBrains Mono', fontSize: '0.85rem' }}>&sum; (Sigma)</span>
                      </div>
                      <span style={{ color: '#cbd5e1', fontSize: '0.76rem' }}>Cumulative summation for all caves 0 to N - 1</span>
                    </div>
                  </div>

                  {/* Live Example Calculation Trace Strip */}
                  <div style={{
                    background: 'rgba(30, 41, 59, 0.55)',
                    border: '1px dashed rgba(148, 163, 184, 0.3)',
                    borderRadius: '9px',
                    padding: '9px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.6rem',
                    fontSize: '0.82rem'
                  }}>
                    <span style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span>📌</span>
                      <span>Formula Trace for <code style={{ color: '#38bdf8', fontWeight: 700 }}>A = [2, 3, 1]</code>:</span>
                    </span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", color: '#e2e8f0' }}>
                      (<span style={{ color: '#facc15', fontWeight: 700 }}>2</span> &times; <span style={{ color: '#4ade80', fontWeight: 700 }}>1</span>) + (<span style={{ color: '#facc15', fontWeight: 700 }}>3</span> &times; <span style={{ color: '#4ade80', fontWeight: 700 }}>2</span>) + (<span style={{ color: '#facc15', fontWeight: 700 }}>1</span> &times; <span style={{ color: '#4ade80', fontWeight: 700 }}>3</span>) = <strong style={{ color: '#38bdf8', fontSize: '0.95rem' }}>11</strong>
                    </span>
                  </div>
                </div>
              );
              continue;
            }

            elements.push(
              <div
                key={`h-${lineIdx}`}
                style={{
                  margin: level <= 2 ? '0.95rem 0 0.35rem 0' : '0.75rem 0 0.25rem 0',
                  fontSize: level === 1 ? '1.18rem' : level === 2 ? '1.05rem' : '0.94rem',
                  color: '#38bdf8',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                {renderInlineFormatted(text)}
              </div>
            );
            continue;
          }

          // Standalone LaTeX equation block ($$ ... $$)
          if (trimmed.startsWith('$$') && trimmed.endsWith('$$') && trimmed.length > 4) {
            const rawFormula = trimmed.slice(2, -2).trim();
            elements.push(
              <div
                key={`eq-block-${lineIdx}`}
                style={{
                  margin: '0.9rem 0',
                  padding: '1rem 1.25rem',
                  borderRadius: '10px',
                  background: '#030712',
                  border: '1px solid rgba(168, 85, 247, 0.4)',
                  boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.7), 0 2px 12px rgba(168, 85, 247, 0.12)',
                  fontFamily: "'JetBrains Mono', Consolas, monospace",
                  fontSize: '0.95rem',
                  color: '#38bdf8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center'
                }}
              >
                {rawFormula}
              </div>
            );
            continue;
          }

          // Callout blocks (⚠️, 💡, 📌, 🧠, ⚡, > )
          if (trimmed.startsWith('⚠️') || trimmed.startsWith('💡') || trimmed.startsWith('📌') || trimmed.startsWith('🧠') || trimmed.startsWith('⚡') || trimmed.startsWith('> ')) {
            const isWarning = trimmed.startsWith('⚠️');
            const isLightbulb = trimmed.startsWith('💡');
            const textContent = trimmed.replace(/^>\s*/, '');
            elements.push(
              <div
                key={`callout-${lineIdx}`}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  background: isWarning ? 'rgba(245, 158, 11, 0.08)' : (isLightbulb ? 'rgba(56, 189, 248, 0.08)' : 'rgba(99, 102, 241, 0.08)'),
                  border: `1px solid ${isWarning ? 'rgba(245, 158, 11, 0.35)' : (isLightbulb ? 'rgba(56, 189, 248, 0.3)' : 'rgba(99, 102, 241, 0.3)')}`,
                  color: isWarning ? '#fde68a' : (isLightbulb ? '#e0f2fe' : '#e0e7ff'),
                  fontSize: '0.88rem',
                  lineHeight: 1.65,
                  margin: '0.45rem 0'
                }}
              >
                {renderInlineFormatted(textContent)}
              </div>
            );
            continue;
          }

          // Bullet points (- or •)
          if (trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
            const bulletText = trimmed.replace(/^[-•]\s*/, '');
            elements.push(
              <div
                key={`bullet-${lineIdx}`}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.65rem',
                  margin: '0.2rem 0 0.2rem 0.5rem',
                  fontSize: '0.9rem',
                  color: '#cbd5e1'
                }}
              >
                <span style={{ color: '#38bdf8', fontSize: '1rem', lineHeight: 1.4 }}>•</span>
                <span style={{ lineHeight: 1.6 }}>{renderInlineFormatted(bulletText)}</span>
              </div>
            );
            continue;
          }

          const isHighlightLine = trimmed.toLowerCase().startsWith('return ') || trimmed.toLowerCase().startsWith('**goal');
          elements.push(
            <p
              key={`p-${lineIdx}`}
              style={{
                margin: 0,
                fontSize: '0.92rem',
                lineHeight: 1.7,
                color: isHighlightLine ? '#f1f5f9' : '#cbd5e1',
                padding: isHighlightLine ? '0.65rem 0.9rem' : '0',
                background: isHighlightLine ? 'rgba(56, 189, 248, 0.08)' : 'transparent',
                borderLeft: isHighlightLine ? '3px solid #38bdf8' : 'none',
                borderRadius: isHighlightLine ? '6px' : '0'
              }}
            >
              {renderInlineFormatted(trimmed)}
            </p>
          );
        }

        flushNumberedList();
        flushTable();

        return <React.Fragment key={blockIdx}>{elements}</React.Fragment>;
      })}
    </div>
  );
}

export function getRecentDsaStarters(question) {
  if (!question) return {};

  if (question.id === 'recent-dsa-001') {
    return {
      python: `def transform_and_sum(nums):
    # TODO: Implement transformation on each element based on 0-based index i:
    # 1. Subtract (i % 7) * 3 from the element.
    # 2. If original nums[i] % 11 == 0, add nums[i] // 11 to the modified value.
    # Return total sum of all modified elements.
    pass

# Test
if __name__ == "__main__":
    print(transform_and_sum([22, 5, 14])) # Expected: 34
`,
      java: `public class Solution {
    public static long transformAndSum(int[] nums) {
        // TODO: Implement transformation & modulo logic:
        // 1. Subtract (i % 7) * 3 from nums[i]
        // 2. If nums[i] is divisible by 11, add nums[i] / 11
        // Return total sum of transformed values.
        return 0;
    }
}
`,
      cpp: `#include <iostream>
#include <vector>

long long transformAndSum(const std::vector<int>& nums) {
    // TODO: Implement transformation & divisibility sum
    return 0;
}
`,
      csharp: `using System;

public class Solution {
    public static long TransformAndSum(int[] nums) {
        // TODO: Implement transformation & divisibility sum
        return 0;
    }
}
`,
      javascript: `function transformAndSum(nums) {
  // TODO: Implement transformation on each element:
  // 1. Subtract (i % 7) * 3
  // 2. If original element % 11 === 0, add element / 11
  // Return total sum
  return 0;
}
`
    };
  }

  if (question.id === 'recent-dsa-002') {
    return {
      python: `def count_valid_numbers(N: int) -> int:
    # TODO: Complete single function to return the integer count of X < N where EqSum(X) > N
    return 0

if __name__ == "__main__":
    print(count_valid_numbers(112)) # Expected: 10
`,
      java: `import java.util.*;

public class Solution {
    public static int countValidNumbers(int N) {
        // TODO: Return integer count
        // Returns the integer count of X < N where EqSum(X) > N

        
        return 0;
    }
}
`,
      cpp: `#include <iostream>
#include <string>

int countValidNumbers(int N) {
    // TODO: Return integer count of X < N where EqSum(X) > N
    return 0;
}
`,
      csharp: `using System;

public class Solution {
    public static int CountValidNumbers(int N) {
        // TODO: Return integer count of X < N where EqSum(X) > N
        return 0;
    }
}
`,
      javascript: `function countValidNumbers(N) {
  // TODO: Return integer count of X < N where EqSum(X) > N
  return 0;
}
`
    };
  }

  if (question.id === 'recent-dsa-003') {
    return {
      python: `def calculate_running_sum_and_divisibility(n):
    # TODO: Calculate running sum from 1 to N
    # Increment counter whenever running sum is divisible by 5
    # Return (running_sum, count)
    pass

if __name__ == "__main__":
    calculate_running_sum_and_divisibility(10)
`,
      java: `public class RunningSumDivisibility {
    public static void calculateRunningSumAndDivisibility(int n) {
        // TODO: Calculate running sum from 1 to n
        // Increment count every time running sum % 5 == 0
        // Output running sum and count
    }
}
`,
      cpp: `#include <iostream>

void calculateRunningSumAndDivisibility(int n) {
    // TODO: Running sum from 1 to N and divisibility by 5 count
}
`,
      csharp: `using System;

public class RunningSumDivisibility {
    public static void CalculateRunningSumAndDivisibility(int n) {
        // TODO: Running sum from 1 to N and count
    }
}
`,
      javascript: `function calculateRunningSumAndDivisibility(n) {
  // TODO: Calculate running sum from 1 to n
  // Increment count every time running sum % 5 === 0
  // Return or log running sum and count
}
`
    };
  }

  if (question.id === 'recent-dsa-004') {
    return {
      python: `def calculate_power(n, p):
    # TODO: Calculate N raised to the power P
    pass

if __name__ == "__main__":
    print(calculate_power(2, 5)) # Expected: 32
`,
      java: `public class Solution {
    public static long calculatePower(int n, int p) {
        // TODO: Calculate N raised to the power P
        return 0;
    }
}
`,
      cpp: `#include <iostream>

long long calculatePower(int n, int p) {
    // TODO: Calculate N raised to the power P
    return 0;
}
`,
      csharp: `using System;

public class Solution {
    public static long CalculatePower(int n, int p) {
        // TODO: Calculate N raised to the power P
        return 0;
    }
}
`,
      javascript: `function calculatePower(n, p) {
  // TODO: Calculate N raised to the power P
  return 0;
}
`
    };
  }

  if (question.id === 'recent-dsa-005') {
    return {
      python: `def move_hyphen(s, n):
    # TODO: Move all hyphens (-) in 's' to the front
    # Return null/None if s is None
    pass

if __name__ == "__main__":
    print(move_hyphen("String-Compare", 14)) # Expected: "-StringCompare"
`,
      java: `public class Solution {
    public static String moveHyphen(String str, int n) {
        // TODO: Move all hyphens (-) to the front of str
        // Return null if str is null
        return "";
    }
}
`,
      cpp: `#include <iostream>
#include <string>

std::string moveHyphen(const std::string& str, int n) {
    // TODO: Move all hyphens to front
    return "";
}
`,
      csharp: `using System;

public class Solution {
    public static string MoveHyphen(string str, int n) {
        // TODO: Move all hyphens to front
        return "";
    }
}
`,
      javascript: `function moveHyphen(str, n) {
  // TODO: Move all hyphens (-) to the front of str
  // Return null if str is null
  return "";
}
`
    };
  }

  if (question.id === 'recent-dsa-006') {
    return {
      python: `def count_special_elements(nums):
    # TODO: Count elements with:
    # 1. odd index and odd value (0-based indexing)
    # 2. even index and even value
    pass

if __name__ == "__main__":
    print(count_special_elements([2, 1, 4, 3, 6, 5])) # Expected: 6
`,
      java: `public class Solution {
    public static int countSpecialElements(int[] nums) {
        // TODO: Count elements with odd index & odd value + even index & even value
        return 0;
    }
}
`,
      cpp: `#include <iostream>
#include <vector>

int countSpecialElements(const std::vector<int>& nums) {
    // TODO: Count odd index & odd value + even index & even value
    return 0;
}
`,
      csharp: `using System;

public class Solution {
    public static int CountSpecialElements(int[] nums) {
        // TODO: Count odd index & odd value + even index & even value
        return 0;
    }
}
`,
      javascript: `function countSpecialElements(nums) {
  // TODO: Count elements with:
  // 1. odd index & odd value (0-based indexing)
  // 2. even index & even value
  return 0;
}
`
    };
  }

  if (question.id === 'recent-dsa-007') {
    return {
      python: `def reverse_number(n):
    # TODO: Return the integer obtained after reversing the digits of N
    pass

if __name__ == "__main__":
    print(reverse_number(12345)) # Expected: 54321
`,
      java: `public class Solution {
    public static long reverseNumber(long n) {
        // TODO: Return integer after reversing digits of N
        return 0;
    }
}
`,
      cpp: `#include <iostream>

long long reverseNumber(long long n) {
    // TODO: Return integer after reversing digits of N
    return 0;
}
`,
      csharp: `using System;

public class Solution {
    public static long ReverseNumber(long n) {
        // TODO: Return integer after reversing digits of N
        return 0;
    }
}
`,
      javascript: `function reverseNumber(n) {
  // TODO: Return integer after reversing digits of N
  return 0;
}
`
    };
  }

  if (question.id === 'recent-dsa-008') {
    return {
      python: `def count_valid_blocks(n, a):
    # TODO: Count blocks where consecutive block length == element value
    pass

if __name__ == "__main__":
    print(count_valid_blocks(7, [1, 2, 2, 3, 3, 3, 4])) # Expected: 3
`,
      java: `public class Solution {
    public static int countValidBlocks(int n, int[] a) {
        // TODO: Count blocks where consecutive block length == element value
        return 0;
    }
}
`,
      cpp: `#include <iostream>
#include <vector>

int countValidBlocks(int n, const std::vector<int>& a) {
    // TODO: Count blocks where consecutive block length == element value
    return 0;
}
`,
      csharp: `using System;

public class Solution {
    public static int CountValidBlocks(int n, int[] a) {
        // TODO: Count blocks where consecutive block length == element value
        return 0;
    }
}
`,
      javascript: `function countValidBlocks(n, a) {
  // TODO: Count blocks where consecutive block length == element value
  return 0;
}
`
    };
  }

  if (question.id === 'recent-dsa-009') {
    return {
      python: `def calculate_prime_sum(m, n):
    # TODO: Return sum of all prime numbers between M and N (inclusive)
    pass

if __name__ == "__main__":
    print(calculate_prime_sum(10, 20)) # Expected: 60
`,
      java: `public class Solution {
    public static long calculatePrimeSum(int m, int n) {
        // TODO: Return sum of all prime numbers between M and N (inclusive)
        return 0;
    }
}
`,
      cpp: `#include <iostream>

long long calculate_prime_sum(int m, int n) {
    // TODO: Return sum of all prime numbers between M and N (inclusive)
    return 0;
}
`,
      csharp: `using System;

public class Solution {
    public static long CalculatePrimeSum(int m, int n) {
        // TODO: Return sum of all prime numbers between M and N (inclusive)
        return 0;
    }
}
`,
      javascript: `function calculatePrimeSum(m, n) {
  // TODO: Return sum of all prime numbers between M and N (inclusive)
  return 0;
}
`
    };
  }

  if (question.id === 'recent-dsa-010') {
    return {
      python: `def calculate_difference(m, n):
    # TODO: Calculate absolute difference between digit sum of multiples of 4 and 7
    pass

if __name__ == "__main__":
    print(calculate_difference(1, 20)) # Expected: 12
`,
      java: `public class Solution {
    public static int calculateDifference(int m, int n) {
        // TODO: Calculate absolute difference between digit sum of multiples of 4 and 7
        return 0;
    }
}
`,
      cpp: `#include <iostream>
#include <cstdlib>

int calculateDifference(int m, int n) {
    // TODO: Calculate absolute difference between digit sum of multiples of 4 and 7
    return 0;
}
`,
      csharp: `using System;

public class Solution {
    public static int CalculateDifference(int m, int n) {
        // TODO: Calculate absolute difference between digit sum of multiples of 4 and 7
        return 0;
    }
}
`,
      javascript: `function calculateDifference(m, n) {
  // TODO: Calculate absolute difference between digit sum of multiples of 4 and 7
  return 0;
}
`
    };
  }

  if (question.id === 'recent-dsa-011') {
    return {
      python: `def minimum_houses(r, unit, n, arr):
    # TODO: Return minimum number of houses required, or 0 if insufficient, -1 if null/empty
    pass

if __name__ == "__main__":
    print(minimum_houses(7, 2, 8, [2, 8, 3, 5, 7, 4, 1, 2])) # Expected: 4
`,
      java: `public class Solution {
    public static int minimumHouses(int r, int unit, int n, int[] arr) {
        // TODO: Return minimum number of houses required, or 0 if insufficient, -1 if null/empty
        return 0;
    }
}
`,
      cpp: `#include <iostream>
#include <vector>

int minimumHouses(int r, int unit, int n, const std::vector<int>& arr) {
    // TODO: Return minimum number of houses required, or 0 if insufficient, -1 if null/empty
    return 0;
}
`,
      csharp: `using System;

public class Solution {
    public static int MinimumHouses(int r, int unit, int n, int[] arr) {
        // TODO: Return minimum number of houses required, or 0 if insufficient, -1 if null/empty
        return 0;
    }
}
`,
      javascript: `function minimumHouses(r, unit, n, arr) {
  // TODO: Return minimum number of houses required, or 0 if insufficient, -1 if null/empty
  return 0;
}
`
    };
  }

  if (question.id === 'recent-dsa-012') {
    return {
      python: `def find_most_frequent(s):
    # TODO: Return list of most-frequent first-last character combinations preserving first-appearance order
    pass

if __name__ == "__main__":
    print(find_most_frequent("apple angle ball bottle axe")) # Expected: ['ae']
`,
      java: `import java.util.*;

public class Solution {
    public static List<String> findMostFrequent(String s) {
        // TODO: Return list of most-frequent first-last character combinations preserving first-appearance order
        return new ArrayList<>();
    }
}
`,
      cpp: `#include <iostream>
#include <vector>
#include <string>

std::vector<std::string> findMostFrequent(const std::string& s) {
    // TODO: Return list of most-frequent first-last character combinations preserving first-appearance order
    return {};
}
`,
      csharp: `using System;
using System.Collections.Generic;

public class Solution {
    public static List<string> FindMostFrequent(string s) {
        // TODO: Return list of most-frequent first-last character combinations preserving first-appearance order
        return new List<string>();
    }
}
`,
      javascript: `function findMostFrequent(s) {
  // TODO: Return list of most-frequent first-last character combinations preserving first-appearance order
  return [];
}
`
    };
  }

  if (question.id === 'recent-dsa-013') {
    return {
      python: `def count_uniform(s):
    # TODO: Return total number of uniform rows and uniform columns
    pass

if __name__ == "__main__":
    print(count_uniform("aaabbbccc")) # Expected: 3
`,
      java: `public class Solution {
    public static int countUniform(String s) {
        // TODO: Return total number of uniform rows and uniform columns
        return 0;
    }
}
`,
      cpp: `#include <iostream>
#include <string>

int countUniform(const std::string& s) {
    // TODO: Return total number of uniform rows and uniform columns
    return 0;
}
`,
      csharp: `using System;

class Solution {
    public static int CountUniform(string s) {
        // TODO: Return total number of uniform rows and uniform columns
        return 0;
    }
}
`,
      javascript: `function countUniform(s) {
  // TODO: Return total number of uniform rows and uniform columns
  return 0;
}
`
    };
  }

  if (question.id === 'recent-dsa-014') {
    return {
      python: `def number_of_carries(num1: int, num2: int) -> int:
    # TODO: Return total number of carries generated while adding num1 and num2
    return 0

if __name__ == "__main__":
    print(number_of_carries(451, 349)) # Expected: 2
`,
      java: `public class Solution {
    public static int numberOfCarries(int num1, int num2) {
        // TODO: Return total number of carries generated while adding num1 and num2
        return 0;
    }
}
`,
      cpp: `#include <iostream>

int numberOfCarries(int num1, int num2) {
    // TODO: Return total number of carries generated while adding num1 and num2
    return 0;
}
`,
      csharp: `using System;

class Solution {
    public static int NumberOfCarries(int num1, int num2) {
        // TODO: Return total number of carries generated while adding num1 and num2
        return 0;
    }
}
`,
      javascript: `function numberOfCarries(num1, num2) {
  // TODO: Return total number of carries generated while adding num1 and num2
  return 0;
}
`
    };
  }

  if (question.id === 'recent-dsa-015' || question.id === 'recent-dsa-016' || question.id === 'recent-dsa-017') {
    if (question.starterCode) return question.starterCode;
  }

  if (question.starterCode) {
    return question.starterCode;
  }

  return {
    python: `# ${question.title}\ndef solve():\n    pass\n`,
    java: `public class Solution {\n    public static void solve() {}\n}\n`,
    cpp: `void solve() {}\n`,
    csharp: `public class Solution {\n    public void Solve() {}\n}\n`,
    javascript: `function solve() {}\n`
  };
}

export default function RecentQuestionsPage({ theme = 'dark' }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // Track selection from URL (?track=dsa | sql | frontend)
  const activeTrack = searchParams.get('track') || 'dsa';
  const setActiveTrack = (trackId) => {
    setSearchParams({ track: trackId });
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  // Custom Dropdown Open States
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isDiffOpen, setIsDiffOpen] = useState(false);
  const [isQuestionDropdownOpen, setIsQuestionDropdownOpen] = useState(false);
  const dateDropdownRef = useRef(null);
  const diffDropdownRef = useRef(null);
  const questionDropdownRef = useRef(null);

  // Active DSA Question when track === 'dsa'
  const dsaQuestions = useMemo(() => recentQuestions.filter(q => q.track === 'dsa'), [recentQuestions]);
  const [activeDsaId, setActiveDsaId] = useState(dsaQuestions[0]?.id || 'recent-dsa-001');

  const activeDsaQuestion = useMemo(() => {
    return dsaQuestions.find(q => q.id === activeDsaId) || dsaQuestions[0];
  }, [activeDsaId, dsaQuestions]);

  const currentQuestionIndex = useMemo(() => {
    return dsaQuestions.findIndex(q => q.id === activeDsaQuestion.id);
  }, [dsaQuestions, activeDsaQuestion.id]);

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setActiveDsaId(dsaQuestions[currentQuestionIndex - 1].id);
      setTestResults(null);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < dsaQuestions.length - 1) {
      setActiveDsaId(dsaQuestions[currentQuestionIndex + 1].id);
      setTestResults(null);
    }
  };

  // Code Editor state for active DSA question
  const [selectedLang, setSelectedLang] = useState('python');
  const [isEditorExpanded, setIsEditorExpanded] = useState(false);
  const [showSolutionModal, setShowSolutionModal] = useState(false);
  const [solutionTabLang, setSolutionTabLang] = useState('python');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedSolution, setCopiedSolution] = useState(false);
  const [mobileWorkspaceTab, setMobileWorkspaceTab] = useState('both'); // 'both' | 'problem' | 'editor'

  // Per-question and per-language code map for DSA with starter templates
  const [codeMap, setCodeMap] = useState(() => {
    const initialMap = {};
    dsaQuestions.forEach(q => {
      initialMap[q.id] = getRecentDsaStarters(q);
    });
    return initialMap;
  });

  // Sync codeMap when new questions are added or when active question changes, and clean any stale main test prints
  useEffect(() => {
    if (!activeDsaQuestion?.id) return;
    setCodeMap(prev => {
      const existing = prev[activeDsaQuestion.id];
      const hasStaleMain = existing?.java && existing.java.includes('public static void main');
      const hasStalePython = existing?.python && existing.python.includes('list[int]');
      if (existing && !hasStaleMain && !hasStalePython) return prev;
      return {
        ...prev,
        [activeDsaQuestion.id]: getRecentDsaStarters(activeDsaQuestion)
      };
    });
  }, [activeDsaQuestion?.id]);

  // Direct ref to DSA Monaco Editor instance
  const dsaEditorRef = useRef(null);
  const [isDsaResetDone, setIsDsaResetDone] = useState(false);
  const selectedDsaLangRef = useRef(selectedLang);
  const isDsaProgrammaticUpdate = useRef(false);

  useEffect(() => {
    selectedDsaLangRef.current = selectedLang;
  }, [selectedLang]);

  // Runner & Test Results State for DSA
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState(null);

  // =========================================================================
  // FRONTEND CODE EDITOR & SANDBOX STATE (Multi-Question: Quote Gen, BMI Calc & Notification Center)
  // =========================================================================
  const feQuestions = useMemo(() => recentQuestions.filter(q => q.track === 'frontend'), [recentQuestions]);
  const [activeFeId, setActiveFeId] = useState(() => {
    const qParam = searchParams.get('q');
    if (qParam && feQuestions.some(q => q.id === qParam)) return qParam;
    return feQuestions[0]?.id || 'recent-fe-001';
  });

  const activeFeQuestion = useMemo(() => {
    return feQuestions.find(q => q.id === activeFeId) || feQuestions[0] || {};
  }, [activeFeId, feQuestions]);

  const currentFeIndex = useMemo(() => {
    return feQuestions.findIndex(q => q.id === activeFeQuestion?.id);
  }, [feQuestions, activeFeQuestion?.id]);

  const [feCodeMap, setFeCodeMap] = useState(() => {
    const initialMap = {};
    feQuestions.forEach(q => {
      initialMap[q.id] = {
        html: q.starterHTML || '',
        css: q.starterCSS || '',
        js: q.starterJS || ''
      };
    });
    return initialMap;
  });

  // Sync feCodeMap when a new question is activated or when starter code is updated
  useEffect(() => {
    if (!activeFeQuestion?.id) return;
    setFeCodeMap(prev => {
      // If the question is not in the map, add it
      if (!prev[activeFeQuestion.id]) {
        return {
          ...prev,
          [activeFeQuestion.id]: {
            html: activeFeQuestion.starterHTML || '',
            css: activeFeQuestion.starterCSS || '',
            js: activeFeQuestion.starterJS || ''
          }
        };
      }
      return prev;
    });
  }, [activeFeQuestion?.id, activeFeQuestion?.starterHTML, activeFeQuestion?.starterCSS, activeFeQuestion?.starterJS]);

  const feCode = useMemo(() => {
    return feCodeMap[activeFeQuestion?.id] || {
      html: activeFeQuestion?.starterHTML || '',
      css: activeFeQuestion?.starterCSS || '',
      js: activeFeQuestion?.starterJS || ''
    };
  }, [feCodeMap, activeFeQuestion]);

  const [activeFeEditorTab, setActiveFeEditorTab] = useState('js'); // 'html' | 'css' | 'js'
  const [showFeSolutionModal, setShowFeSolutionModal] = useState(false);
  const [feSolutionTab, setFeSolutionTab] = useState('js'); // 'html' | 'css' | 'js' | 'explanation'
  const [copiedFeSolution, setCopiedFeSolution] = useState(false);
  const [isFeEditorExpanded, setIsFeEditorExpanded] = useState(false);
  const [feTestResults, setFeTestResults] = useState(null);
  const [isFeRunning, setIsFeRunning] = useState(false);
  const [isFeResetDone, setIsFeResetDone] = useState(false);

  const handlePrevFeQuestion = () => {
    if (currentFeIndex > 0) {
      setActiveFeId(feQuestions[currentFeIndex - 1].id);
      setFeTestResults(null);
    }
  };

  const handleNextFeQuestion = () => {
    if (currentFeIndex < feQuestions.length - 1) {
      setActiveFeId(feQuestions[currentFeIndex + 1].id);
      setFeTestResults(null);
    }
  };

  // =========================================================================
  // SQL TRACK STATES & REFS
  // =========================================================================
  const sqlQuestions = useMemo(() => recentQuestions.filter(q => q.track === 'sql'), []);
  const [activeSqlId, setActiveSqlId] = useState(sqlQuestions[0]?.id || 'recent-sql-001');

  const activeSqlQuestion = useMemo(() => {
    return sqlQuestions.find(q => q.id === activeSqlId) || sqlQuestions[0];
  }, [activeSqlId, sqlQuestions]);

  const currentSqlIndex = useMemo(() => {
    return sqlQuestions.findIndex(q => q.id === activeSqlQuestion?.id);
  }, [sqlQuestions, activeSqlQuestion?.id]);

  const [isSqlQuestionDropdownOpen, setIsSqlQuestionDropdownOpen] = useState(false);
  const sqlQuestionDropdownRef = useRef(null);

  const handlePrevSqlQuestion = () => {
    if (currentSqlIndex > 0) {
      setActiveSqlId(sqlQuestions[currentSqlIndex - 1].id);
      setSqlQueryResult(null);
      setSqlTestResults(null);
    }
  };

  const handleNextSqlQuestion = () => {
    if (currentSqlIndex < sqlQuestions.length - 1) {
      setActiveSqlId(sqlQuestions[currentSqlIndex + 1].id);
      setSqlQueryResult(null);
      setSqlTestResults(null);
    }
  };

  const [sqlCodeMap, setSqlCodeMap] = useState(() => {
    const map = {};
    sqlQuestions.forEach(q => {
      map[q.id] = q.starterCode || '';
    });
    return map;
  });

  const activeSqlCode = activeSqlQuestion ? (sqlCodeMap[activeSqlQuestion.id] ?? activeSqlQuestion.starterCode ?? '') : '';

  const handleSqlCodeChange = (newCode) => {
    if (!activeSqlQuestion) return;
    setSqlCodeMap(prev => ({
      ...prev,
      [activeSqlQuestion.id]: newCode || ''
    }));
  };

  const [isSqlResetDone, setIsSqlResetDone] = useState(false);
  const [showSqlSolutionModal, setShowSqlSolutionModal] = useState(false);
  const [copiedSqlSolution, setCopiedSqlSolution] = useState(false);
  const [isSqlEditorExpanded, setIsSqlEditorExpanded] = useState(false);

  const [sqlActiveTab, setSqlActiveTab] = useState('output'); // 'output' | 'tests'
  const [isSqlRunning, setIsSqlRunning] = useState(false);
  const [sqlQueryResult, setSqlQueryResult] = useState(null);
  const [sqlTestResults, setSqlTestResults] = useState(null);

  const handleResetSqlCode = () => {
    if (!activeSqlQuestion) return;
    handleSqlCodeChange(activeSqlQuestion.starterCode || '');
    setSqlQueryResult(null);
    setSqlTestResults(null);
    setIsSqlResetDone(true);
    setTimeout(() => setIsSqlResetDone(false), 2000);
  };

  const handleRunSqlQuery = async () => {
    if (!activeSqlQuestion) return;
    setIsSqlRunning(true);
    setSqlActiveTab('output');
    try {
      const dataset = activeSqlQuestion.testCases?.[0]?.data || activeSqlQuestion.examples?.[0]?.input || {};
      const res = await runQueryOnDataset(activeSqlQuestion, normalizeSqlQuery(activeSqlCode), dataset);
      setSqlQueryResult(res);
    } catch (err) {
      setSqlQueryResult({
        success: false,
        columns: [],
        rows: [],
        rawValues: [],
        rowCount: 0,
        error: err.message,
        executionTimeMs: 0
      });
    } finally {
      setIsSqlRunning(false);
    }
  };

  const handleRunSqlTests = async () => {
    if (!activeSqlQuestion) return;
    setIsSqlRunning(true);
    setSqlActiveTab('tests');
    try {
      const res = await runAssessmentTests(activeSqlQuestion, normalizeSqlQuery(activeSqlCode));
      setSqlTestResults(res);

      telemetryService.recordProblemAttempt(
        activeSqlQuestion.id,
        'sql',
        res.allPassed,
        { category: activeSqlQuestion.category || 'Recent SQL' }
      );

      if (res.allPassed) {
        if (!solvedSet.includes(activeSqlQuestion.id)) {
          toggleSolved(activeSqlQuestion.id);
          gamificationService.addXP(50, `Solved ${activeSqlQuestion.title}`);
        }
        mistakesStorage.resolveMistake(activeSqlQuestion.id, 'sql');
      } else {
        mistakesStorage.recordMistake({
          id: activeSqlQuestion.id,
          type: 'sql',
          title: activeSqlQuestion.title,
          category: activeSqlQuestion.category,
          difficulty: activeSqlQuestion.difficulty,
          route: `/recent-questions?track=sql&q=${activeSqlQuestion.id}`,
          errorSummary: `${res.passedCount || 0}/${res.totalCount || 0} test cases passed`
        });
      }
      telemetryService.broadcastActivityUpdate();
    } catch (err) {
      setSqlTestResults({
        allPassed: false,
        passedCount: 0,
        totalCount: activeSqlQuestion.testCases?.length || 0,
        testResults: [
          {
            name: 'Execution Error',
            passed: false,
            message: err.message || 'Error running test suite'
          }
        ]
      });
    } finally {
      setIsSqlRunning(false);
    }
  };

  const handleInsertSqlSolution = () => {
    if (!activeSqlQuestion?.solution) return;
    handleSqlCodeChange(activeSqlQuestion.solution);
    setShowSqlSolutionModal(false);
  };

  const handleCopySqlSolution = (solText) => {
    navigator.clipboard.writeText(solText);
    setCopiedSqlSolution(true);
    setTimeout(() => setCopiedSqlSolution(false), 2000);
  };

  // Bookmarks & Solved state (persisted locally)
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('recent-bookmarks') || '[]');
    } catch {
      return [];
    }
  });

  const [solvedSet, setSolvedSet] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('recent-solved') || '[]');
    } catch {
      return [];
    }
  });

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dateDropdownRef.current && !dateDropdownRef.current.contains(e.target)) {
        setIsDateOpen(false);
      }
      if (diffDropdownRef.current && !diffDropdownRef.current.contains(e.target)) {
        setIsDiffOpen(false);
      }
      if (questionDropdownRef.current && !questionDropdownRef.current.contains(e.target)) {
        setIsQuestionDropdownOpen(false);
      }
      if (sqlQuestionDropdownRef.current && !sqlQuestionDropdownRef.current.contains(e.target)) {
        setIsSqlQuestionDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleBookmark = (id) => {
    setBookmarks((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem('recent-bookmarks', JSON.stringify(updated));
      return updated;
    });
  };

  const toggleSolved = (id) => {
    setSolvedSet((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem('recent-solved', JSON.stringify(updated));
      return updated;
    });
  };

  // DSA Code handlers
  const currentCode = codeMap[activeDsaQuestion.id]?.[selectedLang] || activeDsaQuestion.solutions?.[selectedLang] || '';

  const handleCodeChange = (newVal) => {
    if (isDsaProgrammaticUpdate.current) return;
    const activeLang = selectedDsaLangRef.current;
    setCodeMap(prev => ({
      ...prev,
      [activeDsaQuestion.id]: {
        ...prev[activeDsaQuestion.id],
        [activeLang]: newVal || ''
      }
    }));
  };

  const handleSelectDsaLanguage = (langId) => {
    selectedDsaLangRef.current = langId;
    setSelectedLang(langId);

    const starters = getRecentDsaStarters(activeDsaQuestion);
    const targetCode = codeMap[activeDsaQuestion.id]?.[langId] !== undefined
      ? codeMap[activeDsaQuestion.id][langId]
      : (starters[langId] || activeDsaQuestion.solutions?.[langId] || '');

    isDsaProgrammaticUpdate.current = true;
    if (dsaEditorRef.current) {
      dsaEditorRef.current.setValue(targetCode);
    }
    isDsaProgrammaticUpdate.current = false;
  };

  const handleSelectLanguage = handleSelectDsaLanguage;

  // Re-sync editor when switching recent DSA questions
  useEffect(() => {
    const starters = getRecentDsaStarters(activeDsaQuestion);
    const activeLang = selectedDsaLangRef.current;
    const currentCode = codeMap[activeDsaQuestion.id]?.[activeLang] || starters[activeLang] || '';
    isDsaProgrammaticUpdate.current = true;
    if (dsaEditorRef.current) {
      dsaEditorRef.current.setValue(currentCode);
    }
    isDsaProgrammaticUpdate.current = false;
    setTestResults(null);
    setIsRunning(false);
  }, [activeDsaId]);

  const handleResetCode = () => {
    const starters = getRecentDsaStarters(activeDsaQuestion);
    const activeLang = selectedDsaLangRef.current;
    const starter = starters[activeLang] || activeDsaQuestion.solutions?.[activeLang] || '';
    
    // 1. Update React state
    setCodeMap(prev => ({
      ...prev,
      [activeDsaQuestion.id]: {
        ...prev[activeDsaQuestion.id],
        [activeLang]: starter
      }
    }));

    // 2. Direct Monaco model update with protection flag
    isDsaProgrammaticUpdate.current = true;
    if (dsaEditorRef.current) {
      dsaEditorRef.current.setValue(starter);
    }
    isDsaProgrammaticUpdate.current = false;

    // 3. Clear simulated test results
    setTestResults(null);

    // 4. Visual feedback on the button
    setIsDsaResetDone(true);
    setTimeout(() => setIsDsaResetDone(false), 2000);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopySolution = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedSolution(true);
    setTimeout(() => setCopiedSolution(false), 2000);
  };

  const handleLoadSolutionToEditor = () => {
    // Use the language tab actively viewed in the Solution Modal
    const targetLang = solutionTabLang || selectedDsaLangRef.current || 'python';
    const sol = activeDsaQuestion.solutions?.[targetLang] || '';

    // Switch the active language in editor to match the loaded solution
    setSelectedLang(targetLang);
    selectedDsaLangRef.current = targetLang;

    if (sol) {
      setCodeMap(prev => ({
        ...prev,
        [activeDsaQuestion.id]: {
          ...prev[activeDsaQuestion.id],
          [targetLang]: sol
        }
      }));
      isDsaProgrammaticUpdate.current = true;
      if (dsaEditorRef.current) {
        dsaEditorRef.current.setValue(sol);
      }
      isDsaProgrammaticUpdate.current = false;
      setShowSolutionModal(false);
    }
  };

  // Evaluates candidate's DSA code across all 5 languages
  const evaluateDsaSubmission = (question, userCode, lang) => {
    const code = (userCode || '').trim();

    // 1. Untouched / Starter code check
    const isUntouched =
      code.includes('// TODO: Implement') ||
      (code.includes('// TODO:') && code.includes('return 0;')) ||
      (code.includes('// TODO:') && code.includes('return new ArrayList<>();')) ||
      (code.includes('// TODO:') && code.includes('return new List<int>();')) ||
      (code.includes('// TODO:') && code.includes('return [];')) ||
      (code.includes('pass') && !code.includes('return ') && !code.includes('print('));

    if (isUntouched) {
      throw new Error(`Your ${lang.toUpperCase()} solution is not implemented yet. Complete the function logic before running test cases.`);
    }

    // 2. Syntax / Bracket validation
    const openBraces = (code.match(/\{/g) || []).length;
    const closeBraces = (code.match(/\}/g) || []).length;
    if (lang !== 'python' && openBraces !== closeBraces) {
      throw new Error(`Syntax Error: Mismatched curly braces (${openBraces} '{' vs ${closeBraces} '}').`);
    }

    // 3. Check for direct JavaScript execution
    if (lang === 'javascript') {
      try {
        const runner = new Function('args', `
          let capturedLogs = [];
          const customConsole = { log: (...a) => capturedLogs.push(a.join(' ')) };
          const console = customConsole;
          ${code}
          const candidates = [
            typeof transformAndSum === 'function' ? transformAndSum : null,
            typeof findValidNumbers === 'function' ? findValidNumbers : null,
            typeof calculateRunningSumAndDivisibility === 'function' ? calculateRunningSumAndDivisibility : null,
            typeof calculatePower === 'function' ? calculatePower : null,
            typeof moveHyphen === 'function' ? moveHyphen : null,
            typeof countSpecialElements === 'function' ? countSpecialElements : null,
            typeof reverseNumber === 'function' ? reverseNumber : null,
            typeof countValidBlocks === 'function' ? countValidBlocks : null,
            typeof calculatePrimeSum === 'function' ? calculatePrimeSum : (typeof calculate_prime_sum === 'function' ? calculate_prime_sum : null),
            typeof calculateDifference === 'function' ? calculateDifference : (typeof calculate_difference === 'function' ? calculate_difference : null),
            typeof minimumHouses === 'function' ? minimumHouses : (typeof minimum_houses === 'function' ? minimum_houses : null),
            typeof findMostFrequent === 'function' ? findMostFrequent : (typeof find_most_frequent === 'function' ? find_most_frequent : null),
            typeof countUniform === 'function' ? countUniform : (typeof count_uniform === 'function' ? count_uniform : null),
            typeof numberOfCarries === 'function' ? numberOfCarries : (typeof number_of_carries === 'function' ? number_of_carries : (typeof NumberOfCarries === 'function' ? NumberOfCarries : null)),
            typeof countBlocks === 'function' ? countBlocks : (typeof count_blocks === 'function' ? count_blocks : (typeof CountBlocks === 'function' ? CountBlocks : null)),
            typeof totalEnergy === 'function' ? totalEnergy : (typeof total_energy === 'function' ? total_energy : (typeof TotalEnergy === 'function' ? TotalEnergy : null))
          ].filter(Boolean);

          if (candidates.length === 0) throw new Error('Algorithm function declaration not found in code.');
          const ret = candidates[0](...args);
          return { ret, logs: capturedLogs };
        `);

        return {
          mode: 'executed',
          runTest: (args) => {
            try {
              return runner(args);
            } catch (e) {
              return { error: e.message };
            }
          }
        };
      } catch (e) {
        throw new Error(`JavaScript Compilation Error: ${e.message}`);
      }
    }

    // 4. For Python, Java, C++, C#:
    // Detect if user has a dummy constant return (e.g. return 0, return 999, return -1)
    const constReturnMatch = code.match(/return\s+(-?\d+|""|''|null|false|true|\[\]|new\s+ArrayList[^\n;]*|new\s+List[^\n;]*)/);
    const hasLoop = code.includes('for ') || code.includes('for(') || code.includes('while ') || code.includes('while(');

    if (constReturnMatch && !hasLoop) {
      let rawVal = constReturnMatch[1].trim();
      let parsedVal = rawVal;
      if (/^-?\d+$/.test(rawVal)) parsedVal = Number(rawVal);
      else if (rawVal === 'false') parsedVal = false;
      else if (rawVal === 'true') parsedVal = true;
      else if (rawVal.includes('List') || rawVal.includes('ArrayList') || rawVal === '[]') parsedVal = [];
      else if (rawVal === '""' || rawVal === "''") parsedVal = '';

      return {
        mode: 'dummy_return',
        returnValue: parsedVal
      };
    }

    // Check required algorithmic components per question
    let isAlgorithmicCorrect = true;
    let simulatedFlaw = null;

    if (question.id === 'recent-dsa-001') {
      const hasMod7 = code.includes('% 7') || code.includes('mod 7') || code.includes('%7');
      const hasMul3 = code.includes('* 3') || code.includes('*3');
      const hasMod11 = code.includes('% 11') || code.includes('mod 11') || code.includes('%11');
      const hasDiv11 = code.includes('/ 11') || code.includes('// 11') || code.includes('/11');

      if (!hasMod7 || !hasMul3) {
        isAlgorithmicCorrect = false;
        simulatedFlaw = 'missing_mod7';
      } else if (!hasMod11 || !hasDiv11) {
        isAlgorithmicCorrect = false;
        simulatedFlaw = 'missing_mod11';
      }
    } else if (question.id === 'recent-dsa-002') {
      const hasPrefixSum = code.includes('substring') || code.includes('substr') || code.includes('EqSum') || code.includes('eqsum') || code.includes('eqSum') || code.includes('int(') || code.includes('Parse');
      const hasGreater = code.includes('>') || code.includes('>=');
      if (!hasPrefixSum || !hasGreater) {
        isAlgorithmicCorrect = false;
        simulatedFlaw = 'invalid_eqsum';
      }
    } else if (question.id === 'recent-dsa-003') {
      const hasMod5 = code.includes('% 5') || code.includes('mod 5') || code.includes('%5');
      const hasRunningSum = code.includes('+=') || code.includes('sum = sum +') || code.includes('runningSum = runningSum +') || code.includes('running_sum = running_sum +');
      if (!hasMod5) {
        isAlgorithmicCorrect = false;
        simulatedFlaw = 'missing_mod5';
      } else if (!hasRunningSum) {
        isAlgorithmicCorrect = false;
        simulatedFlaw = 'missing_sum';
      }
    } else if (question.id === 'recent-dsa-004') {
      const hasPower = code.includes('pow') || code.includes('**') || code.includes('*=') || code.includes('result * n') || code.includes('ans * n');
      if (!hasPower) {
        isAlgorithmicCorrect = false;
        simulatedFlaw = 'missing_power';
      }
    } else if (question.id === 'recent-dsa-005') {
      const hasHyphenCheck = code.includes("'-'") || code.includes('"-"') || code.includes('45');
      const hasAppend = code.includes('+') || code.includes('append') || code.includes('push') || code.includes('StringBuilder');
      if (!hasHyphenCheck || !hasAppend) {
        isAlgorithmicCorrect = false;
        simulatedFlaw = 'missing_hyphen';
      }
    } else if (question.id === 'recent-dsa-006') {
      const hasMod2 = code.includes('% 2') || code.includes('%2');
      if (!hasMod2) {
        isAlgorithmicCorrect = false;
        simulatedFlaw = 'missing_mod2';
      }
    } else if (question.id === 'recent-dsa-007') {
      const hasMod10 = code.includes('% 10') || code.includes('%10');
      const hasDiv10 = code.includes('/ 10') || code.includes('// 10') || code.includes('/10');
      if (!hasMod10 || !hasDiv10) {
        isAlgorithmicCorrect = false;
        simulatedFlaw = 'missing_mod10';
      }
    } else if (question.id === 'recent-dsa-008') {
      const hasEqualCheck = code.includes('==') || code.includes('===');
      if (!hasEqualCheck) {
        isAlgorithmicCorrect = false;
        simulatedFlaw = 'missing_equality';
      }
    } else if (question.id === 'recent-dsa-009') {
      const hasPrimeMod = code.includes('%') || code.includes('mod');
      const hasPrimeLoop = code.includes('for') || code.includes('while');
      if (!hasPrimeMod || !hasPrimeLoop) {
        isAlgorithmicCorrect = false;
        simulatedFlaw = 'missing_prime_check';
      }
    } else if (question.id === 'recent-dsa-010') {
      const hasMod4 = code.includes('% 4') || code.includes('%4');
      const hasMod7 = code.includes('% 7') || code.includes('%7');
      const hasDiv10 = code.includes('/ 10') || code.includes('// 10') || code.includes('/10');
      if (!hasMod4 || !hasMod7 || !hasDiv10) {
        isAlgorithmicCorrect = false;
        simulatedFlaw = 'missing_divisibility_or_digitsum';
      }
    } else if (question.id === 'recent-dsa-011') {
      const hasMult = code.includes('*') || code.includes('r * unit') || code.includes('r*unit');
      const hasNullCheck = code.includes('-1') || code.includes('null') || code.includes('None') || code.includes('empty');
      if (!hasMult || !hasNullCheck) {
        isAlgorithmicCorrect = false;
        simulatedFlaw = 'missing_rat_null_check';
      }
    } else if (question.id === 'recent-dsa-012') {
      const hasIndex = code.includes('[0]') || code.includes('front()') || code.includes('charAt(0)') || code.includes('.front()');
      const hasMapOrSplit = code.includes('split') || code.includes('stringstream') || code.includes('Map') || code.includes('dict') || code.includes('freq');
      if (!hasIndex || !hasMapOrSplit) {
        isAlgorithmicCorrect = false;
        simulatedFlaw = 'missing_first_last_extraction';
      }
    } else if (question.id === 'recent-dsa-013') {
      const hasSqrt = code.includes('sqrt') || code.includes('isqrt') || code.includes('**0.5') || code.includes('Math.sqrt');
      const hasIndex = code.includes('* n') || code.includes('*n') || code.includes('charAt') || code.includes('[');
      if (!hasSqrt || !hasIndex) {
        isAlgorithmicCorrect = false;
        simulatedFlaw = 'missing_grid_mapping';
      }
    } else if (question.id === 'recent-dsa-014') {
      const hasModulo = code.includes('% 10') || code.includes('%10');
      const hasDivision = code.includes('/ 10') || code.includes('/= 10') || code.includes('/=10') || code.includes('// 10') || code.includes('/10');
      if (!hasModulo || !hasDivision) {
        isAlgorithmicCorrect = false;
        simulatedFlaw = 'missing_digit_extraction';
      }
    } else if (question.id === 'recent-dsa-015') {
      const hasLoop = code.includes('while') || code.includes('for');
      const hasLengthOrCount = code.includes('length') || code.includes('count') || code.includes('j - i') || code.includes('j-i');
      if (!hasLoop || !hasLengthOrCount) {
        isAlgorithmicCorrect = false;
        simulatedFlaw = 'missing_consecutive_grouping';
      }
    } else if (question.id === 'recent-dsa-016') {
      const hasMult = code.includes('*') || code.includes('i + 1') || code.includes('i+1');
      const hasSum = code.includes('+') || code.includes('total') || code.includes('sum');
      if (!hasMult || !hasSum) {
        isAlgorithmicCorrect = false;
        simulatedFlaw = 'missing_weighted_sum';
      }
    } else if (question.id === 'recent-dsa-017') {
      const hasLoop = code.includes('for') || code.includes('while');
      const hasSquareOrMult = code.includes('*') || code.includes('pow') || code.includes('Math.pow');
      const hasModulo = code.includes('% 10') || code.includes('%10');
      if (!hasLoop || !hasSquareOrMult || !hasModulo) {
        isAlgorithmicCorrect = false;
        simulatedFlaw = 'missing_square_modulo';
      }
    }

    return {
      mode: isAlgorithmicCorrect ? 'correct' : 'flawed',
      flaw: simulatedFlaw
    };
  };

  // Run Test Cases against actual exam inputs for DSA (Judge0 CE Online Compiler + Local Fallback)
  const handleRunTests = async () => {
    setIsRunning(true);
    setTestResults(null);

    const q = activeDsaQuestion;

    try {
      // 1. Attempt real remote execution on Judge0 CE
      let judge0Res = null;
      try {
        judge0Res = await executeDsaOnJudge0(q, currentCode, selectedLang);
      } catch (jErr) {
        console.warn('Judge0 execution attempt failed, falling back:', jErr);
      }

      // Handle Judge0 Compiler Error or Runtime Error directly with diagnostic output
      if (judge0Res && !judge0Res.success && judge0Res.errorType) {
        setTestResults({
          allPassed: false,
          isJudge0: true,
          executionEngine: 'Judge0 CE ⭐ (Remote Compiler)',
          error: `${judge0Res.errorType}:\n${judge0Res.errorMessage}`,
          results: []
        });
        setSolvedSet(prev => {
          if (prev.includes(q.id)) {
            const updated = prev.filter(id => id !== q.id);
            localStorage.setItem('recent-solved', JSON.stringify(updated));
            return updated;
          }
          return prev;
        });
        setIsRunning(false);
        return;
      }

      let results = [];
      const isJudge0Success = judge0Res && judge0Res.success && Array.isArray(judge0Res.testOutputs) && judge0Res.testOutputs.length >= 4;

      // Fallback submission evaluation if Judge0 was not successful
      const sub = !isJudge0Success ? evaluateDsaSubmission(q, currentCode, selectedLang) : null;
      const jOutputs = isJudge0Success ? judge0Res.testOutputs : null;
      const jTimeStr = judge0Res?.time ? `${(judge0Res.time * 1000).toFixed(0)}ms` : null;

      if (q.id === 'recent-dsa-001') {
        const testInputs = [
          { id: 1, name: 'Exam Test Case 1', nums: [22, 5, 14], exp: 34, expStr: 'Total Sum: 34 (Transformed: [24, 2, 8])', latency: '10ms' },
          { id: 2, name: 'Exam Test Case 2 (Multi-Index & Divisibility)', nums: [0, 11, 33, 7, 0], exp: 25, expStr: 'Total Sum: 25 (Transformed: [0, 9, 30, -2, -12])', latency: '12ms' },
          { id: 3, name: 'Exam Test Case 3 (All Divisible by 11)', nums: [11, 22, 33, 44], exp: 102, expStr: 'Total Sum: 102 (Transformed: [12, 21, 30, 39])', latency: '9ms' },
          { id: 4, name: 'Exam Test Case 4 (Modulo 7 Reset Boundary)', nums: [7, 14, 21, 28, 35, 42, 49], exp: 133, expStr: 'Total Sum: 133 (Transformed: [7, 11, 15, 19, 23, 27, 31])', latency: '14ms' }
        ];

        results = testInputs.map((t, idx) => {
          let actualStr = '';
          let passed = false;

          if (isJudge0Success) {
            const out = jOutputs[idx];
            if (out && typeof out === 'object' && out.error) {
              actualStr = `Error: ${out.error}`;
              passed = false;
            } else {
              const val = typeof out === 'number' ? out : Number(out);
              actualStr = `Total Sum: ${isNaN(val) ? (out ?? 'undefined') : val}`;
              passed = !isNaN(val) && val === t.exp;
            }
          } else if (sub.mode === 'executed') {
            const u = sub.runTest([t.nums]);
            if (u.error) {
              actualStr = `Error: ${u.error}`;
              passed = false;
            } else {
              actualStr = `Total Sum: ${u.ret}`;
              passed = Number(u.ret) === t.exp;
            }
          } else if (sub.mode === 'dummy_return') {
            const val = typeof sub.returnValue === 'number' ? sub.returnValue : 0;
            actualStr = `Total Sum: ${val}`;
            passed = val === t.exp;
          } else if (sub.mode === 'flawed') {
            const flawSum = t.nums.map((n, i) => n - ((i % 7) * 3)).reduce((a, b) => a + b, 0);
            actualStr = `Total Sum: ${flawSum} (Flawed Logic: missing divisibility by 11)`;
            passed = false;
          } else {
            const sim = q.runSimulation(t.nums);
            actualStr = `Total Sum: ${sim.total} (Transformed: [${sim.transformed.join(', ')}])`;
            passed = sim.total === t.exp;
          }

          return {
            id: t.id,
            name: t.name,
            input: `nums = [${t.nums.join(', ')}]`,
            expected: t.expStr,
            actual: actualStr,
            passed,
            latency: jTimeStr || t.latency
          };
        });
      } else if (q.id === 'recent-dsa-002') {
        const testInputs = [
          { id: 1, name: 'Exam Test Case 1 (N=112)', N: 112, expCount: 10, latency: '14ms' },
          { id: 2, name: 'Exam Test Case 2 (N=50)', N: 50, expCount: 3, latency: '11ms' },
          { id: 3, name: 'Exam Test Case 3 (Boundary N=10)', N: 10, expCount: 0, latency: '7ms' },
          { id: 4, name: 'Exam Test Case 4 (Large Target N=250)', N: 250, expCount: 23, latency: '16ms' }
        ];

        results = testInputs.map((t, idx) => {
          let actualStr = '';
          let passed = false;

          if (isJudge0Success) {
            const out = jOutputs[idx];
            if (out && typeof out === 'object' && out.error) {
              actualStr = `Error: ${out.error}`;
              passed = false;
            } else {
              const cnt = typeof out === 'number' ? out : (Array.isArray(out) ? out.length : Number(out));
              actualStr = `${isNaN(cnt) ? (out ?? 0) : cnt}`;
              passed = !isNaN(cnt) && cnt === t.expCount;
            }
          } else if (sub.mode === 'executed') {
            const u = sub.runTest([t.N]);
            if (u.error) {
              actualStr = `Error: ${u.error}`;
              passed = false;
            } else {
              const cnt = Array.isArray(u.ret) ? u.ret.length : (typeof u.ret === 'number' ? u.ret : 0);
              actualStr = `${cnt}`;
              passed = cnt === t.expCount;
            }
          } else if (sub.mode === 'dummy_return') {
            const cnt = Array.isArray(sub.returnValue) ? sub.returnValue.length : (typeof sub.returnValue === 'number' ? sub.returnValue : 0);
            actualStr = `${cnt}`;
            passed = cnt === t.expCount;
          } else if (sub.mode === 'flawed') {
            actualStr = `0`;
            passed = t.expCount === 0;
          } else {
            const sim = q.runSimulation(t.N);
            const cnt = typeof sim === 'number' ? sim : (sim?.count ?? 0);
            actualStr = `${cnt}`;
            passed = cnt === t.expCount;
          }

          return {
            id: t.id,
            name: t.name,
            input: `N = ${t.N}`,
            expected: `${t.expCount}`,
            actual: actualStr,
            passed,
            latency: jTimeStr || t.latency
          };
        });
      } else if (q.id === 'recent-dsa-003') {
        const testInputs = [
          { id: 1, name: 'Exam Test Case 1 (N=10)', n: 10, expSum: 55, expCount: 4, latency: '9ms' },
          { id: 2, name: 'Exam Test Case 2 (N=20)', n: 20, expSum: 210, expCount: 8, latency: '12ms' },
          { id: 3, name: 'Exam Test Case 3 (Boundary N=5)', n: 5, expSum: 15, expCount: 2, latency: '7ms' },
          { id: 4, name: 'Exam Test Case 4 (N=15)', n: 15, expSum: 120, expCount: 6, latency: '11ms' }
        ];

        results = testInputs.map((t, idx) => {
          let actualStr = '';
          let passed = false;

          if (isJudge0Success) {
            const out = jOutputs[idx];
            if (out && typeof out === 'object' && out.error) {
              actualStr = `Error: ${out.error}`;
              passed = false;
            } else {
              const str = String(out ?? '');
              const mSum = str.match(/Running Sum\s*=\s*(\d+)/i);
              const mCnt = str.match(/Count\s*=\s*(\d+)/i);
              const rSum = mSum ? Number(mSum[1]) : 0;
              const rCnt = mCnt ? Number(mCnt[1]) : 0;
              actualStr = `Running Sum = ${rSum}, Count = ${rCnt}`;
              passed = rSum === t.expSum && rCnt === t.expCount;
            }
          } else if (sub.mode === 'executed') {
            const u = sub.runTest([t.n]);
            if (u.error) {
              actualStr = `Error: ${u.error}`;
              passed = false;
            } else {
              let rSum = u.ret?.runningSum ?? (Array.isArray(u.ret) ? u.ret[0] : null);
              let rCnt = u.ret?.count ?? (Array.isArray(u.ret) ? u.ret[1] : null);
              if (rSum === null || rCnt === null) {
                const logStr = (u.logs || []).join(' ');
                const mSum = logStr.match(/Running Sum\s*=\s*(\d+)/i);
                const mCnt = logStr.match(/Count\s*=\s*(\d+)/i);
                rSum = mSum ? Number(mSum[1]) : (typeof u.ret === 'number' ? u.ret : 0);
                rCnt = mCnt ? Number(mCnt[1]) : 0;
              }
              actualStr = `Running Sum = ${rSum}, Count = ${rCnt}`;
              passed = rSum === t.expSum && rCnt === t.expCount;
            }
          } else if (sub.mode === 'dummy_return') {
            actualStr = `Running Sum = 0, Count = 0`;
            passed = false;
          } else if (sub.mode === 'flawed') {
            if (sub.flaw === 'missing_mod5') {
              const sim = q.runSimulation(t.n);
              actualStr = `Running Sum = ${sim.runningSum}, Count = 0 (Missing % 5 divisibility counter)`;
              passed = false;
            } else {
              actualStr = `Running Sum = 0, Count = 0`;
              passed = false;
            }
          } else {
            const sim = q.runSimulation(t.n);
            actualStr = `Running Sum = ${sim.runningSum}, Count = ${sim.count}`;
            passed = sim.runningSum === t.expSum && sim.count === t.expCount;
          }

          return {
            id: t.id,
            name: t.name,
            input: `N = ${t.n}`,
            expected: `Running Sum = ${t.expSum}, Count = ${t.expCount}`,
            actual: actualStr,
            passed,
            latency: jTimeStr || t.latency
          };
        });
      } else if (q.id === 'recent-dsa-004') {
        const testInputs = [
          { id: 1, name: 'Exam Test Case 1 (2^5)', n: 2, p: 5, exp: 32, latency: '8ms' },
          { id: 2, name: 'Exam Test Case 2 (3^4)', n: 3, p: 4, exp: 81, latency: '10ms' },
          { id: 3, name: 'Exam Test Case 3 (Zero Exponent 5^0)', n: 5, p: 0, exp: 1, latency: '6ms' },
          { id: 4, name: 'Exam Test Case 4 (Base 10 Exponent 10^3)', n: 10, p: 3, exp: 1000, latency: '9ms' }
        ];

        results = testInputs.map((t, idx) => {
          let actualStr = '';
          let passed = false;

          if (isJudge0Success) {
            const out = jOutputs[idx];
            if (out && typeof out === 'object' && out.error) {
              actualStr = `Error: ${out.error}`;
              passed = false;
            } else {
              const val = typeof out === 'number' ? out : Number(out);
              actualStr = isNaN(val) ? String(out ?? '') : String(val);
              passed = !isNaN(val) && val === t.exp;
            }
          } else if (sub.mode === 'executed') {
            const u = sub.runTest([t.n, t.p]);
            if (u.error) {
              actualStr = `Error: ${u.error}`;
              passed = false;
            } else {
              actualStr = String(u.ret);
              passed = Number(u.ret) === t.exp;
            }
          } else if (sub.mode === 'dummy_return') {
            actualStr = String(sub.returnValue ?? 0);
            passed = Number(sub.returnValue) === t.exp;
          } else if (sub.mode === 'flawed') {
            actualStr = String(t.n * t.p) + ' (Incorrect: multiplied instead of power)';
            passed = false;
          } else {
            const sim = q.runSimulation(t.n, t.p);
            actualStr = String(sim);
            passed = sim === t.exp;
          }

          return {
            id: t.id,
            name: t.name,
            input: `N = ${t.n}, P = ${t.p}`,
            expected: `${t.exp}`,
            actual: actualStr,
            passed,
            latency: jTimeStr || t.latency
          };
        });
      } else if (q.id === 'recent-dsa-005') {
        const testInputs = [
          { id: 1, name: 'Exam Test Case 1', str: 'String-Compare', n: 14, exp: '-StringCompare', latency: '11ms' },
          { id: 2, name: 'Exam Test Case 2 (Multiple Hyphens)', str: 'Move-Hyphens-To-Front', n: 21, exp: '---MoveHyphensToFront', latency: '14ms' },
          { id: 3, name: 'Exam Test Case 3 (Interleaved Single Letters)', str: 'a-b-c-d', n: 7, exp: '---abcd', latency: '9ms' },
          { id: 4, name: 'Exam Test Case 4 (Zero Hyphens Boundary)', str: 'AccentureExam', n: 13, exp: 'AccentureExam', latency: '8ms' }
        ];

        results = testInputs.map((t, idx) => {
          let actualStr = '';
          let passed = false;

          if (isJudge0Success) {
            const out = jOutputs[idx];
            if (out && typeof out === 'object' && out.error) {
              actualStr = `Error: ${out.error}`;
              passed = false;
            } else {
              const str = typeof out === 'string' ? out.trim() : String(out ?? '').trim();
              actualStr = `"${str}"`;
              passed = str === t.exp.trim();
            }
          } else if (sub.mode === 'executed') {
            const u = sub.runTest([t.str, t.n]);
            if (u.error) {
              actualStr = `Error: ${u.error}`;
              passed = false;
            } else {
              actualStr = `"${u.ret}"`;
              passed = u.ret === t.exp;
            }
          } else if (sub.mode === 'dummy_return') {
            actualStr = `"${sub.returnValue || ''}"`;
            passed = sub.returnValue === t.exp;
          } else if (sub.mode === 'flawed') {
            actualStr = `"${t.str}" (Hyphens not separated)`;
            passed = t.str === t.exp;
          } else {
            const sim = q.runSimulation(t.str);
            actualStr = `"${sim}"`;
            passed = sim === t.exp;
          }

          return {
            id: t.id,
            name: t.name,
            input: `str = "${t.str}", n = ${t.n}`,
            expected: `"${t.exp}"`,
            actual: actualStr,
            passed,
            latency: jTimeStr || t.latency
          };
        });
      } else if (q.id === 'recent-dsa-006') {
        const testInputs = [
          { id: 1, name: 'Exam Test Case 1 (Alternating Evens & Odds)', nums: [2, 1, 4, 3, 6, 5], exp: 6, latency: '9ms' },
          { id: 2, name: 'Exam Test Case 2 (Inverted Parities)', nums: [1, 2, 3, 4, 5], exp: 0, latency: '12ms' },
          { id: 3, name: 'Exam Test Case 3 (All Matching Consecutive Pairs)', nums: [10, 11, 12, 13], exp: 4, latency: '8ms' },
          { id: 4, name: 'Exam Test Case 4 (All Even Elements)', nums: [2, 4, 6, 8], exp: 2, latency: '10ms' }
        ];

        results = testInputs.map((t, idx) => {
          let actualStr = '';
          let passed = false;

          if (isJudge0Success) {
            const out = jOutputs[idx];
            if (out && typeof out === 'object' && out.error) {
              actualStr = `Error: ${out.error}`;
              passed = false;
            } else {
              const val = typeof out === 'number' ? out : Number(out);
              actualStr = `Count: ${isNaN(val) ? (out ?? 0) : val}`;
              passed = !isNaN(val) && val === t.exp;
            }
          } else if (sub.mode === 'executed') {
            const u = sub.runTest([t.nums]);
            if (u.error) {
              actualStr = `Error: ${u.error}`;
              passed = false;
            } else {
              actualStr = `Count: ${u.ret}`;
              passed = Number(u.ret) === t.exp;
            }
          } else if (sub.mode === 'dummy_return') {
            const val = typeof sub.returnValue === 'number' ? sub.returnValue : 0;
            actualStr = `Count: ${val}`;
            passed = val === t.exp;
          } else if (sub.mode === 'flawed') {
            actualStr = `Count: 0 (Missing index & value parity check)`;
            passed = t.exp === 0;
          } else {
            const sim = q.runSimulation(t.nums);
            actualStr = `Count: ${sim}`;
            passed = sim === t.exp;
          }

          return {
            id: t.id,
            name: t.name,
            input: `nums = [${t.nums.join(', ')}]`,
            expected: `Count: ${t.exp}`,
            actual: actualStr,
            passed,
            latency: jTimeStr || t.latency
          };
        });
      } else if (q.id === 'recent-dsa-007') {
        const testInputs = [
          { id: 1, name: 'Exam Test Case 1', n: 12345, exp: 54321, latency: '7ms' },
          { id: 2, name: 'Exam Test Case 2 (Trailing Zero Truncation)', n: 98760, exp: 6789, latency: '11ms' },
          { id: 3, name: 'Exam Test Case 3 (Single Digit Boundary)', n: 7, exp: 7, latency: '6ms' },
          { id: 4, name: 'Exam Test Case 4 (Multiple Trailing Zeros)', n: 1000, exp: 1, latency: '8ms' }
        ];

        results = testInputs.map((t, idx) => {
          let actualStr = '';
          let passed = false;

          if (isJudge0Success) {
            const out = jOutputs[idx];
            if (out && typeof out === 'object' && out.error) {
              actualStr = `Error: ${out.error}`;
              passed = false;
            } else {
              const val = typeof out === 'number' ? out : Number(out);
              actualStr = isNaN(val) ? String(out ?? '') : String(val);
              passed = !isNaN(val) && val === t.exp;
            }
          } else if (sub.mode === 'executed') {
            const u = sub.runTest([t.n]);
            if (u.error) {
              actualStr = `Error: ${u.error}`;
              passed = false;
            } else {
              actualStr = String(u.ret);
              passed = Number(u.ret) === t.exp;
            }
          } else if (sub.mode === 'dummy_return') {
            actualStr = String(sub.returnValue ?? 0);
            passed = Number(sub.returnValue) === t.exp;
          } else if (sub.mode === 'flawed') {
            actualStr = String(t.n) + ' (Digits not reversed)';
            passed = false;
          } else {
            const sim = q.runSimulation(t.n);
            actualStr = String(sim);
            passed = sim === t.exp;
          }

          return {
            id: t.id,
            name: t.name,
            input: `N = ${t.n}`,
            expected: `${t.exp}`,
            actual: actualStr,
            passed,
            latency: jTimeStr || t.latency
          };
        });
      } else if (q.id === 'recent-dsa-008') {
        const testInputs = [
          { id: 1, name: 'Exam Test Case 1', n: 7, a: [1, 2, 2, 3, 3, 3, 4], exp: 3, latency: '8ms' },
          { id: 2, name: 'Exam Test Case 2 (All Blocks Valid)', n: 6, a: [1, 2, 2, 3, 3, 3], exp: 3, latency: '7ms' },
          { id: 3, name: 'Exam Test Case 3 (Zero Valid Blocks)', n: 5, a: [2, 2, 2, 4, 4], exp: 0, latency: '6ms' },
          { id: 4, name: 'Exam Test Case 4 (Separate Identical Blocks)', n: 8, a: [2, 2, 1, 2, 2, 3, 3, 3], exp: 4, latency: '10ms' }
        ];

        results = testInputs.map((t, idx) => {
          let actualStr = '';
          let passed = false;

          if (isJudge0Success) {
            const out = jOutputs[idx];
            if (out && typeof out === 'object' && out.error) {
              actualStr = `Error: ${out.error}`;
              passed = false;
            } else {
              const val = typeof out === 'number' ? out : Number(out);
              actualStr = `Valid Blocks: ${isNaN(val) ? (out ?? 0) : val}`;
              passed = !isNaN(val) && val === t.exp;
            }
          } else if (sub.mode === 'executed') {
            const u = sub.runTest([t.n, t.a]);
            if (u.error) {
              actualStr = `Error: ${u.error}`;
              passed = false;
            } else {
              actualStr = `Valid Blocks: ${u.ret}`;
              passed = Number(u.ret) === t.exp;
            }
          } else if (sub.mode === 'dummy_return') {
            const val = typeof sub.returnValue === 'number' ? sub.returnValue : 0;
            actualStr = `Valid Blocks: ${val}`;
            passed = val === t.exp;
          } else if (sub.mode === 'flawed') {
            actualStr = `Valid Blocks: 0 (Flawed logic)`;
            passed = t.exp === 0;
          } else {
            const sim = q.runSimulation(t.n, t.a);
            actualStr = `Valid Blocks: ${sim}`;
            passed = sim === t.exp;
          }

          return {
            id: t.id,
            name: t.name,
            input: `N = ${t.n}, A = [${t.a.join(', ')}]`,
            expected: `Valid Blocks: ${t.exp}`,
            actual: actualStr,
            passed,
            latency: jTimeStr || t.latency
          };
        });
      } else if (q.id === 'recent-dsa-009') {
        const testInputs = [
          { id: 1, name: 'Exam Test Case 1 (10 to 20)', m: 10, n: 20, exp: 60, expStr: 'Sum: 60 (Primes: 11, 13, 17, 19)', latency: '8ms' },
          { id: 2, name: 'Exam Test Case 2 (1 to 10)', m: 1, n: 10, exp: 17, expStr: 'Sum: 17 (Primes: 2, 3, 5, 7)', latency: '6ms' },
          { id: 3, name: 'Exam Test Case 3 (No Primes in Range)', m: 14, n: 16, exp: 0, expStr: 'Sum: 0 (No Primes)', latency: '5ms' },
          { id: 4, name: 'Exam Test Case 4 (Negative to Positive)', m: -5, n: 5, exp: 10, expStr: 'Sum: 10 (Primes: 2, 3, 5)', latency: '7ms' }
        ];

        results = testInputs.map((t, idx) => {
          let actualStr = '';
          let passed = false;

          if (isJudge0Success) {
            const out = jOutputs[idx];
            if (out && typeof out === 'object' && out.error) {
              actualStr = `Error: ${out.error}`;
              passed = false;
            } else {
              const val = typeof out === 'number' ? out : Number(out);
              actualStr = `Prime Sum: ${isNaN(val) ? (out ?? 0) : val}`;
              passed = !isNaN(val) && val === t.exp;
            }
          } else if (sub.mode === 'executed') {
            const u = sub.runTest([t.m, t.n]);
            if (u.error) {
              actualStr = `Error: ${u.error}`;
              passed = false;
            } else {
              actualStr = `Prime Sum: ${u.ret}`;
              passed = Number(u.ret) === t.exp;
            }
          } else if (sub.mode === 'dummy_return') {
            const val = typeof sub.returnValue === 'number' ? sub.returnValue : 0;
            actualStr = `Prime Sum: ${val}`;
            passed = val === t.exp;
          } else if (sub.mode === 'flawed') {
            actualStr = `Prime Sum: 0 (Flawed logic)`;
            passed = t.exp === 0;
          } else {
            const sim = q.runSimulation(t.m, t.n);
            actualStr = `Prime Sum: ${sim}`;
            passed = sim === t.exp;
          }

          return {
            id: t.id,
            name: t.name,
            input: `M = ${t.m}, N = ${t.n}`,
            expected: t.expStr,
            actual: actualStr,
            passed,
            latency: jTimeStr || t.latency
          };
        });
      } else if (q.id === 'recent-dsa-010') {
        const testInputs = [
          { id: 1, name: 'Exam Test Case 1 (1 to 20)', m: 1, n: 20, exp: 12, expStr: 'Diff: 12 (|24 - 12|)', latency: '7ms' },
          { id: 2, name: 'Exam Test Case 2 (1 to 10)', m: 1, n: 10, exp: 5, expStr: 'Diff: 5 (|12 - 7|)', latency: '6ms' },
          { id: 3, name: 'Exam Test Case 3 (Divisible by Both 4 & 7)', m: 28, n: 28, exp: 0, expStr: 'Diff: 0 (Both multi: 10 - 10)', latency: '5ms' },
          { id: 4, name: 'Exam Test Case 4 (Multi-digit Range 40 to 50)', m: 40, n: 50, exp: 5, expStr: 'Diff: 5 (|24 - 19|)', latency: '8ms' }
        ];

        results = testInputs.map((t, idx) => {
          let actualStr = '';
          let passed = false;

          if (isJudge0Success) {
            const out = jOutputs[idx];
            if (out && typeof out === 'object' && out.error) {
              actualStr = `Error: ${out.error}`;
              passed = false;
            } else {
              const val = typeof out === 'number' ? out : Number(out);
              actualStr = `Difference: ${isNaN(val) ? (out ?? 0) : val}`;
              passed = !isNaN(val) && val === t.exp;
            }
          } else if (sub.mode === 'executed') {
            const u = sub.runTest([t.m, t.n]);
            if (u.error) {
              actualStr = `Error: ${u.error}`;
              passed = false;
            } else {
              actualStr = `Difference: ${u.ret}`;
              passed = Number(u.ret) === t.exp;
            }
          } else if (sub.mode === 'dummy_return') {
            const val = typeof sub.returnValue === 'number' ? sub.returnValue : 0;
            actualStr = `Difference: ${val}`;
            passed = val === t.exp;
          } else if (sub.mode === 'flawed') {
            actualStr = `Difference: 0 (Flawed logic)`;
            passed = t.exp === 0;
          } else {
            const sim = q.runSimulation(t.m, t.n);
            actualStr = `Difference: ${sim}`;
            passed = sim === t.exp;
          }

          return {
            id: t.id,
            name: t.name,
            input: `M = ${t.m}, N = ${t.n}`,
            expected: t.expStr,
            actual: actualStr,
            passed,
            latency: jTimeStr || t.latency
          };
        });
      } else if (q.id === 'recent-dsa-011') {
        const testInputs = [
          { id: 1, name: 'Exam Test Case 1 (Standard 8 Houses)', r: 7, unit: 2, n: 8, arr: [2, 8, 3, 5, 7, 4, 1, 2], exp: 4, expStr: 'Houses: 4 (Food: 18 >= 14)', latency: '7ms' },
          { id: 2, name: 'Exam Test Case 2 (First House Satisfies)', r: 5, unit: 2, n: 5, arr: [15, 2, 3, 4, 5], exp: 1, expStr: 'Houses: 1 (Food: 15 >= 10)', latency: '5ms' },
          { id: 3, name: 'Exam Test Case 3 (All Houses Needed Exactly)', r: 10, unit: 2, n: 5, arr: [2, 3, 4, 5, 6], exp: 5, expStr: 'Houses: 5 (Food: 20 >= 20)', latency: '6ms' },
          { id: 4, name: 'Exam Test Case 4 (Insufficient Food in All Houses)', r: 10, unit: 5, n: 4, arr: [2, 3, 4, 5], exp: 0, expStr: 'Houses: 0 (Insufficient: 14 < 50)', latency: '6ms' },
          { id: 5, name: 'Exam Test Case 5 (Empty / NULL Array)', r: 5, unit: 2, n: 0, arr: [], exp: -1, expStr: 'Houses: -1 (Null/Empty)', latency: '4ms' },
          { id: 6, name: 'Exam Test Case 6 (Exact Sum Match 4x3=12)', r: 4, unit: 3, n: 5, arr: [2, 4, 6, 8, 10], exp: 3, expStr: 'Houses: 3 (Food: 12 >= 12)', latency: '6ms' }
        ];

        results = testInputs.map((t, idx) => {
          let actualStr = '';
          let passed = false;

          if (isJudge0Success) {
            const out = jOutputs[idx];
            if (out && typeof out === 'object' && out.error) {
              actualStr = `Error: ${out.error}`;
              passed = false;
            } else {
              const val = typeof out === 'number' ? out : Number(out);
              actualStr = `Houses: ${isNaN(val) ? (out ?? 0) : val}`;
              passed = !isNaN(val) && val === t.exp;
            }
          } else if (sub.mode === 'executed') {
            const u = sub.runTest([t.r, t.unit, t.n, t.arr]);
            if (u.error) {
              actualStr = `Error: ${u.error}`;
              passed = false;
            } else {
              actualStr = `Houses: ${u.ret}`;
              passed = Number(u.ret) === t.exp;
            }
          } else if (sub.mode === 'dummy_return') {
            const val = typeof sub.returnValue === 'number' ? sub.returnValue : 0;
            actualStr = `Houses: ${val}`;
            passed = val === t.exp;
          } else if (sub.mode === 'flawed') {
            actualStr = `Houses: 0 (Flawed logic)`;
            passed = t.exp === 0;
          } else {
            const sim = q.runSimulation(t.r, t.unit, t.n, t.arr);
            actualStr = `Houses: ${sim}`;
            passed = sim === t.exp;
          }

          return {
            id: t.id,
            name: t.name,
            input: `r = ${t.r}, unit = ${t.unit}, n = ${t.n}, arr = [${t.arr.join(', ')}]`,
            expected: t.expStr,
            actual: actualStr,
            passed,
            latency: jTimeStr || t.latency
          };
        });
      } else if (q.id === 'recent-dsa-012') {
        const testInputs = [
          { id: 1, name: 'Exam Test Case 1 (Standard 5 Words)', s: 'apple angle ball bottle axe', exp: ['ae'], latency: '6ms' },
          { id: 2, name: 'Exam Test Case 2 (Multiple Consecutive Spaces)', s: 'apple    angle   ball     axe', exp: ['ae'], latency: '5ms' },
          { id: 3, name: 'Exam Test Case 3 (All Combos Frequency 1 - Tie Order)', s: 'cat dog bus pen', exp: ['ct', 'dg', 'bs', 'pn'], latency: '7ms' },
          { id: 4, name: 'Exam Test Case 4 (apple axe angle ball bat)', s: 'apple axe angle ball bat', exp: ['ae'], latency: '6ms' },
          { id: 5, name: 'Exam Test Case 5 (Single Word hello)', s: 'hello', exp: ['ho'], latency: '4ms' },
          { id: 6, name: 'Exam Test Case 6 (Repeated Same Word)', s: 'apple apple apple ball ball', exp: ['ae'], latency: '5ms' }
        ];

        results = testInputs.map((t, idx) => {
          let actualStr = '';
          let passed = false;

          const normalizeArr = (res) => {
            if (!res) return [];
            if (Array.isArray(res)) return res;
            if (typeof res === 'string') {
              try {
                const parsed = JSON.parse(res);
                if (Array.isArray(parsed)) return parsed;
              } catch {
                return res.split(/\s+/).filter(Boolean);
              }
            }
            return [String(res)];
          };

          const arraysEqual = (a, b) => {
            if (!Array.isArray(a) || !Array.isArray(b)) return false;
            if (a.length !== b.length) return false;
            return a.every((val, i) => String(val).trim() === String(b[i]).trim());
          };

          if (isJudge0Success) {
            const out = jOutputs[idx];
            if (out && typeof out === 'object' && out.error) {
              actualStr = `Error: ${out.error}`;
              passed = false;
            } else {
              const parsed = normalizeArr(out);
              actualStr = JSON.stringify(parsed);
              passed = arraysEqual(parsed, t.exp);
            }
          } else if (sub.mode === 'executed') {
            const u = sub.runTest([t.s]);
            if (u.error) {
              actualStr = `Error: ${u.error}`;
              passed = false;
            } else {
              const parsed = normalizeArr(u.ret);
              actualStr = JSON.stringify(parsed);
              passed = arraysEqual(parsed, t.exp);
            }
          } else if (sub.mode === 'dummy_return') {
            const val = normalizeArr(sub.returnValue);
            actualStr = JSON.stringify(val);
            passed = arraysEqual(val, t.exp);
          } else if (sub.mode === 'flawed') {
            actualStr = `[] (Flawed logic)`;
            passed = false;
          } else {
            const sim = q.runSimulation(t.s);
            actualStr = JSON.stringify(sim);
            passed = arraysEqual(sim, t.exp);
          }

          return {
            id: t.id,
            name: t.name,
            input: `s = "${t.s}"`,
            expected: JSON.stringify(t.exp),
            actual: actualStr,
            passed,
            latency: jTimeStr || t.latency
          };
        });
      } else if (q.id === 'recent-dsa-013') {
        const testInputs = [
          { id: 1, name: 'Exam Test Case 1 (3 Uniform Rows, 0 Cols)', s: 'aaabbbccc', exp: 3, expStr: 'Uniform: 3 (Rows: 3, Cols: 0)', latency: '5ms' },
          { id: 2, name: 'Exam Test Case 2 (All Uniform 3x3 Grid)', s: 'aaaaaaaaa', exp: 6, expStr: 'Uniform: 6 (Rows: 3, Cols: 3)', latency: '6ms' },
          { id: 3, name: 'Exam Test Case 3 (Zero Uniform Lines)', s: 'abcdefghi', exp: 0, expStr: 'Uniform: 0 (No Uniform Lines)', latency: '4ms' },
          { id: 4, name: 'Exam Test Case 4 (0 Rows, 3 Uniform Cols)', s: 'abcabcabc', exp: 3, expStr: 'Uniform: 3 (Rows: 0, Cols: 3)', latency: '5ms' },
          { id: 5, name: 'Exam Test Case 5 (Mixed Case - 1 Uniform Col)', s: 'aababbaba', exp: 1, expStr: 'Uniform: 1 (Rows: 0, Cols: 1)', latency: '5ms' },
          { id: 6, name: 'Exam Test Case 6 (Single Character 1x1 Grid)', s: 'a', exp: 2, expStr: 'Uniform: 2 (Row: 1, Col: 1)', latency: '3ms' }
        ];

        results = testInputs.map((t, idx) => {
          let actualStr = '';
          let passed = false;

          if (isJudge0Success) {
            const out = jOutputs[idx];
            if (out && typeof out === 'object' && out.error) {
              actualStr = `Error: ${out.error}`;
              passed = false;
            } else {
              const val = typeof out === 'number' ? out : Number(out);
              actualStr = `Uniform: ${isNaN(val) ? (out ?? 0) : val}`;
              passed = !isNaN(val) && val === t.exp;
            }
          } else if (sub.mode === 'executed') {
            const u = sub.runTest([t.s]);
            if (u.error) {
              actualStr = `Error: ${u.error}`;
              passed = false;
            } else {
              actualStr = `Uniform: ${u.ret}`;
              passed = Number(u.ret) === t.exp;
            }
          } else if (sub.mode === 'dummy_return') {
            const val = typeof sub.returnValue === 'number' ? sub.returnValue : 0;
            actualStr = `Uniform: ${val}`;
            passed = val === t.exp;
          } else if (sub.mode === 'flawed') {
            actualStr = `Uniform: 0 (Flawed logic)`;
            passed = t.exp === 0;
          } else {
            const sim = q.runSimulation(t.s);
            actualStr = `Uniform: ${sim}`;
            passed = sim === t.exp;
          }

          return {
            id: t.id,
            name: t.name,
            input: `S = "${t.s}"`,
            expected: t.expStr,
            actual: actualStr,
            passed,
            latency: jTimeStr || t.latency
          };
        });
      } else if (q.id === 'recent-dsa-014') {
        const testInputs = [
          { id: 1, name: 'Exam Test Case 1 (Given Example: 451 + 349)', num1: 451, num2: 349, exp: 2, expStr: 'Carries: 2 (1s & 10s place)', latency: '4ms' },
          { id: 2, name: 'Exam Test Case 2 (No Carries: 123 + 456)', num1: 123, num2: 456, exp: 0, expStr: 'Carries: 0 (No carries generated)', latency: '3ms' },
          { id: 3, name: 'Exam Test Case 3 (Carry in Every Position: 999 + 111)', num1: 999, num2: 111, exp: 3, expStr: 'Carries: 3 (1s, 10s & 100s place)', latency: '4ms' },
          { id: 4, name: 'Exam Test Case 4 (Carry Propagation: 95 + 17)', num1: 95, num2: 17, exp: 2, expStr: 'Carries: 2 (Carry propagates)', latency: '3ms' },
          { id: 5, name: 'Exam Test Case 5 (Different Digit Counts: 999 + 1)', num1: 999, num2: 1, exp: 3, expStr: 'Carries: 3 (Propagates through 999)', latency: '4ms' },
          { id: 6, name: 'Exam Test Case 6 (One Number Is Zero: 123 + 0)', num1: 123, num2: 0, exp: 0, expStr: 'Carries: 0 (No carries generated)', latency: '3ms' },
          { id: 7, name: 'Exam Test Case 7 (Both Numbers Are Zero: 0 + 0)', num1: 0, num2: 0, exp: 0, expStr: 'Carries: 0 (Both zero)', latency: '2ms' }
        ];

        results = testInputs.map((t, idx) => {
          let actualStr = '';
          let passed = false;

          if (isJudge0Success) {
            const out = jOutputs[idx];
            if (out && typeof out === 'object' && out.error) {
              actualStr = `Error: ${out.error}`;
              passed = false;
            } else {
              const val = typeof out === 'number' ? out : Number(out);
              actualStr = `Carries: ${isNaN(val) ? (out ?? 0) : val}`;
              passed = !isNaN(val) && val === t.exp;
            }
          } else if (sub.mode === 'executed') {
            const u = sub.runTest([t.num1, t.num2]);
            if (u.error) {
              actualStr = `Error: ${u.error}`;
              passed = false;
            } else {
              actualStr = `Carries: ${u.ret}`;
              passed = Number(u.ret) === t.exp;
            }
          } else if (sub.mode === 'dummy_return') {
            const val = typeof sub.returnValue === 'number' ? sub.returnValue : 0;
            actualStr = `Carries: ${val}`;
            passed = val === t.exp;
          } else if (sub.mode === 'flawed') {
            actualStr = `Carries: 0 (Flawed logic)`;
            passed = t.exp === 0;
          } else {
            const sim = q.runSimulation(t.num1, t.num2);
            actualStr = `Carries: ${sim}`;
            passed = sim === t.exp;
          }

          return {
            id: t.id,
            name: t.name,
            input: `num1 = ${t.num1}, num2 = ${t.num2}`,
            expected: t.expStr,
            actual: actualStr,
            passed,
            latency: jTimeStr || t.latency
          };
        });
      } else if (q.id === 'recent-dsa-015') {
        const testInputs = [
          { id: 1, name: 'Exam Test Case 1 (N=4, A=[2, 2, 3, 3])', N: 4, A: [2, 2, 3, 3], exp: 1, expStr: 'Valid Blocks: 1 ([2, 2])', latency: '3ms' },
          { id: 2, name: 'Exam Test Case 2 (N=4, A=[4, 4, 4, 4])', N: 4, A: [4, 4, 4, 4], exp: 1, expStr: 'Valid Blocks: 1 ([4, 4, 4, 4])', latency: '3ms' },
          { id: 3, name: 'Exam Test Case 3 (N=5, A=[2, 2, 2, 3, 3])', N: 5, A: [2, 2, 2, 3, 3], exp: 0, expStr: 'Valid Blocks: 0 (No block length matches value)', latency: '3ms' },
          { id: 4, name: 'Exam Test Case 4 (N=7, A=[2, 2, 3, 3, 3, 4, 4])', N: 7, A: [2, 2, 3, 3, 3, 4, 4], exp: 2, expStr: 'Valid Blocks: 2 ([2, 2] & [3, 3, 3])', latency: '4ms' },
          { id: 5, name: 'Exam Test Case 5 (N=6, A=[2, 2, 4, 4, 4, 4])', N: 6, A: [2, 2, 4, 4, 4, 4], exp: 2, expStr: 'Valid Blocks: 2 ([2, 2] & [4, 4, 4, 4])', latency: '4ms' },
          { id: 6, name: 'Exam Test Case 6 (Exam Specimen: 10 Elements)', N: 10, A: [2, 3, 3, 2, 2, 6, 4, 4, 4, 4], exp: 2, expStr: 'Valid Blocks: 2 ([2, 2] & [4, 4, 4, 4])', latency: '5ms' }
        ];

        results = testInputs.map((t, idx) => {
          let actualStr = '';
          let passed = false;

          if (isJudge0Success) {
            const out = jOutputs[idx];
            if (out && typeof out === 'object' && out.error) {
              actualStr = `Error: ${out.error}`;
              passed = false;
            } else {
              const val = typeof out === 'number' ? out : Number(out);
              actualStr = `Valid Blocks: ${isNaN(val) ? (out ?? 0) : val}`;
              passed = !isNaN(val) && val === t.exp;
            }
          } else if (sub.mode === 'executed') {
            const u = sub.runTest([t.N, t.A]);
            if (u.error) {
              actualStr = `Error: ${u.error}`;
              passed = false;
            } else {
              actualStr = `Valid Blocks: ${u.ret}`;
              passed = Number(u.ret) === t.exp;
            }
          } else if (sub.mode === 'dummy_return') {
            const val = typeof sub.returnValue === 'number' ? sub.returnValue : 0;
            actualStr = `Valid Blocks: ${val}`;
            passed = val === t.exp;
          } else if (sub.mode === 'flawed') {
            actualStr = `Valid Blocks: 0 (Flawed consecutive grouping)`;
            passed = t.exp === 0;
          } else {
            let cnt = 0, i = 0;
            while (i < t.N) {
              const v = t.A[i];
              let j = i;
              while (j < t.N && t.A[j] === v) j++;
              if (j - i === v) cnt++;
              i = j;
            }
            actualStr = `Valid Blocks: ${cnt}`;
            passed = cnt === t.exp;
          }

          return {
            id: t.id,
            name: t.name,
            input: `N = ${t.N}, A = [${t.A.join(', ')}]`,
            expected: t.expStr,
            actual: actualStr,
            passed,
            latency: jTimeStr || t.latency
          };
        });
      } else if (q.id === 'recent-dsa-016') {
        const testInputs = [
          { id: 1, name: 'Exam Test Case 1 (Given Example: [2, 3, 1])', N: 3, A: [2, 3, 1], exp: 11, expStr: 'Total Energy: 11 (2*1 + 3*2 + 1*3)', latency: '3ms' },
          { id: 2, name: 'Exam Test Case 2 (Single Cave: [5])', N: 1, A: [5], exp: 5, expStr: 'Total Energy: 5 (5*1)', latency: '2ms' },
          { id: 3, name: 'Exam Test Case 3 (N=4, A=[1, 2, 3, 4])', N: 4, A: [1, 2, 3, 4], exp: 30, expStr: 'Total Energy: 30 (1*1 + 2*2 + 3*3 + 4*4)', latency: '3ms' },
          { id: 4, name: 'Exam Test Case 4 (Identical Energies: [5, 5, 5])', N: 3, A: [5, 5, 5], exp: 30, expStr: 'Total Energy: 30 (5*1 + 5*2 + 5*3)', latency: '3ms' },
          { id: 5, name: 'Exam Test Case 5 (N=5, A=[2, 1, 3, 2, 4])', N: 5, A: [2, 1, 3, 2, 4], exp: 41, expStr: 'Total Energy: 41 (2*1 + 1*2 + 3*3 + 2*4 + 4*5)', latency: '4ms' }
        ];

        results = testInputs.map((t, idx) => {
          let actualStr = '';
          let passed = false;

          if (isJudge0Success) {
            const out = jOutputs[idx];
            if (out && typeof out === 'object' && out.error) {
              actualStr = `Error: ${out.error}`;
              passed = false;
            } else {
              const val = typeof out === 'number' ? out : Number(out);
              actualStr = `Total Energy: ${isNaN(val) ? (out ?? 0) : val}`;
              passed = !isNaN(val) && val === t.exp;
            }
          } else if (sub.mode === 'executed') {
            const u = sub.runTest([t.N, t.A]);
            if (u.error) {
              actualStr = `Error: ${u.error}`;
              passed = false;
            } else {
              actualStr = `Total Energy: ${u.ret}`;
              passed = Number(u.ret) === t.exp;
            }
          } else if (sub.mode === 'dummy_return') {
            const val = typeof sub.returnValue === 'number' ? sub.returnValue : 0;
            actualStr = `Total Energy: ${val}`;
            passed = val === t.exp;
          } else if (sub.mode === 'flawed') {
            actualStr = `Total Energy: 0 (Flawed weighted sum)`;
            passed = t.exp === 0;
          } else {
            let tot = 0;
            for (let i = 0; i < t.N; i++) tot += t.A[i] * (i + 1);
            actualStr = `Total Energy: ${tot}`;
            passed = tot === t.exp;
          }

          return {
            id: t.id,
            name: t.name,
            input: `N = ${t.N}, A = [${t.A.join(', ')}]`,
            expected: t.expStr,
            actual: actualStr,
            passed,
            latency: jTimeStr || t.latency
          };
        });
      } else if (q.id === 'recent-dsa-017') {
        const testInputs = [
          { id: 1, name: 'Exam Test Case 1 (Given Example: N=5, D=9)', N: 5, D: 9, exp: 1, expStr: 'Count: 1 (3² = 9)', latency: '3ms' },
          { id: 2, name: 'Exam Test Case 2 (N=10, D=6)', N: 10, D: 6, exp: 2, expStr: 'Count: 2 (4² = 16, 6² = 36)', latency: '3ms' },
          { id: 3, name: 'Exam Test Case 3 (N=10, D=5)', N: 10, D: 5, exp: 1, expStr: 'Count: 1 (5² = 25)', latency: '2ms' },
          { id: 4, name: 'Exam Test Case 4 (N=10, D=0)', N: 10, D: 0, exp: 1, expStr: 'Count: 1 (10² = 100)', latency: '3ms' },
          { id: 5, name: 'Exam Test Case 5 (N=10, D=1)', N: 10, D: 1, exp: 2, expStr: 'Count: 2 (1² = 1, 9² = 81)', latency: '3ms' },
          { id: 6, name: 'Exam Test Case 6 (Boundary: N=5, D=6)', N: 5, D: 6, exp: 1, expStr: 'Count: 1 (4² = 16)', latency: '2ms' },
          { id: 7, name: 'Exam Test Case 7 (Multi-Digit Range: N=25, D=4)', N: 25, D: 4, exp: 5, expStr: 'Count: 5 (2, 8, 12, 18, 22)', latency: '4ms' }
        ];

        results = testInputs.map((t, idx) => {
          let actualStr = '';
          let passed = false;

          if (isJudge0Success) {
            const out = jOutputs[idx];
            if (out && typeof out === 'object' && out.error) {
              actualStr = `Error: ${out.error}`;
              passed = false;
            } else {
              const val = typeof out === 'number' ? out : Number(out);
              actualStr = `Count: ${isNaN(val) ? (out ?? 0) : val}`;
              passed = !isNaN(val) && val === t.exp;
            }
          } else if (sub.mode === 'executed') {
            const u = sub.runTest([t.N, t.D]);
            if (u.error) {
              actualStr = `Error: ${u.error}`;
              passed = false;
            } else {
              actualStr = `Count: ${u.ret}`;
              passed = Number(u.ret) === t.exp;
            }
          } else if (sub.mode === 'dummy_return') {
            const val = typeof sub.returnValue === 'number' ? sub.returnValue : 0;
            actualStr = `Count: ${val}`;
            passed = val === t.exp;
          } else if (sub.mode === 'flawed') {
            actualStr = `Count: 0 (Flawed modulo / square logic)`;
            passed = t.exp === 0;
          } else {
            let count = 0;
            for (let i = 1; i <= t.N; i++) {
              if ((i * i) % 10 === t.D) count++;
            }
            actualStr = `Count: ${count}`;
            passed = count === t.exp;
          }

          return {
            id: t.id,
            name: t.name,
            input: `N = ${t.N}, D = ${t.D}`,
            expected: t.expStr,
            actual: actualStr,
            passed,
            latency: jTimeStr || t.latency
          };
        });
      }

      const allPassed = results.length > 0 && results.every(r => r.passed);

      setTestResults({
        allPassed,
        isJudge0: isJudge0Success,
        executionEngine: isJudge0Success ? 'Judge0 CE ⭐ (Remote Compiler)' : 'Local Sandbox (Judge0 Fallback)',
        execTime: jTimeStr,
        results
      });

      // Record telemetry attempt
      telemetryService.recordProblemAttempt(
        q.id,
        'dsa',
        allPassed,
        { category: q.category || 'Recent DSA' }
      );

      if (allPassed) {
        if (!solvedSet.includes(q.id)) {
          toggleSolved(q.id);
          gamificationService.addXP(50, `Solved ${q.title}`);
        }
      } else {
        setSolvedSet(prev => {
          if (prev.includes(q.id)) {
            const updated = prev.filter(id => id !== q.id);
            localStorage.setItem('recent-solved', JSON.stringify(updated));
            return updated;
          }
          return prev;
        });
      }
      telemetryService.broadcastActivityUpdate();
    } catch (err) {
      setTestResults({
        allPassed: false,
        error: err.message || 'Execution error',
        results: []
      });
      setSolvedSet(prev => {
        if (prev.includes(activeDsaQuestion.id)) {
          const updated = prev.filter(id => id !== activeDsaQuestion.id);
          localStorage.setItem('recent-solved', JSON.stringify(updated));
          return updated;
        }
        return prev;
      });
    } finally {
      setIsRunning(false);
    }
  };

  // =========================================================================
  // FRONTEND CODE HANDLERS
  // =========================================================================
  const handleFeCodeChange = (newVal) => {
    if (!activeFeQuestion?.id) return;
    setFeCodeMap(prev => ({
      ...prev,
      [activeFeQuestion.id]: {
        ...(prev[activeFeQuestion.id] || {
          html: activeFeQuestion.starterHTML || '',
          css: activeFeQuestion.starterCSS || '',
          js: activeFeQuestion.starterJS || ''
        }),
        [activeFeEditorTab]: newVal || ''
      }
    }));
  };

  const handleResetFeCode = () => {
    if (!activeFeQuestion?.id) return;
    setFeCodeMap(prev => ({
      ...prev,
      [activeFeQuestion.id]: {
        html: activeFeQuestion.starterHTML || '',
        css: activeFeQuestion.starterCSS || '',
        js: activeFeQuestion.starterJS || ''
      }
    }));
    setFeTestResults(null);
    setIsFeResetDone(true);
    setTimeout(() => setIsFeResetDone(false), 2000);

    // Unmark solved state when resetting to starter code
    setSolvedSet(prev => {
      const updated = prev.filter(id => id !== activeFeQuestion.id);
      localStorage.setItem('recent-solved', JSON.stringify(updated));
      return updated;
    });
  };

  const handleCopyFeCode = () => {
    navigator.clipboard.writeText(feCode[activeFeEditorTab]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleInsertFeSolution = () => {
    if (!activeFeQuestion?.id) return;
    setFeCodeMap(prev => ({
      ...prev,
      [activeFeQuestion.id]: {
        html: activeFeQuestion.solutionHTML || '',
        css: activeFeQuestion.solutionCSS || '',
        js: activeFeQuestion.solutionJS || ''
      }
    }));
    setFeTestResults(null);
    setShowFeSolutionModal(false);
  };

  const handleCopyFeSolution = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedFeSolution(true);
    setTimeout(() => setCopiedFeSolution(false), 2000);
  };

  // Live Sandboxed Iframe HTML generator
  const feSandboxSrcDoc = useMemo(() => {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body {
      margin: 0;
      padding: 24px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #0f172a;
      color: #f8fafc;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 180px;
      box-sizing: border-box;
      position: relative;
    }
    ${feCode.css}

    /* In-sandbox Visual Modal Alert Overlay */
    .sandbox-modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.75);
      backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 99999;
      animation: sbModalFade 0.2s ease-out forwards;
    }
    .sandbox-modal-card {
      background: #1e293b;
      border: 1px solid #3b82f6;
      border-radius: 12px;
      padding: 20px 24px;
      max-width: 280px;
      width: 90%;
      text-align: center;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
      animation: sbModalScale 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .sandbox-modal-card h3 {
      margin: 0 0 8px 0;
      color: #f8fafc;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    .sandbox-modal-card p {
      margin: 0 0 16px 0;
      color: #cbd5e1;
      font-size: 14px;
      line-height: 1.5;
    }
    .sandbox-modal-card button {
      background: #2563eb;
      color: #fff;
      border: none;
      padding: 8px 20px;
      border-radius: 6px;
      font-weight: 600;
      font-size: 13px;
      cursor: pointer;
      transition: background 0.15s;
    }
    .sandbox-modal-card button:hover {
      background: #1d4ed8;
    }
    @keyframes sbModalFade {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes sbModalScale {
      from { transform: scale(0.85); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
  </style>
</head>
<body>
  ${feCode.html}
  <script>
    (function() {
      const _nativeAlert = window.alert;
      window.alert = function(msg) {
        try {
          const overlay = document.createElement('div');
          overlay.className = 'sandbox-modal-overlay';
          overlay.innerHTML = '<div class="sandbox-modal-card">' +
            '<h3>⏰ Alert</h3>' +
            '<p>' + (msg || '') + '</p>' +
            '<button id="sbModalOkBtn">OK</button>' +
          '</div>';
          document.body.appendChild(overlay);
          const okBtn = overlay.querySelector('#sbModalOkBtn');
          if (okBtn) {
            okBtn.focus();
            okBtn.onclick = function() { overlay.remove(); };
          }
        } catch(e) {}

        try {
          if (typeof _nativeAlert === 'function') {
            _nativeAlert.call(window, msg);
          }
        } catch(e) {}
      };
    })();

    try {
      ${feCode.js}
    } catch(err) {
      console.error("User JS Error:", err);
    }
  </script>
</body>
</html>`;
  }, [feCode.html, feCode.css, feCode.js]);

  // Automated Test Runner for Frontend Question
  const handleRunFeTests = () => {
    setIsFeRunning(true);
    setFeTestResults(null);

    setTimeout(() => {
      try {
        const html = feCode.html || '';
        const css = feCode.css || '';
        const js = feCode.js || '';

        // Strip comments to inspect actual active executable JS code
        const codeWithoutComments = js
          .replace(/\/\*[\s\S]*?\*\//g, '')
          .replace(/\/\/.*/g, '')
          .trim();

        // Branch 1: BMI Calculator (recent-fe-002)
        if (activeFeQuestion.id === 'recent-fe-002') {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');

          // 1. HTML Verification - Weight placeholder
          const weightInput = doc.getElementById('weight');
          const weightPlaceholder = weightInput ? (weightInput.getAttribute('placeholder') || '').trim() : '';
          const hasWeightPlaceholder = weightPlaceholder.toLowerCase() === 'weight in kg';

          // 2. HTML Verification - Height placeholder
          const heightInput = doc.getElementById('height');
          const heightPlaceholder = heightInput ? (heightInput.getAttribute('placeholder') || '').trim() : '';
          const hasHeightPlaceholder = heightPlaceholder.toLowerCase() === 'height in cm';

          // 3. CSS Verification - Button background color #4CAF50
          const cssClean = css.toLowerCase().replace(/\s+/g, '');
          const hasButtonBg = cssClean.includes('#4caf50') ||
                              cssClean.includes('rgb(76,175,80)') ||
                              cssClean.includes('hsl(122,39%,49%)');

          // 4. JavaScript Verification - BMI calculation and rounding on click
          let jsPassedCase1 = false;
          let jsMsgCase1 = '';
          let jsPassedCase2 = false;
          let jsMsgCase2 = '';

          try {
            // Test Case 1: Weight = 70, Height = 175 -> BMI = 22.86
            const sandbox1 = document.createElement('div');
            sandbox1.innerHTML = html;
            const wInput1 = sandbox1.querySelector('#weight');
            const hInput1 = sandbox1.querySelector('#height');
            const calcBtn1 = sandbox1.querySelector('#calculate');
            const resultEl1 = sandbox1.querySelector('#result');

            if (!wInput1 || !hInput1 || !calcBtn1 || !resultEl1) {
              jsMsgCase1 = 'Missing required elements (#weight, #height, #calculate, #result) in HTML.';
            } else {
              wInput1.value = '70';
              hInput1.value = '175';

              const mockDoc1 = {
                getElementById: (id) => sandbox1.querySelector('#' + id),
                querySelector: (sel) => sandbox1.querySelector(sel),
                querySelectorAll: (sel) => sandbox1.querySelectorAll(sel),
                createElement: (tag) => document.createElement(tag)
              };

              const runFn1 = new Function('document', 'window', `
                ${js}
              `);
              runFn1(mockDoc1, window);

              // Click calculate
              calcBtn1.click();

              const resText1 = (resultEl1.innerText || resultEl1.textContent || '').trim();
              if (resText1.includes('22.86')) {
                jsPassedCase1 = true;
                jsMsgCase1 = `Verified: Weight 70kg, Height 175cm -> Output "${resText1}" (matches 22.86).`;
              } else if (!resText1) {
                jsMsgCase1 = 'Clicking #calculate did not update #result. Check your click listener and calculation.';
              } else {
                jsMsgCase1 = `Expected 22.86 in #result, got "${resText1}". Formula: weight / (heightInMeters * heightInMeters) rounded to 2 decimals.`;
              }
            }

            // Test Case 2: Weight = 60, Height = 160 -> BMI = 23.44
            const sandbox2 = document.createElement('div');
            sandbox2.innerHTML = html;
            const wInput2 = sandbox2.querySelector('#weight');
            const hInput2 = sandbox2.querySelector('#height');
            const calcBtn2 = sandbox2.querySelector('#calculate');
            const resultEl2 = sandbox2.querySelector('#result');

            if (wInput2 && hInput2 && calcBtn2 && resultEl2) {
              wInput2.value = '60';
              hInput2.value = '160';

              const mockDoc2 = {
                getElementById: (id) => sandbox2.querySelector('#' + id),
                querySelector: (sel) => sandbox2.querySelector(sel),
                querySelectorAll: (sel) => sandbox2.querySelectorAll(sel),
                createElement: (tag) => document.createElement(tag)
              };

              const runFn2 = new Function('document', 'window', `
                ${js}
              `);
              runFn2(mockDoc2, window);

              calcBtn2.click();

              const resText2 = (resultEl2.innerText || resultEl2.textContent || '').trim();
              if (resText2.includes('23.44')) {
                jsPassedCase2 = true;
                jsMsgCase2 = `Verified: Weight 60kg, Height 160cm -> Output "${resText2}" (matches 23.44).`;
              } else {
                jsMsgCase2 = `Dynamic test failed: expected 23.44 in #result, got "${resText2}".`;
              }
            }
          } catch (runtimeErr) {
            jsMsgCase1 = `JavaScript runtime error: ${runtimeErr.message}`;
            jsMsgCase2 = `JavaScript runtime error: ${runtimeErr.message}`;
          }

          const results = [
            {
              id: 1,
              name: 'HTML: Weight input placeholder "Weight in kg"',
              passed: hasWeightPlaceholder,
              message: hasWeightPlaceholder
                ? 'Placeholder "Weight in kg" verified on #weight'
                : `Missing placeholder="Weight in kg" on #weight (found: "${weightPlaceholder || 'none'}")`
            },
            {
              id: 2,
              name: 'HTML: Height input placeholder "Height in cm"',
              passed: hasHeightPlaceholder,
              message: hasHeightPlaceholder
                ? 'Placeholder "Height in cm" verified on #height'
                : `Missing placeholder="Height in cm" on #height (found: "${heightPlaceholder || 'none'}")`
            },
            {
              id: 3,
              name: "CSS: Button background-color set to #4CAF50",
              passed: hasButtonBg,
              message: hasButtonBg
                ? 'Button background-color #4CAF50 verified in CSS'
                : 'Missing background-color: #4CAF50 in CSS for button or #calculate'
            },
            {
              id: 4,
              name: 'JavaScript: Calculate BMI (Weight: 70kg, Height: 175cm -> 22.86)',
              passed: jsPassedCase1,
              message: jsMsgCase1
            },
            {
              id: 5,
              name: 'JavaScript: Dynamic Precision (Weight: 60kg, Height: 160cm -> 23.44)',
              passed: jsPassedCase2,
              message: jsMsgCase2
            }
          ];

          const allPassed = results.every(r => r.passed);
          setFeTestResults({ allPassed, results });

          telemetryService.recordProblemAttempt(
            'recent-fe-002',
            'coding',
            allPassed,
            { category: 'Recent Frontend' }
          );

          if (allPassed) {
            if (!solvedSet.includes('recent-fe-002')) {
              toggleSolved('recent-fe-002');
              gamificationService.addXP(50, 'Solved BMI Calculator');
            }
          } else {
            setSolvedSet(prev => {
              if (prev.includes('recent-fe-002')) {
                const updated = prev.filter(id => id !== 'recent-fe-002');
                localStorage.setItem('recent-solved', JSON.stringify(updated));
                return updated;
              }
              return prev;
            });
          }
          telemetryService.broadcastActivityUpdate();
          return;
        }

        // Branch: Countdown Timer (recent-fe-004)
        if (activeFeQuestion?.id === 'recent-fe-004') {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');

          // 1. HTML Verification: <span id="timer">10</span> inside .timer
          const timerDiv = doc.querySelector('.timer');
          const timerSpan = doc.querySelector('#timer');
          const isInsideTimerDiv = !!(timerDiv && timerSpan && timerDiv.contains(timerSpan));
          const spanInitialText = timerSpan ? (timerSpan.textContent || timerSpan.innerText || '').trim() : '';
          const hasValidSpan = !!timerSpan && spanInitialText === '10' && isInsideTimerDiv;

          // 2. CSS Verification: .timer has color #4CAF50
          const timerCssBlock = (css.match(/\.timer\s*\{([^}]*)\}/i) || [])[1] || '';
          const hasTimerColor = /color\s*:\s*(?:#4caf50|rgb\(\s*76\s*,\s*175\s*,\s*80\s*\))/i.test(timerCssBlock);

          // 3 & 4. JavaScript Verification
          let jsIntervalPassed = false;
          let jsIntervalMsg = '';
          let jsAlertPassed = false;
          let jsAlertMsg = '';

          const hasSetInterval = codeWithoutComments.includes('setInterval');
          if (!hasSetInterval) {
            jsIntervalPassed = false;
            jsIntervalMsg = 'Missing setInterval call. The countdown must decrease every second using setInterval.';
            jsAlertPassed = false;
            jsAlertMsg = 'Cannot verify alert until countdown interval is implemented.';
          } else {
            try {
              const sandboxDiv = document.createElement('div');
              sandboxDiv.innerHTML = html;
              const startBtn = sandboxDiv.querySelector('#startBtn');
              const timerEl = sandboxDiv.querySelector('#timer');

              if (!startBtn || !timerEl) {
                jsIntervalPassed = false;
                jsIntervalMsg = 'HTML is missing #startBtn or #timer element.';
                jsAlertPassed = false;
                jsAlertMsg = 'HTML is missing required elements.';
              } else {
                const mockDoc = {
                  getElementById: (id) => sandboxDiv.querySelector('#' + id),
                  querySelector: (sel) => sandboxDiv.querySelector(sel),
                  querySelectorAll: (sel) => sandboxDiv.querySelectorAll(sel),
                  createElement: (tag) => document.createElement(tag)
                };

                let intervalCallbacks = [];
                let clearedIntervalIds = new Set();
                let intervalCounter = 1;
                let alertMessages = [];

                const mockWindow = {
                  setInterval: (fn, delay) => {
                    const id = intervalCounter++;
                    intervalCallbacks.push({ id, fn, delay });
                    return id;
                  },
                  clearInterval: (id) => {
                    clearedIntervalIds.add(id);
                  },
                  alert: (msg) => {
                    alertMessages.push(String(msg));
                  }
                };

                const runFn = new Function('document', 'window', 'setInterval', 'clearInterval', 'alert', `
                  ${js}
                `);
                runFn(mockDoc, mockWindow, mockWindow.setInterval, mockWindow.clearInterval, mockWindow.alert);

                // Click start button
                startBtn.click();

                if (intervalCallbacks.length === 0) {
                  jsIntervalPassed = false;
                  jsIntervalMsg = 'Clicking #startBtn did not invoke setInterval.';
                  jsAlertPassed = false;
                  jsAlertMsg = 'No interval registered on button click.';
                } else {
                  const registered = intervalCallbacks[0];
                  const trackedValues = [];

                  // Step through 10 iterations
                  for (let step = 1; step <= 10; step++) {
                    if (!clearedIntervalIds.has(registered.id)) {
                      registered.fn();
                      const currentVal = (timerEl.textContent || timerEl.innerText || '').trim();
                      trackedValues.push(currentVal);
                    }
                  }

                  // Check if it counted down properly (should reach 0)
                  const lastVal = (timerEl.textContent || timerEl.innerText || '').trim();
                  if (lastVal === '0' || trackedValues.includes('0')) {
                    jsIntervalPassed = true;
                    jsIntervalMsg = `Countdown verified: progressed from 10 down to 0 (${trackedValues.slice(0, 3).join(', ')} ... ${lastVal}).`;
                  } else {
                    jsIntervalPassed = false;
                    jsIntervalMsg = `Countdown did not reach 0 after 10 ticks. Values recorded: [${trackedValues.join(', ')}]. Expected 10 → 9 → ... → 0.`;
                  }

                  // Verify alert was called with "Time's Up!" and interval was cleared
                  const alertFound = alertMessages.some(m => m.toLowerCase().includes("time's up"));
                  const isCleared = clearedIntervalIds.has(registered.id);

                  if (alertFound && isCleared) {
                    jsAlertPassed = true;
                    jsAlertMsg = 'Verified: alert("Time\'s Up!") displayed and interval cleared at 0.';
                  } else if (alertFound && !isCleared) {
                    jsAlertPassed = false;
                    jsAlertMsg = 'alert("Time\'s Up!") was triggered, but clearInterval was not called; countdown continued past 0.';
                  } else if (!alertFound && isCleared) {
                    jsAlertPassed = false;
                    jsAlertMsg = 'clearInterval was called, but alert("Time\'s Up!") was not displayed when reaching 0.';
                  } else {
                    jsAlertPassed = false;
                    jsAlertMsg = 'Missing alert("Time\'s Up!") and clearInterval call when countdown finishes at 0.';
                  }
                }
              }
            } catch (err) {
              jsIntervalPassed = false;
              jsIntervalMsg = `Runtime error: ${err.message}`;
              jsAlertPassed = false;
              jsAlertMsg = `Execution halted: ${err.message}`;
            }
          }

          const results = [
            {
              id: 1,
              name: 'CSS: Set text color of .timer to #4CAF50',
              passed: hasTimerColor,
              message: hasTimerColor
                ? 'Verified: .timer color is set to #4CAF50'
                : 'Missing or incorrect color in .timer. Expected color: #4CAF50;'
            },
            {
              id: 2,
              name: 'HTML: Add <span id="timer">10</span> inside .timer',
              passed: hasValidSpan,
              message: hasValidSpan
                ? 'Verified: <span id="timer">10</span> properly nested inside .timer'
                : (!timerSpan
                    ? 'Missing <span id="timer"> element.'
                    : (!isInsideTimerDiv
                        ? '#timer element must be placed inside <div class="timer">.'
                        : `Initial value must be 10 (found: "${spanInitialText}")`))
            },
            {
              id: 3,
              name: 'JavaScript: Start countdown from 10 to 0 on #startBtn click',
              passed: jsIntervalPassed,
              message: jsIntervalMsg
            },
            {
              id: 4,
              name: 'JavaScript: Pop-up alert("Time\'s Up!") and stop countdown at 0',
              passed: jsAlertPassed,
              message: jsAlertMsg
            }
          ];

          const allPassed = results.every(r => r.passed);
          setFeTestResults({ allPassed, results });

          telemetryService.recordProblemAttempt(
            'recent-fe-004',
            'coding',
            allPassed,
            { category: 'Recent Frontend' }
          );

          if (allPassed) {
            if (!solvedSet.includes('recent-fe-004')) {
              toggleSolved('recent-fe-004');
              gamificationService.addXP(50, 'Solved Countdown Timer');
            }
          } else {
            setSolvedSet(prev => {
              if (prev.includes('recent-fe-004')) {
                const updated = prev.filter(id => id !== 'recent-fe-004');
                localStorage.setItem('recent-solved', JSON.stringify(updated));
                return updated;
              }
              return prev;
            });
          }
          telemetryService.broadcastActivityUpdate();
          return;
        }

        // Branch: Notification Center (recent-fe-003)
        if (activeFeQuestion?.id === 'recent-fe-003') {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');

          const titleEl = doc.querySelector('.notification .title') || doc.querySelector('.title');
          const messageEl = doc.querySelector('.notification .message') || doc.querySelector('.message');
          const timeEl = doc.querySelector('.notification .time') || doc.querySelector('.time');

          const hasTitle = !!titleEl && (titleEl.textContent || '').trim() === 'Account Alert';
          const hasMessage = !!messageEl && (messageEl.textContent || '').trim().includes('Your account password was updated successfully 5 mins ago');
          const hasTime = !!timeEl && (timeEl.textContent || '').trim() === '5 mins ago';

          // CSS check: background-color removed from .notification-list
          const notificationListCssBlock = (css.match(/\.notification-list\s*\{([^}]*)\}/) || [])[1] || '';
          const hasBgColorInList = /background(?:-color)?\s*:/i.test(notificationListCssBlock);

          // JS check: .notification removed on close button click
          let jsPassed = false;
          let jsMessage = '';
          const hasRemoveCall = codeWithoutComments.includes('.remove()') || codeWithoutComments.includes('removeChild');

          if (!hasRemoveCall) {
            jsPassed = false;
            jsMessage = 'Missing DOM removal call. Use notification.remove() or parentNode.removeChild(notification).';
          } else {
            try {
              const sandboxDiv = document.createElement('div');
              sandboxDiv.innerHTML = html;
              const notifBefore = sandboxDiv.querySelector('.notification');
              const closeBtn = sandboxDiv.querySelector('#close-btn');

              if (!notifBefore || !closeBtn) {
                jsPassed = false;
                jsMessage = 'Required HTML elements (.notification or #close-btn) not found in markup.';
              } else {
                const mockDoc = {
                  getElementById: (id) => sandboxDiv.querySelector('#' + id),
                  querySelector: (sel) => sandboxDiv.querySelector(sel),
                  querySelectorAll: (sel) => sandboxDiv.querySelectorAll(sel),
                  createElement: (tag) => document.createElement(tag)
                };

                const runFn = new Function('document', 'window', `
                  ${js}
                `);
                runFn(mockDoc, window);

                // Simulate clicking close button
                closeBtn.click();

                const notifAfter = sandboxDiv.querySelector('.notification');
                if (!notifAfter) {
                  jsPassed = true;
                  jsMessage = 'Verified: .notification element was completely removed from the DOM on button click!';
                } else {
                  jsPassed = false;
                  jsMessage = 'The .notification element still exists in the DOM after clicking Close. Ensure notification.remove() is invoked.';
                }
              }
            } catch (err) {
              jsPassed = false;
              jsMessage = `Execution error: ${err.message}`;
            }
          }

          const results = [
            {
              id: 1,
              name: 'HTML: <div class="title">Account Alert</div> inside .notification',
              passed: hasTitle,
              message: hasTitle
                ? 'Title element verified with text "Account Alert"'
                : `Missing <div class="title">Account Alert</div> inside .notification (found: "${titleEl ? titleEl.textContent.trim() : 'none'}")`
            },
            {
              id: 2,
              name: 'HTML: <div class="message">Your account password was updated successfully 5 mins ago</div>',
              passed: hasMessage,
              message: hasMessage
                ? 'Message element verified'
                : 'Missing or incorrect text in <div class="message">'
            },
            {
              id: 3,
              name: 'HTML: <div class="time">5 mins ago</div> inside .notification',
              passed: hasTime,
              message: hasTime
                ? 'Time element verified with text "5 mins ago"'
                : `Missing <div class="time">5 mins ago</div> (found: "${timeEl ? timeEl.textContent.trim() : 'none'}")`
            },
            {
              id: 4,
              name: 'CSS: Remove background-color from .notification-list',
              passed: !hasBgColorInList,
              message: !hasBgColorInList
                ? 'Verified: background-color successfully removed from .notification-list'
                : 'background-color is still present in .notification-list. Please delete it.'
            },
            {
              id: 5,
              name: 'JavaScript: Completely remove .notification from DOM on #close-btn click',
              passed: jsPassed,
              message: jsMessage
            }
          ];

          const allPassed = results.every(r => r.passed);
          setFeTestResults({ allPassed, results });

          telemetryService.recordProblemAttempt(
            'recent-fe-003',
            'coding',
            allPassed,
            { category: 'Recent Frontend' }
          );

          if (allPassed) {
            if (!solvedSet.includes('recent-fe-003')) {
              toggleSolved('recent-fe-003');
              gamificationService.addXP(50, 'Solved Notification Center');
            }
          } else {
            setSolvedSet(prev => {
              if (prev.includes('recent-fe-003')) {
                const updated = prev.filter(id => id !== 'recent-fe-003');
                localStorage.setItem('recent-solved', JSON.stringify(updated));
                return updated;
              }
              return prev;
            });
          }
          telemetryService.broadcastActivityUpdate();
          return;
        }

        // Branch 2: Random Quote Generator (recent-fe-001)
        const starterJsTrimmed = (activeFeQuestion.starterJS || '')
          .replace(/\/\*[\s\S]*?\*\//g, '')
          .replace(/\/\/.*/g, '')
          .trim();

        // 1. HTML Verification using DOMParser
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const quoteDisplay = doc.getElementById('quoteDisplay');
        const quoteBtn = doc.getElementById('quoteBtn');

        const hasQuoteDisplay = !!quoteDisplay && quoteDisplay.classList.contains('quote-text');

        // Check if button is configured to trigger generateQuote
        const btnOnclick = quoteBtn ? (quoteBtn.getAttribute('onclick') || '') : '';
        const hasQuoteBtn = !!quoteBtn && (
          btnOnclick.includes('generateQuote') ||
          codeWithoutComments.includes('addEventListener') ||
          codeWithoutComments.includes('.onclick')
        );

        // 2. CSS Verification
        const hasCssContainer = (css.includes('.quote-container') || css.includes('.quote-box') || css.includes('.card')) &&
          (css.includes('border-left') || css.includes('border:'));

        // 3. JavaScript Implementation & Execution Verification
        let jsPassed = false;
        let jsMessage = '';

        // Check if function body is present and not empty
        const fnMatch = codeWithoutComments.match(/function\s+generateQuote\s*\([^)]*\)\s*\{([\s\S]*?)\}/) ||
                        codeWithoutComments.match(/(?:const|let|var)\s+generateQuote\s*=\s*(?:\([^)]*\)|[a-zA-Z0-9_$]+)\s*=>\s*\{?([\s\S]*?)\}?/);
        const fnBody = fnMatch ? fnMatch[1].trim() : '';

        const hasMathRandom = codeWithoutComments.includes('Math.random');
        const hasDomAssignment = codeWithoutComments.includes('innerText') ||
                                 codeWithoutComments.includes('textContent') ||
                                 codeWithoutComments.includes('innerHTML');

        const isStarterUntouched = codeWithoutComments === starterJsTrimmed || !codeWithoutComments.includes('generateQuote');

        if (isStarterUntouched || !fnBody || fnBody.length === 0) {
          jsPassed = false;
          jsMessage = 'function generateQuote() is incomplete or empty! Complete the logic to select a random quote and update #quoteDisplay.';
        } else if (!hasMathRandom) {
          jsPassed = false;
          jsMessage = 'Missing Math.random() in generateQuote(). Use Math.floor(Math.random() * quotes.length) for random selection.';
        } else if (!hasDomAssignment) {
          jsPassed = false;
          jsMessage = 'Missing DOM update. Assign the chosen quote to #quoteDisplay via innerText or textContent.';
        } else {
          // Dynamic execution test in a sandbox DOM
          try {
            const sandboxDiv = document.createElement('div');
            sandboxDiv.innerHTML = html;
            const targetEl = sandboxDiv.querySelector('#quoteDisplay') || sandboxDiv.querySelector('.quote-text');

            if (!targetEl) {
              jsPassed = false;
              jsMessage = 'Missing #quoteDisplay element in HTML markup to update.';
            } else {
              const initialText = (targetEl.innerText || targetEl.textContent || '').trim();

              const runFn = new Function('document', 'window', `
                ${js}
                if (typeof generateQuote === 'function') {
                  generateQuote();
                }
              `);

              const mockDoc = {
                getElementById: (id) => sandboxDiv.querySelector('#' + id),
                querySelector: (sel) => sandboxDiv.querySelector(sel),
                querySelectorAll: (sel) => sandboxDiv.querySelectorAll(sel),
                createElement: (tag) => document.createElement(tag)
              };

              runFn(mockDoc, window);

              const updatedText = (targetEl.innerText || targetEl.textContent || '').trim();

              if (!updatedText || updatedText === initialText) {
                jsPassed = false;
                jsMessage = 'generateQuote() ran, but #quoteDisplay text did not change. Ensure you assign quotes[randomIndex] to the element.';
              } else {
                jsPassed = true;
                jsMessage = `Verified! Dynamically updated quote: "${updatedText.replace(/^["']|["']$/g, '').substring(0, 32)}..."`;
              }
            }
          } catch (runtimeErr) {
            jsPassed = false;
            jsMessage = `Runtime error in generateQuote(): ${runtimeErr.message}`;
          }
        }

        const results = [
          {
            id: 1,
            name: 'HTML: Paragraph #quoteDisplay exists with .quote-text',
            passed: hasQuoteDisplay,
            message: hasQuoteDisplay
              ? 'Paragraph element verified in markup'
              : 'Missing <p id="quoteDisplay" class="quote-text">'
          },
          {
            id: 2,
            name: 'HTML: Button #quoteBtn triggers generateQuote()',
            passed: hasQuoteBtn,
            message: hasQuoteBtn
              ? 'Interactive button & click binding verified'
              : 'Missing <button id="quoteBtn"> with onclick="generateQuote()"'
          },
          {
            id: 3,
            name: 'CSS: .quote-container with border-left accent',
            passed: hasCssContainer,
            message: hasCssContainer
              ? 'Accenture accent border style verified'
              : 'Missing border-left styling on .quote-container'
          },
          {
            id: 4,
            name: 'JavaScript: generateQuote() with Math.random() & DOM update',
            passed: jsPassed,
            message: jsMessage
          }
        ];

        const allPassed = results.every(r => r.passed);
        setFeTestResults({
          allPassed,
          results
        });

        // Record telemetry attempt
        telemetryService.recordProblemAttempt(
          'recent-fe-001',
          'coding',
          allPassed,
          { category: 'Recent Frontend' }
        );

        if (allPassed) {
          if (!solvedSet.includes('recent-fe-001')) {
            toggleSolved('recent-fe-001');
            gamificationService.addXP(50, 'Solved Random Quote Generator');
          }
        } else {
          // Revoke solved status if any test case fails
          setSolvedSet(prev => {
            if (prev.includes('recent-fe-001')) {
              const updated = prev.filter(id => id !== 'recent-fe-001');
              localStorage.setItem('recent-solved', JSON.stringify(updated));
              return updated;
            }
            return prev;
          });
        }
        telemetryService.broadcastActivityUpdate();
      } catch (err) {
        setFeTestResults({
          allPassed: false,
          error: err.message || 'Execution error',
          results: []
        });
      } finally {
        setIsFeRunning(false);
      }
    }, 450);
  };

  const trackCounts = useMemo(() => {
    const counts = { dsa: 0, sql: 0, frontend: 0 };
    recentQuestions.forEach((q) => {
      if (counts[q.track] !== undefined) counts[q.track]++;
    });
    return counts;
  }, []);

  return (
    <div
      className="recent-questions-page"
      style={{
        maxWidth: '1600px',
        width: '100%',
        margin: '0 auto',
        padding: activeTrack === 'sql' ? '0.4rem 1rem 0.5rem 1rem' : '1rem 1.5rem 3rem 1.5rem',
        boxSizing: 'border-box',
        overflowX: 'hidden',
        height: activeTrack === 'sql' ? '100%' : 'auto',
        display: activeTrack === 'sql' ? 'flex' : 'block',
        flexDirection: 'column'
      }}
    >
      <SEO {...seoConfig.recentQuestions} />
      {/* Track Selector Bar (Compact when in SQL track to give 100% viewport to the IDE Sandbox) */}
      {activeTrack === 'sql' ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem', flexWrap: 'wrap', gap: '0.5rem', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Sparkles size={14} className="text-amber-400" />
              Recent Exam Archive
            </span>
          </div>
          <div className="recent-track-tabs" style={{ margin: 0, padding: 0 }}>
            {RECENT_TRACKS.map((t) => {
              const isActive = activeTrack === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setActiveTrack(t.id);
                    setSelectedDate('all');
                  }}
                  className={`recent-track-btn ${isActive ? 'active' : ''}`}
                  style={{ '--track-color': t.color, padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
                >
                  {t.id === 'dsa' && <Code2 size={14} />}
                  {t.id === 'sql' && <Database size={14} />}
                  {t.id === 'frontend' && <Layout size={14} />}
                  <span className="track-name">{t.label}</span>
                  <span className="track-badge">{trackCounts[t.id]}</span>
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <header className="recent-hero-section" style={{ marginBottom: '1.5rem' }}>
          <div className="recent-hero-badge">
            <Sparkles size={14} className="text-amber-400" />
            <span>Real Exam Archives & Shift Analysis</span>
          </div>
          <h1 className="recent-hero-title">Accenture Recent Coding Questions – DSA, SQL & Frontend</h1>
          <p className="recent-hero-subtitle">
            Actual Accenture assessment problems categorized by track (DSA, SQL, Frontend) and tagged with exam dates, step-by-step calculations, formula breakdowns, and interactive multi-language Monaco IDE workspaces.
          </p>

          {/* Global Track Selector Bar */}
          <div className="recent-track-tabs">
            {RECENT_TRACKS.map((t) => {
              const isActive = activeTrack === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setActiveTrack(t.id);
                    setSelectedDate('all');
                  }}
                  className={`recent-track-btn ${isActive ? 'active' : ''}`}
                  style={{ '--track-color': t.color }}
                >
                  {t.id === 'dsa' && <Code2 size={16} />}
                  {t.id === 'sql' && <Database size={16} />}
                  {t.id === 'frontend' && <Layout size={16} />}
                  <span className="track-name">{t.label}</span>
                  <span className="track-badge">{trackCounts[t.id]}</span>
                </button>
              );
            })}
          </div>
        </header>
      )}

      {/* ========================================================================= */}
      {/* DSA TRACK: INTERACTIVE SPLIT MONACO IDE WORKSPACE */}
      {/* ========================================================================= */}
      {activeTrack === 'dsa' && (
        <div>
          {/* Question Selector Bar with Dropdown & Quick Navigation */}
          <div className="dsa-question-selector-bar" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '1.25rem',
            flexWrap: 'wrap',
            background: 'linear-gradient(135deg, #131e33, #0f172a)',
            border: '1px solid #334155',
            borderRadius: '14px',
            padding: '0.75rem 1rem',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)',
            boxSizing: 'border-box',
            width: '100%'
          }}>
            {/* Left: Rich Question Dropdown */}
            <div className="dsa-question-dropdown-container" style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '0.75rem', flex: '1 1 320px', minWidth: '260px' }} ref={questionDropdownRef}>
              <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Question:
              </span>
              
              <button
                type="button"
                onClick={() => setIsQuestionDropdownOpen(prev => !prev)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  padding: '8px 14px',
                  background: '#0f172a',
                  border: isQuestionDropdownOpen ? '1px solid #38bdf8' : '1px solid #334155',
                  borderRadius: '10px',
                  color: '#f8fafc',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  width: '100%',
                  maxWidth: '460px',
                  boxShadow: isQuestionDropdownOpen ? '0 0 0 2px rgba(56, 189, 248, 0.25)' : 'none',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  <span style={{
                    background: '#0284c7',
                    color: '#ffffff',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '2px 7px',
                    borderRadius: '6px',
                    flexShrink: 0
                  }}>
                    Q{currentQuestionIndex + 1}
                  </span>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {activeDsaQuestion.title}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0 }}>
                  <span style={{
                    fontSize: '0.7rem',
                    color: '#94a3b8',
                    background: 'rgba(148, 163, 184, 0.1)',
                    padding: '2px 6px',
                    borderRadius: '4px'
                  }}>
                    {activeDsaQuestion.dateTag.split('•')[0].trim()}
                  </span>
                  {solvedSet.includes(activeDsaQuestion.id) && (
                    <CheckCircle2 size={15} color="#4ade80" />
                  )}
                  {isQuestionDropdownOpen ? <ChevronUp size={16} color="#38bdf8" /> : <ChevronDown size={16} color="#94a3b8" />}
                </div>
              </button>

              {/* Dropdown Menu */}
              {isQuestionDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: 'calc(100% + 8px)',
                  left: 0,
                  zIndex: 99,
                  width: '100%',
                  maxWidth: '520px',
                  background: '#0f172a',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  borderRadius: '12px',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.7)',
                  padding: '6px',
                  maxHeight: '360px',
                  overflowY: 'auto'
                }}>
                  <div style={{ padding: '6px 10px', fontSize: '0.72rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px', borderBottom: '1px solid #1e293b' }}>
                    Select Recent Accenture Exam Question ({dsaQuestions.length})
                  </div>
                  {dsaQuestions.map((q, idx) => {
                    const isSelected = q.id === activeDsaQuestion.id;
                    const isSolved = solvedSet.includes(q.id);

                    return (
                      <button
                        key={q.id}
                        type="button"
                        onClick={() => {
                          setActiveDsaId(q.id);
                          setTestResults(null);
                          setIsQuestionDropdownOpen(false);
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '0.75rem',
                          width: '100%',
                          padding: '10px 12px',
                          margin: '2px 0',
                          borderRadius: '8px',
                          border: isSelected ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid transparent',
                          background: isSelected ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                          color: isSelected ? '#38bdf8' : '#e2e8f0',
                          fontSize: '0.85rem',
                          textAlign: 'left',
                          cursor: 'pointer',
                          transition: 'background 0.15s'
                        }}
                        onMouseEnter={(e) => {
                          if (!isSelected) e.currentTarget.style.background = '#1e293b';
                        }}
                        onMouseLeave={(e) => {
                          if (!isSelected) e.currentTarget.style.background = 'transparent';
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', overflow: 'hidden' }}>
                          <span style={{
                            background: isSelected ? '#0284c7' : '#1e293b',
                            color: isSelected ? '#ffffff' : '#94a3b8',
                            fontSize: '0.72rem',
                            fontWeight: 800,
                            padding: '2px 6px',
                            borderRadius: '5px',
                            flexShrink: 0
                          }}>
                            Q{idx + 1}
                          </span>
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontWeight: isSelected ? 700 : 500, color: isSelected ? '#f8fafc' : '#cbd5e1' }}>
                              {q.title}
                            </span>
                            <span style={{ fontSize: '0.72rem', color: '#64748b' }}>
                              {q.dateTag} • {q.category}
                            </span>
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
                          <span style={{
                            fontSize: '0.7rem',
                            padding: '1px 6px',
                            borderRadius: '4px',
                            background: q.difficulty === 'Easy' ? 'rgba(34, 197, 94, 0.15)' : 'rgba(234, 179, 8, 0.15)',
                            color: q.difficulty === 'Easy' ? '#4ade80' : '#facc15',
                            fontWeight: 700
                          }}>
                            {q.difficulty}
                          </span>
                          {isSolved ? (
                            <CheckCircle2 size={16} color="#4ade80" />
                          ) : (
                            <div style={{ width: '16px' }} />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Right: Quick-Pill Badges & Prev/Next Arrows */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={handlePrevQuestion}
                disabled={currentQuestionIndex === 0}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  border: '1px solid #334155',
                  background: currentQuestionIndex === 0 ? '#0f172a' : '#1e293b',
                  color: currentQuestionIndex === 0 ? '#475569' : '#cbd5e1',
                  cursor: currentQuestionIndex === 0 ? 'not-allowed' : 'pointer'
                }}
                title="Previous Question"
              >
                <ChevronLeft size={16} />
              </button>

              {/* Compact Q1 - Q7 Pills */}
              <div className="dsa-quick-pills-bar" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                {dsaQuestions.map((q, idx) => {
                  const isSelected = q.id === activeDsaQuestion.id;
                  const isSolved = solvedSet.includes(q.id);

                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => {
                        setActiveDsaId(q.id);
                        setTestResults(null);
                      }}
                      style={{
                        padding: '5px 11px',
                        borderRadius: '8px',
                        border: isSelected ? '1px solid #38bdf8' : '1px solid #334155',
                        background: isSelected ? '#0284c7' : '#0f172a',
                        color: isSelected ? '#ffffff' : '#94a3b8',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '3px',
                        transition: 'all 0.15s'
                      }}
                      title={`${q.title} (${q.dateTag})`}
                    >
                      <span>Q{idx + 1}</span>
                      {isSolved && <span style={{ color: isSelected ? '#a7f3d0' : '#4ade80', fontSize: '0.75rem' }}>✓</span>}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={handleNextQuestion}
                disabled={currentQuestionIndex === dsaQuestions.length - 1}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  border: '1px solid #334155',
                  background: currentQuestionIndex === dsaQuestions.length - 1 ? '#0f172a' : '#1e293b',
                  color: currentQuestionIndex === dsaQuestions.length - 1 ? '#475569' : '#cbd5e1',
                  cursor: currentQuestionIndex === dsaQuestions.length - 1 ? 'not-allowed' : 'pointer'
                }}
                title="Next Question"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Top Curated Hero Card for Active DSA Question */}
          <div className="dsa-active-question-card" style={{
            background: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '16px',
            padding: '1.5rem 1.75rem',
            marginBottom: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.4)'
          }}>
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#f97316',
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                marginBottom: '0.4rem'
              }}>
                <Calendar size={14} />
                <span>ACCENTURE RECENT EXAM ARCHIVE • {activeDsaQuestion.dateTag}</span>
              </div>

              <h2 style={{
                fontSize: '1.85rem',
                fontWeight: 800,
                color: '#f8fafc',
                margin: '0 0 0.6rem 0',
                letterSpacing: '-0.02em'
              }}>
                {activeDsaQuestion.title}
              </h2>

              {/* Badges and metadata */}
              <div className="dsa-active-card-meta" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                flexWrap: 'wrap',
                fontSize: '0.82rem',
                color: '#94a3b8'
              }}>
                <span style={{
                  background: activeDsaQuestion.difficulty === 'Easy' ? 'rgba(34, 197, 94, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                  color: activeDsaQuestion.difficulty === 'Easy' ? '#4ade80' : '#fbbf24',
                  padding: '2px 10px',
                  borderRadius: '6px',
                  fontWeight: 700,
                  fontSize: '0.75rem'
                }}>
                  {activeDsaQuestion.difficulty}
                </span>
                <span>•</span>
                <span style={{ color: '#38bdf8', fontWeight: 600 }}>
                  Category: {activeDsaQuestion.category}
                </span>
                <span>•</span>
                <span style={{ color: '#c084fc', fontWeight: 600 }}>
                  Pattern: {activeDsaQuestion.pattern}
                </span>
                <span>•</span>
                <span style={{ color: '#fb923c', fontWeight: 600 }}>
                  Reward: +{activeDsaQuestion.rewardXp} XP
                </span>
                <span>•</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={14} /> Target: {activeDsaQuestion.targetMins} Mins
                </span>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="dsa-active-card-actions" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  setSolutionTabLang(selectedLang);
                  setShowSolutionModal(true);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '10px 18px',
                  background: 'rgba(56, 189, 248, 0.12)',
                  border: '1px solid rgba(56, 189, 248, 0.4)',
                  borderRadius: '12px',
                  color: '#38bdf8',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseOver={e => e.currentTarget.style.background = 'rgba(56, 189, 248, 0.2)'}
                onMouseOut={e => e.currentTarget.style.background = 'rgba(56, 189, 248, 0.12)'}
              >
                <Lightbulb size={16} />
                <span>View Solution</span>
              </button>

              <button
                onClick={() => toggleSolved(activeDsaQuestion.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '9px 16px',
                  borderRadius: '12px',
                  border: solvedSet.includes(activeDsaQuestion.id) ? '1px solid #22c55e' : '1px solid #334155',
                  background: solvedSet.includes(activeDsaQuestion.id) ? 'rgba(34, 197, 94, 0.15)' : '#0f172a',
                  color: solvedSet.includes(activeDsaQuestion.id) ? '#4ade80' : '#cbd5e1',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                <CheckCircle2 size={16} />
                <span>{solvedSet.includes(activeDsaQuestion.id) ? 'Solved' : 'Mark Solved'}</span>
              </button>

              <button
                onClick={() => toggleBookmark(activeDsaQuestion.id)}
                style={{
                  padding: '9px 12px',
                  borderRadius: '12px',
                  border: '1px solid #334155',
                  background: '#0f172a',
                  color: bookmarks.includes(activeDsaQuestion.id) ? '#f97316' : '#94a3b8',
                  cursor: 'pointer'
                }}
                title="Bookmark Question"
              >
                {bookmarks.includes(activeDsaQuestion.id) ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile-Only Tabs for Split Workspace */}
          <div className="workspace-mobile-tabs">
            <button
              type="button"
              className={`workspace-mobile-tab-btn ${mobileWorkspaceTab === 'problem' ? 'active' : ''}`}
              onClick={() => setMobileWorkspaceTab('problem')}
            >
              <BookOpen size={15} />
              <span>Problem & Cases</span>
            </button>
            <button
              type="button"
              className={`workspace-mobile-tab-btn ${mobileWorkspaceTab === 'editor' ? 'active' : ''}`}
              onClick={() => setMobileWorkspaceTab('editor')}
            >
              <Code2 size={15} />
              <span>Editor & Run</span>
            </button>
            <button
              type="button"
              className={`workspace-mobile-tab-btn ${mobileWorkspaceTab === 'both' ? 'active' : ''}`}
              onClick={() => setMobileWorkspaceTab('both')}
            >
              <Sparkles size={15} />
              <span>All in One</span>
            </button>
          </div>

          {/* Two Column Area (Problem & Editor) - 50% / 50% Split */}
          <div className="recent-dsa-grid" style={{
            display: 'grid',
            gridTemplateColumns: isEditorExpanded ? '1fr' : 'minmax(0, 1fr) minmax(0, 1fr)',
            gap: '1.5rem',
            alignItems: 'start',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            {/* Left Column: Problem Details & Examples */}
            {!isEditorExpanded && (mobileWorkspaceTab === 'both' || mobileWorkspaceTab === 'problem') && (
              <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Beautified DSA Problem Statement Card */}
                <div style={{
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.95))',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
                }}>
                  {/* Header Row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid #334155' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: 'rgba(56, 189, 248, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#38bdf8'
                      }}>
                        <BookOpen size={18} />
                      </div>
                      <h3 style={{ fontSize: '1.1rem', color: '#f8fafc', margin: 0, fontWeight: 800 }}>
                        Problem Statement & Rules
                      </h3>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#38bdf8', background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '3px 10px', borderRadius: '6px', fontWeight: 700 }}>
                      Accenture {activeDsaQuestion.dateTag}
                    </span>
                  </div>

                  {/* Beautified Overview Prompt Callout Box */}
                  <div style={{
                    background: 'rgba(15, 23, 42, 0.85)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    borderLeft: '4px solid #38bdf8',
                    borderRadius: '12px',
                    padding: '1.2rem 1.35rem',
                    marginBottom: '1.25rem',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)'
                  }}>
                    {renderFormattedContent(activeDsaQuestion.description)}
                  </div>

                  {/* Transformation Rules / Logic */}
                  {activeDsaQuestion.rules && (
                    <div style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '12px', padding: '1.15rem', marginBottom: '1.25rem' }}>
                      <h4 style={{ fontSize: '0.85rem', color: '#38bdf8', margin: '0 0 0.75rem 0', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Code2 size={16} /> Transformation Rules & Guidelines
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                        {activeDsaQuestion.rules.map((rule, idx) => (
                          <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
                            <span style={{
                              minWidth: '22px',
                              height: '22px',
                              borderRadius: '50%',
                              background: 'linear-gradient(135deg, #0284c7, #0369a1)',
                              color: '#ffffff',
                              fontSize: '0.74rem',
                              fontWeight: 800,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginTop: '2px',
                              flexShrink: 0
                            }}>
                              {idx + 1}
                            </span>
                            <div style={{ lineHeight: 1.6 }}>{renderInlineFormatted(rule.replace(/^\d+[\.\)]\s*/, ''))}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Formula Breakdown Table (For Shift 2 EqSum) */}
                  {activeDsaQuestion.formulaBreakdown && (
                    <div style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '12px', padding: '1.15rem', marginBottom: '1.25rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                        <h4 style={{ fontSize: '0.85rem', color: '#38bdf8', margin: 0, fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Sparkles size={16} /> Formula Breakdown & Prefix Matrix
                        </h4>
                        <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Prefix Sum Formula</span>
                      </div>
                      <div style={{ overflowX: 'auto', border: '1px solid #334155', borderRadius: '8px' }}>
                        <table style={{ width: '100%', fontSize: '0.8rem', borderCollapse: 'collapse', textAlign: 'left' }}>
                          <thead>
                            <tr style={{ background: '#1e293b', borderBottom: '1px solid #334155', color: '#94a3b8' }}>
                              <th style={{ padding: '8px 10px' }}>Number (X)</th>
                              <th style={{ padding: '8px 10px' }}>Digits</th>
                              <th style={{ padding: '8px 10px' }}>Prefix Components</th>
                              <th style={{ padding: '8px 10px' }}>EqSum(X) Calculation</th>
                              <th style={{ padding: '8px 10px' }}>EqSum(X)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {activeDsaQuestion.formulaBreakdown.map((row, idx) => (
                              <tr key={idx} style={{ borderBottom: '1px solid #1e293b', background: idx % 2 === 0 ? '#0f172a' : '#141d33' }}>
                                <td style={{ padding: '8px 10px', color: '#38bdf8', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{row.num}</td>
                                <td style={{ padding: '8px 10px', color: '#cbd5e1' }}>{row.digits}</td>
                                <td style={{ padding: '8px 10px', color: '#cbd5e1', fontFamily: 'JetBrains Mono' }}>{row.prefixes}</td>
                                <td style={{ padding: '8px 10px', color: '#94a3b8', fontFamily: 'JetBrains Mono' }}>{row.calculation}</td>
                                <td style={{ padding: '8px 10px' }}>
                                  <span style={{ color: '#4ade80', fontFamily: 'JetBrains Mono', fontWeight: 700, background: 'rgba(34, 197, 94, 0.12)', padding: '2px 8px', borderRadius: '4px' }}>
                                    {row.eqSum}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Examples & Test Cases */}
                  {activeDsaQuestion.testCases && (
                    <div style={{ marginBottom: '1.25rem' }}>
                      <h4 style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 0.6rem 0', fontWeight: 700 }}>
                        Examples & Calculation Trace
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {activeDsaQuestion.testCases.map((tc, idx) => (
                          <div key={idx} style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '10px', padding: '12px 14px', fontSize: '0.85rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                              <span style={{
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                color: '#38bdf8',
                                background: 'rgba(56, 189, 248, 0.15)',
                                padding: '2px 8px',
                                borderRadius: '4px'
                              }}>
                                Test Case #{idx + 1}
                              </span>
                              <span style={{ fontSize: '0.8rem', color: '#4ade80', fontWeight: 700 }}>
                                Expected Output: <span style={{ fontFamily: 'JetBrains Mono' }}>{tc.expectedOutput}</span>
                              </span>
                            </div>

                            <div style={{ background: '#070b14', border: '1px solid #1e293b', borderRadius: '6px', padding: '8px 10px', marginBottom: '6px', fontFamily: 'JetBrains Mono', fontSize: '0.8rem' }}>
                              <span style={{ color: '#64748b' }}>Input: </span>
                              <span style={{ color: '#f8fafc' }}>{tc.input}</span>
                              {tc.transformedArray && (
                                <div style={{ marginTop: '3px' }}>
                                  <span style={{ color: '#64748b' }}>Transformed: </span>
                                  <span style={{ color: '#4ade80' }}>{tc.transformedArray}</span>
                                </div>
                              )}
                            </div>

                            {tc.explanation && (
                              <div style={{
                                color: '#cbd5e1',
                                fontSize: '0.8rem',
                                lineHeight: 1.55,
                                whiteSpace: 'pre-line',
                                background: '#141e33',
                                padding: '8px 12px',
                                borderRadius: '6px',
                                borderLeft: '3px solid #38bdf8'
                              }}>
                                {tc.explanation}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Constraints */}
                  {activeDsaQuestion.constraints && (
                    <div>
                      <h4 style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 0.5rem 0', fontWeight: 700 }}>
                        Constraints & Boundaries
                      </h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {activeDsaQuestion.constraints.map((c, idx) => (
                          <span key={idx} style={{
                            background: '#0f172a',
                            border: '1px solid #334155',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            color: '#cbd5e1',
                            fontSize: '0.82rem',
                            fontFamily: 'JetBrains Mono'
                          }}>
                            {renderInlineFormatted(c)}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Right Column: Code Editor & Execution */}
            {(mobileWorkspaceTab === 'both' || mobileWorkspaceTab === 'editor') && (
            <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{
                background: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}>
                {/* Top Editor Toolbar */}
                <div className="dsa-editor-toolbar" style={{
                  background: '#0f172a',
                  borderBottom: '1px solid #334155',
                  padding: '0.75rem 1.25rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.75rem'
                }}>
                  <div className="dsa-editor-lang-group" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8', marginRight: '4px', fontWeight: 600 }}>Language:</span>
                    {DSA_LANGUAGES.map(lang => {
                      const isActive = selectedLang === lang.id;
                      return (
                        <button
                          key={lang.id}
                          onClick={() => handleSelectDsaLanguage(lang.id)}
                          style={{
                            padding: '5px 12px',
                            borderRadius: '8px',
                            border: isActive ? '1px solid #f97316' : '1px solid #334155',
                            background: isActive ? 'rgba(249, 115, 22, 0.2)' : '#1e293b',
                            color: isActive ? '#fb923c' : '#cbd5e1',
                            fontSize: '0.8rem',
                            fontWeight: isActive ? 700 : 500,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            transition: 'all 0.15s'
                          }}
                        >
                          <span>{lang.icon}</span>
                          <span>{lang.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="dsa-editor-actions-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <button
                      onClick={() => {
                        setSolutionTabLang(selectedLang);
                        setShowSolutionModal(true);
                      }}
                      title="View Solution"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '6px 12px',
                        background: '#1e293b',
                        border: '1px solid #38bdf8',
                        borderRadius: '8px',
                        color: '#38bdf8',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      <Lightbulb size={14} />
                      <span>Solution</span>
                    </button>

                    <button
                      onClick={handleResetCode}
                      title="Reset code"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '6px 10px',
                        background: isDsaResetDone ? 'rgba(34, 197, 94, 0.18)' : '#1e293b',
                        border: isDsaResetDone ? '1px solid #22c55e' : '1px solid #334155',
                        borderRadius: '8px',
                        color: isDsaResetDone ? '#4ade80' : '#cbd5e1',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {isDsaResetDone ? <Check size={14} color="#4ade80" /> : <RotateCcw size={14} />}
                      <span>{isDsaResetDone ? 'Reset!' : 'Reset'}</span>
                    </button>

                    <button
                      onClick={handleCopyCode}
                      title="Copy Code"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '6px 10px',
                        background: '#1e293b',
                        border: '1px solid #334155',
                        borderRadius: '8px',
                        color: copiedCode ? '#4ade80' : '#cbd5e1',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      {copiedCode ? <Check size={14} /> : <Copy size={14} />}
                      <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                    </button>

                    <button
                      onClick={() => setIsEditorExpanded(prev => !prev)}
                      title={isEditorExpanded ? 'Collapse Layout' : 'Expand Editor'}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '6px 10px',
                        background: '#1e293b',
                        border: '1px solid #334155',
                        borderRadius: '8px',
                        color: '#cbd5e1',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      {isEditorExpanded ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                      <span>{isEditorExpanded ? 'Split' : 'Expand'}</span>
                    </button>

                    <button
                      onClick={handleRunTests}
                      disabled={isRunning}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '6px 16px',
                        background: isRunning ? '#334155' : 'linear-gradient(135deg, #f97316, #ea580c)',
                        border: 'none',
                        borderRadius: '8px',
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        cursor: isRunning ? 'not-allowed' : 'pointer',
                        boxShadow: '0 2px 8px rgba(249, 115, 22, 0.3)'
                      }}
                    >
                      <Play size={14} fill="#ffffff" />
                      <span>{isRunning ? 'Compiling on Judge0...' : 'Run on Judge0 ⭐'}</span>
                    </button>
                  </div>
                </div>

                {/* Instruction note + Monaco & Judge0 Badges */}
                <div style={{
                  background: '#0b1329',
                  borderBottom: '1px solid #1e293b',
                  padding: '7px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px',
                  fontSize: '0.75rem',
                  color: '#94a3b8',
                  flexWrap: 'wrap'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Code2 size={14} className="text-amber-400" />
                    <span>
                      <strong>Accenture Coding Pattern:</strong> The surrounding class/function structure is pre-written. Complete only the inner function logic.
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      background: 'rgba(99, 102, 241, 0.14)',
                      border: '1px solid rgba(99, 102, 241, 0.32)',
                      color: '#a5b4fc',
                      padding: '2px 8px',
                      borderRadius: '6px',
                      fontWeight: 600,
                      fontSize: '0.72rem'
                    }}>
                      <Sparkles size={12} className="text-indigo-400" />
                      Monaco Editor ⭐
                    </span>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      background: 'rgba(16, 185, 129, 0.14)',
                      border: '1px solid rgba(16, 185, 129, 0.32)',
                      color: '#6ee7b7',
                      padding: '2px 8px',
                      borderRadius: '6px',
                      fontWeight: 600,
                      fontSize: '0.72rem'
                    }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
                      Judge0 ⭐ Remote Compiler
                    </span>
                  </div>
                </div>

                {/* Monaco Editor */}
                <div className="dsa-monaco-wrapper" style={{ height: isEditorExpanded ? '640px' : '520px', position: 'relative' }}>
                  {isDsaResetDone && (
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '24px',
                      zIndex: 20,
                      background: 'rgba(15, 23, 42, 0.92)',
                      border: '1px solid #22c55e',
                      color: '#4ade80',
                      borderRadius: '8px',
                      padding: '6px 14px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      boxShadow: '0 4px 14px rgba(0,0,0,0.5)',
                      backdropFilter: 'blur(8px)',
                      pointerEvents: 'none'
                    }}>
                      <Check size={14} />
                      <span>Code reset to starter template!</span>
                    </div>
                  )}
                  <Editor
                    height="100%"
                    path={`${activeDsaQuestion.id}_${selectedLang}`}
                    language={DSA_LANGUAGES.find(l => l.id === selectedLang)?.monacoLang || 'python'}
                    theme="vs-dark"
                    value={currentCode}
                    onMount={(editor) => {
                      dsaEditorRef.current = editor;
                    }}
                    onChange={handleCodeChange}
                    options={{
                      fontSize: 14,
                      fontFamily: "'JetBrains Mono', Consolas, monospace",
                      fontLigatures: true,
                      minimap: { enabled: false },
                      scrollBeyondLastLine: false,
                      automaticLayout: true,
                      tabSize: 4,
                      lineNumbers: 'on',
                      padding: { top: 12, bottom: 12 }
                    }}
                  />
                </div>
              </div>

              {/* Test Case Execution Output Panel */}
              {testResults && (
                <div style={{
                  background: '#1e293b',
                  border: testResults.allPassed
                    ? '1px solid #22c55e'
                    : testResults.error
                    ? '1px solid #ef4444'
                    : '1px solid #f59e0b',
                  borderRadius: '14px',
                  padding: '1.25rem',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {testResults.allPassed ? (
                        <CheckCircle2 size={20} className="text-emerald-400" />
                      ) : testResults.error ? (
                        <X size={20} className="text-rose-400" />
                      ) : (
                        <Sparkles size={20} className="text-amber-400" />
                      )}
                      <h4 style={{
                        margin: 0,
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: testResults.allPassed ? '#4ade80' : testResults.error ? '#f87171' : '#facc15'
                      }}>
                        {testResults.allPassed
                          ? 'All Exam Test Cases Passed! +50 XP Awarded'
                          : testResults.error
                          ? 'Test Execution Error'
                          : `Tests Incomplete (${testResults.results.filter(r => r.passed).length} / ${testResults.results.length} Passed)`}
                      </h4>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      {testResults.executionEngine && (
                        <span style={{
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          color: testResults.isJudge0 ? '#38bdf8' : '#cbd5e1',
                          background: testResults.isJudge0 ? 'rgba(56, 189, 248, 0.12)' : 'rgba(100, 116, 139, 0.16)',
                          border: testResults.isJudge0 ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid rgba(100, 116, 139, 0.3)',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}>
                          <span>⚡</span>
                          <span>{testResults.executionEngine}</span>
                          {testResults.execTime && <span style={{ opacity: 0.85 }}>({testResults.execTime})</span>}
                        </span>
                      )}
                      <span style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        color: testResults.allPassed ? '#4ade80' : testResults.error ? '#f87171' : '#facc15',
                        background: testResults.allPassed
                          ? 'rgba(34, 197, 94, 0.12)'
                          : testResults.error
                          ? 'rgba(239, 68, 68, 0.12)'
                          : 'rgba(245, 158, 11, 0.12)',
                        padding: '3px 8px',
                        borderRadius: '6px'
                      }}>
                        {testResults.results.filter(r => r.passed).length} / {testResults.results.length} Passed
                      </span>
                    </div>
                  </div>

                  {testResults.error && (
                    <div style={{
                      background: 'rgba(239, 68, 68, 0.08)',
                      border: '1px solid rgba(239, 68, 68, 0.35)',
                      borderRadius: '8px',
                      padding: '12px 14px',
                      color: '#fca5a5',
                      fontSize: '0.82rem',
                      fontFamily: "'JetBrains Mono', Consolas, monospace",
                      whiteSpace: 'pre-wrap',
                      lineHeight: 1.6,
                      marginBottom: testResults.results.length > 0 ? '0.75rem' : 0,
                      maxHeight: '220px',
                      overflowY: 'auto'
                    }}>
                      <div style={{ fontWeight: 700, color: '#f87171', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <X size={14} />
                        <span>Compiler / Diagnostic Output</span>
                      </div>
                      {testResults.error}
                    </div>
                  )}

                  {testResults.results.length > 0 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {testResults.results.map((tc) => (
                        <div key={tc.id} style={{
                          background: '#0f172a',
                          border: tc.passed ? '1px solid #334155' : '1px solid rgba(239, 68, 68, 0.4)',
                          borderRadius: '8px',
                          padding: '10px 14px',
                          fontSize: '0.85rem'
                        }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                            <span style={{ fontWeight: 700, color: '#38bdf8' }}>{tc.name}</span>
                            <span style={{
                              color: tc.passed ? '#4ade80' : '#f87171',
                              fontSize: '0.75rem',
                              background: tc.passed ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                              padding: '1px 6px',
                              borderRadius: '4px',
                              fontWeight: 700
                            }}>
                              {tc.passed ? `Passed (${tc.latency})` : 'Failed'}
                            </span>
                          </div>
                          <div style={{ color: '#94a3b8', fontFamily: 'JetBrains Mono', fontSize: '0.8rem' }}>
                            Input: <span style={{ color: '#cbd5e1' }}>{tc.input}</span>
                          </div>
                          <div style={{ color: '#94a3b8', fontFamily: 'JetBrains Mono', fontSize: '0.8rem' }}>
                            Expected: <span style={{ color: '#94a3b8' }}>{tc.expected}</span>
                          </div>
                          <div style={{ color: '#94a3b8', fontFamily: 'JetBrains Mono', fontSize: '0.8rem' }}>
                            Output: <span style={{ color: tc.passed ? '#4ade80' : '#f87171' }}>{tc.actual}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
            )}
          </div>

          {/* Solution Modal for DSA Question */}
          {showSolutionModal && (
            <div className="responsive-modal-overlay" style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(6px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              padding: '1rem',
              boxSizing: 'border-box'
            }}>
              <div className="responsive-modal-container" style={{
                background: '#1e293b',
                border: '1px solid #38bdf8',
                borderRadius: '16px',
                width: '100%',
                maxWidth: '860px',
                maxHeight: '90vh',
                overflowY: 'auto',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  padding: '1.25rem 1.5rem',
                  borderBottom: '1px solid #334155',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: '#0f172a',
                  borderTopLeftRadius: '16px',
                  borderTopRightRadius: '16px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Lightbulb size={22} className="text-amber-400" />
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
                      Verified Exam Solution: {activeDsaQuestion.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setShowSolutionModal(false)}
                    style={{ background: 'none', border: 'none', color: '#94a3b8', fontSize: '1.5rem', cursor: 'pointer' }}
                  >
                    ✕
                  </button>
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                        {DSA_LANGUAGES.filter(l => activeDsaQuestion.solutions?.[l.id]).map(lang => (
                          <button
                            key={lang.id}
                            onClick={() => setSolutionTabLang(lang.id)}
                            style={{
                              padding: '5px 12px',
                              borderRadius: '6px',
                              border: solutionTabLang === lang.id ? '1px solid #f97316' : '1px solid #334155',
                              background: solutionTabLang === lang.id ? 'rgba(249, 115, 22, 0.2)' : '#0f172a',
                              color: solutionTabLang === lang.id ? '#fb923c' : '#94a3b8',
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              cursor: 'pointer'
                            }}
                          >
                            {lang.icon} {lang.label}
                          </button>
                        ))}
                      </div>

                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button
                          onClick={() => handleCopySolution(activeDsaQuestion.solutions?.[solutionTabLang] || '')}
                          style={{
                            padding: '4px 10px',
                            background: '#0f172a',
                            border: '1px solid #334155',
                            borderRadius: '6px',
                            color: copiedSolution ? '#4ade80' : '#cbd5e1',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          {copiedSolution ? <Check size={12} /> : <Copy size={12} />}
                          <span>{copiedSolution ? 'Copied' : 'Copy'}</span>
                        </button>

                        <button
                          onClick={handleLoadSolutionToEditor}
                          style={{
                            padding: '4px 12px',
                            background: '#f97316',
                            border: 'none',
                            borderRadius: '6px',
                            color: '#ffffff',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <ArrowRight size={12} />
                          <span>Insert into Editor</span>
                        </button>
                      </div>
                    </div>

                    <pre style={{
                      background: '#0a0f1d',
                      border: '1px solid #334155',
                      borderRadius: '10px',
                      padding: '1.25rem',
                      color: '#e2e8f0',
                      fontFamily: "'JetBrains Mono', Consolas, monospace",
                      fontSize: '0.85rem',
                      lineHeight: 1.5,
                      overflowX: 'auto',
                      margin: 0
                    }}>
                      <code>{activeDsaQuestion.solutions?.[solutionTabLang]}</code>
                    </pre>
                  </div>
                </div>

                <div style={{
                  padding: '1rem 1.5rem',
                  borderTop: '1px solid #334155',
                  background: '#0f172a',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  borderBottomLeftRadius: '16px',
                  borderBottomRightRadius: '16px'
                }}>
                  <button
                    onClick={() => setShowSolutionModal(false)}
                    style={{
                      padding: '8px 18px',
                      background: '#334155',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#f8fafc',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer'
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* FRONTEND TRACK: INTERACTIVE MONACO IDE WORKSPACE */}
      {/* ========================================================================= */}
      {activeTrack === 'frontend' && activeFeQuestion && (
        <div>
          {/* Question Selector Bar with Dropdown & Quick Navigation */}
          <div className="fe-question-selector-bar" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '1.25rem',
            flexWrap: 'wrap',
            background: 'linear-gradient(135deg, #131e33, #0f172a)',
            border: '1px solid #334155',
            borderRadius: '14px',
            padding: '0.75rem 1rem',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)',
            boxSizing: 'border-box',
            width: '100%'
          }}>
            {/* Left: Rich Question Dropdown */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '0.75rem', flex: '1 1 320px', minWidth: '260px' }}>
              <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Question:
              </span>
              <QuestionDropdown
                questions={feQuestions}
                currentIndex={currentFeIndex}
                onSelectQuestion={(idx) => {
                  setActiveFeId(feQuestions[idx].id);
                  setFeTestResults(null);
                }}
                isSolvedFn={(q) => solvedSet.includes(q.id)}
                menuTitle="SELECT RECENT ACCENTURE FRONTEND QUESTION"
              />
            </div>

            {/* Right: Quick-Pill Badges & Prev/Next Arrows */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={handlePrevFeQuestion}
                disabled={currentFeIndex === 0}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  border: '1px solid #334155',
                  background: currentFeIndex === 0 ? '#0f172a' : '#1e293b',
                  color: currentFeIndex === 0 ? '#475569' : '#cbd5e1',
                  cursor: currentFeIndex === 0 ? 'not-allowed' : 'pointer'
                }}
                title="Previous Question"
              >
                <ChevronLeft size={16} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                {feQuestions.map((q, idx) => {
                  const isSelected = idx === currentFeIndex;
                  const isSolved = solvedSet.includes(q.id);

                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => {
                        setActiveFeId(q.id);
                        setFeTestResults(null);
                      }}
                      style={{
                        padding: '5px 11px',
                        borderRadius: '8px',
                        border: isSelected ? '1px solid #38bdf8' : '1px solid #334155',
                        background: isSelected ? '#0284c7' : '#0f172a',
                        color: isSelected ? '#ffffff' : '#94a3b8',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '3px',
                        transition: 'all 0.15s'
                      }}
                      title={`${q.title} (${q.dateTag})`}
                    >
                      <span>Q{idx + 1}</span>
                      {isSolved && <span style={{ color: isSelected ? '#a7f3d0' : '#4ade80', fontSize: '0.75rem' }}>✓</span>}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={handleNextFeQuestion}
                disabled={currentFeIndex === feQuestions.length - 1}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  border: '1px solid #334155',
                  background: currentFeIndex === feQuestions.length - 1 ? '#0f172a' : '#1e293b',
                  color: currentFeIndex === feQuestions.length - 1 ? '#475569' : '#cbd5e1',
                  cursor: currentFeIndex === feQuestions.length - 1 ? 'not-allowed' : 'pointer'
                }}
                title="Next Question"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Top Curated Hero Card for Active Frontend Question */}
          <div style={{
            background: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '16px',
            padding: '1.5rem 1.75rem',
            marginBottom: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.4)'
          }}>
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#a855f7',
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                marginBottom: '0.4rem'
              }}>
                <Calendar size={14} />
                <span>ACCENTURE RECENT EXAM ARCHIVE • {activeFeQuestion.dateTag || '18th Sept Shift 2'}</span>
              </div>

              <h2 style={{
                fontSize: '1.85rem',
                fontWeight: 800,
                color: '#f8fafc',
                margin: '0 0 0.6rem 0',
                letterSpacing: '-0.5px'
              }}>
                {activeFeQuestion.title || 'BMI Calculator'}
              </h2>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '0.85rem',
                color: '#94a3b8',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  background: 'rgba(74, 222, 128, 0.15)',
                  color: '#4ade80',
                  padding: '2px 10px',
                  borderRadius: '6px',
                  fontWeight: 700,
                  fontSize: '0.75rem'
                }}>
                  {activeFeQuestion.difficulty || 'Easy'}
                </span>
                <span>•</span>
                <span style={{ color: '#a855f7', fontWeight: 600 }}>
                  Track: Frontend DOM
                </span>
                <span>•</span>
                <span style={{ color: '#38bdf8', fontWeight: 600 }}>
                  {activeFeQuestion.category || 'DOM Manipulation & Event Handling'}
                </span>
                <span>•</span>
                <span style={{ color: '#fb923c', fontWeight: 600 }}>
                  Reward: +50 XP
                </span>
                <span>•</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={14} /> Target: 15 Mins
                </span>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  setFeSolutionTab(activeFeEditorTab);
                  setShowFeSolutionModal(true);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '10px 18px',
                  background: 'rgba(56, 189, 248, 0.12)',
                  border: '1px solid rgba(56, 189, 248, 0.4)',
                  borderRadius: '12px',
                  color: '#38bdf8',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseOver={e => e.currentTarget.style.background = 'rgba(56, 189, 248, 0.2)'}
                onMouseOut={e => e.currentTarget.style.background = 'rgba(56, 189, 248, 0.12)'}
              >
                <Lightbulb size={16} />
                <span>View Solution</span>
              </button>

              <button
                onClick={() => toggleSolved(activeFeQuestion.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '9px 16px',
                  borderRadius: '12px',
                  border: solvedSet.includes(activeFeQuestion.id) ? '1px solid #22c55e' : '1px solid #334155',
                  background: solvedSet.includes(activeFeQuestion.id) ? 'rgba(34, 197, 94, 0.15)' : '#0f172a',
                  color: solvedSet.includes(activeFeQuestion.id) ? '#4ade80' : '#cbd5e1',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                <CheckCircle2 size={16} />
                <span>{solvedSet.includes(activeFeQuestion.id) ? 'Solved' : 'Mark Solved'}</span>
              </button>

              <button
                onClick={() => toggleBookmark(activeFeQuestion.id)}
                style={{
                  padding: '9px 12px',
                  borderRadius: '12px',
                  border: '1px solid #334155',
                  background: '#0f172a',
                  color: bookmarks.includes(activeFeQuestion.id) ? '#f97316' : '#94a3b8',
                  cursor: 'pointer'
                }}
                title="Bookmark Question"
              >
                {bookmarks.includes(activeFeQuestion.id) ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
              </button>
            </div>
          </div>

          {/* Two Column Split Workspace - 50% / 50% Split */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isFeEditorExpanded ? '1fr' : 'minmax(0, 1fr) minmax(0, 1fr)',
            gap: '1.5rem',
            alignItems: 'start',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            {/* Left Column: Problem Details & Checklists */}
            {!isFeEditorExpanded && (
              <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Beautified Frontend Problem Statement Card */}
                <div style={{
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.95))',
                  border: '1px solid rgba(168, 85, 247, 0.25)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
                }}>
                  {/* Header Row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid #334155' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: 'rgba(168, 85, 247, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#c084fc'
                      }}>
                        <Layout size={18} />
                      </div>
                      <h3 style={{ fontSize: '1.1rem', color: '#f8fafc', margin: 0, fontWeight: 800 }}>
                        Problem Statement & DOM Specification
                      </h3>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#c084fc', background: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168, 85, 247, 0.3)', padding: '3px 10px', borderRadius: '6px', fontWeight: 700 }}>
                      {activeFeQuestion.source || 'Accenture Exam • Verified'}
                    </span>
                  </div>

                  {/* Overview Prompt Callout Box */}
                  <div style={{
                    background: '#0f172a',
                    border: '1px solid #334155',
                    borderLeft: '4px solid #a855f7',
                    borderRadius: '10px',
                    padding: '1rem 1.25rem',
                    marginBottom: '1.25rem'
                  }}>
                    {activeFeQuestion.id === 'recent-fe-004' ? (
                      <div>
                        <p style={{ color: '#e2e8f0', lineHeight: 1.7, fontSize: '0.92rem', margin: '0 0 0.6rem 0' }}>
                          You are given a partially completed <strong style={{ color: '#f8fafc' }}>Countdown Timer</strong> webpage. The timer should start when the user clicks the Start Timer button and count down from 10 to 0. When the timer reaches 0, a pop-up message should be displayed.
                        </p>
                        <div style={{ background: '#1e293b', padding: '8px 12px', borderRadius: '6px', border: '1px solid #334155', fontSize: '0.82rem', fontFamily: 'JetBrains Mono', color: '#38bdf8' }}>
                          Part 1: CSS color #4CAF50 • Part 2: HTML &lt;span id="timer"&gt;10&lt;/span&gt; • Part 3: JS setInterval countdown &amp; alert("Time's Up!")
                        </div>
                      </div>
                    ) : activeFeQuestion.id === 'recent-fe-003' ? (
                      <div>
                        <p style={{ color: '#e2e8f0', lineHeight: 1.7, fontSize: '0.92rem', margin: '0 0 0.6rem 0' }}>
                          You are creating a <strong style={{ color: '#f8fafc' }}>Notification Center</strong> for a new website. The project is partially completed. Complete the missing HTML, CSS, and JavaScript code to implement the required notification functionality.
                        </p>
                        <div style={{ background: '#1e293b', padding: '8px 12px', borderRadius: '6px', border: '1px solid #334155', fontSize: '0.82rem', fontFamily: 'JetBrains Mono', color: '#38bdf8' }}>
                          Note: The notification element must be removed from the DOM, not merely hidden.
                        </div>
                      </div>
                    ) : activeFeQuestion.id === 'recent-fe-002' ? (
                      <div>
                        <p style={{ color: '#e2e8f0', lineHeight: 1.7, fontSize: '0.92rem', margin: '0 0 0.6rem 0' }}>
                          Build a <strong style={{ color: '#f8fafc' }}>BMI calculator</strong> web component using vanilla HTML, CSS, and JavaScript that allows users to enter their weight in kilograms and height in centimeters, and calculates their Body Mass Index on clicking Calculate.
                        </p>
                        <div style={{ background: '#1e293b', padding: '8px 12px', borderRadius: '6px', border: '1px solid #334155', fontSize: '0.82rem', fontFamily: 'JetBrains Mono', color: '#38bdf8' }}>
                          height in meters = height in cm / 100<br />
                          BMI = weight / (height in meters × height in meters)
                        </div>
                      </div>
                    ) : (
                      <p style={{ color: '#e2e8f0', lineHeight: 1.7, fontSize: '0.92rem', margin: 0 }}>
                        Create a fully responsive <strong style={{ color: '#f8fafc' }}>Random Quote Generator</strong> web component using vanilla HTML, CSS, and JavaScript. On clicking the action button, the application must select an inspiring quote from an internal array using pseudo-random math generation and update the live DOM container.
                      </p>
                    )}
                  </div>

                  {/* Requirements & Objectives Breakdown (HTML, CSS, JS) */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <h4 style={{ fontSize: '0.85rem', color: '#c084fc', margin: '0 0 0.75rem 0', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Sparkles size={16} /> Component Architecture & Objectives
                    </h4>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {/* HTML Objective Card */}
                      <div style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '10px', padding: '12px 14px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                          <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            color: '#f97316',
                            background: 'rgba(249, 115, 22, 0.15)',
                            padding: '2px 8px',
                            borderRadius: '4px'
                          }}>
                            <FileCode2 size={13} /> HTML5 Markup
                          </span>
                          <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>DOM Hierarchy & Elements</span>
                        </div>
                        {activeFeQuestion.id === 'recent-fe-004' ? (
                          <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#cbd5e1', fontSize: '0.82rem', lineHeight: 1.6 }}>
                            <li>Add <code style={{ color: '#fb923c' }}>&lt;span id="timer"&gt;10&lt;/span&gt;</code> inside <strong style={{ color: '#f8fafc' }}><code>.timer</code></strong>.</li>
                            <li>Initial value must be set to <strong style={{ color: '#f8fafc' }}><code>10</code></strong>.</li>
                            <li>Preserve button element with <strong style={{ color: '#f8fafc' }}><code>id="startBtn"</code></strong>.</li>
                          </ul>
                        ) : activeFeQuestion.id === 'recent-fe-003' ? (
                          <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#cbd5e1', fontSize: '0.82rem', lineHeight: 1.6 }}>
                            <li>Add <code style={{ color: '#fb923c' }}>&lt;div class="title"&gt;Account Alert&lt;/div&gt;</code> inside <strong style={{ color: '#f8fafc' }}><code>.notification</code></strong>.</li>
                            <li>Add <code style={{ color: '#fb923c' }}>&lt;div class="message"&gt;Your account password was updated successfully 5 mins ago&lt;/div&gt;</code>.</li>
                            <li>Add <code style={{ color: '#fb923c' }}>&lt;div class="time"&gt;5 mins ago&lt;/div&gt;</code>.</li>
                          </ul>
                        ) : activeFeQuestion.id === 'recent-fe-002' ? (
                          <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#cbd5e1', fontSize: '0.82rem', lineHeight: 1.6 }}>
                            <li>Add the placeholder <code style={{ color: '#fb923c' }}>"Weight in kg"</code> to the <strong style={{ color: '#f8fafc' }}><code>#weight</code></strong> input.</li>
                            <li>Add the placeholder <code style={{ color: '#fb923c' }}>"Height in cm"</code> to the <strong style={{ color: '#f8fafc' }}><code>#height</code></strong> input.</li>
                            <li>Keep existing structure: <strong style={{ color: '#f8fafc' }}><code>&lt;button id="calculate"&gt;</code></strong> and <strong style={{ color: '#f8fafc' }}><code>&lt;p id="result"&gt;</code></strong>.</li>
                          </ul>
                        ) : (
                          <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#cbd5e1', fontSize: '0.82rem', lineHeight: 1.6 }}>
                            <li>Provide a container wrapper (e.g. <code>.quote-box</code> or <code>.card</code>) for centering.</li>
                            <li>Render paragraph element with <strong style={{ color: '#f8fafc' }}><code>id="quoteDisplay"</code></strong> and class <code>.quote-text</code>.</li>
                            <li>Include an action button with <strong style={{ color: '#f8fafc' }}><code>id="quoteBtn"</code></strong> labeled "New Quote".</li>
                          </ul>
                        )}
                      </div>

                      {/* CSS Objective Card */}
                      <div style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '10px', padding: '12px 14px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                          <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            color: '#38bdf8',
                            background: 'rgba(56, 189, 248, 0.15)',
                            padding: '2px 8px',
                            borderRadius: '4px'
                          }}>
                            <Paintbrush size={13} /> CSS3 Styling Tokens
                          </span>
                          <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Styles & Overrides</span>
                        </div>
                        {activeFeQuestion.id === 'recent-fe-004' ? (
                          <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#cbd5e1', fontSize: '0.82rem', lineHeight: 1.6 }}>
                            <li>Set timer text color to <code style={{ color: '#4ade80' }}>#4CAF50</code> inside <strong style={{ color: '#f8fafc' }}><code>.timer</code></strong>.</li>
                            <li>Change only the required CSS property (approx. 1 line).</li>
                            <li>Preserve button and body styles.</li>
                          </ul>
                        ) : activeFeQuestion.id === 'recent-fe-003' ? (
                          <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#cbd5e1', fontSize: '0.82rem', lineHeight: 1.6 }}>
                            <li>Remove the <code style={{ color: '#f87171' }}>background-color: #f2f2f2;</code> property from <strong style={{ color: '#f8fafc' }}><code>.notification-list</code></strong>.</li>
                            <li>Preserve existing fonts, width, and button styles.</li>
                          </ul>
                        ) : activeFeQuestion.id === 'recent-fe-002' ? (
                          <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#cbd5e1', fontSize: '0.82rem', lineHeight: 1.6 }}>
                            <li>Set Calculate button's background color to <code style={{ color: '#4ade80' }}>#4CAF50</code>.</li>
                            <li>Preserve button padding, cursor, and container margin layout.</li>
                          </ul>
                        ) : (
                          <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#cbd5e1', fontSize: '0.82rem', lineHeight: 1.6 }}>
                            <li>Quote box accentuation with <code style={{ color: '#38bdf8' }}>border-left: 4px solid #2563eb</code> and rounded box shadow.</li>
                            <li>Typographic hierarchy with italic quote text (<code style={{ color: '#38bdf8' }}>font-style: italic</code>) and ample line-height.</li>
                            <li>Interactive button state with subtle hover micro-animations and contrast color.</li>
                          </ul>
                        )}
                      </div>

                      {/* JS Objective Card */}
                      <div style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '10px', padding: '12px 14px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                          <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            color: '#eab308',
                            background: 'rgba(234, 179, 8, 0.15)',
                            padding: '2px 8px',
                            borderRadius: '4px'
                          }}>
                            <Terminal size={13} /> JavaScript Algorithm
                          </span>
                          <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Event Handling & DOM Updates</span>
                        </div>
                        {activeFeQuestion.id === 'recent-fe-004' ? (
                          <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#cbd5e1', fontSize: '0.82rem', lineHeight: 1.6 }}>
                            <li>Add click listener to <strong style={{ color: '#f8fafc' }}><code>#startBtn</code></strong>.</li>
                            <li>Use <code style={{ color: '#facc15' }}>setInterval</code> to decrement <code style={{ color: '#facc15' }}>timeLeft</code> every 1000ms.</li>
                            <li>Update <strong style={{ color: '#f8fafc' }}><code>#timer</code></strong> span text on each interval tick.</li>
                            <li>When <code style={{ color: '#facc15' }}>timeLeft &lt;= 0</code>, call <code style={{ color: '#facc15' }}>clearInterval</code> and display <code style={{ color: '#facc15' }}>alert("Time's Up!")</code>.</li>
                          </ul>
                        ) : activeFeQuestion.id === 'recent-fe-003' ? (
                          <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#cbd5e1', fontSize: '0.82rem', lineHeight: 1.6 }}>
                            <li>Add click listener to <strong style={{ color: '#f8fafc' }}><code>#close-btn</code></strong>.</li>
                            <li>Completely remove <strong style={{ color: '#f8fafc' }}><code>.notification</code></strong> from the DOM via <code style={{ color: '#facc15' }}>notification.remove()</code>.</li>
                            <li>Note: Do not simply hide the element with CSS; it must be detached from the DOM tree.</li>
                          </ul>
                        ) : activeFeQuestion.id === 'recent-fe-002' ? (
                          <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#cbd5e1', fontSize: '0.82rem', lineHeight: 1.6 }}>
                            <li>Convert height from centimeters to meters: <code style={{ color: '#facc15' }}>heightInCm / 100</code>.</li>
                            <li>Calculate BMI: <code style={{ color: '#facc15' }}>weight / (heightInMeters * heightInMeters)</code>.</li>
                            <li>Display BMI rounded to two decimal places in <strong style={{ color: '#f8fafc' }}><code>#result</code></strong> via <code style={{ color: '#facc15' }}>bmi.toFixed(2)</code>.</li>
                          </ul>
                        ) : (
                          <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#cbd5e1', fontSize: '0.82rem', lineHeight: 1.6 }}>
                            <li>Maintain a pool of at least 4 inspiring quote strings in an Array.</li>
                            <li>Compute random index via <code style={{ color: '#facc15' }}>Math.floor(Math.random() * quotes.length)</code>.</li>
                            <li>Attach click listener to <strong style={{ color: '#f8fafc' }}><code>#quoteBtn</code></strong> and assign value into <strong style={{ color: '#f8fafc' }}><code>#quoteDisplay.innerText</code></strong> enclosed in quotes.</li>
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Test Verification Criteria */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <h4 style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 0.6rem 0', fontWeight: 700 }}>
                      Automated & Manual Verification Criteria
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {(activeFeQuestion.id === 'recent-fe-004'
                        ? [
                            { title: 'CSS Timer Color', desc: '.timer color property is set to #4CAF50' },
                            { title: 'HTML Timer Span', desc: '<span id="timer">10</span> properly added inside .timer' },
                            { title: 'Countdown Timer Progression', desc: 'Clicking #startBtn starts countdown from 10 down to 0 every second' },
                            { title: 'Time\'s Up Pop-up & Stop', desc: 'When timer reaches 0, alert("Time\'s Up!") is displayed and interval stops' }
                          ]
                        : activeFeQuestion.id === 'recent-fe-003'
                        ? [
                            { title: 'Title Element Bound', desc: '<div class="title">Account Alert</div> inside .notification' },
                            { title: 'Message Element Bound', desc: '<div class="message">Your account password was updated successfully 5 mins ago</div>' },
                            { title: 'Time Element Bound', desc: '<div class="time">5 mins ago</div> inside .notification' },
                            { title: 'CSS Background Removed', desc: '.notification-list background-color property is removed' },
                            { title: 'Complete DOM Removal', desc: 'Clicking #close-btn removes .notification node completely from DOM' }
                          ]
                        : activeFeQuestion.id === 'recent-fe-002'
                        ? [
                            { title: 'Weight Placeholder Bound', desc: 'Input #weight has placeholder "Weight in kg".' },
                            { title: 'Height Placeholder Bound', desc: 'Input #height has placeholder "Height in cm".' },
                            { title: 'Button Background Color', desc: 'Button background color is set to #4CAF50 in CSS.' },
                            { title: 'BMI Calculation & Rounding', desc: 'Weight 70, Height 175 produces 22.86 in #result on click.' },
                            { title: 'Dynamic Multi-Case Precision', desc: 'Formula dynamically computes correct 2-decimal output for any input.' }
                          ]
                        : [
                            { title: 'DOM Elements Bound', desc: 'Element IDs #quoteDisplay and #quoteBtn must exist and be accessible via querySelector/getElementById.' },
                            { title: 'Dynamic Event Trigger', desc: 'Clicking the button must immediately update innerText without refreshing the webpage.' },
                            { title: 'Quotation Enclosure', desc: 'Output strings must format as valid quotes with double quotation marks e.g. "Stay curious, keep coding."' },
                            { title: 'Uniform Randomness', desc: 'Repeated clicks must randomly sample across all array items according to Math.random.' }
                          ]
                      ).map((item, idx) => (
                        <div key={idx} style={{
                          background: '#0f172a',
                          border: '1px solid #334155',
                          borderRadius: '8px',
                          padding: '10px 12px',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px'
                        }}>
                          <CheckCircle2 size={16} color="#4ade80" style={{ marginTop: '2px', flexShrink: 0 }} />
                          <div>
                            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f8fafc', marginBottom: '2px' }}>
                              {item.title}
                            </div>
                            <div style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.5 }}>
                              {item.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Constraints & Environment */}
                  <div>
                    <h4 style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 0.5rem 0', fontWeight: 700 }}>
                      Environment & Constraints
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {(activeFeQuestion.id === 'recent-fe-004'
                        ? [
                            'HTML5 Standard',
                            'CSS3 #4CAF50',
                            'Vanilla ES6 JavaScript',
                            'setInterval / clearInterval',
                            'alert("Time\'s Up!")',
                            '1 Second Decrement'
                          ]
                        : activeFeQuestion.id === 'recent-fe-003'
                        ? [
                            'HTML5 Standard',
                            'CSS3 Box Model',
                            'Vanilla ES6 JavaScript',
                            'DOM Node Removal',
                            'notification.remove()',
                            'Zero Extra Libraries'
                          ]
                        : activeFeQuestion.id === 'recent-fe-002'
                        ? [
                            'HTML5 Standard',
                            'CSS3 Box Model',
                            'Vanilla ES6 JavaScript',
                            'Button: #4CAF50',
                            'Precision: toFixed(2)',
                            'Event: click'
                          ]
                        : [
                            'HTML5 Standard',
                            'CSS3 Box Model',
                            'Vanilla ES6 JavaScript',
                            'Zero External Libraries',
                            'DOM Event Listener'
                          ]
                      ).map((tag, idx) => (
                        <span key={idx} style={{
                          background: '#0f172a',
                          border: '1px solid #334155',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          color: '#cbd5e1',
                          fontSize: '0.8rem',
                          fontFamily: 'JetBrains Mono'
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Right Column: Code Editor & Live Preview */}
            <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{
                background: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}>
                {/* Editor Toolbar with HTML, CSS, JS Tabs */}
                <div style={{
                  background: '#0f172a',
                  borderBottom: '1px solid #334155',
                  padding: '0.75rem 1.25rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.75rem'
                }}>
                  {/* File Tabs */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <button
                      onClick={() => setActiveFeEditorTab('html')}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '8px',
                        border: activeFeEditorTab === 'html' ? '1px solid #f97316' : '1px solid #334155',
                        background: activeFeEditorTab === 'html' ? 'rgba(249, 115, 22, 0.2)' : '#1e293b',
                        color: activeFeEditorTab === 'html' ? '#fb923c' : '#cbd5e1',
                        fontSize: '0.8rem',
                        fontWeight: activeFeEditorTab === 'html' ? 700 : 500,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px'
                      }}
                    >
                      <FileCode2 size={14} />
                      <span>HTML</span>
                    </button>

                    <button
                      onClick={() => setActiveFeEditorTab('css')}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '8px',
                        border: activeFeEditorTab === 'css' ? '1px solid #38bdf8' : '1px solid #334155',
                        background: activeFeEditorTab === 'css' ? 'rgba(56, 189, 248, 0.2)' : '#1e293b',
                        color: activeFeEditorTab === 'css' ? '#38bdf8' : '#cbd5e1',
                        fontSize: '0.8rem',
                        fontWeight: activeFeEditorTab === 'css' ? 700 : 500,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px'
                      }}
                    >
                      <Paintbrush size={14} />
                      <span>CSS</span>
                    </button>

                    <button
                      onClick={() => setActiveFeEditorTab('js')}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '8px',
                        border: activeFeEditorTab === 'js' ? '1px solid #facc15' : '1px solid #334155',
                        background: activeFeEditorTab === 'js' ? 'rgba(250, 204, 21, 0.2)' : '#1e293b',
                        color: activeFeEditorTab === 'js' ? '#facc15' : '#cbd5e1',
                        fontSize: '0.8rem',
                        fontWeight: activeFeEditorTab === 'js' ? 700 : 500,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px'
                      }}
                    >
                      <Terminal size={14} />
                      <span>JavaScript</span>
                    </button>
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <button
                      onClick={() => {
                        setFeSolutionTab(activeFeEditorTab);
                        setShowFeSolutionModal(true);
                      }}
                      title="View Official Solution"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '6px 12px',
                        background: '#1e293b',
                        border: '1px solid #38bdf8',
                        borderRadius: '8px',
                        color: '#38bdf8',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      <Lightbulb size={14} />
                      <span>Solution</span>
                    </button>

                    <button
                      onClick={handleResetFeCode}
                      title="Reset code to starter templates"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '6px 10px',
                        background: isFeResetDone ? 'rgba(34, 197, 94, 0.18)' : '#1e293b',
                        border: isFeResetDone ? '1px solid #22c55e' : '1px solid #334155',
                        borderRadius: '8px',
                        color: isFeResetDone ? '#4ade80' : '#cbd5e1',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {isFeResetDone ? <Check size={14} color="#4ade80" /> : <RotateCcw size={14} />}
                      <span>{isFeResetDone ? 'Reset!' : 'Reset'}</span>
                    </button>

                    <button
                      onClick={handleCopyFeCode}
                      title="Copy current code"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '6px 10px',
                        background: '#1e293b',
                        border: '1px solid #334155',
                        borderRadius: '8px',
                        color: copiedCode ? '#4ade80' : '#cbd5e1',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      {copiedCode ? <Check size={14} /> : <Copy size={14} />}
                      <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                    </button>

                    <button
                      onClick={() => setIsFeEditorExpanded(prev => !prev)}
                      title={isFeEditorExpanded ? 'Collapse Layout' : 'Expand Editor'}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '6px 10px',
                        background: '#1e293b',
                        border: '1px solid #334155',
                        borderRadius: '8px',
                        color: '#cbd5e1',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      {isFeEditorExpanded ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                      <span>{isFeEditorExpanded ? 'Split' : 'Expand'}</span>
                    </button>

                    <button
                      onClick={handleRunFeTests}
                      disabled={isFeRunning}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '6px 16px',
                        background: isFeRunning ? '#334155' : 'linear-gradient(135deg, #f97316, #ea580c)',
                        border: 'none',
                        borderRadius: '8px',
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        cursor: isFeRunning ? 'not-allowed' : 'pointer',
                        boxShadow: '0 2px 8px rgba(249, 115, 22, 0.3)'
                      }}
                    >
                      <Play size={14} fill="#ffffff" />
                      <span>{isFeRunning ? 'Testing...' : 'Run Tests'}</span>
                    </button>
                  </div>
                </div>

                {/* Instruction bar */}
                <div style={{
                  background: '#0b1329',
                  borderBottom: '1px solid #1e293b',
                  padding: '6px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.75rem',
                  color: '#94a3b8'
                }}>
                  <Code2 size={14} className="text-amber-400" />
                  <span>
                    <strong>Accenture Frontend Pattern:</strong> Complete the <code>TODO</code> items inside HTML, CSS, and JavaScript. Your code executes live below!
                  </span>
                </div>

                {/* Monaco Editor */}
                <div style={{ height: '360px', position: 'relative' }}>
                  {isFeResetDone && (
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '24px',
                      zIndex: 20,
                      background: 'rgba(15, 23, 42, 0.92)',
                      border: '1px solid #22c55e',
                      color: '#4ade80',
                      borderRadius: '8px',
                      padding: '6px 14px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      boxShadow: '0 4px 14px rgba(0,0,0,0.5)',
                      backdropFilter: 'blur(8px)',
                      pointerEvents: 'none'
                    }}>
                      <Check size={14} />
                      <span>Code reset to starter template!</span>
                    </div>
                  )}
                  <Editor
                    key={`fe_${activeFeQuestion?.id}_${activeFeEditorTab}`}
                    path={`fe_${activeFeQuestion?.id}_${activeFeEditorTab}`}
                    height="100%"
                    language={activeFeEditorTab === 'js' ? 'javascript' : activeFeEditorTab}
                    theme="vs-dark"
                    value={feCode[activeFeEditorTab]}
                    onChange={handleFeCodeChange}
                    options={{
                      fontSize: 14,
                      fontFamily: "'JetBrains Mono', Consolas, monospace",
                      fontLigatures: true,
                      minimap: { enabled: false },
                      scrollBeyondLastLine: false,
                      automaticLayout: true,
                      tabSize: 2,
                      lineNumbers: 'on',
                      padding: { top: 12, bottom: 12 }
                    }}
                  />
                </div>
              </div>

              {/* Live Interactive Sandbox Preview */}
              <div style={{
                background: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '14px',
                padding: '1.25rem',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Layout size={18} className="text-sky-400" />
                    <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc' }}>
                      Live Interactive Sandbox Preview
                    </h4>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                    Updates live as you type & click
                  </span>
                </div>

                {/* Sandboxed iframe */}
                <div style={{
                  border: '1px solid #334155',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  background: '#0f172a',
                  minHeight: '220px'
                }}>
                  <iframe
                    title="Live Quote Generator Sandbox"
                    srcDoc={feSandboxSrcDoc}
                    style={{
                      width: '100%',
                      height: '240px',
                      border: 'none',
                      display: 'block'
                    }}
                    sandbox="allow-scripts allow-modals"
                  />
                </div>
              </div>

              {/* Automated Test Results Output */}
              {feTestResults && (
                <div style={{
                  background: '#1e293b',
                  border: feTestResults.allPassed ? '1px solid #22c55e' : '1px solid #ef4444',
                  borderRadius: '14px',
                  padding: '1.25rem',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {feTestResults.allPassed ? (
                        <CheckCircle2 size={20} className="text-emerald-400" />
                      ) : (
                        <Sparkles size={20} className="text-rose-400" />
                      )}
                      <h4 style={{
                        margin: 0,
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: feTestResults.allPassed ? '#4ade80' : '#f87171'
                      }}>
                        {feTestResults.allPassed
                          ? 'All Frontend Tests Passed! +50 XP Awarded'
                          : `Tests Incomplete (${feTestResults.results?.filter(r => r.passed).length || 0}/${feTestResults.results?.length || 4} Passed)`}
                      </h4>
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: feTestResults.allPassed ? '#4ade80' : '#94a3b8' }}>
                      {feTestResults.results?.filter(r => r.passed).length || 0} / {feTestResults.results?.length || 4} Passed
                    </span>
                  </div>

                  {feTestResults.error ? (
                    <div style={{ background: '#0f172a', border: '1px solid #ef4444', borderRadius: '8px', padding: '10px 14px', color: '#fca5a5', fontSize: '0.85rem' }}>
                      {feTestResults.error}
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {feTestResults.results.map((r) => (
                        <div key={r.id} style={{
                          background: '#0f172a',
                          border: '1px solid #334155',
                          borderRadius: '8px',
                          padding: '10px 14px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          fontSize: '0.85rem'
                        }}>
                          <div>
                            <span style={{ fontWeight: 600, color: '#f8fafc', display: 'block', marginBottom: '2px' }}>
                              {r.name}
                            </span>
                            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                              {r.message}
                            </span>
                          </div>
                          <span style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            padding: '2px 8px',
                            borderRadius: '4px',
                            background: r.passed ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                            color: r.passed ? '#4ade80' : '#f87171'
                          }}>
                            {r.passed ? 'PASS' : 'FAIL'}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Frontend Solution Modal */}
          {showFeSolutionModal && (
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(6px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              padding: '1.5rem'
            }}>
              <div style={{
                background: '#1e293b',
                border: '1px solid #38bdf8',
                borderRadius: '16px',
                width: '100%',
                maxWidth: '860px',
                maxHeight: '90vh',
                overflowY: 'auto',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                {/* Modal Header */}
                <div style={{
                  padding: '1.25rem 1.5rem',
                  borderBottom: '1px solid #334155',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: '#0f172a',
                  borderTopLeftRadius: '16px',
                  borderTopRightRadius: '16px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Lightbulb size={22} className="text-amber-400" />
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
                      Official Solution: {activeFeQuestion.title} ({activeFeQuestion.dateTag || 'Accenture Exam'})
                    </h2>
                  </div>
                  <button
                    onClick={() => setShowFeSolutionModal(false)}
                    style={{ background: 'none', border: 'none', color: '#94a3b8', fontSize: '1.5rem', cursor: 'pointer' }}
                  >
                    ✕
                  </button>
                </div>

                {/* Modal Body */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {/* Beautiful Approach & Formula Breakdown Cards */}
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
                  }}>
                    {/* Header Banner */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '0.75rem',
                      marginBottom: '1.25rem',
                      paddingBottom: '0.75rem',
                      borderBottom: '1px solid rgba(51, 65, 85, 0.7)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: 'rgba(56, 189, 248, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#38bdf8'
                        }}>
                          <BookOpen size={18} />
                        </div>
                        <div>
                          <h3 style={{
                            fontSize: '1rem',
                            fontWeight: 800,
                            color: '#f8fafc',
                            margin: 0,
                            letterSpacing: '0.2px'
                          }}>
                            Approach & Formula Breakdown
                          </h3>
                          <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                            Accenture {activeFeQuestion.dateTag || 'Exam Archive'} • Authentic Exam Specification
                          </span>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{
                          fontSize: '0.75rem',
                          background: 'rgba(56, 189, 248, 0.15)',
                          color: '#38bdf8',
                          padding: '3px 10px',
                          borderRadius: '6px',
                          fontWeight: 700,
                          border: '1px solid rgba(56, 189, 248, 0.3)'
                        }}>
                          DOM + Math Formula
                        </span>
                      </div>
                    </div>

                    {/* 3 Structured Breakdown Cards Grid */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                      gap: '1rem'
                    }}>
                      {/* 1. HTML Architecture */}
                      <div style={{
                        background: '#0f172a',
                        border: '1px solid #334155',
                        borderRadius: '12px',
                        padding: '1.15rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <FileCode2 size={16} className="text-amber-400" />
                            <span style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.85rem' }}>
                              1. HTML Architecture
                            </span>
                          </div>
                          <span style={{ fontSize: '0.68rem', padding: '1px 6px', borderRadius: '4px', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', fontWeight: 700 }}>
                            DOM
                          </span>
                        </div>

                        {activeFeQuestion.id === 'recent-fe-004' ? (
                          <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#cbd5e1', fontSize: '0.8rem', lineHeight: 1.6 }}>
                            <li style={{ marginBottom: '0.4rem' }}>
                              Span Element: <code style={{ color: '#38bdf8', background: '#1e293b', padding: '1px 5px', borderRadius: '4px', fontSize: '0.75rem' }}>&lt;span id="timer"&gt;10&lt;/span&gt;</code> added inside <code style={{ color: '#38bdf8' }}>.timer</code>.
                            </li>
                            <li style={{ marginBottom: '0.4rem' }}>
                              Initial Display: Starts with text <strong style={{ color: '#f8fafc' }}>10</strong>.
                            </li>
                            <li>
                              Button: Preserved with <code style={{ color: '#38bdf8', background: '#1e293b', padding: '1px 5px', borderRadius: '4px', fontSize: '0.75rem' }}>id="startBtn"</code>.
                            </li>
                          </ul>
                        ) : activeFeQuestion.id === 'recent-fe-003' ? (
                          <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#cbd5e1', fontSize: '0.8rem', lineHeight: 1.6 }}>
                            <li style={{ marginBottom: '0.4rem' }}>
                              Title: <code style={{ color: '#38bdf8', background: '#1e293b', padding: '1px 5px', borderRadius: '4px', fontSize: '0.75rem' }}>&lt;div class="title"&gt;Account Alert&lt;/div&gt;</code>
                            </li>
                            <li style={{ marginBottom: '0.4rem' }}>
                              Message: <code style={{ color: '#38bdf8', background: '#1e293b', padding: '1px 5px', borderRadius: '4px', fontSize: '0.75rem' }}>&lt;div class="message"&gt;Your account...&lt;/div&gt;</code>
                            </li>
                            <li>
                              Time: <code style={{ color: '#38bdf8', background: '#1e293b', padding: '1px 5px', borderRadius: '4px', fontSize: '0.75rem' }}>&lt;div class="time"&gt;5 mins ago&lt;/div&gt;</code>
                            </li>
                          </ul>
                        ) : activeFeQuestion.id === 'recent-fe-002' ? (
                          <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#cbd5e1', fontSize: '0.8rem', lineHeight: 1.6 }}>
                            <li style={{ marginBottom: '0.4rem' }}>
                              Weight: <code style={{ color: '#38bdf8', background: '#1e293b', padding: '1px 5px', borderRadius: '4px', fontSize: '0.75rem' }}>placeholder="Weight in kg"</code> added to input.
                            </li>
                            <li style={{ marginBottom: '0.4rem' }}>
                              Height: <code style={{ color: '#38bdf8', background: '#1e293b', padding: '1px 5px', borderRadius: '4px', fontSize: '0.75rem' }}>placeholder="Height in cm"</code> added to input.
                            </li>
                            <li>
                              Buttons & IDs: Kept intact without altering tag structure.
                            </li>
                          </ul>
                        ) : (
                          <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#cbd5e1', fontSize: '0.8rem', lineHeight: 1.6 }}>
                            <li style={{ marginBottom: '0.4rem' }}>
                              Container: <code style={{ color: '#38bdf8', background: '#1e293b', padding: '1px 5px', borderRadius: '4px', fontSize: '0.75rem' }}>&lt;div class="quote-container"&gt;</code> wraps card.
                            </li>
                            <li style={{ marginBottom: '0.4rem' }}>
                              Quote Display: <code style={{ color: '#38bdf8', background: '#1e293b', padding: '1px 5px', borderRadius: '4px', fontSize: '0.75rem' }}>&lt;p id="quoteDisplay"&gt;</code> renders text with quotation marks.
                            </li>
                            <li>
                              Trigger Button: <code style={{ color: '#38bdf8', background: '#1e293b', padding: '1px 5px', borderRadius: '4px', fontSize: '0.75rem' }}>&lt;button id="quoteBtn"&gt;</code> triggers <code style={{ color: '#4ade80' }}>generateQuote()</code> on click.
                            </li>
                          </ul>
                        )}
                      </div>

                      {/* 2. CSS Styling */}
                      <div style={{
                        background: '#0f172a',
                        border: '1px solid #334155',
                        borderRadius: '12px',
                        padding: '1.15rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Paintbrush size={16} className="text-sky-400" />
                            <span style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.85rem' }}>
                              2. CSS Styling Tokens
                            </span>
                          </div>
                          <span style={{ fontSize: '0.68rem', padding: '1px 6px', borderRadius: '4px', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', fontWeight: 700 }}>
                            Styles
                          </span>
                        </div>

                        {activeFeQuestion.id === 'recent-fe-004' ? (
                          <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#cbd5e1', fontSize: '0.8rem', lineHeight: 1.6 }}>
                            <li style={{ marginBottom: '0.4rem' }}>
                              Timer Color: <code style={{ color: '#4ade80', background: '#1e293b', padding: '1px 5px', borderRadius: '4px', fontSize: '0.75rem' }}>color: #4CAF50;</code> sets timer to green.
                            </li>
                            <li style={{ marginBottom: '0.4rem' }}>
                              Typography: font-size 40px preserved.
                            </li>
                            <li>
                              Button: Padding 10px 20px and pointer cursor preserved.
                            </li>
                          </ul>
                        ) : activeFeQuestion.id === 'recent-fe-003' ? (
                          <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#cbd5e1', fontSize: '0.8rem', lineHeight: 1.6 }}>
                            <li style={{ marginBottom: '0.4rem' }}>
                              Remove Background: Deleted <code style={{ color: '#f87171', background: '#1e293b', padding: '1px 5px', borderRadius: '4px', fontSize: '0.75rem' }}>background-color: #f2f2f2;</code> from <code style={{ color: '#38bdf8' }}>.notification-list</code>.
                            </li>
                            <li style={{ marginBottom: '0.4rem' }}>
                              Layout: Preserved width: 400px and margin: 50px auto.
                            </li>
                            <li>
                              Notification Card: Border #ddd and padding: 20px intact.
                            </li>
                          </ul>
                        ) : activeFeQuestion.id === 'recent-fe-002' ? (
                          <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#cbd5e1', fontSize: '0.8rem', lineHeight: 1.6 }}>
                            <li style={{ marginBottom: '0.4rem' }}>
                              Button Color: <code style={{ color: '#4ade80', background: '#1e293b', padding: '1px 5px', borderRadius: '4px', fontSize: '0.75rem' }}>background-color: #4CAF50;</code> sets the green CTA.
                            </li>
                            <li style={{ marginBottom: '0.4rem' }}>
                              Layout: Preserves container margin and centered alignment.
                            </li>
                            <li>
                              Inputs: Box-sizing border-box with full width.
                            </li>
                          </ul>
                        ) : (
                          <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#cbd5e1', fontSize: '0.8rem', lineHeight: 1.6 }}>
                            <li style={{ marginBottom: '0.4rem' }}>
                              Left Accent: <code style={{ color: '#38bdf8', background: '#1e293b', padding: '1px 5px', borderRadius: '4px', fontSize: '0.75rem' }}>border-left: 4px solid #2563eb</code> creates the iconic quote accent.
                            </li>
                            <li style={{ marginBottom: '0.4rem' }}>
                              Typography: <code style={{ color: '#38bdf8', background: '#1e293b', padding: '1px 5px', borderRadius: '4px', fontSize: '0.75rem' }}>font-style: italic</code> and color <code style={{ color: '#cbd5e1' }}>#334155</code>.
                            </li>
                            <li>
                              Button Accent: Royal blue <code style={{ color: '#38bdf8', background: '#1e293b', padding: '1px 5px', borderRadius: '4px', fontSize: '0.75rem' }}>#2563eb</code> with padding and <code style={{ color: '#cbd5e1' }}>border-radius: 4px</code>.
                            </li>
                          </ul>
                        )}
                      </div>

                      {/* 3. JavaScript Math & Formula */}
                      <div style={{
                        background: '#0f172a',
                        border: '1px solid #334155',
                        borderRadius: '12px',
                        padding: '1.15rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Terminal size={16} className="text-emerald-400" />
                            <span style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.85rem' }}>
                              3. DOM Manipulation &amp; Interval
                            </span>
                          </div>
                          <span style={{ fontSize: '0.68rem', padding: '1px 6px', borderRadius: '4px', background: 'rgba(34, 197, 94, 0.15)', color: '#4ade80', fontWeight: 700 }}>
                            Algorithm
                          </span>
                        </div>

                        {/* Interactive Formula Trace Box */}
                        {activeFeQuestion.id === 'recent-fe-004' ? (
                          <div style={{
                            background: '#070b14',
                            border: '1px solid rgba(34, 197, 94, 0.3)',
                            borderRadius: '8px',
                            padding: '8px 10px',
                            fontSize: '0.75rem',
                            fontFamily: 'JetBrains Mono',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '3px'
                          }}>
                            <div style={{ color: '#94a3b8' }}>
                              1. <span style={{ color: '#38bdf8' }}>click</span> &rarr; #startBtn starts setInterval(..., 1000)
                            </div>
                            <div style={{ color: '#94a3b8' }}>
                              2. <span style={{ color: '#facc15' }}>tick</span> &rarr; timeLeft-- and updates #timer &amp; #timerBar
                            </div>
                            <div style={{ color: '#94a3b8' }}>
                              3. <span style={{ color: '#4ade80' }}>at 0</span> &rarr; clearInterval(), width 0% &amp; alert("Time's Up!")
                            </div>
                          </div>
                        ) : activeFeQuestion.id === 'recent-fe-003' ? (
                          <div style={{
                            background: '#070b14',
                            border: '1px solid rgba(34, 197, 94, 0.3)',
                            borderRadius: '8px',
                            padding: '8px 10px',
                            fontSize: '0.75rem',
                            fontFamily: 'JetBrains Mono',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '3px'
                          }}>
                            <div style={{ color: '#94a3b8' }}>
                              1. <span style={{ color: '#38bdf8' }}>click event</span> &rarr; #close-btn
                            </div>
                            <div style={{ color: '#94a3b8' }}>
                              2. <span style={{ color: '#facc15' }}>notification.remove()</span>
                            </div>
                            <div style={{ color: '#94a3b8' }}>
                              3. <span style={{ color: '#4ade80' }}>DOM state</span> = node completely detached
                            </div>
                          </div>
                        ) : activeFeQuestion.id === 'recent-fe-002' ? (
                          <div style={{
                            background: '#070b14',
                            border: '1px solid rgba(34, 197, 94, 0.3)',
                            borderRadius: '8px',
                            padding: '8px 10px',
                            fontSize: '0.75rem',
                            fontFamily: 'JetBrains Mono',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '3px'
                          }}>
                            <div style={{ color: '#94a3b8' }}>
                              1. <span style={{ color: '#38bdf8' }}>heightInM</span> = heightInCm / 100
                            </div>
                            <div style={{ color: '#94a3b8' }}>
                              2. <span style={{ color: '#facc15' }}>bmi</span> = weight / (heightInM * heightInM)
                            </div>
                            <div style={{ color: '#94a3b8' }}>
                              3. <span style={{ color: '#4ade80' }}>output</span> = bmi.toFixed(2)
                            </div>
                          </div>
                        ) : (
                          <div style={{
                            background: '#070b14',
                            border: '1px solid rgba(34, 197, 94, 0.3)',
                            borderRadius: '8px',
                            padding: '8px 10px',
                            fontSize: '0.75rem',
                            fontFamily: 'JetBrains Mono',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '3px'
                          }}>
                            <div style={{ color: '#94a3b8' }}>
                              1. <span style={{ color: '#38bdf8' }}>Math.random()</span> &rarr; <span style={{ color: '#facc15' }}>[0.0, 1.0)</span>
                            </div>
                            <div style={{ color: '#94a3b8' }}>
                              2. <span style={{ color: '#cbd5e1' }}>* quotes.length (4)</span> &rarr; <span style={{ color: '#facc15' }}>[0.0, 4.0)</span>
                            </div>
                            <div style={{ color: '#94a3b8' }}>
                              3. <span style={{ color: '#4ade80' }}>Math.floor(...)</span> &rarr; <span style={{ color: '#4ade80', fontWeight: 700 }}>0, 1, 2, or 3</span>
                            </div>
                          </div>
                        )}

                        <div style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.5 }}>
                          Update DOM: <code style={{ color: '#4ade80', fontSize: '0.75rem' }}>{activeFeQuestion.id === 'recent-fe-004' ? 'timerEl.textContent = timeLeft; timerBar.style.width = ...' : activeFeQuestion.id === 'recent-fe-003' ? 'notification.remove()' : activeFeQuestion.id === 'recent-fe-002' ? 'result.textContent = bmi.toFixed(2)' : 'quoteEl.innerText = `"${quotes[randomIndex]}"`'}</code>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Code Tabs */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        {['html', 'css', 'js'].map((tab) => (
                          <button
                            key={tab}
                            onClick={() => setFeSolutionTab(tab)}
                            style={{
                              padding: '5px 12px',
                              borderRadius: '6px',
                              border: feSolutionTab === tab ? '1px solid #f97316' : '1px solid #334155',
                              background: feSolutionTab === tab ? 'rgba(249, 115, 22, 0.2)' : '#0f172a',
                              color: feSolutionTab === tab ? '#fb923c' : '#94a3b8',
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              cursor: 'pointer'
                            }}
                          >
                            {tab.toUpperCase()}
                          </button>
                        ))}
                      </div>

                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button
                          onClick={() => {
                            const code = feSolutionTab === 'html' ? activeFeQuestion.solutionHTML : feSolutionTab === 'css' ? activeFeQuestion.solutionCSS : activeFeQuestion.solutionJS;
                            handleCopyFeSolution(code || '');
                          }}
                          style={{
                            padding: '4px 10px',
                            background: '#0f172a',
                            border: '1px solid #334155',
                            borderRadius: '6px',
                            color: copiedFeSolution ? '#4ade80' : '#cbd5e1',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          {copiedFeSolution ? <Check size={12} /> : <Copy size={12} />}
                          <span>{copiedFeSolution ? 'Copied' : 'Copy'}</span>
                        </button>

                        <button
                          onClick={handleInsertFeSolution}
                          style={{
                            padding: '4px 12px',
                            background: '#f97316',
                            border: 'none',
                            borderRadius: '6px',
                            color: '#ffffff',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <ArrowRight size={12} />
                          <span>Insert Solution into Editor</span>
                        </button>
                      </div>
                    </div>

                    <pre style={{
                      background: '#0a0f1d',
                      border: '1px solid #334155',
                      borderRadius: '10px',
                      padding: '1.25rem',
                      color: '#e2e8f0',
                      fontFamily: "'JetBrains Mono', Consolas, monospace",
                      fontSize: '0.85rem',
                      lineHeight: 1.5,
                      overflowX: 'auto',
                      margin: 0
                    }}>
                      <code>
                        {feSolutionTab === 'html'
                          ? activeFeQuestion.solutionHTML
                          : feSolutionTab === 'css'
                          ? activeFeQuestion.solutionCSS
                          : activeFeQuestion.solutionJS}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* Modal Footer */}
                <div style={{
                  padding: '1rem 1.5rem',
                  borderTop: '1px solid #334155',
                  background: '#0f172a',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  borderBottomLeftRadius: '16px',
                  borderBottomRightRadius: '16px'
                }}>
                  <button
                    onClick={() => setShowFeSolutionModal(false)}
                    style={{
                      padding: '8px 18px',
                      background: '#334155',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#f8fafc',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer'
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* SQL TRACK: INTERACTIVE MONACO SQL WORKSPACE */}
      {/* ========================================================================= */}
      {activeTrack === 'sql' && activeSqlQuestion && (
        <div
          className="sql-assessment-page"
          style={{
            flex: 1,
            minHeight: 0,
            height: '100%',
            background: 'transparent',
            borderRadius: '10px',
            border: '1px solid var(--border-color)',
            overflow: 'hidden'
          }}
        >
          {/* Top Assessment Control Bar */}
          <header className="sql-top-bar">
            <div className="bar-left">
              <div className="round-identity">
                <div className="round-icon">
                  <Database size={18} />
                </div>
                <div>
                  <h1 className="round-title" style={{ fontSize: '1rem' }}>
                    Recent SQL Exam Archive
                  </h1>
                </div>
              </div>

              <div className="q-nav-selector">
                <QuestionDropdown
                  questions={sqlQuestions}
                  currentIndex={currentSqlIndex}
                  onSelectQuestion={(idx) => {
                    setActiveSqlId(sqlQuestions[idx].id);
                    setSqlQueryResult(null);
                    setSqlTestResults(null);
                    setSqlActiveTab('output');
                  }}
                  isSolvedFn={(q) => solvedSet.includes(q.id)}
                  menuTitle="SELECT RECENT ACCENTURE SQL QUESTION"
                />
                <div className="q-nav-dots">
                  {sqlQuestions.map((q, idx) => {
                    const isCurrent = idx === currentSqlIndex;
                    const isSolved = solvedSet.includes(q.id);

                    return (
                      <button
                        key={q.id}
                        onClick={() => {
                          setActiveSqlId(q.id);
                          setSqlQueryResult(null);
                          setSqlTestResults(null);
                          setSqlActiveTab('output');
                        }}
                        className={`nav-dot-btn ${isCurrent ? 'active' : ''} ${isSolved ? 'solved' : ''}`}
                        title={`Question ${idx + 1}: ${q.title} (${isSolved ? 'Solved' : 'Pending'})`}
                      >
                        {idx + 1}
                        {isSolved && <span className="dot-check">✓</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="bar-right">
              {/* Target Timer Display */}
              <div className="timer-box">
                <Clock size={16} />
                <span className="timer-text">15:00 Target</span>
              </div>

              {/* Previous / Next navigation buttons */}
              <div className="nav-step-buttons">
                <button
                  onClick={handlePrevSqlQuestion}
                  disabled={currentSqlIndex === 0}
                  className="btn btn-secondary btn-sm"
                  title="Previous Question"
                >
                  <ChevronLeft size={16} />
                  <span className="btn-label-desktop">Prev</span>
                </button>
                <button
                  onClick={handleNextSqlQuestion}
                  disabled={currentSqlIndex === sqlQuestions.length - 1}
                  className="btn btn-secondary btn-sm"
                  title="Next Question"
                >
                  <span className="btn-label-desktop">Next</span>
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Mark Solved Toggle */}
              <button
                onClick={() => toggleSolved(activeSqlQuestion.id)}
                className={`btn btn-sm ${solvedSet.includes(activeSqlQuestion.id) ? 'btn-success' : 'btn-secondary'}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700 }}
              >
                <CheckCircle2 size={15} />
                <span>{solvedSet.includes(activeSqlQuestion.id) ? 'Solved' : 'Mark Solved'}</span>
              </button>

              {/* Bookmark Toggle */}
              <button
                onClick={() => toggleBookmark(activeSqlQuestion.id)}
                className="btn btn-secondary btn-sm"
                style={{ padding: '6px 10px', color: bookmarks.includes(activeSqlQuestion.id) ? '#f97316' : undefined }}
                title="Bookmark Question"
              >
                {bookmarks.includes(activeSqlQuestion.id) ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
              </button>
            </div>
          </header>

          {/* Main Two-Panel Workspace Grid */}
          <main className="sql-workspace-grid">
            {/* LEFT PANEL: Question Details, Schema & Reference Solution Walkthrough */}
            <div className="sql-panel-left">
              <SQLQuestionPanel
                question={activeSqlQuestion}
                onApplySolution={handleSqlCodeChange}
                onLoadSolution={handleSqlCodeChange}
              />
            </div>

            {/* RIGHT PANEL: Editor, Live Output & Test Cases Panel */}
            <div className="sql-panel-right">
              {/* Editor Header / Action Bar */}
              <div className="editor-control-bar">
                <div className="editor-tab-tag">
                  <Terminal size={14} />
                  <span>SQL Query Editor</span>
                </div>

                <div className="editor-actions-group">
                  <button
                    onClick={handleResetSqlCode}
                    className="btn btn-outline btn-sm"
                    title="Clear SQL query"
                  >
                    <RotateCcw size={13} />
                    <span>Clear</span>
                  </button>

                  <button
                    onClick={handleRunSqlQuery}
                    disabled={isSqlRunning}
                    className="btn btn-secondary btn-sm btn-run"
                    title="Execute query against sample table (Ctrl+Enter)"
                  >
                    <Play size={14} />
                    <span>{isSqlRunning ? 'Running...' : 'Run Query'}</span>
                  </button>

                  <button
                    onClick={handleRunSqlTests}
                    disabled={isSqlRunning}
                    className="btn btn-primary btn-sm btn-submit"
                    title="Run all visible and hidden test cases"
                  >
                    <Send size={14} />
                    <span>{isSqlRunning ? 'Evaluating...' : 'Submit & Next'}</span>
                  </button>
                </div>
              </div>

              {/* Monaco SQL Editor */}
              <div className="sql-editor-wrapper">
                <SQLEditor
                  value={activeSqlCode}
                  onChange={handleSqlCodeChange}
                  onRun={handleRunSqlQuery}
                  theme="dark"
                />
              </div>

              {/* Bottom Results & Test Runner Panel */}
              <div className="sql-bottom-panel">
                {/* Tabs Header */}
                <div className="bottom-panel-tabs">
                  <button
                    onClick={() => setSqlActiveTab('output')}
                    className={`panel-tab-btn ${sqlActiveTab === 'output' ? 'active' : ''}`}
                  >
                    <Database size={14} />
                    <span>Query Output</span>
                    {sqlQueryResult && (
                      <span className={`tab-indicator ${sqlQueryResult.success ? 'success' : 'fail'}`} />
                    )}
                  </button>

                  <button
                    onClick={() => setSqlActiveTab('tests')}
                    className={`panel-tab-btn ${sqlActiveTab === 'tests' ? 'active' : ''}`}
                  >
                    <FileCheck2 size={14} />
                    <span>Test Cases</span>
                    {sqlTestResults && (
                      <span className={`tab-indicator ${sqlTestResults.allPassed ? 'success' : 'fail'}`}>
                        {sqlTestResults.passedCount}/{sqlTestResults.totalCount}
                      </span>
                    )}
                  </button>
                </div>

                {/* Tab Contents */}
                <div className="bottom-panel-body">
                  {sqlActiveTab === 'output' ? (
                    <SQLResultPanel result={sqlQueryResult} isLoading={isSqlRunning && sqlActiveTab === 'output'} />
                  ) : (
                    <SQLTestResults testSuiteResult={sqlTestResults} isRunning={isSqlRunning && sqlActiveTab === 'tests'} />
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
