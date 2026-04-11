/** @jsxImportSource preact */
import { useState } from 'preact/hooks';
import type { Question } from './types';

interface JsonInjectorProps {
  onInject: (questions: Question[]) => void;
  onCancel: () => void;
}

export default function JsonInjector({ onInject, onCancel }: JsonInjectorProps) {
  const [jsonText, setJsonText] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleInject = () => {
    try {
      const parsed = JSON.parse(jsonText);
      if (!Array.isArray(parsed)) {
        throw new Error('JSONは配列形式である必要があります。');
      }
      
      // 簡易的なバリデーション
      if (parsed.length > 0 && (!parsed[0].question || !parsed[0].choices)) {
        throw new Error('問題データの形式が正しくありません (questionやchoicesが不足しています)。');
      }

      onInject(parsed as Question[]);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'JSONの解析に失敗しました。');
    }
  };

  const handleExample = () => {
    const example: Question[] = [
      {
        id: "hack-1",
        category: "utilization",
        subCategory: "Custom",
        question: "Geminiを使って自習ツールを作る際、最も重要なのは何ですか？",
        choices: [
          { label: "ア", text: "プロンプトの具体性" },
          { label: "イ", text: "モデルのパラメータ設定" },
          { label: "ウ", text: "サーバーのスペック" },
          { label: "エ", text: "インターネットの速度" }
        ],
        answer: "ア",
        explanation: "AIに期待通りの出力をさせるには、具体的かつ明確なプロンプト（指示）が最も重要です。"
      }
    ];
    setJsonText(JSON.stringify(example, null, 2));
  };

  return (
    <div class="json-injector">
      <div class="ji-card">
        <h3 class="ji-title">🚀 AI学習キット・インジェクター</h3>
        <p class="ji-desc">
          Geminiなどで生成したクイズJSONをここに貼り付けると、自分専用のドリルとして即座に実行できます。
        </p>

        <div class="ji-actions">
          <button class="ji-example-btn" onClick={handleExample}>
            📋 サンプルを挿入
          </button>
        </div>

        <textarea
          class={`ji-textarea ${error ? 'is-error' : ''}`}
          placeholder='[{"question": "...", "choices": [...], ...}]'
          value={jsonText}
          onInput={(e) => setJsonText((e.target as HTMLTextAreaElement).value)}
        />

        {error && <div class="ji-error">⚠️ {error}</div>}

        <div class="ji-footer">
          <button class="ji-cancel-btn" onClick={onCancel}>
            キャンセル
          </button>
          <button class="ji-apply-btn" onClick={handleInject} disabled={!jsonText.trim()}>
            キットを読み込む
          </button>
        </div>
      </div>
    </div>
  );
}
