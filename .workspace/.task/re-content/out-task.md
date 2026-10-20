# re-contentで残っているタスクを記録

最終整理: 2026-10-21

## 進捗のまとめ

- `wording-list.md` の文言修正: 307記事すべて完了
- 刷新（`[!forAI]` 指示分）: 47記事すべて完了（2026-10-20〜21）。一覧は `refreshed-list.md`。残りの `[!forAI]` はなし
- 統合してリダイレクトした記事（`astro.config.ts` の redirects）:
  - `/career/it-passport-to-ap-roadmap/` → `/method/ap-hub/`
  - `/method/it-passport-study-route-comparison/` → `/method/itp-hub/`
  - `/career/backoffice-sg-strategy/` → `/career/backoffice-sg-career-hack/`
  - `/career/itp-non-engineer-career-strategy/` → `/method/itp-hub/`
  - `/method/genai-problem-mastery-notebooklm/` → `/method/notebooklm-ip-study-hack/`
- 統合したがページは残した記事: `/app/flashcard-app/`（用語ノートの説明を `/method/notebooklm-features-guide/` へ移し、アプリのページから案内）

## ITパスポート（ip）関連

### 完了済み

- [x] `/method/smartphone-study-guide/` を刷新（スキマ時間の長さ別の構成。2026-10-20、`4c005c8`）
- [x] 上記への被リンク 11ファイル・12か所の文言を新タイトルに統一（同上）
- [x] `/method/itp-hub/` のFAQ「PCが必要なのは申し込み時のCBTS登録のみ」を修正（同上）
- [x] まとめて行う作業1：`/method/itp-hub/` を「ITパスポート 合格ロードマップ｜AI時代に最初の一手としてこれを選ぶ理由」に改題し、被リンクの「ITパスポート完全攻略ガイド」「ITパスポート最短合格ロードマップ」を一括置換（残り0件）
- [x] まとめて行う作業2：タイトルに訴求語を含む6記事の対応
  - `/career/it-passport-to-ap-roadmap/`・`/method/it-passport-study-route-comparison/`：統合してリダイレクト
  - `/method/fast-track-roadmap-20h-pass/`・`/career/itp-high-school-resume-hack/`・`/trend/reskilling-it-passport/`：改題済み
  - `/method/ip-discard-strategy/`：改題済み。ただし現タイトルに「最短」が残る（「ITパスポートを社会人が最短で取る捨て問戦略｜…」）。GSCでCTRが高い記事のため、残すかどうかは要判断
- [x] まとめて行う作業3（一部）：見出し `【AIハック】生成AIで最速暗記` の一括置換（残り0件）
- [x] 記事ごとに直す作業：合格を約束する文言（A）を含む記事 10件（統合・刷新・文言修正で対応済み。2026-10-21時点でAの語は否定文の2か所のみ）

### 残っている作業

- [ ] まとめて行う作業3の残り：trend 用語記事の定型文の一括置換
  - `合格へのヒント` と `合格への鍵` が 22ファイルに残る（trend 用語記事が中心。ほかに `method/ccna-fail-comeback`・`method/fe-subject-b-drill`・`method/st-strategy-brainstorming`・theory 3件）
  - 言い換えを決める（例: 「試験で問われるポイント」）→ 一括置換 → 各ファイルの `lastmod` を更新
- [ ] `/method/ip-discard-strategy/` のタイトルの「最短」を残すか決める

## サイト全体の残り（2026-10-21 時点の再集計）

`wording-list.md` の作成時には対象外だった、または修正後に残った語。多くは文脈上問題ない用法（例: 「最短翌日から受験可能」）を含むため、件数は目安。

| 語 | 該当箇所 | ファイル数 |
| --- | :---: | :---: |
| 合格への | 51 | 47 |
| 最短 | 17 | 13 |
| 確実に | 11 | 10 |
| 圧倒的 | 3 | 3 |
| 最速 | 1 | 1 |
| 完全攻略・完全ガイド・攻略法 | 0 | 0 |

- [ ] 上の残りを見て、直すものと残すものを決める（再集計: `grep -rnE "合格への|最短|確実に|圧倒的|最速" src/data/post src/data/course`）

### 進め方のメモ

- 被リンクの洗い出し: `git grep -n "](/{category}/{slug}/)" -- src/data`
- 文言を変えたファイルは、リンク文言だけの変更でも `lastmod` を更新する
- 記事を統合するときは、統合先へ内容を移し、`astro.config.ts` の redirects に旧URLを追加してから記事ファイルを削除する
- `extract_wording.py` を再実行すると `wording-list.md` を上書きし、チェック欄も初期化される。再集計は上の grep で行う
