# Task Management

## 🚀 機能開発 (Feature Development)

- [x] **高度試験向け専門用語フラッシュカード統合**
  - データは存在（`terms-ap.json`: 49語, `terms-nw.json`: 13語, `terms-sc.json`: 20語）
  - [x] flashcard-app への組み込み・デッキ追加（AP/NW/SC）
    - AP重要用語デッキ（49語）: `DeckSelector` → commonDecks、`MasterTermEntry`型 + `mapMasterTermEntriesToCards` で対応
    - NW重要用語デッキ（13語）: `DeckSelector` → advancedDecks、同mapper利用
    - SC: `sc-terms.json` に18語追加（重複SAML/CSIRTを除く）→ 計34語
- [ ] **重複実装の集約**: `ap-quiz/QuizApp.tsx` と `it-passport-quiz/QuizApp.tsx` は構造がほぼ同一。共通 `BaseQuizApp` に抽出し、バグ修正を一箇所に集約する。
- [ ] **レジストリと実装の対応表**: `appRegistry` にあるが `src/apps/{slug}/` が無いスラッグを README かコメントで一覧化する。

---

## 🆕 IPA以外の試験カテゴリ開拓（優先度: 中）

> IPAジャンルが一段落したら着手する次の戦場。リサーチフェーズから開始。

- DS検定: データサイエンティストの資格試験になる。文系は就活市場でかなり不利になっているので、最低限でもDS資格なりスキルは持っておくべきとの指摘がある。「DS検定とG検定を文系が取得するにはどうしたらいいか？」を体系的に説明する記事を作成。

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
