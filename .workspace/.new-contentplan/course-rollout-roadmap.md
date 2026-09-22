---
created: 2026-09-09
updated: 2026-09-09
tags:
  - シラバスハック
  - roadmap
  - course
---

# 20時間コース 全資格展開ロードマップ（未来タスク）

> 2026-09-09、ユーザー起点で方針決定。**「資格から探す」（`src/data/cert-hubs.ts`）に載っている全資格を、いずれ`course`コレクション（20時間学習法）へ展開する。** 本ファイルはその優先順位と各資格の着手前提条件を記録する未来タスクの置き場。個別資格の実制作フェーズに入ったら、`ip-course/`と同じ要領で`{examId}-course/`フォルダを切り、`20hours-course-template.md` §7の手順に従う。

**2026-09-19更新**: IP・SG・DMの3本が本番公開済み。ユーザー指示により「IPAグループを先に完走させる」方針を再確認し、次の着手順を PD-M（マネジメント）→ PD-S（システム）に決定。要件提議は[`pd-course/pd-course-task.md`](./pd-course/pd-course-task.md)参照。

**2026-09-20更新**: 実装着手順（PD-M→PD-S完走後にG検定）は変更しないまま、G検定のシラバス分析・20hours土台のみ先行実施を決定。JDLA公式シラバス（v1.4）を`src/data/master/syllabus-g-kentei.json`に構造化済み。データマネジメント試験（`dm`）とG検定は「データ収集・加工・分析」「AIに必要な数理・統計知識」の2点で重なる領域があり、着手時に相互内部リンクを設計する方針。詳細は[`g-kentei-course/g-kentei-course-task.md`](./g-kentei-course/g-kentei-course-task.md)参照。

---

## 1. 優先順位の方針

1. **IPA情報処理技術者試験グループを最優先**（`cert-hubs.ts`の「IPA 情報処理技術者試験」グループ＝デジタルスキル関連資格）。理由: シラバスが`src/data/master/syllabus-{examId}.json`として構造化データ済みのものが多く、着手コストが低い
2. IPAグループを終えてから、クラウド・ネットワーク（AWS・CCNA）→ AI・データ（G検定・DS検定）→ ビジネス・事務（簿記・FP・MOS・宅建・知財検定）→ 設備・施工（電験三種・危険物・ビル管理・ボイラー・消防設備士・土木施工管理）の順で展開を検討する（`cert-hubs.ts`のグループ順に準拠。優先順位の詳細は着手時に別途判断）
3. **確定した着手順（ユーザー指示・2026-09-09、2026-09-17更新、2026-09-19更新、2026-09-20再確認、2026-09-22更新）**: ITパスポート（`ip`、公開済み）→ 情報セキュリティマネジメント（`sg`、公開済み）→ データマネジメント試験（`dm`、公開済み）→ **プロフェッショナルデジタルスキル（マネジメント）試験（`pd-m`、公開済み）→ プロフェッショナルデジタルスキル（システム）試験（`pd-s`、公開済み）** → ディープラーニングG検定（`g-kentei`）。これでIPAグループ（ip/sg/dm/pd-m/pd-s）が全て公開完了。PD-M/PD-Sの実装詳細は[`pd-course/pd-course-task.md`](./pd-course/pd-course-task.md)、G検定はシラバス分析・土台のみ先行済みで次の着手対象（[`g-kentei-course/g-kentei-course-task.md`](./g-kentei-course/g-kentei-course-task.md)参照）

## 2. IPA情報処理技術者試験グループの着手前提（読み合わせ）

`.workspace/.new-contentplan/2027-exams/2027-exams-master-report.md`より、2027年度のIPA試験制度改訂は資格ごとに扱いが異なる:

