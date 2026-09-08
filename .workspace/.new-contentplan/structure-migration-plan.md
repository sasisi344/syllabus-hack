---
created: 2026-09-07
updated: 2026-09-07
tags:
  - シラバスハック
  - roadmap
  - 構造移行
---

# 現行サイト構造の分析と20hours構造への移行手法

> [`new-content-plan.md`](./new-content-plan.md)（ターミナル）から参照。現行サイトの実測データをもとに、[`コンテンツ戦略の方針転換－20hours学習法への移行.md`](./コンテンツ戦略の方針転換－20hours学習法への移行.md) §4〜§8 の型をどう既存構造に載せるかを具体化したもの。数値はすべて 2026-09-07 時点の `src/` 実測。

---

## 0. 結論（先出し）

1. **既存の5カテゴリ・443記事・23Hub・21アプリには手を入れない**。20hours形式は既存 `post` コレクションとは別の新コレクション `course` として追加し、URL `/course/{examId}/` 配下に閉じ込める
2. 導線は **「SEO記事 → Hub → 20hoursコース（無料） → CBT（メールゲート）／note（有料）」の3層ファネル** に組み替える。トップページの第1CTAを「CBTアプリ」から「20時間コース」へ切り替える
3. ITパスポートはサイトの全記事の**過半（233本）**が関連記事であり、theory 76本が章の素材になる。パイロットは「新規執筆」ではなく**既存資産の再編＋章の骨格執筆**で成立する
4. 2027年対応は、`syllabus-ip.json`（現行 v6.5・旧3区分）と並列に **2027年案の新3区分データを追加**し、旧→新のマッピング関数で表示だけ切り替える方式にする。既存問題データの一括書き換えはしない
5. メールゲートは静的ホスティングの制約上「クライアント側ソフトゲート（Google Forms＋localStorage）」で開始する。守るべき収益がまだ無い現段階では十分（元メモ §8 と整合）

---

## 1. 現行構造の棚卸し（実測）

### 1-1. コンテンツ資産

| 項目 | 実測値 | 備考 |
| --- | --- | --- |
| 総記事数 | 443本 | trend 90 / method 143 / career 76 / theory 106 / app 28 |
| Hub記事 | 23本 | `method/*-hub`。資格クラスタごとの入口。`src/data/cert-hubs.ts` がナビ正本 |
| ITパスポート関連記事 | **233本** | theory 76 / method 58 / trend 57 / career 30 / app 12（本文に「ITパスポート」を含む） |
| SG関連記事 | 42本 | career 14 / method 14 / trend 9 / app 3 / theory 2 |
| `knowledge.examId` 付与率 | 低い | common 48 / ip 6 / fe 5 …（443本中 約100本のみ）。**IP関連233本のうち examId:'ip' は6本** — 記事と資格の紐付けはタグ頼み |
| 登録アプリ | 21件 | quiz 15 / tool 5 / converter 0。IP系は it-passport-quiz + 3ドリル |

### 1-2. 問題・シラバスデータ

| データ | 実測値 | 場所 |
| --- | --- | --- |
| ITパスポート問題 | **334問** | `src/data/quiz/it-passport/` strategy 101 / technology 101 / management 81 / generative-ai 36 / predicted 15、＋ `master/questions-it-passport.json` 10問（今日の1問用） |
| SG問題 | 108問 | `src/data/quiz/sg/` strategy 49 / management 24 / technology 20 / practical 15 |
| ITパスポート シラバス構造化データ | v6.5 | `src/data/master/syllabus-ip.json`：3区分 / 大分類9 / 中分類23 / **キーワード1,171語** |
| 2027年案シラバス | **未取得** | `.workspace/syllabus-data-pdf/` には現行版のみ。`_inbox/IPA資格試験の再編と新体制について.md` に概要のみ |

> 注: `.agents/quiz_data_rules.md` は問題データの正本を `src/data/master/` と記載しているが、実体の大半は `src/data/quiz/{examId}/` にある。移行作業の前にスキルファイルを訂正すること。

### 1-3. 技術構造

