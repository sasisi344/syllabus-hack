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

export interface ExperienceQuestion {
  id: string;
  text: string;
}

export type ExperienceAnswers = Record<string, boolean>;
export type MatrixRoute = '体験' | '言語化' | '実践' | '演習';
export interface RouteDefinition {
  name: MatrixRoute;
  guidance: string;
  chapterOrder: number[];
}
/** 第1キー=体系知識、第2キー=経験。present=あり / absent=なし */
export type RouteMatrix = Record<'present' | 'absent', Record<'present' | 'absent', RouteDefinition>>;

/** 章別の正答数（キーは chapterOrder） */
export type ChapterScores = Record<number, { correct: number; total: number }>;

export interface DiagnosisResult {
  correctCount: number;
  totalCount: number;
  weakChapters: number[];
  route?: LearningRoute | MatrixRoute;
  experienceAnswers?: ExperienceAnswers;
  chapterScores?: ChapterScores;
  answeredAt: number;
}

export interface CourseProgress {
  completedChapters: number[];
  diagnosisResult?: DiagnosisResult;
  lastUpdated: number;
}
