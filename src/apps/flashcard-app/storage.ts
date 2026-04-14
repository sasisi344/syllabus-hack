/**
 * Flashcard App — LocalStorage 習熟度管理（sh_flashcard_{deckId} キー規約準拠）
 */
import type { CardState, LearningStatus } from './types';

const KEY_PREFIX = 'sh_flashcard_';

export type DeckProgress = Record<string, CardState>;

export const loadDeckProgress = (deckId: string): DeckProgress => {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(`${KEY_PREFIX}${deckId}`);
    if (!raw) return {};
    return JSON.parse(raw) as DeckProgress;
  } catch {
    return {};
  }
};

export const saveDeckProgress = (deckId: string, progress: DeckProgress): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(`${KEY_PREFIX}${deckId}`, JSON.stringify(progress));
  } catch {
    // Storage full — ignore silently
  }
};

export const updateCardState = (deckId: string, cardId: string, status: LearningStatus): DeckProgress => {
  const progress = loadDeckProgress(deckId);
  progress[cardId] = { cardId, status, lastViewed: Date.now() };
  saveDeckProgress(deckId, progress);
  return progress;
};

export const getMasteredCount = (progress: DeckProgress): number =>
  Object.values(progress).filter((s) => s.status === 'mastered').length;
