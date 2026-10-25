# 残り記事の修正案（第5弾・案）

> 実施済み（2026-10-25）: 統合111本（110本削除・D13は刷新）、新規の統合先3本、刷新10本、判断6点がすべて完了。結果は `out-task.md` を参照。以下は実施前の案として残している。

作成: 2026-10-25。`wording-list.md` に残った168記事（文言修正だけ済み、内容は未刷新）を、先に統合を決め、残った記事から刷新を選ぶ案です。（作成時点では、まだ記事は変更していません。）

## 要約

- 統合: 62グループ・111記事を、既存の記事またはhubへ統合する案（168記事のうち66％）。統合後の記事数は57本
- 新規に作る統合先は3本のみ（生成AI用語・AIの法務と倫理・攻撃手法と対策）。ほかは既存の記事を統合先にする（URLの評価を引き継ぐため）
- 刷新: アクセス実績のある10記事を優先する（下の「刷新案」）。表示回数が多くても順位が圏外の記事は後回しにする
- 統合も刷新もしない: クイズ・ドリル系のアプリ記事、試験が単独の記事（hubがないもの）など
- 決めてほしいこと: 末尾の「判断してほしいこと」の6点

## 判断の基準

### これまでの対応から読み取れる傾向

- 同じ試験・同じ読者の悩みで重なる記事は、hubか先に作った記事へ統合し、旧URLは redirects で転送した（ccna-ai-hack、fe-pseudo-code-visual-hack、st-strategy-brainstorming など）
- 地域別のシリーズは、全国版の1本にまとめた（愛知編など）
- 根拠のない数字、創作の体験談、断定的な合格の約束は、移すときに持ち込まなかった
- 統合先は、内容を移したうえで拡充し、統合元の独自の中身は節として残した

### 今回の条件

- 近似する記事は統合する前提にする。ただし「近似」は、同じ試験・同じ悩み・見出しが重なるもの、と定義する
- 統合元は、検索クリックのない記事を優先する。クリックまたはGAのセッションがある記事には ★ を付け、統合先の見出しに検索語を残す
- 刷新は、検索で表示され、かつ順位が20位以内のものを優先する。表示回数が多くても50位より下の記事は、手を入れても届きにくいため後回しにする

### アクセスデータの注意

- 使ったデータ: GSC は `w41/ページ.csv`（過去3か月間とみられる。取得は2026-10-03）と `w42/ページ.csv`（直近7日）、GA4 は w41・w42 のセッション合計
- サイト全体が小さく（GA4は週のセッションが約240）、残り記事の大半は表示が10回未満。数字は優先順位の目安として使う
- 取得から2〜3週間たっているため、実施の前にGSCで最新の数字を確認する

## 統合案

統合先の（新規）は新しく作る記事です。表の「統合元」の数字は、GSC累計の表示回数・クリック数と、GAのセッション数です。

### キャリア記事の統合

<strong>A1　統合先: `/career/shikaku-teate-soba-ichiran/`</strong>　資格手当の実額相場一覧｜電験三種・危険物乙4・ビルメン系マトリクス

資格手当の相場一覧に、一時金型・月額型と選任手当を節として移す。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/career/kikenbutsu-otsu4-teate/` | 危険物乙4の資格手当はいくら？一時金型と月額型の違い | 表示74・クリック0・GA0 |
| `/theory/denken3-sennin-teate/` | 電験三種の"選任手当"はなぜ高い？手当と選任手当の違い | 表示8・クリック0・GA4 ★ |

<strong>A2　統合先: `/career/ses-ap-strategy/`</strong>　応用情報で自社に残るか外へ飛ぶか。エンジニアの自信を取り戻すAP活用術

地域別の見方と「合格後の使い方」を節にする（愛知編を全国版へ統合した前例どおり）。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/career/ses-ap-strategy-miyagi/` | 【宮城編】仙台の自社開発企業を狙うための応用情報（AP）活用術 | 表示55・クリック0・GA0 |
| `/career/ses-ap-strategy-kanagawa/` | 【神奈川編】満員電車を「耳」で攻略！通勤エンジニアのロングトレイン術 | 表示2・クリック0・GA0 |
| `/career/ses-ap-strategy-hokkaido/` | 【北海道編】札幌で上位キャリアを築くための応用情報（AP）ロードマップ | 表示0・クリック0・GA0 |
| `/career/ap-cert-practical-use-hack/` | 応用情報に受かったのに何も変わらない。合格証を「実務の武器」に変えるAIリフォー | 表示0・クリック0・GA0 |

<strong>A3　統合先: `/career/backoffice-sg-career-hack/`</strong>　バックオフィス職がSGで年収を上げる道筋｜社内のセキュリティ教育から副業講師まで

地域別の2本を全国版へ。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/career/backoffice-sg-strategy-hiroshima/` | 【広島編】広電（路面電車）の「揺れ」をリズムに変える暗記ハック | 表示3・クリック0・GA0 |
| `/career/backoffice-sg-strategy-shizuoka/` | 【静岡編】中堅メーカーの事務職がセキュマネで市場価値を上げる方法 | 表示0・クリック0・GA0 |

<strong>A4　統合先: `/career/regional-salary-qualification-correlation/`</strong>　地方でIT資格は意味ない？都道府県別の年収差と、資格が効く地域・職種の見分け方

福岡編と地方事務職の記事を、先に刷新した地域年収の記事へ。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/career/liberal-arts-it-strategy-fukuoka/` | 【福岡編】スタートアップ特区×ITで攻める文系就活ハック | 表示0・クリック0・GA0 |
| `/career/itp-rural-salary-hack/` | 地方事務職がITパスポートを取っても給料が上がらない本当の理由と、それでも取るべ | 表示0・クリック0・GA0 |

<strong>A5　統合先: `/career/ipa-certification-salary-impact/`</strong>　基本情報・応用情報で年収は上がる？資格手当の相場と転職市場のリアル

