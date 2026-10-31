# シラバスハック 実行記録の索引

新規の起票前と解析前に、テーマ・対象で Grep する。1件1行。新しい順に上へ足す。

種別: `施策`／`効果測定`／`調査`／`見送り`

| ID | 完了日 | 種別 | テーマ（タグ） | 対象（URL・クエリ） | 結果（1行） | 参照できるデータ | ファイル |
|---|---|---|---|---|---|---|---|
| T-53 | 2026-10-31 | 施策 | 20時間コース, 診断テスト, 学習ルート, ChapterQuiz | 全コースのコースTOPの診断 | 結果画面に全体・章別の正答率の表と重点章、前回の診断の再表示、0問時の表示を追加。4ルートは設計のみ（T-48） | src/apps/course-quiz/, 20hours-course-template.md §1-1 | [2026-10-31-T-53-diagnosis-routing.md](2026-10-31-T-53-diagnosis-routing.md) |
| T-20 | 2026-10-31 | 施策 | 20時間コース, 生成AIパスポート, スキャフォールド | src/data/course/genai-pass/（index＋8章、draft） | scaffold-course.cjs に genai-pass と --mdx を追加し骨組みを生成。表示・ビルドを確認、T-21 の指示書を作成 | .workspace/scripts/scaffold-course.cjs, .workspace/codex/orders/2026-10-31-T-21.md | [2026-10-31-T-20-genai-pass-scaffold.md](2026-10-31-T-20-genai-pass-scaffold.md) |
| T-29 | 2026-10-31 | 施策 | マーケティング, 20時間コース, シリーズ設計 | マーケティング入門コースの構想 | ユーザー判断: 基礎講座＋3つの方向（コピーライティング・構想力・リサーチ戦略）に分ける。設計は marketing-series-plan.md | .workspace/.new-contentplan/marketing-course/ | [2026-10-31-T-29-marketing-direction.md](2026-10-31-T-29-marketing-direction.md) |
| T-02 | 2026-10-31 | 施策 | 図, Mermaid, 事実確認 | 図を足した17本 | CC が本文・公式と突き合わせ、筆者判断の5本をユーザーが確認。直しなし | — | [2026-10-31-T-02-mermaid-review.md](2026-10-31-T-02-mermaid-review.md) |
| T-03 | 2026-10-31 | 施策 | 出典, 事実確認, 秘書検定 | /method/secretarial-cost-time-knowledge/ | 公式に接続できず、合格率の目安を外した（受験料は3級・2級のみ金額、確認済み） | — | [2026-10-31-T-03-secretarial-official-values.md](2026-10-31-T-03-secretarial-official-values.md) |
| T-04 | 2026-10-31 | 施策 | AdSense, アフィリエイト, フッター | 全ページのフッター（A8.net 資格スクエア） | ユーザー判断で審査中は外した。グリッドを2列に。戻すかは T-34 | src/components/widgets/Footer.astro（git 履歴） | [2026-10-31-T-04-footer-ad-removed.md](2026-10-31-T-04-footer-ad-removed.md) |
| T-10 | 2026-10-31 | 施策 | タスク移行, 11月計画, リライト, 20時間コース | `.task-management/`、全公開記事204本、新コース3本 | hq 標準の `.task-management/` に移行し、11月の計画（全面リライト・コース追加）と指示書10本を作成 | .workspace/projects/rewrite-2026-11/, .workspace/projects/course-expansion-2026-11/ | [2026-10-31-T-10-task-migration-nov-plan.md](2026-10-31-T-10-task-migration-nov-plan.md) |
| 旧H-21〜H-27 | 2026-10-30 | 施策 | AdSense, 棚卸し, 公開停止, 統合, 出典, 図 | 記事267本 → 公開204本 | 棚卸し、公開停止33・統合30（301）、強化12本の実行例、出典15本、図17本 | .workspace/.task/adsense-inventory/, .workspace/archive/legacy/TODO.md | [2026-10-30-H27-adsense-prep.md](2026-10-30-H27-adsense-prep.md) |
