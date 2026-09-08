---
title: '第4章 サービス・プロジェクトマネジメント'
examId: 'ip'
kind: 'chapter'
order: 4
genre: 'マネジメント'
estimatedMinutes: 30
syllabusRefs: ['サービスマネジメント', 'プロジェクトマネジメント']
field2027: 'business'
quizRef: 'course-ch4'
relatedPosts:
  - /theory/sla-slo-service-quality/
  - /theory/work-breakdown-structure/
  - /theory/gantt-chart/
  - /theory/critical-path/
  - /theory/ap-project-planning/
noteUrl: ''
draft: true
lastmod: 2026-09-09
metadata:
  description: ''
---

<!-- データ出典: syllabus-ip-2027.json v0.1-draft（2027年度春頃（予定）） -->
<!-- 章ヘッダは実装側で自動生成（章番号／ジャンル／目安30分／読了目安／進捗） -->

## この章で学ぶこと

「動いているサービスを維持する」<strong>サービスマネジメント</strong>と、「新しく何かを作り上げる」<strong>プロジェクトマネジメント</strong>という2つの管理の型を扱います。他章に比べて元の語数が29語と少なく、目安時間も30分の短い章です。それぞれ「継続 vs 期限付き」という違いを意識すると整理しやすくなります。

## サービスマネジメント

ITサービスの提供者と利用者が合意する品質水準を文書化したものが<strong>SLA（サービスレベルアグリーメント）</strong>です。「応答時間は3秒以内」「稼働率99.9%以上」のように具体的な数値目標として定義される点が試験で問われます。障害が起きた際に、まず利用者からの問い合わせを一元的に受け付ける窓口が<strong>サービスデスク</strong>（<strong>SPOC</strong>＝Single Point Of Contactとも呼ばれる単一窓口の原則とセット）で、発生した障害への対応が<strong>インシデント管理</strong>、手に負えない場合に上位者へ引き継ぐのが<strong>エスカレーション</strong>です。サービスの一覧を利用者に示す<strong>サービスカタログ</strong>、変更を計画的に行う<strong>変更管理</strong>も基本語として押さえます。

**扱う用語（精選後・6語）**

- SLA（サービスレベルアグリーメント）
- サービスデスク／SPOC（Single Point Of Contact）
- インシデント管理／エスカレーション
- 変更管理

> 深掘り: [SLA / SLO 徹底解説！](/theory/sla-slo-service-quality/)

## プロジェクトマネジメント

プロジェクトの作業範囲を階層的に分解して漏れなく洗い出す<strong>WBS（作業分解構造）</strong>が最頻出です。全工程を棒グラフで可視化する<strong>ガントチャート</strong>、作業の依存関係を矢印でつなぎ最短所要日数（クリティカルパス）を求める<strong>アローダイアグラム</strong>もセットで出題されます。「WBSで作業を洗い出し、ガントチャートで日程を可視化し、アローダイアグラムで最短経路を計算する」という一連の流れで覚えると定着しやすいです。

プロジェクトの目的・体制を定める<strong>プロジェクト憲章</strong>、利害関係者を指す<strong>ステークホルダ</strong>、複数プロジェクトを横断的に支援する組織である<strong>PMO</strong>も基本語です。

**扱う用語（精選後・6語）**

- WBS（作業分解構造）
- ガントチャート／アローダイアグラム
- ステークホルダ／スコープ
- PMO（Project Management Office）

> 深掘り: [WBS（作業分解構造）をマスターせよ！](/theory/work-breakdown-structure/)／[ガントチャート徹底活用！](/theory/gantt-chart/)／[クリティカルパス最速特定術！](/theory/critical-path/)／[WBS・見積り・リスク管理とは？](/theory/ap-project-planning/)

## AIで学ぶ

```
あなたはITパスポート試験の講師です。「サービス・プロジェクトマネジメント」の範囲について、以下の用語を初学者向けに**関連づけながら**説明してください。用語同士の違いが分かる**比較表**を最後に付けてください。

【サービスマネジメント】SLA、サービスデスク、SPOC、インシデント管理、エスカレーション、変更管理
【プロジェクトマネジメント】WBS、ガントチャート、アローダイアグラム、ステークホルダ、スコープ、PMO
```

## 章末チェック

<!-- island: quizRef=course-ch4。出題テーマ: SLAの数値目標の考え方、WBS/ガントチャート/アローダイアグラムの役割の違い、インシデント管理とエスカレーションの流れ -->
