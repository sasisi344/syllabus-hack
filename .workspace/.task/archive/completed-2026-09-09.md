# 完了タスクアーカイブ（2026-09-09）

> 2026-09-09、`TODO.md` から完了済み項目を退避。分析の正本（各タスクの詳細データ・実行記録）は各ファイル側に残っているので、判断根拠が必要な場合はそちらを参照。本ファイルは「TODO.mdのどのセクションに何が書かれていたか」の記録。

---

## 旧§0 Week1残タスク（2027年IPAシラバス改訂対応）

- [x] **（Week1残タスク）** `.workspace/scripts/scaffold-course.cjs` を `syllabus-ip-2027.json` 対応に改修（2026-09-08完了）。JSON構造の変化（旧v6.5の3階層 `categories→large_categories→middle_categories` → 新2027の2階層 `major_categories→middle_categories`）に合わせてローダーを書き換え、章定義を `ip-course-curriculum.md` §3-2 の8章（ビジネスの基礎／経営戦略とビジネスモデル／DXとビジネス変革／サービス・PJマネジメント／PC・システム基礎／ネットワークとDB／データとAI／セキュリティと情報倫理）に更新。`node .workspace/scripts/scaffold-course.cjs ip` 実行で全章の抽出語数（155/144/70/29/110/64/90/157＝819語）が curriculum定義と完全一致することを確認済み。出力先 `.workspace/draft/course/ip/` はWeek2の用語精選・本文執筆の入力になる
- [x] **（Week1派生）** examId未登録3件（`dm` / `pd-m` / `pd-s`）を `exam-id-catalog.md` へ登録 → 2026-09-07時点で既に「未登録・予定」候補表として追記済みであることを確認（[`2027-exams-master-report.md`](../../.new-contentplan/2027-exams/2027-exams-master-report.md) §5-6の判断: DM/PD-M/PD-Sの`config.ts` enum正式登録・Hub化は現行試験終了後（半年〜1年後）に見送り、時期尚早な登録は検索意図とのズレを生むため意図的に据え置き。`src/content/config.ts` に3件とも未登録であることも確認済みで、方針と齟齬なし）

## 旧§1: サイト構成の見直し・最適化（courseコレクション新設に伴う）— 全項目完了

> 背景: `course` という新コレクションが追加されることで、既存5カテゴリ（trend/method/career/app/theory）中心の構造との関係整理が必要になる。詳細分析・結論は [`structure-migration-plan.md`](../../.new-contentplan/structure-migration-plan.md) §9 にまとめ済み（2026-09-08）。ナビ・トップページの実コード変更は `course` コレクション実装（Week3）と同時に行う。

- [x] 現行カテゴリ構造（trend/method/career/app/theory）と新設 `course` の関係を整理し、トップページ・グローバルナビの導線設計に反映 → 設計確定 [`structure-migration-plan.md`](../../.new-contentplan/structure-migration-plan.md) §9-1・§9-2（実装はWeek3 §5 Phase2 2-5で1回のみ実施）
- [x] `.agents/category_rules.md` を新構成に合わせて更新 → 「Relationship to the `course` Collection」節を追加済み
- [x] 資格ナビゲーション（`/certifications/` 等、旧タスクで実装済み）との重複・住み分けを確認 → [`structure-migration-plan.md`](../../.new-contentplan/structure-migration-plan.md) §9-3。階層関係であり重複なしと判断。`cert-hubs.ts` への `courseHref?` 追加のみで住み分け完了予定（Week3実装）

## 旧§2: 画像生成スクリプトの見直し・最適化 — 全項目完了

> 詳細レポート: [`../image-script-review.md`](../image-script-review.md)（2026-09-09作成）

- [x] 生成スクリプトの現状レビュー（API呼び出し方式・コスト・生成品質・失敗時のリトライ挙動） → リトライ機構の欠如・失敗時にexit code 0で正常終了してしまう不具合を発見・修正済み
- [x] 最適化の方向性を検討（プロンプトテンプレートの改善、theory共通カバー方針との整合、courseコレクション用カバーの扱い方針を新規決定） → courseコレクションも既存方針同様デフォルトで共通カバー（`course/common-cover.png`）を使う方針とし`image_rules.md`に追記。プロンプトテンプレートのスクリプト内蔵化は既存ワークフローへの影響が大きいため見送り

## 旧§3の完了項目（既存記事の統廃合。セクション自体はTODO.mdに残存・未完了項目のみ）

> 詳細: [`../article-consolidation/ipa-cbt-2026-cluster-w36.md`](../article-consolidation/ipa-cbt-2026-cluster-w36.md)

- [x] 直近のGSC/GA4データ（W36）から、表示・クリックが低調で統合/削除候補となる記事を棚卸し → IPA 2026年CBT記事8本のうち6本を統合候補と特定（既存3候補＋新規3候補）
- [x] 統合・301化などの不可逆操作は必ずGo/No-Go判断をユーザーに仰いでから実施 → **2026-09-08 ユーザーがGo判断（6本一括統合）**。対象6記事を削除・`cbt-2026-syllabus-complete-guide`ハブへ301統合・内部リンク修正・`pnpm build`検証（1486ページ・エラーなし）まで実行完了。コミット済み（`ca86214`）

