// src/pages/MathBubblePage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import GameHeader from '../components/cognitive/GameHeader';
import GameInstructions from '../components/cognitive/GameInstructions';
import MathBubble from '../games/MathBubble/MathBubble';
import { generateQuestionSet, getSetTotalQuestions, getSetTimeLimit } from '../games/MathBubble/generator';
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
  Layers,
  Zap
} from 'lucide-react';
import SEO from '../components/SEO.jsx';
import { seoConfig } from '../config/seo.js';
import '../components/cognitive/cognitive.css';

const TOTAL_SETS = 7;

export default function MathBubblePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const isDaily = searchParams.get('mode') === 'daily';
  const initialSet = parseInt(searchParams.get('set'), 10) || 1;
  const [activeSetNumber, setActiveSetNumber] = useState(
    initialSet >= 1 && initialSet <= TOTAL_SETS ? initialSet : 1
  );

  const currentTotalQuestions = getSetTotalQuestions(activeSetNumber);

  // Pre-generate questions for the current set
  const [questionSet, setQuestionSet] = useState(() =>
    generateQuestionSet(activeSetNumber)
  );
  const [currentQIndex, setCurrentQIndex] = useState(0);
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
    setQuestionSet(generateQuestionSet(setNum));
    setSearchParams({ set: setNum.toString() });
  };

  // Handle single question completion (called silently after 3 bubbles selected or timeout)
  const handleQuestionComplete = (result) => {
    const nextResults = [...setResults, result];
    setSetResults(nextResults);

    if (currentQIndex + 1 >= currentTotalQuestions) {
      // Entire set finished! Calculate final results!
      finishSet(nextResults);
    } else {
      setCurrentQIndex((prev) => prev + 1);
    }
  };

  const finishSet = (allResults) => {
    setIsSetComplete(true);

    const totalQs = getSetTotalQuestions(activeSetNumber);
    const correctCount = allResults.filter((r) => r.isCorrect).length;
    const accuracy = Math.round((correctCount / totalQs) * 100);
    const totalScore = allResults.reduce((sum, r) => sum + (r.scoreData?.totalScore || 0), 0);
    const avgTime = (
      allResults.reduce((sum, r) => sum + (r.timeTaken || 0), 0) / totalQs
    ).toFixed(1);

    // Save session
    saveSessionResult({
      gameType: 'math_bubble',
      setNumber: activeSetNumber,
      score: totalScore,
      accuracy,
      correctCount,
      totalQuestions: totalQs,
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
  const accuracy = Math.round((correctCount / currentTotalQuestions) * 100);
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
        subtitle={`Accenture-Style Cognitive Round • Quick-Fire Math • Set ${activeSetNumber} of ${TOTAL_SETS} (${currentTotalQuestions} Questions • ${getSetTimeLimit(activeSetNumber)}s Timer)`}
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

      {/* Sets Navigation Bar (Sets 1 to 7) */}
      {!isSetComplete && (
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              Practice Sets:
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Sets 1–5: 15 Qs (15s) • Sets 6–7: 24 Qs (14s • Progressive Difficulty)
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {Array.from({ length: TOTAL_SETS }, (_, i) => i + 1).map((sNum) => {
              const isActive = activeSetNumber === sNum;
              const is24Q = sNum >= 6;
              return (
                <button
                  key={sNum}
                  onClick={() => startSet(sNum)}
                  style={{
                    flex: '1 1 95px',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '10px',
                    fontSize: '0.83rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    background: isActive
                      ? (is24Q ? 'linear-gradient(135deg, #0284c7, #2563eb)' : '#0284c7')
                      : 'var(--bg-surface-elevated, #1e293b)',
                    color: isActive ? '#ffffff' : (is24Q ? '#38bdf8' : 'var(--text-secondary, #94a3b8)'),
                    border: isActive
                      ? '1px solid #38bdf8'
                      : (is24Q ? '1px dashed rgba(56, 189, 248, 0.4)' : '1px solid var(--border-color, #334155)'),
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.35rem'
                  }}
                  title={is24Q ? `Set ${sNum}: 24 Questions with 14s Timer & Progressive Difficulty` : `Set ${sNum}: 15 Questions`}
                >
                  {is24Q && <Zap size={13} className={isActive ? 'text-amber-300' : 'text-sky-400'} />}
                  <span>Set {sNum}</span>
                  {is24Q && (
                    <span style={{
                      fontSize: '0.68rem',
                      background: isActive ? 'rgba(255,255,255,0.2)' : 'rgba(56,189,248,0.15)',
                      padding: '1px 5px',
                      borderRadius: '4px'
                    }}>
                      24Q
                    </span>
                  )}
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
          totalQuestions={currentTotalQuestions}
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
                {currentTotalQuestions} Questions Finished • {activeSetNumber >= 6 ? '14s Speed Mode • ' : ''}Results & Sequence Breakdown
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
                  {correctCount} / {currentTotalQuestions}
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
