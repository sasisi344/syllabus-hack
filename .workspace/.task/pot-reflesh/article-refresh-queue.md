# 次ステップ：記事リフレッシュキュー

作成日: 2026-04-15  
最終整理: 2026-04-24  

根拠: サイト方針（資格ノウハウは **ChatGPT / Claude / Gemini** をタイトル・見出し・タグで明示。アプリ記事は短尺維持で可。用語・理論は量より**事実精査**）。

インデックス再生成（作業前後の差分確認用）:

```bash
node .workspace/scripts/index-articles.js
```

（スクリプトが無い場合は `article-index.md` を手動更新する）

---

## 現在の保存状態（2026-04-24）

- 完了: `P0`（5/5）
- 完了: `P1`（31/31）method ツール名リフレッシュ済み
- 次サイクル: `P2` → `P3` → `P4`

---

## P1 TODO（未完了）

P1 method のツール名リフレッシュは **2026-04-24 時点で完了**。新規記事の追加や差し戻しが出たら、**このセクションの先頭**にチェックボックス行を積み上げる。

- （未完了なし）

---

## 次に着手する優先（P2以降）

1. P2 `trend/ipa-syllabus-follow-up` など（下記 P2 表を上から）
2. P3 theory/term の精査バッチ（5〜10本単位）
3. P4 app 記事の短い導線追加

---

## P0 — ハブ・入口（参照用）

| パス | リフレッシュ内容 |
|------|------------------|
| `src/data/post/method/guide/index.md` | 全体ハブ。冒頭に「ツール別早見（ChatGPT / Claude / Gemini）」表を追加。`lastmod` 更新。 ✅ 2026-04-15 |
| `src/data/post/method/practice-guide-ipa/index.md` | 「AIで」の箇所をツール別ワークフローに分解。既存の柱記事への内部リンク。 ✅ 2026-04-15 |
| `src/data/post/method/chatgpt-itpassport-ai-complete-guide/index.md` | 新規柱。FE 科目Bハブ・NotebookLM 系・CBT 記事への**相互リンク**と tags/metadata の整合。 ✅ 2026-04-15 |
| `src/data/post/method/fe-subject-b-ai-prompt-hub/index.md` | 新規柱。`fe-subject-b-drill` / `fe-pseudo-code-ai-hack` / `gemini-prompt-collection` への導線。 ✅ 2026-04-15 |
| `src/data/post/method/ap-pm-descriptive-ai-prompts/index.md` | 既に ChatGPT/Claude 記載あり。**Gemini（長文・PDF）**の位置づけ1節追加で3製品揃える。 ✅ 2026-04-15 |

---

## P2 — trend / career：検索KWと時事性

| パス | リフレッシュ内容 |
|------|------------------|
| `src/data/post/trend/ipa-syllabus-follow-up/index.md` | 「AIディープリサーチ」を **Gemini / ChatGPT Deep Research / Claude** の製品名レベルに。 |
| `src/data/post/trend/ipa-2026-cbt-strategy-ai/index.md` | CBT空白期の学習をツール別に具体化。 |
| `src/data/post/trend/ai-assistant/index.md` | タイトル・見出しに ChatGPT / Copilot / Gemini 等の**製品名**を分解。 |
| `src/data/post/trend/genai-syllabus-integration/index.md` | 出題傾向の一次情報確認。**IPA公式・シラバス版**の照合（精査）。 |
| `src/data/post/trend/it-passport-syllabus-genai-update/index.md` | シラバス差分の再確認と `lastmod`。 |
| `src/data/post/trend/latest-ai-future-of-exams/index.md` | NotebookLM 中心＋他ツール1節。 |
| `src/data/post/career/itp-non-engineer-career-strategy/index.md` | Unknown 日付の整理と、学習パートのツール名（必要なら）。 |

---

## P3 — theory / term（glossary）：ボリューム増より精査バッチ

次サイクルで **5〜10本ずつ** 事実確認（IPAシラバス・法令改正・用語の境界）。

