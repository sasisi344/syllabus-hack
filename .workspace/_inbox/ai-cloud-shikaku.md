# AI・クラウド関連の資格をリサーチ

- 調査日: 2026-11-21
- 用途: 「資格から探す」のAI・クラウド分野を増やすための内部調査メモ。記事原稿ではない。
- 対象: 国内の主要AI検定、AWS・Microsoft Azure・Google Cloudの主要認定、周辺のAI認定。
- 確認方法: 主催者の公式情報に加え、資格取得意向・保有状況・求人集計を確認。優先度とサイト上の分類はCodexの提案。検索ボリューム・競合・収益性は未実査。
- 「現行」は制度が提供されている意味。定期開催の検定は、今日申し込めるとは限らない。

## 日本・欧米のエンジニア向けに選別した結果

ユーザーの追加条件「日本／欧米のエンジニアの間で知名度・人気があるもの」を優先する。前回の「入門の選択肢を増やす」基準による8枠案を、この選別結果に差し替えた。下段の広い一覧は比較資料として残す。

クラウドはAWS・Azure・Google Cloudの技術認定を中心にする。日本のAI系はG検定・E資格を残す。欧米向けにはクラウドネイティブ分野のCKAも加える。新しいAI認定は、提供元の知名度だけで「その資格が人気」と判定しない。

### 日本のエンジニア向け

| 扱い | 資格 | 選定理由と根拠 | 根拠の限界 |
|---|---|---|---|
| 最優先 | AWS Solutions Architect - Associate（SAA） | 国内AWS利用エンジニア調査で取得予定の最多資格［J1］。既存AWS Hubの代表にする | AWS利用者に限る調査。全エンジニアの順位ではない |
| 入門枠 | AWS Cloud Practitioner（CLF） | 同調査で取得割合が最多［J1］ | 技術設計・実装の技能証明としてSAAと同列にしない |
| 優先 | Azure Administrator Associate（AZ-104） | 国内でAWSとともに言及されるAzure認定［J2］の中から、運用技術者向けの代表として選ぶ | 国内資料はAzure認定群の集計。AZ-104単独の人気順位は未確認 |
| 入門枠 | Azure Fundamentals（AZ-900） | Azure認定群の国内認知［J2］に加え、国際調査で個別資格の保有規模を確認［W1］ | 国際的な保有数を日本の保有数としない |
| 次点 | Google Cloud Associate Cloud Engineer（ACE） | Google Cloudの構築・運用を担う代表候補。米国求人で資格名の言及あり［W2］ | 日本での個別資格の人気比較は未確認。AWSより人気とは判定しない |
| AIの既存主軸 | G検定 | 国内調査の取得意向上位［J2］、主催者の累計受験規模［J3］ | ビジネス職を含む。エンジニア専用資格ではない |
| AIの追加優先 | E資格 | エンジニア向けの認定として提供され、受験規模を確認できる［J3］ | G検定より規模は小さい。受験には認定プログラム修了が必要 |

生成AIパスポートは国内の取得意向が高く［J2］、既存枠として維持する。ただしエンジニアの技術資格を増やす今回の追加枠では、E資格やクラウド技術認定を先にする。

### 欧米のエンジニア向け

米国の求人調査・英国の求人集計・国際的な資格調査を使う。「欧米」は一つの市場ではなく、今回の資料だけでドイツ・フランス等を含む欧州全域の個別資格人気順位までは確定できない。以下は欧米向けに採る候補であり、統一人気ランキングではない。

