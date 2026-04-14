# ドラフト → 本番移行

対象ファイル: $ARGUMENTS

指定されたドラフトファイルを本番用コンテンツに変換・移動してください。

## チェックリストと実行手順

### Step 1: ファイル読み込み

- 対象ファイルを Read して内容を確認する
- フロントマターの category と slug（ファイル名）を取得する

### Step 2: 変換処理（必須）

以下をすべて実行すること:

- [ ] `**強調内容**` をすべて `<strong>強調内容</strong>` に変換（Markdown bold は本番禁止）
- [ ] `image` パスを `~/data/post/{category}/{slug}/cover.jpg` 形式に正規化（`~/` エイリアス必須）
- [ ] `draft: false` にセット
- [ ] `lastmod` を今日の日付（YYYY-MM-DD）に更新
- [ ] `publishDate` は **変更しない**（初回公開日は固定）
- [ ] IMAGE_PROMPT コメントを削除（画像が配置済みの場合）または残す（未生成の場合）

### Step 3: 本番配置

- 移動先: `src/data/post/{category}/{slug}/index.md`
- ディレクトリが存在しない場合は作成する
- 元のドラフトファイルは **削除**する

### Step 4: タスク管理更新

- `.workspace/.task/TODO.md` に該当タスクがあれば `[x]` 済みにする

### Step 5: 完了報告

以下を報告すること:

- 配置先のフルパス
- 変換した `<strong>` タグの数
- 画像の配置状況（済み / 未生成で IMAGE_PROMPT あり）
- `git add` コマンドの提案（実行はユーザーが判断）

> **注意**: `git push` は絶対に実行しない。push は必ずユーザーが手動実行する。
