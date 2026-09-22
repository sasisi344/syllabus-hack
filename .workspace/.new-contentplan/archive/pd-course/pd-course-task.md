---
created: 2026-09-19
updated: 2026-09-22
tags:
  - シラバスハック
  - 20hours
  - プロフェッショナルデジタルスキル試験
  - task
---

# PD-M・PD-S（プロフェッショナルデジタルスキル試験）20時間コース 要件提議

> **2026-09-22アーカイブ**: PD-M・PD-Sとも本文執筆・本番公開まで完了したため、`pd-course/`から`archive/pd-course/`へ移動。
> 全体ロードマップ: [`../../course-rollout-roadmap.md`](../../course-rollout-roadmap.md)。IP→SG→DMに続く4本目・5本目として2026-09-19にユーザーが着手方針を決定。試験プロファイル分析は[`../../2027-exams/pd-2027-profile-report.md`](../../2027-exams/pd-2027-profile-report.md)を参照。本ファイルはPD-M・PD-S着手にあたって固めた方針の要件提議。実装フェーズの進捗管理はDM同様、本ファイルに追記していく。

## 0. 決定事項（2026-09-19）

1. **20時間コースの型をそのまま適用する**（IP/SG/DMと統一）。8章＋診断＋総復習＝20時間の構成を踏襲する
2. **着手順は PD-M（マネジメント）→ PD-S（システム）**（ユーザー指示、2026-09-19決定）。IPA20時間学習はまずIPAグループを完走させる方針の一環で、DMの次の2本として連続着手する
3. **PD-MとPD-Sは別コースとして扱う**。`pd-2027-profile-report.md` §5-5の原則（対象読者が違うものは別コンテンツにする）に従う。共通する中分類は「経営戦略・デジタル戦略」（中分類2）のみで、内容の大半は完全に棲み分けている（PD-M=マネジメント層の知識、PD-S=実装層の知識）
4. **`examId: 'pd-m'` / `'pd-s'` は登録済み**（2026-09-17、`src/content/config.ts`・`exam-id-catalog.md`）。`pd-2027-profile-report.md` §6の「examId未登録」の懸念は解消済み
5. **シラバスは2027年案（`syllabus-pd-m-2027.json` / `syllabus-pd-s-2027.json`、Ver.0.2）をそのまま使う**。DMと同様、完全新設試験のため新旧差分の概念はない
6. **科目A-1（共通知識・全PD試験＋SC試験で共通）は今回のシラバスに含まれず未取得**。このコースは科目A-2（専門知識）＋科目B（技能）のみを対象とすることを、コース説明文・FAQで明記する（DMコースの「公開過去問が存在しない」旨の明記と同じ扱い）
7. **PD-Sの「AI駆動開発」（バイブコーディング・エージェンティックコーディング・仕様駆動開発）と「フィジカルAI」は完全新規領域として重点的に厚く扱う**。現行のどの試験区分にも存在せず、シラバスハックの「生成AI×資格試験」という軸と最も親和性が高いテーマのため、DMの「データガバナンス」（第1〜2章）と同じ位置づけの核となる章にする
8. **PD-Mのガバナンス・監査／ビジネス関連法規（国際条約まで踏み込む範囲）は、既存theory記事の接続状況を要確認**。DMの第1〜2章と同様、既存コンテンツが薄い領域は書き下ろし比率を上げる

## 1. シラバスデータ（確認済み）

- `src/data/master/syllabus-pd-m-2027.json`・`syllabus-pd-s-2027.json` は取得・構造化済み（Week1で完了）。追加のPDF再抽出作業は不要
- PD-M: 大分類4・中分類8・キーワード599語・技能グループ4／技能項目15
- PD-S: 大分類4・中分類9・キーワード817語・技能グループ4／技能項目15
- 詳細な構造比較・テーマ整理は[`pd-2027-profile-report.md`](../../2027-exams/pd-2027-profile-report.md) §2〜3参照

## 2. 20時間コース設計

DM同様の手順でカリキュラムを設計する（`20hours-course-template.md` §7 手順2〜7準拠）。

