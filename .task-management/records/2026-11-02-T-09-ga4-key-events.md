# T-09 GA4 のキーイベント

- 完了日: 2026-11-02
- 種別: 施策
- テーマ: GA4, キーイベント, 20時間コース
- 対象: GA4 プロパティ 525430861（シラバスハック）の `chapter_complete`・`course_complete`
- 起票元: 旧TODO

## 何をしたか

- ユーザーが GA4 の「管理 → データの表示 → キーイベント → 新しいキーイベント」で `chapter_complete`・`course_complete` を登録した
- 使っていなかった「イベントを作成」の `quiz` のルール（条件の項目名が `quiz_complete` で成り立たず、一度も動いていなかった）も削除した
- CC が Admin API（`hq/tools/analytics-fetch/ga4-admin.mjs 525430861`、読み取りのみ）で、キーイベントが `purchase`・`close_convert_lead`・`chapter_complete`・`course_complete` の4つになり、作成ルールが空になったことを確かめた

## 使ったデータ・資料

- `.workspace/.task/access-data/monthly-analysis-2026-10.md` §0（m10 の月報で未設定が分かった経緯）

## 結果

- 11/02 からコースの完了がキーイベントとして数えられる。m10 以前はキーイベント0件なので、コースの成果は `ga4-course` のイベント数で見る（m10: `chapter_complete` 6・`course_complete` 0）

## 次に使える知見

- Notion の毎朝のタスクで「完了」になっていても、GA4 の設定は反映されていないことがあった（11/01 完了 → 11/02 の Admin API で未設定）。管理画面の作業の完了は、Admin API で確かめてから records に入れる
- 「カスタム定義（カスタムディメンション）」の登録とキーイベントの登録は別の画面。一度も発火していないイベントは、イベントの一覧に出ないので「新しいキーイベント」でイベント名を直接入れる
