# Task Management

> 基本方針: **「生成AI × 資格試験」** を軸に外れない。ロングテール・長文・AI検索対応を3本柱にする。
> **本ファイルが全タスクの正本**。完了したタスク群・分析資料は `task-archieve/` に移動する（履歴はそちらを参照）。
>
> **2026-07-11 整理**: 2026-06-19集約時の統合タスクリストA〜Kは、site-check0710（WP01〜07）と w28-site-verifi でほぼ完走したため本ファイルを全面更新。完了済みの旧ファイル（site-audit・priority-roadmap・nextsiken・categories-list-check・restructure-plan・research-kw-non-ipa・weekly-task・site-check0710/・query-research/）は `task-archieve/` へ移動済み。

---

## 1. 進行中: アクセス解析PDCA（正本: `w28-site-verifi/w28-tasks.md`）

チェック管理は w28-tasks.md 側で行う。ここは要約のみ。

- [ ] **デプロイ（ユーザー・最優先）**: リダイレクト全量修正＋cbt-guideタイトル再修正のコミット・push。反映まで順位5.8のURLへの404着地が続く（w28 §8-1・§8-2）
- [ ] T6: 週次検証運用（W29〜W31、毎週日曜データ提供後。KPI表更新・Bing定点観測含む）
- [ ] T8: カテゴリページtitle・description刷新（theory以外の4カテゴリが `Category 'X'` 形式のまま）
- [ ] T9: CTR改善第二弾（typing-speed-60wpa／ap-pm-descriptive-ai-prompts／ap-salary-impact。**実クエリで既得語を確認してからタイトルを動かす**）
- [ ] T5: 順位8〜15位デッドゾーンリライト（W30以降）＋第二ティア（30位超層、W31以降）
- [ ] T3残: netlify.toml の死んだ `[[redirects]]` ブロック — ホスティング経緯の確認後に削除
- [ ] W30確認: 旧URL（/term/・/strategy/・統合slug）のGSC計上消滅と評価移転

## 2. 次フェーズ執筆候補（調査済み・Go判定、出典: task-archieve/site-check0710/05-new-content.md）

着手時は `.agents/kw_pattern_research.md` → KW-DB → `/new-post` の順を厳守。

- [ ] **NWクラスター拡充1本目**: 「NW午後過去問演習ハック」（要件定義済み: `w28-site-verifi/nw-cluster-expansion-requirement.md`。ユーザーレビュー待ち→承認後 `nw-kw-db.md` 新設から）
- [ ] **消防設備士クラスター**（G-5・Go判定・優先度高）: examId `shobo-setsubi` 登録＋KW-DB新設＋Hub。boiler-refrigeration-hub／denken-hub／kiken-butsu-hub と直接クラスター化できる（ビルメン4点セット）
- [ ] **金融IT検定**（G-7・Go判定）: examId `fintech-it` 登録＋KW-DB新設。「ITパスポートの次のステップ」公式位置づけで主要読者層と合致、2024年開始で競合僅少。※級構成は初級/上級/プロフェッショナル（「中級」は存在しない）
- [ ] **知財Hubスポーク展開**（G-1続き）: `method/chiteki-zaisan-hub` 配下のスポーク未着手
- [ ] **ボイラー・冷凍Hubスポーク展開**（G-2続き）: `method/boiler-refrigeration-hub` 配下のスポーク未着手
- [ ] **FEシラバス2026専用記事の検討**（w28 §8-2派生）: サイト最大クエリ「基本情報技術者試験 シラバス 2026」（表示100）。cbt-guideタイトル復元の効果をW30で見てから判断

## 3. 判断待ち（ユーザー判断が必要）

- [ ] **J-1: TOEIC着手**（材料整理済み）: 推奨順は G-5消防設備士 → TOEIC。着手する場合は `method/toeic-hub`＋AI音声活用Method×1、examId `toeic` を先に登録
- [ ] **G-6: 講師系資格**（保留）: 職業訓練指導員の制度調査を先に行ってから記事化判断
- [ ] G-4: ビジネス著作権検定 → 単独記事化せず chiteki-zaisan-hub 内言及に留める（結論済み・異論があれば再検討）
- [ ] G-3: 建設機械施工管理技士 → 新規Hubではなく doboku-sekou-hub の関連スポークとして扱う（結論済み・優先度低）

## 4. コンテンツバックログ（優先度低）

- [ ] meta description 長さ範囲外146記事の調整（80字未満・180字超のみ。出典: task-archieve/site-check0710/03-content-rewrite.md T2）
- [ ] タグslugのpinyin問題（`/tag/rdomappu/` 等）: 正規ローマ字slugマップの導入検討（w28 §6-4。実害僅少のため保留）
- [ ] Phase3構想（出典: task-archieve/priority-roadmap-todo.md）: Career記事拡充（職種別×資格マトリクス・年齢別ガイド・資格手当データ系）／資格比較記事（簿記2級vsFP2級・ITPvsG検定・宅建vs行政書士・APvsAWS SAA）／ペルソナ別LP記事3本

## 5. アプリ

- [ ] **ブラウザ実機確認（ユーザー依頼事項）**: 2026-07-10〜11作成の5アプリ（boki-shiwake-drill／takken-kenri-quiz／g-kentei-mock-exam／fp2-calc-drill／aws-cert-diagnosis）。コードレビューは合格済み・実機での出題〜LocalStorage保存の確認が未実施

## 6. SNS運用（正本: `SNS-post-schedule/sns-strategy.md`）

- [ ] 実行タスク4件の消化状況を確認して更新（投稿スケジュール設定／Top20記事リスト／画像アセット整理／初回5ポストのドラフト）。W28にFacebook/Instagram経由の流入実績あり（fbclid付き3件）— 比較系記事のSNS配信ルーチン化はw28 Act分岐で再現待ち

---

## メモ

- **競合サイト**: [キーマンズネット](https://kn.itmedia.co.jp/) — 構成の参考・対抗
- **CCNA**（参考）: 世界共通資格・高難易度。関連記事は作成済み（ccna-vs-aws-saa／ccna-new-grad-company-filter 等）
- **未登録資格の探索**: 金融IT検定はG-7でGo判定済み（上記セクション2）。新規探索時は `exam-id-catalog.md` に候補を追記

## アーカイブ索引（task-archieve/）

| ファイル/フォルダ | 内容 | 移動日 |
|---|---|---|
| `site-check0710/` | 2026-07-10サイト改善作業書WP01〜07（WP07はw28-site-verifiが後継） | 2026-07-11 |
| `site-audit-2026-07-10.md`（+raw） | サイト全体監査。指摘事項はWP01〜03で対応済み | 2026-07-11 |
| `priority-roadmap-todo.md` | 6〜9月ロードマップ。Phase1・2完走、Phase3は本ファイル§4へ | 2026-07-11 |
| `nextsiken.md` / `categories-list-check.md` / `restructure-plan-2026-06.md` | 分析・背景資料（2026-06-19にTODOへ集約済み） | 2026-07-11 |
| `research-kw-non-ipa.md` | 非IPA資格KWリサーチ。forAI起票4件は全て記事化/アプリ化済み | 2026-07-11 |
| `query-research/` | 資格クエリリサーチ。G-1〜G-7の判断根拠 | 2026-07-11 |
| `weekly-task.md` | W26週報。ActはW28検証（w28-site-verifi）で解消 | 2026-07-11 |
| `article-index.md` | 生成物の旧コピー（正本は `.workspace/task-results/article-index.md`、スクリプトで再生成） | 2026-07-11 |