- [x] PD-Mの中分類8個・599語を8章に再編し、章⇔中分類の対応表を作成 → 2026-09-22完了。中分類12（ガバナンス・監査）と28（ビジネス関連法規）を1章に統合し、技能（科目B）専用のケーススタディ章を第8章として確保する方針で確定。詳細は[`pd-m-course-curriculum.md`](./pd-m-course-curriculum.md)
- [x] PD-Sの中分類9個・817語を8章に再編し、章⇔中分類の対応表を作成 → 2026-09-22完了。PD-Mと異なり中分類数が多く語数の偏りも極端（32〜230語）なため、小さい中分類同士の統合（3組）と、最大の中分類21「開発・運用の方法論」（230語）の分割（決定事項7のAI駆動開発・フィジカルAIを独立章として切り出し）を組み合わせて7知識章＋技能ケーススタディ章の8章構成に再編。詳細は[`pd-s-course-curriculum.md`](./pd-s-course-curriculum.md)
- [x] PD-Mの既存theory記事との接続を確認 → 2026-09-22完了。経営戦略・DX戦略（第2章）は既存記事群との接続が厚い一方、ビジネス変革の方法論（第1章）・ガバナンス監査＋法規（第6章）は接続先がなく書き下ろし比率を上げる方針（`pd-m-course-curriculum.md` §4参照）
- [x] PD-Sの既存theory記事との接続を確認する → 2026-09-22完了。ネットワーク・クラウド・DB・アジャイル関連は既存theory記事群と接続できる一方、第1章（PD-M重複回避のためPD-M固有領域を除外）と第7章（AI駆動開発とフィジカルAI）は接続先がなく書き下ろし比率を上げる方針（`pd-s-course-curriculum.md` §5参照）
- [x] `pd-m-course-curriculum.md`を作成 → 2026-09-22完了
- [x] `pd-s-course-curriculum.md`を作成 → 2026-09-22完了
- [ ] Tier1のみで着手するか、Tier2（有料note）も並行企画するかを正式決定する（DM・SG同様「単層で様子見」を踏襲する想定だが、カリキュラム設計時に正式決定する）

## 2-1. 次のアクション（実装フェーズ）

DMコース（[`../dm-course/dm-course-task.md`](../dm-course/dm-course-task.md)）と同じ手順で、PD-M→PD-Sの順に実施する。

