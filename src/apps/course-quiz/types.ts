export interface Choice {
  label: string;
  text: string;
}

export interface CourseQuestion {
  id: string;
  chapterOrder?: number;
  text: string;
  choices: Choice[];
  correctLabel: string;
}

export interface ChapterLink {
  order: number;
  title: string;
  href: string;
}

/** 診断結果から決まる学習ルート: practice=演習 / focus=重点 / basic=基礎 */
export type LearningRoute = 'practice' | 'focus' | 'basic';

/** 章別の正答数（キーは chapterOrder） */
export type ChapterScores = Record<number, { correct: number; total: number }>;

export interface DiagnosisResult {
  correctCount: number;
  totalCount: number;
  weakChapters: number[];
  route?: LearningRoute;
  chapterScores?: ChapterScores;
  answeredAt: number;
}

export interface CourseProgress {
  completedChapters: number[];
  diagnosisResult?: DiagnosisResult;
  lastUpdated: number;
}
