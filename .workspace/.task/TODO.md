# Task Management

> 基本方針: **「生成AI × 資格試験」** を軸に外れない。ロングテール・長文・AI検索対応を3本柱にする。
> **本ファイルが全タスクの正本**。`priority-roadmap-todo.md` / `categories-list-check.md` / `nextsiken.md` / `restructure-plan-2026-06.md` 等は分析・背景資料として残すが、実行管理（チェックボックス）はここに集約する（2026-06-19 集約）。完了済み項目はコメントアウトして履歴として残す。

---

## 統合タスクリスト（2026-06-19 各ファイルから集約）

### A. カテゴリ整合性チェック残タスク（出典: `categories-list-check.md` 2026-06-18）

- [ ] B-1: `career/itp-high-school-resume-hack` の `category` を `theory`→`career` に修正、`knowledge.type` も `career` に揃える
- [ ] A: trend 8件（dx-digital-transformation, explainable-ai-xai, mlops, ooda-loop, prompt-engineering-basics(trend版), rag-ai-system, sql-injection-vulnerability, zero-trust-architecture）に `knowledge.type: theory` を追加
- [ ] B: `index-articles.js` の正規表現を `^---\s*\r?\n` に修正（末尾スペース付き`--- `のdraft 10件が未計上）＋ `.agents/category_rules.md` に theory/app の分類定義を追記
- [ ] B: app記事18件（appIdなし・MDX importのみ）への `appId` 順次追加（緊急度は低）
- [ ] C: `restructure-plan-2026-06.md` の件数スナップショット（method/theory/trend/career/app）を最新値に更新

<!-- 完了済み -->
<!-- - [x] B-2: prompt-engineering-basics 重複解消（2026-06-18対応済み、trend版削除・theory版に統合、301リダイレクト設定済み） -->
<!-- - [x] 課題A: Uncategorized 6件修正（2026-06-10対応済み、新規発生なし） -->

### B. IPA Theory拡張 残タスク（出典: `priority-roadmap-todo.md` Phase1）

- [ ] FE theory: OS制御
- [ ] FE theory: ネットワーク基礎
- [ ] AP theory: セキュリティプロトコル詳解
- [ ] AP theory: プロジェクト計画立案

<!-- - [x] FE theory: アルゴリズム・データ構造（data-structures-basics, algorithm-search-sort） -->
<!-- - [x] AP theory: DBスキーマ設計（database-normalization） -->
<!-- - [x] Uncategorized 6件のカテゴリ修正（2026-06-10対応済み） -->
<!-- - [x] 既存Hub記事のリンク強化（itp/fe/ap他、全17クラスターで2026-06-10対応済み） -->

### C. 横展開資格クラスター スポーク仕上げ（出典: `priority-roadmap-todo.md` Phase2 / `nextsiken.md` ギャップ3）

> `nextsiken.md` の指摘: Hubだけ作って終わりのクラスターが複数あり、新規クラスター開拓より**ここを完走させる方が内部リンク構造とSEO評価が先に積み上がる**。優先度SS級。

- [ ] 日商簿記2・3級: Method記事×2（仕訳暗記ハック等）、Career記事×1
- [ ] MOS: Theory記事×3、Method記事追加×1〜2（現状 `mos-ai-shortcut` のみ）
- [ ] G検定: Method記事×2、Trend記事×1
- [ ] 宅建: Method記事×2（法律×AIメモリーハック角度）
- [ ] TOEIC: Hub新設（`method/toeic-hub`想定。着手前に `exam-id-catalog.md` へexamId追加必須）、Method記事×1（AI音声活用角度）※優先度は判断待ち→J参照

<!-- - [x] 日商簿記 Hub（method/boki-hub） -->
<!-- - [x] MOS Hub（method/mos-hub） -->
<!-- - [x] MOS Career×3（mos-back-office-expert-independence / mos-freelance-haken-reality / mos-instructor-school-path） -->
<!-- - [x] G検定 Hub（method/g-kentei-hub） -->
<!-- - [x] 宅建 Hub（method/takken-hub） -->

### D. 波3クラスター（電験三種・危険物・ビル管理・土木施工管理）インフラ整備（出典: `nextsiken.md` ギャップ2）

