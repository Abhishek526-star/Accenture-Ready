// src/pages/JavaLearningPage.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Coffee,
  CheckCircle2,
  Circle,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Code2,
  Terminal,
  RotateCcw,
  BookOpen,
  ArrowRight,
  Layers,
  Sparkles,
  Trophy
} from 'lucide-react';
import { javaTopics } from '../data/javaTopics.js';
import { javaStorage } from '../utils/javaStorage.js';
import JavaTopicSidebar from '../components/java/JavaTopicSidebar.jsx';
import JavaCodeViewer from '../components/java/JavaCodeViewer.jsx';
import JavaMethodTable from '../components/java/JavaMethodTable.jsx';
import JavaTipCard from '../components/java/JavaTipCard.jsx';

export default function JavaLearningPage({ theme = 'dark' }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const topicParam = searchParams.get('topic');

  // Find initial topic
  const initialTopic = useMemo(() => {
    if (topicParam) {
      const match = javaTopics.find((t) => t.id === topicParam);
      if (match) return match;
    }
    const saved = javaStorage.getActiveTopicId(javaTopics[0].id);
    return javaTopics.find((t) => t.id === saved) || javaTopics[0];
  }, [topicParam]);

  const [activeTopic, setActiveTopic] = useState(initialTopic);
  const [completedTopicIds, setCompletedTopicIds] = useState(() =>
    javaStorage.getCompletedTopics()
  );
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Sync state when URL param or initial topic updates
  useEffect(() => {
    if (topicParam) {
      const match = javaTopics.find((t) => t.id === topicParam);
      if (match && match.id !== activeTopic.id) {
        setActiveTopic(match);
      }
    }
  }, [topicParam, activeTopic.id]);

  // Handle topic selection
  const handleSelectTopic = (topicId) => {
    const found = javaTopics.find((t) => t.id === topicId);
    if (found) {
      setActiveTopic(found);
      setSearchParams({ topic: found.id }, { replace: true });
      javaStorage.setActiveTopicId(found.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Toggle completion
  const handleToggleCompleted = () => {
    const updated = javaStorage.toggleTopicCompleted(activeTopic.id);
    setCompletedTopicIds(updated);
  };

  // Reset all progress
  const handleResetProgress = () => {
    if (
      window.confirm(
        'Are you sure you want to reset your Java Learning topic completion progress?'
      )
    ) {
      javaStorage.resetAllProgress(javaTopics);
      setCompletedTopicIds([]);
    }
  };

  // Navigation: Previous & Next
  const currentIndex = javaTopics.findIndex((t) => t.id === activeTopic.id);
  const prevTopic = currentIndex > 0 ? javaTopics[currentIndex - 1] : null;
  const nextTopic =
    currentIndex < javaTopics.length - 1 ? javaTopics[currentIndex + 1] : null;

  const isCurrentCompleted = completedTopicIds.includes(activeTopic.id);
  const completedPercent = Math.round(
    (completedTopicIds.length / javaTopics.length) * 100
  );

  return (
    <div className="java-learning-page">
      {/* Top Banner Control Bar */}
      <header className="java-top-bar">
        <div className="bar-left">
          <button
            type="button"
            className="mobile-sidebar-toggle-btn"
            onClick={() => setIsMobileSidebarOpen((prev) => !prev)}
            aria-label="Toggle Topic Syllabus Sidebar"
          >
            {isMobileSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div className="page-identity">
            <div className="page-icon">
              <Coffee size={20} />
            </div>
            <div>
              <span className="page-tag">Candidate Learning & Preparation</span>
              <h1 className="page-title">Assessment Java Handbook</h1>
            </div>
          </div>
        </div>

        <div className="bar-right">
          {/* Progress Pill */}
          <div className="completion-stats-pill">
            <Trophy size={14} className="text-warning" />
            <span>
              {completedTopicIds.length} / {javaTopics.length} Topics (
              {completedPercent}%)
            </span>
          </div>

          {/* Mark as Completed Button */}
          <button
            type="button"
            onClick={handleToggleCompleted}
            className={`btn-topic-complete ${isCurrentCompleted ? 'completed' : ''}`}
            title={isCurrentCompleted ? 'Click to mark uncompleted' : 'Mark topic as completed'}
          >
            {isCurrentCompleted ? (
              <>
                <CheckCircle2 size={16} />
                <span>Completed</span>
              </>
            ) : (
              <>
                <Circle size={16} />
                <span>Mark as Completed</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay (outside grid so it does not take a grid cell!) */}
      {isMobileSidebarOpen && (
        <div
          className="sidebar-overlay visible"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Main Two-Column Layout */}
      <div className="java-workspace-layout">
        {/* LEFT COLUMN: Sidebar */}
        <JavaTopicSidebar
          topics={javaTopics}
          activeTopicId={activeTopic.id}
          onSelectTopic={handleSelectTopic}
          completedTopicIds={completedTopicIds}
          isOpen={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        {/* RIGHT COLUMN: Topic Learning Workspace */}
        <main className="java-main-content">
          {/* Topic Header Card */}
          <div className="topic-hero-card">
            <div className="topic-hero-header-row">
              <div className="topic-meta-row">
                <span className="topic-cat-badge">{activeTopic.category}</span>
                <span
                  className={`difficulty-pill ${activeTopic.difficulty
                    ?.toLowerCase()
                    .replace(/\s+/g, '-')}`}
                >
                  {activeTopic.difficulty}
                </span>
                <span className="topic-duration-badge">
                  ⏱️ {activeTopic.duration}
                </span>
                {isCurrentCompleted && (
                  <span className="topic-status-badge completed">
                    <CheckCircle2 size={13} /> Completed
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={handleToggleCompleted}
                className={`btn-topic-complete ${isCurrentCompleted ? 'completed' : ''}`}
              >
                {isCurrentCompleted ? (
                  <>
                    <CheckCircle2 size={15} />
                    <span>Topic Completed</span>
                  </>
                ) : (
                  <>
                    <Circle size={15} />
                    <span>Mark as Completed</span>
                  </>
                )}
              </button>
            </div>

            <h2 className="topic-main-title">{activeTopic.title}</h2>

            <div className="topic-explanation">
              <p>{activeTopic.explanation}</p>
            </div>
          </div>

          {/* Syntax Section */}
          {activeTopic.syntax && (
            <div className="java-section-card syntax-card">
              <div className="section-card-header">
                <Code2 size={16} className="text-primary" />
                <h3>Core Syntax & Patterns</h3>
              </div>
              <pre className="syntax-pre">
                <code>{activeTopic.syntax}</code>
              </pre>
            </div>
          )}

          {/* Interactive Code Example & Run Workspace */}
          <div className="java-section-card code-playground-card">
            <div className="section-card-header">
              <Terminal size={16} className="text-secondary" />
              <h3>Interactive Code Example & Live Run</h3>
              <span className="section-hint">
                Edit snippet or click "Run Code" to view console output:
              </span>
            </div>

            <JavaCodeViewer
              initialCode={javaStorage.getTopicDraft(
                activeTopic.id,
                activeTopic.code
              )}
              expectedOutput={activeTopic.output}
              topicTitle={activeTopic.title}
              theme={theme}
              onCodeSave={(newCode) =>
                javaStorage.setTopicDraft(activeTopic.id, newCode)
              }
            />
          </div>

          {/* Important Built-in Methods Table */}
          {activeTopic.methods && activeTopic.methods.length > 0 && (
            <JavaMethodTable methods={activeTopic.methods} />
          )}

          {/* Assessment & Interview Tips Card */}
          {activeTopic.tips && activeTopic.tips.length > 0 && (
            <JavaTipCard tips={activeTopic.tips} />
          )}

          {/* Pagination Navigation Footer */}
          <div className="topic-pagination-footer">
            <div>
              {prevTopic ? (
                <button
                  type="button"
                  onClick={() => handleSelectTopic(prevTopic.id)}
                  className="btn btn-secondary btn-sm nav-prev-btn"
                >
                  <ChevronLeft size={16} />
                  <div className="btn-text-group">
                    <span className="nav-sub">Previous Topic</span>
                    <span className="nav-title">{prevTopic.title}</span>
                  </div>
                </button>
              ) : (
                <div />
              )}
            </div>

            <div className="pagination-center-actions">
              <button
                type="button"
                onClick={handleResetProgress}
                className="btn btn-outline btn-xs"
                title="Reset completion stats"
              >
                <RotateCcw size={12} />
                <span>Reset Progress</span>
              </button>
            </div>

            <div>
              {nextTopic ? (
                <button
                  type="button"
                  onClick={() => handleSelectTopic(nextTopic.id)}
                  className="btn btn-primary btn-sm nav-next-btn"
                >
                  <div className="btn-text-group">
                    <span className="nav-sub">Next Topic</span>
                    <span className="nav-title">{nextTopic.title}</span>
                  </div>
                  <ChevronRight size={16} />
                </button>
              ) : (
                <Link
                  to="/practice"
                  className="btn btn-primary btn-sm nav-next-btn"
                >
                  <div className="btn-text-group">
                    <span className="nav-sub">All Topics Complete!</span>
                    <span className="nav-title">Go To Coding Round</span>
                  </div>
                  <ArrowRight size={16} />
                </Link>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