IPA資格と年収・手当・報奨金を1本に。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/career/advanced-ipa-certification-high-salary-impact/` | 年収1,000万超えも視野に！高度試験合格がもたらす市場価値の飛躍 | 表示3・クリック1・GA0 ★ |
| `/career/ipa-reward-negotiation-hack/` | あなたの合格、会社は月5万儲かっています｜報奨金数万で満足しないための「資格単価 | 表示2・クリック0・GA0 |

<strong>A6　統合先: `/career/fe-engineer-foundation/`</strong>　生成AI時代の「エンジニアOS」— 基本情報技術者で手に入れる指示の解像度

基本情報のキャリア価値を、立場別（会社員・フリーランス・非エンジニア）の節にする。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/career/fe-useless-corporate-hack/` | 【会社命令】基本情報技術者が「意味ない」と感じるプロのための、最小努力で合格証だ | 表示0・クリック0・GA0 |
| `/career/freelance-fe-merit/` | フリーランスエンジニアこそ基本情報を取り直すべき3つの理由 | 表示0・クリック0・GA0 |
| `/career/fundamental-it-engineer-for-non-engineers/` | 非エンジニアこそ基本情報を取得せよ！DX時代の共通言語の身につけ方 | 表示0・クリック0・GA0 |

<strong>A7　統合先: `/career/itp-shameful-career-hack/`</strong>　ITパスポートが「恥ずかしい」と感じるあなたへ｜履歴書から真っ先に消すべき時と武器にする

「ITパスポートは恥ずかしい」が2本ある。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/trend/it-passport-shame-debate/` | ITパスポートは「恥ずかしい」資格なのか？2026年の市場価値と現実 | 表示2・クリック0・GA1 |

<strong>A8　統合先: `/career/liberal-arts-it-strategy/`</strong>　文系就活の最強カード「ITリテラシー」で内定を勝ち取る戦略

文系学生の新卒戦略を全国版へ。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/career/liberal-arts-student-strategy/` | 文系学生が「ITパスポート・基本情報」で新卒カードを強化する就活戦略 | 表示1・クリック0・GA0 |

<strong>A9　統合先: `/method/ccna-hub/`</strong>　CCNAとは？勉強時間の目安とIPA試験でいうとどのレベルか｜合格までの進め方と落ちたと

CCNAのキャリア記事2本をhubへ（ccna-ai-hack・ccna-fail-comebackを統合した前例）。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/career/ccna-network-engineer-career/` | CCNAで目指すネットワークエンジニアのキャリアパス｜年収・転職・上位資格ロード | 表示13・クリック0・GA1 |
| `/career/ccna-new-grad-company-filter/` | CCNAは新卒の就活で武器になる｜企業の見極めに使う逆転の発想 | 表示5・クリック1・GA0 ★ |

### 理論（theory）記事の統合

<strong>B1　統合先: `/theory/swot-analysis/`</strong>　SWOT分析をマスター！AIで「自社の勝ち筋」を客観的に見抜く方法

環境分析・自社分析の枠組みをSWOT記事にまとめる。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/theory/three-c-analysis/` | 3C分析を徹底解説！市場・競合・自社から「唯一無二の価値」を見つける方法 | 表示1・クリック0・GA0 |
| `/theory/core-competence/` | コアコンピタンス徹底解説！他社に真似できない「核となる強み」の磨き方 | 表示0・クリック0・GA1 |

<strong>B2　統合先: `/theory/product-life-cycle/`</strong>　プロダクトライフサイクルとは？導入期・成長期・成熟期・衰退期の特徴と戦略

事業ポートフォリオ・成長戦略の枠組みにまとめる。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/theory/ppm-portfolio/` | PPM（プロダクトポートフォリオ）徹底攻略！花形か負け犬か？資源配分の黄金律 | 表示0・クリック0・GA0 |
| `/theory/ansoff-matrix/` | アンゾフの成長マトリクス徹底解説！AI時代に打つべき「次の一手」の決め方 | 表示3・クリック0・GA0 |

<strong>B3　統合先: `/theory/csr-sdgs-esg-investment/`</strong>　CSR・SDGs・ESG投資とは？企業の社会的責任とITの役割

企業統治・法令遵守・CSRを1本に。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/theory/corporate-governance/` | コーポレートガバナンスとは？ITガバナンスとの違いと試験で問われる「企業統治」の | 表示2・クリック0・GA0 |
| `/theory/compliance/` | コンプライアンス（法令遵守）とは？単なる法律守りではない「企業倫理」の最前線 | 表示0・クリック0・GA0 |

<strong>B4　統合先: `/theory/erp-system-integration/`</strong>　ERPパッケージ徹底解説！社内情報を一元管理する「経営の心臓部」

ERP・CRM・SCMの業務システムを1本に。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/theory/crm-scm-management/` | CRM と SCM を徹底攻略！顧客満足と効率化を両立する「経営の型」 | 表示2・クリック0・GA0 |
| `/trend/invoice-system/` | 今さら聞けないインボイス制度！IT試験で問われる業務への影響とシステム改修 | 表示2・クリック0・GA0 |

<strong>B5　統合先: `/theory/cpu-memory-functions/`</strong>　CPUとメモリの役割とは？「頭脳」と「作業机」のITハードウェア基礎

ハードウェア基礎（CPU・メモリ・記憶装置）。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/theory/storage-hdd-ssd/` | ストレージ(HDD/SSD)とは？PCの「倉庫」を賢く選ぶハードウェア基礎 | 表示0・クリック0・GA0 |

<strong>B6　統合先: `/theory/os-operating-systems/`</strong>　OS(オペレーティングシステム)とは？WindowsからLinuxまで種類の違い基礎

