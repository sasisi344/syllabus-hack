# WP02 — サイト機能・技術基盤（Phase 1・開発）

出典: site-audit-2026-07-10 C-1・C-5 / weekly-task.md（読了質改善の技術面）

## タスク

- [x] **T1: 目次（ToC）機能の実装【最重要】**
  CLAUDE.md は新規記事に `toc: true` を必須としているが、**スキーマにもレンダラーにも toc が存在せず完全に無意味**（site-audit C-1）。読了率改善（直帰率+19.6%・滞在時間-88.7% への対策）という本来目的のため実装する。
  1. `src/content/config.ts` の postCollection スキーマに `toc: z.boolean().optional()` を追加
  2. 目次コンポーネントを新規作成（`src/components/blog/TableOfContents.astro` 想定）: 記事の h2（必要なら h3）見出しから生成。Astro の `render()` が返す `headings` を利用する
  3. 記事レイアウト（`src/pages/[...blog]/index.astro` → SinglePost コンポーネント系）に `toc: true` のときのみ表示するよう組み込み。冒頭（excerpt直後〜本文前）に配置
  4. ダークモード対応は `.agents/dark_mode_css.md` を Read して既存パターンに従う
  5. 既存記事への `toc: true` 一括付与は**しない**（このWPでは機能実装のみ。付与は WP03 リライト時に随時）

- [x] **T2: examId 表記統一（`ip` vs `it-passport`）**
  1. 全記事の `knowledge.examId` 使用実態を集計（`ip` と `it-passport` の件数）
  2. 少数派を多数派へ統一（記事 frontmatter を一括修正、lastmod 更新）
  3. `src/content/config.ts` の enum から廃止した値を削除
  4. `src/apps/`・`src/data/master/` に examId 参照があれば突合して同時に整合させる（クイズアプリの LocalStorage キーに使われている場合は**変更しない**で報告 — 既存ユーザーの学習データが飛ぶため）
  5. `.workspace/.task/exam-id-catalog.md` に統一結果を反映

- [x] **T3: sitemap タグフィルタの実効性検証（実装は2026-07-10済み・検証のみ）**
  `pnpm build` 後、`dist/sitemap-0.xml` に (a) 10記事未満タグが混入していないこと、(b) 10記事以上のタグ（ITパスポート・生成AI等）は残っていることを確認。問題があれば `astro.config.ts` の filter を修正。

## 完了条件（監督が検証）

1. `toc: true` を付けたテスト記事（既存記事1本に試験付与でよい。検証後は付与のまま lastmod 更新）で目次が描画され、リンクが該当見出しへ飛ぶ
2. ライト/ダーク両テーマで目次の表示が崩れない（クラス構成が dark_mode_css.md 準拠であることをコードレビューで確認）
3. `grep` で examId の旧表記が記事から消えている（アプリ・データ側の意図的残存は記録があること）
4. `pnpm build` 成功、sitemap 検証パス
