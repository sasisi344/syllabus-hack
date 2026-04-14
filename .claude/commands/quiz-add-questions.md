# クイズ問題を既存 JSON に追加

対象: $ARGUMENTS
（例: `it-passport` / `sg` / `fe` / `genai-pass` など examId を指定）

既存の問題 JSON に新規問題を安全に追加します。

## 手順

### Step 1: スキル・既存データ読み込み（並列）

- Read `.agents/quiz_data_rules.md` — スキーマ・ID命名規則を確認
- Read `.agents/quiz_app_rules.md` §2 — examId カタログで対象ファイルパスを確認
- Read `src/data/master/questions-{examId}.json` — 既存問題数・末尾 ID・分野バランスを把握

### Step 2: 現状分析レポート

既存データから以下を集計して報告する:

```
総問題数: XX 問
分野別内訳:
  strategy:      XX 問
  management:    XX 問
  technology:    XX 問
  generative-ai: XX 問
  practical:     XX 問
難易度別内訳:
  beginner:      XX 問
  intermediate:  XX 問
  advanced:      XX 問
最新の ID: {最後の id}
```

### Step 3: 追加問題の仕様確認

ユーザーに以下を確認する（引数で指定済みの場合はスキップ）:

1. 追加する問題数
2. 対象分野（指定なしは全分野バランス）
3. 難易度分布
4. 出典（過去問年度 / 予想問題）

### Step 4: ID 採番ルール確認

`quiz_data_rules.md` §3 の命名規則に従い、連番を決定する:

| examId        | ID prefix | 例          |
| ------------- | --------- | ----------- |
| `it-passport` | `ip-`     | `ip-r06-01` |
| `sg`          | `sg-`     | `sg-r06-01` |
| `fe`          | `fe-`     | `fe-r06-01` |
| `genai-pass`  | `gp-`     | `gp-p01-01` |
| `genai-ip`    | `gi-`     | `gi-p01-01` |
| `ap-a-quiz`   | `ap-`     | `ap-r06-01` |

既存の最大連番を確認し、重複しない番号から採番する。

### Step 5: 問題データ生成

以下の必須フィールドをすべて含む JSON オブジェクトを生成する:

```json
{
  "id": "{prefix}-{年度}-{連番2桁}",
  "examId": "{examId}",
  "field": "strategy | management | technology | generative-ai | practical",
  "subField": "中分類名（シラバス準拠）",
  "year": "R06秋 | 予想問題",
  "questionNumber": 1,
  "text": "問題文（末尾に「〜はどれか。」形式を推奨）",
  "choices": [
    { "label": "ア", "text": "選択肢テキスト" },
    { "label": "イ", "text": "選択肢テキスト" },
    { "label": "ウ", "text": "選択肢テキスト" },
    { "label": "エ", "text": "選択肢テキスト" }
  ],
  "correctLabel": "ア",
  "explanation": "正解の根拠と各選択肢の解説",
  "keywords": ["キーワード1", "キーワード2", "キーワード3"],
  "difficulty": "beginner | intermediate | advanced"
}
```

**FE 科目B の場合の追加ルール**:

- `text` 内に擬似言語コードブロックを含める
- 変数名・予約語（`true` / `false` / `return` 等）は**日本語に翻訳禁止**
- `subField` に「アルゴリズム」または「プログラミング」を明記

### Step 6: 重複・整合性チェック

追加前に以下を Grep で確認する:

```
Grep パターン: "{新しいid}"
対象: src/data/master/questions-{examId}.json
```

- [ ] ID が既存データと重複していないか
- [ ] `correctLabel` が `choices` の `label` に存在するか
- [ ] `examId` フィールドが引数と一致しているか

### Step 7: JSON に追記

`src/data/master/questions-{examId}.json` を Read → Edit で末尾配列に追記する。

**注意**: JSON 全体を上書きするのではなく、配列末尾への追記を Edit で行う。

### Step 8: 完了報告

```
追加した問題数: X 問
追加後の総問題数: XX 問
新規 ID 範囲: {最初のID} 〜 {最後のID}
分野バランス（追加後）:
  strategy: XX 問
  ...
```
