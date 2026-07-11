# W28検証 派生タスク（w28-site-verifi）

作成日: 2026-07-11
根拠: `w28-analysis-report.md`（W26〜W28 GSC/GA4解析）
運用: 各タスク完了時にチェックし、検証結果は本フォルダに追記。全タスククローズ後に TODO.md へ反映。

> 共通制約: `git push` 禁止／画像生成は明示指示があるまで禁止／KWリサーチは `.agents/kw_pattern_research.md` 経由必須／本文の `**bold**` 禁止・lastmod更新等 CLAUDE.md ルール遵守

---

## T3: URL正規化の止血【優先度: 最高・技術】

スラッシュなしURL（`/career/ses-ap-strategy-miyagi`・`/trend/prompt-engineering-basics`・`/method/sql-join-visual-ai-hack`・`/trend/ipa-2027-restructuring`）がGSCに計上され、W27はスラッシュあり/なしが重複インデックスされている。

**完了（2026-07-11）**

実査結果（本番 `curl -sI`）:

| URL | 結果 |
|---|---|
| `/career/ses-ap-strategy-miyagi`（スラッシュなし） | 301 → `.../ses-ap-strategy-miyagi/` 正常 |
| `/method/sql-join-visual-ai-hack` | 301 → 正常 |
| `/trend/ipa-2027-restructuring` | 301 → 正常 |
| `/trend/prompt-engineering-basics` | **404**（想定外） |

スラッシュ有無の重複はAstroの `trailingSlash: 'always'` により正常に301化されており問題なし（GSC上の非正規URL計上は自然消滅を待てばよい）。

一方 `prompt-engineering-basics` の404を調査した結果、**より重大な技術バグを発見**: `netlify.toml` に旧URL→新URL（term/theory移行）のリダイレクト定義があるが、本番サーバーは `Server: nginx`（Netlifyの配信エンジンではない）でこれらの `[[redirects]]` ルールが**一切機能していない**ことを確認（`astro.config.ts` 側の `redirects`（静的meta-refreshページとして生成）は正常に機能することも比較検証済み）。

`/term/*` ワイルドカードと `/trend/prompt-engineering-basics` の個別ルールが死んでおり、Googleに残存インデックスされている旧URLへの流入は全て404を返していた。GSCデータ（W26〜W27）で残存インデックスを確認できた3件（`prompt-engineering-basics`・`term/sampling-methods-data`・`term/digital-divide-basics`）を `astro.config.ts` の `redirects` に個別移植し、`pnpm build` で静的リダイレクトページ生成を確認済み（`dist/trend/prompt-engineering-basics/index.html` 等でmeta-refresh＋canonicalが正しく出力）。

- [x] 本番URLでスラッシュなし→ありのリダイレクトを実査 → 3/4は正常301
- [x] 301でない（404）だった `prompt-engineering-basics` の原因調査 → netlify.tomlの死んだリダイレクト設定と判明
- [x] `astro.config.ts` の `redirects` に不足分（3件）を移植し `pnpm build` で確認
- [ ] **要ユーザー確認**: `netlify.toml` の `[[redirects]]` ブロック（L16-30, `/term/*` ワイルドカード含む）は本番で機能していないため実質死んでいる。ホスティングがNetlifyでなくなった経緯を把握しているか、他に見落としている `/term/` 配下の旧slugがないか（本調査はGSC残存インデックスがある2件のみ対応、全量棚卸しは未実施）
- [x] 完了条件: 非正規URL4件のレスポンスコード記録＋必要な修正完了（コミット待ち）

## T1: CTR改善 — 表示ゼロクリック3ページのタイトル・meta再設計【優先度: 高・編集】

**完了（2026-07-11、並列エージェント3体で実施）**

対象: `cbt-2026-syllabus-complete-guide`（表示20/CTR 0%）・`doboku-sekou-hub`（表示10/順位8.4）・`ipa-2026-cbt-schedule-guide`（表示13）

| ページ | 変更前タイトル | 変更後タイトル | 発見事項 |
|---|---|---|---|
| cbt-2026-syllabus-complete-guide | 【2026年最新】IPA試験CBT完全移行ガイド｜午前午後の名称変更・タイピング練習法まとめ | 応用情報・高度試験のCBT移行はいつから？令和8年度日程と対策 | 「令和8年度」「2026年春試験は実施されず前期は11月延期」という一次情報がタイトル・meta・導入部に欠落していた（過去のK-2改善はこの核心事実を含んでいなかった） |
| doboku-sekou-hub | 土木施工管理技士（1級・2級）完全攻略ガイド｜AIで「施工経験記述」を突破するロードマップ | 【2026年最新】土木施工管理技士1級2級｜経験記述をAIで添削し独学合格 | タイトル45字と長すぎ、「独学」「AI添削」という検索意図語が欠落 |
| ipa-2026-cbt-schedule-guide | 【2026年最新】情報処理技術者試験CBT日程・スケジュール完全ガイド｜前期後期の区分と予約の注意点 | 【2026年11月開始】情報処理技術者試験CBT日程・申込ガイド | **Googleが自記事タイトルを独自に書き換えて表示していた**ことが判明（旧タイトルが長すぎ・冗長すぎたため）。開始月を明示した具体タイトルに短縮 |

- [x] 各ページの主要クエリでSERPを実査（WebSearch使用）
- [x] 競合との差分要素を特定しタイトル30〜40文字・meta description 120〜160文字で再設計
- [x] 導入部を結論先出し・対象読者明示に刷新（3ページとも）
- [x] lastmod を2026-07-11に更新（3ページとも）。`**bold**`混入なし確認済み・`pnpm build`成功確認済み
- [ ] 完了条件の後半（W30データでCTR>0判定）はT6に引き継ぎ

