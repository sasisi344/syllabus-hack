# FP（ファイナンシャルプランナー）キーワードDB

> **examId**: `common`（専用 `fp` は未登録・追加候補）  
> **Hub**: `src/data/post/method/fp-hub/index.md`  
> **主催**: 日本FP協会 / きんざい（金融財政事情研究会）  
> **調査基準日**: 2026-06-18

---

## 試験サマリー

| 項目 | 内容 |
| --- | --- |
| 正式名称 | ファイナンシャル・プランナー技能検定（2級・3級） |
| 通称 | FP、FP2級、FP3級、AFP（協会認定） |
| サイト注力 | **FP2級**（6分野・実技あり） |
| 合格率目安 | FP2級 約50%（学科・実技とも60点以上） |
| 標準学習時間 | FP2級 150〜200h（未経験）/ FP3級取得者は100〜150h |
| 試験形式 | CBT（2025年〜随時受験可能） |
| 6分野 | ライフプラン・リスク・金融・タックス・不動産・相続 |

---

## AIハック適性（詰まりポイント）

| 分野 | 詰まり | AI活用の切り口 |
| --- | --- | --- |
| 年金・社保 | 制度の「なぜ」が不明 | 二層構造など背景から対話 |
| タックス | 計算式の丸暗記 | 控除の目的を先に理解 |
| 金融資産 | 商品の違いが混同 | NISA/iDeCo等を目的別に整理 |
| 実技 | 提案書の構成 | AIを添削者として使う（模範解答生成は避ける） |
| 団体選択 | きんざい vs 日本FP協会 | 実技形式・AFP目的で分岐 |

---

## キーワードマップ

| KW | 検索意図 | 記事タイプ | 優先度 | 状態 | 差別化角度 | 既存記事 slug |
| --- | --- | --- | --- | --- | --- | --- |
| FP2級 勉強法 | 最短合格 | method | A | ○ | 3ヶ月プラン | fp2-3month-plan |
| FP2級 独学 | 独学の現実性 | method | A | ○ | CBTリベンジ戦略 | trend/fp2-cbt-strategy |
| FP2級 合格率 | 難易度 | trend | B | ○ | CBT移行の影響 | fp2-cbt-strategy |
| FP2級 きんざい 日本FP協会 | 団体選択 | method | A | ◎ | Hub FAQ＋実技比較 | fp-hub |
| FP2級 実技 | 実技対策 | method | A | × | AI添削型（差別化） | - |
| FP2級 計算問題 | 計算の壁 | method / app | A | × | 計算ドリルアプリ（課題D） | - |
| FP3級 FP2級 違い | ステップ設計 | method | B | × | 級間の学習移行 | - |
| FP2級 3ヶ月 | 短期合格 | method | A | ◎ | 具体的プラン | fp2-3month-plan |
| FP AFP | 認定の意味 | career | B | ○ | 協会ルートの説明 | fp-hub |
| FP ITパスポート | 資格組み合わせ | career | A | ◎ | AWS vs FP 橋渡し | next-step-aws-vs-fp-strategy |
| FP2級 完全攻略 | 全体像 | hub | S | ◎ | CBT×AI対話 | fp-hub |
| FP2級 資産設計 | 実技分野 | method | A | × | 提案業務の添削プロンプト | - |
| FP2級 相続 税金 | 分野別 | theory / method | B | × | 用語解説＋AI対話 | - |
| 簿記2級 FP2級 比較 | 優先順位 | method | B | × | restructure-plan案 | - |

---

## 既存スポーク記事

| slug | カテゴリ |
| --- | --- |
| `method/fp2-3month-plan` | method |
| `trend/fp2-cbt-strategy` | trend |
| `trend/fp2-jitsuki-comparison` | trend |
| `career/next-step-aws-vs-fp-strategy` | career |

---

## examId 移行メモ

- 現状: `knowledge.examId: common`（fp-hub）
- TODO: `fp` スラッグを `config.ts` に追加し、FP系記事を一括移行
- 参照: `.workspace/.task/exam-id-catalog.md` §未登録・予定

---

## コンテンツギャップ

- Hub: ◎
- Theory: × 未着手
- Method: ○ 一部（実技・計算が不足）
- Career: △（AWS比較のみ）
- App: × 計算ドリル未着手

---

## タグ正規名（tag_rules 拡張候補）

| 使用するタグ | 備考 |
| --- | --- |
| `FP2級` | 級明示 |
| `FP3級` | 3級記事用 |
| `CBT` | 試験方式 |

---

**次回更新**: `fp` examId 登録時に本ファイルの examId 表記を更新