- [x] PD-Mカリキュラム設計（§2）→ 2026-09-22完了、詳細は[`pd-m-course-curriculum.md`](./pd-m-course-curriculum.md)
- [x] `scaffold-course.cjs`の`COURSES`に`pd-m`を追加し、章ドラフト骨組みを生成 → 2026-09-22完了。`.workspace/draft/course/pd-m/`にindex+8章を生成（語数64/81/47/100/129/105/73＋技能4大項目、カリキュラム設計と一致）。あわせてスクリプト側の互換性バグ2件を修正: (1) pd-m/pd-sのJSONは`major_categories`ではなく`knowledge_major_categories`を使うため両対応に修正、(2) pd-m/pd-sの技能`items`は`{id,name,...}`オブジェクトではなく`"1-1.見出し文"`形式の文字列のため、正規化関数に文字列パース処理を追加（PD-S着手時にも必要な修正のため恒久対応済み）
- [x] PD-M全8章＋index本文執筆・本番配置 → 2026-09-22完了
  - [x] 第1章「ビジネス変革とイノベーションマネジメント」→ 2026-09-22執筆完了。`src/data/course/pd-m/01-business-transformation-innovation.mdx`（4節・全64語をほぼ網羅、レビン/コッター/ADKARの視点比較コラム付き）＋章末チェック5問（`src/data/quiz/pd-m/course-ch1.json`）。`pnpm astro check`でスキーマエラーなしを確認。他章・indexが未完成のため`draft: true`のまま（DM同様、8章＋index＋診断＋総復習が揃った時点で一括`draft: false`に切り替える方針）
  - [x] 第2章「経営戦略とDX戦略」→ 2026-09-22執筆完了。`src/data/course/pd-m/02-strategy-dx.mdx`（5節・全81語を網羅。既存theory記事4本（SWOT分析・バリューチェーン分析・成長マトリクス・PPM）へのリンクで基礎フレームワークの再解説を回避し、DX経営・IT投資マネジメント・要件定義調達・エンタープライズアーキテクチャは書き下ろし。「システム戦略」と「システム企画」の階層関係を整理するコラム付き）＋章末チェック5問（`src/data/quiz/pd-m/course-ch2.json`）。`pnpm astro check`でスキーマエラーなしを確認。`draft: true`のまま
  - [x] 第3章「ビジネスモデル設計とマーケティング戦略」→ 2026-09-22執筆完了。`src/data/course/pd-m/03-business-model-marketing.mdx`（5節・全47語を網羅。既存theory記事2本（BPR・BPM基礎、プロダクトライフサイクル、CRM・SCM）へのリンクで再解説を回避）＋章末チェック5問（`src/data/quiz/pd-m/course-ch3.json`）。`pnpm astro check`でスキーマエラーなしを確認。`draft: true`のまま
  - [x] 第4章「ITサービスマネジメント」→ 2026-09-22執筆完了。`src/data/course/pd-m/04-service-management.mdx`（7節・全100語を網羅。既存theory記事「プロジェクト・サービスマネジメント概論」を導入部でリンクし、JIS Q 20000ベースで実務レベルまで深掘り。「変更管理」と「構成管理」の役割分担を整理するコラム付き）＋章末チェック5問（`src/data/quiz/pd-m/course-ch4.json`）。`pnpm astro check`でスキーマエラーなしを確認。`draft: true`のまま
  - [x] 第5章「プロジェクトマネジメント」→ 2026-09-22執筆完了。`src/data/course/pd-m/05-project-management.mdx`（8節・全129語を網羅、シラバス中最大の章。既存theory記事「プロジェクト・サービスマネジメント概論」を導入部でリンク。「14のマネジメント対象×5フェーズの掛け算で用語が生まれる」という構造整理コラム付き）＋章末チェック5問（`src/data/quiz/pd-m/course-ch5.json`）。`pnpm astro check`でスキーマエラーなしを確認。`draft: true`のまま
  - [x] 第6章「コーポレートガバナンスと監査・関連法規」→ 2026-09-22執筆完了。`src/data/course/pd-m/06-governance-audit-legal.mdx`（6節・全105語（ガバナンス監査54語＋ビジネス関連法規51語）を網羅。既存theory記事5本（コーポレートガバナンス・コンプライアンス・IT法務基礎・労働基準法36協定・労働者派遣法SES）にリンク。「内部統制」と「システム監査」の役割分担を整理するコラム付き）＋章末チェック5問
  - [x] 第7章「情報セキュリティマネジメント（マネジメント層の要点）」→ 2026-09-22執筆完了。`src/data/course/pd-m/07-security-management.mdx`（5節・全73語を網羅しつつSGコースへのリンク誘導で重複を回避、マネジメント層の判断軸に絞った構成）＋章末チェック5問
  - [x] 第8章「マネジメント実務ケーススタディ（技能）」→ 2026-09-22執筆完了。`src/data/course/pd-m/08-practice-casestudy.mdx`（技能4グループ15項目を、中堅製造業「サンプル製造株式会社」のDX推進室長・中村さんを主人公にしたケーススタディで網羅）＋章末チェック5問（ケーススタディ形式）
  - [x] index.mdx・診断テスト（10問）・総復習（20問）を作成 → 2026-09-22完了。`src/data/course/pd-m/index.mdx`＋`src/data/quiz/pd-m/course-diagnosis.json`（10問）・`course-review.json`（20問）。SG/DMコースへの相互内部リンク、科目A-1非対象の明記、SG重複領域の棲み分け説明を含むFAQ付き
  - [x] 全ファイルの`pnpm build`確認 → 2026-09-22完了。`draft: true`のまま1373ページでビルド成功を確認後、全8章＋indexを一括で`draft: false`に切り替えて再ビルド、1382ページ（+9＝8章＋index）でエラーなくビルド成功。`dist/course/pd-m/`に全ページ出力を確認済み。**PD-Mコース本文執筆フェーズ完了・本番公開済み**
