// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Play,
  CheckCircle,
  Code2,
  ShieldCheck,
  Zap,
  RotateCcw,
  Sparkles,
  ArrowRight,
  BookOpen,
  Brain,
  Grid,
  Database
} from 'lucide-react';
import { questions } from '../data/questions.js';
import { storage } from '../utils/storage.js';

export default function Home() {
  const completedIds = storage.getCompletedQuestions();

  const getDifficultyBadge = (diff) => {
    switch (diff.toLowerCase()) {
      case 'easy':
        return <span className="badge badge-easy">Easy</span>;
      case 'medium':
        return <span className="badge badge-medium">Medium</span>;
      case 'hard':
        return <span className="badge badge-hard">Hard</span>;
      default:
        return <span className="badge badge-easy">Easy</span>;
    }
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={14} /> Comprehensive Technical Assessment Simulator
          </div>
          <h1 className="hero-title">Technical, SQL & Cognitive Assessment Practice</h1>
          <p className="hero-subtitle">
            Prepare for company technical recruitment screens with three dedicated environments:
            <strong> Gamified Cognitive Round</strong>, <strong>Frontend Coding Round</strong>, and the new <strong>SQL Assessment & Compiler Round</strong> with real in-browser SQLite execution.
          </p>

          <div className="hero-actions">
            <Link to="/sql-assessment" className="btn btn-primary btn-lg" style={{ background: 'linear-gradient(135deg, #ea580c, #f97316)' }}>
              <Database size={18} />
              <span>SQL Assessment Round</span>
            </Link>
            <Link to="/cognitive" className="btn btn-secondary btn-lg">
              <Brain size={18} />
              <span>Cognitive Round</span>
            </Link>
            <Link to="/practice" className="btn btn-secondary btn-lg">
              <Code2 size={18} />
              <span>Coding Round</span>
            </Link>
          </div>

          <div className="hero-stats-row">
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Assessment Rounds</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">10</span>
              <span className="stat-label">Coding Tasks</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">SQL Problems</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">Real WASM</span>
              <span className="stat-label">SQLite Engine</span>
            </div>
          </div>
        </div>
      </section>

      {/* Three Rounds Selection Grid */}
      <section style={{ maxWidth: '1200px', margin: '-1rem auto 3rem auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {/* Track 1: SQL Assessment */}
          <div style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            border: '1px solid rgba(249, 115, 22, 0.3)',
            borderRadius: '20px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.75rem', background: 'rgba(249, 115, 22, 0.15)', color: '#f97316', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                <Database size={14} /> SQL
              </div>
              <h3 style={{ margin: 0, fontSize: '1.35rem', color: '#f8fafc' }}>SQL Query & Database Problems</h3>
              <p style={{ margin: '0.5rem 0 0 0', color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Read schema definitions, write and execute queries against real in-browser SQLite databases, handle NULLs, groupings, subqueries, and pass hidden test cases.
              </p>
              <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="badge badge-easy">Easy • Medium</span>
                <span className="badge" style={{ background: 'rgba(255,255,255,0.06)', color: '#cbd5e1' }}>15 mins/question</span>
              </div>
            </div>
            <div>
              <Link to="/sql-assessment" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', background: 'linear-gradient(135deg, #ea580c, #c2410c)', border: 'none' }}>
                <Database size={16} />
                <span>Start SQL Round</span>
              </Link>
            </div>
          </div>

          {/* Track 2: Coding */}
          <div style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            border: '1px solid #334155',
            borderRadius: '20px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
          }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.75rem', background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                <Code2 size={14} /> ROUND 2: FRONTEND CODING
              </div>
              <h3 style={{ margin: 0, fontSize: '1.35rem', color: '#f8fafc' }}>DOM & UI Coding Assessment</h3>
              <p style={{ margin: '0.5rem 0 0 0', color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Solve 10 practical DOM manipulation, event handling, and form validation challenges with Monaco editor, sandboxed preview, and automated test runners.
              </p>
              <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="badge badge-medium">10 Tasks</span>
                <span className="badge" style={{ background: 'rgba(255,255,255,0.06)', color: '#cbd5e1' }}>Automated DOM Tests</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <Link to="/practice" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', background: '#10b981' }}>
                <span>Open Practice Room</span>
              </Link>
            </div>
          </div>

          {/* Track 3: Cognitive */}
          <div style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            border: '1px solid #334155',
            borderRadius: '20px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
          }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.75rem', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                <Brain size={14} /> ROUND 3: COGNITIVE
              </div>
              <h3 style={{ margin: 0, fontSize: '1.35rem', color: '#f8fafc' }}>Gamified Cognitive Games</h3>
              <p style={{ margin: '0.5rem 0 0 0', color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Master mental arithmetic sequences in <strong>Math Bubble</strong> and spatial memory navigation in <strong>Memory Maze</strong>.
              </p>
              <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="badge badge-easy">Speed & Logic</span>
                <span className="badge" style={{ background: 'rgba(255,255,255,0.06)', color: '#cbd5e1' }}>Mental Agility</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <Link to="/cognitive/assessment" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', background: '#0284c7' }}>
                <span>Take Assessment</span>
              </Link>
              <Link to="/cognitive" className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
                <span>Practice Hub</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum / Topics Covered */}
      <section className="topics-section">
        <div className="section-header-centered">
          <h2>Core Assessment Competencies</h2>
          <p>Key frontend skills assessed in technical recruitment screens</p>
        </div>

        <div className="topics-grid">
          <div className="topic-card">
            <div className="topic-icon">
              <Code2 size={24} />
            </div>
            <h3>DOM Manipulation</h3>
            <p>Direct DOM querying, element creation, dynamic updates, and class manipulation.</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon">
              <Zap size={24} />
            </div>
            <h3>Event Handling</h3>
            <p>Click listeners, keyboard events, form submit prevention, and live input filtering.</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon">
              <ShieldCheck size={24} />
            </div>
            <h3>Form Validation</h3>
            <p>Client-side validation, password matching, length checks, and real-time user feedback.</p>
          </div>

          <div className="topic-card">
            <div className="topic-icon">
              <BookOpen size={24} />
            </div>
            <h3>UI State & Logic</h3>
            <p>Dynamic theme switching, counter boundaries, conditional rendering, and conversions.</p>
          </div>
        </div>
      </section>

      {/* Question Directory */}
      <section className="questions-directory-section">
        <div className="section-header-flex">
          <div>
            <h2>Practice Question Set</h2>
            <p>Work through the 10 assessment questions in order or jump to any task.</p>
          </div>
          <Link to="/practice" className="btn btn-primary">
            <span>Open Practice Workspace</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="questions-grid">
          {questions.map((q) => {
            const isCompleted = completedIds.includes(q.id);
            return (
              <div key={q.id} className={`landing-q-card ${isCompleted ? 'completed' : ''}`}>
                <div className="q-card-top">
                  <span className="q-number">Question {q.id}</span>
                  <div className="q-badges">
                    {getDifficultyBadge(q.difficulty)}
                    {isCompleted && (
                      <span className="badge badge-solved">
                        <CheckCircle size={12} /> Solved
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="q-title">{q.title}</h3>
                <p className="q-category">{q.category}</p>
                <p className="q-desc">{q.howToAttempt}</p>

                <div className="q-card-footer">
                  <span className="q-objectives-count">
                    {(q.objectives?.length) || ((q.htmlObjectives?.length || 0) + (q.cssObjectives?.length || 0) + (q.jsObjectives?.length || 0))} Objectives
                  </span>
                  <Link to={`/practice?q=${q.id}`} className="btn btn-secondary btn-sm">
                    <span>Attempt</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Features Showcase */}
      <section className="features-section">
        <div className="section-header-centered">
          <h2>Assessment Environment Features</h2>
          <p>Engineered to simulate realistic recruitment screening assessments</p>
        </div>

        <div className="features-grid">
          <div className="feature-item">
            <ShieldCheck size={20} className="feature-icon" />
            <div>
              <h4>Sandboxed Iframe Execution</h4>
              <p>Candidate code runs inside an isolated iframe without access to parent state or storage.</p>
            </div>
          </div>

          <div className="feature-item">
            <Zap size={20} className="feature-icon" />
            <div>
              <h4>Automated DOM Testing</h4>
              <p>Independent assertions run against the real rendered DOM to verify your solution.</p>
            </div>
          </div>

          <div className="feature-item">
            <RotateCcw size={20} className="feature-icon" />
            <div>
              <h4>Local Progress Persistence</h4>
              <p>Your code and completion status automatically persist locally in your browser.</p>
            </div>
          </div>

          <div className="feature-item">
            <Sparkles size={20} className="feature-icon" />
            <div>
              <h4>Monaco VS Code Editor</h4>
              <p>Full-featured code editor with syntax highlighting, indentation, and HTML/CSS tabs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <footer className="landing-footer">
        <p>
          This platform is designed for educational practice and interview preparation.
          Questions and interface are inspired by standard frontend assessments.
        </p>
      </footer>
    </div>
  );
}
