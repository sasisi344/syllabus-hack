# Task Management

> 基本方針: **「生成AI × 資格試験」** を軸に外れない。ロングテール・長文・AI検索対応を3本柱にする。

---

## Phase 1 — コンテンツ統合完成（今週中）

### AIモデル別 統合ガイド — 残タスク

> 詳細マップ: `.workspace/task-results/model-consolidation-map.md`
> タグルール更新済み: `.agents/tag_rules.md` § 4

- [x] **NotebookLM 2本体制で作成完了**
  - `method/notebooklm-features-guide` — 単独活用ガイド
  - `method/notebooklm-ai-workflow-guide` — ChatGPT/Gemini/Claude組み合わせガイド
- [x] **ChatGPT 完全ガイド作成**
  - `method/chatgpt-cert-complete` — 試験別プロンプト集（ITP/FE/AP/高度試験）・週単位設計・FAQ 5項目
- [x] **Gemini 完全ガイド作成**（2026-06-03）
  - `method/gemini-cert-complete` — 試験別プロンプト集（ITP/FE/AP）・記憶の宮殿ハック・自作問題ジェネレーター・FAQ5項目
- [x] **統合元記事を draft: true + 301リダイレクト設定**（2026-06-03）
  - Gemini 3本 + NotebookLM 10本 → draft: true
  - astro.config.ts redirects に全13本分のエントリを追加

---

## Phase 2 — ハブ長文化 & FAQ追加（翌週）

> 背景: ニッチKWの検索数が少ない → 1記事に複数クエリを盛り込んだ6000文字級コンテンツで競合を上回る。AI検索引用率も長文・構造化で上がる。

- [x] **既存ハブページを6000文字超に拡張**（2026-06-03）
  - `method/itp-hub` — 分野別頻出パターン分析・20時間学習プロンプト5フェーズ・過去問傾向 追加（21,709B）
  - `method/fe-hub` — 科目B頻出アルゴリズム7パターン・過去問傾向 追加（17,051B）
  - `method/ap-hub` — 午後11分野採点傾向表・記述答案の型と頻出ミスTOP5 追加（18,635B）
- [x] **主要記事に FAQ セクション追加**（2026-06-03）
  - itp-hub: FAQ 5問・fe-hub: FAQ 5問・ap-hub: FAQ 5問・aws-hub: FAQ 4問・fp-hub: FAQ 4問

---

## Phase 3 — AIO（AI検索）最適化 & 内部リンク強化

- [x] **FAQ 構造化データ（Schema.org）の実装**（2026-06-03）
  - `content/config.ts` に `faqs` スキーマ追加
  - `types.d.ts` / `blog.ts` / `SinglePost.astro` を更新し FAQPage JSON-LD を自動生成
  - 5ハブ記事のフロントマターに `faqs` フィールドを追加（各4〜5問）
- [x] **セクション別アンカーリンク強化**（2026-06-03）
  - Astro の rehype が H2 に id を自動付与することを確認（対応済み）
  - アンカー対応のスクロールマージン（scroll-mt-[80px]）が設定済みのため追加対応不要
- [x] **theory カテゴリ記事からハブへのバックリンク整備**（2026-06-03）
  - `binary-hexadecimal-basics` → itp-hub + fe-hub
  - `bcm-bcp-business-continuity` → itp-hub
  - `osi-reference-model` → fe-hub
  - `tcp-ip-protocol-suite` → fe-hub
  - `balanced-scorecard` → itp-hub（既存リンク節に追加）
  - `agile-scrum-basics` → itp-hub + fe-hub（既存リンク節に追加）

---

## Phase 4 — SEO・技術基盤整備

- [x] **サイトマップの priority 設定最適化**（2026-06-03）
  - `-hub` 系スラグ → priority 1.0 / changefreq weekly
  - `-complete` / `-guide` / `-roadmap` 系 → priority 0.8 / monthly
  - 通常記事 → priority 0.5 / monthly（デフォルト）
- [x] **Core Web Vitals 最適化**（2026-06-03）
  - `SinglePost.astro` ヒーロー画像に `fetchpriority="high"` を追加（LCP改善）
  - 一覧画像は `loading="lazy"` 設定済みを確認
  - 画像に `width={900} height={506}` 明示済みで CLS は問題なし
  - GSC での LCP/CLS/INP 実数値確認はユーザー側で実施
- [x] **canonical URL の整合性確認**（2026-06-03）
  - `Metadata.astro` が `getCanonical(Astro.url.pathname)` で自動設定済みを確認
  - draft: true の記事はページ非生成のため重複 canonical 問題なし

---

## Phase 5 — コンテンツ量産（短記事リライト & 新ハブ）

- [x] **短記事リライト優先度付け & 最優先記事の拡張**（2026-06-03）
  - 優先度リスト → `.workspace/task-results/rewrite-priority.md` に保存
  - `method/cbt-2026-syllabus-complete-guide` を 5,107B → 拡張（CBTスケジュール表・タイピング対策・よくある誤解・FAQ追加）
  - 残リライト（agent-teacher / fp2-jitsuki-comparison / ccna-vs-aws-saa 等）は Phase 5 継続タスク