| パス | メモ |
|------|------|
| `src/data/post/term/intellectual-property-rights/index.md` | 法改正・試験範囲の整合。 |
| `src/data/post/term/unfair-competition-prevention-act/index.md` | 同上。 |
| `src/data/post/term/labor-dispatch-act-ses/index.md` | 同上。 |
| `src/data/post/term/labor-standards-act-36-agreement/index.md` | 同上。 |
| `src/data/post/term/subcontract-act-it-dev/index.md` | 同上。 |
| `src/data/post/theory/break-even-point/index.md` | 計算例・用語の試験整合。 |
| `src/data/post/theory/swot-analysis/index.md` | 「AIで」の部分をツール名明示に変更するか検討。 |

（残りの `term/` / `theory/` は `article-index.md` の glossary / theory 列からローテーション。）

---

## P4 — app 記事（短尺維持・差分最小）

| パス | リフレッシュ内容 |
|------|------------------|
| `src/data/post/app/it-passport-quiz/index.mdx` 等 | **1〜2文**で `method/chatgpt-itpassport-ai-complete-guide` または `fe-subject-b-ai-prompt-hub` へ誘導。長文化しない。 |

---

## 作業チェック（各記事共通）

- [ ] `lastmod` を更新日に合わせる（`publishDate` は変更しない）
- [ ] tags に `ChatGPT` / `Claude` / `Gemini` のうち**実際に使うもののみ**を追加（tag_rules に照合）
- [ ] 本番本文は `<strong>` ルール準拠（`**bold**` 禁止）
- [ ] 新規相互リンクは自然なアンカーテキストで1〜2本まで（リンク過多にしない）

---

## P1 完了ログ（末尾・時系列参照用）

| 完了日 | パス |
|--------|------|
| 2026-04-15 | `method/new-ipa-exam-study-strategy/index.md` |
| 2026-04-15 | `method/ap-grader-intent-hack/index.md` |
| 2026-04-15 | `method/ap-afternoon-ai-coaching/index.md` |
| 2026-04-15 | `method/ap-grader-blackbox-hack/index.md` |
| 2026-04-15 | `method/common-essay-ai-examiner/index.md` |
| 2026-04-24 | `method/pm-pm2-module-hack/index.md` |
| 2026-04-24 | `method/st-strategy-brainstorming/index.md` |
| 2026-04-24 | `method/st-no-experience-essay-hack/index.md` |
| 2026-04-24 | `method/level4-strategy-hub/index.md` |
| 2026-04-24 | `method/it-passport-study-route-comparison/index.md` |
| 2026-04-24 | `method/genai-self-made-app-hack/index.md` |
| 2026-04-24 | `method/fe-pseudo-code-visual-hack/index.md` |
| 2026-04-24 | `method/fe-pseudo-code-ai-hack/index.md` |
| 2026-04-24 | `method/fe-algorithm-roadmap/index.md` |
| 2026-04-24 | `method/ip-strategy-ai-hack/index.md` |
| 2026-04-24 | `method/itp-10-days-panic-hack/index.md` |
| 2026-04-24 | `method/aws-personalized-roadmap-hack/index.md` |
| 2026-04-24 | `method/fp-ai-simulator-hack/index.md` |
| 2026-04-24 | `method/sg-news-study-hack/index.md` |
| 2026-04-24 | `method/sg-meaningless-rumors-hack/index.md` |
| 2026-04-24 | `method/sc-timeline-hack/index.md` |
| 2026-04-24 | `method/db-normalization-hack/index.md` |
| 2026-04-24 | `method/nw-mermaid-hack/index.md` |
| 2026-04-24 | `method/vision-to-mermaid-hack/index.md` |
| 2026-04-24 | `method/genai-vocabulary-learning-efficiency/index.md` |
| 2026-04-24 | `method/genai-problem-mastery-notebooklm/index.md` |
| 2026-04-24 | `method/ai-new-terms-explanation/index.md` |
| 2026-04-24 | `method/ipa-absence-report-hack/index.md` |
| 2026-04-24 | `method/itp-receipt-name-change-hack/index.md` |
| 2026-04-24 | `method/miss-note-db/index.md` |
| 2026-04-24 | `method/ai-dj-pomodoro/index.md` |

---

## 完了したら（運用メモ）

- 未完了が出たら **「P1 TODO（未完了）」セクションの先頭** にチェックリスト行を追加する。
- 完了したら **「P1 完了ログ」表の末尾** に1行追記し、本文キューからは削除するか ✅ のみ残す。
- スナップショットを残す場合は `pot-reflesh/archive/` へ。
