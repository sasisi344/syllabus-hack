# re-contentで残っているタスクを記録

最終整理: 2026-10-25（第5弾完了）

## 進捗のまとめ

- `wording-list.md` の文言修正: 307記事すべて完了
- 刷新（`[!forAI]` 指示分）: 第1弾47記事・第2弾38記事は完了（2026-10-20〜21）。一覧は `refreshed-list.md`。第3弾（`wording-list.md` に残っていた `> [!forAI]` の記事）もすべて完了（3記事ずつ処理。完了: fp2-cbt-strategy・sg-quiz・30s-career-change・ai-data-career・fe-career-modern-web・ip-survival-strategy・kougyou-koukou-shikaku-ichiran・ses-ap-independence-strategy・fe-pseudo-code-visual-hack・genai-vocabulary-learning-efficiency・guide・itp-10-days-panic-hack・nw-mermaid-hack・st-strategy-brainstorming・boki-zensho-vs-nissho-comparison-hack・cbt-exam-venue-booking-tips・genai-ethics-quiz・sa-llm-agent-design・security-incident-prevention-basics・sg-exam-popularity-step-up・targeted-threat-email・web3-nft・zero-trust-architecture・st-ai-pov-strategy）
- 統合してリダイレクトした記事（`astro.config.ts` の redirects）:
  - `/career/it-passport-to-ap-roadmap/` → `/method/advanced-ipa-hub/`（第2弾で ap-hub を統合したため転送先を変更）
  - `/method/it-passport-study-route-comparison/` → `/method/itp-hub/`
  - `/career/backoffice-sg-strategy/` → `/career/backoffice-sg-career-hack/`
  - `/career/itp-non-engineer-career-strategy/` → `/method/itp-hub/`
  - `/method/genai-problem-mastery-notebooklm/` → `/method/notebooklm-ip-study-hack/`
  - `/method/tablet-study-guide/` → `/method/multi-device-cert-study/`（第2弾、2026-10-21）
  - 第2弾（2026-10-21）:
    - `/method/mos-ai-shortcut/`・`/theory/mos-exam-format-scoring-basics/` → `/method/mos-hub/`
    - `/method/ap-hub/`・`/method/level4-strategy-hub/`・`/career/gateway-to-advanced/` → `/method/advanced-ipa-hub/`
    - `/method/ccna-ai-hack/`・`/method/ccna-fail-comeback/` → `/method/ccna-hub/`
    - `/trend/lpic-ccna-aws-order/` → `/method/aws-hub/`
    - `/trend/fp-why-2kyu-is-standard/`・`/career/fp2-jukendekaku-junbi-roadmap/` → `/method/fp-hub/`
  - 第3弾（2026-10-21）: `/trend/zero-trust-architecture/` → `/theory/security-controls-crypto-incident-basics/`、`/trend/st-ai-pov-strategy/` → `/method/advanced-ipa-hub/`
  - 第3弾（2026-10-21）: `/trend/targeted-threat-email/`・`/trend/sg-exam-popularity-step-up/` → `/trend/security-incident-prevention-basics/`
  - 第3弾（2026-10-21）: `/method/st-strategy-brainstorming/` → `/method/advanced-ipa-hub/`（`/trend/st-ai-pov-strategy/` を統合するときも、同じハブのST節に寄せる）
  - 第3弾（2026-10-21）: `/method/itp-10-days-panic-hack/` → `/method/exam-final-10-days/`（新規スラッグ。既存の `/final-checkpoint-100-plus/` 系のリダイレクトも付け替え済み）
  - 第3弾（2026-10-21）: `/career/ses-ap-independence-strategy/` → `/career/ses-ap-strategy/`、`/method/fe-pseudo-code-visual-hack/` → `/method/fe-algorithm-roadmap/`
  - 第3弾（2026-10-21）: `/career/ip-survival-strategy/` → `/method/itp-hub/`
  - 第3弾（2026-10-21）: `/trend/fp2-cbt-strategy/` → `/method/fp-hub/`（FPの20時間コースを作ったら、fp-hub の「不合格だったとき」節からリンクする）
    - `/app/genai-trend-quiz/` → `/app/genai-ethics-quiz/`（アプリのコード `src/apps/genai-trend-quiz/` は残し、統合先のページで表示）
    - `/trend/agile-development/`・`/trend/scrum-agile/` → `/theory/agile-scrum-basics/`
    - `/trend/reskilling-it-passport/` → `/theory/reskilling-basics/`（新規作成）
    - `/career/biru-kanri-jitsumu-keiken-roadmap/` → `/method/biru-kanri-hub/`
    - `/trend/fe-certification-value-debate/` → `/method/fe-hub/`（競合が強いため単独の刷新はせず、fe-hub に「意味がないことはない」節を置いた）
