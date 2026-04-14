# Task Management

## 📝 記事作成バックログ (Content Backlog)

- [x] IPA シラバス追従 (trend)
- [x] Gemini を使った効率的暗記法 (method)
- [x] ITパスポート合格後のキャリアパス (career)

## 🚀 Phase 5: 高度な学習機能 & データ拡充 (Advanced Features)

- [x] **AIハック・自習用キット化機能の実装** (GenAI Ethics Quiz等へのJSON注入UI)
- [x] **記事執筆: 「生成AIで10分で自作する、自分専用のIT資格対策アプリ」**
- [x] **フラッシュカードアプリの拡充 (レベル1〜3完全対応)**
  - [x] AP（応用情報）シラバス用語の全データ抽出とインポート
  - [x] デッキ選択画面での分野別（テクノロジ等）フィルタリング機能の実装
- [ ] **高度試験向け専門用語セットの生成**

## 📍 地域最適化 (Prefecture Optimization)

- [ ] **地域特性に合わせたキャリア戦略（Career）のリライト**
  - [ ] 優先ドラフトのリライト（文系学生、セキュマネ、SESキャリアアップ）
  - [ ] 都道府県別年収データと資格の相関可視化記事の追加
- [ ] **フロントエンド連携（将来タスク）**
  - [ ] ユーザーのlocateから地域を自動判別し、ハックをサジェストする機能の実装

## 📢 SNS戦略 & インデックス促進 (SNS Strategy)

- [ ] **SNS運用プランの実行 (`.workspace/tasks/sns-strategy.md`)**
  - [ ] 既存記事（古い順）のピックアップリスト作成
  - [ ] X(Twitter)での定期投稿フローの構築
  - [ ] インプレッション・インデックス状況の定点観測

<!--
## ✅ 完了済み (Completed)

### 2027年 IPA試験再編シリーズ (Completed)
- [x] **IPA試験再編まとめ記事 (trend)**: `ipa-2027-restructuring`
- [x] **新試験攻略戦略記事 (method)**: `new-ipa-exam-study-strategy`
- [x] **年代・職種別狙い目ガイド (career)**: `ipa-new-exam-target-guide`

### ニッチSEO・本音ハック攻略シリーズ (Completed)
- [x] **ITパスポート「恥ずかしい」克服術 (career)**: `itp-shameful-career-hack`
- [x] **基本情報：会社命令の最小努力合格 (career)**: `fe-useless-corporate-hack`
- [x] **応用情報：採点者心理と部分点獲得 (method)**: `ap-grader-blackbox-hack`
- [x] **支援士：登録なし合格証活用術 (career)**: `sc-unregistered-benefit-hack`
- [x] **報奨金・手当の増額交渉術 (career)**: `ipa-reward-negotiation-hack`
- [x] **応用情報：記述式の採点意図プロファイリング (method)**: `ap-grader-intent-hack`
- [x] **基本情報：擬似言語のPython可視化ハック (method)**: `fe-pseudo-code-visual-hack`
- [x] **ITパスポート：10日前からのパニック合格術 (method)**: `itp-10-days-panic-hack`
- [x] **ITパスポート：領収書の宛名変更トラブル対処 (method)**: `itp-receipt-name-change-hack`
- [x] **セキュマネ：無意味な「常識」と合格の壁 (method)**: `sg-meaningless-rumors-hack`

### 🚀 Phase 5: 高度な学習機能 & データ拡充 (Advanced Features)
- [x] **フラッシュカード機能の実装 (Approach A)**
  - [x] 共通シラバス (IP, SG, FE, AP) をベースとした専門用語暗記モード
  - [x] 生成AI・AI倫理クイズでのフラッシュカード対応

### SEO施策 (Done)
- [x] GA4タグの設定
- [x] SearchConsoleの登録
      https://syllabushack.com/sitemap-index.xml
- [x] SCの稼働を確認したBingへ登録

### 🚀 Phase 4: 最終調整・デプロイ (Final Polish & Deployment)
- [x] **リンク・導線の最終検証**
  - [x] 全ページ・内部リンクの動作確認（404エラーの完全排除）
  - [x] 各カテゴリ一覧・タグ一覧からの遷移チェック
- [x] **コンテンツ・アプリの品質チェック**
  - [x] クイズアプリ全設問の最終校正（誤字脱字、解説の不整合修正）
  - [x] クイズアプリのインターフェース標準化 (examId, examName Props of 統一)
  - [x] SG科目Bドリルのモバイル・ダークモード表示改善
- [x] **お問い合わせ・プロフィール・SNS連携の修正**
  - [x] `/contact` ページの X (Twitter) リンクを `@sasisi344` に修正
  - [x] Aboutページ（プロフィール）の最新情報更新と自己紹介セクションの追加
  - [x] お問い合わせフォームの実装（Google Forms埋め込み）
  - [x] ファビコンデザイン
