---
created: 2026-09-15
updated: 2026-09-15
tags:
  - シラバスハック
  - theory
  - ジャンル別まとめ記事
---

# theory記事のジャンル別カテゴライズ（IP軸・2026-09-15）

> 背景: `.workspace/.task/TODO.md` §3「頻出KWのジャンル別まとめ記事化」。パイロット（プロジェクト・サービスマネジメント）実施後、ユーザーから「IPはIT系資格で広範囲かつジャンルごとに区切られているので最初にカテゴライズしたい」という指示（2026-09-15）を受けて作成。
>
> **原則**: ジャンルの境界は「IPコースが採用しているシラバス中分類の組み合わせ単位＝コース8章」をそのまま使う。各章の`relatedPosts`（コース本文が既にリンクしている記事＝確定メンバー）を起点に、コース本文の「扱う用語」リストと全theory記事102本（パイロットで5本統合済みのため現在98本）のタイトル・タグ・syllabusRefを突き合わせ、各章に属するのに**まだリンクされていない記事**を洗い出した。

## 集計方法

1. `src/data/post/theory/*/index.md` 全98本のfrontmatter（title/tags/syllabusRef/exams）を抽出
2. `src/data/course/ip/0{1-8}-*.mdx` 各章の`relatedPosts`（確定メンバー）と本文中の「扱う用語」リストを取得
3. 確定メンバーに含まれない記事を、各章の「扱う用語」リスト・genreとの内容一致で章に割り当て
4. どの章にも一致しない記事は「非IP対象」「2027年改訂で受け皿が消えた記事」に分類

## 章別ジャンル一覧（確定メンバー数と追加候補）

| # | 章（ジャンル） | 確定（リンク済み） | 追加候補（未リンクだが内容一致） | 合計 |
|---|---|---:|---:|---:|
| 1 | ビジネス基礎（経営・組織論／ガバナンス・監査／ビジネス関連法規／プライバシー法規） | 9 | 9 | 18 |
| 2 | 経営戦略とビジネスモデル・ツール活用 | 11 | 4 | 15 |
| 3 | DXとビジネス変革の考え方 | 0 | 0 | 0（新設分野・受け皿なし） |
| 4 | サービス・プロジェクトマネジメント | **統合済み**（パイロットで1ページ化） | — | — |
| 5 | PC・システムの基礎 | 7 | 3 | 10 |
| 6 | ネットワークとデータベース | 7 | 1 | 8 |
| 7 | データとAI | 9 | 8 | 17 |
| 8 | セキュリティと情報倫理 | 3(theory)+6(trend) | 3 | 6(theory)+6(trend) |

非IP・その他: 18本（他資格専用）／2027年改訂で受け皿が消えた記事: 6本／要検討（複数章にまたがる記事）: 2本

---

## 第1章 ビジネス基礎（18本・**最大の統合候補**）

確定9本: profit-and-loss-statement-pl, balance-sheet-bs, corporate-mission-mvv, corporate-governance, compliance, intellectual-property-rights, unfair-competition-prevention-act, labor-dispatch-act-ses, labor-standards-act-36-agreement

追加候補9本と重複クラスタ:

| クラスタ | 記事 | 備考 |
|---|---|---|
| **財務諸表**（4本） | profit-and-loss-statement-pl（確定）, balance-sheet-bs（確定）, `cash-flow-statement-cf`, `financial-statements-synergy-bs-pl-cf` | C/F単体記事と「3点セット連動」記事が、確定2本と内容重複。章の用語リストに「キャッシュフロー計算書」「損益分岐点」は明記あるが**未リンク＝リンク漏れ** |
| | `break-even-point` | 損益分岐点。ch1本文に明記されているのに未リンク＝リンク漏れ |
| | `return-on-investment` | ROI。ch1の「ROE・ROI・自己資本比率」に対応 |
| **法務**（4本） | intellectual-property-rights（確定）, unfair-competition-prevention-act（確定）, `ai-intellectual-property-copyright-trade-secret`, `it-legal-subcontract-copyright-labor`, `subcontract-act-it-dev`, `system-development-contracts-ses-outsourcing-risk` | 知財・下請法・契約リスクが4本の別記事に分散。特に`it-legal-subcontract-copyright-labor`は下請法/著作権/労働基準法を横断する「ミニまとめ」記事で、他3本と内容がかなり重複 |
| **経営管理** | `csr-sdgs-esg-investment` | ch1本文の用語リストには無いが経営・組織論の分野に該当 |

## 第2章 経営戦略とビジネスモデル・ツール活用（15本）

確定11本: swot-analysis, three-c-analysis, core-competence, value-chain-analysis, balanced-scorecard, ppm-portfolio, product-life-cycle, digital-divide-basics, erp-system-integration, crm-scm-management, just-in-time-jit-kanban

