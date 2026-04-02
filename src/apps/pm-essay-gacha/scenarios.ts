/**
 * PM/ST 論文 追加制約・シチュエーション データ定義
 */

export interface EssayScenario {
  id: string;
  title: string;
  description: string;
}

export const essayScenarios: EssayScenario[] = [
  {
    id: 'stakeholder_conflict',
    title: 'ステークホルダーの意見対立',
    description: '主要なステークホルダー間で、プロジェクトの優先順位や機能要件について真っ向から対立が発生しており、合意形成が困難な状況。'
  },
  {
    id: 'deadline_shortened',
    title: '納期の大幅な前倒し',
    description: '競合他社の動きを受け、経営層から当初予定より1ヶ月の納期前倒しを強く要求された状況。'
  },
  {
    id: 'budget_cut',
    title: '予算の削減',
    description: '全社的なコスト削減施策により、進行中のプロジェクト予算を20%削減しなければならない状況。'
  },
  {
    id: 'keyman_withdrawal',
    title: 'キーマンの急な離脱',
    description: 'プロジェクトの技術的な核となっていた主任担当者が、個人的な事情で急遽プロジェクトを離脱することになった状況。'
  },
  {
    id: 'regulatory_change',
    title: '法規制・ルールの変更',
    description: '開発の最終段階で、関連する法規制が変更され、現在のアーキテクチャではコンプライアンスを満たせなくなる可能性が浮上した状況。'
  },
  {
    id: 'technical_debt',
    title: '深刻な技術的負債の発覚',
    description: '既存システムの刷新中、想定を遥かに超える複雑なスパゲッティコードと、ドキュメント化されていない仕様が多数発見された状況。'
  },
  {
    id: 'generative_ai_risk',
    title: 'AI精度の不確実性',
    description: '導入した生成AIの精度が期待値に届かず、誤情報の提供リスクがビジネス上の許容範囲を超えそうになっている状況。'
  }
];
