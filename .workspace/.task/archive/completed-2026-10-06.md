# 完了タスク記録（2026-10-06 アーカイブ）

> `TODO.md` と `w40-weekly-task.md` の完了済みタスクを退避したもの。**本文は、元の記述のまま移した**。リンクのうち、`.task/` 基準の相対パスは、本ファイルの位置（`.task/archive/`）に合わせて直してある。
> 日付つきの未完了タスク・効果測定は、[`../schedule-task.md`](../schedule-task.md) に集約した（同日）。

## 目次

1. 旧 §0 のWeek進捗表・Week3・Week4（20時間コース制作の進捗。IPAグループ全コース公開まで）
2. 旧 §0「コース検索流入モニタリング」の完了項目
3. 旧 §0.5 コラム「S.E.L.Fループ」公開
4. 旧 §0.6 生成AI実務練習コース: コミットとpush
5. 旧 §1 既存記事の統廃合（内部リンク・クロール予算の確認）
6. 旧 §2 コンテンツ3本柱: 完了項目
7. `w40-weekly-task.md` のAct: 完了項目（2026-10-06時点）
8. 2026-10-06の作業記録（4記事の改善・KW DB・SNS台帳）

---

## 1. 旧 §0 のWeek進捗表・Week3・Week4

| Week | 期間 | 状態 | 内容 |
|---|---|---|---|
| Week1 | 9/6〜9/12 | **完了** | テンプレート仕様確定・2027年シラバスJSON化（IP/SC/DM/PD-M/PD-S）・KaTeX PoC・`scaffold-course.cjs` の2027データ対応改修・SNS(Threads)/noteアカウント開設まで完了（詳細は `completed-2026-09-09.md`） |
| Week2 | 9/13〜9/19 | **完了（前倒し）** | 用語精選・8章本文執筆・診断テスト・カリキュラムマップ修正・章末チェック問題（全8章31問）まで完了（詳細は `completed-2026-09-09.md`） |
| Week3 | 9/20〜9/26 | **完了** | courseコレクション実装・章末チェックUI・Tier1公開・導線付け替え・内部リンク確認まで全完了（詳細は `completed-2026-09-19.md`） |
| Week4 | 9/27〜10/3 | **完了** | 計測・振り返り・次月準備（下記チェックリスト。IP/SG/DMコース実装完了に伴い2026-09-20アーカイブ） |

### Week3（9/20〜9/26）: 実装・Web公開 — 完了

> 正本: [`../../.new-contentplan/archive/week3-task.md`](../../.new-contentplan/archive/week3-task.md)。全項目完了、詳細は `completed-2026-09-19.md` 参照（メールゲート・noteマガジンは来月スコープのため対象外）

### Week4（9/27〜10/3）: 計測・振り返り・次月準備 — 完了

> 正本: [`../../.new-contentplan/archive/week4-task.md`](../../.new-contentplan/archive/week4-task.md)。IP/SG/DMコース実装完了に伴い、week1〜4タスクファイルおよびip-course/sg-course/dm-course関連ファイルは2026-09-20付で`.workspace/.new-contentplan/archive/`へ移動済み

- [x] Week4完了タスク一式（GA4/GSC計測開始、SG/DM/PD-M/PD-S各パイロットの公開完了、今月の振り返り、trend記事確認）→ 2026-09-22アーカイブ。**IPAグループ（`ip`→`sg`→`dm`→`pd-m`→`pd-s`）の20時間コース展開が全て完了**。詳細は[`completed-2026-09-22.md`](completed-2026-09-22.md)、PD-M/PD-S実装の正本は[`../../.new-contentplan/archive/pd-course/pd-course-task.md`](../../.new-contentplan/archive/pd-course/pd-course-task.md)参照。**G検定コースは2026-09-24着手・同日に本文執筆まで完了、2026-09-24公開済み**（既存記事からの導線設置・DMコースとの相互リンクも完了）。詳細は[`../../.new-contentplan/g-kentei-course/g-kentei-course-task.md`](../../.new-contentplan/g-kentei-course/g-kentei-course-task.md)参照。**SC（情報処理安全確保支援士）コースは2026-09-26着手・2026-09-28に全12章＋ターミナル×サテライト構成まで完了・本番公開済み**。最難関試験のため「章単位20時間配分＋得意/苦手診断によるパーソナライズ」という適応型モデルを新規採用。全12章＋index（`draft: false`、`pnpm build`1427ページで確認）に加え、起点ハブ記事[`method/sc-hub`](/method/sc-hub/)・記述式対策記事[`method/sc-descriptive-self-loop-hack`](/method/sc-descriptive-self-loop-hack/)を新規公開。診断アプリは`.agents/quiz_app_rules.md`の新規スタンドアロンアプリ凍結方針に従い新設せず、既存のコースTOP診断（`ChapterQuiz` mode="diagnosis"）で代替。詳細は[`../../.new-contentplan/archive/sc-course/sc-course-task.md`](../../.new-contentplan/archive/sc-course/sc-course-task.md) / [`sc-course-curriculum.md`](../../.new-contentplan/archive/sc-course/sc-course-curriculum.md)参照。**次点候補は`course-rollout-roadmap.md`の優先順位方針に基づきクラウド・ネットワーク（AWS・CCNA）だが、着手はユーザー判断待ち**（→ 2026-10-06に `TODO.md` §4.5「CCNA・AWS SAAの20時間コース導入」として検討タスク化）

