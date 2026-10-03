# Task Management

> 基本方針: **「生成AI × 資格試験」** を軸に外れない。ロングテール・長文・AI検索対応を3本柱にする。
> **本ファイルが全タスクの正本**。完了したタスク群・分析資料は `archive/` に移動する（履歴はそちらを参照）。
>
> **2026-09-07 全面更新**: 「20時間学習法（courseコレクション）」への戦略転換に伴い、2026-07台の旧タスク（PDCA週次検証・記事統廃合判断待ち等）を `archive/todo-pre-course-pivot-2026-09-07.md` へ一括退避。以降は2027年IPAシラバス改訂対応を最優先タスクとして本ファイル冒頭に固定する。

---

## 予定日つきタスク（日付順の早見）

> 日付が決まっている未来のタスクの一覧。詳細は、各リンク先の節・ファイルを参照。実行したら、リンク先の項目を完了にして、この表から行を消す。

| 予定日 | タスク | 詳細 |
| --- | --- | --- |
| **2026-10-01** | 生成AI実務練習コースの公開告知のSNS投稿（Threads）。公開（push）が先 | 下記 §0.6 |
| 2026-10-18 | trend用語解説23記事の効果検証 | §5 |
| 2026-10下旬 | theory/methodの1記事あたり効率の再集計（統合後6週分） | §2 |
| **2026-10-25〜27頃（W44）** | 生成AI実務練習コースの公開後の効果測定（集計期間 10/18〜10/24） | 下記 §0.6 |
| **2026-11-17（以降）** | GeminiのGem→スキル統合に伴う、コラムの更新とKWの再実査 | [`task-2026-11-17-gemini-gem-to-skills.md`](task-2026-11-17-gemini-gem-to-skills.md) |
| 2027-03頃 | 生成AI実務練習コースの主軸KW（生成AI 練習問題 業務）の再実査。同月、GeminiのWorkspaceアカウントのGem→スキル移行（コラムの注記の見直し） | [KW記録 §5](../data-set/ai-work-course-kw-research-2026-09.md) |

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

- [x] Week4完了タスク一式（GA4/GSC計測開始、SG/DM/PD-M/PD-S各パイロットの公開完了、今月の振り返り、trend記事確認）→ 2026-09-22アーカイブ。**IPAグループ（`ip`→`sg`→`dm`→`pd-m`→`pd-s`）の20時間コース展開が全て完了**。詳細は[`archive/completed-2026-09-22.md`](archive/completed-2026-09-22.md)、PD-M/PD-S実装の正本は[`../.new-contentplan/archive/pd-course/pd-course-task.md`](../.new-contentplan/archive/pd-course/pd-course-task.md)参照。**G検定コースは2026-09-24着手・同日に本文執筆まで完了、2026-09-24公開済み**（既存記事からの導線設置・DMコースとの相互リンクも完了）。詳細は[`../.new-contentplan/g-kentei-course/g-kentei-course-task.md`](../.new-contentplan/g-kentei-course/g-kentei-course-task.md)参照。**SC（情報処理安全確保支援士）コースは2026-09-26着手・2026-09-28に全12章＋ターミナル×サテライト構成まで完了・本番公開済み**。最難関試験のため「章単位20時間配分＋得意/苦手診断によるパーソナライズ」という適応型モデルを新規採用。全12章＋index（`draft: false`、`pnpm build`1427ページで確認）に加え、起点ハブ記事[`method/sc-hub`](/method/sc-hub/)・記述式対策記事[`method/sc-descriptive-self-loop-hack`](/method/sc-descriptive-self-loop-hack/)を新規公開。診断アプリは`.agents/quiz_app_rules.md`の新規スタンドアロンアプリ凍結方針に従い新設せず、既存のコースTOP診断（`ChapterQuiz` mode="diagnosis"）で代替。詳細は[`../.new-contentplan/archive/sc-course/sc-course-task.md`](../.new-contentplan/archive/sc-course/sc-course-task.md) / [`sc-course-curriculum.md`](../.new-contentplan/archive/sc-course/sc-course-curriculum.md)参照。**次点候補は`course-rollout-roadmap.md`の優先順位方針に基づきクラウド・ネットワーク（AWS・CCNA）だが、着手はユーザー判断待ち**
- [ ] 来月着手するTier2（有料note・合格テキスト）の準備確認: noteアカウント開設・価格帯・巻数設計（[`ip-course-curriculum.md`](../.new-contentplan/archive/ip-course/ip-course-curriculum.md) §4）の検討再開、メールゲート実装方式の確定

