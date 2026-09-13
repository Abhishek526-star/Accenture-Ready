// src/pages/CloudAssessmentPage.jsx
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  cloudQuestions,
  filterCloudQuestions,
  CLOUD_TIERS
} from '../data/cloudQuestions.js';
import { cloudStorage } from '../utils/cloudStorage.js';
import CloudQuizHeader from '../components/cloud/CloudQuizHeader.jsx';
import CloudQuestionCard from '../components/cloud/CloudQuestionCard.jsx';
import CloudQuestionPalette from '../components/cloud/CloudQuestionPalette.jsx';
import CloudAnalysisModal from '../components/cloud/CloudAnalysisModal.jsx';
import CloudStudyNotesModal from '../components/cloud/CloudStudyNotesModal.jsx';
import SEO from '../components/SEO.jsx';
import { seoConfig } from '../config/seo.js';

export default function CloudAssessmentPage({ theme = 'dark' }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // URL parameters for deep-linking
  const initialTierParam = searchParams.get('tier') || 'all';
  const initialTopicParam = searchParams.get('topic') || 'all';

  const [activeTier, setActiveTier] = useState(() => {
    return initialTierParam !== 'all' && !isNaN(Number(initialTierParam))
      ? Number(initialTierParam)
      : initialTierParam;
  });
  const [activeTopic, setActiveTopic] = useState(initialTopicParam);
  const [mode, setMode] = useState('exam'); // 'exam' | 'practice'

  // Filtered question set
  const activeQuestions = useMemo(() => {
    return filterCloudQuestions({ tier: activeTier, topic: activeTopic });
  }, [activeTier, activeTopic]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [bookmarks, setBookmarks] = useState(() => cloudStorage.getBookmarks());

  // Timer State (Exam Mode)
  // Default: 60 seconds per question in current set
  const [timeRemaining, setTimeRemaining] = useState(activeQuestions.length * 60);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [timeTakenSeconds, setTimeTakenSeconds] = useState(0);

  // Modals
  const [showAnalysisModal, setShowAnalysisModal] = useState(false);
  const [showNotesModal, setShowNotesModal] = useState(false);

  // Current Question
  const currentQuestion = activeQuestions[currentIndex] || activeQuestions[0];

  // Sync Timer when question set changes
  useEffect(() => {
    setCurrentIndex(0);
    setUserAnswers({});
    const initialTime = Math.max(300, activeQuestions.length * 60); // minimum 5 mins
    setTimeRemaining(initialTime);
    setTimeTakenSeconds(0);
    setIsTimerPaused(false);
  }, [activeTier, activeTopic, activeQuestions.length]);

  // Sync URL Params
  useEffect(() => {
    setSearchParams(
      {
        tier: activeTier.toString(),
        topic: activeTopic
      },
      { replace: true }
    );
  }, [activeTier, activeTopic, setSearchParams]);

  // Countdown timer in exam mode
  useEffect(() => {
    if (mode !== 'exam' || isTimerPaused || showAnalysisModal) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
      setTimeTakenSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [mode, isTimerPaused, showAnalysisModal]);

  // Handle Option Select
  const handleSelectOption = (optionId) => {
    if (!currentQuestion) return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId
    }));
  };

  // Clear Option Select
  const handleClearOption = () => {
    if (!currentQuestion) return;
    setUserAnswers((prev) => {
      const next = { ...prev };
      delete next[currentQuestion.id];
      return next;
    });
  };

  // Toggle Bookmark
  const handleToggleBookmark = (questionId) => {
    const updated = cloudStorage.toggleBookmark(questionId);
    setBookmarks(updated);
  };

  // Navigation
  const handleNextQuestion = () => {
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleSelectIndex = (idx) => {
    if (idx >= 0 && idx < activeQuestions.length) {
      setCurrentIndex(idx);
    }
  };

  // Auto-submit when timer expires
  const handleAutoSubmit = () => {
    submitAssessment(true);
  };

  // Submit assessment logic
  const submitAssessment = (isAuto = false) => {
    let correctCount = 0;
    activeQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    const percentage =
      activeQuestions.length > 0 ? Math.round((correctCount / activeQuestions.length) * 100) : 0;

    // Save to storage
    cloudStorage.saveQuizAttempt({
      tier: activeTier,
      topic: activeTopic,
      totalQuestions: activeQuestions.length,
      correctCount,
      percentage,
      timeTakenSeconds: timeTakenSeconds || 1,
      mode
    });

    setShowAnalysisModal(true);
  };

  const handleSubmitQuiz = () => {
    const answeredCount = Object.keys(userAnswers).filter((k) => userAnswers[k]).length;
    const unansweredCount = activeQuestions.length - answeredCount;

    if (unansweredCount > 0 && mode === 'exam') {
      const confirmSubmit = window.confirm(
        `You have ${unansweredCount} unanswered questions remaining. Are you sure you want to submit the assessment?`
      );
      if (!confirmSubmit) return;
    }

    submitAssessment(false);
  };

  // Reset quiz
  const handleResetQuiz = () => {
    if (window.confirm('Are you sure you want to reset your answers for this section?')) {
      setUserAnswers({});
      setCurrentIndex(0);
      setTimeRemaining(activeQuestions.length * 60);
      setTimeTakenSeconds(0);
    }
  };

  // Retake Entire Quiz from Modal
  const handleRetakeQuiz = () => {
    setUserAnswers({});
    setCurrentIndex(0);
    setTimeRemaining(activeQuestions.length * 60);
    setTimeTakenSeconds(0);
    setShowAnalysisModal(false);
    setIsTimerPaused(false);
  };

  // Retake Missed Questions
  const handleRetakeIncorrect = () => {
    // Keep only wrong answers cleared, jump to first unanswered/incorrect
    const nextAnswers = { ...userAnswers };
    let firstIncorrectIdx = -1;

    activeQuestions.forEach((q, idx) => {
      if (nextAnswers[q.id] !== q.correctAnswer) {
        delete nextAnswers[q.id];
        if (firstIncorrectIdx === -1) firstIncorrectIdx = idx;
      }
    });

    setUserAnswers(nextAnswers);
    if (firstIncorrectIdx !== -1) {
      setCurrentIndex(firstIncorrectIdx);
    }
    setShowAnalysisModal(false);
  };

  const answeredCount = Object.keys(userAnswers).filter((k) => userAnswers[k]).length;
  const bookmarkedCount = bookmarks.filter((id) =>
    activeQuestions.some((q) => q.id === id)
  ).length;

  return (
    <div className="cloud-assessment-page" data-theme={theme}>
      <SEO {...seoConfig.cloudAssessment} />
      <div className="cloud-page-container">
        {/* Main Quiz Header */}
        <CloudQuizHeader
          title="Accenture Cloud Assessment – Cloud Computing Practice"
          activeTier={activeTier}
          onSelectTier={setActiveTier}
          activeTopic={activeTopic}
          onSelectTopic={setActiveTopic}
          mode={mode}
          onChangeMode={setMode}
          timeRemaining={timeRemaining}
          isTimerPaused={isTimerPaused}
          onToggleTimer={() => setIsTimerPaused(!isTimerPaused)}
          totalQuestions={activeQuestions.length}
          answeredCount={answeredCount}
          bookmarkedCount={bookmarkedCount}
          onOpenStudyNotes={() => setShowNotesModal(true)}
          onResetQuiz={handleResetQuiz}
        />

        {/* Quiz Workspace: Left Card + Right Palette */}
        <div className="cloud-workspace-layout">
          <main className="cloud-question-column">
            {activeQuestions.length === 0 ? (
              <div className="cloud-empty-state">
                <h3>No questions found matching your filter.</h3>
                <p>Try selecting "All Topics" or a different Tier above.</p>
                <button
                  type="button"
                  className="cloud-btn cloud-btn-primary"
                  onClick={() => {
                    setActiveTier('all');
                    setActiveTopic('all');
                  }}
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <CloudQuestionCard
                question={currentQuestion}
                questionIndex={currentIndex}
                totalQuestions={activeQuestions.length}
                selectedAnswer={userAnswers[currentQuestion?.id]}
                onSelectOption={handleSelectOption}
                onClearOption={handleClearOption}
                isBookmarked={bookmarks.includes(currentQuestion?.id)}
                onToggleBookmark={handleToggleBookmark}
                onNextQuestion={handleNextQuestion}
                onPrevQuestion={handlePrevQuestion}
                mode={mode}
              />
            )}
          </main>

          {/* Right Navigator Palette */}
          {activeQuestions.length > 0 && (
            <div className="cloud-palette-column">
              <CloudQuestionPalette
                questions={activeQuestions}
                currentIndex={currentIndex}
                onSelectIndex={handleSelectIndex}
                userAnswers={userAnswers}
                bookmarks={bookmarks}
                onSubmitQuiz={handleSubmitQuiz}
                mode={mode}
              />
            </div>
          )}
        </div>
      </div>

      {/* Post-Quiz Comprehensive Analysis Modal */}
      <CloudAnalysisModal
        isOpen={showAnalysisModal}
        onClose={() => setShowAnalysisModal(false)}
        questions={activeQuestions}
        userAnswers={userAnswers}
        bookmarks={bookmarks}
        timeTakenSeconds={timeTakenSeconds}
        onRetakeQuiz={handleRetakeQuiz}
        onRetakeIncorrect={handleRetakeIncorrect}
      />

      {/* Cloud Study Guide Handbook Modal */}
      <CloudStudyNotesModal
        isOpen={showNotesModal}
        onClose={() => setShowNotesModal(false)}
      />
    </div>
  );
}
