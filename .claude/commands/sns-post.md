# SNS投稿（Threads）週次作成

対象週: $ARGUMENTS（例: `w41` または `10/5-10/11`。空の場合は `post-task.md` の現在の記載内容と `archive/log.md` の最終日から次週を判断する）

`.workspace/sns-post-work/` 配下のThreads投稿を、ペルソナ起点の選定ロジックで作成し `post-task.md` に書き出す。

## 手順1: 規約の読み込み

以下を<strong>並列で</strong> Read する:

1. `.workspace/sns-post-work/CLAUDE.md` — 運用ルール全体
2. `.workspace/sns-post-work/sns-tone-parameter/README.md`・`persona-channel-map.md`・`weekly-rotation-template.md`・`app-directory.md`
3. `.workspace/draft/sns/posting-strategy.md` — 型定義（A〜G）・PREP構成・フック絵文字ランダム性ルール・用語表記ルール
4. `.workspace/sns-post-work/archive/log.md` の直近2週間分 — 直近のペルソナ・型・トーンの配分を把握する

## 手順2: 記事候補の洗い出し

- `.workspace/task-results/article-index.md` を Read する。古い可能性がある場合は `node .workspace/scripts/index-articles.js` を実行してから読み直す（手動スキャン・記憶による記事一覧の把握は禁止）
- `weekly-rotation-template.md` の基本ローテーション雛形に沿って、曜日ごとに届けたいペルソナ（#1〜8）を仮決めする
- 各ペルソナに対応する元記事・アプリ候補を`persona-channel-map.md`の性質列から絞り込む

## 手順3: 重複チェック（必須・スクリプト実行）

候補が固まったら、**必ず**以下を実行して機械的に判定する。目視・記憶による「多分大丈夫」判断は禁止。

```bash
node .workspace/scripts/check-sns-topic.js <候補1のcategory/slug> <候補2のcategory/slug> ...
```

- exit code が 0（すべて🟢）になるまで、🔴と判定された候補を別の記事に差し替えて再実行する
- 型F（クイズ誘導型）でアプリに誘導する場合は、`app-directory.md`の`status: stable/beta`一覧からのみ選ぶ（development状態のアプリは誘導しない）

## 手順4: 執筆

- 型ごとのPREP構成（`posting-strategy.md`）に沿って本文を書く。350〜480字目安
- フックの文末は「？」（疑問形）と絵文字（言い切り型）を週内でランダムに混ぜる。同じパターンを連続させない
- CTA（型B・C・D・F・Gの記事/アプリ誘導）には絵文字を1つ添える。同じ絵文字を使い回さない
- 「IPA」を単独略称で使わない（正式名称を使う）
- 元記事は `https://syllabushack.com/{category}/{slug}/` のフルURL形式で記載する

## 手順5: 書き出し・台帳更新

- `.workspace/sns-post-work/post-task.md` に、日付・時間・型・元記事（フルURL）・本文をチェックボックス付きで追記する
- `.workspace/sns-post-work/used-topics.md` に、使用した記事を「予定」ステータス・使用予定日つきで追記する

## 手順6: 完了報告

- 作成した投稿の一覧（日付・型・ペルソナ・元記事）を要約して報告する
- 手順3のチェック結果（全候補🟢だったこと）を明記する

## 禁止事項

- `check-sns-topic.js` を実行せず、記憶や目視だけで「このネタは使っていないはず」と判断すること
- development状態のアプリ（`app-directory.md`参照）を型Fの誘導先にすること
- 週内で同じ型・同じペルソナ番号を連続させること
- 元記事のない投稿（型E等）以外で、リンク・元記事情報を省略すること
