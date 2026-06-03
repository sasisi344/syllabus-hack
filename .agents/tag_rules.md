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

| Qualification Name (Alias/Variation)                                 | **Canonical Tag (Use this)** |
| :------------------------------------------------------------------- | :--------------------------- |
| ITパスポート, IP, Iパス                                              | `ITパスポート`               |
| 基本情報技術者試験, FE, 基本情報                                     | `基本情報技術者`             |
| 応用情報技術者試験, AP, 応用情報                                     | `応用情報技術者`             |
| 情報処理安全確保支援士, SC, 登録セキスペ, セキュリティスペシャリスト | `情報処理安全確保支援士`     |
| ネットワークスペシャリスト, NW                                       | `ネットワークスペシャリスト` |
| データベーススペシャリスト, DB                                       | `データベーススペシャリスト` |
| プロジェクトマネージャ, PM                                           | `プロジェクトマネージャ`     |

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
