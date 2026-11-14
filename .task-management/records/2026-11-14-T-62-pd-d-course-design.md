# T-62 PD-D 20時間コースの設計

- 完了日: 2026-11-14
- 種別: 施策
- テーマ: 20時間コース, PD-D, 2027年シラバス, 新設試験, 設計
- 対象: `src/data/course/pd-d/`（骨組み）、`src/data/quiz/pd-d/`、`src/content/config.ts`
- 起票元: ユーザー

## 何をしたか

- ユーザーが案 A（PD-M・PD-S と同じ「20時間で全体像と現在地をつかむ」）を選び、12月の予定を前倒しして着手と指示
- 設計書 `.workspace/.new-contentplan/pd-d-course/pd-d-course-curriculum.md`（8章＋診断＋総復習＝20時間、章ごとの中分類・技能の割り当て、時間配分、既存コースとの接続、実務経験による4パターン）
- `scaffold-course.cjs` に PD-D を追加（入れ子の subcategories → items → terms と、技能の `skills` 配列に対応）し、`--mdx` で骨組みを生成（draft）
- examId `pd-d` を `src/content/config.ts` の記事・コースの enum と `.workspace/.task/exam-id-catalog.md` に登録
- Codex が使ってよい事実を確認して表にした: `.workspace/.new-contentplan/pd-d-course/pd-d-facts-2026-11-14.md`（ISO・METI・内閣府 PDF などは自動取得で開けず「名前と1文だけ」に制限）
- 指示書 pdd1・pdd2 を作り Codex に渡した（T-63）

## 使ったデータ・資料

- `src/data/master/syllabus-pd-d-2027.json`、`.workspace/.new-contentplan/2027-exams/pd-d-2027-profile-report.md`、`pd-d-course-scope-decision.md`

## 結果

- 章立て: 第1章 データマネジメントとガバナンス・プライバシー（2.5h）／第2章 データ品質・メタデータ・MDM（2.5h）／第3章 データ基盤とクラウド（1.5h）／第4章 統計・因果推論（2.5h）／第5章 DB・SQL・アルゴリズム（2.5h）／第6章 機械学習・DL（1.5h）／第7章 生成AI・AIエージェント（2.5h）／第8章 技能のケーススタディ（2.5h）＋診断0.5h＋総復習1.5h

## 次に使える知見

- 他コースと重なる語が多い章（クラウド・DB・機械学習）は短くしてリンクし、その試験だけの語に時間を回すと、用語数が多くても20時間に収まる
- 事実の調べ物は CC（2026-11-14 ユーザー決定）。ISO・METI・内閣府の一部 PDF は自動取得で開けないので、必要ならブラウザで確認する
