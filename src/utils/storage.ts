import { WEEKS_META } from '../data/questions';
import type {
  ActiveQuizState,
  OverallStats,
  QuizAttempt,
  WeekProgressSummary
} from '../types/quiz';

const ATTEMPTS_KEY = 'nptel_bio_attempts_v1';
const ACTIVE_QUIZ_KEY = 'nptel_bio_active_quiz_v1';
const THEME_KEY = 'nptel_bio_theme_v1';

export function getStoredAttempts(): QuizAttempt[] {
  try {
    const raw = localStorage.getItem(ATTEMPTS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed;
    }
    return [];
  } catch (err) {
    console.error('Failed to read attempts from localStorage:', err);
    return [];
  }
}

export function saveAttempt(attempt: QuizAttempt): void {
  try {
    const existing = getStoredAttempts();
    const updated = [attempt, ...existing];
    localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save attempt to localStorage:', err);
  }
}

export function getAttemptById(id: string): QuizAttempt | undefined {
  const attempts = getStoredAttempts();
  return attempts.find((a) => a.id === id);
}

export function getOverallStats(): OverallStats {
  const attempts = getStoredAttempts();
  const totalQuizzesAttempted = attempts.length;

  let totalQuestionsAnswered = 0;
  let totalQuestionsCorrect = 0;

  for (const a of attempts) {
    totalQuestionsAnswered += a.totalQuestions;
    totalQuestionsCorrect += a.correctCount;
  }

  const overallAccuracy =
    totalQuestionsAnswered > 0
      ? Number(((totalQuestionsCorrect / totalQuestionsAnswered) * 100).toFixed(2))
      : 0;

  // Compute week progress summary for all 13 weeks (Week 0 to Week 12)
  const weekProgress: WeekProgressSummary[] = WEEKS_META.map((meta) => {
    // Look for attempts specific to this week (mode === 'week' and selectedWeeks contains only this week)
    const weekAttempts = attempts.filter(
      (a) => a.mode === 'week' && a.selectedWeeks.length === 1 && a.selectedWeeks[0] === meta.week
    );

    if (weekAttempts.length === 0) {
      return {
        week: meta.week,
        title: meta.title,
        assignmentTitle: meta.assignmentTitle,
        questionCount: meta.questionCount,
        attemptsCount: 0,
        lastScore: null,
        bestScore: null,
        lastPercentage: null,
        bestPercentage: null,
        lastAttemptDate: null
      };
    }

    const latest = weekAttempts[0];
    const bestScore = Math.max(...weekAttempts.map((a) => a.score));
    const bestPercentage = Math.max(...weekAttempts.map((a) => a.percentage));

    return {
      week: meta.week,
      title: meta.title,
      assignmentTitle: meta.assignmentTitle,
      questionCount: meta.questionCount,
      attemptsCount: weekAttempts.length,
      lastScore: latest.score,
      bestScore,
      lastPercentage: latest.percentage,
      bestPercentage,
      lastAttemptDate: latest.dateFormatted
    };
  });

  return {
    totalQuizzesAttempted,
    totalQuestionsAnswered,
    totalQuestionsCorrect,
    overallAccuracy,
    weekProgress,
    recentAttempts: attempts.slice(0, 5)
  };
}

export function saveActiveQuiz(state: ActiveQuizState | null): void {
  try {
    if (!state) {
      localStorage.removeItem(ACTIVE_QUIZ_KEY);
    } else {
      localStorage.setItem(ACTIVE_QUIZ_KEY, JSON.stringify(state));
    }
  } catch (err) {
    console.error('Failed to update active quiz in localStorage:', err);
  }
}

export function getActiveQuiz(): ActiveQuizState | null {
  try {
    const raw = localStorage.getItem(ACTIVE_QUIZ_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to parse active quiz state:', err);
    return null;
  }
}

export function clearActiveQuiz(): void {
  try {
    localStorage.removeItem(ACTIVE_QUIZ_KEY);
  } catch (err) {
    console.error('Failed to clear active quiz:', err);
  }
}

export function resetAllProgress(): void {
  try {
    localStorage.removeItem(ATTEMPTS_KEY);
    localStorage.removeItem(ACTIVE_QUIZ_KEY);
  } catch (err) {
    console.error('Failed to reset progress:', err);
  }
}

export function getStoredTheme(): 'dark' | 'light' {
  try {
    const val = localStorage.getItem(THEME_KEY);
    if (val === 'light' || val === 'dark') return val;
    return 'dark'; // Default to sleek modern dark theme
  } catch {
    return 'dark';
  }
}

export function saveStoredTheme(theme: 'dark' | 'light'): void {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    // ignore
  }
}
