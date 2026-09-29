// src/pages/InterviewPrepPage.jsx
import React, { useState, useEffect } from 'react';
import {
  Mic,
  HelpCircle,
  Eye,
  EyeOff,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Copy,
  Check,
  Volume2,
  VolumeX,
  Maximize2,
  AlertTriangle,
  ChevronRight,
  ChevronLeft,
  X,
  Search,
  Flame,
  ThumbsUp,
  Grid,
  List,
  RotateCcw,
  Shuffle
} from 'lucide-react';
import { interviewQuestions } from '../data/interviewQuestions.js';
import RecentSetIntroModule from '../components/interview/RecentSetIntroModule.jsx';
import RecentSetFollowupChain from '../components/interview/RecentSetFollowupChain.jsx';
import InterviewQuestionPalette from '../components/interview/InterviewQuestionPalette.jsx';
import SEO from '../components/SEO.jsx';
import { seoConfig } from '../config/seo.js';
import { infoToast } from '../utils/confirmToast.jsx';

// Helper component to render markdown-formatted answer beautifully
function FormattedAnswer({ text }) {
  if (!text) return null;

  // Split into paragraphs / lines
  const paragraphs = text.split('\n\n');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
      {paragraphs.map((p, pIdx) => {
        const trimmed = p.trim();
        if (!trimmed) return null;

        // Check if paragraph is a code block ```
        if (trimmed.startsWith('```')) {
          const cleanCode = trimmed.replace(/^```[a-zA-Z]*\n?/, '').replace(/```$/, '').trim();
          return (
            <div
              key={pIdx}
              style={{
                background: '#070b14',
                border: '1px solid rgba(56, 189, 248, 0.28)',
                borderRadius: '8px',
                padding: '10px 14px',
                fontFamily: "'JetBrains Mono', Consolas, monospace",
                fontSize: '0.86rem',
                color: '#38bdf8',
                lineHeight: 1.6,
                overflowX: 'auto',
                whiteSpace: 'pre'
              }}
            >
              {cleanCode}
            </div>
          );
        }

        // Check if paragraph is a bullet list
        if (trimmed.includes('\n- ') || trimmed.startsWith('- ')) {
          const items = trimmed.split('\n- ').map(item => item.replace(/^- /, ''));
          return (
            <ul key={pIdx} style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {items.map((item, iIdx) => (
                <li key={iIdx} style={{ color: '#cbd5e1', lineHeight: 1.6, fontSize: '0.93rem' }}>
                  <RenderInlineMarkup text={item} />
                </li>
              ))}
            </ul>
          );
        }

        // Check if paragraph is a numbered list
        if (/^\d+\.\s/.test(trimmed)) {
          const items = trimmed.split(/\n(?=\d+\.\s)/);
          return (
            <div key={pIdx} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {items.map((item, iIdx) => (
                <div key={iIdx} style={{
                  display: 'flex',
                  gap: '0.75rem',
                  background: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid rgba(51, 65, 85, 0.7)',
                  borderRadius: '10px',
                  padding: '10px 14px'
                }}>
                  <span style={{
                    color: '#38bdf8',
                    fontWeight: 800,
                    fontFamily: 'JetBrains Mono',
                    fontSize: '0.85rem',
                    background: 'rgba(56, 189, 248, 0.12)',
                    padding: '2px 8px',
                    borderRadius: '6px',
                    height: 'fit-content'
                  }}>
                    {iIdx + 1}
                  </span>
                  <div style={{ color: '#e2e8f0', fontSize: '0.92rem', lineHeight: 1.6, flex: 1 }}>
                    <RenderInlineMarkup text={item.replace(/^\d+\.\s*/, '')} />
                  </div>
                </div>
              ))}
            </div>
          );
        }

        // Standard speech or statement paragraph
        const isQuote = trimmed.startsWith('*"') || trimmed.startsWith('"');
        return (
          <p
            key={pIdx}
            style={{
              margin: 0,
              color: isQuote ? '#e0f2fe' : '#cbd5e1',
              fontSize: '0.94rem',
              lineHeight: 1.68,
              fontStyle: isQuote ? 'italic' : 'normal',
              background: isQuote ? 'rgba(56, 189, 248, 0.05)' : 'transparent',
              padding: isQuote ? '8px 14px' : '0',
              borderRadius: isQuote ? '8px' : '0',
              borderLeft: isQuote ? '3px solid #38bdf8' : 'none'
            }}
          >
            <RenderInlineMarkup text={trimmed} />
          </p>
        );
      })}
    </div>
  );
}

