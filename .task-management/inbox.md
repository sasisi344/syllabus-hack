# シラバスハック inbox

問題点・気づき・hq からの修正依頼を1行で書く。誰でも雑に書いてよい。作業を始めたセッションは「未処置」から処理する。未処置のまま2週間たった行は、必ず起票か見送りにする。

処置: `→ T-NN`／`→ hq:H-NN`／`見送り: 理由`／`未処置`

| ID | 日付 | 書いた人 | 内容（1〜2行） | 処置 |
|---|---|---|---|---|
| I-01 | 10/31 | Claude | フッターに全ページ共通の A8 広告（資格スクエア）があり、「審査中はアフィリエイトを入れない」方針と食い違う | → T-04（10/31 ユーザー判断で外した。完了） |
| I-02 | 10/31 | Claude | 旧 w42 週報の残り（cbt-2026-syllabus-complete-guide の title・meta、http-https-security のリライト、shikaku-teate-soba-ichiran の冒頭の要約表、コース導線の追加）は全面リライトの指示書で扱う | → T-11, T-13 |
| I-03 | 10/31 | Claude | 旧 w42 週報の Bing Webmaster Tools の追加・コース別探索レポート・自己アクセスの除外は、月次への切り替えで取得仕様に入れるか決める | → T-32 |
| I-04 | 10/31 | Codex | T-11-A06でIPAの10/30公開PDデータ・AIシラバス案を確認。ローカル2027試験資料に未収録のため、JSON・分析資料への追加と既存の未取得注記の更新を提案（記事以外は未編集）。出典: https://www.ipa.go.jp/shiken/syllabus/henkou/2026/20260630.html | 未処置 |
| I-05 | 10/31 | hq | 修正依頼: 月次の GA4・GSC を API に置き換える。hq が 11/02 に GA4（A1〜A3）の m08〜m10 と GSC（G1・G2）の m08・m09 を API で `.workspace/access-data/api/monthly/{YYYY}/m{MM}/` に取り、GSC の m10 は確定を待って 11/04 に取る（hq:H-30〜H-32）。以後の月次の比較は API のデータ同士で行い、画面の CSV と混ぜない（画面の CSV は消さずに残す）。G3（インデックス登録）は API がないので画面から。T-32（週次から月次への切り替え）で、取得仕様（`.workspace/.task/access-data/README.md`）と `/weekly-report` を「GA4・GSC は API が正本、置き場所は `access-data/api/monthly/`」として作る。m10 の解析は 11/04 以降 | 未処置 |
