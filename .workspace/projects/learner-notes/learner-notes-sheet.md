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
| 33 | /course/ip/01-business-basics/ | 財務諸表を時点・期間・現金で読み分ける | exp | 未記入 |
| 34 | /course/ip/01-business-basics/ | 不正を防ぐ仕組みと監査の立場を分ける | think | 未記入 |
| 35 | /course/ip/01-business-basics/ | 守る対象と契約の実態から法令を選ぶ | think | 未記入 |
| 36 | /course/ip/02-strategy-business-model/ | 分析の目的と目標の指標を対応させる | think | 未記入 |
| 37 | /course/ip/02-strategy-business-model/ | 顧客の選び方と収益の仕組みを分ける | think | 未記入 |
| 38 | /course/ip/02-strategy-business-model/ | 課題の対象から業務ツールを選ぶ | exp | 未記入 |
| 39 | /course/ip/03-dx-transformation/ | 小さな検証で不確実性を減らす | think | 未記入 |
| 40 | /course/ip/03-dx-transformation/ | 利用者の行動から課題を定義する | think | 未記入 |
| 41 | /course/ip/03-dx-transformation/ | 事実とふりかえりを次の行動へ変える | exp | 未記入 |
| 42 | /course/ip/04-service-project-management/ | 提供するサービスと品質の合意を結び付ける | think | 未記入 |
| 43 | /course/ip/04-service-project-management/ | 障害の受付・引継ぎ・変更を分けて判断する | think | 未記入 |
| 44 | /course/ip/04-service-project-management/ | 作業範囲・依存関係・日程を別々に捉える | exp | 未記入 |
| 45 | /course/ip/05-pc-system-basics/ | PCの部品を保存・処理・制御で見分ける | think | 未記入 |
| 46 | /course/ip/05-pc-system-basics/ | クラウドを借りる範囲と管理する範囲で選ぶ | think | 未記入 |
| 47 | /course/ip/05-pc-system-basics/ | 情報の探し方とデータ形式を目的に合わせる | think | 未記入 |
| 48 | /course/ip/06-network-database/ | 宛先を見つけ、ネットワークをまたぐ | think | 未記入 |
| 49 | /course/ip/06-network-database/ | データの重複と取り出す操作を見分ける | think | 未記入 |
| 50 | /course/ip/06-network-database/ | 複数の更新を一まとまりで確定する | think | 未記入 |
| 51 | /course/ip/07-data-ai/ | データの責任と意味をライフサイクルで管理する | think | 未記入 |
| 52 | /course/ip/07-data-ai/ | AIの学習方式を正解ラベルと報酬で見分ける | think | 未記入 |
| 53 | /course/ip/07-data-ai/ | 生成AIへ渡す情報と任せる権限を分ける | think | 未記入 |
| 54 | /course/ip/08-security-ethics/ | 守る資産と組織の責任から対策を決める | think | 未記入 |
| 55 | /course/ip/08-security-ethics/ | 認証・本人確認・暗号の目的を分ける | think | 未記入 |
| 56 | /course/ip/08-security-ethics/ | 正しさと公開してよいかを別々に確認する | think | 未記入 |

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

## ITパスポート 第1章 ビジネスの基礎（経営・組織・法規）

- ページ: /course/ip/01-business-basics/（T-18-ip1・ip2 で 2026-11-10 に追加）

### 33. 財務諸表を時点・期間・現金で読み分ける

- 場所: `src/data/course/ip/01-business-basics.mdx` 109行目（見出し「財務諸表を時点・期間・現金で読み分ける」の中）
- 直前の本文: 売上高70万円という大きさだけでは利益を判断できません。固定費と変動費を両方差し引きます。
- 候補: 利益と現金を同じものと考えたか、損益分岐点で割る割合に迷ったか（exp）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 34. 不正を防ぐ仕組みと監査の立場を分ける

- 場所: `src/data/course/ip/01-business-basics.mdx` 150行目（見出し「不正を防ぐ仕組みと監査の立場を分ける」の中）
- 直前の本文: 自ら行った業務を評価する立場になると、独立性や客観性に問題が生じます。
- 候補: 内部監査の「内部」と監査対象からの独立性をどう区別したか（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 35. 守る対象と契約の実態から法令を選ぶ

- 場所: `src/data/course/ip/01-business-basics.mdx` 187行目（見出し「守る対象と契約の実態から法令を選ぶ」の中）
- 直前の本文: 成果や仕様について受託側の責任者と調整することと、受託側の労働者を直接指揮することを区別してください。
- 候補: 請負・準委任・派遣で「何に責任を持つか」と「誰が指示するか」を分けた感想（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

