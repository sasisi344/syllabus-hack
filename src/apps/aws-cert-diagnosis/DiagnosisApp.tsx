/** @jsxImportSource preact */
import { useState, useCallback, useRef } from 'preact/hooks';
import type { Role, Experience, Goal, DiagnosisAnswers, DiagnosisResult } from './types';
import { diagnose } from './logic';
import { loadLastResult, saveResult } from './progress';

type Step = 'role' | 'experience' | 'goal' | 'result';

const ROLE_OPTIONS: { value: Role; label: string; desc: string }[] = [
  { value: 'infra', label: 'インフラ・サーバー系エンジニア', desc: 'ネットワーク・サーバー運用が主業務' },
  { value: 'dev', label: 'アプリケーション開発者', desc: 'コードを書いてサービスを作る側' },
  { value: 'sales-nontech', label: '営業・企画・非エンジニア職', desc: '技術職ではないがITに関わる' },
  { value: 'manager', label: 'マネージャー・PM', desc: 'チームやプロジェクトを管理する立場' },
];

const EXPERIENCE_OPTIONS: { value: Experience; label: string; desc: string }[] = [
  { value: 'none', label: 'クラウド未経験', desc: 'AWSはもちろんクラウド全般が初めて' },
  { value: 'onpremise', label: 'オンプレミス経験あり', desc: '自社サーバー等の運用経験はある' },
  { value: 'aws-some', label: 'AWSを多少触ったことがある', desc: '基本的な操作や用語は分かる' },
];

const GOAL_OPTIONS: { value: Goal; label: string; desc: string }[] = [
  { value: 'transfer', label: '転職活動でアピールしたい', desc: '市場価値を高める資格が欲しい' },
  { value: 'inhouse-promotion', label: '社内評価・昇進に活かしたい', desc: '今の会社での専門性を証明したい' },
  { value: 'skill-proof', label: '実務スキルの証明にしたい', desc: '自分の理解度を客観的に確認したい' },
  { value: 'career-start', label: 'まずは学習のきっかけが欲しい', desc: '取得より学ぶこと自体が目的' },
];

export default function DiagnosisApp() {
  const [step, setStep] = useState<Step>('role');
  const [answers, setAnswers] = useState<DiagnosisAnswers>({ role: null, experience: null, goal: null });
  const [result, setResult] = useState<DiagnosisResult | null>(() => loadLastResult());

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollToTop = () => containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const selectRole = useCallback((role: Role) => {
    setAnswers((prev) => ({ ...prev, role }));
    setStep('experience');
    scrollToTop();
  }, []);

  const selectExperience = useCallback((experience: Experience) => {
    setAnswers((prev) => ({ ...prev, experience }));
    setStep('goal');
    scrollToTop();
  }, []);

  const selectGoal = useCallback(
    (goal: Goal) => {
      const finalAnswers: DiagnosisAnswers = { ...answers, goal };
      const recommendation = diagnose(finalAnswers);
      const diagResult: DiagnosisResult = { recommendation, answeredAt: Date.now() };
      saveResult(diagResult);
      setAnswers(finalAnswers);
      setResult(diagResult);
      setStep('result');
      scrollToTop();
    },
    [answers]
  );

  const restart = useCallback(() => {
    setAnswers({ role: null, experience: null, goal: null });
    setStep('role');
    scrollToTop();
  }, []);

  return (
    <div class="diag-app" ref={containerRef}>
      {step !== 'result' && (
        <div class="diag-progress-bar">
          <div
            class="diag-progress-fill"
            style={{ width: `${step === 'role' ? 33 : step === 'experience' ? 66 : 100}%` }}
          />
        </div>
      )}

      {step === 'role' && (
        <div class="diag-question">
          <p class="diag-step-label">質問 1 / 3</p>
          <h2 class="diag-question-title">あなたの職種に近いものは？</h2>
          <div class="diag-options">
            {ROLE_OPTIONS.map((opt) => (
              <button key={opt.value} class="diag-option" onClick={() => selectRole(opt.value)}>
                <span class="diag-option-label">{opt.label}</span>
                <span class="diag-option-desc">{opt.desc}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 'experience' && (
        <div class="diag-question">
          <p class="diag-step-label">質問 2 / 3</p>
          <h2 class="diag-question-title">クラウド・AWSの経験は？</h2>
          <div class="diag-options">
            {EXPERIENCE_OPTIONS.map((opt) => (
              <button key={opt.value} class="diag-option" onClick={() => selectExperience(opt.value)}>
                <span class="diag-option-label">{opt.label}</span>
                <span class="diag-option-desc">{opt.desc}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 'goal' && (
        <div class="diag-question">
          <p class="diag-step-label">質問 3 / 3</p>
          <h2 class="diag-question-title">資格取得の目的は？</h2>
          <div class="diag-options">
            {GOAL_OPTIONS.map((opt) => (
              <button key={opt.value} class="diag-option" onClick={() => selectGoal(opt.value)}>
                <span class="diag-option-label">{opt.label}</span>
                <span class="diag-option-desc">{opt.desc}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 'result' && result && (
        <div class="diag-result">
          <p class="diag-result-eyebrow">あなたにおすすめの資格は</p>
          <h2 class="diag-result-cert">{result.recommendation.certName}</h2>
          <p class="diag-result-reason">{result.recommendation.reason}</p>
          <a href={result.recommendation.articleSlug} class="diag-result-link">
            📖 {result.recommendation.articleTitle}を読む
          </a>
          <button class="diag-restart-btn" onClick={restart}>
            もう一度診断する
          </button>
        </div>
      )}
    </div>
  );
}
