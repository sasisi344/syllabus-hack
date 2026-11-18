# T-48 マーケティング基礎講座の準備（未決事項・KW実査・骨組み・共通素材・T-30 の指示書）

- 完了日: 2026-11-19
- 種別: 施策
- テーマ: 20時間コース, マーケティング, KW実査, ChapterQuiz, 指示書
- 対象: `/course/marketing/`（全ページ draft）、クエリ「マーケティング 入門 練習問題」ほか
- 起票元: hq:H-26

## 何をしたか

- 2026-11-02: curriculum §3 の未決事項1〜4をユーザーが決定（examId `marketing`、通し課題は青葉園のストーリー、事前チェックは `ChapterQuiz` の拡張、検定は範囲の確認だけ）
- 2026-11-12: 青葉園の共通素材（人物・章ごとの課題と到達点・架空データ）を作成し、ユーザーが承認
- 2026-11-18: T-48a（KW実査、Codex）・T-48b（骨組みと4ルート、Codex）を検収して合格。T-48b を main に取り込み（5119955）、deploy 成功。コースTOPの title をユーザーが決定
- 2026-11-19: 第1〜4章のアウトライン4本と T-30 の指示書を作成

## 使ったデータ・資料

- 設計: `.workspace/.new-contentplan/marketing-course/marketing-course-curriculum.md`、`aobaen-story.md`
- KW: `.workspace/data-set/cert-keyword-db/marketing-kw-db.md`、`.workspace/codex/reports/2026-11-18-T-48a.md`
- 骨組み: `.workspace/codex/reports/2026-11-18-T-48b.md`
- 監査記録: `.workspace/admin-review/2026-11-18-T-48a.md`、`2026-11-18-T-48b.md`
- T-30: `.workspace/codex/orders/2026-11-19-T-30.md`、`.workspace/codex/outlines/2026-11-19-T-30-ch1.md`〜`ch4.md`

## 結果

- 主軸 KW「マーケティング 入門 練習問題」（Codex は占拠度 低、CC の照合では 中。どちらも選定基準の内）。章ごとに1KW（3C分析・STP分析・コピーライティング・4P分析 など）
- `ChapterQuiz` に知識×経験の4ルート（知識あり＝正答率60%以上、経験あり＝自己申告4問で「はい」1つ以上）。props を渡さないコースは今までどおり3ルート
- 第1〜4章の title は、T-48a の KW を入れて40字以内に縮めた（CC 決定。指示書に記載）

## 次に使える知見

- Codex の環境ではビルドが通らない（Corepack とアクセス拒否）。ビルドは CC が検収で行う（2026-11-18 ユーザー決定、常設部に反映）
- MDX の骨組みのコメントは `{/* */}`。指示書に `<!-- -->` と書かない
- 枠組み（3C・4P・AIDMA など）の考案者・年は、一次情報で確かめていないので、T-30 では本文に書かせない。書くなら CC が先に出典を確かめてアウトラインに載せる
- 『影響力の武器［新版］』の7つ目の原理の訳語は、出版社のページで確かめられなかった（2026-11-19）
