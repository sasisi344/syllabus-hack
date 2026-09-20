---
created: 2026-09-07
updated: 2026-09-07
tags:
  - シラバスハック
  - roadmap
  - week3
---

# Week3タスク（9/20〜9/26）: 実装・Web公開

> 全体像は [`new-content-plan.md`](../new-content-plan.md) を参照。前提: Week2で作成したTier1コンテンツ一式（[`week2-task.md`](./week2-task.md)）を実装に流し込む。
>
> **2026-09-07更新**: 有料コンテンツ（Tier2・note）関連の作業は来月に延期。本Weekのスコープは「Tier1（無料20hコンテンツ）の実装・公開」と「サイト新構成（`course`コレクション）の実装」に純化した。

## このWeekのゴール

ITパスポート20hoursパイロット（Tier1）を実際にWeb公開し、既存のitp-hub・CBTコンテンツとの回遊導線をつなぐ。有料note・メールゲートは来月のスコープ。

## タスク

- [x] Astro新テンプレート実装: TOP（学習カテゴリ）→ 章一覧（サブカテゴリ）→ 章ページ（サブページ）の2階層（`course`コレクション、[`structure-migration-plan.md`](../structure-migration-plan.md) §4-2） → **2026-09-09完了**。`src/content/config.ts`に`course`コレクション追加、`src/pages/course/index.astro`・`[exam]/index.astro`・`[exam]/[chapter].astro`・`src/layouts/CourseLayout.astro`を新規実装
  - 読了目安時間の表示 → 実装済み（既存remarkプラグイン`readingTime`を流用、`CourseLayout`で章の目安分数と併記）
  - Week1のKaTeX PoCの結果を反映 → ITパスポートでは数式未使用のためKatexStylesは今回未import（章ページ単位でスコープする既存方針どおり、必要な章がでてきたら個別importする）
- [x] 章末チェック用の新規UIコンポーネントを実装（[`ip-course/ip-course-curriculum.md`](./ip-course/ip-course-curriculum.md) §3-5） → **2026-09-09完了**。`src/apps/course-quiz/ChapterQuiz.tsx`（全問回答後「答え合わせ」で一括採点・○✕表示、診断モードは不正解章へのリンク表示）・`progress.ts`（`sh_course_{examId}`）を新規実装。ブラウザで実際に4問チェック・10問診断の両方を操作し、採点・localStorage保存・弱点章リンクの動作を確認済み
- [x] ITパスポート20hoursパイロット（Tier1・8章）を無料公開 → **2026-09-09完了**。`src/data/course/ip/`に9ファイル（index.mdx+8章.mdx）を`draft: false`で配置。診断テスト10問・章末チェック31問は`src/data/quiz/it-passport/course-*.json`に分離
  - `method/itp-hub` および既存クイズアプリ（`it-passport-quiz` 等）と相互リンクし、回遊導線を作る → itp-hub冒頭にコースCTA追加、コース完走ページに`it-passport-quiz`へのリンクを設置（Week2作成コンテンツに既存）。ナビ「学習コース」追加・トップページHero第1CTA差し替え・`/certifications/`カードへの「20時間コースで学ぶ」バッジ表示も実施
- [ ] ~~CBT形式へのメールアドレスゲート実装~~ → **来月に延期**。有料note（誘導先）が無い状態でゲートだけ作っても導線が完結しないため、Tier2着手時にまとめて実装する
- [ ] ~~noteマガジン第1弾を公開~~ → **来月に延期**

## 次Weekへの引き継ぎ

- 公開済みの20hoursパイロット（Tier1）・`course`コレクション実装 → Week4で計測対象になる
- メールゲート・noteマガジンは来月のタスクとして仕切り直す
