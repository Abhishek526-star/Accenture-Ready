// src/pages/MockAssessmentPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import {
  Clock,
  CheckCircle2,
  AlertTriangle,
  Play,
  ArrowRight,
  ArrowLeft,
  Send,
  HelpCircle,
  Database,
  Code2,
  Award,
  Sparkles,
  Zap
} from 'lucide-react';
import { mockTestService, initializeMockSession } from '../services/mockTestService.js';

export default function MockAssessmentPage({ theme = 'dark' }) {
  const navigate = useNavigate();
  const [session, setSession] = useState(() => {
    const existing = mockTestService.getActiveSession();
    return existing || null;
  });

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(session ? session.remainingSeconds : 5400);
  const [testResult, setTestResult] = useState(null);
  const [codeAnswer, setCodeAnswer] = useState('');
  const [sqlAnswer, setSqlAnswer] = useState('');
  const timerRef = useRef(null);

  // Timer effect
  useEffect(() => {
    if (!session || testResult) return;

    timerRef.current = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleAutoSubmit();
          return 0;
        }
        const updated = prev - 1;
        session.remainingSeconds = updated;
        mockTestService.updateSession(session);
        return updated;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [session, testResult]);

  const handleStartTest = () => {
    const newSession = initializeMockSession();
    setSession(newSession);
    setRemainingSeconds(newSession.remainingSeconds);
    setCurrentSectionIndex(0);
    setCurrentQuestionIndex(0);
    setTestResult(null);
  };

  const handleAutoSubmit = () => {
    if (session) {
      const res = mockTestService.calculateMockResults(session);
      setTestResult(res);
      setSession(null);
    }
  };

  const handleManualSubmit = () => {
    if (window.confirm('Are you sure you want to finish and submit your Accenture Mock Assessment?')) {
      handleAutoSubmit();
    }
  };

  const formatTimer = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  if (!session && !testResult) {
    return (
      <div style={{ maxWidth: '900px', margin: '3rem auto', padding: '0 1.5rem' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)',
          border: '1px solid rgba(56, 189, 248, 0.25)',
          borderRadius: '20px',
          padding: '3rem 2.5rem',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
          textAlign: 'center'
        }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '4px 12px', borderRadius: '16px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '1rem' }}>
            <Sparkles size={14} /> OFFICIAL SIMULATION
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 1rem 0' }}>
            Accenture Full Mock Assessment
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
            Realistic 90-minute timed environment replicating the full Accenture recruitment test format: Frontend Coding, SQL, Technical Aptitude MCQs, and Cognitive Reasoning.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',
            maxWidth: '680px',
            margin: '0 auto 2.5rem auto'
          }}>
            <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '10px', border: '1px solid #334155' }}>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Duration</span>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#38bdf8' }}>90 Mins</div>
            </div>
            <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '10px', border: '1px solid #334155' }}>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Coding</span>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc' }}>2 Questions</div>
            </div>
            <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '10px', border: '1px solid #334155' }}>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>SQL</span>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f97316' }}>3 Questions</div>
            </div>
            <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '10px', border: '1px solid #334155' }}>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Aptitude / MCQs</span>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#a855f7' }}>15 Questions</div>
            </div>
          </div>

          <button
            onClick={handleStartTest}
            className="btn btn-primary"
            style={{
              padding: '14px 32px',
              fontSize: '1.1rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #0284c7, #0369a1)',
              border: 'none',
              borderRadius: '12px',
              color: '#ffffff',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(2, 132, 199, 0.4)'
            }}
          >
            START MOCK ASSESSMENT
          </button>
        </div>
      </div>
    );
  }

  // Completed Test Scorecard View
  if (testResult) {
    return (
      <div style={{ maxWidth: '960px', margin: '2.5rem auto', padding: '0 1.5rem' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          borderRadius: '20px',
          padding: '2.5rem',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.8rem', color: '#4ade80', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              🎉 Assessment Complete
            </span>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f8fafc', margin: '0.5rem 0' }}>
              Final Candidate Scorecard: {testResult.score}%
            </h1>
            <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.95rem' }}>
              Time Used: {testResult.timeUsedFormatted} • Accuracy: {testResult.accuracy}%
            </p>
          </div>

          {/* Breakdown Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ background: '#0f172a', padding: '1.25rem', borderRadius: '12px', border: '1px solid #334155', textAlign: 'center' }}>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Coding</span>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#38bdf8' }}>{testResult.codingScore}%</div>
            </div>
            <div style={{ background: '#0f172a', padding: '1.25rem', borderRadius: '12px', border: '1px solid #334155', textAlign: 'center' }}>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>SQL Round</span>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f97316' }}>{testResult.sqlScore}%</div>
            </div>
            <div style={{ background: '#0f172a', padding: '1.25rem', borderRadius: '12px', border: '1px solid #334155', textAlign: 'center' }}>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Aptitude MCQs</span>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#a855f7' }}>{testResult.mcqScore}%</div>
            </div>
            <div style={{ background: '#0f172a', padding: '1.25rem', borderRadius: '12px', border: '1px solid #334155', textAlign: 'center' }}>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Cognitive</span>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#10b981' }}>{testResult.cognitiveScore}%</div>
            </div>
          </div>

          {/* Weak Areas Detected */}
          <div style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '14px', border: '1px solid #334155', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#f8fafc', margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <AlertTriangle size={18} className="text-amber-400" />
              <span>Diagnosed Focus Areas</span>
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: '0 0 1rem 0' }}>
              Topics where accuracy dropped below target threshold:
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {testResult.weakAreas.map((area, idx) => (
                <span key={idx} style={{ padding: '6px 12px', background: '#ef444420', color: '#ef4444', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600 }}>
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link
              to="/analytics"
              className="btn btn-primary"
              style={{
                padding: '12px 24px',
                background: '#38bdf8',
                color: '#0f172a',
                fontWeight: 700,
                borderRadius: '8px',
                textDecoration: 'none'
              }}
            >
              View Full Analytics
            </Link>
            <Link
              to="/history"
              className="btn btn-outline"
              style={{
                padding: '12px 24px',
                background: '#1e293b',
                color: '#f8fafc',
                border: '1px solid #334155',
                borderRadius: '8px',
                textDecoration: 'none'
              }}
            >
              Score History
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Active Assessment Test View
  const activeSection = session.sections[currentSectionIndex];
  const totalSections = session.sections.length;

  return (
    <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '1.5rem' }}>
      {/* Top Test Navigation Bar */}
      <div style={{
        background: '#1e293b',
        border: '1px solid #334155',
        borderRadius: '12px',
        padding: '1rem 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '1.5rem'
      }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {session.sections.map((sec, idx) => (
            <button
              key={sec.id}
              onClick={() => {
                setCurrentSectionIndex(idx);
                setCurrentQuestionIndex(0);
              }}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                background: currentSectionIndex === idx ? '#0284c7' : '#0f172a',
                color: '#ffffff',
                border: currentSectionIndex === idx ? '1px solid #38bdf8' : '1px solid #334155',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              Section {idx + 1}: {sec.title} ({sec.count})
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '6px 14px',
            background: remainingSeconds < 300 ? '#7f1d1d' : '#0f172a',
            border: remainingSeconds < 300 ? '1px solid #ef4444' : '1px solid #334155',
            borderRadius: '8px',
            color: remainingSeconds < 300 ? '#ef4444' : '#38bdf8',
            fontWeight: 700,
            fontFamily: 'JetBrains Mono',
            fontSize: '1.1rem'
          }}>
            <Clock size={16} />
            <span>{formatTimer(remainingSeconds)}</span>
          </div>

          <button
            onClick={handleManualSubmit}
            style={{
              padding: '8px 18px',
              background: '#ef4444',
              border: 'none',
              borderRadius: '8px',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer'
            }}
          >
            Submit Assessment
          </button>
        </div>
      </div>

      {/* Section Content */}
      <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '16px', padding: '2rem' }}>
        {activeSection.id === 'mcq' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                Question {currentQuestionIndex + 1} of {activeSection.questions.length}
              </span>
              <span style={{ fontSize: '0.8rem', padding: '2px 8px', borderRadius: '6px', background: '#0f172a', color: '#a855f7' }}>
                {activeSection.questions[currentQuestionIndex]?.subject || 'MCQ'}
              </span>
            </div>

            <h2 style={{ fontSize: '1.25rem', color: '#f8fafc', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              {activeSection.questions[currentQuestionIndex]?.question}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              {(activeSection.questions[currentQuestionIndex]?.options || []).map((opt, optIdx) => {
                const isSelected = session.answers.mcq[activeSection.questions[currentQuestionIndex].id] === optIdx;
                return (
                  <button
                    key={optIdx}
                    onClick={() => {
                      mockTestService.saveAnswer('mcq', activeSection.questions[currentQuestionIndex].id, optIdx);
                      setSession({ ...session });
                    }}
                    style={{
                      padding: '12px 16px',
                      borderRadius: '8px',
                      background: isSelected ? 'rgba(56, 189, 248, 0.15)' : '#0f172a',
                      border: isSelected ? '1px solid #38bdf8' : '1px solid #334155',
                      color: isSelected ? '#38bdf8' : '#cbd5e1',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '0.95rem'
                    }}
                  >
                    {String.fromCharCode(65 + optIdx)}. {opt}
                  </button>
                );
              })}
            </div>

            {/* Question Navigation Footer */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button
                disabled={currentQuestionIndex === 0}
                onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
                style={{ padding: '8px 16px', background: '#0f172a', border: '1px solid #334155', color: '#f8fafc', borderRadius: '6px', cursor: currentQuestionIndex === 0 ? 'not-allowed' : 'pointer' }}
              >
                Previous
              </button>
              <button
                disabled={currentQuestionIndex === activeSection.questions.length - 1}
                onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                style={{ padding: '8px 16px', background: '#0284c7', border: 'none', color: '#ffffff', borderRadius: '6px', cursor: currentQuestionIndex === activeSection.questions.length - 1 ? 'not-allowed' : 'pointer', fontWeight: 600 }}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {activeSection.id === 'coding' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                Coding Problem {currentQuestionIndex + 1} of {activeSection.questions.length}
              </span>
              <span style={{ fontSize: '0.8rem', padding: '2px 8px', borderRadius: '6px', background: '#0f172a', color: '#38bdf8' }}>
                Frontend Assessment Sandbox
              </span>
            </div>

            <h2 style={{ fontSize: '1.35rem', color: '#f8fafc', marginBottom: '0.5rem' }}>
              {activeSection.questions[currentQuestionIndex]?.title}
            </h2>
            <p style={{ color: '#cbd5e1', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              {activeSection.questions[currentQuestionIndex]?.howToAttempt}
            </p>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <Link
                to={`/practice?q=${activeSection.questions[currentQuestionIndex]?.id}`}
                target="_blank"
                style={{
                  padding: '10px 20px',
                  background: 'linear-gradient(135deg, #0284c7, #0369a1)',
                  color: '#ffffff',
                  borderRadius: '8px',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                Launch Question in Dedicated IDE Sandbox ↗
              </Link>
            </div>
          </div>
        )}

        {activeSection.id === 'sql' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                SQL Problem {currentQuestionIndex + 1} of {activeSection.questions.length}
              </span>
              <span style={{ fontSize: '0.8rem', padding: '2px 8px', borderRadius: '6px', background: '#0f172a', color: '#f97316' }}>
                In-Browser SQLite
              </span>
            </div>

            <h2 style={{ fontSize: '1.35rem', color: '#f8fafc', marginBottom: '0.5rem' }}>
              {activeSection.questions[currentQuestionIndex]?.title}
            </h2>
            <p style={{ color: '#cbd5e1', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              {activeSection.questions[currentQuestionIndex]?.howToAttempt}
            </p>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <Link
                to={`/sql-assessment?q=${activeSection.questions[currentQuestionIndex]?.id}`}
                target="_blank"
                style={{
                  padding: '10px 20px',
                  background: 'linear-gradient(135deg, #f97316, #ea580c)',
                  color: '#ffffff',
                  borderRadius: '8px',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                Launch SQL Engine Sandbox ↗
              </Link>
            </div>
          </div>
        )}

        {activeSection.id === 'cognitive' && (
          <div>
            <h2 style={{ fontSize: '1.35rem', color: '#f8fafc', marginBottom: '0.5rem' }}>
              Cognitive Assessment Games
            </h2>
            <p style={{ color: '#cbd5e1', marginBottom: '1.5rem' }}>
              Complete the quick-fire reasoning challenges below:
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                to="/cognitive/quick-fire-math"
                target="_blank"
                style={{ padding: '10px 20px', background: '#10b981', color: '#ffffff', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}
              >
                Play Math Bubble ↗
              </Link>
              <Link
                to="/cognitive/memory-maze"
                target="_blank"
                style={{ padding: '10px 20px', background: '#8b5cf6', color: '#ffffff', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}
              >
                Play Memory Maze ↗
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
