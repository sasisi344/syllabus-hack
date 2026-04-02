# Regex & Generation Failure Log

このファイルは、AIが生成に失敗したパターンや、エラーを引き起こしたコード、正規表現の誤りを記録し、再発を防止するためのナレッジベースである。

## 記録フォーマット
### [YYYY-MM-DD] 事象タイトル
- **Context**: 実行しようとしたタスク（例：フロントマターの置換）
- **Failure**: 失敗したコード/正規表現
- **Error**: 発生した問題（例：0 occurrences found, 無関係な箇所まで置換された）
- **Correction**: 修正後の正解コード/パターン
- **Lesson**: なぜ失敗したか、次からどうすべきか

---

## 累積ログ

### [2026-03-20] `replace` ツールでの `old_string` 不一致
- **Context**: `src/data/post/app/pm-essay-gacha/index.md` の内容更新
- **Failure**: 省略記号 `...` を含む長い文字列を `old_string` に指定した。
- **Error**: `0 occurrences found`。
- **Correction**: `read_file` で取得した直近の完全なテキストブロックを、一文字も変えずに（改行コード含む）指定する。
- **Lesson**: `replace` ツールは完全一致を求めるため、人間が読みやすく省略した `...` は使用不可。確実を期すなら `write_file` で上書きするか、極めて短いユニークな行を対象にする。

### [2026-03-20] PowerShell内での正規表現エスケープ
- **Context**: `gemini.md` へのルール追記
- **Failure**: `-replace "- \.workspace/logs/..."`
- **Error**: ドット `.` やスラッシュ `/` がエスケープされず、意図しないマッチングが発生、または失敗。
- **Correction**: `[regex]::Escape("- .workspace/logs/...")` を使用するか、バックスラッシュで `\.` のようにエスケープする。
- **Lesson**: ツール経由でシェルを叩く場合、エスケープの階層（AI -> Shell -> Regex）を意識すること。


### [2026-03-20] GA4タグがNetworkタブに表示されない（Partytownの干渉）
- **Context**: GA4タグの設定確認
- **Failure**: src/config.yaml でGA4の id は設定されていたが、partytown がデフォルトで有効（または暗黙的に有効）になっていた。
- **Error**: Partytown（Web Worker）経由で実行されるため、メインスレッドのNetworkタブで通常の gtag.js 読み込みが確認しづらくなる。
- **Correction**: src/config.yaml の googleAnalytics セクションに partytown: false を明示的に追加。
- **Lesson**: デバッグ時や確実に動作を確認したい場合は、Partytownを無効化してメインスレッドで実行させる。
