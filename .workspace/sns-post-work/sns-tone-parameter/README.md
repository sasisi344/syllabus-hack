# sns-tone-parameter — 投稿トーン最適化ロジック

2026-09-28作成。目的: 1週間の投稿が同じトーン・同じ型の繰り返しにならないよう、**「この記事は誰に読んでほしいのか」を先に決めてから、型と元記事を選ぶ**という順序に投稿設計を変える。

## なぜこのフォルダが必要か

これまでの `post-task.md` 作成フローは「型A〜Eをローテーションで割り当てる → 元記事を選ぶ」という型優先の発想だった。これだと同じような教育型・誤解訂正型の投稿が並びやすく、機械的な印象になりがちだった。

このフォルダでは逆に、**「今週どの読者層に、何を届けるか」を先に決め、その結果として型・元記事・トーンが自動的に決まる**ロジックを定義する。

## ファイル構成

| ファイル | 役割 |
|---|---|
| [`persona-channel-map.md`](persona-channel-map.md) | コンテンツの性質（カテゴリ×サブタイプ）ごとに「誰に届けたいか（ペルソナ・心理状態）」と「適した型」を対応づけるマトリクス。**この選定ロジックの中核** |
| [`weekly-rotation-template.md`](weekly-rotation-template.md) | 1週間分の`post-task.md`を作るときに実際に使う、曜日ごとのペルソナローテーション雛形と、記事選定→執筆までの手順チェックリスト |
| [`app-directory.md`](app-directory.md) | 型F（クイズ誘導型）でCBTアプリへ誘導する際のアプリ一覧。`src/apps/index.ts`から本番投入可能（stable/beta）なものだけを抜粋 |

## 使うタイミング

`.workspace/sns-post-work/CLAUDE.md` の週次ワークフロー手順3（`posting-strategy.md`の配分ルールに沿って週3本を作成する）の**直前**に、このフォルダの内容を確認する。具体的な手順は [`weekly-rotation-template.md`](weekly-rotation-template.md) のチェックリストに従うこと。

## 関連ドキュメント

- 型の定義そのもの（A〜G）は [`../../draft/sns/posting-strategy.md`](../../draft/sns/posting-strategy.md) の「投稿タイプ」表が正本。このフォルダはその**選び方のロジック**を補完する位置づけで、型定義を重複して持たない
- フック・CTAの絵文字/疑問形ルールも `posting-strategy.md`「フック・CTAのランダム性」節が正本
- スレッドごとの役割（結論を出さないフック〜答え〜行動）・大衆性のルール・連投の目印・URLの位置・`post-task.md` の書式（`post` コードブロック）は `posting-strategy.md`「スレッド形式」節が正本。週次作成の実行手順は `.claude/commands/sns-post.md`
- 重複防止台帳は引き続き [`../used-topics.md`](../used-topics.md) が唯一の正本