- [x] PD-M診断・章末チェック・総復習の問題作成 → 2026-09-22完了（章末チェック8章分×5問、診断10問、総復習20問。すべてシラバス案のキーワード・技能例からの書き下ろし）
- [x] `method/advanced-ipa-hub`のPD-Mスタブ（「対策記事は近日公開予定です」）をコースへのリンクに更新 → 2026-09-22完了。DM同様の記載パターンで、本文中の解説段落と§末尾リストの2箇所を`/course/pd-m/`へのリンクに更新、`lastmod`を当日日付に更新。`pnpm astro check`でエラーなしを確認
- [x] PD-M公開前の最終調整 → 2026-09-22完了。DM同様の`dm-course-task.md` §4チェックリストを流用し全項目実施
  - [x] 全8章＋indexの誤字・プレースホルダー残骸チェック → `undefined`・`TODO`・スキャフォールドの雛形文言の残存なし、章間ナビ・chapterOrder・quizRefの整合性も1〜8で一致を確認
  - [x] 本文中の内部リンク17件（theory記事14件・course記事3件）をすべて実ファイル存在チェック → リンク切れなし
  - [x] 他記事からのカニバリ確認 → PD言及記事4本（`career/ipa-new-exam-target-guide`・`method/new-ipa-exam-study-strategy`・`trend/ipa-2027-restructuring`・`trend/syllabus-ai-knowledge-introduction`）は一般的な「PD試験」言及のみで`/course/pd-m/`への導線が未接続なだけ、カニバリは無し（DM同様、内部リンク強化の追加候補として記録のみ）
  - [x] `pnpm build`（本番ビルド）→ 1382ページ生成・0エラー（前回完了分の再確認）
  - [x] スマホ幅（375px）でのレイアウト確認 → `astro preview`でindex・第5章（用語数最大）・第6章（用語数2番目に多い）・第8章（ケーススタディ＋章末チェック）を実機幅で確認。横スクロール発生なし（`scrollWidth - clientWidth = 0`）、DM対応済みのKaTeX/コードブロック折り返し修正（`CourseLayout.astro`）がPD-Mにも正しく適用されていることを確認。章末チェック・診断テストのクイズ島も正常にハイドレート・クリック操作可能なことを確認
