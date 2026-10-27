// 筆者（さしし）の資格との関係。2026-10-27 に本人が申告した内容のみを書く（創作しない）。
// 記事末尾の執筆者欄（SinglePost.astro）と about ページで使う。キーは frontmatter の knowledge.examId。

export interface AuthorExamStatus {
  name: string;
  status: string;
}

export const AUTHOR_EXAM_STATUS: Record<string, AuthorExamStatus> = {
  ip: {
    name: 'ITパスポート',
    status: '受験して合格しています（このサイトを作るずっと前で、今のCBT・シラバスとは形式が違います）。',
  },
  sg: { name: '情報セキュリティマネジメント', status: 'これから学習する予定です（受験も検討中）。現時点では未受験です。' },
  ap: { name: '応用情報技術者', status: 'これから学習する予定です（受験も検討中）。現時点では未受験です。' },
  'genai-pass': {
    name: '生成AIパスポート',
    status: '未受験です。シラバスを確認し、すでに身についている内容が中心と判断しています。',
  },
  'g-kentei': { name: 'G検定', status: '未受験です。データ分析はマーケティングの実務で日常的に使っています。' },
  'ds-kentei': { name: 'DS検定', status: '未受験です。データ分析はマーケティングの実務で日常的に使っています。' },
  boki: { name: '日商簿記', status: '未受験です。' },
  fp: { name: 'FP技能検定', status: '未受験です。' },
};

// 特定の資格を扱わない記事（勉強法・AIの使い方など）
const NO_EXAM = new Set(['', 'common']);

/** 記事の examId から、執筆者欄に出す1文を返す。資格を扱わない記事は undefined。 */
export function authorStanceFor(examId?: string): string | undefined {
  if (!examId || NO_EXAM.has(examId)) return undefined;
  const s = AUTHOR_EXAM_STATUS[examId];
  return s ? `${s.name}は${s.status}` : '筆者はこの資格を受験していません。';
}
