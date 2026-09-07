---
name: content-tags
description: Rules for article tagging, including count limits and controlled vocabulary for exams.
---

# Tag Rules

## 1. Constraints

- **Count**: Minimum **3**, Maximum **5** tags per article.
- **Source**: Extract high-relevance keywords from the content that would make good search hashtags.

## 2. Controlled Vocabulary (Standardized Exam Names)

To prevent taxonomy fragmentation, ALWAYS use the **Canonical Tag** for qualification names. Do NOT use aliases.
正本の examId 一覧は `.workspace/.task/exam-id-catalog.md`。新規資格を追加したら、この表にも canonical tag を追記すること。

### IPA 高度試験・国家試験（情報処理技術者）

| Qualification Name (Alias/Variation)                                 | **Canonical Tag (Use this)** | examId |
| :--------------------------------------------------------------------| :---------------------------- | :--- |
| ITパスポート, IP, Iパス                                              | `ITパスポート`               | `ip` |
| 基本情報技術者試験, FE, 基本情報                                     | `基本情報技術者`             | `fe` |
| 応用情報技術者試験, AP, 応用情報                                     | `応用情報技術者`             | `ap` |
| 情報セキュリティマネジメント試験, SG                                 | `情報セキュリティマネジメント` | `sg` |
| 情報処理安全確保支援士, SC, 登録セキスペ, セキュリティスペシャリスト | `情報処理安全確保支援士`     | `sc` |
| ネットワークスペシャリスト, NW                                       | `ネットワークスペシャリスト` | `nw` |
| データベーススペシャリスト, DB                                       | `データベーススペシャリスト` | `db` |
| プロジェクトマネージャ, PM                                           | `プロジェクトマネージャ`     | `pm` |
| ITストラテジスト, ST                                                 | `ITストラテジスト`           | `st` |
| システムアーキテクト, SA                                             | `システムアーキテクト`       | `sa` |
| ITサービスマネージャ, SM                                             | `ITサービスマネージャ`       | `sm` |
| システム監査技術者, AU                                               | `システム監査技術者`         | `au` |

### ベンダー・民間検定

| Qualification Name (Alias/Variation)  | **Canonical Tag (Use this)** | examId |
| :------------------------------------- | :---------------------------- | :--- |
| Cisco CCNA                              | `CCNA`                        | `ccna` |
| ディープラーニングG検定                 | `G検定`                       | `g-kentei` |
| データサイエンティスト検定               | `データサイエンティスト検定` | `ds-kentei` |
| Microsoft Office Specialist             | `MOS`                          | `mos` |
| TOEIC L&R                               | `TOEIC`                        | `toeic` |

### 国家資格・実務系（非IPA）

| Qualification Name (Alias/Variation)                                     | **Canonical Tag (Use this)** | examId |
| :------------------------------------------------------------------------- | :---------------------------- | :--- |
| 宅地建物取引士, 宅建                                                       | `宅建`                        | `takken` |
| 第三種電気主任技術者, 電験三種                                             | `電験三種`                    | `denken` |
| 日商簿記                                                                   | `日商簿記`                    | `boki` |
| 危険物取扱者（乙4等）                                                      | `危険物取扱者`                | `kiken-butsu` |
| ビル管理士・マンション管理士・エネルギー管理士                             | `ビル管理士`                  | `biru-kanri` |
| 土木施工管理技士（1級・2級）                                               | `土木施工管理技士`            | `doboku-sekou` |
| 知的財産管理技能検定（知財検定）                                           | `知財検定`                    | `chiteki-zaisan` |
| ボイラー技士・冷凍機械責任者                                               | `ボイラー技士` / `冷凍機械責任者` | `boiler-refrigeration` |
| 消防設備士（乙6・乙4・甲種）                                               | `消防設備士`                  | `shobo-setsubi` |
| ファイナンシャル・プランニング技能検定, FP2級                              | `FP`                          | `fp` |
| AWS認定資格（CLF・SAA・ANS等）                                             | `AWS認定`                     | `aws` |
| 金融IT検定（FITA）                                                         | `金融IT検定`                  | `fintech-it` |

**注意**: `takken` `boki` `fp` `aws` 等は級・種別が分かれる資格が多い。記事タイトルや本文で言及する級（例: FP2級、宅建士）はタグではなく本文キーワードとして扱い、タグは canonical な資格名に統一する。

## 3. General Tagging Strategy

- **Mix**: Combine 1 "Exam Name" tag + 1 "Category/Topic" tag + 1-3 "Specific Keyword" tags.
- **Examples**:
  - Target: FE Subject B Algorithm article
  - Tags: `["基本情報技術者", "アルゴリズム", "科目B", "疑似言語", "Python"]` (5 tags)
  - Target: AP Essay writing hack
  - Tags: `["応用情報技術者", "午後問題", "記述式", "独学"]` (4 tags)

## 4. AI Tool Tagging — One Model Per Article

When an article features a specific generative AI tool, **tag with that one model only**. Do NOT list all models as tags.

**Rationale**: Users search for the specific tool they are using ("Gemini 資格勉強", "Claude 基本情報"). Tagging multiple models dilutes the search signal and dilutes intent matching.

| Tool | Canonical Tag | When to Use |
|---|---|---|
| ChatGPT / GPT-4o | `ChatGPT` | Article primarily uses ChatGPT prompts |
| Claude (Anthropic) | `Claude` | Article primarily uses Claude prompts |
| Gemini (Google) | `Gemini` | Article primarily uses Gemini prompts |
| NotebookLM | `NotebookLM` | Article is about NotebookLM features/usage |

**Parent tag**: Always pair with `生成AI` as a parent category tag.

```
# ✅ Correct
tags: ['生成AI', 'Gemini', '基本情報技術者', 'プロンプト', '科目B']

# ❌ Wrong — multiple models as tags
tags: ['ChatGPT', 'Claude', 'Gemini', '基本情報技術者', '科目B']
```

**Multi-model comparison articles** (where the purpose is to compare tools): allowed to tag 2 models max, e.g. `['生成AI', 'ChatGPT', 'Gemini', '比較', '資格試験']`.

**Existing articles** with multi-model tags should be re-tagged when rewritten or consolidated into model-specific guides.