OSの記事が2本ある。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/theory/fe-os-control/` | タスク管理・割込み・仮想記憶とは？基本情報技術者試験のOS制御を図解 | 表示1・クリック0・GA0 |

<strong>B7　統合先: `/theory/network-database-fundamentals/`</strong>　OSI参照モデル・TCP/IP・DNS・正規化とは？ネットワークとDBの基礎を1ページで

ネットワーク基礎に5Gを節として移す。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/theory/fe-network-basics/` | TCP/IPとサブネットとは？基本情報技術者試験のネットワーク基礎を図解 | 表示2・クリック0・GA1 |
| `/trend/5g-technology/` | モバイル革命！5Gの3大特徴（高速・低遅延・多接続）を攻略 | 表示0・クリック0・GA0 |

<strong>B8　統合先: `/theory/agile-scrum-basics/`</strong>　アジャイル・スクラム・スプリントとは？ウォーターフォールとの違いと3つの役割を1ページで

開発手法（ウォーターフォール・アジャイル・DevOps）と意思決定（OODA）。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/theory/waterfall-development/` | 王道の開発手法！ウォーターフォールモデルの工程をマスター | 表示1・クリック0・GA0 |
| `/trend/devops/` | 開発と運用の融合！DevOps（デブオプス）でITサービスを高速化する仕組み | 表示1・クリック0・GA0 |
| `/trend/ooda-loop/` | PDCAはもう古い？変化の激しい時代の高速意思決定「OODA（ウーダ）ループ」攻 | 表示1・クリック0・GA0 |

<strong>B9　統合先: `/theory/white-black-box-testing/`</strong>　テストの中身を見るか見ないか？ホワイトボックス/ブラックボックス手法を比較

テスト工程とテスト技法を1本に。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/theory/v-model-testing-phases/` | バグを見逃さない！V字モデルと各テスト工程の意味 | 表示0・クリック0・GA0 |

<strong>B10　統合先: `/theory/binary-hexadecimal-basics/`</strong>　2進数と16進数とは？コンピュータが理解する数字の言語

2進数・16進数と論理演算（基礎理論）。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/theory/sets-logical-operations/` | 集合と論理演算とは？コンピュータの「思考の回路」 | 表示1・クリック0・GA0 |

<strong>B11　統合先: `/theory/algorithm-search-sort/`</strong>　線形探索・二分探索・バブルソートとは？基本情報技術者試験のアルゴリズム基礎

データ構造とアルゴリズム。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/theory/data-structures-basics/` | スタック・キュー・木とは？基本情報技術者試験のデータ構造を図解で攻略 | 表示4・クリック0・GA0 |

<strong>B12　統合先: `/theory/security-controls-crypto-incident-basics/`</strong>　共通鍵暗号・公開鍵暗号・インシデント対応・BYOD対策とは？セキュリティ対策の基礎を1ペ

TLS・IPsecなどのプロトコルを暗号の節へ。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/theory/ap-security-protocols/` | TLS・IPsec・認証プロトコルとは？応用情報技術者試験のセキュリティ詳解 | 表示3・クリック0・GA0 |

<strong>B13　統合先: `/theory/ml-supervised-unsupervised/`</strong>　機械学習の3種類とは？教師あり・教師なし・強化学習をG検定・DS検定向けに解説

機械学習とディープラーニング（G検定）。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/theory/deep-learning-basics/` | ディープラーニング基礎理論｜ニューラルネット・活性化関数・バックプロパゲーション | 表示0・クリック0・GA0 |

<strong>B14　統合先: `/theory/mos-excel-function-basics/`</strong>　MOS Excel頻出関数まとめ｜SUM・VLOOKUP・IFの使い分けを試験範囲で整理

Excel関数のまとめに「覚えられない」対処を移す。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/method/mos-kansuu-oboerarenai-hack/` | MOSのExcel関数が覚えられない「エクセルアレルギー」をAIで克服する方法 | 表示9・クリック1・GA0 ★ |

<strong>B15　統合先: `/method/mos-hub/`</strong>　MOSはどれから取る？事務職はExcelとWordが基本、エキスパートで難しくなる理由

Word・PowerPointの基礎はhubへ。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/theory/mos-word-powerpoint-basics/` | MOS Word・PowerPoint基礎知識まとめ｜文書構造とスライド設計の試 | 表示7・クリック0・GA1 |

<strong>B16　統合先: `/theory/ccna-vlan-stp/`</strong>　VLANとSTPとは？CCNA試験のネットワークアクセス領域を図解で攻略

CCNAのネットワーク基礎（VLAN・STP・ルーティング）を1本に。両方の検索語を見出しに残す。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/theory/ccna-routing-protocols/` | ルーティングプロトコルとは？OSPF・EIGRP・RIPの違いをCCNA試験向け | 表示6・クリック0・GA1 |

### ITパスポートの用語記事（trend）の統合

<strong>C1　統合先: `/theory/generative-ai-terms-basics/（新規）`</strong>

生成AIの仕組みと用語を、ITパスポート向けに1本にする。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/trend/hallucination-ai-error/` | AIの「知ったかぶり」ハルシネーションとは？原因と対策を解説【シラバスハック】 | 表示5・クリック0・GA0 |
| `/trend/multi-modal-ai/` | 目と耳を持つAI！マルチモーダルAIの仕組みとITパスポート試験対策 | 表示10・クリック0・GA0 |
| `/trend/rag-ai-system/` | 生成AIの弱点を克服！RAGとは？IT試験に出る最新用語【ITパスポート】 | 表示0・クリック0・GA0 |
| `/trend/explainable-ai-xai/` | なぜその答えになった？説明可能なAI（XAI）の必要性と重要ポイント | 表示0・クリック0・GA0 |
| `/trend/ai-assistant/` | 仕事の相棒！AIアシスタントの活用とITパスポート試験対策 | 表示0・クリック0・GA0 |
| `/trend/mlops/` | AI運用を止めるな！MLOps（エムエルオプス）の重要性とITパスポート試験のポ | 表示2・クリック0・GA0 |