- [x] PD-Sカリキュラム設計 → 2026-09-22完了、詳細は[`pd-s-course-curriculum.md`](./pd-s-course-curriculum.md)
- [x] `scaffold-course.cjs`の`COURSES`に`pd-s`を追加し、章ドラフト骨組みを生成 → 2026-09-22完了。`.workspace/draft/course/pd-s/`にindex+8章を生成（語数87/108/87/108/197/167/63＋技能4大項目、カリキュラム設計と一致）。第1・2・4章は中分類統合（middlesに複数指定）、第6・7章は中分類21「開発・運用の方法論」をDM同様の`filter`関数（`PD_S_AI_PHYSICAL_KEYWORDS`配列、62種・シラバス原文の重複語「MLOps」を含め実質63語）で分割して実装。シラバスJSON側に「MLOps」の重複記載を発見（データ品質メモとして記録、対応不要）。`pnpm astro check`でスキーマエラーなしを確認
- [x] PD-S全8章＋index本文執筆・本番配置 → 2026-09-22完了
  - [x] 第1章「ビジネス・デジタル戦略とデジタルツール活用」→ 2026-09-22執筆完了。`src/data/course/pd-s/01-strategy-digital-tools.mdx`（6節・全87語を網羅。PD-Mコース第2章と同名中分類のため、「同じ中分類名でも扱う中身が違う理由」を整理するコラムを追加し重複回避を明示）＋章末チェック5問（`src/data/quiz/pd-s/course-ch1.json`）。Mermaid図解ポリシー策定後にエンタープライズアーキテクチャ4層構造の図解を追記。`pnpm astro check`でスキーマエラーなしを確認。他章・indexが未完成のため`draft: true`のまま
  - [x] 第2章「システム基盤とクラウド」→ 2026-09-22執筆完了。`src/data/course/pd-s/02-system-architecture-cloud.mdx`（4節・全108語を網羅。既存theory記事「クラウドの基礎」を導入部でリンク。クラウド移行の5R（Rehost/Replatform/Refactor/Retain/Retire）のトレードオフを整理するコラム付き）＋章末チェック5問（`src/data/quiz/pd-s/course-ch2.json`）。`pnpm astro check`でスキーマエラーなしを確認。`draft: true`のまま
  - [x] **Mermaid図解インフラを新規実装**（ユーザー指示、2026-09-22）→ クラウド・ネットワーク等の技術内容を図解するため、`mermaid`パッケージを追加し、クライアント側描画のPreact islandコンポーネント`src/apps/mermaid-diagram/MermaidDiagram.tsx`を新規作成（ChapterQuizと同じislandパターン。`MutationObserver`で`html.dark`トグルを検知し自動的にダークモード再描画）。スタイルは`KatexStyles.astro`と同じ方針で`src/components/common/MermaidStyles.astro`に分離（スマホ幅での横スクロール対応込み）。第2章に検証を兼ねて2つの図解を試験導入: ①リージョン・AZ・マルチリージョン構成の関係図、②クラウド移行5Rのトレードオフ図。`astro dev`でドラフトを一時的に`draft: false`にして実機確認（デスクトップ・375px幅とも横スクロールなし、ダークモード切替で再描画も正常動作）した後、`draft: true`に戻し済み。以降、ネットワーク・システムライフサイクル等の技術色が強い章で必要に応じて追加していく方針
  - [x] 第3章「ネットワーク」→ 2026-09-22執筆完了。`src/data/course/pd-s/03-network.mdx`（6節・全87語を網羅。既存theory記事3本（CCNAルーティング・CCNA VLAN/STP・FEネットワーク基礎）を導入部でリンク。OSI基本参照モデル7階層のMermaid図解付き）＋章末チェック5問（`src/data/quiz/pd-s/course-ch3.json`）。`pnpm astro check`でスキーマエラーなしを確認。`draft: true`のまま
  - [x] 第4章「データベースとセキュリティ実装技術」→ 2026-09-22執筆完了。`src/data/course/pd-s/04-database-security-implementation.mdx`（7節・全108語を網羅。既存theory記事3本を導入部でリンク。2相ロッキングプロトコルの成長期/縮退期、CAP定理の三すくみ関係の2つのMermaid図解付き）＋章末チェック5問（`src/data/quiz/pd-s/course-ch4.json`）。`pnpm astro check`でスキーマエラーなしを確認。`draft: true`のまま
  - [x] 第5章「システムライフサイクルプロセス」→ 2026-09-22執筆完了。`src/data/course/pd-s/05-system-lifecycle-process.mdx`（10節・全197語を網羅、シラバス中最大の章。既存theory記事3本を導入部でリンク。全工程の流れを俯瞰するMermaid図解を章冒頭に配置、レビュー技法の分類コラム付き）＋章末チェック5問（`src/data/quiz/pd-s/course-ch5.json`）。`pnpm astro check`でスキーマエラーなしを確認。`draft: true`のまま
  - [x] 第6章「開発方法論とDevOps実践」→ 2026-09-22執筆完了。`src/data/course/pd-s/06-development-methodology-devops.mdx`（8節・全167語を網羅。既存theory記事「アジャイル・スクラムの基礎」を導入部でリンク。スクラムのスプリントサイクル、CI/CD/継続的デプロイのパイプラインの2つのMermaid図解付き）＋章末チェック5問（`src/data/quiz/pd-s/course-ch6.json`）。`pnpm astro check`でスキーマエラーなしを確認。`draft: true`のまま
  - [x] 第7章「AI駆動開発とフィジカルAI」→ 2026-09-22執筆完了。`src/data/course/pd-s/07-ai-driven-development-physical-ai.mdx`（4節・全63語（原文重複語「MLOps」含む）を網羅、決定事項7の核となる章。既存記事の接続先がなく全編書き下ろし。仕様駆動開発を軸にしたAI駆動開発フロー、フィジカルAIの学習〜実機投入フローの2つのMermaid図解付き）＋章末チェック5問（`src/data/quiz/pd-s/course-ch7.json`）。`pnpm astro check`でスキーマエラーなしを確認。`draft: true`のまま
  - [x] 第8章「システム開発実務ケーススタディ（技能）」→ 2026-09-22執筆完了。`src/data/course/pd-s/08-practice-casestudy.mdx`（技能4グループ15項目を、産業用IoTセンサーメーカー「サンプルIoT株式会社」のシステムアーキテクト・木村さんを主人公にしたケーススタディで網羅。第4-3ではAI駆動開発（仕様駆動開発）の実務適用を扱う）＋章末チェック5問（`src/data/quiz/pd-s/course-ch8.json`、ケーススタディ形式）。`pnpm astro check`でスキーマエラーなしを確認。**PD-S全8章の本文執筆完了**
  - [x] index.mdx・診断テスト（10問）・総復習（20問）を作成 → 2026-09-22完了。`src/data/course/pd-s/index.mdx`＋`src/data/quiz/pd-s/course-diagnosis.json`（10問）・`course-review.json`（20問）。PD-M/DMコースへの相互内部リンク、科目A-1非対象の明記、PD-M重複領域の棲み分け説明を含むFAQ付き
  - [x] 内部リンク検証・`pnpm build`確認・公開 → 2026-09-22完了。theory記事11本・course記事3本の全リンク存在確認、章間ナビ1〜8の整合性確認、他記事からのカニバリなし確認（PD言及記事4本は導線未接続なだけ、PD-M同様の扱い）。`draft: true`のまま1382ページでビルド成功後、全8章＋indexを一括`draft: false`に切り替えて再ビルド、1391ページ（+9＝8章＋index）でエラーなくビルド成功。`astro preview`でモバイル幅（375px）を実機確認: index／第5〜8章（Mermaid図解を含む章すべて）で横スクロールなし、全Mermaid図解が正常にSVG描画されることを確認。`/course/`一覧ページにIP/SG/DM/PD-M/PD-Sの5コースが正しく表示されることも確認。**PD-Sコース本文執筆フェーズ完了・本番公開済み**
