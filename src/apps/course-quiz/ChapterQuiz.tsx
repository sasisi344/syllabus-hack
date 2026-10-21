import { useState, useMemo } from 'preact/hooks';
import type { CourseQuestion, ChapterLink, LearningRoute } from './types';
import { loadCourseProgress, markChapterComplete, saveDiagnosisResult } from './progress';
import { getLearningRoute, getWeakChapters } from './route';
import { trackEvent } from '~/utils/ga';

export interface ChapterQuizProps {
  questions: CourseQuestion[];
  examId: string;
  /** review = 総復習。苦手章は表示するが、診断結果の保存とルート判定は行わない */
  mode: 'diagnosis' | 'chapter' | 'review';
  chapterOrder?: number;
  chapterLinks?: ChapterLink[];
  /** 演習ルートで案内するCBT模擬試験のURL（無いコースでは汎用文言になる） */
  mockExamHref?: string;
}

const ROUTE_LABELS: Record<LearningRoute, string> = {
  practice: '演習ルート',
  focus: '重点ルート',
  basic: '基礎ルート',
};

export default function ChapterQuiz({ questions, examId, mode, chapterOrder, chapterLinks, mockExamHref }: ChapterQuizProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [graded, setGraded] = useState(false);
  const [started, setStarted] = useState(false);

  const allAnswered = questions.every((q) => answers[q.id]);

  const results = useMemo(() => {
    if (!graded) return null;
    const correctIds = new Set(questions.filter((q) => answers[q.id] === q.correctLabel).map((q) => q.id));
    return {
      correctIds,
      weakChapters: getWeakChapters(questions, answers),
      route: getLearningRoute(correctIds.size, questions.length),
    };
  }, [graded, questions, answers]);

  const handleSelect = (questionId: string, label: string) => {
    if (graded) return;
    if (!started) {
      setStarted(true);
      trackEvent('quiz_start', { course_id: examId, quiz_mode: mode, chapter_order: chapterOrder });
    }
    setAnswers((prev) => ({ ...prev, [questionId]: label }));
  };

  const handleGrade = () => {
    if (!allAnswered) return;
    setGraded(true);

    const correctCount = questions.filter((q) => answers[q.id] === q.correctLabel).length;

    trackEvent('quiz_complete', {
      course_id: examId,
      quiz_mode: mode,
      chapter_order: chapterOrder,
      correct_count: correctCount,
      total_count: questions.length,
    });

    if (mode === 'chapter' && chapterOrder) {
      const wasDone = loadCourseProgress(examId).completedChapters.includes(chapterOrder);
      const progress = markChapterComplete(examId, chapterOrder);
      if (!wasDone) {
        trackEvent('chapter_complete', { course_id: examId, chapter_order: chapterOrder });
        // 総章数は CourseLayout が data-course-total-chapters で埋め込む（MDX側のprops追加を避けるため）
        const total = Number(document.querySelector('[data-course-total-chapters]')?.getAttribute('data-course-total-chapters'));
        if (total > 0 && progress.completedChapters.length >= total) {
          trackEvent('course_complete', { course_id: examId, total_chapters: total });
        }
      }
    }
    if (mode === 'diagnosis') {
      const route = getLearningRoute(correctCount, questions.length);
      saveDiagnosisResult(examId, {
        correctCount,
        totalCount: questions.length,
        weakChapters: getWeakChapters(questions, answers),
        route,
        answeredAt: Date.now(),
      });
      trackEvent('route_assigned', {
        course_id: examId,
        route,
        correct_count: correctCount,
        total_count: questions.length,
      });
    }
  };

  const weakChapterList = (title: string) =>
    results && results.weakChapters.length > 0 && chapterLinks ? (
      <div class="cq-weak-chapters">
        <p class="cq-weak-title">{title}</p>
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
    ) : null;

  const firstChapter = chapterLinks?.find((c) => c.order === 1);

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
          {mode === 'diagnosis' && results && (
            <div class="cq-route">
              <p class="cq-route-label">
                あなたの入口: <strong>{ROUTE_LABELS[results.route]}</strong>
              </p>
              {results.route === 'practice' && (
                <>
                  <p>
                    基礎はできています。まず
                    {mockExamHref ? <a href={mockExamHref}>CBT模擬試験</a> : '過去問や模擬試験'}
                    を1回通しで解き、落とした分野の章だけを読みましょう。診断はシラバスの一部しか測れないため、全問正解でも模擬試験での確認をおすすめします。
                  </p>
                  {weakChapterList('今回の診断で落とした章:')}
                </>
              )}
              {results.route === 'focus' && (
                <>
                  <p>
                    苦手な章から順に学び、得意な章は本文を読み飛ばして章末チェックだけ解いて確認しましょう。間違えたら該当の節に戻れば十分です。
                  </p>
                  {weakChapterList('優先して学ぶ章（苦手な順）:')}
                </>
              )}
              {results.route === 'basic' && (
                <p>
                  第1章から順に進めましょう。各章で「読む→章末チェック→間違えた節を読み直す」を繰り返すのが、いちばん確実な近道です。
                  {firstChapter && (
                    <>
                      {' '}
                      <a href={firstChapter.href}>{firstChapter.title}から始める →</a>
                    </>
                  )}
                </p>
              )}
            </div>
          )}
          {mode === 'review' && weakChapterList('正答率が低かった章を復習しましょう:')}
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
        .cq-route { margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid #c7d2fe; }
        .cq-route p { margin-top: 0.5rem; }
        .cq-route-label { font-size: 1.05rem; }
        .cq-route a { color: #6366f1; text-decoration: underline; }

        html.dark .cq-route { border-top-color: #3730a3; }
        html.dark .cq-route a { color: #818cf8; }
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
          .cq-route { border-top-color: #3730a3; }
          .cq-route a { color: #818cf8; }
        }
      `}</style>
    </div>
  );
}
