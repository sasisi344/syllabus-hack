---
week: 2026-W30
source: 01_diary/weekly/2026/07-W30.md
---

# 週報PPDCAタスク（2026-W30）

## タスク

- [x] `/method/cbt-2026-syllabus-complete-guide/` のタイトル・メタディスクリプションを見直す（2026-07-29 完了・結論はタイトル据え置き＋カニバリ是正）

## 根拠

- 📊 表示回数98に対しクリック1・CTR1.02%と突出して低い
- 📊 シラバスハックは直近改善傾向にあるため、他4ブログとの比較対象として毎週Plan候補に含めている

## 参照

- 週報ノート: `01_diary/weekly/2026/07-W30.md`（📚シラバスハック セクション「5. ⚠️ 異常値・技術アラート」「Act候補」）

### 5. ⚠️ 異常値・技術アラート
- 404エラーLP（GA4でError 404が計上されたランディングページ）: 検出なし
- 順位・CTRの急落（クエリ.csv・3か月間の2期間比較）: 表示回数5件以上の対象クエリでは大幅な悪化は検出されず
- その他の異常値: `/method/cbt-2026-syllabus-complete-guide/`は表示回数98に対しクリック1・CTR1.02%と極端に低い。タイトル改善の即効候補。「基本情報技術者試験 シラバス2026」はCTR4.0%→8.8%と改善傾向で、順位も5.8→6.6とほぼ横ばい

### Do（実施施策）

#### 2026-07-20 セッション（前週分）
- cbt-guideのタイトルから「基本情報」「シラバス」が落ちる未コミット編集を差し戻し、`fe-hub`・`ipa-exam-trends-2026`から内部リンクを新設
- `ap-hub`に「午後記述式」FAQ＋解説セクションを追加

#### 2026-07-29 セッション（本週の深掘り）
前週は「cbt-guideのCTRが低い＝タイトルの問題」という前提で処置したが、GSCページCSV（`access-data/2026/w30/w30-gsc-syllabus.csv`）とクエリCSVを突き合わせた結果、<strong>タイトルではなくサイト内カニバリゼーションが根本原因</strong>と判明した。

<strong>根拠となった数値</strong>:
| 指標 | 値 |
|---|---|
| `/method/cbt-2026-syllabus-complete-guide/` | 表示98・クリック1・CTR1.02%・順位10.2 |
| `/trend/ipa-2026-cbt-schedule-guide/`（日程専用ページ） | 表示48・クリック0・<strong>順位29.2</strong> |
| 日程系クエリ群の順位 | `ipa 試験 2026`=64.5／`情報処理技術者試験日程 2026`=30／`応用情報 申し込み 2026`=46／`ipa 春試験 2026 申し込み`=53／`応用情報技術者試験 cbt いつから`=54 |
| `/trend/ipa-2026-cbt-schedule-guide/`への内部リンク本数 | サイト全体で<strong>1本のみ</strong>（new-ipa-exam-study-strategyから） |

「IPA 2026年 CBT移行・日程・科目名変更」を実質的に扱う記事がサイト内に<strong>8本</strong>存在する（cbt-2026-syllabus-complete-guide／ipa-2026-cbt-schedule-guide／ipa-2026-cbt-confirmed-schedule／applied-advanced-exam-cbt-transition-2026／ap-2026-spring-postponed／2026-cbt-transition-advanced-exam／2026-cbt-ai-syllabus-strategy／ipa-2026-cbt-strategy-ai）。日程意図がこれらに分散した結果、専用ページが29位に沈み、代わりにmethod記事が10位で日程クエリの表示だけを浴びてクリックされない、という構造になっていた。前週に`ipa-exam-trends-2026`へ追加したリンクも、アンカーテキストが「試験区分ごとの具体的な移行日程」でありながら宛先がcbt-guideで、分散を助長していた。

<strong>実施内容（タイトルは据え置き。前週の差し戻し判断を尊重）</strong>:
1. `trend/ipa-2026-cbt-schedule-guide`を日程クエリの正となる受け皿として強化 — 「試験区分別の試験日と申し込み時期の早見表」セクションを新設（IP/FE/SG/AP/SC/前期のみ区分/後期のみ区分の7行）、FAQに「2026年の春試験の申し込みはいつから」「NWの2026年の試験日はいつか」を追加。申込開始日はIPA未公表のため見込み値である旨を明示し、断定を避けた
2. `method/cbt-2026-syllabus-complete-guide`の試験区分別スケジュール表直下に、日程・申込・予約手順は日程ガイド側を見るよう明示的に誘導する段落を追加（役割分担の宣言）
3. 日程アンカーの宛先を集約 — `ipa-exam-trends-2026`のリンクを「試験日・申し込み時期→日程ガイド」「シラバス改訂の中身→cbt-guide」の2本に分離。`ap-hub`のCBT移行情報セクション、`ap-2026-spring-postponed`の区分別実施タイミング直後、`ipa-2026-cbt-confirmed-schedule`の実施時期セクションからそれぞれ日程ガイドへの内部リンクを新設
4. 結果、日程ガイドへの内部リンクは1本→5本に増加

