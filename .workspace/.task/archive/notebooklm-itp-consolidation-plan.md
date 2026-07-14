# NotebookLM × ITパスポート記事 統合計画（v2: ページ復活ではなく1本に統合）

> 作成日: 2026-06-18
> 背景: `itp-consolidation-plan.md`（2026-05-30）のGroup B（NotebookLM統合）は後発の大型統合（2026-05-31〜06-10）に上書きされ、`examId: ip` 特化コンテンツ（自分事化・ドリル生成）が消えた。サイト内13箇所の内部リンクが、その内容を含まない汎用記事 `notebooklm-features-guide` を指している。
>
> **方針転換**: 個別記事を`draft:false`に戻す（=ページ数を増やす）のではなく、固有コンテンツを生存記事 `notebooklm-features-guide` に統合してロングテールを狙う。サイトの根本課題は「記事が多すぎて1本あたりが薄く、Googleに陳腐コンテンツと判定されている」ことなので、ページ数を増やす方向の対応は逆効果。**1本を厚くする。**

---

## 対象記事の現状

| URL | 状態 | 固有コンテンツ |
|---|---|---|
| `/notebooklm-features-guide`（生存・統合先） | `draft: false`, examId: common | フラッシュカード/クイズ/音声/マインドマップ/動画の5機能ガイド |
| `/notebooklm-it-passport-drill`（廃止済み） | `draft: true` | 用語の自分事化（CRM×不動産営業の例）＋ 50問オリジナルドリル生成手順 |
| `/notebooklm-ip-study-hack`（廃止済み） | `draft: true` | 用語の自分事化（drill記事のサブセット、追加の例なし） |

`notebooklm-features-guide` には「自分事化」「ドリル生成」のどちらも未収録 → ここに統合する。

---

## 統合する2セクション

### セクション1: 用語の自分事化
- 出典: `notebooklm-it-passport-drill` 技術①
- 内容: 抽象的なIT用語を読者の職業・生活に翻訳させるプロンプト技術。具体例（営業職×CRM）はそのまま活かす
- 挿入位置: 「フラッシュカード」セクションの後（用語の暗記→意味の自分事化という流れが自然）
- 一般化: examId:commonの記事なので「ITパスポートの」という限定は外し、「資格試験の専門用語を」に変更。具体例としてITパスポートのCRM例を残す（汎用性と具体性を両立）

### セクション2: オリジナルドリル生成
- 出典: `notebooklm-it-passport-drill` 技術②
- 内容: シラバス・過去問PDFをソースにチャットで大量の演習問題を生成する手順（3つの準備物→Step1→Step2→出題比率調整→300問ノック）
- 既存の「クイズ機能」セクションとの違いを明記: クイズ機能は理解度チェック（ファインマン式）、ドリル生成はチャットで大量の演習問題そのものを量産する別技術
- 挿入位置: 「クイズ機能」セクションの直後

---

## 作業チェックリスト

### 1. コンテンツ統合（`notebooklm-features-guide/index.md`）
- [x] 「用語の自分事化」セクションを追加（フラッシュカードの後）
- [x] 「オリジナルドリル生成」セクションを追加（クイズ機能の後）
- [x] 「機能の仕分け」表に行を追加（自分事化・ドリル生成）※当初想定の2行ではなく「チャット（質問応答）」1行に2テクニックを統合
- [x] excerpt / metadata.description を更新し、2テクニックを言及（検索意図カバー範囲の拡大を反映）
- [x] tags に必要なら追加検討（`tag_rules.md`で正規タグ確認）— `プロンプト`（汎用語）を`ドリル`（既存実績タグ・新セクション反映）に入れ替え
- [x] `lastmod` を `2026-06-18` に更新
- [x] `notebooklm-it-passport-drill` / `notebooklm-ip-study-hack` は `draft: true` のまま維持（変更なし確認済み）

### 2. 内部リンク修正（href をリダイレクト経由でなく正規URLへ直接張り替え、計13箇所）

`/notebooklm-ip-study-hack` または `/notebooklm-it-passport-drill` → `/notebooklm-features-guide` に変更:
- [x] `src/data/post/career/ses-ap-strategy-kanagawa/index.md` (L48)
- [x] `src/data/post/career/backoffice-sg-strategy-hiroshima/index.md` (L61)
- [x] `src/data/post/career/liberal-arts-it-strategy-fukuoka/index.md` (L48)
- [x] `src/data/post/career/backoffice-sg-strategy-shizuoka/index.md` (L51)
- [x] `src/data/post/career/liberal-arts-it-strategy-aichi/index.md` (L50)
- [x] `src/data/post/career/ip-survival-strategy/index.md` (L74) — アンカーテキストも「ITパスポート用語を自分事化する最強の学習法」→「用語を自分事化する最強の学習法」に調整済み
- [x] `src/data/post/method/chatgpt-itpassport-ai-complete-guide/index.md` (L185, L215)
- [x] `src/data/post/method/itp-hub/index.md` (L150)
- [x] `src/data/post/method/notebooklm-syllabus-study-method/index.md` (L76)
- [x] `src/data/post/method/practice-guide-ipa/index.md` (L59, L94)
- [x] `src/data/post/method/guide/index.md` (L46)

→ `grep -r "notebooklm-ip-study-hack\|notebooklm-it-passport-drill" src/data/post/` で残存リンクなしを確認済み。

### 3. 周辺整理
- [x] `next-task.md` フェーズ1の `itp-smartphone-only-hack` バックリンクタスクを `smartphone-study-guide` 宛てに修正
- [x] `next-task.md` フェーズ1の `final-checkpoint-100-plus` バックリンクタスクを `itp-10-days-panic-hack` 宛てに修正（旧final-checkpoint-100-plus行は削除し注記）
- [x] `itp-consolidation-plan.md` を削除（Group A/C/D実行済み、Group Bは本計画に置き換え）

### 4. 検証
- [x] `pnpm build` でビルドエラー・リンク切れがないか確認 → 1295ページ正常ビルド完了（エラーなし）
- [x] 統合後の記事の文字数・セクション数が「薄い」印象にならないか目視確認 → 210行・見出し12個、薄さの懸念なし

---

全項目完了。本計画はクローズ。

---

## 対象外（今回は触らない）

- `notebooklm-ai-workflow-guide` とその他のexamId:common向けredirect（flashcard/anystudy/podcast/quiz/movie/mindmap/100-day-hack/100days-challenge-hack）はスコープ一致のため変更不要
- `notebooklm-it-passport-drill` / `notebooklm-ip-study-hack` の `draft:true` 状態は維持（完全削除はしない）
