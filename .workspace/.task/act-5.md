# act-5: nw-mermaid-hack への内部リンク追加（vision-to-mermaid-hack / aws-concept-metaphor-hack）

> 元タスク: TODO.md Act「`/method/nw-mermaid-hack/`への内部リンクを`method/vision-to-mermaid-hack`・`theory/aws-concept-metaphor-hack`から追加」
> 親タスク: [[act-1]]

## 対象ファイル

1. `src/data/post/method/vision-to-mermaid-hack/index.md`（手書きノートが1秒でMermaidに）
2. `src/data/post/theory/aws-concept-metaphor-hack/index.md`（AWS Mermaid構成図の作り方）

両方とも「Mermaid」を主題とした図解ハック系記事で、nw-mermaid-hack（ネットワーク構成図のMermaid活用）とテーマ的な親和性が高い。

## 現状確認結果

- `vision-to-mermaid-hack`: 78行目「## まとめ：学習は「考えること」に集中せよ」セクションが末尾。
  persona欄に「ネットワークやAWSの勉強で『図』を書くのが手間で〜」と明記されており、NW学習者が想定読者に含まれる
- `aws-concept-metaphor-hack`: 123行目「## まとめ：クラウドは「イメージ」できれば勝てる」セクションが末尾

## 設計（挿入方針）

### vision-to-mermaid-hack
「まとめ」セクション末尾に、応用例として一文追加:
> たとえばネットワークスペシャリスト試験のような構成図中心の試験対策には、
> [ネットワーク図の覚え方・書き方｜MermaidとAIで複雑な要件を視覚化するハック術](/nw-mermaid-hack) も参考にしてください。

### aws-concept-metaphor-hack
「まとめ」セクション末尾に、関連記事として一文追加:
> AWS以外にも、ネットワークスペシャリスト試験向けのMermaid活用法は
> [ネットワーク図の覚え方・書き方](/nw-mermaid-hack) で解説しています。

## 完了条件

- [ ] 両ファイルの「まとめ」セクション末尾に `/nw-mermaid-hack` へのリンクを追加
- [ ] lastmod更新
- [ ] `pnpm build` でリンク切れがないことを確認
