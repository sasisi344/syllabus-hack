# WP06 — 非IPAアプリ展開（Phase 3・アプリ開発）

出典: TODO.md F / restructure-plan-2026-06.md 課題D / research-kw-non-ipa.md forAI注釈

> 必読スキル: `.agents/quiz_app_rules.md` + `.agents/quiz_data_rules.md`（LocalStorageキー・型・CSS・examId規約）。
> ワークフロー: 問題JSON作成（`src/data/master/questions-{examId}.json`）→ 実装（`src/apps/{app-slug}/`）→ レジストリ登録（`src/apps/index.ts`）→ 記事作成（`src/data/post/app/{app-slug}/index.mdx`、appId 必須）。
> 注意: examId が未定義の資格（boki・takken・g-kentei は content スキーマに存在。FP は `common` 扱い→ WP05 J-2 の判断待ち）は先に整合を確認。

## タスク（優先順）

- [x] **A-1: 日商簿記3級 仕訳ドリル**（2026-07-10完了・`app/boki-shiwake-drill`）
  `src/data/master/questions-boki.json` + 専用アプリ実装。共通基盤 `src/apps/shared/GenericQuizApp.tsx` を新規作成し利用
- [x] **A-2: 宅建 権利関係 一問一答**（2026-07-10完了・`app/takken-kenri-quiz`）
  `questions-takken.json` + GenericQuizApp利用
- [x] **A-3: G検定 模擬試験シミュレーター**（2026-07-10完了・`app/g-kentei-mock-exam`）
  `questions-g-kentei.json`（全30問・5分野）+ 専用の時間制限付きモード（`QuizApp.tsx`、既定20分・本試験の1問38秒ペースを再現）を新規実装。GenericQuizAppは正誤判定前提のためA-3では流用せず、時間制限・自動採点・分野別成績を持つ専用コンポーネントとした。g-kentei-hubと双方向リンク設定済み
- [x] **A-4: FP2級 計算問題ドリル**（2026-07-10完了・`app/fp2-calc-drill`）
  `questions-fp2.json` + GenericQuizApp利用。記事frontmatterの`knowledge.examId`は`common`のまま（WP05 J-2判断待ちと整合）、アプリ内部のexamId文字列`fp2`はLocalStorage名前空間用の別軸として区別
- [x] **A-5: AWS資格診断アプリ**（2026-07-11完了・`app/aws-cert-diagnosis`）
  選択式3問（職種・クラウド経験・目的）→CLF/SAA/ANSのいずれかを提示する診断型アプリ。`DiagnosisApp.tsx`（新規コンポーネント）+ ルールベースの`logic.ts`で実装。LocalStorageは`sh_diag_aws-cert-diagnosis`キー（既存クイズ系`sh_quiz_*`とは別名前空間）で前回の診断結果のみ保存。`aws-hub`から診断アプリへの逆リンクを追加し双方向リンク化
  - 体制注記: 前回セッションでセッション上限により中断（types.ts・logic.tsのみ完成の状態）。メインセッションが引き継いで完成させた

## 完了条件（監督がアプリ単位で検証）

1. `.agents/quiz_app_rules.md` 準拠: LocalStorage キー命名・型定義・CSS規約・examId 規約（`/app-audit {app-slug}` コマンド相当のチェックをパス）
2. 問題JSONが `.agents/quiz_data_rules.md` のスキーマ・ID命名に準拠
3. `src/apps/index.ts` に登録済み、app記事（index.mdx）に `appId` あり
4. `pnpm build` 成功＋アプリページが dist に生成されている
5. 出題・解答・結果表示・LocalStorage 保存の基本動作をコードレビューで確認（ブラウザ実機確認はユーザーに依頼事項として報告）
