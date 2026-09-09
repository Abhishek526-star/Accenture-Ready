// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, LayoutDashboard, Play, Brain, Database, Coffee, Sun, Moon } from 'lucide-react';

export default function Navbar({ theme, onToggleTheme }) {
  const location = useLocation();

  return (
    <nav className="platform-nav">
      <div className="nav-left">
        <Link to="/" className="brand-link">
          <div className="brand-logo">
            <Code2 size={20} />
          </div>
          <span className="brand-title">Frontend, SQL & Cognitive Assessment Practice</span>
        </Link>
      </div>

      <div className="nav-center">
        <Link
          to="/"
          className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
        >
          Overview
        </Link>
        <Link
          to="/java-learning"
          className={`nav-item ${location.pathname.startsWith('/java') ? 'active' : ''}`}
        >
          <Coffee size={14} /> Java Prep
        </Link>
        <Link
          to="/practice"
          className={`nav-item ${location.pathname.startsWith('/practice') ? 'active' : ''}`}
        >
          <Play size={14} /> Coding Round
        </Link>
        <Link
          to="/sql-assessment"
          className={`nav-item ${location.pathname.startsWith('/sql-assessment') || location.pathname.startsWith('/assessment/sql') ? 'active' : ''}`}
        >
          <Database size={14} /> SQL Round
        </Link>
        <Link
          to="/cognitive"
          className={`nav-item ${location.pathname.startsWith('/cognitive') ? 'active' : ''}`}
        >
          <Brain size={14} /> Cognitive Round
        </Link>
        <Link
          to="/dashboard"
          className={`nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}
        >
          <LayoutDashboard size={14} /> Dashboard
        </Link>
      </div>

      <div className="nav-right">
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
