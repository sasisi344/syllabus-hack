# ITパスポート記事 統合計画

> 作成日: 2026-05-30  
> 目的: 内容が重複・薄い記事を統合し、1記事あたりの深さと検索ランク力を高める  
> 対象: examId: ip の記事群（65本）

---

## 統合グループ一覧

| グループ | 現在 | 統合後 | 削減 |
|---|---|---|---|
| A スマホ・スキマ時間学習 | 3本 | 1本 | -2 |
| B NotebookLM × ITP | 2本 | 1本 | -1 |
| C 氏名変更・事務手続き | 2本 | 1本 | -1 |
| D 直前対策 | 2本 | 1本 | -1 |
| **合計** | **9本** | **4本** | **-5** |

---

## グループA: スマホ・スキマ時間学習（3本 → 1本）

### 存続記事（リライト・強化ベース）
`src/data/post/method/smartphone-study-guide/index.md`

**理由**: 最新のpublishDate（2026-04-18）、構造化されたexcerptと学習設計フレームがある。

### 廃止記事（301リダイレクト後に draft: true）
| 廃止スラッグ | リダイレクト先 | 取り込む固有コンテンツ |
|---|---|---|
| `itp-smartphone-only-hack` | `/smartphone-study-guide` | 「PCゼロの大学生向け」セクション（CBT当日のPC操作対策） |
| `gap-time-apps` | `/smartphone-study-guide` | 「通勤時間帯別アプリ使い分け表」「1日6分の社会人向けメニュー」 |

### 統合後タイトル（案）
`ITパスポートをスマホだけで合格する——大学生から社会人まで使えるスキマ時間完全ガイド`

### 統合後タグ
`['ITパスポート', 'スマホ学習', 'スキマ時間', '独学', '大学生']`

### 作業チェックリスト

- [ ] `smartphone-study-guide` に廃止2記事の固有コンテンツを追記（セクション追加）
- [ ] `smartphone-study-guide` の `lastmod` を `2026-05-30` に更新
- [ ] `smartphone-study-guide` の `title` を統合後タイトルに更新
- [ ] `astro.config.mjs` の `redirects` に追加:
  ```
  '/itp-smartphone-only-hack': '/smartphone-study-guide'
  '/gap-time-apps': '/smartphone-study-guide'
  ```
- [ ] `itp-smartphone-only-hack/index.md` を `draft: true` に変更
- [ ] `gap-time-apps/index.md` を `draft: true` に変更
- [ ] `next-task.md` のフェーズ1で `itp-smartphone-only-hack` / `gap-time-apps` へのバックリンク追加タスクを削除

---

## グループB: NotebookLM × ITパスポート（2本 → 1本）

### 存続記事（リライト・強化ベース）
`src/data/post/method/notebooklm-it-passport-drill/index.md`

**理由**: 「ドリル作成」という具体的な操作手順が中核で、「用語の自分事化」より検索需要が高い。ドリル記事に自分事化セクションを追加した方が記事の厚みが出る。

### 廃止記事（301リダイレクト後に draft: true）
| 廃止スラッグ | リダイレクト先 | 取り込む固有コンテンツ |
|---|---|---|
| `notebooklm-ip-study-hack` | `/notebooklm-it-passport-drill` | 「用語を自分の業務・生活に紐付けるプロンプト例」セクション |

### 統合後タイトル（案）
`NotebookLMでITパスポートを完全攻略——用語の自分事化からオリジナルドリル作成まで`

### 統合後タグ
`['ITパスポート', 'NotebookLM', 'AI活用', '独学', '生成AI']`

### 作業チェックリスト

- [ ] `notebooklm-it-passport-drill` に `notebooklm-ip-study-hack` の用語自分事化セクションを追記
- [ ] `notebooklm-it-passport-drill` の `lastmod` を `2026-05-30` に更新
- [ ] `notebooklm-it-passport-drill` の `title` を統合後タイトルに更新
- [ ] `astro.config.mjs` の `redirects` に追加:
  ```
  '/notebooklm-ip-study-hack': '/notebooklm-it-passport-drill'
  ```
- [ ] `notebooklm-ip-study-hack/index.md` を `draft: true` に変更
- [ ] `next-task.md` のフェーズ1で `notebooklm-ip-study-hack` のタスクを削除

---

## グループC: 氏名変更・事務手続き（2本 → 1本）

### 存続記事（リライト・強化ベース）
`src/data/post/method/itp-name-change-marriage-hack/index.md`

