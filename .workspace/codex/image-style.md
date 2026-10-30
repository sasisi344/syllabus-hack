# シラバスハック — 画像のトーンとキャラクター性

作成: 2026-10-30（CC。既存のルールをまとめた案。ユーザー確認待ちの項目は §6）。画像の流れは `C:\Users\sasis\344dev\hq\org\README.md` §4。

## 1. 絵の人格（キャラクター性）

**試験の仕組みを解析して攻略する、少し詳しい学習仲間。**

- 知的・ミニマル・デジタル。"Hacking the system"、"Future of learning"
- 受験の苦労を重く見せない。「仕組みが分かれば攻略できる」と感じさせる
- ストックフォト風（勉強する人の写真など）にしない

## 2. トーン

正本は `.agents/image_rules.md`。

| 項目 | 指定 |
|---|---|
| スタイル | ミニマルなピクトグラム、フラットデザイン、白のシンプルなアイコン |
| 色 | 単色の背景（Deep Indigo／Navy／Charcoal）か控えめなグラデーション。差し色に Terminal Green |
| 避ける | 文字（カバー）、写真風、細かすぎる描き込み、人の顔 |

## 3. 種類ごとの仕様

| 種類 | 仕様の正本 | 要点 |
|---|---|---|
| サムネイル（cover） | `.agents/image_rules.md` §0〜§4 | 16:9、`cover.jpg`、文字なし。**theory・course などは共通カバーが既定**（コスト設計）。個別カバーはユーザーの指示があるときだけ |
| 説明画像（出題範囲の構造・用語の関係・学習の手順） | このファイル | 同じピクトグラムの世界観で、ラベルだけ日本語。試験の制度・日程など変わる数値は画像に入れない。1記事3枚まで |

## 4. プロンプトの型（英語）

- サムネイル: `.agents/image_rules.md` §4 のスタイル修飾子とネガティブプロンプトを必ず付ける
- 説明画像: `Minimalist pictogram diagram, flat design, white icons on deep navy background, terminal green accents: <何を>. Labels in Japanese only where listed: <文言>. No photos, no faces, no clutter.`
- 既存の `<!-- IMAGE_PROMPT: … -->` は、記事の段階では画像マーカー（`hq/org/README.md` §4）に置き換える

## 5. 生成（サムネイルの段階だけ）

`node .workspace/scripts/Antigravity-nanobana/generate-image.js "<prompt>" "src/data/post/{category}/{slug}/cover.jpg"`（`CLAUDE.md`「画像生成ルール」）。

## 6. 未決（ユーザー確認）

- マスコット・案内役のキャラクターを置くか（現在なし）