<strong>C2　統合先: `/theory/ai-law-ethics-basics/（新規）`</strong>

AIの著作権・倫理・オプトアウト・ディープフェイクを1本にする。genai-ethics-quizへ案内。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/trend/copyright-ai-generated/` | AIで作った絵に著作権はある？最新の法務解釈とITパスポート試験対策 | 表示8・クリック1・GA0 ★ |
| `/trend/ai-ethics-governance/` | AIはどこまで許される？試験に出る「AI倫理」ガイドラインの要点 | 表示3・クリック0・GA0 |
| `/trend/ai-opt-out-policy/` | AI学習を拒否できる？オプトアウトポリシーの重要性【ITパスポート】 | 表示32・クリック0・GA0 |
| `/trend/deepfake/` | フェイクニュースの脅威！ディープフェイクの仕組みとITパスポート試験対策 | 表示1・クリック0・GA0 |

<strong>C3　統合先: `/theory/cyber-attack-countermeasures-basics/（新規）`</strong>

攻撃手法と対策を1本にする（セキュリティの既存記事は暗号・管理策の側に残す）。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/trend/multi-factor-authentication/` | パスワードだけじゃ足りない！多要素認証（MFA）を1分解説 | 表示20・クリック0・GA0 |
| `/trend/sql-injection-vulnerability/` | データベースが危ない！SQLインジェクションの仕組みと防壁【ITパスポート】 | 表示5・クリック0・GA0 |
| `/trend/cross-site-scripting/` | ブラウザ経由の罠！XSS（クロスサイトスクリプティング）の脅威とWebサイトの保 | 表示0・クリック0・GA0 |
| `/trend/ransomware-security/` | データを人質に！ランサムウェアの恐怖と試験で問われる防御策 | 表示0・クリック0・GA0 |

<strong>C4　統合先: `/trend/human-capital-management/`</strong>　人的資本経営をAIで攻略！従業員を「コスト」ではなく「資産」と見る理由【ITパスポート】

人的資本経営・開示・DE&Iを1本に。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/trend/dei-diversity-equity-inclusion/` | 人的資本経営とDE&I（多様性・公平性・包摂）の関係性とは？価値を生む組織の作り | 表示2・クリック0・GA1 |
| `/trend/human-capital-reporting-iso30414/` | 企業の「人への投資」を数値化！人的資本報告（ISO 30414）の見方と試験対策 | 表示0・クリック0・GA0 |

<strong>C5　統合先: `/theory/dx-leadership-mvv-digital-divide/`</strong>　DX推進担当者に求められるスキルとは？アナログからデジタルへの取捨選択の技術

DXの記事が2本ある。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/trend/dx-digital-transformation/` | DX（デジタルトランスフォーメーション）とは？IT化との違いを1分で理解！試験の | 表示0・クリック0・GA0 |

<strong>C6　統合先: `/theory/csr-sdgs-esg-investment/`</strong>　CSR・SDGs・ESG投資とは？企業の社会的責任とITの役割

GXをESGの記事へ（B3と同じ統合先）。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/trend/gx-green-transformation/` | 脱炭素×IT！GX（グリーントランスフォーメーション）とは？試験のキーワードと企 | 表示0・クリック0・GA0 |

### 勉強法（method）記事の統合

<strong>D1　統合先: `/method/ap-pm-descriptive-ai-prompts/`</strong>　応用情報の午後・記述式をAIで対策するプロンプト集｜添削と類題演習

高度午後・記述式のAI対策を、試験区分ごとの節にして1本に。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/method/ap-afternoon-ai-coaching/` | 応用情報「午後記述」をChatGPT・Claude・Geminiで添削するセルフ | 表示7・クリック0・GA0 |
| `/method/nw-kakomon-ai-hack/` | ネットワークスペシャリスト午後過去問の進め方｜AI×図解で得点力に変える | 表示7・クリック0・GA1 |
| `/method/pm-pm2-module-hack/` | 【メソッド】プロジェクトマネージャ（PM）午後Ⅱ：実務経験の棚卸しと論文モジュー | 表示4・クリック0・GA0 |
| `/method/sc-timeline-hack/` | 【メソッド】情報処理安全確保支援士（SC）：長文インシデント事例からタイムライン | 表示0・クリック0・GA0 |
| `/method/sc-descriptive-self-loop-hack/` | SC科目B（記述式）をS.E.L.Fループで攻略する｜AIに「添削者」として再現 | 表示0・クリック0・GA0 |

<strong>D2　統合先: `/method/fe-subject-b-ai-prompt-hub/`</strong>　FE科目Bを生成AIで攻略するプロンプト集｜場面別・ツール別インデックス【ChatGPT

科目Bのプロンプト集が2本ある。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/method/fe-subject-b-drill/` | 【プロンプト配布】基本情報技術者 科目B「無限ドリル」生成メソッド | 表示11・クリック2・GA1 ★ |

<strong>D3　統合先: `/method/fe-algorithm-roadmap/`</strong>　基本情報の科目Bアルゴリズム対策｜ITパスポート合格者でも一気に難しくなる理由と、基礎が

擬似言語の記事を、先に統合した fe-pseudo-code-visual-hack と同じ統合先へ。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/method/fe-pseudo-code-ai-hack/` | 【科目B攻略】基本情報の「疑似言語」をAIで動くコードに変換して10倍速で理解す | 表示1・クリック0・GA0 |
| `/method/pseudo-code-bridge-to-fe/` | 論理の階段を登り始めた君へ：擬似言語とアルゴリズムの壁を突破する思考の転換（創作の物語あり。移さない） | 表示0・クリック0・GA0 |

<strong>D4　統合先: `/method/notebooklm-features-guide/`</strong>　NotebookLM（Gemini Notebook）資格試験活用ガイド｜2026年版・

