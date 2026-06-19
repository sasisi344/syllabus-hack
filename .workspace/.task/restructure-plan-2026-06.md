# Syllabus Hack 再構成素案 — 日本一の資格紹介サイトへ
> 作成日: 2026-06-09 | 現状記事数: 327件
> **2026-06-19: 実行管理は `.workspace/.task/TODO.md`（統合タスクリスト）/ `priority-roadmap-todo.md` に集約済み。本ファイルは戦略方針・分析の原本として保持。**

---

## 現状スナップショット

| カテゴリ | 件数 | 評価 |
|--------|----:|------|
| method | 107 | 過多・分散。ハブ記事で整理済みだが個別記事との紐付けが弱い |
| theory | 86 | ITパスポートレベルに偏り。FE/AP理論が薄い |
| trend | 61 | 試験情報とキーワード解説が混在 |
| career | 44 | ペルソナ別の深掘りが不足 |
| app | 23 | 強み。IPA系は充実、他資格はゼロ |
| Uncategorized | 6 | 即修正が必要 |

### 既存ハブ記事

ITP・FE・AP・SG・高度試験・AWS+CCNA・FP2 の7クラスターはハブ記事あり。
MOS・DS検定・E資格・G検定はハブなし。簿記・宅建・TOEICはほぼ未着手。

---

## 戦略方針

### なぜ「日本一」を狙えるか

他の資格サイトとの差別化軸は **「AI×シラバス」の実装深度**。
単なる試験情報サイトではなく、**AIを使った学習設計ができる唯一のサイト**というポジションを確立する。

### 3つの柱

```
柱1: IPAクラスター深化     → 既存資産の再設計で国内最深の試験攻略メディアへ
柱2: 横展開資格クラスター追加 → 簿記・宅建・TOEICへのAIハック展開で訪問者層を拡大
柱3: ペルソナ別ルート設計   → 「あなたはどれを取るべきか」の意思決定支援コンテンツ
```

---

## ~~課題A — 即修正: Uncategorized 6件~~ → ✅ 対応済み (2026-06-10確認)

<!-- 確認結果: 全375記事を走査し category フィールドを検証。
     6件すべて既に有効なカテゴリ（trend/method/career）が設定済み・draft: false。
     - trend/syllabus-ver9-update → category: trend ✅
     - method/article-outlines-feb → category: method ✅（実体はROI計算記事に書き換え済み、読者向けコンテンツとして妥当）
     - career/freelance-fe-merit → category: career ✅
     - career/gateway-to-advanced → category: career ✅
     - method/essay-trainer-script → category: method ✅（appIdなし・対応するsrc/apps/エントリも無いため
       'app'への変更は不要。Pythonスクリプト紹介のmethod記事として妥当）
     - trend/fe-pseudo-language-trap → category: trend ✅
     対応済みのため、本リストは過去の実施記録として残す。 -->

| 記事 | 現状 | 修正後カテゴリ | ファイルパス |
|-----|------|------------|-----------|
| 基本情報シラバスVer.9.0緊急解説 | Uncategorized | trend | `trend/syllabus-ver9-update/index.md` |
| Article Outlines February | Uncategorized | **draft移動 or 削除**（読者向けコンテンツでない） | `method/article-outlines-feb/index.md` |
| フリーランスエンジニアこそ基本情報を取り直すべき | Uncategorized | career | `career/freelance-fe-merit/index.md` |
| 高度試験への登竜門 | Uncategorized | career | `career/gateway-to-advanced/index.md` |
| 論文トレーナースクリプトを作りました | Uncategorized | app | `method/essay-trainer-script/index.md` |
| 科目BのアルゴリズムはPythonで学ぶな | Uncategorized | trend | `trend/fe-pseudo-language-trap/index.md` |

---

## 課題B — コンテンツクラスター設計（現状 vs 理想）

各資格クラスターに必要な記事の型は5種類。現状の充足率を評価する。

### ◎ = 充足 / ○ = あり（薄い） / △ = 不足 / × = 未着手 / 🆕 = 今回追加

