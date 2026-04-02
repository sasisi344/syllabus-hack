/** @jsxImportSource preact */
import { useState } from 'preact/hooks';
import CategoryDrill from './CategoryDrill';
import FlashcardDrill from './FlashcardDrill';
import type { QuizAppProps, AppMode } from './types';
import './quiz.css';

/**
 * GenAI Ethics Quiz App
 * 生成AIとAI倫理の重要用語に特化したクイズアプリ
 */
export default function QuizApp({ questions, examId, examName }: QuizAppProps) {
  const [mode, setMode] = useState<AppMode>('drill');

  return (
    <div class="ethics-quiz-app">
      <div class="app-mode-switcher">
        <button 
          class={`mode-btn ${mode === 'drill' ? 'is-active' : ''}`} 
          onClick={() => setMode('drill')}
        >
          ✍️ 4択ドリル
        </button>
        <button 
          class={`mode-btn ${mode === 'flashcard' ? 'is-active' : ''}`} 
          onClick={() => setMode('flashcard')}
        >
          🎴 暗記カード
        </button>
      </div>

      {mode === 'drill' ? (
        <CategoryDrill questions={questions} examId={examId} examName={examName} />
      ) : (
        <FlashcardDrill questions={questions} examId={examId} examName={examName} />
      )}
    </div>
  );
}
