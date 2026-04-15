import type { Question } from './types';

/**
 * 解答直後に ChatGPT / Gemini 等へ貼り付けて深掘り学習するためのプロンプト本文。
 */
export function buildDeepDiveAiPrompt(examName: string, q: Question, userAnswer: string): string {
  const scenarioText = q.scenario ? `【シナリオ】\n${q.scenario}\n\n` : '';
  const keywordsText =
    q.keywords && q.keywords.length > 0
      ? `【解答のヒントとなるキーワード】\n${q.keywords.map((k) => `・${k}`).join('\n')}\n\n`
      : '';

  return `以下の${examName}の問題について、なぜ「${q.correctLabel}」が正解なのか、初学者にもわかるように詳しく解説してください。
解説では、各選択肢が「なぜ正しいのか」または「なぜ誤りなのか」を、上記の関連キーワードの意味も交えて丁寧に説明してください。

${keywordsText}${scenarioText}【問題】
${q.text}

${q.choices.map((c) => `${c.label}. ${c.text}`).join('\n')}

正解: ${q.correctLabel}
私の回答: ${userAnswer}`;
}

export function buildGeminiDeepDiveUrl(examName: string, q: Question, userAnswer: string): string {
  return `https://gemini.google.com/app?q=${encodeURIComponent(buildDeepDiveAiPrompt(examName, q, userAnswer))}`;
}

/**
 * クリップボードへコピー。secure context 外などで失敗した場合は false。
 */
export async function copyPromptToClipboard(text: string): Promise<boolean> {
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
