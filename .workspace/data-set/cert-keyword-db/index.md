# 資格キーワードDB — インデックス

> **目的**: 検索KW・通称・略称を `examId`・Hub記事・記事タイプに結びつけ、AIエージェントが記事企画・執筆時に参照するナレッジベース。  
> **正本ディレクトリ**: `.workspace/data-set/cert-keyword-db/`  
> **連動スキル**: `.agents/cert_keyword_db.md`

---

## 使い方（AIエージェント向け）

1. 記事執筆・Hub新設・クエリ拡張タスク開始時に、対象資格の `*-kw-db.md` を **Read** する
2. KW表の `記事タイプ`（hub / method / theory / career / trend / app）と `優先度` を参照し、未着手（`×`）から着手する
3. `examId` は `.workspace/.task/exam-id-catalog.md` と `src/content/config.ts` の enum を正本とする
4. 新規KWを発見したら、該当 `*-kw-db.md` に行を追記し、本インデックスの「最終更新」を更新する

---

## 対象クラスター一覧

| examId | 資格名 | KW DB | Hub記事 | クラスター充足（2026-06） |
| --- | --- | --- | --- | --- |
| `takken` | 宅地建物取引士（宅建） | [takken-kw-db.md](./takken-kw-db.md) | `method/takken-hub` | Hubのみ・スポーク未着手 |
| `boki` | 日商簿記（2・3級中心） | [boki-kw-db.md](./boki-kw-db.md) | `method/boki-hub` | Hubのみ |
| `mos` | Microsoft Office Specialist | [mos-kw-db.md](./mos-kw-db.md) | `method/mos-hub` | Hub + Method + Career あり |
| `common`※ | FP2級（※専用 `fp` 未登録） | [fp-kw-db.md](./fp-kw-db.md) | `method/fp-hub` | Hub + Method 一部 |
| `common`※ | AWS認定（SAA等）+ CCNAクラスター | [aws-kw-db.md](./aws-kw-db.md) | `method/aws-hub` | Hub + 少数スポーク |
| `toeic`（予定） | TOEIC L&R | [toeic-kw-db.md](./toeic-kw-db.md) | **未作成** | 全面未着手 |
| `denken` | 電験三種（第三種電気主任技術者） | [denken-kw-db.md](./denken-kw-db.md) | `method/denken-hub` | Hubのみ・スポーク未着手（波3） |
| `kiken-butsu` | 危険物取扱者（乙4等） | [kiken-butsu-kw-db.md](./kiken-butsu-kw-db.md) | `method/kiken-butsu-hub` | Hubのみ・スポーク未着手（波3） |
| `biru-kanri` | ビル管理クラスター（ビル管理士・マンション管理士・エネルギー管理士） | [biru-kanri-kw-db.md](./biru-kanri-kw-db.md) | `method/biru-kanri-hub` | Hubのみ・サブ資格別スポーク未分離（波3） |
| `doboku-sekou` | 土木施工管理技士（1級・2級） | [doboku-sekou-kw-db.md](./doboku-sekou-kw-db.md) | `method/doboku-sekou-hub` | Hubのみ・スポーク未着手（波3） |

※ FP・AWS は現状 `examId: common`。Hub作成時に `fp` / `aws` 等の専用スラッグ追加を検討（[exam-id-catalog.md](../../.task/exam-id-catalog.md) 参照）。

---

## KW → examId クイック逆引き

| 検索KW・通称（代表） | examId | 備考 |
| --- | --- | --- |
| 宅建、宅地建物取引士、権利関係、宅建業法 | `takken` | 民法・業法・法令制限の3本柱 |
| 簿記、日商簿記、仕訳、工業簿記、原価計算 | `boki` | 1〜初級含むがサイトは2・3級中心 |
| MOS、Excel資格、Word資格、MOS Master | `mos` | Microsoft公式のパフォーマンス試験 |
| FP、FP2級、FP3級、AFP、ファイナンシャルプランナー | `common`（→`fp`案） | きんざい / 日本FP協会の2団体 |
| AWS、SAA、ソリューションアーキテクト、クラウド資格 | `common`（→`aws`案） | CCNA・LPICとクラスター |
| TOEIC、英語資格、リスニング、リーディング | `toeic`（未登録） | AI音声活用に差別化 |

---

## 記事タイプとフレームワーク対応

| 記事タイプ | カテゴリ | 推奨フレームワーク | タイトルパターン（restructure-plan準拠） |
| --- | --- | --- | --- |
| hub | method | BEAF | `{資格名} 完全攻略ガイド｜{ターゲット}の最短ロードマップ` |
| method | method | BEAF / PASONA | `{問題/状況}を{AI/手法}で{解決}する` |
| theory | theory | QUEST | `{用語名}とは？{一文解説}【{資格名}】` |
| career | career | BEAF | `{職種/状況}が{資格名}で{成果}を得る方法` |
| trend | trend | QUEST | 試験制度変更・日程・合格率ニュース |
| app | app | PASONA | `{資格名} {問題種別}ドリル — AIが{機能説明}` |

---

## 関連ドキュメント

| ファイル | 用途 |
| --- | --- |
| `.agents/cert_keyword_db.md` | 本DBの参照手順（スキル定義） |
| `.workspace/.task/exam-id-catalog.md` | examId 正本カタログ |
| `.workspace/.task/restructure-plan-2026-06.md` | クラスター充足率・Phase 2 優先度 |
| `.agents/cert_hub_template.md` | Hub記事構成テンプレート |
| `.agents/tag_rules.md` | タグ正規名（拡張候補あり） |

---

**最終更新**: 2026-06-18  
**次回リサーチ候補**: GSCクエリCSVとの突合（`data-set/GSC-query-data-*.csv`）、TOEIC Hub 新設、FP/AWS の examId 独立