## 旧§4: IPAクイズアプリの省力化・20hoursコースへの転用構想 — 全項目完了

> 背景: `it-passport-quiz` 等の既存Webアプリはアクセス数が伸び悩んでおり、スマホ向け類似アプリに知名度で劣勢とみられる。単体アプリとしての追加投資を抑え、20時間学習法コースの章末理解度チェック・章立てまとめ出題の出題母体として転用する方向で構想した。
> 詳細: [`../quiz-app-review/w36-quiz-app-audit.md`](../quiz-app-review/w36-quiz-app-audit.md)

- [x] 既存クイズアプリのGA4データ（PV・利用継続率）を確認し、単体アプリとしての投資対効果を評価 → 登録22本中、継続的に機能しているのは`ap-subject-b`／`ap-quiz`のみ。`it-passport-quiz`はトップページ常時露出込みでも週0〜3セッション・エンゲージメント最大22秒とほぼ無反応。他アプリも同水準
- [x] `it-passport-quiz`のトップページ露出（`DailyQuizSection`）を撤去し`itp-hub`経由のリンクのみに一本化 → **2026-09-08 ユーザーがGo判断、実行済み**。`pnpm build`検証済み（1486ページ・エラーなし）。コミット済み（`57e68a7`）
- [x] 20hoursコース（Tier1）の章末チェック問題と既存問題データの重複・転用可能範囲を整理 → `ip-course-curriculum.md` §5-1に新8章別の再利用可能問題数マッピングを追加（第3章DX変革は既存0問で完全新規作成、他章は20〜71問/章を既存334問バンクから確保見込み）
- [x] 「アプリ単体の新規開発」から「コース組み込み型の出題」へのシフト方針を固める → `quiz_app_rules.md`・`quiz_data_rules.md`を更新済み（AP系以外の新規スタンドアロン開発を凍結する方針を明記）

## 旧§0 Week2: パイロットカリキュラム制作 — 全項目完了

> 正本（詳細・背景思想）: [`../../.new-contentplan/week2-task.md`](../../.new-contentplan/archive/week2-task.md)。前提となる二層カリキュラム設計は [`../../.new-contentplan/ip-course/ip-course-curriculum.md`](../../.new-contentplan/archive/ip-course/ip-course-curriculum.md)。

- [x] Tier1各章の用語精選（元語数155/144/70/29/110/64/90/157語 → 約4割に絞り込み） → **2026-09-09完了**。`.workspace/draft/course/ip/0{1-8}-*.md`に反映（合計約210語）。第3章（DX変革）のみ既存theory記事の受け皿が無く全語新規判断
- [x] ITパスポート診断テスト（10問前後）を作成 → **2026-09-09完了**。8章から1〜2問ずつの4択10問（選択肢・正解付き）
- [x] カリキュラムマップの文言修正 → **2026-09-09完了**
- [x] 8章の本文執筆 → **2026-09-09完了**。全8章、要約＋精選後用語リスト＋既存記事へのリンク61本（実在確認済み）＋AIプロンプトまで作成。旧v6.5設計の重複ドラフト8本を削除
- [x] 章末理解度チェック問題を作成 → **2026-09-09完了（方針変更）**。既存334問バンク流用ではなく、各章の説明内容のみを復習する固定出題（ランダム化なし・4択・全問回答後に一括採点）に変更。全8章・計31問

引き継ぎ: 完成した診断テスト・カリキュラムマップ・8章分の本文原稿・章末チェック問題（Tier1一式、draft: true）はWeek3のAstro実装で流し込む素材一式。章末チェックは新規UIコンポーネント（全問回答後に一括採点）が必要。

## 旧§Week1派生: SNS（Threads）・noteアカウント開設

> 正本: [`../../.new-contentplan/week1-task.md`](../../.new-contentplan/archive/week1-task.md)（該当タスク）

- [x] noteアカウントのハンドル確保 → **2026-09-09完了**。ハンドル`syllabushack`で開設。事前にnote/X/Threadsの候補ハンドル全件の空き状況を確認済み
- [x] 20hoursコース／シラバスハック専用のSNSアカウントを新規作成（既存個人ブランド`@sasisi344`とは分離） → **2026-09-09完了**。Threadsアカウントを開設
- [x] note・Threads共通のプロフィール文・リンク・アイコン/ヘッダー画像を確定 → 自己紹介文はWeek1時点の採用確定案をそのまま反映。リンクは`itp-hub`記事に統一。アイコン・ヘッダー画像は`.agents/image_rules.md`のブランド方針（ミニマリスト・ピクトグラム、白アイコン×ネイビー背景）に沿って生成（本×回路網のモチーフ）、`.workspace/draft/brand-assets/icon.png`・`header.png`に保存
