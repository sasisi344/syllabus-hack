# WP06 — 非IPAアプリ展開（Phase 3・アプリ開発）

出典: TODO.md F / restructure-plan-2026-06.md 課題D / research-kw-non-ipa.md forAI注釈

> 必読スキル: `.agents/quiz_app_rules.md` + `.agents/quiz_data_rules.md`（LocalStorageキー・型・CSS・examId規約）。
> ワークフロー: 問題JSON作成（`src/data/master/questions-{examId}.json`）→ 実装（`src/apps/{app-slug}/`）→ レジストリ登録（`src/apps/index.ts`）→ 記事作成（`src/data/post/app/{app-slug}/index.mdx`、appId 必須）。
> 注意: examId が未定義の資格（boki・takken・g-kentei は content スキーマに存在。FP は `common` 扱い→ WP05 J-2 の判断待ち）は先に整合を確認。

## タスク（優先順）

- [ ] **A-1: 日商簿記3級 仕訳ドリル**（`app/boki-shiwake-drill` 想定）
  仕訳問題は簿記学習の最大ボリュームゾーンかつ Negative-Narrative 記事（WP04 E-1）との内部リンク相性が良い。問題形式: 取引文→借方/貸方の勘定科目・金額選択
- [ ] **A-2: 宅建 権利関係 一問一答**（`app/takken-kenri-quiz` 想定）
  ○×または4択。WP04 E-2 と連携
- [ ] **A-3: G検定 模擬試験シミュレーター**（`app/g-kentei-mock-exam` 想定)
  時間制限つき多問数形式（本試験は191問/120分の時間感覚が鍵）。既存 CBT シミュレーター実装を流用
- [ ] **A-4: FP2級 計算問題ドリル**（`app/fp2-calc-drill` 想定）
  6分野の頻出計算（年金・税額・利回り等）。examId 整合を先に確認
- [ ] **A-5: AWS資格診断アプリ**（`app/aws-cert-diagnosis`）
  選択式質問（職種・経験・目的）→ CLF/SAA/ANS 等のおすすめを提示。既存AWS記事群への内部リンクハブを兼ねる。クイズ型ではなく診断型のため quiz_app_rules の型を拡張する可能性あり（shared コンポーネント流用可否を先に調査）

## 完了条件（監督がアプリ単位で検証）

1. `.agents/quiz_app_rules.md` 準拠: LocalStorage キー命名・型定義・CSS規約・examId 規約（`/app-audit {app-slug}` コマンド相当のチェックをパス）
2. 問題JSONが `.agents/quiz_data_rules.md` のスキーマ・ID命名に準拠
3. `src/apps/index.ts` に登録済み、app記事（index.mdx）に `appId` あり
4. `pnpm build` 成功＋アプリページが dist に生成されている
5. 出題・解答・結果表示・LocalStorage 保存の基本動作をコードレビューで確認（ブラウザ実機確認はユーザーに依頼事項として報告）
