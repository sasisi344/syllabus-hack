export type {
  GenericQuestion as Question,
  GenericChoice as Choice,
  GenericAnswerRecord as AnswerRecord,
  GenericUserProgress as UserProgress,
} from '../shared/GenericQuizApp';

export type BokiField = 'shouhin-baibai' | 'genkin-yokin' | 'saiken-saimu' | 'kotei-shisan' | 'kessan';

export const FIELD_LABELS: Record<BokiField, string> = {
  'shouhin-baibai': '商品売買',
  'genkin-yokin': '現金・預金',
  'saiken-saimu': '債権・債務',
  'kotei-shisan': '固定資産',
  kessan: '決算整理',
};
