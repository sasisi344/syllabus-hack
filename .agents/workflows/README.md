---
description: シラバスハックの作業の流れ（A 記事執筆／B クイズ・アプリ開発／C サイト改修／D ドラフト→本番移行）の早見表。
---

# ワークフロー早見表

2026-11-27 に `CLAUDE.md` から移した（中身は変えていない）。D の詳しい手順は `post-complete.md`。

### A. 記事執筆ワークフロー

```
1. 要件確認: `.task-management/task.md` の該当タスクを Read
2. スキルロード: post_writer.md + category_rules.md を Read（並列可）
3. ナレッジ参照: .workspace/data-set/ から関連データを Read（横展開資格は cert-keyword-db/ を優先）
4. ターゲットKW・読者確定: post_writer.md「Step 0」と reader_segments.md に従い、ロングテールKWを1つ決め、TARGET_KW / READER / ANSWER / TAKEAWAY とタイトルを確定
5. 下書き作成: .workspace/draft/ に Write（「学習体験の共有ルール」に従い、callout を反映して本文を書く）
5.5 筆者記入: 筆者が LEARNER_NOTE を callout で記入または削除（未処理のまま本番移行しない）
6. 本番移行: .agents/workflows/post-complete.md の手順を実行
```

> **記事方針（2026-10-17〜）**: メインKW（`{資格名} 勉強時間` 等）は大手に勝てないため、Hub以外の新規記事は「1記事＝1ロングテールKW」で書く。タイトルの前半に主KWを入れる。リードは結論を言い切らず「答えの方向性＋読後の約束」で興味をつなぎ、読者が最後まで読んで知識を得て納得できる構成にする。詳細は `.agents/post_writer.md` Step 0・`.agents/reader_segments.md`

> **スラッシュコマンド**: `/new-post {トピック}` で手順1〜4を自動展開

### B. クイズ／アプリ開発ワークフロー

```
1. 要件確認: `.task-management/task.md` の該当タスクと、リンク先の要件定義を Read
2. スキルロード: quiz_app_rules.md + quiz_data_rules.md を Read（並列可）
3. データ作成: src/data/master/questions-{examId}.json を Write
4. 実装: src/apps/{app-slug}/ に Write / Edit
5. 登録: src/apps/index.ts を Edit
6. 記事作成: src/data/post/app/{app-slug}/index.mdx を Write
```

> **スラッシュコマンド**: `/new-quiz {試験名}` で手順1〜2を自動展開

### C. サイト改修・開発ワークフロー

```
1. src/config.yaml で設定確認
2. 影響範囲を Grep / Glob で調査
3. src/layouts/ → src/components/ の順に構造把握
4. dark_mode_css.md でCSS標準確認
5. pnpm build でビルド確認
```

### D. ドラフト → 本番移行ワークフロー

```
1. 強調の扱い分け（src/data/post/）:
   - 本文（コードフェンス外）: **bold** → <strong> へ全変換（Markdown bold は禁止のまま）
   - コードフェンス内（コピー用プロンプト等）: 強調は Markdown の二重アスタリスク太字のみ。HTML の strong タグは使わない（AI向け）
2. 画像パスを ~/data/post/{category}/{slug}/cover.jpg 形式に正規化
3. draft: false にセット
4. lastmod を今日の日付に更新
5. callout 確認: [!forAI] を削除、LEARNER_NOTE の未処理なし、exp/question/think と本文が矛盾しないこと
6. src/data/post/{category}/{slug}/index.md に配置
7. `.task-management/task.md` の該当タスクを完了にする（完了したら `records/` へ。手順は `.task-management/CLAUDE.md` §6）
```

> **スラッシュコマンド**: `/publish-post {ドラフトファイル名}` でチェックリストを展開
