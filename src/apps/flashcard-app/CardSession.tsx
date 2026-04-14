/** @jsxImportSource preact */
import { useState } from 'preact/hooks';
import type { Flashcard } from './types';
import { loadDeckProgress, updateCardState, getMasteredCount } from './storage';
import './flashcard.css';

interface CardSessionProps {
  initialCards: Flashcard[];
  deckId: string;
}

export default function CardSession({ initialCards, deckId }: CardSessionProps) {
  const [deckProgress, setDeckProgress] = useState(() => loadDeckProgress(deckId));

  // 習熟済みカードを末尾に回して開始
  const sortedCards = [...initialCards].sort((a, b) => {
    const aM = deckProgress[a.id]?.status === 'mastered' ? 1 : 0;
    const bM = deckProgress[b.id]?.status === 'mastered' ? 1 : 0;
    return aM - bM;
  });

  const [cards] = useState(sortedCards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const handleRetry = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setIsFinished(false);
  };

  const currentCard = cards[currentIndex];
  const currentStatus = deckProgress[currentCard?.id]?.status;
  const masteredCount = getMasteredCount(deckProgress);

  const handleFlip = () => setIsFlipped((f) => !f);

  const handleNext = (ok: boolean) => {
    const status = ok ? 'mastered' : 'learning';
    const updated = updateCardState(deckId, currentCard.id, status);
    setDeckProgress(updated);
    setIsFlipped(false);

    if (currentIndex < cards.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setIsFinished(true);
    }
  };

  const progress = (currentIndex / cards.length) * 100;

  if (isFinished) {
    const sessionMastered = getMasteredCount(deckProgress);
    return (
      <div class="flashcard-app finished-view">
        <div class="card-face result-card">
          <div class="completion-icon" style={{ fontSize: '4rem', marginBottom: '1rem' }}>
            🎉
          </div>
          <h2 class="term" style={{ fontSize: '1.8rem' }}>
            学習完了！
          </h2>
          <div class="explanation" style={{ border: 'none', textAlign: 'center', marginTop: '0.5rem' }}>
            <p>今回のセッション結果:</p>
            <p style={{ fontSize: '2rem', margin: '0.5rem 0', color: '#22c55e', fontWeight: 'bold' }}>
              {sessionMastered} / {cards.length} 習得済み
            </p>
            <p style={{ fontSize: '0.85rem', color: '#9ca3af', marginTop: '0.5rem' }}>
              ※ 習得済みは次回セッションで末尾に表示されます
            </p>
          </div>
          <button
            class="control-btn btn-ok"
            style={{ flex: 'none', width: '100%', marginTop: '2rem' }}
            onClick={handleRetry}
          >
            もう一度学習する
          </button>
        </div>
      </div>
    );
  }

  return (
    <div class="flashcard-app">
      <div class="app-header">
        <span class="deck-info">
          {currentCard.examId.toUpperCase()} - {currentCard.category}
        </span>
        <span class="stats-info">
          {currentIndex + 1} / {cards.length}
          {masteredCount > 0 && (
            <span style={{ marginLeft: '0.5rem', color: '#22c55e', fontSize: '0.8em' }}>✓{masteredCount}</span>
          )}
        </span>
      </div>

      <div class="progress-bar">
        <div class="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div class="card-scene" onClick={handleFlip}>
        <div class={`flashcard-inner ${isFlipped ? 'is-flipped' : ''}`}>
          {/* Front */}
          <div class="card-face card-face-front">
            {currentCard.importance && (
              <div class={`importance-tag importance-${currentCard.importance.toLowerCase()}`}>
                重要度 {currentCard.importance}
              </div>
            )}
            {currentStatus === 'mastered' && (
              <div style={{ fontSize: '0.75rem', color: '#22c55e', marginBottom: '0.25rem' }}>✓ 習得済み</div>
            )}
            <div class="term">{currentCard.front}</div>
            <div class="hint">タップで裏面を表示</div>
          </div>

          {/* Back */}
          <div class="card-face card-face-back">
            <div class="definition">{currentCard.back}</div>

            <div class="tags-container" style={{ flexGrow: 1 }}>
              {currentCard.tags?.map((tag) => (
                <span key={tag} class="tag">
                  #{tag}
                </span>
              ))}
            </div>

            <div class="card-controls animate-fade-in">
              <button
                class="control-btn btn-ng"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext(false);
                }}
              >
                <span>✕</span> また後で
              </button>
              <button
                class="control-btn btn-ok"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext(true);
                }}
              >
                <span>✓</span> 覚えた！
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
