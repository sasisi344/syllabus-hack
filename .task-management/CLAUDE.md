# .task-management/ 運用ルール

このフォルダは 344blog の司令塔（`hq/`）からの**統合司令の窓口**。全サイトで同じ形・同じファイル名にしている。標準設計の正本は `C:\Users\sasis\344blog\hq\task-control\standard.md`。この「共通」部分は hq が配布・更新する。サイトが書いてよいのは末尾の「サイト固有」節だけ。

## 1. ファイル

| ファイル | 役割 |
|---|---|
| `site.md` | サイト台帳。hq はここを読んでサイトを把握する |
| `task.md` | タスクの正本。今すぐ着手・日付待ち・データ待ち・時期待ちをすべてここに |
| `inbox.md` | 問題点・気づき・hq からの修正依頼の受付 |
| `records/` | 実行記録。`index.md`（1件1行）＋1件1ファイル |

ここには上の4ファイル＋`records/` 以外を置かない。計画書・調査・データは `.workspace/`（作業層）に置いてリンクする。`task.md`・`inbox.md`・`records/index.md` は中身の更新は可、ファイルの削除は不可。

## 2. 読み方（索引優先）

1. 作業を始めたら、まず `inbox.md` の「未処置」と `修正依頼:` の行を処理する（起票するか見送るか）
2. `task.md` は**索引表だけ**読み、必要な ID の本文（`### T-NN`）だけ Grep で開く
3. 新しく起票する前と、解析を始める前に、テーマ・対象 URL で `records/index.md` を Grep し、過去に同じことをしていないか確認する

## 3. 書き方

- 見出しは `### T-NN タスク名`。新規 ID は `task.md` と `records/index.md` を合わせた最大値+1。欠番を再利用しない
- **索引と本文は同じ編集で更新する**。索引を更新しない編集はしない
- 日付は絶対日付（`2026-10-27`、索引は `10/27` 可）。「来週」「先月」と書かない
- 本文は5〜15行。ゴール／背景／やること／完了条件。長い手順は `.workspace/projects/<slug>/` に置いてリンクする
- 効果測定の本文には **実施日・対象（URL・クエリ）・基準値・見る指標・判定基準** の5項目を書く
- 計画書側に細目の番号がある施策は、`task.md` には施策1本＝1行
- ユーザーの手作業（エクスポート・管理画面の設定など）は担当列を `ユーザー` にする

### 索引の列

| 列 | 値 |
|---|---|
| ID | `T-NN` |
| 状態 | `着手可`／`進行中`／`ユーザー待ち`／`データ待ち`／`時期待ち`／`保留` |
| 優先 | 1〜3（1 が最優先） |
| 規模 | `S`（30分以内）／`M`（1〜2時間）／`L`（複雑な調査・設計・実装、または記事5本以上の変更・作成）。hq は L を金〜月の集中枠に回すので、大きな作業は L にしておく |
| 担当 | `ユーザー`／`Claude`／`Codex`／`両方`。記事の作成・リライト・画像は `Codex` |
| 予定日 | `MM/DD`、`YYYY-MM`、データ到着条件（`m11取得後`）、なければ `—` |
| 基準 | 効果測定は `変更 MM/DD`、時期待ちは `再開 YYYY-MM`、それ以外は `—` |
| 起票元 | `inbox:I-NN`／`hq:H-NN`／`分析:YYYY-MM`／`ユーザー` |
| 関連 | 任意。`T-NN`／`I-NN`／records のファイル名 |

## 4. 振り分け

