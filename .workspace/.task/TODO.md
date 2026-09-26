# Task Management

> 基本方針: **「生成AI × 資格試験」** を軸に外れない。ロングテール・長文・AI検索対応を3本柱にする。
> **本ファイルが全タスクの正本**。完了したタスク群・分析資料は `archive/` に移動する（履歴はそちらを参照）。
>
> **2026-09-07 全面更新**: 「20時間学習法（courseコレクション）」への戦略転換に伴い、2026-07台の旧タスク（PDCA週次検証・記事統廃合判断待ち等）を `archive/todo-pre-course-pivot-2026-09-07.md` へ一括退避。以降は2027年IPAシラバス改訂対応を最優先タスクとして本ファイル冒頭に固定する。

---

## 0. 【最優先】2027年IPAシラバス改訂対応 — 20時間学習法コンテンツ制作

> **正本（詳細タスク・背景思想はすべてこちら）**: [`.workspace/.new-contentplan/new-content-plan.md`](../.new-contentplan/new-content-plan.md)
> 本セクションは進捗の要約のみ。着手・更新は必ず正本側のWeekファイルを編集すること。
> **中長期ロードマップ（未来タスク）**: ITパスポート完成後、`course`（20時間学習法）は「資格から探す」の全資格へ順次展開する方針（2026-09-09決定、IPAデジタルスキル関連資格を優先・ITP→SGの順）。詳細は [`course-rollout-roadmap.md`](../.new-contentplan/course-rollout-roadmap.md)

**今月のゴール**: ITパスポートを題材にした20時間学習法パイロット（Tier1・無料8章）を、2027年シラバスベースで制作し、サイト新構成 `course` コレクションとして公開する。Tier2（有料note・合格テキスト26章フル版）は来月に延期。CBT型（既存資産）は維持しKPIを崩さない。

| Week | 期間 | 状態 | 内容 |
|---|---|---|---|
| Week1 | 9/6〜9/12 | **完了** | テンプレート仕様確定・2027年シラバスJSON化（IP/SC/DM/PD-M/PD-S）・KaTeX PoC・`scaffold-course.cjs` の2027データ対応改修・SNS(Threads)/noteアカウント開設まで完了（詳細は `archive/completed-2026-09-09.md`） |
| Week2 | 9/13〜9/19 | **完了（前倒し）** | 用語精選・8章本文執筆・診断テスト・カリキュラムマップ修正・章末チェック問題（全8章31問）まで完了（詳細は `archive/completed-2026-09-09.md`） |
| Week3 | 9/20〜9/26 | **完了** | courseコレクション実装・章末チェックUI・Tier1公開・導線付け替え・内部リンク確認まで全完了（詳細は `archive/completed-2026-09-19.md`） |
| Week4 | 9/27〜10/3 | **完了** | 計測・振り返り・次月準備（下記チェックリスト。IP/SG/DMコース実装完了に伴い2026-09-20アーカイブ） |

### Week3（9/20〜9/26）: 実装・Web公開 — 完了

> 正本: [`archive/week3-task.md`](../.new-contentplan/archive/week3-task.md)。全項目完了、詳細は `archive/completed-2026-09-19.md` 参照（メールゲート・noteマガジンは来月スコープのため対象外）

### Week4（9/27〜10/3）: 計測・振り返り・次月準備 — 完了

> 正本: [`archive/week4-task.md`](../.new-contentplan/archive/week4-task.md)。IP/SG/DMコース実装完了に伴い、week1〜4タスクファイルおよびip-course/sg-course/dm-course関連ファイルは2026-09-20付で`.workspace/.new-contentplan/archive/`へ移動済み

- [x] Week4完了タスク一式（GA4/GSC計測開始、SG/DM/PD-M/PD-S各パイロットの公開完了、今月の振り返り、trend記事確認）→ 2026-09-22アーカイブ。**IPAグループ（`ip`→`sg`→`dm`→`pd-m`→`pd-s`）の20時間コース展開が全て完了**。詳細は[`archive/completed-2026-09-22.md`](archive/completed-2026-09-22.md)、PD-M/PD-S実装の正本は[`../.new-contentplan/archive/pd-course/pd-course-task.md`](../.new-contentplan/archive/pd-course/pd-course-task.md)参照。**G検定コースは2026-09-24着手・同日に本文執筆まで完了**。全8章＋index・章末チェック/診断/総復習の問題データ（計92問）を実装、`pnpm astro check`で0エラーを確認済み（`draft: true`のため未公開）。公開判断・DMコースへの逆方向リンク追記・既存記事からの導線設置が残タスク（[`../.new-contentplan/g-kentei-course/g-kentei-course-task.md`](../.new-contentplan/g-kentei-course/g-kentei-course-task.md) §4 / [`g-kentei-course-curriculum.md`](../.new-contentplan/g-kentei-course/g-kentei-course-curriculum.md)参照）
- [ ] 来月着手するTier2（有料note・合格テキスト）の準備確認: noteアカウント開設・価格帯・巻数設計（[`ip-course-curriculum.md`](../.new-contentplan/archive/ip-course/ip-course-curriculum.md) §4）の検討再開、メールゲート実装方式の確定

