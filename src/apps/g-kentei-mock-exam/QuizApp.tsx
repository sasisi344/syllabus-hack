/** @jsxImportSource preact */
import { useState, useCallback, useMemo, useEffect, useRef } from 'preact/hooks';
import type { Question, ExamResult } from './types';
import { FIELD_LABELS } from './types';
import { loadProgress, recordAttempt } from './progress';

type ExamMode = 'menu' | 'exam' | 'result';

export interface QuizAppProps {
  questions: Question[];
  examId: string;
  examName: string;
  /** 模擬試験の制限時間（秒）。既定 20分 */
  timeLimitSec?: number;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const formatTime = (sec: number): string => {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
};

const buildDeepDiveAiPrompt = (examName: string, q: Question, userAnswer: string | null): string => {
  const keywordsText =
    q.keywords && q.keywords.length > 0
      ? `【解答のヒントとなるキーワード】\n${q.keywords.map((k) => `・${k}`).join('\n')}\n\n`
      : '';
  return `以下の${examName}の問題について、なぜ「${q.correctLabel}」が正解なのか、初学者にもわかるように詳しく解説してください。
${keywordsText}【問題】
${q.text}

${q.choices.map((c) => `${c.label}. ${c.text}`).join('\n')}

正解: ${q.correctLabel}
私の回答: ${userAnswer ?? '（未回答）'}`;
};

const buildGeminiDeepDiveUrl = (examName: string, q: Question, userAnswer: string | null): string =>
  `https://gemini.google.com/app?q=${encodeURIComponent(buildDeepDiveAiPrompt(examName, q, userAnswer))}`;

export default function QuizApp({ questions, examId, examName, timeLimitSec = 1200 }: QuizAppProps) {
  const [mode, setMode] = useState<ExamMode>('menu');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [remainingSec, setRemainingSec] = useState(timeLimitSec);
  const [progress, setProgress] = useState(() => loadProgress(examId));
  const [lastResult, setLastResult] = useState<ExamResult | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | undefined>(undefined);
  const examSetRef = useRef<Question[]>([]);
  const startedAtRef = useRef<number>(0);

  const scrollToTop = () => containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const finishExam = useCallback(() => {
    if (typeof window !== 'undefined') window.clearInterval(timerRef.current);
    const set = examSetRef.current;
    const fieldStats: Record<string, { answered: number; correct: number }> = {};
    let score = 0;
    for (const q of set) {
      const userAnswer = answers[q.id];
      const isCorrect = userAnswer === q.correctLabel;
      if (isCorrect) score += 1;
      if (!fieldStats[q.field]) fieldStats[q.field] = { answered: 0, correct: 0 };
      if (userAnswer) fieldStats[q.field].answered += 1;
      if (isCorrect) fieldStats[q.field].correct += 1;
    }
    const result: ExamResult = {
      score,
      total: set.length,
      fieldStats,
      durationSec: Math.round((Date.now() - startedAtRef.current) / 1000),
      completedAt: Date.now(),
    };
    const updated = recordAttempt(examId, result);
    setProgress(updated);
    setLastResult(result);
    setMode('result');
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers, examId]);

  useEffect(() => {
    if (mode !== 'exam') return;
    if (typeof window === 'undefined') return;
    timerRef.current = window.setInterval(() => {
      setRemainingSec((prev) => {
        if (prev <= 1) {
          window.clearInterval(timerRef.current);
          finishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (typeof window !== 'undefined') window.clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  const startExam = useCallback(() => {
    examSetRef.current = shuffle(questions);
    startedAtRef.current = Date.now();
    setAnswers({});
    setCurrentIndex(0);
    setRemainingSec(timeLimitSec);
    setMode('exam');
    scrollToTop();
  }, [questions, timeLimitSec]);

  const selectAnswer = useCallback((questionId: string, label: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: label }));
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const set = examSetRef.current;
      if (index < 0 || index >= set.length) return;
      setCurrentIndex(index);
      scrollToTop();
    },
    []
  );

  const activeSet = examSetRef.current;
  const activeQuestion = activeSet[currentIndex];
  const answeredCount = useMemo(() => Object.keys(answers).length, [answers]);

  // ---- MENU ----
  if (mode === 'menu') {
    return (
      <div class="quiz-app ex-app" ref={containerRef}>
        <div class="ex-menu">
          <h2 class="ex-title">{examName}</h2>
          <p class="ex-subtitle">
            全{questions.length}問 / 制限時間{formatTime(timeLimitSec)}の模擬試験形式です。回答は最後まで保持され、時間切れで自動採点されます。
          </p>

          <div class="ex-stats">
            <div class="ex-stat">
              <span class="ex-stat-num">{progress.attempts.length}</span>
              <span class="ex-stat-label">受験回数</span>
            </div>
            <div class="ex-stat">
              <span class="ex-stat-num">{progress.bestScore}</span>
              <span class="ex-stat-label">自己ベスト正解数</span>
            </div>
          </div>

          <button class="ex-start-btn" onClick={startExam}>
            🎯 模擬試験を開始する
          </button>
        </div>
      </div>
    );
  }

  // ---- EXAM ----
  if (mode === 'exam' && activeQuestion) {
    const userAnswer = answers[activeQuestion.id];
    const isLast = currentIndex === activeSet.length - 1;
    const timeWarning = remainingSec <= 60;

    return (
      <div class="quiz-app ex-app" ref={containerRef}>
        <div class="ex-header">
          <div class={`ex-timer ${timeWarning ? 'ex-timer-warn' : ''}`}>⏱ 残り {formatTime(remainingSec)}</div>
          <div class="ex-progress-text">
            {currentIndex + 1} / {activeSet.length}（回答済 {answeredCount}）
          </div>
        </div>
        <div class="ex-progress-bar">
          <div class="ex-progress-fill" style={{ width: `${((currentIndex + 1) / activeSet.length) * 100}%` }} />
        </div>

        <p class="ex-field-badge">{FIELD_LABELS[activeQuestion.field]}</p>
        <p class="ex-question">{activeQuestion.text}</p>

        <div class="ex-choices">
          {activeQuestion.choices.map((choice) => (
            <button
              key={choice.label}
              class={`ex-choice ${userAnswer === choice.label ? 'ex-choice-selected' : ''}`}
              onClick={() => selectAnswer(activeQuestion.id, choice.label)}
            >
              <span class="ex-label">{choice.label}</span>
              <span class="ex-text">{choice.text}</span>
            </button>
          ))}
        </div>

        <div class="ex-nav">
          <button class="ex-nav-btn" onClick={() => goTo(currentIndex - 1)} disabled={currentIndex === 0}>
            ← 前の問題
          </button>
          {isLast ? (
            <button class="ex-submit-btn" onClick={finishExam}>
              採点する
            </button>
          ) : (
            <button class="ex-nav-btn primary" onClick={() => goTo(currentIndex + 1)}>
              次の問題 →
            </button>
          )}
        </div>

        <button class="ex-early-submit" onClick={finishExam}>
          全問終わったので今すぐ採点する
        </button>
      </div>
    );
  }

  // ---- RESULT ----
  if (mode === 'result' && lastResult) {
    const set = examSetRef.current;
    return (
      <div class="quiz-app ex-app" ref={containerRef}>
        <div class="ex-result">
          <h2 class="ex-result-title">📊 模擬試験結果</h2>
          <div class="ex-result-score">
            <span class="ex-result-num">{lastResult.score}</span>
            <span class="ex-result-denom">/ {lastResult.total}</span>
          </div>
          <p class="ex-result-rate">
            正答率: {Math.round((lastResult.score / lastResult.total) * 100)}% ／ 所要時間:{' '}
            {formatTime(lastResult.durationSec)}
          </p>

          <div class="ex-field-breakdown">
            <h3>分野別正答率</h3>
            {Object.entries(lastResult.fieldStats).map(([field, stats]) => (
              <div key={field} class="ex-field-row">
                <span class="ex-field-row-name">{FIELD_LABELS[field as keyof typeof FIELD_LABELS] ?? field}</span>
                <span class="ex-field-row-score">
                  {stats.correct} / {stats.answered > 0 ? stats.answered : '未回答'}
                </span>
              </div>
            ))}
          </div>

          <div class="ex-wrong-list">
            <h3>間違えた問題・未回答の問題</h3>
            {set
              .filter((q) => answers[q.id] !== q.correctLabel)
              .map((q) => (
                <div key={q.id} class="ex-wrong-item">
                  <p class="ex-wrong-q">{q.text}</p>
                  <p class="ex-wrong-a">
                    あなたの回答: {answers[q.id] ?? '未回答'} → 正解: {q.correctLabel}
                  </p>
                  <p class="ex-wrong-explanation">{q.explanation}</p>
                  <a
                    href={buildGeminiDeepDiveUrl(examName, q, answers[q.id] ?? null)}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ex-ai-link"
                  >
                    🤖 AIで復習
                  </a>
                </div>
              ))}
            {lastResult.score === lastResult.total && <p class="ex-perfect">🏆 全問正解！素晴らしいです！</p>}
          </div>

          <div class="ex-result-actions">
            <button class="ex-start-btn" onClick={startExam}>
              もう一度挑戦する
            </button>
            <button class="ex-nav-btn" onClick={() => setMode('menu')}>
              メニューに戻る
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
