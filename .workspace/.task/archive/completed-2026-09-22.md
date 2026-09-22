---
created: 2026-09-22
tags:
  - シラバスハック
  - archive
  - completed
---

# 完了タスクアーカイブ（2026-09-22）

> `TODO.md` §0（Week4：計測・振り返り・次月準備）で完了した項目のうち、PD-M/PD-Sコース公開に関する完了記録一式を退避。詳細な実装進捗は[`../../.new-contentplan/archive/pd-course/pd-course-task.md`](../../.new-contentplan/archive/pd-course/pd-course-task.md)が正本（2026-09-22アーカイブ）。

## 完了タスク一覧

- [x] **GA4/GSCで新セクション（`/course/`）のPV・回遊率の計測を開始（効果測定 第1段階）**: w39週報（[`../w39-weekly-task.md`](../w39-weekly-task.md)）で計測開始。DMコースの章送りがGA4上で同一ランディングURLに集約され回遊率を正確に計測できない問題を発見（実装確認が必要、詳細は同週報Act参照）

- [x] 4本目・5本目パイロットテーマ: **プロフェッショナルデジタルスキル（マネジメント/システム）試験（PD-M/PD-S）に確定**（2026-09-19決定）。DMに続きIPAグループを優先完走させる方針で、着手順はPD-M→PD-S。

  - **PD-Mコース（Tier1）**: 2026-09-22に本文執筆・本番公開まで完了。カリキュラム設計（[`pd-m-course-curriculum.md`](../../.new-contentplan/archive/pd-course/pd-m-course-curriculum.md)）に基づき、中分類12（ガバナンス・監査）と28（ビジネス関連法規）を1章に統合し、技能ケーススタディ章を第8章として確保する8章構成。全8章＋index＋診断テスト（10問）＋章末チェック（各5問）＋総復習（20問）を`src/data/course/pd-m/`・`src/data/quiz/pd-m/`に本番配置（`draft: false`）、`pnpm build`で1382ページのビルド成功を確認。`method/advanced-ipa-hub`のPD-Mスタブ更新・誤字/内部リンク/スマホ幅の最終調整も完了。

  - **PD-Sコース（Tier1）**: 2026-09-22に本文執筆・本番公開まで完了。カリキュラム設計（[`pd-s-course-curriculum.md`](../../.new-contentplan/archive/pd-course/pd-s-course-curriculum.md)）に基づき、中分類9個・817語（シラバス中最大）を、統合3組＋最大中分類（開発・運用の方法論、230語）の分割（決定事項7のAI駆動開発・フィジカルAIを独立章化）で7知識章＋技能ケーススタディ章の8章に再編。全8章＋index＋診断テスト（10問）＋章末チェック（各5問）＋総復習（20問）を`src/data/course/pd-s/`・`src/data/quiz/pd-s/`に本番配置（`draft: false`）、`pnpm build`で1391ページのビルド成功を確認。`method/advanced-ipa-hub`のPD-Sスタブ更新も完了。

  - **Mermaid図解インフラを新規実装**（ユーザー指示）: クラウド・ネットワーク等の技術内容を可視化するため、`mermaid`パッケージを導入し、クライアント側描画のPreact islandコンポーネント`src/apps/mermaid-diagram/MermaidDiagram.tsx`を新規作成（`ChapterQuiz`と同じislandパターン。`MutationObserver`でダークモード切り替えに自動追従）。スタイルは`KatexStyles.astro`と同じ方針で`src/components/common/MermaidStyles.astro`に分離。PD-Sコース第1〜7章にEA4層構造・リージョン/AZ関係・クラウド移行5R・OSI参照モデル・2相ロッキング・CAP定理・スクラムサイクル・CI/CDパイプライン・AI駆動開発フロー・フィジカルAI学習フローの計10個の図解を実装。`20hours-course-template.md`に図解活用のルール（使うべき内容／使わなくてよい内容の判断基準）を追記し、今後の全コースに適用する標準ルールとして確立。

  - これでIPAグループ（`ip`→`sg`→`dm`→`pd-m`→`pd-s`）の20時間コース展開が全て完了。次の着手対象はG検定（[`../../.new-contentplan/g-kentei-course/g-kentei-course-task.md`](../../.new-contentplan/g-kentei-course/g-kentei-course-task.md)参照）

- [x] 2本目パイロットテーマ: **情報セキュリティマネジメント（SG）** → 2026-09-15公開完了（詳細は`completed-2026-09-15.md`参照）

- [x] 3本目パイロットテーマ: **データマネジメント試験（DM）** → 2026-09-18公開完了（詳細は`archive/dm-course/`参照）

- [x] 今月の振り返り: CBT型と20hours型の制作比重をどう調整するか判断材料をまとめる（2026-09-20、w39データより）。コースは公開直後でGoogle上ほぼ未露出、既存CBT型アプリは既にオーガニック流入ありのため、比重の最終判断は最低1ヶ月の蓄積を待って再検討する方針（詳細: `../../.new-contentplan/archive/week4-task.md`）

- [x] trend記事「IPA 2027年試験制度改訂」の公開状況を確認 → `ipa-2027-restructuring`として公開済み（2026-04-11）を確認、繰越不要
