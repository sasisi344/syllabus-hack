import type { UserProgress, ExamResult } from './types';

const STORAGE_KEY_PREFIX = 'sh_quiz_';

const createDefaultProgress = (): UserProgress => ({
  attempts: [],
  bestScore: 0,
  lastUpdated: Date.now(),
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
    progress.lastUpdated = Date.now();
    localStorage.setItem(`${STORAGE_KEY_PREFIX}${examId}`, JSON.stringify(progress));
  } catch {
    // Storage full — ignore silently
  }
};

export const recordAttempt = (examId: string, result: ExamResult): UserProgress => {
  const progress = loadProgress(examId);
  // 直近 100 件のみ保持（超過分は切り捨て）
  progress.attempts = [result, ...progress.attempts].slice(0, 100);
  progress.bestScore = Math.max(progress.bestScore, result.score);
  saveProgress(examId, progress);
  return progress;
};
