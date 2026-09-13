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

export interface DiagnosisResult {
  correctCount: number;
  totalCount: number;
  weakChapters: number[];
  answeredAt: number;
}

export interface CourseProgress {
  completedChapters: number[];
  diagnosisResult?: DiagnosisResult;
  lastUpdated: number;
}
