// src/components/interview/RecentSetIntroModule.jsx
import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Copy,
  Check,
  Sparkles,
  CheckCircle2,
  Clock,
  Award,
  AlertTriangle,
  Flame,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { ONE_MINUTE_INTRO_DATA } from '../../data/interviewQuestions.js';

export default function RecentSetIntroModule({ onFocusQuestion }) {
  const [timerSeconds, setTimerSeconds] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [copied, setCopied] = useState(false);
  const [completedPillars, setCompletedPillars] = useState({});
  const [expandedPillar, setExpandedPillar] = useState('p1');
  const timerRef = useRef(null);

  // Countdown timer logic
  useEffect(() => {
    if (isTimerRunning) {
      timerRef.current = setInterval(() => {
        setTimerSeconds(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isTimerRunning]);

  const handleStartTimer = () => {
    if (timerSeconds === 0) setTimerSeconds(60);
    setIsTimerRunning(true);
  };

  const handlePauseTimer = () => {
    setIsTimerRunning(false);
  };

  const handleResetTimer = () => {
    setIsTimerRunning(false);
    setTimerSeconds(60);
  };

  // Text-To-Speech for 1-minute intro
  const handleSpeak = () => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const cleanSpeech = ONE_MINUTE_INTRO_DATA.modelScript
      .replace(/\[.*?\]/g, 'your background')
      .replace(/\*\*/g, '')
      .replace(/\*/g, '');

    const utterance = new SpeechSynthesisUtterance(cleanSpeech);
    utterance.rate = 0.95; // ~135 wpm natural speaking speed for 60s
    utterance.pitch = 1.0;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleCopyScript = () => {
    navigator.clipboard.writeText(ONE_MINUTE_INTRO_DATA.modelScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const togglePillarDone = (pillarId, e) => {
    e.stopPropagation();
    setCompletedPillars(prev => ({
      ...prev,
      [pillarId]: !prev[pillarId]
    }));
  };

  const completedCount = Object.values(completedPillars).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / ONE_MINUTE_INTRO_DATA.pillars.length) * 100);

  return (
    <div className="recent-intro-module">
      {/* Top Banner Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '1.5rem',
        borderBottom: '1px solid rgba(168, 85, 247, 0.25)',
        paddingBottom: '1.25rem'
      }}>
        <div style={{ maxWidth: '680px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(168, 85, 247, 0.25) 100%)',
            border: '1px solid rgba(236, 72, 153, 0.4)',
            color: '#f472b6',
            padding: '4px 12px',
            borderRadius: '10px',
            fontSize: '0.78rem',
            fontWeight: 800,
            marginBottom: '0.6rem',
            letterSpacing: '0.4px'
          }}>
            <Flame size={14} /> RECENT ACCENTURE INTERVIEW • SEP 2026 SET 1
          </div>
          <h2 style={{
            fontSize: '1.65rem',
            fontWeight: 800,
            color: '#f8fafc',
            margin: '0 0 0.5rem 0',
            lineHeight: 1.3
          }}>
            {ONE_MINUTE_INTRO_DATA.title}
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
            {ONE_MINUTE_INTRO_DATA.subtitle} The first 60 seconds set 80% of the interviewer's mental impression. Practice with our live 60-second stopwatch and natural speech player.
          </p>
        </div>

        {/* Stopwatch & Audio Control Center */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '0.75rem',
          background: 'rgba(15, 23, 42, 0.85)',
          border: '1px solid rgba(168, 85, 247, 0.3)',
          borderRadius: '14px',
          padding: '12px 18px',
          minWidth: '240px'
        }}>
          {/* Digital Timer Display */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={13} /> 60s SPEECH TIMER:
            </span>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '1.4rem',
              fontWeight: 800,
              color: timerSeconds <= 10 ? '#ef4444' : timerSeconds <= 25 ? '#facc15' : '#38bdf8'
            }}>
              00:{timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}
            </span>
          </div>

          {/* Timer Buttons */}
          <div style={{ display: 'flex', gap: '6px', width: '100%' }}>
            {!isTimerRunning ? (
              <button
                onClick={handleStartTimer}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px',
                  padding: '6px 10px',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  cursor: 'pointer'
                }}
              >
                <Play size={12} /> Start Practice
              </button>
            ) : (
              <button
                onClick={handlePauseTimer}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px',
                  padding: '6px 10px',
                  background: '#f59e0b',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  cursor: 'pointer'
                }}
              >
                <Pause size={12} /> Pause
              </button>
            )}

            <button
              onClick={handleResetTimer}
              title="Reset Timer to 60s"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px 10px',
                background: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '8px',
                color: '#cbd5e1',
                cursor: 'pointer'
              }}
            >
              <RotateCcw size={12} />
            </button>
          </div>

          {/* Audio TTS + Copy Script */}
          <div style={{ display: 'flex', gap: '6px', width: '100%', marginTop: '2px' }}>
            <button
              onClick={handleSpeak}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                padding: '5px 8px',
                background: isSpeaking ? '#dc2626' : 'rgba(56, 189, 248, 0.12)',
                border: isSpeaking ? '1px solid #ef4444' : '1px solid rgba(56, 189, 248, 0.3)',
                borderRadius: '8px',
                color: isSpeaking ? '#ffffff' : '#38bdf8',
                fontWeight: 600,
                fontSize: '0.75rem',
                cursor: 'pointer'
              }}
            >
              {isSpeaking ? <VolumeX size={13} /> : <Volume2 size={13} />}
              <span>{isSpeaking ? 'Stop Audio' : 'Listen Sample'}</span>
            </button>

            <button
              onClick={handleCopyScript}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                padding: '5px 10px',
                background: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '8px',
                color: copied ? '#4ade80' : '#cbd5e1',
                fontWeight: 600,
                fontSize: '0.75rem',
                cursor: 'pointer'
              }}
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Model Answer Script Card */}
      <div style={{
        background: '#090d16',
        border: '1px solid rgba(56, 189, 248, 0.25)',
        borderRadius: '14px',
        padding: '1.25rem 1.5rem',
        marginBottom: '1.75rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={16} className="text-emerald-400" />
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#86efac', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Full 60-Second Model Speaking Script
            </span>
          </div>
          <span style={{ fontSize: '0.75rem', color: '#94a3b8', background: '#0f172a', padding: '2px 8px', borderRadius: '6px' }}>
            Word Count: ~135 words (Ideal ~130-140 WPM)
          </span>
        </div>

        <p style={{
          margin: 0,
          color: '#e0f2fe',
          fontSize: '0.94rem',
          lineHeight: 1.7,
          fontStyle: 'italic',
          background: 'rgba(56, 189, 248, 0.04)',
          padding: '12px 16px',
          borderRadius: '10px',
          borderLeft: '3px solid #38bdf8'
        }}>
          "{ONE_MINUTE_INTRO_DATA.modelScript}"
        </p>
      </div>

      {/* 6 Structured Pillars Breakdown */}
      <div style={{ marginBottom: '1.75rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '1rem'
        }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#f8fafc', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Award size={18} className="text-purple-400" /> The 6 Core Pillars of the 1-Minute Pitch
          </h3>
          <span style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>
            Practice Progress: <strong style={{ color: '#a855f7' }}>{completedCount}/6</strong> Pillars Mastered ({progressPercent}%)
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '0.9rem'
        }}>
          {ONE_MINUTE_INTRO_DATA.pillars.map((pillar) => {
            const isDone = !!completedPillars[pillar.id];
            const isExpanded = expandedPillar === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => setExpandedPillar(isExpanded ? null : pillar.id)}
                style={{
                  background: isDone ? 'rgba(16, 185, 129, 0.08)' : 'rgba(15, 23, 42, 0.75)',
                  border: isDone
                    ? '1px solid rgba(16, 185, 129, 0.4)'
                    : isExpanded
                    ? '1px solid rgba(168, 85, 247, 0.5)'
                    : '1px solid rgba(51, 65, 85, 0.65)',
                  borderRadius: '12px',
                  padding: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  position: 'relative'
                }}
              >
                {/* Header Row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button
                      onClick={(e) => togglePillarDone(pillar.id, e)}
                      title={isDone ? 'Mark as incomplete' : 'Mark as practiced'}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: isDone ? '#10b981' : '#64748b',
                        padding: 0,
                        cursor: 'pointer',
                        display: 'flex'
                      }}
                    >
                      <CheckCircle2 size={18} />
                    </button>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{
                          fontSize: '0.7rem',
                          fontFamily: 'JetBrains Mono',
                          fontWeight: 700,
                          background: 'rgba(168, 85, 247, 0.2)',
                          color: '#c084fc',
                          padding: '1px 6px',
                          borderRadius: '4px'
                        }}>
                          {pillar.timeSlot}
                        </span>
                        <h4 style={{
                          margin: 0,
                          fontSize: '0.92rem',
                          fontWeight: 700,
                          color: isDone ? '#86efac' : '#f8fafc'
                        }}>
                          {pillar.title}
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div style={{ color: '#94a3b8' }}>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>

                {/* Subtitle / Purpose */}
                <p style={{ margin: '0.5rem 0 0 26px', color: '#94a3b8', fontSize: '0.8rem', lineHeight: 1.4 }}>
                  {pillar.purpose}
                </p>

                {/* Expanded Details */}
                {isExpanded && (
                  <div style={{
                    marginTop: '0.85rem',
                    paddingTop: '0.85rem',
                    borderTop: '1px solid rgba(51, 65, 85, 0.7)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem'
                  }}>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#38bdf8', fontWeight: 700, textTransform: 'uppercase', marginBottom: '3px' }}>
                        Delivery Script Example:
                      </div>
                      <p style={{
                        margin: 0,
                        fontSize: '0.85rem',
                        color: '#cbd5e1',
                        fontStyle: 'italic',
                        lineHeight: 1.5,
                        background: 'rgba(0, 0, 0, 0.3)',
                        padding: '6px 10px',
                        borderRadius: '6px'
                      }}>
                        "{pillar.content}"
                      </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '0.78rem', color: '#facc15' }}>
                      <AlertTriangle size={13} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span><strong>Key Tip:</strong> {pillar.tip}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Evaluation Rubric & Golden Rules */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1rem'
      }}>
        {/* Evaluation Checklist */}
        <div style={{
          background: 'rgba(15, 23, 42, 0.65)',
          border: '1px solid rgba(51, 65, 85, 0.6)',
          borderRadius: '12px',
          padding: '1.25rem'
        }}>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#38bdf8', margin: '0 0 0.75rem 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Interviewer Evaluation Rubric
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {ONE_MINUTE_INTRO_DATA.evaluationRubric.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                <CheckCircle2 size={15} className="text-sky-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Golden Rules */}
        <div style={{
          background: 'rgba(15, 23, 42, 0.65)',
          border: '1px solid rgba(51, 65, 85, 0.6)',
          borderRadius: '12px',
          padding: '1.25rem'
        }}>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#f43f5e', margin: '0 0 0.75rem 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Accenture Interview Golden Rules
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {ONE_MINUTE_INTRO_DATA.goldenRules.map((rule, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                <span style={{ color: '#f43f5e', fontWeight: 800 }}>•</span>
                <span>{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {onFocusQuestion && (
        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={() => onFocusQuestion('rec-int-01')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 22px',
              background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.25), rgba(168, 85, 247, 0.3))',
              border: '1px solid rgba(236, 72, 153, 0.5)',
              borderRadius: '10px',
              color: '#fdf2f8',
              fontSize: '0.86rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(236, 72, 153, 0.2)'
            }}
          >
            <Sparkles size={16} className="text-pink-400" />
            <span>Open Question #1 Card (Full Script, Traps & Checklist)</span>
          </button>
        </div>
      )}
    </div>
  );
}