NotebookLMの使い方とワークフローを1本に。PDF変換は節にする。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/method/notebooklm-ai-workflow-guide/` | NotebookLM × 生成AI 資格試験ワークフローガイド｜ChatGPT・ | 表示1・クリック0・GA0 |
| `/method/pdf-to-text-guide/` | PDF学習をハックする！「PDF to Text」変換ツールの活用手順 | 表示0・クリック0・GA0 |

<strong>D5　統合先: `/method/syllabus-diff-hack/`</strong>　資格のシラバス更新を見逃さない仕組み作り｜URLの記録・RSS・自動チェック・AIで変更

先に刷新した「シラバス更新を見逃さない仕組み」と目的が同じ。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/trend/ipa-syllabus-follow-up/` | IPAシラバスの変更に「秒」で対応する、AIディープリサーチ術 | 表示0・クリック0・GA0 |

<strong>D6　統合先: `/trend/ipa-2027-restructuring/`</strong>　2027年からのIPA試験再編まとめ｜データマネジメントと新区分PDとは？

IPA試験の再編・動向を1本に。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/trend/ipa-exam-trends-2026/` | 2026年を見据えたIPA試験の最新トレンド：CBT化とAI知識の必須化 | 表示0・クリック0・GA0 |
| `/career/ipa-new-exam-target-guide/` | 【年代・職種別】2027年版IPA試験・狙い目ガイド｜学生から社会人まで | 表示3・クリック0・GA0 |

<strong>D7　統合先: `/method/scientific-study-methods/`</strong>　【Active Recall】科学的に「脳に効く」勉強法だけをやる。エビデンスベースの資

学習科学の根拠をまとめる記事に。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/method/3kw-study-method/` | 3つの科学的アプローチによる学習効率最大化ハック：脳・肉体・心理を掌握せよ | 表示0・クリック0・GA0 |
| `/method/diversity-study-method/` | 日本の『成功体験』、海外の『エビデンス』：多様性社会が生んだ科学的自己啓発のすす | 表示0・クリック0・GA0 |

<strong>D8　統合先: `/method/20hours-method-reason/`</strong>　なぜシラバスハックは「20時間学習法」を採用しているのか

「基礎だけ学ぶ」は20時間学習法の考え方と同じ。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/method/musk-semantic-tree-fundamentals/` | イーロン・マスク流「基礎だけ学ぶ」学習法と20時間学習法の共通点 | 表示0・クリック0・GA0 |

<strong>D9　統合先: `/method/exam-final-10-days/`</strong>　資格試験の直前10日の過ごし方｜1日2時間で20時間を使う逆算スケジュールと、受ける覚悟

試験前日・当日の過ごし方を直前期の記事へ。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/method/exam-day-doping/` | 実力を120%出すための「ドーピング」戦略。エンジニアのための試験当日コンディシ | 表示0・クリック0・GA0 |
| `/method/ipa-absence-report-hack/` | 試験当日、ベッドから出られなかった君へ。その「欠席」を次回の「期待」に変えるリス（創作の物語あり。移さない） | 表示0・クリック0・GA0 |

<strong>D10　統合先: `/method/miss-note-db/`</strong>　資格の間違いノートをAIで分析する方法｜Markdownで記録して、ミスのパターンを見つ

間違いから学ぶ方法を、先に刷新した記事へ。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/method/wrong-choice-analysis-hack/` | 正解の裏側に潜む『3つの財宝』：不正解の選択肢を知識の泉に変える逆転学習法（創作の物語あり。移さない） | 表示0・クリック0・GA0 |

<strong>D11　統合先: `/method/ai-mentor-study-method-roadmap/`</strong>　月100時間を捻出する社会人のAI学習法｜AIをメンターにする合格ロードマップ

AIを講師にする方法を1本に。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/method/agent-teacher/` | Agent Teacher:24時間365日の「最強の家庭教師」を無料で雇う技術 | 表示0・クリック0・GA0 |

<strong>D12　統合先: `/method/ip-strategy-ai-hack/`</strong>　経済学ゼロからでも解ける！ストラテジ系をAIの「たとえ話」で攻略する技術

ストラテジ・マネジメント系の読み方を1本に。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/method/management-comprehension-hack/` | 行間の向こうに正解を読め：マネジメント系長文問題を『国語の力』でハックする（創作の物語あり。移さない） | 表示0・クリック0・GA0 |

<strong>D13　統合先: `/method/ai-driven-architecture-hack/`</strong>　【内部構成】AIだけでサイトをフルスクラッチ？ Syllabus Hack を支える技術

サイトの作り方の記事が2本ある（公開を続けるかは筆者が判断）。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/app/dev-doc-process-mvp/` | 構想からリリースまで！ Syllabus Hackアプリ開発プロセスの全軌跡 | 表示0・クリック0・GA0 |

<strong>D14　統合先: `/method/generative-memory-palace/`</strong>　覚えられない専門用語は「絵」にしろ。生成AIで記憶の宮殿を建築する狂気の暗記術

記憶術と音声アウトプットを「覚え方」の1本に。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/method/voice-output-learning/` | 手が疲れたら口を動かせ。歩きながら学ぶ「音声独り言」学習法のススメ | 表示0・クリック0・GA0 |

<strong>D15　統合先: `/method/advanced-ipa-hub/`</strong>　IPA資格の高難易度対策｜応用情報・高度試験と2027年の新試験の選び方

DB・PM区分の最新論点を、ST・SAを統合した前例どおりhubの節に。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/trend/db-vector-search-rag/` | 【DB】RDBだけでは戦えない。データベーススペシャリストがマスターすべき「ベク | 表示1・クリック0・GA0 |
| `/trend/pm-ai-quality-management/` | 【PM】AIプロジェクトの品質管理をハックする。確率的な出力と完成の定義をどう合 | 表示1・クリック0・GA0 |

### リスキリング・生成AI資格の統合