- 今すぐ着手できる → 状態 `着手可`
- データが揃うのを待つ → `データ待ち`（予定日に到着条件、基準に変更日）
- 時期を待つ → `時期待ち`（基準に再開時期）
- 「今すぐ着手」と「データ待ち」が混じる項目は2行に分ける
- 規模 L のうち一部だけ平日に進められるもの（下調べなど）は、S・M の行に切り出す
- 観測した数値はデータ置き場（`.workspace/access-data/` など）に書き、タスクには写さない
- アクセスデータは月次取得が原則（ユーザーが翌月2〜3日に画面から書き出す）。月の途中で数字が要るとき（効果測定の前後比較、ページ×クエリなど）は、ユーザーに頼む前に `C:\Users\sasis\344blog\hq\tools\analytics-fetch\` の `fetch.mjs` で API から取る（使い方は同フォルダの README）。保存先は `.workspace/access-data/api/`。月次 CSV と混ぜて計算しない
- 作業中に見つけた問題で、今直さないもの → `inbox.md` に1行
- サイトをまたぐもの・収益の判断が要るもの → `inbox.md` に書けば hq が拾う（hq の `backlog.md` に直接書かない）

## 5. 更新のタイミング

- **施策を実施した直後に、効果測定の行（`データ待ち`）をその場で足す**
- 予定日を過ぎた未実施は削除せず、本文に「期限超過: 理由」と書く
- ユーザーがファイルに `> [forAI] …` のメモを差し込んでいたら、内容を処理（起票・更新）してブロックを削除する

## 6. 完了と記録（records/）

完了したら、判定まで済んだら、見送ったら:

1. `records/YYYY-MM-DD-<ID>-<slug>.md` を作る（`records/_record-template.md` の形。日付は完了日）
2. `records/index.md` に1行足す（ID・完了日・種別・テーマ・対象・結果1行・参照できるデータ・ファイル）
3. `task.md` から索引の行と本文を消す
4. 計画書（`.workspace/projects/`）は動かさない。records からリンクする

見送りも「やらなかった理由」を残すために records に入れる。復活させるときは理由を書いて新しい ID で `task.md` に戻し、関連列に元の records を書く。

## 7. 禁止事項

- 同じ内容を2か所に書く（ほかからは ID で参照する）
- 索引を更新しない編集
- `records/index.md` を確認しない類似の起票
- 期間の違うデータをそのまま比べる（日平均などにそろえる）
- マスターファイル（`task.md`・`inbox.md`・`records/index.md`）の削除
- タスクを GitHub Project や `.workspace/` の別ファイルに書く（GitHub Project は 2026-10-27 に廃止）

## 8. hq との関係

- hq は `task.md`・`records/` を**読むだけ**。作業を依頼するときは `inbox.md` に `修正依頼:` の行を書く
- hq は毎朝、区分「重点」のサイトの `task.md` 索引と `inbox.md` の未処置を読み、その日の最大3件を選ぶ
- `site.md` の区分は hq が変える。それ以外の項目はサイトが更新する

## 9. Codex（実行部）との関係

組織の正本は `C:\Users\sasis\344blog\hq\org\README.md`。Claude Code は管理部（起票・指示書・検収・記録）、Codex は実行部（記事の作成・リライト・サムネイル・インフォグラフィック）。

- 担当が `Codex` のタスクは、CC が `.workspace/codex/orders/YYYY-MM-DD-<ID>.md` に指示書を書いて渡す（ひな形 `hq/org/work-order-template.md`）
- Codex は `task.md`・`records/` を読むだけ。報告書を `.workspace/codex/reports/` に書き、改善提案を `inbox.md` に `書いた人 Codex` で追記する
- CC は報告書と差分を `site-admin` スキルで検収してから、完了と記録（§6）を行う。Codex の改善提案は通常の inbox と同じく起票か見送りにする

---

## サイト固有

- 移行: 2026-10-31（旧 `.workspace/.task/TODO.md`・`schedule-task.md`・`w42-weekly-task.md` は `.workspace/archive/legacy/` に凍結。`genai-pass-task.md` は `.workspace/projects/genai-pass/`）。旧→新の対応は `.workspace/.task/README.md`
- 作業層のうち、まだ `.workspace/.task/` に残しているもの（T-44 で移す）: `access-data/`（`/weekly-report` が参照）、`adsense-inventory/`（棚卸し）、`course-seat-notes.md`（コースの隣の席コメントの進み具合）、`exam-id-catalog.md`、`ai-example-prompts-2026-10-28.md`・`ai-example-prompts-2026-10-31.md`（T-01 の入力シート）、`archive/`（旧アーカイブ。読むだけ）
- 記事の素材（ネタ・アウトライン・KW）は `inbox.md` ではなく `.workspace/_inbox/`・`.workspace/draft/` に置く
- 11月の計画: 全面リライトは `.workspace/projects/rewrite-2026-11/`（基準・ウェーブ表・進み具合・指示書の生成スクリプト）、20時間コースは `.workspace/projects/course-expansion-2026-11/`
- Codex の指示書は `.workspace/codex/orders/`、報告書は `.workspace/codex/reports/`。リライトの指示書は `plan.py orders` で作る
- 筆者の体験（callout）は筆者だけが書く。Codex・CC は LEARNER_NOTE の候補まで（`CLAUDE.md`「学習体験の共有ルール」）

### やりたいこと → 読むもの

| やりたいこと | 読むもの |
|---|---|
| 記事を書く・直す | `CLAUDE.md` ワークフロー A・D、`.agents/post_writer.md` |
| 全面リライトを進める | `.workspace/projects/rewrite-2026-11/README.md`・`progress.md` |
| 20時間コースを作る | `.workspace/.new-contentplan/20hours-course-template.md`、`.workspace/projects/course-expansion-2026-11/README.md` |
| AdSense の計画・判断 | `C:\Users\sasis\344blog\hq\adsense-redesign.md` §3・§4 |
| アクセス解析 | `.workspace/.task/access-data/README.md`、`/weekly-report` |
| 生成AIパスポートの細目 | `.workspace/projects/genai-pass/genai-pass-task.md` |