| 要素 | 現状 | 20hours移行への影響 |
| --- | --- | --- |
| フレームワーク | Astro 5 + AstroWind、`output: 'static'` | サーバレス関数なし。ゲート/フォームはクライアント側 or 外部SaaS |
| コンテンツコレクション | `post` の1つのみ（`src/content/config.ts`） | 章の順序・親子関係を表す型がない |
| URL設計 | `/{category}/{slug}/`（id が `category/slug`） | 2階層（コース→章）は既存パターンに乗らない |
| カテゴリページ | `[category]/[...page].astro`、6件/ページで paginate、theory/app は分岐表示あり | 章一覧をカテゴリページで出すと分割される |
| 記事テンプレート | `SinglePost.astro`：toc / faqs JSON-LD / readingTime / RelatedPosts / Hub判定（slug末尾 `-hub`） | readingTime（読了目安）は**既に実装済み**、流用可 |
| Markdownパイプライン | remark: readingTime, math、rehype: katex, responsiveTables / lazyImages / normalizeInternalLinks、remark-link-card-plus | **KaTeX導入済み（2026-09-07）**。CSSは `KatexStyles.astro` importで章ページ単位にスコープ |
| インタラクティブ | Preact islands。`src/apps/shared/GenericQuizApp.tsx` / `BaseQuizApp.tsx` が共通基盤 | 診断テスト・章末チェックは GenericQuizApp を流用できる |
| 進捗保存 | localStorage `sh_quiz_{examId}`（履歴100件上限） | コース進捗も同じ規約で `sh_course_{examId}` にできる |
| フォーム | `/contact` に Google Forms iframe のみ | メールゲートの受け皿は現状ゼロ |
| トップページ | Hero第1CTA＝「試験対策アプリを使う」→ `/category/app/`、`/try`（noindex）がCBT一覧 | 新方針と逆。CTA差し替えが必要 |
| ナビ | 資格から探す（Hub）／トレンド／学習メソッド／キャリア／用語解説／ウェブアプリ | 「学習コース」の入口がない |

---

## 2. 現行構造と新プランのギャップ

| # | ギャップ | 影響 |
| --- | --- | --- |
| G1 | **学習の「順路」が存在しない**。Hubはリンク集で、章立て・前後関係・進捗の概念がない | 20hoursの「診断→カリキュラム→章→チェック」を置く場所がない |
| G2 | カテゴリ軸（trend/method/career/theory/app）は**記事タイプ**であり**学習単位**ではない | コース→章の2階層をカテゴリで表現すると paginate・タグ・関連記事にノイズが混ざる |
| G3 | IP関連233本が5カテゴリに分散。theory 76本は章の素材だが束ねる構造がない | 章ページを新規に書き下ろすと theory とカニバリする |
| G4 | CBTアプリは完全オープン。ゲート・リスト構築機構がゼロ | 有料noteへの導線が作れない |
| G5 | `ExamField` 型・問題JSON・`syllabus-ip.json` がすべて旧3区分（strategy/management/technology） | 2027新3区分（ビジネス/テクノロジー/セキュリティ・倫理）で章立てすると既存データと区分が食い違う |
| G6 | 数式表示なし | 2本目候補（統計学・DL）で必須 |
| G7 | トップ・ナビが「CBTアプリ」を主役にしている | 新方針（CBTは無料のおまけ）と逆 |
| G8 | 2027年案シラバスのデータが未取得 | 新区分ベースの章立てを作る根拠データがない |

---

## 3. 目標構造（To-Be）

### 3-1. URL設計

```
/course/                      学習コース一覧（学習カテゴリTOP）
/course/ip/                   ITパスポート コースTOP（診断テスト＋カリキュラムマップ＋章一覧）
/course/ip/01-business/       第1章（章ページ。読了目安・本文・章末チェック・前後ナビ）
/course/ip/02-strategy/
 …
/course/ip/06-security-ethics/
/course/sg/                   2本目以降（同じ型）
```

- 既存URLは一切変更しない。`/method/itp-hub/` ↔ `/course/ip/` ↔ `/app/it-passport-quiz/` を相互リンク
- `/course/` は index 対象（`/try` は noindex のまま。役割が重複するので将来 `/try` → `/course/` へ 301 も検討）

### 3-2. 導線モデル（3層ファネル）

