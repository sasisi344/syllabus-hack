# 静的ファイル配布方式の検証（2026-09-29）

Astro 5.17 + @astrojs/mdx 4.3 の最小プロジェクト（本体と同じく、glob ローダーの content collection、getStaticPaths で draft を除外、MDX から ZIP を import）で検証。node_modules は含めない（`npm install` で再現）。

## 結果
| 検証 | 結果 |
| --- | --- |
| 公開章（draft:false）が `import x from './a.zip?url'` したZIP | `dist/_astro/a.<hash>.zip` に出力され、リンクは `/_astro/a.<hash>.zip`（`download="a.zip"` の属性で、保存名は元の名前に戻せる） |
| **下書き章（draft:true）が import したZIP** | **ページは生成されないが、ZIPは `dist/_astro/` に出力される**（＝下書きでも、src に置くと公開環境に出る） |
| ZIPが4KB未満のとき（`?url` のみ） | Viteが base64 の data URI としてHTMLに埋め込む（ファイルは出力されない） |
| `?no-inline` のみ | ビルド失敗（.zip は Vite の既知のアセット種別ではない） |
| **`?url&no-inline`** | 115バイトの小さなZIPでも、ファイルとして `dist/_astro/` に出力される（採用） |

## 結論
- ZIPは、章のmdxと同じフォルダに置き、`import x from './xxx.zip?url&no-inline'` で読み込む
- 公開前は src/ に置かない（下書き章のZIPも出力されるため）。下書きの間は `.workspace/draft/` に置き、公開時に章のmdxと一緒に移す
- 個別の .txt は配布しない（Googleは .txt をインデックスするが、ZIPは対象外）
