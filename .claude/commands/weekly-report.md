# 週報PPDCA作成

対象週: $ARGUMENTS

GA4/GSCの週次データを分析し、PPDCA週報を `.workspace/.task/w{NN}-weekly-task.md` に書き出す。

## 手順1: 規約とデータの読み込み

以下を<strong>並列で</strong> Read する（手動スキャン・記憶による分析は禁止）:

1. `.workspace/.task/access-data/README.md` — 列の読み方・分析規約（必読）
2. `.workspace/.task/access-data/2026/w{NN}/hikaku-gsc/クエリ.csv`
3. `.workspace/.task/access-data/2026/w{NN}/hikaku-gsc/ページ.csv`
4. `.workspace/.task/access-data/2026/w{NN}/gsc-28days/クエリ.csv`
5. `.workspace/.task/access-data/2026/w{NN}/gsc-28days/ページ.csv`
6. `.workspace/.task/access-data/2026/w{NN}/ga4/` 内のCSV（Globで特定）

- `{NN}` は引数（例: `w29` または `29`）から決定。引数が空の場合は `access-data/2026/` 直下の最新週フォルダを使用
- 対象週のフォルダやCSVが欠けている場合は、READMEの取得規約を提示してユーザーにエクスポートを依頼し、処理を中断する

## 手順2: 前週レポートの読み込み（PPDCA継続性）

- `.workspace/.task/w{NN-1}-weekly-task.md` を Read（なければ `.workspace/.task/task-archieve/` 内の最新週報を探す）
- 前週の「Act（次週のToDo）」を取り出し、今週の Do / Check の評価対象にする
- 前週レポートが存在しない場合は Do / Check を「初回のためベースライン記録」とする

## 手順3: 分析（READMEの規約に従う）

<strong>GSC比較CSVの列は1列目=今週、2列目=前週</strong>（同名重複ヘッダー。READMEの規約参照）。前週の掲載順位 `0` は「表示なし」であり圏外ではない。

### KPIサマリー（週次比較）

- クリック数・表示回数・CTR・平均掲載順位の合計/平均を前週比（実数と%）で算出
- GA4からセッション・アクティブユーザー・エンゲージメント率・平均エンゲージメント時間の総計を前週GA4（`2026/w{NN-1}/ga4/`）と比較

### 定型抽出3点（Act候補の源泉）

1. <strong>リライト最優先候補</strong>: 掲載順位11〜20位 × 表示回数が多いクエリ（28日版を主、7日版で直近勢いを補正）
2. <strong>タイトル・メタ改善候補</strong>: 順位1桁なのにCTRが順位相応より低いページ（目安: 1〜5位で5%未満、6〜10位で2%未満）
3. <strong>追い風テーマ</strong>: 前週比で表示回数が伸びたクエリ → 横展開・新規記事候補

### GA4クロス分析

- GSCで動きのあるLPについて、GA4のエンゲージメント率・滞在時間で「流入後の品質」を確認
- organic以外の流入（bing / direct / SNS）に特徴があれば言及
- 極端な数値（滞在時間の外れ値等）はサンプル数を明記し、過剰解釈しない（週次母数は小さい）

## 手順4: レポート書き出し

`.workspace/.task/w{NN}-weekly-task.md` に以下の構成で Write する:

```markdown
# シラバスハック週報: 2026-W{NN}

対象期間: {GSC 7日間の期間} / データソース: access-data/2026/w{NN}/

---

### Plan（前週Actの引き継ぎ）
- 前週レポートのActを箇条書きで再掲（実施状況: 済/未着手を付記）

### Do（実施施策）
- 今週実施した施策（前週Act由来＋git logやTODO.mdから確認できる作業）

### Check（数値変化・要因仮説）
- KPIサマリー: UU / セッション / クリック / 表示回数 / CTR / 掲載順位 の前週比
- ページ単位の変化と要因仮説（施策との因果を推定。断定しない）
- 定型抽出3点の結果

### Act（次週のToDo・優先度つき）
- [ ] 優先度順のToDo（対象URL・現状数値・期待効果を必ず併記）
```

## 手順5: 完了処理

- レポートのパスとAct（次週ToDo）の要約をユーザーに報告する
- `TODO.md` への転記はユーザーの指示があった場合のみ行う

## 禁止事項

- CSVを読まずに記憶・推測で数値を書くこと
- 週次の小さい母数（クリック数件規模）から統計的断定をすること
- `publishDate` の変更を伴うような修正提案（リライト提案時は `lastmod` 更新のみ言及）