| 資格 | Hub記事 | Theory | Method | Career | App |
|-----|:------:|:------:|:------:|:------:|:---:|
| ITパスポート | ◎ | ◎ | ◎ | ○ | ◎ |
| 基本情報(FE) | ◎ | ○🆕 | ◎ | ○ | ◎ |
| 応用情報(AP) | ◎ | ○🆕 | ◎ | ○ | ◎ |
| SG | ◎ | × | ○ | ○ | ◎ |
| 高度試験(SC/NW/PM等) | ◎ | × | ○ | △ | ○ |
| AWS SAA | ○ | × | ○ | △ | × |
| CCNA | ◎🆕 | ○🆕 | ○ | ○🆕 | × |
| FP2級 | ◎ | × | ○ | × | × |
| MOS | ○🆕 | × | ○ | ◎🆕 | × |
| **秘書検定** | × | × | ○🆕 | ◎🆕 | × |
| DS検定 | ◎🆕 | ○🆕 | × | ○🆕 | × |
| G検定/E資格 | ◎🆕 | ○🆕 | × | ○🆕 | × |
| **日商簿記** | ○🆕 | × | × | × | × |
| **宅建** | × | × | × | × | × |
| **TOEIC** | × | × | × | × | × |

> 2026-06-09 追加: FE theory×2（data-structures-basics, algorithm-search-sort）/ AP theory×1（database-normalization）/ MOS hub / 日商簿記 hub
> 2026-06-10 追加: MOS career×3（mos-freelance-haken-reality, mos-instructor-school-path, mos-back-office-expert-independence）/ 秘書検定 trend×1（secretarial-why-bosses-recommend）・method×1（secretarial-cost-time-knowledge）・career×1（secretarial-career-up-effect、既存secretarial-exam-multiwork-freelanceと合わせてcareer 2本）
> 2026-06-18 追加: 横展開資格のKW→examIdナレッジDB — インデックス [cert-keyword-db/index.md](../data-set/cert-keyword-db/index.md) / スキル [.agents/cert_keyword_db.md](../../.agents/cert_keyword_db.md)（対象: 宅建・簿記・MOS・FP・AWS・TOEIC）

---

## 優先ロードマップ（6〜9月）

### Phase 1（6月中: 基盤整備）

**目標**: サイトの信頼性・回遊性の底上げ

1. **Uncategorized 6件のカテゴリ修正**（即実施）
2. **IPA理論ページのFE/AP拡張**
   - FE向けtheory: アルゴリズム・データ構造・OS制御・ネットワーク基礎（各単体キーワード）
   - AP向けtheory: DBスキーマ設計・セキュリティプロトコル詳解・プロジェクト計画立案
3. **既存Hub記事のリンク強化**
   - itp-hub / fe-hub / ap-hub → 配下の記事をすべてリンクに追加
   - hub記事に「このページの使い方（初心者／中級者ルート）」セクション追加

### Phase 2（7月: 横展開第1弾 — 需要大 × AI展開しやすい）

**目標**: 検索流入の拡大。IPA以外のユーザーを取り込む

| 優先度 | 資格 | 理由 | 必要記事 |
|-------|------|------|---------|
| S | **日商簿記2・3級** | 年受験者100万人超。AIで仕訳暗記ハック記事が差別化になる | Hub + Method×2 + Career×1 |
| S | **MOS** | ITパスポートからの自然な次ステップ。MOS hubが未存在 | Hub + Theory×3 + Method×2 |
| A | **G検定** | AI資格ブームで需要急増。サイトブランドと相性◎ | Hub + Method×2 + Trend×1 |
| A | **宅建** | 受験者22万人。法律×AIメモリーハック記事で差別化 | Hub + Method×2 |
| B | **TOEIC** | 受験者多いが競合激戦区。AI音声活用角度に絞る | Hub + Method×1 |

### Phase 3（8〜9月: 横展開第2弾 + Career強化）

**目標**: キャリア訴求の強化。資格→転職・年収の導線設計

1. **Career記事の拡充**（現在44件 → 目標70件）
   - 職種別（SE / 事務職 / 営業 / 教員 / 医療系）× 資格推奨マトリクス
   - 年齢別（20代 / 30代 / 40代以上）の資格選択ガイド
   - 「資格手当の実態データ」系記事（独自調査風コンテンツ）
2. **資格比較記事群の整備**
   - 現状: MOS vs ITP、CCNA vs AWS SAAのみ
   - 追加: 簿記2級 vs FP2級 / ITパスポート vs G検定 / 宅建 vs 行政書士 / AP vs AWS SAA
3. **ペルソナ別ランディング記事**
   - 「文系大学生が1年で取れるIT資格ロードマップ」
   - 「事務職が30代で年収アップするための資格4選」
   - 「エンジニア未経験が転職に使えるIT資格ランキング」

---

## 課題C — 既存記事のカテゴリ整合性

