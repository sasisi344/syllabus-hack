# Task Management

> 基本方針: **「生成AI × 資格試験」** を軸に外れない。ロングテール・長文・AI検索対応を3本柱にする。
> **本ファイルが全タスクの正本**。完了したタスク群・分析資料は `archive/` に移動する（履歴はそちらを参照）。
>
> **2026-07-11 整理**: 2026-06-19集約時の統合タスクリストA〜Kは、site-check0710（WP01〜07）と w28-site-verifi でほぼ完走したため本ファイルを全面更新。完了済みの旧ファイル（site-audit・priority-roadmap・nextsiken・categories-list-check・restructure-plan・research-kw-non-ipa・weekly-task・site-check0710/・query-research/）は `archive/` へ移動済み。

---

## 1. 進行中: アクセス解析PDCA（正本: `w28-site-verifi/w28-tasks.md`）

チェック管理は w28-tasks.md 側で行う。ここは要約のみ。

- [ ] **デプロイ第2弾（ユーザー）**: 文字化け779箇所修復（184ファイル）＋T8カテゴリtitle刷新＋T9タイトル2件＋netlify.toml整理のコミット・push（2026-07-12時点で未コミット約190ファイル。Xserverへのdistアップロードも忘れずに）
- [ ] T6: 週次検証運用（W29〜W31、毎週日曜データ提供後。KPI表更新・Bing定点観測含む）
- [ ] T9: CTR改善第二弾 — **2/3完了（2026-07-11）**: typing-speed-60wpa（→「ITパスポート試験にタイピングは必要か？」）・ap-pm-descriptive-ai-prompts（→「応用情報の午後・記述式をAIで対策する」）はSERP実査＋既得クエリ語保持で刷新済み。残り ap-salary-impact はクエリ未特定のため保留（→ `pending-decisions-0711.md` Q6）
- [ ] T5: 順位8〜15位デッドゾーンリライト（W30以降）＋第二ティア（30位超層、W31以降）
- [ ] W30確認: 旧URL（/term/・/strategy/・統合slug）のGSC計上消滅と評価移転
- [ ] T6追加観測（Q6データ・2026-07-12）: Bing日次データで表示回数が3ヶ月で日次3→90件へ成長中と確認（`access-data/2026/w28/3months-…csv`・`7days-…csv`※実際は約1ヶ月分）。週次検証でBingの伸びを継続トラッキング
- [ ] 継続依頼（Q6未充足分）: GSCの**ページ×クエリ紐付け**データ（ページで絞り込み→クエリ表示）は未取得のまま。`ap-salary-impact`（T9残り1件）のクエリ特定に必要なため、次回データ提供時にお願いしたい

## 2. 次フェーズ執筆パイプライン（2026-07-12 ユーザー回答Q3〜Q5で優先順位確定）

着手時は `.agents/kw_pattern_research.md` → KW-DB → `/new-post` の順を厳守。**共通方針（Q5）: 執筆前のリサーチで得た一次情報を最重視し、リサーチ結果次第で方向性を柔軟に変える。**

- [x] **②-2 消防設備士スポーク2本【2026-07-14 公開完了】**: (1)「鑑別（実技）×AI連想学習」→ `method/shobo-setsubi-kanbetsu-ai-hack`（P6・占拠度低の最有力。AIプロンプト5パターンに拡充）、(2)「乙6落ちた原因診断」→ `method/shobo-setsubi-otsu6-fail-diagnosis`（P2・AIプロンプト4パターン）。両記事相互リンク＋shobo-setsubi-hubから両方へのリンクバック設定、個別カバー画像生成、`pnpm build`検証済み（1368ページ）
- [x] **③金融IT検定 第1弾【2026-07-14 公開完了】**: trend「金融IT検定とは？ITパスポートの次に取る価値があるか」→ `trend/fintech-it-cert-intro`（AIプロンプト4パターン）。examId `fintech-it` を src/content/config.ts・exam-id-catalog.md へ登録済み。itp-hubのキャリア戦略セクションから内部リンク、個別カバー画像生成、ビルド検証済み。第2弾method「過去問ゼロをAIで攻略」は第1弾のGSC反応（W30以降）を見てから着手
- [ ] **④TOEIC**（③の後・Q5で推奨順どおり確定）: `method/toeic-hub`＋AI音声活用Method×1。examId `toeic` を先に登録
- [ ] 知財Hubスポーク展開（G-1続き）: `method/chiteki-zaisan-hub` 配下のスポーク未着手
- [ ] ボイラー・冷凍Hubスポーク展開（G-2続き）: `method/boiler-refrigeration-hub` 配下のスポーク未着手
- [ ] FEシラバス2026専用記事の検討（w28 §8-2派生）: サイト最大クエリ「基本情報技術者試験 シラバス 2026」（表示100）。cbt-guideタイトル復元の効果をW30で見てから判断

## 3. サイト機能: 資格ナビゲーション導線の新設【優先度高・2026-07-12 ユーザー起点】

> 背景（ユーザー指摘）: 扱う資格がIT系以外にも多岐化したのに、トップページ・トップメニューから任意の資格へジャンプする仕組みがなく回遊性が悪い。

- [ ] 追加検討（任意）: (c) トップページ本体への資格グリッドセクション追加は、一覧ページ＋メニューの効果（回遊率・/certifications/のPV）をW30以降のGA4で見てから判断
- [ ] デプロイ後の実機確認: ドロップダウンのモバイル表示（アコーディオン動作）をブラウザで確認

