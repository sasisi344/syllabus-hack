# 章別サンプルファイル（第5章・第7章・第8章）

共通の方針: 配布は章ごとに **ZIP 1本のみ**。公開時に章のmdxと同じフォルダへ置き、`import x from './xxx.zip?url&no-inline'` で読み込む。公開前は src/ に置かない（検証: `asset-test/README.md`）。

> **2026-09-29 に第5・7・8章のZIPを `src/data/course/ai-work/` へ配置済み（本番移行）。ビルド成功・出力検査済み（`check-dist.cjs`）。** 以後、素材やZIPを変更したときは、ここで再生成したZIPを `src/data/course/ai-work/` へ上書きコピーし、`npm run build` と `node check-dist.cjs` で確認する。章の下書き（.md）は `.workspace/draft/archive/ai-work-migrated-2026-09-29/` へ移動済み（編集は src/ 側）。

---

# 第7章 サンプルファイル（問1・問2用）

架空のデータ。`gen-ch7-samples.cjs` が固定シードで生成する（`node gen-ch7-samples.cjs` で再生成可能。行番号は `answer-key.json` に出力）。
配布は **ZIP 1本のみ**（`ch7/ch7-sample-logs.zip`。README.txt＋8ファイル、約10KB）。個別の .txt は配布しない（.txt は Google にインデックスされ得るが、ZIP は対象外のため）。

## 公開時の手順（この章を draft:false にするのと同時に行う）
1. `ch7/ch7-sample-logs.zip` を、公開する章のmdx（`src/data/course/ai-work/07-operations-incident.mdx`）と**同じフォルダ**へコピーする
2. 章のmdx冒頭の `import sampleZip from './ch7-sample-logs.zip?url&no-inline';` が、そのまま使える（ZIPが無いとビルドが失敗する。忘れ防止として意図的）
3. `pnpm build` で、`dist/_astro/ch7-sample-logs.<hash>.zip` が出力され、章のリンクがそこを指すことを確認する
4. **公開前に src/ へ置かない**: 下書き章（draft:true）が import しているZIPも `dist/_astro/` に出力されることを検証済み（`asset-test/README.md`）
5. `public/` へ置く方式は採らない（個別ファイルの配置が要る、クロールされる、ハッシュ無しで恒久URLになる）

## 内容を変更したとき
`node gen-ch7-samples.cjs` で再生成 → `answer-key.json` の行番号と、章の「答え合わせ用」の表・ルーブリックの行番号を更新 → `README.txt` の記載を確認 → ZIPを作り直す（PowerShell: `Compress-Archive`）

## 問1（3ファイル）
web-01.txt・web-02.txt は異常なし（各300行）。api-01.txt（301行）に、ERROR 93・95行目、ロールバック開始99行目・終了107行目、終了後の最初の正常108行目、リリース記録が末尾301行目（時刻順では14:03:12）。

## 問2（5ファイル）
backup-nightly.txt（156行）の155行目がERROR、156行目が中止。削除（clean）ログの最後は79〜80行目（9/24）。df-history.txt は9/24まで240GB、9/25から毎日+12GB、10/04に100%。backup-list.txt は30世代、backup.conf は保持世代数20（5行目）・最終更新9/25（2行目）。

## 検証
- ai-test/: 問1を、Claude Code（ファイル直接読み取り）で実行した出力。異常の特定・行番号・末尾のリリース行の並べ替えが答えと一致した
- asset-test/: 配布方式の検証（Astro最小プロジェクト）
- 生成後の自己チェック: web-01/web-02 の WARN/ERROR は0件、api-01 は2件。df-history の最終行が容量超過（103%）になるバグを検出し修正済み

---

# 第8章 サンプルファイル（実例・問1用）

架空のデータ。`gen-ch8-samples.cjs` が生成（`node gen-ch8-samples.cjs`。答えの数字は `answer-key-ch8.json`）。配布物は `ch8/ch8-sample-files.zip`（README.txt＋8ファイル、約5.6KB）。
章の反映は `apply-ch8-edits.cjs`（一回限りの編集スクリプト。記録用）。

## 公開時の手順
1. `ch8/ch8-sample-files.zip` を、章のmdx（`src/data/course/ai-work/08-workflow-automation.mdx`）と同じフォルダへコピーする
2. 章の冒頭の `import sampleZip from './ch8-sample-files.zip?url&no-inline';` がそのまま使える（ZIPが無いとビルドが失敗する）
3. `pnpm build` で `dist/_astro/ch8-sample-files.<hash>.zip` が出力されること、章のリンクがそこを指すことを確認する

