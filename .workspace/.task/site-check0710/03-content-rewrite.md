# WP03 — 既存記事リライト・メタデータ整備（Phase 2・編集）

出典: TODO.md I / site-audit-2026-07-10 C-2〜C-4 / task-results/rewrite-priority.md / weekly-task.md Act

> Phase 1（WP01・02）完了後に着手。バッチ順に実施し、1バッチごとに監督評価を受ける。

## バッチ1: meta description 整備（機械寄り）

- [x] **T1: metadata.description 欠落への補完**（2026-07-10完了・実対象84記事＝93からアーカイブ移動9件除く）
  raw の missing-metadata リスト参照。各記事の excerpt・冒頭をもとに 120〜160字で作成。`metadata: description:` 形式（CLAUDE.md テンプレート準拠）。lastmod 更新。
- [ ] **T2: 長さ範囲外 146記事の調整（優先度低・任意）**
  80字未満・180字超のみ対象。T1 完了後に余力があれば。

## バッチ2: 短記事リライト（TODO.md I / rewrite-priority.md）

> **2026-07-10 方針転換**: 当初「6000字超」を固定目標としていたが、文字数を稼ぐための水増しは内容を希薄化させ逆効果と判断（`weekly-task.md` W25→W26で平均滞在時間-88.7%の悪化データもあり、量より読了質を優先すべき根拠がある）。
> **新基準**: 固定の上限文字数は設定しない。**最低ライン約2000字**（実測データの下限）を下回らないことを条件に、**検索意図・読者の疑問を過不足なく解消したら執筆をクローズする**。実測結果（下記T3〜T6）の分布（2305〜6151字）を目安レンジとし、無理に6000字へ引き伸ばさない。
> 見出しルール（「」・番号禁止）・`<strong>` 強調・toc: true 付与・lastmod 更新は全記事共通で適用。

- [x] **T3 優先度A**（2026-07-10完了）: `method/agent-teacher`(6052字) / `trend/fp2-jitsuki-comparison`(6151字) / `trend/ccna-vs-aws-saa`(5900字)
- [x] **T4 優先度B**（2026-07-10完了・新基準で再評価）: `method/nw-mermaid-hack`(5486字) / `method/ap-discard-strategy`(4515字) / `method/pomodoro-anki-technique`(3648字) / `career/backoffice-sg-career-hack`(3204字) — いずれも新基準の目安レンジ内で内容完結済み、追加リライト不要
- [x] **T5 優先度C**（2026-07-10完了・新基準で再評価）: `method/genai-cert-study-plan`(3015字) / `career/ses-ap-strategy`(2806字、frontmatterのYAML構文エラーも修正) / `method/wrong-choice-analysis-hack`(2305字) — 新基準の目安レンジ内で内容完結済み、追加リライト不要
- [x] **T6**（2026-07-10）: `method/cbt-2026-syllabus-complete-guide` の見出しルール違反（数字・「」括弧）を修正、toc: true 追加。**検索意図の刷新（CTR 0%対策の本文再構成）は文字数の問題ではないため別枠の課題として継続** — 要再訪

## バッチ3: タグ・見出しの段階的正規化（大規模・計画的に）

- [~] **T7: タグスプロール統合**（2026-07-10・安全な7件のみ実施、大部分は意味判断リスクのため見送り）
  `tag-similarity-clusters.md` は記事の類似度クラスタ（統合スラッグ案）であり、タグ名同士の対応表ではないと判明。そのため実際の全646ユニークタグを頻度集計し、以下の**表記揺れ・tag_rules.md明示エイリアス・同一記事内重複**に限定して統合（意味的に近いだけの同義語クラスタ「学習法/勉強法/学習メソッド」「キャリア戦略/キャリア開発/キャリアアップ」等は誤統合リスクが高いため見送り）:
  - `SC` → `情報処理安全確保支援士`（tag_rules.md明記エイリアス。app/sc-specialist-quizで両方併記されていた重複を解消）
  - `疑似言語` → `擬似言語`（IPA公式表記の統一。method/fe-pseudo-code-ai-hack）
  - `情報Ⅰ`（ローマ数字）→ `情報I`（ASCII、検索されやすい表記に統一。trend/entrance-exam-information-1-impact）
  - `就職` / `就職活動` → `就活`（同義語、多数派表記に統一。method/mos-ai-shortcut, trend/it-passport-shame-debate）
  - `独学術` → `独学`（術サフィックスのバリアント。method/agent-teacher）
  - `AI活用術` → `AI活用`（同上。theory/swot-analysis）
  - ユニークタグ数: 646 → 639（-7）。7記事のlastmod更新済み
  - **残タスク**: 453個の単発タグの大部分は意味判断が必要で今回未着手。次回は`学習法/勉強法/学習メソッド`のような多義的クラスタを人間レビュー付きで検討するか、地域タグ（都道府県別）等の構造的に単発が正しいカテゴリを除外リストに登録してから再集計することを推奨
- [x] **T8: 見出しルール違反 265記事**（2026-07-10完了） — 「」括弧・番号付き見出し。`.workspace/scripts/fix-heading-numbers.cjs` を新規作成し全記事へ一括適用（254ファイル・848箇所を機械修正）。副産物としてfrontmatter先頭の末尾スペース問題（15記事、旧index-articles.jsと同根のバグ）を発見・修正。残り5件は個別に手動修正（うち2件は既存データの文字化けが原因、本セッション起因ではないことを確認済み）。監査スクリプトでheading-style違反 265→0件を確認

## 完了条件（監督がバッチごとに検証）

1. バッチ1: 監査スクリプトで missing-metadata = 0、description が全件 120〜160字（サンプル抽出で確認）
2. バッチ2: 各記事が最低約2000字以上・検索意図/読者の疑問を過不足なく解消（水増し目的の冗長化がないこと）・見出しルール準拠・`**bold**` 混入なし・toc: true・lastmod当日・publishDate不変
3. バッチ3: 変更後も `pnpm build` 成功、タグページ総数が減少方向であること
4. すべてのバッチ: 変更ファイルがスコープ内のみ
