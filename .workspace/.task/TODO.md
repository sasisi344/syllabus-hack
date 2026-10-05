# Task Management

> 基本方針: **「生成AI × 資格試験」** を軸に外れない。ロングテール・長文・AI検索対応を3本柱にする。
> **本ファイルが全タスクの正本**。完了したタスク群・分析資料は `archive/` に移動する（履歴はそちらを参照）。
>
> **2026-09-07 全面更新**: 「20時間学習法（courseコレクション）」への戦略転換に伴い、2026-07台の旧タスク（PDCA週次検証・記事統廃合判断待ち等）を `archive/todo-pre-course-pivot-2026-09-07.md` へ一括退避。以降は2027年IPAシラバス改訂対応を最優先タスクとして本ファイル冒頭に固定する。
>
> **2026-10-06 整理**: 完了済みの節・項目を [`archive/completed-2026-10-06.md`](archive/completed-2026-10-06.md) へ退避。**日付つきタスクと効果測定は、[`schedule-task.md`](schedule-task.md) に集約**した（Gem→スキル統合の更新タスクも同ファイルへ統合）。本ファイルには、日付・測定の詳細を重複して書かない。

---

## 日付つきタスク・効果測定 → [`schedule-task.md`](schedule-task.md)

> 日付が決まっている未来のタスク、効果測定、毎週の定点観測は、すべて `schedule-task.md` で管理する（早見表つき）。実行したら、そちらの項目を完了にする。

---

## 0. 2027年IPAシラバス改訂対応 — 20時間学習法コンテンツ制作（Tier1は全て完了。残りはTier2の検討のみ）

> **正本（詳細タスク・背景思想はすべてこちら）**: [`.workspace/.new-contentplan/new-content-plan.md`](../.new-contentplan/new-content-plan.md)
> 本セクションは進捗の要約のみ。着手・更新は必ず正本側のWeekファイルを編集すること。
> **中長期ロードマップ（未来タスク）**: ITパスポート完成後、`course`（20時間学習法）は「資格から探す」の全資格へ順次展開する方針（2026-09-09決定、IPAデジタルスキル関連資格を優先・ITP→SGの順）。詳細は [`course-rollout-roadmap.md`](../.new-contentplan/course-rollout-roadmap.md)

**今月のゴール**: ITパスポートを題材にした20時間学習法パイロット（Tier1・無料8章）を、2027年シラバスベースで制作し、サイト新構成 `course` コレクションとして公開する。Tier2（有料note・合格テキスト26章フル版）は来月に延期。CBT型（既存資産）は維持しKPIを崩さない。

**進捗**: Week1〜4（9/6〜10/3）は全て完了。**IPAグループ（`ip`→`sg`→`dm`→`pd-m`→`pd-s`）に加え、G検定・SC（情報処理安全確保支援士）のコースも公開済み**。Week進捗表・Week3/Week4の詳細は [`archive/completed-2026-10-06.md`](archive/completed-2026-10-06.md) §1 を参照。次点候補（クラウド・ネットワーク）は、下記 §4.5 で検討中。

- [ ] **Tier2（有料note・合格テキスト）: 検討開始（2026-10-06）**。Tier1（無料の20時間コース）は2027年改訂シラバスで全て制作済みのため、優先タスクは完了扱い。**未確定: noteに入れる価値のある内容は何か**（Tier1との差別化）。これを決めてから、価格帯・巻数設計（[`ip-course-curriculum.md`](../.new-contentplan/archive/ip-course/ip-course-curriculum.md) §4）、メールゲート実装方式に進む（noteアカウントは開設済み）

### コース検索流入モニタリング（週次・恒常化フェーズ）

> 判断保留フェーズは終了し、コース別・週次の定点観測を毎週の `/weekly-report` で行う（2026-09-27〜）。**定点観測・データ取得の確認は [`schedule-task.md`](schedule-task.md) §1・§11**。完了項目は [`archive/completed-2026-10-06.md`](archive/completed-2026-10-06.md) §2 へ退避。

- [ ] **【次のデプロイ後・最優先】コース用GA4カスタムイベントの本番反映と管理画面設定（実装・ビルド確認済み 2026-10-06、未コミット・未push）**: 前回デプロイの完了を待ってから、変更内容（`src/utils/ga.ts`・`ChapterQuiz.tsx`・`CourseLayout.astro`・`[chapter].astro`）をコミット→push（pushはユーザー確認のうえ実行）。反映後の作業は下記。手順・イベント仕様は [`access-data/README.md`](access-data/README.md) §2.5
  - [ ] GA4リアルタイムで、コースの章ページでクイズを操作し `quiz_start` / `quiz_complete` / `chapter_complete` / `course_nav_click` が届くことを確認（`course_id` パラメータも合わせて確認。`/course/ip/` を開いて `course_id` / `content_group` が届くことも確認。ディメンション名・スコープが `Layout.astro` の送信パラメータ名と一致しているか）
  - [ ] GA4管理画面（管理 → イベント）で `chapter_complete` / `course_complete` を「キーイベントとしてマーク」（w39 Actの「キーイベント0件」切り分けの解消。`course_complete` は全章完了後にしか出ないため、イベント一覧に現れるまで時間がかかる場合は後日に回す）
  - [ ] `course_id` のカスタムディメンションは作成済み。追加で `quiz_mode` / `chapter_order` / `direction` が探索で必要になったら同様に登録
  - [ ] 反映後、週報（w39 Act「GA4キーイベント設定の確認」）をクローズし、コース別探索にイベント名フィルタを加える

