// src/components/GlobalSearchModal.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  X,
  BookOpen,
  Code2,
  Database,
  Zap,
  FileText,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { questions } from '../data/questions.js';
import { sqlQuestions } from '../data/sqlQuestions.js';
import { javaTopics } from '../data/javaTopics.js';
import { dsaPatterns } from '../data/dsaPatterns.js';
import { cheatSheets } from '../data/cheatSheets.js';

export default function GlobalSearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(false); // Toggle will be handled in parent
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  // Search aggregations
  let results = [];
  if (q.length > 0) {
    // 1. Java Topics
    javaTopics.forEach(t => {
      if (t.title.toLowerCase().includes(q) || t.explanation?.toLowerCase().includes(q)) {
        results.push({
          id: `java-${t.id}`,
          title: t.title,
          category: 'Java Learning',
          icon: <BookOpen size={16} className="text-amber-400" />,
          route: `/java-learning?topic=${t.id}`
        });
      }
    });

    // 2. DSA Question Sheet
    dsaPatterns.forEach(p => {
      if (p.title.toLowerCase().includes(q) || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || `#${p.qno}` === q || `${p.qno}` === q) {
        results.push({
          id: `dsa-${p.id}`,
          title: `#${p.qno} ${p.title}`,
          category: `DSA Sheet • ${p.category}`,
          icon: <Zap size={16} className="text-sky-400" />,
          route: `/learn/dsa`
        });
      }
    });

    // 3. Coding Questions
    questions.forEach(codeQ => {
      if (codeQ.title.toLowerCase().includes(q) || codeQ.category.toLowerCase().includes(q)) {
        results.push({
          id: `coding-${codeQ.id}`,
          title: codeQ.title,
          category: `Coding Practice (${codeQ.difficulty})`,
          icon: <Code2 size={16} className="text-sky-400" />,
          route: `/practice?q=${codeQ.id}`
        });
      }
    });

    // 4. SQL Questions
    sqlQuestions.forEach(sqlQ => {
      if (sqlQ.title.toLowerCase().includes(q) || sqlQ.category.toLowerCase().includes(q)) {
        results.push({
          id: `sql-${sqlQ.id}`,
          title: sqlQ.title,
          category: `SQL Round (${sqlQ.difficulty})`,
          icon: <Database size={16} className="text-orange-400" />,
          route: `/sql-assessment?q=${sqlQ.id}`
        });
      }
    });

    // 5. Cheat Sheets
    cheatSheets.forEach(cs => {
      if (cs.title.toLowerCase().includes(q) || cs.description.toLowerCase().includes(q)) {
        results.push({
          id: `cs-${cs.id}`,
          title: cs.title,
          category: 'Cheat Sheets',
          icon: <FileText size={16} className="text-purple-400" />,
          route: `/learn/cheat-sheets`
        });
      }
    });
  }

  const handleSelect = (route) => {
    navigate(route);
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(4px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '10vh'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '680px',
          background: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '16px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '16px 20px',
          borderBottom: '1px solid #334155',
          background: '#0f172a'
        }}>
          <Search size={20} style={{ color: '#94a3b8', marginRight: '12px' }} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search learning topics, DSA patterns, SQL, coding questions (e.g. HashMap)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              color: '#f8fafc',
              fontSize: '1.05rem',
              outline: 'none'
            }}
          />
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', padding: '4px' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Search Results List */}
        <div style={{ maxHeight: '420px', overflowY: 'auto', padding: '12px' }}>
          {q.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: '#94a3b8' }}>
              <Sparkles size={24} style={{ margin: '0 auto 8px auto', color: '#38bdf8' }} />
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Type keywords to search across the entire Accenture Platform</p>
            </div>
          ) : results.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: '#94a3b8' }}>
              No matches found for "{query}". Try "Arrays", "JOIN", "HashMap", or "Loop".
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {results.slice(0, 15).map((res) => (
                <div
                  key={res.id}
                  onClick={() => handleSelect(res.route)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: '#0f172a',
                    border: '1px solid #334155',
                    cursor: 'pointer',
                    transition: 'all 0.15s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#38bdf8'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#334155'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {res.icon}
                    </div>
                    <div>
                      <div style={{ color: '#f8fafc', fontWeight: 600, fontSize: '0.95rem' }}>{res.title}</div>
                      <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>{res.category}</div>
                    </div>
                  </div>
                  <ArrowRight size={16} style={{ color: '#64748b' }} />
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ padding: '10px 20px', background: '#090d16', borderTop: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748b' }}>
          <span>Press <strong>ESC</strong> to close</span>
          <span>Shortcut: <strong>Ctrl + K</strong></span>
        </div>
      </div>
    </div>
  );
}
