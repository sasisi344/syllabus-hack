# re-contentで残っているタスクを記録

最終整理: 2026-10-25（第4弾完了）

## 進捗のまとめ

- `wording-list.md` の文言修正: 307記事すべて完了
- 刷新（`[!forAI]` 指示分）: 第1弾47記事・第2弾38記事は完了（2026-10-20〜21）。一覧は `refreshed-list.md`。第3弾（`wording-list.md` に残っていた `> [!forAI]` の記事）もすべて完了（3記事ずつ処理。完了: fp2-cbt-strategy・sg-quiz・30s-career-change・ai-data-career・fe-career-modern-web・ip-survival-strategy・kougyou-koukou-shikaku-ichiran・ses-ap-independence-strategy・fe-pseudo-code-visual-hack・genai-vocabulary-learning-efficiency・guide・itp-10-days-panic-hack・nw-mermaid-hack・st-strategy-brainstorming・boki-zensho-vs-nissho-comparison-hack・cbt-exam-venue-booking-tips・genai-ethics-quiz・sa-llm-agent-design・security-incident-prevention-basics・sg-exam-popularity-step-up・targeted-threat-email・web3-nft・zero-trust-architecture・st-ai-pov-strategy）
- 統合してリダイレクトした記事（`astro.config.ts` の redirects）:
  - `/career/it-passport-to-ap-roadmap/` → `/method/advanced-ipa-hub/`（第2弾で ap-hub を統合したため転送先を変更）
  - `/method/it-passport-study-route-comparison/` → `/method/itp-hub/`
  - `/career/backoffice-sg-strategy/` → `/career/backoffice-sg-career-hack/`
  - `/career/itp-non-engineer-career-strategy/` → `/method/itp-hub/`
  - `/method/genai-problem-mastery-notebooklm/` → `/method/notebooklm-ip-study-hack/`
  - `/method/tablet-study-guide/` → `/method/multi-device-cert-study/`（第2弾、2026-10-21）
  - 第2弾（2026-10-21）:
    - `/method/mos-ai-shortcut/`・`/theory/mos-exam-format-scoring-basics/` → `/method/mos-hub/`
    - `/method/ap-hub/`・`/method/level4-strategy-hub/`・`/career/gateway-to-advanced/` → `/method/advanced-ipa-hub/`
    - `/method/ccna-ai-hack/`・`/method/ccna-fail-comeback/` → `/method/ccna-hub/`
    - `/trend/lpic-ccna-aws-order/` → `/method/aws-hub/`
    - `/trend/fp-why-2kyu-is-standard/`・`/career/fp2-jukendekaku-junbi-roadmap/` → `/method/fp-hub/`
  - 第3弾（2026-10-21）: `/trend/zero-trust-architecture/` → `/theory/security-controls-crypto-incident-basics/`、`/trend/st-ai-pov-strategy/` → `/method/advanced-ipa-hub/`
  - 第3弾（2026-10-21）: `/trend/targeted-threat-email/`・`/trend/sg-exam-popularity-step-up/` → `/trend/security-incident-prevention-basics/`
  - 第3弾（2026-10-21）: `/method/st-strategy-brainstorming/` → `/method/advanced-ipa-hub/`（`/trend/st-ai-pov-strategy/` を統合するときも、同じハブのST節に寄せる）
  - 第3弾（2026-10-21）: `/method/itp-10-days-panic-hack/` → `/method/exam-final-10-days/`（新規スラッグ。既存の `/final-checkpoint-100-plus/` 系のリダイレクトも付け替え済み）
  - 第3弾（2026-10-21）: `/career/ses-ap-independence-strategy/` → `/career/ses-ap-strategy/`、`/method/fe-pseudo-code-visual-hack/` → `/method/fe-algorithm-roadmap/`
  - 第3弾（2026-10-21）: `/career/ip-survival-strategy/` → `/method/itp-hub/`
  - 第3弾（2026-10-21）: `/trend/fp2-cbt-strategy/` → `/method/fp-hub/`（FPの20時間コースを作ったら、fp-hub の「不合格だったとき」節からリンクする）
    - `/app/genai-trend-quiz/` → `/app/genai-ethics-quiz/`（アプリのコード `src/apps/genai-trend-quiz/` は残し、統合先のページで表示）
    - `/trend/agile-development/`・`/trend/scrum-agile/` → `/theory/agile-scrum-basics/`
    - `/trend/reskilling-it-passport/` → `/theory/reskilling-basics/`（新規作成）
    - `/career/biru-kanri-jitsumu-keiken-roadmap/` → `/method/biru-kanri-hub/`
    - `/trend/fe-certification-value-debate/` → `/method/fe-hub/`（競合が強いため単独の刷新はせず、fe-hub に「意味がないことはない」節を置いた）