---

## 0.6 生成AI実務練習コース — 制作完了（アーカイブ済み）／公開後の残タスク

> 制作と本番ビルド（1,441ページ）まで完了。完了記録: [`archive/completed-2026-09-29.md`](archive/completed-2026-09-29.md)（設計の正本 `archive/requirement-ai-practice-usecases.md`、進捗管理 [`../.new-contentplan/archive/ai-work-course/ai-work-course-task.md`](../.new-contentplan/archive/ai-work-course/ai-work-course-task.md)）。コース: `/course/ai-work/`（`src/data/course/ai-work/`）、コラム: `/method/ai-skill-rules-setup/`・`/method/ai-programming-prep/`。公開（commit `6ed05a5`）は完了。
> **日付つきの項目は `schedule-task.md` へ移した**: 公開告知のSNS投稿（§2）、W44頃の効果測定（§7）、2026-11-17以降のGem→スキル統合に伴うコラム更新（§8）。

- [ ] コラム2本の個別カバー画像（現在は `method/common-cover.png` を暫定使用。生成は指示後）
- [ ] 公開後に確認: ChatGPTの手順（公式ヘルプを取得できず、二次情報とOpenAI Academyでの確認）を実機で／事前準備編のmacOSでの動作／ZDNET記事リンクの疎通
- [ ] `/course/` 一覧ページの文言が資格学習向け（「資格学習法」「診断テスト」）のため、非資格コースが並ぶと違和感が出る。文言の調整は別タスク
- [ ] 各章の通し検証（人が実際にAIで解く）は、公開後も継続。特に第5章のExcel数式（実Excel未実行）と第6章のGAS・HTML（未実行）

---

## 2. コンテンツ3本柱への再編（設計提案・ユーザー確認待ち）

> 背景: 「20時間学習」「生成AIと学ぶ」「資格試験の教材」を新たな3本柱に、「最新情報のフォロー」「コラム」を副次コンテンツに据えるサイト構成の設計依頼（2026-09-09）。既存5カテゴリ・URLには手を入れず、ナビ・トップページの見せ方だけを再編する案。
> **正本**: [`site-structure-pillars.md`](site-structure-pillars.md)
> ヘッダー・フッター・トップページの実装3点は2026-09-15に全完了（[`archive/completed-2026-09-15.md`](archive/completed-2026-09-15.md)）。2026-09-27: theory/method価値再評価とフッター広告枠検証を実施 → [`site-structure-pillars.md`](site-structure-pillars.md) §8
> 完了項目（theory/methodの現状維持確定、P10パターンの追加・実査、`notebooklm-ip-study-hack` の復活 ほか）は [`archive/completed-2026-10-06.md`](archive/completed-2026-10-06.md) §6 へ退避。**フッター広告枠の実績確認・theory/methodの再集計は `schedule-task.md` §9・§6**

- [ ] **【今後の主戦】「資格名＋AI」クエリ攻略**（§8-3）: 非IPA 15資格それぞれで「AIで出題させる」「AIと学習テキストを作る」記事を展開
  - [ ] **要ユーザー判断（次回作業時）**: 次の着手を「簿記のP10記事執筆」と「IPコース第1章での『AIに出題させる』ブロック試作」のどちらから進めるか
  - [ ] 簿記で「AI出題編」（`簿記3級 NotebookLM`）を執筆し、P10記事の型を確立 → 宅建（`宅建 NotebookLM`＋未来問の紹介）→ AWS SAA → FP の順に横展開
  - [ ] Tier C資格（電験・危険物・消防・ボイラー・ビル管理・知財・DS・MOS・CCNA・土木）のHub記事に「AIに出題させる／テキストを作る」節を追記
  - [ ] **IPAの新しい形**（`site-structure-pillars.md` §8-4）: コース章末に「AIに出題させる」ブロックを追加する型を1章で試作（IPコース第1章を想定）→ 全コースへ展開
  - [ ] 応用情報の `ap-pm-descriptive-ai-prompts` と `ap-afternoon-ai-coaching` の役割を整理し、どちらかを「午後 ChatGPT 採点」の意図に寄せる
  - [ ] G検定×ChatGPTの扱い: サジェスト需要の大半が受験中の不正利用の意図。書く場合はJDLAの受験規約を一次情報で確認してから判断