追加候補4本:
- `ansoff-matrix`（アンゾフの成長マトリクス。章の用語リストには無いが経営戦略フレームの一種）
- `bpr-process-reengineering` / `bpm-process-management`（**リンク漏れ**：章本文の用語リストに「BPM／BPR／BPO」と明記されているのに未リンク）
- `business-process-improvement-bpr-bpm-saas`（BPR×BPM×SaaSの横断記事。上記2本＋`saas-paas-iaas-cloud`と内容重複）

## 第3章 DXとビジネス変革の考え方（0本・**新規執筆が必要**）

2027年シラバス新設分野で受け皿となる既存記事が存在しない（`ip-course-curriculum.md`で既知の課題）。`dx-leadership-mvv-digital-divide`はDXリーダーシップを扱うが実際にはMVV（第1章）とデジタルディバイド（第2章、確定済み）の再結合で、本章の用語（デジタルディスラプション・イノベーションのジレンマ・デザイン思考等）とは一致しない。**統合対象ではなく新規執筆課題として別管理する。**

## 第5章 PC・システムの基礎（10本）

確定7本: cpu-memory-functions, storage-hdd-ssd, io-interface-usb-hdmi, bios-device-driver, os-operating-systems, cloud-service-selection-saas-paas-iaas, ui-ux-design-diff

追加候補3本、うち2つは明確な重複クラスタ:
- **UI/UX/アクセシビリティ**（3本）: ui-ux-design-diff（確定）, `accessibility-usability-ui`, `uiux-accessibility-user-centric-design` — 章の用語リスト「UI／UX、ユーザビリティ、アクセシビリティ、ユニバーサルデザインの7原則」を3本の別記事でカバーしている典型的な分散パターン
- **クラウド**: `saas-paas-iaas-cloud` — 確定済みの`cloud-service-selection-saas-paas-iaas`とほぼ同内容

## 第6章 ネットワークとデータベース（8本）

確定7本: tcp-ip-protocol-suite, osi-reference-model, dns-domain-name-system, http-https-security, cookie-privacy-web, database-normalization, exclusive-control

追加候補1本: `transaction-acid`（ACID特性・トランザクション。章の「コミット／ロールバック／デッドロック」と同じデータベース操作の文脈）

## 第7章 データとAI（17本・**重複が最も激しい章**）

確定9本: data-warehouse-basics, data-mining-kdd, regression-analysis-data, mean-median-mode-stats, standard-deviation-variance, abc-analysis-pareto-chart, ml-supervised-unsupervised, deep-learning-basics, prompt-engineering-basics

追加候補8本、3つの重複クラスタに分かれる:

| クラスタ | 記事 | 備考 |
|---|---|---|
| **QC七つ道具**（3本） | abc-analysis-pareto-chart（確定）, `characteristic-diagram-fishbone`, `quality-control-abc-fishbone-scatter` | 章本文「ABC分析（パレート図）／特性要因図／散布図」を3本の別記事＋1本の統合記事（quality-control-abc-fishbone-scatter）が別々にカバー |
| **統計基礎**（5本） | mean-median-mode-stats（確定）, standard-deviation-variance（確定）, `probability-bayes-basics`, `bias-and-precision-data`, `business-math-statistics-average-variance-bayes`, `sampling-methods-data` | 代表値・分散・確率・偏り・サンプリングが分散。特に`business-math-statistics-average-variance-bayes`は確定2本と丸ごと重複 |
| **データ活用基盤**（4本） | data-warehouse-basics（確定）, data-mining-kdd（確定）, regression-analysis-data（確定）, `data-profitability-dwh-mining-regression` | この1本が確定3本の内容をそのまま横断的にまとめ直しただけの重複記事 |
| 単独 | `text-mining-nlp` | 章本文「テキストマイニング」に対応する**リンク漏れ** |

## 第8章 セキュリティと情報倫理（theory 3本+6本trend／追加候補3本）

確定: common-key-cryptography, public-key-cryptography, supply-chain-security-vulnerability-management-incident-response（+trend6本は別カテゴリのため対象外）

追加候補3本（いずれも章の精選済み用語リストには無い、2027年改訂で扱いが縮小した旧v6.5トピック）:
- `byod-shadow-it-security` / `remote-work-security-byod-vpn`（BYOD・シャドーIT・テレワークセキュリティ。旧v6.5では独立節だったが2027年新章には未収録）
- `backup-methods`（バックアップ手法。同様に新章には未収録）

これらは統合の優先度は低い（章の主要フローから外れているため）が、放置するなら`draft`化や他カテゴリへの移動も選択肢。

---

## 要検討（複数章にまたがる・行き場が曖昧な記事）

