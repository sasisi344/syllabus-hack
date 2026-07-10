import type { DiagnosisResult } from './types';

const STORAGE_KEY = 'sh_diag_aws-cert-diagnosis';

export const loadLastResult = (): DiagnosisResult | null => {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as DiagnosisResult;
  } catch {
    return null;
  }
};

export const saveResult = (result: DiagnosisResult): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
  } catch {
    // Storage full — ignore silently
  }
};
