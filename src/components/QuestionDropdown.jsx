// src/components/QuestionDropdown.jsx
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

export default function QuestionDropdown({
  questions = [],
  currentIndex = 0,
  onSelectQuestion,
  isSolvedFn,
  menuTitle = 'SELECT RECENT ACCENTURE EXAM QUESTION'
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const activeItemRef = useRef(null);

  const currentQuestion = questions[currentIndex] || questions[0];
  const isCurrentSolved = isSolvedFn ? isSolvedFn(currentQuestion) : false;

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Scroll active item into view when dropdown opens
  useEffect(() => {
    if (isOpen && activeItemRef.current) {
      activeItemRef.current.scrollIntoView({
        behavior: 'auto',
        block: 'nearest'
      });
    }
  }, [isOpen]);

  const getDifficultyStyle = (diff = '') => {
    const d = diff.toLowerCase();
    if (d.includes('easy')) {
      return {
        background: 'rgba(34, 197, 94, 0.15)',
        color: '#4ade80'
      };
    }
    if (d.includes('hard')) {
      return {
        background: 'rgba(239, 68, 68, 0.15)',
        color: '#f87171'
      };
    }
    // Default Medium
    return {
      background: 'rgba(234, 179, 8, 0.15)',
      color: '#facc15'
    };
  };

  return (
    <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', zIndex: 100 }} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.6rem',
          height: '34px',
          maxWidth: '280px',
          padding: '0 10px',
          background: '#0f172a',
          border: isOpen ? '1px solid #38bdf8' : '1px solid #334155',
          borderRadius: '8px',
          color: '#f8fafc',
          fontSize: '0.82rem',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: isOpen ? '0 0 0 2px rgba(56, 189, 248, 0.25)' : '0 2px 4px rgba(0,0,0,0.2)',
          transition: 'all 0.2s',
          userSelect: 'none'
        }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        title="Select Question"
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', overflow: 'hidden', minWidth: 0 }}>
          <span
            style={{
              background: '#0284c7',
              color: '#ffffff',
              fontSize: '0.72rem',
              fontWeight: 800,
              padding: '2px 6px',
              borderRadius: '5px',
              flexShrink: 0
            }}
          >
            Q{currentIndex + 1}
          </span>
          <span
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              fontWeight: 600
            }}
          >
            {currentQuestion?.title || 'Select Question'}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0 }}>
          {currentQuestion?.difficulty && (
            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                padding: '1px 6px',
                borderRadius: '4px',
                ...getDifficultyStyle(currentQuestion.difficulty)
              }}
            >
              {currentQuestion.difficulty}
            </span>
          )}
          {isCurrentSolved && (
            <CheckCircle2 size={14} color="#4ade80" />
          )}
          {isOpen ? (
            <ChevronUp size={15} color="#38bdf8" />
          ) : (
            <ChevronDown size={15} color="#94a3b8" />
          )}
        </div>
      </button>

      {/* Floating Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: 0,
            zIndex: 9999,
            width: '480px',
            maxWidth: '90vw',
            background: '#0f172a',
            border: '1px solid rgba(56, 189, 248, 0.35)',
            borderRadius: '12px',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(255, 255, 255, 0.05)',
            padding: '6px',
            maxHeight: '380px',
            overflowY: 'auto'
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '6px 10px',
              fontSize: '0.72rem',
              color: '#64748b',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.6px',
              borderBottom: '1px solid #1e293b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <span>{menuTitle} ({questions.length})</span>
          </div>

          {/* List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginTop: '4px' }}>
            {questions.map((q, idx) => {
              const isSelected = idx === currentIndex;
              const isSolved = isSolvedFn ? isSolvedFn(q) : false;
              const diffStyle = getDifficultyStyle(q.difficulty);

              const categoryText = q.category || q.topic || 'SQL Problem';
              const metaText = q.duration
                ? `${categoryText} • ${q.duration} mins`
                : q.dateTag
                ? `${q.dateTag} • ${categoryText}`
                : categoryText;

              return (
                <button
                  key={q.id || idx}
                  ref={isSelected ? activeItemRef : null}
                  type="button"
                  onClick={() => {
                    onSelectQuestion(idx);
                    setIsOpen(false);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                    width: '100%',
                    padding: '10px 12px',
                    margin: '1px 0',
                    borderRadius: '8px',
                    border: isSelected ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid transparent',
                    background: isSelected ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                    color: isSelected ? '#38bdf8' : '#e2e8f0',
                    fontSize: '0.85rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.background = '#1e293b';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {/* Left: Q Badge & Title + Subtitle */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', overflow: 'hidden', minWidth: 0 }}>
                    <span
                      style={{
                        background: isSelected ? '#0284c7' : '#1e293b',
                        color: isSelected ? '#ffffff' : '#94a3b8',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        padding: '2px 6px',
                        borderRadius: '5px',
                        flexShrink: 0
                      }}
                    >
                      Q{idx + 1}
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                      <span
                        style={{
                          fontWeight: isSelected ? 700 : 600,
                          color: isSelected ? '#f8fafc' : '#cbd5e1',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          fontSize: '0.85rem'
                        }}
                      >
                        {q.title}
                      </span>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          color: '#64748b',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {metaText}
                      </span>
                    </div>
                  </div>

                  {/* Right: Difficulty Badge + Solved Checkmark */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', flexShrink: 0 }}>
                    {q.difficulty && (
                      <span
                        style={{
                          fontSize: '0.72rem',
                          padding: '2px 7px',
                          borderRadius: '4px',
                          fontWeight: 700,
                          ...diffStyle
                        }}
                      >
                        {q.difficulty}
                      </span>
                    )}
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
        </div>
      )}
    </div>
  );
}
