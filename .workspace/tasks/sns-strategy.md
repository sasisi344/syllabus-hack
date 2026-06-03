# SNS投稿戦略（X / Threads）

> 作成日: 2026-05-31  
> 目的: 既存記事のインデックス促進・認知拡大・Xフォロワー獲得

---

## 基本方針

- **投稿頻度**: X は 1日1〜2投稿（平日）、Threads は X と同内容で連携
- **ピックアップ順**: publishDate の古い順（埋もれているが価値ある記事を掘り起こす）
- **投稿目的**: 記事への流入 + シラバスハックの思想発信

---

## 投稿テンプレート

### タイプA：学習メソッド型（method カテゴリ）

```
【AIで資格勉強を変える】

[記事の核心を1文で]

▶ [具体的な内容3点 箇条書き]

詳しくはこちら→ [URL]

#ITパスポート #基本情報技術者 #資格勉強 #生成AI活用
```

### タイプB：試験情報・トレンド型（trend カテゴリ）

```
[試験名] 受験者へ重要情報📋

[ニュースの要点 1〜2文]

→ [影響・読者がすべき行動]

詳細: [URL]

#[試験名] #情報処理技術者試験
```

### タイプC：キャリア考察型（career カテゴリ）

```
「[資格名] 意味ない」と言われるが——

[実際のデータや事実 1文]
[反論の核心 1文]

こう使えば武器になる→ [URL]

#資格 #転職 #キャリア
```

### タイプD：クイズ・アプリ告知型（app カテゴリ）

```
無料CBT演習アプリ更新しました

✅ [試験名]
✅ [特徴 1点]
✅ [問題数 or 対応分野]

スキマ時間に試してみてください→ [URL]

#[試験名] #CBT #資格対策
```

---

## ピックアップ記事リスト（古い順）

スクリプトで生成→ `.workspace/task-results/article-index.md` を publishDate 昇順でソートして使う。

```bash
node -e "
const fs = require('fs');
const content = fs.readFileSync('.workspace/task-results/article-index.md', 'utf-8');
const lines = content.split('\n').filter(l => l.startsWith('| ') && !l.startsWith('| :') && !l.includes('Unknown'));
const sorted = lines.sort((a,b) => {
  const da = (a.match(/\| (\d{4}-\d{2}-\d{2})/) || ['','0'])[1];
  const db = (b.match(/\| (\d{4}-\d{2}-\d{2})/) || ['','0'])[1];
  return da.localeCompare(db);
});
sorted.slice(0,20).forEach(l => console.log(l));
"
```

---

## ハッシュタグ辞典

| 試験 | 推奨タグ |
|---|---|
| ITパスポート | `#ITパスポート #iパス #IT資格` |
| 基本情報技術者 | `#基本情報技術者 #FE試験 #科目B` |
| 応用情報技術者 | `#応用情報技術者 #AP試験` |
| CCNA | `#CCNA #ネットワークエンジニア` |
| AWS | `#AWS #AWSクラウド #クラウドエンジニア` |
| FP2級 | `#FP2級 #ファイナンシャルプランナー` |
| MOS | `#MOS #Excel資格` |
| 共通 | `#資格勉強 #生成AI活用 #リスキリング #シラバスハック` |

---

## インデックス促進チェックリスト

新記事公開時に実施する手順:

1. `git push` でデプロイ完了を確認
2. Google Search Console の「URL検査 → インデックス登録をリクエスト」を実行
3. X / Threads で投稿（タイプA〜Dから選択）
4. 記事の `lastmod` が今日の日付になっているか確認

---

## 定点観測メモ（週次）

| 週 | インデックス済み記事数 | 主なクリック数増加記事 | 備考 |
|---|---|---|---|
| 2026-W22 | - | - | 計測開始 |
| 2026-W23 | - | - | Phase1〜5完了。sg-hub/advanced-ipa-hub/gemini-cert-complete/chatgpt-cert-complete 新規追加。draft記事13本(Gemini3+NotebookLM10)。FAQPage Schema実装。 |
