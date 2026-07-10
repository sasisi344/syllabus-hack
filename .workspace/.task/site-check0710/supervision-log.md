# 監督ログ — site-check0710

> 体制注記: 実行環境の制約（フォークエージェントはサブエージェント起動不可）により、Worker 起動は不可。監督プロトコル（作業→検証コマンド実施→合否判定→記録）は維持したまま、監督が作業を直接実行した。差し戻しは「自己検証で検出→即修正」として記録する。

---

## WP01 — データ整合性・スクリプト修正

- **実施日**: 2026-07-10
- **実施内容**:
  - T1: trend 7件の `knowledge.type` を `news`→`theory` に変更、`career/itp-high-school-resume-hack` を `method`→`career` に変更（各 lastmod 更新）
  - T2: `index-articles.js` の frontmatter 正規表現を BOM・CRLF・`--- ` 耐性に修正
  - T3: `category_rules.md` を3カテゴリ→5カテゴリ定義に拡張（theory/app の定義・Decision Tree・trend vs theory 境界ルールを追記）
  - T4: appId 追加 12件（registry と一致するもののみ）。スキップ7件: `ap-subject-b` / `dev-doc-process-mvp` / `dev-doc-structure-astro` / `dev-story-ai-engine` / `dev-story-data` / `dev-story-ui` / `gemini-cli-quiz-maker` — いずれも対応アプリが `src/apps/index.ts` に存在しない（dev系は開発ストーリー記事のため appId 不要が妥当）
  - T5: tags 数違反25件を tag_rules.md 準拠で3〜5個に正規化。判断根拠: 冗長タグ（自己研鑽・生産性等の汎用語）と自己参照タグ（SyllabusHack）を削除、flashcard-app の試験コード7個は `高度試験`/`IPA` に集約、pdf-to-text（2個）は PDF・シラバス・効率化を補完
  - T6: IMAGE_PROMPT コメントを37ファイルから除去（本文変更なしのため lastmod 据え置き）
  - T7: リダイレクト確認済みの draft 18件を `.workspace/draft/archive/` へ移動。`app/pdf-to-text` は redirect 未設定のため移動せず保持（実装済みアプリの未公開記事）
  - T8: `restructure-plan-2026-06.md` スナップショットを 7/10 値（計365件）で更新
- **差し戻し（自己検出→修正）**: T7 の移動後、監査で broken-internal-link 12件を検出（アーカイブ済みスラッグへの内部リンク。redirect 経由で動作はするが非直接）。7記事のリンクを redirect 先（notebooklm-features-guide 等）へ張り替えて解消
- **監督検証**:
  - `node index-articles.js` → 365件計上（完了条件1 ✓）
  - 監査スクリプト → tag-count 0 / image-prompt-leftover 0 / draft-true-in-prod 1（pdf-to-text・理由記録済み）/ broken-internal-link 0（完了条件2 ✓）
  - `pnpm build` → 成功（完了条件3 ✓）
  - grep → trend 7件すべて `type: theory`（完了条件4 ✓）
- **判定**: ✅ 合格

## WP02 — サイト機能・技術基盤

- **実施日**: 2026-07-10
- **実施内容**:
  - T1: ToC 実装 — `content/config.ts` に `toc` 追加、`blog.ts` で `render()` の `headings` を Post に伝搬、`types.d.ts` 拡張、`TableOfContents.astro` 新規作成（h2主要+h3ぶら下がり・h2が2個以上で表示・details開閉式・dark_mode_css.md 準拠の Tailwind dark: クラス）、`SinglePost.astro` の header 直後に組込み。テスト付与: `method/itp-hub` に `toc: true`
  - T2: examId 統一 — 使用実態 `ip` 58件 vs `it-passport` 1件 → `method/article-outlines-feb` を `ip` に修正、schema enum から `it-passport` 削除、`exam-id-catalog.md` 更新。アプリ側の `genai-pass`/`genai-ip` 等アプリ専用IDは LocalStorage 互換のため不変更
  - T3: sitemap フィルタ検証 — 1記事タグ（anthropic）不掲載・10記事以上タグ（itpasupto）掲載・lastmod 364件を確認
