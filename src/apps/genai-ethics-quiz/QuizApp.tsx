/** @jsxImportSource preact */
import { useState } from 'preact/hooks';
import JsonInjector from './JsonInjector';
import CategoryDrill from './CategoryDrill';
import FlashcardDrill from './FlashcardDrill';
import type { QuizAppProps, AppMode, Question } from './types';
import './quiz.css';

/**
 * GenAI Ethics Quiz App
 * 生成AIとAI倫理の重要用語に特化したクイズアプリ
 */
export default function QuizApp({ questions: initialQuestions, examId, examName }: QuizAppProps) {
  const [mode, setMode] = useState<AppMode>('drill');
  const [localQuestions, setLocalQuestions] = useState<Question[]>(initialQuestions);
  const [isHacked, setIsHacked] = useState(false);

  const handleInject = (newQuestions: Question[]) => {
    setLocalQuestions(newQuestions);
    setMode('drill');
    setIsHacked(true);
  };

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
        <button 
          class={`mode-btn ${mode === 'hack' ? 'is-active' : ''} hack-mode-btn`} 
          onClick={() => setMode('hack')}
        >
          🚀 インジェクター
        </button>
      </div>

      {isHacked && (
        <div class="hack-badge">
          <span>Hacked: 自作キット実行中</span>
          <button onClick={() => { setLocalQuestions(initialQuestions); setIsHacked(false); }}>
            元に戻す
          </button>
        </div>
      )}

      {mode === 'drill' && (
        <CategoryDrill questions={localQuestions} examId={examId} examName={examName} />
      )}
      
      {mode === 'flashcard' && (
        <FlashcardDrill questions={localQuestions} examId={examId} examName={examName} />
      )}

      {mode === 'hack' && (
        <JsonInjector 
          onInject={handleInject} 
          onCancel={() => setMode('drill')} 
        />
      )}
    </div>
  );
}
