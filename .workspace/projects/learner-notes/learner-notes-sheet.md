# LEARNER_NOTE 記入シート（T-15）

- タスク: `.task-management/task.md` T-15。記事・コースに置いた LEARNER_NOTE の候補を、筆者が callout で書くか、要らなければ消す
- 使い方: 各項目の「判定」に `記入` か `削除` を書く。`記入` のときは「種類」と「本文」を埋める。CC が記事の該当行（マーカー）を callout に置き換え、一覧の状態を `反映済` にする
- 種類: `think`（ここ、引っかからない？）・`question`（この問題、ここが気になる）・`exp`（やってみて思ったこと）。`exp` は実際に受験・学習・実務で使った範囲だけ（`src/data/author-exam-status.ts`）。未受験の資格は think・question のみ。AIの実行結果への一言はどの記事でも書ける
- 本文は1〜3文。「簡単です」「当然ですが」は使わない。解説は本文に任せる（CLAUDE.md「学習体験の共有ルール」）
- 反映のとき、メモ書きは意味を変えずに ですます調へ整える（誤字も直す）。記事には整えた文が入る
- #27・#32 は種類が exp だったが、生成AIパスポートは未受験のため規約（未受験の資格のコースでは exp を書かない）に合わせて think で反映した（11/01）
- 1つの H2 に callout が2個になる場合は1個に統合する（11/01: #17 は既存の exp と、#26 は既存の exp とまとめた）
- 2026-11-01 時点の記事・コースのマーカーから作った（draft のコースを含む）。#27〜32 は 11/01 に検収した第5・6章の分。マーカーが増えたら CC が末尾に項目を足す（記入済みの欄は消さない）

---

## 一覧

| # | ページ | 見出し | 種類（候補） | 状態 |
|---|---|---|---|---|
| 1 | /course/genai-pass/01-ai-basics-history/ | 種類を選ぶか、数値を出すか | think | 削除済（11/01） |
| 2 | /course/genai-pass/01-ai-basics-history/ | 覚えた問題だけ得意にならないために | think | 反映済（11/01） |
| 3 | /course/genai-pass/01-ai-basics-history/ | 期待と限界を分ける | think | 反映済（11/01） |
| 4 | /course/genai-pass/02-genai-mechanism/ | 広く学ぶ、目的に合わせる、人が評価する | think | 反映済（11/01） |
| 5 | /course/genai-pass/02-genai-mechanism/ | 揺らぎを変える設定の役割 | think | 反映済（11/01） |
| 6 | /course/genai-pass/03-llm-models-modalities/ | 重みの公開と、利用条件を分ける | think | 反映済（11/01） |
| 7 | /course/genai-pass/03-llm-models-modalities/ | サービスの特徴を公式情報で比べる | think | 反映済（11/01） |
| 8 | /course/genai-pass/03-llm-models-modalities/ | 出どころの手がかりを読む | think | 削除済（11/01） |
| 9 | /course/genai-pass/04-ai-agent-rag/ | 人が入る場所を先に決める | think | 反映済（11/01） |
| 10 | /course/genai-pass/04-ai-agent-rag/ | 発展形を目的で見分ける | think | 反映済（11/01） |
| 11 | /course/genai-pass/04-ai-agent-rag/ | 結果を見て修正し、条件で止める | think | 反映済（11/01） |
| 12 | /career/shuukatsu-shikaku-imi-nai/ | Claudeで実行した結果 | think | 削除済（11/01） |
| 13 | /method/ai-dj-pomodoro/ | Geminiで実行した結果 | think | 反映済（11/01） |
| 14 | /method/aws-hub/ | AI対話でインフラ概念を理解する | think | 反映済（11/01） |
| 15 | /method/bilmen-4tenset-junban/ | Geminiで試した結果：日程を渡さずに頼むとどうなるか | think | 反映済（11/01） |
| 16 | /method/gemini-cert-complete/ | シラバス分野の概念理解 | think | 反映済（11/01） |
| 17 | /method/new-ipa-exam-study-strategy/ | Geminiで実行した結果 | think | 反映済（11/01） |
| 18 | /method/notebooklm-features-guide/ | 用語の自分事化——抽象概念を自分のことに変換する | think | 削除済（11/01） |
| 19 | /method/nw-mermaid-hack/ | 手書きの図が合っているか、写真でAIに確かめる | think | 反映済（11/01） |
| 20 | /method/secretarial-cost-time-knowledge/ | Claudeで実行した結果 | think | 反映済（11/01） |
| 21 | /method/shobo-setsubi-kanbetsu-ai-hack/ | Claudeで試した結果：根拠を渡さずに頼むとどうなるか | think | 反映済（11/01） |
| 22 | /method/takken-hub/ | 民法を「登場人物の関係図」にして理解する | think | 反映済（11/01） |
| 23 | /theory/hicchi-shikaku-toha/ | ChatGPTで実行した結果 | think | 削除済（11/01） |
| 24 | /theory/shikaku-kamoku-menjo-ichiran/ | ChatGPTで実行した結果 | think | 反映済（11/01） |
| 25 | /trend/fintech-it-cert-intro/ | Claudeで試した結果：例え話だけを頼むとどうなるか | think | 反映済（11/01） |
| 26 | /trend/ipa-2026-cbt-schedule-guide/ | 予約済みの科目Bから学習計画を作る追加プロンプト | think | 反映済（11/01） |
| 27 | /course/genai-pass/05-mcp-agent-risk/ | 作業手順を渡す仕組み | think | 反映済（11/01） |
| 28 | /course/genai-pass/05-mcp-agent-risk/ | 途中で止めて被害の連鎖を防ぐ | think | 反映済（11/01） |
| 29 | /course/genai-pass/06-risk-prevention/ | 使う・慎重に使う・使わないを選ぶ | think | 反映済（11/01） |
| 30 | /course/genai-pass/06-risk-prevention/ | 利用の跡を残し、困ったら相談する | think | 削除済（11/01） |
| 31 | /course/genai-pass/06-risk-prevention/ | 正しい事実でも結論が合うかを見る | think | 反映済（11/01） |
| 32 | /course/genai-pass/06-risk-prevention/ | 要約した後も共有範囲を絞る | think | 反映済（11/01） |