| 扱い | 資格 | 選定理由と根拠 | 根拠の限界 |
|---|---|---|---|
| 最優先 | AWS SAA／Solutions Architect系 | 国際調査の取得予定にSAA［W1］、英国求人にSolutions Architect資格の明示［W3］ | 英国集計はAssociateとProfessionalを分離していない |
| 優先 | Azure Administrator Associate（AZ-104） | 米国求人で個別資格の言及を確認［W2］。Azure運用職の代表として選ぶ | 当該期間の件数は減少。人気が急上昇しているとは書かない |
| 優先 | Google Cloud Associate Cloud Engineer（ACE） | 米国求人で個別資格の言及を確認［W2］ | 同じく当該期間は減少。単に増加率だけで採否を決めない |
| 設計職の次点 | Google Cloud Professional Cloud Architect（PCA） | 英国の求人で資格名を明示する例を確認［W4］ | 求人例は認知の補助根拠。広域の人気順位や普及率を示すものではない |
| クラウドネイティブの追加優先 | Certified Kubernetes Administrator（CKA） | 米国求人集計［W2］とCNCF公式の登録規模［W5］の両方で確認 | Kubernetes運用の資格。AWS等のクラウド全般の認定とは別分野 |
| 開発職の次点 | Certified Kubernetes Application Developer（CKAD） | 主催者が試験登録規模を公表［W5］。Kubernetes上のアプリ開発に対応 | 登録数は世界全体で、欧米だけの人数ではない |
| IaC分野の次点 | HashiCorp Certified: Terraform Associate | 米国のTerraform認定求人集計［W2］を補助根拠とし、基礎認定のAssociateを代表候補にする | 求人集計のTerraform認定とAssociate単独を同一視しない。地域別の保有規模は未確認 |
| 入門枠 | AWS CLF／Azure AZ-900 | 国際調査で個別資格の保有規模を確認［W1］ | 初級資格の普及と、中堅エンジニアの技能評価は区別する |

