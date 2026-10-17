import React, { useState, useEffect } from 'react';
import { WEEKS_META } from './data/questions';
import type {
  ActiveQuizState,
  OverallStats,
  QuizAttempt,
  QuizConfig
} from './types/quiz';
import {
  calculateQuizScore,
  formatDate,
  prepareQuizQuestions
} from './utils/quizUtils';
import {
  clearActiveQuiz,
  getActiveQuiz,
  getOverallStats,
  getStoredAttempts,
  getStoredTheme,
  resetAllProgress,
  saveActiveQuiz,
  saveAttempt,
  saveStoredTheme
} from './utils/storage';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { CombinedTestBuilder } from './components/CombinedTestBuilder';
import { ActiveQuiz } from './components/ActiveQuiz';
import { ResultReview } from './components/ResultReview';
import { ProgressHistory } from './components/ProgressHistory';

type AppTab = 'dashboard' | 'combined' | 'history' | 'quiz' | 'review';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<AppTab>('dashboard');
  const [theme, setTheme] = useState<'dark' | 'light'>(getStoredTheme);

  const [activeQuizState, setActiveQuizState] = useState<ActiveQuizState | null>(null);
  const [currentReviewAttempt, setCurrentReviewAttempt] = useState<QuizAttempt | null>(null);
  const [stats, setStats] = useState<OverallStats>(getOverallStats);

  // Sync theme attribute to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    saveStoredTheme(theme);
  }, [theme]);

  // Check for saved active quiz on initial load
  useEffect(() => {
    const saved = getActiveQuiz();
    if (saved && saved.questions && saved.questions.length > 0) {
      setActiveQuizState(saved);
    }
  }, []);

  // Refresh stats whenever attempts change
  const refreshStats = () => {
    setStats(getOverallStats());
  };

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleStartQuizWithConfig = (config: QuizConfig) => {
    const preparedQuestions = prepareQuizQuestions(config);
    const newState: ActiveQuizState = {
      config,
      questions: preparedQuestions,
      currentIndex: 0,
      userAnswers: {},
      startTime: Date.now(),
      elapsedSeconds: 0
    };

    setActiveQuizState(newState);
    saveActiveQuiz(newState);
    setCurrentTab('quiz');
  };

  // Launch individual week quiz
  const handleStartWeekQuiz = (
    weekNumber: number,
    options: { shuffleQuestions: boolean; shuffleOptions: boolean }
  ) => {
    const meta = WEEKS_META.find((w) => w.week === weekNumber);
    const title = `${meta?.title || `Week ${weekNumber}`} — ${meta?.assignmentTitle || `Assignment ${weekNumber}`}`;

    handleStartQuizWithConfig({
      mode: 'week',
      title,
      subtitle: `Individual Practice Quiz • 10 Questions`,
      selectedWeeks: [weekNumber],
      shuffleQuestions: options.shuffleQuestions,
      shuffleOptions: options.shuffleOptions
    });
  };

  // Launch quick full combined test (130 questions, all 13 weeks, default shuffle)
  const handleStartCombinedQuick = () => {
    handleStartQuizWithConfig({
      mode: 'combined',
      title: 'Combined Test — Full Course (Weeks 0–12)',
      subtitle: 'All 130 Questions across all 13 assignments',
      selectedWeeks: WEEKS_META.map((w) => w.week),
      shuffleQuestions: true,
      shuffleOptions: true
    });
  };

  // Update active quiz state and persist to localStorage
  const handleUpdateActiveQuiz = (newState: ActiveQuizState) => {
    setActiveQuizState(newState);
    saveActiveQuiz(newState);
  };

  // Submit active quiz
  const handleSubmitQuiz = (state: ActiveQuizState) => {
    const scoreResult = calculateQuizScore(state.questions, state.userAnswers);
    const now = Date.now();

    const attempt: QuizAttempt = {
      id: `attempt_${now}_${Math.random().toString(36).substring(2, 7)}`,
      timestamp: now,
      dateFormatted: formatDate(now),
      mode: state.config.mode,
      title: state.config.title,
      subtitle: state.config.subtitle,
      selectedWeeks: state.config.selectedWeeks,
      totalQuestions: scoreResult.totalQuestions,
      score: scoreResult.score,
      percentage: scoreResult.percentage,
      correctCount: scoreResult.correctCount,
      incorrectCount: scoreResult.incorrectCount,
      unansweredCount: scoreResult.unansweredCount,
      userAnswers: state.userAnswers,
      questionsSnapshot: state.questions,
      timeTakenSeconds: state.elapsedSeconds,
      shuffleQuestionsUsed: state.config.shuffleQuestions,
      shuffleOptionsUsed: state.config.shuffleOptions,
      sourceAttemptId: state.config.sourceAttemptId,
      isRetry: state.config.mode === 'retry'
    };

    saveAttempt(attempt);
    clearActiveQuiz();
    setActiveQuizState(null);
    refreshStats();
    setCurrentReviewAttempt(attempt);
    setCurrentTab('review');
  };

  // Exit active quiz to dashboard (keeps it in localStorage for resume)
  const handleExitQuiz = () => {
    setCurrentTab('dashboard');
  };

  // Resume active quiz
  const handleResumeQuiz = () => {
    if (activeQuizState) {
      setCurrentTab('quiz');
    }
  };

  // Open review for an existing attempt
  const handleReviewAttempt = (attempt: QuizAttempt) => {
    setCurrentReviewAttempt(attempt);
    setCurrentTab('review');
  };

  // Retake attempt from history
  const handleRetakeAttempt = (config: QuizConfig) => {
    handleStartQuizWithConfig(config);
  };

  // Retry full quiz from results page
  const handleRetryFull = (config: QuizConfig) => {
    handleStartQuizWithConfig(config);
  };

  // Retry wrong & unanswered questions from results page
  const handleRetryWrongOnly = (config: QuizConfig) => {
    handleStartQuizWithConfig(config);
  };

  // Reset all progress
  const handleResetProgress = () => {
    resetAllProgress();
    setActiveQuizState(null);
    setCurrentReviewAttempt(null);
    refreshStats();
    setCurrentTab('dashboard');
  };

  return (
    <div className="app-container">
      <Header
        currentTab={currentTab}
        onNavigate={(tab) => setCurrentTab(tab)}
        hasActiveQuiz={Boolean(activeQuizState)}
        onResumeQuiz={handleResumeQuiz}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      <main className="main-content">
        {currentTab === 'dashboard' && (
          <Dashboard
            stats={stats}
            hasActiveQuiz={Boolean(activeQuizState)}
            onResumeQuiz={handleResumeQuiz}
            onStartWeekQuiz={handleStartWeekQuiz}
            onStartCombinedQuick={handleStartCombinedQuick}
            onNavigateCombinedBuilder={() => setCurrentTab('combined')}
            onReviewRecentAttempt={handleReviewAttempt}
            onViewAllHistory={() => setCurrentTab('history')}
            onResetProgress={handleResetProgress}
          />
        )}

        {currentTab === 'combined' && (
          <CombinedTestBuilder
            onStartCombinedQuiz={(config) => handleStartQuizWithConfig(config)}
          />
        )}

        {currentTab === 'quiz' && activeQuizState && (
          <ActiveQuiz
            quizState={activeQuizState}
            onUpdateState={handleUpdateActiveQuiz}
            onSubmitQuiz={handleSubmitQuiz}
            onExitQuiz={handleExitQuiz}
          />
        )}

        {currentTab === 'review' && currentReviewAttempt && (
          <ResultReview
            attempt={currentReviewAttempt}
            onRetryQuiz={handleRetryFull}
            onRetryWrongOnly={handleRetryWrongOnly}
            onReturnDashboard={() => setCurrentTab('dashboard')}
          />
        )}

        {currentTab === 'history' && (
          <ProgressHistory
            attempts={getStoredAttempts()}
            onReviewAttempt={handleReviewAttempt}
            onRetakeAttempt={handleRetakeAttempt}
            onClearAllHistory={handleResetProgress}
            onNavigateHome={() => setCurrentTab('dashboard')}
          />
        )}
      </main>

      <footer className="site-footer">
        <div className="footer-container">
          <p className="footer-course">
            <strong>Biodiversity for Sustainability</strong> — Comprehensive NPTEL MCQ Question Bank (Weeks 0–12, 130 Questions)
          </p>
          <p className="footer-sub">
            All progress is stored locally in your browser. No authentication or external database required.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
