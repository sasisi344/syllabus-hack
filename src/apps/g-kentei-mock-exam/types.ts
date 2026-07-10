export type GKenteiField = 'ai-history' | 'ml-basics' | 'deep-learning' | 'ai-application' | 'ai-ethics-law';

export const FIELD_LABELS: Record<GKenteiField, string> = {
  'ai-history': 'AIの歴史',
  'ml-basics': '機械学習の基礎',
  'deep-learning': 'ディープラーニングの基礎',
  'ai-application': 'ディープラーニングの応用',
  'ai-ethics-law': '法律・倫理・社会実装',
};

export interface Choice {
  label: string;
  text: string;
}

export interface Question {
  id: string;
  examId: string;
  field: GKenteiField;
  subField?: string;
  text: string;
  choices: Choice[];
  correctLabel: string;
  explanation: string;
  keywords?: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface AnswerRecord {
  questionId: string;
  selectedLabel: string | null;
  isCorrect: boolean;
  answeredAt: number;
}

export interface ExamResult {
  score: number;
  total: number;
  fieldStats: Record<string, { answered: number; correct: number }>;
  durationSec: number;
  completedAt: number;
}

export interface UserProgress {
  attempts: ExamResult[];
  bestScore: number;
  lastUpdated: number;
}