| 資格 | 2027年度の扱い | 新シラバスデータ | 備考 |
| --- | --- | --- | --- |
| ITパスポート（`ip`） | 移行（2027年春〜新制度） | `syllabus-ip-2027.json`取得・構造化済み（Week1完了） | courseコレクション実装済み（本ファイル執筆時点でTier1公開済み） |
| 情報セキュリティマネジメント（`sg`） | 移行（2027年春〜新制度） | **未取得**。`syllabus-sg.json`（現行v6.5相当）のみ存在 | **要調査**: 新SGのシラバス案PDFが公開されているか確認するのが最初の一歩（IPと同じ処理: PDF取得→構造化→新旧差分分析→章立て設計）。未公開ならITPと同じ工程を待つか、現行v6.5シラバスで先行着手するかを判断する |
| 基本情報技術者（`fe`） | 移行（2027年春〜新制度） | **未取得**。`syllabus-fe.json`（v6.5相当）のみ存在 | SGと同様の調査が必要 |
| 応用情報技術者（`ap`） | 2027年夏〜秋、高度試験と合わせて大括り再編 | `syllabus-ap.json`（v6.5相当）のみ存在 | 再編時期がSG/FEより遅く、再編内容も未確定な部分が多いため優先度は下がる |
| 高度試験各区分（SC・NW・PM・DB・ES・SA・ST・SM・AU） | 2027年夏〜秋、DM/PD新設と合わせて大括り再編 | SCのみ`syllabus-sc-2027.json`取得済み。他（NW/PM/DB/ES/SA/ST/SM/AU）は`syllabus-{examId}.json`（v6.5相当）のみ | 高度試験は受験者層・分量的にTier1（20h）との相性を個別に検討する必要あり（現行v6.5どおりで良いか、大括り再編を待つか） |
| データマネジメント試験（`dm`、新設） | 2027年夏〜秋、新設 | `syllabus-dm-2027.json`取得・構造化済み | **2026-09-17着手決定・examId登録済み**。20時間コース化の方針は[`dm-course/dm-course-task.md`](./archive/dm-course/dm-course-task.md)参照 |
| プロフェッショナルデジタルスキル試験（`pd-m`/`pd-s`、新設・3区分） | 2027年夏〜秋、新設 | `syllabus-pd-m-2027.json`・`syllabus-pd-s-2027.json`取得・構造化済み | **2026-09-22、両コースとも本文執筆・本番公開完了**。詳細は[`pd-course/pd-course-task.md`](./pd-course/pd-course-task.md)参照 |

## 3. 次の一歩（SG着手時にやること）

1. IPAサイト・`_inbox`メモを確認し、新SG（2027年版）のシラバス案PDFが公開されているか調査する（`2027-exams-master-report.md` §未解決事項の既存TODO「新SG・新FEのシラバス案PDFの有無を確認」と同一）
2. 公開されていれば、Week1でITPに対して行った工程をSGに適用する: PDF全文取得・構造化 → `src/data/master/syllabus-sg-2027.json`作成 → 新旧シラバス差分分析（`ip-course/2027-syllabus-diff.md`相当）→ 章立て設計（`ip-course/ip-course-curriculum.md`相当、`sg-course/sg-course-curriculum.md`として新設）
3. 未公開であれば、現行v6.5の`syllabus-sg.json`をベースに先行着手するか、2027年版公開まで待つかをユーザーに判断を仰ぐ
4. 以降は`20hours-course-template.md` §7「新しい資格へ展開する手順」の手順2〜10をそのまま実行

## 4. 実装済み資産（IPコースからそのまま流用できるもの）

- `course`コレクションのスキーマ（`src/content/config.ts`）・ページテンプレート（`src/pages/course/`）・`CourseLayout.astro` → examId非依存でそのまま使える
- `ChapterQuiz.tsx`・`progress.ts`（`src/apps/course-quiz/`）→ そのまま使える（`sh_course_{examId}`のキー規約により資格ごとに独立）
- `20hours-course-template.md`（§3-1の定型文ルール含む）→ そのまま適用
- `.workspace/scripts/scaffold-course.cjs`（2027データ対応済み）→ examId引数を変えて再実行可能かは要確認（現状ITP専用ハードコードが残っていないか確認してから使う）
