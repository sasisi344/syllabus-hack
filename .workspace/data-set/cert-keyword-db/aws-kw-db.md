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

### P10（資格名×AI）実査 2026-09-27

> 横断リサーチの正本: [p10-ai-query-research-2026-09.md](./p10-ai-query-research-2026-09.md)

| KW | 検索意図 | 記事タイプ | 優先度 | 状態 | 方向性パターン | 競合占拠度 | 差別化角度 | 既存記事 slug |
| --- | --- | --- | --- | --- | :---: | :---: | --- | --- |
| NotebookLM AWS SAA | 公式ドキュメントから問題を作りたい | method | A | × | P10 | 低 | AWS公式ドキュメント・Well-Architectedをソースにしたシナリオ問題の生成 | aws-personalized-roadmap-hack（リンク） |

### P3/P2/P4 実査 2026-10-06（ccna-vs-aws-saa 改善時）

> 実査方法: WebSearch 11クエリ。上位は infla-lab（転職エージェント）・tenshoku-antennanavi（転職メディア）・awaisora/codexcode（スクール）で、当サイトは5〜7位。GSC上のクエリは母数が小さい（`ccna aws` 6imp、`awsとccna` 4imp等）。

| KW | 検索意図 | 記事タイプ | 優先度 | 状態 | 方向性パターン | 競合占拠度 | 差別化角度 | 既存記事 slug |
| --- | --- | --- | --- | --- | :---: | :---: | --- | --- |
| CCNA AWS どっち / 先 / 順番 | 取得順序 | trend | S | ◎ | P3 | 高（上位に転職・スクール系3〜4件） | VPC対応表・AI確認プロンプト・CCNA部分学習範囲 | ccna-vs-aws-saa |
| CCNA AWS 難易度 比較 | 難易度差 | trend | B | △ | P3 | 高 | 合格率は非公表と明記し「実機操作の有無・範囲」で比較 | ccna-vs-aws-saa（試験概要比較表） |
| CCNA 取らずに AWS SAA VPC 挫折 | 先にAWSへ進んだ場合の不安 | method | A | △ | P2/P7 | 中（個人Zenn/Qiitaが中心） | CCNAの必要範囲だけ補強する部分学習 | ccna-vs-aws-saa（部分学習セクション） |
| CCNA AWS ダブル取得 期間 | 両方取る場合の計画 | trend | B | ○ | P6 | 中 | 週10時間換算のスケジュール | ccna-vs-aws-saa（スケジュール目安） |
| CCNA AWS CLF 挟む | CLFの位置づけ | trend | B | ○ | P3 | 中 | FAQで回答。単独記事化は不要 | ccna-vs-aws-saa（FAQ） |

### CCNA サブネット計算 実査 2026-10-21（ip-address-ai-metaphor-hack 刷新時）

> 実査方法: WebSearch 5クエリ（US拠点の検索のため、日本のGoogle順位とはずれる可能性あり）。上位は @IT「CCNA対策講座(8)」（2008年の旧試験向け）・Zenn（個人）・Cisco NetAcad資料・英語のCisco Community/海外練習サイトで、通信講座・転職メディアは上位5件に出なかった。「サブネット 分ける 理由 社内LAN」は大学の古いPDFと英語資料のみで日本語の実務解説が薄い。
> 判断: 主KW「CCNA サブネット計算」は競合が古い／個人中心で占拠度「中」のため、タイトル前半に主KWを置き、差別化として「実務で使う？（社内LANの分け方・台数制限・機器ごとの割り当て）」のニッチ軸を掛け合わせるハイブリッド戦略を採用。計算手順そのものの網羅は ccna-ai-hack の「サブネット計算の壁をAIで崩す」と重複しないよう、実務の場面→計算→VLSMの流れに寄せた。

| KW | 検索意図 | 記事タイプ | 優先度 | 状態 | 方向性パターン | 競合占拠度 | 差別化角度 | 既存記事 slug |
| --- | --- | --- | --- | --- | :---: | :---: | --- | --- |
| CCNA サブネット 計算 方法 | 計算手順を知りたい | method | A | ◎ | P8 | 中（@IT 2008年記事・Zenn・NetAcad） | 社内LANの設計例（VLSM）から手順を説明 | ip-address-ai-metaphor-hack |
| CCNA サブネット 計算 できない / わからない | 計算でつまずいている | method | A | ○ | P2/P7 | 中（Cisco Community・@IT） | 実務の場面で「なぜ分けるか」を先に理解 | ip-address-ai-metaphor-hack |
| サブネット 分ける 理由 社内LAN 実務 | 実務で何に使うか知りたい | method | A | ◎ | P4 | 低（古い大学PDF・英語資料のみ） | 部署分け・台数上限・機器ごとの固定割り当てとセキュリティ | ip-address-ai-metaphor-hack |
| サブネット計算 実務 必要 / 意味ない | 勉強する価値の確認 | method | B | ○ | P1 | 低〜中（計算ツール事業者のページ中心） | 家庭では不要・会社では必要と場面で区別 | ip-address-ai-metaphor-hack |
| CCNA サブネット ChatGPT 練習 | AIで練習したい | method | B | ○ | P10 | 低（日本語の該当ページなし） | 社内LAN想定の問題生成プロンプト＋手計算で検証 | ip-address-ai-metaphor-hack（AI練習節） |

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
