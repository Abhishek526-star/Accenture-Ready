// src/pages/DsaPatternsPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  Clock,
  Database,
  Copy,
  Check,
  Search,
  ExternalLink,
  ChevronRight,
  BookOpen,
  ArrowLeft,
  CheckCircle2,
  Circle,
  Filter,
  Layers,
  Code2,
  Sparkles,
  ListOrdered
} from 'lucide-react';
import { dsaPatterns, DSA_CATEGORIES } from '../data/dsaPatterns.js';

export default function DsaPatternsPage({ theme = 'dark' }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedQuestionId, setSelectedQuestionId] = useState(dsaPatterns[0].id);
  const [copied, setCopied] = useState(false);
  
  // Solved state tracking in localStorage
  const [solvedIds, setSolvedIds] = useState(() => {
    try {
      const saved = localStorage.getItem('accenture_dsa_solved_questions');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleSolved = (id, e) => {
    if (e) e.stopPropagation();
    setSolvedIds(prev => {
      const updated = prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id];
      localStorage.setItem('accenture_dsa_solved_questions', JSON.stringify(updated));
      return updated;
    });
  };

  const filteredQuestions = dsaPatterns.filter(q => {
    const matchesCategory = selectedCategory === 'All' || q.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      q.title.toLowerCase().includes(query) ||
      q.name.toLowerCase().includes(query) ||
      q.category.toLowerCase().includes(query) ||
      q.qno.toString() === query ||
      `#${q.qno}` === query;
    return matchesCategory && matchesSearch;
  });

  const activeQuestion =
    dsaPatterns.find(q => q.id === selectedQuestionId) ||
    filteredQuestions[0] ||
    dsaPatterns[0];

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const solvedCount = solvedIds.length;
  const progressPercent = Math.round((solvedCount / dsaPatterns.length) * 100);

  return (
    <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      {/* Back to Learn Breadcrumb */}
      <div style={{ marginBottom: '1.25rem' }}>
        <Link to="/learn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#94a3b8', fontSize: '0.875rem', textDecoration: 'none' }}>
          <ArrowLeft size={16} /> Back to Learning Hub
        </Link>
      </div>

      {/* Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)',
        border: '1px solid rgba(56, 189, 248, 0.25)',
        borderRadius: '16px',
        padding: '2rem 2.25rem',
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.5rem',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.4)'
      }}>
        <div style={{ maxWidth: '800px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '4px 12px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            <Sparkles size={14} /> ACCENTURE DSA QUESTION SHEET • 49 CURATED PROBLEMS
          </div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 0.5rem 0' }}>
            DSA Question Sheet
          </h1>
          <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>
            Master the 49 must-solve questions across Pattern Printing, Arrays, Numbers, Strings, Recursion, and Implementations directly aligned with Accenture technical assessment patterns.
          </p>
        </div>

        {/* Progress Tracker Card */}
        <div style={{
          background: '#0f172a',
          border: '1px solid #334155',
          borderRadius: '14px',
          padding: '1.25rem 1.75rem',
          minWidth: '220px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Completion Progress</span>
            <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#38bdf8', fontFamily: 'JetBrains Mono' }}>
              {solvedCount} / {dsaPatterns.length}
            </span>
          </div>
          {/* Progress Bar */}
          <div style={{ width: '100%', height: '8px', background: '#1e293b', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{
              width: `${progressPercent}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #38bdf8, #22c55e)',
              transition: 'width 0.3s ease'
            }} />
          </div>
          <div style={{ fontSize: '0.75rem', color: '#64748b', textAlign: 'right' }}>
            {progressPercent}% Complete
          </div>
        </div>
      </div>

      {/* Category Pills Filter */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {DSA_CATEGORIES.map(cat => {
          const isActive = selectedCategory === cat;
          const count = cat === 'All' ? dsaPatterns.length : dsaPatterns.filter(q => q.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '6px 14px',
                borderRadius: '10px',
                border: isActive ? '1px solid #38bdf8' : '1px solid #334155',
                background: isActive ? 'rgba(56, 189, 248, 0.15)' : '#1e293b',
                color: isActive ? '#38bdf8' : '#cbd5e1',
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
                background: isActive ? '#0284c7' : '#0f172a',
                color: isActive ? '#ffffff' : '#94a3b8',
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

      {/* Main Two-Panel Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 420px) 1fr', gap: '1.5rem', alignItems: 'start' }}>
        {/* Left Sidebar List */}
        <div>
          {/* Search Box */}
          <div style={{ position: 'relative', marginBottom: '1rem' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
            <input
              type="text"
              placeholder="Search by title, #Qno, or category..."
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

          {/* Question Cards List */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.6rem',
            maxHeight: '750px',
            overflowY: 'auto',
            paddingRight: '6px'
          }}>
            {filteredQuestions.length === 0 ? (
              <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '12px', padding: '2rem', textAlign: 'center', color: '#94a3b8' }}>
                No questions found matching "{searchQuery}".
              </div>
            ) : (
              filteredQuestions.map((q) => {
                const isSelected = q.id === activeQuestion.id;
                const isSolved = solvedIds.includes(q.id);
                return (
                  <div
                    key={q.id}
                    onClick={() => setSelectedQuestionId(q.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      padding: '0.85rem 1rem',
                      background: isSelected ? 'rgba(56, 189, 248, 0.12)' : '#1e293b',
                      border: isSelected ? '1px solid #38bdf8' : '1px solid #334155',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.15s',
                      gap: '0.75rem'
                    }}
                  >
                    {/* Checkbox */}
                    <button
                      onClick={(e) => toggleSolved(q.id, e)}
                      title={isSolved ? 'Mark as unsolved' : 'Mark as solved'}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: isSolved ? '#4ade80' : '#64748b',
                        cursor: 'pointer',
                        padding: 0,
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {isSolved ? <CheckCircle2 size={18} /> : <Circle size={18} />}
                    </button>

                    {/* Title & Category */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '2px' }}>
                        <span style={{
                          fontSize: '0.75rem',
                          fontFamily: 'JetBrains Mono',
                          color: '#38bdf8',
                          fontWeight: 700,
                          background: 'rgba(56, 189, 248, 0.1)',
                          padding: '1px 6px',
                          borderRadius: '4px'
                        }}>
                          #{q.qno}
                        </span>
                        <span style={{
                          fontSize: '0.9rem',
                          fontWeight: 600,
                          color: isSelected ? '#38bdf8' : '#f8fafc',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          textDecoration: isSolved ? 'line-through' : 'none',
                          opacity: isSolved ? 0.75 : 1
                        }}>
                          {q.title}
                        </span>
                      </div>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                        {q.category}
                      </span>
                    </div>

                    {/* Right Arrow / Indicator */}
                    <span style={{
                      fontSize: '0.7rem',
                      padding: '2px 6px',
                      borderRadius: '6px',
                      background: q.difficulty === 'Easy' ? 'rgba(74, 222, 128, 0.15)' : 'rgba(250, 204, 21, 0.15)',
                      color: q.difficulty === 'Easy' ? '#4ade80' : '#facc15',
                      fontWeight: 600,
                      whiteSpace: 'nowrap'
                    }}>
                      {q.difficulty}
                    </span>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right Detail Panel */}
        <div style={{
          background: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.25)'
        }}>
          {/* Header Row */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '1.5rem',
            borderBottom: '1px solid #334155',
            paddingBottom: '1.25rem'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <span style={{
                  fontSize: '0.8rem',
                  fontFamily: 'JetBrains Mono',
                  background: 'rgba(56, 189, 248, 0.15)',
                  color: '#38bdf8',
                  padding: '2px 8px',
                  borderRadius: '6px',
                  fontWeight: 700
                }}>
                  Question #{activeQuestion.qno}
                </span>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600 }}>
                  {activeQuestion.category}
                </span>
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 0.5rem 0' }}>
                {activeQuestion.title}
              </h2>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
              {/* Toggle Solved Button */}
              <button
                onClick={() => toggleSolved(activeQuestion.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  border: solvedIds.includes(activeQuestion.id) ? '1px solid #22c55e' : '1px solid #334155',
                  background: solvedIds.includes(activeQuestion.id) ? 'rgba(34, 197, 94, 0.15)' : '#0f172a',
                  color: solvedIds.includes(activeQuestion.id) ? '#4ade80' : '#cbd5e1',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                {solvedIds.includes(activeQuestion.id) ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                <span>{solvedIds.includes(activeQuestion.id) ? 'Marked Solved' : 'Mark as Solved'}</span>
              </button>

              {/* Direct Practice Link */}
              <a
                href={activeQuestion.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '8px 18px',
                  background: 'linear-gradient(135deg, #0284c7, #0369a1)',
                  color: '#ffffff',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(2, 132, 199, 0.3)'
                }}
              >
                <span>Practice Problem</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>

          {/* Asymptotic Complexity Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '0.75rem 1.25rem', background: '#0f172a', border: '1px solid #334155', borderRadius: '10px' }}>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>
                Time Complexity
              </span>
              <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#4ade80', fontFamily: 'JetBrains Mono', marginTop: '2px', display: 'block' }}>
                {activeQuestion.timeComplexity}
              </span>
            </div>
            <div style={{ padding: '0.75rem 1.25rem', background: '#0f172a', border: '1px solid #334155', borderRadius: '10px' }}>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>
                Space Complexity
              </span>
              <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#38bdf8', fontFamily: 'JetBrains Mono', marginTop: '2px', display: 'block' }}>
                {activeQuestion.spaceComplexity}
              </span>
            </div>
          </div>

          {/* Concept Overview */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.05rem', color: '#f8fafc', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <BookOpen size={18} className="text-sky-400" />
              <span>Intuition & Approach</span>
            </h3>
            <p style={{ color: '#cbd5e1', lineHeight: 1.65, fontSize: '0.95rem', margin: 0 }}>
              {activeQuestion.concept}
            </p>
          </div>

          {/* When to apply / Relevance */}
          {activeQuestion.whenToUse && (
            <div style={{ marginBottom: '1.75rem', background: '#0f172a', padding: '1.25rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '0.95rem', color: '#38bdf8', margin: '0 0 0.75rem 0', fontWeight: 700 }}>
                Why This Problem Matters for Accenture
              </h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6 }}>
                {activeQuestion.whenToUse.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '0.4rem' }}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Canonical Code Template */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <h3 style={{ fontSize: '1.05rem', color: '#f8fafc', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Code2 size={18} className="text-amber-400" />
                <span>Reference Implementation</span>
              </h3>
              <button
                onClick={() => handleCopy(activeQuestion.template)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '6px 12px',
                  background: '#0f172a',
                  border: '1px solid #334155',
                  borderRadius: '6px',
                  color: copied ? '#4ade80' : '#cbd5e1',
                  cursor: 'pointer',
                  fontSize: '0.8rem'
                }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy Code'}</span>
              </button>
            </div>
            <pre style={{
              background: '#090d16',
              padding: '1.25rem',
              borderRadius: '10px',
              border: '1px solid #1e293b',
              overflowX: 'auto',
              color: '#e2e8f0',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.85rem',
              lineHeight: 1.55,
              margin: 0
            }}>
              <code>{activeQuestion.template}</code>
            </pre>
          </div>

          {/* Example / Walkthrough */}
          {activeQuestion.example && (
            <div style={{ marginBottom: '1.75rem' }}>
              <h3 style={{ fontSize: '1.05rem', color: '#f8fafc', marginBottom: '0.5rem' }}>Sample Execution / Dry Run</h3>
              <pre style={{
                background: '#0f172a',
                padding: '1rem',
                borderRadius: '8px',
                color: '#94a3b8',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.85rem',
                lineHeight: 1.5,
                margin: 0,
                whiteSpace: 'pre-wrap'
              }}>
                {activeQuestion.example}
              </pre>
            </div>
          )}

          {/* Practice Platform Card */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))',
            border: '1px solid #334155',
            borderRadius: '12px',
            padding: '1.25rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>
                Practice Resource
              </span>
              <div style={{ color: '#f8fafc', fontWeight: 700, fontSize: '0.95rem', marginTop: '2px' }}>
                {activeQuestion.linkText}
              </div>
              <div style={{ color: '#64748b', fontSize: '0.8rem', fontFamily: 'JetBrains Mono', marginTop: '2px', wordBreak: 'break-all' }}>
                {activeQuestion.link}
              </div>
            </div>

            <a
              href={activeQuestion.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '8px 16px',
                background: '#0284c7',
                color: '#ffffff',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              <span>Solve on Platform</span>
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