- 統合したがページは残した記事: `/app/flashcard-app/`（用語ノートの説明を `/method/notebooklm-features-guide/` へ移し、アプリのページから案内）

## 第2弾の刷新（2026-10-21〜）

- [x] 38件すべてを刷新・統合（`refreshed-list.md` の一覧末尾）
- [x] 統合先だけ刷新し、統合元はまだ残している記事（統合元の `[!forAI]` を処理するときに、内容の移動・リダイレクト・記事削除を行う）
  - `/method/advanced-ipa-hub/` ← `/method/level4-strategy-hub/`・`/method/ap-hub/`・`/career/gateway-to-advanced/`
  - `/method/mos-hub/` ← `/method/mos-ai-shortcut/`・`/theory/mos-exam-format-scoring-basics/`

## 第4弾の刷新（2026-10-25）

- [x] `wording-list.md` に書き足されていた `[!forAI]` 18件を処理（一覧は `refreshed-list.md` 末尾）
  - 統合: `/career/liberal-arts-it-strategy-aichi/` → `/career/regional-salary-qualification-correlation/`、`/method/mos-excel-expert-difficulty/` → `/method/mos-hub/`、ITパスポートの分野別ドリル3本 → `/app/ip-field-drill/`（新規）
  - 排除: `/method/ai-problem-master-syllabus/`・`/method/cbt-exam-tactics/` → `/method/itp-hub/` へ転送
  - 刷新: sg-subject-b-quiz・portfolio-vs-cert・ap-grader-intent-hack・boki2kyuu-tsugi-shikaku・miss-note-db・notebooklm-ip-study-hack・practice-guide-ipa・sg-news-study-hack・sql-join-visual-ai-hack・st-no-experience-essay-hack・syllabus-diff-hack・zaigakuchuu-takken-itsu-ukeru
- [ ] 筆者の確認待ち
  - `/career/portfolio-vs-cert/`: 採用担当の声3タイプ（マニュアル型・個人判断型・情報通型）は筆者の提供内容を反映済み。追加の取材や出典があれば、各タイプに追記する
  - `/career/regional-salary-qualification-correlation/`: 年収表・資格保有者の待遇差の表は旧記事の数値（出典は「編集部作成」）をそのまま残している。根拠の確認が必要
  - `/app/sg-subject-b-quiz/`: 12問は新規に書き下ろした架空の事例。内容（特に個人情報保護法まわりの記述）は公式資料での確認が必要。旧問題のうちMFA・シャドーIT・CIAの3問は削除した
  - `/method/sql-join-visual-ai-hack/`: 「統合も考える」の指示に対し、別記事のまま残してDS検定hubから案内する形にした。統合する場合は `/method/ds-kentei-hub/` へ

## 未着手の実装（第3弾で保留）

- [ ] 生成AI用語データベースの中身と、定期調査のフィード（`/app/genai-ethics-quiz/` の `[!forAI]` の後半）: 型は作成済み（`.workspace/data-set/genai-terms-db/` の `schema.json`・空の `terms.json`・`README.md`、2026-10-21）。未実施は、実際に調べて一次情報で確認した用語を入れることと、ClaudeやChatGPTのスケジュール機能での定期実行の設定。人の確認を挟む前提で、小さく始めること

