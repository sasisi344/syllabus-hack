# T-22 生成AIパスポート コース本文（第5〜8章・コースTOP）

- 完了日: 2026-11-02
- 種別: 施策
- テーマ: 20時間コース, 生成AIパスポート, 新シラバス, 診断, 総復習
- 対象: `src/data/course/genai-pass/05〜08-*.mdx`・`index.mdx`、`src/data/quiz/genai-passport/course-ch5〜8.json`・`course-diagnosis.json`・`course-review.json`（すべて draft）
- 起票元: hq:H-29

## 何をしたか

- Codex の使用量の上限で止まらないよう3本に分けて発行し、CC が1本ずつ `site-admin` で検収した
  - a: 第5・6章と章末（指示書 `.workspace/codex/orders/2026-11-01-T-22a.md`、検収 `.workspace/admin-review/2026-11-01-T-22a-genai-pass-ch5-6.md`。直しは事例の帰属1か所）
  - b: 第7・8章と章末（`2026-11-01-T-22b.md`、検収 `2026-11-02-T-22b-genai-pass-ch7-8.md`。直しなし）
  - c: コースTOP・診断20問・総復習20問（`2026-11-02-T-22c.md`、検収 `2026-11-02-T-22c-genai-pass-top.md`。直しは設問1か所と空行1か所）
- c は診断の結果画面を CC がブラウザで試した（全問正解＝演習・45%＝重点・0%＝基礎、前回の診断の再表示）

## 使ったデータ・資料

- テンプレート `.workspace/.new-contentplan/20hours-course-template.md`、カリキュラム `.workspace/.new-contentplan/genai-pass-course/genai-pass-course-curriculum.md`
- 報告書 `.workspace/codex/reports/2026-11-01-T-22a.md`・`2026-11-01-T-22b.md`・`2026-11-02-T-22c.md`

## 結果

- 第1〜8章・TOP・章末・診断・総復習がそろい、すべて draft のまま公開可。公開は T-25（審査結果の後）
- 公開前に残るもの: LEARNER_NOTE（T-15）、AI_EXAMPLE（T-14）、公式テキストとの照合（T-24、11/24〜）

## 次に使える知見

- 1本の指示書は2章（または TOP＋問題40問）までにすると、Codex は10〜25分で終わり、上限で止まらない
- Codex が「Selected model is at capacity」で止まったときは、`task --resume-last` で同じ会話を再開し、終わった部分と残りを書いて渡せば続きから進む
- Codex のサンドボックスではビルドできない（Corepack の EPERM）。draft のページは本番ビルドに出ないので、画面の確認は CC が一時的に `draft: false` にして dev サーバーで見て、元に戻す（ルートの `.claude/launch.json` に `syllabus-dev` を足した）
- 診断の設問に章名や時点の前置きを入れない（章を読む前に解くため）
