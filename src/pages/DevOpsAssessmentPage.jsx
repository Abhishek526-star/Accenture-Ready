// src/pages/DevOpsAssessmentPage.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Server,
  Cloud,
  ShieldCheck,
  Network,
  ShieldAlert,
  Boxes,
  Wifi,
  Terminal,
  GitBranch,
  Layers,
  Cpu
} from 'lucide-react';
import {
  DEVOPS_TIERS,
  DEVOPS_TOPICS,
  devopsQuestions,
  devopsStudyGuides,
  getDevOpsOptionBreakdown,
  filterDevOpsQuestions
} from '../data/devopsQuestions.js';
import { devopsStorage } from '../utils/devopsStorage.js';
import CloudQuizHeader from '../components/cloud/CloudQuizHeader.jsx';
import CloudQuestionCard from '../components/cloud/CloudQuestionCard.jsx';
import CloudQuestionPalette from '../components/cloud/CloudQuestionPalette.jsx';
import CloudAnalysisModal from '../components/cloud/CloudAnalysisModal.jsx';
import CloudStudyNotesModal from '../components/cloud/CloudStudyNotesModal.jsx';
import SEO from '../components/SEO.jsx';
import { seoConfig } from '../config/seo.js';

export default function DevOpsAssessmentPage({ theme = 'dark' }) {
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
  const [mode, setMode] = useState('practice'); // Default to practice mode for instant learning

  // Filtered questions
  const activeQuestions = useMemo(() => {
    return filterDevOpsQuestions({ tier: activeTier, topic: activeTopic });
  }, [activeTier, activeTopic]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [bookmarks, setBookmarks] = useState(() => devopsStorage.getBookmarks());

  // Timer State (Exam Mode)
  const [timeRemaining, setTimeRemaining] = useState(activeQuestions.length * 60);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [timeTakenSeconds, setTimeTakenSeconds] = useState(0);

  // Modals
  const [showAnalysisModal, setShowAnalysisModal] = useState(false);
  const [showNotesModal, setShowNotesModal] = useState(false);

  // Current Question
  const currentQuestion = activeQuestions[currentIndex] || activeQuestions[0];
  const currentBreakdown = currentQuestion ? getDevOpsOptionBreakdown(currentQuestion.id) : null;

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
    const updated = devopsStorage.toggleBookmark(currentQuestion.id);
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
    if (window.confirm('Are you sure you want to reset your answers for this DevOps assessment section?')) {
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
        `You have ${unAnswered} unanswered questions in this DevOps set. Do you want to submit and view complete analytics?`
      );
      if (!confirmSubmit) return;
    }

    finalizeAttempt();
  };

  const handleAutoSubmit = () => {
    finalizeAttempt();
  };

  const finalizeAttempt = () => {
    let correctCount = 0;
    activeQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correctCount += 1;
      }
    });

    const totalQuestions = activeQuestions.length;
    const scorePercentage = Math.round((correctCount / (totalQuestions || 1)) * 100);

    // Save Attempt
    devopsStorage.saveAttempt({
      tier: activeTier,
      topic: activeTopic,
      mode,
      totalQuestions,
      correctCount,
      scorePercentage,
      timeTakenSeconds,
      userAnswers
    });

    setShowAnalysisModal(true);
  };

  const handleRetakeQuiz = () => {
    setShowAnalysisModal(false);
    setUserAnswers({});
    setCurrentIndex(0);
    setTimeRemaining(activeQuestions.length * 60);
    setTimeTakenSeconds(0);
    setIsTimerPaused(false);
  };

  const handleRetakeIncorrect = (incorrectQuestionIds) => {
    setShowAnalysisModal(false);
    setUserAnswers((prev) => {
      const copy = { ...prev };
      incorrectQuestionIds.forEach((id) => delete copy[id]);
      return copy;
    });
    if (incorrectQuestionIds.length > 0) {
      const firstIncorrectIndex = activeQuestions.findIndex((q) =>
        incorrectQuestionIds.includes(q.id)
      );
      if (firstIncorrectIndex !== -1) setCurrentIndex(firstIncorrectIndex);
    }
  };

  // Helper metadata for study handbook modal
  const getTierMetaForHandbook = (tierId) => {
    const t = DEVOPS_TIERS.find((item) => item.id === tierId);
    return t || { title: `Module ${tierId}`, badge: 'Core Guide', description: '' };
  };

  const answeredCount = Object.keys(userAnswers).length;
  const bookmarkedCount = bookmarks.length;

  return (
    <div className="cloud-assessment-page">
      <SEO {...seoConfig.devopsAssessment} />
      <div className="cloud-assessment-container">
        {/* Universal Header with DevOps branding and cross-assessment tabs */}
        <CloudQuizHeader
          activeTier={activeTier}
          onSelectTier={setActiveTier}
          activeTopic={activeTopic}
          onSelectTopic={setActiveTopic}
          mode={mode}
          onChangeMode={handleChangeMode}
          timeRemaining={timeRemaining}
          isTimerPaused={isTimerPaused}
          onToggleTimer={() => setIsTimerPaused((prev) => !prev)}
          answeredCount={answeredCount}
          totalQuestions={activeQuestions.length}
          bookmarkedCount={bookmarkedCount}
          onOpenStudyNotes={() => setShowNotesModal(true)}
          onResetQuiz={handleResetQuiz}
          title="Accenture DevOps Assessment – Practice Questions & Preparation"
          trackBadge="DevOps Track"
          countBadge="35 High-Yield Questions"
          icon={Server}
          tiers={DEVOPS_TIERS}
          topics={DEVOPS_TOPICS}
          notesButtonText="DevOps Master Handbook"
          switchLinks={
            <>
              <Link
                to="/cloud-assessment"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.2rem 0.6rem',
                  background: 'rgba(56, 189, 248, 0.15)',
                  color: '#38bdf8',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  marginLeft: '0.25rem'
                }}
              >
                <Cloud size={13} /> Cloud (85) &rarr;
              </Link>
              <Link
                to="/wifi-security"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.2rem 0.6rem',
                  background: 'rgba(6, 182, 212, 0.15)',
                  color: '#22d3ee',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  marginLeft: '0.25rem'
                }}
              >
                <Wifi size={13} /> Wi-Fi Sec (25) &rarr;
              </Link>
              <Link
                to="/oop-assessment"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.2rem 0.6rem',
                  background: 'rgba(168, 85, 247, 0.15)',
                  color: '#c084fc',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  marginLeft: '0.25rem'
                }}
              >
                <Boxes size={13} /> OOPs (35) &rarr;
              </Link>
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
            </>
          }
        />

        {/* Quiz Workspace: Left Card + Right Palette (Exact same layout as Cloud & Wi-Fi) */}
        <div className="cloud-workspace-layout">
          <main className="cloud-question-column">
            {activeQuestions.length === 0 ? (
              <div className="cloud-empty-state">
                <h3>No DevOps questions found matching your filter.</h3>
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
        getOptionBreakdownCustom={getDevOpsOptionBreakdown}
      />

      {/* DevOps Study Guide Handbook Modal */}
      <CloudStudyNotesModal
        isOpen={showNotesModal}
        onClose={() => setShowNotesModal(false)}
        studyGuides={devopsStudyGuides}
        title="Accenture DevOps Master Preparation Handbook"
        subtitle="CI/CD Pipelines, Git Version Control, Docker Containers, Kubernetes Orchestration & Linux Bash Scripting"
        getTierMetaCustom={getTierMetaForHandbook}
      />
    </div>
  );
}
