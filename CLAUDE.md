# Syllabus Hack — Claude Code 統合指令書

> **優先順位**: このファイル（CLAUDE.md） > `.agents/` スキル > `~/.claude/settings.json`

---

## プロジェクト概要

**Syllabus Hack** は「生成AIで資格試験のシラバスをハックする」学習メディア。  
`syllabushack.com` — Astro 6 + AstroWind テンプレート構成の静的サイト。

コアミッション: 暗記中心の旧来学習法を破壊し、AI活用による「効率的・本質的」な資格学習を提案する。

---

## 言語プロトコル

| 対象                                       | 言語                   |
| ------------------------------------------ | ---------------------- |
| 内部推論・コード説明                       | 英語（精度・効率優先） |
| 読者向けコンテンツ（記事本文・UIテキスト） | **日本語**             |
| コード・変数名・ファイル名・スラッグ       | 英語（kebab-case）     |

---

## ディレクトリロール

| ディレクトリ           | ロール             | 説明                                          |
| ---------------------- | ------------------ | --------------------------------------------- |
| `.agents/`             | **Brain**          | ルール・スキル定義。タスク開始前に必ず参照    |
| `.claude/commands/`    | **Commands**       | スラッシュコマンド定義（Claude Code専用）     |
| `.workspace/.task/`    | **Command**        | タスク要件定義（requirement-\*.md）・TODO管理 |
| `.workspace/draft/`    | **Draft**          | 記事・コードの下書き置き場                    |
| `.workspace/data-set/` | **Knowledge**      | シラバスデータ・試験傾向・リサーチ結果        |
| `src/data/post/`       | **Output: 記事**   | カテゴリ別ページバンドル（最終出力先）        |
| `src/data/master/`     | **Output: データ** | クイズ問題JSON                                |
| `src/apps/`            | **Output: アプリ** | Preact製クイズアプリ・CBTシミュレーター       |
| `src/config.yaml`      | **Config**         | サイト共通SEO・analytics・blog設定            |

---

## スキル一覧（.agents/ ディレクトリ）

タスクの種類に応じて、対応するスキルファイルを参照すること。

### コンテンツ系

| タスク                                                 | 参照スキル                           |
| ------------------------------------------------------ | ------------------------------------ |
| 記事執筆・フレームワーク選定（BEAF/QUEST/PASONA）      | `.agents/post_writer.md`             |
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

## ワークフロー早見表

### A. 記事執筆ワークフロー

```
1. 要件確認: .workspace/.task/ の該当TODOを Read
2. スキルロード: post_writer.md + category_rules.md を Read（並列可）
3. ナレッジ参照: .workspace/data-set/ から関連データを Read
4. 下書き作成: .workspace/draft/ に Write
5. 本番移行: .agents/workflows/post-complete.md の手順を実行
```

> **スラッシュコマンド**: `/new-post {トピック}` で手順1〜4を自動展開

### B. クイズ／アプリ開発ワークフロー

```
1. 要件確認: .workspace/.task/requirement-*.md を Read
2. スキルロード: quiz_app_rules.md + quiz_data_rules.md を Read（並列可）
3. データ作成: src/data/master/questions-{examId}.json を Write
4. 実装: src/apps/{app-slug}/ に Write / Edit
5. 登録: src/apps/index.ts を Edit
6. 記事作成: src/data/post/app/{app-slug}/index.mdx を Write
```

> **スラッシュコマンド**: `/new-quiz {試験名}` で手順1〜2を自動展開

### C. サイト改修・開発ワークフロー

```
1. src/config.yaml で設定確認
2. 影響範囲を Grep / Glob で調査
3. src/layouts/ → src/components/ の順に構造把握
4. dark_mode_css.md でCSS標準確認
5. pnpm build でビルド確認
```

### D. ドラフト → 本番移行ワークフロー

