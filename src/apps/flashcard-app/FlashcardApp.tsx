/** @jsxImportSource preact */
import { useState, useEffect } from 'preact/hooks';
import CardSession from './CardSession';
import DeckSelector from './DeckSelector';
import { mapQuestionsToCards, mapSyllabusToCards, mapScTermsToCards } from './utils';
import type { Flashcard, QuizQuestion, Syllabus } from './types';

interface FlashcardAppProps {
  initialDeckId?: string;
  allData?: {
    genai?: QuizQuestion[];
    ipQuestions?: QuizQuestion[];
    scTerms?: any[];
    apSyllabus?: Syllabus;
    feSyllabus?: Syllabus;
    ipSyllabus?: Syllabus;
  }
}

export default function FlashcardApp({ allData, initialDeckId }: FlashcardAppProps) {
  const [selectedDeckId, setSelectedDeckId] = useState<string | null>(initialDeckId || null);
  const [learningMode, setLearningMode] = useState<'term-to-def' | 'def-to-term'>('term-to-def');
  const [cards, setCards] = useState<Flashcard[]>([]);

  useEffect(() => {
    if (initialDeckId) {
      setSelectedDeckId(initialDeckId);
    }
  }, [initialDeckId]);

  useEffect(() => {
    if (!selectedDeckId || !allData) return;

    let newCards: Flashcard[] = [];
    switch (selectedDeckId) {
      case 'sc':
        if (allData.scTerms) {
          newCards = mapScTermsToCards(allData.scTerms, learningMode);
        }
        break;
      case 'genai-ethics':
        if (allData.genai) {
          newCards = mapQuestionsToCards(allData.genai, 'common');
        }
        break;
      case 'ip':
        if (allData.ipQuestions) {
          newCards = mapQuestionsToCards(allData.ipQuestions, 'ip');
        } else if (allData.ipSyllabus) {
          newCards = mapSyllabusToCards(allData.ipSyllabus);
        }
        break;
      case 'ap':
        if (allData.apSyllabus) {
          // APは数が多いので、とりあえず最初の100件などに絞る
          newCards = mapSyllabusToCards(allData.apSyllabus).slice(0, 100);
        }
        break;
      case 'fe':
        if (allData.feSyllabus) {
          newCards = mapSyllabusToCards(allData.feSyllabus).slice(0, 50);
        }
        break;
    }
    
    // ランダムシャッフル
    setCards(newCards.sort(() => Math.random() - 0.5));
  }, [selectedDeckId, allData]);

  const handleBackToMenu = () => {
    setSelectedDeckId(null);
    setCards([]);
  };

  if (!selectedDeckId) {
    return <DeckSelector onSelect={setSelectedDeckId} />;
  }

  if (cards.length === 0) {
    return (
      <div style={{textAlign: 'center', padding: '2rem'}}>
        <p>データを読み込んでいます...</p>
        <button class="control-btn" onClick={handleBackToMenu}>戻る</button>
      </div>
    );
  }

  return (
    <div>
      <div style={{marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        {!initialDeckId ? (
          <button 
            onClick={handleBackToMenu}
            style={{background: 'none', border: 'none', color: '#3b82f6', cursor: 'pointer', fontSize: '0.9rem'}}
          >
            ← デッキ選択に戻る
          </button>
        ) : (
          <div></div>
        )}
        
        {selectedDeckId === 'sc' && (
          <div style={{display: 'flex', gap: '0.5rem'}}>
            <button 
              onClick={() => setLearningMode('term-to-def')}
              style={{
                fontSize: '0.7rem', 
                padding: '0.2rem 0.5rem', 
                borderRadius: '4px',
                background: learningMode === 'term-to-def' ? '#3b82f6' : 'rgba(255,255,255,0.1)',
                color: 'white',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              用語→説明
            </button>
            <button 
              onClick={() => setLearningMode('def-to-term')}
              style={{
                fontSize: '0.7rem', 
                padding: '0.2rem 0.5rem', 
                borderRadius: '4px',
                background: learningMode === 'def-to-term' ? '#3b82f6' : 'rgba(255,255,255,0.1)',
                color: 'white',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              説明→用語
            </button>
          </div>
        )}
      </div>
      <CardSession initialCards={cards} />
    </div>
  );
}