- 統合したがページは残した記事: `/app/flashcard-app/`（用語ノートの説明を `/method/notebooklm-features-guide/` へ移し、アプリのページから案内）

## 第2弾の刷新（2026-10-21〜）

- [x] 38件すべてを刷新・統合（`refreshed-list.md` の一覧末尾）
- [x] 統合先だけ刷新し、統合元はまだ残している記事（統合元の `[!forAI]` を処理するときに、内容の移動・リダイレクト・記事削除を行う）
  - `/method/advanced-ipa-hub/` ← `/method/level4-strategy-hub/`・`/method/ap-hub/`・`/career/gateway-to-advanced/`
  - `/method/mos-hub/` ← `/method/mos-ai-shortcut/`・`/theory/mos-exam-format-scoring-basics/`

## 第4弾の刷新（2026-10-25）

- [x] `wording-list.md` に書き足されていた `[!forAI]` 18件を処理（一覧は `refreshed-list.md` 末尾）
  - 統合: `/career/liberal-arts-it-strategy-aichi/` → `/career/regional-salary-qualification-correlation/`、`/method/mos-excel-expert-difficulty/` → `/method/mos-hub/`、ITパスポートの分野別ドリル3本 → `/app/ip-field-drill/`（新規）
  - 排除: `/method/ai-problem-master-syllabus/`・`/method/cbt-exam-tactics/` → `/method/itp-hub/` へ転送
  - 刷新: sg-subject-b-quiz・portfolio-vs-cert・ap-grader-intent-hack・boki2kyuu-tsugi-shikaku・miss-note-db・notebooklm-ip-study-hack・practice-guide-ipa・sg-news-study-hack・sql-join-visual-ai-hack・st-no-experience-essay-hack・syllabus-diff-hack・zaigakuchuu-takken-itsu-ukeru
- [ ] 筆者の確認待ち
  - `/career/portfolio-vs-cert/`: 採用担当の声3タイプ（マニュアル型・個人判断型・情報通型）は筆者の提供内容を反映済み。追加の取材や出典があれば、各タイプに追記する
  - `/career/regional-salary-qualification-correlation/`: 年収表・資格保有者の待遇差の表は旧記事の数値（出典は「編集部作成」）をそのまま残している。根拠の確認が必要
  - `/app/sg-subject-b-quiz/`: 12問は新規に書き下ろした架空の事例。内容（特に個人情報保護法まわりの記述）は公式資料での確認が必要。旧問題のうちMFA・シャドーIT・CIAの3問は削除した
  - `/method/sql-join-visual-ai-hack/`: 「統合も考える」の指示に対し、別記事のまま残してDS検定hubから案内する形にした。統合する場合は `/method/ds-kentei-hub/` へ

## 未着手の実装（第3弾で保留）

- [ ] 生成AI用語データベースの中身と、定期調査のフィード（`/app/genai-ethics-quiz/` の `[!forAI]` の後半）: 型は作成済み（`.workspace/data-set/genai-terms-db/` の `schema.json`・空の `terms.json`・`README.md`、2026-10-21）。未実施は、実際に調べて一次情報で確認した用語を入れることと、ClaudeやChatGPTのスケジュール機能での定期実行の設定。人の確認を挟む前提で、小さく始めること

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
