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
- [ ] **G-2**: ボイラー技士・冷凍機械責任者 クラスターHub
- [ ] **G-3**: 建設機械施工管理技士 記事化検討（検討のみ→結論を記録）
- [ ] **G-4**: ビジネス著作権検定 記事化検討（同上）
- [ ] **G-5**: 消防設備士・消防設備点検資格者 記事化検討（同上）
- [ ] **G-6**: 講師系資格（登録日本語教員・職業訓練指導員・研修講師認定）記事企画
- [x] **G-7**: 金融IT検定の調査・記事化判断（2026-07-10 WebSearch実査完了・**Go判定**）
  - 受験資格: 制限なし・誰でも受験可能。当初懸念していた「業界在籍年数が前提の昇進試験」ではなく、新卒〜数年内の職員を主対象とする「初級」が入口として整備されている
  - 位置づけ: 公式に「ITパスポートの次のステップ」と案内されており、ITパスポート相当の知識が前提。Syllabus Hackの主要読者層（ITパスポート取得者のネクストステップ探索層）と直接合致する
  - 市場の若さ: 2024年9月開始の新しい試験で、競合記事は資格予備校コラム・個人の合格体験記が数件のみ。今から着手すれば先行者優位を取りやすい
  - 留意点: 「金融未経験者には難しい」との受験者の声もあり、想定読者はやや絞られる（金融業界志望者・金融機関勤務者・金融DX担当者）。level構成は初級/上級/プロフェッショナルの3段階で「中級」という名称は存在しない（TODO.mdの記述は誤り、修正要）
  - **結論**: 記事化価値あり。次フェーズでexamId登録（`fintech-it`案）＋KW-DB新設＋「ITパスポートの次はAWSかFPか」（`career/next-step-aws-vs-fp-strategy`）と同系統の記事として着手することを推奨。今回はG-7の指示どおり調査のみで記事化はしない

## J. 判断待ち（実行前にユーザー判断を仰ぐ）

- [ ] **J-1**: TOEIC 着手の再検討（波3完走後に優先度再評価。着手する場合 examId 追加→ `method/toeic-hub` ＋ AI音声活用 Method×1）
- [ ] **J-2**: FP・AWS の examId 独立（現状 `common`。専用化のメリットとアプリ側 LocalStorage 影響を整理して提案のみ）

## 完了条件

WP04 と同一の記事品質基準（frontmatter 完全準拠・強調/見出しルール・内部リンク・build 成功）。「検討のみ」項目は調査結果と Go/No-Go 結論が本ファイルまたは `query-research/` 配下に記録されていること。
