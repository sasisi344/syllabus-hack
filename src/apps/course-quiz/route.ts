import type { CourseQuestion, LearningRoute } from './types';

// しきい値の根拠は .workspace/.new-contentplan/20hours-course-template.md §1-1（4択は勘でも25%取れるため基礎ルートの線は40%）
const PRACTICE_THRESHOLD = 0.8;
const BASIC_THRESHOLD = 0.4;

export const getLearningRoute = (correctCount: number, totalCount: number): LearningRoute => {
  const rate = totalCount > 0 ? correctCount / totalCount : 0;
  if (rate >= PRACTICE_THRESHOLD) return 'practice';
  if (rate < BASIC_THRESHOLD) return 'basic';
  return 'focus';
};

/** 章内で半数以上を間違えた章を、章別正答率の低い順（同率は章番号順）に返す */
export const getWeakChapters = (questions: CourseQuestion[], answers: Record<string, string>): number[] => {
  const stats = new Map<number, { total: number; wrong: number }>();
  for (const q of questions) {
    if (!q.chapterOrder) continue;
    const s = stats.get(q.chapterOrder) ?? { total: 0, wrong: 0 };
    s.total += 1;
    if (answers[q.id] !== q.correctLabel) s.wrong += 1;
    stats.set(q.chapterOrder, s);
  }
  return [...stats.entries()]
    .filter(([, s]) => s.wrong * 2 >= s.total)
    .sort(([a, sa], [b, sb]) => sb.wrong / sb.total - sa.wrong / sa.total || a - b)
    .map(([order]) => order);
};
