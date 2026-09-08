// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Practice from './pages/Practice.jsx';
import Dashboard from './pages/Dashboard.jsx';
import CognitiveDashboard from './pages/CognitiveDashboard.jsx';
import FullAssessmentPage from './pages/FullAssessmentPage.jsx';
import MathBubblePage from './pages/MathBubblePage.jsx';
import MemoryMazePage from './pages/MemoryMazePage.jsx';
import FullCognitiveMock from './pages/FullCognitiveMock.jsx';
import CognitiveResults from './pages/CognitiveResults.jsx';
import SQLAssessmentPage from './pages/SQLAssessmentPage.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import { storage } from './utils/storage.js';

export default function App() {
  const [theme, setTheme] = useState(() => storage.getTheme());

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    storage.setTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <BrowserRouter>
      <div className="app-container" data-theme={theme}>
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main className="app-main-content">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/practice" element={<Practice theme={theme} />} />
              <Route path="/sql-assessment" element={<SQLAssessmentPage theme={theme} />} />
              <Route path="/assessment/sql" element={<SQLAssessmentPage theme={theme} />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/cognitive" element={<CognitiveDashboard />} />
              <Route path="/cognitive/full-mock" element={<FullCognitiveMock />} />
              <Route path="/cognitive/assessment" element={<FullCognitiveMock />} />
              <Route path="/cognitive/memory-maze" element={<MemoryMazePage />} />
              <Route path="/cognitive/quick-fire-math" element={<MathBubblePage />} />
              <Route path="/cognitive/math-bubble" element={<MathBubblePage />} />
              <Route path="/cognitive/results" element={<CognitiveResults />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </ErrorBoundary>
        </main>
      </div>
    </BrowserRouter>
  );
}
