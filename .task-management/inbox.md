# シラバスハック inbox

問題点・気づき・hq からの修正依頼を1行で書く。誰でも雑に書いてよい。作業を始めたセッションは「未処置」から処理する。未処置のまま2週間たった行は、必ず起票か見送りにする。

処置: `→ T-NN`／`→ hq:H-NN`／`見送り: 理由`／`未処置`

| ID | 日付 | 書いた人 | 内容（1〜2行） | 処置 |
|---|---|---|---|---|
| I-01 | 10/31 | Claude | フッターに全ページ共通の A8 広告（資格スクエア）があり、「審査中はアフィリエイトを入れない」方針と食い違う | → T-04（10/31 ユーザー判断で外した。完了） |
| I-02 | 10/31 | Claude | 旧 w42 週報の残り（cbt-2026-syllabus-complete-guide の title・meta、http-https-security のリライト、shikaku-teate-soba-ichiran の冒頭の要約表、コース導線の追加）は全面リライトの指示書で扱う | → T-11, T-13 |
| I-03 | 10/31 | Claude | 旧 w42 週報の Bing Webmaster Tools の追加・コース別探索レポート・自己アクセスの除外は、月次への切り替えで取得仕様に入れるか決める | → T-32 |
| I-04 | 10/31 | Codex | T-11-A06でIPAの10/30公開PDデータ・AIシラバス案を確認。ローカル2027試験資料に未収録のため、JSON・分析資料への追加と既存の未取得注記の更新を提案（記事以外は未編集）。出典: https://www.ipa.go.jp/shiken/syllabus/henkou/2026/20260630.html | → T-54 |
| I-05 | 10/31 | hq | 修正依頼: 月次の GA4・GSC を API に置き換える。hq が 11/02 に GA4（A1〜A3）の m08〜m10 と GSC（G1・G2）の m08・m09 を API で `.workspace/access-data/api/monthly/{YYYY}/m{MM}/` に取り、GSC の m10 は確定を待って 11/04 に取る（hq:H-30〜H-32）。以後の月次の比較は API のデータ同士で行い、画面の CSV と混ぜない（画面の CSV は消さずに残す）。G3（インデックス登録）は API がないので画面から。T-32（週次から月次への切り替え）で、取得仕様（`.workspace/.task/access-data/README.md`）と `/weekly-report` を「GA4・GSC は API が正本、置き場所は `access-data/api/monthly/`」として作る。m10 の解析は 11/04 以降 | → T-55（m10 の解析は GA4 11/02・GSC 11/05〜）・T-32（取得仕様） |
| I-06 | 11/01 | Claude | GA4 のカスタムディメンションは `course_id` と `chapter_complete` だけが登録済み。`chapter_order`・`quiz_mode` を GA4 管理画面で登録すると、章ごとの完了・診断と章末の区別が以後の月次（`ga4-course.csv`）で取れる（ユーザーの作業。hq:H-31 で判明） | 処置済: 11/01 ユーザーが登録、API の metadata で確認。monthly.json の SH の表に2列を追加 |
| I-07 | 11/02 | hq | 修正依頼: T-09 が Notion で完了。records へ移す | → records T-09（11/02。Notion の完了時点では GA4 に未反映だったため、登録し直しを Admin API で確認してから移した） |
| I-08 | 11/02 | Codex | T-12-B02: PM論文ツールの提供終了Geminiモデル、SCカードのモード変更反映、SG問題のID欠落1件、宅建末尾07/15の法的表現を別途点検・修正することを提案。ツール・問題データは未変更。buildは成功、実画面は環境制約で未達。詳細は `.workspace/codex/reports/2026-11-02-T-12-B02.md` | 未処置 |
| I-09 | 11/02 | Claude | flashcard-app（`src/apps/` のフラッシュカード）: 表示件数がデータと合わない（IP 10件に 1300 cards、FE 3060語に 3200、AP 361語に 600）、モード・分野を変えてもカードが更新されない可能性（`CardSession` が初回の props だけを保持）。T-12-B03 の Codex がコードを読んで指摘。記事は実データに合わせて書いた | 未処置 |
| I-10 | 11/02 | Claude | g-kentei-mock-exam（G検定の模擬試験）: 時間切れの採点で古い回答を参照する懸念（タイマーの effect が `[mode]` だけに依存し、開始時点の `finishExam` を使う）。T-12-B01 の Codex がコードを読んで指摘。手動採点と時間切れ採点の結果が一致するか確かめる | 未処置 |
| I-11 | 11/05 | Claude | `node_modules` のリンクが移動前の `344dev` を指していて `pnpm build` が失敗した。シラバスハックは `pnpm install --frozen-lockfile --force` で直した。ほかのサイトも 344blog へ移したので同じ可能性がある（hq で確認） | 未処置 |
| I-12 | 11/06 | hq | 修正依頼: T-56 の9本の URL 検査の結果が出た（URL Inspection API、11/06）。8本は登録済みで、`itp-shameful-career-hack` は公開停止による 404（予定どおり）。リクエストは0本。T-56 を「ユーザー待ち」から外し、T-06 と合わせて原因を判断する。結果は `C:\Users\sasis\344blog\hq\data\2026\m10\g3-url-inspection-2026-11-06.md` §1 | 未処置 |
| I-13 | 11/06 | hq | 修正依頼: 実行の順番を `hq/roadmap/syllabus-hack.md` に置いた（1日10本まで、検収は書き終えたあと）。11/15 の再申請は動かさない。画像は全サイトでプロンプトの段階で生成してよくなった（2026-11-06）ので、T-16 の「生成にはユーザーの指示が要る」を直すこと | 未処置 |
| I-14 | 11/10 | Claude | T-18 ip の検収: 診断16問のうち6問が章末チェック・導入問とほぼ同じ（監査記録 `.workspace/admin-review/2026-11-10-T-18-ip-course.md`）。sg・g-kentei の指示書には禁止として足した | → T-18（ip の6問の差し替えは T-18 の残りに記載） |
