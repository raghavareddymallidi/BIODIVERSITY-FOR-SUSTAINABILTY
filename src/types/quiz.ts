export type QuizMode = 'week' | 'combined' | 'retry';

export interface QuizConfig {
  mode: QuizMode;
  title: string;
  subtitle: string;
  selectedWeeks: number[];
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
  retryQuestionIds?: string[];
  sourceAttemptId?: string;
}

export interface PreparedQuestion {
  id: string;
  week: number;
  weekTitle: string;
  question: string;
  options: string[]; // Options order for this quiz attempt (may be shuffled)
  answer: string; // Correct answer text
  originalIndex: number;
}

export interface QuizAttempt {
  id: string;
  timestamp: number;
  dateFormatted: string;
  mode: QuizMode;
  title: string;
  subtitle: string;
  selectedWeeks: number[];
  totalQuestions: number;
  score: number;
  percentage: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  userAnswers: Record<string, string>; // questionId -> selected answer text
  questionsSnapshot: PreparedQuestion[]; // preserve exact question order and options for review
  timeTakenSeconds?: number;
  shuffleQuestionsUsed: boolean;
  shuffleOptionsUsed: boolean;
  sourceAttemptId?: string;
  isRetry?: boolean;
}

export interface WeekProgressSummary {
  week: number;
  title: string;
  assignmentTitle: string;
  questionCount: number;
  attemptsCount: number;
  lastScore: number | null;
  bestScore: number | null;
  lastPercentage: number | null;
  bestPercentage: number | null;
  lastAttemptDate: string | null;
}

export interface OverallStats {
  totalQuizzesAttempted: number;
  totalQuestionsAnswered: number;
  totalQuestionsCorrect: number;
  overallAccuracy: number;
  weekProgress: WeekProgressSummary[];
  recentAttempts: QuizAttempt[];
}

export interface ActiveQuizState {
  config: QuizConfig;
  questions: PreparedQuestion[];
  currentIndex: number;
  userAnswers: Record<string, string>;
  startTime: number;
  elapsedSeconds: number;
}