- **監督検証**:
  - `dist/method/itp-hub/index.html` に `<nav aria-label="目次">` と h2/h3 アンカーリスト描画、dark: クラス含有（完了条件1・2 ✓）
  - grep → 記事の `it-passport` 0件（完了条件3 ✓）
  - `pnpm build` → 成功・1265ページ（完了条件4 ✓）
- **判定**: ✅ 合格
- **申し送り**: ルート `syllabus-hack/CLAUDE.md` のフロントマターテンプレート例が `examId: 'it-passport'` のまま。CLAUDE.md はユーザー管理ファイルのため未修正 → **ユーザーに `ip` への修正を推奨**

## WP03 バッチ1 — meta description 補完

- **実施日**: 2026-07-10
- **実施内容**: metadata 欠落84記事（監査時93件からアーカイブ移動9件を除く）全件に `metadata.description` を新規作成・挿入。各記事の title/excerpt を抽出した上で記事固有の内容＋読者ベネフィットで構成し、スクリプトで 120〜160字のバリデーションを通してから書き込み（初稿は全件120字未満で自己差し戻し→記事別の補足文を追加して再実行）。全件 lastmod を 2026-07-10 に更新
- **監督検証**:
  - 監査スクリプト → missing-metadata 0（バッチ1完了条件 ✓）。新規84件はいずれも長さ範囲外リストに非該当
  - `pnpm build` → 成功・1265ページ
  - dist 実出力確認 → `theory/swot-analysis` に `<meta name="description">` と `og:description` が正しく描画
  - 既存記事由来の meta-desc-length 152件は WP03 T2（優先度低・任意）の対象として残置
- **判定**: ✅ 合格

---

## WP03 バッチ2 — 短記事リライト（T3〜T6）

- **実施日**: 2026-07-10
- **体制注記**: 本バッチもフォーク環境の制約（Agentツールでのサブエージェント起動不可）により、監督が直接作業し検証コマンドを自ら実行した。
- **実施内容**:
  - T3優先度A（3記事）: `method/agent-teacher`（1791→6052字）、`trend/fp2-jitsuki-comparison`（1548→6151字）、`trend/ccna-vs-aws-saa`（1719→5900字）。いずれも結論先出し・toc:true・比較表・AIプロンプト例・FAQを追加
  - T4優先度B（4記事）: `method/nw-mermaid-hack`（1906→5486字）、`method/ap-discard-strategy`（1848→4515字）、`method/pomodoro-anki-technique`（1671→3648字、見出しの番号付け3件・frontmatter欠落項目を修正）、`career/backoffice-sg-career-hack`（1766→3204字、見出しの番号付き括弧3件を修正）
  - T5優先度C（3記事）: `method/genai-cert-study-plan`（1802→3015字、見出し番号3件修正）、`career/ses-ap-strategy`（1797→2806字、frontmatter記述のYAML構文エラー1件を修正）、`method/wrong-choice-analysis-hack`（1735→2305字、章番号見出し3件修正）
  - T6: `method/cbt-2026-syllabus-complete-guide` の再点検。toc:true追加、見出しの数字・「」括弧違反を除去（5138字、既存5162字から実質維持）。PASONA框組みの【】ラベル見出しは意図的な設計パターンと判断し保持
