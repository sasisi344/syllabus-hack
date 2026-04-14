/** @jsxImportSource preact */
import { useState, useEffect } from 'preact/hooks';
import CardSession from './CardSession';
import DeckSelector from './DeckSelector';
import CategorySelector from './CategorySelector';
import { mapQuestionsToCards, mapSyllabusToCards, mapTermsToCards } from './utils';
import type { Flashcard, QuizQuestion, Syllabus, SpecializedTerm } from './types';

interface FlashcardAppProps {
  initialDeckId?: string;
  allData?: {
    genai?: QuizQuestion[];
    ipQuestions?: QuizQuestion[];
    scTerms?: SpecializedTerm[];
    dbTerms?: SpecializedTerm[];
    saTerms?: SpecializedTerm[];
    pmTerms?: SpecializedTerm[];
    smTerms?: SpecializedTerm[];
    auTerms?: SpecializedTerm[];
    stTerms?: SpecializedTerm[];
    apSyllabus?: Syllabus;
    feSyllabus?: Syllabus;
    ipSyllabus?: Syllabus;
  };
}

export default function FlashcardApp({ allData, initialDeckId }: FlashcardAppProps) {
  const [selectedDeckId, setSelectedDeckId] = useState<string | null>(initialDeckId || null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [learningMode, setLearningMode] = useState<'term-to-def' | 'def-to-term'>('term-to-def');
  const [rawCards, setRawCards] = useState<Flashcard[]>([]);
  const [cards, setCards] = useState<Flashcard[]>([]);

  useEffect(() => {
    if (initialDeckId) {
      setSelectedDeckId(initialDeckId);
    }
  }, [initialDeckId]);

  // デッキが選択されたら生データを読み込む
  useEffect(() => {
    if (!selectedDeckId || !allData) return;

    let newCards: Flashcard[] = [];
    switch (selectedDeckId) {
      case 'sc':
        if (allData.scTerms) {
          newCards = mapTermsToCards(allData.scTerms, 'sc', learningMode);
        }
        break;
      case 'db':
        if (allData.dbTerms) {
          newCards = mapTermsToCards(allData.dbTerms, 'db', learningMode);
        }
        break;
      case 'sa':
        if (allData.saTerms) {
          newCards = mapTermsToCards(allData.saTerms, 'sa', learningMode);
        }
        break;
      case 'pm':
        if (allData.pmTerms) {
          newCards = mapTermsToCards(allData.pmTerms, 'pm', learningMode);
        }
        break;
      case 'sm':
        if (allData.smTerms) {
          newCards = mapTermsToCards(allData.smTerms, 'sm', learningMode);
        }
        break;
      case 'au':
        if (allData.auTerms) {
          newCards = mapTermsToCards(allData.auTerms, 'au', learningMode);
        }
        break;
      case 'st':
        if (allData.stTerms) {
          newCards = mapTermsToCards(allData.stTerms, 'st', learningMode);
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
          newCards = mapSyllabusToCards(allData.apSyllabus);
        }
        break;
      case 'fe':
        if (allData.feSyllabus) {
          newCards = mapSyllabusToCards(allData.feSyllabus);
        }
        break;
    }

    setRawCards(newCards);
    // 初期状態では全選択 or カテゴリがない場合はそのまま
    const hasCategories = newCards.some((c) => !!c.largeCategory);
    if (!hasCategories) {
      setCards(newCards.sort(() => Math.random() - 0.5));
    } else {
      setCards([]); // カテゴリ選択を待つ
    }
  }, [selectedDeckId, allData, learningMode]);

  // カテゴリが選択されたらフィルタリングしてセット
  useEffect(() => {
    if (!selectedCategory || rawCards.length === 0) return;

    let filtered = rawCards;
    if (selectedCategory !== 'ALL') {
      filtered = rawCards.filter((c) => c.largeCategory === selectedCategory);
    }

    // 数が多い場合は100枚に制限（負荷対策・学習効率）
    const finalCards = filtered.sort(() => Math.random() - 0.5).slice(0, 100);
    setCards(finalCards);
  }, [selectedCategory, rawCards]);

  const handleBackToMenu = () => {
    setSelectedDeckId(null);
    setSelectedCategory(null);
    setRawCards([]);
    setCards([]);
  };

  const handleBackToCategory = () => {
    setSelectedCategory(null);
    setCards([]);
  };

  if (!selectedDeckId) {
    return <DeckSelector onSelect={setSelectedDeckId} />;
  }

  const categories = Array.from(new Set(rawCards.map((c) => c.largeCategory).filter(Boolean))) as string[];

  // デッキ選択済みかつ、カテゴリ未選択かつ、カテゴリが存在する場合
  if (categories.length > 0 && !selectedCategory) {
    return (
      <CategorySelector
        categories={categories}
        rawCards={rawCards}
        onSelect={setSelectedCategory}
        onBack={handleBackToMenu}
      />
    );
  }

  // データ読み込み中（rawCardsがない、もしくはカテゴリはあるが未選択）
  if (rawCards.length === 0 || (categories.length > 0 && !selectedCategory)) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p>データを読み込んでいます...</p>
        <button class="control-btn" onClick={handleBackToMenu}>
          戻る
        </button>
      </div>
    );
  }

  const isAdvancedExam = ['sc', 'db', 'sa', 'pm', 'sm', 'au', 'st'].includes(selectedDeckId);

  return (
    <div>
      <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {!initialDeckId && (
            <button
              onClick={handleBackToMenu}
              style={{ background: 'none', border: 'none', color: '#3b82f6', cursor: 'pointer', fontSize: '0.9rem' }}
            >
              ← デッキ選択
            </button>
          )}
          {categories.length > 0 && (
            <button
              onClick={handleBackToCategory}
              style={{ background: 'none', border: 'none', color: '#3b82f6', cursor: 'pointer', fontSize: '0.9rem' }}
            >
              ← 分野選択
            </button>
          )}
        </div>

        {isAdvancedExam && (
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => setLearningMode('term-to-def')}
              style={{
                fontSize: '0.7rem',
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
                background: learningMode === 'term-to-def' ? '#3b82f6' : 'rgba(255,255,255,0.1)',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
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
                cursor: 'pointer',
              }}
            >
              説明→用語
            </button>
          </div>
        )}
      </div>
      <CardSession initialCards={cards} deckId={selectedDeckId} />
    </div>
  );
}