---

## 0.5 コラム記事「S.E.L.Fループ」公開（2026-09-26完了）

- [x] `method/self-loop-ai-learning/`として公開完了。カバー生成→本番配置→`pnpm astro check`＋`pnpm run build`（0エラー）を確認しコミット・push済み

---

## 1. 既存記事の統廃合（GSC/GA4データドリブンの棚卸し）

> 背景: courseコレクション等の新コンテンツが増える一方、既存記事（特にIPA CBT関連の重複トピック群）が回遊・評価の邪魔をしている懸念。旧TODOで「ユーザー判断待ち」だった IPA 2026年CBT記事8本の統廃合案は `archive/todo-pre-course-pivot-2026-09-07.md` §1 に判断根拠が残っているので、再検討時はそちらを参照。
> **正本（本タスクの分析・進捗管理はすべてこちら）**: [`archive/article-consolidation/`](archive/article-consolidation/) フォルダ配下。最新: [`archive/article-consolidation/ipa-cbt-2026-cluster-w36.md`](archive/article-consolidation/ipa-cbt-2026-cluster-w36.md)（W36データ反映・2026-09-08）。完了項目は `archive/completed-2026-09-09.md` 参照

- [x] 新規コンテンツ（course系）の内部リンク・クロール予算を圧迫していないか確認 → **2026-09-19完了**。詳細は `archive/completed-2026-09-19.md` 参照

## 2. コンテンツ3本柱への再編（設計提案・ユーザー確認待ち）

> 背景: 「20時間学習」「生成AIと学ぶ」「資格試験の教材」を新たな3本柱に、「最新情報のフォロー」「コラム」を副次コンテンツに据えるサイト構成の設計依頼（2026-09-09）。既存5カテゴリ・URLには手を入れず、ナビ・トップページの見せ方だけを再編する案。
> **正本**: [`site-structure-pillars.md`](site-structure-pillars.md)
> ヘッダー・フッター・トップページの実装3点は2026-09-15に全完了。完了記録は [`archive/completed-2026-09-15.md`](archive/completed-2026-09-15.md) へ退避（詳細は[`site-structure-pillars.md`](site-structure-pillars.md) §7参照）


## 3. 頻出KWのジャンル別「まとめ記事」化

> 背景・目的: 1記事＝1用語で分散していた`theory`記事を、コース横断で頻出するジャンル単位に統合し、AdSense評価（低品質・テンプレ的コピー短文の整理）向上と読者の自己完結的な学習体験を両立させる施策。**2026-09-15に全項目完了**。実施した11件の統合・リライト内容、組織軸の方針（試験ごとではなくKW・トピッククラスタで統一）、IP軸の全数カテゴライズ結果は [`archive/theory-genre-consolidation-2026-09-15.md`](archive/theory-genre-consolidation-2026-09-15.md) へ退避。

- theory記事数: 102本 → 65本（統合ハブ11本を新規作成、301リダイレクト累計39件）
- [ ] **（フォローアップ）** 統合した記事群のアクセス解析（GA4/GSC）による効果検証を次回データ取得時に実施（統合前後のセッション数・掲載順位の変化）
- [ ] **（フォローアップ）** 非IP対象18本・2027年改訂で受け皿が消えた記事6本の扱い（削除／draft化／他カテゴリ移動）は未判断
- [ ] **（フォローアップ）** SG固有ジャンル（ISMS・リスクアセスメント・セキュリティ製品群など）の追加カテゴライズは未実施

---

## 4. 【優先度：低・ストック企画】「20時間で体系的に学ぶ」非IPA系コンテンツ

