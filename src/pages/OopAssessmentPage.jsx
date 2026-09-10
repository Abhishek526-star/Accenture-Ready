// src/pages/OopAssessmentPage.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Boxes, Cloud, ShieldCheck, Network, ShieldAlert, Code2 } from 'lucide-react';
import {
  OOP_TIERS,
  OOP_TOPICS,
  oopQuestions,
  oopStudyGuides,
  getOopOptionBreakdown,
  filterOopQuestions
} from '../data/oopQuestions.js';
import { oopStorage } from '../utils/oopStorage.js';
import CloudQuizHeader from '../components/cloud/CloudQuizHeader.jsx';
import CloudQuestionCard from '../components/cloud/CloudQuestionCard.jsx';
import CloudQuestionPalette from '../components/cloud/CloudQuestionPalette.jsx';
import CloudAnalysisModal from '../components/cloud/CloudAnalysisModal.jsx';
import CloudStudyNotesModal from '../components/cloud/CloudStudyNotesModal.jsx';

export default function OopAssessmentPage({ theme = 'dark' }) {
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
  const [mode, setMode] = useState('practice'); // default to practice mode for instant feedback

  // Filtered questions
  const activeQuestions = useMemo(() => {
    return filterOopQuestions({ tier: activeTier, topic: activeTopic });
  }, [activeTier, activeTopic]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [bookmarks, setBookmarks] = useState(() => oopStorage.getBookmarks());

  // Timer State (Exam Mode)
  const [timeRemaining, setTimeRemaining] = useState(activeQuestions.length * 60);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [timeTakenSeconds, setTimeTakenSeconds] = useState(0);

  // Modals
  const [showAnalysisModal, setShowAnalysisModal] = useState(false);
  const [showNotesModal, setShowNotesModal] = useState(false);

  // Current Question
  const currentQuestion = activeQuestions[currentIndex] || activeQuestions[0];
  const currentBreakdown = currentQuestion ? getOopOptionBreakdown(currentQuestion.id) : null;

  // Sync Timer when question set changes
  useEffect(() => {
    setCurrentIndex(0);
    setUserAnswers({});
    const initialTime = Math.max(300, activeQuestions.length * 60);
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

  // Clear Option
  const handleClearOption = () => {
    if (!currentQuestion) return;
    setUserAnswers((prev) => {
      const copy = { ...prev };
      delete copy[currentQuestion.id];
      return copy;
    });
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

  // Toggle Bookmark
  const handleToggleBookmark = () => {
    if (!currentQuestion) return;
    const updated = oopStorage.toggleBookmark(currentQuestion.id);
    setBookmarks(updated);
  };

  // Mode Switch
  const handleChangeMode = (newMode) => {
    setMode(newMode);
    if (newMode === 'exam') {
      setUserAnswers({});
      setTimeRemaining(activeQuestions.length * 60);
      setTimeTakenSeconds(0);
      setIsTimerPaused(false);
    }
  };

  // Reset
  const handleResetQuiz = () => {
    if (window.confirm('Are you sure you want to reset your answers for this section?')) {
      setUserAnswers({});
      setCurrentIndex(0);
      setTimeRemaining(activeQuestions.length * 60);
      setTimeTakenSeconds(0);
      setIsTimerPaused(false);
    }
  };

  // Submit / Auto-Submit
  const handleSubmitQuiz = () => {
    const answeredCount = Object.keys(userAnswers).length;
    const unAnswered = activeQuestions.length - answeredCount;

    if (unAnswered > 0) {
      const confirmSubmit = window.confirm(
        `You have ${unAnswered} unanswered questions in this OOP set. Do you want to submit and view complete analytics?`
      );
      if (!confirmSubmit) return;
    }

    finalizeAttempt();
  };

  const handleAutoSubmit = () => {
    finalizeAttempt();
  };

  const finalizeAttempt = () => {
    let correct = 0;
    let incorrect = 0;

    activeQuestions.forEach((q) => {
      const userAns = userAnswers[q.id];
      if (userAns === q.correctAnswer) {
        correct++;
      } else if (userAns) {
        incorrect++;
      }
    });

    const scorePercentage = activeQuestions.length > 0
      ? Math.round((correct / activeQuestions.length) * 100)
      : 0;

    oopStorage.saveAttempt({
      tier: activeTier,
      topic: activeTopic,
      totalQuestions: activeQuestions.length,
      answeredCount: Object.keys(userAnswers).length,
      correctCount: correct,
      incorrectCount: incorrect,
      scorePercentage,
      timeTakenSeconds
    });

    setShowAnalysisModal(true);
  };

  // Retake handlers
  const handleRetakeQuiz = () => {
    setShowAnalysisModal(false);
    setUserAnswers({});
    setCurrentIndex(0);
    setTimeRemaining(activeQuestions.length * 60);
    setTimeTakenSeconds(0);
    setIsTimerPaused(false);
  };

  const handleRetakeIncorrect = (incorrectIds) => {
    setShowAnalysisModal(false);
    setUserAnswers((prev) => {
      const copy = { ...prev };
      incorrectIds.forEach((id) => delete copy[id]);
      return copy;
    });
    // Jump to first incorrect
    const firstIncIndex = activeQuestions.findIndex((q) => incorrectIds.includes(q.id));
    if (firstIncIndex !== -1) setCurrentIndex(firstIncIndex);
  };

  const answeredCount = Object.keys(userAnswers).length;
  const bookmarkedCount = bookmarks.filter((id) =>
    activeQuestions.some((q) => q.id === id)
  ).length;

  const getTierMetaForHandbook = (tierId) => {
    switch (Number(tierId)) {
      case 1:
        return {
          title: 'Tier 1: Core Pillars & Basics',
          badge: '15 MCQs',
          description: '4 Pillars, Encapsulation, Abstraction, Inheritance, Overloading vs Overriding & Access Specifiers'
        };
      case 2:
        return {
          title: 'Tier 2: Virtual Dispatch & Architecture',
          badge: '10 MCQs',
          description: 'Virtual Functions, Pure Virtual, Abstract Classes, Static Binding, this pointer & Diamond Problem'
        };
      case 3:
        return {
          title: 'Tier 3: Scenario-Based Design',
          badge: '10 MCQs',
          description: 'Banking Validation, Payment Gateways, Instance Counters & Decoupled Notification Systems'
        };
      default:
        return {
          title: `Tier ${tierId}`,
          badge: 'Study Guide',
          description: 'OOP Concepts & Revision'
        };
    }
  };

  return (
    <div className="cloud-assessment-page">
      <div className="cloud-assessment-container">
        {/* Universal Cloud-Style Header */}
        <CloudQuizHeader
          activeTier={activeTier}
          onSelectTier={setActiveTier}
          activeTopic={activeTopic}
          onSelectTopic={setActiveTopic}
          mode={mode}
          onChangeMode={handleChangeMode}
          timeRemaining={timeRemaining}
          isTimerPaused={isTimerPaused}
          onToggleTimer={() => setIsTimerPaused(!isTimerPaused)}
          answeredCount={answeredCount}
          totalQuestions={activeQuestions.length}
          bookmarkedCount={bookmarkedCount}
          onOpenStudyNotes={() => setShowNotesModal(true)}
          onResetQuiz={handleResetQuiz}
          title="Object-Oriented Programming (OOP) Assessment"
          trackBadge="OOPs Track"
          countBadge="35 High-Yield Questions"
          icon={Boxes}
          tiers={OOP_TIERS}
          topics={OOP_TOPICS}
          notesButtonText="OOP Handbook"
          switchLinks={
            <>
              <Link
                to="/network-security"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.2rem 0.6rem',
                  background: 'rgba(225, 29, 72, 0.15)',
                  color: '#fb7185',
                  border: '1px solid rgba(225, 29, 72, 0.3)',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  marginLeft: '0.25rem'
                }}
              >
                <ShieldAlert size={13} /> NetSec (100) &rarr;
              </Link>
              <Link
                to="/network-assessment"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.2rem 0.6rem',
                  background: 'rgba(99, 102, 241, 0.15)',
                  color: '#a5b4fc',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  marginLeft: '0.25rem'
                }}
              >
                <Network size={13} /> Networking (90) &rarr;
              </Link>
              <Link
                to="/cloud-security"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.2rem 0.6rem',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: '#34d399',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  marginLeft: '0.25rem'
                }}
              >
                <ShieldCheck size={13} /> CloudSec (45) &rarr;
              </Link>
              <Link
                to="/cloud-assessment"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.2rem 0.6rem',
                  background: 'rgba(2, 132, 199, 0.15)',
                  color: '#38bdf8',
                  border: '1px solid rgba(2, 132, 199, 0.3)',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  marginLeft: '0.25rem'
                }}
              >
                <Cloud size={13} /> Cloud (85) &rarr;
              </Link>
            </>
          }
        />

        {/* Quiz Workspace: Left Card + Right Palette (Identical style to Cloud) */}
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
                breakdown={currentBreakdown}
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
        getOptionBreakdownCustom={getOopOptionBreakdown}
      />

      {/* OOP Study Guide Handbook Modal */}
      <CloudStudyNotesModal
        isOpen={showNotesModal}
        onClose={() => setShowNotesModal(false)}
        studyGuides={oopStudyGuides}
        title="OOP Revision Notes & Comprehensive Handbook"
        subtitle="Encapsulation, Abstraction, Inheritance, Polymorphism, Virtual Functions, Abstract Classes & Diamond Problem"
        getTierMetaCustom={getTierMetaForHandbook}
      />
    </div>
  );
}
