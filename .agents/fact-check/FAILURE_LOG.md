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

### [2026-07-11] 本番記事にU+FFFD文字化けが大量残存（183ファイル・771行）
- **Context**: w28-site-verifi T9 のタイトル改善作業中に `trend/typing-speed-60wpa` で U+FFFD（�）を発見し、全記事を走査
- **Failure**: 過去のエンコード変換ミス（推定: UTF-8以外→UTF-8変換時のバイト破損）で、日本語1文字が `�`（U+FFFD REPLACEMENT CHARACTER）に置換されたまま本番公開されていた。`src/data/post/` 配下の183ファイル・771行に残存
- **Error**: 表示上「IT業���で」のように文字が欠落し、読了品質・E-E-A-T・SERPスニペットに悪影響
- **Correction**: 検出は `grep -r $'\xEF\xBF\xBD' --include="*.md" --include="*.mdx" src/data/post`。修復は前後の文脈から欠落文字を推定して復元（例: 業���で→業界で、���産性→生産性）。機械置換は不可能（欠落文字はファイルごとに異なる）
- **Lesson**: (1) 記事の一括変換・移行スクリプトを書く際はエンコーディングを明示し、変換後に U+FFFD 検出を必ず実行する。(2) 新規記事の公開前チェック（/check-draft）にU+FFFD検出を含めるべき
- **追記（2026-07-12）**: 全量修復完了。記事182ファイル・769箇所＋クイズJSON（`src/data/quiz/`）2ファイル・10箇所を文脈から復元。適用は抽出時の前後文脈と突合する検証スクリプト経由で実施し、ミスマッチ0。src・distともU+FFFD残ゼロを確認。検出コマンドは `--include` をJSONにも広げること（初回スキャンは.md/.mdxのみでクイズデータを見落とした）