---

## 第1章 AIの基礎と歴史

- ページ: /course/genai-pass/01-ai-basics-history/（`src/data/course/genai-pass/01-ai-basics-history.mdx`）

### 1. 種類を選ぶか、数値を出すか

- 場所: `src/data/course/genai-pass/01-ai-basics-history.mdx` 97行目（見出し「種類を選ぶか、数値を出すか」の中）
- 直前の本文: 答え：前者は回帰、後者は分類です。入力の天気データではなく、答えとして何を出すかで分けます。
- 候補: 数字を出す分類と回帰の見分け（think）

判定（記入／削除）: 削除

種類（think／question／exp）: 

本文:

> 

### 2. 覚えた問題だけ得意にならないために

- 場所: `src/data/course/genai-pass/01-ai-basics-history.mdx` 195行目（見出し「覚えた問題だけ得意にならないために」の中）
- 直前の本文: 答え：続ける前に過学習を疑います。検証結果を見て止めることは対策の一つです。
- 候補: 学習用の高得点と汎化の違い（think）

判定（記入／削除）: 記入
種類（think／question／exp）: exp

本文:ひとつにこだわり続けると他が止まってしまう。切り替えることも重要。切り替えるためにも、詰まった部分はメモをしておく。これもアウトプット。

> 

### 3. 期待と限界を分ける

- 場所: `src/data/course/genai-pass/01-ai-basics-history.mdx` 310行目（見出し「期待と限界を分ける」の中）
- 直前の本文: 答え：できません。将来の仮説を、性能保証や確定した予定に置き換えています。
- 候補: 研究史の事実と将来の仮説の区別（think）

判定（記入／削除）: 記入

種類（think／question／exp）: think

本文:試験問題は事実が前提にあるのでそこから発展した仮説を入れても対象にならない。そこは別で考える必要がある。

> 

## 第2章 生成AIのしくみ：技術・学習・生成

- ページ: /course/genai-pass/02-genai-mechanism/（`src/data/course/genai-pass/02-genai-mechanism.mdx`）

### 4. 広く学ぶ、目的に合わせる、人が評価する

- 場所: `src/data/course/genai-pass/02-genai-mechanism.mdx` 123行目（見出し「広く学ぶ、目的に合わせる、人が評価する」の中）
- 直前の本文: 答え：異なります。前者はファインチューニング、後者はその入力を参照した生成であり、重みを更新したとは限りません。
- 候補: 質問を送ることとモデルの追加学習の混同（think）

