---
title: '第5章 PC・システムの基礎'
examId: 'ip'
kind: 'chapter'
order: 5
genre: 'PC・システム'
estimatedMinutes: 150
syllabusRefs: ['システムの種類・構成', 'クラウド', '情報デザイン・情報メディア']
field2027: 'technology'
quizRef: 'course-ch5'
relatedPosts:
  - /theory/cpu-memory-functions/
  - /theory/storage-hdd-ssd/
  - /theory/io-interface-usb-hdmi/
  - /theory/bios-device-driver/
  - /theory/os-operating-systems/
  - /theory/cloud-service-selection-saas-paas-iaas/
  - /theory/ui-ux-design-diff/
noteUrl: ''
draft: true
lastmod: 2026-09-09
metadata:
  description: ''
---

<!-- データ出典: syllabus-ip-2027.json v0.1-draft（2027年度春頃（予定）） -->
<!-- 章ヘッダは実装側で自動生成（章番号／ジャンル／目安150分／読了目安／進捗） -->

## この章で学ぶこと

PCそのものの部品・周辺機器（<strong>システムの種類・構成</strong>）、自社で持たずに借りる仕組み（<strong>クラウド</strong>）、画面や画像・動画をどう扱うか（<strong>情報デザイン・情報メディア</strong>）の3系統です。ハードウェアは「何をする部品か」を1対1で対応づけて覚え、クラウドとメディアは対比（オンプレミス vs クラウド、可逆圧縮 vs 非可逆圧縮）を軸に整理すると効率的です。

## システムの種類・構成

PCの頭脳である<strong>CPU</strong>と作業机にあたる<strong>メモリ（主記憶装置）</strong>の役割分担、画像処理に特化した<strong>GPU</strong>との違いがまず基本です。データを保存する装置は、電源を切っても消えない<strong>ROM</strong>と、大容量の<strong>HDD・SSD</strong>を区別します。外部機器との接続規格である<strong>USB・HDMI・Bluetooth・NFC</strong>は「有線か無線か」「映像用か汎用か」で整理すると覚えやすく、周辺機器を自動認識する<strong>プラグアンドプレイ</strong>とそれを支える<strong>デバイスドライバ</strong>もセットで扱います。

OSは<strong>Windows系・Mac系・UNIX系</strong>という系統の違いを押さえます。複数のディスクを組み合わせて信頼性や速度を高める<strong>RAID</strong>、システムが正常に稼働している割合を示す<strong>稼働率</strong>の計算（直列・並列構成での稼働率の求め方）は頻出の計算問題です。IoT関連では、モノがネットにつながる<strong>IoT</strong>そのものと、データをクラウドに送らずその場で処理する<strong>エッジコンピューティング</strong>、現実の物体をデジタル空間に再現する<strong>デジタルツイン</strong>を押さえます。

**扱う用語（精選後・24語）**

- CPU／GPU／メモリ（主記憶装置）／ROM
- HDD／SSD／フラッシュメモリ
- USB／HDMI／Bluetooth／NFC
- プラグアンドプレイ／デバイスドライバ
- OCR／生体認証装置
- Windows系OS／Mac系OS／UNIX
- RAID／システムの稼働率
- IoT／エッジコンピューティング／デジタルツイン
- ウェアラブルコンピュータ
- センサー／アクチュエーター

> 深掘り: [CPUとメモリの役割とは？](/theory/cpu-memory-functions/)／[ストレージ(HDD/SSD)とは？](/theory/storage-hdd-ssd/)／[入出力インタフェース(USB/HDMI)とは？](/theory/io-interface-usb-hdmi/)／[BIOSとデバイスドライバとは？](/theory/bios-device-driver/)／[OS(オペレーティングシステム)とは？](/theory/os-operating-systems/)

## クラウド

自社でサーバを持つ<strong>オンプレミス</strong>と対比しながら、クラウドサービスの3階層を区別します。アプリごと借りる<strong>SaaS</strong>、開発基盤を借りる<strong>PaaS</strong>、サーバなどのインフラを借りる<strong>IaaS</strong>の順に「借りる範囲が広い（自由度が高い）」と覚えると区別しやすくなります。提供形態としては、不特定多数が共有する<strong>パブリッククラウド</strong>と自社専用の<strong>プライベートクラウド</strong>、両方を組み合わせる<strong>ハイブリッドクラウド</strong>があります。1台の物理サーバ上に複数の環境を作る<strong>仮想化</strong>（ホスト型・ハイパーバイザー型・コンテナ型）もクラウドを支える基盤技術として頻出です。

