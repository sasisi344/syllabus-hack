# 次ステップ：記事リフレッシュキュー

作成日: 2026-04-15  
根拠: サイト方針（資格ノウハウは **ChatGPT / Claude / Gemini** をタイトル・見出し・タグで明示。アプリ記事は短尺維持で可。用語・理論は量より**事実精査**）。

インデックス再生成（作業前後の差分確認用）:

```bash
node .workspace/scripts/index-articles.js
```

（スクリプトが無い場合は `article-index.md` を手動更新する）

---

## 現在の保存状態（2026-04-15）

- 完了: `P0`（5/5）
- 進行中: `P1`（5/31 完了）
- 未着手: `P1` 残り26本、`P2`、`P3`、`P4`

## 次にやること（実行順）

1. `src/data/post/method/pm-pm2-module-hack/index.md`
2. `src/data/post/method/st-strategy-brainstorming/index.md`
3. `src/data/post/method/st-no-experience-essay-hack/index.md`
4. `src/data/post/method/level4-strategy-hub/index.md`
5. `src/data/post/method/it-passport-study-route-comparison/index.md`
6. `src/data/post/method/genai-self-made-app-hack/index.md`
7. `src/data/post/method/fe-pseudo-code-visual-hack/index.md`
8. `src/data/post/method/fe-pseudo-code-ai-hack/index.md`

（以降はP1表の上から順に継続。8本ごとに `index-articles.js` を再実行して差分確認）

---

## P0 — ハブ・入口（最優先）

| パス | リフレッシュ内容 |
|------|------------------|
| `src/data/post/method/guide/index.md` | 全体ハブ。冒頭に「ツール別早見（ChatGPT / Claude / Gemini）」表を追加。`lastmod` 更新。 ✅ 2026-04-15 |
| `src/data/post/method/practice-guide-ipa/index.md` | 「AIで」の箇所をツール別ワークフローに分解。既存の柱記事への内部リンク。 ✅ 2026-04-15 |
| `src/data/post/method/chatgpt-itpassport-ai-complete-guide/index.md` | 新規柱。FE 科目Bハブ・NotebookLM 系・CBT 記事への**相互リンク**と tags/metadata の整合。 ✅ 2026-04-15 |
| `src/data/post/method/fe-subject-b-ai-prompt-hub/index.md` | 新規柱。`fe-subject-b-drill` / `fe-pseudo-code-ai-hack` / `gemini-prompt-collection` への導線。 ✅ 2026-04-15 |
| `src/data/post/method/ap-pm-descriptive-ai-prompts/index.md` | 既に ChatGPT/Claude 記載あり。**Gemini（長文・PDF）**の位置づけ1節追加で3製品揃える。 ✅ 2026-04-15 |

---

## P1 — method：「生成AI」「AI」総称のみ → ツール名明示＋コピペプロンプト

