# 生成AIタグ × 生成AI主体テーマ記事リスト（NotebookLM記事再編集の棚卸し）

作成日: 2026-09-29
目的: NotebookLM関連記事が「内容が古い・分散していて面白くない」ため再編集したい。その前段として、`生成AI` タグが付き、かつ生成AIそのもの（ツール・活用法・技術・資格）を主題にしている記事を洗い出す。

## 抽出方法

- 対象: `src/data/post/**/index.md(x)` のフロントマター `tags`
- 条件: `tags` に `生成AI` を含む記事（67本）から、<strong>生成AIが主題</strong>の記事だけを残した
  - 除外: 資格別の攻略記事で、生成AIは学習手段にすぎないもの（例: ボイラー技士・TOEIC・消防設備士・宅建など、34本）
- 注意: 規定の `node .workspace/scripts/index-articles.js` がリポジトリに存在しなかった（`MODULE_NOT_FOUND`）ため、フロントマターを直接パースして取得した。`.workspace/task-results/article-index.md` は 2026-09-19 生成の旧版

---

## A. NotebookLM・AIツール活用系（再編集の中心候補）

| 公開日 | lastmod | カテゴリ | タイトル | パス |
| :--- | :--- | :--- | :--- | :--- |
| 2026-02-17 | 2026-07-10 | trend | 最新の生成AIが変える資格試験の未来：NotebookLMを活用した次世代の学習法 | `src/data/post/trend/latest-ai-future-of-exams/index.md` |
| 2026-05-31 | 2026-07-10 | method | NotebookLM × 生成AI 資格試験ワークフローガイド｜ChatGPT・Gemini・Claudeと組み合わせる方法 | `src/data/post/method/notebooklm-ai-workflow-guide/index.md` |
| 2026-05-31 | 2026-07-10 | method | NotebookLM 資格試験完全活用ガイド｜5つの機能を試験勉強に使い倒す手順 | `src/data/post/method/notebooklm-features-guide/index.md` |
| 2026-05-31 | 2026-07-10 | method | ChatGPTで資格試験を攻略する完全ガイド｜試験別プロンプト集と対話学習の設計 | `src/data/post/method/chatgpt-cert-complete/index.md` |
| 2026-06-03 | 2026-07-10 | method | Gemini完全ガイド：IT資格試験を攻略するプロンプト集と学習ハック【ITP・FE・AP対応】 | `src/data/post/method/gemini-cert-complete/index.md` |

## B. AI学習メソッド・思想系

| 公開日 | lastmod | カテゴリ | タイトル | パス |
| :--- | :--- | :--- | :--- | :--- |
| 2026-02-19 | 2026-07-12 | method | 覚えられない専門用語は「絵」にしろ。生成AIで記憶の宮殿を建築する狂気の暗記術 ※タグは `画像生成AI` | `src/data/post/method/generative-memory-palace/index.md` |
| 2026-02-21 | 2026-07-10 | trend | 強くてニューゲーム学習法の衝撃：生成AI×シラバスが最短合格の新基準 | `src/data/post/trend/new-game-study-method/index.md` |
| 2026-04-05 | 2026-07-12 | method | 【内部構成】AIだけでサイトをフルスクラッチ？ Syllabus Hack を支える技術の正体 | `src/data/post/method/ai-driven-architecture-hack/index.md` |
| 2026-09-25 | 2026-09-25 | method | なぜシラバスハックは「20時間学習法」を採用しているのか | `src/data/post/method/20hours-method-reason/index.md` |
| 2026-09-26 | 2026-09-26 | method | ダン・マーテルの「S.E.L.F.ループ」で自己学習を設計する｜AIとの対話で「何を学ぶべきか」を見つける方法 | `src/data/post/method/self-loop-ai-learning/index.md` |

## C. 生成AIの技術・用語・倫理系（試験出題テーマとしての生成AI）

