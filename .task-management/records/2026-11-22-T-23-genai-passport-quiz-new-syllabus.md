# T-23 生成AIパスポート クイズを新シラバスへ

- 完了日: 2026-11-22
- 種別: 施策
- テーマ: 生成AIパスポート, クイズ, 新シラバス, app-audit
- 対象: /app/genai-passport-quiz/、/app/genai-ethics-quiz/、`src/apps/index.ts`
- 起票元: hq:H-29

## 何をしたか

- a（既存236問の付け替え・書き直し・削除。G-5）と b（足りない中項目の作問とアプリ記事の分類の説明。G-3・G-6 の記事）を Codex が実施し、CC が 11/13 に検収、11/14 に公開（2f4f709）。257問・新5分類
- G-6（11/22、CC）: `genai-ethics-quiz`・`genai-trend-quiz` は維持し、生成AIパスポートへ統合しない。どちらも IPA 系試験（ITパスポート・基本情報・高度試験）の生成AI用語ドリルで、対象の試験が違うため。`genai-ethics-quiz/quiz.css` は `genai-cert-quiz`（生成AIパスポート・生成AI導入実務者検定）が使い回しているので消せない。レジストリの `status` を 2本とも `development` → `beta`（ユーザー指示）
- G-9（11/22、CC）: `/app-audit genai-passport-quiz`。実体のコードは `src/apps/genai-cert-quiz/`。レジストリの説明「シラバス完全準拠！」を新シラバス5分類・257問・自作問題集の説明へ、タイトル「模擬試験シミュレーター」を「練習問題（新シラバス5分類）」へ直した（記事が「模試ではありません」「全範囲を網羅するものではない」と書いているため）
- `src/apps/index.ts` の `appRegistry` はどのページも読んでいない（11/22 Grep）ので、読者の見た目は変わらない

## 使ったデータ・資料

- `.workspace/projects/genai-pass/genai-pass-task.md` G-3〜G-9
- 検収: `.workspace/admin-review/2026-11-13-T-23a.md`・`2026-11-13-T-23b.md`
- 指示書: `.workspace/codex/orders/2026-11-02-T-23a.md`・`2026-11-02-T-23b.md`

## 結果

app-audit（`genai-cert-quiz` ＋ `genai-passport-quiz`）:

- OK: `progress.ts` が `sh_quiz_` と旧キーのマイグレーション、`typeof window` の確認、catch で再スローしない。`recordAnswer`・`loadProgress` を呼ぶ。AI 解説は `https://gemini.google.com/app?q=`。クラス名は `qa-`。レジストリに `examId: 'genai-pass'`。記事に `appId`、`examId="genai-pass"`
- 警告（直していない。inbox I-27）: 記事が `client:only="preact"`（規約は `client:load`。初期表示で `loadProgress` を読むため SSR とずれる懸念があり、変えるなら画面で確かめる）／`transformQuestions.ts` の `raw: any[]`（eslint-disable 付き。生成AI導入実務者検定と共用）／`quiz.css` が自前になく `genai-ethics-quiz` のものを使い回し、`@media (prefers-color-scheme: dark)` がない（`.dark` は34か所あり、サイトのテーマ切り替えでは崩れない）／`genai-ethics-quiz` のレジストリに `examId` がない

## 次に使える知見

- アプリのスラッグとコードのディレクトリが一致しないことがある（`genai-passport-quiz` → `genai-cert-quiz`、ethics と trend は同じページに同居）。監査の前に記事の import を見る
- `appRegistry` の `status` や説明は今は表示されていない。表示に使うようになったら、ほかのアプリの説明（「決定版」など）も見直す
- コース用の問題（G-4）とコースとの相互リンク（G-7）は T-21・T-22 で扱う
