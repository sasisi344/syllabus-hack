# theoryジャンル別まとめ記事化の完了記録（2026-09-15）

> `TODO.md` 旧§3「頻出KWのジャンル別『まとめ記事』化」を全項目完了に伴い退避。背景・目的・実施した統合の詳細はすべて本ファイルに残す。判断根拠のカテゴライズ分析（IP軸）は正本 [`../.new-contentplan/theory-genre-categorization-ip.md`](../../.new-contentplan/theory-genre-categorization-ip.md) を参照。

---

## 背景・目的

IP・SG両コースの本文執筆を通じて、既存`theory`（用語解説）記事が1記事＝1用語で分散しており、コース側で頻出する用語群を横断してカバーできていないジャンルが複数見つかった。

**目的の再確認（2026-09-15・ユーザー追記）**: 20時間コースの本文中で分からない用語が出た際、読者が外部KW検索（→Wikipedia等）に流出せず自サイト内で完結できるよう、`theory`カテゴリを受け皿として使う設計。しかし現状は1KW=1記事の細切れ構成のため、単にページ数が増えるだけで「それなりのボリュームと必要性」を持つページになっていなかった。これは**AdSense評価（低品質・テンプレ的コピー短文の整理）を上げるための施策でもある**ため、単に新しいまとめ記事を追加するだけでなく、**元の細切れ記事そのものを整理・削減する**ことが目的。IPには純粋なIT用語だけでなくビジネス・マーケティング・ストラテジ系の用語も含まれるため、ジャンル単位でまとめて1ページに統合することで内容の厚み・独自性を担保する。

## 確定した統合方式

1. 対象記事の内容を**全て1ページに統合**（固有の解説・計算式・比較表を漏れなく吸収し、AIプロンプト等の重複箇所は集約）
2. 元記事は**削除**
3. `astro.config.ts`の`redirects`に301リダイレクトを追加（旧URL→統合後URL）。IPA CBT記事統廃合（`archive/article-consolidation/ipa-cbt-2026-cluster-w36.md`）と同じ手法
4. 内部リンク修正（コースの`relatedPosts`・本文中の「深掘り」リンク、他記事からの参照）
5. `pnpm run check:astro`・`pnpm run build`で0エラーを確認

当初「個別記事は残したままリンクを追加するだけ」の非破壊方式で着手したが、ユーザーから目的（AdSense評価向上・低品質細切れ記事の整理）の再確認を受け、上記の完全統合方式に転換した（パイロット実施時の判断）。

## 組織軸の方針（重要な決定事項）

①〜⑤の実施中、統合した9本のうち6本（project-service-management-overview, statistics-mean-variance-probability-sampling, corporate-finance-pl-bs-cf-roi-basics, it-legal-basics-ip-subcontract-contracts, bpr-bpm-business-process-improvement-basics, cloud-saas-paas-iaas-basics）が、IP軸の作業だけで結果的にSGコースからも参照されることが判明。これは知識領域がそもそも「試験ごと」に分かれておらず、各試験が同じ知識の異なる断面を教えているに過ぎないことを示す実証データ。

- **方針**: ジャンルページの組織軸は「頻出KW・トピッククラスタ」に統一し、「資格試験ごと」にはしない。ページのスラッグ・タイトルには資格名を含めない
- **SG側の進め方**: ゼロからのSG軸カテゴライズは行わず、SG各章を既存ハブと突き合わせる**ギャップ分析**とする
- **KW逆引き**: 統合ページ内でH2/H3ごとに個別用語の見出しを維持しているため、逆引き専用の索引ページは不要と判断

## IP軸ジャンル全数カテゴライズ

IPコース8章の`relatedPosts`（確定メンバー）を起点に、theory記事98本（パイロット後）全件を章の「扱う用語」リストと突き合わせ。詳細・統合優先順位は正本 [`theory-genre-categorization-ip.md`](../../.new-contentplan/theory-genre-categorization-ip.md) 参照。主な発見:

- 第7章「データとAI」が最も重複が激しい（確定9本+候補8本=17本、QC七つ道具／統計基礎／データ活用基盤の3クラスタに分解可能）
- 第1章「ビジネス基礎」も大きい（18本、財務諸表クラスタ・法務クラスタに分解）
- 第3章「DX・変革」は受け皿となる既存記事が0本＝統合ではなく新規執筆課題
- リンク漏れ（章本文で用語に触れているのに理論記事が未リンク）を6件発見
- 非IP対象18本・2027年改訂で受け皿が消えた記事6本を識別し、統合スコープから除外

ユーザー承認により、統合優先順位①→⑤の順で着手。

## 実施した統合一覧

### パイロット：① プロジェクト・サービスマネジメント（5本→1本）

