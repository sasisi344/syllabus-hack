---
created: 2026-09-20
updated: 2026-09-24
tags:
  - シラバスハック
  - 20hours
  - G検定
  - task
---

# G検定 20時間コース タスク（土台準備・着手待ち）

> 全体ロードマップ: [`../course-rollout-roadmap.md`](../course-rollout-roadmap.md)。**2026-09-20、ユーザー指示によりシラバス分析と20hours土台のみを先行実施。実装着手順は変更しない**（PD-M→PD-Sを完走してからG検定に着手）。本ファイルはG検定着手時にすぐ動けるよう、事前に固めた方針とシラバス構造化データの置き場。

## 0. 決定事項（2026-09-20）

1. **実装順は変更しない**: IPAグループ（ip→sg→dm→pd-m→pd-s）を先に完走させる方針（[`course-rollout-roadmap.md`](../course-rollout-roadmap.md)）はそのまま維持。G検定は「AI・データ」枠としてPD-M/PD-Sの後に着手する
2. **シラバス分析・データ構造化は今回先行して実施**。JDLA公式サイト（https://www.jdla.org/certificate/general/）から最新シラバスPDF（G検定試験出題範囲 シラバス2024、第1.4版・2026-05-11改訂）を取得し、`src/data/master/syllabus-g-kentei.json`として構造化済み（技術分野37項目＋法律・倫理分野18項目＝計55項目）
3. **DMコースとの接続を設計上の前提とする**（ユーザー指摘・2026-09-20）: データマネジメント試験（`dm`）はデータガバナンス・品質管理・統計分析寄り（データアナリスト職を想定）、G検定はディープラーニング理論＋生成AI要素技術が主軸（AIエンジニア/企画職を想定）という役割分担がある。両者の重なりは以下2点:
   - G検定シラバス36「データの収集・加工・分析・学習」（AI開発フロー視点） ⇔ DMコース第1〜3章（データガバナンス・品質管理・データ基盤、実務運用視点）
   - G検定シラバス37「AIに必要な数理・統計知識」（確率分布・標準偏差・相関係数等） ⇔ DMコース第4章「統計手法とデータ分析」（同じ統計用語を計算例題つきで深掘り）
   - 着手時はこの2点を軸に、G検定側からDMコースへ・DMコースからG検定側へ双方向の内部リンクを設置する設計にする（`method/g-kentei-hub`⇔`/course/dm/`、既存の`method/g-kentei-math-statistics-hack`は特にDM第4章との接続候補）
4. **既存資産との重複確認**: `g-kentei`のexamIdは登録済み（`method/g-kentei-hub`・`src/data/master/questions-g-kentei.json`・`src/apps/g-kentei-mock-exam`・`trend/g-kentei-2026-syllabus-trend`が既存）。既存の`questions-g-kentei.json`・関連記事は本シラバス（v1.4）と齟齬がないか、着手時に改めて確認すること（`trend/g-kentei-2026-syllabus-trend`は2026-07-10公開でv1.4改訂（2026-05-11）より後のため大きな齟齬はない見込みだが未検証）

## 1. シラバスデータ（取得・構造化済み）

- `src/data/master/syllabus-g-kentei.json`: JDLA公式PDF（983KB、7ページ）を全文構造化
  - 技術分野: 8セクション・37項目（人工知能とは／人工知能をめぐる動向／機械学習の概要／ディープラーニングの概要／ディープラーニングの要素技術／ディープラーニングの応用例／AIの社会実装に向けて／AIに必要な数理・統計知識）
  - 法律・倫理分野: 2セクション・18項目（AIに関する法律と契約／AI倫理・AIガバナンス）
  - 改訂履歴（v1.0〜v1.4）も記録済み。直近の改訂（v1.4・2026-05-11）はChatGPT/GPT-n削除、破壊的忘却→破滅的忘却の表記変更のみで軽微
- 出題数160問程度（従来200問から削減）。IP・DMのような新設試験ではなく既存試験のため、公開過去問・既存対策記事が豊富にある点がDMと異なる（作問はゼロベースでなく既存資産の精選・再構成が中心になる見込み）

## 2. 20時間コース設計（着手済み）

