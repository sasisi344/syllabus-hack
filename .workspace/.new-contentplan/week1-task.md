---
created: 2026-09-07
updated: 2026-09-07
tags:
  - シラバスハック
  - roadmap
  - week1
---

# Week1タスク（9/6〜9/12）: 型の設計とシラバス整理

> 全体像は [`new-content-plan.md`](./new-content-plan.md) を参照。本ファイルはWeek1分の実行タスクを切り出したもの。

## このWeekのゴール

20時間学習法フォーマットの仕様を固め、パイロットテーマ（ITパスポート）で実制作に入れる状態にする。実制作（診断テスト・章立て本文）はWeek2から。

## タスク

- [x] 20hoursフォーマットのテンプレート仕様を確定 → [`20hours-course-template.md`](./20hours-course-template.md)（診断10問→カリキュラムマップ→8章→章末理解度チェックの構成、Tier1/Tier2の二層モデルとして確定）
- [x] パイロットテーマを **ITパスポート** に確定（無料入口資格・既存 `method/itp-hub` との接続がしやすいため）
- [x] ~~ITパスポート新旧シラバス対応表を作成（現行3区分→2027新3区分のマッピング）~~ → **想定より詳細な形で完了・前倒し**。実際には2027年シラバス案（Ver.0.1、IPA公開PDF `syllabus_ip_ver0_1.pdf`）を全文取得・構造化し、`src/data/master/syllabus-ip-2027.json`（6大分類26中分類819語）を作成。単純な3区分マッピングではなく [`ip-course/2027-syllabus-diff.md`](./ip-course/2027-syllabus-diff.md) で現行8章との対応度（◎○△×）まで分析し、**土台のシラバス自体を2027年版に切り替える**という当初想定より大きな決定に至った（詳細は同ファイル・[`ip-course/ip-course-curriculum.md`](./ip-course/ip-course-curriculum.md)）
- [x] KaTeX導入のAstro組み込みPoC → **完了（2026-09-07）**。`remark-math`+`rehype-katex`を`astro.config.ts`のmarkdownパイプラインに追加し、`src/components/common/KatexStyles.astro`（`katex/dist/katex.min.css`をimportするだけの薄いコンポーネント）を新設。全1504ページ＋数式テストページでビルド検証済み
  - ビルド時間: 127.74s→129.40s（+1.66s、誤差範囲）
  - 全ページ共通CSS（`privacy.D9rXZ6sm.css`）: 87,920 bytes → 87,920 bytes（**バイト単位で不変**、既存ページへの影響ゼロ）
  - JSバンドル: 211,441 bytes・28ファイルで不変
  - KaTeX CSS（29.4KB）は数式ページ専用の別バンドル（例: `katex-poc-test.xxx.css`）としてのみ生成され、他ページからは一切参照されないことを確認（`KatexStyles`をimportしたページにだけ`<link>`が付く設計どおり）
  - 既存443記事に `$[0-9]`（ドル価格表記）は0件で、remark-mathの誤検知リスクなしを確認済み
  - 結論: **導入OK**。今後、数式を使うコース（統計学・データアナリスト等）の章ページでのみ`<KatexStyles />`をimportする運用とする（[`20hours-course-template.md`](./20hours-course-template.md) に反映）
- [ ] ~~noteアカウント・マガジン開設の準備~~ → **来月に延期（2026-09-07決定）**。今月はTier1（無料20hコンテンツ）とサイト新構成（`course`コレクション実装）を優先し、有料コンテンツ（Tier2）関連の作業は着手しない（`new-content-plan.md` 参照）
- [x] **（新規追加・2026-09-07）** 【ユーザー作業】noteアカウントのハンドル確保のみ今月実施（ブランド名の先行押さえ。マガジン設計・価格・本文制作・メールゲートは来月着手のまま据え置き） → **2026-09-09完了**。ハンドル`syllabushack`で開設済み（事前チェックでnote/X/Threads候補全件の空きを確認済み）
  - **自己紹介文（採用確定・2026-09-07、プロフィール反映済み）**: 「シラバスハック公式note。資格試験の分厚い『合格テキスト』を生成AI時代の学び方で再構築中。まずはITパスポートから。無料の入口編（20時間学習法）は本体サイトへ」
  - ウェブサイトリンク: `https://syllabushack.com/itp-hub`
  - アイコン/ヘッダー画像: `.workspace/draft/brand-assets/icon.png` / `header.png`（`.agents/image_rules.md`のブランド方針に沿って生成・設定済み）
- [x] **（新規追加・2026-09-07）** 【ユーザー作業】20hoursコース／シラバスハック専用のSNSアカウントを新規作成（既存個人ブランド`@sasisi344`とは切り離す方針で決定。プラットフォーム・投稿体制は`sns-strategy.md`の型を踏襲しつつ専用アカウント用に再設計） → **2026-09-09完了**。Threadsアカウントを開設済み
  - **自己紹介文（採用確定・2026-09-07、プロフィール反映済み）**: 「資格の分厚いシラバスを、生成AIで20時間分に圧縮する学習メディア『シラバスハック』公式。無料の入口テキストはこちら」
  - リンク: `https://syllabushack.com/itp-hub`
  - アイコン画像: note同様 `.workspace/draft/brand-assets/icon.png` を使用（Threadsはヘッダー画像非対応のためアイコンのみ）
- [x] **（新規追加）** `.workspace/scripts/scaffold-course.cjs` を `syllabus-ip-2027.json` 対応に改修する（現状はv6.5データ前提。Tier1の8章定義を [`ip-course-curriculum.md`](./ip-course/ip-course-curriculum.md) §3-2 の新章立てに更新） → **完了（2026-09-08）**。2027年JSONの2階層構造（`major_categories→middle_categories`）にローダーを合わせ、章定義を新8章に更新。実行結果の抽出語数が curriculum定義（155/144/70/29/110/64/90/157＝819語）と完全一致することを確認

## 次Weekへの引き継ぎ

- `syllabus-ip-2027.json`・2027年差分分析・Tier1/Tier2の二層カリキュラム確定版 → Week2の診断テスト・用語精選・章立て制作の入力
- テンプレート仕様書（二層モデル対応版） → Week2以降の章立て制作・Week3の実装の共通仕様
