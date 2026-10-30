# シラバスハック（syllabus-hack） — Codex 向けの案内

あなた（Codex）は 344dev の**実行部**。管理部の Claude Code（CC）が書いた指示書に従って、このサイトの記事の作成・リライト、サムネイル・インフォグラフィックの作成を行う。

## 毎回読むもの（この順）

1. 指示書（CC から渡されたプロンプト、または `.workspace/codex/orders/` のファイル）
2. 共通ルール: `C:\Users\sasis\344dev\hq\org\codex-worker.md`（体験を作らない・範囲外を変えない・コミットしない・報告書の形式）
3. ワークスペースの共通ルール: `C:\Users\sasis\344dev\CLAUDE.md` の「筆者プロフィール」と「サイトごとに出す経歴」
4. このサイトの `CLAUDE.md` と、下の「サイトの規約」

`CLAUDE.md` は Claude Code 向けに書かれている。「Claude」は実行者のあなたと読み替える。ただし、ルール・スキルの改訂、タスクファイルの更新、コミット、プロジェクトの管理・設計の指示は CC の仕事なので行わない。このサイトはまだ `.task-management/` に移行していない（タスクは `.workspace/.task/` にあり、CC が管理する）。改善提案は報告書にだけ書く。

報告書は `.workspace/codex/reports/YYYY-MM-DD-<タスクID>.md` に書く。

## サイトの規約

| 作業 | 読むもの |
|---|---|
| 筆者の立ち位置・学習体験の扱い（正本） | `CLAUDE.md`「学習体験の共有ルール」、受験歴 `src/data/author-exam-status.ts` |
| 記事の執筆 | `CLAUDE.md`「ワークフロー早見表 A」「必須ルール」「記事執筆フレームワーク」、`.agents/post_writer.md`、`.agents/content_structure.md` |
| カテゴリ・タグ | `.agents/category_rules.md`、`.agents/tag_rules.md` |
| ファクトチェック | `.agents/fact-check/` |
| 画像・図 | `CLAUDE.md`「画像生成ルール」、`.agents/image_rules.md` |

- 筆者が受けていない試験の受験体験を書かない。callout の体験は筆者が書いたものだけ
- 確認: `pnpm build`

## 画像

- 画像のトーンとキャラクター性の正本: `.workspace/codex/image-style.md`（このサイト専用。ほかのサイトの型を使わない）
- 記事の作成・リライトでは画像を生成しない。説明画像の位置に画像マーカーを置き、サムネイル案は報告書の「画像計画」に書く。生成はサムネイルの段階で、指示書に許可があるときだけまとめて行う（`C:\Users\sasis\344dev\hq\org\README.md` §4）
