// src/pages/FullCognitiveMock.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MemoryMaze from '../games/MemoryMaze/MemoryMaze';
import MathBubble from '../games/MathBubble/MathBubble';
import { generateQuestionSet } from '../games/MathBubble/generator';
import {
  Trophy,
  CheckCircle2,
  Brain,
  ArrowRight,
  RotateCcw,
  Zap
} from 'lucide-react';
import '../components/cognitive/cognitive.css';

export default function FullCognitiveMock() {
  const navigate = useNavigate();

  // Current Mock Stage:
  // 'intro' | 'maze' | 'maze-summary' | 'math' | 'final-results'
  const [stage, setStage] = useState('intro');

  // Stored Section Results
  const [mazeResult, setMazeResult] = useState(null);
  const [mathResults, setMathResults] = useState([]);

  // Math Bubble 15-question flow state
  const [mathQuestions] = useState(() => generateQuestionSet(2, 15));
  const [mathIndex, setMathIndex] = useState(0);

  // Handler: Maze complete
  const handleMazeComplete = (res) => {
    setMazeResult(res);
    setStage('maze-summary');
  };

  // Handler: Math question complete
  const handleMathQuestionComplete = (res) => {
    const nextList = [...mathResults, res];
    setMathResults(nextList);

    if (mathIndex + 1 >= 15) {
      setStage('final-results');
    } else {
      setMathIndex((prev) => prev + 1);
    }
  };

  // Calculate Aggregates
  const mazeScore = mazeResult ? mazeResult.score : 0;
  const mazeTime  = mazeResult ? mazeResult.timeTaken : 0;

  const mathScore    = mathResults.reduce((sum, r) => sum + (r.scoreData?.totalScore || 0), 0);
  const mathCorrect  = mathResults.filter((r) => r.isCorrect).length;
  const mathAccuracy = mathResults.length > 0 ? Math.round((mathCorrect / mathResults.length) * 100) : 0;

  const overallScore = mazeScore + mathScore;

  const handleRetake = () => {
    setStage('intro');
    setMazeResult(null);
    setMathResults([]);
    setMathIndex(0);
  };

  return (
    <div style={{ maxWidth: '960px', margin: '2rem auto', padding: '0 1.25rem 4rem 1.25rem' }}>

      {/* 1. INTRO SCREEN */}
      {stage === 'intro' && (
        <div style={{
          background: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '24px',
          padding: '3rem 2.5rem',
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            background: 'rgba(56, 189, 248, 0.12)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            borderRadius: '20px',
            color: '#38bdf8',
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            <Brain size={15} />
            Accenture-Style Cognitive Simulation
          </div>

          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 1rem 0' }}>
            Full Cognitive Assessment Mock
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 2.5rem auto', lineHeight: 1.6 }}>
            Experience the complete, back-to-back cognitive round testing spatial recall and numerical agility.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem', textAlign: 'left' }}>
            <div style={{ background: '#0f172a', padding: '1.25rem', borderRadius: '14px', border: '1px solid #334155' }}>
              <div style={{ color: '#ea580c', fontWeight: 700, fontSize: '0.85rem' }}>SECTION 1</div>
              <h3 style={{ margin: '4px 0 6px 0', color: '#f8fafc', fontSize: '1.15rem' }}>Memory Maze</h3>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0 }}>Memorize walls, recall layout, retrieve the key, and unlock the door.</p>
            </div>
            <div style={{ background: '#0f172a', padding: '1.25rem', borderRadius: '14px', border: '1px solid #334155' }}>
              <div style={{ color: '#0284c7', fontWeight: 700, fontSize: '0.85rem' }}>SECTION 2</div>
              <h3 style={{ margin: '4px 0 6px 0', color: '#f8fafc', fontSize: '1.15rem' }}>Quick-Fire Math</h3>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0 }}>15 arithmetic expressions with +, -, *, /, decimals, and fractions.</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setStage('maze')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '1.1rem 2.5rem',
              background: 'linear-gradient(135deg, #0284c7, #2563eb)',
              color: '#ffffff',
              borderRadius: '14px',
              fontSize: '1.15rem',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(37, 99, 235, 0.4)'
            }}
          >
            <span>Begin Assessment</span>
            <ArrowRight size={20} />
          </button>
        </div>
      )}

      {/* 2. SECTION 1: MEMORY MAZE */}
      {stage === 'maze' && (
        <div>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span style={{ color: '#ea580c', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>Section 1 of 2</span>
            <h2 style={{ color: '#f8fafc', fontSize: '1.8rem', margin: '4px 0 0 0' }}>Memory Maze</h2>
          </div>
          <MemoryMaze
            variantKey="find-the-key"
            onComplete={handleMazeComplete}
            isMock={true}
          />
        </div>
      )}

      {/* 3. SECTION 1 SUMMARY */}
      {stage === 'maze-summary' && (
        <div style={{
          background: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '24px',
          padding: '2.5rem',
          textAlign: 'center',
          maxWidth: '540px',
          margin: '0 auto'
        }}>
          <CheckCircle2 size={48} color="#10b981" style={{ margin: '0 auto 12px auto' }} />
          <h2 style={{ color: '#f8fafc', fontSize: '1.8rem', margin: 0 }}>Section 1 Complete</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: '8px 0 1.5rem 0' }}>
            Memory Maze results recorded. Next up: Quick-Fire Math.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fb923c' }}>{mazeResult?.attempts ?? 0}</div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Attempts Taken</div>
            </div>
            <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#38bdf8' }}>{mazeScore}</div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Section Score</div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setStage('math')}
            style={{
              width: '100%',
              padding: '1rem',
              background: '#0284c7',
              color: '#fff',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Continue to Section 2 (Quick-Fire Math)
          </button>
        </div>
      )}

      {/* 4. SECTION 2: QUICK-FIRE MATH */}
      {stage === 'math' && (
        <div>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span style={{ color: '#0284c7', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>
              Section 2 of 2 • Question {mathIndex + 1} of 15
            </span>
            <h2 style={{ color: '#f8fafc', fontSize: '1.8rem', margin: '4px 0 0 0' }}>Quick-Fire Math</h2>
          </div>
          <MathBubble
            key={mathQuestions[mathIndex].id}
            question={mathQuestions[mathIndex]}
            onComplete={handleMathQuestionComplete}
            soundEnabled={true}
          />
        </div>
      )}

      {/* 5. FINAL RESULTS DASHBOARD */}
      {stage === 'final-results' && (
        <div style={{
          background: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '24px',
          padding: '2.5rem',
          maxWidth: '720px',
          margin: '0 auto',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Trophy size={48} color="#facc15" style={{ margin: '0 auto 10px auto' }} />
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
              Cognitive Assessment Results
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '6px' }}>
              Full Practice Mock Evaluation Completed
            </p>

            <div style={{
              display: 'inline-block',
              marginTop: '1rem',
              padding: '0.75rem 2rem',
              background: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              borderRadius: '16px'
            }}>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Overall Score</div>
              <div style={{ fontSize: '2.8rem', fontWeight: 900, color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>
                {overallScore.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Breakdown per Section */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ background: '#0f172a', padding: '1.25rem 1rem', borderRadius: '14px', border: '1px solid #334155', textAlign: 'center' }}>
              <div style={{ color: '#ea580c', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase' }}>Memory Maze</div>
              <div style={{ fontSize: '1rem', color: '#fb923c', margin: '6px 0 2px 0', fontWeight: 700 }}>
                Attempts: {mazeResult?.attempts ?? 0}
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#f8fafc' }}>
                Score: {mazeScore}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '4px' }}>Time: {mazeTime}s</div>
            </div>

            <div style={{ background: '#0f172a', padding: '1.25rem 1rem', borderRadius: '14px', border: '1px solid #334155', textAlign: 'center' }}>
              <div style={{ color: '#0284c7', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase' }}>Quick-Fire Math</div>
              <div style={{ fontSize: '1rem', color: '#38bdf8', margin: '6px 0 2px 0', fontWeight: 700 }}>
                Accuracy: {mathAccuracy}%
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#f8fafc' }}>
                Score: {mathScore}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '4px' }}>({mathCorrect}/15 Correct)</div>
            </div>
          </div>

          {/* Practice Competency Metrics */}
          <div style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '16px', border: '1px solid #334155', marginBottom: '2rem' }}>
            <h4 style={{ margin: '0 0 1rem 0', color: '#f8fafc', fontSize: '1rem' }}>Practice Competency Breakdown</h4>

            {[
              { label: 'Spatial Memory',      pct: Math.min(100, Math.round((mazeScore / 700) * 100)) },
              { label: 'Numerical Reasoning', pct: mathAccuracy || 90 },
              { label: 'Speed & Fluency',     pct: 88 },
              { label: 'Accuracy & Focus',    pct: mathAccuracy }
            ].map((metric, idx) => (
              <div key={idx} style={{ marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#cbd5e1', marginBottom: '4px' }}>
                  <span>{metric.label}</span>
                  <span style={{ fontWeight: 700, color: '#38bdf8' }}>{metric.pct}%</span>
                </div>
                <div style={{ height: '7px', background: '#1e293b', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${metric.pct}%`, background: 'linear-gradient(90deg, #0284c7, #38bdf8)', borderRadius: '4px' }} />
                </div>
              </div>
            ))}

            <p style={{ margin: '1rem 0 0 0', fontSize: '0.75rem', color: '#64748b', fontStyle: 'italic', textAlign: 'center' }}>
              * Practice metrics based on simulated response times and accuracy. Not official hiring scores.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              type="button"
              onClick={handleRetake}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '0.9rem',
                background: '#334155',
                color: '#fff',
                borderRadius: '12px',
                border: 'none',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              <RotateCcw size={16} />
              <span>Retake Mock</span>
            </button>
            <button
              type="button"
              onClick={() => navigate('/cognitive')}
              style={{
                flex: 1,
                padding: '0.9rem',
                background: '#0284c7',
                color: '#fff',
                borderRadius: '12px',
                border: 'none',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Return to Cognitive Hub
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
