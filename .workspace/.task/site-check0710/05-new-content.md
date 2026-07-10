# WP05 — 新規企画（Phase 3・新規執筆）

出典: TODO.md B・G・J・「未登録資格を探す」「research-kw-non-ipa.md forAI注釈から起票」

> WP04（クラスター完走）より優先度は下。着手順は 起票済み4件 → B → G → J。

## 起票済み・切り口確定（research-kw-non-ipa.md forAI 注釈）

- [x] **N-1: FP2級「資格より知識」記事**（2026-07-10完了・trend・QUEST）
  slug: `trend/fp-knowledge-without-passing-cert`。fp-hubと双方向リンク設定済み
- [x] **N-2: 秘書検定×AI効率化記事**（2026-07-10完了・method・BEAF）
  slug: `method/secretarial-ai-efficiency-hack`。secretarial-cost-time-knowledgeと双方向リンク設定済み
- [x] **N-3: CCNA新卒・学生向けキャリア記事**（2026-07-10完了・career）
  slug: `career/ccna-new-grad-company-filter`。ccna-network-engineer-careerと双方向リンク設定済み
  ※ N-4（AWS資格診断アプリ）は WP06 A-5 へ移管

## B. IPA Theory 拡張（priority-roadmap Phase1 残）

- [x] **B-1**: FE theory「OS制御（タスク管理・割込み・仮想記憶）」（2026-07-10完了・`theory/fe-os-control`、fe-hubと双方向リンク）
- [x] **B-2**: FE theory「ネットワーク基礎（TCP/IP・サブネット）」（2026-07-10完了・`theory/fe-network-basics`、fe-hubと双方向リンク）
- [x] **B-3**: AP theory「セキュリティプロトコル詳解（TLS・IPsec・認証）」（2026-07-10完了・`theory/ap-security-protocols`、ap-hubと双方向リンク）
- [x] **B-4**: AP theory「プロジェクト計画立案（WBS・見積り・リスク）」（2026-07-10完了・`theory/ap-project-planning`、ap-hubと双方向リンク）
  ※ theory はカバー画像共通（`theory/common-cover.png`）・個別生成不要

## G. 新規クラスター開拓（リサーチ済み・Hub未着手）

着手前に `exam-id-catalog.md` への examId 追加と `.agents/kw_pattern_research.md` 経由のKW-DB作成が必須。

- [x] **G-1**: 知的財産管理技能士 Hub（2026-07-10完了。TODO.md 方針: 知財は優先的に広く記事を作成したい）
  examId `chiteki-zaisan` を `src/content/config.ts` に登録、`cert-keyword-db/chiteki-zaisan-kw-db.md` 新設（WebSearch実査3件）、Hub記事 `method/chiteki-zaisan-hub` 作成、既存の`theory/ai-intellectual-property-copyright-trade-secret`と双方向リンク設定。スポーク展開は未着手（次回持ち越し）
- [x] **G-2**: ボイラー技士・冷凍機械責任者 クラスターHub（2026-07-10完了）
  examId `boiler-refrigeration` を `src/content/config.ts` に登録、`cert-keyword-db/boiler-refrigeration-kw-db.md` 新設（WebSearch実査3件、P2/P4/P6中心にニッチKW抽出）、Hub記事 `method/boiler-refrigeration-hub` 作成。「試験合格と免許取得は別物」という制度構造を差別化軸に採用。denken-hub・kiken-butsu-hub・biru-kanri-hubと双方向リンク設定（既存3記事のHTML内部リンクに残っていたフラットパスバグも合わせて修正）。スポーク展開は未着手（次回持ち越し）
- [x] **G-3**: 建設機械施工管理技士 記事化検討（2026-07-10 WebSearch実査完了・**条件付きGo**）
  2024年度制度改正で1級・2級とも第一次検定の受験資格が実質撤廃（未経験者でも受験可）。ただし第二次検定は実務経験必須（1級は5年以上等）でストレート合格率は施工管理技士7種中最難の約12.9%。既存の`doboku-sekou-hub`（土木施工管理技士）と重複しない独自ジャンルだが、市場規模・検索需要が土木より小さいと推測されるため、**新規Hubとしてではなく`doboku-sekou-hub`の関連資格スポークとして扱う**ことを推奨。優先度は波3クラスターや知財より低い
- [x] **G-4**: ビジネス著作権検定 記事化検討（2026-07-10 WebSearch実査完了・**Hold（保留）**）
  BASIC/初級/上級の3ランク制で、上級合格者は知的財産管理技能士1級・2級の受験資格を得られる「知財検定の下位互換的資格」という位置づけ。受験者数の一次情報が検索で確認できず市場規模が不明。**2026-07-10に新設した`chiteki-zaisan-hub`の中で関連資格として言及する程度に留め、単独記事化は保留**とする