`pnpm build`で1504ページ・エラーなしを確認済み。効果判定はW32以降（インデックス更新待ち）。

### Check（前週からの改善・要因仮説）
- 数値変化: セッション+48.1%・UU+40.0%と5ブログ中最大の伸び。エンゲージメント率も+2.4pt（他4ブログとの比較対象として継続ウォッチ）
- 推定要因（ページ/クエリのどれに起因？）: `/method/new-ipa-exam-study-strategy/`と`/method/doboku-sekou-hub/`はGA4エンゲージメント率100%と高評価。CBT記事はCTRが課題

### Act候補（データ由来ドラフト・このサイト単独の全候補）
- [x] `/method/cbt-2026-syllabus-complete-guide/`のタイトル・ディスクリプションを見直し、CTR1.02%を改善 → タイトル・descriptionは規約内（36字／127字）でクエリ一致語も保持しており改変不要と判断。真因のカニバリ是正を実施（上記Do参照）
- [x] 「応用情報技術者試験 午後記述式」など新規表示クエリの需要を踏まえた記事を検討 → 前週の`ap-hub`FAQ追加で対応済み

### W31以降への申し送り

- [ ] <strong>【ユーザー判断が必要】IPA 2026年CBT記事8本の統廃合</strong>: 今回は内部リンクの宛先集約という非破壊的な処置に留めた。8本は内容の重複が大きく、統合または一部のcanonical/301化まで踏み込まなければ日程クラスタの順位（30〜70位）は本質的には改善しない可能性が高い。記事の削除・統合は不可逆のためGo/No-Go判断を仰ぎたい。候補: `2026-cbt-transition-advanced-exam`・`2026-cbt-ai-syllabus-strategy`・`ipa-2026-cbt-strategy-ai`の3本は独自価値が薄く統合候補
- [ ] <strong>Mermaidクラスタにも同型のカニバリ疑い</strong>: `/theory/aws-concept-metaphor-hack/`（title「【AWS】Mermaid構成図の作り方」・表示15・順位9.4・<strong>クリック0</strong>）が、サイト最大の集客ページ`/method/nw-mermaid-hack/`（表示85・クリック7・順位8.6）とmermaid構成図クエリで競合している疑い。ただしタイトル改変は前週の失敗（キーワード脱落）を繰り返すリスクがあるため、<strong>ページ×クエリ紐付けデータの取得後</strong>に着手する
- [ ] <strong>T5デッドゾーン（順位8〜15位・CTR0%）の対象リスト確定</strong>（w30 GSCページCSVより）: `/theory/aws-concept-metaphor-hack/`（15/9.4）・`/trend/mos-vs-itp-job-hunting/`（14/9.5）・`/trend/ccna-vs-aws-saa/`（12/12.4）・`/app/ap-subject-b/`（12/14.0）・`/method/mos-ai-shortcut/`（10/9.1）・`/method/gemini-cert-complete/`（10/7.9）・`/career/foreigner-japan-national-qualification/`（8/8.25）。いずれも流入クエリが未特定のため、ページ×クエリデータ取得を待ってから着手（クエリ未特定のままのタイトル改変はW29で退行を招いた既知の失敗パターン）
- [x] <strong>旧URL（/term/・/strategy/）のGSC計上消滅を確認</strong>（W30確認タスク）: w30 GSCページCSV（6/19〜7/18）で残存していたのは`/strategy/data-profitability-dwh-mining-regression/`（表示1）・`/term/digital-divide-basics`（表示2）・`/term/sampling-methods-data/`（表示1）の計4表示のみ。いずれも`astro.config.ts`にリダイレクト定義があり（155〜176行目）、集計期間にリダイレクト適用前の日付が含まれるための残骸と判断。評価移転も確認でき、`/theory/sampling-methods-data/`が順位4で表示を獲得している。実質消滅と判定し本項目はクローズ