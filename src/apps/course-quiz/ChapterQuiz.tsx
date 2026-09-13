import { useState, useMemo } from 'preact/hooks';
import type { CourseQuestion, ChapterLink } from './types';
import { markChapterComplete, saveDiagnosisResult } from './progress';

export interface ChapterQuizProps {
  questions: CourseQuestion[];
  examId: string;
  mode: 'diagnosis' | 'chapter';
  chapterOrder?: number;
  chapterLinks?: ChapterLink[];
}

export default function ChapterQuiz({ questions, examId, mode, chapterOrder, chapterLinks }: ChapterQuizProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [graded, setGraded] = useState(false);

  const allAnswered = questions.every((q) => answers[q.id]);

  const results = useMemo(() => {
    if (!graded) return null;
    const correctIds = new Set<string>();
    const weakChapters = new Set<number>();
    for (const q of questions) {
      if (answers[q.id] === q.correctLabel) {
        correctIds.add(q.id);
      } else if (q.chapterOrder) {
        weakChapters.add(q.chapterOrder);
      }
    }
    return { correctIds, weakChapters: [...weakChapters].sort((a, b) => a - b) };
  }, [graded, questions, answers]);

  const handleSelect = (questionId: string, label: string) => {
    if (graded) return;
    setAnswers((prev) => ({ ...prev, [questionId]: label }));
  };

  const handleGrade = () => {
    if (!allAnswered) return;
    setGraded(true);

    const correctCount = questions.filter((q) => answers[q.id] === q.correctLabel).length;

    if (mode === 'chapter' && chapterOrder) {
      markChapterComplete(examId, chapterOrder);
    }
    if (mode === 'diagnosis') {
      const weak = new Set<number>();
      for (const q of questions) {
        if (answers[q.id] !== q.correctLabel && q.chapterOrder) weak.add(q.chapterOrder);
      }
      saveDiagnosisResult(examId, {
        correctCount,
        totalCount: questions.length,
        weakChapters: [...weak].sort((a, b) => a - b),
        answeredAt: Date.now(),
      });
    }
  };

  return (
    <div class="cq-root">
      {questions.map((q, idx) => (
        <div class="cq-question" key={q.id}>
          <p class="cq-question-text">
            <span class="cq-question-num">問{idx + 1}.</span> {q.text}
          </p>
          <div class="cq-choices">
            {q.choices.map((c) => {
              const selected = answers[q.id] === c.label;
              const isCorrectChoice = graded && c.label === q.correctLabel;
              const isWrongSelected = graded && selected && c.label !== q.correctLabel;
              return (
                <button
                  type="button"
                  key={c.label}
                  class={`cq-choice${selected ? ' cq-choice-selected' : ''}${isCorrectChoice ? ' cq-choice-correct' : ''}${isWrongSelected ? ' cq-choice-wrong' : ''}`}
                  disabled={graded}
                  onClick={() => handleSelect(q.id, c.label)}
                >
                  <span class="cq-choice-label">{c.label}</span>
                  <span class="cq-choice-text">{c.text}</span>
                </button>
              );
            })}
          </div>
          {graded && (
            <p class={`cq-result ${results?.correctIds.has(q.id) ? 'cq-result-ok' : 'cq-result-ng'}`}>
              {results?.correctIds.has(q.id) ? '○ 正解' : `✕ 不正解（正解: ${q.correctLabel}）`}
            </p>
          )}
        </div>
      ))}

      {!graded ? (
        <button type="button" class="cq-grade-btn" disabled={!allAnswered} onClick={handleGrade}>
          {allAnswered ? '答え合わせ' : `すべての問題に回答してください（残り${questions.length - Object.keys(answers).length}問）`}
        </button>
      ) : (
        <div class="cq-summary">
          <p class="cq-summary-score">
            {questions.filter((q) => answers[q.id] === q.correctLabel).length} / {questions.length} 問正解
          </p>
          {mode === 'diagnosis' && results && results.weakChapters.length > 0 && chapterLinks && (
            <div class="cq-weak-chapters">
              <p class="cq-weak-title">正答率が低かった章から優先的に学習しましょう:</p>
              <ul>
                {results.weakChapters.map((order) => {
                  const link = chapterLinks.find((c) => c.order === order);
                  if (!link) return null;
                  return (
                    <li key={order}>
                      <a href={link.href}>{link.title} →</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      )}

      <style>{`
        .cq-root { margin: 1.5rem 0; }
        .cq-question { margin-bottom: 1.75rem; padding: 1rem; border: 1px solid #e2e8f0; border-radius: 0.75rem; }
        .cq-question-text { font-weight: 600; margin-bottom: 0.75rem; }
        .cq-question-num { color: #6366f1; }
        .cq-choices { display: flex; flex-direction: column; gap: 0.5rem; }
        .cq-choice {
          display: flex; align-items: flex-start; gap: 0.5rem; text-align: left;
          padding: 0.6rem 0.85rem; border: 1px solid #cbd5e1; border-radius: 0.5rem;
          background: #fff; cursor: pointer; font-size: 0.95rem; width: 100%;
        }
        .cq-choice:disabled { cursor: default; }
        .cq-choice-selected { border-color: #6366f1; background: #eef2ff; }
        .cq-choice-correct { border-color: #22c55e; background: #f0fdf4; }
        .cq-choice-wrong { border-color: #ef4444; background: #fef2f2; }
        .cq-choice-label { font-weight: 700; flex-shrink: 0; }
        .cq-result { margin-top: 0.5rem; font-weight: 600; }
        .cq-result-ok { color: #16a34a; }
        .cq-result-ng { color: #dc2626; }
        .cq-grade-btn {
          width: 100%; padding: 0.85rem; border-radius: 0.5rem; border: none;
          background: #6366f1; color: #fff; font-weight: 700; cursor: pointer;
        }
        .cq-grade-btn:disabled { background: #cbd5e1; cursor: not-allowed; }
        .cq-summary { margin-top: 1rem; padding: 1rem; border-radius: 0.75rem; background: #eef2ff; }
        .cq-summary-score { font-size: 1.1rem; font-weight: 700; }
        .cq-weak-title { margin-top: 0.5rem; font-weight: 600; }
        .cq-weak-chapters ul { margin: 0.5rem 0 0; padding-left: 1.25rem; }
        .cq-weak-chapters a { color: #6366f1; text-decoration: underline; }

        html.dark .cq-question { border-color: #334155; background-color: #1e293b; }
        html.dark .cq-question-num { color: #818cf8; }
        html.dark .cq-choice { background: #0f172a; border-color: #475569; color: #e2e8f0; }
        html.dark .cq-choice-selected { border-color: #818cf8; background: #312e81; }
        html.dark .cq-choice-correct { border-color: #22c55e; background: #052e16; }
        html.dark .cq-choice-wrong { border-color: #ef4444; background: #450a0a; }
        html.dark .cq-result-ok { color: #4ade80; }
        html.dark .cq-result-ng { color: #f87171; }
        html.dark .cq-grade-btn:disabled { background: #334155; }
        html.dark .cq-summary { background: #1e1b4b; }
        html.dark .cq-weak-chapters a { color: #818cf8; }

        @media (prefers-color-scheme: dark) {
          .cq-question { border-color: #334155; background-color: #1e293b; }
          .cq-question-num { color: #818cf8; }
          .cq-choice { background: #0f172a; border-color: #475569; color: #e2e8f0; }
          .cq-choice-selected { border-color: #818cf8; background: #312e81; }
          .cq-choice-correct { border-color: #22c55e; background: #052e16; }
          .cq-choice-wrong { border-color: #ef4444; background: #450a0a; }
          .cq-result-ok { color: #4ade80; }
          .cq-result-ng { color: #f87171; }
          .cq-grade-btn:disabled { background: #334155; }
          .cq-summary { background: #1e1b4b; }
          .cq-weak-chapters a { color: #818cf8; }
        }
      `}</style>
    </div>
  );
}
