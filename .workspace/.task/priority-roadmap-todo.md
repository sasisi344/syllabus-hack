# 優先ロードマップ TODO（2026年6〜9月）

> **2026-06-19: 実行管理は `.workspace/.task/TODO.md`「統合タスクリスト B・C・H」に集約済み。本ファイルの未完了チェックボックスはそちらを正本とする。** 本ファイルは背景・分析資料として保持。
> 出典: [restructure-plan-2026-06.md](restructure-plan-2026-06.md) 「優先ロードマップ」「実施優先順位サマリー」を作業用にTODO化したファイル。
> 関連スキル: `.agents/cert_keyword_db.md`（横展開資格KW）/ `.agents/cert_hub_template.md`（Hub構成）/ `.agents/category_rules.md`

進捗確認時は `node .workspace/scripts/index-articles.js` で記事一覧を取得してから状態を更新する（手動スキャン禁止・CLAUDE.md準拠）。

---

## Phase 1（6月中: 基盤整備）

- [x] Uncategorized 6件のカテゴリ修正（2026-06-10 対応済み、出典 課題A）
- [x] 既存Hub記事のリンク強化（itp/fe/ap他、全17クラスターで2026-06-10 対応済み、出典 課題E）
- [ ] IPA理論ページのFE/AP拡張（部分対応中）
  - [x] FE theory: アルゴリズム・データ構造（`data-structures-basics`, `algorithm-search-sort`）
  - [ ] FE theory: OS制御
  - [ ] FE theory: ネットワーク基礎
  - [x] AP theory: DBスキーマ設計（`database-normalization`）
  - [ ] AP theory: セキュリティプロトコル詳解
  - [ ] AP theory: プロジェクト計画立案

---

## Phase 2（7月: 横展開第1弾）

> 各項目着手前に `.agents/cert_keyword_db.md` の該当KW DBを読み、KW DBの「状態」列も合わせて更新する。

### 優先度S

- [ ] **日商簿記2・3級**（Hub済み・Method/Career未着手）
  - [x] Hub（`method/boki-hub`）
  - [ ] Method記事 ×2（仕訳暗記ハック等）
  - [ ] Career記事 ×1
- [ ] **MOS**（Hub・Career済み・Theory未着手）
  - [x] Hub（`method/mos-hub`）
  - [x] Career ×3（`mos-back-office-expert-independence` / `mos-freelance-haken-reality` / `mos-instructor-school-path`）
  - [ ] Theory記事 ×3
  - [ ] Method記事 追加×1〜2（現状 `mos-ai-shortcut` のみ）

### 優先度A

- [ ] **G検定**（Hub済み・Method/Trend未着手）
  - [x] Hub（`method/g-kentei-hub`）
  - [ ] Method記事 ×2
  - [ ] Trend記事 ×1
- [ ] **宅建**（Hub済み・Method未着手）
  - [x] Hub（`method/takken-hub`）
  - [ ] Method記事 ×2（法律×AIメモリーハック角度）

### 優先度B

- [ ] **TOEIC**（未着手・KW DBのみ存在）
  - [ ] Hub新設（`method/toeic-hub` 想定、examId `toeic` は `exam-id-catalog.md` に未登録のため作成前に追加すること）
  - [ ] Method記事 ×1（AI音声活用角度）

---

## Phase 3（8〜9月: 横展開第2弾 + Career強化）

- [ ] Career記事の拡充（現状44件 → 目標70件）
  - [ ] 職種別（SE / 事務職 / 営業 / 教員 / 医療系）× 資格推奨マトリクス
  - [ ] 年齢別（20代 / 30代 / 40代以上）の資格選択ガイド
  - [ ] 「資格手当の実態データ」系記事（独自調査風）
- [ ] 資格比較記事群の整備
  - [ ] 簿記2級 vs FP2級
  - [ ] ITパスポート vs G検定
  - [ ] 宅建 vs 行政書士
  - [ ] AP vs AWS SAA
- [ ] ペルソナ別ランディング記事
  - [ ] 「文系大学生が1年で取れるIT資格ロードマップ」
  - [ ] 「事務職が30代で年収アップするための資格4選」
  - [ ] 「エンジニア未経験が転職に使えるIT資格ランキング」

---

## 実施優先順位サマリー（出典の表をチェックリスト化）

| 優先度 | アクション | 状態 |
|-------|---------|------|
| 即時 | Uncategorized 6件修正 | ✅ 完了 |
| 高 | 日商簿記クラスター新設（Hub + Method×3） | 🟡 Hub済み・Method/Career未着手 |
| 高 | MOS Hub新設 + 既存記事との統合 | 🟡 Hub・Career済み・Theory未着手 |
| 高 | G検定クラスター新設 | 🟡 Hub済み・Method/Trend未着手 |
| 中 | FE/AP theoryページ追加（各5件） | 🟡 一部対応（Phase1参照） |
| 中 | Career記事の職種別拡充 | ⬜ 未着手 |
| 中 | Hub記事の内部リンク強化 | ✅ 完了 |
| 低 | trend/theory の分類整理（URLは変えない） | ⬜ 未着手（出典 課題C） |
| 低 | 資格比較記事追加（4件） | ⬜ 未着手 |

---

## 完了後の更新

- 各チェック完了時に本ファイルを更新（`restructure-plan-2026-06.md` 側の表は更新不要、本ファイルが実行管理の正本）
- Hub新設時は `.workspace/.task/exam-id-catalog.md` の examId 登録確認・追記
- KW DB連携項目は完了後 `.workspace/data-set/cert-keyword-db/*.md` の「状態」列も更新
