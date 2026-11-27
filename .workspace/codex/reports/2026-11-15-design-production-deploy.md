# design-production-deploy デザイン更新の本番反映 報告

- 指示書: このチャットのユーザー指示「ローカル確認で完了した。これを本番に実装する作業を進行。」（2026-11-15）
- 状態: 完了
- 本番: https://syllabushack.com/
- コミット: `4c0522f43599a5ac0072a9866ec09869bc0e9209`
- デプロイ: https://github.com/sasisi344/syllabus-hack/actions/runs/43610046409 （success）

## やったこと

- 最新のorigin/mainを取得し、作業前のHEADと一致することを確認。他の更新との衝突なし。
- 本番反映の直接指示に基づき、確認済みのソース24ファイルだけをコミット・mainへpush。GitHub Actionsでビルド・FTPデプロイ成功。
- 公開内容: 辞書型TOPと分類内カルーセル、記事検索、共通デザイン、About、コードコピー・引用表示。
- 作業画像・ブラウザプロファイル・既存の未整理ファイル・記事索引の生成日時変更はコミットに含めていない。既存の削除差分もそのまま保持。
- `.workspace/design/top-dictionary-2026-11-14/verify-production.mjs`: 本番向けの確認スクリプトを保存。
- 同フォルダの `production/`: 本番確認結果 `production-checks.json` とスクリーンショットを保存。

## 確認

- `git diff --cached --check` 成功。コミット対象は `src/` 配下24ファイルのみ。
- 公開前の最終ローカルビルド成功（891ページ）。ソース変更を加えず、GitHub Actionsでもビルド成功。
- `gh run view 43610046409`: 対象SHA一致、ビルド・FTP転送・ジョブ全体がsuccess。
- 本番Chromeで24項目成功。新CSS/JSの200配信、5分類、カルーセル、スマホのリンク上からの左右スワイプ、フッターの件数制限、検索・公開索引・noindex、About、記事の見出し、常時表示のコピーボタン、コピー文字列の一致、通常引用、モバイルメニュー内検索、Astro遷移後のコピー、ダーク表示、IPA分類、コース本文のコピーを確認。
- コピー先は検証用APIに置き換えて元文字列との一致を確認。OSの既存クリップボードは上書きしていない。
- 本番画像を目視確認し、ローカルで承認されたデザインが配信されていることを確認。

## 画像

- 新規生成なし。本番確認画像: `production/homepage-desktop.png`、`homepage-mobile.png`、`about-desktop.png`、`search-mobile.png`、`article-code-desktop.png`。

## 止めた箇所（CC の判断が要るもの）

- なし。ソースはmain・本番へ反映済み。ローカルの作業記録類は作業フォルダに保持。

## 改善提案

- なし。
