# 新規記事ドラフト作成

トピック: $ARGUMENTS

以下の手順で新規記事のドラフトを作成してください。

## 手順

1. **スキルロード**（並列で読み込む）
   - Read `.agents/post_writer.md`
   - Read `.agents/category_rules.md`
   - Read `.agents/tag_rules.md`

2. **TODO確認**
   - Read `.workspace/.task/TODO.md` — 関連タスクがあれば内容を確認

3. **ナレッジ参照**
   - `.workspace/data-set/` に関連データがあれば Glob で確認

4. **カテゴリ・フレームワーク決定**
   - トピックに最適なカテゴリ（trend / method / career / app / theory）を選択
   - post_writer.md の BEAF / QUEST / PASONA から適切なフレームワークを選択
   - 読者ペルソナ（persona フィールド）を決定

5. **ドラフト作成**
   - 保存先: `.workspace/draft/{category}-{slug}.md`
   - フロントマターは CLAUDE.md の完全テンプレートを使用
   - `draft: true` でスタート
   - 本文は **日本語** で執筆
   - `**bold**` 記法を使用してよい（本番移行時に `<strong>` に変換する）
   - カバー画像の IMAGE_PROMPT コメントを末尾に追記

6. **完了報告**
   - 作成したファイルパス
   - 選択したカテゴリ・フレームワークとその理由
   - 次のアクション（画像生成・本番移行等）
