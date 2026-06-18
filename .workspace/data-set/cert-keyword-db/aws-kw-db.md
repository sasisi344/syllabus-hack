# AWS認定・インフラクラスター キーワードDB

> **examId**: `common`（クラスター。個別は `ccna` 等）  
> **Hub**: `src/data/post/method/aws-hub/index.md`（AWS + CCNA + LPIC）  
> **主催**: Amazon Web Services / Cisco / LPI  
> **調査基準日**: 2026-06-18

---

## クラスター構成

| examId | 資格 | Hub上の位置づけ |
| --- | --- | --- |
| `ccna` | Cisco CCNA 200-301 | ネットワーク層（Step 2） |
| `common` | AWS SAA（Solutions Architect Associate） | クラウド層（Step 3） |
| — | LPIC-1 / LinuC | OS基盤層（Step 1） |
| — | AWS SAP / ANS 等 | 上位（Step 4） |

推奨順序: **LPIC（またはLinux実務）→ CCNA → AWS SAA → 上位AWS**

---

## 試験サマリー（AWS SAA 中心）

| 項目 | 内容 |
| --- | --- |
| 正式名称 | AWS Certified Solutions Architect – Associate (SAA-C03) |
| 通称 | AWS SAA、ソリューションアーキテクト |
| 試験形式 | CBT・選択式（65問・130分） |
| 合格率目安 | 公表なし（業界想定 60〜70%） |
| 標準学習時間 | 100〜200h（ネットワーク基礎あり） |
| 有効期限 | 3年 |
| 主要トピック | VPC, EC2, S3, IAM, RDS, 可用性・コスト設計 |

---

## AIハック適性（詰まりポイント）

| 分野 | 詰まり | AI活用の切り口 |
| --- | --- | --- |
| VPC/ネットワーク | CCNAなしだと消化不良 | オンプレ→クラウドの対応表をAIに作らせる |
| サービス選定 | 似たサービスの使い分け | 「なぜAでなくBか」の設計意図対話 |
| Well-Architected | 5つの柱の適用 | ケーススタディで柱を順に適用 |
| 料金・コスト | 計算問題 | 設計判断の理由を先に、数字は後 |

---

## キーワードマップ

| KW | 検索意図 | 記事タイプ | 優先度 | 状態 | 差別化角度 | 既存記事 slug |
| --- | --- | --- | --- | --- | --- | --- |
| AWS SAA 勉強法 | 最短合格 | method | A | ○ | 初心者の現実 | aws-saa-beginner-reality |
| AWS 資格 初心者 | どれから取るか | method | A | ○ | クラスター順序 | aws-hub |
| CCNA AWS どっち | 取得順序 | method | A | ◎ | VPC対応の論理 | aws-hub, ccna-hub |
| AWS 独学 | 教材・手順 | method | A | △ | スポーク薄い | aws-saa-beginner-reality |
| AWS SAA VPC | ネットワーク章 | theory / method | A | × | CCNA知識の応用 | - |
| AWS 転職 | 求人・年収 | career | A | △ | Hub言及のみ | aws-hub |
| AWS CCNA ロードマップ | 全体設計 | hub | S | ◎ | 3層モデル | aws-hub |
| AWS 認定 有効期限 | 更新 | trend | B | ○ | Hub FAQ | aws-hub |
| AP AWS 比較 | どちらを優先 | method | B | × | restructure-plan案 | - |
| AWS クラウド 資格 一覧 | 全体像 | hub / trend | B | ○ | クラスター説明 | aws-hub |
| AWS 模擬試験 | 演習 | app | B | × | クイズアプリ未着手 | - |
| CCNA 独学 | ネットワーク基礎 | method | A | ○ | ccna-hubスポーク | ccna-hub配下 |
| LPIC AWS | Linux前提 | method | B | × | Step1の説明 | - |

---

## 既存スポーク・関連記事

| slug | 備考 |
| --- | --- |
| `method/aws-saa-beginner-reality` | SAA初心者向け |
| `method/ccna-hub` | CCNAクラスターHub |
| `career/next-step-aws-vs-fp-strategy` | AWS×FP橋渡し |
| `theory/aws-concept-metaphor-hack` | 概念メタファー（theory） |

---

## examId 移行メモ

- AWS単体記事は現状 `common` が多い
- 候補: `aws` スラッグ追加（SAA / SAP 等は syllabusRef で区別）
- CCNAは `ccna` 登録済み

---

## コンテンツギャップ（restructure-plan 2026-06）

- Hub: ○（AWS+CCNAクラスター）
- Theory: ×（VPC, S3, IAM等の用語 — `aws-concept-metaphor-hack` のみ）
- Method: ○ 薄い
- Career: △
- App: ×

---

## タグ正規名

| 使用するタグ | 備考 |
| --- | --- |
| `AWS` | クラウド資格全般 |
| CCNA記事では `CCNA` またはインフラ系キーワード | ccna-hub参照 |

---

**次回更新**: AP vs AWS比較記事企画時にKW行追加
