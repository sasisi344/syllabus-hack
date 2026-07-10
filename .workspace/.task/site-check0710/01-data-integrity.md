# WP01 — データ整合性・スクリプト修正（Phase 1・機械修正）

出典: TODO.md 統合リストA / site-audit-2026-07-10 B-8・B-9 / categories-list-check.md

> 前提知識: 2026-07-10 のサイト監査修正で以下は**対応済み**。重複作業しないこと。
> - `career/itp-high-school-resume-hack` の category 修正（TODO A の B-1。ただし `knowledge.type` の確認は T1 に残す）
> - BOM除去・publishDate形式・lastmod欠落・sitemapフィルタ・テンプレ残骸削除
> - `trend/prompt-engineering-basics` は空ディレクトリとして削除済み（下記 T2 の対象リストから除外）

## タスク

- [x] **T1: `knowledge.type: theory` の追加（trend 7件）**
  対象: `dx-digital-transformation` / `explainable-ai-xai` / `mlops` / `ooda-loop` / `rag-ai-system` / `sql-injection-vulnerability` / `zero-trust-architecture`（いずれも `src/data/post/trend/`）
  あわせて `career/itp-high-school-resume-hack` の `knowledge.type` が `career` になっているか確認し、違えば修正。
  ※ frontmatter編集時は lastmod を当日に更新。

- [x] **T2: `index-articles.js` の正規表現修正**
  `.workspace/scripts/index-articles.js` の frontmatter 検出を `^---\s*\r?\n` 相当（BOM・CRLF・`--- ` 末尾スペース耐性）に修正。`astro.config.ts` の `scanPostFrontmatter`（2026-07-10 修正済み）と同等の耐性にする。
  修正後 `node .workspace/scripts/index-articles.js` を実行し、従来未計上だった記事が計上されることを確認。

- [x] **T3: `.agents/category_rules.md` に theory / app の分類定義を追記**
  現状 trend との役割分担が不明確。categories-list-check.md の「trend 内の theory 的性格記事」の考え方（URL維持・knowledge.type で対応）を明文化。

- [x] **T4: app記事への `appId` 追加（18件・緊急度低）**
  `task-results/app-registry-audit.md` を Read して対象を特定。`src/apps/index.ts` のレジストリと突合し、対応する appId を frontmatter に追加。対応アプリが存在しない記事（dev-story系等）はスキップし、その旨を記録。

- [x] **T5: tags 数違反 25記事の正規化**
  `site-audit-2026-07-10-raw.md` の tag-count リスト参照。`.agents/tag_rules.md` を Read し、正規タグ名で3〜5個に整理（6個以上→重要度の低いタグを削る。2個以下→正規タグから補う）。lastmod 更新。

- [x] **T6: `<!-- IMAGE_PROMPT -->` コメント除去（37記事）**
  raw の image-prompt-leftover リスト参照。HTML出力には漏れていないため低優先だが、本番記事の衛生として削除。コメント削除のみの場合 lastmod 更新は不要。

- [x] **T7: draft:true 19記事のアーカイブ移動**
  リダイレクト統合済みのソース記事（notebooklm系・gemini系ほか、raw の draft-true-in-prod リスト）を `src/data/post/` から `.workspace/draft/archive/` へ移動。移動前に各スラッグが `astro.config.ts` の redirects に存在することを確認（redirects にないものは移動せず報告）。

- [x] **T8: `restructure-plan-2026-06.md` の件数スナップショット更新**
  T2 完了後の `index-articles.js` 出力からカテゴリ別件数を集計し、充足率表を最新化（波3クラスターの行追加は WP04 側のタスク）。

## 完了条件（監督が検証）

1. `node .workspace/scripts/index-articles.js` がエラーなく実行され、384件前後（T7移動後は365件前後）を計上
2. 監査スクリプト（scratchpad の site-audit.js）再実行で tag-count / image-prompt-leftover / draft-true-in-prod が 0（または残存理由が記録済み）
3. `pnpm build` 成功
4. trend 7件の frontmatter に `knowledge.type: theory` が入っている（grep で確認）