IP第4章「サービス・PJマネジメント」とSG第6章「マネジメント」が参照する5記事（WBS・ガントチャート・クリティカルパス・SLA/SLO・ap-project-planning）が完全一致していたことから着手。`src/data/post/theory/project-service-management-overview/` に統合。IPコース第4章・SGコース第6章・`method/ap-hub`・`theory/return-on-investment`のリンクを更新。

### ① 第5章 UI/UX・アクセシビリティ（3本→1本）

`ui-ux-design-diff`＋`accessibility-usability-ui`＋`uiux-accessibility-user-centric-design`を`src/data/post/theory/ui-ux-accessibility-universal-design/`に統合。UI/UX/ユーザビリティ/アクセシビリティ/ユニバーサルデザインの5用語対比表・ユニバーサルデザイン7原則・HCDプロセスで再構成。IPコース第5章を更新。

### ② 第7章 データとAI（3クラスタ、計13本→3本）

- **②-a QC七つ道具**（3本→1本）: `abc-analysis-pareto-chart`＋`characteristic-diagram-fishbone`＋`quality-control-abc-fishbone-scatter`を`src/data/post/theory/qc-seven-tools-abc-fishbone-scatter/`に統合（絞り込み→深掘り→検証の3ステップで再構成）
- **②-b 統計基礎**（6本→1本）: `mean-median-mode-stats`＋`standard-deviation-variance`＋`probability-bayes-basics`＋`bias-and-precision-data`＋`business-math-statistics-average-variance-bayes`＋`sampling-methods-data`を`src/data/post/theory/statistics-mean-variance-probability-sampling/`に統合（真ん中を掴む→バラツキを測る→不確実性を予測する→信頼性を確認するの4軸で再構成）。SGコース第7章からも参照されていたため両側を更新
- **②-c データ活用基盤**（4本→1本）: `data-warehouse-basics`＋`data-mining-kdd`＋`regression-analysis-data`＋`data-profitability-dwh-mining-regression`を`src/data/post/theory/data-warehouse-mining-regression-basics/`に統合（倉庫にためる→法則を見つける→未来を予測するの流れで再構成）
- リンク漏れ是正: `text-mining-nlp`をIPコース第7章に追加
- 元13記事削除・301リダイレクト13件・0エラー確認済み

### ③ 第1章 財務諸表（6本→1本）

`profit-and-loss-statement-pl`＋`balance-sheet-bs`＋`cash-flow-statement-cf`＋`financial-statements-synergy-bs-pl-cf`＋`break-even-point`＋`return-on-investment`を`src/data/post/theory/corporate-finance-pl-bs-cf-roi-basics/`に統合（P/L＝儲け／B/S＝財産／C/F＝現金という3表の役割分担、黒字倒産のメカニズム、損益分岐点の計算式、ROI/TCO/NPV/IRRの投資指標まで1ページで再構成）。IPコース第1章に加えSGコース第7章からも参照されていたため両側を更新。元6記事削除・301リダイレクト6件。

### ④ 第1章 法務（6本→1本）

`intellectual-property-rights`＋`unfair-competition-prevention-act`＋`ai-intellectual-property-copyright-trade-secret`＋`it-legal-subcontract-copyright-labor`＋`subcontract-act-it-dev`＋`system-development-contracts-ses-outsourcing-risk`を`src/data/post/theory/it-legal-basics-ip-subcontract-contracts/`に統合（外部から守る＝知財／内部の秘密を守る＝不正競争防止法／取引の公正さを守る＝下請法／トラブルを防ぐ＝契約形態、の4視点＋生成AI時代の知財リスクで再構成）。想定より参照元が多く、IPコース第1章に加えSGコース第4章（法務）・第2章（セキュリティマネジメント）・第8章（ケーススタディ）、`method/chiteki-zaisan-hub`からも参照されていたため全て更新。元6記事削除・301リダイレクト6件。

### ⑤ 第2章BPR/BPM・第5章クラウド重複

ユーザーから「BPRやSaaSの用語はどこにカテゴライズされている？」という確認があり、当初案（BPR/BPM/SaaSを1本に統合）が不正確だったと判明。実際にはBPR/BPMは第2章「ビジネスモデル・ビジネスプロセス」、SaaS/PaaS/IaaSの技術分類は第5章「クラウド」に属し、無関係な2つの重複クラスタだったため、⑤a・⑤bに分割して実施。