## ITパスポート 第2章 経営戦略とビジネスモデル・ツール活用

- ページ: /course/ip/02-strategy-business-model/（T-18-ip1・ip2 で 2026-11-10 に追加）

### 36. 分析の目的と目標の指標を対応させる

- 場所: `src/data/course/ip/02-strategy-business-model.mdx` 81行目（見出し「分析の目的と目標の指標を対応させる」の中）
- 直前の本文: どちらも好材料ですが、それだけで同じ区分にはなりません。自社の内部にある能力かどうかを確かめます。
- 候補: SWOTの強みと機会を「よい話」としてまとめてしまったか（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 37. 顧客の選び方と収益の仕組みを分ける

- 場所: `src/data/course/ip/02-strategy-business-model.mdx` 153行目（見出し「顧客の選び方と収益の仕組みを分ける」の中）
- 直前の本文: 年齢や住所による市場の細分化も有用な場合がありますが、それをRFMの3軸と取り違えないことがポイントです。
- 候補: STPとRFMで「顧客を見る」という共通点より、使うデータの違いが助けになったか（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 38. 課題の対象から業務ツールを選ぶ

- 場所: `src/data/course/ip/02-strategy-business-model.mdx` 230行目（見出し「課題の対象から業務ツールを選ぶ」の中）
- 直前の本文: SFAは営業活動を支援するシステムで、商談管理が主な課題なら候補になります。略語を見て選ぶ前に、問題の対象範囲を確認します。
- 候補: ERP・CRM・SFA・SCMを「何を管理するか」で説明したときに迷った箇所（exp）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

## ITパスポート 第3章 DXとビジネス変革の考え方

- ページ: /course/ip/03-dx-transformation/（T-18-ip1・ip2 で 2026-11-10 に追加）

### 39. 小さな検証で不確実性を減らす

- 場所: `src/data/course/ip/03-dx-transformation.mdx` 125行目（見出し「小さな検証で不確実性を減らす」の中）
- 直前の本文: 「何に成功したか」を限定して説明し、次に確かめる仮説を選びます。
- 候補: PoCで技術が動くことと事業・運用が成立することを同一視したか（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 40. 利用者の行動から課題を定義する

- 場所: `src/data/course/ip/03-dx-transformation.mdx` 169行目（見出し「利用者の行動から課題を定義する」の中）
- 直前の本文: ペルソナは誰のための設計かを共有する人物像です。両方を組み合わせて使えますが、表す対象が異なります。
- 候補: ペルソナとジャーニーマップ、画面の使いやすさとUXの広さで迷った箇所（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 41. 事実とふりかえりを次の行動へ変える

- 場所: `src/data/course/ip/03-dx-transformation.mdx` 206行目（見出し「事実とふりかえりを次の行動へ変える」の中）
- 直前の本文: アは方向性を表すだけで、行動や検証が決まりません。KPTは分類した表の完成ではなく、次の改善につなげるために使います。
- 候補: KPTのTryを具体的な行動へ直してみたときの気付き（exp）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

## ITパスポート 第4章 サービス・プロジェクトマネジメント

- ページ: /course/ip/04-service-project-management/（T-18-ip1・ip2 で 2026-11-10 に追加）

### 42. 提供するサービスと品質の合意を結び付ける

- 場所: `src/data/course/ip/04-service-project-management.mdx` 80行目（見出し「提供するサービスと品質の合意を結び付ける」の中）
- 直前の本文: 数値が書かれていることだけでSLAと判断せず、誰と誰が何について合意したかを読みます。
- 候補: SLAを数値目標だけで覚え、当事者間の合意という条件を見落としたか（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 43. 障害の受付・引継ぎ・変更を分けて判断する

- 場所: `src/data/course/ip/04-service-project-management.mdx` 123行目（見出し「障害の受付・引継ぎ・変更を分けて判断する」の中）
- 直前の本文: 受付情報や対応状況を窓口で追えるようにし、必要な専門性や権限を持つ担当へつなげます。
- 候補: SPOCの「単一」を一人ですべて解決する意味と取り違えたか（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 44. 作業範囲・依存関係・日程を別々に捉える

