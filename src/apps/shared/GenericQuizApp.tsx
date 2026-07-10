/** @jsxImportSource preact */
import { useState, useCallback, useMemo, useEffect, useRef } from 'preact/hooks';

export interface GenericChoice {
  label: string;
  text: string;
}

export interface GenericQuestion {
  id: string;
  examId: string;
  field: string;
  subField?: string;
  text: string;
  choices: GenericChoice[];
  correctLabel: string;
  explanation: string;
  keywords?: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface GenericAnswerRecord {
  questionId: string;
  selectedLabel: string;
  isCorrect: boolean;
  answeredAt: number;
}

export interface GenericUserProgress {
  totalAnswered: number;
  totalCorrect: number;
  fieldStats: Record<string, { answered: number; correct: number }>;
  history: GenericAnswerRecord[];
  lastUpdated: number;
}

type QuizMode = 'menu' | 'drill' | 'result';

export interface GenericQuizAppProps {
  questions: GenericQuestion[];
  examId: string;
  examName: string;
  /** field(value) -> 表示ラベル。単一分野のみのドリルは1エントリでOK */
  fieldLabels: Record<string, string>;
  /** シャッフル出題時の1セットあたりの問題数（既定10） */
  drillSize?: number;
}

const STORAGE_KEY_PREFIX = 'sh_quiz_';

const createDefaultProgress = (): GenericUserProgress => ({
  totalAnswered: 0,
  totalCorrect: 0,
  fieldStats: {},
  history: [],
  lastUpdated: Date.now(),
});

export const loadProgress = (examId: string): GenericUserProgress => {
  if (typeof window === 'undefined') return createDefaultProgress();
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}${examId}`);
    if (!raw) return createDefaultProgress();
    return JSON.parse(raw) as GenericUserProgress;
  } catch {
    return createDefaultProgress();
  }
};

export const saveProgress = (examId: string, progress: GenericUserProgress): void => {
  if (typeof window === 'undefined') return;
  try {
    progress.lastUpdated = Date.now();
    localStorage.setItem(`${STORAGE_KEY_PREFIX}${examId}`, JSON.stringify(progress));
  } catch {
    // Storage full — ignore silently
  }
};

export const recordAnswer = (
  examId: string,
  questionId: string,
  selectedLabel: string,
  correctLabel: string,
  field: string
): GenericUserProgress => {
  const progress = loadProgress(examId);
  const isCorrect = selectedLabel === correctLabel;

  const record: GenericAnswerRecord = {
    questionId,
    selectedLabel,
    isCorrect,
    answeredAt: Date.now(),
  };

  progress.totalAnswered += 1;
  if (isCorrect) progress.totalCorrect += 1;

  if (!progress.fieldStats[field]) {
    progress.fieldStats[field] = { answered: 0, correct: 0 };
  }
  progress.fieldStats[field].answered += 1;
  if (isCorrect) progress.fieldStats[field].correct += 1;

  progress.history = [record, ...progress.history].slice(0, 100);

  saveProgress(examId, progress);
  return progress;
};

const getFieldAccuracy = (progress: GenericUserProgress, field: string): number => {
  const stats = progress.fieldStats[field];
  if (!stats || stats.answered === 0) return 0;
  return Math.round((stats.correct / stats.answered) * 100);
};

const getWeakestField = (progress: GenericUserProgress): string | null => {
  let weakest: string | null = null;
  let lowestAccuracy = 101;
  for (const [field, stats] of Object.entries(progress.fieldStats)) {
    if (stats.answered < 1) continue;
    const accuracy = (stats.correct / stats.answered) * 100;
    if (accuracy < lowestAccuracy) {
      lowestAccuracy = accuracy;
      weakest = field;
    }
  }
  return weakest;
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const buildDeepDiveAiPrompt = (examName: string, q: GenericQuestion, userAnswer: string): string => {
  const keywordsText =
    q.keywords && q.keywords.length > 0
      ? `【解答のヒントとなるキーワード】\n${q.keywords.map((k) => `・${k}`).join('\n')}\n\n`
      : '';

  return `以下の${examName}の問題について、なぜ「${q.correctLabel}」が正解なのか、初学者にもわかるように詳しく解説してください。
解説では、各選択肢が「なぜ正しいのか」または「なぜ誤りなのか」を、上記の関連キーワードの意味も交えて丁寧に説明してください。

${keywordsText}【問題】
${q.text}

${q.choices.map((c) => `${c.label}. ${c.text}`).join('\n')}

正解: ${q.correctLabel}
私の回答: ${userAnswer}`;
};

const buildGeminiDeepDiveUrl = (examName: string, q: GenericQuestion, userAnswer: string): string =>
  `https://gemini.google.com/app?q=${encodeURIComponent(buildDeepDiveAiPrompt(examName, q, userAnswer))}`;

async function copyPromptToClipboard(text: string): Promise<boolean> {
  if (typeof window === 'undefined') return false;
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // fall through to legacy
    }
  }
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

