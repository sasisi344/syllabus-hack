---
title: '第7章 認証技術と暗号・PKI'
examId: 'sc'
kind: 'chapter'
order: 7
genre: '対策（認証・暗号）'
estimatedMinutes: 180
syllabusRefs: ['情報セキュリティ対策']
field2027: 'security-ethics'
quizRef: 'course-ch7'
relatedPosts: []
noteUrl: ''
draft: true
lastmod: 2026-09-26
metadata:
  description: ''
---

<!-- データ出典: syllabus-sc-2027.json v0.1-draft（2027年度夏〜秋頃（予定）） -->
<!-- 章ヘッダは実装側で自動生成（章番号／ジャンル／目安180分／読了目安／進捗） -->

## この章で学ぶこと

<!-- 3〜5行。担当する中分類・小分類: 情報セキュリティ対策（全77語。精選基準は各コースのcurriculum.md §3） -->

## 認証技術と暗号・PKI

<!-- 要点の要約 10〜20行。既存theory記事の要約に徹し、フルで再解説しない（カニバリ回避） -->

**扱う用語（候補・全77語。精選して残す語だけ残し、他は削除する）**

- ストレージ暗号化
- ファイル暗号化
- データベース暗号化
- デジタル署名
- メッセージ認証符号（MAC）
- HMAC
- コードサイニング
- エンティティ認証
- DNSSEC
- 多要素認証
- 多段階認証
- リスクベース認証
- フィッシング耐性のある認証
- Kerberos方式
- LDAPサーバでの認証
- アイデンティティ連携（OpenID Connect，SAML，OAuth 2.0，IdP（Identity Provider））
- PKCE
- アクセストークン
- リフレッシュトークン
- JWT（JSON Web Token）
- シングルサインオン（SSO）
- IDaaS（Identity as a Service）
- 身体的特徴
- 行動的特徴
- 本人拒否率（FRR）
- 他人受入率（FAR）
- 等価誤り率（EER）
- ライブネス検知（アクティブ検知，パッシブ検知）
- FIDO（FIDO2，WebAuthn，CTAP，パスキー）
- ワンタイムコード
- 共通鍵暗号方式
- 公開鍵暗号方式（RSA暗号，DSA など）
- ハイブリッド暗号
- 楕円曲線暗号
- ECDSA（楕円曲線DSA）
- Diffie-Hellman鍵交換（DH）
- ECDH
- 前方秘匿性（PFS）
- 鍵生成
- 鍵管理
- 鍵のライフサイクル（生成，配送，保管，更新，廃棄）
- HSM（Hardware Security Module）
- 鍵管理システム（KMS）
- 擬似乱数生成器（PRNG）
- 量子乱数生成器（QRNG）
- 危殆化
- 暗号強度（ビットセキュリティ）
- SHA-2（SHA-256 など）
- SHA-3
- 原像計算困難性（一方向性）
- 第二原像発見困難性
- 衝突発見困難性
- MD5及びSHA-1の危殆化
- ブロック暗号（AES（Advanced Encryption Standard） など）
- ストリーム暗号（KCipher-2 など）
- 暗号利用モード（CBC，CTR など）
- 認証暗号（認証付き暗号，AEAD（Authenticated Encryption with Associated Data））
- 軽量暗号
- 公開鍵基盤（PKI）
- 認証局（CA）
- 政府認証基盤（GPKI）
- CP/CPS（Certificate Policy/Certification Practice Statement）
- CA/Browser Forum
- ITU-T X.509
- 証明書パス検証
- 証明書失効リスト（CRL）
- OCSP
- コードサイニング証明書
- 証明書自動発行（ACME）
- CAA（Certification Authority Authorization）
- 秘密分散
- 準同型暗号
- ゼロ知識証明
- TEE（Trusted Execution Environment）
- 量子鍵配送（QKD）
- 耐量子計算機暗号（PQC，ML-KEM，ML-DSA）
- 暗号アジリティ（Crypto Agility）

<!-- 深掘り: 既存theory記事があれば追記 [/theory/{slug}/](/theory/{slug}/)。無ければ新規要約が必要な節として対応 -->

## AIで学ぶ

```
あなたは情報処理安全確保支援士試験の講師です。「認証技術と暗号・PKI」の範囲について、以下の用語を初学者向けに**関連づけながら**説明してください（単体の丸暗記より、用語同士のつながりを理解したほうが記憶に定着しやすく、試験本番で紛らわしい選択肢を見分ける力もつくためです）。用語同士の違いが分かる**比較表**を最後に付けてください。

（精選後の用語リストをここに貼る）
```

このプロンプトは、<strong>役割設定</strong>（試験の講師として振る舞わせる）→<strong>関連づけの指示</strong>（用語を単に列挙させず、つながりで説明させる）→<strong>出力形式の指定</strong>（比較表で受け取る）という3段構成でできています。コピーして使うだけでなく、この組み立て方を覚えておくと、他の章や他の資格でも自分でプロンプトを作れるようになります。

## 章末チェック

<!-- island: quizRef=course-ch7。出題テーマ: （次工程で選定） -->
