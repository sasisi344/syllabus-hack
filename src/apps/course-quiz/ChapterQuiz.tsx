import { useState, useMemo, useEffect } from 'preact/hooks';
import type { CourseQuestion, ChapterLink, ChapterScores, DiagnosisResult, LearningRoute } from './types';
import { loadCourseProgress, markChapterComplete, saveDiagnosisResult } from './progress';
import { getChapterScores, getLearningRoute, getWeakChapters } from './route';
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

const percent = (correct: number, total: number) => (total > 0 ? Math.round((correct / total) * 100) : 0);

const formatDate = (ts: number) => {
  const d = new Date(ts);
  return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
};

export default function ChapterQuiz({
  questions,
  examId,
  mode,
  chapterOrder,
  chapterLinks,
  mockExamHref,
}: ChapterQuizProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [graded, setGraded] = useState(false);
  const [started, setStarted] = useState(false);
  // 前回の診断結果（コースTOPに戻ってきた読者に、決まったルートを再表示する）
  const [savedDiagnosis, setSavedDiagnosis] = useState<DiagnosisResult | null>(null);

  useEffect(() => {
    if (mode !== 'diagnosis') return;
    const saved = loadCourseProgress(examId).diagnosisResult;
    if (saved?.route) setSavedDiagnosis(saved);
  }, [examId, mode]);

  const allAnswered = questions.every((q) => answers[q.id]);

  const results = useMemo(() => {
    if (!graded) return null;
    const correctIds = new Set(questions.filter((q) => answers[q.id] === q.correctLabel).map((q) => q.id));
    return {
      correctIds,
      weakChapters: getWeakChapters(questions, answers),
      chapterScores: getChapterScores(questions, answers),
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
        const total = Number(
          document.querySelector('[data-course-total-chapters]')?.getAttribute('data-course-total-chapters')
        );
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
        chapterScores: getChapterScores(questions, answers),
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

  const weakChapterList = (title: string, chapters: number[] | undefined = results?.weakChapters) =>
    chapters && chapters.length > 0 && chapterLinks ? (
      <div class="cq-weak-chapters">
        <p class="cq-weak-title">{title}</p>
        <ul>
          {chapters.map((order) => {
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

  // 章別正答率の表（テンプレート §2: 結果画面に全体・章別の正答率とルートを出す）
  const chapterScoreTable = (scores: ChapterScores, weak: number[]) => {
    const orders = Object.keys(scores)
      .map(Number)
      .sort((a, b) => a - b);
    if (orders.length === 0) return null;
    return (
      <table class="cq-score-table">
        <thead>
          <tr>
            <th>章</th>
            <th>正解</th>
            <th>判定</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            const sc = scores[order];
            const link = chapterLinks?.find((c) => c.order === order);
            const isWeak = weak.includes(order);
            return (
              <tr key={order} class={isWeak ? 'cq-score-weak' : ''}>
                <td>{link ? <a href={link.href}>{link.title}</a> : `第${order}章`}</td>
                <td>
                  {sc.correct} / {sc.total}
                </td>
                <td>{isWeak ? '重点章' : 'OK'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  if (questions.length === 0) {
    return (
      <div class="cq-root">
        <p class="cq-empty">問題を準備中です。</p>
        <style>{`.cq-empty { padding: 1rem; border: 1px dashed #cbd5e1; border-radius: 0.75rem; color: #64748b; }`}</style>
      </div>
    );
  }

  return (
    <div class="cq-root">
      {mode === 'diagnosis' && savedDiagnosis?.route && !graded && (
        <div class="cq-saved">
          <p>
            前回の診断（{formatDate(savedDiagnosis.answeredAt)}）: <strong>{ROUTE_LABELS[savedDiagnosis.route]}</strong>
            ・正答率 {percent(savedDiagnosis.correctCount, savedDiagnosis.totalCount)}%
          </p>
          {savedDiagnosis.route !== 'basic' && weakChapterList('重点章:', savedDiagnosis.weakChapters)}
          <p class="cq-saved-note">もう一度解くと、結果は新しいものに置き換わります。</p>
        </div>
      )}
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
          {allAnswered
            ? '答え合わせ'
            : `すべての問題に回答してください（残り${questions.length - Object.keys(answers).length}問）`}
        </button>
      ) : (
        <div class="cq-summary">
          <p class="cq-summary-score">
            {questions.filter((q) => answers[q.id] === q.correctLabel).length} / {questions.length} 問正解
          </p>
          {mode === 'diagnosis' && results && (
            <p class="cq-summary-rate">全体正答率 {percent(results.correctIds.size, questions.length)}%</p>
          )}
          {mode === 'diagnosis' && results && chapterScoreTable(results.chapterScores, results.weakChapters)}
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
                  {results.weakChapters.length > 0 ? (
                    weakChapterList('優先して学ぶ章（苦手な順）:')
                  ) : (
                    <p>
                      半数以上を間違えた章はありませんでした。章の順に、章末チェックから解いて確かめていきましょう。
                    </p>
                  )}
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
              <p class="cq-route-note">
                試験まで時間がないときは、正答率にかかわらず演習ルート（模擬試験で落とした分野の章だけ読む）がおすすめです。
              </p>
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
        .cq-route-note { font-size: 0.875rem; color: #475569; }
        .cq-summary-rate { margin-top: 0.25rem; font-weight: 600; }
        .cq-score-table { width: 100%; margin-top: 0.75rem; border-collapse: collapse; font-size: 0.9rem; }
        .cq-score-table th, .cq-score-table td { padding: 0.35rem 0.5rem; border-bottom: 1px solid #c7d2fe; text-align: left; }
        .cq-score-table a { color: #6366f1; text-decoration: underline; }
        .cq-score-weak td { font-weight: 700; color: #b91c1c; }
        .cq-saved { margin-bottom: 1.25rem; padding: 0.85rem 1rem; border-radius: 0.75rem; border: 1px solid #c7d2fe; background: #f8fafc; }
        .cq-saved a { color: #6366f1; text-decoration: underline; }
        .cq-saved-note { margin-top: 0.4rem; font-size: 0.85rem; color: #64748b; }
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
        html.dark .cq-route-note { color: #94a3b8; }
        html.dark .cq-score-table th, html.dark .cq-score-table td { border-bottom-color: #3730a3; }
        html.dark .cq-score-table a, html.dark .cq-saved a { color: #818cf8; }
        html.dark .cq-score-weak td { color: #f87171; }
        html.dark .cq-saved { background: #0f172a; border-color: #3730a3; }
        html.dark .cq-saved-note { color: #94a3b8; }

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
          .cq-route-note { color: #94a3b8; }
          .cq-score-table th, .cq-score-table td { border-bottom-color: #3730a3; }
          .cq-score-table a, .cq-saved a { color: #818cf8; }
          .cq-score-weak td { color: #f87171; }
          .cq-saved { background: #0f172a; border-color: #3730a3; }
          .cq-saved-note { color: #94a3b8; }
        }
      `}</style>
    </div>
  );
}