| 記事 | 内容 | 論点 |
|---|---|---|
| `dx-leadership-mvv-digital-divide` | DXリーダーシップ・MVV・デジタルディバイド | 第1章（MVV）と第2章（デジタルディバイド、確定済み）の内容を再結合しただけで、第3章「DX・変革」の用語とは一致しない。単独記事として残すか、第1・2章それぞれの確定記事に吸収させるか要判断 |
| `bcm-bcp-business-continuity` | BCP・BCM | syllabusRef上は「サービスマネジメント」＝第4章（統合済み）に近いが、ガバナンス・リスク管理の文脈では第1章寄りでもある。GA4上「表示回数トップだがクリック0」の要注意記事（`ipa-cbt-2026-cluster-w36.md` §5で既出）でもあるため、統合よりリライト優先で別途検討 |
| `telework-workation-style` | テレワーク・ワーケーション | 旧v6.5「情報化社会」クラスタ（テレワーク・デジタルディバイド・アクセシビリティ）の生き残り。デジタルディバイド（ch2）・アクセシビリティ（ch5）は既に別クラスタに吸収先があるが、テレワーク単体は2027年新章に明確な受け皿がない |

## 非IP・対象外（18本）

他資格専用（AWS/CCNA/MOS/電験三種/宅建）または資格制度全般（科目免除・受験配慮・試験電卓規定など、特定資格に紐づかない記事）。今回のIP軸カテゴライズの対象外:
aws-concept-metaphor-hack, ccna-routing-protocols, ccna-vlan-stp, mos-exam-format-scoring-basics, mos-excel-function-basics, mos-word-powerpoint-basics, denken3-sennin-teate, hicchi-shikaku-toha, takken-koushin-hiyou, shiken-dentaku-mochikomi-kitei, shikaku-kamoku-menjo-ichiran, shikaku-teate-kazei, shiken-jyuken-hairyo-shinsei, algorithm-search-sort, ap-security-protocols, data-structures-basics, fe-network-basics, fe-os-control

## 2027年改訂で受け皿が消えた記事（6本）

旧v6.5シラバスの「システム開発技術」「基礎理論」に属していたが、2027年新シラバスの26中分類・IPコース8章のいずれにも対応がない（`ip-course-curriculum.md` §5-1で既知の課題「旧『ソフトウェア開発管理技術』『システム開発技術』は新8章のsyllabusRefsいずれにも該当なし」と一致）:
- agile-scrum-basics, v-model-testing-phases, waterfall-development, white-black-box-testing（開発・テスト手法）
- binary-hexadecimal-basics, sets-logical-operations（基礎理論・数値表現）

FE（基本情報技術者）では引き続き出題範囲のため、IPからは切り離しても記事自体の削除は不要。将来FE側のコース展開時に再評価する。

---

## 統合の優先順位（提案）

パイロット（第4章・完了）に続く着手順の推奨。**重複の激しさ（＝AdSense観点での改善インパクト）**と**作業量**のバランスで判断:

1. **第5章 UI/UX/アクセシビリティ**（confirmed1 + 候補2 = 3本→1本）: 最小規模でパイロットの型を再現しやすい
2. **第7章 QC七つ道具**（confirmed1 + 候補2 = 3本→1本）＋**データ活用基盤**（confirmed3 + 候補1 = 4本→1本）＋**統計基礎**（confirmed2 + 候補4 = 6本→1本）: 第7章は3クラスタに分けて統合するのが妥当（1本に全部詰め込むには話題が離れすぎる）。合計13本→3本で最大の削減効果
3. **第1章 財務諸表**（confirmed2 + 候補4 = 6本→1本、リンク漏れ2本の是正も同時に行う）
4. **第1章 法務**（confirmed2 + 候補4 = 6本→1本）
5. **第2章 BPR/BPM/SaaS**（候補3本→1本、リンク漏れ2本の是正）
6. **第6章**（confirmed7+候補1=8本）は重複がなく1本にすると大きくなりすぎるため、統合よりリンク漏れ（transaction-acid）の追加のみで様子見
7. 第8章の3本（BYOD/シャドーIT/バックアップ）は優先度低（統合よりdraft化・移動を検討）

第3章（DX・変革）は統合対象ではなく新規執筆タスクとして別管理。

## 次のアクション

- [ ] 上記優先順位のどこから着手するか、またはSG側の同様のカテゴライズを先に行うかをユーザーに確認
- [ ] 各統合作業は、パイロット（第4章）と同じ手順（全文統合→元記事削除→301リダイレクト→内部リンク修正→ビルド確認）を踏襲
- [ ] リンク漏れ（`break-even-point`, `cash-flow-statement-cf`, `bpr-process-reengineering`, `bpm-process-management`, `text-mining-nlp`, `sampling-methods-data`）は、統合記事を作る際に自動的に解消される