判定（記入／削除）: 記入

種類（think／question／exp）: exp

本文:個人で使っている限りAIの自己学習を実感するのは「こいつわかってるな」と思う部分だと思う。よく学習するとはいわれるが、個人がLLM全体に与える影響は軽微。

> 

### 5. 揺らぎを変える設定の役割

- 場所: `src/data/course/genai-pass/02-genai-mechanism.mdx` 215行目（見出し「揺らぎを変える設定の役割」の中）
- 直前の本文: 答え：不十分です。設定を変えるより先に原典を確かめ、引用が実在するかを確認する必要があります。
- 候補: 出力の揺らぎと事実の正しさを別に考える点（think）

判定（記入／削除）: 記入

種類（think／question／exp）: exp

本文:記事を書く分野では揺らぎというランダム性は必要だけど、人間の質問に対する答えに揺らいではいけない。AIの答えを信用しすぎるのは、悪意がある人間のいうことよりは信頼できるものの、裏取りとしてファクトチェックすることが大事。それも学びになる。

> 

## 第3章 LLMと主要モデル・各モダリティ

- ページ: /course/genai-pass/03-llm-models-modalities/（`src/data/course/genai-pass/03-llm-models-modalities.mdx`）

### 6. 重みの公開と、利用条件を分ける

- 場所: `src/data/course/genai-pass/03-llm-models-modalities.mdx` 83行目（見出し「重みの公開と、利用条件を分ける」の中）
- 直前の本文: 答え：結論付けられません。再配布や用途の条件をライセンスで確認する必要があります。
- 候補: 重みの公開と自由な利用を同一視しやすい点（think）

判定（記入／削除）: 記入

種類（think／question／exp）: think

本文:LLMモデルごとの重みについては一般の人間が理解するのは時間がかかる。体験するうえでのコンテキストが浅いか深い程度の違いはわかるけど、技術の根幹を支える部分を日常で理解していても、こちらから修正することが難しいので、深く考えず用語を覚えればいい。

> 

### 7. サービスの特徴を公式情報で比べる

- 場所: `src/data/course/genai-pass/03-llm-models-modalities.mdx` 152行目（見出し「サービスの特徴を公式情報で比べる」の中）
- 直前の本文: />
- 候補: モデルの能力とサービス側の機能の違い（think）

判定（記入／削除）: 記入

種類（think／question／exp）: exp

本文:よくモデル別でベンチマークテストをやっているのを見る。私はそこを性能差とは考えていない。サービスごとに無料で試せるなら試してみて、こちらの質問にどう返したかで選択するのがいい。早いか遅いかは重要じゃなく、答えをなるべく短い過程で出してくれるほうが「良い」と思うはず。

> 

### 8. 出どころの手がかりを読む

- 場所: `src/data/course/genai-pass/03-llm-models-modalities.mdx` 206行目（見出し「出どころの手がかりを読む」の中）
- 直前の本文: 答え：言えません。来歴の検証と、出来事が実在したかの確認は別です。来歴のない画像を即座に偽物と断定することもできません。
- 候補: 来歴の確認と内容の真実性の違い（think）

判定（記入／削除）: 削除

種類（think／question／exp）: 

本文:

> 

## 第4章 AIエージェントとRAG

- ページ: /course/genai-pass/04-ai-agent-rag/（`src/data/course/genai-pass/04-ai-agent-rag.mdx`）

### 9. 人が入る場所を先に決める

- 場所: `src/data/course/genai-pass/04-ai-agent-rag.mdx` 71行目（見出し「人が入る場所を先に決める」の中）
- 直前の本文: 答え：候補がそろった後、購入の実行前です。最後に結果を見るだけでは、すでに起きた購入を止められません。
- 候補: 自律性を高めることと承認をなくすことの違い（think）

判定（記入／削除）: 記入

種類（think／question／exp）: think

本文:自律させるにしても最終決定権は人間に置いたほうがいい例。ただし利便性を考えると許容する部分もある。

> 

### 10. 発展形を目的で見分ける

