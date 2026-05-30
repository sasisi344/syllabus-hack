# 将来タスク: 試験別トピッククラスター構築

> 目的: 試験名・資格名を中心ノードとしたマインドマップ構造をサイト上に実装し、
> 孤立した記事をクラスターに統合することでGoogleへのテーマ権威性を伝える。
>
> 優先度根拠: examIdの記事数 (ip:65 > fe:19 > ap:15 > sg:11 > common:91)

---

## フェーズ0: 設計（着手前に完了）

- [ ] **ハブページのテンプレート定義**
  - frontmatter に `hub: true` フラグを追加するかどうか検討
  - ハブページのスラッグ規則を決定（例: `{examId}-hub` or `{examId}-complete-guide`）
  - ハブページのカテゴリ: `method` で統一する
  - ハブページの構成セクションを決定（下記テンプレート案を参照）

- [ ] **サテライト記事 → ハブへのリンク規則を決定**
  - 記事末尾の「関連ハブ」セクションの書き方を統一
  - 例: `> この記事は [ITパスポート完全攻略ガイド](/itp-hub) の一部です。`

### ハブページ構成テンプレート案

```
## {試験名} とは（概要・難易度・合格率）
## シラバス構成（出題分野マップ）
## 推奨学習ロードマップ
## 関連記事インデックス
  ### 学習メソッド（method）
  ### 試験情報・トレンド（trend）
  ### キャリア戦略（career）
  ### 理論・用語解説（theory）
  ### 練習アプリ（app）
## まとめ・次のステップ
```

---

## フェーズ1: ITパスポート クラスター（最優先・記事数65本）

- [ ] **ハブページ作成** `src/data/post/method/itp-hub/`
  - examId: `ip`
  - タイトル: 「ITパスポート完全攻略ガイド｜シラバスから合格後まで全リンク集」
  - 既存65記事を method / trend / career / app / theory 別に一覧化
  - 各記事へのアンカーリンクを本文中に配置

- [ ] **サテライト記事へのバックリンク追加**（ハブ完成後に実施）
  - [ ] `method/fast-track-roadmap-20h-pass` に ハブリンク追加
  - [ ] `method/itp-10-days-panic-hack` にハブリンク追加
  - [ ] `method/itp-smartphone-only-hack` にハブリンク追加
  - [ ] `method/chatgpt-itpassport-ai-complete-guide` にハブリンク追加
  - [ ] `method/final-checkpoint-100-plus` にハブリンク追加
  - [ ] `career/itp-non-engineer-career-strategy` にハブリンク追加
  - [ ] `career/itp-rural-salary-hack` にハブリンク追加
  - [ ] `career/itp-shameful-career-hack` にハブリンク追加
  - [ ] `trend/it-passport-shame-debate` にハブリンク追加
  - [ ] （残り記事は examId: ip で絞り込み、スクリプトで一括追加）

---

## フェーズ2: 基本情報技術者 クラスター（記事数19本）

- [ ] **ハブページ作成** `src/data/post/method/fe-hub/`
  - examId: `fe`
  - タイトル: 「基本情報技術者試験 完全攻略ガイド｜科目A・B対策から合格後キャリアまで」
  - 科目A / 科目B（擬似言語・アルゴリズム）/ キャリア の3軸で記事を整理

- [ ] **サテライト記事へのバックリンク追加**
  - [ ] `method/fe-subject-b-drill` にハブリンク追加
  - [ ] `method/fe-subject-b-ai-prompt-hub` にハブリンク追加
  - [ ] `method/pseudo-code-bridge-to-fe` にハブリンク追加
  - [ ] `method/fe-pseudo-code-visual-hack` にハブリンク追加
  - [ ] `method/fe-pseudo-code-ai-hack` にハブリンク追加
  - [ ] `method/fe-algorithm-roadmap` にハブリンク追加
  - [ ] `career/fe-engineer-foundation` にハブリンク追加
  - [ ] `career/freelance-fe-merit` にハブリンク追加
  - [ ] `career/fe-resume-liar-hack` にハブリンク追加
  - [ ] （残り記事は examId: fe で絞り込み）

---

## フェーズ3: 応用情報技術者 クラスター（記事数15本）

- [ ] **ハブページ作成** `src/data/post/method/ap-hub/`
  - examId: `ap`
  - タイトル: 「応用情報技術者試験 完全攻略ガイド｜午前・午後記述対策とキャリア戦略」
  - 午前対策 / 午後記述対策 / 高度試験へのステップアップ の3軸で整理