- 場所: `src/data/course/ip/04-service-project-management.mdx` 177行目（見出し「作業範囲・依存関係・日程を別々に捉える」の中）
- 直前の本文: 全体を短縮するには、完了時点を決めている経路の条件を見直す必要があります。作業一つの短縮と、プロジェクト全体の短縮を分けて考えます。
- 候補: クリティカルパスの「最長経路が全体の最短所要日数を決める」という関係に迷ったか（exp）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

## ITパスポート 第5章 PC・システムの基礎

- ページ: /course/ip/05-pc-system-basics/（T-18-ip1・ip2 で 2026-11-10 に追加）

### 45. PCの部品を保存・処理・制御で見分ける

- 場所: `src/data/course/ip/05-pc-system-basics.mdx` 88行目（見出し「PCの部品を保存・処理・制御で見分ける」の中）
- 直前の本文: 実際の遅さにはCPUや通信など別の原因もありますが、設問では与えられた条件から判断します。
- 候補: メモリ不足と保存容量不足の判断、RAIDとバックアップの混同（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 46. クラウドを借りる範囲と管理する範囲で選ぶ

- 場所: `src/data/course/ip/05-pc-system-basics.mdx` 171行目（見出し「クラウドを借りる範囲と管理する範囲で選ぶ」の中）
- 直前の本文: 「自由に設定できる」と「事業者がすべて面倒を見てくれる」を同じ長所として選ばないことがポイントです。
- 候補: SaaSからIaaSへの提供範囲と管理責任の向き（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 47. 情報の探し方とデータ形式を目的に合わせる

- 場所: `src/data/course/ip/05-pc-system-basics.mdx` 221行目（見出し「情報の探し方とデータ形式を目的に合わせる」の中）
- 直前の本文: 写真なら多少の画質低下を許容する場面もありますが、集計する数値の一部を失う方式は条件に合いません。
- 候補: LATCHで整理する軸と、画面の見た目を整える原則の区別（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

## ITパスポート 第6章 ネットワークとデータベース

- ページ: /course/ip/06-network-database/（T-18-ip1・ip2 で 2026-11-10 に追加）

### 48. 宛先を見つけ、ネットワークをまたぐ

- 場所: `src/data/course/ip/06-network-database.mdx` 90行目（見出し「宛先を見つけ、ネットワークをまたぐ」の中）
- 直前の本文: 「IPアドレスに関係する」という共通点だけで選ばず、取得・名前解決・変換のどれを求めているかを読みます。
- 候補: DNS・DHCP・NATを取得・名前解決・変換で区別する箇所（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 49. データの重複と取り出す操作を見分ける

- 場所: `src/data/course/ip/06-network-database.mdx` 172行目（見出し「データの重複と取り出す操作を見分ける」の中）
- 直前の本文: その後、必要な列だけを射影できます。表を分ける設計と、分けた表を利用する操作はセットです。
- 候補: 選択は行、射影は列という用語の向きと、結合が必要になる条件（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 50. 複数の更新を一まとまりで確定する

- 場所: `src/data/course/ip/06-network-database.mdx` 216行目（見出し「複数の更新を一まとまりで確定する」の中）
- 直前の本文: コミットは成功した処理を確定する操作です。確定済みの過去の処理を、いつでも通常のロールバックで取り消せるという意味ではありません。
- 候補: 排他制御とデッドロック、確定前の取消と確定後の修正の区別（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

## ITパスポート 第7章 データとAI

- ページ: /course/ip/07-data-ai/（T-18-ip1・ip2 で 2026-11-10 に追加）

### 51. データの責任と意味をライフサイクルで管理する

- 場所: `src/data/course/ip/07-data-ai.mdx` 95行目（見出し「データの責任と意味をライフサイクルで管理する」の中）
- 直前の本文: 意味の不一致も品質の問題につながるため、二つの管理は無関係ではありません。「何を直すか」を具体化することが大切です。
- 候補: データガバナンスと日々の管理、DIKWの段階の違い（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 52. AIの学習方式を正解ラベルと報酬で見分ける

- 場所: `src/data/course/ip/07-data-ai.mdx` 181行目（見出し「AIの学習方式を正解ラベルと報酬で見分ける」の中）
- 直前の本文: 学習データに合うことと、今後のデータに役立つことを区別する問題です。
- 候補: 分類も教師あり学習になること、過学習と未見データの評価（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 53. 生成AIへ渡す情報と任せる権限を分ける

- 場所: `src/data/course/ip/07-data-ai.mdx` 225行目（見出し「生成AIへ渡す情報と任せる権限を分ける」の中）
- 直前の本文: RAGがあれば無断送信の問題まで解決するわけではなく、資料の正しさや承認の実効性もそれぞれ確かめます。
- 候補: RAGと追加学習の違い、参照知識と実行権限の区別（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

