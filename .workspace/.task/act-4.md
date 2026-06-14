# act-4: nw-mermaid-hack への内部リンク追加（advanced-ipa-certification-high-salary-impact）

> 元タスク: TODO.md Act「`/method/nw-mermaid-hack/`への内部リンクを`career/advanced-ipa-certification-high-salary-impact`から追加」
> 親タスク: [[act-1]]

## 対象ファイル

`src/data/post/career/advanced-ipa-certification-high-salary-impact/index.md`
（年収1,000万超えも視野に！高度試験合格がもたらす市場価値の飛躍）

## 現状確認結果

- 本文は見出し（`##`）を使わない平文構成（54行目「まとめ：最高峰への挑戦が、あなたの世界を変える」も見出しタグなし）
- PM試験・ST試験を中心に解説しており、NW（ネットワークスペシャリスト）への言及は**現状ゼロ**
- 48〜50行目に「PM試験」「ST試験」の能力を箇条書きで紹介する段落がある

## 設計（挿入方針）

PM/ST中心の記事に唐突にNWの話を挿入すると文脈が不自然になるリスクがあるため、以下の2案を検討する。

### 案A（推奨）: 48〜50行目の箇条書きに「NW試験」の項目を追加
高度試験は「PM/ST/SC/NW/DB/ES/AU」等の総称であることを踏まえ、3つ目の例として
ネットワークスペシャリスト試験を追加し、学習法として `/nw-mermaid-hack` へリンクする。

文案イメージ:
> - <strong>NW試験</strong>：大規模ネットワークの設計・構築・運用能力。ネットワークスペシャリスト試験では、
>   要件定義から構成図への落とし込みが合格の鍵になります。Mermaidを使った構成図の書き方は
>   [ネットワーク図の覚え方・書き方](/nw-mermaid-hack) で詳しく解説しています。

### 案B: まとめ段落（54行目以降）に「高度試験は分野ごとに学習法が異なる」という一文を追加し、
NW志望者向けの導線として `/nw-mermaid-hack` をリンク

## 完了条件

- [ ] 案A or Bでリンクを1箇所追加
- [ ] リンク先パスは `/nw-mermaid-hack`（permalink仕様: `/{slug}/` 形式、カテゴリ無し）
- [ ] lastmod更新
- [ ] `pnpm build` で404・リンク切れがないことを確認