```
[1] SEO流入: theory / trend / method / career 記事（既存443本）
       ↓ 記事末尾・Hub冒頭にコースCTA
[2] 無料コース: /course/{examId}/（20時間学習法）
       ↓ 章末チェック → コース完走
[3a] CBT演習: /app/{quiz}/ （メールゲート＝リスト構築）
[3b] 有料note: 合格テキスト（章ページ末尾・コース完走画面から誘導）
```

### 3-3. 章立て案（ITパスポート・2027新3区分ベース）

`syllabus-ip.json` v6.5 の大分類9を新3区分へ寄せて6章にまとめる案。Week1の「新旧シラバス対応表」で確定させる。

| 章 | 新区分 | 旧区分からの対応（大分類） | 既存素材（例） |
| --- | --- | --- | --- |
| 01 ビジネスの基本 | ビジネス | 企業と法務（企業活動・法務） | theory: PL・労基法36協定・下請法・派遣法 等 |
| 02 経営戦略とシステム戦略 | ビジネス | 経営戦略（3中分類）・システム戦略（2中分類） | theory: クラウド選定・データ活用 等 |
| 03 マネジメント | ビジネス（DXマインド含む） | 開発技術・PM・サービスマネジメント | theory: 品質管理手法・契約形態 等 |
| 04 テクノロジの基礎 | テクノロジー | 基礎理論・コンピュータシステム | theory: CPU/メモリ・集合と論理・統計基礎 等 |
| 05 ネットワークとデータ | テクノロジー（データマネジメント基礎を追加） | 技術要素（NW・DB） | theory: サンプリング・テキストマイニング 等 |
| 06 セキュリティ・倫理とAI | セキュリティ・倫理 | 技術要素（セキュリティ）＋生成AI | quiz: generative-ai 36問、theory: プロンプト工学 等 |

---

## 4. 実装方式の比較と推奨

| 方式 | 内容 | 長所 | 短所 |
| --- | --- | --- | --- |
| A. `post` に `category: 'course'` を追加 | 既存コレクションに章記事を混ぜ、`[category]` テンプレートで分岐 | 改修最小。theory/app の分岐前例あり | 章の順序・前後ナビ・進捗が `post` スキーマに無い／6件 paginate に割れる／タグ・関連記事・sitemap に章が混入 |
| **B. 新コレクション `course`（推奨）** | `src/data/course/{examId}/` に index + 章MD、専用ルート `src/pages/course/` | 構造が明確。既存443本・SEOロジックに影響ゼロ。章順・進捗・章末クイズをスキーマで型付けできる | テンプレート3枚＋レイアウト1枚の新規実装（見積 2〜3日） |
| C. 外部（note/Notion）にコースを置く | Astroは入口だけ | 実装ほぼ不要 | 無料コンテンツがサイト外に流出しSEO資産にならない。基本理念「アカデミックなシンボル」と矛盾 |

**推奨は B**。理由: 20hoursの型（順路・進捗・章末チェック）は「記事」ではなく「教材」であり、`post` のブログ前提（時系列・タグ・関連記事）と相性が悪い。切り離すことで既存KPIを一切崩さない。

### 4-1. `course` コレクションのスキーマ案

```ts
// src/content/config.ts に追加
const courseCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/data/course' }),
  schema: z.object({
    title: z.string(),
    examId: z.enum([...]),            // post と同じ enum を共有
    kind: z.enum(['index', 'chapter']),
    order: z.number().optional(),     // 章番号
    estimatedMinutes: z.number().optional(), // 章の目安（20hの配分）
    field2027: z.enum(['business', 'technology', 'security-ethics']).optional(),
    quizRef: z.string().optional(),   // 章末チェック JSON（src/data/quiz/{examId}/course-ch{n}.json）
    relatedPosts: z.array(z.string()).optional(), // 引用する theory 記事の id
    noteUrl: z.string().url().optional(),         // 有料続きへの導線
    draft: z.boolean().optional(),
    lastmod: z.coerce.date().optional(),
    metadata: metadataDefinition(),
  }),
});
```

### 4-2. 新規ファイル一覧（実装スコープ）

