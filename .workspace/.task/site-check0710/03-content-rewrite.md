# WP03 — 既存記事リライト・メタデータ整備（Phase 2・編集）

出典: TODO.md I / site-audit-2026-07-10 C-2〜C-4 / task-results/rewrite-priority.md / weekly-task.md Act

> Phase 1（WP01・02）完了後に着手。バッチ順に実施し、1バッチごとに監督評価を受ける。

## バッチ1: meta description 整備（機械寄り）

- [x] **T1: metadata.description 欠落への補完**（2026-07-10完了・実対象84記事＝93からアーカイブ移動9件除く）
  raw の missing-metadata リスト参照。各記事の excerpt・冒頭をもとに 120〜160字で作成。`metadata: description:` 形式（CLAUDE.md テンプレート準拠）。lastmod 更新。
- [ ] **T2: 長さ範囲外 146記事の調整（優先度低・任意）**
  80字未満・180字超のみ対象。T1 完了後に余力があれば。

## バッチ2: 短記事リライト（TODO.md I / rewrite-priority.md）

各記事を6000字超に拡張。`.agents/post_writer.md` の該当フレームワーク（BEAF/QUEST/PASONA）を Read してから着手。拡張時に見出しルール（「」・番号禁止）・`<strong>` 強調・toc: true 付与・lastmod 更新を同時適用。

- [x] **T3 優先度A**（2026-07-10・6000字達成・toc/見出し/強調ルール適用済み）: `method/agent-teacher`(6052字) / `trend/fp2-jitsuki-comparison`(6151字) / `trend/ccna-vs-aws-saa`(5900字)
- [~] **T4 優先度B**（2026-07-10・toc/見出し/強調ルールは適用済みだが6000字未達、追加リライト必要）: `method/nw-mermaid-hack`(5486字) / `method/ap-discard-strategy`(4515字) / `method/pomodoro-anki-technique`(3648字) / `career/backoffice-sg-career-hack`(3204字)
- [~] **T5 優先度C**（同上、6000字未達）: `method/genai-cert-study-plan`(3015字) / `career/ses-ap-strategy`(2806字、frontmatterのYAML構文エラーも修正) / `method/wrong-choice-analysis-hack`(2305字)
- [x] **T6**（2026-07-10）: `method/cbt-2026-syllabus-complete-guide` の見出しルール違反（数字・「」括弧）を修正、toc: true 追加。**検索意図の刷新（CTR 0%対策の本文再構成）は未着手のまま** — 要再訪

## バッチ3: タグ・見出しの段階的正規化（大規模・計画的に）

- [ ] **T7: タグスプロール統合** — ユニーク663個中478個が1記事のみ。`task-results/tag-similarity-clusters.md` と `.agents/tag_rules.md` を Read し、類似タグを正規タグへ統合。**タグページURLが変わるため、多数記事の一括変更はバッチを分けて**（1バッチ50記事目安）実施し、都度 build 確認。**2026-07-10時点で未着手**（ユニークタグ628個中453個が1記事のみと確認済み。統合には記事ごとの意味判断が必要でスクリプト化不可と判断し次回に持ち越し）
- [x] **T8: 見出しルール違反 265記事**（2026-07-10完了） — 「」括弧・番号付き見出し。`.workspace/scripts/fix-heading-numbers.cjs` を新規作成し全記事へ一括適用（254ファイル・848箇所を機械修正）。副産物としてfrontmatter先頭の末尾スペース問題（15記事、旧index-articles.jsと同根のバグ）を発見・修正。残り5件は個別に手動修正（うち2件は既存データの文字化けが原因、本セッション起因ではないことを確認済み）。監査スクリプトでheading-style違反 265→0件を確認

## 完了条件（監督がバッチごとに検証）

1. バッチ1: 監査スクリプトで missing-metadata = 0、description が全件 120〜160字（サンプル抽出で確認）
2. バッチ2: 各記事6000字超・見出しルール準拠・`**bold**` 混入なし・toc: true・lastmod当日・publishDate不変
3. バッチ3: 変更後も `pnpm build` 成功、タグページ総数が減少方向であること
4. すべてのバッチ: 変更ファイルがスコープ内のみ
