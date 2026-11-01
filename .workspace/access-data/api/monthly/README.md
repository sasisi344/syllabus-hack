# API の月次データ（GA4・GSC の正本）

2026-11-01 から、GA4・GSC の月次はこのフォルダのデータを正本にする（hq:H-30〜H-32）。取り方と項目は `hq/tools/analytics-fetch/README.md`・`monthly.json`。

- 置き場: `{YYYY}/m{MM}/`。各フォルダの `meta.json` に期間・表ごとの条件・行数・取得日時がある
- GA4 は翌月1日以降、GSC は翌月4日以降に取る（GSC の直近2〜3日は未確定）
- 画面から書き出した過去のデータ（`.workspace/.task/access-data/` の週次など）は消さずに残すが、このフォルダのデータと混ぜて計算しない。m08 以降はここで取り直してある（2026-11-01）
- G3（インデックス登録）は API がないので、従来どおり画面から書き出す
- `gsc-appearance.csv` が0行なのは、検索での見え方（リッチリザルトなど）のデータがないため（m08・m09）
- `ga4-course.csv` はコースのイベント（`quiz_start`・`quiz_complete`・`chapter_complete`・`course_complete`・`course_nav_click`・`route_assigned`）。2026-10-06 の実装以降だけなので m08・m09 は0行。カスタムディメンションは `course_id` だけが登録済み（`chapter_order`・`quiz_mode` は未登録。GA4 の管理画面で登録すると以後の分から取れる）