### コース検索流入モニタリング（週次・恒常化フェーズへ移行、2026-09-27更新）

> `week4-task.md` 時点（2026-09-20）では「20時間コースは検索経由の効果測定に最低1ヶ月（w40〜w43程度）の蓄積期間が必要」と保留判断していたが、IP/SG/DM/PD-M/PD-Sがいずれも2026-09-13〜09-22の近接した時期に公開・インデックス済みとなったため、判断保留フェーズは終了。以降は「初回効果測定」ではなく**コース別・週次の検索流入（GSCクエリ・表示回数・クリック・掲載順位）とPV（GA4）の定点観測**を毎週の`/weekly-report`実施項目として恒常化する。

- [x] モニタリング方法をREADME（[`access-data/README.md`](access-data/README.md)「コース別モニタリング用GA4設定」節）に記録（2026-09-27）。GA4のContent Group設定・Search Console連携確認・Page path基準の探索レポート作成が必要な旨を含む
- [x] **コース別探索レポート作成完了（2026-09-27）**: `w40-ga4-course-syllabus.csv` として取得済み。ディメンション（ページパスとスクリーンクラス）・フィルタ（/course/）・値（表示回数/セッション/エンゲージメント率/平均エンゲージメント時間）・セグメント列（すべてのユーザー/ウェブ/オーガニック/モバイル）の構成を標準テンプレートとして確定し、READMEに反映済み。**このw40分は公開日（8/30）〜取得日（9/26）の累積ベースラインとして扱う**（今後は単一週で取得）
- [ ] **要ユーザー作業（GA4管理画面、任意）**: Search Console連携の確認/設定、コンテンツグループ設定（`course-ip`/`course-sg`/`course-dm`/`course-pd-m`/`course-pd-s`/`course-g-kentei`/`course-sc`）は未実施。手動でのURLプレフィックス絞り込みで当面は運用可能なため優先度は中〜低
- [x] **重要な訂正（2026-09-27）**: w39・w40週報で「DM/PD-Mコースの章送りナビゲーションがpage_view未発火」と報告した件は、実装バグではなくGA4探索レポートの「ランディングページ」ディメンション（セッションスコープ）の見え方によるものと判明。コース側の実装修正は不要（詳細はREADME参照）。従来のAct項目「`/course/dm/`・`/course/pd-m/`の章送りナビゲーション実装確認」はクローズし、上記のコース別探索レポート導入に差し替える

---

## 0.5 コラム記事「S.E.L.Fループ」公開（2026-09-26完了）

- [x] `method/self-loop-ai-learning/`として公開完了。カバー生成→本番配置→`pnpm astro check`＋`pnpm run build`（0エラー）を確認しコミット・push済み

---

## 0.6 生成AI実務練習コース — 制作完了（アーカイブ済み）／公開・SNS・効果測定（2026-09-29）

> 制作と本番ビルド（1,441ページ）まで完了。完了記録: [`archive/completed-2026-09-29.md`](archive/completed-2026-09-29.md)（設計の正本 `archive/requirement-ai-practice-usecases.md`、進捗管理 [`../.new-contentplan/archive/ai-work-course/ai-work-course-task.md`](../.new-contentplan/archive/ai-work-course/ai-work-course-task.md)）。コース: `/course/ai-work/`（`src/data/course/ai-work/`）、コラム: `/method/ai-skill-rules-setup/`・`/method/ai-programming-prep/`。

