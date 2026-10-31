import type { ChapterScores, CourseQuestion, LearningRoute } from './types';

// しきい値の根拠は .workspace/.new-contentplan/20hours-course-template.md §1-1（4択は勘でも25%取れるため基礎ルートの線は40%）
const PRACTICE_THRESHOLD = 0.8;
const BASIC_THRESHOLD = 0.4;

export const getLearningRoute = (correctCount: number, totalCount: number): LearningRoute => {
  const rate = totalCount > 0 ? correctCount / totalCount : 0;
  if (rate >= PRACTICE_THRESHOLD) return 'practice';
  if (rate < BASIC_THRESHOLD) return 'basic';
  return 'focus';
};

/** 診断の章別正答数。chapterOrder の無い問題は数えない */
export const getChapterScores = (questions: CourseQuestion[], answers: Record<string, string>): ChapterScores => {
  const scores: ChapterScores = {};
  for (const q of questions) {
    if (!q.chapterOrder) continue;
    const s = scores[q.chapterOrder] ?? { correct: 0, total: 0 };
    s.total += 1;
    if (answers[q.id] === q.correctLabel) s.correct += 1;
    scores[q.chapterOrder] = s;
  }
  return scores;
};

/** 章内で半数以上を間違えた章を、章別正答率の低い順（同率は章番号順）に返す */
export const getWeakChapters = (questions: CourseQuestion[], answers: Record<string, string>): number[] =>
  Object.entries(getChapterScores(questions, answers))
    .map(([order, s]) => ({ order: Number(order), ...s }))
    .filter((s) => (s.total - s.correct) * 2 >= s.total)
    .sort((a, b) => a.correct / a.total - b.correct / b.total || a.order - b.order)
    .map((s) => s.order);
