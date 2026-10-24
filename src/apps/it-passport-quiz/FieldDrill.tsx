/** @jsxImportSource preact */
import { useState, useEffect } from 'preact/hooks';
import type { Question } from './types';
import StrategyDrill from './StrategyDrill';
import { transformRawQuestions } from './transformQuestions';

type FieldKey = 'strategy' | 'management' | 'technology';

interface FieldConfig {
  label: string;
  examId: string;
  examName: string;
  load: () => Promise<{ default: any[] }>;
}

// examId は分野ごとの学習記録（LocalStorage）のキー。統合前のドリルと同じ値を使い、記録を引き継ぐ
const FIELDS: Record<FieldKey, FieldConfig> = {
  strategy: {
    label: 'ストラテジ系',
    examId: 'it-passport',
    examName: 'ITパスポート ストラテジ系ドリル',
    load: () => import('../../data/quiz/it-passport/strategy.json'),
  },
  management: {
    label: 'マネジメント系',
    examId: 'it-passport-mgmt',
    examName: 'ITパスポート マネジメント系ドリル',
    load: () => import('../../data/quiz/it-passport/management.json'),
  },
  technology: {
    label: 'テクノロジ系',
    examId: 'it-passport-tech',
    examName: 'ITパスポート テクノロジ系ドリル',
    load: () => import('../../data/quiz/it-passport/technology.json'),
  },
};

/**
 * FieldDrill — ストラテジ・マネジメント・テクノロジの3分野を切り替えて使う集中ドリル
 * 選んだ分野の問題だけを読み込む
 */
export default function FieldDrill() {
  const [field, setField] = useState<FieldKey>('strategy');
  const [questions, setQuestions] = useState<Question[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    setQuestions(null);
    FIELDS[field].load().then((mod) => {
      if (!cancelled) setQuestions(transformRawQuestions(mod.default));
    });
    return () => {
      cancelled = true;
    };
  }, [field]);

  const active = FIELDS[field];

  return (
    <div>
      <div class="qa-count-selector" style={{ textAlign: 'center' }}>
        <p class="qa-count-label">解く分野を選んでください</p>
        <div class="qa-count-buttons">
          {(Object.keys(FIELDS) as FieldKey[]).map((key) => (
            <button
              key={key}
              class={`qa-count-btn ${field === key ? 'qa-count-active' : ''}`}
              onClick={() => setField(key)}
            >
              {FIELDS[key].label}
            </button>
          ))}
        </div>
      </div>
      {questions ? (
        <StrategyDrill key={field} questions={questions} examId={active.examId} examName={active.examName} />
      ) : (
        <p class="qa-subtitle">問題を読み込んでいます…</p>
      )}
    </div>
  );
}