- **⑤a 第2章 BPR/BPM**（3本→1本）: `bpr-process-reengineering`＋`bpm-process-management`＋`business-process-improvement-bpr-bpm-saas`を`src/data/post/theory/bpr-bpm-business-process-improvement-basics/`に統合（改革＝BPR／改善＝BPM の対比で再構成、BPO・RPA・SaaSとの関係も整理）。IPコース第2章（リンク漏れ是正）・SGコース第7章を更新
- **⑤b 第5章 クラウド重複**（2本→1本）: `cloud-service-selection-saas-paas-iaas`＋`saas-paas-iaas-cloud`を`src/data/post/theory/cloud-saas-paas-iaas-basics/`に統合（提供範囲の広さ・共有責任モデル・SaaS-Firstの3軸で再構成）。IPコース第5章・SGコース第5章を更新
- 元5記事削除・301リダイレクト5件

### SGギャップ分析

「SGもIP軸のカテゴライズを再現すべきか」という提起に対し、ゼロからの再カテゴライズではなく、SG全8章のrelatedPosts・本文リンクを既存9本のハブと突き合わせるギャップ分析を実施。①④⑥⑦の各章は既存ハブでカバー済み（追加リンクのみで解消）。新規クラスタ候補2件を特定し、ユーザー承認により両方実施。

- **A ネットワーク・DB基礎**（8本→1本）: `tcp-ip-protocol-suite`＋`osi-reference-model`＋`dns-domain-name-system`＋`http-https-security`＋`cookie-privacy-web`＋`database-normalization`＋`exclusive-control`＋`transaction-acid`（IPコース第6章のリンク漏れだった記事）を`src/data/post/theory/network-database-fundamentals/`に統合。ネットワーク（OSI/TCP-IP→DNS→HTTP/HTTPS・Cookie）とデータベース（正規化→トランザクション・ACID特性・排他制御）の2軸で再構成。IPコース第6章・SGコース第5章を更新
- **B セキュリティ対策・暗号認証**（6本→1本）: `common-key-cryptography`＋`public-key-cryptography`＋`supply-chain-security-vulnerability-management-incident-response`＋`byod-shadow-it-security`＋`remote-work-security-byod-vpn`＋`backup-methods`を`src/data/post/theory/security-controls-crypto-incident-basics/`に統合。通信を守る（暗号技術）／組織で備える（脆弱性管理・インシデント対応）／働き方の穴を塞ぐ（BYOD・シャドーIT対策）／最後の砦（バックアップ）の4層構造で再構成。IPコース第8章、SGコース第1・2・3・8章を更新

### 要検討3本の個別対応

性質が異なる3本を、統合ではなく個別に判断・処理。

- **`bcm-bcp-business-continuity` → リライト**（同一URL維持）: GA4で「表示回数は多いがクリック0」だったSEO課題（`archive/article-consolidation/ipa-cbt-2026-cluster-w36.md` §5で既出）。統合ではなく質の改善が妥当と判断し、ペルソナを「情報システム部門・総務でBCP担当を任された実務者」に限定。冒頭に「担当者が最初にやるべき3ステップ（BIA→RTO/RPO設定→BCP策定・BCM運用）」を新設し、同じ用語を3箇所でほぼ同一文面で説明していた冗長構成を1つに統合
- **`dx-leadership-mvv-digital-divide` → 再設計**（同一URL維持）: MVV単体・デジタルディバイド単体の薄い再解説になっており、それぞれ確定記事（`corporate-mission-mvv`・`digital-divide-basics`）と部分的に重複していた。「DX推進担当者のスキル＋アナログ→デジタルの取捨選択」を主軸に全面再設計。MVV・デジタルディバイドは簡潔な言及＋リンクで深掘り誘導に変更し、代わりにIP第3章「DX・変革」（確定theory記事0本だった新設分野）の語彙（リーンスタートアップ・PoC・デザイン思考・カスタマージャーニーマップ等）を実務スキルの文脈で導入。IP第3章に初めてリンクを獲得
- **`telework-workation-style` → 統合**: セキュリティ側面が強いため`security-controls-crypto-incident-basics`の「BYOD・シャドーIT」節を「テレワーク・BYOD・シャドーITのセキュリティ」に拡張し、テレワークの3分類・ワーケーション・VDIを追加。元記事削除・301リダイレクト1件

## 成果サマリー

- theory記事数: 102本 → 65本（36本統合、うち3本はリライト/再設計/統合で個別処理）
- 統合ハブページ: 11本新規作成
- 301リダイレクト: 累計39件
- `pnpm run check:astro`・`pnpm run build`は各ステップで0エラーを確認

## 未実施・今後の課題

- 統合した記事群のアクセス解析（GA4/GSC）による効果検証（統合前後のセッション数・掲載順位の変化）は次回データ取得時に実施
- 第6章・第8章以外で統合対象から外れた非IP対象18本・2027年改訂で受け皿が消えた記事6本の扱い（削除／draft化／他カテゴリ移動）は未判断
- SG固有のジャンル（ISMS・リスクアセスメント・セキュリティ製品群など、IP軸には現れない領域）の追加カテゴライズは未実施
