# T-20 生成AIパスポート 20時間コースの骨組み

- 完了日: 2026-10-31
- 種別: 施策
- テーマ: 20時間コース, 生成AIパスポート, スキャフォールド
- 対象: `src/data/course/genai-pass/`（index と8章、すべて draft）、`src/data/quiz/genai-passport/course-*.json`
- 起票元: hq:H-29（ユーザー指示 10/31「T-20の生成AIパスポートの骨組みを進めて」）

## 何をしたか

- `.workspace/scripts/scaffold-course.cjs` に `genai-pass` を追加（8章・計1,080分。第6章・第8章は中項目を `from` で合算）
- 同スクリプトに `--mdx` オプションを足した: `src/data/course/{examId}/` に `.mdx` を直接書く（既存ファイルは上書きしない）。コメントを `{/* */}` に、本文の `**` を `<strong>` に変換し、`ChapterQuiz` の import と診断・章末・総復習の呼び出しを入れる。空のクイズ JSON（`course-ch1〜8`・`diagnosis`・`review`）も作る
- F-4（スキーマ）は確認だけ: course enum に `genai-pass` は登録済み、`src/pages/course/` に examId の分岐はない
- T-21 の指示書 `.workspace/codex/orders/2026-10-31-T-21.md` を書いた

## 使ったデータ・資料

- `src/data/master/syllabus-genai-pass-2027.json`、`.workspace/.new-contentplan/genai-pass-course/genai-pass-course-curriculum.md` §2

## 結果

- index と第6章を一時的に draft: false にして開発サーバーで表示を確認（MDX のコンパイル、空のクイズでも落ちない）→ draft: true に戻した。`pnpm build` 881ページで成功（draft は出ない）

## 次に使える知見

- ほかの新コース（マーケティング基礎講座など）も `node .workspace/scripts/scaffold-course.cjs <examId> --mdx` で同じ骨組みを作れる。資格でないコースは COURSES の定義（シラバス JSON 前提）を拡張する必要がある
- `ChapterQuiz` には診断ルート（practice / focus / basic）がすでにあるので、T-53 は確認と不足分の追加から始める
