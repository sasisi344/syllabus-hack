# 将来タスク: 試験別トピッククラスター構築

> 目的: 試験名・資格名を中心ノードとしたマインドマップ構造をサイト上に実装し、
> 孤立した記事をクラスターに統合することでGoogleへのテーマ権威性を伝える。
>
> 優先度根拠: examIdの記事数 (ip:65 > fe:19 > ap:15 > sg:11 > common:91)

---

## フェーズ0: 設計（着手前に完了） → ✅ 完了済み（2026-06-19確認、課題E等の実作業で既に決定・実装済み）

<!-- 確認結果: src/data/post/ 配下のHubページ19件（itp-hub, fe-hub, ap-hub, sg-hub,
     advanced-ipa-hub, aws-hub, fp-hub, mos-hub, boki-hub, takken-hub, g-kentei-hub,
     ds-kentei-hub, ccna-hub, denken-hub, kiken-butsu-hub, biru-kanri-hub,
     doboku-sekou-hub, level4-strategy-hub, fe-subject-b-ai-prompt-hub）を実査し、
     以下の設計が既に確定・運用中であることを確認。本フェーズの再設計は不要。 -->

- [x] **ハブページのテンプレート定義**
  - `hub: true` フラグは**追加しない**（既存19Hubすべてfrontmatterに同フラグなし。`category: method` + スラッグの `-hub` サフィックスで判定する運用）
  - スラッグ規則: **`{資格名}-hub`**（`itp-hub` `fe-hub` `boki-hub` `takken-hub` 等。`{examId}-hub` ではなくHub名は試験の通称ベース。examIdとスラッグが一致しない場合がある点は `exam-id-catalog.md` 側で管理）
  - カテゴリ: `method` で統一済み（19件中18件がmethod。例外1件 `career/regional-it-career-hub` は資格横断のキャリアHubで対象外）
  - 構成セクション: 厳密な固定テンプレートではないが、`itp-hub` 実装パターンが標準形 →
    `{資格名}とは` → `なぜ今この資格か` → `学習時間の目安` → `推奨学習フロー` →
    `学習メソッド` / `試験情報・トレンド` / `キャリア戦略` / `練習アプリ`（インデックス各H2） →
    `よくある質問(faqs)` → `まとめ`

- [x] **サテライト記事 → ハブへのリンク規則を決定** → 確定・適用済み
  - 書式: `> この記事は [{ハブ記事タイトル}](/{hub-slug}/) の一部です。`
  - 配置: 記事本文「まとめ」セクションの後、`---` 区切りの直後
  - 17ハブクラスター・対象スポーク記事へ展開済み（詳細は `restructure-plan-2026-06.md` 課題E参照）

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

## フェーズ1: ITパスポート クラスター（最優先・記事数65本） → ✅ ほぼ完了（2026-06-19確認）

- [x] **ハブページ作成** `src/data/post/method/itp-hub/`（既存・運用中）

- [x] **サテライト記事へのバックリンク追加**（ハブ完成後に実施）
  - [x] `method/fast-track-roadmap-20h-pass` にハブリンク追加
  - [x] `method/itp-10-days-panic-hack` にハブリンク追加
  - [x] `method/smartphone-study-guide` にハブリンク追加（2026-06-19対応）
  - [x] `method/chatgpt-itpassport-ai-complete-guide` にハブリンク追加
  - [x] `career/itp-non-engineer-career-strategy` にハブリンク追加
  - [x] `career/itp-rural-salary-hack` にハブリンク追加
  - [x] `career/itp-shameful-career-hack` にハブリンク追加
  - [x] `trend/it-passport-shame-debate` にハブリンク追加
  - [x] 残り記事（examId: ip）も `restructure-plan-2026-06.md` 課題E作業で一括対応済み（18件）

---

## フェーズ2: 基本情報技術者 クラスター（記事数19本） → ✅ 完了（2026-06-19確認）

- [x] **ハブページ作成** `src/data/post/method/fe-hub/`（既存・運用中）

- [x] **サテライト記事へのバックリンク追加**（確認した9件すべて対応済み）
  - [x] `method/fe-subject-b-drill`
  - [x] `method/fe-subject-b-ai-prompt-hub`
  - [x] `method/pseudo-code-bridge-to-fe`
  - [x] `method/fe-pseudo-code-visual-hack`
  - [x] `method/fe-pseudo-code-ai-hack`
  - [x] `method/fe-algorithm-roadmap`
  - [x] `career/fe-engineer-foundation`
  - [x] `career/freelance-fe-merit`
  - [x] `career/fe-resume-liar-hack`

---

## フェーズ3: 応用情報技術者 クラスター（記事数15本） → ✅ 完了（2026-06-19確認）

- [x] **ハブページ作成** `src/data/post/method/ap-hub/`（既存・運用中）

- [x] **サテライト記事へのバックリンク追加**（確認した8件すべて対応済み）
  - [x] `method/ap-discard-strategy`
  - [x] `method/ap-grader-intent-hack`
  - [x] `method/ap-grader-blackbox-hack`
  - [x] `method/ap-afternoon-ai-coaching`
  - [x] `method/ap-pm-descriptive-ai-prompts`
  - [x] `career/applied-information-technology-engineer-career-value`
  - [x] `career/ses-ap-strategy`
  - [x] `career/ap-cert-practical-use-hack`

---

## フェーズ4: 情報セキュリティマネジメント クラスター（記事数11本） → ✅ 完了（2026-06-19確認）

- [x] **ハブページ作成** `src/data/post/method/sg-hub/`（既存・運用中）

