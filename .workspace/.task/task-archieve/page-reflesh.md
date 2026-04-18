徹底的にサイトを調査しました。`dist` のビルド結果、各コンポーネント、設定を横断的に解析した結果、**まだ相当な改善余地**があります。特にページスピードに直結する項目を、インパクトの大きい順に報告します。

---

## 🔥 クリティカル（即効性大）

### 1. クイズページのHTMLが肥大化 — **1.64MB** のHTML

`dist/app/it-passport-quiz/index.html` は **958KB**（圧縮前1.64MB）あります。原因は2つ:

**(A) `client:load` で巨大な `questions` 配列を props に serialize**

`1:48:src/data/post/app/it-passport-quiz/index.mdx`
```
<QuizApp client:load questions={allQuestions} examId="it-passport" examName="ITパスポート試験" />
```

Astro のアイランド hydration は props を `&quot;` 込みで HTML 属性に全量 serialize します。実測で `&quot;` が **52,320個** 出現、元 JSON は10KB ですが HTML 上では数百KBに膨張します。

**(B) 同じ `<QuizApp>` が 2 回レンダリングされている**

同じファイルの48行目と85行目で `<QuizApp client:load questions={allQuestions}>` を二重配置 → 膨張分もそのまま2倍に。

**修正案**:
```mdx
<!-- 方法1: client:only にしてJSONをpublic/dataから動的fetchに切替 -->
<QuizApp client:only="preact" examId="it-passport" examName="ITパスポート試験" />
```
- `genai-passport-quiz` ではすでに `client:only="preact"` が使われているのでノウハウはあります
- 共通の `useQuestions(examId)` フックを作り、クライアントで `fetch('/data/questions-it-passport.json')` する
- これで HTML は数KB 〜 数十KBになり、JSON は独立したキャッシュ可能アセットとして配信される

**更に二重配置を1箇所に統一**。どうしても記事下部にも置きたいならページ内アンカーリンクで十分。

この1本で **TTFB・LCP・TBT が劇的改善**。

---

### 2. ソースカバー画像が生 PNG 900KB+ × 39枚 — 源流から肥大化

`src/data/post/**/cover.{png,jpg}` のソース画像が **合計68MB**（PNG 39枚、JPG 96枚）。ワースト例:

```
src/data/post/method/notebooklm-100days-challenge-hack/cover.png 936 KB
src/data/post/trend/what-is-genai-passport-exam/cover.png        929 KB
src/data/post/career/itp-non-engineer-career-strategy/cover.png  919 KB
```

Astro の `<Image>` は WebP を生成しますが、**`<img src>` のフォールバックは元形式のまま**配信されます。古いブラウザ（WebP非対応は現在1%未満）向けに900KBのPNGがビルド物に残り、`dist/_astro` の205枚のPNG/JPG originalsが **78MB** を占有（全体80MBの **98%**）。

**修正案 (順番に効く)**:
1. `.workspace/scripts/Antigravity-nanobana/generate-image.js` を修正して初めから **JPG（quality 82）で生成**。16:9 / 1200×675 程度で十分（現在は巨大PNG）
2. 既存PNG 39枚を一括 JPG 変換（sharp使用）:
   ```bash
   # ワンショットスクリプト例
   for png in (各cover.png); do
     sharp input.png --quality 82 -o input.jpg
   done
   ```
   次にfrontmatter `cover.png` → `cover.jpg` 置換。**source側で60MB以上削減**できます
3. `theory/common-cover.png`（theoryカテゴリ共通）もJPG化するだけで `common-cover.*.png` の重複コピー（6種 × 各~900KB = 5.3MB）が消える

---

### 3. Partytown が「無効」なのに常にロードされている

`src/config.yaml` で `partytown: false`（GA4 用）に設定済みですが、`astro.config.ts` は:

```57:59:astro.config.ts
const hasExternalScripts = true;
const whenExternalScripts = (items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];
```

