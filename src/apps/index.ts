/**
 * Syllabus Hack App Registry
 * Webアプリの実装とメタデータを一元管理するためのインデックスファイルです。
 *
 * 役割:
 * 1. アプリのメタデータ（タイトル、カテゴリ、説明）の定義
 * 2. 各コンテンツページ（src/data/post/app/...）からの呼び出しの正規化
 */

export interface AppMetadata {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: 'quiz' | 'tool' | 'converter';
  status: 'development' | 'beta' | 'stable';
  examId?: string;
}

export const appRegistry: Record<string, AppMetadata> = {
  'it-passport-quiz': {
    id: 'it-passport-quiz',
    slug: 'it-passport-quiz',
    title: 'ITパスポート 模擬試験シミュレーター',
    description: '本番のCBT試験を忠実に再現した模擬試験ツール。分野別ドリル＋AI解説付き。',
    category: 'quiz',
    status: 'beta',
    examId: 'ip',
  },
  'pdf-to-text': {
    id: 'pdf-to-text',
    slug: 'pdf-to-text',
    title: 'PDFテキスト変換君',
    description: 'シラバスなどのPDFをプロンプト用に最適化されたテキストに変換',
    category: 'tool',
    status: 'development',
  },
  'ip-strategy-drill': {
    id: 'ip-strategy-drill',
    slug: 'ip-strategy-drill',
    title: 'ITパスポート ストラテジ系 集中100問ドリル',
    description: '配点35%を占める最重要分野「ストラテジ系」に特化した集中演習ドリル。AI解説付き。',
    category: 'quiz',
    status: 'beta',
    examId: 'ip',
  },
  'sc-specialist-quiz': {
    id: 'sc-specialist-quiz',
    slug: 'sc-specialist-quiz', // Added slug based on id
    title: 'SC（情報処理安全確保支援士）専門用語特訓',
    description: '高度試験（SC）の午前Ⅱおよび午後対策に必要な重要語彙をマスター。シラバスの最新用語に対応。',
    category: 'quiz', // Changed 'type' to 'category'
    status: 'development', // Added a default status
    examId: 'sc',
  },
  'sg-quiz': {
    id: 'sg-quiz',
    slug: 'sg-quiz',
    title: '情報セキュリティマネジメント 攻略マスター',
    description: '科目A・B完全対応。AIによる実務シナリオ演習でSG合格を確実にする戦略的シミュレーター。',
    category: 'quiz',
    status: 'stable',
    examId: 'sg',
  },
  'fe-quiz': {
    id: 'fe-quiz',
    slug: 'fe-quiz',
    title: '基本情報技術者 攻略シミュレーター',
    description: 'FE試験の科目A（全分野）と科目B（アルゴリズム・セキュリティ）に完全対応した戦略的学習ツール。',
    category: 'quiz',
    status: 'stable',
    examId: 'fe',
  },
  'genai-ethics-quiz': {
    id: 'genai-ethics-quiz',
    slug: 'genai-ethics-quiz',
    title: '生成AI・AI倫理「新用語」特化型クイズ',
    description: '最新シラバス対応！生成AIとAI倫理の重要キーワードをAI解説付きドリルで攻略。',
    category: 'quiz',
    status: 'development',
  },
  'sg-subject-b-quiz': {
    id: 'sg-subject-b-quiz',
    slug: 'sg-subject-b-quiz',
    title: 'SG科目B 実務シナリオ演習ドリル',
    description: '情報セキュリティマネジメント試験の最難関「科目B」に特化。実務シナリオ形式の長文問題を攻略。',
    category: 'quiz',
    status: 'development',
    examId: 'sg',
  },
  'genai-passport-quiz': {
    id: 'genai-passport-quiz',
    slug: 'genai-passport-quiz',
    title: '生成AIパスポート 模擬試験シミュレーター',
    description: 'シラバス完全準拠！AIの基礎から生成AIの仕組み、プロンプト、倫理まで分野別ドリルで攻略。',
    category: 'quiz',
    status: 'beta',
    examId: 'genai-pass',
  },
  'genai-ip-quiz': {
    id: 'genai-ip-quiz',
    slug: 'genai-ip-quiz',
    title: '生成AI導入実務者検定 攻略マスター',
    description: 'ビジネス実務での生成AI導入・運用プロセスに特化！実例クイズとAI解説でROI向上スキルを磨く。',
    category: 'quiz',
    status: 'beta',
    examId: 'genai-ip',
  },
  'flashcard-app': {
    id: 'flashcard-app',
    slug: 'flashcard-app',
    title: '暗記ハック：IPA重要用語フラッシュカード',
    description:
      'ITパスポートから応用情報まで対応。隙間時間にカードをめくって、膨大なシラバス用語を効率的にインプット。',
    category: 'tool',
    status: 'development',
  },
  'ip-management-drill': {
    id: 'ip-management-drill',
    slug: 'ip-management-drill',
    title: 'ITパスポート マネジメント系 集中80問ドリル',
    description:
      'プロジェクト管理・サービスマネジメントなど、実務に直結する「マネジメント系」に特化した集中演習ドリル。',
    category: 'quiz',
    status: 'beta',
    examId: 'ip',
  },
  'ip-technology-drill': {
    id: 'ip-technology-drill',
    slug: 'ip-technology-drill',
    title: 'ITパスポート テクノロジ系 集中100問ドリル',
    description:
      '基礎理論からIT技術、セキュリティまで。配点の半分を占める「テクノロジ系」を完全網羅した集中演習ドリル。',
    category: 'quiz',
    status: 'beta',
    examId: 'ip',
  },
  'genai-trend-quiz': {
    id: 'genai-trend-quiz',
    slug: 'genai-trend-quiz',
    title: '生成AIトレンド・ロジック完全攻略ドリル',
    description: 'IPA高度試験（Level 4）対応！2025年以降の最新トレンド、RAG、AIガバナンス、セキュリティを最速攻略する。',
    category: 'quiz',
    status: 'development',
    examId: 'common',
  },
  'pm-essay-gacha': {
    id: 'pm-essay-gacha',
    slug: 'pm-essay-gacha',
    title: 'Theme-Gacha-Next (論文構成案シミュレーター)',
    description: '高度試験（PM/ST）論文対策の決定版。AIによる即時評価機能付き！ランダムな「テーマ×論点×制約」に対し10分で構成案を構築する特訓ツール。',
    category: 'tool',
    status: 'beta',
    examId: 'common',
  },
  // src/apps/ に実装済みだが未登録だったスラッグ
  'ap-quiz': {
    id: 'ap-quiz',
    slug: 'ap-quiz',
    title: '応用情報技術者(AP) 試験 攻略シミュレーター',
    description: 'AP科目A（午前）・科目B（午後ケーススタディ）に対応した演習ツール。AI解説付き。',
    category: 'quiz',
    status: 'stable',
    examId: 'ap',
  },
  'genai-cert-quiz': {
    id: 'genai-cert-quiz',
    slug: 'genai-cert-quiz',
    title: '生成AI認定 模擬試験',
    description: '生成AIパスポート・G検定向けの基礎知識確認クイズ。AI活用倫理・プロンプト設計・モデル基礎を網羅。',
    category: 'quiz',
    status: 'development',
    examId: 'common',
  },
  'boki-shiwake-drill': {
    id: 'boki-shiwake-drill',
    slug: 'boki-shiwake-drill',
    title: '日商簿記3級 仕訳ドリル',
    description: '商品売買・現金預金・債権債務・固定資産・決算整理の5分野を、取引文から仕訳を選ぶ形式で反復演習。',
    category: 'quiz',
    status: 'development',
    examId: 'boki',
  },
  'takken-kenri-quiz': {
    id: 'takken-kenri-quiz',
    slug: 'takken-kenri-quiz',
    title: '宅建 権利関係 一問一答',
    description: '民法総則・物権・債権契約・相続借地借家法を○×形式で攻略。頻出のひっかけ論点を反復演習。',
    category: 'quiz',
    status: 'development',
    examId: 'takken',
  },
  'fp2-calc-drill': {
    id: 'fp2-calc-drill',
    slug: 'fp2-calc-drill',
    title: 'FP2級 計算問題ドリル',
    description: '6つの係数・必要保障額・PER/PBR・税額計算・建蔽率容積率・相続税まで頻出計算パターンを反復演習。',
    category: 'quiz',
    status: 'development',
    examId: 'fp2',
  },
  'g-kentei-mock-exam': {
    id: 'g-kentei-mock-exam',
    slug: 'g-kentei-mock-exam',
    title: 'G検定 模擬試験シミュレーター',
    description: 'AIの歴史・機械学習・ディープラーニング・法律倫理を制限時間付きの本番形式で演習できる模擬試験。',
    category: 'quiz',
    status: 'development',
    examId: 'g-kentei',
  },
  'aws-cert-diagnosis': {
    id: 'aws-cert-diagnosis',
    slug: 'aws-cert-diagnosis',
    title: 'AWS資格診断',
    description: '職種・クラウド経験・取得目的の3つの質問から、CLF・SAA・ANSのうちどれから始めるべきかを診断。',
    category: 'tool',
    status: 'development',
  },
};

/**
 * IDからアプリのメタデータを取得
 */
export const getAppById = (id: string): AppMetadata | undefined => {
  return appRegistry[id];
};
