# カテゴリ整合性チェック — 2026-06-18

> **2026-06-19: 残タスクは `.workspace/.task/TODO.md`「統合タスクリスト A」に集約済み。本ファイルは調査結果・分析資料として保持。**
> トリガー: `restructure-plan-2026-06.md` の Uncategorized 6件の再確認  
> 走査対象: `src/data/post/**/index.{md,mdx}` 全385ファイル  
> 検証方法: frontmatter `category` フィールド・フォルダパス・`knowledge.type` の突合

---

## サマリー

| 項目 | 結果 |
|------|------|
| **Uncategorized（category 未設定）** | **0件** — 2026-06-10対応の通り、解消済み |
| **不正カテゴリ値** | 0件（trend / method / career / app / theory のみ） |
| **フォルダと category の不一致** | **1件** — 要修正 |
| **同一スラッグの重複公開** | **1件** — 要整理 |
| **YAML パース不能（draft）** | 10件 — index スクリプト未計上、公開影響なし |
| **trend 内の theory 的性格記事** | 14件 — URL維持のまま `knowledge.type` で対応済み／未対応混在 |

**結論**: Uncategorized 問題は再発なし。改善が必要なのは **フォルダ不一致1件** と **プロンプトエンジニアリング重複2本** が最優先。restructure-plan の件数スナップショットは陳腐化しているため、下表に更新値を記載。

---

## 件数スナップショット（更新）

| カテゴリ | restructure-plan (6/9) | 本日 (6/18) 公開済み | 差分 | 評価 |
|--------|----------------------:|---------------------:|-----:|------|
| method | 107 | **115** | +8 | 過多・ハブ19本。個別記事との紐付け強化は継続課題 |
| theory | 86 | **93** | +7 | ITP偏重は継続。FE/AP/CCNA/G検定 theory は増加傾向 |
| trend | 61 | **82** | +21 | キーワード解説系の新規追加が主因。theory との役割分担要確認 |
| career | 44 | **54** | +10 | MOS・秘書検定・地域別など横展開で増加 |
| app | 23 | **22** | −1 | IPA系中心。他資格アプリは未着手 |
| draft | — | **9** | — | method 8 + app 1（いずれも未公開） |
| **Uncategorized** | 6 | **0** | −6 | ✅ 解消済み |

公開済み合計: **366件**（draft 9 + YAML不整合 draft 10 = 385ファイル）

---

## 課題A — Uncategorized 6件の再確認 ✅

2026-06-10 の対応記録どおり、当時の6件はすべて有効カテゴリが設定済み。

| スラッグ | パス | category | draft | 備考 |
|---------|------|----------|:-----:|------|
| syllabus-ver9-update | trend/ | trend | false | ✅ |
| article-outlines-feb | method/ | method | false | ROI計算記事に差し替え済み。slug は旧名のまま |
| freelance-fe-merit | career/ | career | false | ✅ |
| gateway-to-advanced | career/ | career | false | ✅ |
| essay-trainer-script | method/ | method | false | appId なし・src/apps/ 未登録のため **method のまま妥当** |
| fe-pseudo-language-trap | trend/ | trend | false | ✅ |

**新規 Uncategorized は 0件。**

---

## 課題B — 即修正が必要（2件）

### B-1. フォルダと category の不一致 【優先度: 高】

| 項目 | 値 |
|------|-----|
| パス | `src/data/post/career/itp-high-school-resume-hack/index.md` |
| フォルダ | `career` |
| frontmatter `category` | **`theory`** ← 不一致 |
| 内容 | 高校生向け履歴書ブースト（キャリア訴求が主） |
| `knowledge.type` | `method`（さらに不一致） |

**推奨対応（いずれか1つ）:**

1. **推奨**: `category: career` に修正し、`knowledge.type: career` に揃える（URL・フォルダはそのまま）
2. 理論寄りに整理するなら `theory/` へ移動 + 301リダイレクト（SEOリスクあり・非推奨）

### B-2. 同一スラッグの重複公開 【優先度: 高】 → ✅ 対応済み (2026-06-18)

