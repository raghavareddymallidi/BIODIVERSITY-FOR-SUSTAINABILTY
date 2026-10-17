import { ALL_QUESTIONS, type Question } from '../data/questions';
import type { PreparedQuestion, QuizConfig } from '../types/quiz';

/**
 * Fisher-Yates shuffle algorithm on an array copy.
 * Does NOT mutate the input array.
 */
export function shuffleArray<T>(array: readonly T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Prepares questions for a quiz attempt:
 * - Selects questions matching the config (specific weeks, all weeks, or specific retry IDs).
 * - Shuffles questions independently if shuffleQuestions is enabled.
 * - Shuffles options independently per question if shuffleOptions is enabled.
 * - Ensures original question bank and answers remain immutable.
 */
export function prepareQuizQuestions(config: QuizConfig): PreparedQuestion[] {
  let sourceList: Question[] = [];

  if (config.retryQuestionIds && config.retryQuestionIds.length > 0) {
    const idSet = new Set(config.retryQuestionIds);
    sourceList = ALL_QUESTIONS.filter((q) => idSet.has(q.id));
  } else if (config.selectedWeeks.length > 0) {
    const weekSet = new Set(config.selectedWeeks);
    sourceList = ALL_QUESTIONS.filter((q) => weekSet.has(q.week));
  } else {
    sourceList = [...ALL_QUESTIONS];
  }

  // Question shuffle
  const orderedQuestions = config.shuffleQuestions
    ? shuffleArray(sourceList)
    : [...sourceList];

  // Options shuffle per question
  return orderedQuestions.map((q, index) => {
    const options = config.shuffleOptions
      ? shuffleArray(q.options)
      : [...q.options];

    return {
      id: q.id,
      week: q.week,
      weekTitle: q.weekTitle,
      question: q.question,
      options,
      answer: q.answer,
      originalIndex: index + 1
    };
  });
}

export interface ScoreSummary {
  totalQuestions: number;
  score: number;
  percentage: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
}

/**
 * Automatic scoring based on exact answers:
 * - 1 mark per correct answer
 * - 0 marks for incorrect or unanswered
 * - Accurate percentage calculation
 */
export function calculateQuizScore(
  questions: PreparedQuestion[],
  userAnswers: Record<string, string>
): ScoreSummary {
  const totalQuestions = questions.length;
  let correctCount = 0;
  let unansweredCount = 0;
  let incorrectCount = 0;

  for (const q of questions) {
    const selected = userAnswers[q.id];
    if (!selected) {
      unansweredCount++;
    } else if (selected.trim() === q.answer.trim()) {
      correctCount++;
    } else {
      incorrectCount++;
    }
  }

  const score = correctCount;
  const percentage =
    totalQuestions > 0
      ? Number(((correctCount / totalQuestions) * 100).toFixed(2))
      : 0;

  return {
    totalQuestions,
    score,
    percentage,
    correctCount,
    incorrectCount,
    unansweredCount
  };
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

export function formatDate(timestamp: number): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(timestamp));
}

export function getPerformanceTier(percentage: number): {
  label: string;
  badgeClass: string;
  description: string;
} {
  if (percentage >= 90) {
    return {
      label: 'Outstanding Mastery',
      badgeClass: 'tier-gold',
      description: 'Excellent preparation! Ready for NPTEL distinction.'
    };
  }
  if (percentage >= 75) {
    return {
      label: 'Strong Proficiency',
      badgeClass: 'tier-silver',
      description: 'Great grasp of key biodiversity and sustainability concepts.'
    };
  }
  if (percentage >= 50) {
    return {
      label: 'Passing Level',
      badgeClass: 'tier-bronze',
      description: 'Good foundation, review incorrect questions to boost score.'
    };
  }
  return {
    label: 'Needs Review',
    badgeClass: 'tier-warning',
    description: 'Requires more practice. Use the wrong-question retry feature!'
  };
}