**扱う用語（精選後・4語）**

- クラウドサービス（SaaS，PaaS，IaaS）
- クラウドの提供形態（パブリック，プライベート，ハイブリッド）
- オンプレミスとクラウドとの違い
- 仮想化（ホスト型，ハイパーバイザー型，コンテナ型）

> 深掘り: [クラウド選定の基準：SaaS・PaaS・IaaSの使い分け](/theory/cloud-service-selection-saas-paas-iaas/)

## 情報デザイン・情報メディア

見た目である<strong>UI（ユーザーインタフェース）</strong>と使い心地全体である<strong>UX</strong>の違い、誰にとっても使いやすい<strong>アクセシビリティ</strong>とその具体的な指針である<strong>ユニバーサルデザインの7原則</strong>を押さえます。画像データは、点の集まりで表現し拡大すると粗くなる<strong>ラスターデータ</strong>と、計算式で表現し拡大しても劣化しない<strong>ベクターデータ</strong>の違いが頻出です。ファイルサイズを小さくする圧縮には、完全に元に戻せる<strong>可逆圧縮</strong>と、多少の情報を犠牲にする<strong>非可逆圧縮</strong>（JPEGなど）があります。

色の表現では、光を混ぜるほど明るくなる<strong>光の3原色（RGB）</strong>と、インクを混ぜるほど暗くなる<strong>色の3原色（CMY）</strong>を対比で覚えます。画像の解像度を示す<strong>画素（dpi・ppi）</strong>も計算問題で狙われます。仮想現実の<strong>VR</strong>、現実に情報を重ねる<strong>AR</strong>、両方を融合する<strong>MR</strong>、それらを包括する<strong>XR</strong>という関係性、仮想空間サービスの<strong>メタバース</strong>も新シラバスで強化されています。

**扱う用語（精選後・16語）**

- UI（ユーザーインタフェース）／UX
- ユーザビリティ／アクセシビリティ／ユニバーサルデザインの7原則
- ラスターデータ／ベクターデータ
- 可逆圧縮／非可逆圧縮
- 光の3原色（RGB）／色の3原色（CMY）／CMYK
- 画素（dpi，ppi）
- VR（仮想現実）／AR（拡張現実）／MR（複合現実）
- メタバース

> 深掘り: [UIとUXの違いとは？](/theory/ui-ux-design-diff/)

## AIで学ぶ

```
あなたはITパスポート試験の講師です。「PC・システムの基礎」の範囲について、以下の用語を初学者向けに**関連づけながら**説明してください。用語同士の違いが分かる**比較表**を最後に付けてください。

【システムの種類・構成】CPU、GPU、メモリ、ROM、HDD、SSD、USB、HDMI、Bluetooth、NFC、プラグアンドプレイ、デバイスドライバ、Windows系OS／Mac系OS／UNIX、RAID、システムの稼働率、IoT、エッジコンピューティング
【クラウド】SaaS／PaaS／IaaS、パブリック／プライベート／ハイブリッドクラウド、オンプレミス、仮想化
【情報デザイン・情報メディア】UI／UX、アクセシビリティ、ラスター／ベクターデータ、可逆圧縮／非可逆圧縮、光の3原色（RGB）／色の3原色（CMY）、VR／AR／MR
```

## 章末チェック

<!-- island: quizRef=course-ch5。UI仕様はip-course-curriculum.md §3-5参照 -->

1. クラウドサービスのうち、開発・実行環境（プラットフォーム）まで提供され、その上にアプリケーションを構築する形態はどれか。
   - ア: SaaS
   - イ: PaaS
   - ウ: IaaS
   - エ: オンプレミス
   - **正解**: イ
2. ファイルサイズを小さくする圧縮方式のうち、元のデータに完全に復元できるものはどれか。
   - ア: 非可逆圧縮
   - イ: 可逆圧縮
   - ウ: ラスター圧縮
   - エ: ベクター圧縮
   - **正解**: イ
3. 光の3原色（RGB）の説明として正しいものはどれか。
   - ア: 混ぜるほど暗くなる、インクの表現に使う
   - イ: 混ぜるほど明るくなる、ディスプレイなど光の表現に使う
   - ウ: プリンターのインクにのみ使われる
   - エ: 白黒印刷専用の表現方式
   - **正解**: イ
4. 現実の風景に情報を重ねて表示する技術はどれか。
   - ア: VR（仮想現実）
   - イ: AR（拡張現実）
   - ウ: MR（複合現実）
   - エ: XR（クロスリアリティ）
   - **正解**: イ
