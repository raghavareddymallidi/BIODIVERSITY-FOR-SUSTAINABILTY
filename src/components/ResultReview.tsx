import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Award,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Check,
  X,
  BookOpen,
  Clock,
  Sparkles
} from 'lucide-react';
import type { QuizAttempt, QuizConfig } from '../types/quiz';
import { getPerformanceTier, formatTime } from '../utils/quizUtils';

interface ResultReviewProps {
  attempt: QuizAttempt;
  onRetryQuiz: (config: QuizConfig) => void;
  onRetryWrongOnly: (config: QuizConfig) => void;
  onReturnDashboard: () => void;
}

type ReviewFilter = 'all' | 'incorrect' | 'unanswered' | 'correct';

export const ResultReview: React.FC<ResultReviewProps> = ({
  attempt,
  onRetryQuiz,
  onRetryWrongOnly,
  onReturnDashboard
}) => {
  const [activeFilter, setActiveFilter] = useState<ReviewFilter>('all');
  const [selectedWeekFilter, setSelectedWeekFilter] = useState<number | 'all'>('all');

  const {
    title,
    subtitle,
    totalQuestions,
    score,
    percentage,
    correctCount,
    incorrectCount,
    unansweredCount,
    userAnswers,
    questionsSnapshot,
    timeTakenSeconds,
    shuffleQuestionsUsed,
    shuffleOptionsUsed,
    isRetry
  } = attempt;

  // Trigger celebratory confetti on high score
  useEffect(() => {
    if (percentage >= 80) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [percentage]);

  const tier = getPerformanceTier(percentage);
  const wrongAndUnansweredCount = incorrectCount + unansweredCount;

  // Get question IDs for retry wrong only
  const wrongAndUnansweredIds = questionsSnapshot
    .filter((q) => {
      const selected = userAnswers[q.id];
      return !selected || selected.trim() !== q.answer.trim();
    })
    .map((q) => q.id);

  // Filter questions for the review list
  const filteredQuestions = questionsSnapshot.filter((q) => {
    const selected = userAnswers[q.id];
    const isAnswered = Boolean(selected && selected.trim() !== '');
    const isCorrect = isAnswered && selected.trim() === q.answer.trim();
    const isIncorrect = isAnswered && !isCorrect;
    const isUnanswered = !isAnswered;

    // Check week filter
    if (selectedWeekFilter !== 'all' && q.week !== selectedWeekFilter) {
      return false;
    }

    // Check category filter
    if (activeFilter === 'incorrect') return isIncorrect;
    if (activeFilter === 'unanswered') return isUnanswered;
    if (activeFilter === 'correct') return isCorrect;
    return true; // 'all'
  });

  // Unique weeks in this test
  const uniqueWeeks = Array.from(new Set(questionsSnapshot.map((q) => q.week))).sort(
    (a, b) => a - b
  );

  const handleRetryFull = () => {
    onRetryQuiz({
      mode: attempt.mode,
      title: attempt.title,
      subtitle: attempt.subtitle,
      selectedWeeks: attempt.selectedWeeks,
      shuffleQuestions: shuffleQuestionsUsed,
      shuffleOptions: shuffleOptionsUsed
    });
  };

  const handleRetryWrong = () => {
    if (wrongAndUnansweredIds.length === 0) return;

    onRetryWrongOnly({
      mode: 'retry',
      title: `Retry Weak Areas (${wrongAndUnansweredIds.length} Questions)`,
      subtitle: `Targeted practice for missed & skipped questions from "${attempt.title}"`,
      selectedWeeks: attempt.selectedWeeks,
      shuffleQuestions: shuffleQuestionsUsed,
      shuffleOptions: shuffleOptionsUsed,
      retryQuestionIds: wrongAndUnansweredIds,
      sourceAttemptId: attempt.id
    });
  };

  return (
    <div className="result-review-page">
      {/* Hero Score Section */}
      <div className="result-hero-card">
        <div className="result-hero-header">
          <div className="result-title-group">
            <span className="result-mode-tag">
              {isRetry ? 'Targeted Retry Results' : 'Quiz Submission Result'}
            </span>
            <h2 className="result-title">{title}</h2>
            <p className="result-subtitle">{subtitle}</p>
          </div>
          <div className={`tier-badge ${tier.badgeClass}`}>
            <Award size={18} />
            <span>{tier.label}</span>
          </div>
        </div>

        <div className="result-score-grid">
          {/* Main Score Block */}
          <div className="score-main-block">
            <div className="score-circle-container">
              <div className="score-number">
                {score}
                <span className="score-total"> / {totalQuestions}</span>
              </div>
              <div className="score-percent-badge">{percentage}%</div>
            </div>
            <p className="score-feedback">{tier.description}</p>
          </div>

          {/* Detailed Metric Cards */}
          <div className="metrics-cards-row">
            <div className="metric-box correct">
              <div className="metric-icon-wrap">
                <CheckCircle2 size={22} />
              </div>
              <div className="metric-text-group">
                <span className="metric-label">Correct Answers</span>
                <span className="metric-val">{correctCount}</span>
                <span className="metric-sub">
                  {totalQuestions > 0 ? ((correctCount / totalQuestions) * 100).toFixed(1) : 0}% of test
                </span>
              </div>
            </div>

            <div className="metric-box incorrect">
              <div className="metric-icon-wrap">
                <XCircle size={22} />
              </div>
              <div className="metric-text-group">
                <span className="metric-label">Incorrect Answers</span>
                <span className="metric-val">{incorrectCount}</span>
                <span className="metric-sub">
                  {totalQuestions > 0 ? ((incorrectCount / totalQuestions) * 100).toFixed(1) : 0}% of test
                </span>
              </div>
            </div>

            <div className="metric-box unanswered">
              <div className="metric-icon-wrap">
                <HelpCircle size={22} />
              </div>
              <div className="metric-text-group">
                <span className="metric-label">Unanswered Questions</span>
                <span className="metric-val">{unansweredCount}</span>
                <span className="metric-sub">
                  {totalQuestions > 0 ? ((unansweredCount / totalQuestions) * 100).toFixed(1) : 0}% of test
                </span>
              </div>
            </div>

            {timeTakenSeconds !== undefined && (
              <div className="metric-box time">
                <div className="metric-icon-wrap">
                  <Clock size={22} />
                </div>
                <div className="metric-text-group">
                  <span className="metric-label">Time Elapsed</span>
                  <span className="metric-val">{formatTime(timeTakenSeconds)}</span>
                  <span className="metric-sub">Completion time</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="result-actions-bar">
          {wrongAndUnansweredCount > 0 && (
            <button
              type="button"
              className="btn btn-warning-action retry-wrong-btn"
              onClick={handleRetryWrong}
              id="retry-wrong-btn"
            >
              <RotateCcw size={16} />
              <span>Retry Only Wrong & Unanswered ({wrongAndUnansweredCount})</span>
            </button>
          )}

          <button
            type="button"
            className="btn btn-secondary retry-full-btn"
            onClick={handleRetryFull}
            id="retry-full-quiz-btn"
          >
            <RotateCcw size={16} />
            <span>Retry Entire Quiz</span>
          </button>

          <button
            type="button"
            className="btn btn-primary return-dash-btn"
            onClick={onReturnDashboard}
            id="return-dashboard-btn"
          >
            <BookOpen size={16} />
            <span>Return to Dashboard</span>
          </button>
        </div>
      </div>

      {/* Answer Review Section */}
      <section className="review-section">
        <div className="review-header-row">
          <div>
            <h3 className="review-section-title">Comprehensive Answer Review</h3>
            <p className="review-section-subtitle">
              Inspect your responses alongside verified answer explanations. Filter by question status to focus on missed items.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="review-filter-group" role="tablist">
            <button
              type="button"
              className={`filter-tab-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
              id="filter-all-btn"
            >
              <span>All Questions</span>
              <span className="filter-count">({totalQuestions})</span>
            </button>
            <button
              type="button"
              className={`filter-tab-btn incorrect ${activeFilter === 'incorrect' ? 'active' : ''}`}
              onClick={() => setActiveFilter('incorrect')}
              id="filter-incorrect-btn"
            >
              <X size={14} />
              <span>Incorrect</span>
              <span className="filter-count">({incorrectCount})</span>
            </button>
            <button
              type="button"
              className={`filter-tab-btn unanswered ${activeFilter === 'unanswered' ? 'active' : ''}`}
              onClick={() => setActiveFilter('unanswered')}
              id="filter-unanswered-btn"
            >
              <HelpCircle size={14} />
              <span>Unanswered</span>
              <span className="filter-count">({unansweredCount})</span>
            </button>
            <button
              type="button"
              className={`filter-tab-btn correct ${activeFilter === 'correct' ? 'active' : ''}`}
              onClick={() => setActiveFilter('correct')}
              id="filter-correct-btn"
            >
              <Check size={14} />
              <span>Correct</span>
              <span className="filter-count">({correctCount})</span>
            </button>
          </div>
        </div>

        {/* Week Filter if combined */}
        {uniqueWeeks.length > 1 && (
          <div className="week-filter-chips-row">
            <span className="chips-label">Filter by Module:</span>
            <button
              type="button"
              className={`week-chip-btn ${selectedWeekFilter === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedWeekFilter('all')}
            >
              All Weeks
            </button>
            {uniqueWeeks.map((w) => (
              <button
                key={w}
                type="button"
                className={`week-chip-btn ${selectedWeekFilter === w ? 'active' : ''}`}
                onClick={() => setSelectedWeekFilter(w)}
              >
                Week {w}
              </button>
            ))}
          </div>
        )}

        {/* Questions Review Cards List */}
        <div className="review-questions-list">
          {filteredQuestions.length === 0 ? (
            <div className="empty-review-state">
              <Sparkles size={32} />
              <h4>No questions match this filter</h4>
              <p>Try switching to "All Questions" to inspect all test items.</p>
            </div>
          ) : (
            filteredQuestions.map((q, displayIdx) => {
              const userPick = userAnswers[q.id];
              const isAnswered = Boolean(userPick && userPick.trim() !== '');
              const isCorrect = isAnswered && userPick.trim() === q.answer.trim();
              const isIncorrect = isAnswered && !isCorrect;
              const isUnanswered = !isAnswered;

              let cardStatusClass = 'unanswered';
              if (isCorrect) cardStatusClass = 'correct';
              if (isIncorrect) cardStatusClass = 'incorrect';

              return (
                <div
                  key={q.id}
                  className={`review-question-card ${cardStatusClass}`}
                  id={`review-card-${q.id}`}
                >
                  <div className="review-card-top">
                    <div className="review-card-meta">
                      <span className="review-q-index">Question #{displayIdx + 1}</span>
                      <span className="review-q-week">{q.weekTitle}</span>
                    </div>

                    <div className={`review-badge-status ${cardStatusClass}`}>
                      {isCorrect && (
                        <>
                          <CheckCircle2 size={16} />
                          <span>Correct (+1)</span>
                        </>
                      )}
                      {isIncorrect && (
                        <>
                          <XCircle size={16} />
                          <span>Incorrect (0)</span>
                        </>
                      )}
                      {isUnanswered && (
                        <>
                          <HelpCircle size={16} />
                          <span>Unanswered (0)</span>
                        </>
                      )}
                    </div>
                  </div>

                  <h4 className="review-question-text">{q.question}</h4>

                  {/* 4 Options review */}
                  <div className="review-options-list">
                    {q.options.map((optionText, optIdx) => {
                      const letter = String.fromCharCode(65 + optIdx);
                      const isOptionSelected = isAnswered && userPick === optionText;
                      const isOptionCorrect = optionText.trim() === q.answer.trim();

                      let optStateClass = 'neutral';
                      if (isOptionCorrect) {
                        optStateClass = 'correct-target';
                      } else if (isOptionSelected && !isOptionCorrect) {
                        optStateClass = 'user-incorrect';
                      }

                      return (
                        <div
                          key={`${q.id}-rev-opt-${optIdx}`}
                          className={`review-option-item ${optStateClass} ${
                            isOptionSelected ? 'user-picked' : ''
                          }`}
                        >
                          <div className="option-letter-badge">{letter}</div>
                          <div className="review-option-text">{optionText}</div>

                          <div className="review-option-tags">
                            {isOptionCorrect && (
                              <span className="option-tag correct-tag">
                                <Check size={12} />
                                <span>Correct Answer</span>
                              </span>
                            )}
                            {isOptionSelected && !isOptionCorrect && (
                              <span className="option-tag wrong-tag">
                                <X size={12} />
                                <span>Your Answer</span>
                              </span>
                            )}
                            {isOptionSelected && isOptionCorrect && (
                              <span className="option-tag match-tag">
                                <Check size={12} />
                                <span>Your Choice (Correct)</span>
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Summary Bar for this Question */}
                  <div className={`review-answer-summary ${cardStatusClass}`}>
                    <div className="summary-left">
                      <strong>Selected:</strong>{' '}
                      <span className="summary-ans-text">
                        {isAnswered ? userPick : 'None (Skipped)'}
                      </span>
                    </div>
                    <div className="summary-right">
                      <strong>Correct Answer:</strong>{' '}
                      <span className="summary-ans-text correct">{q.answer}</span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
};
