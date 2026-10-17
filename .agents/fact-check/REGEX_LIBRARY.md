# Verified Regex Library (Astro/SyllabusHack)

このファイルは、本プロジェクトで動作が確認された「壊れない」正規表現を記録し、再利用を促すためのライブラリである。

## 1. フロントマター (Frontmatter)

### 抽出用
- **Pattern**: `^---\r?\n([\s\S]+?)\r?\n---`
- **Use Case**: マークダウンファイルから YAML 部分だけを抜き出す。

### 特定フィールドの置換
- **Pattern**: `(?m)^(lastmod:\s*).*$`
- **Replacement**: `$12026-03-20`
- **Note**: 行頭アンカー `^` とマルチラインモード `(?m)` を併用し、他行への影響を防ぐ。

## 2. 太字 (Bold) のルール適用

### HTML <strong> タグへの変換
- **Pattern**: `\*\*([^*]+)\*\*`
- **Replacement**: `<strong>$1</strong>`

## 3. リンクの検証

### `~/` エイリアス形式の検証
- **Pattern**: `image:\s*['"]?~\/data\/post\/([^\/]+)\/([^\/]+)\/(cover\.(png|jpg))['"]?`
- **Use Case**: 憲法の画像パスルールに違反していないかをチェック。

## 4. ファイル走査 (Node.js/Shell用)

### `index.md` または `index.mdx` の検索
- **Pattern**: `index\.mdx?$`
- **Note**: ファイルリストから記事本体だけをフィルタリングする。

---

## 5. Regex 実装のゴールデンルール
1.  **非強欲 (Lazy) マッチング**: `.*` ではなく `.*?` を使う。
2.  **エスケープ**: ドット `.`, スラッシュ `/`, ハイフン `-` などの特殊文字は常に `\` でエスケープする。
3.  **PowerShell注意**: シングルクォート内で正規表現を書くか、`[regex]::Escape()` を利用して、シェルによる勝手な解釈を防ぐ。

### 段落区切り漏れ（空行なしで連続する地の文）の検出（2026-10-17）
コードフェンス外で、地の文の行が空行なしで2行続く箇所を列挙する（Python）。
```python
import re,sys,io
s=io.open(sys.argv[1],encoding='utf-8').read(); body=s.split('\n---\n',1)[1]
prose=lambda t: bool(t.strip()) and not re.match(r'\s*(#|\||- |\* |\d+\. |<!--|```|---$)',t)
fence=False; L=body.split('\n')
for i,l in enumerate(L[:-1]):
    if l.strip().startswith('```'): fence=not fence; continue
    if not fence and prose(l) and prose(L[i+1]): print(i+1, l[:40])
```

### 改行コード（CRLF・混在）の検出と変換（2026-10-17）
```bash
# 検出（何も出なければOK）
git ls-files --eol | grep -E "w/(crlf|mixed)"
```
```python
# 変換（追跡ファイルのうち CRLF/混在のものだけ LF にする。バイナリは対象外）
import subprocess
out = subprocess.run(['git', 'ls-files', '--eol', '-z'], capture_output=True).stdout.decode('utf-8')
for rec in filter(None, out.split('\0')):
    meta, path = rec.split('\t', 1)
    if meta.split()[1] in ('w/crlf', 'w/mixed'):
        b = open(path, 'rb').read()
        open(path, 'wb').write(b.replace(b'\r\n', b'\n'))
```
