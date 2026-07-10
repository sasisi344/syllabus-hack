# WP05 — 新規企画（Phase 3・新規執筆）

出典: TODO.md B・G・J・「未登録資格を探す」「research-kw-non-ipa.md forAI注釈から起票」

> WP04（クラスター完走）より優先度は下。着手順は 起票済み4件 → B → G → J。

## 起票済み・切り口確定（research-kw-non-ipa.md forAI 注釈）

- [ ] **N-1: FP2級「資格より知識」記事**（trend or method・QUEST）
  角度: 不合格・資格なしでも資産改善に使える知識。狙いKW「FP 資格なくても知識」「FP2級 落ちても意味ある」。想定slug: `trend/fp-knowledge-without-passing-cert`
- [ ] **N-2: 秘書検定×AI効率化記事**（method・BEAF）
  角度: 秘書業務そのものをAIで効率化（講師活用文脈含む）。狙いKW「秘書検定 AI活用」「秘書 ChatGPT 効率化」。想定slug: `method/secretarial-ai-efficiency-hack`
- [ ] **N-3: CCNA新卒・学生向けキャリア記事**（career）
  角度: 「CCNAに反応する企業」で就職先を見極める。狙いKW「CCNA 新卒 取得 価値」「CCNA 学生 取るべき」。想定slug: `career/ccna-new-grad-company-filter`
  ※ N-4（AWS資格診断アプリ）は WP06 A-5 へ移管

## B. IPA Theory 拡張（priority-roadmap Phase1 残）

- [ ] **B-1**: FE theory「OS制御（タスク管理・割込み・仮想記憶）」
- [ ] **B-2**: FE theory「ネットワーク基礎（TCP/IP・サブネット）」
- [ ] **B-3**: AP theory「セキュリティプロトコル詳解（TLS・IPsec・認証）」
- [ ] **B-4**: AP theory「プロジェクト計画立案（WBS・見積り・リスク）」
  ※ theory はカバー画像共通（`theory/common-cover.png`）・個別生成不要

## G. 新規クラスター開拓（リサーチ済み・Hub未着手）

着手前に `exam-id-catalog.md` への examId 追加と `.agents/kw_pattern_research.md` 経由のKW-DB作成が必須。

- [ ] **G-1**: 知的財産管理技能士 Hub（TODO.md 方針: 知財は優先的に広く記事を作成したい）
- [ ] **G-2**: ボイラー技士・冷凍機械責任者 クラスターHub
- [ ] **G-3**: 建設機械施工管理技士 記事化検討（検討のみ→結論を記録）
- [ ] **G-4**: ビジネス著作権検定 記事化検討（同上）
- [ ] **G-5**: 消防設備士・消防設備点検資格者 記事化検討（同上）
- [ ] **G-6**: 講師系資格（登録日本語教員・職業訓練指導員・研修講師認定）記事企画
- [ ] **G-7**: 金融IT検定の調査・記事化判断 — 論点: 未経験・学生が取得可能か、業界前提の昇進試験的位置づけか（TODO.md「未登録資格を探す」参照）。WebSearch で受験資格・想定読者を調査し「紹介記事」の可否を結論

## J. 判断待ち（実行前にユーザー判断を仰ぐ）

- [ ] **J-1**: TOEIC 着手の再検討（波3完走後に優先度再評価。着手する場合 examId 追加→ `method/toeic-hub` ＋ AI音声活用 Method×1）
- [ ] **J-2**: FP・AWS の examId 独立（現状 `common`。専用化のメリットとアプリ側 LocalStorage 影響を整理して提案のみ）

## 完了条件

WP04 と同一の記事品質基準（frontmatter 完全準拠・強調/見出しルール・内部リンク・build 成功）。「検討のみ」項目は調査結果と Go/No-Go 結論が本ファイルまたは `query-research/` 配下に記録されていること。