## ITパスポート 第8章 セキュリティと情報倫理

- ページ: /course/ip/08-security-ethics/（T-18-ip1・ip2 で 2026-11-10 に追加）

### 54. 守る資産と組織の責任から対策を決める

- 場所: `src/data/course/ip/08-security-ethics.mdx` 135行目（見出し「守る資産と組織の責任から対策を決める」の中）
- 直前の本文: リスクの対応方法は一つだけに限らず、低減策や対応体制を組み合わせます。
- 候補: リスク共有と責任の消滅の混同、機密性だけでは停止を防げないこと（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 55. 認証・本人確認・暗号の目的を分ける

- 場所: `src/data/course/ip/08-security-ethics.mdx` 184行目（見出し「認証・本人確認・暗号の目的を分ける」の中）
- 直前の本文: 誰の公開鍵・秘密鍵を使い、何を確かめたいのかを分けると、暗号化との混同を避けられます。
- 候補: 多段階と多要素、署名と暗号化で鍵の持ち主が違うこと（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 56. 正しさと公開してよいかを別々に確認する

- 場所: `src/data/course/ip/08-security-ethics.mdx` 264行目（見出し「正しさと公開してよいかを別々に確認する」の中）
- 直前の本文: 本人の同意や公開範囲、利用目的、組織の規程などを確かめます。AIの回答が正しいことだけで公開の根拠にはなりません。
- 候補: 真偽の確認と公開の可否、XAIとHITLの役割の違い（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 57. 守る価値と弱点を切り分ける

- 場所: `src/data/course/sg/01-security-threats.mdx` 82行目（見出し「守る価値と弱点を切り分ける」の中）
- 直前の本文: 扱う用語: 機密性／完全性／可用性／真正性／責任追跡性／否認防止／信頼性／情報資産／アクセス権の誤設定。
- 候補: 脅威と脆弱性、漏えいと改ざんの切り分け（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 58. AIへの攻撃を入力経路から判定する

- 場所: `src/data/course/sg/01-security-threats.mdx` 186行目（見出し「AIへの攻撃を入力経路から判定する」の中）
- 直前の本文: 扱う用語: マルウェア亜種の自動生成／フィッシング文面の巧妙化／ディープフェイク・音声クローンによるなりすまし／プロンプトインジェクション（直接，間接）／ジェイルブレイク／データポイズニング。
- 候補: 間接的なプロンプトインジェクションとデータポイズニングの違い（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 59. 暗号・署名・認証を目的で選ぶ

- 場所: `src/data/course/sg/01-security-threats.mdx` 228行目（見出し「暗号・署名・認証を目的で選ぶ」の中）
- 直前の本文: 鍵の使い分けは[暗号・認証とセキュリティ対策の基礎](/theory/security-controls-crypto-incident-basics/)で復習できます。
- 候補: 暗号化と署名で使う鍵の持ち主が逆になる点（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 60. 資産の目録から利用条件を決める

- 場所: `src/data/course/sg/02-security-management.mdx` 81行目（見出し「資産の目録から利用条件を決める」の中）
- 直前の本文: 扱う用語: 情報資産／情報資産台帳／情報の分類／情報のラベル付け／情報の転送／認証情報／アクセス権。
- 候補: need-to-knowと本人認証、最小特権の関係（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 61. リスクの大きさと対応後の残りを評価する

- 場所: `src/data/course/sg/02-security-management.mdx` 132行目（見出し「リスクの大きさと対応後の残りを評価する」の中）
- 直前の本文: 扱う用語: リスク基準／リスク所有者／リスク態度（リスク選好，リスク回避的態度）／リスク対応計画／残留リスク／リスクコミュニケーション。
- 候補: 低減と移転を併用した場合の残留リスク（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 62. 委託しても残る責任と事故時の連携を決める

- 場所: `src/data/course/sg/02-security-management.mdx` 220行目（見出し「委託しても残る責任と事故時の連携を決める」の中）
- 直前の本文: 扱う用語: クラウドサービスの責任共有モデル／供給者関係における情報セキュリティ／情報セキュリティ事象の報告／情報セキュリティ関連組織（CSIRT，PSIRT，SOC（Security Operation Center））／国家サイバー統括室（NCO）／脅威インテリジェンス。
- 候補: 委託先の安全管理と利用者側の責任、SOCとCSIRTの境界（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 63. 脆弱性情報を対処の優先順位に変える

