/** @jsxImportSource preact */
import { useState, useCallback, useRef, useMemo } from 'preact/hooks';
import type { Question } from './types';
import { recordAnswer, loadProgress } from './progress';

interface CategoryDrillProps {
  questions: Question[];
  examId: string;
  examName: string;
}

type DrillMode = 'setup' | 'drill' | 'result';

export default function CategoryDrill({ questions, examId, examName }: CategoryDrillProps) {
  const [mode, setMode] = useState<DrillMode>('setup');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [drillQuestions, setDrillQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [progress, setProgress] = useState(() => loadProgress(examId));
  const containerRef = useRef<HTMLDivElement>(null);

  // ダイナミックにカテゴリを抽出
  const categories = useMemo(() => {
    const cats = new Set<string>();
    questions.forEach(q => cats.add(q.category));
    return Array.from(cats);
  }, [questions]);

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const startDrill = useCallback((category: string) => {
    const filtered = questions.filter(q => q.category === category);
    // Shuffle
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    setDrillQuestions(shuffled.slice(0, 10)); // 10 questions per drill
    setSelectedCategory(category);
    setCurrentIndex(0);
    setAnswers({});
    setMode('drill');
    scrollToTop();
  }, [questions]);

  const startAll = useCallback(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setDrillQuestions(shuffled.slice(0, 10)); // 10 questions per drill
    setSelectedCategory('全カテゴリ');
    setCurrentIndex(0);
    setAnswers({});
    setMode('drill');
    scrollToTop();
  }, [questions]);

  const startDrillByRole = useCallback((role: string, label: string) => {
    const filtered = questions.filter(q => q.role === role || q.role?.includes(role));
    if(filtered.length === 0) return;
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    setDrillQuestions(shuffled.slice(0, 10));
    setSelectedCategory(`【用途別】${label}`);
    setCurrentIndex(0);
    setAnswers({});
    setMode('drill');
    scrollToTop();
  }, [questions]);
  
  const startDrillByDifficulty = useCallback((diff: string, label: string) => {
    const filtered = questions.filter(q => q.difficulty === diff || q.difficulty?.includes(diff));
    if(filtered.length === 0) return;
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    setDrillQuestions(shuffled.slice(0, 10));
    setSelectedCategory(`【難易度】${label}`);
    setCurrentIndex(0);
    setAnswers({});
    setMode('drill');
    scrollToTop();
  }, [questions]);

  const ROLES = [
    { id: 'engineer', label: '開発者・エンジニア向け', desc: '技術・仕組み全般' },
    { id: 'business', label: 'ビジネス実務向け', desc: '導入・企画・効率化' },
    { id: 'general', label: '一般・プロンプト・法務', desc: '基礎知識・倫理' },
  ];

  const DIFFICULTIES = [
    { id: 'beginner', label: '初級レベル', desc: '基礎用語・概要理解' },
    { id: 'intermediate', label: '中級レベル', desc: '応用・実務的ユースケース' },
    { id: 'advanced', label: '上級レベル', desc: '専門的・高度な判断' },
  ];

  const activeQuestion = drillQuestions[currentIndex];

  const handleAnswer = useCallback((label: string) => {
    if (!activeQuestion) return;
    const isCorrect = label === activeQuestion.answer;
    setAnswers(prev => ({ ...prev, [activeQuestion.id]: label }));
    const updated = recordAnswer(examId, activeQuestion.id, activeQuestion.category, isCorrect);
    setProgress(updated);
  }, [activeQuestion, examId]);

  const goNext = useCallback(() => {
    if (currentIndex < drillQuestions.length - 1) {
      setCurrentIndex(i => i + 1);
      scrollToTop();
    } else {
      setMode('result');
      scrollToTop();
    }
  }, [currentIndex, drillQuestions]);

  const generateAiPrompt = useCallback((q: Question, userAnswer: string) => {
    return `以下の「${examName}」に関する問題について、なぜ「${q.answer}」が正解なのか、初学者にもわかるように詳しく解説してください。
分野: ${q.category}
小分野: ${q.middleCategory || ''}
キーワード: ${q.keyword || ''} 

【問題】
${q.question}

${q.choices.map(c => `${c.label}. ${c.text}`).join('\n')}

正解: ${q.answer}
私の回答: ${userAnswer}`;
  }, [examName]);

  // --- RENDER ---

  if (mode === 'setup') {
    return (
      <div class="qa-menu" ref={containerRef}>
        <h2 class="qa-title">🤖 {examName}</h2>
        <p class="qa-subtitle">分野を選んで最新キーワードを攻略しましょう</p>

        <button class="qa-btn full" onClick={startAll}>
          <span class="icon">🎲</span> ランダムで10問挑戦
        </button>

        <div class="qa-grid" style={{ marginBottom: "2rem" }}>
          <h3 style={{ gridColumn: "1 / -1", margin: "0", fontSize: "1.1rem" }}>📚 スキル分野別</h3>
          {categories.map((cat) => {
            const count = questions.filter(q => q.category === cat).length;
            const stats = progress.categoryStats[cat] || { answered: 0, correct: 0 };
            const accuracy = stats.answered > 0 ? Math.round((stats.correct / stats.answered) * 100) : 0;

            return (
              <button key={cat} class="qa-btn" onClick={() => startDrill(cat)}>
                <span class="qa-field-name">{cat}</span>
                <span class="qa-field-meta">{count}問収録 / 正答率 {accuracy}%</span>
              </button>
            );
          })}
        </div>
        
        <div class="qa-grid" style={{ marginBottom: "2rem" }}>
          <h3 style={{ gridColumn: "1 / -1", margin: "0", fontSize: "1.1rem" }}>🎯 用途・目的別</h3>
          {ROLES.map(role => {
            const count = questions.filter(q => q.role === role.id || q.role?.includes(role.id)).length;
            if (count === 0) return null;
            return (
              <button key={role.id} class="qa-btn" onClick={() => startDrillByRole(role.id, role.label)}>
                <span class="qa-field-name">{role.label}</span>
                <span class="qa-field-meta">{count}問収録 / {role.desc}</span>
              </button>
            );
          })}
        </div>
        
        <div class="qa-grid" style={{ marginBottom: "2rem" }}>
          <h3 style={{ gridColumn: "1 / -1", margin: "0", fontSize: "1.1rem" }}>📈 難易度別</h3>
          {DIFFICULTIES.map(diff => {
            const count = questions.filter(q => q.difficulty === diff.id || q.difficulty?.includes(diff.id)).length;
            if (count === 0) return null;
            return (
              <button key={diff.id} class="qa-btn" onClick={() => startDrillByDifficulty(diff.id, diff.label)}>
                <span class="qa-field-name">{diff.label}</span>
                <span class="qa-field-meta">{count}問収録 / {diff.desc}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (mode === 'drill' && activeQuestion) {
    const userAnswer = answers[activeQuestion.id];
    const isAnswered = !!userAnswer;
    const isCorrect = userAnswer === activeQuestion.answer;

    return (
      <div class="qa-drill" ref={containerRef}>
        <div class="qa-progress-bar">
          <div class="qa-progress-fill" style={{ width: `${((currentIndex + 1) / drillQuestions.length) * 100}%` }} />
        </div>
        <div class="qa-progress-text">
          {selectedCategory || ''} ― {currentIndex + 1} / {drillQuestions.length}
        </div>

        <p class="qa-question">{activeQuestion.question}</p>

        <div class="qa-choices">
          {activeQuestion.choices.map((choice) => {
            let cls = 'qa-choice';
            if (isAnswered) {
              if (choice.label === activeQuestion.answer) cls += ' qa-correct';
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
            <strong>{isCorrect ? '✅ 正解！' : `❌ 不正解… 正解は「${activeQuestion.answer}」`}</strong>
            <p>{activeQuestion.explanation}</p>
            <div class="qa-feedback-actions">
              <a
                href={`https://gemini.google.com/app?q=${encodeURIComponent(generateAiPrompt(activeQuestion, userAnswer))}`}
                target="_blank"
                rel="noopener noreferrer"
                class="qa-ai-link"
              >
                🤖 AIに詳しく聞く
              </a>
              <button class="qa-next-btn" onClick={goNext}>
                {currentIndex < drillQuestions.length - 1 ? '次の問題 →' : '結果を見る'}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (mode === 'result') {
    const correctCount = drillQuestions.filter(q => answers[q.id] === q.answer).length;
    return (
      <div class="qa-result" ref={containerRef}>
        <h2 class="qa-result-title">📊 演習結果</h2>
        <div class="qa-result-score">
          <span class="qa-result-num">{correctCount}</span>
          <span class="qa-result-denom">/ {drillQuestions.length}</span>
        </div>
        <p class="qa-result-rate">正答率: {Math.round((correctCount / drillQuestions.length) * 100)}%</p>

        {/* 間違った問題リスト */}
        <div class="qa-wrong-list">
          <h3>間違えた問題</h3>
          {drillQuestions
            .filter((q) => answers[q.id] !== q.answer)
            .map((q) => (
              <div key={q.id} class="qa-wrong-item">
                <p class="qa-wrong-q">{q.question}</p>
                <p class="qa-wrong-a">
                  あなたの回答: {answers[q.id]} → 正解: {q.answer}
                </p>
                <a
                  href={`https://gemini.google.com/app?q=${encodeURIComponent(generateAiPrompt(q, answers[q.id]))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="qa-ai-link-sm"
                >
                  🤖 AIで復習
                </a>
              </div>
            ))}
          {correctCount === drillQuestions.length && (
            <p class="qa-perfect">🏆 全問正解！素晴らしいです！</p>
          )}
        </div>

        <div class="qa-result-actions">
          <button class="qa-back-btn" onClick={() => setMode('setup')}>
            メニューに戻る
          </button>
        </div>
      </div>
    );
  }

  return null;
}
