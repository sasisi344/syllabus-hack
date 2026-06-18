---
name: Certification Keyword DB
description: 検索KWから資格試験（examId）・Hub・記事企画へ結びつけるナレッジDBの参照手順。横展開資格（宅建・簿記・MOS・FP・AWS・TOEIC等）のクエリ拡張施策で必須。
---

# 資格キーワードDB — スキル定義

## 1. 適用タイミング

以下のタスクを開始する**前**に、本スキルに従いナレッジDBを読み込むこと。

- 資格クエリ拡張施策（新規資格・新規記事の企画）
- Hub記事・スポーク記事の新規執筆（`cert_hub_template.md` と併用）
- `restructure-plan-2026-06.md` の Phase 2 横展開（簿記・宅建・TOEIC・MOS・G検定等）
- タグ選定時に資格名の正規化が必要な場合（`tag_rules.md` と併用）

## 2. 読み込み手順

**ステップ1（必須）**: インデックスを読む

```
Read(.workspace/data-set/cert-keyword-db/index.md)
```

**ステップ2**: 対象資格の KW DB を読む（並列OK）

| 対象KW・資格 | 読むファイル |
| --- | --- |
| 宅建・不動産資格 | `.workspace/data-set/cert-keyword-db/takken-kw-db.md` |
| 日商簿記・仕訳 | `.workspace/data-set/cert-keyword-db/boki-kw-db.md` |
| MOS・Excel/Word資格 | `.workspace/data-set/cert-keyword-db/mos-kw-db.md` |
| FP・ファイナンシャルプランナー | `.workspace/data-set/cert-keyword-db/fp-kw-db.md` |
| AWS・CCNA・クラウド資格 | `.workspace/data-set/cert-keyword-db/aws-kw-db.md` |
| TOEIC・英語試験 | `.workspace/data-set/cert-keyword-db/toeic-kw-db.md` |

**ステップ3（記事化時）**: 以下を併用

```
Read(.agents/cert_hub_template.md)   # Hubの場合
Read(.agents/post_writer.md)         # 執筆ルール
Read(.workspace/.task/exam-id-catalog.md)  # examId 確定
```

## 3. KW DB の各列の意味

各 `*-kw-db.md` のキーワード表は次の列を持つ。

| 列 | 説明 |
| --- | --- |
| KW | 検索クエリ・通称・ロングテールの代表語 |
| 検索意図 | 読者が何を知りたいか（情報 / 比較 / 手順 / 不安解消） |
| 記事タイプ | hub / method / theory / career / trend / app |
| 優先度 | S（Phase2最優先）/ A / B / C |
| 状態 | ◎充足 / ○薄い / △不足 / ×未着手 |
| 差別化角度 | Syllabus Hack 固有の切り口（AI×詰まりポイント） |
| 既存記事 slug | あれば `category/slug`、なければ `-` |

## 4. 記事企画時のルール

1. **examId 未登録の資格**（例: TOEIC）で記事を書く前に、`src/content/config.ts` への追加手順を `exam-id-catalog.md` で確認する
2. **詰まりポイント**は KW DB の「AIハック適性」セクションから `post_writer.md` の「合格までの勉強時間」に転記する（汎用表現禁止）
3. **競合激戦KW**（TOEIC スコアアップ全般等）は、サイト差別化軸「AI×シラバス／対話理解」に寄せない企画は優先度を下げる
4. 新規KWをリサーチで発見したら、該当 `*-kw-db.md` に追記し `index.md` の最終更新日を更新する

## 5. 横展開資格の詰まりポイント早見表

記事執筆時に `### AI活用で「専任講師を月額20ドルで雇う」感覚` へ転記する代表例。

| examId | 代表詰まりポイント |
| --- | --- |
| `takken` | 民法の「なぜそのルールか」、権利関係の図解、業法の数字暗記 |
| `boki` | 仕訳の判断基準、工業簿記の原価計算、T字勘定の手順 |
| `mos` | ショートカットの体系化、関数ネスト、実機操作の時間配分 |
| FP | 制度の背景（年金二層構造等）、税計算の意味、実技の提案書構成 |
| AWS/CCNA | VPCとサブネットの対応、サービス選定の理由、設計意図の理解 |
| TOEIC |  Part別弱点の特定、リスニングの聞き取りパターン、学習計画の根拠 |

## 6. 完了後の更新

- 記事公開後: 該当 KW の `状態` を ◎ / ○ に更新
- Hub新設後: `index.md` のクラスター表と `exam-id-catalog.md` を同期
- `.workspace/.task/TODO.md` の資格クエリ拡張項目を `[x]` 化

---

**Status**: Active  
**Last Updated**: 2026-06-18  
**Data Root**: `.workspace/data-set/cert-keyword-db/`
