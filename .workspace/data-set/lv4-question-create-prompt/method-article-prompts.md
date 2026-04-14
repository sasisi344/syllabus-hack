# 高度試験（Level 4）メソッド記事作成用プロンプト集

このファイルは、`.workspace/tasks/level4-roadmap.md` に記載された「1. 論文系（論述・PM/AU/ST/SA 等）の攻略」セクションのメソッド記事を Antigravity で自動生成するための専用プロンプト集です。

---

## 記事1：プロジェクトマネージャ（PM）午後Ⅱ：実務経験の棚卸しと論文モジュール化

### プロンプト
```text
あなたは「Syllabus Hack」の著者として、高度試験（レベル4）の攻略メソッド記事を執筆してください。
以下の要件を厳守してください。

## 記事のテーマ
【メソッド】プロジェクトマネージャ（PM）午後Ⅱ：実務経験の棚卸しと論文モジュール化プロンプト

## 執筆ルール（GEMINI.md準拠）
1. 保存先: src/data/post/method/pm-pm2-module-hack/index.md
2. 構成:
   - Frontmatter (category: method, examId: pm, type: method, difficulty: advanced)
   - 導入: 2025年度の「最後の手書き試験」から2026年度CBT化を見据えたPM対策の重要性。
   - ターゲット: 論文ネタに困っている、あるいは書くのが遅い受験生。
   - メソッド詳細: 自身の経験をシラバス（品質、コスト、リスク等）に沿って「モジュール化」する技術。
   - 具体的なプロンプト例: 自身の経歴を箇条書きで渡すと、PM試験の設問形式に変換してくれるプロンプト。
   - まとめ: 「まとめ」見出しの直前にのみ `---` を使用。
3. スタイル:
   - 1〜2文ごとに改行し、段落間には必ず空行を入れる。
   - 見出しに `「」` や番号（1. など）を使わない。
   - 重要なキーワード（論文モジュール化 など）の初出のみを太字 ` **キーワード** ` とし、前後に半角スペースを入れる。2回目以降は太字にしない。
   - 見出しの前後には必ず空行を入れる。
4. 画像生成: 
   - 執筆終了後、`.workspace/scripts/Antigravity-nanobana/generate-image.js` を使用して cover.png を作成する。
   - プロンプト: "A simple white flat icon of a modular project structure, vector style, minimalist silhouette, centered on a solid dark navy blue background. No shadows, no gradients, high contrast."
```

---

## 記事2：共通論文添削：シラバスと過去の採点講評を学習させた「AI試験委員」プロンプト

### プロンプト
```text
あなたは「Syllabus Hack」の著者として、高度試験（レベル4）の攻略メソッド記事を執筆してください。
以下の要件を厳守してください。

## 記事のテーマ
【メソッド】共通論文添削：シラバスと過去の採点講評を学習させた「AI試験委員」プロンプトの作成

## 執筆ルール（GEMINI.md準拠）
1. 保存先: src/data/post/method/common-essay-ai-examiner/index.md
2. 構成:
   - Frontmatter (category: method, examId: common, type: method, difficulty: advanced)
   - 導入: 添削指導を受けにくい独学者のための「AI試験委員」という概念。
   - ターゲット: 自分の論文が「A評価」に届くかわからない受験生。
   - メソッド詳細: IPAが公開している「採点講評」や「試験要綱」のエッセンスをプロンプトに注入し、AIに採点者視点を持たせる方法。
   - 具体的なプロンプト例: シラバス5.xの内容を前提に、論理の飛躍や具体性の欠如を厳しく指摘する「鬼の添削プロンプト」。
   - まとめ: 「まとめ」見出しの直前にのみ `---` を使用。
3. スタイル:
   - 記事作成ルール（1〜2文ごとの改行、空行、太字ルール）を徹底。
   - 見出しに `「」` や番号は不要。
4. 画像生成: 
   - 執筆終了後、cover.png を作成。
   - プロンプト: "A simple white flat icon of a magnifying glass inspecting a document, vector style, minimalist silhouette, centered on a solid dark navy blue background. No shadows, no gradients, high contrast."
```

---

## 記事3：ITストラテジスト（ST）：抽象的な経営課題からIT施策への展開・ブレスト術

### プロンプト
```text
あなたは「Syllabus Hack」の著者として、高度試験（レベル4）の攻略メソッド記事を執筆してください。
以下の要件を厳守してください。

## 記事のテーマ
【メソッド】ITストラテジスト（ST）：抽象的な経営課題からIT施策への展開・ブレスト術

## 執筆ルール（GEMINI.md準拠）
1. 保存先: src/data/post/method/st-strategy-brainstorming/index.md
2. 構成:
   - Frontmatter (category: method, examId: st, type: method, difficulty: advanced)
   - 導入: ST試験午後Ⅱで最も苦労する「経営課題とITの紐付け」をAIでハックする。
   - ターゲット: 経営層への提案経験が少なく、論文に具体性が出ないエンジニア。
   - メソッド詳細: 生成AIを「超優秀なコンサルタント」として使い、抽象的な「売上向上」などを具体的な「RAGを活用した顧客応対効率化」といったIT施策に分解するブレスト術。
   - 具体的なプロンプト例: 二段階の思考プロセス（経営課題の特定 → IT解決策の導出）をAIに実行させるプロンプト。
   - まとめ: 「まとめ」見出しの直前にのみ `---` を使用。
3. スタイル:
   - 短い改行、空行、太字の初出ルール、見出しのフォーマットを厳守。
4. 画像生成: 
   - 執筆終了後、cover.png を作成。
   - プロンプト: "A simple white flat icon of a brain connecting to a circuit diagram, vector style, minimalist silhouette, centered on a solid dark navy blue background. No shadows, no gradients, high contrast."
```
