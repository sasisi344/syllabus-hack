/** @jsxImportSource preact */
import { useState, useCallback, useMemo, useEffect, useRef } from 'preact/hooks';
import type { Question, ExamField } from '../it-passport-quiz/types';
import { FIELD_LABELS } from '../it-passport-quiz/types';
import { recordAnswer, loadProgress, getFieldAccuracy, getWeakestField } from '../it-passport-quiz/progress';
import { buildDeepDiveAiPrompt, buildGeminiDeepDiveUrl, copyPromptToClipboard } from '../it-passport-quiz/aiPrompt';

type QuizMode = 'menu' | 'drill' | 'result';

/** Mock test configuration (e.g. AP's 80-question full test) */
export interface MockTestConfig {
  label: string;
  badgeLabel?: string;
  counts: Record<string, number>;
}

export interface BaseQuizAppProps {
  /** Pre-loaded questions. If omitted, fetched from /data/questions-{examId}.json */
  questions?: Question[];
  examId: string;
  examName: string;
  /** Optional full-length mock test (AP-specific) */
  mockTest?: MockTestConfig;
  /** Quick test (10-question) field ratios */
  quickTestCounts?: Record<string, number>;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickByFieldCounts(questions: Question[], counts: Record<string, number>): Question[] {
  const result: Question[] = [];
  for (const [field, count] of Object.entries(counts)) {
    const pool =
      field === 'technology'
        ? questions.filter((q) => q.field === 'technology' || q.field === 'generative-ai')
        : questions.filter((q) => q.field === field);
    result.push(...shuffle(pool).slice(0, count));
  }
  return shuffle(result);
}

export default function BaseQuizApp({
  questions: questionsProp,
  examId,
  examName,
  mockTest,
  quickTestCounts,
}: BaseQuizAppProps) {
  const [questions, setQuestions] = useState<Question[]>(questionsProp ?? []);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    if (questionsProp && questionsProp.length > 0) return;
    fetch(`/data/questions-${examId}.json`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data: Question[]) => setQuestions(data))
      .catch(() => setLoadError(true));
  }, [examId, questionsProp]);

  if (loadError) {
    return (
      <div class="quiz-app">
        <p style={{ textAlign: 'center', padding: '2rem' }}>
          問題の読み込みに失敗しました。ページを再読み込みしてください。
        </p>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div class="quiz-app">
        <p style={{ textAlign: 'center', padding: '2rem' }}>読み込み中…</p>
      </div>
    );
  }

  const defaultQuickCounts: Record<string, number> =
    examId === 'sg' || examId === 'fe'
      ? { strategy: 2, management: 2, technology: 3, practical: 3 }
      : { strategy: 3, management: 2, technology: 5 };

  const resolvedQuickCounts = quickTestCounts ?? defaultQuickCounts;

  const [mode, setMode] = useState<QuizMode>('menu');
  const [currentField, setCurrentField] = useState<ExamField | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [progress, setProgress] = useState(() => loadProgress(examId));
  const [copyFeedback, setCopyFeedback] = useState<'idle' | 'ok' | 'err'>('idle');

  const containerRef = useRef<HTMLDivElement>(null);
  const copyFeedbackTimerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined') window.clearTimeout(copyFeedbackTimerRef.current);
    };
  }, []);

  const scrollToTop = () => {
    containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const drillQuestions = useMemo(() => {
    if (!currentField) return [];
    return shuffle(questions.filter((q) => q.field === currentField)).slice(0, 10);
  }, [currentField, questions]);

  const activeQuestions = currentField ? drillQuestions : allQuestions;
  const activeQuestion = activeQuestions[currentIndex];
  const weakest = useMemo(() => getWeakestField(progress), [progress]);
  const correctCount = useMemo(
    () => activeQuestions.filter((q) => answers[q.id] === q.correctLabel).length,
    [activeQuestions, answers]
  );

  const startDrill = useCallback((field: ExamField) => {
    setCurrentField(field);
    setCurrentIndex(0);
    setAnswers({});
    setMode('drill');
    scrollToTop();
  }, []);

  const startQuick = useCallback(() => {
    setAllQuestions(pickByFieldCounts(questions, resolvedQuickCounts));
    setCurrentField(null);
    setCurrentIndex(0);
    setAnswers({});
    setMode('drill');
    scrollToTop();
  }, [questions, resolvedQuickCounts]);

  const startMock = useCallback(() => {
    if (!mockTest) return;
    setAllQuestions(pickByFieldCounts(questions, mockTest.counts));
    setCurrentField(null);
    setCurrentIndex(0);
    setAnswers({});
    setMode('drill');
    scrollToTop();
  }, [questions, mockTest]);

  const handleAnswer = useCallback(
    (label: string) => {
      if (!activeQuestion) return;
      setAnswers((prev) => ({ ...prev, [activeQuestion.id]: label }));
      const updated = recordAnswer(examId, activeQuestion.id, label, activeQuestion.correctLabel, activeQuestion.field);
      setProgress(updated);
    },
    [activeQuestion, examId]
  );

  const goNext = useCallback(() => {
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex((i) => i + 1);
      scrollToTop();
    } else {
      setMode('result');
      scrollToTop();
    }
  }, [currentIndex, activeQuestions]);

  const flashCopyFeedback = useCallback((ok: boolean) => {
    if (typeof window === 'undefined') return;
    window.clearTimeout(copyFeedbackTimerRef.current);
    setCopyFeedback(ok ? 'ok' : 'err');
    copyFeedbackTimerRef.current = window.setTimeout(() => setCopyFeedback('idle'), 2000);
  }, []);

  const handleCopyPrompt = useCallback(
    async (q: Question, userAnswer: string) => {
      const ok = await copyPromptToClipboard(buildDeepDiveAiPrompt(examName, q, userAnswer));
      flashCopyFeedback(ok);
    },
    [examName, flashCopyFeedback]
  );

  // ---- MENU ----
  if (mode === 'menu') {
    return (
      <div class="quiz-app" ref={containerRef}>
        <div class="qa-menu">
          <h2 class="qa-title">
            {examName}
            {mockTest?.badgeLabel && <span class="badge">{mockTest.badgeLabel}</span>}
          </h2>
          <p class="qa-subtitle">分野を選んでドリルを開始</p>

          {mockTest && (
            <div class="qa-main-actions">
              <button class="qa-btn primary full" onClick={startMock}>
                <span class="icon">🏆</span> {mockTest.label}
              </button>
            </div>
          )}

          <button class="qa-btn full" onClick={startQuick}>
            <span class="icon">🎲</span> 全分野シャッフル (10問)
          </button>

          <div class="qa-grid">
            {(Object.keys(FIELD_LABELS) as ExamField[])
              .filter((f) => f !== 'generative-ai')
              .map((field) => {
                const count = questions.filter((q) => q.field === field).length;
                if (count === 0) return null;
                const accuracy = getFieldAccuracy(progress, field);
                return (
                  <button
                    key={field}
                    class={`qa-btn ${weakest === field ? 'qa-weak' : ''}`}
                    onClick={() => startDrill(field)}
                  >
                    <span class="qa-field-name">{FIELD_LABELS[field]}</span>
                    <span class="qa-field-meta">{count}問 / 正答率 {accuracy}%</span>
                    {weakest === field && <span class="qa-weak-badge">苦手</span>}
                  </button>
                );
              })}
          </div>

          {questions.some((q) => q.field === 'generative-ai') && (
            <div class="qa-special-menu">
              <button class="qa-btn primary" onClick={() => startDrill('generative-ai')}>
                <span class="icon">🤖</span> {FIELD_LABELS['generative-ai']} (特訓)
              </button>
            </div>
          )}

          <div class="qa-stats">
            <h3>これまでの成績</h3>
            <div class="qa-row">
              <div class="qa-stat">
                <span class="qa-stat-num">{progress.totalAnswered}</span>
                <span class="qa-stat-label">回答数</span>
              </div>
              <div class="qa-stat">
                <span class="qa-stat-num">
                  {progress.totalAnswered > 0 ? Math.round((progress.totalCorrect / progress.totalAnswered) * 100) : 0}%
                </span>
                <span class="qa-stat-label">正答率</span>
              </div>
              {weakest && (
                <div class="qa-stat qa-stat-weak">
                  <span class="qa-stat-num">{FIELD_LABELS[weakest]}</span>
                  <span class="qa-stat-label">苦手分野</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---- DRILL ----
  if (mode === 'drill' && activeQuestion) {
    const userAnswer = answers[activeQuestion.id];
    const isAnswered = !!userAnswer;
    const isCorrect = userAnswer === activeQuestion.correctLabel;

    return (
      <div class="quiz-app" ref={containerRef}>
        <div class="qa-content">
          <div class="qa-progress-bar">
            <div
              class="qa-progress-fill"
              style={{ width: `${((currentIndex + 1) / activeQuestions.length) * 100}%` }}
            />
          </div>
          <div class="qa-progress-text">
            {currentIndex + 1} / {activeQuestions.length}
          </div>

          {activeQuestion.scenario && (
            <div class="qa-scenario">
              {activeQuestion.scenario.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          )}

          <p class="qa-question">{activeQuestion.text}</p>

          <div class="qa-choices">
            {activeQuestion.choices.map((choice) => {
              let cls = 'qa-choice';
              if (isAnswered) {
                if (choice.label === activeQuestion.correctLabel) cls += ' qa-correct';
                else if (choice.label === userAnswer) cls += ' qa-wrong';
                else cls += ' qa-dimmed';
              }
              return (
                <button key={choice.label} class={cls} onClick={() => handleAnswer(choice.label)} disabled={isAnswered}>
                  <span class="qa-label">{choice.label}</span>
                  <span class="qa-text">{choice.text}</span>
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div class={`qa-feedback ${isCorrect ? 'qa-fb-correct' : 'qa-fb-wrong'}`}>
              <strong>{isCorrect ? '✅ 正解！' : `❌ 不正解… 正解は「${activeQuestion.correctLabel}」`}</strong>
              <p>{activeQuestion.explanation}</p>
              <div class="qa-feedback-actions">
                <button
                  type="button"
                  class="qa-copy-prompt-btn"
                  onClick={() => handleCopyPrompt(activeQuestion, userAnswer)}
                >
                  📋 深掘りプロンプトをコピー
                </button>
                {copyFeedback === 'ok' && <span class="qa-copy-feedback qa-copy-feedback-ok">コピーしました</span>}
                {copyFeedback === 'err' && (
                  <span class="qa-copy-feedback qa-copy-feedback-err">コピーできませんでした</span>
                )}
                <a
                  href={buildGeminiDeepDiveUrl(examName, activeQuestion, userAnswer)}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="qa-ai-link"
                >
                  🤖 AIにもっと詳しく聞く
                </a>
                <button class="qa-next-btn" onClick={goNext}>
                  {currentIndex < activeQuestions.length - 1 ? '次の問題 →' : '結果を見る'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ---- RESULT ----
  if (mode === 'result') {
    return (
      <div class="quiz-app" ref={containerRef}>
        <div class="qa-result">
          <h2 class="qa-result-title">📊 結果発表</h2>
          <div class="qa-result-score">
            <span class="qa-result-num">{correctCount}</span>
            <span class="qa-result-denom">/ {activeQuestions.length}</span>
          </div>
          <p class="qa-result-rate">正答率: {Math.round((correctCount / activeQuestions.length) * 100)}%</p>
          {copyFeedback === 'ok' && <p class="qa-copy-banner qa-copy-banner-ok">コピーしました</p>}
          {copyFeedback === 'err' && <p class="qa-copy-banner qa-copy-banner-err">コピーできませんでした</p>}

          <div class="qa-wrong-list">
            <h3>間違えた問題</h3>
            {activeQuestions
              .filter((q) => answers[q.id] !== q.correctLabel)
              .map((q) => (
                <div key={q.id} class="qa-wrong-item">
                  <p class="qa-wrong-q">{q.text}</p>
                  <p class="qa-wrong-a">
                    あなたの回答: {answers[q.id]} → 正解: {q.correctLabel}
                  </p>
                  <div class="qa-wrong-actions">
                    <button
                      type="button"
                      class="qa-copy-prompt-btn sm"
                      onClick={() => handleCopyPrompt(q, answers[q.id])}
                    >
                      📋 プロンプトをコピー
                    </button>
                    <a
                      href={buildGeminiDeepDiveUrl(examName, q, answers[q.id])}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="qa-ai-link-sm"
                    >
                      🤖 AIで復習
                    </a>
                  </div>
                </div>
              ))}
            {correctCount === activeQuestions.length && <p class="qa-perfect">🏆 全問正解！素晴らしいです！</p>}
          </div>

          <button class="qa-back-btn" onClick={() => setMode('menu')}>
            メニューに戻る
          </button>
        </div>
      </div>
    );
  }

  return null;
}
