# Syllabus Hack — Claude Code 統合指令書

> **優先順位**: このファイル（CLAUDE.md） > `.agents/` スキル > `~/.claude/settings.json`
>
> **このファイルは150行まで**（2026-11-27 ユーザー決定）。毎回の作業で要ることだけを置き、詳しい決まりは `.agents/` に置いてパスで指す。節を足すときは、まず移せるものを移す。

---

## プロジェクト概要

**Syllabus Hack** は「生成AIで資格試験のシラバスをハックする」学習メディア。  
`syllabushack.com` — Astro 5 + AstroWind テンプレート構成の静的サイト。

コアミッション: 検索した読者が「なぜその知識・資格が自分に必要か」を判断できるように答え、AI活用が役立つ場面では「効率的・本質的」な学び方を提案する。煽らない（旧来の学習法を否定・攻撃しない）。

筆者: さしし（40代後半。正本は `344blog/CLAUDE.md`「筆者プロフィール」）。生成AIと資格勉強は相性がいいと考え、自分でも実践している。IT の経歴は「職業としてではないが、自分のサイト運営・ネットワーク構築・Web開発をひととおり自分でやってきた。プロほどではないが一般よりは詳しい」の範囲で書く（プロ・実務経験者を名乗らない。2026-10-27 確定）。筆者の意見を本文に入れる方法は別途決める（決まるまでは「学習体験の共有ルール」の callout と LEARNER_NOTE の範囲だけ）。

基本方針（2026-10-19〜）: 知識を渡して学習の舵取りを読者に一任する「テキスト提供」から、**学習体験の共有**へ転換する。詳細は下記「学習体験の共有ルール」。

---

## ブランド・マントラ（2026-11-20 確定）

**隣の席で学ぶ、AIと資格学習（短縮形: 隣の席の、AI資格学習）**

記事を作るか・どう書くかで迷ったら、この一言に照らす。正本は `344blog/hq/.workspace/task/brand-mantra.md`（変えるときは hq を直してから、ここへ写す）。

| 要素 | 内容 |
|---|---|
| 感情 | ひとりじゃない（「ここ、わかりにくいよね？」と話せる感覚） |
| 説明 | IT系を中心とした資格試験のシラバス |
| 機能 | 本質的で効率のいい学び方が見つかる（AIはプロンプト例を示す範囲で） |

- **判断の問い**（企画・アウトライン・検収で使う）: 「なぜその知識・資格が自分に必要か」に答えているか。筆者の学習体験（つまずき）が入る余地があるか。旧来の学習法を否定していないか
- **合う**: IPA 系資格のシラバス解説、20時間コース、つまずきやすい論点、AIを使った学習の方法
- **外れる**: テーマを広げすぎた資格・知識の記事、AIの回答をそのまま載せる記事、「これだけで合格」と煽る記事

## 学習体験の共有ルール（2026-10-19制定）

正本は `.agents/learner_experience.md`（callout の種類・AI の扱い方・置く場所と密度）。記事・コースを書く・直す・検収する前に必ず開く。要点:

- 筆者が学習して、わかりにくかった所に callout（`[!exp]`・`[!question]`・`[!think]`）を入れる。`[!forAI]` は筆者から AI への指示で、本番移行時に消す
- **創作禁止（最重要）**: exp・question・think を AI が書くこと、AI が一人称の学習体験を創作することは禁止。AI が直せるのは誤字・改行・`**`→`<strong>` だけ
- コメントがあるとよい箇所は `<!-- LEARNER_NOTE: ... -->` で提案だけ残す。未処理のまま本番移行しない
- 体験を書けるのは、筆者が受験・学習・実務で使った範囲だけ（`src/data/author-exam-status.ts`）
- AI 活用は、学習方法のひとつとしてプロンプト例を示すまで。AI の実行結果（回答・画面）は載せない（2026-11-15 ユーザー決定）

---

## 言語プロトコル

- 内部推論・コード説明は英語（精度・効率優先）
- 読者向けコンテンツ（記事本文・UIテキスト）は **日本語**
- コード・変数名・ファイル名・スラッグは英語（kebab-case）

---

## 規約の地図（作業 → 開くもの）

| 作業 | 開くもの |
| --- | --- |
| 記事の執筆・リライト | `.agents/post_writer.md`（Step 0・フレームワークの選び方）、`.agents/article_format.md`、`.agents/learner_experience.md`、`.agents/category_rules.md`・`.agents/tag_rules.md`、`.agents/reader_segments.md` |
| 資格 Hub 記事 | `.agents/cert_hub_template.md` |
| KW の調査 | `.agents/kw_pattern_research.md`（下の「KWリサーチルール」） |
| ドラフト → 本番移行 | `.agents/workflows/post-complete.md` |
| 画像 | `.agents/image_rules.md`、`.workspace/codex/image-style.md` |
| クイズ・アプリ | `.agents/quiz_app_rules.md`・`.agents/quiz_data_rules.md` |
| サイトの改修（表示・CSS） | `.agents/workflows/README.md` C、`.agents/dark_mode_css.md`、`.agents/content_structure.md` |
| 作業の流れ（A〜D） | `.agents/workflows/README.md` |
| ツール・パス・ディレクトリの役割・スキルとコマンドの一覧 | `.agents/route-map.md`（6〜8節） |
| 過去の失敗・正規表現 | `.agents/fact-check/FAILURE_LOG.md`・`REGEX_LIBRARY.md` |

