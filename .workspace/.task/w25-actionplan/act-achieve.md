# act-achieve: W25 完了タスクログ

> W25で実施し、完了条件をすべて満たした(またはこれ以上の追加作業が不要と判断した)タスクを集約。
> アクセスデータ取得後のレビューが必要な残項目は [[act-review-w26]] を参照。

---

## act-2: cbt-2026-syllabus-complete-guide タイトル・meta description再見直し

- 対象: `src/data/post/method/cbt-2026-syllabus-complete-guide/index.md`
- act-6（本文刷新）完了後、タイトルを案A採用:
  `【2026年最新】IPA試験CBT完全移行ガイド｜午前午後の名称変更・タイピング練習法まとめ`
- meta descriptionに「タイピング対策チェックリスト」「3ステップの練習方法」を追加し本文と整合
- lastmod: 2026-06-14、`pnpm build` 成功（1287ページ）

> 残項目（GSC再確認）は [[act-review-w26]] #2 へ移動済み

---

## act-3: sg-beginner-roadmap の構成統合・導線見直し

- `src/data/post/method/sg-beginner-roadmap/` は `index.md` 1件のみで、記事が複数ページに
  分散している実体はないことを確認
- GA4でカテゴリ別5行に分散している件は、記事構造が単一ファイルであることから
  **ケースA（計測上の分散）**と判断し、統合作業は不要としてクローズ
- 実質的な対応は act-9（次の一歩リンク見直し）で実施済み

> GA4生ログでの内訳確認・ケースB再オープン判定は [[act-review-w26]] #4 へ移動済み

---

## act-4: nw-mermaid-hack への内部リンク追加（advanced-ipa-certification-high-salary-impact）

- 対象: `src/data/post/career/advanced-ipa-certification-high-salary-impact/index.md`
- 48〜50行目の高度試験紹介の箇条書きに「NW試験」項目を追加し、`/nw-mermaid-hack` へリンク
- lastmod: 2026-06-14、`pnpm build` 成功（1287ページ）

---

## act-5: nw-mermaid-hack への内部リンク追加（vision-to-mermaid-hack / aws-concept-metaphor-hack）

- 対象:
  - `src/data/post/method/vision-to-mermaid-hack/index.md`
  - `src/data/post/theory/aws-concept-metaphor-hack/index.md`
- 両ファイルの「まとめ」セクション末尾に `/nw-mermaid-hack` への関連記事リンクを追加
- lastmod: 2026-06-14、`pnpm build` 成功（1287ページ）

---

## act-6: cbt-2026-syllabus-complete-guide 本文刷新（タイピング対策の具体化）

- 対象: `src/data/post/method/cbt-2026-syllabus-complete-guide/index.md`
- 見出しを `## タイピング対策チェックリスト：CBT論述式に備える3ステップ` に変更
- 自己診断チェックリスト＋STEP1〜3（速度計測→AIプロンプト練習→90分通し練習）の構成に再編
- STEP1・まとめの両方で `/typing-speed-cbt` への内部リンクを追加
- lastmod: 2026-06-14、`pnpm build` 成功（1287ページ）

---

## act-8: 新規記事のtoc標準化・冒頭「結論先出し」導入

- `.agents/post_writer.md` のConstraintsに以下を追記:
  - ルール9: `toc: true` を新規記事のフロントマターに必須化
  - ルール10: 冒頭3行以内で「結論先出し」を行うルールと文例2つ
  - Output Structureのフロントマター例・Main Content節にも反映
- CLAUDE.mdのフロントマター完全テンプレートに `toc: true` を追加（ユーザー確認済み、既存記事への遡及適用なし）

**残タスク**: 次回 `/new-post` 実行時に新ルールが実際に反映されているか確認（アクセスデータ不要・通常タスクのレビューで対応）

---

## act-9: sg-beginner-roadmap の「次の一歩」リンク文脈・配置見直し

- 対象: `src/data/post/method/sg-beginner-roadmap/index.md`
- 「まとめ」セクション直後に `## 次の一歩：実力試しとステップアップ` を新設し、
  sg-quiz / sg-subject-b-quiz へのCTAを再掲
- 「次のステップ」（応用情報ロードマップ）リンクの前に接続文を追加し、文脈の唐突感を解消
- lastmod: 2026-06-14、`pnpm build` 成功（1287ページ）

> 効果検証（CTAクリック率変化）は [[act-review-w26]] #4 へ移動済み

---

## 横断メモ（act-0より）

### 内部リンクのタグ形式不統一

- act-4・act-5で追加した `/nw-mermaid-hack` への内部リンクは `<a href="...">` 形式で記述したが、
  サイト内の他の内部リンクはMarkdownの `[テキスト](/slug)` 形式が主流
- ビルド・表示上は問題なし。404・リンク切れもなし
- **今後の対応案**: 内部リンクのMarkdown形式統一ルールを `.agents/content_structure.md` や
  `post_writer.md` に追記し、既存の `<a>` タグ使用箇所（act-4/act-5で追加した3箇所）も
  まとめて修正するタイミングで対応する