- **判定**: ⚠️ **部分合格**（目標未達を正直に報告）
  - 完了条件1「各記事6000字超」: 10記事中3記事（agent-teacher, fp2-jitsuki-comparison, ccna-vs-aws-saa）のみ達成。残り7記事は2305〜5486字にとどまり、目標未達
  - 未達の理由: 各記事に結論先出し・比較表・AI活用プロンプト・FAQ・実践手順など post_writer.md 準拠の実質的なセクションを複数追加したが、時間対効果の見積もりを誤り、全10記事を6000字超まで拡張する時間を確保できなかった
  - 見出しルール（番号・「」括弧禁止）・`<strong>`強調・toc:true・lastmod更新・publishDate不変は全10記事で達成
  - 差し戻し判断: 残り7記事への追加リライトは次回セッションに持ち越すべきと判断し、時間を全体スコープ（バッチ3・build検証）の確保に再配分した

## WP03 バッチ3 — タグ・見出しの段階的正規化

- **実施日**: 2026-07-10
- **実施内容**:
  - T8（見出し番号・「」括弧除去）: `.workspace/scripts/fix-heading-numbers.cjs` を新規作成し全記事に一括適用。副産物として、frontmatter先頭が `--- `（末尾スペース付き）のため従来スクリプトが正しく解析できていなかった15記事（trend系）を発見・修正（TODO.md統合リストAの既知課題と同根）。残った5件は個別に手動修正（うち2件は「」の片側だけが文字化けで消失していた既存データ破損で、本セッションが原因ではないことを確認済み）
    - 結果: heading-style違反 265件 → **0件**（監査スクリプト再実行で確認）
  - T7（タグスプロール統合）: **未着手**。ユニークタグ628個中453個が1記事のみという実態を確認したが、統合には「どのタグを正規タグとして残すか」の意味判断が記事ごとに必要で、安全にスクリプト化できないと判断。時間内での着手を見送り、次回セッションへ持ち越し
- **判定**: ⚠️ **部分合格**（T8完了・T7未着手）
  - 完了条件2「`pnpm build` 成功」: 検証中（本ログ確定時点でビルド実行中）
  - 完了条件2「タグページ総数が減少方向」: T7未着手のため対象外（次回評価）

---

## WP04 — 横展開クラスター完走（D群のみ実施・優先度SS）

- **実施日**: 2026-07-10
- **体制注記**: 本タスクもフォーク環境の制約（Agentツールでのサブエージェント起動不可）により、監督が直接執筆・検証コマンドを自ら実行した。ユーザーから「残りのタスクを実行して」と明示指示があったため、Phase 3（新規執筆）に着手した。
- **実施範囲判断**: 作業書の指示どおり「D→C→E→Hの順に進め、時間内で可能な範囲まで」を採用。**D（波3インフラ整備）を完全実施**し、C（既存クラスター仕上げ）・E（Negative-Narrative移植）・H-1/H-3は時間切れのため次回に持ち越し。H-2はD-3と統合実施できたため完了。

### D-1: KW-DB新設（4資格）— 完了
- 新規作成: `.workspace/data-set/cert-keyword-db/denken-kw-db.md` / `kiken-butsu-kw-db.md` / `biru-kanri-kw-db.md` / `doboku-sekou-kw-db.md`
- 各DBにP1〜P9方向性パターン列・学生でも可／社会人向け区分（biru-kanriは3資格別に明記）を付与
- WebSearchで4件の競合占拠度実査（「電験三種 落ちた 原因」「危険物乙4 社会人 勉強法」「ビル管理士 マンション管理士 意味ない」「土木施工管理技士 未経験 独学」）を実施し、結果をDB内に記録
- `cert-keyword-db/index.md` の対象クラスター一覧に4行追加

### D-2: restructure-plan充足率表更新 — 完了
- `restructure-plan-2026-06.md` に「波3クラスター充足率」表を新設し、4クラスターのHub/Method/Career/Theory/App充足状況を記録

### D-3・D-4: スポーク記事5本の新規執筆 — 完了
1. `method/denken-bunkei-shakaijin-hack`（文系・社会人ニッチ角度、P4）
2. `method/kiken-butsu-isshukan-hack`（1週間短期集中、P6）
3. `method/manshon-energy-student-hack`（学生でも可、D-3の学生セグメント）
4. `career/biru-kanri-jitsumu-keiken-roadmap`（実務経験2年ロードマップ、D-3の実務者セグメント兼H-2）
5. `method/doboku-sekou-mikeiken-gakka-hack`（未経験者の学科のみ挑戦ルート、P4）

