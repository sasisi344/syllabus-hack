# Task Management

## 📱 マルチデバイス別記事（CTR改善・流入拡大）

> 詳細: `multi-device-article-plan.md` 参照。公開順に着手。

- [x] **[1] スマホ学習記事**（最優先）
  - タイトル案: ITパスポートはスマホ学習で合格できる？スキマ時間で進める最短ルート
  - カテゴリ: method ／ persona: 通勤中に学習したい社会人
  - [x] slug決定・frontmatter作成 → `smartphone-study-guide`
  - [x] ドラフト執筆
  - [x] 本番移行 → `src/data/post/method/smartphone-study-guide/index.md`
  - [x] カバー画像生成 → `cover.jpg` 配置済み
- [x] **[2] PC学習記事**
  - タイトル案: PC学習が強い理由。長時間学習で合格率を上げる環境の作り方
  - カテゴリ: method ／ persona: まとまった時間を取りやすい人
  - [x] slug決定・frontmatter作成 → `pc-study-setup-guide`
  - [x] ドラフト執筆
  - [x] 本番移行 → `src/data/post/method/pc-study-setup-guide/index.md`（`cover.jpg`）
- [x] **[3] タブレット学習記事**
  - タイトル案: タブレットで学ぶIT資格対策。見やすさ重視の学習設計ガイド
  - カテゴリ: method ／ persona: PDF教材と問題演習を併用したい人
  - [x] slug決定・frontmatter作成 → `tablet-study-guide`
  - [x] ドラフト執筆
  - [x] 本番移行 → `src/data/post/method/tablet-study-guide/index.md`（`cover.jpg`）
- [x] **[4] ハブ記事**（余力があれば、上記3記事公開後）
  - タイトル案: スマホ・タブレット・PCをどう使い分ける？IT資格学習の最適デバイス戦略
  - 役割: 3記事への導線ハブ・既存記事からの内部リンク受け皿
  - [x] 着手 → `src/data/post/method/multi-device-cert-study/index.md`（`cover.jpg`）
- [x] **内部リンク追加**（既存記事への導線）
  - [x] 既存キャリア記事の学習導入セクションにリンク追加（`career-change-to-it-with-ipa`, `it-passport-to-ap-roadmap`）
  - [x] 既存アプリ記事に向いているデバイスを明記してリンク追加（`it-passport-quiz`, `fe-quiz`, `ip-strategy-drill`, `flashcard-app`）
  - [x] スマホ学習記事からPC・タブレット・ハブへ逆導線（`smartphone-study-guide`）

---

## 🚀 機能開発 (Feature Development)

- [ ] **高度試験向け専門用語フラッシュカード統合**
  - データは存在（`terms-ap.json`: 49語, `terms-nw.json`: 13語, `terms-sc.json`: 20語）
  - [ ] flashcard-app への組み込み・デッキ追加（AP/NW/SC）
- [ ] **重複実装の集約**: `ap-quiz/QuizApp.tsx` と `it-passport-quiz/QuizApp.tsx` は構造がほぼ同一。共通 `BaseQuizApp` に抽出し、バグ修正を一箇所に集約する。
- [ ] **レジストリと実装の対応表**: `appRegistry` にあるが `src/apps/{slug}/` が無いスラッグを README かコメントで一覧化する。

---

## 🆕 IPA以外の試験カテゴリ開拓（優先度: 中）

> IPAジャンルが一段落したら着手する次の戦場。リサーチフェーズから開始。

### リサーチフェーズ

- [ ] **MOS・オフィスツール系資格のKWリサーチ**（アフィリエイト商品数・競合分析）
- [ ] **FP2級のニッチKWリサーチ**（「FP2級 意味ない」「FP2級 独学 挫折」等）
- [ ] **秘書検定のニッチKWリサーチ**（非IT層・事務職ターゲット）
- [ ] **AWS/ネットワーク系資格のKWリサーチ**（難易度高・情報少ジャンル）

### コンテンツ展開フェーズ（リサーチ完了後）

- [ ] **ビジネス系PC資格（MOS等）の攻略記事** (method)
- [ ] **秘書検定 × マルチワーク・フリーランス活用記事** (career)

---

## 📍 地域最適化（将来タスク・低優先）

- [ ] **地域特性に合わせたキャリア戦略（Career）のリライト**
  - [ ] 優先ドラフトのリライト（文系学生、セキュマネ、SESキャリアアップ）
  - [ ] 都道府県別年収データと資格の相関可視化記事の追加
- [ ] ユーザーのlocateから地域を自動判別し、ハックをサジェストする機能の実装

---

## 📢 SNS戦略 & インデックス促進 (SNS Strategy)

- [ ] **SNS運用プランの実行 (`.workspace/tasks/sns-strategy.md`)**
  - [ ] 既存記事（古い順）のピックアップリスト作成
  - [ ] X(Twitter)での定期投稿フローの構築
  - [ ] インプレッション・インデックス状況の定点観測
