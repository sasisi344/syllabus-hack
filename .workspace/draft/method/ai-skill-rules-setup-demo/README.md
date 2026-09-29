# コラム「生成AIに社内ルールを覚えさせるスキル設定のやり方」実証データ（2026-09-29）

架空の社内規程（kitei.html → PDF/PNG。PNGは写真の代用）を素材に、Claude Code（`claude -p`、`--setting-sources project,local`）で1回ずつ実行した生の出力。実行のたびに結果は変わる。

1. out-1-rules-from-pdf.txt: PDFを添付し「これは当社の社内規定なので、AIに禁則事項として記憶させたい。全体のルールを作成して」と依頼した出力
2. out-2-rules-from-photo.txt: 同じ規程の画像版
3. out-3-short-prompt-no-rules.txt: ルール未登録で、短い依頼（short-prompt.txt）を実行
4. out-4-short-prompt-CLAUDE-md.txt: 1のルール（rules-as-CLAUDE.md）をCLAUDE.mdに登録して同じ短い依頼を実行
5. out-5-short-prompt-skill.txt: 1のルールをスキル（rules-as-SKILL.md）に登録して同じ短い依頼を実行

※ ChatGPT・Geminiでは同じ実験を行っていない（記事にもその旨を記載）。
※ 2の実行時にClaude Codeの自動メモリ機能がテスト用フォルダ由来のメモリを作成したため、削除済み。

## 追加検証（2026-09-29、forAI対応）
- tip-rulefile-conversation/: 「ルールを制定したいのでルールファイルをまず作成してほしい。それから私がルールを提示するから記録していって。」→ 空のCLAUDE.md作成 →（-cで継続）ルール2件を伝える → 追記された結果
- tip-import-h/: CLAUDE.md から `@SKILL-support.md` で取り込む方式 → 短い依頼の出力
- tip-import-i/: CLAUDE.md に文章で「SKILL-support.mdに記録している。読んで従うこと」と書く方式 → 短い依頼の出力
- いずれも自動メモリ無効（CLAUDE_CODE_DISABLE_AUTO_MEMORY=1）で実行。両方式とも、在庫確保・規定期間内の返金案内・クーポン予告の3点は出なかった。
- 参考（自動メモリ有効時）: 「記憶させたい」と頼んだ写真版の実行では、ルールファイルではなくClaude Codeのメモ機能に保存された（テスト用フォルダ由来のため削除済み）。