CKA・CKADの現行制度は [CNCF公式認定一覧](https://www.cncf.io/training/certification/)、Terraform Associateは [HashiCorp公式](https://developer.hashicorp.com/certifications/terraform-associate) で確認。これらを追加する場合は、ジャンルに「クラウドネイティブ／IaC」の区分を補う。

### 欧米向けのAI資格は専門候補として扱う

- Azure AI Apps and Agents Developer Associate（AI-103）: AI開発者向け候補として残す。米国求人での旧AI-102の言及［W2］は認定系統の認知を示す補助根拠になるが、AI-103自身の人気実績には置き換えない。
- Google Cloud Professional Machine Learning Engineer: MLの設計・運用に対応する専門候補として残す。試験の現行性と対象は公式確認済みだが、欧米での個別資格の受験・保有規模は未確認。欧米の定番人気資格と断定しない。
- Databricks Generative AI Engineer Associate、NVIDIA NCA-GENL、AWS MLA・AIFは用途別の比較候補。今回確認した地域別の人気根拠が弱いため、知名度・人気を優先する初期掲載枠から外す。

### 今回は優先度を下げるもの

Cloud Digital Leader、Generative AI Leader、AI実装検定、さくらのAI検定、OCI系、新設・ベータのAI認定。制度が現行であることは確認しているが、今回の条件である「エンジニア間での人気・認知」を裏付ける比較資料が不足している。知名度がないと断定するのではなく、選定を支える材料が揃うまで優先しない。

### このサイトで先に扱う枠

新規・整備の順序案は、SAAを中心とするAWS整理 → Azure（AZ-104＋入門のAZ-900）→ E資格 → Google Cloud（ACE＋設計職のPCA）→ CKA。G検定・生成AIパスポート・DS検定は既存のまま生かす。CLFはAWS Hub内の入門として残す。

AWSを大量に並べず、主軸SAA、入門CLF、専門職向けSAP・DVA・CloudOps・SCSという目的別の整理にする。AWSのAI資格は、人気実績を主張せず専門候補として後から加える。

### 選別に使った資料

いずれも2026-11-21確認。調査時期が違うため、数値を合算した順位は作らない。

| ID | 一次資料・調査主体 | 確認した事実・適用範囲 |
|---|---|---|
| J1 | [サーバーワークスのAWS資格調査](https://www.serverworks.co.jp/news/20240514_aws_license.html) | 2024年3～4月、国内の業務でAWSを利用するエンジニア269人。CLF保有22.3%で最多、取得予定はSAAが最多。日本の全エンジニアを代表する無作為調査ではない |
| J2 | [キーマンズネットの自社調査比較](https://kn.itmedia.co.jp/kn/article/2602/05/1260205050/) | 2025年の取得意向でAWS認定各種21.5%、生成AIパスポート16.6%、G検定13.9%。AWSは2021～2025年の5年連続1位。Azure認定群にも言及。技術職だけに限定した人気順位とは扱わない |
| J3 | [JDLA公式・試験実施レポート掲載ページ](https://www.jdla.org/certificate/) | G2026#5までの累計受験234,669名、E2026#2まで16,282名。累計受験数であり、現在の保有者数・ユニーク人数・エンジニア限定人数ではない |
| W1 | [Skillsoft IT Skills & Salary Report 2024、p.27～28（同社作成資料の転載PDF）](https://img.itmastersmag.com/wp-content/uploads/2025/09/10031250/Skillsoft_IT_Skills_Salary_Report_2024-2025.pdf) | 国際調査の個別資格保有数にAZ-900=533、CLF=502。2025年取得予定にCLF=429、SAA=295。標本内の回答数で、世界の総保有者数ではない。同社公式サイトは403で取得できず、資料転載先を使用 |
| W2 | [CertDemand H1 2026・米国求人の自社集計](https://certdemand.com/reports/certification-job-market-h1-2026) | 101資格を2026年1～7月に追跡。週次求人の3週平均でCKA=228→758、ACE=565→321、AZ-104=329→210、Terraform=125→294。求人内の明示言及を数えた民間集計で、認知率や受験人気そのものではない |
| W3 | [IT Jobs Watch・英国Solutions Architect資格の求人集計](https://www.itjobswatch.co.uk/jobs/uk/aws%20certified%20solutions%20architect.do) | 取得時表示は2026-11-17までの6か月で正社員求人145件。Solutions Architect資格群への言及。ページの集計日は随時更新される |
| W4 | [IT Jobs Watch・英国GCP Architect求人](https://www.itjobswatch.co.uk/find/GCP-Architect-jobs-in-the-UK) | Google Professional Cloud Architectを明示した求人例を確認。求人タイトルGCP Architectの全件を同資格必須の件数として数えない |
| W5 | [CNCF Annual Report 2025、p.16](https://www.cncf.io/wp-content/uploads/2026/03/cncf_ar25_033126a.pdf) | 公式記載でCKA=291,000 enrollments、CKAD=131,000 registrations。世界全体の登録規模で、年間の合格者数・欧米の保有者数には読み替えない |

欧州全域の資格別認知率は未確認。Skillsoft資料の地域別「TOP VENDORS」は企業の投資予定であり、資格保有率ではないので人気順位の根拠には使っていない。

## サイトの現在地

確認元: `src/data/cert-hubs.ts`、`src/pages/certifications.astro`、`src/content/config.ts`、`.agents/category_rules.md`、`.agents/tag_rules.md`。

| 現在のジャンル | 表示されている資格 |
|---|---|
| AI・データ | G検定、生成AIパスポート、DS検定 |
| クラウド・ネットワーク | AWS認定、CCNA |

既存の `trend / method / career / app / theory` は記事の種類を示す。今回増やす候補は「資格から探す」のジャンル・資格であり、この5カテゴリにAIやクラウドを足す話とは分ける。

資格一覧にないものを未執筆と決めつけない。たとえば、さくらのAI検定には `src/data/post/trend/sakura-ai-certification-syllabus/index.md` の下書きがある。一方、`method/gemini-cert-complete` は現在「Geminiを資格勉強に使う方法」の記事で、Gemini認定試験のHubではない。

## AI・データ系の現行試験（制度の比較資料）

### 国内の検定

| 試験・主催 | 主な対象・範囲 | 受験条件・注意 | 掲載判断 | 公式 |
|---|---|---|---|---|
| G検定／JDLA | AI・深層学習を活用するためのリテラシー | 受験資格の制限なし | 既存枠を継続 | [G検定](https://www.jdla.org/certificate/general/) |
| 生成AIパスポート／GUGA | 生成AIの基礎とリスクを踏まえた活用 | 実装者向け認定とは目的が異なる。適用シラバスは受験回で確認 | 既存枠を継続 | [試験概要](https://guga.or.jp/outline/) |
| DS検定 リテラシーレベル／データサイエンティスト協会 | データサイエンス・データエンジニアリング・ビジネスの基礎 | 受験資格の制限なし | AI専用に狭めず、既存のAI・データ枠で継続 | [DS検定](https://www.datascientist.or.jp/dscertification/) |
| E資格／JDLA | 深層学習の理論理解、手法選択、実装に必要な知識 | 試験日の過去2年以内にJDLA認定プログラムを修了。G検定合格は必須条件ではない。試験は知識問題で、自由な実装課題を提出する形式とは異なる | 追加優先。受験料に加えて認定プログラムの条件・費用を説明する | [E資格](https://www.jdla.org/certificate/engineer/)・[FAQ](https://www.jdla.org/qa/?id=innerAnchor_No02) |
| AI実装検定／AI実装検定実行委員会 | B級=AIの概念入門、A級=数学・プログラミング・AI、S級=深層学習モデルの実装知識 | B・A・Sの3級。CBTの選択問題。名称だけで実技試験と紹介しない | 優先度を下げる。級ごとにナビゲーション項目を増やすより、1資格内で違いを説明する | [AI実装検定](https://kentei.ai/) |
| さくらのAI検定／さくらインターネット | AI基礎、さくらのAIサービス、利用実践 | 現行案内はオンライン60分・50問、一般11,000円、学生3,300円（税込）。教材は無料だが、ハンズオンには一部課金あり | 優先度を下げる。国内クラウドAIという切り口。既存下書きは検証が先 | [公式試験概要](https://www.sakura.ad.jp/ai-certification/) |

### クラウド・製品に結び付くAI認定

AWSは後段で全体を整理し、ここでは重複掲載しない。

| 認定 | 対象・位置付け | 重要な条件・注意 | 掲載判断 | 公式 |
|---|---|---|---|---|
| Microsoft Certified: Azure AI Fundamentals／AI-901 | AzureのAI基礎・Microsoft FoundryでのAI実装の入口 | Python構文・プログラミング、Azureリソース等への理解を想定。旧AI-900の記事・教材をそのまま使わない | 次点。AzureのAI学習を扱う際の入口 | [AI-901](https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-901/) |
| Microsoft Certified: Azure AI Apps and Agents Developer Associate／AI-103 | PythonとMicrosoft FoundryによるAIアプリ・エージェント開発 | Pythonアプリ開発経験等を想定。日本語提供あり | 技術者向けの第2段階 | [認定概要](https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-apps-and-agents-developer-associate/) |
| Microsoft Certified: Machine Learning Operations Engineer Associate／AI-300 | Azure上のMLOps・GenAIOps、運用基盤と品質管理 | Python・データサイエンス・DevOps等の経験を想定 | 専門記事を扱える段階で追加 | [認定概要](https://learn.microsoft.com/en-us/credentials/certifications/operationalizing-machine-learning-and-generative-ai-solutions/) |
| Google Cloud Generative AI Leader | 生成AIの業務活用・導入判断 | 技術実務経験は必須ではない。日本語、受験前提条件なし | 優先度を下げる。業務活用向けの比較候補 | [試験概要](https://cloud.google.com/learn/certification/generative-ai-leader) |
| Google Cloud Professional Machine Learning Engineer | ML・生成AIモデルの構築・展開・運用 | 日本語。業界経験3年以上、うちGoogle Cloudでの設計管理1年以上が推奨。コーディング能力そのものを直接評価する試験ではない | 専門枠。G検定の直後に全員へ勧める入口にはしない | [試験概要](https://cloud.google.com/learn/certification/machine-learning-engineer) |
| Google Cloud Professional Agentic Architect | AIエージェントの設計・開発・評価・統制 | 日本語。選択式試験と、その合格後のハンズオンラボの2部構成。有効期間1年 | 発展候補。試験部分の合格だけで認定完了と説明しない | [認定概要](https://cloud.google.com/learn/certification/agentic-architect/) |
| NVIDIA-Certified Associate Generative AI LLMs／NCA-GENL | NVIDIA製品を使うLLMアプリの開発・統合の基礎 | 公式案内は英語。生成AI・LLMの基礎理解を想定 | 英語で学ぶ読者向けの発展候補 | [試験概要](https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-associate/) |
| Databricks Certified Generative AI Engineer Associate | Databricks上の生成AIソリューション設計・構築・展開 | 公式認定一覧で提供を確認。個別試験ページの詳細を取得できなかったため、言語・試験仕様は未確定 | 発展候補。詳細確認後に採否判断 | [公式認定一覧](https://www.databricks.com/learn/training/certification) |
| OCI AI Foundations Associate／Oracle | OCIに結び付くAI・ML・深層学習・生成AIの基礎 | 公式学習パスに2026年版試験1Z0-1122-26を掲載。前提条件・コーディング経験不要、日本語提供は今回未確認 | 補完候補。OCIを利用する読者に絞る | [公式学習パス・試験](https://learn.oracle.com/ols/learning-path/become-an-oci-ai-foundations-associate/146553/163544) |
| Oracle Agentic AI Foundations Associate | OCIを使うAIエージェントの基礎 | 公式学習パスに認定試験あり。LLM・Python・OCIの基礎を想定。日本語提供は今回未確認 | 発展候補。名称のFoundationsだけで完全未経験者向けとしない | [公式学習パス・試験](https://learn.oracle.com/ols/learning-path/become-an-oracle-agentic-ai-foundations-associate/146553/163239) |

教育分野では [Gemini Certified Educator／Faculty／Student](https://edu.google.com/intl/en_ALL/learning-center/certifications/) も公式に提供されている。ただし教育者・学生の対象別認定で、一般企業向けクラウド資格とは対象が異なるため、今回は優先掲載から外す。

## AWS以外のクラウド系の現行試験

| 認定 | レベル・主な範囲 | 受験・認定条件の要点 | 掲載判断 | 公式 |
|---|---|---|---|---|
| Microsoft Certified: Azure Fundamentals／AZ-900 | 基礎。クラウド概念、Azureのサービス・管理・ガバナンス | Azureを学び始める入口 | 追加優先 | [認定概要](https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/) |
| Microsoft Certified: Azure Administrator Associate／AZ-104 | Azureの実装・管理・監視 | OS・ネットワーク・サーバー・仮想化、Azure管理ツール等への理解を想定 | 次点。運用系の選択肢 | [認定概要](https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/) |
| Microsoft Certified: Azure Solutions Architect Expert／AZ-305 | Azure・ハイブリッド環境の設計 | 認定取得にはAzure Administrator Associateも必要。AZ-305単独合格と認定取得を区別する | 発展枠 | [認定条件](https://learn.microsoft.com/credentials/certifications/azure-solutions-architect/) |
| Google Cloud Digital Leader | Foundational。Google Cloudと業務上の価値 | 日本語、受験前提条件なし | 優先度を下げる。業務側の読者向け | [試験概要](https://cloud.google.com/learn/certification/cloud-digital-leader) |
| Google Cloud Associate Cloud Engineer | Associate。環境構築・運用・アクセス管理 | 日本語、受験前提条件なし。Google Cloudの実践経験6か月以上を推奨 | 追加優先。技術者向け | [試験概要](https://cloud.google.com/learn/certification/cloud-engineer) |
| Google Cloud Professional Cloud Architect | Professional。クラウド設計・実装管理 | 日本語、受験前提条件なし。業界経験3年以上、うちGoogle Cloudの設計管理1年以上を推奨 | 発展枠 | [試験概要](https://cloud.google.com/learn/certification/cloud-architect) |

Google Cloudには、このほかData Practitioner、Data Engineer、Cloud Developer、Cloud DevOps Engineer、Cloud Security Engineer、Cloud Network Engineer、Cloud Database Engineer、Security Operations Engineer等が公式一覧にある。初期の掲載候補は入口と設計・運用に絞り、専門職向けは後から検討する。[Google Cloud認定一覧](https://cloud.google.com/learn/certification)

Oracleも2026年版の認定更新を公表しており、OCI・Multicloud・AI・Agentic AI・Databaseの系統がある。OCIを主軸にする場合の追加調査先とする。今回はOCIクラウド認定の各試験の受験言語・認定条件までは確認していない。[Oracle公式の2026年更新案内](https://blogs.oracle.com/oracleuniversity/oci-certification-learning-paths-and-exams-2026-updates-now-available)

## AWSの選別

### 整理する軸

AWS公式のレベル区分と、読者の目的を分けて扱う。

- 公式区分: Business／Foundational／Associate／Professional／Specialty。
- サイトで選ぶ目的: クラウド入門／設計／開発／運用／データ／AI・ML／セキュリティ／ネットワーク／AI導入の事業判断。
- 各認定はそれぞれ別の資格。レベル順に全取得する必要がある学習課程として見せない。以下の「入口」「発展」は掲載優先度で、受験資格を表すものではない。

公式一覧のProfessional欄は取得テキストで「Loading」と表示されたため、個別の公式ページ3件で補った。[AWS認定一覧](https://aws.amazon.com/certification/)

### 確認した認定の一覧

名称の先頭の「AWS Certified」は表中で省略。略称は閲覧時の識別用で、サイトの新しいexamIdを決めるものではない。

| 公式区分 | 認定 | 目的 | 2026-11-21確認時の状態・注意 | サイトでの扱い案 | 公式 |
|---|---|---|---|---|---|
| Foundational | Cloud Practitioner（CLF） | クラウド全般の基礎 | 現行 | クラウド入口に残す | [CLF](https://aws.amazon.com/certification/certified-cloud-practitioner/) |
| Foundational | AI Practitioner（AIF） | AI・ML・生成AIの基礎 | 現行 | 人気優先の初期枠から外し、AI用途の比較候補にする | [AIF](https://aws.amazon.com/certification/certified-ai-practitioner/) |
| Associate | Solutions Architect - Associate（SAA） | AWSシステム設計 | 現行 | 技術系の代表に残す | [SAA](https://aws.amazon.com/certification/certified-solutions-architect-associate/) |
| Associate | Developer - Associate（DVA） | AWSアプリ開発 | 現行 | 開発者向けの第2段階 | [DVA](https://aws.amazon.com/certification/certified-developer-associate/) |
| Associate | CloudOps Engineer - Associate | AWS環境の運用・管理 | 現行。最新試験SOA-C03の合格者に適用する名称。旧SysOps Administratorから名称変更 | 運用担当向けの第2段階 | [CloudOps](https://aws.amazon.com/certification/certified-cloudops-engineer-associate/) |
| Associate | Data Engineer - Associate（DEA） | データ基盤・データライフサイクル | 現行 | データ分野を広げるときに追加 | [DEA](https://aws.amazon.com/certification/certified-data-engineer-associate/) |
| Associate | Machine Learning Engineer - Associate（MLA） | MLの本番実装・運用 | 現行＋更新版ベータ。日本語のMLA-C01と英語ベータMLA-C02を区別 | AI実装の第2段階。版を確認して扱う | [MLA](https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/) |
| Professional | Solutions Architect - Professional（SAP） | 複雑なAWS設計 | 現行 | 発展枠 | [SAP](https://aws.amazon.com/certification/certified-solutions-architect-professional/) |
| Professional | DevOps Engineer - Professional（DOP） | 開発運用の自動化・高度運用 | 現行 | 発展枠 | [DOP](https://aws.amazon.com/certification/certified-devops-engineer-professional/) |
| Professional | Generative AI Developer - Professional（AIP） | 生成AIアプリの本番開発 | 現行。日本語あり | 生成AI開発の発展枠。初学者の入口にはしない | [AIP](https://aws.amazon.com/certification/certified-generative-ai-developer-professional/) |
| Specialty | Security - Specialty（SCS） | AWSセキュリティ | 現行 | セキュリティ専門枠 | [SCS](https://aws.amazon.com/certification/certified-security-specialty/) |
| Specialty | Advanced Networking - Specialty（ANS） | 高度なAWSネットワーク | 2026-12-31が最終受験日 | 新規拡張の優先対象から外す。既存記事は終了案内を検討 | [ANS](https://aws.amazon.com/certification/certified-advanced-networking-specialty/) |
| Business | AI Business Strategist | AI投資・事業計画・ガバナンス・組織導入 | ベータ。日本語・英語。AWSサービスの知識そのものを測る試験ではない | 監視候補。通常試験と区別して扱う | [公式概要](https://aws.amazon.com/certification/certified-ai-business-strategist/) |

AI Business StrategistはAIFの上位版というより、事業判断を測る別の目的の認定。AIの基礎知識を学びたい人と、導入を推進する人を分ける。

MLAについて公式ページは、MLA-C01の英語を2026-09-28まで、日本語等をMLA-C02の一般提供まで継続と案内している。更新版は英語ベータで、一般提供日はTBD。さらに本文の「MLA-C02」と比較表のExam code欄「ME1-C02」が食い違っているため、記事化では予約画面・試験ガイドで再照合する。コードの断定を避け、認定名と受験言語・版を先に確認する。[MLA公式の版別案内](https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/)

### AWSでまず見せるもの

| 読者の目的 | 代表候補 | 最初に確認すること |
|---|---|---|
| AWSやクラウドの全体像を知る | CLF | 技術実装より、サービス・料金・責任分界の基礎が目的か |
| AWSの設計を学ぶ | SAA | システム要件からサービス構成を考えたいか |
| AI・生成AIの基礎をAWSと結び付けたい | AIF | 開発・運用の技能証明より、基礎理解が目的か |
| MLを動かして運用したい | MLA | Python・ML・AWSの実践経験、受験する言語と版 |

人気・認知を優先するトップのAWS案内はSAAを主軸、CLFを入門にする。AIF・MLAは上表の用途比較に残すが、人気を理由とする代表枠にはしない。運用・開発・高度設計等の目的に応じてCloudOps・DVA・SAP・SCSをHub内で示す。

### 終了した資格・終了予定の扱い

- Machine Learning - Specialtyは2026-03-31が最終受験日。現在受ける試験の候補から外す。取得済み認定の有効期間と、新規に受験できるかは分けて説明する。[旧MLS公式](https://aws.amazon.com/certification/certified-machine-learning-specialty/)
- ANSはまだ受験終了前だが、2026-12-31で終了予定。これから長期学習を始める人向けの恒常的な推奨先にはしない。[ANSの終了告知](https://aws.amazon.com/certification/certified-advanced-networking-specialty/)
- SysOps Administratorは旧名。CloudOpsへの名称変更は最新試験合格者に適用するもので、既存保有者の資格名も一律に変更された、と説明しない。[CloudOpsの名称案内](https://aws.amazon.com/certification/certified-cloudops-engineer-associate/)

## Microsoftで古い一覧を使わないための注意

公式の終了一覧で確認したもの。終了した試験を新規受験候補として載せない。

| 旧試験 | 最終日 | 今回確認した現行候補 |
|---|---|---|
| AI-900 | 2026-06-30 | AI-901 |
| AI-102 | 2026-06-30 | AI-103 |
| DP-100 | 2026-06-01 | AI-300（範囲はMLOps・GenAIOps。旧試験と同一内容ではない） |
| AZ-204 | 2026-07-31 | 今回は後継候補を未調査 |
| AZ-500 | 2026-08-31 | 今回は後継候補を未調査 |

[Microsoft公式の試験終了一覧](https://learn.microsoft.com/en-us/credentials/support/retired-certification-exams)。現行候補の根拠は上の各公式試験ページ。旧試験の終了と、認定名の存続・既存保有者の状態を混同しない。

## ジャンルの見せ方の提案

既存の大枠「AI・データ」「クラウド・ネットワーク」は維持できる。各枠の中で、読者が知りたい目的を補う。

| 大枠 | 内部で分ける目的 | 代表候補 |
|---|---|---|
| AI・データ | AI・生成AIのリテラシー | G検定、生成AIパスポート、AIF、Generative AI Leader |
| AI・データ | AIの開発・実装・運用 | E資格、AI実装検定、MLA、AI-103、AI-300 |
| AI・データ | データ分析 | DS検定。データ基盤系を増やすときはDEA等も検討 |
| クラウド・ネットワーク | クラウドの基礎理解 | CLF、AZ-900、Cloud Digital Leader |
| クラウド・ネットワーク | クラウド設計・運用 | SAA、AZ-104、Associate Cloud Engineer |
| クラウド・ネットワーク | ネットワーク | 既存のCCNA。ANSは終了予定の扱いを明示 |

AIF・MLAは主にAI側、CLF・SAAはクラウド側に置き、同一認定の説明やHubを二重に作らない案。AWSの全体像へは既存AWS Hubでつなぐ。AWSの正規タグは現行規約の `AWS認定` を使う。個別認定を新しいexamIdに分割するかは、CCが実装時に判断する。

Azure・Google Cloud・E資格等は現行の `src/content/config.ts` のexamId一覧にない。掲載を決めたら、記事・Hubを用意する前に登録方針と正規タグをCCが決める必要がある。今回、設定・規約・記事・ナビゲーションは変更していない。

## CCへの申し送り

1. `src/apps/aws-cert-diagnosis/logic.ts` はCLF・SAA・ANSの3候補で、経験者をANSへ案内する。終了予定に合わせて案内を見直すことを提案する。今回はコードを変更していない。
2. `src/data/post/trend/sakura-ai-certification-syllabus/index.md`（draft: true）には無料で受けられる「AI基礎学力テスト」の説明がある。現行の有料「さくらのAI検定」と同一制度かを確認し、主催者・正式名称・料金をCCが検証する。現行試験は無料教材と有料受検を区別する。
3. 資格を増やす前に、冒頭の地域別選別からどれを扱うか、既存Hubの整理と新規Hubのどちらが必要かを判断する。記事本文・タイトル・descriptionの作成はCCの書き手が担当する。

## 調査範囲と残る確認

- 世界中の全資格の網羅ではない。AWSは公式のレベル区分と個別ページを使って選別し、他社はこのサイトの不足を補う主要候補を調べた。
- Alibaba Cloud、IBM、Salesforce、ベンダー中立のクラウド資格等の詳細比較は未実施。今回の未掲載を、制度がない・廃止されたという意味にはしない。
- 受験言語を明記していない試験は今回確定していない。日本語受験を条件に掲載する場合は、予約前の公式画面で確認する。
- 料金・開催日・試験コードの網羅的な収集はしていない。実際に受験案内を書く段階で、対象回・対象国・税・言語・版を再確認する。
- 合格率、平均勉強時間、検索需要の大小は未調査。求人での資格名言及は冒頭の地域別選別で補足したが、採用効果や給与上昇の因果関係を検証したものではない。
