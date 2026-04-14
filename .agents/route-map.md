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
Read(.workspace/.task/TODO.md)
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
| TODO管理         | `.workspace/.task/TODO.md`                  |
| リサーチデータ   | `.workspace/data-set/`                      |
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

ビルドは `C:/Users/sasis/344dev/syllabus-hack` で実行。

---

**Status**: Active  
**Last Updated**: 2026-04-13  
**Supersedes**: `gemini-cli-mode.md`