<!-- trend/prompt-engineering-basics を削除し、theory 版に Few-shot・CoT・シラバス位置付けを統合。
     Netlify 301: /trend/prompt-engineering-basics → /theory/prompt-engineering-basics
     および旧URL /term/* → /theory/:splat
     内部リンク修正: ai-opt-out-policy, hallucination-ai-error -->

| スラッグ | パスA | パスB |
|---------|-------|-------|
| `prompt-engineering-basics` | `theory/prompt-engineering-basics/`（canonical） | ~~`trend/prompt-engineering-basics/`~~ 削除済み |

- theory 版: `category: theory`, `knowledge.type: term` — 用語解説フォーマット
- trend 版: `category: trend`, `knowledge.type: news` — 試験ポイント寄り

**推奨対応:**

- trend 版を **draft: true** にするか、theory 版へ `canonical` 相当の内部リンク集約
- 長期的には trend 版をリダイレクトまたは統合（カニバリゼーション回避）

---

## 課題C — 構造的改善（中優先度）

### C-1. trend と theory の混在（14件）

restructure-plan 課題Cで挙げた6件に加え、同様の「基礎知識・用語解説」が trend に残存。

| 状態 | 件数 | スラッグ例 |
|------|-----:|-----------|
| `knowledge.type: theory` 設定済み | 6 | agile-development, 5g-technology, multi-factor-authentication, cross-site-scripting, devops, web3-nft |
| `knowledge.type: news` のまま | 8 | dx-digital-transformation, explainable-ai-xai, mlops, ooda-loop, prompt-engineering-basics (trend), rag-ai-system, sql-injection-vulnerability, zero-trust-architecture |

**方針（restructure-plan 準拠）**: カテゴリ・URLは変更しない。未設定8件に `knowledge.type: theory` を追加し、フィルタ・関連記事実装時に活用。

### C-2. trend 新規キーワード記事群（17件）

`ai-opt-out-policy`, `gx-green-transformation`, `invoice-system` 等 — 内容は theory 寄りだが `category: trend` + `knowledge.type: news`。

- 現状は許容範囲（試験頻出ニュース枠）
- theory カテゴリへ移すと URL 変更になるため、**knowledge.type のみで区別**する現方針を維持

### C-3. method 内ハブ記事の過多（19本）

`*-hub` スラッグの method 記事が19本。restructure-plan の `knowledge.methodType` ラベル付与が未実施。

| タイプ（案） | 該当ハブ例 |
|-------------|-----------|
| 資格クラスター | itp-hub, fe-hub, ap-hub, mos-hub, boki-hub, takken-hub … |
| インフラ横断 | aws-hub, ccna-hub |
| 建設・電気系 | denken-hub, biru-kanri-hub, doboku-sekou-hub |
| サブハブ | fe-subject-b-ai-prompt-hub |

**推奨**: フロントマター `knowledge.methodType: hub` を追加（スキーマ拡張は別タスク）。

### C-4. app 記事の appId 未設定（18件）

公開中の app カテゴリ22件のうち、**appId ありは4件のみ**（sc-specialist-quiz, pm-essay-gacha, genai-passport-quiz, genai-ip-quiz）。

残り18件は MDX 内 `import QuizApp from '~/apps/...'` で紐付け。レジストリ連携・`/app-audit` 運用のため、順次 `appId` 追加を推奨（緊急度は低）。

### C-5. app 内の開発記事（5件）

`dev-story-*`, `dev-doc-*` が `category: app`。読者導線としては method または trend（開発ログ）の方が自然な可能性あり。現状は許容、大規模リファクタ時に再検討。

---

## 課題D — 技術的負債（低優先度）

### D-1. draft 記事の YAML 形式（10件）

`index-articles.js` が計上しない原因: frontmatter 先頭が `--- `（末尾スペース）で正規表現 `^---\r?\n` と不一致。

| スラッグ | フォルダ |
|---------|---------|
| gemini-explanation-template | method |
| gemini-memory-palace-hack | method |
| notebooklm-100-day-hack | method |
| notebooklm-100days-challenge-hack | method |
| notebooklm-anystudy | method |
| notebooklm-flashcard | method |
| notebooklm-mindmap | method |
| notebooklm-movie | method |
| notebooklm-podcast | method |
| notebooklm-quiz | method |

**推奨**: 公開前に `---` を正規化。`index-articles.js` の正規表現を `^---\s*\r?\n` に修正すると draft もインデックス可能。

### D-2. `.agents/category_rules.md` の陳腐化

スキルファイルは trend / method / career の3分類のみ記載。**theory と app が未定義**。エージェントが誤分類するリスクあり → スキル更新を推奨。

---

## アクション優先順位

| 優先度 | アクション | 工数 | 効果 |
|:-----:|-----------|:---:|:---:|
| **S** | `career/itp-high-school-resume-hack` の category を career に修正 | 極小 | サイト分類の信頼性 |
| **S** | ~~`prompt-engineering-basics` 重複の解消~~ | 小 | SEOカニバリゼーション防止 | ✅ 2026-06-18 |
| **A** | trend 8件に `knowledge.type: theory` 追加 | 小 | フィルタ基盤 |
| **B** | `index-articles.js` 正規表現修正 + category_rules.md 更新 | 小 | 運用精度 |
| **B** | app 記事への appId 順次追加 | 中 | アプリ監査運用 |
| **C** | restructure-plan スナップショット件数の更新 | 極小 | 計画書の正確性 |

---

## 検証コマンド（再実行用）

```bash
node .workspace/scripts/index-articles.js
# → .workspace/task-results/article-index.md

# category 未設定の検出（0件であること）
node -e "
import fs from 'fs'; import path from 'path'; import yaml from 'js-yaml';
const dir='src/data/post';
function walk(d,l=[]){for(const f of fs.readdirSync(d)){const p=path.join(d,f);if(fs.statSync(p).isDirectory())walk(p,l);else if(/index\\.mdx?$/.test(f))l.push(p);}return l;}
const bad=walk(dir).filter(f=>{const m=fs.readFileSync(f,'utf8').match(/^---\\s*\\r?\\n([\\s\\S]+?)\\r?\\n---/);if(!m)return true;try{return!yaml.load(m[1]).category;}catch{return true;}});
console.log('missing category:', bad.length, bad.map(f=>f.replace(/\\\\/g,'/')));
"
```

---

*Generated: 2026-06-18 | 次回チェック推奨: 大規模記事追加後 or 月次*