// Inline formatting for **bold**, `code`, *italics*
function RenderInlineMarkup({ text }) {
  // Replace bold, code, italics
  const parts = [];
  let remaining = text;
  let key = 0;

  // Regex to match **bold**, `code`, *italic*
  const tokenRegex = /(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/;

  while (remaining) {
    const match = remaining.match(tokenRegex);
    if (!match) {
      parts.push(<span key={key++}>{remaining}</span>);
      break;
    }

    const matchIndex = match.index;
    if (matchIndex > 0) {
      parts.push(<span key={key++}>{remaining.slice(0, matchIndex)}</span>);
    }

    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      parts.push(
        <strong key={key++} style={{ color: '#f8fafc', fontWeight: 700 }}>
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith('`') && token.endsWith('`')) {
      parts.push(
        <code key={key++} style={{
          background: '#090d16',
          color: '#38bdf8',
          padding: '2px 6px',
          borderRadius: '4px',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.85em'
        }}>
          {token.slice(1, -1)}
        </code>
      );
    } else if (token.startsWith('*') && token.endsWith('*')) {
      parts.push(
        <em key={key++} style={{ color: '#94a3b8' }}>
          {token.slice(1, -1)}
        </em>
      );
    }

    remaining = remaining.slice(matchIndex + token.length);
  }

  return <>{parts}</>;
}

// Sub-component to render a single question card (used in Focus Mode and List Mode)
function InterviewQuestionCard({
  item,
  index,
  total,
  isRevealed,
  isSpeaking,
  isCopied,
  isReviewed,
  onToggleAnswer,
  onSpeak,
  onCopy,
  onOpenModal,
  onToggleReviewed,
  isRecentItem,
  showPagination,
  onPrev,
  onNext,
  canPrev,
  canNext
}) {
  if (!item) return null;

  return (
    <div>
      {/* Linear progress track if in focus pagination mode */}
      {showPagination && total > 1 && (
        <div className="interview-progress-track">
          <div
            className="interview-progress-bar"
            style={{ width: `${Math.round(((index + 1) / total) * 100)}%` }}
          />
        </div>
      )}

      {/* Top Header Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {showPagination && (
            <span style={{
              fontSize: '0.78rem',
              padding: '3px 10px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.25), rgba(56, 189, 248, 0.2))',
              color: '#f8fafc',
              fontWeight: 800,
              fontFamily: "'JetBrains Mono', monospace",
              border: '1px solid rgba(168, 85, 247, 0.4)'
            }}>
              Q{index + 1} of {total}
            </span>
          )}

          <span style={{
            fontSize: '0.75rem',
            padding: '3px 10px',
            borderRadius: '8px',
            background: isRecentItem ? 'rgba(236, 72, 153, 0.2)' : 'rgba(168, 85, 247, 0.15)',
            color: isRecentItem ? '#f472b6' : '#c084fc',
            fontWeight: 700,
            border: isRecentItem ? '1px solid rgba(236, 72, 153, 0.4)' : '1px solid rgba(168, 85, 247, 0.3)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            {isRecentItem && <Flame size={12} />}
            {item.category}
          </span>

          {item.subCategory && (
            <span style={{
              fontSize: '0.75rem',
              padding: '3px 10px',
              borderRadius: '8px',
              background: 'rgba(56, 189, 248, 0.12)',
              color: '#38bdf8',
              fontWeight: 700,
              border: '1px solid rgba(56, 189, 248, 0.3)'
            }}>
              {item.subCategory}
            </span>
          )}

          {item.dateTag && (
            <span style={{
              fontSize: '0.75rem',
              padding: '3px 8px',
              borderRadius: '8px',
              background: 'rgba(34, 197, 94, 0.12)',
              color: '#4ade80',
              fontWeight: 700,
              border: '1px solid rgba(34, 197, 94, 0.3)'
            }}>
              {item.dateTag}
            </span>
          )}

          <span style={{ fontSize: '0.75rem', color: '#94a3b8', background: '#0f172a', padding: '3px 10px', borderRadius: '8px', border: '1px solid #334155' }}>
            Target: {item.role}
          </span>

          {item.trap && (
            <span style={{
              fontSize: '0.72rem',
              padding: '3px 8px',
              borderRadius: '8px',
              background: 'rgba(239, 68, 68, 0.15)',
              color: '#f87171',
              border: '1px solid rgba(239, 68, 68, 0.35)',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <AlertTriangle size={12} /> Trap Alert
            </span>
          )}
        </div>

        {/* Actions Right */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {/* Mark as Reviewed Toggle */}
          {onToggleReviewed && (
            <button
              type="button"
              onClick={() => onToggleReviewed(item.id)}
              title={isReviewed ? "Marked as reviewed" : "Mark question as reviewed"}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '6px 12px',
                background: isReviewed ? 'rgba(34, 197, 94, 0.15)' : '#0f172a',
                color: isReviewed ? '#4ade80' : '#94a3b8',
                border: isReviewed ? '1px solid rgba(34, 197, 94, 0.4)' : '1px solid #334155',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <CheckCircle2 size={13} className={isReviewed ? "text-emerald-400" : "text-slate-400"} />
              <span>{isReviewed ? "Reviewed" : "Mark Reviewed"}</span>
            </button>
          )}

          {/* Open in Dedicated Focus Modal */}
          <button
            type="button"
            onClick={() => onOpenModal(item)}
            title="Open Practice Modal"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '6px 12px',
              background: '#0f172a',
              color: '#38bdf8',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              borderRadius: '8px',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <Maximize2 size={13} />
            <span>Focus Mode</span>
          </button>

          {/* Toggle Answer Button */}
          <button
            type="button"
            onClick={() => onToggleAnswer(item.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '6px 14px',
              background: isRevealed
                ? '#0f172a'
                : (isRecentItem ? 'linear-gradient(135deg, #ec4899, #a855f7)' : 'linear-gradient(135deg, #a855f7, #9333ea)'),
              color: isRevealed ? '#94a3b8' : '#ffffff',
              border: isRevealed ? '1px solid #334155' : 'none',
              borderRadius: '8px',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: isRevealed ? 'none' : '0 2px 8px rgba(168, 85, 247, 0.3)'
            }}
          >
            {isRevealed ? <EyeOff size={14} /> : <Eye size={14} />}
            <span>{isRevealed ? 'Hide Response' : 'Show Model Response'}</span>
          </button>
        </div>
      </div>

      {/* Question Heading */}
      <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 1.25rem 0', lineHeight: 1.45 }}>
        {item.question}
      </h2>

      {/* Think Yourself Prompt */}
      <div style={{
        background: 'rgba(56, 189, 248, 0.07)',
        border: '1px solid rgba(56, 189, 248, 0.25)',
        borderRadius: '12px',
        padding: '1rem 1.25rem',
        marginBottom: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#38bdf8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.35rem' }}>
          <HelpCircle size={15} />
          <span>Think Yourself Before Revealing:</span>
        </div>
        <p style={{ margin: 0, color: '#bae6fd', fontSize: '0.9rem', lineHeight: 1.55 }}>
          {item.thinkPrompt}
        </p>
      </div>

      {/* Interviewer Trap Alert Box */}
      {item.trap && (
        <div style={{
          background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(15, 23, 42, 0.8) 100%)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '12px',
          padding: '1rem 1.25rem',
          marginBottom: isRevealed ? '1.5rem' : '0'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#f87171', fontWeight: 800, fontSize: '0.85rem', marginBottom: '0.4rem' }}>
            <AlertTriangle size={15} />
            <span>Interviewer Trap Alert:</span>
          </div>
          <p style={{ margin: '0 0 0.5rem 0', color: '#fca5a5', fontSize: '0.88rem', lineHeight: 1.55 }}>
            {item.trap}
          </p>
          {item.trapSolution && (
            <div style={{
              borderTop: '1px dashed rgba(239, 68, 68, 0.25)',
              paddingTop: '0.5rem',
              marginTop: '0.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.45rem',
              color: '#cbd5e1',
              fontSize: '0.86rem',
              lineHeight: 1.55
            }}>
              <span style={{ color: '#4ade80', fontWeight: 700, flexShrink: 0 }}>Recommended Strategy:</span>
              <span>{item.trapSolution}</span>
            </div>
          )}
        </div>
      )}

      {/* Beautified Model Answer Section */}
      {isRevealed && (
        <div style={{
          marginTop: '1.5rem',
          borderTop: '1px solid #334155',
          paddingTop: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem'
        }}>
          {/* Model Response Header Toolbar */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
            background: 'linear-gradient(90deg, rgba(34, 197, 94, 0.12), rgba(15, 23, 42, 0.6))',
            border: '1px solid rgba(34, 197, 94, 0.25)',
            borderRadius: '10px',
            padding: '8px 14px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={16} className="text-emerald-400" />
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#86efac' }}>
                Model Response (Natural Speaking Script)
              </span>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              {/* Audio Speak Aloud */}
              <button
                type="button"
                onClick={() => onSpeak(item.id, item.answer)}
                title={isSpeaking ? 'Stop Speech' : 'Listen to how this response sounds spoken aloud'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 10px',
                  background: isSpeaking ? '#dc2626' : '#0f172a',
                  border: isSpeaking ? '1px solid #ef4444' : '1px solid #334155',
                  borderRadius: '6px',
                  color: isSpeaking ? '#ffffff' : '#38bdf8',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {isSpeaking ? <VolumeX size={13} /> : <Volume2 size={13} />}
                <span>{isSpeaking ? 'Stop Listening' : 'Listen Script'}</span>
              </button>

              {/* Copy Script */}
              <button
                type="button"
                onClick={() => onCopy(item.id, item.answer)}
                title="Copy clean script to clipboard"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 10px',
                  background: '#0f172a',
                  border: '1px solid #334155',
                  borderRadius: '6px',
                  color: isCopied ? '#4ade80' : '#cbd5e1',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {isCopied ? <Check size={13} /> : <Copy size={13} />}
                <span>{isCopied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Speech Delivery Card */}
          <div style={{
            background: '#0f172a',
            border: '1px solid #334155',
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.4)'
          }}>
            <FormattedAnswer text={item.answer} />
          </div>

          {/* Delivery Guidance Tip */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontSize: '0.8rem',
            color: '#94a3b8',
            background: 'rgba(250, 204, 21, 0.06)',
            border: '1px solid rgba(250, 204, 21, 0.2)',
            borderRadius: '8px',
            padding: '8px 12px'
          }}>
            <ThumbsUp size={14} className="text-amber-400" />
            <span>
              <strong>Accenture Delivery Tip:</strong> Speak naturally at ~120-140 words per minute. Pause briefly after main points rather than using filler words like "um" or "like".
            </span>
          </div>

          {/* Key Points Checklist */}
          {item.keyPoints && item.keyPoints.length > 0 && (
            <div style={{
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.5))',
              padding: '1.25rem',
              borderRadius: '12px',
              border: '1px solid rgba(56, 189, 248, 0.2)'
            }}>
              <h4 style={{
                fontSize: '0.85rem',
                color: '#38bdf8',
                margin: '0 0 0.75rem 0',
                textTransform: 'uppercase',
                fontWeight: 700,
                letterSpacing: '0.5px'
              }}>
                What the Interviewer Expects (Key Evaluation Criteria):
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.6rem' }}>
                {item.keyPoints.map((pt, pIdx) => (
                  <div key={pIdx} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    color: '#e2e8f0',
                    fontSize: '0.875rem',
                    background: '#0b1329',
                    border: '1px solid #1e293b',
                    padding: '8px 12px',
                    borderRadius: '8px'
                  }}>
                    <CheckCircle2 size={16} className="text-emerald-400" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Navigation Footer Bar (when in focus pagination mode) */}
      {showPagination && total > 1 && (
        <div className="interview-nav-bar">
          <button
            type="button"
            className="interview-nav-btn prev"
            onClick={onPrev}
            disabled={!canPrev}
            title="Go to previous question (Left Arrow)"
          >
            <ChevronLeft size={16} />
            <span>Previous Question</span>
            <span className="interview-kbd-hint">←</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.86rem', color: '#94a3b8' }}>
            <span>
              Question <strong style={{ color: '#f8fafc' }}>{index + 1}</strong> of <strong style={{ color: '#f8fafc' }}>{total}</strong>
            </span>
            {isReviewed && (
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '3px',
                color: '#4ade80',
                fontSize: '0.78rem',
                background: 'rgba(34, 197, 94, 0.15)',
                padding: '2px 8px',
                borderRadius: '6px',
                border: '1px solid rgba(34, 197, 94, 0.3)'
              }}>
                <CheckCircle2 size={12} /> Reviewed
              </span>
            )}
          </div>

          <button
            type="button"
            className="interview-nav-btn next"
            onClick={onNext}
            disabled={!canNext}
            title="Go to next question (Right Arrow)"
          >
            <span>Next Question</span>
            <ChevronRight size={16} />
            <span className="interview-kbd-hint" style={{ color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.3)' }}>→</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default function InterviewPrepPage({ _theme = 'dark' }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [recentSubCategory, setRecentSubCategory] = useState('All');
  const [recentActiveTab, setRecentActiveTab] = useState('questions'); // 'questions' | 'intro' | 'chain'
  const [searchQuery, setSearchQuery] = useState('');
  const [revealedQuestionIds, setRevealedQuestionIds] = useState({});
  const [copiedId, setCopiedId] = useState(null);
  const [speakingId, setSpeakingId] = useState(null);
  
  // Single Question Focus & Grid Palette State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState('focus'); // 'focus' | 'list'
  const [reviewedQuestionIds, setReviewedQuestionIds] = useState(() => {
    try {
      const saved = localStorage.getItem('accenture_interview_reviewed');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Dedicated Practice Modal State
  const [activeModalQuestion, setActiveModalQuestion] = useState(null);

  // Persist reviewed questions to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('accenture_interview_reviewed', JSON.stringify(reviewedQuestionIds));
    } catch {
      // ignore
    }
  }, [reviewedQuestionIds]);

  const categories = [
    'All',
    'Recent Interview Questions Sep 2026',
    'HR Interview',
    'Java Interview',
    'Technical Interview',
    'SQL Interview',
    'DSA Interview',
    'Project Questions'
  ];

  const recentSubCategories = [
    'All',
    'HR & Introduction',
    'Project & Engineering',
    'AI & Cloud Scale',
    'Technical & DSA'
  ];

  const filtered = interviewQuestions.filter(q => {
    const matchesCat = selectedCategory === 'All' || q.category === selectedCategory;
    const matchesSubCat =
      selectedCategory !== 'Recent Interview Questions Sep 2026' ||
      recentSubCategory === 'All' ||
      q.subCategory === recentSubCategory;

    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !query ||
      q.question.toLowerCase().includes(query) ||
      q.category.toLowerCase().includes(query) ||
      (q.subCategory && q.subCategory.toLowerCase().includes(query)) ||
      (q.trap && q.trap.toLowerCase().includes(query)) ||
      (q.trapSolution && q.trapSolution.toLowerCase().includes(query)) ||
      (q.role && q.role.toLowerCase().includes(query)) ||
      (q.answer && q.answer.toLowerCase().includes(query));

    return matchesCat && matchesSubCat && matchesQuery;
  });

  const toggleAnswer = (id) => {
    setRevealedQuestionIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleCopy = (id, text) => {
    // Strip markdown formatting for clean clipboard speech script
    const cleanText = text
      .replace(/\*\*/g, '')
      .replace(/\*/g, '')
      .replace(/`/g, '');
    navigator.clipboard.writeText(cleanText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Text-To-Speech Speech Synthesis Audio Preview
  const handleSpeak = (id, text) => {
    if (!('speechSynthesis' in window)) {
      infoToast('Speech synthesis is not supported in this browser.', { icon: '🔇', type: 'error' });
      return;
    }

    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }

    window.speechSynthesis.cancel();
    const cleanText = text
      .replace(/\*\*/g, '')
      .replace(/\*/g, '')
      .replace(/`/g, '')
      .replace(/\[.*?\]/g, 'your background');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 0.95; // Natural conversational cadence
    utterance.pitch = 1.0;

    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);

    setSpeakingId(id);
    window.speechSynthesis.speak(utterance);
  };

  // Keep currentIndex within bounds when filtered length changes
  useEffect(() => {
    if (currentIndex >= filtered.length && filtered.length > 0) {
      setCurrentIndex(0);
    }
  }, [filtered.length, currentIndex]);

  // Keyboard navigation for Focus Mode (ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
      if (activeModalQuestion) return;
      if (viewMode !== 'focus') return;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        setCurrentIndex((prev) => Math.min(filtered.length - 1, prev + 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentIndex((prev) => Math.max(0, prev - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filtered.length, activeModalQuestion, viewMode]);

  const handlePrevQuestion = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextQuestion = () => {
    setCurrentIndex((prev) => Math.min(filtered.length - 1, prev + 1));
  };

  const toggleReviewed = (id) => {
    setReviewedQuestionIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleResetReviewed = () => {
    setReviewedQuestionIds((prev) => {
      const updated = { ...prev };
      filtered.forEach((q) => {
        delete updated[q.id];
      });
      return updated;
    });
    infoToast('Progress reset for current question set', { icon: '🔄' });
  };

  const openModal = (question) => {
    setActiveModalQuestion(question);
    setRevealedQuestionIds((prev) => ({
      ...prev,
      [question.id]: true
    }));
  };

  const closeModal = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setSpeakingId(null);
    setActiveModalQuestion(null);
  };

  const navigateModal = (direction) => {
    if (!activeModalQuestion) return;
    const currentModalIdx = filtered.findIndex((q) => q.id === activeModalQuestion.id);
    if (currentModalIdx === -1) return;
    const nextIndex = (currentModalIdx + direction + filtered.length) % filtered.length;
    openModal(filtered[nextIndex]);
  };

  const handleSelectQuestionById = (questionId) => {
    const q = interviewQuestions.find((item) => item.id === questionId);
    if (q) {
      setSelectedCategory('Recent Interview Questions Sep 2026');
      setRecentActiveTab('questions');
      setRecentSubCategory('All');
      setRevealedQuestionIds((prev) => ({
        ...prev,
        [questionId]: true
      }));
      const recentQuestions = interviewQuestions.filter((item) => item.category === 'Recent Interview Questions Sep 2026');
      const targetIdx = recentQuestions.findIndex((item) => item.id === questionId);
      if (targetIdx !== -1) {
        setCurrentIndex(targetIdx);
      }
      setViewMode('focus');
      openModal(q);
    }
  };

  return (
    <div className="interview-page-container">
      <SEO {...seoConfig.interview} />
      {/* Header Banner */}
      <div className="interview-hero-card">
        <div style={{ maxWidth: '820px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'rgba(168, 85, 247, 0.15)',
            color: '#c084fc',
            padding: '4px 12px',
            borderRadius: '12px',
            fontSize: '0.75rem',
            fontWeight: 700,
            marginBottom: '0.75rem',
            letterSpacing: '0.5px'
          }}>
            <Mic size={14} /> ACCENTURE TECHNICAL & HR INTERVIEW PORTAL
          </div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 0.5rem 0' }}>
            Accenture Interview Preparation – Technical & HR Questions
          </h1>
          <p style={{ color: '#94a3b8', margin: 0, fontSize: '1rem', lineHeight: 1.6 }}>
            Practice real Accenture technical, Java, SQL, and HR questions with beautifully formatted, natural model responses. Listen aloud to delivery pacing, review interviewer evaluation checklists, and avoid common traps.
          </p>
        </div>

        {/* Quick Search Box */}
        <div style={{ marginTop: '1.5rem', maxWidth: '480px', position: 'relative' }}>
          <Search size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
          <input
            type="text"
            placeholder="Search questions by topic, keyword, or role..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentIndex(0);
            }}
            style={{
              width: '100%',
              padding: '10px 14px 10px 40px',
              background: '#0f172a',
              border: '1px solid #334155',
              borderRadius: '12px',
              color: '#f8fafc',
              fontSize: '0.9rem',
              outline: 'none'
            }}
          />
        </div>
      </div>

      {/* Featured Callout Banner for Recent Sep 2026 */}
      {selectedCategory !== 'Recent Interview Questions Sep 2026' && (
        <div style={{
          background: 'linear-gradient(90deg, rgba(236, 72, 153, 0.15) 0%, rgba(168, 85, 247, 0.15) 50%, rgba(15, 23, 42, 0.7) 100%)',
          border: '1px solid rgba(236, 72, 153, 0.35)',
          borderRadius: '14px',
          padding: '12px 18px',
          marginBottom: '1.75rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{
              background: '#ec4899',
              color: '#ffffff',
              padding: '3px 8px',
              borderRadius: '6px',
              fontSize: '0.72rem',
              fontWeight: 800,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <Flame size={12} /> NEW
            </span>
            <span style={{ color: '#f8fafc', fontSize: '0.9rem', fontWeight: 600 }}>
              Recent Accenture Interview Questions (Sep 2026 Drive) are live with categorized answers, speech coach & traps!
            </span>
          </div>
          <button
            onClick={() => {
              setSelectedCategory('Recent Interview Questions Sep 2026');
              setCurrentIndex(0);
              setRecentActiveTab('questions');
              setRecentSubCategory('All');
            }}
            style={{
              padding: '6px 14px',
              background: 'linear-gradient(135deg, #ec4899, #a855f7)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.8rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <span>Explore Sep 2026 Section</span>
            <ChevronRight size={14} />
          </button>
        </div>
      )}

      {/* Category Filter Pills */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          const isRecent = cat === 'Recent Interview Questions Sep 2026';
          const count = cat === 'All' ? interviewQuestions.length : interviewQuestions.filter(q => q.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentIndex(0);
                if (isRecent) {
                  setRecentActiveTab('questions');
                  setRecentSubCategory('All');
                }
              }}
              style={{
                padding: isRecent ? '7px 18px' : '7px 16px',
                borderRadius: '10px',
                background: isActive
                  ? (isRecent ? 'linear-gradient(135deg, #ec4899, #a855f7)' : '#a855f7')
                  : (isRecent ? 'rgba(236, 72, 153, 0.12)' : '#1e293b'),
                color: isActive
                  ? '#ffffff'
                  : (isRecent ? '#f472b6' : '#cbd5e1'),
                border: isActive
                  ? (isRecent ? '1px solid #f472b6' : '1px solid #a855f7')
                  : (isRecent ? '1px solid rgba(236, 72, 153, 0.4)' : '1px solid #334155'),
                fontWeight: isActive ? 700 : (isRecent ? 700 : 500),
                fontSize: '0.85rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.15s',
                boxShadow: isRecent && isActive ? '0 0 16px rgba(236, 72, 153, 0.4)' : 'none'
              }}
            >
              {isRecent && <Flame size={14} className={isActive ? 'text-white' : 'text-pink-400'} />}
              <span>{cat}</span>
              <span style={{
                fontSize: '0.75rem',
                background: isActive ? 'rgba(0, 0, 0, 0.25)' : '#0f172a',
                color: isActive ? '#ffffff' : (isRecent ? '#f472b6' : '#94a3b8'),
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

      {/* Dedicated Section Header Banner for Sep 2026 */}
      {selectedCategory === 'Recent Interview Questions Sep 2026' && (
        <div style={{
          background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.12) 0%, rgba(168, 85, 247, 0.15) 50%, rgba(15, 23, 42, 0.9) 100%)',
          border: '1px solid rgba(236, 72, 153, 0.4)',
          borderRadius: '20px',
          padding: '1.75rem 2rem',
          marginBottom: '2rem',
          boxShadow: '0 8px 32px rgba(236, 72, 153, 0.15)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '720px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'rgba(236, 72, 153, 0.25)',
                color: '#f472b6',
                padding: '4px 12px',
                borderRadius: '12px',
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.5px',
                marginBottom: '0.75rem',
                border: '1px solid rgba(236, 72, 153, 0.5)'
              }}>
                <Flame size={14} /> SEPTEMBER 2026 ACCENTURE INTERVIEW DRIVE • VERIFIED QUESTIONS
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fdf2f8', margin: '0 0 0.5rem 0' }}>
                Recent Interview Questions (Sep 2026)
              </h2>
              <p style={{ color: '#cbd5e1', margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>
                12 real questions asked to ASE & FSE candidates in recent recruitment rounds. Categorized into HR, Projects, AI & Cloud Scale, and DSA with natural spoken scripts, speech synthesis, interviewer traps, and the 30-minute conversation blueprint.
              </p>
            </div>

            {/* Quick Stats Badges */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <div style={{ background: '#0f172a', border: '1px solid rgba(236, 72, 153, 0.3)', borderRadius: '12px', padding: '8px 14px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f472b6' }}>12</div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600 }}>Questions</div>
              </div>
              <div style={{ background: '#0f172a', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '12px', padding: '8px 14px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#c084fc' }}>4</div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600 }}>Categories</div>
              </div>
              <div style={{ background: '#0f172a', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: '12px', padding: '8px 14px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#38bdf8' }}>60s</div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600 }}>Intro Coach</div>
              </div>
            </div>
          </div>

          {/* View Mode Switcher Tabs */}
          <div style={{
            display: 'flex',
            gap: '0.6rem',
            marginTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '1.25rem',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => setRecentActiveTab('questions')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '8px 16px',
                borderRadius: '10px',
                background: recentActiveTab === 'questions' ? 'linear-gradient(135deg, #ec4899, #a855f7)' : '#0f172a',
                color: recentActiveTab === 'questions' ? '#ffffff' : '#cbd5e1',
                border: recentActiveTab === 'questions' ? 'none' : '1px solid #334155',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: recentActiveTab === 'questions' ? '0 4px 14px rgba(236, 72, 153, 0.35)' : 'none'
              }}
            >
              <BookOpen size={15} />
              <span>Questions Bank ({interviewQuestions.filter(q => q.category === 'Recent Interview Questions Sep 2026').length})</span>
            </button>

            <button
              onClick={() => setRecentActiveTab('intro')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '8px 16px',
                borderRadius: '10px',
                background: recentActiveTab === 'intro' ? 'linear-gradient(135deg, #ec4899, #a855f7)' : '#0f172a',
                color: recentActiveTab === 'intro' ? '#ffffff' : '#cbd5e1',
                border: recentActiveTab === 'intro' ? 'none' : '1px solid #334155',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: recentActiveTab === 'intro' ? '0 4px 14px rgba(236, 72, 153, 0.35)' : 'none'
              }}
            >
              <Mic size={15} />
              <span>1-Minute Intro Speech Coach</span>
            </button>

            <button
              onClick={() => setRecentActiveTab('chain')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '8px 16px',
                borderRadius: '10px',
                background: recentActiveTab === 'chain' ? 'linear-gradient(135deg, #ec4899, #a855f7)' : '#0f172a',
                color: recentActiveTab === 'chain' ? '#ffffff' : '#cbd5e1',
                border: recentActiveTab === 'chain' ? 'none' : '1px solid #334155',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: recentActiveTab === 'chain' ? '0 4px 14px rgba(236, 72, 153, 0.35)' : 'none'
              }}
            >
              <Sparkles size={15} />
              <span>30-Minute Interview Conversation Flow</span>
            </button>
          </div>
        </div>
      )}

      {/* Tab Panels for Intro and Followup Chain */}
      {selectedCategory === 'Recent Interview Questions Sep 2026' && recentActiveTab === 'intro' && (
        <RecentSetIntroModule onFocusQuestion={handleSelectQuestionById} />
      )}

      {selectedCategory === 'Recent Interview Questions Sep 2026' && recentActiveTab === 'chain' && (
        <RecentSetFollowupChain onSelectQuestion={handleSelectQuestionById} />
      )}

      {/* Subcategory Pills (when viewing Sep 2026 questions bank) */}
      {selectedCategory === 'Recent Interview Questions Sep 2026' && recentActiveTab === 'questions' && (
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          marginBottom: '1.5rem',
          flexWrap: 'wrap',
          alignItems: 'center',
          background: 'rgba(15, 23, 42, 0.7)',
          padding: '10px 14px',
          borderRadius: '12px',
          border: '1px solid rgba(236, 72, 153, 0.3)'
        }}>
          <span style={{ fontSize: '0.78rem', color: '#f472b6', fontWeight: 800, textTransform: 'uppercase', marginRight: '6px', letterSpacing: '0.5px' }}>
            Categories:
          </span>
          {recentSubCategories.map((sub) => {
            const isActive = recentSubCategory === sub;
            const count = sub === 'All'
              ? interviewQuestions.filter(q => q.category === 'Recent Interview Questions Sep 2026').length
              : interviewQuestions.filter(q => q.category === 'Recent Interview Questions Sep 2026' && q.subCategory === sub).length;
            return (
              <button
                key={sub}
                onClick={() => {
                  setRecentSubCategory(sub);
                  setCurrentIndex(0);
                }}
                style={{
                  padding: '5px 12px',
                  borderRadius: '8px',
                  background: isActive ? '#38bdf8' : '#1e293b',
                  color: isActive ? '#0f172a' : '#cbd5e1',
                  border: isActive ? '1px solid #38bdf8' : '1px solid #334155',
                  fontWeight: isActive ? 800 : 500,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  transition: 'all 0.15s'
                }}
              >
                <span>{sub}</span>
                <span style={{
                  fontSize: '0.7rem',
                  background: isActive ? 'rgba(0, 0, 0, 0.2)' : '#0f172a',
                  color: isActive ? '#0f172a' : '#94a3b8',
                  padding: '1px 5px',
                  borderRadius: '6px',
                  fontWeight: 700
                }}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Questions Bank Section (Hidden if user is on Intro or Chain tab in Sep 2026) */}
      {!(selectedCategory === 'Recent Interview Questions Sep 2026' && recentActiveTab !== 'questions') && (
        <div>
          {/* View Mode & Progress Switcher Bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '1.5rem',
            background: 'rgba(15, 23, 42, 0.75)',
            border: '1px solid #334155',
            borderRadius: '14px',
            padding: '10px 16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#f8fafc' }}>
                {selectedCategory}
              </span>
              <span style={{
                fontSize: '0.75rem',
                background: 'rgba(168, 85, 247, 0.15)',
                color: '#c084fc',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                padding: '2px 8px',
                borderRadius: '8px',
                fontWeight: 700
              }}>
                {filtered.length} {filtered.length === 1 ? 'Question' : 'Questions'}
              </span>
              <span style={{
                fontSize: '0.75rem',
                background: filtered.filter(q => reviewedQuestionIds[q.id] || revealedQuestionIds[q.id]).length === filtered.length && filtered.length > 0
                  ? 'rgba(34, 197, 94, 0.18)'
                  : '#0f172a',
                color: filtered.filter(q => reviewedQuestionIds[q.id] || revealedQuestionIds[q.id]).length === filtered.length && filtered.length > 0
                  ? '#4ade80'
                  : '#94a3b8',
                border: '1px solid #334155',
                padding: '2px 8px',
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <CheckCircle2 size={12} className={filtered.filter(q => reviewedQuestionIds[q.id] || revealedQuestionIds[q.id]).length > 0 ? "text-emerald-400" : "text-slate-500"} />
                <span>
                  {filtered.filter(q => reviewedQuestionIds[q.id] || revealedQuestionIds[q.id]).length}/{filtered.length} Practiced
                </span>
              </span>
            </div>

            {/* View Mode Toggle Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', background: '#090d16', padding: '3px', borderRadius: '10px', border: '1px solid #334155' }}>
              <button
                type="button"
                onClick={() => setViewMode('focus')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '6px 12px',
                  borderRadius: '7px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: 'none',
                  background: viewMode === 'focus' ? 'linear-gradient(135deg, #a855f7, #7c3aed)' : 'transparent',
                  color: viewMode === 'focus' ? '#ffffff' : '#94a3b8',
                  boxShadow: viewMode === 'focus' ? '0 2px 8px rgba(168, 85, 247, 0.4)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                <Grid size={13} />
                <span>Focus Mode (Grid + Prev/Next)</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '6px 12px',
                  borderRadius: '7px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: 'none',
                  background: viewMode === 'list' ? 'linear-gradient(135deg, #a855f7, #7c3aed)' : 'transparent',
                  color: viewMode === 'list' ? '#ffffff' : '#94a3b8',
                  boxShadow: viewMode === 'list' ? '0 2px 8px rgba(168, 85, 247, 0.4)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                <List size={13} />
                <span>List All ({filtered.length})</span>
              </button>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '16px', padding: '3rem', textAlign: 'center', color: '#94a3b8' }}>
              No interview questions found matching "{searchQuery}".
            </div>
          ) : viewMode === 'focus' ? (
            /* Focus Mode (Single question canvas on Left, Palette Grid on Right) */
            <div className="interview-focus-layout">
              <div className="interview-card-container">
                <InterviewQuestionCard
                  item={filtered[currentIndex] || filtered[0]}
                  index={currentIndex}
                  total={filtered.length}
                  isRevealed={Boolean(revealedQuestionIds[filtered[currentIndex]?.id])}
                  isSpeaking={speakingId === filtered[currentIndex]?.id}
                  isCopied={copiedId === filtered[currentIndex]?.id}
                  isReviewed={Boolean(reviewedQuestionIds[filtered[currentIndex]?.id] || revealedQuestionIds[filtered[currentIndex]?.id])}
                  onToggleAnswer={toggleAnswer}
                  onSpeak={handleSpeak}
                  onCopy={handleCopy}
                  onOpenModal={openModal}
                  onToggleReviewed={toggleReviewed}
                  isRecentItem={filtered[currentIndex]?.category === 'Recent Interview Questions Sep 2026'}
                  showPagination={true}
                  onPrev={handlePrevQuestion}
                  onNext={handleNextQuestion}
                  canPrev={currentIndex > 0}
                  canNext={currentIndex < filtered.length - 1}
                />
              </div>

              <InterviewQuestionPalette
                questions={filtered}
                currentIndex={currentIndex}
                onSelectIndex={(idx) => {
                  setCurrentIndex(idx);
                  if (window.innerWidth <= 1024) {
                    window.scrollTo({ top: 380, behavior: 'smooth' });
                  }
                }}
                revealedQuestionIds={revealedQuestionIds}
                reviewedQuestionIds={reviewedQuestionIds}
                onToggleReviewed={toggleReviewed}
                onResetReviewed={handleResetReviewed}
              />
            </div>
          ) : (
            /* List Mode (All questions rendered vertically) */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {filtered.map((item, idx) => (
                <div key={item.id || idx} className="interview-card-container">
                  <InterviewQuestionCard
                    item={item}
                    index={idx}
                    total={filtered.length}
                    isRevealed={Boolean(revealedQuestionIds[item.id])}
                    isSpeaking={speakingId === item.id}
                    isCopied={copiedId === item.id}
                    isReviewed={Boolean(reviewedQuestionIds[item.id] || revealedQuestionIds[item.id])}
                    onToggleAnswer={toggleAnswer}
                    onSpeak={handleSpeak}
                    onCopy={handleCopy}
                    onOpenModal={openModal}
                    onToggleReviewed={toggleReviewed}
                    isRecentItem={item.category === 'Recent Interview Questions Sep 2026'}
                    showPagination={false}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Dedicated Interview Practice Focus Modal */}
      {activeModalQuestion && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '1.5rem'
        }}>
          <div style={{
            background: '#1e293b',
            border: '1px solid #a855f7',
            borderRadius: '20px',
            width: '100%',
            maxWidth: '900px',
            maxHeight: '92vh',
            overflowY: 'auto',
            boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.8)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Modal Header */}
            <div style={{
              padding: '1.25rem 1.75rem',
              borderBottom: '1px solid #334155',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: '#0f172a',
              borderTopLeftRadius: '20px',
              borderTopRightRadius: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                <span style={{
                  fontSize: '0.75rem',
                  padding: '3px 10px',
                  borderRadius: '8px',
                  background: activeModalQuestion.category === 'Recent Interview Questions Sep 2026' ? 'rgba(236, 72, 153, 0.25)' : 'rgba(168, 85, 247, 0.2)',
                  color: activeModalQuestion.category === 'Recent Interview Questions Sep 2026' ? '#f472b6' : '#c084fc',
                  fontWeight: 700,
                  border: activeModalQuestion.category === 'Recent Interview Questions Sep 2026' ? '1px solid rgba(236, 72, 153, 0.5)' : '1px solid rgba(168, 85, 247, 0.4)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  {activeModalQuestion.category === 'Recent Interview Questions Sep 2026' && <Flame size={12} />}
                  {activeModalQuestion.category}
                </span>
                {activeModalQuestion.subCategory && (
                  <span style={{
                    fontSize: '0.75rem',
                    padding: '3px 10px',
                    borderRadius: '8px',
                    background: 'rgba(56, 189, 248, 0.15)',
                    color: '#38bdf8',
                    fontWeight: 700,
                    border: '1px solid rgba(56, 189, 248, 0.35)'
                  }}>
                    {activeModalQuestion.subCategory}
                  </span>
                )}
                {activeModalQuestion.dateTag && (
                  <span style={{
                    fontSize: '0.75rem',
                    padding: '3px 8px',
                    borderRadius: '8px',
                    background: 'rgba(34, 197, 94, 0.15)',
                    color: '#4ade80',
                    fontWeight: 700,
                    border: '1px solid rgba(34, 197, 94, 0.35)'
                  }}>
                    {activeModalQuestion.dateTag}
                  </span>
                )}
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  Target: {activeModalQuestion.role}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                {/* Audio Speak */}
                <button
                  onClick={() => handleSpeak(activeModalQuestion.id, activeModalQuestion.answer)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '6px 12px',
                    background: speakingId === activeModalQuestion.id ? '#dc2626' : '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '8px',
                    color: speakingId === activeModalQuestion.id ? '#ffffff' : '#38bdf8',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  {speakingId === activeModalQuestion.id ? <VolumeX size={14} /> : <Volume2 size={14} />}
                  <span>{speakingId === activeModalQuestion.id ? 'Stop' : 'Listen Script'}</span>
                </button>

                {/* Close Button */}
                <button
                  onClick={closeModal}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#c084fc', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.5px' }}>
                  Question Focus
                </span>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f8fafc', margin: '0.35rem 0 0 0', lineHeight: 1.35 }}>
                  {activeModalQuestion.question}
                </h2>
              </div>

              {/* Think Yourself Prompt */}
              <div style={{
                background: 'rgba(56, 189, 248, 0.08)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                borderRadius: '12px',
                padding: '1.25rem'
              }}>
                <div style={{ color: '#38bdf8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <HelpCircle size={16} />
                  <span>Think Yourself Prompt:</span>
                </div>
                <div style={{ color: '#bae6fd', fontSize: '0.92rem', lineHeight: 1.5 }}>
                  {activeModalQuestion.thinkPrompt}
                </div>
              </div>

              {/* Interviewer Trap Alert Box in Modal */}
              {activeModalQuestion.trap && (
                <div style={{
                  background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(15, 23, 42, 0.8) 100%)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: '12px',
                  padding: '1.25rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#f87171', fontWeight: 800, fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                    <AlertTriangle size={16} />
                    <span>Interviewer Trap Alert:</span>
                  </div>
                  <p style={{ margin: '0 0 0.5rem 0', color: '#fca5a5', fontSize: '0.9rem', lineHeight: 1.55 }}>
                    {activeModalQuestion.trap}
                  </p>
                  {activeModalQuestion.trapSolution && (
                    <div style={{
                      borderTop: '1px dashed rgba(239, 68, 68, 0.25)',
                      paddingTop: '0.5rem',
                      marginTop: '0.5rem',
                      color: '#cbd5e1',
                      fontSize: '0.88rem',
                      lineHeight: 1.55
                    }}>
                      <span style={{ color: '#4ade80', fontWeight: 700 }}>Recommended Strategy: </span>
                      <span>{activeModalQuestion.trapSolution}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Model Response */}
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.75rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Sparkles size={18} className="text-emerald-400" />
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#86efac', margin: 0 }}>
                      Complete Model Answer
                    </h3>
                  </div>

                  <button
                    onClick={() => handleCopy(activeModalQuestion.id, activeModalQuestion.answer)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '5px 12px',
                      background: '#0f172a',
                      border: '1px solid #334155',
                      borderRadius: '6px',
                      color: copiedId === activeModalQuestion.id ? '#4ade80' : '#cbd5e1',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    {copiedId === activeModalQuestion.id ? <Check size={13} /> : <Copy size={13} />}
                    <span>{copiedId === activeModalQuestion.id ? 'Copied' : 'Copy Response'}</span>
                  </button>
                </div>

                <div style={{
                  background: '#0f172a',
                  border: '1px solid #334155',
                  borderRadius: '14px',
                  padding: '1.5rem 1.75rem',
                  boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.5)'
                }}>
                  <FormattedAnswer text={activeModalQuestion.answer} />
                </div>
              </div>

              {/* Key Points Checklist */}
              {activeModalQuestion.keyPoints && (
                <div style={{
                  background: '#090d16',
                  border: '1px solid #334155',
                  borderRadius: '12px',
                  padding: '1.25rem'
                }}>
                  <h4 style={{ fontSize: '0.85rem', color: '#facc15', margin: '0 0 0.75rem 0', textTransform: 'uppercase', fontWeight: 700 }}>
                    Interviewer Evaluation Checklist:
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {activeModalQuestion.keyPoints.map((pt, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e2e8f0', fontSize: '0.875rem' }}>
                        <CheckCircle2 size={16} className="text-emerald-400" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer with Navigation */}
            <div style={{
              padding: '1rem 1.75rem',
              borderTop: '1px solid #334155',
              background: '#0f172a',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomLeftRadius: '20px',
              borderBottomRightRadius: '20px'
            }}>
              <button
                onClick={() => navigateModal(-1)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  background: '#1e293b',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#cbd5e1',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                <ChevronLeft size={16} />
                <span>Previous Question</span>
              </button>

              <button
                onClick={() => navigateModal(1)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 18px',
                  background: 'linear-gradient(135deg, #a855f7, #9333ea)',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                <span>Next Question</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
