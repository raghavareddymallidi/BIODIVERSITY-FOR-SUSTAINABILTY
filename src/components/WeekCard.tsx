import React, { useState } from 'react';
import { Play, Settings2, CheckCircle2, Shuffle, Check } from 'lucide-react';
import type { WeekProgressSummary } from '../types/quiz';

interface WeekCardProps {
  progress: WeekProgressSummary;
  onStartWeekQuiz: (
    weekNumber: number,
    options: { shuffleQuestions: boolean; shuffleOptions: boolean }
  ) => void;
}

export const WeekCard: React.FC<WeekCardProps> = ({
  progress,
  onStartWeekQuiz
}) => {
  const [showSettings, setShowSettings] = useState(false);
  const [shuffleQuestions, setShuffleQuestions] = useState(false);
  const [shuffleOptions, setShuffleOptions] = useState(false);

  const handleStart = () => {
    onStartWeekQuiz(progress.week, { shuffleQuestions, shuffleOptions });
  };

  const hasAttempted = progress.attemptsCount > 0;
  const scorePercent = progress.lastPercentage ?? 0;

  return (
    <div className={`week-card ${hasAttempted ? 'attempted' : 'unattempted'}`}>
      <div className="week-card-header">
        <div className="week-tag-row">
          <span className="week-chip">{progress.title}</span>
          <span className="questions-count-badge">
            {progress.questionCount} Questions
          </span>
        </div>
        <button
          type="button"
          className={`settings-gear-btn ${showSettings ? 'active' : ''}`}
          onClick={() => setShowSettings(!showSettings)}
          title="Customize Shuffle Settings"
          aria-label="Customize Shuffle Settings"
        >
          <Settings2 size={16} />
        </button>
      </div>

      <div className="week-card-body">
        <h3 className="week-assignment-title">{progress.assignmentTitle}</h3>

        {/* Score & Progress */}
        {hasAttempted ? (
          <div className="week-performance-info">
            <div className="score-stat-line">
              <span className="stat-label">Last Score:</span>
              <span className="stat-val highlight">
                {progress.lastScore} / {progress.questionCount} ({progress.lastPercentage}%)
              </span>
            </div>
            {progress.bestPercentage !== null && (
              <div className="score-stat-sub">
                Best: {progress.bestScore} / {progress.questionCount} ({progress.bestPercentage}%) • Attempts: {progress.attemptsCount}
              </div>
            )}
            <div className="progress-bar-container">
              <div
                className="progress-bar-fill"
                style={{
                  width: `${scorePercent}%`,
                  backgroundColor:
                    scorePercent >= 80
                      ? 'var(--color-emerald-500)'
                      : scorePercent >= 50
                      ? 'var(--color-amber-500)'
                      : 'var(--color-rose-500)'
                }}
              />
            </div>
          </div>
        ) : (
          <div className="week-performance-info empty">
            <span className="unattempted-text">Not yet attempted</span>
            <div className="progress-bar-container">
              <div className="progress-bar-fill empty" style={{ width: '0%' }} />
            </div>
          </div>
        )}

        {/* Inline Shuffle Settings Accordion */}
        {showSettings && (
          <div className="week-settings-panel">
            <div className="settings-panel-header">
              <Shuffle size={14} />
              <span>Shuffle Settings for this Quiz</span>
            </div>
            <label className="checkbox-control">
              <input
                type="checkbox"
                checked={shuffleQuestions}
                onChange={(e) => setShuffleQuestions(e.target.checked)}
              />
              <span className="checkbox-box">{shuffleQuestions && <Check size={12} />}</span>
              <span className="checkbox-text">Shuffle Question Order</span>
            </label>
            <label className="checkbox-control">
              <input
                type="checkbox"
                checked={shuffleOptions}
                onChange={(e) => setShuffleOptions(e.target.checked)}
              />
              <span className="checkbox-box">{shuffleOptions && <Check size={12} />}</span>
              <span className="checkbox-text">Shuffle Answer Options</span>
            </label>
          </div>
        )}
      </div>

      <div className="week-card-footer">
        <button
          type="button"
          className="btn btn-primary start-week-btn"
          onClick={handleStart}
          id={`start-week-${progress.week}-btn`}
        >
          {hasAttempted ? <CheckCircle2 size={16} /> : <Play size={16} />}
          <span>{hasAttempted ? 'Practice Again' : 'Start Quiz'}</span>
        </button>
      </div>
    </div>
  );
};
