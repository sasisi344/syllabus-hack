// 資格クラスター → Hub記事のマッピング一元管理
// ナビゲーション（src/navigation.ts）と資格一覧ページ（src/pages/certifications.astro）から参照する。
// Hub記事を新設したら本ファイルに追記すること（KW-DB側の正本は .workspace/data-set/cert-keyword-db/index.md）。

export interface CertHub {
  name: string;
  href: string;
  description: string;
}

export interface CertGroup {
  title: string;
  items: CertHub[];
}

export const certGroups: CertGroup[] = [
  {
    title: 'IPA 情報処理技術者試験',
    items: [
      {
        name: 'ITパスポート',
        href: '/method/itp-hub/',
        description: 'AI時代の最初の一手。社会人・学生の入門国家資格',
      },
      {
        name: '情報セキュリティマネジメント（SG）',
        href: '/method/sg-hub/',
        description: 'バックオフィス・非エンジニアのセキュリティ資格',
      },
      {
        name: '基本情報技術者（FE）',
        href: '/method/fe-hub/',
        description: 'エンジニアの登竜門。科目A・B対策から合格後まで',
      },
      {
        name: '応用情報技術者（AP）',
        href: '/method/ap-hub/',
        description: '午前・午後記述対策と高度試験へのステップアップ',
      },
      {
        name: '高度試験（SC・NW・PM ほか）',
        href: '/method/advanced-ipa-hub/',
        description: '分野別対策マップで高度区分を攻略',
      },
      {
        name: '高度試験 論文・記述対策',
        href: '/method/level4-strategy-hub/',
        description: '生成AIを専門家に変えて論文・記述の壁を越える',
      },
    ],
  },
  {
    title: 'クラウド・ネットワーク',
    items: [
      {
        name: 'AWS認定',
        href: '/method/aws-hub/',
        description: 'インフラエンジニアの最短キャリアロードマップ',
      },
      {
        name: 'CCNA',
        href: '/method/ccna-hub/',
        description: '世界共通のネットワーク資格をAIで突破',
      },
    ],
  },
  {
    title: 'AI・データ',
    items: [
      {
        name: 'G検定',
        href: '/method/g-kentei-hub/',
        description: 'AI活用人材の定番資格を2〜3ヶ月で取る',
      },
      {
        name: 'DS検定',
        href: '/method/ds-kentei-hub/',
        description: '統計・分析力をAIで体系化する最短ロードマップ',
      },
    ],
  },
  {
    title: 'ビジネス・事務',
    items: [
      {
        name: '日商簿記2・3級',
        href: '/method/boki-hub/',
        description: '仕訳暗記からCBT試験まで最短合格ロードマップ',
      },
      {
        name: 'FP2級',
        href: '/method/fp-hub/',
        description: 'CBT時代の合格戦略とAI活用学習ロードマップ',
      },
      {
        name: 'MOS',
        href: '/method/mos-hub/',
        description: 'Excel・Word試験の最短合格ロードマップ',
      },
      {
        name: '宅建（宅地建物取引士）',
        href: '/method/takken-hub/',
        description: '合格率15%の壁をAI学習で突破する',
      },
      {
        name: '知的財産管理技能検定',
        href: '/method/chiteki-zaisan-hub/',
        description: '知財検定3級から1級まで最短ロードマップ',
      },
    ],
  },
  {
    title: '設備・施工',
    items: [
      {
        name: '電験三種',
        href: '/method/denken-hub/',
        description: '1000時間の壁をAIで突破するロードマップ',
      },
      {
        name: '危険物取扱者（乙4）',
        href: '/method/kiken-butsu-hub/',
        description: '年180万人が受験する日本最大規模の資格',
      },
      {
        name: 'ビル管理系資格',
        href: '/method/biru-kanri-hub/',
        description: 'ビル管理士・マンション管理士・エネルギー管理士',
      },
      {
        name: 'ボイラー技士・冷凍機械責任者',
        href: '/method/boiler-refrigeration-hub/',
        description: '試験合格と免許取得は別物と知ってから始める',
      },
      {
        name: '消防設備士',
        href: '/method/shobo-setsubi-hub/',
        description: '乙6から甲種まで。記述式の実技（鑑別）をAIで攻略',
      },
      {
        name: '土木施工管理技士',
        href: '/method/doboku-sekou-hub/',
        description: '経験記述をAIで添削し独学合格',
      },
    ],
  },
];

// ヘッダードロップダウンに載せる主要Hub（多すぎると崩れるため代表のみ）
export const headerCertLinks: CertHub[] = [
  certGroups[0].items[0], // ITパスポート
  certGroups[0].items[2], // 基本情報
  certGroups[0].items[3], // 応用情報
  certGroups[0].items[4], // 高度試験
  certGroups[1].items[0], // AWS
  certGroups[3].items[0], // 簿記
  certGroups[3].items[1], // FP2級
  certGroups[3].items[3], // 宅建
];