各記事とも対応するHub（denken-hub / kiken-butsu-hub / biru-kanri-hub / doboku-sekou-hub）に双方向内部リンクを設定し、Hub側のlastmodも更新した。

### 差し戻し（自己検出→修正）
1. 初稿5記事すべてで `image` フィールドが存在しない `cover.jpg` を参照しビルドが `ImageNotFound` で失敗。既存の共通カバー（method: `~/data/post/method/common-cover.png`、career: `~/assets/images/default.png`）に差し替えて解消
2. post_writer.mdの「AI活用で「専任講師を月額20ドルで雇う」感覚」という見出し文言をそのまま使用したが、これはCLAUDE.mdの見出し「」括弧禁止ルールに違反していた（既存Hub記事はブラケットなしの「AI活用で専任講師を月額20ドルで雇う感覚」表記で統一済みと判明）。5記事全箇所を修正。加えてdenken記事のH3見出し3件に残っていた番号付け・「」括弧も除去

### 監督検証
- `pnpm build` → 成功。1265ページ→1276ページ（+11、新規5記事＋関連ページ分）
- `grep` → 5記事すべてで見出しの「」括弧・番号付け違反0件を確認
- `git status --short` → 新規記事5件・KW-DB4件・index/restructure-plan更新2件・Hub4件のlastmod更新、スコープ内のみ
- frontmatter完全テンプレート（publishDate ISO・lastmod・image・category・tags3〜5・toc:true・persona・knowledge・metadata.description）を5記事全件で確認
- **判定**: ✅ **D群合格**／C・E・H-1・H-3は**未着手**（時間切れ、次回セッション持ち越し）

### 申し送り
- C（簿記/MOS/G検定/宅建の既存クラスター仕上げ、計12記事規模）・E（Negative-Narrative型5記事）・H-1（FP2級準備ロードマップ）・H-3（土木施工管理技士 実務経験の積み方）は未着手のまま
- タグ正規名（`.agents/tag_rules.md`）への新規タグ（文系・社会人・実務経験・未経験など）の追加登録は今回見送り。将来のタグ統合（WP03 T7）で正規化を検討

## 総括（2026-07-10 実行分・追記）

- WP01 ✅ / WP02 ✅ / WP03バッチ1 ✅ / WP03バッチ2 ⚠️部分合格（3/10記事が6000字達成、残り7記事は拡張不足） / WP03バッチ3 ⚠️部分合格（T8完了・T7未着手）
- WP04〜06 は指示どおり未着手（ユーザーレビュー待ち）、WP07 はデータ待ち
- 発見的成果: frontmatter先頭の末尾スペース問題（15記事）を発見・修正し、`index-articles.js`（WP01で修正済み）と同根の潜在バグを解消
- 次回セッションへの申し送り:
  1. WP03バッチ2の残り7記事（nw-mermaid-hack以下）を6000字超まで追加拡張
  2. WP03バッチ3 T7（タグスプロール統合）に着手。`task-results/tag-similarity-clusters.md` の19クラスターから優先度の高いものを選び、1バッチ50記事以内で段階的に統合
  3. 本ログのビルド検証結果を確認し、エラーがあれば先に解消してから上記に着手
- 残監査項目（バックログ）: missing-toc 333（新規・リライト時に随時付与）/ meta-desc-length 151（WP03 T2、優先度低）/ missing-cover-file 99・bad-image-path 29（共通アセット許容の既知事項、career 7件は前回WP02のdefault.png代替が原因）/ non-bundle-files 1（method/practice.png、監査スクリプト側の既知の誤検知）/ draft-true-in-prod 1（app/pdf-to-text、意図的保持）

