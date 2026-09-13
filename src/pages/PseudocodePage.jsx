// src/pages/PseudocodePage.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Code2,
  Play,
  RotateCcw,
  BookOpen,
  Clock,
  Bookmark,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  Zap,
  ArrowRight,
  ArrowLeft,
  Filter,
  Check,
  Award
} from 'lucide-react';
import {
  pseudocodeQuestions,
  PSEUDOCODE_TOPICS,
  filterPseudocodeQuestions
} from '../data/pseudocodeQuestions.js';
import { pseudocodeStorage } from '../utils/pseudocodeStorage.js';
import PseudocodeTracer from '../components/pseudocode/PseudocodeTracer.jsx';
import PseudocodeHandbookModal from '../components/pseudocode/PseudocodeHandbookModal.jsx';
import PseudocodeScratchpad from '../components/pseudocode/PseudocodeScratchpad.jsx';
import SEO from '../components/SEO.jsx';
import { seoConfig } from '../config/seo.js';

export default function PseudocodePage({ theme = 'dark' }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const topicParam = searchParams.get('topic') || 'all';

  const [activeTopic, setActiveTopic] = useState(topicParam);
  const [mode, setMode] = useState('practice'); // 'practice' | 'exam'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(() => pseudocodeStorage.getAnswers());
  const [bookmarks, setBookmarks] = useState(() => pseudocodeStorage.getBookmarks());
  const [showHandbook, setShowHandbook] = useState(false);

  // Exam Mode timer & submission
  const [examRemainingSeconds, setExamRemainingSeconds] = useState(20 * 60); // 20 minutes
  const [examFinished, setExamFinished] = useState(false);
  const [examScorecard, setExamScorecard] = useState(null);

  // Filtered question set
  const filteredQuestions = useMemo(() => {
    return filterPseudocodeQuestions({ topic: activeTopic });
  }, [activeTopic]);

  const currentQuestion = filteredQuestions[currentIndex] || filteredQuestions[0];
  const isBookmarked = currentQuestion ? bookmarks.includes(currentQuestion.id) : false;
  const currentAnswer = currentQuestion ? userAnswers[currentQuestion.id] : null;

  // Exam timer
  useEffect(() => {
    let timer = null;
    if (mode === 'exam' && !examFinished) {
      timer = setInterval(() => {
        setExamRemainingSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleFinishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [mode, examFinished]);

  const handleSelectOption = (optIdx) => {
    if (!currentQuestion) return;
    const isCorrect = optIdx === currentQuestion.correctAnswer;
    pseudocodeStorage.saveAnswer(currentQuestion.id, optIdx, isCorrect, {
      title: currentQuestion.title,
      difficulty: currentQuestion.difficulty
    });
    setUserAnswers(pseudocodeStorage.getAnswers());
  };

  const handleToggleBookmark = () => {
    if (!currentQuestion) return;
    pseudocodeStorage.toggleBookmark(currentQuestion.id);
    setBookmarks(pseudocodeStorage.getBookmarks());
  };

  const handleTopicChange = (topId) => {
    setActiveTopic(topId);
    setSearchParams({ topic: topId }, { replace: true });
    setCurrentIndex(0);
  };

  const handleFinishExam = () => {
    let correct = 0;
    filteredQuestions.forEach((q) => {
      const ans = userAnswers[q.id];
      if (ans && ans.selected === q.correctAnswer) {
        correct++;
      }
    });

    const total = filteredQuestions.length;
    const scorePercent = Math.round((correct / Math.max(1, total)) * 100);

    const scorecard = {
      scorePercent,
      correctCount: correct,
      totalCount: total,
      timeUsedFormatted: `${Math.floor((1200 - examRemainingSeconds) / 60)}m ${(1200 - examRemainingSeconds) % 60}s`
    };

    setExamScorecard(scorecard);
    setExamFinished(true);
    pseudocodeStorage.saveExamResult(scorecard);
  };

  const formatTimer = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return (
    <div className="pseudocode-page-container">
      <SEO {...seoConfig.pseudocode} />
      {/* Top Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)',
        border: '1px solid rgba(234, 179, 8, 0.3)',
        borderRadius: '20px',
        padding: '2rem',
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.5rem'
      }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(234, 179, 8, 0.15)', color: '#facc15', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            <Zap size={14} /> TECHNICAL ROUND COMPONENT
          </div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 900, color: '#f8fafc', margin: '0 0 0.5rem 0' }}>
            Accenture Pseudocode Questions & Practice
          </h1>
          <p style={{ color: '#94a3b8', margin: 0, fontSize: '1rem', maxWidth: '650px' }}>
            Master bitwise logic (`^`, `&`, `|`), tree recursion call stacks, while-loop step mutations, and array pointers with our step-by-step execution tracer.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => setShowHandbook(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '10px 16px',
              background: '#0f172a',
              border: '1px solid #eab308',
              borderRadius: '10px',
              color: '#facc15',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer'
            }}
          >
            <BookOpen size={16} />
            <span>Operator Handbook</span>
          </button>

          {/* Mode Switcher */}
          <div style={{ display: 'flex', background: '#0f172a', border: '1px solid #334155', borderRadius: '10px', padding: '4px' }}>
            <button
              onClick={() => { setMode('practice'); setExamFinished(false); }}
              style={{
                padding: '6px 14px',
                borderRadius: '8px',
                background: mode === 'practice' ? '#0284c7' : 'transparent',
                color: '#ffffff',
                border: 'none',
                fontWeight: 600,
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}
            >
              Practice Mode
            </button>
            <button
              onClick={() => { setMode('exam'); setExamFinished(false); setExamRemainingSeconds(20 * 60); }}
              style={{
                padding: '6px 14px',
                borderRadius: '8px',
                background: mode === 'exam' ? '#ea580c' : 'transparent',
                color: '#ffffff',
                border: 'none',
                fontWeight: 600,
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}
            >
              20-Min Exam Mode
            </button>
          </div>
        </div>
      </div>

      {/* Topic Filter Pills */}
      <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.75rem', flexWrap: 'wrap' }}>
        {PSEUDOCODE_TOPICS.map((top) => (
          <button
            key={top.id}
            onClick={() => handleTopicChange(top.id)}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              background: activeTopic === top.id ? '#eab308' : '#1e293b',
              color: activeTopic === top.id ? '#0f172a' : '#cbd5e1',
              border: activeTopic === top.id ? '1px solid #eab308' : '1px solid #334155',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.15s'
            }}
          >
            {top.label}
          </button>
        ))}
      </div>

      {/* Exam Scorecard View */}
      {examFinished && examScorecard && (
        <div style={{
          background: '#1e293b',
          border: '1px solid #eab308',
          borderRadius: '16px',
          padding: '2rem',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          <Award size={48} style={{ color: '#facc15', margin: '0 auto 1rem auto' }} />
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 0.5rem 0' }}>
            Pseudocode Exam Score: {examScorecard.scorePercent}%
          </h2>
          <p style={{ color: '#94a3b8', margin: '0 0 1.5rem 0' }}>
            Correct: {examScorecard.correctCount} / {examScorecard.totalCount} Questions • Time: {examScorecard.timeUsedFormatted}
          </p>
          <button
            onClick={() => setExamFinished(false)}
            style={{ padding: '10px 20px', background: '#0284c7', border: 'none', borderRadius: '8px', color: '#ffffff', fontWeight: 700, cursor: 'pointer' }}
          >
            Review Answers
          </button>
        </div>
      )}

      {/* Main Two-Column Layout */}
      <div className="pseudocode-layout-grid">
        {/* Left: Code, Tracer, and Question card */}
        <div>
          {currentQuestion && (
            <div style={{
              background: '#1e293b',
              border: '1px solid #334155',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
            }}>
              {/* Question Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#38bdf8' }}>
                    Question {currentIndex + 1} of {filteredQuestions.length}
                  </span>
                  <span style={{
                    fontSize: '0.7rem',
                    padding: '2px 8px',
                    borderRadius: '8px',
                    background: currentQuestion.difficulty === 'Easy' ? '#14532d' : currentQuestion.difficulty === 'Medium' ? '#713f12' : '#7f1d1d',
                    color: currentQuestion.difficulty === 'Easy' ? '#4ade80' : currentQuestion.difficulty === 'Medium' ? '#facc15' : '#f87171',
                    fontWeight: 700
                  }}>
                    {currentQuestion.difficulty}
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  {mode === 'exam' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#f97316', fontWeight: 700, fontFamily: 'JetBrains Mono' }}>
                      <Clock size={16} />
                      <span>{formatTimer(examRemainingSeconds)}</span>
                    </div>
                  )}

                  <button
                    onClick={handleToggleBookmark}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: isBookmarked ? '#facc15' : '#64748b',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontSize: '0.8rem'
                    }}
                  >
                    <Bookmark size={16} fill={isBookmarked ? '#facc15' : 'none'} />
                    <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
                  </button>
                </div>
              </div>

              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 1rem 0' }}>
                {currentQuestion.title}
              </h2>

              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', margin: '0 0 1.25rem 0' }}>
                Trace the execution of the pseudocode below and determine the final printed value:
              </p>

              {/* Step-by-Step Interactive Tracer */}
              <PseudocodeTracer
                pseudocode={currentQuestion.pseudocode}
                stepTrace={currentQuestion.stepTrace}
              />

              {/* Scratchpad Note */}
              <PseudocodeScratchpad questionId={currentQuestion.id} />

              {/* Options Section */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h3 style={{ fontSize: '1rem', color: '#94a3b8', margin: '0 0 0.75rem 0' }}>
                  Select Output:
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                  {currentQuestion.options.map((opt, optIdx) => {
                    const isSelected = currentAnswer && currentAnswer.selected === optIdx;
                    const showCorrect = (mode === 'practice' && currentAnswer) || examFinished;
                    const isActuallyCorrect = optIdx === currentQuestion.correctAnswer;

                    let bg = '#0f172a';
                    let border = '#334155';
                    let color = '#cbd5e1';

                    if (isSelected) {
                      bg = 'rgba(56, 189, 248, 0.15)';
                      border = '#38bdf8';
                      color = '#38bdf8';
                    }

                    if (showCorrect) {
                      if (isActuallyCorrect) {
                        bg = 'rgba(34, 197, 94, 0.15)';
                        border = '#22c55e';
                        color = '#4ade80';
                      } else if (isSelected && !isActuallyCorrect) {
                        bg = 'rgba(239, 68, 68, 0.15)';
                        border = '#ef4444';
                        color = '#ef4444';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOption(optIdx)}
                        style={{
                          padding: '12px 16px',
                          borderRadius: '10px',
                          background: bg,
                          border: `1px solid ${border}`,
                          color: color,
                          fontWeight: 700,
                          fontSize: '1rem',
                          fontFamily: 'JetBrains Mono',
                          textAlign: 'left',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          transition: 'all 0.15s'
                        }}
                      >
                        <span>{String.fromCharCode(65 + optIdx)}. {opt}</span>
                        {showCorrect && isActuallyCorrect && <CheckCircle2 size={16} className="text-emerald-400" />}
                        {showCorrect && isSelected && !isActuallyCorrect && <XCircle size={16} className="text-red-400" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Practice Mode Explanation Box */}
              {mode === 'practice' && currentAnswer && (
                <div style={{
                  background: currentAnswer.isCorrect ? 'rgba(34, 197, 94, 0.08)' : 'rgba(239, 68, 68, 0.08)',
                  border: currentAnswer.isCorrect ? '1px solid rgba(34, 197, 94, 0.3)' : '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: currentAnswer.isCorrect ? '#4ade80' : '#ef4444', fontWeight: 700, marginBottom: '0.5rem' }}>
                    {currentAnswer.isCorrect ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
                    <span>{currentAnswer.isCorrect ? 'Correct Analysis!' : 'Incorrect Output'}</span>
                  </div>
                  <div style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                    {currentQuestion.explanation}
                  </div>
                </div>
              )}

              {/* Navigation Footer */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex(prev => prev - 1)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '8px 16px',
                    background: '#0f172a',
                    border: '1px solid #334155',
                    color: currentIndex === 0 ? '#475569' : '#f8fafc',
                    borderRadius: '8px',
                    cursor: currentIndex === 0 ? 'not-allowed' : 'pointer'
                  }}
                >
                  <ArrowLeft size={14} />
                  <span>Previous</span>
                </button>

                {mode === 'exam' && (
                  <button
                    onClick={handleFinishExam}
                    style={{
                      padding: '8px 20px',
                      background: '#ef4444',
                      border: 'none',
                      color: '#ffffff',
                      borderRadius: '8px',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    Finish Exam
                  </button>
                )}

                <button
                  disabled={currentIndex === filteredQuestions.length - 1}
                  onClick={() => setCurrentIndex(prev => prev + 1)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '8px 18px',
                    background: '#0284c7',
                    border: 'none',
                    color: '#ffffff',
                    borderRadius: '8px',
                    fontWeight: 600,
                    cursor: currentIndex === filteredQuestions.length - 1 ? 'not-allowed' : 'pointer'
                  }}
                >
                  <span>Next</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right: Question Palette & Navigation */}
        <div>
          <div style={{
            background: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '16px',
            padding: '1.5rem',
            position: 'sticky',
            top: '80px'
          }}>
            <h3 style={{ fontSize: '1.05rem', color: '#f8fafc', margin: '0 0 1rem 0' }}>
              Question Palette ({filteredQuestions.length})
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '8px',
              marginBottom: '1.5rem'
            }}>
              {filteredQuestions.map((q, idx) => {
                const ans = userAnswers[q.id];
                const isCurrent = idx === currentIndex;
                let bg = '#0f172a';
                let color = '#cbd5e1';
                let border = '#334155';

                if (isCurrent) {
                  border = '#38bdf8';
                }
                if (ans) {
                  bg = ans.isCorrect ? '#14532d' : '#7f1d1d';
                  color = ans.isCorrect ? '#4ade80' : '#f87171';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    style={{
                      height: '38px',
                      borderRadius: '8px',
                      background: bg,
                      border: `1px solid ${border}`,
                      color: color,
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontSize: '0.85rem'
                    }}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div style={{ borderTop: '1px solid #334155', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.75rem', color: '#94a3b8' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#14532d' }} />
                <span>Solved / Correct</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#7f1d1d' }} />
                <span>Incorrect</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#0f172a', border: '1px solid #334155' }} />
                <span>Unattempted</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Handbook Modal */}
      <PseudocodeHandbookModal
        isOpen={showHandbook}
        onClose={() => setShowHandbook(false)}
      />
    </div>
  );
}