## 2. 旧 §0「コース検索流入モニタリング」の完了項目

> 旧見出し: コース検索流入モニタリング（週次・恒常化フェーズへ移行、2026-09-27更新）。未完了の項目は `TODO.md`（コース用GA4カスタムイベントの反映）と `schedule-task.md`（w41のデータ確認・毎週の定点観測）に残している。

> `week4-task.md` 時点（2026-09-20）では「20時間コースは検索経由の効果測定に最低1ヶ月（w40〜w43程度）の蓄積期間が必要」と保留判断していたが、IP/SG/DM/PD-M/PD-Sがいずれも2026-09-13〜09-22の近接した時期に公開・インデックス済みとなったため、判断保留フェーズは終了。以降は「初回効果測定」ではなく**コース別・週次の検索流入（GSCクエリ・表示回数・クリック・掲載順位）とPV（GA4）の定点観測**を毎週の`/weekly-report`実施項目として恒常化する。

- [x] モニタリング方法をREADME（[`../access-data/README.md`](../access-data/README.md)「コース別モニタリング用GA4設定」節）に記録（2026-09-27）。GA4のContent Group設定・Search Console連携確認・Page path基準の探索レポート作成が必要な旨を含む
- [x] **コース別探索レポート作成完了（2026-09-27）**: `w40-ga4-course-syllabus.csv` として取得済み。ディメンション（ページパスとスクリーンクラス）・フィルタ（/course/）・値（表示回数/セッション/エンゲージメント率/平均エンゲージメント時間）・セグメント列（すべてのユーザー/ウェブ/オーガニック/モバイル）の構成を標準テンプレートとして確定し、READMEに反映済み。**このw40分は公開日（8/30）〜取得日（9/26）の累積ベースラインとして扱う**（今後は単一週で取得）
- [x] **要ユーザー作業（GA4管理画面）完了（2026-10-06）**: GA4とSearch Consoleの連携リンクは設定済み。`/course/`配下の識別子（`course_id`／`content_group`）のカスタムディメンションも作成済み。**残り: `src/layouts/Layout.astro` のGA4パラメータ送信（`course_id` と `content_group = course-{examId}`）が未コミット。push（本番反映）するまでデータは入らない**。反映後、GA4のリアルタイムで `/course/ip/` を開き、パラメータが届くことを確認する（ディメンション名・スコープがLayout.astroの送信パラメータ名と一致しているかも確認）（→ 注記（2026-10-06）: パラメータ送信の実装は、コミット `6350671`「コース配下のGA4に course_id / content_group を付与」で本番反映済み。リアルタイムでの到達確認は、`TODO.md` の「コース用GA4カスタムイベントの本番反映」の確認項目に含めた）
- [x] **重要な訂正（2026-09-27）**: w39・w40週報で「DM/PD-Mコースの章送りナビゲーションがpage_view未発火」と報告した件は、実装バグではなくGA4探索レポートの「ランディングページ」ディメンション（セッションスコープ）の見え方によるものと判明。コース側の実装修正は不要（詳細はREADME参照）。従来のAct項目「`/course/dm/`・`/course/pd-m/`の章送りナビゲーション実装確認」はクローズし、上記のコース別探索レポート導入に差し替える

## 3. 旧 §0.5 コラム記事「S.E.L.Fループ」公開（2026-09-26完了）

- [x] `method/self-loop-ai-learning/`として公開完了。カバー生成→本番配置→`pnpm astro check`＋`pnpm run build`（0エラー）を確認しコミット・push済み