## 3. 頻出KWのジャンル別「まとめ記事」化

> 背景・目的: 1記事＝1用語で分散していた`theory`記事を、コース横断で頻出するジャンル単位に統合し、AdSense評価（低品質・テンプレ的コピー短文の整理）向上と読者の自己完結的な学習体験を両立させる施策。**2026-09-15に全項目完了**。実施した11件の統合・リライト内容、組織軸の方針（試験ごとではなくKW・トピッククラスタで統一）、IP軸の全数カテゴライズ結果は [`archive/theory-genre-consolidation-2026-09-15.md`](archive/theory-genre-consolidation-2026-09-15.md) へ退避。

- theory記事数: 102本 → 65本（統合ハブ11本を新規作成、301リダイレクト累計39件）
- 統合した記事群の効果検証（アクセス解析）は `schedule-task.md` §5 へ移した
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

## 4.5 【検討段階】CCNA・AWS SAAの20時間コース導入（2026-10-06追加）

> 背景: `trend/ccna-vs-aws-saa` の改善（2026-10-06）時に、コースがあれば記事から直接リンクでき、内部リンクが強くなるという狙いで追加。**まだ導入するかどうかも未確定の検討段階**。IPAグループ（§0）とは別件で管理する。
> 参考: 展開方針は [`course-rollout-roadmap.md`](../.new-contentplan/course-rollout-roadmap.md)、KW・競合調査は `.workspace/data-set/cert-keyword-db/aws-kw-db.md`（2026-10-06実査行）

- [ ] 導入可否を判断（CCNA単独 / AWS SAA単独 / 両方。CCNAは範囲が広く20時間に収まるか、SAAは範囲選別が必要か）
- [ ] 導入する場合の設計: 章立ての骨格（`ccna-vs-aws-saa` の「AWS SAAのためにCCNAのどこまで学ぶか」の優先度表が叩き台になる）、既存の `ccna-hub` / `aws-hub` との役割分担
- [ ] 導入する場合のリンク設計: `ccna-vs-aws-saa` / `lpic-ccna-aws-order` / `ccna-hub` / `aws-hub` からコースへ内部リンク。SAAコースからCCNAコースへの導線も検討

---

## 5. trend用語解説バッチの内部リンク改善（実装完了・効果検証は schedule-task.md）

> 背景: trend/コラムの評価低下（薄いページの放置）についてユーザーから指摘。2026-03-31公開の用語解説23記事について、category_rules.mdの既定方針（URL維持）に従い、タグ統一・構造欠陥修正・本文内「次は◯◯」参照の実リンク化を実施（2026-09-19完了）。実装内容の詳細は `archive/completed-2026-09-19.md` §4参照。
> **正本**: [`requirement-trend-glossary-brushup.md`](requirement-trend-glossary-brushup.md)（実施内容） / [`trend-glossary-brushup-followup-report.md`](trend-glossary-brushup-followup-report.md)（効果測定用レポート・対象23記事のベースライン数値）

- 2026-10-18の効果検証は `schedule-task.md` §4 へ移した（残りの作業なし）

---

## メモ

- **競合サイト**: [キーマンズネット](https://kn.itmedia.co.jp/) — 構成の参考・対抗
- 2026-07台までの旧タスク（週次PDCA・KWリサーチ執行・SNS運用等）はすべて `archive/todo-pre-course-pivot-2026-09-07.md` へ退避済み。過去の判断根拠が必要な場合はそちらを参照

## アーカイブ索引（archive/）

| ファイル/フォルダ | 内容 | 移動日 |
|---|---|---|
| `completed-2026-10-06.md` | Week進捗表・Week3/Week4（IPAグループ・G検定・SCの公開まで）、コース検索流入モニタリングの完了項目、S.E.L.Fループ公開、生成AI実務練習コースのコミット・push、旧§1（統廃合の内部リンク確認）、旧§2の完了項目（P10追加・実査、`notebooklm-ip-study-hack` 復活ほか）、w40週報のAct完了項目、2026-10-06の作業記録（4記事の改善・KW DB・SNS台帳） | 2026-10-06 |
| `task-2026-11-17-gemini-gem-to-skills.md` | Gem→スキル統合に伴うコラム更新タスクの原本。内容は `schedule-task.md` §8 に統合済み（実行時は `schedule-task.md` を使う） | 2026-10-06 |
| `completed-2026-09-29.md` | 生成AI実務練習コース（非資格。全8章・サンプルZIP3本・コラム2本）の制作〜本番ビルド完了記録: 本番配置、KW調査、サンプル配布方式の検証、出力検査28項目。設計の正本 `requirement-ai-practice-usecases.md`・元メモ `AIツールの活用には具体的なユースケースが必要（ZDNET Japan）.md` も同フォルダ。進捗管理は `.new-contentplan/archive/ai-work-course/` | 2026-09-29 |
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
