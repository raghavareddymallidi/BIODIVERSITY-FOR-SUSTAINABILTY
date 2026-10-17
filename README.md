# Biodiversity for Sustainability — NPTEL MCQ Practice Website

A complete, responsive, and interactive question-practice web application built with **React**, **TypeScript**, and **Vite** for the NPTEL examination on **Biodiversity for Sustainability**.

---

## 🌟 Key Features

### 1. Dashboard & Module Navigation
- **Complete Course Coverage:** All 13 weeks (Week 0 to Week 12) featuring all 130 verified MCQs (10 questions per week).
- **Executive Metrics:** Tracks total quizzes attempted, questions answered correctly, cumulative accuracy percentage, and modules completed.
- **Week-Wise Cards:** Displays week title, assignment number, question count, best score, last score, and animated progress bars.
- **Recent Quiz History:** Quick access to the most recent test attempts with score breakdown and one-click answer inspection.
- **Theme Switcher:** Seamless Dark Mode and Light Mode with persistence in `localStorage`.

### 2. Week-Wise Practice Mode
- **Dedicated Quizzes:** Individual quizzes for each assignment (Weeks 0 through 12, exactly 10 questions each).
- **Focused Exam Interface:**
  - Question tracker (e.g. *Question 4 of 10*).
  - Clean radio option buttons with option letters (A, B, C, D).
  - Real-time progress bar.
  - Previous and Next buttons with keyboard shortcuts (`1`–`4` for options, `←` / `→` for navigation).
  - Question palette navigation grid: jump directly to any question with answered/unanswered color indicators.
  - Mark questions for review & Clear Selection controls.
  - Submit confirmation dialog warning if any questions remain unanswered.
  - Answer keys remain strictly hidden during the active quiz.

### 3. Combined Test Builder (Core Feature)
- **Full Course Exam Simulation:** Default test includes all 130 questions from Week 0 through Week 12.
- **Customizable Combinations:** Select any subset of weeks with multi-checkbox support.
- **Quick Presets:**
  - *All 13 Weeks* (130 Questions)
  - *Weeks 0–6 Midterm* (70 Questions)
  - *Weeks 7–12 Finals* (60 Questions)
- **Dynamic Question Counter:** Instantly calculates the total questions based on selected modules.
- **Independent Shuffling Engines:**
  - **Shuffle Questions:** Randomizes question order without duplicating or altering original items.
  - **Shuffle Answer Options:** Randomizes option positions (A, B, C, D) independently per question while strictly preserving the correct answer key.
  - Shuffling settings work independently and can be toggled on or off.

### 4. Automatic Scoring & Performance Analytics
- **Standard NPTEL Scoring:**
  - `+1` mark for each correct answer.
  - `0` marks for incorrect answers.
  - `0` marks for unanswered questions.
  - No negative marking.
- **Accurate Denominator:** Scores are calculated against the actual number of questions in that test (e.g. out of 10 for a weekly quiz, out of 130 for a full test, or out of K for a targeted retry).
- **Celebratory Confetti:** Triggers on scores ≥ 80%.

### 5. In-Depth Answer Review & Targeted Retry
- **Filterable Answer Breakdown:**
  - *All Questions*
  - *Incorrect Answers Only*
  - *Unanswered Questions Only*
  - *Correct Answers Only*
  - Filter by specific module if taking a combined test.
- **Clear Visual Distinction:** High-contrast color and icon badges for Correct (green check), Incorrect (red cross), and Unanswered (amber dash).
- **Side-by-Side Comparison:** Displays question text, all 4 options, what the user selected, and the verified correct answer.
- **Targeted Retry Engine:**
  - **Retry Only Wrong & Unanswered Questions:** Generates a new quiz containing *only* the questions missed or skipped in that attempt.
  - Scores the retry based solely on the subset of retry questions.

### 6. Local Persistence
- All progress, quiz attempts, best scores, and theme preferences are saved in `localStorage`.
- Unfinished quizzes are saved in real-time, allowing users to safely refresh or resume later.
- Includes a **Reset Progress** option with modal confirmation.

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation & Execution
```bash
# Navigate to the project directory
cd /Users/raghavareddy/.gemini/antigravity-ide/scratch/nptel-biodiversity-mcq

# Install dependencies (if not already installed)
npm install

# Start the development server
npm run dev
```

Open your browser and navigate to:
```
http://127.0.0.1:5173/
```

### Production Build
```bash
# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Architecture

```
nptel-biodiversity-mcq/
├── src/
│   ├── data/
│   │   └── questions.ts           # 130 strongly-typed questions (Week 0 to Week 12)
│   ├── types/
│   │   └── quiz.ts                # TypeScript interfaces and data models
│   ├── utils/
│   │   ├── quizUtils.ts           # Fisher-Yates shuffle, scoring formulas, tier helper
│   │   └── storage.ts             # LocalStorage persistence, active session backup
│   ├── components/
│   │   ├── Header.tsx             # Brand header, navigation links, theme toggle
│   │   ├── Dashboard.tsx          # Course stats, week cards grid, recent attempts
│   │   ├── WeekCard.tsx           # Individual module card with scores and shuffle controls
│   │   ├── CombinedTestBuilder.tsx# Multi-week selection, presets, shuffle toggles
│   │   ├── ActiveQuiz.tsx         # Exam interface, radio options, question palette, timer
│   │   ├── ResultReview.tsx       # Score report, filterable answers, targeted retry
│   │   ├── ProgressHistory.tsx    # Complete past attempts table, review and retake
│   │   └── ConfirmModal.tsx       # Reusable confirmation modal for warnings/resets
│   ├── App.tsx                    # Main app state controller & view coordinator
│   ├── index.css                  # Modern Vanilla CSS design system (dark/light themes)
│   └── main.tsx                   # React root entry point
├── index.html                     # HTML root with Google Fonts & SEO metadata
├── package.json
├── tsconfig.json
└── vite.config.ts
```
