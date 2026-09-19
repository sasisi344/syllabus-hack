# trend用語解説バッチ ブラッシュアップ計画

対象: 2026-03-31に一括公開されたtrend/配下の用語解説記事 30本（`knowledge.type: theory`設定済み・URLはcategory_rules.mdの境界ルールにより維持）

## 背景・データ

- GSC 28日間（W37, 2026-09-13時点）で表示回数0件の記事が30本中20本、CTR0%を含めると大半が実質無風。
- category_rules.md 2026-06-18決定により、これら用語記事はURL変更なし・trend/theoryハブへの統合もしない方針が既に明記されている（ゼロトラスト・RAG・MLOpsが名指し例）。
- よって対応方針は「URL維持・中身の充実化」。

## クラスタ分類（RelatedPosts内部リンク強化用）

RelatedPostsのスコアリングは `同カテゴリ+5 / 共有タグ1件+1`。30本は全てcategory:trendなので、クラスタ外の他trend記事と区別するにはクラスタ共通タグが必要。

| クラスタ | 記事 | 共通タグ |
|---|---|---|
| 情報セキュリティ系 (6) | zero-trust-architecture, multi-factor-authentication, ransomware-security, sql-injection-vulnerability, cross-site-scripting, targeted-threat-email | `情報セキュリティ` |
| 生成AI・AIガバナンス系 (9) | ai-ethics-governance, ai-opt-out-policy, copyright-ai-generated, explainable-ai-xai, hallucination-ai-error, multi-modal-ai, rag-ai-system, deepfake, ai-assistant, mlops | `生成AI` |
| 経営・サステナビリティ系 (6) | dei-diversity-equity-inclusion, human-capital-management, human-capital-reporting-iso30414, ooda-loop, gx-green-transformation, dx-digital-transformation | `経営戦略`（human-capital系は`人的資本経営`で既に相互リンク済み） |
| 開発手法系 (4) | agile-development, scrum-agile, devops | `開発モデル`（mlopsはAIクラスタ側に寄せた） |
| 単発・強制クラスタ化しない (4) | 5g-technology, web3-nft, reskilling-it-passport, typing-speed-60wpa, invoice-system | — |

## 進捗（2026-09-19 完了分）

再読した結果、当初の想定と異なり本文自体は既にpost_writer.md準拠の構成（3行まとめ→シラバス位置付け→出題ポイント→AIハック→まとめ）で書かれており、「薄い」というより「内部リンクが機能していない孤立ページ」が真の原因と判明。方針を「本文加筆」から「内部リンク網の修復」に切り替えて実施。

- [x] **タグ統一によるクラスタ内部リンク強化**（RelatedPosts用、13本編集）: zero-trust-architecture, multi-factor-authentication, ransomware-security, sql-injection-vulnerability, targeted-threat-email, ai-ethics-governance, explainable-ai-xai, mlops, dx-digital-transformation, gx-green-transformation, devops
- [x] **構造的欠陥の修正**:
  - ai-opt-out-policy: 「試験での出題ポイント」「まとめ・次のステップ」セクションが重複していたバグを除去
  - ai-ethics-governance: 「まとめ・次のステップ」セクション自体が欠落していた（記事が尻切れ）ため新規追加
  - multi-factor-authentication: 同じく「まとめ・次のステップ」欠落を追加
- [x] **本文内「次は◯◯」リンクの実リンク化（19箇所）**: 本文中で次記事名をbold強調するだけで`<a href>`が付いていなかったため、全て実リンクに変換。これにより30記事中26記事が下記の1本の連続した内部リンク導線でつながった:
  - `ransomware-security → targeted-threat-email → zero-trust-architecture → multi-factor-authentication → sql-injection-vulnerability → cross-site-scripting → deepfake → dei-diversity-equity-inclusion → devops`
  - `ai-assistant → copyright-ai-generated → cross-site-scripting`（上の鎖と合流）
  - `explainable-ai-xai → gx-green-transformation → human-capital-reporting-iso30414 → invoice-system → mlops → multi-modal-ai → ooda-loop`
  - `reskilling-it-passport → dx-digital-transformation → human-capital-management → rag-ai-system → hallucination-ai-error → theory/prompt-engineering-basics`
  - `ai-ethics-governance → ai-opt-out-policy → theory/prompt-engineering-basics`
- [x] agile-development / scrum-agile はタグ確認のみ（`開発モデル`共有済み・変更不要）。5g-technology / web3-nft / typing-speed-60wpa は独立記事として現状維持（無理にクラスタ化しない）

## 残タスク・運用ルール

- [ ] 表示回数0件が続く場合、次回GSCデータ（4週間後目安）で内部リンク修復後の改善を確認する。改善が見られなければ「削除 or 統合」を再検討する
- [ ] 同様の「bold強調のみでリンクなし」パターンが他カテゴリ（theory等）にも残っていないか、時間があれば横展開でチェックする
- [ ] pnpm build でのリンク切れ確認は未実施（次回作業時に要確認）