- [x] **デプロイ (Production Release)**
  - [x] 本番環境へのデプロイ完了

### 🛠️ Phase 3: データ整備・機能拡張 (Data & Features)
- [x] **試験マスタデータの精査** (`src/data/master/exams.json`)
  - [x] 正式名称・略称・英語名の確認と修正
- [x] **既存記事へのタグ付け**
  - [x] `knowledge` フロントマターの追記（アプリ連携用）
- [x] **新規アプリ開発**
  - [x] 生成AI・AI倫理特化型クイズの要件定義作成
  - [x] SG科目Bケーススタディ演習の要件定義作成
  - [x] 生成AIキーワード調査用ディープリサーチプロンプト作成
  - [x] 生成AIキーワード調査の実行とデータ (`questions-genai-ethics.json`) の作成
- [x] 生成AI・AI倫理クイズアプリの実装 (`src/apps/genai-ethics-quiz/`)
- [x] SG科目Bケーススタディ問題の調査とデータ (`questions-sg-b.json`) の作成
- [x] SG科目B実務シナリオ演習ドリルの実装 (`src/apps/sg-subject-b-quiz/`)

### Phase 2: コンテンツ拡充 (Content Volume)
- [x] **カテゴリ記事の目標数達成**
  - [x] Trend: 4 → 10 (IPA試験日程、最新技術トレンド)
  - [x] Career: 5 → 10 (資格活用法、転職市場動向)
  - [x] App: 1 → 10 (自作アプリのページ + 便利ツール紹介)
  - [x] Method: 21 → 30 (既存記事のブラッシュアップ含む、カバー画像全生成完了)

### Phase 1: アプリ開発完了 (SG & FE)
- [x] **FE (基本情報技術者) 試験対応**
  - [x] syllabus-fe.json の抽出・検証 (v2 extractor)
  - [x] 科目B（アルゴリズム・プログラミング）の対応方針策定・実装
  - [x] 問題生成（科目A・科目B） [生成完了: 169問]
  - [x] [機能] クイズアプリのFE対応とUI改善（スクロール追従・固定メニュー対策）
  - [x] [機能] AI解説連携の強化 (抽出キーワードを活用したプロンプト最適化)
  - [x] [マイルストーン] 本格運用（攻略シミュレーター）への移行・戦略的設計の導入
  - [x] **最終デプロイ準備**
    - [x] `npm run build` によるビルドチェック
    - [x] プレビュー環境での動作確認
- [x] **IP (ITパスポート) 仕上げ**
  - [x] 生成データの品質チェック（重複、フォーマット、解説の質）
  - [x] アプリでの動作確認（バランス調整）
- [x] **SG (情報セキュリティマネジメント) 試験対応**
  - [x] 全体の動作確認とレビュー
  - [x] 生成データの品質チェック（科目A・科目B）
  - [x] カバー画像の作成と統合
  - [x] generate-quiz-sg.js の実行
  - [x] 科目B（ケーススタディ）の対応検討・生成完了
  - [x] アプリへのシナリオ表示機能の実装・統合

### Phase 0: 環境・基盤整備
- [x] トップページのLP化
- [x] ITパスポート・セキュマネ設問アプリのプロトタイプ作成
- [x] 既存記事の Page Bundle 移行確認
- [x] `.skills` の動作確認
- [x] サイトマップの生成確認
- [x] 現在のカテゴリ構成の整理と正規化 (`trend`, `method`, `career`, `app`)
- [x] URLslugのAstroベース変更
- [x] レイアウト・メタデータ設定の修正
- [x] ヘッダーナビゲーションの更新
- [x] 学習メソッド（Method）カテゴリのトップページ作成
- [x] GEMINI.md の Astro 最適化
- [x] Appの回答解説が長いと下にスクロールする移動距離が長くて上にまたスクロールするのが面倒すぎる。フォーカスをアプリ上部、問題が表示されている部分をフォーカスするようにしたいね。
- [x] ワークスペースフォルダの作成
- [x] トレンドカテゴリ記事の執筆
- [x] キャリア開発記事の執筆
- [x] 学習メソッド記事の執筆
- [x] 現在のカテゴリ構成と階層を再確認・整理
- [x] ウェブアプリ開発用フォルダ (`src/apps`) の整備和インデックス化
- [x] クイズアプリ基盤の構築 (ITパスポート MVP完了)
- [x] クイズデータベースの拡充
- [x] 不自然なキーワードがある場合は補正して、とプロンプトに追加する
- [x] 各試験の「シラバス」リスト化JSON
-->
