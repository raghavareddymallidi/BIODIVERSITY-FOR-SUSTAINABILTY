import React, { useState } from 'react';
import {
  Shuffle,
  CheckSquare,
  Square,
  Play,
  Sparkles,
  HelpCircle,
  Check,
  RotateCcw
} from 'lucide-react';
import { WEEKS_META } from '../data/questions';
import type { QuizConfig } from '../types/quiz';

interface CombinedTestBuilderProps {
  onStartCombinedQuiz: (config: QuizConfig) => void;
}

export const CombinedTestBuilder: React.FC<CombinedTestBuilderProps> = ({
  onStartCombinedQuiz
}) => {
  // Default is ALL weeks (0 to 12) selected
  const [selectedWeeks, setSelectedWeeks] = useState<number[]>(
    WEEKS_META.map((w) => w.week)
  );

  // Both shuffle settings enabled by default for combined test
  const [shuffleQuestions, setShuffleQuestions] = useState<boolean>(true);
  const [shuffleOptions, setShuffleOptions] = useState<boolean>(true);

  const toggleWeek = (week: number) => {
    setSelectedWeeks((prev) =>
      prev.includes(week) ? prev.filter((w) => w !== week) : [...prev, week].sort((a, b) => a - b)
    );
  };

  const handleSelectAll = () => {
    setSelectedWeeks(WEEKS_META.map((w) => w.week));
  };

  const handleClearSelection = () => {
    setSelectedWeeks([]);
  };

  const handlePresetSelect = (presetWeeks: number[]) => {
    setSelectedWeeks(presetWeeks);
  };

  // Question count is dynamically computed
  const totalQuestions = selectedWeeks.length * 10;

  const handleStart = () => {
    if (selectedWeeks.length === 0) return;

    const isAll = selectedWeeks.length === WEEKS_META.length;
    const title = isAll
      ? 'Combined Test — Full Course (Weeks 0–12)'
      : `Combined Test — ${selectedWeeks.length} Selected Weeks`;
    const subtitle = isAll
      ? 'All 130 Questions across all 13 assignments'
      : `Selected: ${selectedWeeks.map((w) => `Week ${w}`).join(', ')} (${totalQuestions} Questions)`;

    onStartCombinedQuiz({
      mode: 'combined',
      title,
      subtitle,
      selectedWeeks,
      shuffleQuestions,
      shuffleOptions
    });
  };

  return (
    <div className="combined-test-builder">
      {/* Hero Banner */}
      <div className="builder-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>Grand Revision & Exam Simulation</span>
          </div>
          <h2 className="builder-title">Custom Combined Test Builder</h2>
          <p className="builder-description">
            Customize your exam simulation by selecting specific modules or take the complete 130-question mock exam.
            Questions and options are randomized for optimal retention.
          </p>
        </div>

        <div className="builder-summary-card">
          <div className="summary-stat">
            <span className="summary-label">Selected Weeks</span>
            <span className="summary-val">{selectedWeeks.length} / 13</span>
          </div>
          <div className="summary-stat-divider" />
          <div className="summary-stat">
            <span className="summary-label">Total Questions</span>
            <span className="summary-val highlight">{totalQuestions}</span>
          </div>
        </div>
      </div>

      <div className="builder-grid">
        {/* Left Side: Week Selection */}
        <div className="builder-card weeks-selection-card">
          <div className="card-header-row">
            <div>
              <h3 className="card-section-title">Select Weeks to Include</h3>
              <p className="card-section-subtitle">
                Pick any combination of assignments from Week 0 to Week 12.
              </p>
            </div>
            <div className="selection-quick-actions">
              <button
                type="button"
                className="btn btn-sm btn-secondary"
                onClick={handleSelectAll}
                id="select-all-weeks-btn"
              >
                <CheckSquare size={14} />
                <span>Select All</span>
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline"
                onClick={handleClearSelection}
                id="clear-weeks-selection-btn"
              >
                <Square size={14} />
                <span>Clear Selection</span>
              </button>
            </div>
          </div>

          {/* Quick Presets */}
          <div className="preset-chips-row">
            <span className="preset-label">Quick Presets:</span>
            <button
              type="button"
              className={`preset-chip ${selectedWeeks.length === 13 ? 'active' : ''}`}
              onClick={() => handlePresetSelect(WEEKS_META.map((w) => w.week))}
            >
              All 13 Weeks (130 Qs)
            </button>
            <button
              type="button"
              className={`preset-chip ${
                selectedWeeks.length === 7 && selectedWeeks.every((w) => w <= 6)
                  ? 'active'
                  : ''
              }`}
              onClick={() => handlePresetSelect([0, 1, 2, 3, 4, 5, 6])}
            >
              Weeks 0–6 (Midterm 70 Qs)
            </button>
            <button
              type="button"
              className={`preset-chip ${
                selectedWeeks.length === 6 && selectedWeeks.every((w) => w >= 7)
                  ? 'active'
                  : ''
              }`}
              onClick={() => handlePresetSelect([7, 8, 9, 10, 11, 12])}
            >
              Weeks 7–12 (Finals 60 Qs)
            </button>
          </div>

          {/* Week Checkboxes Grid */}
          <div className="weeks-checkbox-grid">
            {WEEKS_META.map((meta) => {
              const isSelected = selectedWeeks.includes(meta.week);
              return (
                <label
                  key={meta.week}
                  className={`week-select-item ${isSelected ? 'selected' : ''}`}
                  onClick={() => toggleWeek(meta.week)}
                >
                  <div className="checkbox-visual">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => {}} // handled by parent onClick
                      id={`checkbox-week-${meta.week}`}
                    />
                    <span className="checkbox-box">
                      {isSelected && <Check size={14} />}
                    </span>
                  </div>
                  <div className="week-select-info">
                    <div className="week-name-title">{meta.title}</div>
                    <div className="week-assignment-sub">
                      {meta.assignmentTitle} • 10 Qs
                    </div>
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        {/* Right Side: Shuffle Settings & Start Action */}
        <div className="builder-card settings-action-card">
          <h3 className="card-section-title">Shuffle & Exam Configuration</h3>
          <p className="card-section-subtitle">
            Toggle question and answer option randomization independently.
          </p>

          <div className="shuffle-settings-list">
            <div className="shuffle-toggle-card">
              <div className="toggle-left">
                <div className="toggle-icon-wrap">
                  <Shuffle size={20} />
                </div>
                <div>
                  <div className="toggle-title">Shuffle Questions</div>
                  <div className="toggle-desc">
                    Randomizes the sequence of questions for this attempt without altering the original bank.
                  </div>
                </div>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={shuffleQuestions}
                  onChange={(e) => setShuffleQuestions(e.target.checked)}
                  id="toggle-shuffle-questions"
                />
                <span className="slider round" />
              </label>
            </div>

            <div className="shuffle-toggle-card">
              <div className="toggle-left">
                <div className="toggle-icon-wrap">
                  <RotateCcw size={20} />
                </div>
                <div>
                  <div className="toggle-title">Shuffle Answer Options</div>
                  <div className="toggle-desc">
                    Randomizes the 4 option positions (A, B, C, D) while strictly maintaining the correct answer key.
                  </div>
                </div>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={shuffleOptions}
                  onChange={(e) => setShuffleOptions(e.target.checked)}
                  id="toggle-shuffle-options"
                />
                <span className="slider round" />
              </label>
            </div>
          </div>

          <div className="scoring-rules-callout">
            <HelpCircle size={18} />
            <div>
              <strong>NPTEL Scoring Standard:</strong>
              <p>+1 mark for every correct response. 0 marks for incorrect or unanswered questions. No negative marking.</p>
            </div>
          </div>

          <div className="start-test-action-wrap">
            <button
              type="button"
              className="btn btn-primary btn-lg start-combined-btn"
              disabled={selectedWeeks.length === 0}
              onClick={handleStart}
              id="start-combined-test-btn"
            >
              <Play size={20} />
              <span>
                {selectedWeeks.length === 0
                  ? 'Please select at least 1 week'
                  : `Start Combined Test (${totalQuestions} Questions)`}
              </span>
            </button>
            {selectedWeeks.length > 0 && (
              <p className="ready-hint">
                Selected {selectedWeeks.length} of 13 modules • {totalQuestions} MCQs ready to begin
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
