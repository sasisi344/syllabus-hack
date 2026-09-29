# 第2章「社内規定をAIに登録する」実証データ（2026-09-29）

第2章の節「毎回の入力を減らす：社内規定をAIに登録しておく」の根拠。同じ短い依頼（prompt.txt）を、Claude Code（`claude -p`、`--setting-sources project,local`）で3設定に対して1回ずつ実行した生の出力。

- out-a-no-rules.txt: 規定なし
- out-b-claude-md.txt: CLAUDE.md に規定を登録（CLAUDE.md）
- out-c-skill.txt: スキルに規定を登録（skill-ec-support-rules/SKILL.md）

出力は実行のたびに変わる。章内の引用は抜粋。別コラム「社内規定をAIのルールに取り込んで入力の手間を減らすテクニック」の素材としても使える。
