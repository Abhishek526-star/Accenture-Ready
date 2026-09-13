// src/pages/NetworkAssessmentPage.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Network, Cloud, ShieldCheck } from 'lucide-react';
import {
  NETWORK_TIERS,
  NETWORK_TOPICS,
  networkQuestions,
  networkStudyGuides,
  getNetworkOptionBreakdown,
  filterNetworkQuestions
} from '../data/networkQuestions.js';
import { networkStorage } from '../utils/networkStorage.js';
import CloudQuizHeader from '../components/cloud/CloudQuizHeader.jsx';
import CloudQuestionCard from '../components/cloud/CloudQuestionCard.jsx';
import CloudQuestionPalette from '../components/cloud/CloudQuestionPalette.jsx';
import CloudAnalysisModal from '../components/cloud/CloudAnalysisModal.jsx';
import CloudStudyNotesModal from '../components/cloud/CloudStudyNotesModal.jsx';
import SEO from '../components/SEO.jsx';
import { seoConfig } from '../config/seo.js';

export default function NetworkAssessmentPage({ theme = 'dark' }) {
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
    return filterNetworkQuestions({ tier: activeTier, topic: activeTopic });
  }, [activeTier, activeTopic]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [bookmarks, setBookmarks] = useState(() => networkStorage.getBookmarks());

  // Timer State (Exam Mode)
  const [timeRemaining, setTimeRemaining] = useState(activeQuestions.length * 60);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [timeTakenSeconds, setTimeTakenSeconds] = useState(0);

  // Modals
  const [showAnalysisModal, setShowAnalysisModal] = useState(false);
  const [showNotesModal, setShowNotesModal] = useState(false);

  // Current Question
  const currentQuestion = activeQuestions[currentIndex] || activeQuestions[0];
  const currentBreakdown = currentQuestion ? getNetworkOptionBreakdown(currentQuestion.id) : null;

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
    const updated = networkStorage.toggleBookmark(questionId);
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

    const scorePercent = Math.round((correctCount / activeQuestions.length) * 100);

    networkStorage.saveAttempt({
      tier: activeTier,
      topic: activeTopic,
      mode,
      totalQuestions: activeQuestions.length,
      score: correctCount,
      scorePercent,
      timeTakenSeconds,
      isAutoSubmit: isAuto,
      completedAt: new Date().toISOString()
    });

    setIsTimerPaused(true);
    setShowAnalysisModal(true);
  };

  const handleSubmitQuiz = () => {
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

  const getTierMetaForHandbook = (tier) => {
    switch (tier) {
      case 1:
        return { label: 'Tier 1: OSI & Protocols', count: '30 MCQs', badge: 'Core Concepts' };
      case 2:
        return { label: 'Tier 2: Addressing & CIDR', count: '30 MCQs', badge: 'Subnetting & Topologies' };
      case 3:
        return { label: 'Tier 3: Devices & Routing', count: '30 MCQs', badge: 'Routing & Commands' };
      default:
        return { label: `Tier ${tier}`, count: '30 MCQs', badge: 'Revision' };
    }
  };

  return (
    <div className="cloud-assessment-page" data-theme={theme}>
      <SEO {...seoConfig.networkAssessment} />
      <div className="cloud-page-container">
        {/* Main Quiz Header */}
        <CloudQuizHeader
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
          title="Accenture Networking Assessment – Computer Networks Practice"
          trackBadge="Computer Networking Track"
          countBadge="90 High-Yield Questions"
          icon={Network}
          tiers={NETWORK_TIERS}
          topics={NETWORK_TOPICS}
          notesButtonText="Networking Handbook"
          switchLinks={
            <>
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
                <Cloud size={13} /> Cloud Track (85) &rarr;
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
                <ShieldCheck size={13} /> Security Track (45) &rarr;
              </Link>
            </>
          }
        />

        {/* Quiz Workspace: Left Card + Right Palette (100% same layout as Cloud) */}
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

          {/* Right Navigator Palette (100% same style as Cloud) */}
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
        getOptionBreakdownCustom={getNetworkOptionBreakdown}
      />

      {/* Networking Study Guide Handbook Modal */}
      <CloudStudyNotesModal
        isOpen={showNotesModal}
        onClose={() => setShowNotesModal(false)}
        studyGuides={networkStudyGuides}
        title="Computer Networking Revision Notes & Handbook"
        subtitle="OSI 7 Layers, TCP/IP, CIDR Subnetting, MAC vs IP, Protocols, Port Cheat Sheet & Devices"
        getTierMetaCustom={getTierMetaForHandbook}
      />
    </div>
  );
}