常に `true` で Partytown インテグレーションを登録しています。結果として全ページに **約3KBのインラインIIFE** が注入され、`dist/partytown/` に約92KB の SW/ワーカーが生成されています（使われない）。

**修正案**: `astro.config.ts` で Partytown を完全に削除（GA4 は `<script async>` 直挿しで十分）:

```ts
// 削除する
import partytown from '@astrojs/partytown';
const hasExternalScripts = true;
...whenExternalScripts(() => partytown({...}))
```

`package.json` からも `@astrojs/partytown` を依存削除可能。**ビルド時間も短縮**。

---

## ⚡ 高優先度

### 4. トップページのDailyQuiz — 10KBのJSONを全問送信

`1:19:src/components/widgets/DailyQuizSection.astro`
```astro
<DailyQuiz client:load questions={allQuestions} />
```

クライアントでは毎日1問しか使わないのに、全問（10KB）を serialize し **`client:load`**（即時 hydration）。

**修正案**（SSR で今日の1問だけ抽出 + 遅延hydrate）:

```astro
---
import allQuestionsRaw from '~/data/master/questions-it-passport.json';
const allQuestions = allQuestionsRaw as unknown as Question[];

const today = new Date();
const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
const todayQuestion = allQuestions[seed % allQuestions.length];
---
<DailyQuiz client:visible question={todayQuestion} />
```

- props が 10KB → 数百バイトに
- `client:load` → `client:visible` に変更でトップページの TBT 改善（ファーストビューには出ない場合）
- DailyQuiz 側も `questions[]` ではなく単一 `question` を受けるシグネチャに変更

---

### 5. 全クイズアプリが `client:load` — ページ表示直後に即 hydration

grep結果で `client:load` が **14箇所**。すべて記事ページ中盤〜下段にクイズがあるのに、ページ表示と同時にPreactバンドル（7〜40KB）をロード&実行。

**修正案**: `client:visible` へ変更（IntersectionObserverで実際にスクロール到達時にhydrate）。記事閲覧中にクイズを使わないユーザーの TBT / Speed Index が改善:

```diff
- <QuizApp client:load questions={allQuestions} .../>
+ <QuizApp client:visible questions={allQuestions} .../>
```

EssayGachaApp（40KB）, SyllabusParser（42KB）は特にインパクト大。

---

### 6. トップページの Concept 画像が Unsplash 外部依存

`95:99:src/pages/index.astro`
```astro
image={{
  src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?...&w=2070&q=80',
  alt: 'Concept Image',
}}
```

外部ドメインへの接続は DNS / TLS / TTFB が全部読者負担。しかも `w=2070` と巨大。

**修正案**: 画像をローカルに取り込み `~/assets/images/` へ配置 → Astro 自動最適化。または `<link rel="preconnect" href="https://images.unsplash.com">` を追加（次善策）。

---

### 7. Hero 画像に `fetchpriority="high"` が無い（LCP候補）

`83:92:src/components/widgets/Hero.astro`
```astro
<Image
  class="mx-auto rounded-md w-full"
  widths={[400, 768, 1024, 2040]}
  loading="eager"
  width={1024}
  height={576}
  {...image}
/>
```

`loading="eager"` はあるが、LCP には **`fetchpriority="high"`** が決定的。Chrome の LCP スコアが直接改善。

**修正案**:
```astro
<Image
  ...
  loading="eager"
  fetchpriority="high"  {/* 追加 */}
/>
```

さらに `widths={[400, 768, 1024, 2040]}` は過剰。ヒーロー実表示が `max-width: 1024px` なら `[400, 768, 1024, 1536]` 程度で十分（2040の大版は画像1枚で数十KB節約）。

---

## 🔧 中優先度

### 8. Inter フォント — 日本語サイトなのに Cyrillic/Greek/Vietnamese までロード