- [x] **【完了 2026-09-29 commit 6ed05a5、公開URL 200確認 2026-09-30】コミットとpush（本番公開）**: **10/1のSNS投稿より前に完了させる**。変更は `src/content/config.ts` の1行＋新規 `src/data/` 配下（course/ai-work、quiz/ai-work、post/method のコラム2本）＋ `.workspace` の記録。ワークスペースには別作業の未コミット変更（`site-structure-pillars.md`、作文検定の資料の移動など）があるため、コミット対象を選ぶ。pushは本番の自動デプロイをトリガーするため、変更の要約を確認してから実行（CLAUDE.md）
- [ ] **2026-10-01 SNS投稿（Threads）**: コース公開の告知。`/sns-post` スキルで作成。公開（push・デプロイ）が済み、`/course/ai-work/` が開けることを確認してから投稿する。切り口の候補: 章のワナ（例: 議事録でAIが担当者を勝手に補う）、サンプルファイル・答え合わせつきであること
- [ ] **W44頃（2026-10-25〜27頃）効果測定**: サイトの週番号の規則（w40＝9/19〜9/26の集計、w41＝9/27〜10/3）に沿うと、w44の集計期間は10/18〜10/24。`/weekly-report w44` に組み込む。見る指標:
  - GA4（コース別探索レポートの標準テンプレート。[`access-data/README.md`](access-data/README.md)）: `/course/ai-work/` の表示回数・セッション・エンゲージメント率・平均エンゲージメント時間。TOP→第1章→…→第8章の、どこで離脱するか（完走率）
  - サンプルZIPのダウンロード数: GA4の `file_download` イベント（拡張計測の「ファイルのダウンロード」が有効か、事前に確認）
  - GSC: 狙ったKW（`.workspace/data-set/ai-work-course-kw-research-2026-09.md`：生成AI 練習問題 業務／実務 練習 など）の表示回数・クリック・掲載順位、コラム2本の流入
  - SNS（10/1）からの流入（Threadsのリファラ）
  - 判定: 継続／タイトル・descriptionの調整／章別の衛星記事に着手（候補: 第7章＝低〜中占拠、第5・6章のGAS、第8章の日報→週報）
  - 事前準備（W44の前まで）: GA4のコース別モニタリングに `/course/ai-work/` を追加（URLプレフィックスで絞り込み、またはコンテンツグループ）
- [ ] コラム2本の個別カバー画像（現在は `method/common-cover.png` を暫定使用。生成は指示後）
- [ ] 公開後に確認: ChatGPTの手順（公式ヘルプを取得できず、二次情報とOpenAI Academyでの確認）を実機で／事前準備編のmacOSでの動作／ZDNET記事リンクの疎通
- [ ] `/course/` 一覧ページの文言が資格学習向け（「資格学習法」「診断テスト」）のため、非資格コースが並ぶと違和感が出る。文言の調整は別タスク
- [ ] **【実行日 2026-11-17（以降）】GeminiのGem→スキル統合に伴う、コラムの更新**: 「生成AIにルールを覚えさせるスキル設定」の「今のGem」の記述を、スキルの手順に書き換える（第2章の1文も）。KWの再実査つき。**この日になるまでは実行しない**。詳細（更新する12行・確認手順・完了条件）: [`task-2026-11-17-gemini-gem-to-skills.md`](task-2026-11-17-gemini-gem-to-skills.md)
- [ ] 各章の通し検証（人が実際にAIで解く）は、公開後も継続。特に第5章のExcel数式（実Excel未実行）と第6章のGAS・HTML（未実行）

---

## 1. 既存記事の統廃合（GSC/GA4データドリブンの棚卸し）

> 背景: courseコレクション等の新コンテンツが増える一方、既存記事（特にIPA CBT関連の重複トピック群）が回遊・評価の邪魔をしている懸念。旧TODOで「ユーザー判断待ち」だった IPA 2026年CBT記事8本の統廃合案は `archive/todo-pre-course-pivot-2026-09-07.md` §1 に判断根拠が残っているので、再検討時はそちらを参照。
> **正本（本タスクの分析・進捗管理はすべてこちら）**: [`archive/article-consolidation/`](archive/article-consolidation/) フォルダ配下。最新: [`archive/article-consolidation/ipa-cbt-2026-cluster-w36.md`](archive/article-consolidation/ipa-cbt-2026-cluster-w36.md)（W36データ反映・2026-09-08）。完了項目は `archive/completed-2026-09-09.md` 参照

- [x] 新規コンテンツ（course系）の内部リンク・クロール予算を圧迫していないか確認 → **2026-09-19完了**。詳細は `archive/completed-2026-09-19.md` 参照

## 2. コンテンツ3本柱への再編（設計提案・ユーザー確認待ち）

> 背景: 「20時間学習」「生成AIと学ぶ」「資格試験の教材」を新たな3本柱に、「最新情報のフォロー」「コラム」を副次コンテンツに据えるサイト構成の設計依頼（2026-09-09）。既存5カテゴリ・URLには手を入れず、ナビ・トップページの見せ方だけを再編する案。
> **正本**: [`site-structure-pillars.md`](site-structure-pillars.md)
> ヘッダー・フッター・トップページの実装3点は2026-09-15に全完了。完了記録は [`archive/completed-2026-09-15.md`](archive/completed-2026-09-15.md) へ退避（詳細は[`site-structure-pillars.md`](site-structure-pillars.md) §7参照）
> 2026-09-27: theory/method価値再評価とフッター広告枠検証を実施 → [`site-structure-pillars.md`](site-structure-pillars.md) §8

