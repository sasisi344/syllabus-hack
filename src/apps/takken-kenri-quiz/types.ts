export type {
  GenericQuestion as Question,
  GenericChoice as Choice,
  GenericAnswerRecord as AnswerRecord,
  GenericUserProgress as UserProgress,
} from '../shared/GenericQuizApp';

export type KenriField = 'minpou-soukoku' | 'buppou' | 'saiken' | 'souzoku-shakuchi';

export const FIELD_LABELS: Record<KenriField, string> = {
  'minpou-soukoku': '民法総則',
  buppou: '物権',
  saiken: '債権・契約',
  'souzoku-shakuchi': '相続・借地借家法',
};
