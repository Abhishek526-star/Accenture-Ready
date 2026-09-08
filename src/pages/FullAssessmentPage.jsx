// src/pages/FullAssessmentPage.jsx
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import GameHeader from '../components/cognitive/GameHeader';
import GameInstructions from '../components/cognitive/GameInstructions';
import MathBubble from '../games/MathBubble/MathBubble';
import { generateBubbleQuestion } from '../games/MathBubble/generator';
import { saveSessionResult } from '../utils/cognitiveStorage';
import { checkAchievements } from '../utils/achievements';
import '../components/cognitive/cognitive.css';

export default function FullAssessmentPage() {
  const navigate = useNavigate();

  // Assessment Steps: 'instructions' | 'round1_math'
  const [step, setStep] = useState('instructions');
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Math Bubble State (15 questions)
  const TOTAL_MATH_QUESTIONS = 15;
  const [mathQIndex, setMathQIndex] = useState(1);
  const [currentBubbleQ, setCurrentBubbleQ] = useState(() =>
    generateBubbleQuestion(1, 1)
  );
  const round1Results = useRef({
    totalScore: 0,
    correctCount: 0,
    times: [],
    mistakes: 0
  });

  // Combined score for header
  const [displayScore, setDisplayScore] = useState(0);

  // --- Handlers ---
  const handleStartAssessment = () => {
    setStep('round1_math');
    setMathQIndex(1);
    setCurrentBubbleQ(generateBubbleQuestion(1, 1));
  };

  const handleMathQuestionComplete = ({ isCorrect, scoreData, timeTaken }) => {
    if (isCorrect) {
      round1Results.current.correctCount += 1;
      const pts = scoreData?.totalScore || 0;
      round1Results.current.totalScore += pts;
      setDisplayScore(prev => prev + pts);
    } else {
      round1Results.current.mistakes += 1;
    }
    round1Results.current.times.push(timeTaken);

    if (mathQIndex >= TOTAL_MATH_QUESTIONS) {
      finishAssessment();
    } else {
      const nextIndex = mathQIndex + 1;
      let setDiff = 1;
      if (nextIndex > 10) setDiff = 3;
      else if (nextIndex > 5) setDiff = 2;

      setMathQIndex(nextIndex);
      setCurrentBubbleQ(generateBubbleQuestion(setDiff, nextIndex));
    }
  };

  // Final compilation
  const finishAssessment = () => {
    const r1 = round1Results.current;
    const mathAccuracy = Math.round((r1.correctCount / TOTAL_MATH_QUESTIONS) * 100);
    const avgMathTime = r1.times.length > 0
      ? (r1.times.reduce((a, b) => a + b, 0) / r1.times.length).toFixed(1)
      : 0;

    const sessionData = {
      gameType: 'full_assessment',
      score: r1.totalScore,
      accuracy: mathAccuracy,
      round1: {
        totalScore: r1.totalScore,
        correctCount: r1.correctCount,
        totalQuestions: TOTAL_MATH_QUESTIONS,
        accuracy: mathAccuracy,
        avgTime: avgMathTime
      }
    };

    const saved = saveSessionResult(sessionData);
    checkAchievements();
    navigate('/cognitive/results', { state: { session: saved } });
  };

  return (
    <div style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem' }}>
      <GameHeader
        title="Cognitive Assessment Round"
        subtitle={
          step === 'round1_math'
            ? `Quick-Fire Math — Question ${mathQIndex}/${TOTAL_MATH_QUESTIONS}`
            : 'Assessment Round'
        }
        currentRound={1}
        totalRounds={1}
        score={displayScore}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(prev => !prev)}
        backUrl="/cognitive"
      />

      {/* Instructions Modal */}
      {step === 'instructions' && (
        <GameInstructions
          gameType="full_assessment"
          isOpen={true}
          onStart={handleStartAssessment}
        />
      )}

      {/* Math Bubble */}
      {step === 'round1_math' && (
        <MathBubble
          key={currentBubbleQ.id}
          question={currentBubbleQ}
          setNumber={1}
          questionNumber={mathQIndex}
          totalQuestions={TOTAL_MATH_QUESTIONS}
          soundEnabled={soundEnabled}
          onComplete={handleMathQuestionComplete}
        />
      )}
    </div>
  );
}