| 公開日 | lastmod | カテゴリ | タイトル | パス |
| :--- | :--- | :--- | :--- | :--- |
| 2026-02-28 | 2026-07-12 | trend | IPA試験に浸透する生成AI：全区分での出題傾向と技術的背景 | `src/data/post/trend/genai-syllabus-integration/index.md` |
| 2026-03-20 | 2026-07-10 | trend | 基本情報シラバスVer.9.0緊急解説！生成AI追加で試験はどう変わる？ | `src/data/post/trend/syllabus-ver9-update/index.md` |
| 2026-03-31 | 2026-09-19 | trend | 仕事の相棒！AIアシスタントの活用とITパスポート試験対策 | `src/data/post/trend/ai-assistant/index.md` |
| 2026-03-31 | 2026-09-19 | trend | AIはどこまで許される？試験に出る「AI倫理」ガイドラインの要点 | `src/data/post/trend/ai-ethics-governance/index.md` |
| 2026-03-31 | 2026-09-19 | trend | AI学習を拒否できる？オプトアウトポリシーの重要性【ITパスポート】 | `src/data/post/trend/ai-opt-out-policy/index.md` |
| 2026-03-31 | 2026-09-19 | trend | AIで作った絵に著作権はある？最新の法務解釈とITパスポート試験対策 | `src/data/post/trend/copyright-ai-generated/index.md` |
| 2026-03-31 | 2026-09-19 | trend | フェイクニュースの脅威！ディープフェイクの仕組みとITパスポート試験対策 | `src/data/post/trend/deepfake/index.md` |
| 2026-03-31 | 2026-09-19 | trend | なぜその答えになった？説明可能なAI（XAI）の必要性と重要ポイント | `src/data/post/trend/explainable-ai-xai/index.md` |
| 2026-03-31 | 2026-07-12 | trend | AIの「知ったかぶり」ハルシネーションとは？原因と対策を解説【シラバスハック】 | `src/data/post/trend/hallucination-ai-error/index.md` |
| 2026-03-31 | 2026-09-19 | trend | AI運用を止めるな！MLOps（エムエルオプス）の重要性とITパスポート試験のポイント | `src/data/post/trend/mlops/index.md` |
| 2026-03-31 | 2026-09-19 | trend | 目と耳を持つAI！マルチモーダルAIの仕組みとITパスポート試験対策 | `src/data/post/trend/multi-modal-ai/index.md` |
| 2026-03-31 | 2026-09-19 | trend | 生成AIの弱点を克服！RAGとは？IT試験に出る最新用語【ITパスポート】 | `src/data/post/trend/rag-ai-system/index.md` |
| 2026-04-05 | 2026-04-05 | method | AI時代の福音を読み解け：生成AIという『新大陸』を確実な得点源に変える方法 | `src/data/post/method/ai-problem-master-syllabus/index.md` |
| 2026-04-17 | 2026-07-12 | theory | プロンプトエンジニアリングとは？生成AIの回答品質を上げる指示設計の基本 | `src/data/post/theory/prompt-engineering-basics/index.md` |
| 2026-02-21 | 2026-07-10 | app | 生成AI・AI倫理「新用語」特化型クイズ | `src/data/post/app/genai-ethics-quiz/index.mdx` |

> trend用語解説バッチ（2026-03-31公開の10本）は TODO §5 で内部リンク改善済み・2026-10-18に効果検証予定。NotebookLM再編集とは別管理。

## D. 生成AI系資格

| 公開日 | lastmod | カテゴリ | タイトル | パス |
| :--- | :--- | :--- | :--- | :--- |
| 2026-02-17 | 2026-07-12 | trend | 生成AIパスポート vs ITパスポート。AI時代にまず取るべき資格はどちらか？徹底比較 | `src/data/post/trend/genai-passport-vs-it-passport/index.md` |
| 2026-03-25 | 2026-07-12 | trend | さくらインターネット「AI検定」のシラバスをハックする。無料資格を知識の定着に活用する技術 | `src/data/post/trend/sakura-ai-certification-syllabus/index.md` |
| 2026-04-29 | 2026-07-10 | trend | 生成AI関連の資格は意味あるか — 認知度と活用場面から考える | `src/data/post/trend/generative-ai-certification-worth/index.md` |
| 2026-07-10 | 2026-09-24 | trend | G検定シラバスの最新動向｜生成AI・LLM関連問題の出題比重はどう変化しているか | `src/data/post/trend/g-kentei-2026-syllabus-trend/index.md` |

> 参考: `生成AIパスポート` / `生成AI導入実務者検定` タグのみ（`生成AI` タグなし）の関連記事: `trend/what-is-genai-passport-exam`、`method/genai-cert-study-plan`、`app/genai-passport-quiz`、`app/genai-ip-quiz`

---

## 補足: NotebookLMを扱うが `生成AI` タグがない記事（再編集時に統合対象として要確認）

本文中の「NotebookLM」出現回数が多い順。

| 出現数 | 公開日 | lastmod | タイトル | パス |
| :--- | :--- | :--- | :--- | :--- |
| 11 | 2026-03-03 | 2026-04-24 | 生成AI問題の攻略：NotebookLMでITパスポートのシラバスをハックする | `src/data/post/method/genai-problem-mastery-notebooklm/index.md` |
| 6 | 2026-04-15 | 2026-09-08 | ChatGPTでITパスポートに合格する全手順｜生成AI（Gemini・Claude）対応マップ | `src/data/post/method/chatgpt-itpassport-ai-complete-guide/index.md` |
| 4 | 2026-03-20 | 2026-07-10 | Agent Teacher:24時間365日の「最強の家庭教師」を無料で雇う技術（タグに `NotebookLM` あり） | `src/data/post/method/agent-teacher/index.md` |

NotebookLMの主要記事（A群の3本 + 上記 `genai-problem-mastery-notebooklm`）は計4本。いずれも2026-02〜05公開で、本文は07-10以降更新されていない（lastmod 04-24〜07-10）。

## 再編集の検討メモ（未決定）

- [ ] NotebookLM主体の4本（`notebooklm-features-guide` / `notebooklm-ai-workflow-guide` / `latest-ai-future-of-exams` / `genai-problem-mastery-notebooklm`）を1本のハブに統合するか、機能ガイド＋ワークフローの2本に絞るか
- [ ] NotebookLMの最新機能（2026年時点）を公式情報で確認し、古い記述を洗い出す
- [ ] 統合する場合は301リダイレクトを設定する（theory統合時の手順 `archive/theory-genre-consolidation-2026-09-15.md` を参照）
- [ ] `genai-problem-mastery-notebooklm` など主題が生成AIの記事で `生成AI` タグが抜けているものを tag_rules.md に沿って補完
