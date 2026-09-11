// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Code2,
  LayoutDashboard,
  Play,
  Brain,
  Database,
  Coffee,
  Cloud,
  ShieldCheck,
  Network,
  ShieldAlert,
  Boxes,
  Wifi,
  Sun,
  Moon,
  Search,
  BookOpen,
  ChevronDown,
  Flame,
  Bookmark,
  RotateCcw,
  Target,
  TrendingUp,
  Award,
  Mic,
  Calendar,
  Zap,
  FileText,
  FileSpreadsheet,
  Layers,
  Menu,
  X,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function Navbar({ theme, onToggleTheme, onOpenSearch }) {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState(null);
  const navRef = useRef(null);

  // Close dropdown and mobile menu on outside click or route change
  useEffect(() => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const toggleDropdown = (name, e) => {
    e.stopPropagation();
    setActiveDropdown(prev => prev === name ? null : name);
  };

  const isLearnActive = location.pathname.startsWith('/learn') || location.pathname.startsWith('/java');
  const isPracticeActive = location.pathname === '/practice' || location.pathname === '/bookmarks' || location.pathname === '/mistakes' || location.pathname === '/daily-challenge';
  const isAssessmentActive = location.pathname === '/mock-test' || location.pathname === '/history' || location.pathname.includes('assessment') || location.pathname.includes('security') || location.pathname.includes('important') || location.pathname.includes('recent');
  const isCognitiveActive = location.pathname.startsWith('/cognitive');

  return (
    <nav className="platform-nav" ref={navRef} style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <div className="nav-left">
        <Link to="/" className="brand-link" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <div className="brand-logo" style={{ background: 'linear-gradient(135deg, #0284c7, #6366f1)', color: '#ffffff' }}>
            <Code2 size={20} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span className="brand-title" style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary, #f8fafc)' }}>
                 Accenture Ready
              </span>
            </div>
            {/* <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary, #94a3b8)', display: 'block', lineHeight: 1 }}>
              Comprehensive Placement Preparation Hub
            </span> */}
          </div>
        </Link>
      </div>

      <div className="nav-center" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
        {/* Dashboard */}
        <Link
          to="/dashboard"
          className={`nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}
        >
          <LayoutDashboard size={14} />
          <span>Dashboard</span>
        </Link>

        {/* Learn Dropdown */}
        <div style={{ position: 'relative' }}>
          <button
            type="button"
            className={`nav-item ${isLearnActive ? 'active' : ''}`}
            onClick={(e) => toggleDropdown('learn', e)}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', font: 'inherit', color: 'inherit' }}
          >
            <BookOpen size={14} />
            <span>Learn</span>
            <ChevronDown size={12} />
          </button>
          {activeDropdown === 'learn' && (
            <div className="nav-dropdown-menu" style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              minWidth: '220px',
              background: '#0f172a',
              border: '1px solid #334155',
              borderRadius: '10px',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5)',
              padding: '6px',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              zIndex: 1001
            }}>
              <Link to="/learn" className="dropdown-link" style={{ padding: '8px 12px', borderRadius: '6px', color: '#f8fafc', fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <BookOpen size={14} className="text-sky-400" />
                <span>Learning Hub Overview</span>
              </Link>
              <Link to="/java-learning" className="dropdown-link" style={{ padding: '8px 12px', borderRadius: '6px', color: '#f8fafc', fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Coffee size={14} className="text-amber-400" />
                <span>Java Master Syllabus</span>
              </Link>
              <Link to="/learn/dsa" className="dropdown-link" style={{ padding: '8px 12px', borderRadius: '6px', color: '#f8fafc', fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Zap size={14} className="text-sky-400" />
                <span>DSA Question Sheet</span>
              </Link>
              <Link to="/learn/cheat-sheets" className="dropdown-link" style={{ padding: '8px 12px', borderRadius: '6px', color: '#f8fafc', fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FileText size={14} className="text-purple-400" />
                <span>Revision Cheat Sheets</span>
              </Link>
            </div>
          )}
        </div>

        {/* Practice Dropdown */}
        <div style={{ position: 'relative' }}>
          <button
            type="button"
            className={`nav-item ${isPracticeActive ? 'active' : ''}`}
            onClick={(e) => toggleDropdown('practice', e)}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', font: 'inherit', color: 'inherit' }}
          >
            <Play size={14} />
            <span>Practice</span>
            <ChevronDown size={12} />
          </button>
          {activeDropdown === 'practice' && (
            <div className="nav-dropdown-menu" style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              minWidth: '220px',
              background: '#0f172a',
              border: '1px solid #334155',
              borderRadius: '10px',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5)',
              padding: '6px',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              zIndex: 1001
            }}>
              <Link to="/practice" className="dropdown-link" style={{ padding: '8px 12px', borderRadius: '6px', color: '#f8fafc', fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Code2 size={14} className="text-sky-400" />
                <span>Frontend Coding (20 Qs)</span>
              </Link>
              <Link to="/sql-assessment" className="dropdown-link" style={{ padding: '8px 12px', borderRadius: '6px', color: '#f8fafc', fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Database size={14} className="text-orange-400" />
                <span>SQL Engine Sandbox</span>
              </Link>
              <Link to="/daily-challenge" className="dropdown-link" style={{ padding: '8px 12px', borderRadius: '6px', color: '#f8fafc', fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Flame size={14} className="text-orange-500" />
                <span>Daily Challenge (+50 XP)</span>
              </Link>
              <Link to="/pseudocode" className="dropdown-link" style={{ padding: '8px 12px', borderRadius: '6px', color: '#f8fafc', fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Zap size={14} className="text-amber-400" />
                <span>Pseudocode Round (Tracing)</span>
              </Link>
              <Link to="/bookmarks" className="dropdown-link" style={{ padding: '8px 12px', borderRadius: '6px', color: '#f8fafc', fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Bookmark size={14} className="text-yellow-400" />
                <span>My Bookmarked Questions</span>
              </Link>
              <Link to="/mistakes" className="dropdown-link" style={{ padding: '8px 12px', borderRadius: '6px', color: '#f8fafc', fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <RotateCcw size={14} className="text-red-400" />
                <span>Retry Mistakes Vault</span>
              </Link>
            </div>
          )}
        </div>

        {/* Assessments Dropdown */}
        <div style={{ position: 'relative' }}>
          <button
            type="button"
            className={`nav-item ${isAssessmentActive ? 'active' : ''}`}
            onClick={(e) => toggleDropdown('assessments', e)}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', font: 'inherit', color: 'inherit' }}
          >
            <Target size={14} />
            <span>Assessments</span>
            <ChevronDown size={12} />
          </button>
          {activeDropdown === 'assessments' && (
            <div className="nav-dropdown-menu" style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              minWidth: '240px',
              background: '#0f172a',
              border: '1px solid #334155',
              borderRadius: '10px',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5)',
              padding: '6px',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              zIndex: 1001
            }}>
              {/* Recent Dated Coding Questions */}
              <Link
                to="/recent-questions"
                className="dropdown-link"
                style={{
                  padding: '8px 12px',
                  borderRadius: '6px',
                  color: '#38bdf8',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.16), rgba(99, 102, 241, 0.16))',
                  border: '1px solid rgba(56, 189, 248, 0.35)'
                }}
              >
                <Sparkles size={14} className="text-sky-400" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>Recent Coding Questions</span>
                    <span style={{ fontSize: '9px', padding: '1px 5px', borderRadius: '4px', background: '#0284c7', color: '#fff', fontWeight: 800 }}>DATED PYQ</span>
                  </div>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 400 }}>DSA (8th Sept) • SQL • Frontend</span>
                </div>
              </Link>
              <Link to="/mock-test" className="dropdown-link" style={{ padding: '8px 12px', borderRadius: '6px', color: '#38bdf8', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Target size={14} />
                <span>Full 90-Min Mock Test</span>
              </Link>
              <Link to="/history" className="dropdown-link" style={{ padding: '8px 12px', borderRadius: '6px', color: '#f8fafc', fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <TrendingUp size={14} />
                <span>Score History & Trajectory</span>
              </Link>
              <Link to="/pseudocode" className="dropdown-link" style={{ padding: '8px 12px', borderRadius: '6px', color: '#facc15', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Zap size={14} />
                <span>Pseudocode Assessment</span>
              </Link>
              <Link to="/important-questions" className="dropdown-link" style={{ padding: '8px 12px', borderRadius: '6px', color: '#fbbf24', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(245, 158, 11, 0.12)', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                <Flame size={14} className="text-amber-400" />
                <span>Most Important PYQs — Set 1 (61 Qs)</span>
              </Link>
              <Link to="/important-questions-set-2" className="dropdown-link" style={{ padding: '8px 12px', borderRadius: '6px', color: '#38bdf8', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(14, 165, 233, 0.12)', border: '1px solid rgba(14, 165, 233, 0.3)' }}>
                <Layers size={14} className="text-sky-400" />
                <span>Most Important PYQs — Set 2 (61 Qs)</span>
              </Link>
              <div style={{ height: '1px', background: '#334155', margin: '4px 0' }} />
              <Link to="/cloud-assessment" className="dropdown-link" style={{ padding: '6px 12px', borderRadius: '6px', color: '#f8fafc', fontSize: '0.8rem', textDecoration: 'none' }}>
                Cloud Computing (85 Qs)
              </Link>
              <Link to="/cloud-security" className="dropdown-link" style={{ padding: '6px 12px', borderRadius: '6px', color: '#f8fafc', fontSize: '0.8rem', textDecoration: 'none' }}>
                Cloud Security (45 Qs)
              </Link>
              <Link to="/network-assessment" className="dropdown-link" style={{ padding: '6px 12px', borderRadius: '6px', color: '#f8fafc', fontSize: '0.8rem', textDecoration: 'none' }}>
                Networking (90 Qs)
              </Link>
              <Link to="/network-security" className="dropdown-link" style={{ padding: '6px 12px', borderRadius: '6px', color: '#f8fafc', fontSize: '0.8rem', textDecoration: 'none' }}>
                Network Security (100 Qs)
              </Link>
              <Link to="/wifi-security" className="dropdown-link" style={{ padding: '6px 12px', borderRadius: '6px', color: '#f8fafc', fontSize: '0.8rem', textDecoration: 'none' }}>
                Wi-Fi Security (25 Qs)
              </Link>
              <Link to="/oop-assessment" className="dropdown-link" style={{ padding: '6px 12px', borderRadius: '6px', color: '#f8fafc', fontSize: '0.8rem', textDecoration: 'none' }}>
                OOPs Assessment (35 Qs)
              </Link>
              <Link to="/devops-assessment" className="dropdown-link" style={{ padding: '6px 12px', borderRadius: '6px', color: '#fb923c', fontWeight: 600, fontSize: '0.8rem', textDecoration: 'none' }}>
                DevOps Assessment (35 Qs)
              </Link>
              <Link to="/ms-office-assessment" className="dropdown-link" style={{ padding: '6px 12px', borderRadius: '6px', color: '#10b981', fontWeight: 600, fontSize: '0.8rem', textDecoration: 'none' }}>
                MS Office Assessment (35 Qs)
              </Link>
            </div>
          )}
        </div>

        {/* Cognitive Games Dropdown (NO Path Finder!) */}
        <div style={{ position: 'relative' }}>
          <button
            type="button"
            className={`nav-item ${isCognitiveActive ? 'active' : ''}`}
            onClick={(e) => toggleDropdown('cognitive', e)}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', font: 'inherit', color: 'inherit' }}
          >
            <Brain size={14} />
            <span>Cognitive</span>
            <ChevronDown size={12} />
          </button>
          {activeDropdown === 'cognitive' && (
            <div className="nav-dropdown-menu" style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              minWidth: '220px',
              background: '#0f172a',
              border: '1px solid #334155',
              borderRadius: '10px',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5)',
              padding: '6px',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              zIndex: 1001
            }}>
              <Link to="/cognitive" className="dropdown-link" style={{ padding: '8px 12px', borderRadius: '6px', color: '#f8fafc', fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Brain size={14} className="text-indigo-400" />
                <span>Cognitive Dashboard</span>
              </Link>
              <Link to="/cognitive/quick-fire-math" className="dropdown-link" style={{ padding: '8px 12px', borderRadius: '6px', color: '#f8fafc', fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Zap size={14} className="text-emerald-400" />
                <span>Quick-Fire Math / Math Bubble</span>
              </Link>
              <Link to="/cognitive/memory-maze" className="dropdown-link" style={{ padding: '8px 12px', borderRadius: '6px', color: '#f8fafc', fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Brain size={14} className="text-purple-400" />
                <span>Memory Maze</span>
              </Link>
            </div>
          )}
        </div>

        {/* Analytics */}
        <Link
          to="/analytics"
          className={`nav-item ${location.pathname === '/analytics' ? 'active' : ''}`}
        >
          <span>Analytics</span>
        </Link>

        {/* Achievements */}
        <Link
          to="/achievements"
          className={`nav-item ${location.pathname === '/achievements' ? 'active' : ''}`}
        >
          <Award size={14} />
          <span>Badges</span>
        </Link>

        {/* Interview Prep */}
        <Link
          to="/interview"
          className={`nav-item ${location.pathname === '/interview' ? 'active' : ''}`}
        >
          <Mic size={14} />
          <span>Interview Prep</span>
        </Link>

        {/* Roadmap */}
        <Link
          to="/roadmap"
          className={`nav-item ${location.pathname === '/roadmap' ? 'active' : ''}`}
        >
          <Calendar size={14} />
          <span>Roadmap</span>
        </Link>
      </div>

      <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        {/* Global Search Trigger */}
        <button
          onClick={onOpenSearch}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '6px 12px',
            background: 'var(--search-bg, #1e293b)',
            border: '1px solid var(--border-color, #334155)',
            borderRadius: '8px',
            color: 'var(--text-secondary, #94a3b8)',
            fontSize: '0.8rem',
            cursor: 'pointer'
          }}
          title="Search Topics (Ctrl+K)"
        >
          <Search size={14} />
          <span style={{ display: 'inline-block' }}>Search</span>
          <kbd style={{ padding: '1px 5px', background: '#0f172a', borderRadius: '4px', fontSize: '0.7rem', border: '1px solid #334155' }}>⌘K</kbd>
        </button>

        {/* Theme Toggle Button */}
        <button
          onClick={onToggleTheme}
          className="theme-toggle-btn"
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Mobile Menu Hamburger Button (Hidden on Desktop via CSS) */}
        <button
          type="button"
          className="mobile-nav-toggle-btn"
          onClick={(e) => {
            e.stopPropagation();
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
          aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-drawer" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-nav-inner">
            {/* Quick Actions */}
            <div className="mobile-nav-quick-bar">
              <button
                type="button"
                className="mobile-search-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenSearch();
                }}
              >
                <Search size={16} />
                <span>Search Topics (Ctrl+K)...</span>
              </button>
            </div>

            {/* Nav Categories */}
            <div className="mobile-nav-links-list">
              <Link
                to="/dashboard"
                className={`mobile-nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="mobile-nav-item-left">
                  <LayoutDashboard size={16} className="text-sky-400" />
                  <span>Dashboard Overview</span>
                </div>
                <ChevronRight size={14} className="text-slate-500" />
              </Link>

              {/* Learn Section */}
              <div className="mobile-nav-group">
                <div className="mobile-group-header">
                  <BookOpen size={14} className="text-sky-400" />
                  <span>Learn & Foundations</span>
                </div>
                <div className="mobile-group-items">
                  <Link to="/learn" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                    <span>Learning Hub</span>
                  </Link>
                  <Link to="/java-learning" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                    <span>Java Master Syllabus</span>
                  </Link>
                  <Link to="/learn/dsa" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                    <span>DSA Question Sheet</span>
                  </Link>
                  <Link to="/learn/cheat-sheets" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                    <span>Revision Cheat Sheets</span>
                  </Link>
                </div>
              </div>

              {/* Practice Section */}
              <div className="mobile-nav-group">
                <div className="mobile-group-header">
                  <Play size={14} className="text-emerald-400" />
                  <span>Practice & Coding</span>
                </div>
                <div className="mobile-group-items">
                  <Link to="/practice" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                    <span>Frontend Coding (20 Qs)</span>
                  </Link>
                  <Link to="/sql-assessment" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                    <span>SQL Engine Sandbox</span>
                  </Link>
                  <Link to="/daily-challenge" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                    <span>Daily Challenge (+50 XP)</span>
                  </Link>
                  <Link to="/pseudocode" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                    <span>Pseudocode Round</span>
                  </Link>
                  <Link to="/bookmarks" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                    <span>Bookmarks</span>
                  </Link>
                  <Link to="/mistakes" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                    <span>Mistakes Vault</span>
                  </Link>
                </div>
              </div>

              {/* Assessments Section */}
              <div className="mobile-nav-group">
                <div className="mobile-group-header">
                  <Target size={14} className="text-amber-400" />
                  <span>Assessments & PYQs</span>
                </div>
                <div className="mobile-group-items">
                  <Link
                    to="/recent-questions"
                    className="mobile-sublink highlight-sky"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.35)', fontWeight: 700 }}
                  >
                    <Sparkles size={14} className="text-sky-400" />
                    <span>Recent Coding Questions (Dated PYQs)</span>
                  </Link>
                  <Link
                    to="/important-questions"
                    className="mobile-sublink highlight-amber"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Flame size={14} />
                    <span>Most Important PYQs — Set 1 (61 Qs)</span>
                  </Link>
                  <Link
                    to="/important-questions-set-2"
                    className="mobile-sublink highlight-sky"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Layers size={14} />
                    <span>Most Important PYQs — Set 2 (61 Qs)</span>
                  </Link>
                  <Link to="/mock-test" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                    <span>Full 90-Min Mock Test</span>
                  </Link>
                  <Link to="/history" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                    <span>Score History & Trajectory</span>
                  </Link>
                  <Link to="/cloud-assessment" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                    <span>Cloud Computing (85 Qs)</span>
                  </Link>
                  <Link to="/cloud-security" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                    <span>Cloud Security (45 Qs)</span>
                  </Link>
                  <Link to="/network-assessment" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                    <span>Networking (90 Qs)</span>
                  </Link>
                  <Link to="/network-security" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                    <span>Network Security (100 Qs)</span>
                  </Link>
                  <Link to="/wifi-security" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                    <span>Wi-Fi Security (25 Qs)</span>
                  </Link>
                  <Link to="/oop-assessment" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                    <span>OOPs Assessment (35 Qs)</span>
                  </Link>
                  <Link to="/devops-assessment" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                    <span>DevOps Assessment (35 Qs)</span>
                  </Link>
                  <Link to="/ms-office-assessment" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                    <span>MS Office Assessment (35 Qs)</span>
                  </Link>
                </div>
              </div>

              {/* Cognitive Games */}
              <div className="mobile-nav-group">
                <div className="mobile-group-header">
                  <Brain size={14} className="text-purple-400" />
                  <span>Cognitive Assessment</span>
                </div>
                <div className="mobile-group-items">
                  <Link to="/cognitive" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                    <span>Cognitive Dashboard</span>
                  </Link>
                  <Link to="/cognitive/quick-fire-math" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                    <span>Quick-Fire Math / Bubble</span>
                  </Link>
                  <Link to="/cognitive/memory-maze" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                    <span>Memory Maze</span>
                  </Link>
                </div>
              </div>

              {/* Career & Roadmap */}
              <div className="mobile-nav-group">
                <div className="mobile-group-header">
                  <Calendar size={14} className="text-indigo-400" />
                  <span>Career & Tracking</span>
                </div>
                <div className="mobile-group-items">
                  <Link to="/analytics" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                    <span>Analytics</span>
                  </Link>
                  <Link to="/achievements" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                    <span>Badges & Milestones</span>
                  </Link>
                  <Link to="/interview" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                    <span>Interview Prep</span>
                  </Link>
                  <Link to="/roadmap" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>
                    <span>Roadmap Guide</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
