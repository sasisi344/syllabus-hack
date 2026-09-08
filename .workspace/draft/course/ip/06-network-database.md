---
title: '第6章 ネットワークとデータベース'
examId: 'ip'
kind: 'chapter'
order: 6
genre: 'ネットワーク・DB'
estimatedMinutes: 90
syllabusRefs: ['ネットワーク', 'データベース']
field2027: 'technology'
quizRef: 'course-ch6'
relatedPosts:
  - /theory/tcp-ip-protocol-suite/
  - /theory/osi-reference-model/
  - /theory/dns-domain-name-system/
  - /theory/http-https-security/
  - /theory/cookie-privacy-web/
  - /theory/database-normalization/
  - /theory/exclusive-control/
noteUrl: ''
draft: true
lastmod: 2026-09-09
metadata:
  description: ''
---

<!-- データ出典: syllabus-ip-2027.json v0.1-draft（2027年度春頃（予定）） -->
<!-- 章ヘッダは実装側で自動生成（章番号／ジャンル／目安90分／読了目安／進捗） -->

## この章で学ぶこと

情報が世界とつながる仕組み（<strong>ネットワーク</strong>）と、情報を整理して保存する仕組み（<strong>データベース</strong>）です。2027年シラバスでも用語の変化が小さい分野で、既存のtheory記事の蓄積が厚く再利用しやすい章です。ネットワークは「機器」「アドレス」「プロトコル（通信規約）」の3層で、データベースは「設計（正規化）」「操作（コミット・ロールバック）」の2軸で整理すると覚えやすくなります。

## ネットワーク

小規模な範囲をつなぐ<strong>LAN</strong>と、それらを広域でつなぐ<strong>WAN</strong>、インターネットへの接続を提供する<strong>ISP</strong>という規模の違いから理解します。機器の役割は、異なるネットワーク同士をつなぐ<strong>ルータ</strong>、同一ネットワーク内で中継する<strong>スイッチングハブ</strong>、外部との境界で不正な通信を防ぐ<strong>ファイアウォール</strong>で区別します。

アドレス体系では、世界に1つだけの<strong>グローバルIPアドレス</strong>と組織内だけで使う<strong>プライベートIPアドレス</strong>を変換する<strong>NAT</strong>、ネットワークの範囲を区切る<strong>サブネットマスク</strong>が頻出です。ドメイン名とIPアドレスを対応づける<strong>DNS</strong>は「インターネットの電話帳」と例えると理解しやすくなります。通信の信頼性を保証する<strong>TCP</strong>と速度優先の<strong>UDP</strong>の違い、Webの通信規約である<strong>HTTP</strong>とそれを暗号化した<strong>HTTPS</strong>、メール送受信で使う<strong>SMTP・POP3・IMAP</strong>の役割分担、機器にIPアドレスを自動割り当てする<strong>DHCP</strong>も基本語として押さえます。

**扱う用語（精選後・22語）**

- LAN／WAN／インターネットサービスプロバイダ（ISP）
- 無線LAN（SSID）／Wi-Fi
- グローバルIPアドレス／プライベートIPアドレス／NAT
- DNS／ファイアウォール／ルータ／スイッチングハブ
- サブネットマスク
- TCP／UDP／ポート番号
- HTTP／HTTP over TLS（HTTPS）
- SMTP／POP3／IMAP
- DHCP
- cookie
- 5G（第5世代移動通信システム）

> 深掘り: [インターネットの主役！TCP/IPの4階層](/theory/tcp-ip-protocol-suite/)／[ネットワークの共通言語！OSI参照モデル](/theory/osi-reference-model/)／[住所録の管理人！DNSの仕組み](/theory/dns-domain-name-system/)／[Web閲覧の基本と安全！HTTPとHTTPSの違い](/theory/http-https-security/)／[Webの記憶装置！Cookieの役割](/theory/cookie-privacy-web/)

## データベース

現実の情報を「表（テーブル）」の形で管理する<strong>RDBMS（関係データベース管理システム）</strong>が土台です。1つの行を一意に特定するための<strong>主キー</strong>、データの重複や矛盾を排除するために表を整理する<strong>正規化</strong>（第1〜第3正規形）は最頻出のテーマです。表から必要な行・列を取り出したり結合したりする<strong>関係演算（選択・射影・結合）</strong>も操作の基本として押さえます。

複数の処理が同時にデータを更新しようとした際の競合を防ぐ<strong>同時実行制御（排他制御）</strong>、処理を確定させる<strong>コミット</strong>、失敗時に取り消す<strong>ロールバック</strong>、お互いが相手の処理完了を待ち続けて動けなくなる<strong>デッドロック</strong>は、セットで理解すると得点源になります。

**扱う用語（精選後・8語）**

- RDBMS
- 主キー／正規化
- 関係演算（選択，射影，結合）
- 同時実行制御（排他制御）
- コミット／ロールバック
- デッドロック

> 深掘り: [データベース正規化とは？](/theory/database-normalization/)／[データの衝突を防げ！排他制御とデッドロックの攻略法](/theory/exclusive-control/)

## AIで学ぶ

```
あなたはITパスポート試験の講師です。「ネットワークとデータベース」の範囲について、以下の用語を初学者向けに**関連づけながら**説明してください。用語同士の違いが分かる**比較表**を最後に付けてください。

【ネットワーク】LAN／WAN、ISP、グローバル／プライベートIPアドレス、NAT、DNS、ファイアウォール、ルータ、スイッチングハブ、TCP／UDP、HTTP／HTTPS、SMTP／POP3／IMAP、DHCP、cookie
【データベース】RDBMS、主キー、正規化、関係演算（選択・射影・結合）、同時実行制御（排他制御）、コミット／ロールバック、デッドロック
```

## 章末チェック

<!-- island: quizRef=course-ch6。出題テーマ: TCP/UDPの違い、HTTP/HTTPSの違い、正規化の目的、排他制御とデッドロックの関係、NAT/DNSの役割 -->
