# 完了済みタスク アーカイブ

---

## 🔥 Negative-Narrative 戦略コンテンツ（完了: 2026-04-18）

### Pillar 1: 事務手続き・組織の不条理ハック

- [x] 「結婚改姓後の氏名変更 試験当日 間に合わない」対処AIプロンプト記事 → `itp-name-change-marriage-hack`
- [x] 「試験欠席 親への言い訳 テンプレート」AIプロンプト記事 → `ipa-absence-report-hack`
- [x] 「ITパスポート 領収書 紛失 経理に詰められたとき」上申書テンプレ → `itp-receipt-name-change-hack`

### Pillar 2: 学習「理解拒絶」救済ハック

- [x] 「基本情報 科目B アルゴリズム 1問も解けない」擬似言語Python可視化ハック → `fe-pseudo-code-visual-hack`
- [x] 「IPアドレス計算 意味不明 地獄」向けAIメタファー変換記事 → `ip-address-ai-metaphor-hack`
- [x] 「SQL 結合 覚え方 脳が拒絶」向けビジュアルAI解説記事 → `sql-join-visual-ai-hack`

### Pillar 3: 資格の空虚さ克服ハック

- [x] 「セキュマネ 役に立たない」という呪いを解く実務ライセンス化記事 → `sg-meaningless-rumors-hack`
- [x] 「応用情報 受かりっぱなし 使い道」AIと組み合わせた実務活用記事 → `ap-cert-practical-use-hack`
- [x] 「ITパスポート 恥ずかしい 40代未経験」自信回復キャリア戦略記事 → `itp-shameful-career-hack`

### Pillar 4: 若年層・非IT層の疎外感ハック

- [x] 「情報I 共通テスト vs ITパスポート どっちが難しい」比較解説記事 → `itp-vs-info1-comparison-hack`
- [x] 「地方事務職 ITパスポート 給料上がらない」リアル戦略記事 → `itp-rural-salary-hack`
- [x] 「スマホしか触れない大学生 ITパスポート」ゼロから合格ロードマップ → `itp-smartphone-only-hack`

---

## 📝 記事作成バックログ（完了）

- [x] IPA シラバス追従 (trend)
- [x] Gemini を使った効率的暗記法 (method)
- [x] ITパスポート合格後のキャリアパス (career)

### ニッチSEO・本音ハック攻略シリーズ

- [x] ITパスポート「恥ずかしい」克服術 (career) → `itp-shameful-career-hack`
- [x] 基本情報：会社命令の最小努力合格 (career) → `fe-useless-corporate-hack`
- [x] 応用情報：採点者心理と部分点獲得 (method) → `ap-grader-blackbox-hack`
- [x] 支援士：登録なし合格証活用術 (career) → `sc-unregistered-benefit-hack`
- [x] 報奨金・手当の増額交渉術 (career) → `ipa-reward-negotiation-hack`
- [x] 応用情報：記述式の採点意図プロファイリング (method) → `ap-grader-intent-hack`
- [x] 基本情報：擬似言語のPython可視化ハック (method) → `fe-pseudo-code-visual-hack`
- [x] ITパスポート：10日前からのパニック合格術 (method) → `itp-10-days-panic-hack`
- [x] ITパスポート：領収書の宛名変更トラブル対処 (method) → `itp-receipt-name-change-hack`
- [x] セキュマネ：無意味な「常識」と合格の壁 (method) → `sg-meaningless-rumors-hack`

### 2027年 IPA試験再編シリーズ

- [x] IPA試験再編まとめ記事 (trend) → `ipa-2027-restructuring`
- [x] 新試験攻略戦略記事 (method) → `new-ipa-exam-study-strategy`
- [x] 年代・職種別狙い目ガイド (career) → `ipa-new-exam-target-guide`

### IPA以外カテゴリ（先行対応済み）

- [x] FP2/3 × AI活用学習ハック記事 → `fp-ai-simulator-hack`
- [x] AWS × 逆算ロードマップ記事 → `aws-personalized-roadmap-hack`

---

