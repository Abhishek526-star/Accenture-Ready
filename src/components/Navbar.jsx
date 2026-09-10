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
  FileText
} from 'lucide-react';

export default function Navbar({ theme, onToggleTheme, onOpenSearch }) {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  // Close dropdown on outside click or route change
  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
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
  const isAssessmentActive = location.pathname === '/mock-test' || location.pathname === '/history' || location.pathname.includes('assessment') || location.pathname.includes('security');
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
      </div>
    </nav>
  );
}