> 背景: IPA資格（`course`コレクション）とはシラバス構造が異なる、汎用教養/ビジネススキル題材の「20時間で体系的に学ぶ」コンテンツライン。**IPA関連タスク（§0）とは別件で管理し、混同しないこと**。着手時期は未定（IPA系20hoursが一段落した後、または次の企画ネタに困った時）。
> **正本**: [`.workspace/.general-20hours-plan/20hours-non-ipa-genre-research.md`](../.general-20hours-plan/20hours-non-ipa-genre-research.md)

- [ ] 候補ジャンルの目次骨格・優先順位確定（統計学＝実績あり／SNS戦略＝構成案完成済み／マーケティング・MBA＝リサーチ済み・骨格未確定／秘書検定＝ネタ案のみ）
- [ ] やりたくなったタイミングで上記正本ファイルを再読し、着手ジャンルを選定
- [ ] （2026-09-18リサーチ済み）非IPA系で「学び直したい」意欲が強いジャンルの追加候補: 話し方・伝え方（プレゼン/コミュニケーション）、会計・財務の基礎。詳細・出典は正本ファイル参照

---

## 5. trend用語解説バッチの内部リンク改善（実装完了・フォローアップ待ち）

> 背景: trend/コラムの評価低下（薄いページの放置）についてユーザーから指摘。2026-03-31公開の用語解説23記事について、category_rules.mdの既定方針（URL維持）に従い、タグ統一・構造欠陥修正・本文内「次は◯◯」参照の実リンク化を実施（2026-09-19完了）。実装内容の詳細は `archive/completed-2026-09-19.md` §4参照。
> **正本**: [`requirement-trend-glossary-brushup.md`](requirement-trend-glossary-brushup.md)（実施内容） / [`trend-glossary-brushup-followup-report.md`](trend-glossary-brushup-followup-report.md)（効果測定用レポート・対象23記事のベースライン数値）

- [ ] **2026-10-18 実行予定**: GSC/GA4データ取得後、`trend-glossary-brushup-followup-report.md` のベースラインと突き合わせて効果検証。表示回数0件が続く記事があれば削除・統合を再検討

---

## メモ

- **競合サイト**: [キーマンズネット](https://kn.itmedia.co.jp/) — 構成の参考・対抗
- 2026-07台までの旧タスク（週次PDCA・KWリサーチ執行・SNS運用等）はすべて `archive/todo-pre-course-pivot-2026-09-07.md` へ退避済み。過去の判断根拠が必要な場合はそちらを参照

## アーカイブ索引（archive/）

| ファイル/フォルダ | 内容 | 移動日 |
|---|---|---|
| `completed-2026-09-22.md` | Week4完了タスク一式: GA4/GSC計測開始・PD-M/PD-Sコース公開完了（Mermaid図解インフラ新規実装を含む）・SG/DM完了の参照・今月の振り返り・trend記事確認。IPAグループ（ip→sg→dm→pd-m→pd-s）の20時間コース展開が全て完了。PD-M/PD-S実装の正本は`.new-contentplan/archive/pd-course/`へ移動済み | 2026-09-22 |
| `completed-2026-09-19.md` | §0 Week3全完了（courseコレクション内部リンク確認含む）・§1該当項目クローズ・DMコース公開前最終調整（§4、KaTeXスマホバグ修正・プロンプト折り返しバグ修正・コース共通サムネイル実装・制作手順紹介セクション追加を含む）・trend用語解説バッチ内部リンク改善の実装フェーズ完了分 | 2026-09-19 |
| `theory-genre-consolidation-2026-09-15.md` | 旧§3（theoryジャンル別まとめ記事化）完了分一式: パイロット・IP軸全数カテゴライズ・①〜⑤統合・SGギャップ分析A/B・要検討3本の個別対応（リライト/再設計/統合）。theory記事102本→65本、統合ハブ11本、301リダイレクト39件 | 2026-09-15 |
| `completed-2026-09-15.md` | 旧§2（コンテンツ3本柱への再編）完了分: ヘッダーナビ再編・フッター3カラム再編・トップページ実装・フッター広告枠テスト導入（資格スクエア／A8.net） | 2026-09-15 |
| `completed-2026-09-09.md` | 旧§0 Week1残タスク・旧§1（サイト構成見直し）・旧§2（画像生成スクリプト）・旧§3完了分（IPA CBT記事統廃合の実行）・旧§4（クイズアプリ省力化）・Week2（パイロットカリキュラム制作）・SNS(Threads)/noteアカウント開設の完了記録一式 | 2026-09-09 |
| `00-index.md` | archive/配下をタスク種類別に整理した索引（本テーブルの日付順に対する、種類別のもう一つの索引） | 2026-09-09 |
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
