# 完了記録: 生成AI実務練習コース（制作〜本番ビルド完了）

> 2026-09-29 にアーカイブ。`TODO.md` 旧§0.6 の完了分一式。ユーザーが dev モードでファイルを確認し、本番ビルド成功（1,441ページ）をもって、制作タスクを完了扱いにした。
> 公開後の作業（コミット・push、SNS投稿、効果測定）は `TODO.md` §0.6 に移した。

## 1. 概要

- **着想**: ZDNET Japan記事「AIツールの活用には具体的なユースケースが必要」（Thomson Reuters「2026 Future of Professionals Report」の紹介。従業員の91%が、自社はAIの価値を引き出せていないと回答）。元メモ: [`AIツールの活用には具体的なユースケースが必要（ZDNET Japan）.md`](./AIツールの活用には具体的なユースケースが必要（ZDNET%20Japan）.md)
- **成果物**: `course` コレクションに、**生成AI実務練習コース**（examId `ai-work`）を新設。1章＝1ユースケースの全8章（議事録／問い合わせ・FAQ／資料・企画書／調査・ファクトチェック／Excel／コード・簡易ツール／運用（ログ・障害報告）／仕組み化）、合計1,065分（約18時間）。章の型は「実例（悪い指示→失敗→改善）→練習問題4問（素材・ルーブリック・解説）→設計の確認問題→職場に置き換える→まとめ」
- **設計の正本**（アーカイブ済み）: [`requirement-ai-practice-usecases.md`](./requirement-ai-practice-usecases.md)
- **進捗管理の正本**（アーカイブ済み）: [`.new-contentplan/archive/ai-work-course/ai-work-course-task.md`](../../.new-contentplan/archive/ai-work-course/ai-work-course-task.md)（作業の履歴・判断の経緯はこちら）

## 2. 本番に入ったもの（すべて `src/` 配下）

| 種類 | 場所 |
| --- | --- |
| コースTOP（旧ハブ記事を統合。`kind: index`、`totalHours: 18`、`chapters: 8`） | `src/data/course/ai-work/index.mdx` |
| 第1〜8章 | `src/data/course/ai-work/01〜08-*.mdx` |
| サンプルファイル（章ごとにZIP1本。章のmdxと同じフォルダ） | `ch5-sample-files.zip`（営業課の売上Excel）、`ch7-sample-logs.zip`（サーバーログ・バックアップ関連）、`ch8-sample-files.zip`（日報25本・課長の月間目標・週報ひな形・価格表・見積依頼4件） |
| 設計の確認問題（8章分。第2章のみ5問） | `src/data/quiz/ai-work/course-ch1〜8.json` |
| コラム（method） | `src/data/post/method/ai-skill-rules-setup/`（生成AIにルールを覚えさせるスキル設定）、`ai-programming-prep/`（生成AIでプログラミングをするための事前準備）。カバーは `method/common-cover.png` を暫定使用 |
| 設定・台帳 | `src/content/config.ts`（course の examId enum に `ai-work` を追加）、`.workspace/.task/exam-id-catalog.md` |

## 3. 主な決定事項

- **サンプルファイル**: 第5・7・8章のみ作成。第1〜4章は、素材が最大280字・13行でコピーで足りるため不要、第6章はコーディング主体のため不要（ユーザー判断）。配布は**章ごとのZIP 1本のみ**（個別のtxtは、Googleにインデックスされ得るため配らない）
- **配布方式**（Astro最小プロジェクトでの実測）: 章のmdxと同じフォルダに置き、`import x from './x.zip?url&no-inline'` で読み込む。公開前は `src/` に置かない（下書き章がimportしたZIPも `dist/_astro/` に出力されるため）。4KB未満のZIPは、`?url` だけだとdata URIに埋め込まれるので、`no-inline` を付ける
- **第5章**: 営業課の売上データに統一（問2＝取引先名の表記ゆれ、問3＝担当者別の前月比）。数式27項目を、ライブラリで実際に計算して検証（本物のExcelでは未実行）
- **第7章**: サンプルログに「異常のある行番号」の答え合わせ表を付けた（問1は Claude Code で実行し、答えと一致）
- **第8章**: 日報25本（達成3人・未達成2人・経費3人）＋課長の月間PDCA目標＋見積依頼4件（メール明確／メール曖昧／FAX定型票／電話メモ）。工程1・工程3を実際に実行して結果を掲載
- **KW調査**（19検索。`.workspace/data-set/ai-work-course-kw-research-2026-09.md`）: 「生成AI 研修／活用事例／ユースケース」系は大手・研修会社の占拠度が高いため避け、「練習問題×実務」＋「答え合わせ・サンプルファイル」で差別化。コース名＝**生成AI実務練習コース**、コースTOPのタイトルは「生成AI実務練習コース（練習問題・答え合わせ・サンプルつき全8章）」
- **ハブ記事**: method のハブ記事としては作らず、コースTOP（`kind: index`）に統合
- **実機での確認結果**（AIの実行）: 第1章の落とし穴、社内規定のPDF・写真→ルール化、CLAUDE.mdとスキルへの登録、日報からの事実抽出、目標との差異の整理、見積依頼4件の統一形式化、ログの異常抽出、などをClaude Codeで実行し、章の解説に反映

## 4. 検証

- `npm run build` 成功（1,441ページ、終了コード0。制作前は1,427ページ）
- 出力の検査28項目すべて合格（`.workspace/draft/course/ai-work/_sample-files/check-dist.cjs`）: コースTOP＋8章＋コラム2本のページ生成／ZIP3本が `dist/_astro/` にハッシュ名で出力され、章のリンクが指す（data URI埋め込みなし）／新ページ発の内部リンク58本が疎通／`/course/` 一覧に新コースが載る／forAI・HTMLコメント・旧ハブへのリンク・`draft: true` の残りなし
- ユーザーが dev モードでファイルを確認（2026-09-29）

## 5. 素材・スクリプトの置き場

- `.workspace/draft/course/ai-work/_sample-files/`: サンプルの生成スクリプト（`gen-ch5-sample.py`／`gen-ch7-samples.cjs`／`gen-ch8-samples.cjs`）、数式の検証（`verify-ch5-formulas.py`）、AI実行の記録（`ai-test*/`）、配布方式の検証（`asset-test/`）、移行・検査のスクリプト（`migrate-to-src.cjs`／`check-dist.cjs`）、`README.md`（素材を変えたときのZIP作り直し手順）
- `.workspace/draft/course/ai-work/_demo-ch2-rules/`、`_demo-ch5-sheet-design/`、`.workspace/draft/method/*-demo/`: 章・コラムの実行記録
- `.workspace/draft/archive/ai-work-migrated-2026-09-29/`: 移行済みの下書きの元ファイル（編集は `src/` 側）

## 6. 公開後に持ち越した項目（`TODO.md` §0.6 へ移管）

コミットとpush、2026-10-01のSNS投稿、W44頃の効果測定、コラム2本の個別カバー、ChatGPT手順の実機確認、macOSでの動作確認、`/course/` 一覧ページの文言、Geminiの2026-11-17移行後のコラム更新、GA4のコース別モニタリングへの追加、章別の衛星記事の候補。