## 4. 判断待ち（ユーザー判断が必要）

- [ ] **G-6: 講師系資格**（制度調査完了・記事化はユーザー判断待ち）: 職業訓練指導員は123職種区分・都道府県実施の免許制試験（または48時間講習での取得も可）。大阪府実績で合格率74〜92%と易しめ、関連書籍・過去問集が少なくテキストのみ学習が実情。占拠度は低いがIT/生成AI学習ハックとの軸親和性が薄く、受験者母数も小さいニッチ資格。**Go/No-Go判断が必要**: 「占拠度の低さ」を取るか「サイト軸（生成AI×IT資格）からの乖離」を避けるか
- [x] G-4: ビジネス著作権検定 → 単独記事化せず chiteki-zaisan-hub 内言及に留める（結論済み・対応不要。異論があれば再検討）
- [x] G-3: 建設機械施工管理技士 → 新規Hubではなく doboku-sekou-hub の関連スポークとして扱う（結論済み・対応不要・優先度低）
- [x] **Q8: SNS実行タスク4件【2026-07-14 完了】**: Top20ピックアップリスト（`SNS-post-schedule/top20-pickup-list.md`、画像パス統合済み）・5ポストドラフト（`SNS-post-schedule.md` Day1〜5、既存分を確認）はエージェント作成完了。残るThreads予約投稿の実操作のみユーザー作業待ち

## 4.5 カバー画像の方針【2026-07-12 クローズ】

- 棚卸し結果: image欠落0件、theory以外の共通カバー流用152記事
- **ユーザー決定: 共通カバーはそのまま使う。アプリや特定ジャンルは共通カバーで作成することでコストダウンを図る意図的設計のため、一括個別化は行わない**
- 方針を `.agents/image_rules.md` §0 に明文化済み（今後の監査で再起票しないため）。個別カバーは新規公開時などユーザー指示があるときのみ生成

## 5. コンテンツバックログ（優先度低）

- [ ] meta description 長さ範囲外146記事の調整（80字未満・180字超のみ。出典: archive/site-check0710/03-content-rewrite.md T2）
- [ ] タグslugのpinyin問題（`/tag/rdomappu/` 等）: 正規ローマ字slugマップの導入検討（w28 §6-4。実害僅少のため保留）
- [ ] Phase3構想（出典: archive/priority-roadmap-todo.md）: Career記事拡充（職種別×資格マトリクス・年齢別ガイド・資格手当データ系）／資格比較記事（簿記2級vsFP2級・ITPvsG検定・宅建vs行政書士・APvsAWS SAA）／ペルソナ別LP記事3本

## 6. アプリ

（進行中タスクなし。直近完了は archive/w28-w29-completed-2026-07-14.md 参照）

## 7. SNS運用（正本: `SNS-post-schedule/sns-strategy.md`）

- [x] **実行タスク4件の消化状況確認【2026-07-14完了】**: Top20記事リスト・画像アセット整理・初回5ポストドラフトの3件はエージェントで作成/確認済み（詳細はQ8参照）。投稿スケジュールのThreads予約操作のみユーザー作業として残存
- [ ] W28にFacebook/Instagram経由の流入実績あり（fbclid付き3件）— 比較系記事のSNS配信ルーチン化はw28 Act分岐で再現待ち

---

## メモ

- **競合サイト**: [キーマンズネット](https://kn.itmedia.co.jp/) — 構成の参考・対抗
- **CCNA**（参考）: 世界共通資格・高難易度。関連記事は作成済み（ccna-vs-aws-saa／ccna-new-grad-company-filter 等）
- **未登録資格の探索**: 金融IT検定はG-7でGo判定済み（上記セクション2）。新規探索時は `exam-id-catalog.md` に候補を追記

## アーカイブ索引（archive/）

| ファイル/フォルダ | 内容 | 移動日 |
|---|---|---|
| `w28-w29-completed-2026-07-14.md` | W28〜W29完了タスク一括アーカイブ（デプロイ・文字化け修復・NW/消防設備士Hub公開・資格ナビ実装・nw-mermaid-hack内部リンク強化 等） | 2026-07-14 |
| `site-check0710/` | 2026-07-10サイト改善作業書WP01〜07（WP07はw28-site-verifiが後継） | 2026-07-11 |
| `site-audit-2026-07-10.md`（+raw） | サイト全体監査。指摘事項はWP01〜03で対応済み | 2026-07-11 |
| `priority-roadmap-todo.md` | 6〜9月ロードマップ。Phase1・2完走、Phase3は本ファイル§4へ | 2026-07-11 |
| `nextsiken.md` / `categories-list-check.md` / `restructure-plan-2026-06.md` | 分析・背景資料（2026-06-19にTODOへ集約済み） | 2026-07-11 |
| `research-kw-non-ipa.md` | 非IPA資格KWリサーチ。forAI起票4件は全て記事化/アプリ化済み | 2026-07-11 |
| `query-research/` | 資格クエリリサーチ。G-1〜G-7の判断根拠 | 2026-07-11 |
| `weekly-task.md` | W26週報。ActはW28検証（w28-site-verifi）で解消 | 2026-07-11 |
| `article-index.md` | 生成物の旧コピー（正本は `.workspace/task-results/article-index.md`、スクリプトで再生成） | 2026-07-11 |