### ~~trend と theory の混在問題~~ → ✅ 対応済み (2026-06-10)

<!-- 対応結果: category（trend）・URLは変更せず、6記事すべての knowledge.type を
     'news' → 'theory' に変更。'theory' は src/content/config.ts の knowledge.type enum に
     既存（theory/algorithm-search-sort 等で使用済み）のため schema バリデーション通過確認済み。
     lastmod も2026-06-10に更新。

     現状 knowledge.type は src/utils/blog.ts と [...page].astro で 'app' 判定にのみ使用されており、
     'theory' フィルタの実装はまだ無い。今後 theory 系の横断一覧・関連記事レコメンドを
     実装する際にこのフラグを活用できる（実装は別タスク）。 -->

trend に入っている以下はtheory的性格が強い。再分類または note 追加を検討。

- `trend/agile-development` → theory（変化しない基礎知識）
- `trend/5g-technology` → theory
- `trend/multi-factor-authentication` → theory
- `trend/cross-site-scripting` → theory
- `trend/devops` → theory
- `trend/web3-nft` → theory

**方針**: カテゴリ変更はURLが変わるためSEOリスクあり。**カテゴリは変えず**、フロントマターに `knowledge.type: theory` を追加してフィルタリングで対応する。

### method 内の「役割分散」問題

107件のmethod記事は以下の4タイプが混在している。ハブ記事からのアクセス動線を整理する際に分類ラベルを付与しておくと整理しやすい（フロントマター `knowledge.methodType` 追加案）。

| タイプ | 例 | 件数（概算） |
|-------|-----|----------:|
| ロードマップ系 | itp-hub、fe-hub | 〜15 |
| AIツール活用系 | chatgpt-cert-complete, notebooklm-* | 〜25 |
| 試験テクニック系 | cbt-exam-tactics, calc-problem-abandon-strategy | 〜30 |
| メンタル・習慣系 | mental-hack-20h-marathon, sleep-skill-learning-efficiency | 〜15 |
| 事務ハック系 | itp-receipt-name-change-hack, itp-name-change-marriage-hack | 〜5 |
| 高度試験メソッド系 | sc-timeline-hack, pm-pm2-module-hack | 〜17 |

---

## 課題D — App クラスターの戦略的拡張

現状のapp (23件) はIPA系に特化。「日本一」を名乗るには他資格にもアプリを展開すべき。

### 優先アプリ追加案

| アプリ案 | 対象資格 | 価値 |
|--------|--------|------|
| 日商簿記3級 仕訳ドリル | 簿記3級 | 年受験者数最多クラス。差別化しやすい |
| G検定 模擬試験シミュレーター | G検定 | AI資格ブームの追い風あり |
| 宅建 権利関係 一問一答 | 宅建 | 法律系難問をフラッシュカードで攻略 |
| FP2級 計算問題ドリル | FP2級 | 既存hub記事との相乗効果 |

---

## 課題E — SEO構造の整備

### 内部リンクのハブ化（現状の問題）→ ✅ 対応済み (2026-06-10)