- 場所: `src/data/course/genai-pass/04-ai-agent-rag.mdx` 157行目（見出し「発展形を目的で見分ける」の中）
- 直前の本文: 答え：Graph RAGです。関係を表したデータの整備が必要であり、導入するだけですべての回答が正しくなるわけではありません。
- 候補: RAGの発展形を単純な性能順位として覚えやすい点（think）

判定（記入／削除）: 記入

種類（think／question／exp）: think

本文:用語としては頻出するので基礎理念から理解しておいたほうがいい。

> 

### 11. 結果を見て修正し、条件で止める

- 場所: `src/data/course/genai-pass/04-ai-agent-rag.mdx` 244行目（見出し「結果を見て修正し、条件で止める」の中）
- 直前の本文: 答え：まず実際に成立していないかを照会し、不明なら止めて人に確認します。無条件の再試行は、二重処理につながるおそれがあります。
- 候補: 自動の再計画と無制限な再試行の違い（think）

判定（記入／削除）: 記入

種類（think／question／exp）: think

本文:理想を探すためには目標を設定しないといけない。再試行が増えるということは答えがありそうだけどない状態が存在するので、ループ処理がうまくいっていない。resourceを軽減するためにも、目標設定を十分にディスカッションしておく必要がある。

> 

## 就活で資格は意味ない？募集要項とガクチカから優先順位を決める

- ページ: /career/shuukatsu-shikaku-imi-nai/（`src/data/post/career/shuukatsu-shikaku-imi-nai/index.md`）

### 12. Claudeで実行した結果

- 場所: `src/data/post/career/shuukatsu-shikaku-imi-nai/index.md` 117行目（見出し「Claudeで実行した結果」の中）
- 直前の本文: このプロセスの利点は、<strong>資格の合否に関わらずガクチカが完成する</strong>ことです。仮に本番で不合格だったとしても、学習過程で工夫し続けた事実そのものが評価対象になります。資格取得を目指す行動自体が、目的意識・計画力・継
- 候補: Claudeの実行例で、ログの事実とAIの意味づけを見比べて気づいた点（think）

判定（記入／削除）: 削除

種類（think／question／exp）: 

本文:

> 

## ポモドーロのBGMをAIで選ぶ｜25分の学習を邪魔しない試し方

- ページ: /method/ai-dj-pomodoro/（`src/data/post/method/ai-dj-pomodoro/index.md`）

### 13. Geminiで実行した結果

- 場所: `src/data/post/method/ai-dj-pomodoro/index.md` 80行目（見出し「Geminiで実行した結果」の中）
- 直前の本文: 25分の曲を指定しても、長さや曲調がそのまま実現するとは限らないため、区切りの管理には独立したタイマーを使います。
- 候補: このプロンプトを実行し、条件を絞り直す必要があった箇所（think）

判定（記入／削除）: 記入

種類（think／question／exp）: exp

本文:ポモドーロは私にとって「タスクをやりだすためのスイッチ」として使っている。タイマーと連動して曲が流れるようにするのもアプリ設計として重要だと思う。人それぞれ求めていることは違うけど、違うからこそアイデアになる。

> 

## AWS・CCNA・LPICの取る順番｜インフラエンジニアの資格ロードマップ

- ページ: /method/aws-hub/（`src/data/post/method/aws-hub/index.md`）

### 14. AI対話でインフラ概念を理解する

