# T-54 IPA の10/30公開資料（PD-D シラバス案）を2027年試験の資料に足す

- 完了日: 2026-11-13
- 種別: 調査
- テーマ: 2027年シラバス, PD試験, データ・AI, 新設試験
- 対象: `src/data/master/syllabus-pd-d-2027.json`、`.workspace/.new-contentplan/2027-exams/`、PD-D に触れている記事5本
- 起票元: inbox:I-04

## 何をしたか

- ユーザーが置いた PDF（`.workspace/syllabus-data-pdf/PD-D/syllabus_pd-d_ver0_1.pdf`、シラバス（案）Ver.0.1、2026-10-30公開）を PyMuPDF の表抽出で JSON にした。抽出スクリプトは `.workspace/scripts/extract-pd-d-2027.py`（ルビの混入・英字の折り返し・和欧間の空白を補正。技能の例104件を PDF と1件ずつ突き合わせて一致）
- 分析レポート `pd-d-2027-profile-report.md` を新規作成（中分類ごとの用語数、PD-A1・DM・PD-S・FE・SC との重なり、PD-D だけの語、技能の構成、記事への示唆）
- 「PD-D は未取得」と書いていた `2027-exams-master-report.md`・`pd-2027-profile-report.md`・`pd-a1-2027-profile-report.md` と `exam-scope-matrix-2027.json` の注記を更新。`exam-id-catalog.md` に `pd-d` を未登録の候補として追加（enum は記事を作るときに登録）
- 記事は直さず、ウェーブC の4本（C01・C02・C05・C11）とウェーブA 公開済みの1本への申し送りを `.workspace/projects/rewrite-2026-11/wave-c-notes.md` に書いた

## 使ったデータ・資料

- `src/data/master/syllabus-pd-d-2027.json`（知識: 大分類4・中分類8・小分類32・項目62・用語650、技能: 大項目4・小項目21・技能の例104）
- `.workspace/.new-contentplan/2027-exams/pd-d-2027-profile-report.md`
- `.workspace/projects/rewrite-2026-11/wave-c-notes.md`

## 結果

- PD-D の中分類（8・9・10・15・17・18・22・29）は、出題範囲の公式マトリクスの ● と一致
- A-1 の語のほぼ全部を含み、その上に専門の語を足す形。クラウドは PD-S とほぼ同じ（39語中38語）。データマネジメントは DM 試験の深掘り（PD-D だけの語が78）。AI エージェントの設計パターン・スキル設計パターンなど、ほかの試験にない語が AI技術・AI利活用に多い
- 記事の中で「データ・AI領域のシラバスは未公開」と明記していたものはなかった。データ・AI領域を一般的な言葉で説明している記事が5本（申し送りに記載）
- 別件: PD-M・PD-S のコースTOP の FAQ が「科目A-1 は未取得」のまま → inbox I-15（T-19 で直す）

## 次に使える知見

- IPA のシラバス PDF は pdftotext では和文が抜ける。PyMuPDF（`fitz`）の `find_tables()` で表がそのまま取れる。抽出スクリプトは版が変わったら流し直せる（ルビの補正 `RUBY_FIXES` は版ごとに確かめる）
- PD-D の確定版・新版が出たら、スクリプトを流し直して差分を見る