/**
 * 分野の型が固定されていない汎用クイズ基盤。
 * BaseQuizApp（it-passport系専用、ExamField固定）とは独立しており、
 * 単一〜少数分野の単発ドリルアプリ（簿記・宅建・FP等）向け。
 */
export default function GenericQuizApp({ questions, examId, examName, fieldLabels, drillSize = 10 }: GenericQuizAppProps) {
  const [mode, setMode] = useState<QuizMode>('menu');
  const [currentField, setCurrentField] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [activeSet, setActiveSet] = useState<GenericQuestion[]>([]);
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

  const activeQuestion = activeSet[currentIndex];
  const weakest = useMemo(() => getWeakestField(progress), [progress]);
  const correctCount = useMemo(
    () => activeSet.filter((q) => answers[q.id] === q.correctLabel).length,
    [activeSet, answers]
  );

  const startDrill = useCallback(
    (field: string | null) => {
      const pool = field ? questions.filter((q) => q.field === field) : questions;
      setCurrentField(field);
      setActiveSet(shuffle(pool).slice(0, drillSize));
      setCurrentIndex(0);
      setAnswers({});
      setMode('drill');
      scrollToTop();
    },
    [questions, drillSize]
  );

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
    if (currentIndex < activeSet.length - 1) {
      setCurrentIndex((i) => i + 1);
      scrollToTop();
    } else {
      setMode('result');
      scrollToTop();
    }
  }, [currentIndex, activeSet]);

  const flashCopyFeedback = useCallback((ok: boolean) => {
    if (typeof window === 'undefined') return;
    window.clearTimeout(copyFeedbackTimerRef.current);
    setCopyFeedback(ok ? 'ok' : 'err');
    copyFeedbackTimerRef.current = window.setTimeout(() => setCopyFeedback('idle'), 2000);
  }, []);

  const handleCopyPrompt = useCallback(
    async (q: GenericQuestion, userAnswer: string) => {
      const ok = await copyPromptToClipboard(buildDeepDiveAiPrompt(examName, q, userAnswer));
      flashCopyFeedback(ok);
    },
    [examName, flashCopyFeedback]
  );

  const fields = Object.keys(fieldLabels);

  // ---- MENU ----
  if (mode === 'menu') {
    return (
      <div class="quiz-app" ref={containerRef}>
        <div class="qa-menu">
          <h2 class="qa-title">{examName}</h2>
          <p class="qa-subtitle">分野を選んでドリルを開始</p>

          <button class="qa-btn full" onClick={() => startDrill(null)}>
            <span class="icon">🎲</span> 全問シャッフル（{Math.min(drillSize, questions.length)}問）
          </button>

          {fields.length > 1 && (
            <div class="qa-grid">
              {fields.map((field) => {
                const count = questions.filter((q) => q.field === field).length;
                if (count === 0) return null;
                const accuracy = getFieldAccuracy(progress, field);
                return (
                  <button
                    key={field}
                    class={`qa-btn ${weakest === field ? 'qa-weak' : ''}`}
                    onClick={() => startDrill(field)}
                  >
                    <span class="qa-field-name">{fieldLabels[field]}</span>
                    <span class="qa-field-meta">
                      {count}問 / 正答率 {accuracy}%
                    </span>
                    {weakest === field && <span class="qa-weak-badge">苦手</span>}
                  </button>
                );
              })}
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
                  <span class="qa-stat-num">{fieldLabels[weakest] ?? weakest}</span>
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
            <div class="qa-progress-fill" style={{ width: `${((currentIndex + 1) / activeSet.length) * 100}%` }} />
          </div>
          <div class="qa-progress-text">
            {currentIndex + 1} / {activeSet.length}
          </div>

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
                  {currentIndex < activeSet.length - 1 ? '次の問題 →' : '結果を見る'}
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
            <span class="qa-result-denom">/ {activeSet.length}</span>
          </div>
          <p class="qa-result-rate">正答率: {Math.round((correctCount / activeSet.length) * 100)}%</p>
          {copyFeedback === 'ok' && <p class="qa-copy-banner qa-copy-banner-ok">コピーしました</p>}
          {copyFeedback === 'err' && <p class="qa-copy-banner qa-copy-banner-err">コピーできませんでした</p>}

          <div class="qa-wrong-list">
            <h3>間違えた問題</h3>
            {activeSet
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
            {correctCount === activeSet.length && <p class="qa-perfect">🏆 全問正解！素晴らしいです！</p>}
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
