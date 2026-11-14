# T-06 10日間のモニタリング

- 完了日: 2026-11-14
- 種別: 効果測定
- テーマ: AdSense, 再申請, 404, リダイレクト, サイトマップ, インデックス, 表示回数
- 対象: 公開停止33本・統合30本・強化12本、サイトマップ、サイト全体の表示回数
- 起票元: hq:H-24

## 何をしたか

- GSC（日別・ページ別）と GA4（日別×チャネル）を `hq/tools/analytics-fetch/fetch.mjs` で取得
- GSC のサイトマップ一覧、停止・統合・強化の75本の URL 検査（URL Inspection API、読み取り）、本番の応答（404・転送先）と本番サイトマップの URL を確認
- 判定を1枚にまとめた: `.workspace/.task/access-data/t06-monitoring-2026-11-14.md`

## 使ったデータ・資料

- `.workspace/access-data/api/2026-11-13-t06-gsc-date/`・`2026-11-13-t06-gsc-page-before/`・`2026-11-13-t06-gsc-page-after/`・`2026-11-13-t06-ga4-date-channel/`・`2026-11-14-t06-index-live/`
- 一覧: `.workspace/.task/adsense-inventory/inventory.csv`

## 結果

- 実施日 11/01（デプロイ）・11/02（サイトマップ再送信）。基準 10/23〜11/01、結果 11/02〜11/10（日平均）
- 停止33本は全部 404・サイトマップ外・公開記事からのリンクなし。統合30本は全部正しい統合先へ即時転送。サイトマップはエラー0（11/13 読み込み）
- 停止・統合63本のうち、まだ登録済みは6本（最終クロールが 10/30 より前）。表示 1.3 → 0.4 回/日
- サイト全体の表示 125.4 → 200.9 回/日、クリック 5.4 → 9.2 回/日。約4割は `kougyou-koukou-shikaku-ichiran` の復帰
- **判定: 再申請の条件を満たす**。T-07 を着手可にした

## 次に使える知見

- 統合は meta refresh（0秒＋noindex＋canonical）。GSC では「リダイレクト」でなく「noindex で除外」と出ることがある。エラーではない
- GSC API のサイトマップの indexed は常に0（廃止項目）。全体のインデックス数は画面の G3
- URL 単位のインデックス状態は URL Inspection API で取れる（fetch.mjs にはコマンドがないので、今回は別スクリプトで取った。1日2,000件まで）
- 不合格だった場合（T-08）、下がった残した記事（`cbt-2026-syllabus-complete-guide` ほか10本）と `labor-standards-act-36-agreement` の未登録を先に見る
