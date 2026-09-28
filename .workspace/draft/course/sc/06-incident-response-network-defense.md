---
title: '第6章 インシデント対応・物理/人的セキュリティと検知・ネットワーク防御'
examId: 'sc'
kind: 'chapter'
order: 6
genre: '対策（運用・防御）'
estimatedMinutes: 240
syllabusRefs: ['情報セキュリティ対策']
field2027: 'security-ethics'
quizRef: 'course-ch6'
relatedPosts: []
noteUrl: ''
draft: true
lastmod: 2026-09-26
metadata:
  description: ''
---

<!-- データ出典: syllabus-sc-2027.json v0.1-draft（2027年度夏〜秋頃（予定）） -->
<!-- 章ヘッダは実装側で自動生成（章番号／ジャンル／目安240分／読了目安／進捗） -->

## この章で学ぶこと

<!-- 3〜5行。担当する中分類・小分類: 情報セキュリティ対策（全109語。精選基準は各コースのcurriculum.md §3） -->

## インシデント対応・物理/人的セキュリティと検知・ネットワーク防御

<!-- 要点の要約 10〜20行。既存theory記事の要約に徹し、フルで再解説しない（カニバリ回避） -->

**扱う用語（候補・全109語。精選して残す語だけ残し、他は削除する）**

- OSINT（公開情報）の利用
- IoC（Indicator of Compromise）
- 脅威情報構造化記述形式（STIX）
- 検知指標情報自動交換手順（TAXII）
- TLP（Traffic Light Protocol）
- 脅威ハンティング（Threat Hunting）
- テイクダウン
- インシデントハンドリング
- インシデント対応プロセス（準備，検知・分析，封じ込め・根絶・復旧，事後対応）
- トリアージ
- インシデントレスポンス計画（IRP）
- CSIRTの構築・運用（CSIRTマテリアル）
- 法令に基づく報告及び本人への通知
- 関係機関への届出
- 公表の判断及び広報対応
- サイバー保険
- 事後レビュー
- バックアップからの復旧手順の検証
- 復旧目標（RTO，RPO）に基づく復旧設計
- 代替サイト（ホットサイト，コールドサイト）
- 組織における内部不正防止ガイドライン
- 情報セキュリティ訓練（標的型メールに関する訓練，レッドチーム演習，机上演習 など）
- UEBA（User and Entity Behavior Analytics）
- セキュリティクリアランス
- 秘密保持契約・誓約書
- セキュリティゾーニング
- 入退管理システム
- アンチパスバック
- モバイル機器（ノートPC，スマートフォン，タブレット端末 など）のセキュリティ
- MDM（Mobile Device Management）
- サポートユーティリティ（電源，空調，給水 など）の保守
- 強制アクセス制御（MAC）
- 任意アクセス制御（DAC）
- ロールベースアクセス制御（RBAC）
- 属性ベースアクセス制御（ABAC）
- 最小特権
- 特権アクセス管理（PAM）
- セキュアOS
- ビヘイビア法（振る舞い検知）
- ヒューリスティック法
- 未知マルウェア検出手法
- 動的解析
- 静的解析
- バックアップ分離
- 3-2-1ルール
- WORM（Write Once Read Many）機能
- イミュータブルバックアップ
- カナリアファイル
- 暗号化挙動検知
- 脆弱性情報の収集と適用判断
- パッチ管理
- 資産インベントリの継続的把握
- ASM／EASM（外部攻撃対象領域管理）
- DLP（Data Loss Prevention）
- Web分離（Webアイソレーション）
- 情報の削除及びデータマスキングの実装
- ログ設計（取得範囲，保存期間，改ざん防止（WORM，追記のみ），時刻同期（NTP）とタイムスタンプ）
- ログの相関分析
- シグネチャ型
- アノマリ型
- 偽陽性（フォールスポジティブ）
- 偽陰性（フォールスネガティブ）
- SIEM（Security Information and Event Management）
- EDR（Endpoint Detection and Response）
- NDR（Network Detection and Response）
- XDR（Extended Detection and Response）
- SOAR（Security Orchestration，Automation and Response）
- SOCの運用（アラートトリアージ，誤検知の低減）
- MSS（Managed Security Service）
- MDR（Managed Detection and Response）
- 境界防御
- ゼロトラストの実装技術（マイクロセグメンテーション，ZTNA，継続的な検証）
- ファイアウォール（パケットフィルタリング型，ステートフルインスペクション型，アプリケーションゲートウェイ型）
- IDS／IPS（NIDS，HIDS）
- VPN（リバースプロキシ方式，ポートフォワーディング方式，L2フォワーディング方式）
- 検疫ネットワーク
- 端末健全性検証によるネットワークアクセス制御（NAC，TNC（Trusted Network Connect））
- MACアドレスフィルタリング
- DHCPスヌーピング
- リバースプロキシ
- DDoS対策（CDN，スクラビングセンター，Anycast，レート制限）
- Bot対策（CAPTCHA，レート制限）
- ネットワークトラフィック分析
- ネットワーク脆弱性検査
- ポートスキャンによる検査
- TLS（TLS 1.2，TLS 1.3，暗号スイート，SSL及びTLS 1.0／1.1の廃止）
- STARTTLS
- SMTP over TLS
- IPsec（ESP，AH，IKE）
- QUIC
- DoH
- DoT
- IEEE 802.1X
- RADIUS
- EAP（Extensible Authentication Protocol）
- EAP-TLS
- PSK（Pre-Shared Key）
- WPA3（Personal，Enterprise，Enhanced Open）
- SMTP-AUTH
- OP25B
- 送信ドメイン認証（SPF，DKIM，DMARC（ポリシー（none，quarantine，reject），集約レポート））
- S/MIME（Secure MIME）
- 添付ファイルの無害化（サニタイズ）
- 統合脅威管理（UTM）
- WAF（Web Application Firewall）
- CASB（Cloud Access Security Broker）
- CSPM（Cloud Security Posture Management）
- CWPP（Cloud Workload Protection Platform）
- SASE（Secure Access Service Edge）

<!-- 深掘り: 既存theory記事があれば追記 [/theory/{slug}/](/theory/{slug}/)。無ければ新規要約が必要な節として対応 -->

## AIで学ぶ

```
あなたは情報処理安全確保支援士試験の講師です。「インシデント対応・物理/人的セキュリティと検知・ネットワーク防御」の範囲について、以下の用語を初学者向けに**関連づけながら**説明してください（単体の丸暗記より、用語同士のつながりを理解したほうが記憶に定着しやすく、試験本番で紛らわしい選択肢を見分ける力もつくためです）。用語同士の違いが分かる**比較表**を最後に付けてください。

（精選後の用語リストをここに貼る）
```

このプロンプトは、<strong>役割設定</strong>（試験の講師として振る舞わせる）→<strong>関連づけの指示</strong>（用語を単に列挙させず、つながりで説明させる）→<strong>出力形式の指定</strong>（比較表で受け取る）という3段構成でできています。コピーして使うだけでなく、この組み立て方を覚えておくと、他の章や他の資格でも自分でプロンプトを作れるようになります。

## 章末チェック

<!-- island: quizRef=course-ch6。出題テーマ: （次工程で選定） -->