- [ ] `cert-keyword-db/denken-kw-db.md` 等、波3クラスター4資格分のKW-DBを新設（KW Pattern Research スキル `.agents/kw_pattern_research.md` を使用）。新設時に「学生でも可／社会人向け」区分列も記録
- [ ] `restructure-plan-2026-06.md` の充足率表に波3クラスターの行を追加（計画と実態を同期）
- [ ] `biru-kanri` Hub内のサブ資格別スポーク分離（マンション管理士・エネルギー管理士＝学生でも可 / ビル管理士＝実務2年必須で訴求を分ける）
- [ ] 波3クラスター（電験三種・危険物・ビル管理・土木施工管理）に最低1本ずつスポーク追加（Hub単独状態の解消）

### E. Negative-Narrative型の横展開移植（出典: `nextsiken.md` ギャップ1、新規リサーチ不要・既存型の転用のみで優先度SS級）

- [ ] 簿記: 「仕訳 覚えられない 心が折れる」「工業簿記 原価計算 意味不明」系記事
- [ ] 宅建: 「権利関係 民法 何も頭に入らない」「宅建業法 暗記量 心折れる」系記事
- [ ] MOS: 「関数 覚えられない エクセル アレルギー」系記事
- [ ] FP: 「タックスプランニング 計算 心折れる」系記事
- [ ] 学生でも可クラスター（簿記・宅建・MOS・G検定等）に認知形成型記事（`itp-vs-info1-comparison-hack`型の移植）を1本ずつ追加

### F. Appクラスターの非IPA展開（出典: `nextsiken.md` ギャップ4 / `restructure-plan-2026-06.md` 課題D）

- [ ] 日商簿記3級 仕訳ドリル
- [ ] 宅建 権利関係 一問一答
- [ ] G検定 模擬試験シミュレーター
- [ ] FP2級 計算問題ドリル
- [ ] AWS資格診断アプリ（`app/aws-cert-diagnosis`、出典: `research-kw-non-ipa.md` forAI注釈。詳細は本ファイル下部「research-kw-non-ipa.md の forAI注釈から起票」参照）

### G. 知財・ボイラー等の横展開（出典: `query-research/資格クエリリサーチ.md`。リサーチ済み・Hub未着手）

- [ ] 知的財産管理技能士 Hub
- [ ] ボイラー技士・冷凍機械責任者 クラスターHub
- [ ] 建設機械施工管理技士 記事化検討
- [ ] ビジネス著作権検定 記事化検討
- [ ] 消防設備士・消防設備点検資格者 記事化検討
- [ ] 講師になりたい場合の資格（登録日本語教員・職業訓練指導員・研修講師認定制度）記事企画
- [ ] 金融IT検定の記事化検討（中級者向け、未経験者の取得意義を要確認。詳細は下部「未登録資格を探す」参照）

<!-- - [x] FP（ファイナンシャルプランナー）Hub（method/fp-hub、2026-05-31作成済み。旧チェック漏れを修正） -->
<!-- - [x] 会社のセキュリティ担当を今から用意するなら（career/sg-company-security-roadmap 作成済み） -->
<!-- - [x] 電験三種 Hub（method/denken-hub） -->
<!-- - [x] 危険物取扱者（乙4） Hub（method/kiken-butsu-hub） -->
<!-- - [x] ビル管理クラスターHub（biru-kanri-hub） -->
<!-- - [x] 土木施工管理技士 Hub（doboku-sekou-hub） -->

### H. 条件未達成者向け準備記事（出典: `nextsiken.md`、サイト全体で未着手の記事タイプ）

- [ ] FP2級・ビル管理士・土木施工管理技士で「受験資格を満たすまでの準備ロードマップ」記事を1本ずつ

### I. 短記事リライト候補（出典: `task-results/rewrite-priority.md` 2026-06-03生成）

- [ ] 優先度A: `method/agent-teacher` / `trend/fp2-jitsuki-comparison` / `trend/ccna-vs-aws-saa` を6000字超に拡張
- [ ] 優先度B: `method/nw-mermaid-hack` / `method/ap-discard-strategy` / `method/pomodoro-anki-technique` / `career/backoffice-sg-career-hack`
- [ ] 優先度C: `method/genai-cert-study-plan` / `career/ses-ap-strategy` / `method/wrong-choice-analysis-hack`

<!-- - [x]（要再確認）method/cbt-2026-syllabus-complete-guide: 優先度A対象だったがW25でタイトル・meta description・本文タイピング対策セクションを追加済み。文字数6000字超の最終確認は未検証 -->

### J. 判断待ち・優先度再検討項目（出典: `nextsiken.md` 優先度B）

