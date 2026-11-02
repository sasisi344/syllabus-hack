# T-12 全面リライト ウェーブB（保留のうち刷新していない26本）

- 完了日: 2026-11-02
- 種別: 施策
- テーマ: 全面リライト, AdSense, 一次情報, 判断の基準, 図, 演習ツール
- 対象: ウェーブBの26本（`.workspace/projects/rewrite-2026-11/waves.csv` の B。app 13・method 4・theory 8・trend 1）
- 起票元: hq:H-28

## 何をしたか

- 指示書 B01〜B03（`.workspace/codex/orders/2026-10-31-T-12-B01.md`〜`B03.md`）で Codex がリライトした。発行前に、ウェーブAの知見（1本ごとに報告書へ追記・`--outDir` で検証・実行結果の節を消さない）と、dev サーバーのポートの注意を指示書に足した
- CC が `site-admin` で検収した（`.workspace/admin-review/2026-11-02-T-12-wave-b.md`）。admin-lint ERROR 0・WARN 0、実行結果の節は元の行がすべて残る、事実の抜き取り7件はすべて一致、ビルド成功（869ページ）、Mermaid 12本の描画と演習ツール13本の表示をブラウザで確認
- `.mdx` の HTML コメント（9本）を CC が `{/* */}` に直した。admin-lint に検出を追加した

## 使ったデータ・資料

- 基準: `.workspace/projects/rewrite-2026-11/README.md`、進み具合: `progress.md`
- 報告書: `.workspace/codex/reports/2026-11-02-T-12-B01.md`〜`B03.md`

## 結果

- 26本すべて公開可（未コミット → 検収後にコミット。push はユーザーの確認後）
- 残りは筆者の作業: AI_EXAMPLE の実行（T-14）、LEARNER_NOTE の記入（T-15）。一覧は各報告書の「止めた箇所」
- ツールの不具合の候補は inbox へ（I-08・I-09・I-10）
- genai-passport-quiz の記事は旧分類236問の前提。T-23b で新しい5分類に直す（指示書に追記済み）

## 次に使える知見

- Codex はサンドボックスでビルドも dev も動かせなかった（`Cannot read directory "../..": Access is denied`、3本とも）。ウェーブAでは動いていたので、環境の変化か同時実行の影響。**ビルドとブラウザの確認は CC がする前提で検収を組む**。指示書の「`pnpm build` が通る」は、Codex が通せなかった場合に報告書へ書けば足りる
- Codex は `.mdx` にも `<!-- -->` のコメントを書く。指示書に「`.mdx` のコメントは `{/* */}`」と書いてもビルドできないと気づけない。admin-lint で ERROR にした
- 3本を同時に発行すると、inbox への追記の ID がぶつかる（Codex と CC が同じ I-08 を使った）。CC は検収の最後に inbox の ID を確かめる
- 演習ツールの記事は、Codex がツールのコードを読んで、記事の説明を実データに合わせた（収録数・機能の限界）。コードの不具合の候補が3件見つかった
