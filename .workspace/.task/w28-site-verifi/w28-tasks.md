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
- [ ] **要ユーザー確認**: `netlify.toml` の `[[redirects]]` ブロック（L16-30, `/term/*` ワイルドカード含む）は本番で機能していないため実質死んでいる。ホスティングがNetlifyでなくなった経緯を把握しているか
- [x] 完了条件: 非正規URL4件のレスポンスコード記録＋必要な修正完了（コミット待ち）

**追補（2026-07-11・レポート§8-1）**: ユーザー提供のGSC累積エクスポート（ページ.csv）で全量棚卸しが完了し、**より深刻なプレフィックス欠落バグを発見・修正**。

- [x] 発見1: 5〜6月の記事統合リダイレクト（notebooklm系・gemini系ほか約20件）のソースキーがカテゴリプレフィックスなしで、Googleが実際にインデックスしている `/method/{slug}/` 形式が全て404だった（`/method/notebooklm-ip-study-hack/` は**順位5.8・クリック3を獲得しながら404着地**）
- [x] 発見2: 同エントリの**転送先も**プレフィックスなし（`/notebooklm-features-guide/` は404）で、生成済みリダイレクトページ自体が404へ誘導していた
- [x] 修正: 全エントリのターゲットを実URLへ修正＋`/method/` 付きソースキーを追加＋GSC表示実績のある `/term/` 9件・`/strategy/` 5件を全量移植（`pnpm build`＋distの転送先URL検証済み、コミット待ち）
- [ ] 効果確認: W30以降のGSCで旧URL計上の消滅と新URLへの評価移転を確認

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

**追補（2026-07-11・レポート§8-2）**: ユーザー提供の実クエリデータで、cbt-guideの新タイトルが**最大クリック源クエリ「基本情報技術者試験 シラバス 2026」（クリック7・表示100・順位6.64）を捨てる退行**だったと判明。

- [x] タイトルを「【2026年】基本情報・応用情報のシラバス改訂とCBT移行日程まとめ」へ再修正（「基本情報」「シラバス」を復元しつつ令和8年度・CBT移行の一次情報はdescription・導入部に保持）
- [x] description・導入部に基本情報のシラバス改訂言及を追加
- [ ] 教訓のルール化: **タイトル変更前に実クエリデータで「既に取れている語」を確認し、それを落とさない**（今後のCTR施策の必須手順。T9にも適用）

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

**判定更新（2026-07-11・レポート§8-3）**: 累積データで **クリック13・表示71・順位7.18・CTR 18.3%＝サイト最多クリックページ**と確認。インデックス除外の疑いは晴れ、週次ゼロは需要変動の範囲。URL検査は不要になった。

- [x] ~~要ユーザー対応: Search Console のURL検査~~ → 累積データで健在を確認したためクローズ（§8-3）
- [x] コンテンツ強化: NWクラスター拡充3案を検討し `.workspace/.task/w28-site-verifi/nw-cluster-expansion-requirement.md` に要件定義を作成（2026-07-11）。推奨案: 「NW午後過去問演習ハック」（`nw-mermaid-hack`の実践フローセクションと直結、離脱リスク低）。「科目B」はNW試験に存在しないため「午後過去問演習」に読み替えて企画。執筆はユーザーレビュー後。クエリ「ネットワーク スペシャリスト 申し込み 2026 いつから」（順位30）で日程系需要も確認済み
- [ ] 完了条件: 拡充1本目のユーザーレビュー→執筆着手判断

## T5: 順位8〜15位デッドゾーン記事の押し上げリライト【優先度: 中・W30以降】

T1/T3/T4 の結果を見てから着手する第二弾。

- [ ] W29・W30データで順位8〜15位に滞留しているページを再抽出（現候補: mos-vs-itp-job-hunting・aws-concept-metaphor-hack・foreigner-japan-national-qualification・sla-slo-service-quality）
- [ ] 各ページでSERP上位3件と自記事の見出し構成を比較し、欠落している検索意図をリライトで補完（新基準: 下限約2000字・検索意図解消でクローズ）
- [ ] **第二ティア（レポート§6-5・2026-07-11追加）**: 順位30位超で表示のみ発生している層（fe-certification-value-debate〔53位・W26表示7〕・ip-discard-strategy〔47〜52位〕・ipa-2027-restructuring・ai-intellectual-property-copyright-trade-secret・reskilling-subsidy-it-certification）は検索意図の根本ミスマッチが原因のためCTR施策では動かない。デッドゾーン層の完了後に、SERP実査→検索意図の再定義→構成レベルの作り直しで対応。着手はW31以降
- [ ] 完了条件: 対象ページのリライト完了。判定はリライト2週後の順位で実施

## T6: 週次検証運用（W29〜W31）【優先度: 継続】