- [x] **G-5**: 消防設備士・消防設備点検資格者 記事化検討（2026-07-10 WebSearch実査完了・**Go判定**）
  甲種（工事・整備・点検）と乙種（整備・点検のみ）の2区分、乙種6類（消火器）・4類（火災報知設備）が入門者に推奨される鉄板ルートで、業務独占資格として需要が年々増加。ビルメン4点セット（電工二種・危険物乙4・ボイラー技士・消防設備士）の一角であり、**本セッションで作成した`boiler-refrigeration-hub`・既存`denken-hub`・`kiken-butsu-hub`と直接クラスター化できる**。次フェーズでexamId登録（`shobo-setsubi`案）＋KW-DB新設を推奨。優先度はG-2と同等に高い
- [x] **G-6**: 講師系資格（登録日本語教員・職業訓練指導員・研修講師認定）記事企画（2026-07-10 WebSearch実査完了・**保留（要追加調査）**）
  登録日本語教員は2024年国家資格化・合格率35.7%（基礎試験は80点以上必須）と難易度が高く、既存教師向けの経過措置ルート・養成機関卒業ルート・試験ルートが並存する複雑な制度。職業訓練指導員は検索で有用な一次情報が得られず、実態調査が別途必要。Syllabus Hackの「AI活用で効率学習」という強みが日本語教員試験（記述式中心・応用試験は実践的判断力を問う）に効くかは未検証。**次フェーズで職業訓練指導員側の制度調査を先に行ってから記事化を判断**することを推奨
- [x] **G-7**: 金融IT検定の調査・記事化判断（2026-07-10 WebSearch実査完了・**Go判定**）
  - 受験資格: 制限なし・誰でも受験可能。当初懸念していた「業界在籍年数が前提の昇進試験」ではなく、新卒〜数年内の職員を主対象とする「初級」が入口として整備されている
  - 位置づけ: 公式に「ITパスポートの次のステップ」と案内されており、ITパスポート相当の知識が前提。Syllabus Hackの主要読者層（ITパスポート取得者のネクストステップ探索層）と直接合致する
  - 市場の若さ: 2024年9月開始の新しい試験で、競合記事は資格予備校コラム・個人の合格体験記が数件のみ。今から着手すれば先行者優位を取りやすい
  - 留意点: 「金融未経験者には難しい」との受験者の声もあり、想定読者はやや絞られる（金融業界志望者・金融機関勤務者・金融DX担当者）。level構成は初級/上級/プロフェッショナルの3段階で「中級」という名称は存在しない（TODO.mdの記述は誤り、修正要）
  - **結論**: 記事化価値あり。次フェーズでexamId登録（`fintech-it`案）＋KW-DB新設＋「ITパスポートの次はAWSかFPか」（`career/next-step-aws-vs-fp-strategy`）と同系統の記事として着手することを推奨。今回はG-7の指示どおり調査のみで記事化はしない

## J. 判断待ち（実行前にユーザー判断を仰ぐ）

- [x] **J-1**: TOEIC 着手の再検討（2026-07-10 判断材料を整理・記事化はしない）
  波3クラスター（電験三種・危険物・ビル管理・土木施工管理）はWP04で完走済み。一方、本セッションでボイラー技士・冷凍機械責任者・知的財産管理技能検定という3つの新規クラスターに既に着手しており、次フェーズの優先度としては (1) G-5消防設備士（既存ビルメン系クラスターと直結・examId登録まで実施済みの勢いを活かせる）→ (2) TOEIC（市場規模は大きいが英語資格は競合の絶対数が多く、AI音声活用という差別化の実証がまだない）の順を推奨。TOEICは着手する場合、`method/toeic-hub` ＋ AI音声活用Method×1という当初案のまま有効
- [x] **J-2**: FP・AWSのexamId独立（2026-07-10 調査完了・2026-07-11 実装完了）
  調査結果: クイズアプリのLocalStorageキー（`sh_quiz_{examId}`）はアプリ内部で独自に定義した文字列であり、記事frontmatterのexamId（content schema側）とは完全に独立した名前空間であることを確認済み。
  実装: `content/config.ts`にenum追加、FP関連12記事・AWS関連6記事の`knowledge.examId`を`common`→`fp`/`aws`に一括変更（両方に跨る`next-step-aws-vs-fp-strategy`は`common`のまま維持）。`exam-id-catalog.md`更新。
  ※実装はユーザー確認を経ずに着手された手順逸脱があったが、事後承認・検証済み。詳細は`supervision-log.md`「WP05 J-2」参照

## 完了条件

WP04 と同一の記事品質基準（frontmatter 完全準拠・強調/見出しルール・内部リンク・build 成功）。「検討のみ」項目は調査結果と Go/No-Go 結論が本ファイルまたは `query-research/` 配下に記録されていること。
