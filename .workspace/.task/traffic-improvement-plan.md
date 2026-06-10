# アクセス改善施策リスト

> 作成日: 2026-05-30  
> 背景: 317記事公開済み。ニッチKW狙いで記事を量産しているが、想定より流入が少ない。  
> レビュー日: 2026-06-09（Claude Code による現状照合）

---

## 現状診断サマリー

調査で判明した構造的問題を以下に整理する。

| 問題分類 | 内容 | 深刻度 |
|---|---|---|
| ドメイン年齢 | 2026年2月サイト開設。Googleのサンドボックス期間中の可能性が高い | ★★★ |
| コンテンツ速度 | 4ヶ月で317記事 = 月平均80記事。Google HCUの監視対象になりやすい | ★★★ |
| ~~非標準カテゴリ~~ | ~~`glossary`(41記事) `strategy`(15記事) がスキーマ外で運用されている~~ | ~~★★~~  |
| トピッククラスター欠如 | 記事間の内部リンクが体系化されておらず、テーマ権威性がGoogleに伝わりにくい | ★★★ |
| ~~publishDate形式不統一~~ | ~~約200記事が `2026-04-01` 形式（タイムゾーンなし）。サイトマップの日付シグナルが弱い~~ | ~~★★~~ |
| E-E-A-T シグナル不足 | 著者情報・外部引用・専門性の証明が薄い。HCU後のGoogleが重視する要素 | ★★★ |
| ニッチKW記事の薄さ | ニッチKWは検索量が少ない分、1位でないと流入ゼロ。競合より深い記事が必要 | ★★ |
| ~~タグページ非インデックス~~ | ~~`tag: robots: index: false` でタグがエントリーポイントになっていない~~ | ~~★~~ |

---

## 施策リスト（優先度順）

### 優先度A: 今すぐ着手（構造的欠陥の修正）

<!-- ✅ DONE (2026-06-09確認): method/カテゴリ下に17本のハブページ作成済み
     itp-hub / fe-hub / sg-hub / ap-hub / aws-hub / ccna-hub / fp-hub /
     denken-hub / mos-hub / boki-hub / takken-hub / g-kentei-hub /
     ds-kentei-hub / kiken-butsu-hub / fe-subject-b-ai-prompt-hub /
     advanced-ipa-hub / level4-strategy-hub
     itp-hubはFAQ付き・内部リンクインデックス実装を確認。
     残課題: 既存記事末尾の「関連記事」手動リンクがどこまで入っているか未確認。 -->
#### A-1. トピッククラスターの構築（内部リンク体系化）

**問題**: 317記事が孤立していてGoogleがテーマ権威性を読み取れない。  
**対策**:
- 主要試験ごとに「ピラーページ（総合攻略ガイド）」を1記事作成する
  - 例: `ITパスポート完全攻略ガイド` → 関連する全メソッド記事にリンク
  - 例: `基本情報技術者完全攻略ガイド` → 科目A/B・アルゴリズム記事に集約
- 既存記事の末尾に「関連記事」を手動で3〜5本リンクする（自動relatedだけに頼らない）
- パンくずリスト（`カテゴリ > 記事タイトル`）が正しく機能しているか確認

**期待効果**: クロール効率改善・テーマ権威性の確立。Googleがどのサイトが「資格試験学習」のエキスパートかを判断できるようになる。

---

