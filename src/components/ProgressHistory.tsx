import React, { useState } from 'react';
import {
  History,
  Clock,
  RotateCcw,
  Trash2,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Eye
} from 'lucide-react';
import type { QuizAttempt, QuizConfig } from '../types/quiz';
import { formatTime } from '../utils/quizUtils';
import { ConfirmModal } from './ConfirmModal';

interface ProgressHistoryProps {
  attempts: QuizAttempt[];
  onReviewAttempt: (attempt: QuizAttempt) => void;
  onRetakeAttempt: (config: QuizConfig) => void;
  onClearAllHistory: () => void;
  onNavigateHome: () => void;
}

export const ProgressHistory: React.FC<ProgressHistoryProps> = ({
  attempts,
  onReviewAttempt,
  onRetakeAttempt,
  onClearAllHistory,
  onNavigateHome
}) => {
  const [filterMode, setFilterMode] = useState<string>('all');
  const [showClearModal, setShowClearModal] = useState(false);

  const filteredAttempts = attempts.filter((a) => {
    if (filterMode === 'all') return true;
    return a.mode === filterMode;
  });

  const handleRetake = (attempt: QuizAttempt) => {
    onRetakeAttempt({
      mode: attempt.mode,
      title: attempt.title,
      subtitle: attempt.subtitle,
      selectedWeeks: attempt.selectedWeeks,
      shuffleQuestions: attempt.shuffleQuestionsUsed,
      shuffleOptions: attempt.shuffleOptionsUsed,
      sourceAttemptId: attempt.id
    });
  };

  return (
    <div className="progress-history-page">
      <div className="history-header-card">
        <div className="header-text-group">
          <div className="header-tag">
            <History size={16} />
            <span>Local Activity Log</span>
          </div>
          <h2 className="history-title">Quiz History & Analytics</h2>
          <p className="history-description">
            Review your past performance, inspect missed questions from previous attempts, and track your readiness progression across weeks.
          </p>
        </div>

        <div className="history-header-actions">
          {attempts.length > 0 && (
            <button
              type="button"
              className="btn btn-danger-outline clear-history-btn"
              onClick={() => setShowClearModal(true)}
              id="clear-history-btn"
            >
              <Trash2 size={16} />
              <span>Reset Progress</span>
            </button>
          )}
        </div>
      </div>

      {/* Filter and stats row */}
      <div className="history-toolbar">
        <div className="filter-pills-row">
          <button
            type="button"
            className={`filter-pill-btn ${filterMode === 'all' ? 'active' : ''}`}
            onClick={() => setFilterMode('all')}
          >
            All Attempts ({attempts.length})
          </button>
          <button
            type="button"
            className={`filter-pill-btn ${filterMode === 'week' ? 'active' : ''}`}
            onClick={() => setFilterMode('week')}
          >
            Week Practice ({attempts.filter((a) => a.mode === 'week').length})
          </button>
          <button
            type="button"
            className={`filter-pill-btn ${filterMode === 'combined' ? 'active' : ''}`}
            onClick={() => setFilterMode('combined')}
          >
            Combined Tests ({attempts.filter((a) => a.mode === 'combined').length})
          </button>
          <button
            type="button"
            className={`filter-pill-btn ${filterMode === 'retry' ? 'active' : ''}`}
            onClick={() => setFilterMode('retry')}
          >
            Retries ({attempts.filter((a) => a.mode === 'retry').length})
          </button>
        </div>
      </div>

      {/* Attempts List */}
      {filteredAttempts.length === 0 ? (
        <div className="empty-history-card">
          <div className="empty-icon-wrap">
            <History size={40} />
          </div>
          <h3>No test attempts found</h3>
          <p>
            {attempts.length === 0
              ? 'You have not completed any quizzes yet. Start with Week 0 or launch a Combined Test to record your progress.'
              : 'No quizzes match the selected filter category.'}
          </p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={onNavigateHome}
          >
            Go to Practice Dashboard
          </button>
        </div>
      ) : (
        <div className="attempts-table-wrap">
          <table className="attempts-table">
            <thead>
              <tr>
                <th>Date & Time</th>
                <th>Test Title</th>
                <th>Mode</th>
                <th>Score</th>
                <th>Accuracy</th>
                <th>Breakdown</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAttempts.map((attempt) => {
                return (
                  <tr key={attempt.id} className="attempt-row">
                    <td className="attempt-date-cell">
                      <div className="cell-date">{attempt.dateFormatted}</div>
                      {attempt.timeTakenSeconds !== undefined && (
                        <div className="cell-time">
                          <Clock size={12} />
                          <span>{formatTime(attempt.timeTakenSeconds)}</span>
                        </div>
                      )}
                    </td>

                    <td className="attempt-title-cell">
                      <div className="attempt-main-title">{attempt.title}</div>
                      <div className="attempt-sub-info">
                        {attempt.totalQuestions} Questions • {attempt.selectedWeeks.length} Modules
                      </div>
                    </td>

                    <td className="attempt-mode-cell">
                      <span className={`mode-badge ${attempt.mode}`}>
                        {attempt.mode === 'week'
                          ? 'Week Practice'
                          : attempt.mode === 'combined'
                          ? 'Combined Test'
                          : 'Targeted Retry'}
                      </span>
                    </td>

                    <td className="attempt-score-cell">
                      <span className="score-main">
                        {attempt.score} / {attempt.totalQuestions}
                      </span>
                    </td>

                    <td className="attempt-percent-cell">
                      <span
                        className={`percent-badge ${
                          attempt.percentage >= 80
                            ? 'high'
                            : attempt.percentage >= 50
                            ? 'medium'
                            : 'low'
                        }`}
                      >
                        {attempt.percentage}%
                      </span>
                    </td>

                    <td className="attempt-breakdown-cell">
                      <div className="breakdown-mini-pills">
                        <span className="mini-pill correct" title="Correct">
                          <CheckCircle2 size={12} />
                          {attempt.correctCount}
                        </span>
                        <span className="mini-pill incorrect" title="Incorrect">
                          <XCircle size={12} />
                          {attempt.incorrectCount}
                        </span>
                        <span className="mini-pill unanswered" title="Unanswered">
                          <HelpCircle size={12} />
                          {attempt.unansweredCount}
                        </span>
                      </div>
                    </td>

                    <td className="attempt-actions-cell">
                      <div className="action-buttons-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline review-attempt-btn"
                          onClick={() => onReviewAttempt(attempt)}
                          title="Inspect answers for this attempt"
                        >
                          <Eye size={14} />
                          <span>Review</span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-secondary retake-attempt-btn"
                          onClick={() => handleRetake(attempt)}
                          title="Retake this test"
                        >
                          <RotateCcw size={14} />
                          <span>Retake</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Confirmation Modal for Clearing History */}
      <ConfirmModal
        isOpen={showClearModal}
        title="Reset All Progress and History?"
        message="This action will delete all saved scores, weekly progress bars, and quiz attempt histories from your local browser. This action cannot be undone."
        confirmLabel="Yes, Clear Everything"
        cancelLabel="Cancel"
        variant="danger"
        onConfirm={() => {
          setShowClearModal(false);
          onClearAllHistory();
        }}
        onCancel={() => setShowClearModal(false)}
      />
    </div>
  );
};
