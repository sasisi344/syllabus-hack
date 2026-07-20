# examId カタログ（記事フロントマター用）

記事の `knowledge.examId` に設定できる値の一覧。  
**正本**: `src/content/config.ts` の `z.enum([...])`（2026-06-15 時点）

新規資格を追加するときは、記事作成前に `src/content/config.ts` へ kebab-case スラッグを追記すること。  
追記しないと `pnpm build` / `pnpm dev` で `InvalidContentEntryDataError` になる。

```yaml
knowledge:
  examId: 'kebab-case-slug'  # 下表のいずれか
  type: 'method'             # method / trend / career / app / theory 等
  difficulty: 'intermediate' # beginner / intermediate / advanced
```

---

## 登録済み examId 一覧

### IPA 高度試験・国家試験（情報処理技術者）

| examId | 資格名（正式名称・通称） | Hub記事 | 備考 |
| --- | --- | --- | --- |
| `ip` | ITパスポート試験 | `method/itp-hub` | **唯一の正規スラッグ**。旧 `it-passport` は 2026-07-10 に統一・enum から削除済み |
| `fe` | 基本情報技術者試験 | `method/fe-hub` | 科目B系は `method/fe-subject-b-ai-prompt-hub` |
| `ap` | 応用情報技術者試験 | `method/ap-hub` | |
| `sg` | 情報セキュリティマネジメント試験 | `method/sg-hub` | |
| `nw` | ネットワークスペシャリスト試験 | — | |
| `db` | データベーススペシャリスト試験 | — | |
| `sc` | 情報処理安全確保支援士試験 | `method/advanced-ipa-hub` | 高度試験クラスターのハブ |
| `st` | ITストラテジスト試験 | — | |
| `sa` | システムアーキテクト試験 | — | |
| `pm` | プロジェクトマネージャ試験 | — | |
| `es` | エンベデッドシステムスペシャリスト試験 | — | |
| `sm` | ITサービスマネージャ試験 | — | |
| `au` | システム監査技術者試験 | — | |

### ベンダー・民間検定

| examId | 資格名 | Hub記事 | 備考 |
| --- | --- | --- | --- |
| `ccna` | Cisco CCNA | `method/ccna-hub` | |
| `g-kentei` | ディープラーニングG検定 | `method/g-kentei-hub` | |
| `ds-kentei` | データサイエンティスト検定 | `method/ds-kentei-hub` | |
| `mos` | Microsoft Office Specialist | `method/mos-hub` | |
| `toeic` | TOEIC L&R | `method/toeic-hub` | 2026-07-20追加 |

### 国家資格・実務系（非IPA）

| examId | 資格名 | Hub記事 | 備考 |
| --- | --- | --- | --- |
| `takken` | 宅地建物取引士（宅建） | `method/takken-hub` | |
| `denken` | 第三種電気主任技術者（電験三種） | `method/denken-hub` | |
| `boki` | 日商簿記 | `method/boki-hub` | |
| `kiken-butsu` | 危険物取扱者（乙4等） | `method/kiken-butsu-hub` | |
| `biru-kanri` | ビル管理クラスター（ビル管理士・マンション管理士・エネルギー管理士） | `method/biru-kanri-hub` | 複数資格クラスター |
| `doboku-sekou` | 土木施工管理技士（1級・2級） | `method/doboku-sekou-hub` | 級あり資格 |
| `chiteki-zaisan` | 知的財産管理技能検定（知財検定、1〜3級） | `method/chiteki-zaisan-hub` | 2026-07-10追加。級あり資格 |
| `boiler-refrigeration` | ボイラー技士・冷凍機械責任者クラスター | `method/boiler-refrigeration-hub` | 2026-07-10追加。複数資格クラスター |
| `shobo-setsubi` | 消防設備士（乙6・乙4中心、甲種含む） | `method/shobo-setsubi-hub` | 2026-07-12追加。類あり資格・ビルメン系クラスター |
| `fp` | ファイナンシャル・プランニング技能検定（FP） | `method/fp-hub` | 2026-07-11追加。旧`common`扱いから独立（WP05 J-2）。級あり資格（FP2級記事が中心） |
| `aws` | AWS認定資格クラスター（CLF・SAA・ANS等） | `method/aws-hub` | 2026-07-11追加。旧`common`扱いから独立（WP05 J-2）。複数資格クラスター |
| `fintech-it` | 金融IT検定（FITA主催） | — | 2026-07-14追加。Hub未作成（段階戦略・第1弾trend記事のみ公開。反応次第でHub化） |

### 汎用・横断

| examId | 用途 | Hub記事 | 備考 |
| --- | --- | --- | --- |
| `common` | 資格横断・複数資格・非特定 | `method/level4-strategy-hub` 等 | IPA全体・AI学習法・キャリア横断記事向け。FP/AWS単独記事は`fp`/`aws`へ移行済み（2026-07-11）。両方に跨る記事（例: `career/next-step-aws-vs-fp-strategy`）は`common`のまま維持 |

---

## クイック参照（コピペ用）

```
ip, sg, fe, ap, st, sa, pm, nw, db, es, sm, au, sc,
common, g-kentei, ds-kentei, ccna,
denken, boki, takken, mos, kiken-butsu, biru-kanri, doboku-sekou,
chiteki-zaisan, boiler-refrigeration, shobo-setsubi, fp, aws, fintech-it, toeic
```

---

## 新規 examId 追加手順

1. kebab-case でスラッグを決める（例: `chiteki-zaisan`）
2. `src/content/config.ts` の `examId` enum に追記
3. 本ファイル（`exam-id-catalog.md`）の表を更新
4. Hub記事を作る場合は `.agents/cert_hub_template.md` に従う

---

## 未登録・予定（TODO.md より）

以下は Hub 作成予定だが、**まだ `config.ts` に examId 未登録**。記事化時に上記手順で追加すること。

（2026-07-20時点で未登録・予定なし。fp/aws/boiler-refrigeration/toeicはすべて登録済み・上表参照）

---

## 関連ドキュメント（別カタログ）

| ファイル | 用途 |
| --- | --- |
| `src/content/config.ts` | **記事フロントマター**の examId 正本（ビルド検証） |
| `.agents/quiz_app_rules.md` §2 | **クイズアプリ**用 examId（`it-passport-mgmt` 等、アプリ専用IDあり） |
| `.agents/cert_hub_template.md` | 資格 Hub 記事の構成テンプレート |
| `.workspace/.task/TODO.md` | 資格クエリ拡張施策の進捗 |
| `.workspace/data-set/cert-keyword-db/` | 横展開資格のKW→examIdナレッジDB |
| `.agents/cert_keyword_db.md` | 上記DBの参照スキル |

**注意**: クイズアプリの examId（例: `genai-pass`, `ap-a-quiz`）は記事スキーマには含まれない。記事とアプリで ID 体系が異なる場合がある。
