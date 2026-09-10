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
import JavaLearningPage from './pages/JavaLearningPage.jsx';
import CloudAssessmentPage from './pages/CloudAssessmentPage.jsx';
import CloudSecurityPage from './pages/CloudSecurityPage.jsx';
import NetworkAssessmentPage from './pages/NetworkAssessmentPage.jsx';
import NetworkSecurityPage from './pages/NetworkSecurityPage.jsx';
import OopAssessmentPage from './pages/OopAssessmentPage.jsx';
import WifiSecurityPage from './pages/WifiSecurityPage.jsx';
import DevOpsAssessmentPage from './pages/DevOpsAssessmentPage.jsx';
import MsOfficeAssessmentPage from './pages/MsOfficeAssessmentPage.jsx';
import LearningHubPage from './pages/LearningHubPage.jsx';
import DsaPatternsPage from './pages/DsaPatternsPage.jsx';
import CheatSheetsPage from './pages/CheatSheetsPage.jsx';
import BookmarksPage from './pages/BookmarksPage.jsx';
import MistakesPage from './pages/MistakesPage.jsx';
import DailyChallengePage from './pages/DailyChallengePage.jsx';
import MockAssessmentPage from './pages/MockAssessmentPage.jsx';
import ScoreHistoryPage from './pages/ScoreHistoryPage.jsx';
import AnalyticsPage from './pages/AnalyticsPage.jsx';
import AchievementsPage from './pages/AchievementsPage.jsx';
import InterviewPrepPage from './pages/InterviewPrepPage.jsx';
import PreparationRoadmapPage from './pages/PreparationRoadmapPage.jsx';
import PseudocodePage from './pages/PseudocodePage.jsx';
import GlobalSearchModal from './components/GlobalSearchModal.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import { storage } from './utils/storage.js';

export default function App() {
  const [theme, setTheme] = useState(() => storage.getTheme());
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
        <Navbar
          theme={theme}
          onToggleTheme={toggleTheme}
          onOpenSearch={() => setIsSearchOpen(true)}
        />
        <main className="app-main-content">
          <ErrorBoundary>
            <Routes>
              {/* Home & Dashboard */}
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard theme={theme} />} />

              {/* Learning Hub & Tracks */}
              <Route path="/learn" element={<LearningHubPage theme={theme} />} />
              <Route path="/learn/dsa" element={<DsaPatternsPage theme={theme} />} />
              <Route path="/dsa" element={<Navigate to="/learn/dsa" replace />} />
              <Route path="/learn/cheat-sheets" element={<CheatSheetsPage theme={theme} />} />
              <Route path="/cheat-sheets" element={<Navigate to="/learn/cheat-sheets" replace />} />
              <Route path="/java-learning" element={<JavaLearningPage theme={theme} />} />
              <Route path="/java" element={<Navigate to="/java-learning" replace />} />

              {/* Practice Hub & Revisions */}
              <Route path="/practice" element={<Practice theme={theme} />} />
              <Route path="/coding" element={<Navigate to="/practice" replace />} />
              <Route path="/bookmarks" element={<BookmarksPage theme={theme} />} />
              <Route path="/mistakes" element={<MistakesPage theme={theme} />} />
              <Route path="/daily-challenge" element={<DailyChallengePage theme={theme} />} />

              {/* Assessment Hub & Full Mocks */}
              <Route path="/mock-test" element={<MockAssessmentPage theme={theme} />} />
              <Route path="/mock" element={<Navigate to="/mock-test" replace />} />
              <Route path="/mock-assessment" element={<Navigate to="/mock-test" replace />} />
              <Route path="/history" element={<ScoreHistoryPage theme={theme} />} />
              <Route path="/analytics" element={<AnalyticsPage theme={theme} />} />
              <Route path="/achievements" element={<AchievementsPage theme={theme} />} />
              <Route path="/interview" element={<InterviewPrepPage theme={theme} />} />
              <Route path="/roadmap" element={<PreparationRoadmapPage theme={theme} />} />
              <Route path="/pseudocode" element={<PseudocodePage theme={theme} />} />
              <Route path="/pseudo" element={<Navigate to="/pseudocode" replace />} />

              {/* Interactive SQL Engine */}
              <Route path="/sql-assessment" element={<SQLAssessmentPage theme={theme} />} />
              <Route path="/assessment/sql" element={<SQLAssessmentPage theme={theme} />} />
              <Route path="/sql" element={<Navigate to="/sql-assessment" replace />} />

              {/* Core Topic Tracks */}
              <Route path="/cloud-assessment" element={<CloudAssessmentPage theme={theme} />} />
              <Route path="/cloud-pyq" element={<Navigate to="/cloud-assessment" replace />} />
              <Route path="/cloud" element={<Navigate to="/cloud-assessment" replace />} />
              <Route path="/cloud-security" element={<CloudSecurityPage theme={theme} />} />
              <Route path="/security" element={<Navigate to="/cloud-security" replace />} />
              <Route path="/network-assessment" element={<NetworkAssessmentPage theme={theme} />} />
              <Route path="/networking" element={<Navigate to="/network-assessment" replace />} />
              <Route path="/network" element={<Navigate to="/network-assessment" replace />} />
              <Route path="/network-security" element={<NetworkSecurityPage theme={theme} />} />
              <Route path="/netsec" element={<Navigate to="/network-security" replace />} />
              <Route path="/wifi-security" element={<WifiSecurityPage theme={theme} />} />
              <Route path="/wifi" element={<Navigate to="/wifi-security" replace />} />
              <Route path="/wifi-assessment" element={<Navigate to="/wifi-security" replace />} />
              <Route path="/oop-assessment" element={<OopAssessmentPage theme={theme} />} />
              <Route path="/oop" element={<Navigate to="/oop-assessment" replace />} />
              <Route path="/oops" element={<Navigate to="/oop-assessment" replace />} />
              <Route path="/devops-assessment" element={<DevOpsAssessmentPage theme={theme} />} />
              <Route path="/devops" element={<Navigate to="/devops-assessment" replace />} />
              <Route path="/ms-office-assessment" element={<MsOfficeAssessmentPage theme={theme} />} />
              <Route path="/msoffice" element={<Navigate to="/ms-office-assessment" replace />} />
              <Route path="/ms-office" element={<Navigate to="/ms-office-assessment" replace />} />
              <Route path="/excel" element={<Navigate to="/ms-office-assessment" replace />} />

              {/* Cognitive Assessment Games (NO Path Finder) */}
              <Route path="/cognitive" element={<CognitiveDashboard />} />
              <Route path="/cognitive/full-mock" element={<FullCognitiveMock />} />
              <Route path="/cognitive/assessment" element={<FullCognitiveMock />} />
              <Route path="/cognitive/memory-maze" element={<MemoryMazePage />} />
              <Route path="/cognitive/quick-fire-math" element={<MathBubblePage />} />
              <Route path="/cognitive/math-bubble" element={<MathBubblePage />} />
              <Route path="/cognitive/results" element={<CognitiveResults />} />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </ErrorBoundary>
        </main>

        <GlobalSearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