- [ ] W29データ受領後: レポートのKPI表を実測値で更新し、K-3（sg-beginner-roadmap 分散）と K-5（7/10改修効果: sitemap・カテゴリ日本語化・ToC後のエンゲージメント時間）の検証を実施
- [ ] **追加KPI（レポート§6-2・2026-07-11追加）**: Google経由エンゲージ済みセッション（GSC連携CSVの「エンゲージのあったセッション数」）が W27・W28 と2週連続0。W29以降「週1以上」を監視項目に追加。クリックが増えてもここが0のままならToC・導入部改善の効果不発と判定
- [x] **K-3の再解釈（レポート§6-1→§8-3で解決）**: sg-beginner-roadmap は累積でクリック2・表示24・順位4.67と健全。sg-syllabus-latest-change-guide の週次GSC不在はBing経由流入との見え方の差だった。K-3クローズ
- [ ] **Bing定点観測（レポート§8-6・2026-07-11追加）**: Bingが5日間でクリック8とGoogle（週2）を上回る供給源になっている。週次検証時にBingのパフォーマンスデータ（可能ならページ×クエリ）もGSC/GA4と並べて確認
- [ ] W30データ受領後: T1のCTR判定。未達なら Act 分岐（対象を上位10ページへ拡大）
- [ ] W31データ受領後: 全KPIの達成判定と次期プラン（w31-site-verifi 相当）の起票
- [ ] 新規19記事＋アプリ5本のインデックス状況を毎週トラッキング（W31時点で表示ゼロの記事はKW設計再監査へ）

## T7: 非Google検索チャネル（Bing等）の計測・獲得整備【優先度: 高・2026-07-11追加】

根拠: レポート§6-1。GSCに計上されないオーガニック流入（gemini-cert-complete W28で3ユーザー＝週間最多、sg-syllabus-latest-change-guide 3週連続、nw-mermaid-hack W27）が継続発生。Bing等が実質チャネルとして機能しているのにノーケア（Bing Webmaster Tools 未登録・IndexNow 未導入をリポジトリで確認済み）。

- [x] **要ユーザー対応**: Bing Webmaster Tools にサイト登録し sitemap.xml を送信（GSCからのインポート機能で数分で完了）
- [x] **要ユーザー対応**: Search Console URL検査の対象に `/method/gemini-cert-complete/` を追加（nw-mermaid-hack と同様、Google側にインデックスされていない／圏外の疑い。Bingでは取れているのにGoogleで取れていない差分の原因を特定する）
- [x] **要ユーザー対応**: 週次データエクスポートに GSC「クエリ」レポート（ページ×クエリ）を追加（レポート§6-6。T1のタイトル再設計を実クエリで答え合わせするため）
    - クエリ: .workspace\.task\access-data\2026\w28\クエリ.csv
    - ページ: .workspace\.task\access-data\2026\w28\ページ.csv
- [ ] Bing登録2週間後、GA4オーガニック（全検索エンジン）とGSC（Google）の差分でBing寄与を定点観測（T6に組込み）
- [ ] 完了条件: Bing登録完了＋クエリレポートの週次供給開始＋gemini-cert-complete のインデックス状態記録

**精査結果（2026-07-11・レポート§8-6）**: Bingは登録済みで、7/4〜7/8にクリック8・表示295（日次18→92と急増）・CTR約2.7%。**同時期のGoogleを上回るクリック供給源**と確認。残タスクはBing側エクスポートの週次化（可能ならページ×クエリ次元）と、T6での定点観測のみ。gemini-cert-complete のGoogle側URL検査は、nw-mermaid-hack が累積データで健在と確認された経緯（§8-3）を踏まえ優先度を下げる（Bingで取れてGoogleで取れないのは順位差の可能性が高い）。

> [!forAI]
> Bingはすでに登録済ではある。GSCより表示回数は多いがクリック率は2.7%とほぼ同じくらいかそれ以上。bingのデータは[.workspace\.task\access-data\2026\w28\syllabushack.com_SearchPerformanceOverview_All_7_11_2026.csv]にアウトプット済。

## T8: カテゴリページのtitle・description刷新（theory以外）【優先度: 中・技術/編集・2026-07-11追加】

根拠: レポート§6-3。W28に `/category/trend/2/` が順位10でGSC初露出したが、カテゴリページのtitleは theory 以外 `Category 'トレンド・試験情報'` 形式（英語混じり）のまま。descriptionも theory/app 以外空。site-check0710 では theory のみ日本語化済みで、trend/method/career/app が未対応。

- [ ] `src/pages/[...blog]/[category]/[...page].astro` の title 生成を全カテゴリ日本語のSEO titleに変更（例: trend →「IT資格の試験情報・シラバス改訂まとめ」、method →「AI活用の資格学習メソッド一覧」等。30〜40文字目安）
- [ ] trend / method / career の description を追加（120〜160文字）
- [ ] `pnpm build` でタイトル出力を確認
- [ ] 完了条件: 全5カテゴリのtitle/descriptionが日本語で出力され、W30以降のGSCでカテゴリページのCTR/順位を確認

