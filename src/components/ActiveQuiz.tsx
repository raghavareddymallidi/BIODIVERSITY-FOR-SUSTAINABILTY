import React, { useState, useEffect, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Clock,
  Send,
  HelpCircle,
  RotateCcw,
  Flag,
  LayoutGrid,
  X
} from 'lucide-react';
import type { ActiveQuizState, PreparedQuestion } from '../types/quiz';
import { ConfirmModal } from './ConfirmModal';
import { formatTime } from '../utils/quizUtils';

interface ActiveQuizProps {
  quizState: ActiveQuizState;
  onUpdateState: (newState: ActiveQuizState) => void;
  onSubmitQuiz: (state: ActiveQuizState) => void;
  onExitQuiz: () => void;
}

export const ActiveQuiz: React.FC<ActiveQuizProps> = ({
  quizState,
  onUpdateState,
  onSubmitQuiz,
  onExitQuiz
}) => {
  const { config, questions, currentIndex, userAnswers, elapsedSeconds } =
    quizState;

  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  const [showMobilePalette, setShowMobilePalette] = useState(false);

  // Timer interval
  useEffect(() => {
    const timer = setInterval(() => {
      onUpdateState({
        ...quizState,
        elapsedSeconds: quizState.elapsedSeconds + 1
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizState, onUpdateState]);

  const currentQuestion: PreparedQuestion | undefined = questions[currentIndex];
  const totalQuestions = questions.length;

  const answeredCount = Object.keys(userAnswers).filter(
    (k) => userAnswers[k] && userAnswers[k].trim() !== ''
  ).length;
  const unansweredCount = totalQuestions - answeredCount;

  const progressPercent = totalQuestions > 0 ? (answeredCount / totalQuestions) * 100 : 0;

  const handleSelectOption = (optionText: string) => {
    if (!currentQuestion) return;
    const updatedAnswers = {
      ...userAnswers,
      [currentQuestion.id]: optionText
    };
    onUpdateState({
      ...quizState,
      userAnswers: updatedAnswers
    });
  };

  const handleClearAnswer = () => {
    if (!currentQuestion) return;
    const updatedAnswers = { ...userAnswers };
    delete updatedAnswers[currentQuestion.id];
    onUpdateState({
      ...quizState,
      userAnswers: updatedAnswers
    });
  };

  const handleToggleMarkReview = () => {
    if (!currentQuestion) return;
    setMarkedForReview((prev) => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id]
    }));
  };

  const goToQuestion = (index: number) => {
    if (index >= 0 && index < totalQuestions) {
      onUpdateState({
        ...quizState,
        currentIndex: index
      });
      setShowMobilePalette(false);
    }
  };

  const handlePrev = () => goToQuestion(currentIndex - 1);
  const handleNext = () => goToQuestion(currentIndex + 1);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Don't trigger if modal is open
      if (showSubmitModal || showExitModal) return;

      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        handlePrev();
      } else if (e.key === 'ArrowRight' && currentIndex < totalQuestions - 1) {
        handleNext();
      } else if (['1', '2', '3', '4'].includes(e.key) && currentQuestion) {
        const optionIndex = parseInt(e.key, 10) - 1;
        if (currentQuestion.options[optionIndex]) {
          handleSelectOption(currentQuestion.options[optionIndex]);
        }
      }
    },
    [currentIndex, totalQuestions, currentQuestion, showSubmitModal, showExitModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleSubmitClick = () => {
    // Show confirmation modal
    setShowSubmitModal(true);
  };

  const handleConfirmSubmit = () => {
    setShowSubmitModal(false);
    onSubmitQuiz(quizState);
  };

  if (!currentQuestion) {
    return (
      <div className="empty-state-card">
        <h3>No questions available</h3>
        <button type="button" className="btn btn-primary" onClick={onExitQuiz}>
          Return to Dashboard
        </button>
      </div>
    );
  }

  const selectedAnswer = userAnswers[currentQuestion.id];
  const isAnswered = Boolean(selectedAnswer);
  const isMarked = Boolean(markedForReview[currentQuestion.id]);

  return (
    <div className="active-quiz-page">
      {/* Top sticky quiz bar */}
      <div className="quiz-topbar">
        <div className="quiz-topbar-left">
          <div className="quiz-header-badge">
            <span className="quiz-mode-pill">{config.mode.toUpperCase()}</span>
            <span className="quiz-week-label">{currentQuestion.weekTitle}</span>
          </div>
          <h2 className="quiz-topbar-title">{config.title}</h2>
        </div>

        <div className="quiz-topbar-center">
          <div className="question-counter-pill">
            Question <span className="counter-curr">{currentIndex + 1}</span> of{' '}
            <span className="counter-total">{totalQuestions}</span>
          </div>
          <div className="quiz-timer-pill">
            <Clock size={16} />
            <span>{formatTime(elapsedSeconds)}</span>
          </div>
        </div>

        <div className="quiz-topbar-right">
          <button
            type="button"
            className="btn btn-secondary btn-sm mobile-palette-toggle-btn"
            onClick={() => setShowMobilePalette(true)}
            title="Open Question Palette"
            id="mobile-palette-toggle-btn"
          >
            <LayoutGrid size={15} />
            <span>Grid ({answeredCount}/{totalQuestions})</span>
          </button>
          <button
            type="button"
            className="btn btn-outline btn-sm exit-btn"
            onClick={() => setShowExitModal(true)}
            id="exit-quiz-btn"
          >
            Exit
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm submit-topbar-btn"
            onClick={handleSubmitClick}
            id="submit-test-top-btn"
          >
            <Send size={15} />
            <span>Submit</span>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="quiz-progress-bar-wrap">
        <div
          className="quiz-progress-bar-fill"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Main Content Area */}
      <div className="quiz-main-layout">
        {/* Left / Center: Question Box */}
        <div className="quiz-question-container">
          <div className="question-card">
            <div className="question-meta-row">
              <div className="question-tag-group">
                <span className="q-number-chip">Question #{currentIndex + 1}</span>
                <span className="q-week-chip">{currentQuestion.weekTitle}</span>
                {isAnswered ? (
                  <span className="status-badge answered">
                    <CheckCircle2 size={13} />
                    <span>Answered</span>
                  </span>
                ) : (
                  <span className="status-badge unanswered">
                    <HelpCircle size={13} />
                    <span>Unanswered</span>
                  </span>
                )}
              </div>

              <div className="question-quick-actions">
                <button
                  type="button"
                  className={`mark-review-btn ${isMarked ? 'active' : ''}`}
                  onClick={handleToggleMarkReview}
                  title="Mark this question for later review"
                >
                  <Flag size={14} />
                  <span>{isMarked ? 'Marked' : 'Mark for Review'}</span>
                </button>
                {isAnswered && (
                  <button
                    type="button"
                    className="clear-answer-btn"
                    onClick={handleClearAnswer}
                    title="Clear selected option"
                  >
                    <RotateCcw size={14} />
                    <span>Clear Answer</span>
                  </button>
                )}
              </div>
            </div>

            {/* Question Text */}
            <div className="question-text-area">
              <h3 className="question-text">{currentQuestion.question}</h3>
            </div>

            {/* Options List */}
            <div className="options-list" role="radiogroup">
              {currentQuestion.options.map((optionText, optIdx) => {
                const optionLetter = String.fromCharCode(65 + optIdx); // 'A', 'B', 'C', 'D'
                const isSelected = selectedAnswer === optionText;

                return (
                  <div
                    key={`${currentQuestion.id}-opt-${optIdx}`}
                    className={`option-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleSelectOption(optionText)}
                    role="radio"
                    aria-checked={isSelected}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === ' ' || e.key === 'Enter') {
                        handleSelectOption(optionText);
                      }
                    }}
                    id={`option-${currentQuestion.id}-${optIdx}`}
                  >
                    <div className="option-radio-visual">
                      <input
                        type="radio"
                        name={`question-${currentQuestion.id}`}
                        checked={isSelected}
                        onChange={() => handleSelectOption(optionText)}
                      />
                      <span className="radio-circle">
                        {isSelected && <span className="radio-inner-dot" />}
                      </span>
                    </div>

                    <div className="option-letter-badge">{optionLetter}</div>
                    <div className="option-text-content">{optionText}</div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Nav Controls */}
            <div className="question-footer-nav">
              <button
                type="button"
                className="btn btn-secondary prev-btn"
                disabled={currentIndex === 0}
                onClick={handlePrev}
                id="prev-question-btn"
              >
                <ChevronLeft size={18} />
                <span>Previous</span>
              </button>

              <div className="keyboard-hint">
                <span>Tip: Use 1–4 keys to select, ← → keys to navigate</span>
              </div>

              {currentIndex < totalQuestions - 1 ? (
                <button
                  type="button"
                  className="btn btn-primary next-btn"
                  onClick={handleNext}
                  id="next-question-btn"
                >
                  <span>Next</span>
                  <ChevronRight size={18} />
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-success finish-btn"
                  onClick={handleSubmitClick}
                  id="finish-submit-btn"
                >
                  <Send size={16} />
                  <span>Submit Quiz</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right: Question Navigation Palette */}
        {showMobilePalette && (
          <div
            className="mobile-palette-backdrop"
            onClick={() => setShowMobilePalette(false)}
          />
        )}
        <aside className={`quiz-palette-sidebar ${showMobilePalette ? 'mobile-drawer-open' : ''}`}>
          <div className="palette-card">
            <div className="palette-card-header">
              <h4 className="palette-title">Question Palette</h4>
              <button
                type="button"
                className="palette-close-mobile-btn"
                onClick={() => setShowMobilePalette(false)}
                aria-label="Close question palette"
              >
                <X size={18} />
              </button>
            </div>

            {/* Stats summary */}
            <div className="palette-stats-row">
              <div className="palette-stat answered">
                <span className="stat-indicator answered" />
                <span className="stat-label">Answered:</span>
                <span className="stat-num">{answeredCount}</span>
              </div>
              <div className="palette-stat unanswered">
                <span className="stat-indicator unanswered" />
                <span className="stat-label">Unanswered:</span>
                <span className="stat-num">{unansweredCount}</span>
              </div>
            </div>

            {/* Grid of question buttons */}
            <div className="palette-grid">
              {questions.map((q, idx) => {
                const answered = Boolean(userAnswers[q.id]);
                const marked = Boolean(markedForReview[q.id]);
                const isCurrent = idx === currentIndex;

                let stateClass = answered ? 'answered' : 'unanswered';
                if (marked) stateClass += ' marked';
                if (isCurrent) stateClass += ' current';

                return (
                  <button
                    key={q.id}
                    type="button"
                    className={`palette-item-btn ${stateClass}`}
                    onClick={() => goToQuestion(idx)}
                    title={`Go to Question ${idx + 1} (${answered ? 'Answered' : 'Unanswered'})`}
                    id={`palette-item-${idx + 1}`}
                  >
                    <span>{idx + 1}</span>
                    {marked && <span className="palette-flag-dot" />}
                  </button>
                );
              })}
            </div>

            <div className="palette-footer">
              <button
                type="button"
                className="btn btn-primary btn-block submit-palette-btn"
                onClick={handleSubmitClick}
                id="submit-test-sidebar-btn"
              >
                <Send size={16} />
                <span>Submit Test ({answeredCount}/{totalQuestions})</span>
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* Confirmation Modal for Submitting */}
      <ConfirmModal
        isOpen={showSubmitModal}
        title={unansweredCount > 0 ? 'Unanswered Questions Warning' : 'Confirm Submission'}
        message={
          unansweredCount > 0
            ? `You still have ${unansweredCount} unanswered ${
                unansweredCount === 1 ? 'question' : 'questions'
              } out of ${totalQuestions}. Unanswered questions will receive 0 marks. Are you sure you want to finish and submit now?`
            : `You have answered all ${totalQuestions} questions! Are you ready to submit your test and review your final score?`
        }
        confirmLabel={unansweredCount > 0 ? 'Submit Anyway' : 'Yes, Submit Test'}
        cancelLabel="Continue Practicing"
        variant={unansweredCount > 0 ? 'warning' : 'info'}
        onConfirm={handleConfirmSubmit}
        onCancel={() => setShowSubmitModal(false)}
      />

      {/* Confirmation Modal for Exiting */}
      <ConfirmModal
        isOpen={showExitModal}
        title="Exit Quiz?"
        message="Your progress will be saved in your browser so you can resume anytime. Return to the dashboard?"
        confirmLabel="Exit to Dashboard"
        cancelLabel="Stay in Quiz"
        variant="warning"
        onConfirm={() => {
          setShowExitModal(false);
          onExitQuiz();
        }}
        onCancel={() => setShowExitModal(false)}
      />
    </div>
  );
};
