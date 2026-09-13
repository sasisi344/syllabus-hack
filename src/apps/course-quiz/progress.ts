import type { CourseProgress, DiagnosisResult } from './types';

const STORAGE_KEY_PREFIX = 'sh_course_';

const createDefaultProgress = (): CourseProgress => ({
  completedChapters: [],
  lastUpdated: Date.now(),
});

export const loadCourseProgress = (examId: string): CourseProgress => {
  if (typeof window === 'undefined') return createDefaultProgress();
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}${examId}`);
    if (!raw) return createDefaultProgress();
    return JSON.parse(raw) as CourseProgress;
  } catch {
    return createDefaultProgress();
  }
};

const saveCourseProgress = (examId: string, progress: CourseProgress): void => {
  if (typeof window === 'undefined') return;
  try {
    progress.lastUpdated = Date.now();
    localStorage.setItem(`${STORAGE_KEY_PREFIX}${examId}`, JSON.stringify(progress));
  } catch {
    // Storage full — ignore silently
  }
};

export const markChapterComplete = (examId: string, chapterOrder: number): CourseProgress => {
  const progress = loadCourseProgress(examId);
  if (!progress.completedChapters.includes(chapterOrder)) {
    progress.completedChapters = [...progress.completedChapters, chapterOrder].sort((a, b) => a - b);
  }
  saveCourseProgress(examId, progress);
  return progress;
};

export const saveDiagnosisResult = (examId: string, result: DiagnosisResult): CourseProgress => {
  const progress = loadCourseProgress(examId);
  progress.diagnosisResult = result;
  saveCourseProgress(examId, progress);
  return progress;
};