> 2026-09-24、ユーザー指示によりPD-M/PD-S完了後の待機を終え着手。章立て設計・シラバスマッピング・章ドラフト骨組み生成まで完了。詳細・用語精選基準は [`g-kentei-course-curriculum.md`](./g-kentei-course-curriculum.md) 参照。

1. [x] `20hours-course-template.md`を読み直し、章立て設計の型を確認
2. [x] 55項目・法律倫理分野込みのボリュームを8章に精選・統合（要素技術9項目→5節、法律倫理18項目→5節等）。時間配分はキーワード延べ数（495語）に比例配分（`g-kentei-course-curriculum.md` §2）
3. [x] 既存theory記事（4本のみ: `ml-supervised-unsupervised`・`deep-learning-basics`・`text-mining-nlp`・`statistics-mean-variance-probability-sampling`）との接続表を作成（`g-kentei-course-curriculum.md` §4）。想定に反し既存記事が薄く、書き下ろし比率が高い章が多い結論になった（第1・4・8章は接続先なし）
4. [x] DM接続方針を章立てに反映（第7章⇔DMコース第1〜4章の相互リンク設計、`g-kentei-course-curriculum.md` §5）
5. [x] `.workspace/scripts/scaffold-course.cjs`の`COURSES`に`g-kentei`を追加し、ドラフト骨組みを`.workspace/draft/course/g-kentei/`に生成（G検定のfields/sections/items構造に対応する`from`合算オプションをスクリプトに新規実装）
6. [x] 本文執筆・問題データ作成・サイト実装まで完了（2026-09-24）。`src/data/course/g-kentei/`に全8章＋index.mdx、`src/data/quiz/g-kentei/`に章末チェック8本（各8問）＋診断10問＋総復習20問（計92問）を配置。既存30問バンク（`questions-g-kentei.json`）を可能な限り転用しつつ、カバーできない分野（第7章の数理統計・実務等）は書き下ろし。`pnpm astro check`で0エラーを確認。`draft: true`のため未公開（公開判断は次のアクション参照）

## 3. 保留・要判断事項

- [x] 55項目の学習時間試算 → `g-kentei-course-curriculum.md` §2で完了（8章合計18.0h＋診断0.5h＋総復習1.5h＝20.0h）
- [x] 既存`questions-g-kentei.json`・`method/g-kentei-hub`・`trend/g-kentei-2026-syllabus-trend`とv1.4シラバスの齟齬チェック（2026-09-24完了）。`questions-g-kentei.json`はv1.4で削除・変更された用語（ChatGPT/GPT-n・破壊的忘却）への言及なく問題なし。`g-kentei-hub`・`g-kentei-mock-exam`記事に「問題数約200問」「191問を120分」という旧シラバス（〜G2024#5）の出題数が残存していたため、JDLA公式サイトを確認し「約160問・100分（オンライン）/120分（会場）」（G2024#6以降）に修正
- [x] 法律・倫理分野18項目の扱い → 独立章にする方針を採用（第8章、5節に統合。`g-kentei-course-curriculum.md` §2「第8章について」）

## 4. 次のアクション（本文執筆完了後・2026-09-24時点）

- [x] 公開済み（2026-09-24、`draft: false`に切り替え・`pnpm run build`1400ページ成功を確認しコミット・push）
- [x] DMコース側へG検定コースへの逆方向リンクを追記（第4章「統計分析」・第5章「AI利活用」・index.mdxの3箇所。IPよりDMとの親和性が高いというユーザー判断に基づく方針転換。2026-09-24完了）
- [x] 既存`method/g-kentei-hub`・`method/g-kentei-math-statistics-hack`・`trend/g-kentei-2026-syllabus-trend`・`app/g-kentei-mock-exam`からコースへの導線設置（2026-09-24完了。あわせて出題数・試験時間の齟齬修正も実施）
- [x] `method/advanced-ipa-hub`への掲載要否を確認 → 対象外と判断（同記事はIPA高度試験（SC・NW・PM・DB・ST・SA）専門のハブで、JDLA主催のG検定とは主催団体・試験体系が異なるため掲載しない。2026-09-24確認）
