# コラム「生成AIでプログラミングをするための事前準備編」実証データ（2026-09-29）
- prompt-todo.txt: 初心者向けの依頼文（記事に掲載）
- out-claude-reply.txt / todo.py: Claude Code（`claude -p`、acceptEdits）が返した説明と作成したコード。AIはコードを作成したが、実行の許可待ちで動作確認はできていない、と報告した
- todo-after-test.json: 人（Claude Code本体のセッション）が Windows 11 / Python 3.12.10 で `python todo.py add/list/done` を実行して確認した後のデータ
- 確認したこと: add×2、list、done 1、list、存在しない番号（done 9）、--help がすべて期待どおり動作
- Python公式ドキュメント確認（2026-09-29）: Windowsは「Python install manager」が推奨（3.14からフルインストーラーとpyランチャーは非推奨）、macOSはpython.orgのインストーラー（python3コマンド、IDLE・tkinter同梱）
