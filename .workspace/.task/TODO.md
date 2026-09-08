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
| Week1 | 9/6〜9/12 | **完了** | テンプレート仕様確定・2027年シラバスJSON化（IP/SC/DM/PD-M/PD-S）・KaTeX PoC・`scaffold-course.cjs` の2027データ対応改修が完了 |
| Week2 | 9/13〜9/19 | 未着手 | Tier1用語精選（8章・元語数の約4割に絞込）・診断テスト10問・8章本文執筆・章末理解度チェック作成 |
| Week3 | 9/20〜9/26 | 未着手 | Astro `course` コレクション実装（TOP→章一覧→章ページ）・Tier1パイロット無料公開・itp-hub/既存クイズとの回遊導線接続 |
| Week4 | 9/27〜10/3 | 未着手 | GA4/GSC計測開始・2本目パイロット候補選定・今月の振り返り・来月Tier2準備 |

- [x] **（Week1残タスク）** `.workspace/scripts/scaffold-course.cjs` を `syllabus-ip-2027.json` 対応に改修（2026-09-08完了）。JSON構造の変化（旧v6.5の3階層 `categories→large_categories→middle_categories` → 新2027の2階層 `major_categories→middle_categories`）に合わせてローダーを書き換え、章定義を `ip-course-curriculum.md` §3-2 の8章（ビジネスの基礎／経営戦略とビジネスモデル／DXとビジネス変革／サービス・PJマネジメント／PC・システム基礎／ネットワークとDB／データとAI／セキュリティと情報倫理）に更新。`node .workspace/scripts/scaffold-course.cjs ip` 実行で全章の抽出語数（155/144/70/29/110/64/90/157＝819語）が curriculum定義と完全一致することを確認済み。出力先 `.workspace/draft/course/ip/` はWeek2の用語精選・本文執筆の入力になる
- [x] **（Week1派生）** examId未登録3件（`dm` / `pd-m` / `pd-s`）を `exam-id-catalog.md` へ登録 → 2026-09-07時点で既に「未登録・予定」候補表として追記済みであることを確認（[`2027-exams-master-report.md`](../.new-contentplan/2027-exams/2027-exams-master-report.md) §5-6の判断: DM/PD-M/PD-Sの`config.ts` enum正式登録・Hub化は現行試験終了後（半年〜1年後）に見送り、時期尚早な登録は検索意図とのズレを生むため意図的に据え置き。`src/content/config.ts` に3件とも未登録であることも確認済みで、方針と齟齬なし）
- [ ] Week2〜4はブロック着手時に本表のステータスを更新し、正本のWeekファイル側でチェックを消化する

---

## 1. サイト構成の見直し・最適化（courseコレクション新設に伴う）

> 背景: `course` という新コレクションが追加されることで、既存5カテゴリ（trend/method/career/app/theory）中心の構造との関係整理が必要になる。詳細分析・結論は [`structure-migration-plan.md`](../.new-contentplan/structure-migration-plan.md) §9 にまとめ済み（2026-09-08）。ナビ・トップページの**実コード変更**は `course` コレクション実装（§0 Week3）と同時に行う。

- [x] 現行カテゴリ構造（trend/method/career/app/theory）と新設 `course` の関係を整理し、トップページ・グローバルナビの導線設計に反映 → 設計確定 [`structure-migration-plan.md`](../.new-contentplan/structure-migration-plan.md) §9-1・§9-2（実装はWeek3 §5 Phase2 2-5で1回のみ実施）
- [x] `.agents/category_rules.md` を新構成に合わせて更新 → 「Relationship to the `course` Collection」節を追加済み
- [x] 資格ナビゲーション（`/certifications/` 等、旧タスクで実装済み）との重複・住み分けを確認 → [`structure-migration-plan.md`](../.new-contentplan/structure-migration-plan.md) §9-3。階層関係であり重複なしと判断。`cert-hubs.ts` への `courseHref?` 追加のみで住み分け完了予定（Week3実装）

## 2. 画像生成スクリプトの見直し・最適化

> 現行: `.workspace/scripts/Antigravity-nanobana/generate-image.js`（`node`実行、CLAUDE.md記載の必須手順）

- [ ] 生成スクリプトの現状レビュー（API呼び出し方式・コスト・生成品質・失敗時のリトライ挙動）
- [ ] 最適化の方向性を検討（プロンプトテンプレートの改善、theory共通カバー方針との整合、courseコレクション用カバーの扱い方針を新規決定）

## 3. 既存記事の統廃合（GSC/GA4データドリブンの棚卸し）

> 背景: courseコレクション等の新コンテンツが増える一方、既存記事（特にIPA CBT関連の重複トピック群）が回遊・評価の邪魔をしている懸念。旧TODOで「ユーザー判断待ち」だった IPA 2026年CBT記事8本の統廃合案は `archive/todo-pre-course-pivot-2026-09-07.md` §1 に判断根拠が残っているので、再検討時はそちらを参照。
> **正本（本タスクの分析・進捗管理はすべてこちら）**: [`article-consolidation/`](article-consolidation/) フォルダ配下。最新: [`article-consolidation/ipa-cbt-2026-cluster-w36.md`](article-consolidation/ipa-cbt-2026-cluster-w36.md)（W36データ反映・2026-09-08）

- [x] 直近のGSC/GA4データ（W36）から、表示・クリックが低調で統合/削除候補となる記事を棚卸し → IPA 2026年CBT記事8本のうち6本を統合候補と特定（既存3候補＋新規3候補）。詳細は上記ファイル参照
- [ ] 新規コンテンツ（course系）の内部リンク・クロール予算を圧迫していないか確認 → courseコレクションのAstro実装（§0 Week3）待ちのため評価不能。Week3完了後に再検証
- [x] 統合・301化などの不可逆操作は必ずGo/No-Go判断をユーザーに仰いでから実施 → **2026-09-08 ユーザーがGo判断（6本一括統合）**。対象6記事を削除・`cbt-2026-syllabus-complete-guide`ハブへ301統合・内部リンク修正・`pnpm build`検証（1486ページ・エラーなし）まで実行完了。詳細は `article-consolidation/ipa-cbt-2026-cluster-w36.md` §7。コミット・pushは未実施（ユーザー確認後）

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