| ファイル | 役割 |
| --- | --- |
| `src/pages/course/index.astro` | コース一覧（学習カテゴリTOP） |
| `src/pages/course/[exam]/index.astro` | コースTOP：診断テスト island＋カリキュラムマップ＋章一覧 |
| `src/pages/course/[exam]/[chapter].astro` | 章ページ：本文＋読了目安＋章末チェック island＋前後ナビ＋note導線 |
| `src/layouts/CourseLayout.astro` | 章ナビ・進捗バー・KaTeX CSS 読み込み（コース配下のみ） |
| `src/apps/course-progress/progress.ts` | `sh_course_{examId}` に章完了フラグを保存（既存 progress.ts の規約に準拠） |
| `src/apps/course-quiz/ChapterQuiz.tsx` | `GenericQuizApp` の薄いラッパー（3〜4問・合格ライン表示） |
| `src/apps/email-gate/EmailGate.tsx` | CBTアプリ前段のソフトゲート |
| `src/data/course/ip/index.md`, `01-business.md` … `06-security-ethics.md` | ITパスポート パイロット本体 |
| `src/data/quiz/it-passport/diagnosis.json`, `course-ch1.json` … `course-ch6.json` | 診断10問＋章末3〜4問×6 |
| `src/data/master/syllabus-ip-2027.json` | 2027年案の新区分データ（v6.5 と併存） |

---

## 5. 具体的な移行手法（フェーズ別）

### Phase 0 — 設計・データ準備（Week1）

| # | 作業 | 成果物 | 補足 |
| --- | --- | --- | --- |
| 0-1 | 2027年案シラバス（ITパスポート）を取得し構造化 | `src/data/master/syllabus-ip-2027.json`、`.workspace/data-set/ip-syllabus-2027-mapping.md`（旧9大分類→新3区分の対応表） | **G8の解消が最優先**。未公開部分は `_inbox` メモの区分説明で暫定マッピング |
| 0-2 | 章立て確定（§3-3 を叩き台に6章） | 章⇔既存theory記事の対応表 | 章本文は「要約＋theoryへのリンク」で、theory とのカニバリを構造的に回避する |
| 0-3 | `course` コレクションのスキーマ確定 | `config.ts` 差分案 | §4-1 |
| 0-4 | KaTeX PoC | ~~`remark-math` + `rehype-katex` を `astro.config.ts` の `markdown` に追加、`katex.min.css` は CourseLayout でのみ読み込み~~ → **完了（2026-09-07）**。`src/components/common/KatexStyles.astro` を新設し、CourseLayout実装前でも個別ページからimportしてスコープCSSを検証できる形にした | ビルド時間+1.66s（誤差範囲）、全ページ共通CSSはバイト単位で不変を確認。詳細は [`week1-task.md`](./week1-task.md) |
| 0-5 | メールゲート方式の決定 | 判断メモ | 静的サイトのため候補は (a) Google Forms＋localStorage フラグ（最小・リストはスプレッドシート）(b) 外部フォームSaaS（Formspree等）(c) 自前API（不可: サーバレス無し）。**推奨 (a) で開始** |

### Phase 1 — コンテンツ制作（Week2）

| # | 作業 | 成果物 | 既存資産の流用 |
| --- | --- | --- | --- |
| 1-1 | 診断テスト10問 | `diagnosis.json`（新3区分の `field2027` 付き） | 既存334問から新区分に均等に抽出・改題 |
| 1-2 | 章ページ原稿6本 | `src/data/course/ip/0n-*.md` | theory 76本・itp-hub の要約を再編。目標: 本文の50%以上が既存記事への要約＋リンク |
| 1-3 | 章末チェック3〜4問×6 | `course-ch1〜6.json` | 既存問題の再利用可 |
| 1-4 | カリキュラムマップ | コースTOPの静的3パターン（初学者60h／実務者20h／直前10h） | v1は診断結果→パターン選択の静的分岐。動的配分は v2 |

### Phase 2 — 実装・公開（Week3）

