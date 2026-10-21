# 生成AI用語データベース（型のみ）

`genai-ethics-quiz` などのクイズを最新に保つための用語台帳。記事 `/app/genai-ethics-quiz/` の「用語は変わり続ける」節で説明している仕組みの置き場。

**現状は型だけ。`terms.json` の `terms` は空。** 中身は、実際に調べて一次情報で確認してから入れる（記憶で埋めない）。

## ファイル

| ファイル | 役割 |
| --- | --- |
| `schema.json` | 1用語のフィールド定義（JSON Schema） |
| `terms.json` | 台帳本体 |

## status の流れ

```
candidate ──人が一次情報で確認──> confirmed ──使われなくなった──> obsolete
    └──誤り・存在しない・対象外──> rejected
```

- AI が書いてよいのは `status: "candidate"`（または重複・誤りを示す `rejected`）だけ。`addedBy: "ai"` で `confirmed` にはできない（schema で禁止）
- `confirmed` にする条件: `sources` に `kind: "primary"` が1件以上ある / `uncertain` が false / `confirmedAt`・`confirmedBy` を記入
- `obsolete` にしても削除しない。履歴として残し、`obsoleteAt` を記入する
- 問題にするのは `confirmed` の用語だけ。作った問題の id は `relatedQuestionIds` に書く

## 運用の手順

1. 調査（週1回など）: AI に最近の新用語を最大5件集めさせる。依頼文は記事の例を使う
2. AI は `candidate` として `terms.json` に追記する。`id` と `aliases` で既存と重複していないか先に照合する。出典 URL が実在するかは人が開いて確かめる
3. 人が一次情報（公式発表・IPA・規格など）で内容を確かめ、`confirmed` / `rejected` に変える
4. `confirmed` の用語から問題案を作り、`src/data/master/` のクイズ JSON に入れる前に人が見る
5. 使われなくなった用語は `obsolete` に変える

## 記入例（実データではない）

```json
{
  "id": "example-term",
  "name": "例の用語",
  "aliases": ["Example Term"],
  "definition": "（1〜2文の要約）",
  "usage": "（使われる場面）",
  "sources": [
    { "url": "https://example.com/", "title": "（出典のタイトル）", "kind": "primary", "accessedAt": "2026-10-21" }
  ],
  "status": "candidate",
  "uncertain": true,
  "addedAt": "2026-10-21",
  "addedBy": "ai"
}
```

## 検証

```bash
npx --yes ajv-cli validate --spec=draft2020 -c ajv-formats -s .workspace/data-set/genai-terms-db/schema.json -d .workspace/data-set/genai-terms-db/terms.json
```

## 定期実行を足すとき

まだ設定していない。足す場合は、書き込み先を `candidate` の追記だけに限り、1回の件数上限と停止条件を決めてから、小さい範囲で試す。
