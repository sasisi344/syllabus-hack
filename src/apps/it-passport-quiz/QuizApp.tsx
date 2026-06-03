/** @jsxImportSource preact */
import BaseQuizApp from '../shared/BaseQuizApp';
import type { QuizAppProps } from './types';

export default function QuizApp({ questions, examId, examName }: QuizAppProps) {
  return <BaseQuizApp questions={questions} examId={examId} examName={examName} />;
}
