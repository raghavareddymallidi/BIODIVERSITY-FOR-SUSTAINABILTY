import React, { useState } from 'react';
import {
  Layers,
  CheckCircle2,
  BookOpen,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Play,
  Trash2
} from 'lucide-react';
import type { OverallStats, QuizAttempt } from '../types/quiz';
import { WeekCard } from './WeekCard';
import { ConfirmModal } from './ConfirmModal';

interface DashboardProps {
  stats: OverallStats;
  hasActiveQuiz: boolean;
  onResumeQuiz: () => void;
  onStartWeekQuiz: (
    weekNumber: number,
    options: { shuffleQuestions: boolean; shuffleOptions: boolean }
  ) => void;
  onStartCombinedQuick: () => void;
  onNavigateCombinedBuilder: () => void;
  onReviewRecentAttempt: (attempt: QuizAttempt) => void;
  onViewAllHistory: () => void;
  onResetProgress: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  stats,
  hasActiveQuiz,
  onResumeQuiz,
  onStartWeekQuiz,
  onStartCombinedQuick,
  onNavigateCombinedBuilder,
  onReviewRecentAttempt,
  onViewAllHistory,
  onResetProgress
}) => {
  const [showResetModal, setShowResetModal] = useState(false);

  const completedWeeksCount = stats.weekProgress.filter(
    (w) => w.attemptsCount > 0
  ).length;

  return (
    <div className="dashboard-page">
      {/* Active Quiz Resume Banner */}
      {hasActiveQuiz && (
        <div className="active-quiz-banner">
          <div className="banner-left">
            <span className="pulse-indicator" />
            <div>
              <h4 className="banner-title">Quiz in Progress</h4>
              <p className="banner-sub">
                You have an incomplete quiz session saved. Ready to resume?
              </p>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary resume-banner-btn"
            onClick={onResumeQuiz}
            id="resume-banner-btn"
          >
            <Play size={16} />
            <span>Resume Test</span>
          </button>
        </div>
      )}

      {/* Hero Welcome Banner */}
      <section className="dashboard-hero">
        <div className="hero-text-block">
          <div className="nptel-badge">
            <Sparkles size={16} />
            <span>NPTEL Examination Practice Portal</span>
          </div>
          <h2 className="hero-main-title">Biodiversity for Sustainability</h2>
          <p className="hero-lead">
            Master all 13 modules (Week 0 to Week 12) with the complete 130-question MCQ repository.
            Practice week by week, simulate full-length examinations, and eliminate knowledge gaps with targeted retry.
          </p>

          <div className="hero-cta-group">
            <button
              type="button"
              className="btn btn-primary btn-lg start-full-exam-btn"
              onClick={onStartCombinedQuick}
              id="dashboard-start-combined-quick-btn"
            >
              <Layers size={18} />
              <span>Full Combined Exam (130 MCQs)</span>
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-lg customize-exam-btn"
              onClick={onNavigateCombinedBuilder}
              id="dashboard-customize-combined-btn"
            >
              <span>Customize Combined Test</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Quick Highlights Box */}
        <div className="hero-metrics-pill-grid">
          <div className="metric-pill">
            <span className="metric-pill-label">Total Modules</span>
            <span className="metric-pill-val">13 Weeks</span>
            <span className="metric-pill-sub">Week 0 to Week 12</span>
          </div>
          <div className="metric-pill">
            <span className="metric-pill-label">Question Bank</span>
            <span className="metric-pill-val">130 MCQs</span>
            <span className="metric-pill-sub">10 questions per week</span>
          </div>
          <div className="metric-pill">
            <span className="metric-pill-label">Coverage</span>
            <span className="metric-pill-val">
              {completedWeeksCount} / 13
            </span>
            <span className="metric-pill-sub">Modules attempted</span>
          </div>
        </div>
      </section>

      {/* Main Stats Row */}
      <section className="stats-cards-grid">
        <div className="stat-card">
          <div className="stat-icon-wrapper quizzes">
            <BookOpen size={24} />
          </div>
          <div className="stat-card-content">
            <div className="stat-card-label">Quizzes Attempted</div>
            <div className="stat-card-value">{stats.totalQuizzesAttempted}</div>
            <div className="stat-card-sub">Total practice sessions</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper correct">
            <CheckCircle2 size={24} />
          </div>
          <div className="stat-card-content">
            <div className="stat-card-label">Correct Answers</div>
            <div className="stat-card-value">{stats.totalQuestionsCorrect}</div>
            <div className="stat-card-sub">
              Out of {stats.totalQuestionsAnswered} answered
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper accuracy">
            <TrendingUp size={24} />
          </div>
          <div className="stat-card-content">
            <div className="stat-card-label">Overall Accuracy</div>
            <div className="stat-card-value">
              {stats.overallAccuracy}%
            </div>
            <div className="stat-card-sub">Cumulative hit rate</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper combined">
            <Layers size={24} />
          </div>
          <div className="stat-card-content">
            <div className="stat-card-label">Full Combined Bank</div>
            <div className="stat-card-value">130</div>
            <div className="stat-card-sub">Questions available</div>
          </div>
        </div>
      </section>

      {/* Week-wise Practice Section */}
      <section className="dashboard-section weeks-section">
        <div className="section-header-row">
          <div>
            <h3 className="section-title">Week-wise Practice Modules</h3>
            <p className="section-subtitle">
              Each week contains exactly 10 questions matching the NPTEL assignment schedule. Click any card to launch that week's quiz.
            </p>
          </div>
          <div className="weeks-summary-counter">
            <span className="counter-badge">
              13 Modules • 10 Qs Each
            </span>
          </div>
        </div>

        <div className="week-cards-grid">
          {stats.weekProgress.map((w) => (
            <WeekCard
              key={w.week}
              progress={w}
              onStartWeekQuiz={onStartWeekQuiz}
            />
          ))}
        </div>
      </section>

      {/* Recent Attempts Section */}
      {stats.recentAttempts.length > 0 && (
        <section className="dashboard-section recent-attempts-section">
          <div className="section-header-row">
            <div>
              <h3 className="section-title">Recent Quiz Attempts</h3>
              <p className="section-subtitle">
                Inspect past answers and review mistakes from your most recent test attempts.
              </p>
            </div>
            <button
              type="button"
              className="btn btn-outline btn-sm view-all-btn"
              onClick={onViewAllHistory}
            >
              <span>View All History</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="recent-attempts-cards-grid">
            {stats.recentAttempts.map((attempt) => (
              <div key={attempt.id} className="recent-attempt-mini-card">
                <div className="mini-card-top">
                  <span className={`mode-badge ${attempt.mode}`}>
                    {attempt.mode === 'week'
                      ? 'Week Practice'
                      : attempt.mode === 'combined'
                      ? 'Combined Test'
                      : 'Targeted Retry'}
                  </span>
                  <span className="mini-card-date">{attempt.dateFormatted}</span>
                </div>

                <h4 className="mini-card-title">{attempt.title}</h4>

                <div className="mini-card-score-row">
                  <div className="mini-score">
                    Score: <strong>{attempt.score} / {attempt.totalQuestions}</strong>
                  </div>
                  <div
                    className={`mini-percentage ${
                      attempt.percentage >= 80
                        ? 'high'
                        : attempt.percentage >= 50
                        ? 'medium'
                        : 'low'
                    }`}
                  >
                    {attempt.percentage}%
                  </div>
                </div>

                <div className="mini-card-footer">
                  <button
                    type="button"
                    className="btn btn-sm btn-secondary review-mini-btn"
                    onClick={() => onReviewRecentAttempt(attempt)}
                  >
                    Review Answers
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bottom Danger Zone: Reset Progress */}
      <section className="dashboard-footer-actions">
        <button
          type="button"
          className="btn btn-danger-outline btn-sm reset-all-btn"
          onClick={() => setShowResetModal(true)}
          id="dashboard-reset-progress-btn"
        >
          <Trash2 size={14} />
          <span>Reset All Progress Data</span>
        </button>
      </section>

      {/* Confirm Reset Progress Modal */}
      <ConfirmModal
        isOpen={showResetModal}
        title="Reset All Progress?"
        message="This will clear all your saved quiz attempts, scores, and weekly progress statistics from localStorage. This action cannot be reversed."
        confirmLabel="Yes, Reset Everything"
        cancelLabel="Keep Progress"
        variant="danger"
        onConfirm={() => {
          setShowResetModal(false);
          onResetProgress();
        }}
        onCancel={() => setShowResetModal(false)}
      />
    </div>
  );
};