| # | 作業 | 実装ポイント |
| --- | --- | --- |
| 2-1 | ルート・テンプレート3枚＋CourseLayout | §4-2。`readingTime` は既存 remark plugin をそのまま使う |
| 2-2 | 進捗保存 | `sh_course_ip` に `{ completedChapters: number[], diagnosis: {...}, lastUpdated }`。既存規約（`typeof window` チェック・try/catch）準拠 |
| 2-3 | 章末クイズ island | `GenericQuizApp` に `questions` と `examId="ip-course-ch1"` を渡す。LocalStorage キー衝突は `quiz_app_rules.md` §2 で確認 |
| 2-4 | メールゲート | `EmailGate.tsx`：`sh_gate_email` フラグが無ければ Google Forms（埋め込み or 遷移）→ 送信後にフラグ設定して `QuizApp` を表示。`it-passport-quiz/index.mdx` の `<QuizApp>` をラップ |
| 2-5 | 導線の付け替え | ① `index.astro` Hero 第1CTA → `/course/` ② `navigation.ts` に「学習コース」追加 ③ `cert-hubs.ts` に `courseHref` を追加し Hub カードから両方へ ④ `itp-hub` 冒頭にコースCTA ⑤ 章ページ末尾に note 導線 |
| 2-6 | sitemap | `astro.config.ts` の `serialize` で `/course/` 配下を Hub と同じ priority に |
| 2-7 | 記事側の逆リンク | theory 記事のうち章で引用した記事に「この用語は ITパスポートコース 第n章 で扱っています」を追記（Week3 では上位10本のみ、残りは順次） |

### Phase 3 — 計測（Week4）

- GA4 カスタムイベント: `course_start` / `chapter_complete` / `diagnosis_done` / `gate_submit` / `note_click`
- GSC: `/course/` 配下のインデックス状況、`itp-hub` からの遷移率
- 既存KPI（CBTアプリPV・Hub順位）が落ちていないことの確認

---

## 6. 2027年対応の技術負債と処理順序

| 対象 | 現状 | 対応 | 時期 |
| --- | --- | --- | --- |
| `ExamField` 型（`it-passport-quiz/types.ts`） | `strategy / management / technology / generative-ai / practical` | union に `business / security-ethics` を**追加**（既存値は削除しない）。`FIELD_LABELS` も追加 | Week1（非破壊なので早期に） |
| 問題JSON 334問の `field` | 旧3区分 | `transformQuestions.ts` に `mapFieldTo2027()` を追加し、**表示側だけ**新区分に変換。JSON本体は書き換えない | Week2 |
| `syllabus-ip.json` | v6.5 | `syllabus-ip-2027.json` を併置。`version` で切替 | Week1 |
| Hub・trend記事の「3分野（ストラテジ/マネジメント/テクノロジ）」表記 | itp-hub 等に旧区分の配点表 | 2027年春の新試験開始前に一括リライト。今は trend 記事1本で「変わる」ことを告知（`week4-task.md`） | 2026年冬〜2027年春 |
| `DailyQuizSection` | `master/questions-it-passport.json`（10問）から日替わり | 新区分表示に追随（`mapFieldTo2027` 適用） | Week2 |

---

## 7. リスク・判断事項

- **ソフトゲートの限界**: 静的ホスティングでは「メール入力→localStorage」以上の制御はできない（開発者ツールで回避可能）。守る収益が無い段階では許容。有料資産は note 側に置く前提を崩さない
- **カニバリ**: 章ページと theory 記事が同KWで競合しうる。章ページは「要約＋リンク」に徹する編集ルールを `.agents/` に明文化する（`course_writer.md` 新設候補）
- **`/try` の扱い**: `/course/` と役割が重複。noindex のまま残すか 301 するか — 公開後に判断
- **theory 記事の examId 未付与**: IP関連233本のうち `examId:'ip'` は6本。章⇔記事の対応表を作る過程で theory 記事に `knowledge.examId` を付け直すと、将来の自動関連付け（章ページで examId 一致記事を自動列挙）が可能になる。Week2 の副産物として実施推奨
- **スキルファイルの訂正**: `quiz_data_rules.md` の問題データ配置（`src/data/quiz/` 未記載）、`quiz_app_rules.md` §2 に `ip-course-ch{n}` / `sh_course_` の追記

---

## 8. Week ファイルへの反映（追加提案）