`dist/_astro/` に以下のフォントファイル（合計218KB）が存在:
```
inter-latin-ext-wght-normal      85KB
inter-latin-wght-normal          48KB  ← 必要
inter-cyrillic-ext-wght-normal   25KB  ← 不要
inter-greek-wght-normal          19KB  ← 不要
inter-cyrillic-wght-normal       18KB  ← 不要
inter-greek-ext-wght-normal      11KB  ← 不要
inter-vietnamese-wght-normal     10KB  ← 不要
```

`@fontsource-variable/inter` は全 subset を読み込み、`unicode-range` でブラウザが必要分のみ取得しますが、**CSSには全 subset の `@font-face` 定義が入る**ため無駄なパース処理が発生。また latin-ext 85KB は日本語サイトではほぼ不要（記号用）。

**修正案**:
```astro
---
// CustomStyles.astro
import '@fontsource-variable/inter/latin.css';  // latinのみ
---
```

さらに LCP 改善のため latin.woff2 をプリロード:
```astro
<link rel="preload" as="font" type="font/woff2" href="/_astro/inter-latin-wght-normal.Dx4kXJAl.woff2" crossorigin />
```
（ハッシュはビルドごとに変わるのでViteのasset manifestから動的に取得する形が理想）

---

### 9. テーマ適用スクリプトが二重実行

- `ApplyColorMode.astro`（head内、is:inline）
- `BasicScripts.astro` の初回実行部（body末尾、is:inline）

両方に `applyTheme` ロジックがあり、ページロードで `initTheme()` が2回走る。`BasicScripts.astro` 側を event handler 用のロジックだけに絞り、テーマ判定は `ApplyColorMode.astro` に一本化すべき:

`20:33:src/components/common/BasicScripts.astro`
```astro
  const initTheme = function () {
    if ((defaultTheme && defaultTheme.endsWith(':only')) || ...
```

→ この `initTheme` とその呼び出し、及び `astro:after-swap` 内の `initTheme()` を削除し、`ApplyColorMode.astro` 側を `astro:after-swap` でも動くようにする。

---

### 10. コードコピーボタンのJS — `<pre>` が無いページでも毎回実行

`160:202:src/components/blog/SinglePost.astro`
```astro
<script is:inline>
  document.addEventListener('DOMContentLoaded', () => {
    const codeBlocks = document.querySelectorAll('pre');
    codeBlocks.forEach((codeBlock) => { ... });
  });
</script>
```

記事に `<pre>` が1つもないページ（大半の記事）でも DOM走査が発生。しかも View Transitions で遷移すると `DOMContentLoaded` が再発火しないため **遷移後にコピーボタンが消える**バグもある。

**修正案**:
```astro
<script is:inline>
  function initCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre:not([data-copy-init])');
    if (!codeBlocks.length) return;
    codeBlocks.forEach((codeBlock) => {
      codeBlock.setAttribute('data-copy-init', '');
      /* ... */
    });
  }
  initCopyButtons();
  document.addEventListener('astro:page-load', initCopyButtons);
</script>
```

---

### 11. `astroAssetsOptimizer` の `inferSize: true` が不要なI/O

`226:236:src/utils/images-optimization.ts`
```ts
const result = await getImage({ src: image, width: w, inferSize: true, ...(format ? { format: format } : {}) });
```

`image` が `ImageMetadata`（Astro asset）ならすでに width/height を持っているので `inferSize` は不要。`image` が文字列の時だけ必要:

```ts
const needsInfer = typeof image === 'string';
const result = await getImage({ src: image, width: w, ...(needsInfer ? { inferSize: true } : {}), ...(format ? { format } : {}) });
```

ビルド時間短縮（画像1枚あたり数ms × 数百枚 = 秒単位）。

---

### 12. `widths` デフォルトが `deviceSizes`（最大6016px）