## WP04（続き: C・E・H）— 部分完了

- **実施日**: 2026-07-10
- **体制注記**: 本タスクもフォーク環境の制約（Agentツールでのサブエージェント起動不可）により、監督が直接執筆し検証コマンドを自ら実行した。
- **実施範囲判断**: C（既存クラスター仕上げ）→E（Negative-Narrative移植）→H（受験資格ロードマップ）の順で、時間内で可能な範囲まで実施。全項目完走はできず、品質を優先して10記事に絞って執筆した。

### 作成記事一覧（新規10本）

| # | スラッグ | カテゴリ | 対応項目 |
|---|---------|---------|---------|
| 1 | `method/boki-shiwake-drill-hack` | method | C-1（簿記Method） |
| 2 | `career/boki-keiri-career-roadmap` | career | C-1（簿記Career） |
| 3 | `theory/mos-excel-function-basics` | theory | C-2（MOS Theory 1/3） |
| 4 | `theory/mos-word-powerpoint-basics` | theory | C-2（MOS Theory 2/3、Word+PowerPointを統合） |
| 5 | `method/mos-kansuu-oboerarenai-hack` | method | E-3（MOS Negative-Narrative） |
| 6 | `method/g-kentei-math-statistics-hack` | method | C-3（G検定Method） |
| 7 | `trend/g-kentei-2026-syllabus-trend` | trend | C-3（G検定Trend） |
| 8 | `method/takken-minpou-ai-memory-hack` | method | C-4（宅建Method）＋E-2（宅建Negative-Narrative、切り口を統合） |
| 9 | `career/doboku-sekou-jitsumu-keiken-hack` | career | H-3（土木施工管理技士 実務経験の積み方。既存のD-4スポークとは「未経験受験ルート vs 技士補後の実務経験」で差別化） |
| 10 | `method/fp-tax-planning-calc-hack` | method | E-4（FP Negative-Narrative） |

全記事、対応するHub記事（boki-hub / mos-hub / g-kentei-hub / takken-hub / doboku-sekou-hub / fp-hub）およびdoboku-sekou-mikeiken-gakka-hackとの双方向内部リンクを設定済み。

### 自己検出・修正した不備
- 初稿6記事の見出しに「」括弧が混入（CLAUDE.mdルール違反）。監督自身の見出し文言作成時の癖が原因。全件を括弧なしの表現に修正し、`grep -n '^#\{2,4\} .*[「」]'` で0件を確認
- 本文中の「」（通常の引用符用法）とコードフェンス内のMarkdown太字（`**対象範囲**`等、CLAUDE.mdルールで許可）は意図した仕様のため変更していない

### 監督検証
- 見出しブラケット違反: `grep -n '^#\{2,4\} .*[「」]'` で全10記事0件
- 画像パス実在確認: 全10記事の`image`フィールドが実ファイルを参照（method系は`method/common-cover.png`、career系は`assets/images/default.png`、theory系は`theory/common-cover.png`を使用）
- `pnpm build` → 成功・1302ページ（前回1276→1302、+26ページ）
- frontmatter: 全記事でpublishDate ISO・lastmod 2026-07-10・tags3〜5・toc:true・persona・knowledge・metadata.description設定済みを目視確認

### 判定: ⚠️ 部分合格（10記事は完了条件クリア、範囲は未完走）

### 未着手のまま残った項目
- C-2 MOS Theory×3の3本目（未着手、Excel/Word・PowerPoint の2本のみ）
- C-2 MOS Method追加分（既存mos-ai-shortcutに加えての1〜2本、E-3のnegative narrative 1本のみで代替扱い）
- E-1簿記・E-5認知形成型（学生でも可クラスターへの`itp-vs-info1-comparison-hack`型移植）は未着手
- H-1 FP2級「受験資格を満たすまでの準備ロードマップ」は未着手
- タグ・見出しの正規化（WP03バッチ3 T7）は本セッションでも未着手のまま