- [x] theory/method の扱い → **2026-09-27 ユーザー判断で現状維持に確定**（§8-3）
- [ ] **【今後の主戦】「資格名＋AI」クエリ攻略**（§8-3）: 非IPA 15資格それぞれで「AIで出題させる」「AIと学習テキストを作る」記事を展開
  - [x] `kw-pattern-library.md` にP10「資格名×AI学習」パターンを追加（2026-09-27）
  - [x] P10で15資格＋IPAを実査 → 正本 `.workspace/data-set/cert-keyword-db/p10-ai-query-research-2026-09.md`、boki/takken/aws/fp/denkenのDBにP10行を追記（2026-09-27）
  - [ ] **要ユーザー判断（次回作業時）**: 次の着手を「簿記のP10記事執筆」と「IPコース第1章での『AIに出題させる』ブロック試作」のどちらから進めるか
  - [x] **IPA「ITパスポート NotebookLM」記事の扱い → 2026-10-03 方針確定**: **同一URL `/method/notebooklm-ip-study-hack/` を復活させ、内容は全面的に書き直して厚くする**（旧記事の再公開はしない）
    - 根拠: w40比較期間で表示43・クリック4・平均5.9位の実績があり、リダイレクト解除で同URLの履歴を取り戻せる。新slugだと実績ゼロから。受け皿の `notebooklm-features-guide`（examId: common）にはITパスポートの記述がなく、意図が合っていない
    - 2026-06-18の統合計画（ページ復活ではなく1本に統合）は「薄い記事を増やさない」が趣旨。旧記事は `notebooklm-it-passport-drill` のサブセットで薄いので、旧本文の復活は不可。IP特化の厚い1本として再構築するなら趣旨に反しない
    - 書き直しの中身: 自分事化（CRM例）＋50問ドリル生成＋「AIに出題させる」プロンプト（コピー用コードフェンスは `**太字**`）＋ハルシネーション対策（出典確認）。`features-guide` は汎用の機能ガイドとして残し、相互リンクで役割分担
    - [x] 実行（2026-10-03）: ①`astro.config.ts` のリダイレクト2行を削除 ②`src/data/post/method/notebooklm-ip-study-hack/index.md` を新規作成（examId: ip、カバー生成済み） ③`features-guide`・`itp-hub`・IPコース第1章から内部リンク ④`pnpm build` 成功。**残り: コミット・push（ユーザー確認後）、公開後にGSCでURLの再インデックスと順位を確認（W44で）**
  - [ ] 簿記で「AI出題編」（`簿記3級 NotebookLM`）を執筆し、P10記事の型を確立 → 宅建（`宅建 NotebookLM`＋未来問の紹介）→ AWS SAA → FP の順に横展開
  - [ ] Tier C資格（電験・危険物・消防・ボイラー・ビル管理・知財・DS・MOS・CCNA・土木）のHub記事に「AIに出題させる／テキストを作る」節を追記
  - [ ] **IPAの新しい形**（`site-structure-pillars.md` §8-4）: コース章末に「AIに出題させる」ブロックを追加する型を1章で試作（IPコース第1章を想定）→ 全コースへ展開
  - [ ] 応用情報の `ap-pm-descriptive-ai-prompts` と `ap-afternoon-ai-coaching` の役割を整理し、どちらかを「午後 ChatGPT 採点」の意図に寄せる
  - [ ] G検定×ChatGPTの扱い: サジェスト需要の大半が受験中の不正利用の意図。書く場合はJDLAの受験規約を一次情報で確認してから判断
- [x] ~~theory内の資格制度系4記事のコラム側への移設・導線追加~~ → theory現状維持の確定により見送り（2026-09-27）
- [ ] **要ユーザー作業（A8.net/GA4管理画面）**: フッター広告枠の実績確認。①A8管理画面のクリック・発生数（2026-09-15〜）②GA4探索でイベント`click`×`link_domain=px.a8.net`（拡張計測の離脱クリック。GTM不要で広告クリックを直接計測できる）③参考値として`scroll`（90%）件数。数値を`site-structure-pillars.md` §8-2に追記。母数が小さいため判定は3か月（〜2026-12中旬）を目安に
- [ ] **2026-10下旬**: theory/methodの1記事あたり効率を§8-1の表と同じ方法で再集計（統合後6週分）。theoryが0.5/記事を割っていないか、Google経由流入が増えているかを確認


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
