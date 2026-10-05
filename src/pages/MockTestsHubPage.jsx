// src/pages/MockTestsHubPage.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Target,
  Clock,
  Award,
  CheckCircle2,
  Play,
  ArrowRight,
  Sparkles,
  ShieldAlert,
  BarChart2,
  RotateCcw,
  Zap,
  HelpCircle,
  FileText
} from 'lucide-react';
import { MOCK_TESTS, getMockResult } from '../data/mockTests/mockTestsConfig.js';
import SEO from '../components/SEO.jsx';

export default function MockTestsHubPage({ theme = 'dark' }) {
  const navigate = useNavigate();
  const [resultsMap, setResultsMap] = useState({});

  useEffect(() => {
    const map = {};
    MOCK_TESTS.forEach((test) => {
      const saved = getMockResult(test.id);
      if (saved) {
        map[test.id] = saved;
      }
    });
    setResultsMap(map);
  }, []);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1.5rem 1rem 4rem 1rem' }}>
      <SEO
        title="Accenture Mock Tests — 5 Full 45-Min Tests (45 Qs • 45 Marks)"
        description="Prepare for the Accenture recruitment test with 5 comprehensive 45-minute timed mock tests. Exactly 45 questions, 1 mark per question, with instant results and complete solutions."
        path="/mock-test"
      />

      {/* Hero Header Card */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.85) 100%)',
          border: '1px solid rgba(56, 189, 248, 0.25)',
          borderRadius: '16px',
          padding: '2.25rem 2rem',
          marginBottom: '2.5rem',
          boxShadow: '0 12px 36px rgba(0, 0, 0, 0.35)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '260px',
            height: '260px',
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '780px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '4px 12px',
              borderRadius: '9999px',
              background: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              color: '#38bdf8',
              fontSize: '0.8rem',
              fontWeight: 700,
              marginBottom: '1rem'
            }}
          >
            <Sparkles size={14} />
            <span>ACCENTURE ASSESSMENT SIMULATOR</span>
          </div>

          <h1
            style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#f8fafc',
              margin: '0 0 0.75rem 0',
              letterSpacing: '-0.025em',
              lineHeight: 1.2
            }}
          >
            Full-Length Mock Tests
          </h1>

          <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.6, margin: '0 0 1.5rem 0' }}>
            5 dedicated mock test papers formatted strictly to Accenture standards: <strong>45 questions</strong> in <strong>45 minutes</strong> with <strong>1 mark per question</strong>. Immediate test evaluation and detailed question-by-question explanations upon completion.
          </p>

          {/* Exam Standard Rule Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid #334155',
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '0.85rem',
                color: '#e2e8f0',
                fontWeight: 600
              }}
            >
              <Clock size={15} className="text-sky-400" />
              <span>45 Mins Duration (1 Min/Q)</span>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid #334155',
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '0.85rem',
                color: '#e2e8f0',
                fontWeight: 600
              }}
            >
              <Target size={15} className="text-emerald-400" />
              <span>45 Questions</span>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid #334155',
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '0.85rem',
                color: '#e2e8f0',
                fontWeight: 600
              }}
            >
              <Award size={15} className="text-amber-400" />
              <span>45 Marks (+1 Mark / Q)</span>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid #334155',
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '0.85rem',
                color: '#e2e8f0',
                fontWeight: 600
              }}
            >
              <ShieldAlert size={15} className="text-purple-400" />
              <span>No Negative Marking</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of 5 Mock Tests */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
            Select a Mock Test Set
          </h2>
          <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
            Choose any set to begin your timed 45-minute assessment
          </span>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.25rem'
        }}
      >
        {MOCK_TESTS.map((test) => {
          const result = resultsMap[test.id];
          const hasAttempted = Boolean(result);

          return (
            <div
              key={test.id}
              style={{
                background: 'rgba(15, 23, 42, 0.8)',
                border: hasAttempted ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid #334155',
                borderRadius: '14px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.25rem',
                transition: 'all 0.2s ease',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)',
                position: 'relative'
              }}
            >
              {/* Card Header */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '3px 10px',
                      borderRadius: '6px',
                      background: 'rgba(56, 189, 248, 0.15)',
                      color: '#38bdf8',
                      border: '1px solid rgba(56, 189, 248, 0.3)'
                    }}
                  >
                    {test.badge}
                  </span>

                  {hasAttempted && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '3px 8px',
                        borderRadius: '6px',
                        background: 'rgba(16, 185, 129, 0.15)',
                        color: '#10b981',
                        border: '1px solid rgba(16, 185, 129, 0.3)'
                      }}
                    >
                      <CheckCircle2 size={12} />
                      Score: {result.score} / {result.totalQuestions || test.questionsCount} ({result.percentage}%)
                    </span>
                  )}
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 0.5rem 0' }}>
                  {test.title}
                </h3>

                <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.5, margin: '0 0 1rem 0' }}>
                  {test.description}
                </p>

                {/* Topics preview */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '0.5rem' }}>
                  {test.topics.map((t, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.72rem',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        background: 'rgba(30, 41, 59, 0.9)',
                        color: '#cbd5e1',
                        border: '1px solid rgba(51, 65, 85, 0.7)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer / CTA */}
              <div style={{ paddingTop: '0.75rem', borderTop: '1px solid rgba(51, 65, 85, 0.5)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.8rem', color: '#94a3b8' }}>
                  <span>⏱️ {test.durationMinutes} Mins</span>
                  <span>📝 {test.questionsCount} Questions</span>
                  <span>🏆 {test.totalMarks} Marks</span>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <Link
                    to={`/mock-test/${test.id}`}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      background: hasAttempted
                        ? 'rgba(56, 189, 248, 0.15)'
                        : 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
                      border: hasAttempted ? '1px solid rgba(56, 189, 248, 0.5)' : 'none',
                      color: '#ffffff',
                      textDecoration: 'none',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      boxShadow: hasAttempted ? 'none' : '0 4px 14px rgba(2, 132, 199, 0.35)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {hasAttempted ? (
                      <>
                        <RotateCcw size={16} />
                        <span>Retake Mock Test</span>
                      </>
                    ) : (
                      <>
                        <Play size={16} fill="currentColor" />
                        <span>Start Mock Test</span>
                      </>
                    )}
                  </Link>

                  {hasAttempted && (
                    <Link
                      to={`/mock-test/${test.id}?view=result`}
                      title="View Previous Results & Explanations"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        background: 'rgba(30, 41, 59, 0.8)',
                        border: '1px solid #334155',
                        color: '#38bdf8',
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '0.85rem'
                      }}
                    >
                      <BarChart2 size={16} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
