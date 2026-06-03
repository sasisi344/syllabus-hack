/** @jsxImportSource preact */
import BaseQuizApp from '../shared/BaseQuizApp';
import type { QuizAppProps } from './types';

export default function QuizApp({ questions, examId, examName }: QuizAppProps) {
  return (
    <BaseQuizApp
      questions={questions}
      examId={examId}
      examName={examName}
      mockTest={{
        label: '本番形式 模擬試験 (80問)',
        badgeLabel: '科目A対策',
        counts: { technology: 50, strategy: 20, management: 10 },
      }}
      quickTestCounts={{ technology: 5, strategy: 3, management: 2 }}
    />
  );
}
