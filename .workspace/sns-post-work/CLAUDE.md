# sns-post-work — Threads投稿管理ルール

このフォルダは Syllabus Hack 公式Threadsアカウントの投稿を「作成 → 予約投稿 → 消化 → アーカイブ」のサイクルで管理する作業場所。運用方針の全体像は [`../draft/sns/posting-strategy.md`](../draft/sns/posting-strategy.md) を参照。

## 構造

```
sns-post-work/
├── CLAUDE.md          # 本ファイル（運用ルール）
├── post-task.md        # 今週分の投稿チェックリスト（TODO形式）
├── used-topics.md       # 使用済み・使用予定の元記事ネタ台帳（重複防止）
└── archive/
    ├── CLAUDE.md        # アーカイブ・ログ管理ルール
    └── log.md           # 投稿済みログ（確定した投稿の本文つき記録）
```

## 週次ワークフロー

1. **週の初めに `post-task.md` を新規作成**する（前週分はすでに archive 済みである前提。残っていれば先にアーカイブ処理を終わらせる）
2. 作成時は `used-topics.md` を確認し、**直近8週間以内に使った元記事・テーマは避ける**（重複防止。テーマそのものの角度を変えるのはOKだが、同一記事の使い回しは間隔を空ける）
3. [`../draft/sns/posting-strategy.md`](../draft/sns/posting-strategy.md) の配分ルール（型A〜E、週内で同カテゴリ2連投しない）とPREP構成ルールに沿って7日分を作成する
4. 各投稿には日付・時間・型・元記事（あれば）・投稿本文をセットで記載する
5. **本文・ハッシュタグに「IPA」を単独略称で使わない**（写真コンテスト「International Photography Awards」とKWが競合するため。必ずITパスポート・基本情報技術者試験などの正式名称を使う。詳細は [`posting-strategy.md`](../draft/sns/posting-strategy.md) の「用語表記ルール」参照）
5. `post-task.md` 作成と同時に、使用した記事を `used-topics.md` に「予定」ステータスで追記する

## 投稿確定時の運用（ユーザーが実際にThreadsへ入力・予約したら）

1. `post-task.md` 内の該当項目のチェックボックスに `[x]` を入れる
2. Claude はチェックが入った投稿ブロックを検知したら、[`archive/CLAUDE.md`](archive/CLAUDE.md) の手順に従って `archive/log.md` に移動記録し、`post-task.md` からはそのブロックを削除する
3. `used-topics.md` の該当行のステータスを「予定」→「投稿済み」に更新し、投稿日を記入する

## 命名・重複防止の原則

- 元記事は1週間の中で重複させない（同じ記事から複数の切り口を使う場合も週をまたぐ）
- `used-topics.md` が唯一の重複防止台帳。新しい週を作る前に必ず読む
- 投稿本文そのものをこのフォルダ外（記事本文やSNS bio等）にコピーして二重管理しない。参照は常に `post-task.md` → `archive/log.md` の一本化されたログで完結させる
