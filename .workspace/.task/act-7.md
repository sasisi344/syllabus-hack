# act-7: NWトピッククラスター拡充（nw-mermaid-hackをハブとする続編記事）

> 元タスク: TODO.md Act「NWトピッククラスター拡充: nw-mermaid-hackをハブとした続編記事（科目B過去問演習等）を新規作成」
> 親タスク: [[act-1]]（act-4/act-5の内部リンク追加で改善しない場合の中長期施策）

## 背景

`/method/nw-mermaid-hack/` への被リンクが `advanced-ipa-hub` のみと薄い。
内部リンク追加（[[act-4]] [[act-5]]）だけでは改善が限定的な場合、
NW試験の関連トピックで新規記事を増やし、自然な内部リンク網を形成する。

## 現状のNW関連記事

- `method/nw-mermaid-hack`（公開済み）— ネットワーク図のMermaidハック
- `method/advanced-ipa-hub`（公開済み）— 高度試験ハブ（SC/NW/PM/DB/ST/SA分野別）

## 新規記事案（候補・要件定義は別途 `/new-post` フローで実施）

1. **NW科目B 過去問演習プロンプト集**
   - 仮タイトル: 「ネットワークスペシャリスト 科目B「設定ミス探し」をAIで無限演習する方法」
   - 内容: 構成図（Mermaid）→ 設定ファイル・パラメータの不整合を見抜く演習をAIに生成させるプロンプト
   - nw-mermaid-hackへ「構成図の書き方は前提記事を参照」という形でリンク

2. **VLAN/VRRP/OSPF設定問題の解き方**
   - 仮タイトル: 「【NW】VLAN・VRRP・OSPFの頻出パターンをAIで図解しながら理解する」
   - nw-mermaid-hackのプロンプト例を実際の頻出プロトコルに当てはめた実践編という位置づけ

3. **NWクイズアプリ（中長期）**
   - `src/apps/` にNW向けクイズアプリを追加する場合、quiz_app_rules.md / quiz_data_rules.md に準拠
   - app記事から nw-mermaid-hack へのリンクも追加可能

## 進め方

- [[act-4]] [[act-5]] の実施後、1〜2週間のGSC観測結果次第で着手判断
- 着手する場合は `.agents/post_writer.md` + `category_rules.md` を参照し `/new-post` で要件定義から開始

## 完了条件

- [ ] act-4/act-5実施後の順位観測結果を記録
- [ ] 改善不十分な場合、候補記事から1本を選定して `/new-post` で着手
