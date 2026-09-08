// src/games/MathBubble/scoring.js

export const MATH_SCORING = {
  CORRECT_SELECTION: 100,
  QUESTION_COMPLETED: 250,
  INCORRECT_SELECTION: -50,
  SPEED_BONUS_MAX: 150
};

export function calculateMathScore({
  isCorrect,
  isQuestionComplete,
  timeRemaining = 0,
  maxTime = 15,
  currentStreak = 0
}) {
  let points = 0;

  if (isCorrect) {
    points += MATH_SCORING.CORRECT_SELECTION;
    // Streak multiplier bonus
    if (currentStreak >= 3) {
      points += Math.min(currentStreak * 15, 100);
    }
    if (isQuestionComplete) {
      points += MATH_SCORING.QUESTION_COMPLETED;
      // Speed bonus: up to 150 points for remaining seconds
      if (timeRemaining > 0 && maxTime > 0) {
        const speedFactor = timeRemaining / maxTime;
        points += Math.round(speedFactor * MATH_SCORING.SPEED_BONUS_MAX);
      }
    }
  } else {
    points += MATH_SCORING.INCORRECT_SELECTION;
  }

  return points;
}