- 場所: `src/data/course/sg/03-security-controls.mdx` 84行目（見出し「脆弱性情報を対処の優先順位に変える」の中）
- 直前の本文: 扱う用語: 共通脆弱性識別子（CVE）／共通脆弱性タイプ一覧（CWE）／共通脆弱性評価システム（CVSS）／脆弱性診断／ペネトレーションテスト／脆弱性情報の収集。
- 候補: CVE・CWE・CVSSの役割と優先順位の違い（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 64. 通信・端末・ログのどこを守るか選ぶ

- 場所: `src/data/course/sg/03-security-controls.mdx` 164行目（見出し「通信・端末・ログのどこを守るか選ぶ」の中）
- 直前の本文: 扱う用語: 境界防御／ファイアウォール／IDS（侵入検知システム）／IPS（侵入防止システム）／EDR（Endpoint Detection and Response）／SIEM（Security Information and Event Management）／WAF（Web Application Firewall）。
- 候補: 誤検知と見逃し、EDRとSIEMで見る場所の違い（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 65. WebとAIの処理に権限制御を組み込む

- 場所: `src/data/course/sg/03-security-controls.mdx` 241行目（見出し「WebとAIの処理に権限制御を組み込む」の中）
- 直前の本文: 防御の仕組みを補うには[暗号・通信保護とセキュリティ対策の基礎](/theory/security-controls-crypto-incident-basics/)へ進んでください。
- 候補: AIへの注意文とデータ側のアクセス制御の違い（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 66. 個人情報の利用・提供・加工を分ける

- 場所: `src/data/course/sg/04-legal-compliance.mdx` 139行目（見出し「個人情報の利用・提供・加工を分ける」の中）
- 直前の本文: 扱う用語: 個人情報／個人データ／保有個人データ／個人識別符号／個人情報データベース等／第三者提供／プライバシー影響評価（PIA）。
- 候補: 仮名加工情報と匿名加工情報、マスキングの違い（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 67. 委託の責任と指揮命令を区別する

- 場所: `src/data/course/sg/04-legal-compliance.mdx` 214行目（見出し「委託の責任と指揮命令を区別する」の中）
- 直前の本文: 扱う用語: 民法（準委任契約，請負契約）／労働基準法／労働者派遣法（雇用契約，派遣契約，指揮命令，偽装請負）／外部委託契約／守秘契約（NDA）／中小受託取引適正化法（取適法）。
- 候補: 請負・準委任の約束と、指揮命令という別の判断軸（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 68. AIと情報発信に人の確認を組み込む

- 場所: `src/data/course/sg/04-legal-compliance.mdx` 258行目（見出し「AIと情報発信に人の確認を組み込む」の中）
- 直前の本文: AIの権利と倫理は[生成AIの法律と倫理](/theory/ai-law-ethics-basics/)、試験全体の学び方は[SG合格ロードマップ](/method/sg-hub/)へ進めます。
- 候補: AI学習利用のオプトアウトと第三者提供のオプトアウトの違い（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 69. 提供範囲から管理する仕事を見分ける

- 場所: `src/data/course/sg/05-it-fundamentals.mdx` 79行目（見出し「提供範囲から管理する仕事を見分ける」の中）
- 直前の本文: 深掘り: [SaaS・PaaS・IaaSの提供範囲と利用者の責任](/theory/cloud-saas-paas-iaas-basics/)
- 候補: クラウドの提供範囲と利用側の設定責任の区別（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 70. 保存先と残し方を別々に確かめる

- 場所: `src/data/course/sg/05-it-fundamentals.mdx` 112行目（見出し「保存先と残し方を別々に確かめる」の中）
- 直前の本文: 扱う用語: クラウドサービスの提供形態（パブリッククラウド，プライベートクラウド，ハイブリッドクラウド，マルチクラウドなど）／ソブリンクラウド／オンプレミスとクラウドとの違い／データ保持の方法／リージョン／クラスタ／シンクライアント。
- 候補: 冗長化・同期と過去の状態へ戻すバックアップの違い（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 71. 名前と設定情報を分けて障害を切り分ける

- 場所: `src/data/course/sg/05-it-fundamentals.mdx` 177行目（見出し「名前と設定情報を分けて障害を切り分ける」の中）
- 直前の本文: 深掘り: [ネットワークとDBの基礎のうちTCP/IP・サブネット・DNSの解説](/theory/network-database-fundamentals/)
- 候補: DNSで名前を調べることとDHCPで設定を取得することの違い（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 72. 復旧と原因解消を別の目的として扱う

