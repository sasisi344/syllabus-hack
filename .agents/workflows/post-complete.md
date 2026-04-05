---
description: 執筆したドラフトを本番用コンテンツに変換・移動するワークフロー。bold記法の変換やメタデータの更新を行います。
---

# 執筆完了ワークフロー (Draft to Production)

## 概要
このワークフローは、`.workspace/draft/` にあるドラフト記事を、SEO最適化（strongタグ変換）を施した上で本番ディレクトリ `src/data/post/` へ移動させます。

## 手順

1.  **対象の特定**
    - 変換・移動したいドラフトファイル（例: `method-sc-timeline-hack.md`）の絶対パスを確認する。

// turbo
2.  **内容の変換処理**
    - **強調表記**: すべての `**強調内容**` 記法を `<strong>強調内容</strong>` に全置換する。本番公開用には Markdown の bold は使用禁止。
    - **画像パスの正規化**: フロントマターの `image` パスを `~/data/post/{category}/{slug}/cover.jpg` (or png) の形式に強制変換する。
        - エラー回避のため、必ず `~/` エイリアスを使用し、相対パスや絶対パスを排除する。
    - **アイキャッチ画像の生成（厳格ルール）**: 
        - 内蔵の `generate_image` ツールを **直接使用することは禁止**。
        - 必ず `.workspace/scripts/Antigravity-nanobana/generate-image.js` を `node` で実行して生成すること。
        - スタイルは「ピクトグラム形式（濃い紺色背景に白の単一アイコン）」を厳守する。
    - フロントマターの `draft` を `false` に設定する。
    - `lastmod` に今日の日付（YYYY-MM-DD）をセットする。

// turbo
3.  **本番配置**
    - フロントマターの `category` とファイル名から `slug` を取得する。
    - 移動先 `src/data/post/{category}/{slug}/index.md` を作成（ディレクトリがない場合は作成）。
    - 元のドラフトを削除し、本番環境へ配置を完了する。

4.  **タスク管理の更新**
    - `.workspace/.task/TODO.md` やプロジェクトの `TODO.md` の該当項目を[x]済みにする。
