---
name: claude-code-route-map
description: Claude Code向けのツール対応表・パス設計・効率化パターン。Gemini CLI版のroute-mapをClaude Code用に再設計。
---

# Claude Code ルートマップ — Syllabus Hack

Claude Code がこのプロジェクトで効率よく作業するためのガイド。

---

## 1. ツール対応表

| 操作                           | 使用ツール                           | 補足                                             |
| ------------------------------ | ------------------------------------ | ------------------------------------------------ |
| ファイルを読む                 | `Read`                               | `limit` / `offset` で範囲指定可能                |
| ファイルを編集                 | `Edit`                               | `old_string` は完全一致必須（省略不可）          |
| ファイルを新規作成・全書き換え | `Write`                              | 既存ファイルを書き換える前に必ず `Read` すること |
| ファイルをパターンで検索       | `Glob`                               | `find` コマンドの代わりに使う                    |
| ファイル内容を検索             | `Grep`                               | `grep` / `rg` コマンドの代わりに使う             |
| コマンド実行                   | `Bash`                               | 上記ツールで代替できる場合はBashを使わない       |
| 複数操作を同時実行             | 同一レスポンス内で複数ツール呼び出し | 依存関係がない操作は並列実行で高速化             |

---

## 2. 並列実行パターン

依存関係がない Read は同時に呼び出す（コンテキスト取得を高速化）:

**記事執筆開始時（並列OK）:**

```
Read(.agents/post_writer.md)
Read(.agents/category_rules.md)
Read(.task-management/task.md)
```

**クイズ開発開始時（並列OK）:**

```
Read(.agents/quiz_app_rules.md)
Read(.agents/quiz_data_rules.md)
Read(.workspace/.task/requirement-*.md)
```

---

## 3. パス早見表

| 用途             | パス                                        |
| ---------------- | ------------------------------------------- |
| 記事本体         | `src/data/post/{category}/{slug}/index.md`  |
| 記事カバー画像   | `src/data/post/{category}/{slug}/cover.jpg` |
| 下書き           | `.workspace/draft/`                         |
| タスク要件定義   | `.workspace/.task/requirement-*.md`         |
| タスク管理       | `.task-management/task.md`                  |
| リサーチデータ   | `.workspace/data-set/`                      |
| 資格KWナレッジDB | `.workspace/data-set/cert-keyword-db/`      |
| 資格KW参照スキル | `.agents/cert_keyword_db.md`                |
| クイズ問題データ | `src/data/master/questions-{examId}.json`   |
| クイズアプリ本体 | `src/apps/{app-slug}/`                      |
| アプリレジストリ | `src/apps/index.ts`                         |
| サイト設定       | `src/config.yaml`                           |
| Astroレイアウト  | `src/layouts/`                              |
| コンポーネント   | `src/components/`                           |

---

## 4. よく使う検索パターン

```bash
# 特定カテゴリの記事一覧
Glob("src/data/post/method/**/*.md")

# フロントマターのlastmod確認
Grep("^lastmod:", path="src/data/post/", glob="*.md")

# <strong>タグ未変換のbold記法を検出
Grep("\*\*[^*]+\*\*", path="src/data/post/", glob="*.md")

# draft: true の記事を検出（公開前チェック）
Grep("^draft: true", path="src/data/post/", glob="*.md")
```

---

## 5. ビルド確認

```bash
# 開発サーバー起動
pnpm dev

# 本番ビルド確認
pnpm build
```

ビルドは `C:/Users/sasis/344blog/syllabus-hack` で実行。

---

**Status**: Active  
**Last Updated**: 2026-06-18  
**Supersedes**: `gemini-cli-mode.md`

---

## 6. ディレクトリロール

2026-11-27 に `CLAUDE.md` から 6〜8 節を移した。

| ディレクトリ           | ロール             | 説明                                          |
| ---------------------- | ------------------ | --------------------------------------------- |
| `.agents/`             | **Brain**          | ルール・スキル定義。タスク開始前に必ず参照    |
| `.claude/commands/`    | **Commands**       | スラッシュコマンド定義（Claude Code専用）     |
| `.task-management/`    | **Command**        | タスクの正本（`task.md`）・inbox・実行記録（hq 標準、2026-10-31〜） |
| `.workspace/projects/` | **Plan**           | 計画書（全面リライト・コース追加・生成AIパスポート） |
| `.workspace/draft/`    | **Draft**          | 記事・コードの下書き置き場                    |
| `.workspace/data-set/` | **Knowledge**      | シラバスデータ・試験傾向・リサーチ結果        |
| `src/data/post/`       | **Output: 記事**   | カテゴリ別ページバンドル（最終出力先）        |
| `src/data/master/`     | **Output: データ** | クイズ問題JSON                                |
| `src/apps/`            | **Output: アプリ** | Preact製クイズアプリ・CBTシミュレーター       |
| `src/config.yaml`      | **Config**         | サイト共通SEO・analytics・blog設定            |

