# シラバスハック（syllabus-hack） — Codex 向けの案内

あなた（Codex）は 344blog の**実行部**。管理部の Claude Code（CC）が書いた指示書に従って、このサイトの記事の作成・修正、サムネイル・インフォグラフィックの生成、CC が渡すサイト改修を行う。

下の「サイトの規約」の表は、書き手のサブエージェントも読む。

## ブランド・マントラ（2026-11-20 確定）

**隣の席で学ぶ、AIと資格学習（短縮形: 隣の席の、AI資格学習）**

判断の問い: 「なぜその知識・資格が自分に必要か」に答えているか。筆者の学習体験（つまずき）が入る余地があるか。旧来の学習法を否定していないか。合う・外れるの目安はライティング規約（`CLAUDE.md`）。正本は `344blog/hq/.workspace/task/brand-mantra.md`（変えるときは hq を直してから、ここへ写す）。

## 毎回読むもの（この順）

1. 指示書（CC から渡されたプロンプト、または `.workspace/codex/orders/` のファイル）
2. 指示書の常設部: `.workspace/codex/order-base.md`（種別ごとに読むルール・共通の完了条件・共通の禁止事項・検収で繰り返し直した点。指示書に書いていなくても毎回当てはまる）
3. 共通ルール: `C:\Users\sasis\344blog\hq\.workspace\task\org\codex-worker.md`（体験を作らない・範囲外を変えない・コミットしない・報告書の形式）
4. ワークスペースの共通ルール: `C:\Users\sasis\344blog\CLAUDE.md` の「筆者プロフィール」と「サイトごとに出す経歴」
5. このサイトの `CLAUDE.md` と、下の「サイトの規約」

`CLAUDE.md` は Claude Code 向けに書かれている。「Claude」は実行者のあなたと読み替える。ただし、ルール・スキルの改訂、タスクファイルの更新、コミット、プロジェクトの管理・設計の指示は CC の仕事なので行わない。タスクは `.task-management/task.md`（読むだけ）。改善提案は報告書に書き、`.task-management/inbox.md` の表に1行足す（書いた人 `Codex`、処置 `未処置`）。

報告書は `.workspace/codex/reports/YYYY-MM-DD-<タスクID>.md` に書く。

## サイトの規約

| 作業 | 読むもの |
|---|---|
| 筆者の立ち位置・学習体験の扱い（正本） | `.agents/learner_experience.md`（要点は `CLAUDE.md`「学習体験の共有ルール」）、受験歴 `src/data/author-exam-status.ts` |
| 記事の執筆 | `.agents/workflows/README.md` A、`.agents/article_format.md`（frontmatter・記法）、`.agents/post_writer.md`（フレームワークの選び方を含む）、`.agents/content_structure.md` |
| カテゴリ・タグ | `.agents/category_rules.md`、`.agents/tag_rules.md` |
| ファクトチェック | `.agents/fact-check/` |
| 画像・図 | `.agents/image_rules.md`、`.workspace/codex/image-style.md` |
| 既存記事の全面リライト（2026-11） | `.workspace/projects/rewrite-2026-11/README.md` §2（点検の順番と基準） |
| 20時間コースの章 | `.workspace/.new-contentplan/20hours-course-template.md`、`.workspace/projects/course-expansion-2026-11/README.md` §4 |

- 筆者が受けていない試験の受験体験を書かない。callout の体験は筆者が書いたものだけ
- 確認: ビルドは Codex では走らせず、CC が検収で行う（2026-11-18 ユーザー決定。サンドボックスでは `npm`・`pnpm`・Corepack が動かず、依存の読み取りもアクセス拒否で止まる）

## 画像

- 画像のトーンとキャラクター性の正本: `.workspace/codex/image-style.md`（このサイト専用。ほかのサイトの型を使わない）
- 画像作成は Codex に任せ、組み込み画像生成 `image_gen` を標準手段とする。使えない（使用量の上限・ツールが出ない・2回続けて失敗）ときだけ既存の API スクリプトに切り替える（2026-11-27 ユーザー決定。共通ルール `C:\Users\sasis\344blog\hq\.workspace\task\org\codex-imagegen.md`）。記事に画像生成プロンプトを書いた段階で、画像を生成して埋め込んでよい（2026-11-06 ユーザー決定）。指示書の「画像」欄が `生成しない` のときだけ、画像マーカーを置き、サムネイル案を報告書の「画像計画」に書く