## 総括（2026-07-10 追加実行分）

- WP04は「D群完全実施＋H-2」（前セッション）に加え、「C・E・Hから10記事」を追加実施。作業書のC/E/H全項目完走には至っていないが、いずれも高品質な記事として合格基準をクリア
- git変更: 累計422ファイル。コミット・push は未実施（ユーザー判断待ち）
- 次にユーザーが判断すべきこと: (1) コミット実行、(2) WP04残り（C-2 Theory1本・E-1/E-5・H-1、計4項目規模）を次セッションで継続するか、(3) WP03残タスクとどちらを優先するか、(4) WP05・WP06（未着手）の着手判断

## WP04（最終仕上げ）— 完了

- **実施日**: 2026-07-10
- **体制注記**: 本タスクもフォーク環境の制約（Agentツールでのサブエージェント起動不可）により、監督が直接執筆し検証コマンドを自ら実行した。

### 作成記事一覧（新規4本）

| # | スラッグ | カテゴリ | 対応項目 |
|---|---------|---------|---------|
| 1 | `theory/mos-exam-format-scoring-basics` | theory | C-2（MOS Theory 3/3。マルチプロジェクト形式・採点方式・スコアレポートの読み方） |
| 2 | `method/boki-genka-keisan-wakaranai-hack` | method | E-1（簿記Negative-Narrative。工業簿記・原価計算の「勘定の流れが見えない」つまずきに特化し、既存の`boki-shiwake-drill-hack`の簡易言及とは別角度で深掘り） |
| 3 | `trend/boki-zensho-vs-nissho-comparison-hack` | trend | E-5（認知形成型。`itp-vs-info1-comparison-hack`型を簿記に移植し、全商簿記と日商簿記のレベル対応・知名度差をWebSearchで実査のうえ比較） |
| 4 | `career/fp2-jukendekaku-junbi-roadmap` | career | H-1（FP2級の受験資格3ルート「3級合格／AFP認定研修修了／実務経験2年以上」をWebSearchで実査し比較） |

全記事、対応するHub（mos-hub / boki-hub / fp-hub）と双方向内部リンクを設定。`boki-genka-keisan-wakaranai-hack`は`boki-shiwake-drill-hack`とも相互リンク。

### 自己検出・修正した不備
- 初稿で4記事7箇所の見出しに「」括弧が混入（過去2回と同じ失敗パターン）。`post_writer.md`のAI講師メタファー見出し（`### AI活用で「専任講師を月額20ドルで雇う」感覚`）は仕様書内では括弧付き表記だが、既存の全Hub記事・スポーク記事は括弧なし`AI活用で専任講師を月額20ドルで雇う感覚`で統一されていると判明（`grep`で18記事の実例を確認）。仕様書の表記より既存実装の統一表記を優先し、全7箇所を括弧なしに修正
- WebSearchでFP2級受験資格（3ルート・CBT完全移行）とMOS採点方式（マルチプロジェクト形式・プロジェクト単位採点・合格ライン非公開)を実査し、記事内の事実主張の正確性を担保

### 監督検証
- 見出しブラケット違反: `grep -n '^#\{2,4\} .*[「」]'` で対象4記事すべて0件（修正後）
- `pnpm build` → 成功・1313ページ（1302→1313、+11）
- frontmatter: 全記事でpublishDate ISO・lastmod 2026-07-10・tags3〜5・toc:true・persona・knowledge・metadata.description設定済みを確認
- 双方向内部リンク: `dist`実出力で4記事とも往復リンクの解決を確認（Hub→スポーク・スポーク→Hub）

### 判定: ✅ **合格・WP04完走**

