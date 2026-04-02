# Gemini CLI Route Map - Syllabus Hack Project

このファイルは、Gemini CLIが本プロジェクトの構造を正確に把握し、作業効率を最大化するためのルートマップである。`GEMINI.md`と連動し、各ディレクトリの役割と標準的なワークフローを定義する。

## 1. Directory Roles & AI Actions

Gemini CLIは、各フォルダに対して以下のロールを意識して行動せよ。

| ディレクトリ | ロール | 主なアクション / 期待される出力 |
| :--- | :--- | :--- |
| `.agents/` | **脳（Brain）** | 執筆ルールやスキル定義。タスク開始前に必ず読み込む。 |
| `.workspace/tasks/` | **司令塔（Command）** | タスクの要件定義（Requirement）。TODOの状態管理。 |
| `.workspace/drafts/` | **下書き（Draft）** | 記事やコードのプロトタイプ作成場所。 |
| `.workspace/data-set/`| **知識庫（Knowledge）** | リサーチ結果、用語集、CBT傾向データなどの参照元。 |
| `src/data/post/` | **成果物：記事** | カテゴリ別のページバンドル。最終的なMarkdown出力先。 |
| `src/data/quiz/` | **成果物：データ** | クイズ用のJSONデータ。 |
| `src/apps/` | **成果物：アプリ** | React/Preactコンポーネント。各アプリのロジック実装。 |
| `00_templates/` | **雛形（Template）** | 記事や要件定義ファイルのテンプレート参照先。 |

## 2. Standard Workflows (Path Mapping)

タスクの種類に応じて、以下のパスを順番に巡回せよ。

### A. 記事執筆（Writing Workflow）
1. **要件確認**: `.workspace/tasks/` 内の該当TODOを確認。
2. **ナレッジ参照**: `.workspace/data-set/` から最新のシラバスや傾向データを読み込む。
3. **ルール適用**: `.agents/post_writer.md` または `category_rules.md` をロード。
4. **出力**: `src/data/post/{category}/{slug}/index.md` へ書き出し。

### B. アプリ/クイズ開発（App Dev Workflow）
1. **要件確認**: `.workspace/tasks/` 内の `requirement-*.md` を確認。
2. **ルール適用**: `.agents/quiz_app_rules.md` または `quiz_data_rules.md` をロード。
3. **データ作成**: `src/data/quiz/` にJSONを生成。
4. **実装**: `src/apps/{app-slug}/` にコンポーネントを作成。
5. **登録**: `src/apps/index.ts` にエクスポートを追加。

### C. SNS投稿作成（Social Workflow）
1. **記事抽出**: `src/data/post/` から最新記事を検索。
2. **ルール適用**: `.workspace/tasks/SNS-post-schedule/cli-snspost-schedule.md` をロード。
3. **出力**: `.workspace/tasks/SNS-post-schedule/{YYYY-MM-schedule}/` に書き出し。

## 3. Gemini CLI Efficiency Hacks

- **並列読み込み**: 関連する `.agents/` 内のルールと `.workspace/tasks/` の要件は、最初に並列（parallel）で読み込むこと。
- **コンテキスト圧縮**: `read_file` を使用する際は、`start_line` / `end_line` を活用し、不要なメタデータ（過去の履歴など）をコンテキストに含めない。
- **検索の最適化**: `grep_search` で `include_pattern` を使用し、`.workspace` 以外の不要なソースコードを検索対象から外してノイズを減らす。

---
**Status**: Active
**Last Updated**: 2026-03-16
