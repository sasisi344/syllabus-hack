# 新規クイズアプリ作成

試験名 / アプリ名: $ARGUMENTS

新規クイズアプリの設計・スキャフォールドを行います。

## 手順

### Step 1: スキルロード（並列）

- Read `.agents/quiz_app_rules.md` — 全規約・テンプレートを確認
- Read `.agents/quiz_data_rules.md` — 問題 JSON スキーマを確認
- Read `src/apps/index.ts` — 既存 examId・スラッグの重複確認

### Step 2: examId カタログ照合

`.agents/quiz_app_rules.md` §2 のカタログを参照して、以下を決定する:

- **app-slug**: kebab-case（例: `ap-quiz`, `genai-ethics-quiz`）
- **examId**: カタログに既存のものを優先。新規の場合は衝突しない値を採番
- **LocalStorage キー**: `sh_quiz_{examId}` で自動決定
- **旧キーの有無**: 既存データの移行が必要かどうか

> **禁止**: カタログに存在する examId を別アプリで重複使用しない。

### Step 3: 既存アプリ参照確認

最も近い既存アプリを特定して参照実装として使う:

| 新規アプリの特徴              | 参照実装                      |
| ----------------------------- | ----------------------------- |
| 標準 4 択ドリル（分野別）     | `src/apps/it-passport-quiz/`  |
| 本番形式模擬試験あり          | `src/apps/ap-quiz/`           |
| 長文シナリオ形式（科目 B 系） | `src/apps/sg-subject-b-quiz/` |
| カテゴリ別 + フラッシュカード | `src/apps/genai-ethics-quiz/` |

参照実装の `QuizApp.tsx` と `progress.ts` を Read して差分を把握する。

### Step 4: 要件定義ファイル作成

`.workspace/.task/requirement-{app-slug}.md` を新規作成する:

```markdown
# {アプリ名} 要件定義

## 基本情報

- app-slug: {app-slug}
- examId: {examId}
- LocalStorage キー: sh*quiz*{examId}
- 参照実装: src/apps/{参照アプリ}/

## 問題データ

- 対象 JSON: src/data/master/questions-{examId}.json
- 目標問題数:
- 分野配分 (strategy/management/technology/...):
- 難易度配分 (beginner/intermediate/advanced):

## UI 要件

- 全分野シャッフル: あり / なし
- 本番形式模擬試験: あり / なし（問題数・分野比率）
- 今日の1問 (DailyQuiz): あり / なし
- カテゴリ別ドリル: あり / なし

## 記事ページ

- タイトル:
- slug: {app-slug}
- カバー画像プロンプト: minimalist pictogram, white [...] on dark navy background, flat design, 16:9
```

### Step 5: 実装計画を提示してユーザー確認を取る

以下のファイル一覧と役割を報告し、**実装開始前にユーザーの承認を得る**:

```
src/apps/{app-slug}/
├── types.ts          # quiz_app_rules.md §4 テンプレートを使用
├── progress.ts       # quiz_app_rules.md §5 テンプレートを使用
├── QuizApp.tsx       # {参照実装} をベースに差分のみ変更
├── DailyQuiz.tsx     # 任意（DailyQuiz が必要な場合）
└── quiz.css          # {参照実装} の quiz.css をベースに色調整

src/data/master/questions-{examId}.json  （新規 or 既存に追記）
src/data/post/app/{app-slug}/index.mdx
src/data/post/app/{app-slug}/cover.jpg   （IMAGE_PROMPT コメントで代替可）
src/apps/index.ts                        （AppMetadata 追記）
```

### Step 6: スキャフォールド実行（承認後）

以下の順で実装する:

1. `types.ts` を §4 テンプレートから生成（examId 特有の分野があれば ExamField を拡張）
2. `progress.ts` を §5 テンプレートから生成（examId・旧キーを設定）
3. `quiz.css` を参照実装からコピーして CSS クラスプレフィックスのみ変更
4. `QuizApp.tsx` を参照実装ベースで実装（アプリ固有のロジックを差分として追加）
5. `src/apps/index.ts` に AppMetadata を追記
6. `src/data/post/app/{app-slug}/index.mdx` を作成

### Step 7: 問題データ

- 既存 JSON がある場合: `/quiz-add-questions {examId}` を実行
- 新規 JSON の場合: `quiz_data_rules.md` の JSON スキーマに従い作成

### Step 8: リリース前チェック

`/app-audit {app-slug}` を実行してすべての項目が ✅ になることを確認する。

> **注意**: `pnpm build` でエラーがないことを確認してからユーザーに報告する。
> `git push` は絶対に実行しない — push はユーザーが手動で行う。
