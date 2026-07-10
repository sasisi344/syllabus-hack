---
name: content-categories
description: Rules for classifying articles into `trend`, `method`, `career`, `theory`, or `app`.
---

# Content Category Rules

Syllabus Hack content is strictly divided into five categories. Articles must be placed in `src/data/post/{category}/`.

## 1. trend (トレンド・試験情報)

**"News & Context"**

- **Directory**: `src/data/post/trend/`
- **Frontmatter**: `category: "trend"`
- **Content**:
  - Syllabus updates (e.g., "IPA adds GenAI to syllabus").
  - Exam schedule and logistics.
  - Latest AI industry news relevant to exams.
  - Analysis of certification value in the AI era.

## 2. method (学習メソッド)

**"The Solution (Syllabus Hack)"**

- **Directory**: `src/data/post/method/`
- **Frontmatter**: `category: "method"`
- **Content**:
  - **Core Hacks**: How to use AI for studying.
  - **Tools/Prompts**: "Infinite Drill Generator", "Syllabus Scheduler".
  - **Tutorials**: Specific algorithm/subject explanations using AI metaphors.

## 3. career (キャリア戦略)

**"The Outcome"**

- **Directory**: `src/data/post/career/`
- **Frontmatter**: `category: "career"`
- **Content**:
  - Job market data for qualification holders.
  - Portfolio building with AI-enhanced skills.
  - Career paths and salary impact.

## 4. theory (用語解説・コア理論)

**"The Knowledge Base"**

- **Directory**: `src/data/post/theory/`
- **Frontmatter**: `category: "theory"`
- **Content**:
  - Explanations of exam keywords/terms (e.g., "ゼロトラストとは", "正規化とは").
  - Core theory frameworks aligned to syllabus items (`knowledge.syllabusRef` recommended).
  - Timeless reference content — no exam-schedule or news dependency.
- **Cover image**: shared `src/data/post/theory/common-cover.png` (do NOT generate per-article covers).

## 5. app (ウェブアプリ)

**"Interactive Tools"**

- **Directory**: `src/data/post/app/`
- **Frontmatter**: `category: "app"` + `appId: '{app-slug}'` (must match an id in `src/apps/index.ts`)
- **Content**:
  - Quiz apps, CBT simulators, drills (`knowledge.type: app`).
  - Development stories / behind-the-scenes articles about the site's tools (no `appId` if no matching app exists — e.g. dev-story series).

## Decision Tree

1.  Is it about _how to pass_ or _study tools (usage)_? -> **method**
2.  Is it about _what happens after passing_ or _jobs_? -> **career**
3.  Is it an _interactive tool page_ or _its dev story_? -> **app**
4.  Is it a _term/theory explanation_ with no time dependency? -> **theory**
5.  Is it about _the exam itself_ or _industry trends_? -> **trend**

## Boundary Rule: trend vs theory

A term-explanation article that was published under `trend/` for topicality reasons (e.g. ゼロトラスト, RAG, MLOps) **keeps its URL** (no move, no redirect). Instead, mark its true nature with `knowledge.type: theory` in frontmatter. New term articles always go to `theory/`.
This follows the 2026-06-18 categories-list-check decision: URL stability outweighs directory purity for already-indexed pages.
