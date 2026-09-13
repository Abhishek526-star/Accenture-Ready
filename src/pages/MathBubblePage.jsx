// src/pages/MathBubblePage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import GameHeader from '../components/cognitive/GameHeader';
import GameInstructions from '../components/cognitive/GameInstructions';
import MathBubble from '../games/MathBubble/MathBubble';
import { generateQuestionSet } from '../games/MathBubble/generator';
import { saveSessionResult, updateDailyChallenge, cognitiveStorage } from '../utils/cognitiveStorage';
import { checkAchievements } from '../utils/achievements';
import {
  RotateCcw,
  Trophy,
  Award,
  Sparkles,
  CheckCircle2,
  XCircle,
  Clock,
  ArrowRight,
  ChevronRight,
  Layers
} from 'lucide-react';
import SEO from '../components/SEO.jsx';
import { seoConfig } from '../config/seo.js';
import '../components/cognitive/cognitive.css';

const TOTAL_SET_QUESTIONS = 15;
const TOTAL_SETS = 5;

export default function MathBubblePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const isDaily = searchParams.get('mode') === 'daily';
  const initialSet = parseInt(searchParams.get('set'), 10) || 1;
  const [activeSetNumber, setActiveSetNumber] = useState(
    initialSet >= 1 && initialSet <= TOTAL_SETS ? initialSet : 1
  );

  // Pre-generate the 15 questions for the current set
  const [questionSet, setQuestionSet] = useState(() =>
    generateQuestionSet(activeSetNumber, TOTAL_SET_QUESTIONS)
  );
  const [currentQIndex, setCurrentQIndex] = useState(0); // 0-indexed (0 to 14)
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showInstructions, setShowInstructions] = useState(false);

  // Set-level tracking
  const [setResults, setSetResults] = useState([]);
  const [isSetComplete, setIsSetComplete] = useState(false);
  const [unlockedAchievements, setUnlockedAchievements] = useState([]);

  // Load a new set
  const startSet = (setNum) => {
    setActiveSetNumber(setNum);
    setCurrentQIndex(0);
    setSetResults([]);
    setIsSetComplete(false);
    setQuestionSet(generateQuestionSet(setNum, TOTAL_SET_QUESTIONS));
    setSearchParams({ set: setNum.toString() });
  };

  // Handle single question completion (called silently after 3 bubbles selected or timeout)
  const handleQuestionComplete = (result) => {
    const nextResults = [...setResults, result];
    setSetResults(nextResults);

    if (currentQIndex + 1 >= TOTAL_SET_QUESTIONS) {
      // Entire set of 15 questions finished! Calculate final results!
      finishSet(nextResults);
    } else {
      setCurrentQIndex((prev) => prev + 1);
    }
  };

  const finishSet = (allResults) => {
    setIsSetComplete(true);

    const correctCount = allResults.filter((r) => r.isCorrect).length;
    const accuracy = Math.round((correctCount / TOTAL_SET_QUESTIONS) * 100);
    const totalScore = allResults.reduce((sum, r) => sum + (r.scoreData?.totalScore || 0), 0);
    const avgTime = (
      allResults.reduce((sum, r) => sum + (r.timeTaken || 0), 0) / TOTAL_SET_QUESTIONS
    ).toFixed(1);

    // Save session
    saveSessionResult({
      gameType: 'math_bubble',
      setNumber: activeSetNumber,
      score: totalScore,
      accuracy,
      correctCount,
      totalQuestions: TOTAL_SET_QUESTIONS,
      avgTime: parseFloat(avgTime),
      isDaily
    });

    if (isDaily && correctCount >= 10) {
      updateDailyChallenge('math_bubble');
    }

    // Save set highscore
    const bestKey = `best-set-${activeSetNumber}`;
    const prevBest = cognitiveStorage.get(bestKey, 0);
    if (totalScore > prevBest) {
      cognitiveStorage.set(bestKey, totalScore);
    }

    // Check achievements
    const newlyUnlocked = checkAchievements();
    if (newlyUnlocked && newlyUnlocked.length > 0) {
      setUnlockedAchievements(newlyUnlocked);
    }
  };

  // Summary metrics for the completed set
  const correctCount = setResults.filter((r) => r.isCorrect).length;
  const accuracy = Math.round((correctCount / TOTAL_SET_QUESTIONS) * 100);
  const totalScore = setResults.reduce((sum, r) => sum + (r.scoreData?.totalScore || 0), 0);
  const avgTime = setResults.length > 0
    ? (setResults.reduce((sum, r) => sum + (r.timeTaken || 0), 0) / setResults.length).toFixed(1)
    : '0';

  const currentQuestion = questionSet[currentQIndex];

  return (
    <div style={{ maxWidth: '920px', margin: '1.5rem auto', padding: '0 1rem 3.5rem 1rem' }}>
      <SEO {...seoConfig.quickFireMath} />
      <GameHeader
        title="Quick Math Assessment Game – Speed & Accuracy Practice"
        subtitle={`Accenture-Style Cognitive Round • Quick-Fire Math • Set ${activeSetNumber} of ${TOTAL_SETS}`}
        score={isSetComplete ? totalScore : 0}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled((prev) => !prev)}
        backUrl="/cognitive"
      />

      <GameInstructions
        gameType="math_bubble"
        isOpen={showInstructions}
        onStart={() => setShowInstructions(false)}
      />

      {/* 5 Sets Navigation Bar */}
      {!isSetComplete && (
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              Practice Sets (15 Questions Each):
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Contains +, -, *, /, decimals & fractions
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {[1, 2, 3, 4, 5].map((sNum) => {
              const isActive = activeSetNumber === sNum;
              return (
                <button
                  key={sNum}
                  onClick={() => startSet(sNum)}
                  style={{
                    flex: '1 1 80px',
                    padding: '0.5rem 0.85rem',
                    borderRadius: '10px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    background: isActive ? '#0284c7' : 'var(--bg-surface-elevated, #1e293b)',
                    color: isActive ? '#ffffff' : 'var(--text-secondary, #94a3b8)',
                    border: isActive ? '1px solid #38bdf8' : '1px solid var(--border-color, #334155)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Set {sNum}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main 3-Bubble Arena */}
      {!isSetComplete && currentQuestion && (
        <MathBubble
          key={currentQuestion.id}
          question={currentQuestion}
          setNumber={activeSetNumber}
          questionNumber={currentQIndex + 1}
          totalQuestions={TOTAL_SET_QUESTIONS}
          soundEnabled={soundEnabled}
          onComplete={handleQuestionComplete}
        />
      )}

      {/* Final Results Modal shown ONLY AFTER Completing the Set */}
      {isSetComplete && (
        <div className="cognitive-modal-overlay">
          <div className="cognitive-modal-card" style={{ maxWidth: '720px', maxHeight: '90vh', overflowY: 'auto' }}>
            <div className="cmc-header">
              <div className="cmc-icon-badge text-amber-400">
                <Trophy size={36} />
              </div>
              <h2 className="cmc-title">Set {activeSetNumber} Completed!</h2>
              <p className="cmc-subtitle">
                15 Questions Finished • Results & Sequence Breakdown
              </p>
            </div>

            {/* Performance Summary Grid */}
            <div className="transition-stats-grid">
              <div className="transition-stat-card">
                <Award size={22} className="text-amber-400" />
                <div className="transition-stat-val">{totalScore}</div>
                <div className="transition-stat-label">Total Points</div>
              </div>

              <div className="transition-stat-card">
                <CheckCircle2 size={22} className="text-emerald-400" />
                <div className="transition-stat-val">
                  {correctCount} / {TOTAL_SET_QUESTIONS}
                </div>
                <div className="transition-stat-label">Accuracy ({accuracy}%)</div>
              </div>

              <div className="transition-stat-card">
                <Clock size={22} className="text-sky-400" />
                <div className="transition-stat-val">{avgTime}s</div>
                <div className="transition-stat-label">Avg Speed / Question</div>
              </div>

              <div className="transition-stat-card">
                <Layers size={22} className="text-purple-400" />
                <div className="transition-stat-val">Set {activeSetNumber}</div>
                <div className="transition-stat-label">Completed</div>
              </div>
            </div>

            {/* Achievements notification if any unlocked */}
            {unlockedAchievements.length > 0 && (
              <div style={{ background: 'rgba(234, 179, 8, 0.1)', border: '1px solid rgba(234, 179, 8, 0.3)', borderRadius: '12px', padding: '0.85rem 1rem' }}>
                <h4 style={{ margin: '0 0 0.35rem 0', color: '#facc15', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}>
                  <Sparkles size={16} /> New Achievement Unlocked!
                </h4>
                {unlockedAchievements.map((ach) => (
                  <div key={ach.id} style={{ fontSize: '0.85rem', color: '#f8fafc' }}>
                    <strong>{ach.title}</strong>: {ach.description}
                  </div>
                ))}
              </div>
            )}

            {/* Detailed Question Review Table */}
            <div style={{ marginTop: '1rem' }}>
              <h3 style={{ margin: '0 0 0.75rem 0', fontSize: '1rem', color: '#f8fafc', fontWeight: 700 }}>
                Question-by-Question Breakdown:
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {setResults.map((res, idx) => {
                  const isPass = res.isCorrect;
                  return (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.65rem 0.85rem',
                        borderRadius: '10px',
                        background: isPass ? 'rgba(16, 185, 129, 0.08)' : 'rgba(239, 68, 68, 0.08)',
                        border: isPass ? '1px solid rgba(16, 185, 129, 0.25)' : '1px solid rgba(239, 68, 68, 0.25)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        {isPass ? (
                          <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                        ) : (
                          <XCircle size={18} className="text-rose-400 flex-shrink-0" />
                        )}
                        <div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc' }}>
                            Q{idx + 1}: {res.question.expressions.join(' • ')}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                            Your Selection:{' '}
                            <span style={{ color: isPass ? '#10b981' : '#f43f5e', fontWeight: 600 }}>
                              {res.selectedOrder && res.selectedOrder.length > 0
                                ? res.selectedOrder.join(' → ')
                                : '(Timed Out)'}
                            </span>
                            {!isPass && (
                              <span style={{ marginLeft: '8px', color: '#38bdf8' }}>
                                Correct Ascending: {res.expectedOrder.join(' → ')}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontFamily: 'JetBrains Mono' }}>
                        {res.timeTaken}s
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Modal Actions */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
              <button
                className="pf-btn"
                onClick={() => startSet(activeSetNumber)}
                style={{ flex: 1, padding: '0.85rem', justifyContent: 'center' }}
              >
                <RotateCcw size={16} />
                Retry Set {activeSetNumber}
              </button>

              {activeSetNumber < TOTAL_SETS ? (
                <button
                  className="cmc-start-btn"
                  onClick={() => startSet(activeSetNumber + 1)}
                  style={{ flex: 1, padding: '0.85rem', justifyContent: 'center' }}
                >
                  <span>Proceed to Set {activeSetNumber + 1}</span>
                  <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  className="cmc-start-btn"
                  onClick={() => navigate('/cognitive')}
                  style={{ flex: 1, padding: '0.85rem', justifyContent: 'center' }}
                >
                  <span>Return to Cognitive Hub</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
