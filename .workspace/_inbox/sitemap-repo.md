# GSC サイトマップ不具合 — 改善記録

**日付**: 2026-05-02  
**症状**: `sitemap-index.xml` は GSC に取得されるが、子サイトマップ `sitemap-0.xml` が取得されず URL 検出ゼロ  
**ステータス**: 修正済み・正常取得を確認

---

## 根本原因

`@astrojs/sitemap` は `astro:config:setup` フックの時点で `config.site` を参照する。  
しかし `site` URL を設定していた `astrowind` vendor integration は `integrations` 配列の**最後**に配置されていたため、Netlify の CI ビルドでは `site = undefined` のまま sitemap が生成され、子サイトマップの URL が不正（または空）になっていた。

ローカルビルドでは偶然動いていたため（`dist/` キャッシュ or Astro の config オブジェクト参照挙動）、問題に気づきにくかった。

---

## 修正内容

### 1. `astro.config.ts` — `site` を `defineConfig` に明示

```diff
 export default defineConfig({
   output: 'static',
+  site: 'https://syllabushack.com',
```

**理由**: sitemap integration がビルド開始時から正しい `site` URL を参照できるよう保証する。`astrowind` の `updateConfig` に依存しない。

---

### 2. `netlify.toml` — ビルドコマンドと XML ヘッダー

```diff
 [build]
-  command = "npm run build"
+  command = "pnpm run build"

+[[headers]]
+  for = "/sitemap*.xml"
+  [headers.values]
+    Content-Type = "application/xml; charset=utf-8"
+    Cache-Control = "public, max-age=3600"
```

**理由**: pnpm プロジェクトを npm でビルドすると依存解決がズレる可能性がある。XML ヘッダーを明示することで Googlebot が正しい Content-Type を受け取れる。

---

### 3. `public/_headers` — XML ヘッダーを追加

```diff
+/sitemap*.xml
+  Content-Type: application/xml; charset=utf-8
+  Cache-Control: public, max-age=3600
```

**理由**: `netlify.toml` と `_headers` の両方に設定することで Netlify の処理フロー上での漏れを防ぐ。

---

## 確認手順（次回のためのワークフロー）

```
1. 症状確認
   GSC → サイトマップ → sitemap-index.xml をクリック
   → 子サイトマップの「ステータス」列を確認
   → 「取得できませんでした」または URL 数 0 なら技術問題

2. ローカルビルドで検証
   pnpm run build
   → dist/sitemap-0.xml の先頭を確認（<?xml で始まるか）
   → PowerShell で URL 数を確認:
     $c = [IO.File]::ReadAllText('dist/sitemap-0.xml')
     ([regex]::Matches($c, '<loc>')).Count

3. チェックリスト
   [ ] astro.config.ts に site プロパティが明示されているか
   [ ] netlify.toml のビルドコマンドが pnpm run build か
   [ ] /sitemap*.xml に Content-Type ヘッダーが設定されているか
   [ ] robots.txt に Sitemap: https://syllabushack.com/sitemap-index.xml があるか

4. デプロイ後の確認
   - Netlify ダッシュボードでビルドログを確認（sitemap 生成ログ）
   - GSC → サイトマップ → 対象を選択 → 「再送信」
   - 数時間〜1日後に取得ステータスを再確認
```

---

## 教訓

- `@astrojs/sitemap` の `site` は `defineConfig` に直接書く（vendor integration の `updateConfig` に頼らない）
- Netlify のビルドコマンドはプロジェクトのパッケージマネージャーと一致させる
- XML ファイルの Content-Type は Netlify のデフォルト任せにしない