- [x] **サテライト記事へのバックリンク追加**（確認した6件すべて対応済み）
  - [x] `method/sg-beginner-roadmap`
  - [x] `method/sg-meaningless-rumors-hack`
  - [x] `method/sg-news-study-hack`
  - [x] `career/backoffice-sg-strategy`
  - [x] `career/backoffice-sg-career-hack`
  - [x] `trend/sg-syllabus-latest-change-guide`

---

## フェーズ5: 高度試験群 クラスター（SC / NW / DB / PM / ST / SA） → ✅ 完了（2026-06-19対応）

- [x] **共通ハブページ作成** `src/data/post/method/advanced-ipa-hub/`（既存・運用中）

- [x] **サテライト記事へのバックリンク追加**
  - [x] `method/sc-timeline-hack`
  - [x] `method/nw-mermaid-hack`
  - [x] `method/db-normalization-hack`
  - [x] `method/miss-note-db` — ※`knowledge.examId: fe`のため実際は **fe-hub** へのバックリンクが正（2026-06-19対応、advanced-ipa-hubではない点に注意）
  - [x] `method/pm-pm2-module-hack`
  - [x] `method/st-strategy-brainstorming`
  - [x] `method/st-no-experience-essay-hack`
  - [x] `method/level4-strategy-hub` — advanced-ipa-hubのサブHub。`fe-subject-b-ai-prompt-hub→fe-hub`の precedentに合わせ advanced-ipa-hub へのバックリンクを追加（2026-06-19対応）

---

## フェーズ6: IPA以外の資格 クラスター（CCNA / AWS / FP2級 / MOS） → ✅ 完了（2026-06-19対応）

- [x] **AWS クラスターハブ作成** `src/data/post/method/aws-hub/`（既存・運用中）
  - [x] `method/aws-personalized-roadmap-hack` にハブリンク追加（2026-06-19対応。`ccna-ai-hack`は別途ccna-hubへリンク済みのため対象外）
  - [x] `method/ccna-ai-hack` にハブリンク追加済み

- [x] **FP・マネー系ハブ作成** `src/data/post/method/fp-hub/`（既存・運用中。`fp2-cbt-strategy` は `fp2-3month-plan` として実装済み）
  - [x] `method/fp-ai-simulator-hack` にハブリンク追加（2026-06-19対応）
  - [x] `method/fp2-3month-plan` にハブリンク追加済み

- [x] **ビジネス系PC資格ハブ作成** `src/data/post/method/mos-hub/`（`office-cert-hub` ではなく `mos-hub` として実装済み）
  - [x] `method/mos-ai-shortcut` にハブリンク追加済み

---

## フェーズ7: クロスクラスターリンク（最終仕上げ） → ✅ 完了（2026-06-19対応）

> 試験間の「次のステップ」導線を記事レベルで繋ぐ。

<!-- 対応結果: ハブ記事本文の地の文に既存の試験名言及があったため、新規セクションを増設せず
     既存パラグラフ内の試験名にインラインリンクを張る方式で実装（hub間の双方向メッシュを強化）。
     lastmodは全対象ファイル2026-06-19に更新。pnpm buildで1293ページのビルド成功を確認済み。 -->

- [x] **ITパスポート → 基本情報技術者 への導線記事を強化**
  - `method/itp-hub` の「他の資格への学習コストを下げる土台になる」段落から
    fe-hub / sg-hub / aws-hub / ds-kentei-hub へインラインリンクを追加
  - `career/gateway-to-advanced`（実体はAP→高度試験の接続記事）は ap-hub / advanced-ipa-hub
    どちらへのバックリンクも未設定だったため、本フェーズで両方追加（次の項目とまとめて対応）

- [x] **基本情報技術者 → 応用情報技術者 への導線を明示**
  - `method/fe-hub` の「なぜ基本情報技術者試験か」段落から itp-hub（前段）・
    ap-hub / aws-hub / sg-hub（次段）へインラインリンクを追加

- [x] **応用情報技術者 → 高度試験群 への分岐ナビを `advanced-ipa-hub` に集約**
  - `method/ap-hub` の「高度試験への登竜門として機能する」段落から advanced-ipa-hub へリンク
  - `career/gateway-to-advanced` へのリンクも追加し、キャリア設計リンク一覧にも掲載
  - `career/gateway-to-advanced` 側に ap-hub / advanced-ipa-hub へのバックリンクを追加

- [x] **IPA高度試験 → AWS / CCNA へのキャリア拡張リンクを追加**
  - `method/advanced-ipa-hub` に新規セクション「高度試験合格後のキャリア拡張」を追加し、
    aws-hub / ccna-hub へリンク
  - 双方向メッシュ強化のため aws-hub / ccna-hub 側にも advanced-ipa-hub への逆リンクを追加

- [x] **FP2級 → DS検定 クロスリンク**
  - `method/ds-kentei-hub` に新規セクション「FP2級との相乗効果」を追加し、
    fp2-3month-plan へリンク（next-task.md記載の`fp2-cbt-strategy`は実装名と異なるため
    restructure-plan-2026-06.md記載の正式ファイル名`fp2-3month-plan`を使用）
  - `method/fp2-3month-plan` 側にも ds-kentei-hub への逆リンクを追加

---

## 実装上の注意

- ハブページ自体は `draft: false` で公開する（リンク先がないと内部リンクが死ぬ）
- バックリンク追加はハブ公開後に実施（順序を守る）
- スラッグに `hub` を含めることで後からスクリプトで一括検索しやすくなる
- ハブページの `permalink` は短く：`/itp-hub` `/ fe-hub` 等
- 各ハブに `schema.org/CollectionPage` の構造化データを追加すると理想的