## T4: 勝ちページ強化 — new-ipa-exam-study-strategy のハブ化【優先度: 高・編集】

**完了（2026-07-11）**

唯一の3週連続クリック獲得ページで、W28に順位2位到達。この評価を隣接クエリへ波及させた。

- [x] 「試験区分別 学習時間の目安」（未経験者/実務経験者別）表を新設セクションとして追記
- [x] 「CBT移行で試験の受け方も変わる」セクションを新設し、新試験区分もCBT移行の対象であることを明示
- [x] 双方向内部リンクを4本整備: cbt-2026-syllabus-complete-guide／ipa-2026-cbt-schedule-guide／practice-guide-ipa／app/it-passport-quiz（各記事側にもリンクバックを追加、lastmod更新）
- [x] 副次的発見: 本文中に文字化け（U+FFFD、過去のエンコード変換ミスと推定）が5箇所あり文脈から復元・修正
- [x] `pnpm build` 成功（1347ページ）確認済み。並行編集中のcbt-guide・ipa-schedule-guideとのファイル競合なし
- [ ] 完了条件の後半（W31の順位維持＋表示回数拡大）はT6に引き継ぎ

## T2: nw-mermaid-hack のインデックス確認とNWクラスター拡充起票【優先度: 中】

W27以降GSCで表示が消滅（12→0→0）。K-1の発動条件（Top5未達）を超過。

- [ ] **要ユーザー対応**: Search Console のURL検査でインデックス状態を確認（エージェントは外部アカウントにアクセスしない）。canonical・重複判定の有無を記録
- [x] コンテンツ強化: NWクラスター拡充3案を検討し `.workspace/.task/w28-site-verifi/nw-cluster-expansion-requirement.md` に要件定義を作成（2026-07-11）。推奨案: 「NW午後過去問演習ハック」（`nw-mermaid-hack`の実践フローセクションと直結、離脱リスク低）。「科目B」はNW試験に存在しないため「午後過去問演習」に読み替えて企画。執筆はユーザーレビュー後
- [ ] 完了条件: インデックス状態の記録（ユーザー確認待ち）＋拡充1本目の要件定義ファイル作成（完了）

## T5: 順位8〜15位デッドゾーン記事の押し上げリライト【優先度: 中・W30以降】

T1/T3/T4 の結果を見てから着手する第二弾。

- [ ] W29・W30データで順位8〜15位に滞留しているページを再抽出（現候補: mos-vs-itp-job-hunting・aws-concept-metaphor-hack・foreigner-japan-national-qualification・sla-slo-service-quality）
- [ ] 各ページでSERP上位3件と自記事の見出し構成を比較し、欠落している検索意図をリライトで補完（新基準: 下限約2000字・検索意図解消でクローズ）
- [ ] 完了条件: 対象ページのリライト完了。判定はリライト2週後の順位で実施

## T6: 週次検証運用（W29〜W31）【優先度: 継続】

- [ ] W29データ受領後: レポートのKPI表を実測値で更新し、K-3（sg-beginner-roadmap 分散）と K-5（7/10改修効果: sitemap・カテゴリ日本語化・ToC後のエンゲージメント時間）の検証を実施
- [ ] W30データ受領後: T1のCTR判定。未達なら Act 分岐（対象を上位10ページへ拡大）
- [ ] W31データ受領後: 全KPIの達成判定と次期プラン（w31-site-verifi 相当）の起票
- [ ] 新規19記事＋アプリ5本のインデックス状況を毎週トラッキング（W31時点で表示ゼロの記事はKW設計再監査へ）

---

## 進行状況

| タスク | 状態 | 着手日 | 判定週 | 備考 |
|---|---|---|---|---|
| T3 URL正規化 | ✅完了（要ユーザー確認1件） | 2026-07-11 | 即時 | netlify.toml死亡リダイレクトを発見・astro.config.tsへ移植。ホスティング経緯の確認が別途必要 |
| T1 CTR改善 | ✅完了（判定待ち） | 2026-07-11 | W30 | 3ページのタイトル・meta・導入部刷新。CTR>0の判定はW30 |
| T4 勝ちページ強化 | ✅完了（判定待ち） | 2026-07-11 | W31 | 本文追記＋内部リンク4本整備。副次的に文字化け5箇所修正 |
| T2 NWインデックス確認 | 🔶部分完了 | 2026-07-11 | W29 | 要件定義完了。Search Console確認はユーザー対応待ち |
| T5 デッドゾーンリライト | 未着手 | — | W30以降着手 | T1/T3の結果待ち |
| T6 週次検証 | 継続中 | 2026-07-11 | 毎週 | 日曜データ提供後 |

**本セッションでの変更ファイル（コミット待ち）**:
`astro.config.ts` / `src/data/post/method/{cbt-2026-syllabus-complete-guide,doboku-sekou-hub,new-ipa-exam-study-strategy,practice-guide-ipa}/index.md` / `src/data/post/trend/ipa-2026-cbt-schedule-guide/index.md` / `src/data/post/app/it-passport-quiz/index.mdx` ／ 新規: `w28-analysis-report.md` / `w28-tasks.md` / `nw-cluster-expansion-requirement.md`

**次回ユーザー確認が必要な2点**:
1. netlify.toml の `[[redirects]]` ブロックが本番で機能していない件（ホスティング経緯の把握、他の見落とし旧slugがないか）
2. nw-mermaid-hack のSearch Console URL検査（インデックス状態確認）
