/** @jsxImportSource preact */
import { useState, useCallback, useMemo, useRef, useEffect } from 'preact/hooks';
import type { Question, DailyQuizProps } from './types';
import { buildDeepDiveAiPrompt, buildGeminiDeepDiveUrl, copyPromptToClipboard } from './aiPrompt';

/**
 * DailyQuiz — 「今日の1問」コンポーネント
 * トップページに埋め込む、1問だけの即時判定クイズ
 */
export default function DailyQuiz({ questions }: DailyQuizProps) {
  // 日付シードでランダムに1問選ぶ
  const todayQuestion: Question = useMemo(() => {
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const index = seed % questions.length;
    return questions[index];
  }, [questions]);

  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState<'idle' | 'ok' | 'err'>('idle');
  const copyFeedbackTimerRef = useRef<number | undefined>(undefined);
  const DAILY_EXAM_NAME = 'ITパスポート試験';

  const handleSelect = useCallback(
    (label: string) => {
      if (revealed) return;
      setSelected(label);
      setRevealed(true);
    },
    [revealed]
  );

  const isCorrect = selected === todayQuestion.correctLabel;

  const geminiUrl = useMemo(() => {
    if (!revealed || !selected) return '#';
    return buildGeminiDeepDiveUrl(DAILY_EXAM_NAME, todayQuestion, selected);
  }, [revealed, selected, todayQuestion]);

  const flashCopyFeedback = useCallback((ok: boolean) => {
    if (typeof window === 'undefined') return;
    window.clearTimeout(copyFeedbackTimerRef.current);
    setCopyFeedback(ok ? 'ok' : 'err');
    copyFeedbackTimerRef.current = window.setTimeout(() => setCopyFeedback('idle'), 2000);
  }, []);

  const handleCopyPrompt = useCallback(async () => {
    if (!revealed || !selected) return;
    const text = buildDeepDiveAiPrompt(DAILY_EXAM_NAME, todayQuestion, selected);
    const ok = await copyPromptToClipboard(text);
    flashCopyFeedback(ok);
  }, [revealed, selected, todayQuestion, flashCopyFeedback]);

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined') window.clearTimeout(copyFeedbackTimerRef.current);
    };
  }, []);

  return (
    <div class="daily-quiz">
      {/* ヘッダー */}
      <div class="dq-header">
        <span class="dq-badge">今日の1問</span>
        <span class="dq-field">{todayQuestion.subField || todayQuestion.field}</span>
      </div>

      {/* 問題文 */}
      <p class="dq-question">{todayQuestion.text}</p>

      {/* 選択肢 */}
      <div class="dq-choices">
        {todayQuestion.choices.map((choice) => {
          let cls = 'dq-choice';
          if (revealed) {
            if (choice.label === todayQuestion.correctLabel) cls += ' dq-correct';
            else if (choice.label === selected) cls += ' dq-wrong';
            else cls += ' dq-dimmed';
          } else if (choice.label === selected) {
            cls += ' dq-selected';
          }

          return (
            <button
              key={choice.label}
              class={cls}
              onClick={() => handleSelect(choice.label)}
              disabled={revealed}
            >
              <span class="dq-label">{choice.label}</span>
              <span class="dq-text">{choice.text}</span>
            </button>
          );
        })}
      </div>

      {/* 結果表示 */}
      {revealed && (
        <div class={`dq-result ${isCorrect ? 'dq-result-correct' : 'dq-result-wrong'}`}>
          <div class="dq-result-icon">{isCorrect ? '🎉' : '😣'}</div>
          <div class="dq-result-text">
            <strong>{isCorrect ? '正解！' : `不正解… 正解は「${todayQuestion.correctLabel}」`}</strong>
            <p class="dq-explanation">{todayQuestion.explanation}</p>
          </div>
          <div class="dq-ai-actions">
            <button type="button" class="dq-copy-btn" onClick={handleCopyPrompt}>
              📋 深掘りプロンプトをコピー
            </button>
            {copyFeedback === 'ok' && <span class="dq-copy-feedback dq-copy-feedback-ok">コピーしました</span>}
            {copyFeedback === 'err' && (
              <span class="dq-copy-feedback dq-copy-feedback-err">コピーできませんでした</span>
            )}
            <a href={geminiUrl} target="_blank" rel="noopener noreferrer" class="dq-ai-btn">
              🤖 AIにもっと詳しく聞く
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
