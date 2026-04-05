---
publishDate: 2026-04-05
lastmod: 2026-04-05
title: '【内部構成】AIだけでサイトをフルスクラッチ？ Syllabus Hack を支える技術の正体'
excerpt: '「コードは書かない、提案するだけ」。Antigravity と Gemini CLI を駆使した AI 駆動開発の実態を公開します。'
image: '~/data/post/method/ai-driven-architecture-hack/cover.png'
persona: 'AIツールを実戦で使いこなしたい開発者・学習者'
category: method
tags:
  - 生成AI
  - Astro
  - Antigravity
  - GeminiAPI
  - SyllabusHack

# アプリ連携・試験区分メタデータ
knowledge:
  examId: common
  type: method
  syllabusRef: 'シラバス全般'
  difficulty: beginner

# SEO・外部表示設定
metadata:
  description: 'Syllabus Hack の技術スタックを紹介。人間は「提案」に集中し、実務は Antigravity と Gemini API が担う、次世代の AI 駆動型サイト構築手法（Vibe Coding）を詳解します。'
---

## 人間は「提案」し、AIは「実装」する

この<strong>Syllabus Hack</strong>というサイトは、従来の Web サイト制作とは全く異なるプロセスで構築されています。

私がコードを一から書くことは、ほとんどありません。

私が行うのは、サイトの構想を<strong>Antigravity</strong>（AI エージェント）に「提案」することだけです。

「こんな機能が欲しい」「デザインをもっとプレミアムにしてほしい」という私の<strong>Vibe（ノリ）</strong>を AI が解釈し、API を通じて具体的なコードへと変換しています。

---

## Syllabus Hack を支える 3 つの技術基盤

このサイトは、以下の 3 つの強力な技術の組み合わせで成り立っています。

### 1. Astro ＋ React（UI の土台）

サイト全体のフレームワークには<strong>Astro</strong>を採用しています。

<strong>Astro</strong>は、コンテンツ重視のサイトを爆速で構築するのに最適で、AI にとっても構造が非常に分かりやすいのが特徴です。

クイズアプリなどのインタラクティブな機能には<strong>React</strong>を組み込み、動的な体験を実現しています。

### 2. Antigravity（現場監督の AI エージェント）

私の右腕として、ファイル操作、ビルド、デバッグ、画像生成まで全ての「実務」をこなすのが<strong>Antigravity</strong>です。

私が「こうしたい」とチャットで伝えるだけで、<strong>Antigravity</strong>は適切なファイルを書き換え、エラーがあれば自ら修正し、ビルドを完了させます。

人間がエディタと向き合う時間を最小限にし、AIが開発をリードするのが<strong>Syllabus Hack</strong>流の<strong>Vibe Coding</strong>です。

### 3. Gemini API ＋ CLI（情報のコンバーター）

試験情報の分析やシラバスの構造化には、Googleの<strong>Gemini API</strong>をフル活用しています。

膨大な PDF の試験要綱を読み込み、瞬時にクイズデータ（JSON）や記事の下書きへと変換する自動化パイプラインを構築しています。

人間が手作業で行っていた「シラバスの解釈」という重労働を、AIの処理能力で解決しています。

---

## 難しいことはしない。API を「駆使」するだけ

技術要項と聞くと難しく感じるかもしれませんが、実態はシンプルです。

人間がやるべきことは、AI に「何を作らせるか」という戦略を立て、API に適切なパラメータを渡すことだけ。

手作業による<strong>コーディング</strong>を捨て、AIとの<strong>対話（提案）</strong>に全力を注ぐ。

これが、膨大な試験範囲をハックするための最短距離なのです。

---

## まとめ：今回のポイント

- <strong>Syllabus Hack</strong>は、コードを書かずに「提案」から生まれる AI 駆動型サイト。
- <strong>Astro</strong>、<strong>Antigravity</strong>、<strong>Gemini API</strong>の 3 本柱が開発のコア。
- 人間は「抽象的なビジョン」を提案し、AIは「具体的な実装」を担当する。
- 難しいコーディングより、AIとの<strong>Vibe（ノリ）</strong>を合わせることが最も重要。