| パス | リフレッシュ内容 |
|------|------------------|
| `src/data/post/method/new-ipa-exam-study-strategy/index.md` | 「データとAI」を ChatGPT / Claude / Gemini の**役割分担**（調査・添削・スケジュール等）に書き分け。 ✅ 2026-04-15 |
| `src/data/post/method/ap-grader-intent-hack/index.md` | 採点者意図読解を **Claude（長文）vs ChatGPT** の使い分けに具体化。 ✅ 2026-04-15 |
| `src/data/post/method/ap-afternoon-ai-coaching/index.md` | タイトルまたは H2 にツール名。添削プロンプトを製品別に1本ずつ。 ✅ 2026-04-15 |
| `src/data/post/method/ap-grader-blackbox-hack/index.md` | AI活用箇所があるなら同上。記述キーワード生成は ChatGPT/Claude 明示。 ✅ 2026-04-15 |
| `src/data/post/method/common-essay-ai-examiner/index.md` | 「AI試験委員」を **Claude Projects / ChatGPT プロジェクト** のどちらで再現するか手順固定。 ✅ 2026-04-15 |
| `src/data/post/method/pm-pm2-module-hack/index.md` | 論文モジュール化の実行環境をツール名で固定。 |
| `src/data/post/method/st-strategy-brainstorming/index.md` | ブレストを **ChatGPT vs Gemini（Deep Research 等）** で用途分岐。 |
| `src/data/post/method/st-no-experience-essay-hack/index.md` | 架空事例錬成のプロンプトをツール別テンプレ化。 |
| `src/data/post/method/level4-strategy-hub/index.md` | 高度試験ロードマップ内の「生成AI」を3製品の使い所マトリクスに。 |
| `src/data/post/method/it-passport-study-route-comparison/index.md` | 「AI学習」列を ChatGPT / Claude / Gemini（+ NotebookLM）比較表に拡張。 |
| `src/data/post/method/genai-self-made-app-hack/index.md` | 自作アプリの例を **どのモデルでコード生成したか** を明記（再現性）。 |
| `src/data/post/method/fe-pseudo-code-visual-hack/index.md` | 「AIで」を Gemini / ChatGPT の画像・コード表示の使い分けに。 |
| `src/data/post/method/fe-pseudo-code-ai-hack/index.md` | 同上。`fe-subject-b-ai-prompt-hub` へリンク。 |
| `src/data/post/method/fe-algorithm-roadmap/index.md` | ロードマップ内 AI 箇所にツール名を入れる。 |
| `src/data/post/method/ip-strategy-ai-hack/index.md` | たとえ話生成は **ChatGPT** 等、明示。 |
| `src/data/post/method/itp-10-days-panic-hack/index.md` | 直前10日の「家庭教師」をツール別ミニプランに。 |
| `src/data/post/method/aws-personalized-roadmap-hack/index.md` | ロードマップ生成を **ChatGPT vs Claude** で比較1段落。 |
| `src/data/post/method/fp-ai-simulator-hack/index.md` | シミュレーター用プロンプトの実行ツールを明記。 |
| `src/data/post/method/sg-news-study-hack/index.md` | ニュース要約・演習化のツール名・プロンプト固定。 |
| `src/data/post/method/sg-meaningless-rumors-hack/index.md` | 生成AI箇所の具体ツール化（任意・本文量に応じて）。 |
| `src/data/post/method/sc-timeline-hack/index.md` | タイムライン生成を **Claude / ChatGPT** どちら向きか明記。 |
| `src/data/post/method/db-normalization-hack/index.md` | ドリル無限生成の推奨モデル表記。 |
| `src/data/post/method/nw-mermaid-hack/index.md` | 図生成のツール名（Gemini / ChatGPT）を手順に追記。 |
| `src/data/post/method/vision-to-mermaid-hack/index.md` | 同上。 |
| `src/data/post/method/genai-vocabulary-learning-efficiency/index.md` | 用語学習を **3製品それぞれ** の短文テスト生成に対応づけ。 |
| `src/data/post/method/genai-problem-mastery-notebooklm/index.md` | タイトルは NotebookLM 中心のまま、比較で ChatGPT / Claude に1節。 |
| `src/data/post/method/ai-new-terms-explanation/index.md` | RAG/HITL 解説は精査。**出典・定義の更新**とツール別「自分用クイズ」生成。 |
| `src/data/post/method/ipa-absence-report-hack/index.md` | 生成AIで文書化する箇所のツール明示（軽微で可）。 |
| `src/data/post/method/itp-receipt-name-change-hack/index.md` | 同上。 |
| `src/data/post/method/miss-note-db/index.md` | 思考癖分析を **どのモデルが向くか** 1段落。 |
| `src/data/post/method/ai-dj-pomodoro/index.md` | BGM生成を **ChatGPT / Suno等** まで含め表記を2026年時点に更新（仕様確認必須）。 |

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

## 完了したら

このファイルの該当行に `✅ YYYY-MM-DD` を追記するか、`pot-reflesh/archive/` にスナップショットを移す。