<strong>E1　統合先: `/theory/reskilling-basics/`</strong>　リスキリングとは？スキルアップ・リカレント教育との違いと、キャリアに役立つ資格・使える公

リスキリングの記事が6本ある。制度の数字は公式で確認してから。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/trend/reskilling-yameta-riyuu/` | リスキリングをやめた理由｜挫折・費用対効果が合わなかった実録 | 表示4・クリック0・GA0 |
| `/trend/reskilling-era-mindset-shift/` | リスキリングは本当に必要か — 補助制度より先に変えるべきもの | 表示0・クリック0・GA0 |
| `/trend/government-reskilling-university-60man/` | 政府が大学でリスキリング60万人を推進する計画の実態 | 表示0・クリック0・GA0 |
| `/method/continuous-learning-reskilling-beyond-itp/` | ITパスポートを超えて：継続的学習とリスキリングの道筋「合格」をキャリアの始まり | 表示0・クリック0・GA0 |
| `/career/reskilling-success-story-it-passport-to-data-scientist/` | リスキリングは通過点。データで実務を証明するポートフォリオ戦略 | 表示0・クリック0・GA0 |

<strong>E2　統合先: `/trend/genai-passport-vs-it-passport/`</strong>　生成AIパスポート vs ITパスポート。AI時代にまず取るべき資格はどちらか？徹底比較

生成AI関連資格の価値を1本に。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/trend/generative-ai-certification-worth/` | 生成AI関連の資格は意味あるか — 認知度と活用場面から考える | 表示0・クリック0・GA0 |

### 試験別hubへの統合

<strong>F1　統合先: `/method/boiler-refrigeration-hub/`</strong>　ボイラー技士・冷凍機械責任者 合格ロードマップ｜「試験合格」と「免許取得」は別物と知って

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/method/boiler-hikkake-mondai-ai-hack/` | ボイラー技士の引っ掛け問題が解けない理由｜数値基準を「暗記」から「理解」に変える | 表示7・クリック0・GA0 |

<strong>F2　統合先: `/method/kiken-butsu-hub/`</strong>　危険物取扱者の甲種・乙種・丙種どれから取る？合格率と勉強時間で比べる

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/method/kiken-butsu-isshukan-hack/` | 危険物乙4を1週間で合格する短期集中ハック｜AIで優先順位を決める逆算プラン | 表示6・クリック0・GA0 |

<strong>F3　統合先: `/method/chiteki-zaisan-hub/`</strong>　知的財産管理技能検定（知財検定）合格ロードマップ｜3級から1級までの進め方

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/method/chiteki-zaisan-2kyu-jitsugi-jirei-ai-hack/` | 知財検定2級の実技（事例問題）が解けない人へ｜AIに判断ステップを分解させる練習 | 表示10・クリック1・GA0 ★ |

<strong>F4　統合先: `/method/shobo-setsubi-hub/`</strong>　消防設備士はどれから取る？全13種類の違いと乙6から始める合格ロードマップ

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/method/shobo-setsubi-otsu6-fail-diagnosis/` | 消防設備士乙6に落ちた原因は「合計点」では分からない。二重足切り構造をAIで診断 | 表示0・クリック0・GA2 |

<strong>F5　統合先: `/method/biru-kanri-hub/`</strong>　ビル管理の管理者を目指す資格｜ビル管理士・マンション管理士・エネルギー管理士の合格ロード

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/method/manshon-energy-student-hack/` | マンション管理士・エネルギー管理士は学生でも受験できる｜実務経験不要の国家資格で | 表示1・クリック0・GA0 |

<strong>F6　統合先: `/method/toeic-hub/`</strong>　TOEIC 目標スコア到達ロードマップ｜600点から900点までAIを専任講師にする

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/method/toeic-shadowing-ai-hack/` | TOEICリスニングが伸びない人へ｜AIシャドーイングで音の聞き取りを鍛える方法 | 表示12・クリック0・GA0 |
| `/career/toeic-shoushin-youken-kigyou/` | TOEIC◯点が昇進要件になっている企業の実態｜資格が効く業界・効かない業界 | 表示8・クリック0・GA1 |

<strong>F7　統合先: `/method/fp-hub/`</strong>　FP合格ロードマップ｜3級・2級・1級の違いと、2級を受けるか決める過去問10問チェック

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/method/fp-tax-planning-calc-hack/` | FP2級のタックスプランニング計算が心折れる理由｜AIで所得税の流れを図解させる | 表示0・クリック0・GA0 |
| `/method/fp-ai-simulator-hack/` | FP2級・3級の暗記を『自分専用AIシミュレーター』で終了させるハック術 | 表示0・クリック0・GA0 |
| `/trend/fp-knowledge-without-passing-cert/` | FP2級は資格より知識が武器になる｜落ちても意味がある理由 | 表示3・クリック0・GA0 |
| `/trend/fp2-jitsuki-comparison/` | FP2級の実技試験、きんざいと日本FP協会どちらが受かりやすいか | 表示0・クリック0・GA1 |

<strong>F8　統合先: `/method/takken-hub/`</strong>　宅建（宅地建物取引士）合格ロードマップ｜合格率15%の壁をAI学習でどう越えるか

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/method/takken-minpou-ai-memory-hack/` | 宅建の権利関係（民法）はAIメモリーハックで攻略する｜条文を「登場人物の物語」に | 表示0・クリック0・GA1 |

<strong>F9　統合先: `/method/boki-hub/`</strong>　日商簿記3級・2級 合格ロードマップ｜経理なら3級、製造業なら2級。仕事で決める級の選び

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/method/boki-shiwake-drill-hack/` | 日商簿記の仕訳が覚えられないのはAIドリルで解決する｜暗記量を半分にする反復学習 | 表示1・クリック0・GA0 |
| `/career/boki-keiri-career-roadmap/` | 日商簿記2級から経理・財務キャリアを作るロードマップ｜未経験から3年で目指せるポ | 表示5・クリック0・GA1 |

<strong>F10　統合先: `/method/doboku-sekou-hub/`</strong>　【2026年最新】土木施工管理技士1級2級｜経験記述をAIで添削し独学合格

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/career/doboku-sekou-jitsumu-keiken-hack/` | 土木施工管理技士補から本免許へ｜第二次検定に必要な実務経験の積み方と職務経歴書の | 表示0・クリック0・GA0 |

