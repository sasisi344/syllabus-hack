/** @jsxImportSource preact */
import { useState, useCallback, useRef, useEffect } from 'preact/hooks';
import type { Question, MasteryLevel } from './types';
import { recordMastery, loadProgress } from './progress';

interface FlashcardDrillProps {
  questions: Question[];
  examId: string;
  examName: string;
}

type Mode = 'setup' | 'study' | 'summary';

const CATEGORY_LABELS: Record<string, string> = {
  mechanism: '生成AIの仕組み',
  utilization: 'AI利活用',
  ethics_governance: 'AI倫理・ガバナンス',
};

export default function FlashcardDrill({ questions, examId, examName }: FlashcardDrillProps) {
  const [mode, setMode] = useState<Mode>('setup');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [cards, setCards] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [progress, setProgress] = useState(() => loadProgress());
  const containerRef = useRef<HTMLDivElement>(null);

  const startStudy = (category: string) => {
    const filtered = questions.filter(q => q.category === category);
    // Shuffle
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setSelectedCategory(category);
    setCurrentIndex(0);
    setIsFlipped(false);
    setMode('study');
  };

  const activeCard = cards[currentIndex];

  const handleMastery = (level: MasteryLevel) => {
    if (!activeCard) return;
    const updated = recordMastery(activeCard.id, level);
    setProgress(updated);
    
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(i => i + 1);
      setIsFlipped(false);
    } else {
      setMode('summary');
    }
  };

  const getTerm = (q: Question) => {
    const correctChoice = q.choices.find(c => c.label === q.answer);
    return correctChoice ? correctChoice.text.replace(/^[ア-エ]:\s*/, '') : '不明';
  };

  if (mode === 'setup') {
    return (
      <div class="fc-menu" ref={containerRef}>
        <h2 class="qa-title">🎴 Flashcards: {examName}</h2>
        <p class="qa-subtitle">用語をカード形式で暗記しましょう</p>
        <div class="qa-grid">
          {Object.entries(CATEGORY_LABELS).map(([id, label]) => {
            const count = questions.filter(q => q.category === id).length;
            const masteredCount = questions
              .filter(q => q.category === id)
              .filter(q => progress.flashcard?.mastery[q.id] === 'learned').length;

            return (
              <button key={id} class="qa-btn" onClick={() => startStudy(id)}>
                <span class="qa-field-name">{label}</span>
                <span class="qa-field-meta">{count}用語中 {masteredCount}件 習得済み</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (mode === 'study' && activeCard) {
    const mastery = progress.flashcard?.mastery[activeCard.id] || 'none';
    return (
      <div class="fc-study" ref={containerRef}>
        <div class="qa-progress-bar">
          <div class="qa-progress-fill" style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }} />
        </div>
        <div class="qa-progress-text">
          {CATEGORY_LABELS[selectedCategory!] || ''} ― {currentIndex + 1} / {cards.length}
        </div>

        <div class={`fc-card ${isFlipped ? 'is-flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
          <div class="fc-card-inner">
            <div class="fc-card-front">
              <div class="fc-card-label">TERM</div>
              <div class="fc-card-term">{getTerm(activeCard)}</div>
              <div class="fc-card-hint">タップで裏面を表示</div>
            </div>
            <div class="fc-card-back">
              <div class="fc-card-label">MEANING</div>
              <div class="fc-card-question">{activeCard.question}</div>
              <hr class="fc-divider" />
              <div class="fc-card-explanation">{activeCard.explanation}</div>
            </div>
          </div>
        </div>

        {isFlipped && (
          <div class="fc-actions">
            <button class="fc-action-btn fc-btn-review" onClick={() => handleMastery('review')}>
              ⚠️ 要復習
            </button>
            <button class="fc-action-btn fc-btn-learned" onClick={() => handleMastery('learned')}>
              ✅ 習得済み
            </button>
          </div>
        )}
      </div>
    );
  }

  if (mode === 'summary') {
    return (
      <div class="qa-result" ref={containerRef}>
        <h2 class="qa-result-title">🙌 お疲れ様でした！</h2>
        <p class="qa-result-rate">{CATEGORY_LABELS[selectedCategory!] || ''} の学習を完了しました。</p>
        <div class="qa-result-actions">
          <button class="qa-all-btn" onClick={() => setMode('setup')}>
            メニューに戻る
          </button>
        </div>
      </div>
    );
  }

  return null;
}
