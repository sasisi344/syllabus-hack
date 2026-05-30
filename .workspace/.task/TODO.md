# Task Management

---

## 🔥 優先度高（今すぐ着手）

### 1. draft記事の公開（即実行・工数小）

- [ ] `src/data/post/method/ccna-ai-hack/` → `draft: false` に変更・カバー画像確認
- [ ] `src/data/post/trend/fp2-cbt-strategy/` → `draft: false` に変更・カバー画像確認
- [ ] `src/data/post/method/mos-ai-shortcut/` → `draft: false` に変更・カバー画像確認
- [ ] `src/data/post/trend/ds-kentei/` → `draft: false` に変更
- [ ] `src/data/post/trend/e-shikaku/` → `draft: false` に変更

### 2. ITパスポートハブページ作成（最優先SEO施策）

- [ ] `src/data/post/method/itp-hub/index.md` を作成
  - 65記事を method / trend / career / app / theory 別に一覧化
  - 推奨学習ロードマップを記述
  - 詳細: `.workspace/.task/next-task.md` フェーズ1参照
- [ ] 主要サテライト記事10本にハブへのバックリンクを追加

### 3. glossary / strategy カテゴリの整理（技術的負債）

- [ ] `glossary` 41記事 → `theory` に統合（frontmatterのcategory変更）
- [ ] `strategy` 15記事 → 内容に応じて `method` / `trend` / `theory` に振り分け
- [ ] 旧カテゴリURLに301リダイレクト設定（`astro.config.ts`）

### 4. AWS / CCNA クラスター形成（新ジャンル最優先）

- [ ] 追加KW記事を5本作成してクラスター化
  - 「CCNA 独学 落ちた 対策」(method/PASONA)
  - 「CCNA 文系 未経験 合格 ロードマップ」(method/BEAF)
  - 「LPIC CCNA AWS 取得順番 インフラエンジニア」(trend/QUEST)
  - 「AWS SAA 未経験 本当に取れるか」(method/PASONA)
  - 「CCNA vs AWS SAA どっちを先に取るべきか」(trend/BEAF)
- [ ] `src/data/post/method/aws-hub/` ハブページ作成（next-task フェーズ6）

### 5. FP2級クラスター形成

- [ ] 追加KW記事を2〜3本作成
  - 「FP2級 実技 きんざい vs 日本FP協会 どちらが簡単か」(trend)
  - 「FP2級 勉強時間 社会人 3ヶ月プラン」(method)
- [ ] `src/data/post/method/fp-hub/` ハブページ作成（next-task フェーズ6）

---

## 📋 優先度中（1〜2ヶ月以内）

### SEO基盤

- [ ] **publishDate タイムゾーン統一**
  - `2026-04-01` 形式 → `2026-04-01T00:00:00Z` 形式に一括変換スクリプト作成・実行
  - 対象: 約200記事（traffic-improvement-plan A-3参照）

- [ ] **基本情報技術者ハブページ作成**（next-task フェーズ2）
  - `src/data/post/method/fe-hub/index.md`

- [ ] **応用情報技術者ハブページ作成**（next-task フェーズ3）
  - `src/data/post/method/ap-hub/index.md`

- [ ] **E-E-A-T 強化**
  - Aboutページの専門性・合格実績を充実させる
  - 主要記事にIPAやきんざい等の外部公式データ引用を追加

- [ ] **MOS クラスター追加記事**（現在1本→3本体制に）
  - 「MOS Excel エキスパート 独学 難しすぎる」(method)
  - 「MOS vs ITパスポート 就活でどちらが有利か」(trend)

### 機能開発

- [ ] **重複実装の集約**: `ap-quiz/QuizApp.tsx` と `it-passport-quiz/QuizApp.tsx` を共通 `BaseQuizApp` に抽出
- [ ] **レジストリと実装の対応表**: `appRegistry` にあるが `src/apps/{slug}/` が無いスラッグを一覧化

---

## 📢 SNS戦略 & インデックス促進（継続タスク）

- [ ] **X(Twitter)での定期投稿フロー構築**
  - 既存記事（古い順）のピックアップリスト作成
  - 投稿テンプレート作成（`.workspace/tasks/sns-strategy.md`）
- [ ] **インプレッション・インデックス状況の定点観測**
  - Google Search Console で週次チェック
  - インデックス済み記事数の推移を記録

---

## 📍 優先度低（将来タスク）

- [ ] **セキュマネ・高度試験ハブページ群**（next-task フェーズ4〜5）
- [ ] **秘書検定 × マルチワーク・フリーランス活用記事**（career）
- [ ] **地域特性に合わせたキャリア戦略のリライト**
  - 都道府県別年収データと資格の相関可視化記事
- [ ] **タグページのインデックス解禁**（主要タグのみ段階的に）
- [ ] ユーザーのlocateから地域を自動判別しハックをサジェストする機能

---

<!--
## ✅ 完了済みタスク（参照用）

### 機能開発
- [x] 高度試験向け専門用語フラッシュカード統合（AP/NW/SC デッキ追加）
  - AP重要用語49語・NW13語・SC34語をflashcard-appに追加

### IPA以外カテゴリ開拓
- [x] DS検定記事 → `src/data/post/trend/ds-kentei/`（2026-05-06公開）
- [x] KWリサーチ完了（MOS/FP2/秘書検定/AWS-CCNA）→ `.workspace/.task/research-kw-non-ipa.md`
- [x] CCNA記事作成 → `src/data/post/method/ccna-ai-hack/`（draft）
- [x] FP2級記事作成 → `src/data/post/trend/fp2-cbt-strategy/`（draft）
- [x] MOS記事作成 → `src/data/post/method/mos-ai-shortcut/`（draft）

### コンテンツ品質改善（2026-05-30）
- [x] ITパスポート記事統合（9本→4本）: スマホ学習・NotebookLM・氏名変更・直前対策
- [x] 廃止5記事にdraft:true + 301リダイレクト設定（astro.config.ts）
- [x] 全公開記事 1500文字以上達成（301件・平均2622文字）
- [x] トラフィック改善施策リスト作成 → `.workspace/.task/traffic-improvement-plan.md`
- [x] 試験別トピッククラスター構築計画 → `.workspace/.task/next-task.md`
- [x] ITパスポート統合計画作成・実行 → `.workspace/.task/itp-consolidation-plan.md`
-->