---

## 必須ルール（記事投稿・編集時）

正本は `.agents/article_format.md`（frontmatter のひな形と制約、本文の記法、Page Bundle、カテゴリ5種）。とくに間違えやすいもの:

- `publishDate` は `YYYY-MM-DDTHH:MM:SSZ`。一度決めたらリライトでも変えない。`lastmod` は編集のたびに当日にする
- 本文（コードフェンスの外）の強調は `<strong>`。`**bold**` は禁止。コードフェンスの中（AI 向けのプロンプト）は Markdown の `**太字**` だけ
- 改行は空行で入れる（単一改行は描画で1段落に結合される）
- 見出し全体を `「」` で囲まない。番号を付けない（`## 1. Step` は禁止）
- `image` は `~/data/post/{category}/{slug}/cover.jpg` の形。theory カテゴリは共通画像

## 記事執筆フレームワーク（BEAF / QUEST / PASONA）

選び方の正本は `.agents/post_writer.md`「Strategy Dispatcher: Framework Selection Logic」（TARGET_KW の検索意図で選び、カテゴリの表は補助）。

## 画像生成ルール

画像の作成は Codex の組み込み画像生成（`image_gen`）が標準。API スクリプト `.workspace/scripts/Antigravity-nanobana/generate-image.js` は、Codex のリソースがないときだけの代わり（2026-11-27 ユーザー決定）。手順の正本は `.agents/image_rules.md` §5 と `C:\Users\sasis\344blog\hq\.workspace\task\org\codex-imagegen.md`。theory カテゴリは共通画像で、個別に作らない。

## 記事インデックス取得ルール

`src/data/post/` の記事一覧・検索・分析は、必ず `node .workspace/scripts/index-articles.js` を実行して取る（`.workspace/task-results/article-index.md` に出る）。手動スキャンや記憶による列挙は禁止。

## KWリサーチルール

KW の調査の前に、必ず `.agents/kw_pattern_research.md` と `.workspace/data-set/kw-pattern-library.md` を読む。思いつきでの KW 列挙は禁止。P1〜P9 で候補を作って競合占拠度を実査し、結果は `.workspace/data-set/cert-keyword-db/{examId}-kw-db.md` に `方向性パターン` 列つきで記録する。

---

## Git ルール

- `git add` / `git commit` / `git push` は許可（2026-09-23）。push は本番の自動デプロイになるので、変更内容を要約して意図どおりか確かめてから行う
- `--no-verify` は使用禁止

---

## タスク管理

タスクは `.task-management/` にある（344blog の hq からの統合司令の窓口。2026-10-31 移行、GitHub Project は廃止）。タスクを読む・書く前に、必ず `.task-management/CLAUDE.md` を読む。

- 正本: `.task-management/task.md`（索引だけ読み、必要な ID の本文だけ開く）
- 問題点・気づき・hq からの修正依頼: `.task-management/inbox.md`（作業の開始時に未処置を処理する）
- 実行記録: `.task-management/records/index.md`（起票前・解析前に Grep する）
- 計画書・調査・データは `.workspace/` に置き、タスクからリンクする
- 書き手（CC のサブエージェントまたは Codex）への指示書は `.workspace/codex/orders/`、報告書は `.workspace/codex/reports/`（組織は `C:\Users\sasis\344blog\hq\.workspace\task\org\README.md`）
- 11月の計画（2026-10-31〜）: 全面リライト `.workspace/projects/rewrite-2026-11/`、20時間コースの追加 `.workspace/projects/course-expansion-2026-11/`

---

## エラー・失敗フィードバックループ

- ユーザーから「違う」「失敗した」「動かない」などの指摘を受けたら: 根本原因を調べる → `.agents/fact-check/FAILURE_LOG.md` に追記する（必須）→ 信頼できる新しいパターンは `REGEX_LIBRARY.md` に足す → 返答で「失敗をログに記録しました」と一言報告する
- 複雑な正規表現・ファイル変換の前に、`FAILURE_LOG.md` と `REGEX_LIBRARY.md` を必ず見る

## 改行コード（2026-10-17制定）

- **正規は LF**（リポジトリ内のすべてのテキストファイル）。CRLF・混在は禁止。`.gitattributes`・`.editorconfig`・Prettier で強制している
- スクリプトで書くとき: Python は `open(path, 'w', encoding='utf-8', newline='\n')`。Node.js は `os.EOL` を使わない。既存ファイルの加工では改行コードを変換しない
- 確認: `git ls-files --eol | grep -E "w/(crlf|mixed)"`（何も出なければ OK）

## 既知の落とし穴

詳細は `.agents/fact-check/FAILURE_LOG.md`。

- `Edit` の `old_string` は完全一致が必須（`...` の省略は動かない）
- シェルの正規表現はエスケープの階層（AI → Shell → Regex）に注意
- GA4 の確認時は `src/config.yaml` で `partytown: false` にしてデバッグ
- `**bold**` のままの記事を本番に混ぜない（`/check-draft` で事前に確かめる）
