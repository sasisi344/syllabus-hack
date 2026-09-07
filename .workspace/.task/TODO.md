# Task Management

> 基本方針: **「生成AI × 資格試験」** を軸に外れない。ロングテール・長文・AI検索対応を3本柱にする。
> **本ファイルが全タスクの正本**。完了したタスク群・分析資料は `archive/` に移動する（履歴はそちらを参照）。
>
> **2026-09-07 全面更新**: 「20時間学習法（courseコレクション）」への戦略転換に伴い、2026-07台の旧タスク（PDCA週次検証・記事統廃合判断待ち等）を `archive/todo-pre-course-pivot-2026-09-07.md` へ一括退避。以降は2027年IPAシラバス改訂対応を最優先タスクとして本ファイル冒頭に固定する。

---

## 0. 【最優先】2027年IPAシラバス改訂対応 — 20時間学習法コンテンツ制作

> **正本（詳細タスク・背景思想はすべてこちら）**: [`.workspace/.new-contentplan/new-content-plan.md`](../.new-contentplan/new-content-plan.md)
> 本セクションは進捗の要約のみ。着手・更新は必ず正本側のWeekファイルを編集すること。

**今月のゴール**: ITパスポートを題材にした20時間学習法パイロット（Tier1・無料8章）を、2027年シラバスベースで制作し、サイト新構成 `course` コレクションとして公開する。Tier2（有料note・合格テキスト26章フル版）は来月に延期。CBT型（既存資産）は維持しKPIを崩さない。

| Week | 期間 | 状態 | 内容 |
|---|---|---|---|
| Week1 | 9/6〜9/12 | ほぼ完了（残1件） | テンプレート仕様確定・2027年シラバスJSON化（IP/SC/DM/PD-M/PD-S）・KaTeX PoC完了。残: `scaffold-course.cjs` の2027データ対応改修 |
| Week2 | 9/13〜9/19 | 未着手 | Tier1用語精選（8章・元語数の約4割に絞込）・診断テスト10問・8章本文執筆・章末理解度チェック作成 |
| Week3 | 9/20〜9/26 | 未着手 | Astro `course` コレクション実装（TOP→章一覧→章ページ）・Tier1パイロット無料公開・itp-hub/既存クイズとの回遊導線接続 |
| Week4 | 9/27〜10/3 | 未着手 | GA4/GSC計測開始・2本目パイロット候補選定・今月の振り返り・来月Tier2準備 |

- [ ] **（Week1残タスク）** `.workspace/scripts/scaffold-course.cjs` を `syllabus-ip-2027.json` 対応に改修（現状v6.5データ前提）
- [ ] **（Week1派生）** examId未登録3件（`dm` / `pd-m` / `pd-s`）を `exam-id-catalog.md` へ登録（[`2027-exams-master-report.md`](../.new-contentplan/2027-exams/2027-exams-master-report.md) 参照）
- [ ] Week2〜4はブロック着手時に本表のステータスを更新し、正本のWeekファイル側でチェックを消化する

---

## 1. サイト構成の見直し・最適化（courseコレクション新設に伴う）

> 背景: `course` という新コレクションが追加されることで、既存5カテゴリ（trend/method/career/app/theory）中心の構造との関係整理が必要になる。詳細分析は [`structure-migration-plan.md`](../.new-contentplan/structure-migration-plan.md) にあるが、カテゴリ体系そのものの見直し（ナビゲーション・トップページ導線・タグ設計との整合）は未着手。

- [ ] 現行カテゴリ構造（trend/method/career/app/theory）と新設 `course` の関係を整理し、トップページ・グローバルナビの導線設計に反映
- [ ] `.agents/category_rules.md` を新構成に合わせて更新
- [ ] 資格ナビゲーション（`/certifications/` 等、旧タスクで実装済み）との重複・住み分けを確認

## 2. 画像生成スクリプトの見直し・最適化

> 現行: `.workspace/scripts/Antigravity-nanobana/generate-image.js`（`node`実行、CLAUDE.md記載の必須手順）

