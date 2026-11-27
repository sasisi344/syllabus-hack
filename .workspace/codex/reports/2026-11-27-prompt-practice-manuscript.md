# プロンプト練習問題記事の完成稿 報告

- 指示書: ユーザーの依頼（`.workspace/draft/` のアウトラインを完成稿にする）
- 状態: 完了（本文作成。公開前に筆者の実行確認が必要）

## やったこと
- `.workspace/draft/method-prompt-writing-practice-problems.md` を作成。架空データの資料作成例、練習問題3題、4観点の自己点検表、AIに論理の抜けを尋ねるプロンプトを収録。
- `.workspace/draft/outline-prompt-writing-practice.md` に完成稿へのリンクと状態を追記。
- `src/data/post/method/prompt-writing-practice-problems/cover.jpg` を生成。ドラフトの `image` 参照を更新。

## 確認
- `node C:/Users/sasis/344blog/.claude/skills/site-admin/scripts/admin-lint.mjs --site syllabus-hack --files .workspace/draft/method-prompt-writing-practice-problems.md` — ERROR 0、WARN 0。
- 内容の根拠: 元メモ `.workspace/draft/プロンプトエンジニアリングの学習テキスト作成.md`、KW実査 `.workspace/data-set/prompt-practice-kw-research-2026-10.md`（2026-10-26）、対象アウトライン。リンク先は現行の業務練習コースと生成AI用語記事。
- アウトラインが参照していた `/theory/prompt-engineering-basics/` は現行コンテンツに存在しないため、実在を確認できた `/theory/generative-ai-terms-basics/` に変更。
- 画像: built-in image_genで生成し、JPEGで保存。英語プロンプトは本文の `IMAGE_PROMPT` コメント。文字なしの16:9ピクトグラムを目視確認。

## 記事設計
- TARGET_KW: 生成AI プロンプト 練習問題
- READER: S3-知的好奇心-学習中 / 検索。生成AIを使い始めたが、例文を仕事に合わせて組み立てられない社会人
- ANSWER: 状況・素材・成果物の条件・評価観点を整理し、条件つき課題を解いて見直す
- TAKEAWAY: 4要素から依頼文を作る／架空データの課題で練習する／評価観点とAIへの質問で不足を点検する
- 追加要素: 出典リンク不要の架空練習素材、問題3題、評価表1つ、AIへの確認プロンプト1つ、LEARNER_NOTE候補2つ。時間比較は未実測のため数値なし。

## 止めた箇所（CC の判断が要るもの）
- 筆者が課題をAIで実行して、出力のずれや条件の書き漏らしを確かめる指示がアウトラインにある。実行結果を創作せず、本文には未処理のLEARNER_NOTEを2つ残した。公開前に筆者が記入または削除する必要がある。

## 改善提案
- なし。
