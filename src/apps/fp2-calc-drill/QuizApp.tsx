/** @jsxImportSource preact */
import GenericQuizApp from '../shared/GenericQuizApp';
import type { GenericQuestion } from '../shared/GenericQuizApp';
import { FIELD_LABELS } from './types';

export interface QuizAppProps {
  questions: GenericQuestion[];
  examId: string;
  examName: string;
}

export default function QuizApp({ questions, examId, examName }: QuizAppProps) {
  return (
    <GenericQuizApp questions={questions} examId={examId} examName={examName} fieldLabels={FIELD_LABELS} drillSize={9} />
  );
}