## 内容
- 実例（日報→週報）: daily-reports-2026-10-05-week.txt（5人×5日＝25本）、kacho-pdca-2026-10.txt（課長の月間PDCA目標＝ペルソナ）、weekly-report-template.txt。集計: 新規訪問15件、見積提出5件、営業経費7,690円（山田2,800／井上3,240／鈴木1,650）、受注1件（鈴木・S社480,000円）。週の目標（訪問3件以上・見積1件以上）は山田・井上・鈴木が達成、中村（訪問2）・佐藤（見積0）が未達成。キャンセル2件（中村）、見積の遅れ（佐藤・L社）
- 問1（見積依頼）: price-list.csv（UTF-8 BOM付き。Excelで文字化けしない）、request-1〜4（メール明確／メール曖昧／FAX定型票／電話メモ）。数量どおりの金額は 16,100／64,000〜76,800（チェアのみ）／36,200／104,200円。要確認: 取扱なし（ホワイトボード）、「椅子」の言い換え、数量の幅、10/9に間に合わない納期、ボールペン2箱は最小注文数5未満

## 検証（ai-test-ch8/）
- 工程1（日報の抽出）: 合計を計算せず、達成3・未達成2、キャンセル2件・遅れ・受注を根拠つきで抽出＝答えと一致
- 工程3（目標との差異）: 人が出した合計を入力に渡して実行。課の合計は目安どおりだが個人別で2人が未達、と指摘。受注・経費の週の目安は「資料になし」と書き、作り話をしなかった
- 問1（4件の統一形式）: 取扱なし・言い換え・数量の幅・納期・最小注文数の不足を検出。納期の数え方（休日）はAIが仮定して注記した（→章の解説に反映）
- 最小注文数の不足（ボールペン2箱）は、生成時に意図していなかった不整合。AIが指摘したので、正解に追加した

---

# 第5章 サンプルファイル（Excel。実例・問1〜問4）

営業課の9月の売上データに統一。`gen-ch5-sample.py`（openpyxl）が `ch5/ch5-sales-sample.xlsx`・README.txt・ZIP（約6KB）を生成。章の反映は `apply-ch5-edits.cjs`（記録用）。
配布は ZIP 1本（README.txt＋xlsx）。公開時に、章のmdx（`05-excel-spreadsheet.mdx`）と同じフォルダへ置く。手順は第7章と同じ。

## ファイル構成
- シート「売上明細」: A日付・B部門・C担当・D売上（円）・E取引先。2〜7行目にデータ6行（日付は日付型、書式 yyyy/m/d）。合計430,000円。営業1課195,000／営業2課235,000。担当者別は山田150,000／井上140,000／中村45,000／佐藤95,000
- シート「前月比」: 担当者・8月・9月（山田120,000→150,000／井上130,000→140,000／中村60,000→45,000／佐藤0→95,000）。9月は問1の担当者別合計と同じ
- 問2の取引先は、6行のうち5行はルール（SUBSTITUTE）で統一でき、7行目「ﾎｸﾄ商事」だけが対応表が必要な例外。統一後の合計はミナト商会165,000／北斗商事265,000。ルールのみだと北斗170,000（合計335,000で、430,000と95,000の差が出る）

## 数式の検証（verify-ch5-formulas.py）
`pip install formulas` で、Excelの数式を実際に計算して確かめた。27項目すべて期待どおり（実例155,000／問1の担当者別と合計430,000／問4の誤り数式（営業1課195,000・営業2課140,000・合計335,000）と修正後（195,000・235,000）／問2の取引先名・ミナト商会165,000／問3の前月比＋25.0%・＋7.7%・−25.0%・算出不可と判定）。
※ 本物のExcelでは未実行。ライブラリによる計算。SUMIFSの日付条件（`">="&DATE(2026,9,3)`）、SUBSTITUTE、ワイルドカードは、計算結果が一致した

## AIでの確認
問2・問3のプロンプトをClaude Codeで実行（記録は ai-test-ch5/。結果は章の解説に反映）。問2は、5行は数式で直る・7行目のみ対応表が必要と正しく分け、件数や売上の整合チェックまで提案。問3は期待値どおりの数式（IFERRORを使わず、0はIFで分ける）を提案。