- [ ] 生成スクリプトの現状レビュー（API呼び出し方式・コスト・生成品質・失敗時のリトライ挙動）
- [ ] 最適化の方向性を検討（プロンプトテンプレートの改善、theory共通カバー方針との整合、courseコレクション用カバーの扱い方針を新規決定）

## 3. 既存記事の統廃合（GSC/GA4データドリブンの棚卸し）

> 背景: courseコレクション等の新コンテンツが増える一方、既存記事（特にIPA CBT関連の重複トピック群）が回遊・評価の邪魔をしている懸念。旧TODOで「ユーザー判断待ち」だった IPA 2026年CBT記事8本の統廃合案は `archive/todo-pre-course-pivot-2026-09-07.md` §1 に判断根拠が残っているので、再検討時はそちらを参照。

- [ ] 直近のGSC/GA4データから、表示・クリックが低調で統合/削除候補となる記事を棚卸し
- [ ] 新規コンテンツ（course系）の内部リンク・クロール予算を圧迫していないか確認
- [ ] 統合・301化などの不可逆操作は必ずGo/No-Go判断をユーザーに仰いでから実施

## 4. IPAクイズアプリの省力化・20hoursコースへの転用構想

> 背景: `it-passport-quiz` 等の既存Webアプリはアクセス数が伸び悩んでおり、スマホ向け類似アプリに知名度で劣勢とみられる。単体アプリとしての追加投資を抑え、20時間学習法コース（§0）の章末理解度チェック・章立てまとめ出題の出題母体として転用する方向で構想する。

- [ ] 既存クイズアプリのGA4データ（PV・利用継続率）を確認し、単体アプリとしての投資対効果を評価
- [ ] 20hoursコース（Tier1）の章末チェック問題（§0 Week2で作成予定）と既存問題データの重複・転用可能範囲を整理
- [ ] 「アプリ単体の新規開発」から「コース組み込み型の出題」へのシフト方針を固める（quiz_app_rules.md / quiz_data_rules.md の更新要否も含む）

---

## メモ

- **競合サイト**: [キーマンズネット](https://kn.itmedia.co.jp/) — 構成の参考・対抗
- 2026-07台までの旧タスク（週次PDCA・KWリサーチ執行・SNS運用等）はすべて `archive/todo-pre-course-pivot-2026-09-07.md` へ退避済み。過去の判断根拠が必要な場合はそちらを参照

## アーカイブ索引（archive/）

| ファイル/フォルダ | 内容 | 移動日 |
|---|---|---|
| `todo-pre-course-pivot-2026-09-07.md` | 20時間学習法への戦略転換前（2026-07〜09初）の全タスク・判断待ち事項一式（週次PDCA・記事統廃合判断待ち・KWリサーチパイプライン等） | 2026-09-07 |
| `w28-w29-completed-2026-07-14.md` | W28〜W29完了タスク一括アーカイブ | 2026-07-14 |
| `site-check0710/` | 2026-07-10サイト改善作業書WP01〜07 | 2026-07-11 |
| `site-audit-2026-07-10.md`（+raw） | サイト全体監査 | 2026-07-11 |
| `priority-roadmap-todo.md` | 6〜9月ロードマップ（Phase1・2完走） | 2026-07-11 |
| `nextsiken.md` / `categories-list-check.md` / `restructure-plan-2026-06.md` | 分析・背景資料 | 2026-07-11 |
| `research-kw-non-ipa.md` | 非IPA資格KWリサーチ | 2026-07-11 |
| `query-research/` | 資格クエリリサーチ（G-1〜G-7の判断根拠） | 2026-07-11 |
| `weekly-task.md` | W26週報 | 2026-07-11 |
| `article-index.md` | 生成物の旧コピー（正本は `.workspace/task-results/article-index.md`） | 2026-07-11 |
| `cert-kw-gap-research-2026-07-17.md` | 資格KWリサーチ統合版 | 2026-07-18 |