**理由**: タイトルが「改姓後の受験」という検索意図に直結しており、publishDateが新しい（2026-04-18）。

### 廃止記事（301リダイレクト後に draft: true）
| 廃止スラッグ | リダイレクト先 | 取り込む固有コンテンツ |
|---|---|---|
| `itp-receipt-name-change-hack` | `/itp-name-change-marriage-hack` | 「受験料領収書の宛名問題と経理への説明テンプレート」セクション |

### 統合後タイトル（案）
`ITパスポート受験中に改姓したら——本人確認・領収書・証明書の3つを一気に解決する`

**統合の意義**: 「改姓 × ITパスポート」で検索する人は受験手続きと経費精算の両方で詰まっている。1記事で両方解決できる方が読者に価値が高い。

### 統合後タグ
`['ITパスポート', '事務ハック', '生成AI', '手続き', '改姓']`

### 作業チェックリスト

- [ ] `itp-name-change-marriage-hack` に領収書・経費精算のセクションを追記
- [ ] `itp-name-change-marriage-hack` の `lastmod` を `2026-05-30` に更新
- [ ] `itp-name-change-marriage-hack` の `title` を統合後タイトルに更新
- [ ] `astro.config.mjs` の `redirects` に追加:
  ```
  '/itp-receipt-name-change-hack': '/itp-name-change-marriage-hack'
  ```
- [ ] `itp-receipt-name-change-hack/index.md` を `draft: true` に変更

---

## グループD: 直前対策（2本 → 1本）

### 存続記事（リライト・強化ベース）
`src/data/post/method/itp-10-days-panic-hack/index.md`

**理由**: 「あと10日」という検索意図への訴求力が強く、AI活用メソッドを主軸にした構成が差別化になっている。

### 廃止記事（301リダイレクト後に draft: true）
| 廃止スラッグ | リダイレクト先 | 取り込む固有コンテンツ |
|---|---|---|
| `final-checkpoint-100-plus` | `/itp-10-days-panic-hack` | 100キーワードチェックリスト全体をセクションとして吸収 |

### 統合後タイトル（案）
`ITパスポート直前10日の逆転合格術——AI活用プランと100キーワード即チェックリスト付き`

**統合の意義**: 直前期の読者は「何をするか（メソッド）」と「何を確認するか（チェックリスト）」の両方を求めている。1記事で完結させることで直帰率が下がる。

### 統合後タグ
`['ITパスポート', '直前対策', 'ChatGPT', '頻出用語', '独学']`

### 作業チェックリスト

- [ ] `itp-10-days-panic-hack` に100キーワードチェックリストのセクションを追記
- [ ] `itp-10-days-panic-hack` の `lastmod` を `2026-05-30` に更新
- [ ] `itp-10-days-panic-hack` の `title` を統合後タイトルに更新
- [ ] `astro.config.mjs` の `redirects` に追加:
  ```
  '/final-checkpoint-100-plus': '/itp-10-days-panic-hack'
  ```
- [ ] `final-checkpoint-100-plus/index.md` を `draft: true` に変更

---

## 共通作業（全グループ完了後）

- [ ] `astro.config.mjs` の `redirects` ブロックに上記4グループ分のリダイレクトが揃っているか確認
- [ ] `pnpm build` でビルドエラーがないか確認
- [ ] Google Search Console の「URL検査」で存続記事のインデックス再申請
- [ ] `next-task.md` の統合済みスラッグへのバックリンクタスクを削除または存続スラッグに更新

---

## 実施順序（推奨）

```
1. グループD（直前対策）— 作業量が最も少なく、検証しやすい
2. グループB（NotebookLM）— リダイレクト1本、コンテンツ移植が明確
3. グループC（氏名変更）— リダイレクト1本、追記セクションが明確
4. グループA（スマホ学習）— 追記量が最多なので最後
5. 共通作業（リダイレクト確認・ビルド・GSC申請）
```

---

## 注意事項

- **削除ではなく `draft: true`** を選択する理由: 廃止記事が外部からリンクされている場合に完全削除するとリンクジュースが失われる。`draft: true` + リダイレクト設定が安全。
- **存続記事の `publishDate` は変更しない**: リライトしても初回公開日は保持する（CLAUDE.md規約）。
- **追記セクションは記事末尾の「まとめ」の前に挿入**: 既存の構成を壊さずに拡充できる。