- [x] PD-S診断・章末チェック・総復習の問題作成 → 2026-09-22完了（章末チェック8章分×5問、診断10問、総復習20問。すべてシラバス案のキーワード・技能例からの書き下ろし）
- [x] `method/advanced-ipa-hub`のPD-Sスタブ（「対策記事は近日公開予定です」）をコースへのリンクに更新 → 2026-09-22完了。PD-M同様の記載パターンで、本文中の解説段落と§末尾リストの2箇所を`/course/pd-s/`へのリンクに更新。`pnpm astro check`でエラーなしを確認
- [x] PD-S公開前の最終調整（誤字・内部リンク・本番ビルド・スマホ幅レイアウト確認）→ 2026-09-22完了。詳細は§2-1「index.mdx・診断テスト...」の項目を参照

## 3. 保留・要判断事項

- [ ] PD試験のデータ・AI領域（PD-D相当）シラバスの追加取得要否は未定（`pd-2027-profile-report.md` §6参照）。PD-M/PD-Sの実装が完了してから改めて判断する
- [ ] 科目A-1（共通知識シラバス）の取得要否。SC・PD-M・PD-S全試験に影響する共通部分のため優先度は比較的高いが、今回のコースは科目A-2＋Bのみを対象とするため（決定事項6）、PD-M/PD-S実装には必須ではない
- [ ] `cert-hubs.ts`への`courseHref`追加要否・新規Hub記事（`method/pd-m-hub`・`method/pd-s-hub`）の要否は、DM同様、実装完了後に判断する
