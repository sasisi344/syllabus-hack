---
created: 2026-09-07
updated: 2026-09-07
tags:
  - シラバスハック
  - roadmap
  - week2
---

# Week2タスク（9/13〜9/19）: パイロットカリキュラム制作

> 全体像は [`new-content-plan.md`](../new-content-plan.md) を参照。前提: Week1で確定した「Tier1/Tier2二層カリキュラム（[`ip-course/ip-course-curriculum.md`](./ip-course/ip-course-curriculum.md)）」「`syllabus-ip-2027.json`」を使用する（[`week1-task.md`](./week1-task.md)）。
>
> **2026-09-07更新**: 「全819語を20hでアウトプットするのは非現実的」という考察の結果、Tier1（無料20h・精選版）の章立ては8章に確定済み（[`ip-course-curriculum.md`](./ip-course/ip-course-curriculum.md) §3-2）。本Weekのタスクは「章立てを決める」から「決まった8章に用語を精選して流し込む」に変わった。

## このWeekのゴール

ITパスポート20hoursパイロット＝**Tier1**（無料・入口テキスト）の中身（診断テスト・カリキュラムマップ・章立て本文・章末チェック）を、Web実装前のコンテンツとして一式作り切る。Tier2（有料note・合格テキスト）の本文制作は本Weekのスコープ外（着手時期は判断待ち、`new-content-plan.md` 参照）。

## タスク

- [x] **Tier1各章の用語精選**（[`ip-course-curriculum.md`](./ip-course/ip-course-curriculum.md) §3-3の基準に従う）: 各章の元語数（155/144/70/29/110/64/90/157語）から高価値な用語を約4割に絞り込む。基準: ①既存theory記事がある用語 ②現行v6.5にもあった用語 ③生成AI・データマネジメント等の新設分野の代表語 → **2026-09-09完了**。全8章とも`.workspace/draft/course/ip/0{1-8}-*.md`に精選後リストを反映済み（各章約24〜59語、合計約210語）。第3章（DX変革）のみ既存theory記事の受け皿が無く全語新規判断
- [x] ITパスポート診断テスト（10問前後）を作成 → **2026-09-09完了**。`index.md`「まず10問で現在地を測る」に8章から1〜2問ずつの4択10問を作成済み（選択肢・正解付き）
- [x] カリキュラムマップの文言修正（[`ip-course-curriculum.md`](./ip-course/ip-course-curriculum.md) §3-4） → **2026-09-09完了**。`index.md`のカリキュラムマップ表・「完走したら」節（Tier1→Tier2の50〜80時間ロードマップ）を修正済み
- [x] 8章の本文執筆 → **2026-09-09完了**。全8章、各節10〜20行の要約＋精選後用語リスト＋既存theory/trend記事へのリンク（計61本、全リンク実在確認済み）＋AIプロンプトを作成。ネットワーク・DB・セキュリティ・PC用語系は既存theory記事の要約中心、DXの考え方（第3章）は新規執筆
- [x] 章末理解度チェック問題（選択式3〜4問×章）を作成 → **2026-09-09完了（方針変更あり）**。ユーザー指示により、既存334問バンクからの流用ではなく「その章で説明した内容だけを復習する固定出題（ランダム化なし、4択、全問回答後に一括採点して○✕表示）」に変更（[`ip-course-curriculum.md`](./ip-course/ip-course-curriculum.md) §3-5）。全8章・計31問を各章ファイルの「章末チェック」節に作成済み

## 次Weekへの引き継ぎ

- 完成した診断テスト・カリキュラムマップ・8章分の本文原稿・章末チェック問題（Tier1一式） → Week3のAstro実装で流し込む素材一式。draft: trueのまま、実装時にレビュー・trueを外す
- **新規UIコンポーネントが必要**: 章末チェックは「全問回答後に一括採点→○✕表示」という、既存`it-passport-quiz`系（1問ずつ即時正誤表示）とは異なる挙動。Week3で新規実装が必要（[`ip-course-curriculum.md`](./ip-course/ip-course-curriculum.md) §3-5参照）
- Tier2（有料note）の制作着手可否・時期の判断結果 → 着手する場合はWeek3以降のタスクに追加
