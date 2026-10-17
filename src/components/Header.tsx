import React from 'react';
import {
  BookOpen,
  Layers,
  History,
  Sun,
  Moon,
  Sparkles,
  PlayCircle
} from 'lucide-react';

interface HeaderProps {
  currentTab: 'dashboard' | 'combined' | 'history' | 'quiz' | 'review';
  onNavigate: (tab: 'dashboard' | 'combined' | 'history') => void;
  hasActiveQuiz: boolean;
  onResumeQuiz: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  hasActiveQuiz,
  onResumeQuiz,
  theme,
  onToggleTheme
}) => {
  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo and Course Info */}
        <div className="brand-group" onClick={() => onNavigate('dashboard')} role="button" tabIndex={0}>
          <div className="brand-icon-wrapper">
            <Sparkles className="brand-icon" size={24} />
          </div>
          <div className="brand-text">
            <div className="brand-badge">NPTEL Examination MCQ Portal</div>
            <h1 className="brand-title">Biodiversity for Sustainability</h1>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="header-nav">
          <button
            type="button"
            className={`nav-btn ${currentTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => onNavigate('dashboard')}
            id="nav-dashboard-btn"
          >
            <BookOpen size={18} />
            <span>Dashboard</span>
          </button>

          <button
            type="button"
            className={`nav-btn ${currentTab === 'combined' ? 'active' : ''}`}
            onClick={() => onNavigate('combined')}
            id="nav-combined-btn"
          >
            <Layers size={18} />
            <span>Combined Test</span>
          </button>

          <button
            type="button"
            className={`nav-btn ${currentTab === 'history' ? 'active' : ''}`}
            onClick={() => onNavigate('history')}
            id="nav-history-btn"
          >
            <History size={18} />
            <span>History</span>
          </button>

          {/* Active Quiz Resume Button */}
          {hasActiveQuiz && currentTab !== 'quiz' && (
            <button
              type="button"
              className="resume-quiz-pill"
              onClick={onResumeQuiz}
              title="Return to your in-progress quiz"
              id="header-resume-quiz-btn"
            >
              <span className="pulse-dot" />
              <PlayCircle size={16} />
              <span>Resume Quiz</span>
            </button>
          )}

          {/* Theme Toggle */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </div>
    </header>
  );
};
