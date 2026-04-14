import type { UserProgress, AnswerRecord, MasteryLevel } from './types';

const STORAGE_KEY = 'sh_quiz_genai-ethics';
/** @deprecated 旧キー — マイグレーション用 */
const LEGACY_STORAGE_KEY = 'syllabushack_genai_ethics_progress';

function migrateIfNeeded(): void {
  if (typeof window === 'undefined') return;
  if (!localStorage.getItem(STORAGE_KEY) && localStorage.getItem(LEGACY_STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, localStorage.getItem(LEGACY_STORAGE_KEY)!);
    localStorage.removeItem(LEGACY_STORAGE_KEY);
  }
}

export function loadProgress(): UserProgress {
  migrateIfNeeded();
  if (typeof window === 'undefined') return createEmptyProgress();
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return createEmptyProgress();
  try {
    const parsed = JSON.parse(saved);
    if (!parsed.flashcard) {
      parsed.flashcard = { mastery: {} };
    }
    return parsed;
  } catch {
    return createEmptyProgress();
  }
}

function createEmptyProgress(): UserProgress {
  return {
    totalAnswered: 0,
    totalCorrect: 0,
    categoryStats: {},
    history: [],
    flashcard: { mastery: {} },
  };
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Storage full — ignore silently
  }
}

export function recordAnswer(questionId: string, category: string, isCorrect: boolean): UserProgress {
  const current = loadProgress();

  const record: AnswerRecord = {
    questionId,
    isCorrect,
    answeredAt: Date.now(),
  };

  const categoryStat = current.categoryStats[category] || { answered: 0, correct: 0 };
  categoryStat.answered += 1;
  if (isCorrect) categoryStat.correct += 1;

  const updated: UserProgress = {
    ...current,
    totalAnswered: current.totalAnswered + 1,
    totalCorrect: current.totalCorrect + (isCorrect ? 1 : 0),
    categoryStats: {
      ...current.categoryStats,
      [category]: categoryStat,
    },
    history: [record, ...current.history].slice(0, 100),
  };

  saveProgress(updated);
  return updated;
}

export function recordMastery(questionId: string, level: MasteryLevel): UserProgress {
  const current = loadProgress();
  const flashcard = current.flashcard || { mastery: {} };

  const updated: UserProgress = {
    ...current,
    flashcard: {
      ...flashcard,
      mastery: {
        ...flashcard.mastery,
        [questionId]: level,
      },
    },
  };

  saveProgress(updated);
  return updated;
}
