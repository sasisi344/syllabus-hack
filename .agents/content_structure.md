---
name: content-structure
description: Astro プロジェクトのディレクトリ構造・パス設計・Page Bundle パターン。
---

# Astro Project Folder Structure (Syllabus Hack)

This project uses the **AstroWind** template (Astro 5). Content is managed in `src/data/post/`.

## 1. Directory Overview

```text
src/
├── data/
│   ├── post/              # 📝 Blog Posts (Main content)
│   │   ├── trend/         # Trend & Exam Info
│   │   ├── method/        # Study Methods (Syllabus Hack)
│   │   ├── career/        # Career Strategy
│   │   ├── theory/        # Term/Theory Explanations（共通カバー使用）
│   │   └── app/           # Quiz Apps / Tools 紹介記事
│   └── master/            # 🧩 Quiz question data (questions-{examId}.json 等)
├── apps/                  # 🎮 Preact製クイズアプリ・診断ツール本体
│   └── index.ts           # アプリレジストリ
├── assets/
│   └── images/            # 🖼️ Shared Images
└── content/
    └── config.ts          # Schema definitions（examId enum の正本）
```

## 2. Page Bundle Pattern

Every blog post MUST follow the Page Bundle pattern: a directory named after the slug, containing an `index.md`（アプリ記事は `index.mdx`）file and its local assets (images).

**Correct Structure:**

```text
src/data/post/method/my-awesome-hack/
├── index.md              # Article body
└── cover.jpg             # Local thumbnail image (if not using shared assets)
```

**Naming Convention:**

- **Folders/Slugs**: Use hyphens (kebab-case), lowercase only. (e.g., `fe-exam-2026`)
- **Images**: `cover.jpg` for primary thumbnails. `theory` カテゴリのみ共通画像 `theory/common-cover.png` を使用。

## 3. Categories vs folders（全5種）

The folder name under `src/data/post/` should match the `category` field in the frontmatter. カテゴリの判定基準・境界ルールの詳細は `.agents/category_rules.md` を参照。

- `src/data/post/trend/` -> `category: "trend"`
- `src/data/post/method/` -> `category: "method"`
- `src/data/post/career/` -> `category: "career"`
- `src/data/post/theory/` -> `category: "theory"`
- `src/data/post/app/` -> `category: "app"`（`appId` フロントマター必須。`src/apps/index.ts` と一致させる）

## 4. Quiz app 関連パス

クイズアプリ・診断ツールを扱う場合は `content` ディレクトリだけでなく `src/apps/` と `src/data/master/` も対象になる。詳細は `.agents/quiz_app_rules.md` / `.agents/quiz_data_rules.md` を参照。
