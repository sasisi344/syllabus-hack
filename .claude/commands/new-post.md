# 新規記事ドラフト作成

トピック: $ARGUMENTS

以下の手順で新規記事のドラフトを作成してください。

## 手順

1. **スキルロード**（並列で読み込む）
   - Read `.agents/post_writer.md`
   - Read `.agents/category_rules.md`
   - Read `.agents/tag_rules.md`
   - Read `.agents/reader_segments.md`

2. **TODO確認**
   - Read `.workspace/.task/TODO.md` — 関連タスクがあれば内容を確認

3. **ナレッジ参照**
   - `.workspace/data-set/` に関連データがあれば Glob で確認
   - 対象資格の `.workspace/data-set/cert-keyword-db/{examId}-kw-db.md` を Read

4. **ターゲットKWの確定（ロングテール施策・必須）**
   - post_writer.md の「Step 0: Long-tail Search Intent First」に従う
   - KW DB の `×未着手` / `△不足` 行（P2/P4/P5/P6/P7/P10）から主KWを1つ選ぶ。該当行がなければ `.agents/kw_pattern_research.md` で調査してから進む（記憶ベースのKW決定は禁止）
   - トピックが資格名だけ・メインKW（`{資格名} 勉強時間` 等）にしか対応しない場合は、ドラフトを書く前にユーザーへ候補KWを3つ提示して選んでもらう
   - `node .workspace/scripts/index-articles.js` を実行し、同じ検索意図の既存記事がないか Grep で確認（あればリライト提案に切り替える）
   - `reader_segments.md` で読者（年齢層 S1〜S5 × 動機 × 学習段階）と主チャネルを1つずつ決める
   - TARGET_KW / READER / ANSWER / TAKEAWAY の4行を決める
   - タイトル案を3つ作り、Step 0-2 のルールで1つに絞る

5. **カテゴリ・フレームワーク決定**
   - トピックに最適なカテゴリ（trend / method / career / app / theory）を選択
   - post_writer.md の Strategy Dispatcher（KWパターン→フレームワーク表）で選択
   - 読者ペルソナ（persona フィールド）は READER の1文から作る

6. **ドラフト作成**
   - 保存先: `.workspace/draft/{category}-{slug}.md`
   - フロントマターは CLAUDE.md の完全テンプレートを使用
   - `draft: true` でスタート
   - 本文冒頭に TARGET_KW / READER / ANSWER / TAKEAWAY のコメント4行を置く
   - リードは post_writer.md Step 0-3（状況 → 世間の声とひねり → 答えの方向性 → 読後の約束）で書く。結論を言い切らない
   - 本文は Step 0-4（見出し末尾のつなぎ文・用語は身近な例から導入・答えの全体は仕組みの説明の後・まとめでリードの問いを回収）で書く
   - 本文は **日本語** で執筆
   - 1〜2文ごとに改行し、行と行の間には必ず空行を入れる（単一改行は描画時に結合されるため）
   - `**bold**` 記法を使用してよい（本番移行時に `<strong>` に変換する）
   - カバー画像の IMAGE_PROMPT コメントを末尾に追記

7. **KW DB 更新**
   - 該当 `*-kw-db.md` の行の `状態` と `既存記事slug` を更新（公開前は `状態` を「執筆中」と追記）

8. **完了報告**
   - 作成したファイルパス
   - TARGET_KW（主KW・副KW）、READER（セグメントコード・チャネル）、ANSWER、TAKEAWAY、採用タイトルと不採用案
   - 選択したカテゴリ・フレームワークとその理由
   - 次のアクション（画像生成・本番移行等）