- 場所: `src/data/course/sg/06-management.mdx` 109行目（見出し「復旧と原因解消を別の目的として扱う」の中）
- 直前の本文: 扱う用語: サービスデスク／インシデント管理／重大なインシデント／エスカレーション／サービス要求管理／サービス要求／問題管理／既知の誤り／傾向分析／根本原因／予防処置。
- 候補: サービスが復旧しても原因が未解消の場合の管理の違い（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 73. 変更前の判断と変更後の構成をつなぐ

- 場所: `src/data/course/sg/06-management.mdx` 141行目（見出し「変更前の判断と変更後の構成をつなぐ」の中）
- 直前の本文: 扱う用語: 変更管理／リリース及び展開管理／資産管理／構成管理／構成品目（CI）／サービス受入れ基準／移行／運用引継ぎ／需要管理／サービス可用性管理／ホットスタンバイ／コールドスタンバイ／サービス継続計画。
- 候補: 変更の承認・展開・構成更新を別の作業として考える難しさ（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 74. 統制の運用を独立した評価で確かめる

- 場所: `src/data/course/sg/06-management.mdx` 181行目（見出し「統制の運用を独立した評価で確かめる」の中）
- 直前の本文: システム管理基準は管理状況を評価する際の判断尺度として用い、システム監査基準と区別します。予備調査で対象を把握し、本調査で証拠を集め、結論と報告につなげる流れを押さえてください。
- 候補: 日常点検と独立した監査、および事故ゼロを保証しない統制の考え方（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 75. 利益と現金と資産を別の資料で読む

- 場所: `src/data/course/sg/07-strategy.mdx` 108行目（見出し「利益と現金と資産を別の資料で読む」の中）
- 直前の本文: 深掘り: [P/L・B/S・C/Fと損益分岐点の読み方](/theory/corporate-finance-pl-bs-cf-roi-basics/)
- 候補: 利益があることと現金が増えることの違い（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 76. データの出所と偏りから結論の範囲を決める

- 場所: `src/data/course/sg/07-strategy.mdx` 142行目（見出し「データの出所と偏りから結論の範囲を決める」の中）
- 直前の本文: 深掘り: [平均・分散と標本の取り方](/theory/statistics-mean-variance-probability-sampling/)
- 候補: データの件数が増えても調査の偏りが消えない理由（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 77. AIの検索・出力・実行に別々の条件を設ける

- 場所: `src/data/course/sg/07-strategy.mdx` 203行目（見出し「AIの検索・出力・実行に別々の条件を設ける」の中）
- 直前の本文: 深掘り: [RAG・マルチモーダルAIなど生成AIの用語](/theory/generative-ai-terms-basics/)
- 候補: 出力のランダム性を下げることと正確性・実行権限の制御の違い（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 78. 要求事項を四つの側面と継続時の条件で示す

- 場所: `src/data/course/sg/08-practice-casestudy.mdx` 115行目（見出し「要求事項を四つの側面と継続時の条件で示す」の中）
- 直前の本文: 深掘り: [BCPとBCMを業務の優先順位から考える](/theory/bcm-bcp-business-continuity/)
- 候補: 復旧できることと緊急時にも安全に利用できることの違い（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 79. 日常運用と委託先の実施状況を記録で確かめる

- 場所: `src/data/course/sg/08-practice-casestudy.mdx` 146行目（見出し「日常運用と委託先の実施状況を記録で確かめる」の中）
- 直前の本文: 扱う用語・技能: マルウェアからの保護／バックアップ／ログ取得及び監視／情報の転送における情報セキュリティの維持／脆弱性管理／利用者アクセスの管理／運用状況の点検／外部委託先の情報セキュリティの調査／外部委託先の管理における情報セキュリティの確保／外部委託の終了。技能6・7。
- 候補: 委託先への依頼と実施結果の確認を分ける必要性（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 

### 80. 異常の発見と初動で被害と証拠を守る

- 場所: `src/data/course/sg/08-practice-casestudy.mdx` 185行目（見出し「異常の発見と初動で被害と証拠を守る」の中）
- 直前の本文: 深掘り: [インシデント対応とセキュリティ対策の関係](/theory/security-controls-crypto-incident-basics/)
- 候補: 証拠収集の掲載順と初動から保全する実際の流れの違い（think）

判定（記入／削除）: 

種類（think／question／exp）: 

本文:

> 
