export interface Choice {
  label: string;
  text: string;
}

export interface Question {
  id: string;
  category: string;
  middleCategory?: string;
  question: string;
  choices: Choice[];
  answer: string;
  explanation: string;
  keyword?: string;
  syllabusRef?: string;
  role?: string;
  difficulty?: string;
}

/** 問題データ JSON の1件（options 形式）。変換済み（choices あり）も受け付ける */
export interface RawQuestion {
  id: string | number;
  category: string;
  middleCategory?: string;
  question: string;
  options?: string[];
  choices?: Choice[];
  answer: string;
  explanation: string;
  keyword?: string;
  syllabusRef?: string;
  role?: string;
  difficulty?: string;
}

export interface QuizProgress {
  categoryStats: Record<string, { answered: number; correct: number }>;
}

export interface QuizAppProps {
  questions: Question[];
  examId: string;
  examName: string;
}