- 場所: `src/data/post/method/aws-hub/index.md` 122行目（見出し「AI対話でインフラ概念を理解する」の中）
- 直前の本文: 対応表を受け取ったら、共通点だけでなく相違点も聞きます。AWSではセキュリティグループはリソース単位、ネットワークACLはサブネット単位で作用します。単純に同じACLだと覚えないでください。[AWSのVPCセキュリティ](https://d
- 候補: 上記プロンプトの実際の回答で、対応表だけでは理解できず聞き直した点（think）

判定（記入／削除）: 記入

種類（think／question／exp）: think

本文:対応表を見るだけで理解するなら苦労はないので、AWSの広い機能性を理解するためにもまずは地道に「自分と関連深いだろう機能と性能を探す」ことからはじめて興味を掘り下げていく。（11/01 追記）

> 

## ビルメン4点セットの取得順番｜求人条件と申込期限から決めるルート

- ページ: /method/bilmen-4tenset-junban/（`src/data/post/method/bilmen-4tenset-junban/index.md`）

### 15. Geminiで試した結果：日程を渡さずに頼むとどうなるか

- 場所: `src/data/post/method/bilmen-4tenset-junban/index.md` 163行目（見出し「Geminiで試した結果：日程を渡さずに頼むとどうなるか」の中）
- 直前の本文: 提案を受け取ったら、週の合計時間、必須資格の期限、技能・講習の枠を自分でも照合します。日程が合わなければ「今年中に4つ」の条件を外して作り直します。
- 候補: 上記プロンプトを実行し、講習や技能練習の抜けを指摘して組み直した実際のやりとり（think）

判定（記入／削除）: 記入

種類（think／question／exp）: think

本文:スケジューリングをするにも学習要領とか日常のどこに時間が使えるかで1日あたりの学習可能時間が違ってくる。調整は自分でやるべきだがAIに「あなたの日常を理解させること」でより柔軟なスケジューリングが可能になる。これもAIテクニックになる。

> 

## Geminiで資格勉強をする方法｜IT用語・科目B・記述の確認手順

- ページ: /method/gemini-cert-complete/（`src/data/post/method/gemini-cert-complete/index.md`）

### 16. シラバス分野の概念理解

- 場所: `src/data/post/method/gemini-cert-complete/index.md` 114行目（見出し「シラバス分野の概念理解」の中）
- 直前の本文: 上の結果にある文字数の誤差は、指定した形式がそろっていても細部の確認が必要な例です。「試験でよく問われる」というAIの説明も、出題の実績は公式問題で照合して使います。
- 候補: 同じBSCプロンプトの出力を確認し、説明が役立った所または誤差に気づいた点（think）

判定（記入／削除）: 記入

種類（think／question／exp）: exp

本文:AIは同じ質問でも毎回違うように出してくるので文字数の違いは誤差の範囲内。公式の問題と違っていたとしても、出題されている本文をみると見知ったキーワードがあるはず。それを組み合わせて文章を作成しているのがAI。

> 

## 新IPA試験の勉強法｜区分選びとデータ・AIを使った学習計画

- ページ: /method/new-ipa-exam-study-strategy/（`src/data/post/method/new-ipa-exam-study-strategy/index.md`）

### 17. Geminiで実行した結果

- 場所: `src/data/post/method/new-ipa-exam-study-strategy/index.md` 115行目（見出し「Geminiで実行した結果」の中）
- 直前の本文: 2つ目は、試験区分です。確認問題は応用情報によく出る一般的な内容で、回答の最後に「どの試験区分か」を聞き返されました。最初の設定に「受ける区分：応用情報技術者試験」のように1行足すと、問題の範囲がしぼられます。
- 候補: 既存のGemini学習計画で区分の指定を足した際の違い（think）

判定（記入／削除）: 記入

種類（think／question／exp）: think

本文:AIに何も伝えないと何も返ってこないので、試験区分とか何を学びたいかどこから学びたいかを明確に伝えることが重要。それが面倒だと思っているのなら、あなたは他人に仕事とか勉強を教えるのが下手だとかいわれたことがあるかもしれない。

> 

## NotebookLM（Gemini Notebook）資格試験活用ガイド｜2026年版・機能別の使い倒し方

- ページ: /method/notebooklm-features-guide/（`src/data/post/method/notebooklm-features-guide/index.md`）

### 18. 用語の自分事化——抽象概念を自分のことに変換する

- 場所: `src/data/post/method/notebooklm-features-guide/index.md` 194行目（見出し「用語の自分事化——抽象概念を自分のことに変換する」の中）
- 直前の本文: たとえ話が出てきたら、資料の定義と対応する部分、対応しない部分を確認します。生活上の例を、試験の正式な定義として覚えないようにします。
- 候補: CRMのたとえを原典に戻して確認した際の気づき（think）

判定（記入／削除）: 削除

種類（think／question／exp）: 

本文:

> 

## ネットワーク図の書き方｜NW試験の要件をAIでMermaidの構成図にする（科目B・旧午後対策）

- ページ: /method/nw-mermaid-hack/（`src/data/post/method/nw-mermaid-hack/index.md`）

### 19. 手書きの図が合っているか、写真でAIに確かめる

- 場所: `src/data/post/method/nw-mermaid-hack/index.md` 209行目（見出し「手書きの図が合っているか、写真でAIに確かめる」の中）
- 直前の本文: 「直した図は作らない」がポイントです。AIが正しい図を出すと、それを写して終わりになりがちです。どこが違うかだけを聞いて、自分で描き直すほうが、本番の問題用紙で図を描く力につながります。
- 候補: 手書き図の読み取りでAIに指摘された点と実際の図との照合（think）

判定（記入／削除）: 記入

種類（think／question／exp）: exp

本文:考えながら図を書くなら手書きが多いわけで、例えば回路図を書いたなら写真にとって線画を綺麗に整形した画像を作成してくれる。とはいえ手書きを取り込むのも「これは回路図？」みたいな分析は得意だけど、ぶれた線や繋がっていない部分を補完してくれるほど万能じゃないことは理解しておくべき。AI相手ならmarmeidのほうがいいけれどmarmeidは人間のほうが書くの面倒だから、手書きでサンプルを作るのが無難。

> 

## 秘書検定2級・3級の費用と勉強時間｜身につく知識で選ぶ

- ページ: /method/secretarial-cost-time-knowledge/（`src/data/post/method/secretarial-cost-time-knowledge/index.md`）

### 20. Claudeで実行した結果

- 場所: `src/data/post/method/secretarial-cost-time-knowledge/index.md` 157行目（見出し「Claudeで実行した結果」の中）
- 直前の本文: 資料にない「最も安全」などの理由は、根拠を作らず不明としてください。
- 候補: 席次のAI説明を教材と照合した際の気づき（think）

判定（記入／削除）: 記入

種類（think／question／exp）: think

本文:席次の説明は文章だと難しいので図解にしてくれたほうが助かる。その場合でもまずは席次の概念をAIが理解している必要がある。これはマナーだから人によって考えがブレるしマナー講師の話がノイズになりやすい。だからClaudeに頼むなら「秘書検定で出題される席次について━━」と前提条件をつけたほうがいい。

> 

## 消防設備士の鑑別が覚えられない？AIで見分ける根拠を整理する覚え方

- ページ: /method/shobo-setsubi-kanbetsu-ai-hack/（`src/data/post/method/shobo-setsubi-kanbetsu-ai-hack/index.md`）

### 21. Claudeで試した結果：根拠を渡さずに頼むとどうなるか

- 場所: `src/data/post/method/shobo-setsubi-kanbetsu-ai-hack/index.md` 99行目（見出し「Claudeで試した結果：根拠を渡さずに頼むとどうなるか」の中）
- 直前の本文: 回答の最後には「教本の記述と食い違う点があれば、教本を優先してください」と添えられていました。根拠を渡さずに頼むと、もっともらしい識別点が混ざり、その確認は自分でするしかありません。上のプロンプトで、教材で確認した内容だけを根拠にさせている
- 候補: 連想セットにAIが補った未確認の特徴を教材と照合した結果（think）

判定（記入／削除）: 記入

種類（think／question／exp）: exp

本文:消防設備士のナレッジがClaudeのLLMに備わっているかが重要ではあるが、ここではシラバスを渡している前提で話すと、教本以外の話題はすべて推測で話していると判断してもいい。シラバス（教材）にあることがすべてで遵守することを前提にしていないと、例題を出すときにハルシネーションが起きやすいから、テキストを一括で出すと販売テキストに負ける可能性がある。

> 

## 宅建（宅地建物取引士）合格ロードマップ｜合格率18%の壁をAI学習でどう越えるか

- ページ: /method/takken-hub/（`src/data/post/method/takken-hub/index.md`）

### 22. 民法を「登場人物の関係図」にして理解する

- 場所: `src/data/post/method/takken-hub/index.md` 237行目（見出し「民法を「登場人物の関係図」にして理解する」の中）
- 直前の本文: 先に登記した買主が常に保護される、と覚えるのは避けます。第三者の範囲など、結論に影響する条件は教材の解説で確認してください。対抗要件の条文は[民法第177条](https://laws.e-gov.go.jp/law/129AC000000
- 候補: Geminiで関係を整理した実際の回答を見て、例外の質問が必要だった箇所（think）

判定（記入／削除）: 記入

種類（think／question／exp）: think

本文:宅建の民法では人と人との関わりがよく出る。売買契約があるので当然だけど、相対関係を文章にすると非常にややこしいので、家系図みたいに相関関係をイラストで提示するとわかりやすいこともある。これは直感的なほうが理解しやすい人に向いている。

> 

## 必置資格とは？求人で確認する配置義務・選任・名義貸しの違い

- ページ: /theory/hicchi-shikaku-toha/（`src/data/post/theory/hicchi-shikaku-toha/index.md`）

### 23. ChatGPTで実行した結果

- 場所: `src/data/post/theory/hicchi-shikaku-toha/index.md` 124行目（見出し「ChatGPTで実行した結果」の中）
- 直前の本文: 資料にない条件は不明としてください。
- 候補: AIの比較表で資格名と選任役職の違いを確認した感想（think）

判定（記入／削除）: 削除

種類（think／question／exp）: 

本文:

> 

## 資格の科目免除一覧｜他資格の組み合わせと申請条件の確認方法

- ページ: /theory/shikaku-kamoku-menjo-ichiran/（`src/data/post/theory/shikaku-kamoku-menjo-ichiran/index.md`）

### 24. ChatGPTで実行した結果

- 場所: `src/data/post/theory/shikaku-kamoku-menjo-ichiran/index.md` 136行目（見出し「ChatGPTで実行した結果」の中）
- 直前の本文: 記載がない他資格への読み替えや、免除できるという推測はしないでください。
- 候補: 免除条件のAI抽出を原典と突き合わせた際の気づき（think）

判定（記入／削除）: 記入

種類（think／question／exp）: exp

本文:学術的な話題をする時は前提条件として、リサーチに個人サイトは含めないを入れたほうがいい。一次情報を提供する論文系からのみ取得するようにしたほうがいい。

> 

## 金融IT検定とは？難易度の見方とITパスポートの次に選ぶ条件

- ページ: /trend/fintech-it-cert-intro/（`src/data/post/trend/fintech-it-cert-intro/index.md`）

### 25. Claudeで試した結果：例え話だけを頼むとどうなるか

- 場所: `src/data/post/trend/fintech-it-cert-intro/index.md` 133行目（見出し「Claudeで試した結果：例え話だけを頼むとどうなるか」の中）
- 直前の本文: 例えだけを頼むと、こうしたずれが説明の中に混ざったまま残ります。上のプロンプトで「例え話が実際の制度・システムと一致しない部分を明示して」と頼んでいるのは、このためです。
- 候補: 金融用語の例え話で理解が進んだ点と教材に戻って修正した点（think）

判定（記入／削除）: 記入

種類（think／question／exp）: think

本文:AIはたとえ話が苦手というか、あなたにわかるように例えるのが難しいともいえる。

> 

## 応用情報・高度試験CBTの申込日程と試験期間｜前期はAPが11月7日まで

- ページ: /trend/ipa-2026-cbt-schedule-guide/（`src/data/post/trend/ipa-2026-cbt-schedule-guide/index.md`）

### 26. 予約済みの科目Bから学習計画を作る追加プロンプト

- 場所: `src/data/post/trend/ipa-2026-cbt-schedule-guide/index.md` 288行目（見出し「予約済みの科目Bから学習計画を作る追加プロンプト」の中）
- 直前の本文: 最初に、学習対象の科目と利用可能な日数を示してください。
- 候補: 追加プロンプトの実行後、終了済みの科目を除外できたか公式日程と照合した所感（think）
- 注意: 直前の AI_EXAMPLE（T-14）を実行してから書く。実行しない場合は「削除」

判定（記入／削除）: 記入

種類（think／question／exp）: think

本文:これから受けるぞ、と試験日を予約してすでに申し込みを完了してから、勉強期間はすでに最大限が決まっているからいいにしても、習熟度から期間内でどのように配分するかは都度調整していく必要がある。ある程度はもう学習しているなら全期間を復習とか過去問を問いていればいいけれど、ゼロから学ぶのであれば「人間の疲労」も考慮する必要がある。このスケジューリングであなたは将来あるかもしれないマネジメントを体感しているはず。

> 

## 第5章 MCP・ツール活用・エージェントのリスク

- ページ: /course/genai-pass/05-mcp-agent-risk/（`src/data/course/genai-pass/05-mcp-agent-risk.mdx`）

### 27. 作業手順を渡す仕組み

- 場所: `src/data/course/genai-pass/05-mcp-agent-risk.mdx` 89行目（見出し「作業手順を渡す仕組み」の中）
- 直前の本文: 答え：考えられません。作業の指示と、送信を実行する権限・承認は別です。
- 候補: MCPでつなぐこととスキルで手順を渡すことの違い（think）

判定（記入／削除）: 記入

種類（think／question／exp）: exp

本文:MCPで繋ぐほうが効率的に見えるかもしれないけど、毎回固定された作業を渡すならskillと組み合わせたほうが効率的では？と思う。MCPを使うならツールを遠隔操作するイメージ。skillは決まった作業を繰り返すならのテンプレート。

> 

### 28. 途中で止めて被害の連鎖を防ぐ

- 場所: `src/data/course/genai-pass/05-mcp-agent-risk.mdx` 206行目（見出し「途中で止めて被害の連鎖を防ぐ」の中）
- 直前の本文: 答え：不十分です。送信前に止められる位置へ承認を置き、承認内容と実際の操作を一致させます。
- 候補: 人が最後に見ることと実行前に止められることの違い（think）

判定（記入／削除）: 記入

種類（think／question／exp）: think

本文:自律させると問題になるのが想定されてない作業まですること。事前に「やってはいけないことリスト」を作成しておいてルールに取り込んでおくと、こういったインシデントを防ぐことはできる。でも完全じゃないから、指示をする場合は慎重に。「あ、間違った」と思ったらESC押すとか停止を押す。

> 

## 第6章 生成AIのリスク予防（使う人の判断）

- ページ: /course/genai-pass/06-risk-prevention/（`src/data/course/genai-pass/06-risk-prevention.mdx`）

### 29. 使う・慎重に使う・使わないを選ぶ

- 場所: `src/data/course/genai-pass/06-risk-prevention.mdx` 96行目（見出し「使う・慎重に使う・使わないを選ぶ」の中）
- 直前の本文: 答え：確定できません。判断を保留し、担当者へ期限と不足条件を伝えます。急ぎであることは確認を省く根拠になりません。
- 候補: AIを使わない判断と単に使うのが怖い状態の分かれ目（think）

判定（記入／削除）: 記入

種類（think／question／exp）: think

本文:AIを使わない判断は人それぞれだし部署もそれぞれ。AIが使えない分野も確かに存在するから、なんでもAIといえば稟議が通るわけでもない。業務にマッチする未来が確実にあることが前提。

> 

### 30. 利用の跡を残し、困ったら相談する

- 場所: `src/data/course/genai-pass/06-risk-prevention.mdx` 258行目（見出し「利用の跡を残し、困ったら相談する」の中）
- 直前の本文: 答え：入力を止めて相談し、承認された別の方法や期限の調整を求めます。管理外の窓口へ移して解決しません。
- 候補: 同じサービス名でも個人契約と組織の承認を分ける必要（think）

判定（記入／削除）: 削除

種類（think／question／exp）: 

本文:

> 

### 31. 正しい事実でも結論が合うかを見る

- 場所: `src/data/course/genai-pass/06-risk-prevention.mdx` 310行目（見出し「正しい事実でも結論が合うかを見る」の中）
- 直前の本文: 答え：適用の前提と抜け漏れを直します。引用が実在する確認だけでは、案内全体の妥当性は確保できません。
- 候補: 事実が正しくても結論の妥当性を別に見る理由（think）

判定（記入／削除）: 記入

種類（think／question／exp）: think

本文:結論を出すなら「個人の意見」という前提を入れる。引用をもとに意見を出すなら無難な方法。

> 

### 32. 要約した後も共有範囲を絞る

- 場所: `src/data/course/genai-pass/06-risk-prevention.mdx` 516行目（見出し「要約した後も共有範囲を絞る」の中）
- 直前の本文: 答え：いけません。出力に残る情報と共有の許可を確かめ、必要な閲覧者に限定します。
- 候補: 氏名の削除や要約でも入力と共有の制限が残る理由（think）

判定（記入／削除）: 記入

種類（think／question／exp）: exp

本文:要約すると短い文章で大きな情報をえている気分になるが、実際は前後の文脈が失われたり重要な部分を削ったりする。要約するにもケースバイケース。

> 
