# act-review-w26: W26アクセスデータ取得後にレビューする項目

> W25で実施した施策の効果検証用。1〜2週間後（W26）のGSC/GA4データを取得してから
> 以下の項目を確認すること。完了済みの実施内容は [[act-achieve]] を参照。

---

## 1. nw-mermaid-hack の表示回数・順位確認（act-1 / act-4・act-5の効果検証）

- 対象: `/method/nw-mermaid-hack/`（施策前: 表示5・平均順位約4.8・CTR40.0%）
- 確認内容: act-4（advanced-ipa-certification-high-salary-impact）・act-5
  （vision-to-mermaid-hack / aws-concept-metaphor-hack）からの内部リンク追加後、
  表示回数が増加し、平均順位がTop5以内に改善したか
- 改善が不十分な場合 → 下記#3（act-7）に進む

---

## 2. cbt-2026-syllabus-complete-guide のCTR・順位再確認（act-2）

- 対象: `/method/cbt-2026-syllabus-complete-guide/`（施策前: 表示40・順位9.33・CTR2.5%）
- 確認内容: タイトル案A
  （`【2026年最新】IPA試験CBT完全移行ガイド｜午前午後の名称変更・タイピング練習法まとめ`）
  ・meta description変更後のCTR・順位がどう変化したか
- 06-W24の1回目改善でも効果が限定的だったため、2回目の改善でも変化が小さい場合は
  さらなる差別化要素（競合分析・別キーワード軸）の検討が必要

---

## 3. NWトピッククラスター拡充の着手判断（act-7）

- 上記#1の結果を踏まえ、`/method/nw-mermaid-hack/` の順位がTop5以内に改善しない場合、
  以下の候補から新規記事を1本選定し `/new-post` で着手:
  1. NW科目B 過去問演習プロンプト集（仮タイトル: 「ネットワークスペシャリスト 科目B
     「設定ミス探し」をAIで無限演習する方法」）
  2. VLAN/VRRP/OSPF設定問題の解き方（仮タイトル: 「【NW】VLAN・VRRP・OSPFの頻出パターンを
     AIで図解しながら理解する」）
  3. NWクイズアプリ（中長期・`src/apps/` への追加）
- 改善済みの場合はクローズでよい

---

## 4. sg-beginner-roadmap の効果検証・GA4内訳確認（act-9 / act-3）

- 対象: `/method/sg-beginner-roadmap/`
- 確認内容A: act-9で追加した「次の一歩」セクション（sg-quiz / sg-subject-b-quizへのCTA再掲、
  「次のステップ」接続文追加）により、各リンクのクリック率がどう変化したか
- 確認内容B: act-3でケースA（計測上の分散）と判定したGA4のカテゴリ別5行について、
  GA4生ログでディメンション内訳を確認。実際に複数URL（リダイレクト未設定の旧URL等）への
  分散が見つかった場合はケースBとして再オープンし、`restructure-plan-2026-06.md` の方針に
  従い統合・リダイレクト計画を作成する