## 4. 旧 §0.6 生成AI実務練習コース: コミットとpush

> 制作と本番ビルド（1,441ページ）まで完了。完了記録: [`completed-2026-09-29.md`](completed-2026-09-29.md)（設計の正本 `requirement-ai-practice-usecases.md`、進捗管理 [`../../.new-contentplan/archive/ai-work-course/ai-work-course-task.md`](../../.new-contentplan/archive/ai-work-course/ai-work-course-task.md)）。コース: `/course/ai-work/`（`src/data/course/ai-work/`）、コラム: `/method/ai-skill-rules-setup/`・`/method/ai-programming-prep/`。

- [x] **【完了 2026-09-29 commit 6ed05a5、公開URL 200確認 2026-09-30】コミットとpush（本番公開）**: **10/1のSNS投稿より前に完了させる**。変更は `src/content/config.ts` の1行＋新規 `src/data/` 配下（course/ai-work、quiz/ai-work、post/method のコラム2本）＋ `.workspace` の記録。ワークスペースには別作業の未コミット変更（`site-structure-pillars.md`、作文検定の資料の移動など）があるため、コミット対象を選ぶ。pushは本番の自動デプロイをトリガーするため、変更の要約を確認してから実行（CLAUDE.md）

## 5. 旧 §1 既存記事の統廃合（GSC/GA4データドリブンの棚卸し）

> 背景: courseコレクション等の新コンテンツが増える一方、既存記事（特にIPA CBT関連の重複トピック群）が回遊・評価の邪魔をしている懸念。旧TODOで「ユーザー判断待ち」だった IPA 2026年CBT記事8本の統廃合案は `todo-pre-course-pivot-2026-09-07.md` §1 に判断根拠が残っているので、再検討時はそちらを参照。
> **正本（本タスクの分析・進捗管理はすべてこちら）**: [`article-consolidation/`](article-consolidation/) フォルダ配下。最新: [`article-consolidation/ipa-cbt-2026-cluster-w36.md`](article-consolidation/ipa-cbt-2026-cluster-w36.md)（W36データ反映・2026-09-08）。完了項目は `completed-2026-09-09.md` 参照

- [x] 新規コンテンツ（course系）の内部リンク・クロール予算を圧迫していないか確認 → **2026-09-19完了**。詳細は `completed-2026-09-19.md` 参照

## 6. 旧 §2 コンテンツ3本柱への再編: 完了項目

> 背景・正本: [`../site-structure-pillars.md`](../site-structure-pillars.md)。ヘッダー・フッター・トップページの実装3点は2026-09-15に全完了（記録: [`completed-2026-09-15.md`](completed-2026-09-15.md)）。2026-09-27: theory/method価値再評価とフッター広告枠検証を実施（同ファイル §8）。

- [x] theory/method の扱い → **2026-09-27 ユーザー判断で現状維持に確定**（§8-3）
- [x] `kw-pattern-library.md` にP10「資格名×AI学習」パターンを追加（2026-09-27）
- [x] P10で15資格＋IPAを実査 → 正本 `.workspace/data-set/cert-keyword-db/p10-ai-query-research-2026-09.md`、boki/takken/aws/fp/denkenのDBにP10行を追記（2026-09-27）
- [x] **IPA「ITパスポート NotebookLM」記事の扱い → 2026-10-03 方針確定**: **同一URL `/method/notebooklm-ip-study-hack/` を復活させ、内容は全面的に書き直して厚くする**（旧記事の再公開はしない）
  - 根拠: w40比較期間で表示43・クリック4・平均5.9位の実績があり、リダイレクト解除で同URLの履歴を取り戻せる。新slugだと実績ゼロから。受け皿の `notebooklm-features-guide`（examId: common）にはITパスポートの記述がなく、意図が合っていない
  - 2026-06-18の統合計画（ページ復活ではなく1本に統合）は「薄い記事を増やさない」が趣旨。旧記事は `notebooklm-it-passport-drill` のサブセットで薄いので、旧本文の復活は不可。IP特化の厚い1本として再構築するなら趣旨に反しない
  - 書き直しの中身: 自分事化（CRM例）＋50問ドリル生成＋「AIに出題させる」プロンプト（コピー用コードフェンスは `**太字**`）＋ハルシネーション対策（出典確認）。`features-guide` は汎用の機能ガイドとして残し、相互リンクで役割分担
  - [x] 実行（2026-10-03）: ①`astro.config.ts` のリダイレクト2行を削除 ②`src/data/post/method/notebooklm-ip-study-hack/index.md` を新規作成（examId: ip、カバー生成済み） ③`features-guide`・`itp-hub`・IPコース第1章から内部リンク ④`pnpm build` 成功。（→ 注記（2026-10-06）: コミット済み・push済み（コミット `e33ddf6`）。公開後のGSCでの再インデックス・順位の確認は、`schedule-task.md` §7 へ移した）