- [x] **セキュマネ・高度試験ハブページ群**（2026-06-03）
  - `method/sg-hub/` 作成 — SG概要・学習アプローチ・9記事インデックス・FAQ5問
  - `method/advanced-ipa-hub/` 作成 — SC/NW/PM/DB/ST/SA 分野別マップ・12記事インデックス・FAQ5問

---

## Phase 6 — 機能開発 & SNS継続タスク

- [x] **重複実装の集約**（2026-06-03）
  - `src/apps/shared/BaseQuizApp.tsx` を新規作成（lazy loading・mock test・clipboard・scenario 全機能統合）
  - `ap-quiz/QuizApp.tsx` → BaseQuizApp への薄いラッパーに置き換え（mock test 設定を注入）
  - `it-passport-quiz/QuizApp.tsx` → BaseQuizApp への薄いラッパーに置き換え
- [x] **インプレッション・インデックス状況の定点観測**（2026-06-03）
  - `.workspace/tasks/sns-strategy.md` の定点観測表に W23 エントリ追加
  - GSC 実数値確認はユーザー側で実施（毎週確認推奨）

---

## Phase 7 — 将来タスク（優先度低）

- [ ] **秘書検定 × マルチワーク・フリーランス活用記事**（career）
- [ ] **地域特性に合わせたキャリア戦略のリライト**
  - 都道府県別年収データと資格の相関可視化記事
- [ ] **タグページのインデックス解禁**（主要タグのみ段階的に）
- [ ] **ユーザーのlocaleから地域を自動判別しハックをサジェストする機能**

---

<!--
## ✅ 完了済みタスク（参照用）

### draft記事の公開（2026-05-31）
- [x] `method/ccna-ai-hack/` → draft: false・カバー画像確認
- [x] `trend/fp2-cbt-strategy/` → draft: false・カバー画像確認
- [x] `method/mos-ai-shortcut/` → draft: false・カバー画像確認
- [x] `trend/ds-kentei/` → draft: false
- [x] `trend/e-shikaku/` → draft: false

### ITパスポートクラスター（2026-05-31）
- [x] `method/itp-hub/index.md` 作成（65記事インデックス・ロードマップ・AI対話プロンプト）
- [x] 主要サテライト記事9本にハブへのバックリンク追加

### glossary / strategy カテゴリ整理（2026-05-31）
- [x] `term/` 41記事 → `theory/` に移動・category: theory に更新
- [x] `strategy/` 15記事 → method 2本 / theory 13本 に振り分け
- [x] `/category/glossary/` → `/category/theory/`、`/category/strategy/` → `/category/theory/` 301リダイレクト設定
- [x] 移行後の残件56本（category フィールドが旧値のまま）を修正

### AWS / CCNA クラスター（2026-05-31）
- [x] `method/ccna-fail-comeback` — 落ちた人の3ヶ月リベンジ手順（PASONA）
- [x] `method/ccna-liberal-arts-roadmap` — 文系・未経験の6ヶ月ロードマップ（BEAF）
- [x] `trend/lpic-ccna-aws-order` — LPIC→CCNA→AWS取得順番（QUEST）
- [x] `method/aws-saa-beginner-reality` — 未経験からの現実と最短手順（PASONA）
- [x] `trend/ccna-vs-aws-saa` — どちらを先に取るべきか（比較）
- [x] `method/aws-hub/` ハブページ作成（カバー画像生成済み）

### FP2級クラスター（2026-05-31）
- [x] `trend/fp2-jitsuki-comparison` — きんざいvs日本FP協会（QUEST）
- [x] `method/fp2-3month-plan` — 社会人3ヶ月プラン（BEAF）
- [x] `method/fp-hub/` ハブページ作成（カバー画像生成済み）

### SEO基盤（2026-05-31）
- [x] publishDate タイムゾーン統一（全345記事対象）
- [x] `.agents/post_writer.md` / `CLAUDE.md` ルールをISO形式必須に更新

### ハブページ群（2026-05-31）
- [x] `method/fe-hub/index.md` — 基本情報技術者（33本インデックス・9本バックリンク）
- [x] `method/ap-hub/index.md` — 応用情報技術者（30本インデックス・8本バックリンク）

### E-E-A-T 強化（2026-05-31）
- [x] Aboutページ: 専門性セクション新設・AI対話学習思想を前面に・プロフィール実態に沿った記述に修正
- [x] ハブ3本（itp / fe / ap）に IPA 公式統計データを出典付きで追加

### MOS クラスター（2026-05-31）
- [x] `method/mos-excel-expert-difficulty` — AI時代のExcel知識価値（Cowork角度）
- [x] `trend/mos-vs-itp-job-hunting` — 「両方取れるなら取ったほうがいい」結論へ修正

### 機能開発 / インフラ（2026-05-31）
- [x] appRegistry 監査 → `.workspace/task-results/app-registry-audit.md`
- [x] SNS投稿フロー → `.workspace/tasks/sns-strategy.md`

### 過去の完了済みタスク

#### 機能開発
- [x] 高度試験向け専門用語フラッシュカード統合（AP/NW/SC デッキ追加）

#### IPA以外カテゴリ開拓
- [x] DS検定・FP2級・MOS・CCNA 記事作成

#### コンテンツ品質改善（2026-05-30）
- [x] ITパスポート記事統合（9本→4本）
- [x] 全公開記事 1500文字以上達成（301件・平均2622文字）
- [x] トラフィック改善施策・クラスター構築計画作成
-->