## 🚀 Phase 5: 高度な学習機能 & データ拡充（完了）

- [x] AIハック・自習用キット化機能の実装 (GenAI Ethics Quiz等へのJSON注入UI)
- [x] 記事執筆: 「生成AIで10分で自作する、自分専用のIT資格対策アプリ」
- [x] フラッシュカードアプリの拡充 (レベル1〜3完全対応)
  - [x] AP（応用情報）シラバス用語の全データ抽出とインポート
  - [x] デッキ選択画面での分野別フィルタリング機能の実装
  - [x] 共通シラバス (IP, SG, FE, AP) をベースとした専門用語暗記モード
  - [x] 生成AI・AI倫理クイズでのフラッシュカード対応

### アプリ改善タスク（2026-04-15）

- [x] LocalStorage キー規約の統一: `sh_quiz_{examId}` に統一。各 `progress.ts` 更新・自動マイグレーション追加
- [x] 回答履歴件数の統一: `genai-ethics-quiz` の履歴上限を 1000 → 100 件に修正
- [x] デッドコードの整理: `it-passport-quiz/App.ts`（未使用スタブ）を削除
- [x] 進捗未実装アプリ: `sg-subject-b-quiz` に `progress.ts` を新規作成し累積成績を表示
- [x] フラッシュカード: `flashcard-app` に `storage.ts` を追加。デッキ別習熟度をLocalStorageに保存
- [x] セキュリティ: `pm-essay-gacha` の Gemini API キー入力欄に警告を追加
- [x] 型安全: `pdf-to-text/SyllabusParser.tsx` の `any` 型をローカル型定義に置き換え

---

## 🚀 Phase 4: 最終調整・デプロイ（完了）

- [x] 全ページ・内部リンクの動作確認（404エラーの完全排除）
- [x] クイズアプリ全設問の最終校正（誤字脱字、解説の不整合修正）
- [x] クイズアプリのインターフェース標準化 (examId, examName Props 統一)
- [x] SG科目Bドリルのモバイル・ダークモード表示改善
- [x] `/contact` ページの X (Twitter) リンクを `@sasisi344` に修正
- [x] Aboutページの最新情報更新と自己紹介セクションの追加
- [x] お問い合わせフォームの実装（Google Forms埋め込み）
- [x] ファビコンデザイン
- [x] 本番環境へのデプロイ完了

---

## 🛠️ Phase 3: データ整備・機能拡張（完了）

- [x] 試験マスタデータの精査 (`src/data/master/exams.json`)
- [x] `knowledge` フロントマターの追記（アプリ連携用）
- [x] 生成AI・AI倫理クイズアプリの実装 (`src/apps/genai-ethics-quiz/`)
- [x] SG科目Bケーススタディ問題の調査とデータ (`questions-sg-b.json`) の作成
- [x] SG科目B実務シナリオ演習ドリルの実装 (`src/apps/sg-subject-b-quiz/`)

---

## SEO施策（完了）

- [x] GA4タグの設定
- [x] SearchConsoleの登録 (https://syllabushack.com/sitemap-index.xml)
- [x] SCの稼働を確認したBingへ登録

---

## Phase 2: コンテンツ拡充（完了）

- [x] Trend: 4 → 10
- [x] Career: 5 → 10
- [x] App: 1 → 10
- [x] Method: 21 → 30（カバー画像全生成完了）

---

## Phase 1: アプリ開発（完了）

- [x] FE (基本情報技術者) 試験対応（問題生成169問・科目B実装）
- [x] IP (ITパスポート) 仕上げ
- [x] SG (情報セキュリティマネジメント) 試験対応（科目B含む）

---

## Phase 0: 環境・基盤整備（完了）

- [x] トップページのLP化
- [x] ITパスポート・セキュマネ設問アプリのプロトタイプ作成
- [x] カテゴリ構成の整理と正規化 (`trend`, `method`, `career`, `app`)
- [x] `src/apps` ディレクトリ整備とインデックス化
- [x] クイズアプリ基盤の構築 (ITパスポート MVP完了)
- [x] サイトマップの生成確認・各種SEO設定