### 重要な副次的発見（スコープ外・要ユーザー判断）
検証中に**サイト全体に影響する可能性のある構造的な問題**を発見した。`src/utils/blog.ts:67`の`const slug = cleanSlug(id)`は、コメント`// cleanSlug(rawSlug.split('/').pop())`が示す本来の意図（記事slugのみ）ではなく、カテゴリを含むフルID（例: `method/boki-hub`）をそのままpermalinkに使っており、その結果**投稿の実際のURL・sitemap掲載URLは`/method/boki-hub/`のようなカテゴリ付きパスになっている**。一方、サイト内のほぼ全ての記事本文の内部リンク（本セッションのWP01〜04で新規作成した記事を含む）は、既存記事の慣行に倣って`/boki-hub/`のようなカテゴリなしのフラットパスで書かれている。`git diff HEAD`で確認したところ、この`cleanSlug(id)`の実装は本日のセッション開始前から存在しており、本日の変更で生じたものではない。フラットリンクが実際に404になるかは未検証（Netlify側のfallback設定等を確認できていない）。**もし404になっているなら、サイト全体の内部リンク構造に関わる長期的な既知バグであり、WP04のスコープを超える。ユーザーに事実確認と対応要否の判断を仰ぐべき事項として記録する。**

---

## 緊急対応 — 内部リンクURL構造バグ修正（WP04発見事項への対応）

- **実施日**: 2026-07-10（メインセッションが直接対応、ユーザーに「今すぐ緊急調査・修正を最優先」の指示あり）
- **調査結果**:
  1. `dist/method/boki-hub/index.html` は実在するが `dist/boki-hub/` は存在しない → フラットパスは実際に404であることを確認
  2. `dist/sitemap-0.xml` の実URLは `syllabushack.com/method/boki-hub/` のようにカテゴリ付きで掲載されている → **本番URLは既にカテゴリ付きパスで検索エンジンにインデックスされている正規URL**。したがって修正すべきは「本文中の内部リンク」の方であり、URL構造（permalink設計）自体は変更しない方針を採用（変更するとインデックス済みURLが変わり既存のSEO評価を失うため）
  3. `netlify.toml`にはtheory移行分の個別301リダイレクトのみで、フラット→カテゴリ付きの汎用フォールバックは存在しない
- **対応内容**: スクリプト `fix-internal-links.js` を新規作成し、全384記事の本文（コードフェンス外）を走査。`](/slug/)` 形式のリンクのうち、既知の記事スラッグと一致するものを `](/category/slug/)` に一括変換。カテゴリ間で重複するスラッグは安全のため対象外（自動検出・スキップ、該当なし）。`blog`/`category`/`tag`/`about`等の予約パスは対象外
  - **結果**: 167記事・530リンクを修正
  - 修正記事全件のlastmodを2026-07-10に更新（`update-lastmod.js`で機械的に適用）
- **監督検証**:
  - `pnpm build` → 成功
  - `verify-links.js`で全記事本文中のカテゴリ付きリンク530件を実際のdist出力と突合 → 529件が実在ページに解決、残り1件（`method/pdf-to-text-guide` → `/app/pdf-to-text/`）はリンク先がdraft:true（未公開）のため意図的にビルド対象外。実害なし（公開時に自動解決）
- **判定**: ✅ **合格**
- **恒久対策**: `.agents/post_writer.md` を編集し2点を修正
  1. 新規ルール9.5として「内部リンクは必ず `/category/slug/` 形式で書く。フラット `/slug/` は見た目上正しく見えても実際は404になる」を明記
  2. Tutor Metaphorセクション（Rule 8・The Tutor Metaphorセクション）に見出し例として残っていた `### AI活用で「専任講師を月額20ドルで雇う」感覚`（括弧付き）を2箇所とも `### AI活用で専任講師を月額20ドルで雇う感覚`（括弧なし）に修正。これがWP04で3回連続発生した見出しブラケット混入の根本原因だったため
  - 未実施の提案: `fix-internal-links.js`相当のチェックをpre-commitやCIに組み込む案は今回スコープ外