```
1. 強調の扱い分け（src/data/post/）:
   - 本文（コードフェンス外）: **bold** → <strong> へ全変換（Markdown bold は禁止のまま）
   - コードフェンス内（コピー用プロンプト等）: 強調は Markdown の二重アスタリスク太字のみ。HTML の strong タグは使わない（AI向け）
2. 画像パスを ~/data/post/{category}/{slug}/cover.jpg 形式に正規化
3. draft: false にセット
4. lastmod を今日の日付に更新
5. src/data/post/{category}/{slug}/index.md に配置
6. .workspace/.task/TODO.md の該当項目を完了にする
```

> **スラッシュコマンド**: `/publish-post {ドラフトファイル名}` でチェックリストを展開

---

## コンテンツカテゴリ（全5種）

| カテゴリ | ディレクトリ            | 内容                                                    |
| -------- | ----------------------- | ------------------------------------------------------- |
| `trend`  | `src/data/post/trend/`  | 試験情報・シラバス改訂・AIニュース                      |
| `method` | `src/data/post/method/` | 学習ハック・プロンプト活用・シラバスハック本体手法      |
| `career` | `src/data/post/career/` | 合格後のキャリア・求人市場・ポートフォリオ戦略          |
| `app`    | `src/data/post/app/`    | CBTシミュレーター・クイズツール・インタラクティブアプリ |
| `theory` | `src/data/post/theory/` | 頻出・コア理論・キーワード解説・理論フレームワーク      |

**theoryカテゴリ注意**: カバー画像は `src/data/post/theory/common-cover.png` を共通利用。個別画像生成不要。

---

## 必須ルール（記事投稿・編集時）

### フロントマター完全テンプレート

```yaml
---
publishDate: 2026-01-01T00:00:00Z # 初回公開日（一度設定後、変更禁止）
lastmod: 2026-01-01 # 最終更新日（編集のたびに当日の日付へ必ず更新）
title: '記事タイトル（30〜40文字推奨）'
excerpt: '概要（約100文字）'
image: '~/data/post/{category}/{slug}/cover.jpg'
category: 'method' # trend / method / career / app / theory のいずれか
tags: ['タグ1', 'タグ2', 'タグ3'] # 3〜5個、tag_rules.md の正規タグ名を使用
draft: false
persona: 'IT初学者' # ターゲット読者（例: 30代未経験転職希望者）
knowledge:
  examId: 'it-passport' # 試験ID（it-passport / sg / fe 等）
  type: 'method' # method / trend / career / app のいずれか
  syllabusRef: 'テクノロジ系-大分類X' # シラバス参照コード（任意）
  difficulty: 'beginner' # beginner / intermediate / advanced
metadata:
  description: 'SEOメタディスクリプション（120〜160文字）'
---
```

**アプリ記事（index.mdx）の追加フィールド:**

```yaml
appId: '{app-slug}' # src/apps/ 下のディレクトリ名（必須）
```

### フロントマター制約

- `publishDate`: 一度設定後は **リライト時も変更禁止**
- `lastmod`: 記事を編集するたびに必ず今日の日付（YYYY-MM-DD）に更新
- `image`: 必ず `~/data/post/{category}/{slug}/cover.jpg` 形式（相対パス・絶対パス禁止）

### コンテンツルール

- **強調表記（本文）**: コードフェンス**外**の本番本文では `<strong>強調内容</strong>` を使用。`**bold**` 記法は禁止
- **強調表記（コードフェンス内・AI向け）**: ユーザーが生成AIに貼り付けるプロンプトや手順例を ` ``` ` で囲む場合、強調は **Markdown の `**太字**`** に統一する。`<strong>` は使わない（モデルが構造を読み取りやすい）
- **ヘッダー**: 見出しに `「」` 括弧を使わない。番号付け（`## 1. Step`）も禁止
- **bold密度**: 1段落あたり1〜2個が上限。同じキーワードを同記事内で重複してboldしない
- **改行**: 1〜2文で改行。3行超えのブロックを作らない
- **水平線**: frontmatter直後と「まとめ」セクション直前のみ `---` を使用