## ITパスポート（ip）関連

### 完了済み

- [x] `/method/smartphone-study-guide/` を刷新（スキマ時間の長さ別の構成。2026-10-20、`4c005c8`）
- [x] 上記への被リンク 11ファイル・12か所の文言を新タイトルに統一（同上）
- [x] `/method/itp-hub/` のFAQ「PCが必要なのは申し込み時のCBTS登録のみ」を修正（同上）
- [x] まとめて行う作業1：`/method/itp-hub/` を「ITパスポート 合格ロードマップ｜AI時代に最初の一手としてこれを選ぶ理由」に改題し、被リンクの「ITパスポート完全攻略ガイド」「ITパスポート最短合格ロードマップ」を一括置換（残り0件）
- [x] まとめて行う作業2：タイトルに訴求語を含む6記事の対応
  - `/career/it-passport-to-ap-roadmap/`・`/method/it-passport-study-route-comparison/`：統合してリダイレクト
  - `/method/fast-track-roadmap-20h-pass/`・`/career/itp-high-school-resume-hack/`・`/trend/reskilling-it-passport/`：改題済み
  - `/method/ip-discard-strategy/`：改題済み。ただし現タイトルに「最短」が残る（「ITパスポートを社会人が最短で取る捨て問戦略｜…」）。GSCでCTRが高い記事のため、残すかどうかは要判断
- [x] まとめて行う作業3（一部）：見出し `【AIハック】生成AIで最速暗記` の一括置換（残り0件）
- [x] 記事ごとに直す作業：合格を約束する文言（A）を含む記事 10件（統合・刷新・文言修正で対応済み。2026-10-21時点でAの語は否定文の2か所のみ）

### 残っている作業

- [ ] まとめて行う作業3の残り：trend 用語記事の定型文の一括置換
  - `合格へのヒント` と `合格への鍵` が 22ファイルに残る（trend 用語記事が中心。ほかに `method/ccna-fail-comeback`・`method/fe-subject-b-drill`・`method/st-strategy-brainstorming`・theory 3件）
  - 言い換えを決める（例: 「試験で問われるポイント」）→ 一括置換 → 各ファイルの `lastmod` を更新
- [ ] `/method/ip-discard-strategy/` のタイトルの「最短」を残すか決める

## サイト全体の残り（2026-10-21 時点の再集計）

`wording-list.md` の作成時には対象外だった、または修正後に残った語。多くは文脈上問題ない用法（例: 「最短翌日から受験可能」）を含むため、件数は目安。

| 語 | 該当箇所 | ファイル数 |
| --- | :---: | :---: |
| 合格への | 51 | 47 |
| 最短 | 17 | 13 |
| 確実に | 11 | 10 |
| 圧倒的 | 3 | 3 |
| 最速 | 1 | 1 |
| 完全攻略・完全ガイド・攻略法 | 0 | 0 |

- [ ] 上の残りを見て、直すものと残すものを決める（再集計: `grep -rnE "合格への|最短|確実に|圧倒的|最速" src/data/post src/data/course`）

### 進め方のメモ

- 被リンクの洗い出し: `git grep -n "](/{category}/{slug}/)" -- src/data`
- 文言を変えたファイルは、リンク文言だけの変更でも `lastmod` を更新する
- 記事を統合するときは、統合先へ内容を移し、`astro.config.ts` の redirects に旧URLを追加してから記事ファイルを削除する
- `extract_wording.py` を再実行すると `wording-list.md` を上書きし、チェック欄も初期化される。再集計は上の grep で行う

## 第5弾の統合と刷新（2026-10-25）

`next-plan.md` の案に沿って、近似する記事を統合先へ集約した。削除した記事は110本。旧URLは `astro.config.ts` の redirects で統合先へ転送している。

### 統合した内容（統合先ごとの要約）