<strong>F11　統合先: `/method/g-kentei-hub/`</strong>　G検定（JDLA）合格ロードマップ｜最新ニュースより公式テキストの読み込みと反復テスト

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/method/g-kentei-math-statistics-hack/` | G検定の数学・統計が苦手でも受かる｜AIで「計算」ではなく「意味」から理解する方 | 表示17・クリック2・GA2 ★ |
| `/trend/g-kentei-2026-syllabus-trend/` | G検定シラバスの最新動向｜生成AI・LLM関連問題の出題比重はどう変化しているか | 表示3・クリック0・GA2 |

<strong>F12　統合先: `/method/ds-kentei-hub/`</strong>　DS検定（データサイエンティスト検定）合格ロードマップ｜統計が難しく感じる理由と、G検定

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/trend/ds-kentei/` | DS検定とは何か。文系でも挑める「データ活用」の資格を解説 | 表示1・クリック0・GA0 |

### セキュリティ記事の統合

<strong>G1　統合先: `/trend/security-incident-prevention-basics/`</strong>　今さら聞けない情報漏えい対策｜相次ぐ流出から自分と会社を守る方法

経営層向けのセキュリティ投資は、統合先に既にある節と重なる。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/trend/exec-security-investment-ai-era/` | 他社の事故は対岸の火事ではない｜AI攻撃時代に経営トップが決めるセキュリティ投資 | 表示0・クリック0・GA0 |

<strong>G2　統合先: `/method/sg-hub/`</strong>　情報セキュリティマネジメント試験（SG）合格ロードマップ｜非エンジニアは何から始めるか

セキュマネは意味ないのか、は hub のFAQ向き（fe-certification-value-debate をfe-hubへ統合した前例）。

| 統合元 | タイトル | アクセス |
| --- | --- | --- |
| `/method/sg-meaningless-rumors-hack/` | 「セキュマネは紙の無駄」と笑う同僚を後悔させろ。形だけの資格を、実務を支配する『 | 表示1・クリック0・GA0 |

## 刷新案（統合後に、アクセスのある順に）

統合先になる記事も、移した内容を反映して刷新する。ここでは、アクセス実績のある記事を先に挙げる。

| 順 | 記事 | 実績 | 刷新の方向 |
| --- | --- | --- | --- |
| 1 | `/trend/ipa-2026-cbt-schedule-guide/` | 表示352・クリック1・GA3 ★ | タイトルの「2026年10月6日受付開始」は過去の日付になった。受付開始後の「いま申し込むには」に組み替える。日程は IPA の公式ページで確認してから書く |
| 2 | `/trend/ccna-vs-aws-saa/` | 表示306・クリック4・GA1 ★ | 9位前後なのにCTRが低い。タイトルと説明文を検索語「ccna aws」に合わせる。aws-hub と重なる部分は hub へ寄せ、独自の切り口（ネットワークの知識から見た順番）に絞る |
| 3 | `/trend/mos-vs-itp-job-hunting/` | 表示123・クリック3・GA1 ★ | 8位でCTRが低い。比較の問いをタイトルの前半に出す。mos-hub と itp-hub の両方へ内部リンクを張る |
| 4 | `/method/doboku-sekou-hub/` | 表示179・クリック13・GA9 ★ | 残りの記事で最多の13クリック。F10で実務経験の記事を統合する。「2026年最新」の記述は、受験資格や試験日を公式で確認して直す |
| 5 | `/app/ap-subject-b/` | 表示94・クリック7・GA3 ★ | 7クリック。アプリの解説と使い方を整える。「応用情報 科目b」の検索語に合わせた見出しにする |
| 6 | `/method/notebooklm-features-guide/` | 表示84・クリック6・GA5 ★ | 6クリック。D4でワークフローとPDF変換を統合する。すでに11千字あるため、見出しを整理し、notebooklm-ip-study-hack と役割を分ける |
| 7 | `/theory/takken-koushin-hiyou/` | 表示80・クリック0・GA9 ★ | 22位・GAのセッション9。更新費用や講習は年度・都道府県で変わるため、公式で確認してから金額を書く。「宅建 大学生」の検索語は、刷新した大学生の記事へ内部リンクする |
| 8 | `/career/shikaku-teate-soba-ichiran/` | （対象外） | 統合先（A1）。この記事は残り記事の対象外だが、Threads経由のセッションがあるため、危険物乙4と電験三種の手当を統合して拡充する |
| 9 | `/method/kikai-hozen-ginoushi-dokugaku/` | 表示31・クリック4・GA4 ★ | CTRが高く、現状でも機能している。タイトルは変えず、内部リンクと最新の情報の確認だけ行う |
| 10 | `/trend/fintech-it-cert-intro/` | 表示24・クリック2・GA11 ★ | 残りの記事でGAのセッションが最多（11）。タイトルは変えず、一次情報の確認日を更新し、内部リンクを足す |

### 後回しにする記事

| 記事 | 理由 |
| --- | --- |
| `/theory/bcm-bcp-business-continuity/` | 表示481回だが、順位は約89位でクリックはゼロ。記事の想定読者が企業のBCP担当者で、IT試験の受験者向けのサイトとは読者が違う。刷新より、IT試験の用語としての位置づけを見直す案（要判断） |
| `/career/ses-ap-strategy/`（A2の統合先） | 宮城編のページは68位。地域別の見方を節にして統合するのが先 |

## 統合も刷新もしない記事

- アプリの記事（9本）: `/app/ap-quiz/`、`/app/sc-specialist-quiz/`、`/app/aws-cert-diagnosis/`、`/app/boki-shiwake-drill/`、`/app/fp2-calc-drill/`、`/app/g-kentei-mock-exam/`、`/app/genai-passport-quiz/`、`/app/pm-essay-gacha/`、`/app/takken-kenri-quiz/`。アプリ本体が主役のため、内容の統合はしない。関連する勉強法の記事（boki-shiwake-drill-hack など）を hub へ統合するときに、アプリへ内部リンクを張る
- 試験が単独でhubがない、または独自の切り口を持つ記事（現状維持。統合先に当てはまるものは内部リンクで案内する）:
  - `/career/regional-it-career-hub/`　【全国版】地方ITキャリアを「資格×地域ハック」で攻略する：地域別戦略まとめ
  - `/career/secretarial-exam-multiwork-freelance/`　秘書検定 × マルチワーク・フリーランス活用術｜AI時代の「管理系スキル証明」戦
  - `/career/nenkin-advisor-3kyuu-ginkouin/`　年金アドバイザー3級は銀行員の昇格要件？知名度より実務直結を狙う検定
  - `/career/50dai-mikeiken-shikaku-osoi/`　50代未経験からの資格挑戦は遅い？年代別の現実
  - `/career/kensetsugyou-keirishi-keishin-katen/`　建設業経理士は経審で加点される｜知名度は低いが実利がある検定
  - `/career/shuukatsu-shikaku-imi-nai/`　就活で資格は意味ないは本当か？ガクチカと資格どっちが強いか
  - `/method/nissho-pc-kentei-ai-hack/`　日商PC検定はAI対話学習と相性がいい理由——操作手順ではなく「なぜ」を教わる勉
  - `/method/self-loop-ai-learning/`　ダン・マーテルの「S.E.L.F.ループ」で自己学習を設計する｜AIとの対話で「
  - `/method/shikaku-benkyou-akirameru-timing/`　資格の勉強を諦めるべきタイミング｜サンクコストと撤退基準
  - `/method/ai-era-book-reading-value/`　AI時代にあえて「本」を読む。ITリテラシーの地図を手に入れ「問い」を洗練させる
  - `/method/pomodoro-anki-technique/`　ポモドーロ勉強法を「道具」でハックする。Notionからアナログタイマー、自作ア
  - `/theory/balanced-scorecard/`　BSC（バランススコアカード）徹底解説！4つの視点で経営を「多角的」に測る
  - `/theory/project-service-management-overview/`　WBS・ガントチャート・クリティカルパス・SLA/SLOとは？プロジェクト管理5
  - `/theory/statistics-mean-variance-probability-sampling/`　平均値・標準偏差・確率・サンプリングとは？統計の基礎を1ページで整理
  - `/theory/it-legal-basics-ip-subcontract-contracts/`　知的財産権・不正競争防止法・下請法・契約形態とは？IT法務の基礎を1ページで整理
  - `/theory/prompt-engineering-basics/`　プロンプトエンジニアリングとは？生成AIの回答品質を上げる指示設計の基本
  - `/trend/exam-application-to-exam-period-table/`　申込から本番まで最長何か月？IPA試験・宅建・電験ほか資格別の早見表【2026年
  - `/trend/ipa-open-badge-impact/`　IPA「オープンバッジ」導入の衝撃。デジタル履歴書でIT資格の証明はどう変わる？
  - `/trend/it-passport-syllabus-genai-update/`　ITパスポート最新シラバス攻略｜生成AI・プロンプト等の変更点と対策

## 事実確認・創作の確認が必要なもの

- 創作の物語を含む4本（統合するときは、物語の部分を移さない）: `pseudo-code-bridge-to-fe`、`wrong-choice-analysis-hack`、`management-comprehension-hack`、`ipa-absence-report-hack`。「彼に問いかけた」「欠席した朝」など、筆者の体験として書かれているが、筆者が書いたものか確認できない
- `ai-driven-architecture-hack`: 「私が提案し、AIが実装する」は筆者本人の説明とみられる。このまま残すか、公開を続けるかは筆者が判断する
- 数字・制度の確認が必要: E1のリスキリングの記事（政府の「60万人」計画など）、`takken-koushin-hiyou`（更新費用）、`doboku-sekou-hub`（受験資格・年度）、`ipa-2026-cbt-schedule-guide`（日程）、A1の資格手当（金額の出典）

## 判断してほしいこと

1. 統合の範囲: 本案の111記事すべてを統合する案で進めてよいか。慎重にするなら、★付き（クリックまたはGAのあるもの）の記事を先に外す
2. 試験別hub（F）: 「AIハック」の薄い記事（2〜3千字）を hub に統合する。検索語ごとの記事を失うため、hubに見出しで検索語を残す前提でよいか
3. 新規の統合先3本（C1〜C3）: 新規に作るか、メンバーのうち1本のURLを使い回すか。URLを使い回すと評価を引き継ぎやすい
4. 理論記事の統合（B）: 経営戦略の枠組みを2本にまとめる案（B1・B2）でよいか。1本ずつ残す場合は、統合の対象から外す
5. `ai-driven-architecture-hack` と `dev-doc-process-mvp`（D13）: サイトの作り方の記事を、公開し続けるか
6. `bcm-bcp-business-continuity`: 順位が圏外の記事を、IT試験の用語として書き直すか、現状のままにするか

## 進め方（案）

1. 上の判断を受けて、統合グループを確定する（確定後は変更しない）
2. 統合先ごとに、内容を移して拡充し、統合元を `git rm` して redirects を追加する。被リンクの文言と `lastmod` も更新する
3. 統合先のうち、アクセスのある順に刷新する（上の刷新案の順）
4. 数回に分け、各回で `pnpm build` を確認してコミットする
5. 記録は `refreshed-list.md` と `out-task.md` に反映する（第4弾までと同じ）
