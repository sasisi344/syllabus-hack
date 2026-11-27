# unified-page-design 共通ページのデザイン統一 報告

- 指示書: このチャットのユーザー指示（2026-11-14）
- 状態: 完了

## やったこと

- `src/components/CustomStyles.astro`: TOPを基準に、紙色・ネイビー・グリーンと明朝体の見出し、ダーク表示の共通トークンを調整。
- `src/assets/styles/editorial.css`（新規）: 共通ヘッダー・フッター、記事タイトル・目次・本文・表・執筆者欄、記事カード、資格一覧、規約ページの読みやすさと見た目を統一。記事等の登場フェードを抑え、読み物を静的に表示。アプリの操作部品は対象にしていない。
- `src/layouts/Layout.astro`、`src/layouts/PageLayout.astro`: 共通スタイルを読み込み、メイン領域を適切に指定。
- `src/components/Logo.astro`、`src/components/widgets/Header.astro`、`src/components/widgets/Footer.astro`: TOPと同じ日本語ロゴとグリーンの細線。検索・既存メニュー・フッターの5件制限を維持。
- `src/components/blog/SinglePost.astro`: パンくず、読みやすいタイトル幅・行間・概要、カバー画像の枠、本文・執筆者欄の共通スタイル指定。
- `src/components/blog/TableOfContents.astro`、`ListItem.astro`、`GridItem.astro`: 目次と記事一覧・関連記事の共通スタイル指定。目次の移動先は固定ヘッダーに隠れない位置に調整。
- `src/pages/about.astro`: 写真中心の導入を、TOPに合う文字と静止した本のモチーフへ変更。既存の説明文、数字、プロフィール、資格状況は維持。
- `src/pages/certifications.astro`、`src/layouts/MarkdownLayout.astro`: 資格一覧・利用規約・プライバシーポリシーの共通スタイル指定。
- `src/components/common/BasicScripts.astro`: モバイルメニューはリンクを選んだときだけ閉じ、検索欄や分類ボタンを触っただけでは閉じないように調整。
- `.workspace/design/top-dictionary-2026-11-14/`: 確認スクリプト、結果、`unified-*.png`、比較用の旧記事HTML、ビルドログを保存。

## 確認

- ヘッドレスChromeで50項目成功。記事・About・記事一覧・資格一覧・お問い合わせ・利用規約・プライバシーポリシー・検索・コース一覧・コースTOP・演習記事の1440px/390px表示、320pxの長文表示、ダーク表示、共通ヘッダーと検索、TOPの辞書維持を確認。
- 記事本文は旧ビルドの表示テキストと比較し、空白とコピー用ボタンを除いた内容が一致。記事データ・プロフィールの正本・メタデータは編集していない。BlogPosting構造化データも維持。
- 目次の見出しが固定ヘッダーより下に表示されることをPC・スマホの2項目で追加確認。合計52項目成功。
- 確認結果: `browser-unified-design-checks.json`、`browser-anchor-checks.json`。確認画像: `unified-*.png`。
- 書式確認（変更した15ファイル）と `git diff --check` 成功。
- ビルド: `ASTRO_TELEMETRY_DISABLED=1` を指定して成功（891ページ、181.23秒）。ログは `build-unified-design.log`。
- 開発サーバー `http://127.0.0.1:4321/` に反映。ユーザー確認用に継続稼働。コミット・公開なし。

## 画像

- 新規画像生成なし。Aboutの本はHTML/CSSと既存のSVGアイコンで作成し、参照用画像を公開ページに配信していない。元の筆者写真は維持。

## 止めた箇所（CC の判断が要るもの）

- なし。記事の内容やAboutにある既存の数値の更新は行っていない。

## 改善提案

- なし。