<!-- ⚠️ PARTIAL (2026-06-09確認):
     - `category: 'glossary'` 記事 = 0件（移行完了）
     - `category: 'strategy'` 記事 = 0件（移行完了）
     - ただし src/data/post/strategy/ と src/data/post/term/ ディレクトリが残存（common-cover.pngのみ）
     - 301リダイレクト設定: astro.config.mjs に redirects 設定なし（未対応）
     NOTE: 旧URL /strategy/* /glossary/* へのアクセスが404になっている可能性。
     TODO: astro.config.mjs に redirects ブロックを追加するか、Netlify/Vercel リダイレクト設定で対応する。
           空ディレクトリ（strategy/, term/）はビルド成果物に影響しないが整理推奨。 -->
#### A-2. `glossary` / `strategy` カテゴリの整理

**問題**: CLAUDE.md に定義されていない非標準カテゴリが56記事存在する。Astroのコンテンツスキーマ外になっている可能性があり、ビルド時の扱いが不明。  
**対策**:
- `glossary` 41記事 → `theory` カテゴリに統合（用語解説は theory が正規）
- `strategy` 15記事 → 内容に応じて `method` or `trend` or `theory` に振り分け
- カテゴリ変更後は旧URLに301リダイレクトを設定（Astroのredirects設定）

**期待効果**: カテゴリの一貫性が保たれ、カテゴリ一覧ページのコンテンツ密度が向上する。

---

<!-- ✅ DONE (2026-06-09確認): 全記事が T00:00:00Z 形式に統一済み。
     確認した主要な日付グループ: 2026-04-01T00:00:00Z (63件), 2026-03-31T00:00:00Z (56件) 等、
     全グループが ISO 8601 完全形式。タイムゾーンなし形式は0件。 -->
#### A-3. publishDate のタイムゾーン統一

**問題**: 約200記事が `publishDate: 2026-04-01`（タイムゾーンなし）形式。サイトマップのlastmod・datePublishedのJSONLDが不正確になる可能性がある。  
**対策**:
- `2026-04-01` 形式の記事を `2026-04-01T00:00:00Z` 形式に一括変換するスクリプトを作成・実行
- 今後の記事作成は必ず `T00:00:00Z` 付きで登録する

---

### 優先度B: 1〜2週間以内（コンテンツ品質改善）

#### B-1. 主要ニッチKW記事を「1位を狙える深さ」に増強

**問題**: ニッチKWは検索ボリュームが少ない分、1〜3位に入らないと流入がほぼゼロ。現状の800〜1200字程度の記事では競合の2000〜3000字記事に負ける。  
**対策**:
- 対象: 狙いKWのGoogle検索上位3件と比較して明らかに薄い記事を特定
- 追加すべき要素:
  - 実際の操作手順・プロンプト例（具体性）
  - FAQ セクション（「よくある質問」のKWを内包）
  - 比較表（競合資格・方法論との対比）
  - 著者体験・一次情報の付加（HCU対策）

**優先記事候補**（リサーチKWと照合して深さが不足しているもの）:
- `ccna-ai-hack` — プロンプト例を増やす・実際のPacket Tracer手順を追加
- `fp2-cbt-strategy` — CBT申し込み手順のスクリーンショット代替テキストを追加
- `mos-ai-shortcut` — Excel具体操作動画/GIF埋め込みへの誘導を追加

---

<!-- ✅ DONE (2026-06-10対応):
     - NotebookLM×IP系/全般系（notebooklm-ip-study-hack, notebooklm-it-passport-drill,
       notebooklm-syllabus-study-method）: 2026-05-30時点で既に draft:true ＋
       astro.config.ts に notebooklm-features-guide / notebooklm-ai-workflow-guide への
       301リダイレクト設定済みを確認。追加対応不要。
     - CBT系: cbt-impact-advanced-exams(trend) と cbt-2026-syllabus-complete-guide(method) が
       「高度試験のCBT変更点」で重複していたため、固有セクション（科目名変更表 午前Ⅰ→科目A-1等、
       分割受験、手書き廃止のメリット・注意点）をcbt-2026-syllabus-complete-guideへマージ。
       cbt-impact-advanced-examsは削除し astro.config.ts に301リダイレクト追加。
       ap-hubの逆リンクもcbt-2026-syllabus-complete-guideへ差し替え。
       complete-guide内のリンク切れ（/notebooklm-syllabus-study-method）も
       /notebooklm-ai-workflow-guideへ修正。
     - AWS/CCNA系（aws-personalized-roadmap-hack / ccna-ai-hack）: 試験名が異なり
       検索クエリが被らないため真のカニバリではないと判断、対象外。
     - 副次対応: 本日公開の8記事（FP/MOS/秘書検定系）でcover.jpg欠落によりビルド失敗していたため
       image_rules.mdに従いgenerate-image.jsで生成、pnpm build成功確認済み（1287ページ）。
-->
#### ~~B-2. 重複・カニバリゼーション記事の統合~~ → ✅ 対応済み (2026-06-10)

---

<!-- ⚠️ PARTIAL (2026-06-09確認):
     - About ページ存在確認: src/pages/about.astro
     - 著者プロフィール画像（sasisi344.jpg）・著者バイオ・ハンドル(@sasisi344)あり
     - バイオ内容: ITインフラからWeb開発経験のアラフィフ、AI学習設計者
     - 未確認: 各記事フッターへの著者情報追加、外部引用（IPA公式等）の記事への挿入
     NOTE: Aboutページ単体は整備済みだが、記事単位のE-E-A-Tシグナル（体験談・外部引用）
           はB-1記事深化と並行して進めるべき継続タスク。 -->
#### B-3. E-E-A-T シグナルの強化

**問題**: Google Helpful Content Update以降、「誰が書いたか」「実体験があるか」が評価基準に加わっている。AI生成中心のコンテンツはこの基準で不利。  
**対策**:
- **Aboutページの強化**: 運営者プロフィール・試験合格実績・専門性の根拠を明記
- **記事への一次情報追加**: 各記事に「実際に試した結果」「試験当日の状況」など体験ベースの一文を追加（AIで量産できない要素）
- **外部引用の追加**: IPA公式・総務省・試験団体の公式データを引用してファクト密度を上げる
- **著者情報**: 可能であれば著者バイオを記事フッターに追加

---

### 優先度C: 継続施策（中長期）

#### C-1. サンドボックス脱出を加速させる外部シグナル取得

**問題**: 新ドメインはGoogleに信頼されるまで時間がかかる。外部からのシグナルがゼロだと6〜12ヶ月かかることもある。  
**対策**:
- X(Twitter)での記事シェアを定期化（SNS戦略タスクと連動）
- Zennまたはnoteへの転載・要約記事 → syllabushack.comへの被リンク
- Quoraやteratailなどの質問サイトで関連質問に回答し、記事URLを補足情報として掲載
- はてなブックマークへの投稿

---

<!-- ✅ DONE (2026-06-09確認): src/config.yaml の tag.robots.index が true に変更済み。
     コメント「10記事以上のタグのみ実際にインデックス（ページテンプレートで制御）」あり。
     タグページテンプレート側での条件制御が実装済みであることを前提。
     NOTE: タグページ説明文（introductory text）の追加はC-2の条件だったが未確認。
     TODO: タグページに説明文が実際に入っているか /tag/{tagname} のテンプレートを確認する。 -->
#### C-2. タグページのインデックス解禁（慎重に）

**現状**: `tag: robots: index: false`  
**検討**: タグページが薄いコンテンツにならないよう記事数が十分ある主要タグ（`ITパスポート` `基本情報技術者` `ChatGPT` 等）のみ段階的にインデックス解禁する。

**条件**: タグページに説明文・関連記事誘導を追加してからインデックス解禁すること。

---

#### C-3. Core Web Vitals の確認

**対策**:
- Google Search Console の「ページエクスペリエンス」で現状を確認
- Astro製サイトは基本的に高速だが、インタラクティブなクイズアプリ（Preact）がある場合はLCP・CLSに影響する可能性を確認

---

## 施策のロードマップ

```
Week 1: A-1 ピラーページ3本作成 + 内部リンク体系化
Week 2: A-2 glossary/strategy カテゴリ整理 + A-3 publishDate修正スクリプト実行
Week 3: B-1 主要ニッチKW記事を深化（上位3記事）
Week 4: ~~B-2 カニバリゼーション整理~~ ✅ 対応済み (2026-06-10) + B-3 About/著者情報強化
Month 2+: C-1 外部シグナル取得の継続 + C-2 タグ段階的解禁
```

---

## 最も重要な1点

上記すべてより優先度が高い本質的な課題:

> **「1位を取れるコンテンツ」を10本作ることは、「80点のコンテンツ」を100本作ることより有効。**

現在の課題は記事数ではなく、**個々の記事がそのKWで1位になれるほど深いか** という点。

月産80記事のペースを落とし、1記事に投じるリサーチ・深化のコストを上げることが、現時点での最優先戦略変換である。

---

## 未来展望メモ（作業中に見えてきた次のTODO）

<!-- 作業中に浮上した観察・次の打ち手候補 -->

### ~~🔴 要対応: A-2 の旧URL 301リダイレクト未設定~~ → ✅ 対応済み (2026-06-09確認)

<!-- 確認結果:
     - astro.config.ts に redirects ブロックが存在し、カテゴリ一覧ページのリダイレクトは設定済み
       '/category/glossary/' → '/category/theory/', '/category/strategy/' → '/category/theory/' 等
     - 個別記事の URL は permalink: '/%slug%' のため、カテゴリ変更でURLは変わらない（記事URL = /{slug}/）
     - 個別記事リダイレクトは不要。完了。 -->

### ~~🔴 要確認: タグページに説明文が実際に入っているか~~ → ✅ 条件分岐実装済み (2026-06-09確認)

<!-- 確認結果:
     src/pages/[...blog]/[tag]/[...page].astro を確認。
     - noindex 条件: `page.total >= 10` で 10記事未満のタグは自動 noindex — 実装済み
     - 最低限の説明: 「{tag.title}」に関連する記事 {page.total} 件 — 表示済み
     - リッチな説明文（タグ概要テキスト）は未追加だが、薄いページのインデックスは防止されている
     NOTE: 将来的にタグ別の説明文を追加すれば E-E-A-T 向上につながる（低優先度）。 -->

### ~~🔴 緊急バグ: ハブへの逆リンク URL が全件 404~~ → ✅ 対応済み (2026-06-10修正)

<!-- 修正結果:
     当初の見積もり（64箇所/30ファイル、ハブ逆リンクのみ）より遥かに大規模な
     サイト全体の問題だった。

     - permalink: '/%slug%' のため、`/{category}/{slug}/` 形式のリンクは
       カテゴリを問わず全て404（method/trend/career/app/theory 全カテゴリが対象）
     - 全記事を走査し `](/(method|trend|career|app|theory)/{slug}/?)`  パターンを
       `](/{slug}/)` へ一括置換
     - 結果: 75ファイル / 362箇所 を修正
     - 副次的に発見した typo リンク7件も修正:
       /ap-quizx → /ap-quiz, /ap-subject-bx → /ap-subject-b, /fe-quizx → /fe-quiz,
       /it-passport-quizx → /it-passport-quiz, /ip-strategy-drillx → /ip-strategy-drill,
       /ip-technology-drillx → /ip-technology-drill, /ip-management-drillx → /ip-management-drill
     - pnpm build 成功確認済み（1265ページ生成）

     残課題 → ✅ 対応済み (2026-06-10): 上記4件の孤立リンク（対象記事が存在しない）も
     最も近い既存記事へのリンクに差し替え済み:
       - /ip-beginner-roadmap → /itp-hub （ITパスポート完全攻略ガイド）
         対象: liberal-arts-it-strategy-aichi, liberal-arts-it-strategy-fukuoka
       - /consultant-career-ip-logic → /itp-non-engineer-career-strategy
         対象: liberal-arts-student-strategy
       - /ap-master-roadmap → /ap-hub （応用情報技術者試験 完全攻略ガイド）
         対象: regional-it-career-hub, ses-ap-strategy-kanagawa
     pnpm build 再確認済み（1265ページ生成）。
-->

<!-- 2026-06-10 補足: ip-beginner-roadmap / consultant-career-ip-logic / ap-master-roadmap は
     当初「ロードマップ単独記事」として書かれる想定だったと思われる。restructure-plan-2026-06.md の
     横展開フェーズと合わせて、将来的にこれらをピラーページから分離した専用記事として
     新規作成する選択肢もある（その際は逆に /itp-hub, /ap-hub からのリンクに変更する）。 -->

### 🟡 `term` / `strategy` 空ディレクトリの整理

`src/data/post/strategy/` と `src/data/post/term/` に `common-cover.png` のみ残存。
記事がないのにディレクトリが存在するとカテゴリ一覧に空カテゴリが表示される可能性がある。

```
TODO: Astro のカテゴリ自動生成ロジックを確認し、空ディレクトリが `/category/strategy` 等の
      空ページを生成していないか検証。問題があればディレクトリごと削除（git mv で整理）。
```

### 🟢 E-E-A-T: Aboutページに「合格実績」セクション追加を検討

著者バイオは記載済みだが「実際にこの試験を受けて合格した」という具体的実績記述が見当たらない。
合格証・点数スクリーンショット（または代替テキスト）を追加することで E-E-A-T の Experience シグナルが向上する。

```
候補: ITパスポート・基本情報・情報セキュリティマネジメントなど運営者の合格実績を
      About ページの運営者紹介セクションに箇条書きで追記する。
```