<!-- 対応結果: itp-hub / fe-hub / ap-hub の3クラスターについて、ハブへの逆リンクが
     欠けていたスポーク記事35件（it-passport-to-ap-roadmapはitp-hub/ap-hub両方）に
     既存の確立済みフォーマットでバックリンクを追記。
       > この記事は [{ハブ記事タイトル}](/{hub-slug}/) の一部です。
     を、ファイル末尾（まとめの後）に `---` 区切りで追加。lastmodも2026-06-10に更新。
     pnpm build で1265ページのビルド成功を確認済み。

     内訳:
     - itp-hub: 18件 (it-passport-study-route-comparison, ip-discard-strategy,
       notebooklm-ip-study-hack, ip-strategy-ai-hack, cbt-exam-tactics,
       it-passport-syllabus-genai-update, genai-passport-vs-it-passport,
       cbt-exam-venue-booking-tips, cost-effective-certification-path-2025,
       generative-ai-certification-worth, it-passport-to-ap-roadmap,
       reskilling-success-story-it-passport-to-data-scientist, 30s-career-change,
       next-step-aws-vs-fp-strategy, it-passport-quiz, ip-strategy-drill,
       ip-technology-drill, ip-management-drill)
     - fe-hub: 9件 (sql-join-visual-ai-hack, ip-address-ai-metaphor-hack,
       gemini-prompt-collection, fe-pseudo-language-trap, fe-certification-value-debate,
       ipa-exam-trends-2026, fe-career-modern-web, fundamental-it-engineer-for-non-engineers,
       fe-quiz)
     - ap-hub: 9件 (ipa-2026-cbt-confirmed-schedule, applied-advanced-exam-cbt-transition-2026,
       cbt-impact-advanced-exams, ap-2026-spring-postponed, ses-ap-independence-strategy,
       ipa-certification-salary-impact, it-passport-to-ap-roadmap, ap-quiz, ap-subject-b)

     残り14ハブも追加対応 (2026-06-10): sg-hub(10) / aws-hub(1) / ccna-hub(5) /
     fp-hub(5) / mos-hub(3) / advanced-ipa-hub(11) の計35件に同パターンでバックリンク追加。
     - denken-hub / boki-hub / takken-hub / g-kentei-hub / ds-kentei-hub /
       kiken-butsu-hub / level4-strategy-hub はスポーク記事が未作成 or 既存記事が
       既にバックリンク済みのため対応不要（spokes=0 or missing=0）
     - fe-subject-b-ai-prompt-hub の3スポーク（fe-subject-b-drill,
       gemini-prompt-collection, fe-pseudo-code-visual-hack）は既に fe-hub への
       バックリンクを持っており、fe-hubのサブハブという位置づけのため追加バックリンク不要と判断
     - ccna関連5記事はaws-hub/ccna-hub双方のスポークだが、より具体的なccna-hubのみに
       バックリンクを設定（aws-saa-beginner-realityのみaws-hub）
     - next-step-aws-vs-fp-strategy / it-passport-to-ap-roadmap は複数ハブの橋渡し
       記事のため、それぞれ2件のバックリンクを設定
     pnpm build で1265ページのビルド成功を確認済み。 -->

個別記事からhub記事へのリンクが弱い。逆も同様。
理想の内部リンク構造:

```
【ハブ記事（全攻略ガイド）】
    ↕ 双方向リンク
【理論記事】【方法論記事】【キャリア記事】
    ↕ 双方向リンク
【アプリ】
```

現状は「hub → 個別」は一方向リンクになりがち。個別記事にも「← hub記事に戻る」導線が必要。
→ 全17ハブクラスターで対応完了 (2026-06-10)。

### タイトルパターンの統一

現状は「ハック術」「攻略」「メソッド」が混在。以下のタイトルパターンに収束させる。

| 記事タイプ | 推奨パターン |
|---------|-----------|
| Hub | `{資格名} 完全攻略ガイド｜{ターゲット}の最短ロードマップ` |
| Theory | `{用語名}とは？{一文解説}【{資格名}】` |
| Method | `{問題/状況}を{AI/手法}で{解決}する` |
| Career | `{職種/状況}が{資格名}で{成果}を得る方法` |
| App記事 | `{資格名} {問題種別}ドリル — AIが{機能説明}` |

---

## ナレッジDB（2026-06-18 追加）

横展開資格の検索KWを `examId`・Hub・記事タイプに結びつけるAI参照DBを整備済み。

| パス | 内容 |
| --- | --- |
| `.workspace/data-set/cert-keyword-db/index.md` | インデックス・KW逆引き |
| `.workspace/data-set/cert-keyword-db/*-kw-db.md` | 資格別KWマップ（宅建・簿記・MOS・FP・AWS・TOEIC） |
| `.agents/cert_keyword_db.md` | エージェント参照スキル |

記事企画時は restructure-plan の充足表と KW DB の `状態` 列を突合し、×未着手から着手する。

---

## 実施優先順位サマリー

| 優先度 | アクション | 工数 | 効果 |
|-------|---------|:---:|:---:|
| **即時** | Uncategorized 6件修正 | 小 | 低（信頼性） |
| **高** | 日商簿記クラスター新設（Hub + Method×3） | 大 | 高（訪問者層拡大） |
| **高** | MOS Hub 新設 + 既存記事との統合 | 中 | 高（次ステップ導線） |
| **高** | G検定クラスター新設 | 中 | 高（AI資格ブーム） |
| **中** | FE/AP theoryページ追加（各5件） | 中 | 中（深度強化） |
| **中** | Career記事の職種別拡充 | 中 | 中（転職流入） |
| **中** | Hub記事の内部リンク強化 | 小 | 中（回遊率） |
| **低** | trend/theory の分類整理（URLは変えない） | 小 | 低（整合性） |
| **低** | 資格比較記事追加（4件） | 中 | 中（比較検索流入） |