- [ ] **サテライト記事へのバックリンク追加**
  - [ ] `method/ap-discard-strategy` にハブリンク追加
  - [ ] `method/ap-grader-intent-hack` にハブリンク追加
  - [ ] `method/ap-grader-blackbox-hack` にハブリンク追加
  - [ ] `method/ap-afternoon-ai-coaching` にハブリンク追加
  - [ ] `method/ap-pm-descriptive-ai-prompts` にハブリンク追加
  - [ ] `career/applied-information-technology-engineer-career-value` にハブリンク追加
  - [ ] `career/ses-ap-strategy` にハブリンク追加
  - [ ] `career/ap-cert-practical-use-hack` にハブリンク追加
  - [ ] （残り記事は examId: ap で絞り込み）

---

## フェーズ4: 情報セキュリティマネジメント クラスター（記事数11本）

- [ ] **ハブページ作成** `src/data/post/method/sg-hub/`
  - examId: `sg`
  - タイトル: 「情報セキュリティマネジメント試験 完全攻略ガイド｜科目A・B対策と実務活用」

- [ ] **サテライト記事へのバックリンク追加**
  - [ ] `method/sg-beginner-roadmap` にハブリンク追加
  - [ ] `method/sg-meaningless-rumors-hack` にハブリンク追加
  - [ ] `method/sg-news-study-hack` にハブリンク追加
  - [ ] `career/backoffice-sg-strategy` にハブリンク追加
  - [ ] `career/backoffice-sg-career-hack` にハブリンク追加
  - [ ] `trend/sg-syllabus-latest-change-guide` にハブリンク追加
  - [ ] （残り記事は examId: sg で絞り込み）

---

## フェーズ5: 高度試験群 クラスター（SC / NW / DB / PM / ST / SA）

> 各試験の記事数は1〜3本と少ない。個別ハブより「高度試験共通ハブ」1本が現実的。

- [ ] **共通ハブページ作成** `src/data/post/method/advanced-ipa-hub/`
  - タイトル: 「IPA高度試験 完全攻略ガイド｜SC / NW / DB / PM / ST / SA の選び方と攻略法」
  - 各試験の概要・難易度・受験者像を横断比較
  - 各試験の既存記事（sc: 3, nw: 1, db: 2, pm: 2, st: 3, sa: 1）を試験別にリスト

- [ ] **サテライト記事へのバックリンク追加**
  - [ ] `method/sc-timeline-hack` にハブリンク追加
  - [ ] `method/nw-mermaid-hack` にハブリンク追加
  - [ ] `method/db-normalization-hack` にハブリンク追加
  - [ ] `method/miss-note-db` にハブリンク追加
  - [ ] `method/pm-pm2-module-hack` にハブリンク追加
  - [ ] `method/st-strategy-brainstorming` にハブリンク追加
  - [ ] `method/st-no-experience-essay-hack` にハブリンク追加
  - [ ] `method/level4-strategy-hub` にハブリンク追加

---

## フェーズ6: IPA以外の資格 クラスター（CCNA / AWS / FP2級 / MOS）

> 各試験の記事は現在1〜2本。ハブは「将来の拡張ベース」として先に作っておく。

- [ ] **AWS クラスターハブ作成** `src/data/post/method/aws-hub/`
  - 既存記事: `aws-personalized-roadmap-hack` / `ccna-ai-hack`（新規）
  - CCNA → AWS SAA → AWS ANS のロードマップを軸に構成

- [ ] **FP・マネー系ハブ作成** `src/data/post/method/fp-hub/`
  - 既存記事: `fp-ai-simulator-hack` / `fp2-cbt-strategy`（新規）
  - DS検定記事（`trend/ds-kentei`）との連携リンクも追加

- [ ] **ビジネス系PC資格ハブ作成** `src/data/post/method/office-cert-hub/`
  - 既存記事: `mos-ai-shortcut`（新規）
  - 将来の MOS エキスパート / Word / PowerPoint 記事の受け皿

---

## フェーズ7: クロスクラスターリンク（最終仕上げ）

> 試験間の「次のステップ」導線を記事レベルで繋ぐ。

- [ ] ITパスポート → 基本情報技術者 への導線記事を強化
  - `career/gateway-to-advanced` 等にクロスリンク追加
- [ ] 基本情報技術者 → 応用情報技術者 への導線を明示
- [ ] 応用情報技術者 → 高度試験群 への分岐ナビを `advanced-ipa-hub` に集約
- [ ] IPA高度試験 → AWS / CCNA へのキャリア拡張リンクを追加
- [ ] FP2級 → DS検定 クロスリンク（`ds-kentei` と `fp2-cbt-strategy` の相互リンク）

---

## 実装上の注意

- ハブページ自体は `draft: false` で公開する（リンク先がないと内部リンクが死ぬ）
- バックリンク追加はハブ公開後に実施（順序を守る）
- スラッグに `hub` を含めることで後からスクリプトで一括検索しやすくなる
- ハブページの `permalink` は短く：`/itp-hub` `/ fe-hub` 等
- 各ハブに `schema.org/CollectionPage` の構造化データを追加すると理想的