`42:58:src/utils/images-optimization.ts` の `config.deviceSizes` は最大 **6016px**。本サイトの最大表示幅は `max-w-7xl`（1280px）なのに、DPR 2x でも2560pxで足りる。6016px など誰も使わない解像度まで生成しています。

**修正案**: `deviceSizes` を `[640, 750, 828, 1080, 1280, 1920, 2560]` に縮小。ビルド時間&ストレージ削減。

---

## ✨ 低優先度（磨き上げ）

### 13. `<ClientRouter fallback="swap">` 使用中なのにデータ属性初期化の重複

View Transitions対応で `astro:after-swap` のハンドラは付いているが、**Observer や copy-button まで含めて毎回再初期化**している。`astro:page-load` イベント（より適切）に統一することでメモリリーク予防。

### 14. JSON-LD が毎ページインライン（重複ノイズ）

`Layout.astro` の `websiteJsonLd` は全ページで同一文字列だが、各HTMLに毎回埋め込まれる。静的サイト特性上これ自体は問題ないが、SinglePost側の `blogPostingJsonLd` と `breadcrumbJsonLd` も同様にインラインで、1記事あたり約1KB追加。気になるなら `astrojs/sitemap` と同じく共通オブジェクトをまとめる余地あり。

### 15. `astro-compress` で `Image: false, SVG: false`

`107:118:astro.config.ts`
```ts
compress({
  CSS: true,
  HTML: { ... },
  Image: false,   // ← 既にastro:assetsで最適化済みなのでOK
  JavaScript: true,
  SVG: false,     // ← 有効にすべき
  Logger: 1,
}),
```

ページ内のインラインSVG（tabler-icons）はそこそこあるので `SVG: true` にするとHTMLがさらに縮みます。

### 16. `icon({ include: { tabler: ['*'] }})` — 全アイコン許可

`82:96:astro.config.ts`
```ts
tabler: ['*'],
```

`astro-icon` v1 は使用したアイコンだけバンドルするためビルド済みサイズには影響しませんが、**ビルド時に全アイコン（5000+）のメタデータをロード**します。ビルド時間削減のため、実使用アイコンだけに絞るのが理想:

```ts
tabler: ['clock', 'user', 'rocket', 'device-laptop', 'device-mobile', 'brain', 'news', 'book', 'check', 'sun', 'moon', 'rss', 'chevron-down', 'brand-x'],
```

---

## 📊 想定インパクト

| 修正 | HTML/アセット削減 | LCP 改善 | TBT 改善 |
|------|------|------|------|
| #1 クイズpropsのclient:only化 & 二重QuizApp解消 | **-1.5MB/quiz-page** | 大 | 大 |
| #2 カバー画像 JPG 化 | **-60MB dist** | 中（カテゴリ一覧） | - |
| #3 Partytown削除 | -95KB + -3KB/page | 小 | 中 |
| #4 DailyQuiz SSR prune | -10KB/home | 中 | 中 |
| #5 client:visible化 | -20〜40KB初期JS | 中 | 大 |
| #7 fetchpriority=high | - | **大** | - |
| #8 Inter latin only | -130KB font CSS | 中 | 小 |

---

## 推奨実行順

1. **#1（クイズHTML削減）** — 最大ボトルネック。`/app/*` ページが現状ほぼ使い物にならないLCP/TBTを抱えている可能性
2. **#3（Partytown除去）** — 5分で終わる。純粋な無駄除去
3. **#7（fetchpriority=high）** — 5分。LCP直撃
4. **#5（client:visible一括置換）** — 機械的な置換で大きな効果
5. **#2（画像JPG化）** — バッチ処理で一括変換
6. **#4（DailyQuiz）、#8（フォント）、#9（テーマ二重）** — リファクタ

---

どれから着手しますか？優先度が高く、かつ実装工数が小さい **#1 + #3 + #7 をまとめて修正するPR** を作ることもできます。指示をいただければ実装に入ります。