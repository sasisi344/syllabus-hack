# 📅 2026-04-W16 今週の優先タスク

### 🧩 `src/apps` ウェブアプリ改善（評価メモ 2026-04-15）

**良い点**: Preact + Islands で統一、`it-passport-quiz` を軸にドリルUX・AI解説プロンプト・分野別集計が揃っている。`src/apps/index.ts` でレジストリ一元管理できている。

**改善TODO**

- [x] **LocalStorage キー規約の統一**: `sh_quiz_{examId}` に統一済み。`genai-cert-quiz` / `genai-trend-quiz` / `genai-ethics-quiz` の各 `progress.ts` を更新し、旧キーからの自動マイグレーションコードを追加（2026-04-15）。
- [x] **回答履歴件数の統一**: `genai-ethics-quiz` の履歴上限を 1000 → 100 件に修正（2026-04-15）。
- [x] **デッドコードの整理**: `it-passport-quiz/App.ts`（未使用スタブ）を削除（2026-04-15）。
- [x] **進捗未実装アプリ**: `sg-subject-b-quiz` に `progress.ts` を新規作成し、`QuizApp.tsx` に組み込み。結果画面に累積成績（総回答数・累積正答率）を表示（2026-04-15）。
- [x] **フラッシュカード**: `flashcard-app` に `storage.ts` を追加。`CardSession.tsx` でデッキ別習熟度（`sh_flashcard_{deckId}`）を LocalStorage に保存。習熟済みカードを末尾に回し、ヘッダーに習得数を表示（2026-04-15）。
- [x] **セキュリティ**: `pm-essay-gacha` の Gemini API キー入力欄に「共有PCでは使用後に削除してください」警告を追加（2026-04-15）。
- [x] **型安全**: `pdf-to-text/SyllabusParser.tsx` の `any` 型をローカル型定義（`SyllabusField` / `MiddleCategory` / `CategoryListItem` 等）に置き換え（2026-04-15）。
- [ ] **重複実装の集約**: `ap-quiz/QuizApp.tsx` と `it-passport-quiz/QuizApp.tsx` は構造がほぼ同一。共通 `BaseQuizApp`（または props で出題ロジック差分）に抽出し、バグ修正を一箇所に集約する。
- [ ] **レジストリと実装の対応表**: `appRegistry` にあるが `src/apps/{slug}/` が無いスラッグ（別フォルダの `QuizApp` を共有している等）を README かコメントで一覧化し、新規開発者の迷いを減らす。

---

## ✅ 完了アーカイブ (Archived Tasks)

<details>
<summary>クリックして完了済みの項目を表示</summary>

</details>