- 危険物乙4と電験三種の手当記事は資格手当の相場一覧に統合
- SES×APの地域別3本と、応用情報の合格後の活用は ses-ap-strategy に統合
- 広島・静岡のバックオフィス×SG記事は backoffice-sg-career-hack に統合
- 福岡編と地方事務職の記事は地域別年収の記事に統合
- 高度試験の市場価値と報奨金の交渉は IPA資格と年収の記事に統合
- 基本情報の会社命令・フリーランス・非エンジニア向けの記事は fe-engineer-foundation に統合
- 「ITパスポートは恥ずかしい」の2本を itp-shameful-career-hack に統合
- 文系学生の新卒戦略は liberal-arts-it-strategy に統合
- CCNAのキャリア・新卒就活の記事は ccna-hub に統合
- 3C分析とコアコンピタンスは SWOT分析の記事に統合（環境分析と自社の強みを1ページに）
- PPMとアンゾフの成長マトリクスは product-life-cycle に統合（製品と事業の戦略を1ページに）
- コーポレートガバナンス・コンプライアンス・GXは CSR・SDGs・ESG投資の記事に統合（企業の責任の用語を1ページに）
- CRM・SCMとインボイス制度は ERP の記事に統合（業務システムと法対応を1ページに）
- ストレージ(HDD/SSD)は CPU・メモリの記事に統合（ハードウェア基礎を1ページに）
- OS制御（タスク管理・割込み・仮想記憶）は OS の記事に統合
- FE向けTCP/IP・サブネットと5Gは network-database-fundamentals に統合
- ウォーターフォール・DevOps・OODAループは agile-scrum-basics に統合（開発手法の用語を1ページに）
- V字モデルは white-black-box-testing に統合（テスト手法と工程を1ページに）
- 集合と論理演算は 2進数・16進数の記事に統合（数の表現と条件判断を1ページに）
- データ構造(スタック・キュー・木)は algorithm-search-sort に統合
- TLS・IPsec・認証プロトコル(応用情報)は security-controls-crypto-incident-basics に統合
- ディープラーニング基礎は ml-supervised-unsupervised に統合
- エクセルアレルギー対処は mos-excel-function-basics に統合
- MOS Word・PowerPoint基礎は mos-hub に統合
- ルーティングプロトコル(OSPF/EIGRP/RIP)は ccna-vlan-stp に統合（CCNAの主要2領域を1ページに）
- ハルシネーション・マルチモーダル・RAG・XAI・AIアシスタント・MLOps は generative-ai-terms-basics に統合
- AI生成物の著作権・AI倫理・オプトアウト・ディープフェイクは ai-law-ethics-basics に統合
- 多要素認証・SQLインジェクション・XSS・ランサムウェアは cyber-attack-countermeasures-basics に統合
- DE&Iと人的資本報告(ISO 30414)は human-capital-management に統合
- DX(デジタルトランスフォーメーション)の定義は dx-leadership-mvv-digital-divide に統合
- AP午後・NW過去問・PM午後Ⅱ・SCの記述対策は ap-pm-descriptive-ai-prompts に統合
- FE科目Bのドリル・Python変換・擬似言語入門は ai-prompt-hub と algorithm-roadmap に統合
- NotebookLMの他AI連携とPDF変換手順は notebooklm-features-guide に統合
- IPAシラバス変更の追随は syllabus-diff-hack に統合
- IPA試験の最新動向・2027年再編・年代別の狙い目は ipa-2027-restructuring に統合
- 科学的な学習法の3記事を scientific-study-methods に集約
- イーロン・マスクの知識の木は 20hours-method-reason に統合
- 試験当日のコンディションと欠席時の報告は exam-final-10-days に統合
- 不正解の選択肢の解剖は miss-note-db に統合
- AI家庭教師の使い方は ai-mentor-study-method-roadmap に統合
- マネジメント系長文の読み方は ip-strategy-ai-hack に統合
- 音声アウトプット学習は generative-memory-palace に統合
- ベクトル検索とAIプロジェクト品質管理は advanced-ipa-hub に統合
- リスキリングの記事5本は theory/reskilling-basics に統合
- 生成AI系資格の価値は genai-passport-vs-it-passport に統合
- ボイラー技士の引っ掛け問題対策は boiler-refrigeration-hub に統合
- 危険物乙4の1週間プランは kiken-butsu-hub に統合
- 知財検定2級の実技対策は chiteki-zaisan-hub に統合
- 消防設備士乙6の不合格診断は shobo-setsubi-hub に統合
- 学生向けのビル管理系資格は biru-kanri-hub に統合
- TOEICのシャドーイングと昇進要件は toeic-hub に統合
- FP2級のタックス計算・シミュレーター・知識目的・実技の団体比較は fp-hub に統合
- 宅建の民法AI記憶術は takken-hub に統合
- 簿記の仕訳ドリルと経理キャリアは boki-hub に統合
- 土木施工管理の実務経験の積み方は doboku-sekou-hub に統合
- G検定の数学・統計とシラバス動向は g-kentei-hub に統合
- DS検定の概要は ds-kentei-hub に統合
- 経営層向けのセキュリティ投資の判断は security-incident-prevention-basics に統合
- SGの『意味がない』という声への答えは sg-hub に統合

