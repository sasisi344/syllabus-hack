# 2026-09-19 完了タスク一括アーカイブ

TODO.mdから退避。詳細・背景は各正本ファイル参照。

## 1. §0 Week3（courseコレクション実装・Web公開）— 完全完了

正本: [`week3-task.md`](../../.new-contentplan/week3-task.md)

- [x] Astro新テンプレート実装（TOP→章一覧→章ページの2階層） → 2026-09-09前倒し完了
- [x] 章末チェック用UIコンポーネント実装（一括採点方式） → 2026-09-09前倒し完了
- [x] ITパスポート20hoursパイロット（Tier1・8章）無料公開・相互リンク → 2026-09-09前倒し完了
- [x] サイト構成見直し（ナビ・トップページの`course`導線設計、`cert-hubs.ts`への`courseHref?`追加） → 2026-09-09前倒し完了
- [x] 新規コンテンツ（course系）が既存記事の内部リンク・クロール予算を圧迫していないか確認 → **2026-09-19完了**。DMコースの内部リンク19件を静的検証しリンク切れ・カニバリなしを確認（詳細は[`dm-course/dm-course-task.md`](../../.new-contentplan/dm-course/dm-course-task.md) §4）。§1の同一項目もあわせてクローズ

## 2. §1 既存記事の統廃合 — 該当項目クローズ

- [x] 新規コンテンツ（course系）の内部リンク・クロール予算圧迫確認 → 上記Week3項目と同一。2026-09-19完了

## 3. DMコース公開前の最終調整（§4） — 完全完了

正本: [`dm-course/dm-course-task.md`](../../.new-contentplan/dm-course/dm-course-task.md) §4

- [x] 全8章＋indexの誤字・表現チェック → 問題なし
- [x] 他記事からの誤リンク・カニバリ確認 → 問題なし（DM言及の既存4記事は`/course/dm/`への導線が未接続なだけで、内部リンク強化の追加候補として記録）
- [x] コース内部リンク19件の静的検証 → 全て正常
- [x] `pnpm build`本番ビルド確認 → 1373ページ・0エラー
- [x] スマホ幅レイアウト確認 → **バグ発見・修正**: 第4章KaTeX数式の横スクロール問題。`KatexStyles.astro`に`overflow-x: auto`追加
- [x] **（追加対応）** コース全体（IP/SG/DM・24章）で「AIで学ぶ」プロンプトのコードブロックが折り返されない表示バグを発見・修正。`CourseLayout.astro`にblog記事側と同じ`white-space: pre-wrap`対策を追加
- [x] **（追加対応）** `/course/`一覧に共通サムネイル（`src/assets/images/course/common-cover.png`）を新規生成・実装。IP/SG/DM全コースに適用
- [x] **（追加対応）** `/course/`一覧に「この作り方は、あなたのシラバスにも応用できます」セクションを追加（コース制作手順の紹介、生成AI活用者向け）

## 4. trend用語解説バッチの内部リンク改善 — 実装フェーズ完了

正本: [`requirement-trend-glossary-brushup.md`](../requirement-trend-glossary-brushup.md) / [`trend-glossary-brushup-followup-report.md`](../trend-glossary-brushup-followup-report.md)

- [x] タグ統一によるクラスタ内部リンク強化（13記事）
- [x] 構造的欠陥の修正（`ai-opt-out-policy`重複セクション除去、`ai-ethics-governance`・`multi-factor-authentication`の「まとめ・次のステップ」欠落補完）
- [x] 本文内「次は◯◯」参照の実リンク化（19箇所、30記事中26記事が連続した内部リンク導線でつながった）

> 効果測定フォローアップ（2026-10-18実行予定）は未完了のため、TODO.md §5に残置。
