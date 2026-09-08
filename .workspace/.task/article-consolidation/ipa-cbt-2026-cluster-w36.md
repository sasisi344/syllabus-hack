# 既存記事の統廃合 — IPA 2026年CBT記事クラスタ棚卸し（W36データ反映）

> 正本タスク: `../TODO.md` §3「既存記事の統廃合（GSC/GA4データドリブンの棚卸し）」
> 過去の判断根拠: `../archive/todo-pre-course-pivot-2026-09-07.md`（2026-07-29起票「IPA 2026年CBT記事8本の統廃合」／同ファイル内でW30深掘りのカニバリ原因分析を実施済み）
> 本ファイルは **W36データ投入（2026-09-08）を受けた再検証**。2026-09-08、ユーザーが§6の確認事項に対し「6本を一括統合」を選択したため、§3-2の統合案を**実行済み**（詳細は§7）。

---

## 1. 背景

2026-07-29時点で「IPA 2026年CBT記事8本のカニバリゼーション」が起票され、統合候補として独自価値の薄い3本（`2026-cbt-transition-advanced-exam`／`2026-cbt-ai-syllabus-strategy`／`ipa-2026-cbt-strategy-ai`）を選定済みだった。W30時点では非破壊処置（内部リンク宛先の集約）のみ実施し、統合・301化はユーザーのGo/No-Go判断待ちのまま保留していた。

今回、W36（2026-08-29〜09-04のGSC 7日間データ／2026-08-15〜09-05のGA4データ）が投入されたため、約6週間ぶりに一次データで再検証した。

## 2. データソース

- GSC 7日間（クエリ・ページ）: `../access-data/2026/W36/クエリ.csv`, `../access-data/2026/W36/ページ.csv`（期間: 2026-08-29〜09-04）
- GA4 探索レポート（ランディングページ×参照元、3週間分）: `../access-data/2026/W36/syllabushack-ga4-w36.csv`（期間: 2026-08-15〜09-05）
- 記事インデックス: `node .workspace/scripts/index-articles.js` 再実行結果（本ファイル作成時点の最新）

## 3. IPA 2026年CBT記事8本の現状（W36時点）

対象は同一トピック（IPA・2026年CBT移行/日程変更）を扱う8本。GSCページCSVに行が存在しない記事は「当該週の表示回数0件（検索結果に一切出ていない）」を意味する。

| slug | category | 公開日 | W36クリック/表示/CTR/掲載順位 | GA4セッション（3週間, 参照元別） | 判定 |
|---|---|---|---|---|---|
| `cbt-2026-syllabus-complete-guide` | method | 2026-04-01 | 21 / 945 / 2.22% / 10.11 | 38（direct14, bing13, google9, yahoo1）※クラスタ内最多 | **ハブ本体（維持）** |
| `ipa-2026-cbt-schedule-guide` | trend | 2026-03-07 | 0 / 155 / 0% / 22.85 | 7（bing5, direct2） | 独自トピック（日程専用）だが低迷継続。**維持・観察** |
| `ipa-2026-cbt-confirmed-schedule` | trend | 2026-04-05 | 0 / 0 / — / — | 0 | 表示0件。**統合候補（追加）** |
| `applied-advanced-exam-cbt-transition-2026` | trend | 2026-02-17 | 0 / 0 / — / — | 0 | 表示0件。**統合候補（追加）** |
| `ap-2026-spring-postponed` | trend | 2026-02-25 | 0 / 0 / — / — | 1（bing, direct流入経由の速報記事） | 表示0件・セッションも僅少。**統合候補（追加）** |
| `2026-cbt-transition-advanced-exam` | trend | 2026-02-26 | 0 / 3 / 0% / 12 | 0 | 旧判定通り独自価値薄い。**統合候補（既存）** |
| `2026-cbt-ai-syllabus-strategy` | trend | 2026-03-25 | 0 / 3 / 0% / 19.33 | 1（direct, 滞在0秒） | 旧判定通り独自価値薄い。**統合候補（既存）** |
| `ipa-2026-cbt-strategy-ai` | trend | 2026-04-05 | 0 / 0 / — / — | 0 | GSC・GA4とも完全に無反応。**統合候補（既存、最有力）** |

### 3-1. 旧判定との差分

- **既存3候補**（`2026-cbt-transition-advanced-exam`・`2026-cbt-ai-syllabus-strategy`・`ipa-2026-cbt-strategy-ai`）は6週間経過後も改善なし。統合妥当性は維持・強化。
- **新規に統合候補へ追加提案**: `ipa-2026-cbt-confirmed-schedule`・`applied-advanced-exam-cbt-transition-2026`・`ap-2026-spring-postponed` の3本もW36で検索表示が完全に消失（0件）。旧起票時点では対象8本の中で「カニバリを起こしている側」としてのみ言及され、統合候補には含めていなかったが、現状は既存3候補と同水準以下のパフォーマンスであり、据え置く理由が薄い。
- **ハブ（`cbt-2026-syllabus-complete-guide`）と日程専用ページ（`ipa-2026-cbt-schedule-guide`）は維持**。前者はクラスタ内で唯一クリックを獲得しておりCTRも他記事より高い。後者はW30で内部リンク宛先を集約済みだが、まだ改善が数値に表れていない（順位22.85）。もう1〜2週観察してから判断。