| Week | 追加すべきタスク |
| --- | --- |
| Week1 | 0-1（2027シラバス取得・構造化）、0-3（`course` スキーマ確定）、0-5（ゲート方式決定）、`ExamField` union 追加 |
| Week2 | 1-2 で theory 76本の対応表作成と `examId:'ip'` 付け直し、`mapFieldTo2027()` 実装 |
| Week3 | 2-5 導線付け替え5点、2-6 sitemap、2-7 逆リンク上位10本 |
| Week4 | GA4 イベント5種の実装確認、`/try` の扱い判断 |

---

## 9. TODO旧§1「サイト構成の見直し」の結論（2026-09-08）

> 旧`.workspace/.task/TODO.md` §1の3項目に対する回答（2026-09-09に完了済みとして`archive/completed-2026-09-09.md`へ移動。現行TODO.md §1は別タスク「既存記事の統廃合」に採番し直されている点に注意）。実装（コード変更）は `course` コレクションが存在しないと成立しないため Week3（§5 Phase2 2-5）で行う。本節は設計判断の確定版。

### 9-1. 現行カテゴリ構造と `course` の関係（整理）

既に §0 結論1・§4-1 の通り確定済み。要点のみ再掲：

- `trend/method/career/theory/app` の5カテゴリは**手を入れない**。`course` は独立コレクションで、既存カテゴリ体系の外側に追加する
- カテゴリ = 記事タイプ（読み物）、`course` = 学習パス（順路・進捗・章末チェック）という別軸である
- この結論は `.agents/category_rules.md`「Relationship to the `course` Collection」節に明文化済み（2026-09-08追記）

### 9-2. トップページ・グローバルナビの導線設計（反映先）

設計自体は §3-2（3層ファネル）・§5 Phase2 2-5 で確定済み。Week3実装時の変更点をここに一覧化する：

| 箇所 | Before | After |
| --- | --- | --- |
| ヘッダーナビ (`navigation.ts`) | 資格から探す／トレンド／学習メソッド／キャリア／用語解説／ウェブアプリ | 「資格から探す」の直後に「学習コース」を追加（`/course/`） |
| トップページ Hero 第1CTA | 「試験対策アプリを使う」→ `/category/app/` | 「20時間コースで学ぶ」→ `/course/` に差し替え。旧CTAは第2CTAへ降格 |
| フッター (`footerData`) | 資格から探す／トレンド／学習メソッド／キャリア戦略／用語解説／ウェブアプリ | 「学習コース」を「資格から探す」の直後に追加 |
| `method/itp-hub` 冒頭 | コース導線なし | コースCTA（`/course/ip/`）を追加 |
| 章ページ末尾 | — | note導線（Tier2実装後）／CBTアプリへのリンク |

実装タスクとしての実体は §5 Phase2 2-5 と重複するため、Week3で1回のみ実施する（本節は「設計は確定済み」の記録用）。

### 9-3. `/certifications/` との重複・住み分け（確認）

`/certifications/`（`certifications.astro` + `cert-hubs.ts`）と `/course/` は役割が異なり、重複しない：

- **`/certifications/`**: 「資格を選ぶ」入口。`cert-hubs.ts` に登録された全26資格クラスタを横断的に一覧化し、各資格のHub記事（`/method/{slug}-hub/`）へ誘導する。**扱う全資格が対象**（courseの有無を問わない）
- **`/course/`**: 「（courseコレクションを持つ資格を）体系的に学ぶ」入口。当面はITパスポートのみ、将来的にcourse実装済みのexamIdのみを一覧化する
- **関係は階層であり重複ではない**: `/certifications/`（資格を選ぶ）→ Hub記事（資格を攻略する）→ `/course/{examId}/`（courseがある資格のみ、体系的に学ぶ）→ CBT／note（演習・応用）。`course` は `/certifications/` の代替ではなく、Hub配下に生える追加ステップという位置づけ
- **実装への申し送り（Week3, §5 Phase2 2-5 ③に統合）**: `cert-hubs.ts` の `CertHub` interface に `courseHref?: string` を追加し、course実装済みのexamIdのみ値をセット。`certifications.astro` のカードに `courseHref` があれば「20時間コースで学ぶ →」バッジを追加表示する。`/certifications/` 自体のページ構造・全資格一覧という役割は変更しない

**判断**: `/certifications/` に対する新規ページ・構造変更は不要。`courseHref` 追加のみで住み分けが成立する。