## T9: CTR改善 第二弾 — 累積データで可視化された高順位ゼロクリックページ【優先度: 高・2026-07-11追加】

根拠: レポート§8-4。週次データでは埋もれていたが、累積では順位5前後・表示多数・クリックゼロのページが判明。T1と同じ手法で対応するが、**必ず実クエリデータで既得クエリを確認してからタイトルを動かす**（§8-2の教訓）。

- [ ] `/trend/typing-speed-60wpa/`（表示59・順位5.56・CTR 0%）: クエリ「itパスポート 試験 タイピング 必要か」系。タイトル・meta再設計
- [ ] `/method/ap-pm-descriptive-ai-prompts/`（表示48・順位8.58・CTR 0%）: 「応用情報 午後 記述式」クラスタ（計26表示・順位約8）。タイトル・meta再設計
- [ ] `/career/ap-salary-impact/`（表示37・順位4.97・CTR 0%）: 該当クエリ未特定のため、次回クエリデータで特定してから着手
- [ ] 検討: 「基本情報技術者試験 シラバス 2026」（表示100・サイト最大クエリ）専用のFEシラバス解説記事の新設。cbt-guideのタイトル復元（§8-2）の効果をW30で見てから判断。新設する場合は `.agents/kw_pattern_research.md` 経由でKW-DB整備から
- [ ] 完了条件: 上記2ページのタイトル・meta刷新＋リライト2週後のCTR判定

---

## 進行状況

| タスク | 状態 | 着手日 | 判定週 | 備考 |
|---|---|---|---|---|
| T3 URL正規化 | ✅完了（追補済み） | 2026-07-11 | W30 | netlify.toml死亡リダイレクト発見→さらにプレフィックス欠落バグを発見し全量修正（§8-1）。旧URL消滅をW30確認 |
| T1 CTR改善 | ✅完了（判定待ち） | 2026-07-11 | W30 | 3ページ刷新。cbt-guideは実クエリデータで退行判明→同日再修正（§8-2） |
| T4 勝ちページ強化 | ✅完了（判定待ち） | 2026-07-11 | W31 | 本文追記＋内部リンク4本整備。副次的に文字化け5箇所修正 |
| T2 NWクラスター拡充 | 🔶レビュー待ち | 2026-07-11 | — | インデックス疑いは累積データで否定（クリック13・CTR18.3%＝サイト最多）。要件定義のレビュー待ちのみ |
| T5 デッドゾーンリライト | 未着手 | — | W30以降着手 | T1/T3の結果待ち。第二ティア（30位超層）を追加（§6-5・§8-5） |
| T6 週次検証 | 継続中 | 2026-07-11 | 毎週 | 追加KPI: Google経由エンゲージ済みセッション。K-3クローズ。Bing定点観測を追加 |
| T7 非Googleチャネル整備 | ✅ほぼ完了 | 2026-07-11 | W30 | Bing登録済み・クエリ/ページCSV供給開始を確認（§8-6）。残タスクはBingエクスポートの週次化と定点観測 |
| T8 カテゴリページtitle刷新 | 未着手 | — | W30 | theory以外の4カテゴリが `Category 'X'` 形式のまま |
| T9 CTR改善第二弾 | 未着手 | — | 着手2週後 | typing-speed-60wpa（順位5.56・CTR0%）・ap-pm-descriptive-ai-prompts ほか（§8-4） |

**本セッションでの変更ファイル（コミット待ち）**:
`astro.config.ts`（リダイレクト全量修正） / `src/data/post/method/{cbt-2026-syllabus-complete-guide,doboku-sekou-hub,new-ipa-exam-study-strategy,practice-guide-ipa}/index.md` / `src/data/post/trend/ipa-2026-cbt-schedule-guide/index.md` / `src/data/post/app/it-passport-quiz/index.mdx` ／ 新規: `w28-analysis-report.md` / `w28-tasks.md` / `nw-cluster-expansion-requirement.md`

**次回ユーザー確認・対応が必要な項目**（2026-07-11 精査で大半解消）:
1. netlify.toml の `[[redirects]]` ブロックが本番で機能していない件 — ホスティング経緯の把握のみ残（旧slug棚卸しは§8-1で完了。確認後、死んだ `[[redirects]]` ブロックの削除を推奨）
2. ~~nw-mermaid-hack のURL検査~~ → 累積データで健在確認、不要（§8-3）
3. ~~Bing登録~~ → 登録済みと確認（§8-6）
4. ~~gemini-cert-complete のURL検査~~ → 優先度下げ（Bingとの順位差の可能性が高い）
5. ~~クエリレポート追加~~ → 供給開始済み。**次回からエクスポート期間（28日/3ヶ月等）をファイル名か冒頭に明記**をお願いしたい（§8冒頭）。あわせてBing側のページ×クエリエクスポートも可能なら追加
6. **修正のデプロイ**: リダイレクト修正（§8-1）とcbt-guideタイトル再修正（§8-2）はコミット・push（ユーザー手動）されるまで本番の404が続く点に注意