- [ ] TOEIC着手の再検討（波3完走後に優先度再評価でよいか判断）
- [ ] FP・AWSのexamId独立（現状`common`のまま、専用examId化を検討）

### K. GSC効果検証（W26データ取得後、出典: `w25-actionplan/act-review-w26.md`）

- [ ] nw-mermaid-hackの表示回数・順位確認（act-4・act-5の効果検証。Top5以内に改善しなければNWクラスター拡充候補3案から着手）
- [ ] cbt-2026-syllabus-complete-guideのCTR・順位再確認（2回目改善後の変化確認）
- [ ] sg-beginner-roadmapの「次の一歩」CTA効果検証・GA4内訳確認（カテゴリ別5行分散の原因特定。分散が確認されたら統合・リダイレクト計画作成）

---

## 未登録資格を探す

より広く資格記事を作成するために、[exam-id-catalog.md]に未登録の資格id候補をリストアップ。
知財権・FPは優先的に広く記事を作成したい。

### 金融IT検定

https://prtimes.jp/main/html/rd/p/000000007.000135952.html
金融IT検定があるらしい。PRTIMESでは「中級」を紹介している。
金融専門の技術になるだろうから、積極的に学ぶ意義があるかどうか。金融業界にいる、IT導入の検討、スキルの証明などを主体にするなら取得したいところ。
だが、未経験で取得するために学ぶ必要があるかどうか。例えば学生の時点で「将来は金融業界に入りたい」と考えている人は取得することができるのか。金融×ITのケースで学ぶ必要があるだろうから、業界に入る前に学ぶなら予習にはなるけど、汎用的なスキルなのかどうかが疑問になる。

汎用的ならいつでも誰でも挑戦可能であるべきだが、金融業界に何年在籍したとか基礎前提かつ「昇進試験代わり」みたいな感じなら一般の取得は難しい。そこの塩梅を調べつつ、こんな資格もあるよと紹介する感じにするべきかなと。

## 競合サイト

