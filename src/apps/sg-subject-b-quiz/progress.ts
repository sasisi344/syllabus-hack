/**
 * SG Subject B Quiz — Progress Manager
 * LocalStorage を使った進捗管理ユーティリティ（sh_quiz_{examId} キー規約準拠）
 */
import type { UserProgress } from './types';

const STORAGE_KEY_PREFIX = 'sh_quiz_';

const createDefaultProgress = (): UserProgress => ({
  totalAnswered: 0,
  totalCorrect: 0,
  history: [],
});

export const loadProgress = (examId: string): UserProgress => {
  if (typeof window === 'undefined') return createDefaultProgress();
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}${examId}`);
    if (!raw) return createDefaultProgress();
    return JSON.parse(raw) as UserProgress;
  } catch {
    return createDefaultProgress();
  }
};

export const saveProgress = (examId: string, progress: UserProgress): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}${examId}`, JSON.stringify(progress));
  } catch {
    // Storage full — ignore silently
  }
};

export const recordAnswer = (examId: string, questionId: string, isCorrect: boolean): UserProgress => {
  const progress = loadProgress(examId);

  progress.totalAnswered += 1;
  if (isCorrect) progress.totalCorrect += 1;

  progress.history = [{ questionId, isCorrect, answeredAt: Date.now() }, ...progress.history].slice(0, 100);

  saveProgress(examId, progress);
  return progress;
};
