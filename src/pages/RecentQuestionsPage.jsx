// src/pages/RecentQuestionsPage.jsx
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Code2,
  Database,
  Layout,
  Calendar,
  Clock,
  Sparkles,
  Search,
  CheckCircle2,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Play,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  ExternalLink,
  BookOpen,
  Filter
} from 'lucide-react';
import { recentQuestions, RECENT_TRACKS } from '../data/recentQuestions.js';

export default function RecentQuestionsPage({ theme }) {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Track selection from URL (?track=dsa | sql | frontend)
  const activeTrack = searchParams.get('track') || 'dsa';
  const setActiveTrack = (trackId) => {
    setSearchParams({ track: trackId });
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  // Bookmarks & Solved state (persisted locally)
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('recent-bookmarks') || '[]');
    } catch {
      return [];
    }
  });

  const [solvedSet, setSolvedSet] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('recent-solved') || '[]');
    } catch {
      return [];
    }
  });

  // Active language/code tab per question card
  const [activeLang, setActiveLang] = useState({});
  const [activeFeTab, setActiveFeTab] = useState({});
  const [copiedId, setCopiedId] = useState(null);

  // Live Quote state for 10th Sept Frontend interactive widget
  const [currentQuote, setCurrentQuote] = useState('Click the button to show a quote!');

  // Custom dropdown states
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isDiffOpen, setIsDiffOpen] = useState(false);
  const dateDropdownRef = useRef(null);
  const diffDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dateDropdownRef.current && !dateDropdownRef.current.contains(e.target)) {
        setIsDateOpen(false);
      }
      if (diffDropdownRef.current && !diffDropdownRef.current.contains(e.target)) {
        setIsDiffOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Interactive runner input state per question card
  const [runnerInputs, setRunnerInputs] = useState({
    'recent-dsa-001': '[22, 5, 14]',
    'recent-dsa-002': '112',
    'recent-dsa-003': '10'
  });
  const [runnerOutputs, setRunnerOutputs] = useState({});

  const toggleBookmark = (id) => {
    const updated = bookmarks.includes(id)
      ? bookmarks.filter((b) => b !== id)
      : [...bookmarks, id];
    setBookmarks(updated);
    localStorage.setItem('recent-bookmarks', JSON.stringify(updated));
  };

  const toggleSolved = (id) => {
    const updated = solvedSet.includes(id)
      ? solvedSet.filter((s) => s !== id)
      : [...solvedSet, id];
    setSolvedSet(updated);
    localStorage.setItem('recent-solved', JSON.stringify(updated));
  };

  const handleCopyCode = (id, code) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Extract distinct date tags for active track
  const availableDates = useMemo(() => {
    const dates = new Set();
    recentQuestions
      .filter((q) => q.track === activeTrack)
      .forEach((q) => dates.add(q.dateTag));
    return Array.from(dates);
  }, [activeTrack]);

  // Filter questions
  const filteredQuestions = useMemo(() => {
    return recentQuestions.filter((q) => {
      if (q.track !== activeTrack) return false;
      if (selectedDate !== 'all' && q.dateTag !== selectedDate) return false;
      if (selectedDifficulty !== 'all' && q.difficulty.toLowerCase() !== selectedDifficulty.toLowerCase()) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return (
          q.title.toLowerCase().includes(query) ||
          q.description.toLowerCase().includes(query) ||
          q.dateTag.toLowerCase().includes(query) ||
          q.category.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [activeTrack, selectedDate, selectedDifficulty, searchQuery]);

  // Track counts
  const trackCounts = useMemo(() => {
    const counts = { dsa: 0, sql: 0, frontend: 0 };
    recentQuestions.forEach((q) => {
      if (counts[q.track] !== undefined) counts[q.track]++;
    });
    return counts;
  }, []);

  // Run in-browser test runner simulation
  const handleExecuteRunner = (q) => {
    const inputVal = runnerInputs[q.id];
    try {
      if (q.id === 'recent-dsa-001') {
        const parsed = JSON.parse(inputVal);
        if (!Array.isArray(parsed)) throw new Error('Input must be a valid JSON array of numbers, e.g. [22, 5, 14]');
        const result = q.runSimulation(parsed);
        setRunnerOutputs((prev) => ({
          ...prev,
          [q.id]: {
            success: true,
            message: `Transformed Array: [${result.transformed.join(', ')}]\nTotal Sum: ${result.total}`
          }
        }));
      } else if (q.id === 'recent-dsa-002') {
        const n = parseInt(inputVal, 10);
        if (isNaN(n) || n <= 1) throw new Error('N must be an integer greater than 1');
        const result = q.runSimulation(n);
        setRunnerOutputs((prev) => ({
          ...prev,
          [q.id]: {
            success: true,
            message: `Total Valid Numbers (X < ${n} with EqSum(X) > ${n}): ${result.count}\nValid Numbers: [${result.numbers.join(', ')}]`
          }
        }));
      } else if (q.id === 'recent-dsa-003') {
        const n = parseInt(inputVal, 10);
        if (isNaN(n) || n < 1) throw new Error('N must be a positive integer >= 1 (e.g. 10)');
        const result = q.runSimulation(n);
        setRunnerOutputs((prev) => ({
          ...prev,
          [q.id]: {
            success: true,
            message: `Running Sum = ${result.runningSum}\nCount = ${result.count}\n\nStep Calculation Trace:\n${result.history.join('\n')}${n > 10 ? '\n... and so on up to N=' + n : ''}`
          }
        }));
      }
    } catch (err) {
      setRunnerOutputs((prev) => ({
        ...prev,
        [q.id]: { success: false, message: err.message || 'Invalid input format' }
      }));
    }
  };

  const handleRandomQuoteClick = () => {
    const quotes = [
      "Believe in yourself.",
      "Success comes with consistency.",
      "Never stop learning.",
      "Hard work beats talent."
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(`"${quotes[randomIndex]}"`);
  };

  return (
    <div className="recent-questions-page">
      {/* Hero Header */}
      <header className="recent-hero-section">
        <div className="recent-hero-badge">
          <Sparkles size={14} className="text-amber-400" />
          <span>Real Exam Archives & Shift Analysis</span>
        </div>
        <h1 className="recent-hero-title">Recent Coding Questions</h1>
        <p className="recent-hero-subtitle">
          Actual Accenture assessment problems categorized by track (DSA, SQL, Frontend) and tagged with exam dates, step-by-step calculations, formula breakdowns, and multi-language solutions.
        </p>

        {/* Global Track Selector Bar */}
        <div className="recent-track-tabs">
          {RECENT_TRACKS.map((t) => {
            const isActive = activeTrack === t.id;
            return (
              <button
                key={t.id}
                onClick={() => {
                  setActiveTrack(t.id);
                  setSelectedDate('all');
                }}
                className={`recent-track-btn ${isActive ? 'active' : ''}`}
                style={{ '--track-color': t.color }}
              >
                {t.id === 'dsa' && <Code2 size={16} />}
                {t.id === 'sql' && <Database size={16} />}
                {t.id === 'frontend' && <Layout size={16} />}
                <span className="track-name">{t.label}</span>
                <span className="track-badge">{trackCounts[t.id]}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* Filter Controls Bar */}
      <div className="recent-filters-bar">
        <div className="filter-search-box">
          <Search size={15} className="text-muted" />
          <input
            type="text"
            placeholder="Search problems by title, date, or concept..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search-btn" onClick={() => setSearchQuery('')}>×</button>
          )}
        </div>

        <div className="filter-dropdowns">
          {/* Date Selector Custom Dropdown */}
          <div className="custom-dropdown-container" ref={dateDropdownRef}>
            <button
              type="button"
              className={`custom-dropdown-trigger ${isDateOpen ? 'open' : ''}`}
              onClick={() => {
                setIsDateOpen(!isDateOpen);
                setIsDiffOpen(false);
              }}
            >
              <Calendar size={14} className="text-sky-400" />
              <span className="dropdown-trigger-label">
                {selectedDate === 'all' ? `All Dates & Shifts (${availableDates.length})` : selectedDate}
              </span>
              <ChevronDown size={14} className={`dropdown-chevron ${isDateOpen ? 'rotate' : ''}`} />
            </button>

            {isDateOpen && (
              <div className="custom-dropdown-menu">
                <button
                  type="button"
                  className={`custom-dropdown-item ${selectedDate === 'all' ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedDate('all');
                    setIsDateOpen(false);
                  }}
                >
                  <span>All Dates & Shifts ({availableDates.length})</span>
                  {selectedDate === 'all' && <Check size={14} className="text-sky-400" />}
                </button>
                {availableDates.map((date) => (
                  <button
                    key={date}
                    type="button"
                    className={`custom-dropdown-item ${selectedDate === date ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedDate(date);
                      setIsDateOpen(false);
                    }}
                  >
                    <span>{date}</span>
                    {selectedDate === date && <Check size={14} className="text-sky-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Difficulty Selector Custom Dropdown */}
          <div className="custom-dropdown-container" ref={diffDropdownRef}>
            <button
              type="button"
              className={`custom-dropdown-trigger ${isDiffOpen ? 'open' : ''}`}
              onClick={() => {
                setIsDiffOpen(!isDiffOpen);
                setIsDateOpen(false);
              }}
            >
              <Filter size={14} className="text-amber-400" />
              <span className="dropdown-trigger-label">
                {selectedDifficulty === 'all'
                  ? 'All Difficulties'
                  : selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)}
              </span>
              <ChevronDown size={14} className={`dropdown-chevron ${isDiffOpen ? 'rotate' : ''}`} />
            </button>

            {isDiffOpen && (
              <div className="custom-dropdown-menu">
                {['all', 'easy', 'medium', 'hard'].map((diff) => (
                  <button
                    key={diff}
                    type="button"
                    className={`custom-dropdown-item ${selectedDifficulty === diff ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedDifficulty(diff);
                      setIsDiffOpen(false);
                    }}
                  >
                    <span>{diff === 'all' ? 'All Difficulties' : diff.charAt(0).toUpperCase() + diff.slice(1)}</span>
                    {selectedDifficulty === diff && <Check size={14} className="text-sky-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Questions Feed */}
      <main className="recent-questions-list">
        {filteredQuestions.length === 0 ? (
          <div className="empty-state-card" style={{ textAlign: 'center', padding: '3.5rem 1.5rem', background: '#0f172a', border: '1px solid #334155', borderRadius: '16px' }}>
            <BookOpen size={48} className="text-muted" style={{ marginBottom: '1rem', opacity: 0.7 }} />
            <h3 style={{ fontSize: '1.25rem', color: '#f8fafc', margin: '0 0 0.5rem 0' }}>
              {trackCounts[activeTrack] === 0
                ? `No Verified ${activeTrack.toUpperCase()} Exam Questions Added Yet`
                : 'No Questions Match Your Filter'}
            </h3>
            <p style={{ color: '#94a3b8', maxWidth: '480px', margin: '0 auto 1.5rem auto', fontSize: '0.9rem', lineHeight: 1.6 }}>
              {trackCounts[activeTrack] === 0
                ? `Only 100% verified authentic exam questions are kept in this archive. Upload your recent ${activeTrack.toUpperCase()} exam paper (PDF or screenshot) to populate this track.`
                : 'Try resetting the search query or selecting "All Dates" to see available questions.'}
            </p>
            {trackCounts[activeTrack] === 0 ? (
              <button
                onClick={() => setActiveTrack('dsa')}
                className="btn btn-primary btn-sm"
              >
                View Verified DSA Questions
              </button>
            ) : (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedDate('all');
                  setSelectedDifficulty('all');
                }}
                className="btn btn-secondary btn-sm"
              >
                Reset Filters
              </button>
            )}
          </div>
        ) : (
          filteredQuestions.map((q, qIndex) => {
            const isBookmarked = bookmarks.includes(q.id);
            const isSolved = solvedSet.includes(q.id);
            const availableLangs = q.solutions ? Object.keys(q.solutions) : [];
            const currentLang = activeLang[q.id] || (availableLangs.length ? availableLangs[0] : 'python');
            const currentFeTab = activeFeTab[q.id] || 'html';
            const runnerOutput = runnerOutputs[q.id];

            return (
              <article key={q.id} className="recent-question-card" id={q.id}>
                {/* Card Header Meta */}
                <div className="card-top-bar">
                  <div className="meta-left">
                    <span className="exam-date-badge">
                      <Calendar size={13} />
                      {q.dateTag}
                    </span>
                    <span className={`badge-diff badge-${q.difficulty.toLowerCase()}`}>
                      {q.difficulty}
                    </span>
                    <span className="category-tag">{q.category}</span>
                  </div>

                  <div className="meta-right">
                    <button
                      onClick={() => toggleSolved(q.id)}
                      className={`action-icon-btn ${isSolved ? 'solved' : ''}`}
                      title={isSolved ? 'Mark as Unsolved' : 'Mark as Solved'}
                    >
                      <CheckCircle2 size={16} />
                      <span className="btn-text">{isSolved ? 'Solved' : 'Mark Solved'}</span>
                    </button>

                    <button
                      onClick={() => toggleBookmark(q.id)}
                      className={`action-icon-btn ${isBookmarked ? 'bookmarked' : ''}`}
                      title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}
                    >
                      {isBookmarked ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
                    </button>
                  </div>
                </div>

                {/* Question Title & Description */}
                <h2 className="recent-card-title">
                  <span className="question-num-tag">#{qIndex + 1}</span> {q.title}
                </h2>

                <div className="description-text">
                  {q.description.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Rules / Specific Constraints */}
                {q.rules && (
                  <div className="rules-box">
                    <h4 className="rules-heading">Transformation Rules / Logic</h4>
                    <ul className="rules-list">
                      {q.rules.map((rule, idx) => (
                        <li key={idx}>{rule}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Formula Breakdown Table (For Shift 2 EqSum) */}
                {q.formulaBreakdown && (
                  <div className="formula-table-container">
                    <h4 className="formula-heading">Formula Breakdown & Prefix Calculation Table</h4>
                    <div className="table-responsive">
                      <table className="formula-table">
                        <thead>
                          <tr>
                            <th>Number (X)</th>
                            <th>Digits</th>
                            <th>Prefix Components</th>
                            <th>EqSum(X) Calculation</th>
                            <th>EqSum(X)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {q.formulaBreakdown.map((row, idx) => (
                            <tr key={idx}>
                              <td className="font-mono font-bold text-sky-400">{row.num}</td>
                              <td>{row.digits}</td>
                              <td className="font-mono">{row.prefixes}</td>
                              <td className="font-mono text-muted">{row.calculation}</td>
                              <td className="font-mono font-bold text-emerald-400">{row.eqSum}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Test Cases & Step-by-Step Calculations (For DSA) */}
                {q.testCases && (
                  <div className="testcases-section">
                    <h4 className="section-subtitle">Examples & Step-by-Step Calculations</h4>
                    <div className="testcase-cards-grid">
                      {q.testCases.map((tc, idx) => (
                        <div key={idx} className="testcase-card">
                          <div className="tc-header">
                            <span className="tc-tag">Test Case {idx + 1}</span>
                            <span className="tc-expected">Output: <strong>{tc.expectedOutput}</strong></span>
                          </div>
                          <div className="tc-input">
                            <span className="label">Input:</span>
                            <code>{tc.input}</code>
                          </div>
                          {tc.transformedArray && (
                            <div className="tc-transformed">
                              <span className="label">Final Transformed Array:</span>
                              <code>{tc.transformedArray}</code>
                            </div>
                          )}
                          <div className="tc-calc-box">
                            <pre>{tc.explanation}</pre>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Interactive In-Browser Runner for DSA */}
                {q.runSimulation && (
                  <div className="runner-container">
                    <div className="runner-header">
                      <div className="runner-title">
                        <Play size={14} className="text-emerald-400" />
                        <span>Interactive Test Runner</span>
                      </div>
                      <span className="runner-tip">Enter custom inputs or test cases</span>
                    </div>

                    <div className="runner-controls">
                      <input
                        type="text"
                        className="runner-input"
                        value={runnerInputs[q.id] || ''}
                        onChange={(e) =>
                          setRunnerInputs((prev) => ({ ...prev, [q.id]: e.target.value }))
                        }
                        placeholder={
                          q.id === 'recent-dsa-001'
                            ? 'Enter array e.g. [22, 5, 14]'
                            : 'Enter positive integer N (e.g. 10 or 112)'
                        }
                      />
                      <button
                        onClick={() => handleExecuteRunner(q)}
                        className="btn btn-primary btn-sm runner-btn"
                      >
                        <Play size={13} />
                        <span>Run Simulation</span>
                      </button>
                    </div>

                    {runnerOutput && (
                      <div className={`runner-result-box ${runnerOutput.success ? 'success' : 'error'}`}>
                        <pre>{runnerOutput.message}</pre>
                      </div>
                    )}
                  </div>
                )}

                {/* Multi-Language Solutions (For DSA) */}
                {q.solutions && (
                  <div className="solutions-container">
                    <div className="solution-tabs-bar">
                      <div className="lang-tabs">
                        {availableLangs.map((lang) => {
                          const label =
                            lang === 'cpp'
                              ? 'C++'
                              : lang === 'csharp'
                              ? 'C#'
                              : lang === 'javascript'
                              ? 'JavaScript'
                              : lang.charAt(0).toUpperCase() + lang.slice(1);

                          return (
                            <button
                              key={lang}
                              onClick={() =>
                                setActiveLang((prev) => ({ ...prev, [q.id]: lang }))
                              }
                              className={`lang-tab ${currentLang === lang ? 'active' : ''}`}
                            >
                              {label}
                            </button>
                          );
                        })}
                      </div>

                      <button
                        onClick={() => handleCopyCode(q.id, q.solutions[currentLang])}
                        className="copy-code-btn"
                        title="Copy code to clipboard"
                      >
                        {copiedId === q.id ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                        <span>{copiedId === q.id ? 'Copied!' : 'Copy Code'}</span>
                      </button>
                    </div>

                    <pre className="solution-code-view">
                      <code>{q.solutions[currentLang]}</code>
                    </pre>
                  </div>
                )}

                {/* Live Sandbox Preview for Frontend (e.g. Random Quote Generator) */}
                {q.liveSandbox && (
                  <div className="live-preview-widget-card" style={{
                    background: '#111827',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid #1f2937', paddingBottom: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#38bdf8', fontWeight: 700, fontSize: '0.88rem' }}>
                        <Sparkles size={14} />
                        <span>Live Interactive Output</span>
                      </div>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Click the button to test random generation</span>
                    </div>

                    {/* Render exact component */}
                    <div style={{
                      backgroundColor: '#f8fafc',
                      borderLeft: '4px solid #2563eb',
                      padding: '20px',
                      borderRadius: '6px',
                      textAlign: 'center',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                    }}>
                      <p id="quoteDisplay" style={{
                        fontSize: '1.2rem',
                        fontStyle: 'italic',
                        color: '#334155',
                        marginBottom: '15px',
                        minHeight: '2rem'
                      }}>
                        {currentQuote}
                      </p>
                      <button
                        id="quoteBtn"
                        onClick={handleRandomQuoteClick}
                        style={{
                          padding: '10px 20px',
                          backgroundColor: '#2563eb',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontWeight: 600,
                          fontSize: '0.95rem'
                        }}
                      >
                        Show Random Quote
                      </button>
                    </div>
                  </div>
                )}

                {/* Frontend Code Tabs (HTML, CSS, JS) */}
                {q.htmlCode && (
                  <div className="frontend-details-box">
                    <h4 className="box-title">Web Solution Code (HTML / CSS / JS)</h4>
                    <div className="solutions-container">
                      <div className="solution-tabs-bar">
                        <div className="lang-tabs">
                          <button
                            onClick={() => setActiveFeTab((prev) => ({ ...prev, [q.id]: 'html' }))}
                            className={`lang-tab ${currentFeTab === 'html' ? 'active' : ''}`}
                          >
                            HTML Markup
                          </button>
                          <button
                            onClick={() => setActiveFeTab((prev) => ({ ...prev, [q.id]: 'css' }))}
                            className={`lang-tab ${currentFeTab === 'css' ? 'active' : ''}`}
                          >
                            CSS Styling
                          </button>
                          <button
                            onClick={() => setActiveFeTab((prev) => ({ ...prev, [q.id]: 'js' }))}
                            className={`lang-tab ${currentFeTab === 'js' ? 'active' : ''}`}
                          >
                            JavaScript Implementation
                          </button>
                        </div>

                        <button
                          onClick={() => {
                            const codeToCopy =
                              currentFeTab === 'html'
                                ? q.htmlCode
                                : currentFeTab === 'css'
                                ? q.cssCode
                                : q.jsSolution;
                            handleCopyCode(q.id, codeToCopy);
                          }}
                          className="copy-code-btn"
                          title="Copy Code"
                        >
                          {copiedId === q.id ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                          <span>{copiedId === q.id ? 'Copied!' : 'Copy Code'}</span>
                        </button>
                      </div>

                      <pre className="solution-code-view">
                        <code>
                          {currentFeTab === 'html' && q.htmlCode}
                          {currentFeTab === 'css' && q.cssCode}
                          {currentFeTab === 'js' && q.jsSolution}
                        </code>
                      </pre>
                    </div>
                  </div>
                )}
              </article>
            );
          })
        )}
      </main>
    </div>
  );
}