### アクセス上位の刷新（公式情報で確認したもの）

| URL | 対応 |
| --- | --- |
| `/trend/ipa-2026-cbt-schedule-guide/` | IPA公式（2026年9月17日更新）の日程と照合。タイトルを「受付開始」から「前期はAPが11月7日まで」に変更し、高度・SCの締切済みを反映 |
| `/trend/ccna-vs-aws-saa/` | Cisco・AWS公式で試験時間と受験料（300 USD／150 USD）を確認し、記事に反映 |
| `/trend/mos-vs-itp-job-hunting/` | MOSの受験料を公式で確認（一般レベル12,980円・Wordの例）。採用での見られ方は会社と担当者で変わる、と補足 |
| `/method/doboku-sekou-hub/` | 合格率の数値（出典なし）を削除し、JCTCの公式資料で確認する形に変更。実務経験の積み方を統合 |
| `/app/ap-subject-b/` | IPA公式で科目Bの形式（150分・11問中5問）と日程を確認し、試験制度が2026年度で終了する予定を追記 |
| `/method/notebooklm-features-guide/` | ノートブック数・ソース数を公式ヘルプで確認。1日の上限は9月時点の記載と明記 |
| `/theory/takken-koushin-hiyou/` | 交付申請手数料4,500円を県の案内で確認。合格後1年以内は講習不要の点を追記 |
| `/career/shikaku-teate-soba-ichiran/` | 第1弾で拡充済み。今回は手を入れていない |
| `/method/kikai-hozen-ginoushi-dokugaku/` | 特級の存在と、等級ごとの実務経験要件の確認先を追記 |
| `/trend/fintech-it-cert-intro/` | 級構成が変わる可能性（中級の報道）と、受験料が未確認である点を明記 |

### 著者の判断で保留にしたもの

- D13: `ai-driven-architecture-hack` と `dev-doc-process-mvp` は著者の指示で統合せず、それぞれ刷新した（技術構成の記事と、開発記の入口の記事に役割を分けた）。Preactの採用などリポジトリで確認できる事実に直した。開発ツールはAntigravityから始め、現在はCursorとClaude Code（著者の確認済み）。開発記4本には、当時と現在でツールが違う旨の注記を追加した
- `bcm-bcp-business-continuity` は現状のまま
- `/trend/fintech-it-cert-intro/` の受験料は、著者の確認（一般8,800円・会員5,280円、いずれも税込10%）を反映した
- `/trend/security-incident-prevention-basics/` に移した警察庁・IPA・経産省の数字は、元記事の出典をそのまま引き継いでいる。公開前に一次資料での再確認が望ましい
