import { useState, useEffect } from 'preact/hooks';
import { essayThemes } from './themes';
import { essayScenarios } from './scenarios';
import type { EssayTheme } from './themes';
import type { EssayScenario } from './scenarios';
import type { FunctionComponent } from 'preact';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface EvaluationResult {
  rank: 'A' | 'B' | 'C' | 'D';
  score: {
    consistency: number;
    constraint: number;
    specificity: number;
    logic: number;
  };
  feedback: string;
  advice: string;
}

const EssayGachaApp: FunctionComponent = () => {
  const [selectedTheme, setSelectedTheme] = useState<EssayTheme | null>(null);
  const [selectedScenario, setSelectedScenario] = useState<EssayScenario | null>(null);
  const [timer, setTimer] = useState<number>(600); // 10 minutes
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [essayDraft, setEssayDraft] = useState<string>('');
  const [myModule, setMyModule] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('pm-essay-module') || '';
    }
    return '';
  });
  const [apiKey, setApiKey] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('gemini-api-key') || '';
    }
    return '';
  });
  const [evaluation, setEvaluation] = useState<EvaluationResult | null>(null);
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [showConfig, setShowConfig] = useState<boolean>(false);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('pm-essay-module', myModule);
  }, [myModule]);

  useEffect(() => {
    localStorage.setItem('gemini-api-key', apiKey);
  }, [apiKey]);

  const drawGacha = () => {
    setIsFlipped(false);
    setTimeout(() => {
      const randomTheme = essayThemes[Math.floor(Math.random() * essayThemes.length)];
      const randomScenario = essayScenarios[Math.floor(Math.random() * essayScenarios.length)];
      setSelectedTheme(randomTheme);
      setSelectedScenario(randomScenario);
      setTimer(600);
      setIsTimerRunning(false);
      setEssayDraft('');
      setEvaluation(null);
      setIsFlipped(true);
    }, 300);
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const runEvaluation = async () => {
    if (!apiKey) {
      alert('Gemini APIキーを設定してください。');
      setShowConfig(true);
      return;
    }

    setIsEvaluating(true);
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

      const prompt = `
あなたは情報処理技術者試験（プロジェクトマネージャ、ITストラテジスト）の採点官です。
以下の「お題」と「制約」に対し、ユーザーが10分で作成した「論文構成案」を評価してください。

## お題
- 区分: ${selectedTheme?.category}
- テーマ: ${selectedTheme?.theme}
- 主な論点: ${selectedTheme?.points.join(', ')}

## シチュエーション/追加制約
- ${selectedScenario?.title}: ${selectedScenario?.description}

## ユーザーのモジュール（自身の経験・武器）
${myModule}

## ユーザーが作成した構成案
${essayDraft}

## 評価基準
1. 論理構造の一貫性: 設問ア、イ、ウの流れがスムーズか。
2. 制約の充足: シチュエーション/追加制約を無視せず、具体的に対策が盛り込まれているか。
3. 具体的記述の有無: 数値や固有名詞、具体的なアクションが想起できるか。
4. モジュールの適合度: 自身の経験が不自然なくお題にマッチしているか。

## 出力形式 (JSON)
以下のJSON形式のみで回答してください。
{
  "rank": "A" | "B" | "C",
  "score": {
    "consistency": 0-10,
    "constraint": 0-10,
    "specificity": 0-10,
    "logic": 0-10
  },
  "feedback": "良かった点、不足している点の指摘（箇条書き）",
  "advice": "合格レベルに近づくための具体的なアドバイス"
}
`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      // Clean the response in case it contains markdown code blocks
      const jsonStr = text
        .replace(/```json\n?/, '')
        .replace(/```/, '')
        .trim();
      const res: EvaluationResult = JSON.parse(jsonStr);
      setEvaluation(res);
      setIsTimerRunning(false);
    } catch (error) {
      console.error(error);
      alert('評価中にエラーが発生しました。APIキーが正しいか確認してください。');
    } finally {
      setIsEvaluating(false);
    }
  };

  return (
    <div className="p-4 md:p-6 bg-slate-900 text-white rounded-xl shadow-2xl border border-slate-700 max-w-4xl mx-auto my-8 font-sans">
      {/* Header & Config */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
            Theme-Gacha-Next
          </h2>
          <p className="text-slate-400 text-xs uppercase tracking-tighter">Essay Structuring Simulator V2</p>
        </div>
        <button
          onClick={() => setShowConfig(!showConfig)}
          className="p-2 text-slate-400 hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </button>
      </div>

      {showConfig && (
        <div className="mb-8 p-4 bg-slate-800 rounded-lg border border-slate-700 animate-in slide-in-from-top-4 duration-300">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1 uppercase">Gemini API Key</label>
              <input
                type="password"
                value={apiKey}
                onInput={(e) => setApiKey(e.currentTarget.value)}
                placeholder="Enter API Key"
                className="w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              />
              <p className="mt-1 text-xs text-amber-400">
                ⚠️
                APIキーはブラウザのローカルストレージに保存されます。共有PCや公共端末では使用後に必ず削除してください。
              </p>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-1 uppercase">
                My Module (背景・経験・武器)
              </label>
              <textarea
                value={myModule}
                onInput={(e) => setMyModule(e.currentTarget.value)}
                placeholder="例: 社内システム刷新でのPM経験、製造業の基幹業務知識など"
                className="w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-sm h-24 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      )}

      {/* Main Layout */}
      {!selectedTheme ? (
        <div className="text-center py-20 border-2 border-dashed border-slate-700 rounded-2xl bg-slate-800/50">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-600/20 text-blue-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">準備はいいですか？</h3>
            <p className="text-slate-400 text-sm max-w-xs mx-auto">
              テーマ、論点、シチュエーションがランダムに生成されます。
            </p>
          </div>
          <button
            onClick={drawGacha}
            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black rounded-full transition-all transform hover:scale-105 shadow-xl shadow-blue-500/30 uppercase tracking-widest"
          >
            お題を引く
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in zoom-in duration-500">
          {/* Left: The Challenge */}
          <div className="space-y-6">
            <div
              className={`transition-all duration-700 ${isFlipped ? 'rotate-y-0 opacity-100' : 'rotate-y-12 opacity-0'}`}
            >
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-inner relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl rounded-full -mr-16 -mt-16"></div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-0.5 rounded bg-blue-500 text-[10px] font-bold text-white uppercase">
                    {selectedTheme.category}
                  </span>
                  <span className="text-slate-500 text-xs font-mono">
                    ID: {Math.random().toString(36).substring(7).toUpperCase()}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-6 leading-tight">{selectedTheme.theme}</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2 flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      必須論点
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {selectedTheme.points.map((p, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-blue-500 font-bold">•</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-amber-500/10 rounded-xl border border-amber-500/20">
                    <h4 className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-2 flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      追加制約: {selectedScenario?.title}
                    </h4>
                    <p className="text-sm text-amber-200/80 leading-relaxed italic">
                      「{selectedScenario?.description}」
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-2xl border border-slate-800">
              <div className="text-left">
                <div className={`text-4xl font-mono ${timer < 60 ? 'text-red-500 animate-pulse' : 'text-slate-300'}`}>
                  {formatTime(timer)}
                </div>
                <p className="text-[10px] text-slate-500 uppercase font-bold">10-Minute Countdown</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className={`p-3 rounded-xl transition-all ${isTimerRunning ? 'bg-amber-600/20 text-amber-500 hover:bg-amber-600/30' : 'bg-green-600/20 text-green-500 hover:bg-green-600/30'}`}
                >
                  {isTimerRunning ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  )}
                </button>
                <button
                  onClick={drawGacha}
                  className="p-3 rounded-xl bg-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
                  title="別のお題を引く"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                    <path d="M16 16h5v5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right: The Editor / Results */}
          <div className="flex flex-col h-full">
            {!evaluation ? (
              <div className="flex-1 flex flex-col space-y-4">
                <div className="flex-1 min-h-[400px]">
                  <textarea
                    value={essayDraft}
                    onInput={(e) => setEssayDraft(e.currentTarget.value)}
                    placeholder="ここに構成案を入力してください（箇条書き推奨）
例：
1. プロジェクトの概要と特徴
・基幹システム刷新に伴うAI導入
・制約条件としての短納期への対応...

2. 実施した対策
・品質目標の再定義
・プロンプト管理の徹底..."
                    className="w-full h-full bg-slate-800/30 border border-slate-700 rounded-2xl p-6 text-sm font-mono leading-relaxed focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder-slate-600"
                  />
                </div>
                <button
                  disabled={!essayDraft || isEvaluating}
                  onClick={runEvaluation}
                  className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${
                    !essayDraft || isEvaluating
                      ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20'
                  }`}
                >
                  {isEvaluating ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      AI採点中...
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.4 8.38 8.38 0 0 1 3.9.9" />
                        <polyline points="21 3 12 12" />
                        <polyline points="21 8 21 3 16 3" />
                      </svg>
                      構成案をAIに提出
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div className="flex-1 space-y-6 animate-in slide-in-from-bottom-8 duration-500">
                <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 relative overflow-hidden">
                  <div
                    className={`absolute top-4 right-6 text-6xl font-black italic ${
                      evaluation.rank === 'A'
                        ? 'text-green-500/20'
                        : evaluation.rank === 'B'
                          ? 'text-amber-500/20'
                          : 'text-red-500/20'
                    }`}
                  >
                    {evaluation.rank}
                  </div>
                  <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                        evaluation.rank === 'A'
                          ? 'bg-green-600'
                          : evaluation.rank === 'B'
                            ? 'bg-amber-600'
                            : 'bg-red-600'
                      }`}
                    >
                      {evaluation.rank}
                    </span>
                    AI総合判定
                  </h4>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {Object.entries(evaluation.score).map(([key, val]) => (
                      <div key={key} className="bg-slate-900/50 p-3 rounded-xl border border-slate-700">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[10px] text-slate-500 uppercase font-bold">
                            {key === 'consistency'
                              ? '一貫性'
                              : key === 'constraint'
                                ? '制約対応'
                                : key === 'specificity'
                                  ? '具体性'
                                  : '論理'}
                          </span>
                          <span className="text-sm font-mono font-bold text-blue-400">{val}/10</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-500 transition-all duration-1000"
                            style={{ width: `${val * 10}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="text-[10px] font-bold text-slate-500 uppercase mb-2">Feedback</h5>
                      <div className="text-sm text-slate-200 leading-relaxed whitespace-pre-wrap">
                        {evaluation.feedback}
                      </div>
                    </div>
                    <div className="p-4 bg-indigo-600/10 rounded-xl border border-indigo-600/20">
                      <h5 className="text-[10px] font-bold text-indigo-400 uppercase mb-2">Mentor Advice</h5>
                      <div className="text-sm text-indigo-200/90 leading-relaxed italic">{evaluation.advice}</div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setEvaluation(null)}
                  className="w-full py-4 border border-slate-700 rounded-2xl text-slate-400 font-bold hover:bg-slate-800 hover:text-white transition-all"
                >
                  修正して再提出
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="mt-8 text-[10px] text-slate-600 text-center uppercase tracking-[0.2em]">
        Syllabus Hack - Advanced Exam Training Series
      </div>
    </div>
  );
};

export default EssayGachaApp;