[導入事例からIT製品・サービスを探す｜キーマンズネット](https://kn.itmedia.co.jp/)
キーマンズネットの構成。うちの対抗となる。

---

## 週報PDCA部分（W25は完了）

### 4. GSC 4-Box分析（ページ／クエリ単位）
| 区分 | ページ／クエリ例 | 表示回数 | 順位 | CTR | 改善アクション |
| --- | --- | --- | --- | --- | --- |
| 🟢 最高優先（高順位×高CTR） | /method/nw-mermaid-hack/ | 5 | 約4.8 | 約40.0% | 内部導線強化 |
| 🟠 優先A（高順位×低CTR） | （該当なし：順位5以内×低CTRのページが無い） | - | - | - | タイトル/説明文改善 |
| 🟡 優先B（低順位×高CTR） | （該当なし：表示5以上×低順位×高CTRのページが無い） | - | - | - | 上位化施策（被リンク等） |
| 🔴 後回し（低順位×低CTR） | /method/cbt-2026-syllabus-complete-guide/ | 40 | 約9.33 | 約2.5% | リライト/内容刷新を検討 |
| ⚪ 未クリック高順位（CTR0%） | （該当なし：順位5以内×CTR0%のページが無い） | - | - | - | タイトル即時改善 |

### Do（実施施策）
- [[06-W24]]で提示したアクションプランを実施済み：`/method/cbt-2026-syllabus-complete-guide/`のタイトル・meta description改善、`/trend/ipa-2026-cbt-schedule-guide/`のリライト、新規記事公開・SNS発信の再開を実施

### Check（前週からの改善・要因仮説）
- 数値変化: ユーザー数8→19（+137.5%）、PV 22→29（+31.8%）、CTR 約1.5%→約5.4%（+258.7%）、平均滞在時間 約223.8秒→約108秒（-51.7%）、直帰率 約54.5%→約57.9%（+6.2%）、掲載順位 約12.9→約11.0（-15.0%、改善）
- 推定要因（LP/ページのどれに起因？）: 全行が新規セグメントで、リピーターPVは0。UU・PV・CTR・掲載順位はいずれも改善方向だが、平均滞在時間は-51.7%と大幅減少、直帰率も+6.2%とやや悪化。流入は増えたが1ページあたりの読み込み深度は浅くなっている可能性
- ⚠️ `/method/sg-beginner-roadmap/`はカテゴリ別に5行（PV合計11）に分散しており、うち1行（"Category 'theory'"）の滞在時間1529秒が極端な外れ値となっているため、平均滞在時間573.8秒は参考値に留める

### Act（次週のToDo・優先度つき）— W25完了 ✅

> 実施詳細は `.workspace/.task/w25-actionplan/act-achieve.md` に集約。
> W26データ取得後のレビュー項目は上記「統合タスクリスト K」（出典 `.workspace/.task/w25-actionplan/act-review-w26.md`）を参照。

<!-- - [x] `/method/nw-mermaid-hack/`（表示5・順位4.8・CTR40.0%）は僅差で高順位（5位以内）に届いていないため、内部リンク強化で押し上げを狙う -->
<!-- - [x] `/method/cbt-2026-syllabus-complete-guide/`（表示40・順位9.33・CTR2.5%）はタイトル・meta descriptionを見直しCTR改善を図る -->
<!-- - [x] `/method/sg-beginner-roadmap/`（カテゴリ別5行・PV合計11）の構成を1ページに統合するなど導線を見直す -->
<!-- - [x] `/method/nw-mermaid-hack/`への内部リンクを`career/advanced-ipa-certification-high-salary-impact`から追加 -->
<!-- - [x] `/method/nw-mermaid-hack/`への内部リンクを`method/vision-to-mermaid-hack`・`theory/aws-concept-metaphor-hack`から追加 -->
<!-- - [x] `/method/cbt-2026-syllabus-complete-guide/`の本文に「タイピング練習方法」の具体的ステップ・チェックリストセクションを追加（CTR2.5%が改善しない場合の本文刷新） -->
<!-- - [x] NWトピッククラスター拡充: nw-mermaid-hackをハブとした続編記事（科目B過去問演習等）を新規作成（着手判断はW26レビュー後） -->
<!-- - [x] 新規記事のtoc標準化・冒頭「結論先出し」導入で読了質改善（直帰率+6.2%・滞在時間-51.7%対策） -->
<!-- - [x] `/method/sg-beginner-roadmap/`の「次の一歩」リンク（sg-quiz / sg-subject-b-quiz等）の文脈・配置を見直す -->

---

## 議題：06-W24 Do施策の実行価値レビュー & 改善コンテンツ追加案（06-W25）

> 本議題で提示された改善案は上記「統合タスクリスト K」のGSC効果検証タスクに統合済み。以下は当時の分析記録として保持。

### 1. Do施策の実行価値レビュー

| 施策 | 実施状況 | 効果の評価 |
| --- | --- | --- |
| `cbt-2026-syllabus-complete-guide` のタイトル・meta description改善 | ✅ 実施済み（lastmod 2026-06-10、タイトルに「タイピング対策」等を追加） | ⚠️ 限定的。改善後も4-Box分析で🔴後回し（表示40・順位9.33・CTR2.5%）のまま。タイトル変更だけでは検索意図とのギャップを埋め切れていない可能性。本文側の「タイピング対策」section強化など、コンテンツ自体のリライトが次の一手 |
| `ipa-2026-cbt-schedule-guide` のリライト | ✅ 実施済み | 🟢 寄与度高い。Check欄の全体CTR改善（約1.5%→約5.4%、+258.7%）はCBT関連クエリの表示回数が多い本ページのリライトが主因と推測される。継続して様子見でOK |
| 新規記事公開・SNS発信の再開 | ✅ 実施済み | 🟡 両義的。UU/PV増加（+137.5%/+31.8%）には貢献したが、平均滞在時間-51.7%・直帰率+6.2%という副作用も発生。新規流入の「読了質」を高める導線設計が課題 |
| `/method/nw-mermaid-hack/` の内部リンク強化 | ✅ 実施済み（2026-06-10） | 効果検証は統合タスクリストK参照 |

### 2. 改善コンテンツ追加案（新規議題）

- **nw-mermaid-hackへの内部リンク追加**: 関連性の高い以下記事から自然な文脈でリンクを追加し、被リンク数を増やして5位以内への押し上げを狙う
  - `career/advanced-ipa-certification-high-salary-impact`（高度試験＝NW含むキャリア記事）
  - `method/vision-to-mermaid-hack` / `theory/aws-concept-metaphor-hack`（Mermaid図解ハック系の関連トピック）
- **cbt-2026-syllabus-complete-guideの本文刷新**: タイトル改善のみではCTR改善が頭打ちのため、「タイピング練習方法」の具体的ステップや、IPA公式情報へのリンク・チェックリスト形式のセクションを追加し検索意図にさらに応える。CBT対策アプリ（既存クイズアプリ等）への内部リンクも検討
- **NWトピッククラスターの拡充**: nw-mermaid-hackをハブ記事として、NW試験の科目B過去問演習やセキュリティ構成図ハックなど続編記事を新規作成し、自然な内部リンク増加とロングテール流入を狙う
- **新規流入の読了質改善**: 直帰率+6.2%・滞在時間-51.7%の傾向を踏まえ、新規記事の冒頭に「結論先出し」「目次（toc: true）」を標準化し、記事末尾の関連記事への誘導（次の一歩リンク）を強化する
- **sg-beginner-roadmap導線見直し**: カテゴリ別5行分散はsg-quiz/sg-subject-b-quiz等への遷移リンクが起点。各リンクの遷移先での読了状況も合わせて確認し、「次の一歩」リンクの文脈・配置を再検討する

---

## CISCOのCCNA（参考メモ）

https://www.cisco.com/c/ja_jp/training-events/training-certifications/certifications/associate/ccna.html

IT技術者とかエンジニアの世界共通資格。グローバル規模のエンジニアになりたいとか、そういう人材を目指すとか、自分の実力を知りたいという目的なら有りではないだろうか。
ただ、かなり高難易度らしい。無勉強ならではの話しではある。

---

## research-kw-non-ipa.md の forAI注釈から起票（2026-06-19）

`research-kw-non-ipa.md` の「狙えるKW」表ベースの記事（FP2級/MOS/CCNA/秘書検定のHub・派生記事）は既にほぼ作成済み（article-index確認済み）。
一方で同ファイル内の `[!forAI]` 注釈が示す独自切り口はまだ記事化されていないため、以下4件を新規タスクとして追加。

- [ ] **FP2級「資格より知識」記事**（trend or method, QUESTフレーム）
  - 元注釈: 「資格ありきではなく『知識』として学ぶ価値を優先したい。受からなくても資格がなくても、自分や身内の資産改善に繋がる知識がある」
  - 既存のfp-hub/fp2-3month-plan/fp-reskilling-fit-check等は「合格」前提の記事のみで、「不合格・資格なしでも知識は使える」という角度が抜けている
  - 狙いKW例: 「FP 資格なくても知識」「FP2級 落ちても意味ある」「FP 勉強だけ 資格不要」
  - 想定slug: `trend/fp-knowledge-without-passing-cert`

- [ ] **秘書検定×AI効率化記事**（method, BEAFフレーム）
  - 元注釈: 「ビジネスマナーだけでなくAIを駆使して『秘書としてもAIで効率化を図る』アプローチを優先したい」（講師活用の文脈も含む）
  - 既存のsecretarial-*系はキャリア・コスト・上司評価が中心で、AIツール活用の実践記事が無い
  - 狙いKW例: 「秘書検定 AI活用」「秘書 ChatGPT 効率化」「秘書検定 講師 AI」
  - 想定slug: `method/secretarial-ai-efficiency-hack`

- [ ] **AWS資格診断アプリ**（app）
  - 元注釈: 「『おすすめのAWS資格診断』で選択式質問でベストを見つけるアプローチを取り入れたい」
  - 既存のaws-hub/aws-saa-beginner-reality等は記事のみで、診断系インタラクティブアプリが未着手
  - 職種・経験・目的を選択式で回答→CLF/SAA/ANS等のおすすめ資格を提示する診断ツール。既存AWS記事群へ内部リンクするハブの役割も持たせる
  - 想定slug: `src/apps/aws-cert-diagnosis/` + `app/aws-cert-diagnosis`

- [ ] **CCNA新卒・学生向けキャリア記事**（career）
  - 元注釈: 「学生のときに取得するなら新卒でテック系エンジニアで入るつもりなら勉強する価値がある」「CCNAに反応する企業をメインに就職先を探す方向性も欲しい」「日本では知名度が低いことを逆に企業の見極めに使える」
  - 既存のccna-network-engineer-career等は転職・年収中心で、新卒・学生ターゲットの「企業の見極め」視点が無い
  - 狙いKW例: 「CCNA 新卒 取得 価値」「CCNA 学生 取るべき」「CCNA 知名度低い 企業 反応」
  - 想定slug: `career/ccna-new-grad-company-filter`
