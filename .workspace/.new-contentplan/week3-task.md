---
created: 2026-09-07
updated: 2026-09-07
tags:
  - シラバスハック
  - roadmap
  - week3
---

# Week3タスク（9/20〜9/26）: 実装・Web公開

> 全体像は [`new-content-plan.md`](./new-content-plan.md) を参照。前提: Week2で作成したTier1コンテンツ一式（[`week2-task.md`](./week2-task.md)）を実装に流し込む。
>
> **2026-09-07更新**: 有料コンテンツ（Tier2・note）関連の作業は来月に延期。本Weekのスコープは「Tier1（無料20hコンテンツ）の実装・公開」と「サイト新構成（`course`コレクション）の実装」に純化した。

## このWeekのゴール

ITパスポート20hoursパイロット（Tier1）を実際にWeb公開し、既存のitp-hub・CBTコンテンツとの回遊導線をつなぐ。有料note・メールゲートは来月のスコープ。

## タスク

- [ ] Astro新テンプレート実装: TOP（学習カテゴリ）→ 章一覧（サブカテゴリ）→ 章ページ（サブページ）の2階層（`course`コレクション、[`structure-migration-plan.md`](./structure-migration-plan.md) §4-2）
  - 読了目安時間の表示
  - Week1のKaTeX PoCの結果を反映（ITパスポートでは未使用でも、テンプレート自体は数式表示に対応させておくと2本目テーマで流用できる）
- [ ] 章末チェック用の新規UIコンポーネントを実装（[`ip-course/ip-course-curriculum.md`](./ip-course/ip-course-curriculum.md) §3-5）: 全問（3〜4問固定・ランダム化なし）に回答後、「答え合わせ」ボタンで一括採点し設問ごとに○✕を表示する方式。既存`it-passport-quiz`系（1問ずつ即時正誤表示、`client:load`）とは異なるUIのため、新規Preactコンポーネントとして切り出す。データはWeek2で作成済みの各章「章末チェック」節（`.workspace/draft/course/ip/0{1-8}-*.md`、計31問）を移植
- [ ] ITパスポート20hoursパイロット（Tier1・8章）を無料公開
  - `method/itp-hub` および既存クイズアプリ（`it-passport-quiz` 等）と相互リンクし、回遊導線を作る
- [ ] ~~CBT形式へのメールアドレスゲート実装~~ → **来月に延期**。有料note（誘導先）が無い状態でゲートだけ作っても導線が完結しないため、Tier2着手時にまとめて実装する
- [ ] ~~noteマガジン第1弾を公開~~ → **来月に延期**

## 次Weekへの引き継ぎ

- 公開済みの20hoursパイロット（Tier1）・`course`コレクション実装 → Week4で計測対象になる
- メールゲート・noteマガジンは来月のタスクとして仕切り直す
