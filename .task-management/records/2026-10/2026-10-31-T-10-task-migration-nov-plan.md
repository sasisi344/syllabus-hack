# T-10 タスク管理の移行と11月の計画

- 完了日: 2026-10-31
- 種別: 施策
- テーマ: タスク移行, 11月計画, 全面リライト, 20時間コース, AdSense
- 対象: `.task-management/`、公開記事204本、新コース（生成AIパスポート・基本情報・マーケティング）
- 起票元: ユーザー（11月はコンテンツの刷新と追加に集中し、AdSense 合格を柱にする）

## 何をしたか

- hq の標準（`hq/task-control/standard.md` v1.1）に合わせて `.task-management/` を作り、旧 `TODO.md`・`schedule-task.md`・`w42-weekly-task.md` の未完了分を `task.md` の T-01〜T-47 に整理した（施策1本＝1行、担当に Codex を明記）
- 旧ファイルは `.workspace/archive/legacy/` に凍結、`genai-pass-task.md` は `.workspace/projects/genai-pass/` へ。相対リンクは `rewrite-links.mjs` で30本書き換え
- 全面リライトの基準・ウェーブ表（A68・B26・C110＝204本、指示書21本）・生成スクリプトを `.workspace/projects/rewrite-2026-11/` に作り、ウェーブA・Bの指示書10本を `.workspace/codex/orders/` に作成
- コース追加の計画を `.workspace/projects/course-expansion-2026-11/` に作成（新コースは draft で作り、公開は審査結果の後）

## 使ったデータ・資料

- `.workspace/.task/adsense-inventory/inventory.csv`（判定・必要な要素・不足）
- `hq/adsense-redesign.md` §3、`hq/backlog.md` H-24〜H-27

## 結果

- hq の daily が `task.md` の索引だけで11月の作業を選べる状態になった

## 次に使える知見

- 指示書は `python -I .workspace/projects/rewrite-2026-11/plan.py orders --wave X --date YYYY-MM-DD` で作れる。`waves` を再実行すると draft になった記事は自動で外れる
- `rewrite-links.mjs` はサイト全体を走査するため1〜2分かかる。シェルで標準入力を待つコマンドと一緒に実行しない
