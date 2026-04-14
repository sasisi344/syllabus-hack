import type { QuizProgress } from './types';

const STORAGE_KEY_PREFIX = 'sh_quiz_';
/** @deprecated 旧キー — マイグレーション用 */
const LEGACY_KEY_PREFIX = 'sh_genai_cert_progress_';

function migrateIfNeeded(examId: string): void {
  if (typeof window === 'undefined') return;
  const newKey = `${STORAGE_KEY_PREFIX}${examId}`;
  const oldKey = `${LEGACY_KEY_PREFIX}${examId}`;
  if (!localStorage.getItem(newKey) && localStorage.getItem(oldKey)) {
    localStorage.setItem(newKey, localStorage.getItem(oldKey)!);
    localStorage.removeItem(oldKey);
  }
}

export function loadProgress(examId: string): QuizProgress {
  migrateIfNeeded(examId);
  if (typeof window === 'undefined') return { categoryStats: {} };
  const saved = localStorage.getItem(`${STORAGE_KEY_PREFIX}${examId}`);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      // corrupted data — fall through to default
    }
  }
  return { categoryStats: {} };
}

export function saveProgress(examId: string, progress: QuizProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}${examId}`, JSON.stringify(progress));
  } catch {
    // Storage full — ignore silently
  }
}

export function recordAnswer(examId: string, questionId: string, category: string, isCorrect: boolean): QuizProgress {
  const current = loadProgress(examId);

  if (!current.categoryStats[category]) {
    current.categoryStats[category] = { answered: 0, correct: 0 };
  }

  current.categoryStats[category].answered += 1;
  if (isCorrect) {
    current.categoryStats[category].correct += 1;
  }

  saveProgress(examId, current);
  return current;
}
