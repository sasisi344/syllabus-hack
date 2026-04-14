# アプリ規約準拠チェック

対象アプリスラッグ: $ARGUMENTS

指定アプリを `.agents/quiz_app_rules.md` の規約に照らして監査してください。
引数が空の場合は `src/apps/` 配下の全アプリを対象にする。

## 調査手順

### Step 1: ファイル構成確認

対象の `src/apps/{app-slug}/` を Glob で一覧取得し、以下を確認する:

- [ ] `types.ts` が存在するか
- [ ] `progress.ts` が存在するか（存在しない場合は **重大違反**）
- [ ] `QuizApp.tsx` が存在するか
- [ ] `quiz.css` が存在するか
- [ ] `App.ts` などのスタブファイルが残っていないか（存在する場合は **削除推奨**）

### Step 2: LocalStorage キー規約チェック

`progress.ts` を Read して以下を確認する:

- [ ] `STORAGE_KEY_PREFIX = 'sh_quiz_'` を使っているか
  - NG例: `sh_genai_cert_progress_`, `sh_genai_trend_`, `syllabushack_xxx`
- [ ] 旧キーが存在する場合、マイグレーションコード（`migrateIfNeeded`）があるか
- [ ] 履歴上限が `.slice(0, 100)` か（1000 など大きな値はNG）
- [ ] `typeof window === 'undefined'` チェックがあるか
- [ ] catch 内でエラーを再スローしていないか

### Step 3: TypeScript 型安全チェック

各 `.ts` / `.tsx` ファイルを Grep して確認:

```
Grep パターン: ": any" または "as any"
```

- [ ] `any` 型の使用箇所をリストアップ
- [ ] 修正可能な `any` は具体的な型名を提案する

### Step 4: コンポーネント規約チェック

`QuizApp.tsx` を Read して確認:

- [ ] `client:load` を使っているか（MDX 側も確認）
- [ ] AI解説リンクが `https://gemini.google.com/app?q=` 形式か
- [ ] `recordAnswer` / `loadProgress` を呼び出しているか
- [ ] CSS クラスが命名規則に従っているか（`qa-` / `dq-` / `sg-` 等）

### Step 5: レジストリ確認

`src/apps/index.ts` を Read して確認:

- [ ] 対象アプリが `appRegistry` に登録されているか
- [ ] `id` / `slug` / `title` / `category` / `status` が揃っているか
- [ ] `examId` フィールドがあるか（クイズ系は必須）

### Step 6: MDX ページ確認

`src/data/post/app/{app-slug}/index.mdx` を Read して確認:

- [ ] `appId` フロントマターがあるか
- [ ] `client:load` ディレクティブを使っているか
- [ ] `examId=` に渡している値が §2 のカタログと一致するか

### Step 7: ダークモード確認

`quiz.css` を Read して確認:

- [ ] `.dark .xxx` セレクタが存在するか
- [ ] `@media (prefers-color-scheme: dark)` が存在するか

## 出力フォーマット

各チェック項目を以下の形式で報告する:

```
✅ OK: {項目名}
⚠️  警告: {項目名} — {詳細・修正提案}
❌ 違反: {項目名} — {詳細・修正コマンド例}
```

最後に **修正優先度マトリクス** を出力する:

| 優先度 | 内容 | 修正コスト |
| ------ | ---- | ---------- |
| 高     | ...  | 小/中/大   |
| 中     | ...  | 小/中/大   |
| 低     | ...  | 小/中/大   |

修正が必要な項目については、`/quiz-add-questions` や手動修正の具体的な手順も提示する。
