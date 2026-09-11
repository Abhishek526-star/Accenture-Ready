// src/pages/InterviewPrepPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import {
  Mic,
  MessageSquare,
  HelpCircle,
  Eye,
  EyeOff,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Coffee,
  Database,
  Code2,
  Users,
  Copy,
  Check,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  AlertTriangle,
  ChevronRight,
  ChevronLeft,
  X,
  Search,
  Award,
  Flame,
  ThumbsUp
} from 'lucide-react';
import { interviewQuestions } from '../data/interviewQuestions.js';

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

export default function InterviewPrepPage({ theme = 'dark' }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [revealedQuestionIds, setRevealedQuestionIds] = useState({});
  const [copiedId, setCopiedId] = useState(null);
  const [speakingId, setSpeakingId] = useState(null);
  
  // Dedicated Practice Modal State
  const [activeModalQuestion, setActiveModalQuestion] = useState(null);

  const categories = [
    'All',
    'HR Interview',
    'Java Interview',
    'Technical Interview',
    'SQL Interview',
    'DSA Interview',
    'Project Questions'
  ];

  const filtered = interviewQuestions.filter(q => {
    const matchesCat = selectedCategory === 'All' || q.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !query ||
      q.question.toLowerCase().includes(query) ||
      q.category.toLowerCase().includes(query) ||
      q.role.toLowerCase().includes(query) ||
      q.answer.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
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
      alert('Speech synthesis is not supported in this browser.');
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

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const openModal = (question) => {
    setActiveModalQuestion(question);
    setRevealedQuestionIds(prev => ({
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
    const currentIndex = filtered.findIndex(q => q.id === activeModalQuestion.id);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + direction + filtered.length) % filtered.length;
    openModal(filtered[nextIndex]);
  };

  return (
    <div className="interview-page-container">
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
            Interview Preparation Studio
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
            onChange={(e) => setSearchQuery(e.target.value)}
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

      {/* Category Filter Pills */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          const count = cat === 'All' ? interviewQuestions.length : interviewQuestions.filter(q => q.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '7px 16px',
                borderRadius: '10px',
                background: isActive ? '#a855f7' : '#1e293b',
                color: isActive ? '#ffffff' : '#cbd5e1',
                border: isActive ? '1px solid #a855f7' : '1px solid #334155',
                fontWeight: isActive ? 700 : 500,
                fontSize: '0.85rem',
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
                background: isActive ? 'rgba(0, 0, 0, 0.25)' : '#0f172a',
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

      {/* Questions List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
        {filtered.length === 0 ? (
          <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '16px', padding: '3rem', textAlign: 'center', color: '#94a3b8' }}>
            No interview questions found matching "{searchQuery}".
          </div>
        ) : (
          filtered.map((item, idx) => {
            const isRevealed = !!revealedQuestionIds[item.id];
            const isSpeaking = speakingId === item.id;
            const isCopied = copiedId === item.id;

            return (
              <div
                key={item.id || idx}
                style={{
                  background: '#1e293b',
                  border: isRevealed ? '1px solid rgba(168, 85, 247, 0.4)' : '1px solid #334155',
                  borderRadius: '16px',
                  padding: '1.75rem 2rem',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)',
                  transition: 'all 0.2s ease'
                }}
              >
                {/* Question Top Header Bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      padding: '3px 10px',
                      borderRadius: '8px',
                      background: 'rgba(168, 85, 247, 0.15)',
                      color: '#c084fc',
                      fontWeight: 700,
                      border: '1px solid rgba(168, 85, 247, 0.3)'
                    }}>
                      {item.category}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', background: '#0f172a', padding: '3px 10px', borderRadius: '8px' }}>
                      Target: {item.role}
                    </span>
                  </div>

                  {/* Actions Right */}
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    {/* Open in Dedicated Focus Modal */}
                    <button
                      onClick={() => openModal(item)}
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
                      onClick={() => toggleAnswer(item.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '6px 14px',
                        background: isRevealed ? '#0f172a' : 'linear-gradient(135deg, #a855f7, #9333ea)',
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
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 1.25rem 0', lineHeight: 1.4 }}>
                  {item.question}
                </h2>

                {/* Think Yourself Prompt */}
                <div style={{
                  background: 'rgba(56, 189, 248, 0.07)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  borderRadius: '12px',
                  padding: '1rem 1.25rem',
                  marginBottom: isRevealed ? '1.5rem' : '0'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#38bdf8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                    <HelpCircle size={15} />
                    <span>Think Yourself Before Revealing:</span>
                  </div>
                  <p style={{ margin: 0, color: '#bae6fd', fontSize: '0.9rem', lineHeight: 1.55 }}>
                    {item.thinkPrompt}
                  </p>
                </div>

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
                          onClick={() => handleSpeak(item.id, item.answer)}
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
                          onClick={() => handleCopy(item.id, item.answer)}
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
              </div>
            );
          })
        )}
      </div>

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
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{
                  fontSize: '0.75rem',
                  padding: '3px 10px',
                  borderRadius: '8px',
                  background: 'rgba(168, 85, 247, 0.2)',
                  color: '#c084fc',
                  fontWeight: 700,
                  border: '1px solid rgba(168, 85, 247, 0.4)'
                }}>
                  {activeModalQuestion.category}
                </span>
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