### Page Bundle 構造（必須）

```
src/data/post/{category}/{slug}/
├── index.md        # 記事本体（または index.mdx）
└── cover.jpg       # カバー画像（theoryカテゴリは共通画像を使用）
```

---

## 記事執筆フレームワーク（BEAF / QUEST / PASONA）

| カテゴリ / 状況                           | 読者の状態               | フレームワーク | 中心方向                                                    |
| ----------------------------------------- | ------------------------ | -------------- | ----------------------------------------------------------- |
| Methods & Tools (method)                  | 効率学習・比較したい     | **BEAF**       | 他手法と比べた圧倒的なAdvantage＋合格後のBenefitを示す      |
| Exam Basics & Commentary (trend)          | 全体像を掴みたい・初心者 | **QUEST**      | Educate（教育）重視。深い理解を促し学習への誘いを作る       |
| Last-minute Prep / Pass Pack (method/app) | 不合格が怖い・時間がない | **PASONA**     | 失敗コストのProblem提示 → 今すぐ行動すべきNarrow downで押す |

---

## 画像生成ルール

- **禁止**: Claude Code の組み込みツールでの直接生成（`generate_image` 等）は使用禁止
- **必須手順**: `.workspace/scripts/Antigravity-nanobana/generate-image.js` を `node` で実行

```bash
node .workspace/scripts/Antigravity-nanobana/generate-image.js "Prompt" "src/data/post/{category}/{slug}/cover.jpg"
```

- **ドラフト中**: 画像コメントをファイルに残す形で対応

```markdown
<!-- IMAGE_PROMPT: minimalist pictogram, white [icon] on dark navy background, flat design, 16:9 -->
```

- **theoryカテゴリ**: `src/data/post/theory/common-cover.png` を共通利用。個別生成スキップ

---

## 記事インデックス取得ルール

`src/data/post/` の記事一覧・検索・分析を行うときは、**必ずスクリプトを実行**して取得すること。

```bash
node .workspace/scripts/index-articles.js
# → .workspace/task-results/article-index.md に出力される
```

手動スキャンや記憶による列挙は不正確なため禁止。

---

## Git ルール

- **`git push` は禁止**: このプロジェクトでは push が本番自動デプロイをトリガーする。push は必ずユーザーが手動実行すること
- **`git add` / `git commit` は許可**: 安定した作業単位でのコミットは推奨
- **`--no-verify` は使用禁止**（CLAUDE.md共通ルール準拠）

---

## エラー・失敗フィードバックループ

### ユーザーから「違う」「失敗した」「動かない」等の指摘を受けたとき

1. **調査**: 前回の試みと現在のコード/状態を比較し、根本原因を特定
2. **ログ更新（必須）**: `.agents/fact-check/FAILURE_LOG.md` に新規エントリを追記
3. **ライブラリ更新**: 信頼できる新しい正規表現・パターンがあれば `.agents/fact-check/REGEX_LIBRARY.md` に追加
4. **確認報告**: レスポンス内で「失敗をログに記録しました」と一言報告

### 複雑な正規表現・ファイル変換タスクの前に

`.agents/fact-check/FAILURE_LOG.md` と `REGEX_LIBRARY.md` を必ずレビューして既知の失敗パターンを回避すること。

---

## 既知の落とし穴

詳細は `.agents/fact-check/FAILURE_LOG.md` を参照。要点のみ:

- `Edit` ツールの `old_string` は **完全一致必須**（`...` による省略は動作しない）
- シェルでの正規表現: エスケープの階層（AI → Shell → Regex）に注意
- GA4確認時は `src/config.yaml` で `partytown: false` に設定してデバッグ
- `**bold**` のままになっている記事を本番に混入させない（`/check-draft` コマンドで事前チェック）

---

## スラッシュコマンド一覧（.claude/commands/）

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
