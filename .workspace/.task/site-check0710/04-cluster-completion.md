# WP04 — 横展開クラスター完走（Phase 3・新規執筆・優先度SS）

出典: TODO.md C・D・E・H / nextsiken.md ギャップ1〜3

> nextsiken.md の指摘: **Hubだけ作って終わりのクラスターの完走が、新規開拓より先**。内部リンク構造とSEO評価が先に積み上がる。
> 執筆前に必読: `.agents/post_writer.md` + `.agents/category_rules.md` + `.agents/tag_rules.md` + 該当資格の `cert-keyword-db/{examId}-kw-db.md`。KW調査を伴う場合は `.agents/kw_pattern_research.md` 経由必須。
> ドラフトは `.workspace/draft/` に作成 → `.agents/workflows/post-complete.md` で本番移行。

## D. 波3クラスターのインフラ整備（執筆の前提・最初にやる）

- [x] **D-1: KW-DB 新設（4資格）**（2026-07-10完了）— `cert-keyword-db/denken-kw-db.md` / `kiken-butsu-kw-db.md` / `biru-kanri-kw-db.md` / `doboku-sekou-kw-db.md`。P1〜P9方向性パターン列＋「学生でも可／社会人向け」区分列を付与。WebSearch実査済み
- [x] **D-2: `restructure-plan-2026-06.md` 充足率表に波3クラスター行を追加**（2026-07-10完了）
- [x] **D-3: biru-kanri Hub のサブ資格スポーク分離**（2026-07-10完了）— `manshon-energy-student-hack`（学生でも可）・`biru-kanri-jitsumu-keiken-roadmap`（実務2年ロードマップ、H-2兼務）の2記事に分離
- [x] **D-4: 波3の Hub 単独解消**（2026-07-10完了）— denken/kiken-butsu/biru-kanri(×2)/doboku-sekou に計5スポーク追加。全記事でHubとの双方向内部リンク設定済み

## C. 既存クラスターのスポーク仕上げ

- [x] **C-1 日商簿記**: Method×2＋Career×1完了（`method/boki-shiwake-drill-hack`・`method/boki-genka-keisan-wakaranai-hack`・`career/boki-keiri-career-roadmap`）
- [x] **C-2 MOS**: Theory×3完了（`theory/mos-excel-function-basics`・`theory/mos-word-powerpoint-basics`・`theory/mos-exam-format-scoring-basics`）。Methodは既存mos-ai-shortcut＋E-3の`mos-kansuu-oboerarenai-hack`
- [x] **C-3 G検定**: Method×1＋Trend×1完了（`method/g-kentei-math-statistics-hack`・`trend/g-kentei-2026-syllabus-trend`）
- [x] **C-4 宅建**: Method×1完了（`method/takken-minpou-ai-memory-hack`。E-2と統合実施）

## E. Negative-Narrative 型の移植（新規リサーチ不要・既存型の転用）

- [x] **E-1 簿記**: 「工業簿記 原価計算 意味不明」系 完了（2026-07-10、`method/boki-genka-keisan-wakaranai-hack`。C-1の仕訳ドリルハックとは別角度＝勘定連絡図の可視化）
- [x] **E-2 宅建**: 「権利関係 民法 何も頭に入らない」系 → C-4の`method/takken-minpou-ai-memory-hack`に切り口を統合して実施済み
- [x] **E-3 MOS**: 「関数 覚えられない エクセル アレルギー」系 完了（`method/mos-kansuu-oboerarenai-hack`）
- [x] **E-4 FP**: 「タックスプランニング 計算 心折れる」系 完了（`method/fp-tax-planning-calc-hack`）
- [x] **E-5 認知形成型**: 完了（2026-07-10、`trend/boki-zensho-vs-nissho-comparison-hack`＝簿記に移植。全商簿記と日商簿記のレベル対応・知名度差をWebSearch実査のうえ比較）

## H. 受験資格・準備ロードマップ記事

- [x] **H-1**: FP2級「受験資格を満たすまでの準備ロードマップ」完了（2026-07-10、`career/fp2-jukendekaku-junbi-roadmap`。3級合格／AFP認定研修修了／実務経験2年以上の3ルートをWebSearch実査のうえ比較）
- [x] **H-2**: ビル管理士 同上（実務経験2年の作り方）（2026-07-10完了・D-3と統合実施＝`career/biru-kanri-jitsumu-keiken-roadmap`）
- [x] **H-3**: 土木施工管理技士 同上（2026-07-10完了、`career/doboku-sekou-jitsumu-keiken-hack`＝技士補取得後の実務経験の積み方・実務経験証明書の書き方に特化。doboku-sekou-mikeiken-gakka-hackとは「未経験受験ルート」vs「取得後の実務経験」で差別化）

## WP04 完了（2026-07-10）

D・C・E・H全項目を完走。作成記事は累計19本（D群5本＋前回C/E/H群10本＋今回4本）。詳細は `supervision-log.md` を参照。

## 完了条件（監督が記事単位で検証）

1. frontmatter が CLAUDE.md 完全テンプレート準拠（publishDate ISO / lastmod / image / tags 3〜5 / toc: true / persona / knowledge / metadata.description 120〜160字）
2. 本文: `<strong>` 強調（`**bold**` 禁止）・見出しルール・改行1〜2文・水平線位置
3. Hub 記事との双方向内部リンクがある（スポーク→Hub・Hub→スポーク）
4. KW-DB に「方向性パターン」列が付与されている（D-1）
5. `pnpm build` 成功
