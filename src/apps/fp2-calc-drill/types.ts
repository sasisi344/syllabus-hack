export type {
  GenericQuestion as Question,
  GenericChoice as Choice,
  GenericAnswerRecord as AnswerRecord,
  GenericUserProgress as UserProgress,
} from '../shared/GenericQuizApp';

export type Fp2Field = 'life-plan' | 'risk' | 'kinyu' | 'tax' | 'fudousan' | 'souzoku';

export const FIELD_LABELS: Record<Fp2Field, string> = {
  'life-plan': 'ライフプランニング',
  risk: 'リスク管理',
  kinyu: '金融資産運用',
  tax: 'タックスプランニング',
  fudousan: '不動産',
  souzoku: '相続・事業承継',
};
