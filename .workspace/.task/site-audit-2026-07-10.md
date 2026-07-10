# サイト全体解析 — 問題点と修正提言（2026-07-10）

対象: `syllabushack.com`（Astro 6 / 記事384本 / ビルド1293ページ・ビルド自体は成功）
解析方法: 全記事の機械スキャン + `astro.config.ts`・`src/utils/blog.ts`・`navigation.ts`・dist 実出力の検証。
生データ: `site-audit-2026-07-10-raw.md`（同ディレクトリ）

---

## A. サイト基盤・SEO（高優先 — 即時修正対象）

### A-1. sitemap に noindex ページが大量混入【最重要】
- `dist/sitemap-0.xml` に全676タグページが載っているが、タグページは「10記事未満は noindex」制御済み（`[tag]/[...page].astro:23`）。ユニークタグ663個中478個が1記事のみ＝**サイトマップの約半分が noindex ページ**という矛盾状態。Search Console の「登録されない」警告・クロールバジェット浪費の原因。
- さらにテンプレートデモページ `/homes/*`(4)・`/landing/*`(6)・`/pricing/`・`/services/`（いずれも noindex 済み）も sitemap に混入。
- **修正**: `astro.config.ts` の `sitemap()` に `filter` を追加し、(a) demo系パス、(b) 10記事未満のタグページを除外する。タグ記事数は config 内で frontmatter 走査（既存の `buildLastmodMap` と同様の手法）+ 同一のスラッグ化（limax）で算出可能。

### A-2. `buildLastmodMap` が CRLF/BOM 非対応 → 246記事で sitemap の lastmod 欠落
- `astro.config.ts:39` の `/^---\n([\s\S]*?)\n---/` は LF 専用。実態は **CRLF 246 / LF 138 / BOM付き 10**。結果、sitemap の `<lastmod>` は135件しか出力されていない（本来384記事分）。
- **修正**: 正規表現を `/^﻿?---\r?\n([\s\S]*?)\r?\n---/` に変更。

### A-3. theory カテゴリの日本語タイトル未定義
- `src/utils/blog.ts:70` の `CATEGORY_TITLES` に `theory` がなく、`/category/theory/`（93記事＝最大級カテゴリ）の title と h1 が英語生 `Category 'theory'` / `theory` のまま。旧 `glossary`/`strategy` は redirect 済みなのにタイトル定義だけ残存。
- **修正**: `theory: '用語解説'`（または「頻出・コア理論」）を追加。glossary/strategy 定義は削除可。

### A-4. ナビゲーションが redirect 経由の旧 URL を参照
- `navigation.ts:19,37` と `src/pages/index.astro:30` の「用語解説」が `/category/glossary/` を指し、meta-refresh リダイレクトを1回挟んで theory に到達。内部リンクは直接 `/category/theory/` にすべき。
- **修正**: `getPermalink('theory', 'category')` へ変更。

### A-5. AstroWind テンプレートの残骸ページ・記事
- `src/pages/homes/`(4ページ)・`src/pages/landing/`(6ページ)・`pricing.astro`・`services.astro`: 英語デモ。noindex 済みだがビルド・sitemap に載り続けている。→ **削除推奨**。
- `src/pages/try.astro`: 日本語化されているが **robots 未設定＝インデックス可能** かつ sitemap 掲載。残すなら内容精査、暫定は noindex。
- `src/data/post/method/astrowind-template-in-depth/index.mdx`: 2023年の英語テンプレ解説デモ記事が本番公開中。→ **削除推奨**。
- 残骸ファイル: `src/data/post/trend/prompt-engineering-basics/`（空ディレクトリ）。
- ~~`src/data/post/method/practice.png`~~ → **監査の誤認**（2026-07-10 修正時に判明）: 10記事が image として参照する共通カバーのため削除不可。バンドル外配置が紛らわしいので、将来的に `common-cover` 系の命名・配置整理を検討。

### A-6. 壊れたダウンロードリンク
- `method/essay-trainer-script` が `/files/essay_trainer.zip` にリンクしているが `public/files/` 自体が存在しない → 404。
- **修正**: リンク先ファイルを用意するか、リンクを撤去（記事内容を確認して判断）。

---

## B. フロントマター・記事データ不整合（中優先 — 機械修正可能）

| # | 問題 | 件数 | 修正方針 |
|---|------|------|----------|
| B-1 | UTF-8 BOM 付きファイル（gemini/notebooklm系） | 10 | BOM 除去 |
| B-2 | `publishDate` が非ISO形式（`+09:00`） | 6 | `Z` 形式へ正規化（日時は UTC 換算不要、日付維持で `T00:00:00Z` 化はせず既存時刻を Z へ） |
| B-3 | ディレクトリとfrontmatterのカテゴリ不一致（`career/itp-high-school-resume-hack` が `category: theory`） | 1 | frontmatter を `career` に修正 |
| B-4 | method 記事が theory 共通カバーを参照（`continuous-learning-reskilling-beyond-itp`, `pc-selection-guide`） | 2 | `method/common-cover.png` 等へ差し替え |
| B-5 | `image` フィールド欠落（OGP・一覧サムネなし） | 12 | カテゴリ共通カバーを暫定設定 |
| B-6 | 本文（コードフェンス外）に `**bold**` 残存 — CLAUDE.md 違反 | 49記事 | `<strong>` へ変換（フェンス内は変換禁止）。編集した記事は lastmod 更新 |
| B-7 | `lastmod` 欠落 | 46 | publishDate と同日を設定（内容変更を伴わないため） |
| B-8 | tags 数が3〜5個の範囲外 | 25 | 編集判断が必要 → バックログ |
| B-9 | `<!-- IMAGE_PROMPT -->` コメント残存 | 37 | HTML には漏れていないことを確認済み（低優先）。順次削除 |

補足: `draft: true` の19記事は統合済み（`astro.config.ts` の redirects で転送設定あり）の意図的な保持と判断。誤検知だが、`src/data/post/` に残ると混乱の元 → アーカイブ移動をバックログ提案。

---

## C. ルール・仕組みの欠陥（要判断 — バックログ）

### C-1. `toc: true` が完全に無意味【CLAUDE.md ルール破綻】
- CLAUDE.md は新規記事に `toc: true` を必須としているが、content スキーマ（`src/content/config.ts`）に `toc` フィールドが存在せず、レンダリング側にも目次実装が一切ない。**目次機能自体が未実装**。
- 選択肢: (a) 目次コンポーネントを実装する（読了率改善という本来の目的に合致）、(b) ルールとフィールドを廃止する。

### C-2. タグスプロール
- ユニークタグ663個、うち478個が1記事のみ。`tag_rules.md` の正規タグへの統合リライトが必要（A-1 の sitemap 除外で SEO 実害は先に止血）。

### C-3. 見出しルール違反 265記事
- 「」括弧・番号付き見出しがルール制定前の記事に大量残存。リライト時に順次対応。

### C-4. metadata.description の欠落93件・長さ範囲外146件
- SEO メタディスクリプション整備。編集判断が必要なため計画的に。

### C-5. examId の表記揺れ
- スキーマ enum に `ip` と `it-passport` が併存。どちらかへ統一を。

---

## 修正実行スコープ（今回エージェントに委任）

即時修正: **A-1〜A-6、B-1〜B-7**（B-8/B-9 と C 群はバックログ）。
制約: `git push` 禁止。コミットはユーザー未指示のため行わない。修正後 `pnpm build` で検証すること。