### 3-2. 統合案（たたき台。実行はGo判断後）

- 統合先: `cbt-2026-syllabus-complete-guide`（ハブ）に一本化。日程の細部が必要な場合は `ipa-2026-cbt-schedule-guide` を残し、そちらに寄せる。
- 対象6本: `ipa-2026-cbt-confirmed-schedule`／`applied-advanced-exam-cbt-transition-2026`／`ap-2026-spring-postponed`／`2026-cbt-transition-advanced-exam`／`2026-cbt-ai-syllabus-strategy`／`ipa-2026-cbt-strategy-ai`
- 手順（実行時の想定）: (1) 各記事の一次情報のうち未収録の固有情報があればハブ記事へ吸収、(2) 対象記事を確認のうえ削除、(3) `astro.config.ts` に301リダイレクト追加（旧slug→`cbt-2026-syllabus-complete-guide`）、(4) 対象記事へ内部リンクしている記事があれば宛先をハブへ張り替え、(5) `pnpm build` で検証。
- 実行結果は §7 を参照。

## 4. course系新コンテンツとのクロール予算競合

`course` コレクションは2026-09-08時点でWeek1（データ整備）完了・Astro実装はWeek3（9/20〜9/26）予定のため、現時点で内部リンク・クロール予算への影響は評価不能。**Week3実装後に再検証**（TODO.md §0 Week3タスクと連動）。

## 5. 副次的発見（統廃合とは別軸・参考情報）

W36データで新たに目についた事象。統廃合の対象ではないが、次回のリライト優先度検討（TODO.md旧T5相当）に材料として残す。

- **BCM/BCP関連クエリ群の極端な低順位**: `theory/bcm-bcp-business-continuity` が「bcp bcmコンサルティング」「bcp bcm 違い」「bcp bcm とは」等で表示回数トップ（週483表示）を記録しているにもかかわらず、掲載順位は85〜98位でクリック0件。単独記事のため統廃合対象ではないが、表示回数の大きさに対して収益（クリック）を全く回収できていない典型例。次回リライト検討時の最優先候補として記録のみ行う。

## 6. ユーザーへの確認事項（Go/No-Go）— 2026-09-08 回答済み

1. §3-2の統合案（6本→ハブ集約）を実行してよいか。全6本一括か、既存3候補のみ先行実施かも含めて判断を仰ぐ。
   → **回答: 「6本を一括統合（推奨）」を選択。実行済み（§7）**
2. `ipa-2026-cbt-schedule-guide` は今回「維持・観察」としたが、次回データでも改善なしなら統合対象に含めるかどうかの事前合意。
   → 今回は未着手のまま。次回データ投入時に改めて判断する。

## 7. 実行結果（2026-09-08）

対象6本を全て削除し、`cbt-2026-syllabus-complete-guide`（ハブ）へ統合した。

- **各記事の内容確認**: 6本とも、ハブ記事（および`ipa-2026-cbt-schedule-guide`）が既にカバーしている内容（前期/後期日程・科目A/B名称変更・免除制度・CBTのメリデメ・タイピング対策）のパラフレーズであり、未収録の固有情報は無いことを確認。唯一、`ap-2026-spring-postponed`にあった「前期のみ実施／後期のみ実施の試験区分一覧」は、`ipa-2026-cbt-schedule-guide`側に既により詳細な早見表（区分別の受験時期・申込目安）としてW30時点で収録済みと判明したため、追加移植は不要と判断
- **削除**: `src/data/post/trend/{ipa-2026-cbt-confirmed-schedule, applied-advanced-exam-cbt-transition-2026, ap-2026-spring-postponed, 2026-cbt-transition-advanced-exam, 2026-cbt-ai-syllabus-strategy, ipa-2026-cbt-strategy-ai}/` を削除
- **301リダイレクト**: `astro.config.ts` の `redirects` に6件追加。5本は`cbt-2026-syllabus-complete-guide`へ、`ap-2026-spring-postponed`のみ内容的な親和性から`ipa-2026-cbt-schedule-guide`へ
- **内部リンク修正**: `method/ap-hub`（重複リンク2箇所を整理・削除記事へのリンクを除去）、`method/chatgpt-itpassport-ai-complete-guide`（`ipa-2026-cbt-strategy-ai`へのリンクをハブへ差し替え）。両記事の`lastmod`を2026-09-08に更新
- **ビルド検証**: `pnpm build` 実行、エラーなし・1486ページ生成を確認
- **未実施**: git commit・push（コミットは別途ユーザー確認のうえ実施）

## 更新履歴

- 2026-09-08: W36データ投入を受けて新規作成。既存3候補の再検証＋新規3候補の追加提案。
- 2026-09-08: ユーザーがGo判断（6本一括統合）。統合・301化・内部リンク修正・ビルド検証まで実行完了。