---

## 7. スキル一覧（.agents/ ディレクトリ）

タスクの種類に応じて、対応するスキルファイルを参照すること。

### コンテンツ系

| タスク                                                 | 参照スキル                           |
| ------------------------------------------------------ | ------------------------------------ |
| 記事執筆・フレームワーク選定（BEAF/QUEST/PASONA）      | `.agents/post_writer.md`             |
| 読者セグメント（年齢層×動機×学習段階）・流入チャネル    | `.agents/reader_segments.md`         |
| 資格クエリ拡張施策（資格Hub記事の新規作成）            | `.agents/cert_hub_template.md`       |
| 横展開資格のKW調査・記事企画（宅建・簿記・MOS等）      | `.agents/cert_keyword_db.md`         |
| 新規資格のニッチKW抽出（資格名×パターン×競合占拠度実査） | `.agents/kw_pattern_research.md`     |
| カテゴリ分類（trend / method / career / app / theory） | `.agents/category_rules.md`          |
| タグ選定・正規タグ名                                   | `.agents/tag_rules.md`               |
| ディレクトリ構造・パス設計                             | `.agents/content_structure.md`       |
| カバー画像（cover.jpg）の仕様                          | `.agents/image_rules.md`             |
| ダークモード CSS パターン                              | `.agents/dark_mode_css.md`           |
| ドラフト → 本番移行                                    | `.agents/workflows/post-complete.md` |

### アプリ開発系

| タスク                                                             | 参照スキル                   |
| ------------------------------------------------------------------ | ---------------------------- |
| クイズアプリ新規作成・改修（LocalStorage・types・CSS・examId規約） | `.agents/quiz_app_rules.md`  |
| クイズ問題 JSON 作成・追加（スキーマ・ID命名・試験別最適化）       | `.agents/quiz_data_rules.md` |

### 共通インフラ系

| タスク                                 | 参照スキル                                               |
| -------------------------------------- | -------------------------------------------------------- |
| ツール・パスの Claude Code 向けガイド  | `.agents/route-map.md`                                   |
| 過去の失敗パターン・正規表現ライブラリ | `.agents/fact-check/FAILURE_LOG.md` / `REGEX_LIBRARY.md` |

---

## 8. スラッシュコマンド一覧（.claude/commands/）

### コンテンツ系

| コマンド                     | 用途                                         |
| ---------------------------- | -------------------------------------------- |
| `/new-post {トピック}`       | 新規記事ドラフトをゼロから作成               |
| `/publish-post {ファイル名}` | ドラフト → 本番移行チェックリストを展開      |
| `/check-draft {ファイル名}`  | bold変換漏れ・lastmod・imageパス・タグを確認 |
| `/bold-fix {ファイル名}`     | `**bold**` → `<strong>` への一括変換         |

### アプリ開発系

| コマンド                       | 用途                                                           |
| ------------------------------ | -------------------------------------------------------------- |
| `/new-quiz {試験名}`           | examIdカタログ照合→要件定義→スキャフォールド→実装まで展開      |
| `/quiz-add-questions {examId}` | 既存JSONに問題を追加（重複チェック・ID採番・分野バランス確認） |
| `/app-audit {app-slug}`        | 規約準拠チェック（LocalStorageキー・型・CSS・レジストリ）      |

### 運用系

| コマンド               | 用途                                                                    |
| ---------------------- | ----------------------------------------------------------------------- |
| `/weekly-report {wNN}` | GA4/GSC週次データを分析しPPDCA週報を `w{NN}-weekly-task.md` に書き出す |
| `/sns-post {wNN}` | Threads週3投稿（連投形式・1件目は結論を出さない）を `.workspace/sns-post-work/post-task.md` に作成。ルールの正本は `.workspace/draft/sns/posting-strategy.md` |