- [x] ~~theory内の資格制度系4記事のコラム側への移設・導線追加~~ → theory現状維持の確定により見送り（2026-09-27）

## 7. `w40-weekly-task.md` のAct: 完了項目（2026-10-06時点）

> 週報本体（`w40-weekly-task.md`）は、次回の `/weekly-report w41` が前週Actとして読むため、`.task/` に残している。ここには、完了した項目の記録だけを写した。

- [x] **完了（2026-10-05〜06）最優先**: `/trend/ipa-2026-cbt-schedule-guide/` をリライト。10/05のコミット `b499c7c` で公式情報により全面更新し、10/06のコミット `ad5b227` で追記（`lastmod: 2026-10-06`、`publishDate` は変更なし）
- [x] **完了（2026-10-06）最優先（新規格上げ）**: `/career/foreigner-japan-national-qualification/` のタイトル・メタディスクリプション改善。title・excerpt・descriptionを変更し、本文を改訂（コミット `ad5b227`）
- [x] **完了（2026-10-06）優先（継続）**: `/career/kougyou-koukou-shikaku-ichiran/` のタイトル・メタ改善。本文を拡充（コミット `ad5b227`）
- [x] **完了（2026-10-06）**: `/trend/ccna-vs-aws-saa/` のタイトル・メタ改善（titleは10/05のコミット `b499c7c` で変更済み。10/06に本文を改善。詳細は §8）
- [x] ~~実装確認: `/course/pd-m/` `/course/dm/` の章送りナビゲーション修正~~ → 2026-09-27訂正によりクローズ（実装バグではなく、GA4探索レポートのディメンション設計による見え方だったため対応不要）
- [x] **完了**: GA4でコース別モニタリング用の探索レポート（Page path基準）を作成（`w40-ga4-course-syllabus.csv`）。以降これを標準テンプレートとする（`access-data/README.md`「コース別モニタリング用GA4設定」節参照）
- [x] **データ取得プロセス改善**: 2026-10-06 `TODO.md` へ移管 → 同日 `schedule-task.md` §1 へ統合（w41データでの確認）
- [x] **（任意・優先度中）Search Console連携確認・コンテンツグループ設定**: 完了（2026-10-06）。GA4とSearch Consoleの連携リンクは設定済み、`course_id`／`content_group` のカスタムディメンションも作成済み（本ファイル §2 参照）

## 8. 2026-10-06の作業記録

### 4記事の改善（コミット `ad5b227`、push済み）

- `trend/ccna-vs-aws-saa`: 競合SERP調査（WebSearch 11クエリ）の結果をもとに、次を追加した。
  - 冒頭の早見3行
  - 試験概要の比較表（AWS SAAは公式で確認した65問・130分・150USD・3年。CCNAの受験料は「Cisco公式で確認」。合格率は両試験とも非公表のため非公式推計は転載せず、その旨を明記）
  - 「AWS SAAのためにCCNAのどこまで学ぶか」（CCNAのドメイン別の優先度表。筆者判断と明記）
  - スケジュール目安（週10時間で約5〜7ヶ月）
  - FAQ（AWS CLF・LPIC）
  - 内部リンク（`aws-saa-beginner-reality`、`lpic-ccna-aws-order`）
- `career/foreigner-japan-national-qualification`・`career/kougyou-koukou-shikaku-ichiran`・`trend/ipa-2026-cbt-schedule-guide`: 改善と `lastmod` 更新

### KW DB

- `.workspace/data-set/cert-keyword-db/aws-kw-db.md` に「P3/P2/P4 実査 2026-10-06」の5行を追記し、`index.md` の最終更新日を更新した（コミット `3a43103`）

### SNS台帳

- `sns-post-work`: 2026-W41の4件（10/06・10/07・10/08・10/10）を予約投稿確定として、`archive/log.md` へ記録し、`used-topics.md` を「投稿済み」に更新した（未コミット）
