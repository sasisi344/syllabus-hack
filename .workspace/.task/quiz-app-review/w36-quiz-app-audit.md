# クイズアプリ群のアクセス実績棚卸し（W36データ）

> 正本タスク: `../TODO.md` §4「IPAクイズアプリの省力化・20hoursコースへの転用構想」
> きっかけ: `it-passport-quiz`（CBT対応）のアクセスを確認したところほぼゼロだったため、他の低迷クイズアプリも合わせて一括検討することにした（2026-09-08）。

---

## 1. 対象アプリの棚卸し

`src/apps/index.ts` の `appRegistry` に登録された22本のクイズ/ツールアプリ（category: `quiz`/`tool`。開発過程を綴った記事`dev-story-*`／`dev-doc-*`／`gemini-cli-quiz-maker`の5本は性質が異なるため対象外）を対象に、直近のGSC/GA4データを確認した。

## 2. データ

### 2-1. W36 GSC（2026-08-29〜09-04、7日間）でページCSVに行が存在したアプリ

| slug | クリック | 表示 | CTR | 掲載順位 |
|---|---|---|---|---|
| `ap-subject-b` | **4** | 66 | 6.06% | 12.85 |
| `aws-cert-diagnosis` | 0 | 4 | 0% | 19.75 |
| `genai-trend-quiz` | 0 | 2 | 0% | 9 |
| `ip-management-drill` | 0 | 1 | 0% | 3 |
| `ip-technology-drill` | 0 | 1 | 0% | 4 |
| `takken-kenri-quiz` | 0 | 1 | 0% | 8 |
| `g-kentei-mock-exam` | 0 | 1 | 0% | 9 |
| `fe-quiz` | 0 | 1 | 0% | 11 |

上記以外（`ap-quiz`／`it-passport-quiz`／`ip-strategy-drill`／`sc-specialist-quiz`／`sg-quiz`／`genai-ethics-quiz`／`sg-subject-b-quiz`／`genai-passport-quiz`／`genai-ip-quiz`／`pm-essay-gacha`／`flashcard-app`／`boki-shiwake-drill`／`fp2-calc-drill`／`pdf-to-text`）は**W36ページCSVに行自体が存在しない＝検索表示0件**。

### 2-2. W36 GA4セッション（3週間分、/app/ランディングページ全体）

```
/app/g-kentei-mock-exam       3（bing）
/app/boki-shiwake-drill       2（bing）
/app/genai-ip-quiz            1（bing）
/app/it-passport-quiz         1（bing）
/app/takken-kenri-quiz        1（bing）
```

`ap-subject-b`・`ap-quiz`はGSCでクリックがあるにもかかわらずGA4には計上なし（計測ズレ、または直帰未満のセッション扱いの可能性）。それ以外の15本超のアプリはGA4にも一切現れない。

### 2-3. 過去週（w26〜w30）のGA4での/app/系出現状況

| 週 | 出現したapp landing page |
|---|---|
| w26 | `it-passport-quiz` ×3 |
| w27 | `it-passport-quiz` ×1 |
| w28 | なし |
| w29 | `it-passport-quiz` ×1／`dev-story-data` ×1 |
| w30 | `genai-passport-quiz` ×1／`dev-story-data` ×1 |

6週間通して、22本中セッションが確認できたのは `it-passport-quiz`・`genai-passport-quiz` のみで、いずれも週1件未満・エンゲージメント時間0〜22秒（ほぼ直帰）。

### 2-4. 過去週のGSCページCSV（app系のみ）

| 週 | ページ | クリック/表示/CTR/順位 |
|---|---|---|
| w28 | `ap-subject-b` | 1/25/4%/11.68 |
| w28 | `genai-trend-quiz` | 0/9/0%/7.78 |
| w28 | `sg-subject-b-quiz` | 0/3/0%/6 |
| w28 | `pm-essay-gacha` | 0/2/0%/7.5 |
| w29 | `ap-subject-b` | 0/13/0%/14.85 |
| w29 | `genai-trend-quiz` | 0/2/0%/9 |

**`ap-subject-b`は6週間を通じて唯一、継続的な検索表示・クリックを獲得している**。他はいずれも散発的（週2〜9表示程度）か、完全に無反応。

## 3. it-passport-quiz固有の状況（発端の確認事項）

`it-passport-quiz`（ITパスポート模擬試験シミュレーター、CBT対応）は、22本の中でも**最大級の内部露出**を与えられている。

- トップページの `DailyQuizSection` ウィジェット（`src/pages/index.astro`）に常時固定表示。ローテーションなし、他アプリへの差し替え設計もなし
- ヘッダー/フッター「ウェブアプリ」ナビ → `/category/app/` 経由
- `method/itp-hub`（ITパスポート完全攻略ガイド）からのバックリンク

これだけの露出を与えても、W36は検索表示0件・GA4セッション1件（エンゲージメント5秒）。過去6週間でも週0〜3セッション、エンゲージメント時間は最大22秒で実質的に開いてすぐ離脱している。**「カテゴリ導線が弱いからアクセスがない」のではなく、最大限露出させても反応がない状態**であることが確認できた。

## 4. 結論

1. **22本中、継続的に機能しているのは`ap-subject-b`（および同クラスタの`ap-quiz`）のみ**。応用情報（AP）関連のクイズは実際に検索流入・クリックを継続的に獲得している
2. **`it-passport-quiz`を含むそれ以外全て（約20本）は、内部露出の多寡に関わらず実利用がほぼゼロ**。個別の導線改善（カテゴリ露出の強化等）では解決しない構造的な問題と判断できる
3. これは旧TODO §4の仮説（「既存Webアプリはアクセス数が伸び悩んでおり、スマホ向け類似アプリに知名度で劣勢」）を裏付けるデータであり、単体アプリへの追加投資よりも20時間学習法コース（§0）の章末理解度チェックへの転用が妥当という方向性を支持する

## 5. 推奨アクション

1. **`it-passport-quiz`のトップページ露出を縮小** → **2026-09-08 実行済み**。`DailyQuizSection`（`src/components/widgets/DailyQuizSection.astro`）をトップページ（`src/pages/index.astro`）から撤去し削除。他で参照されていないことを確認済み。`itp-hub`からのコンテキストリンク（`/app/it-passport-quiz/`）は維持。`pnpm build`でエラーなし・1486ページ生成を確認（JSバンドル数15→14に減少、ウィジェットのJSが除去されたことを確認）
2. **AP以外のクイズアプリへの新規開発投資を凍結**: `status: 'development'`のもの（`sc-specialist-quiz`／`genai-ethics-quiz`／`sg-subject-b-quiz`／`genai-cert-quiz`／`flashcard-app`／`fp2-calc-drill`／`g-kentei-mock-exam`／`boki-shiwake-drill`／`takken-kenri-quiz`／`aws-cert-diagnosis`）は現状維持（公開は残すが追加改修はしない）とし、リソースは§0 Week2（20時間学習法コースの章末チェック問題作成）に振り向ける。**未実施・方針のみ**
3. **既存の問題データ（`src/data/master/questions-*.json`）は削除せず、コース章末チェックの出題母体として再利用を検討**（TODO §4の元々の方向性通り）。**未着手**
4. `ap-subject-b`／`ap-quiz`は唯一の成功パターンのため現状維持。なぜこの2本だけ機能しているか（検索意図とのマッチ、`ap-hub`からの強い内部リンク等）を横展開のヒントとして留意

## 更新履歴

- 2026-09-08: it-passport-quizのアクセス確認をきっかけに、全クイズアプリの棚卸しとして新規作成
- 2026-09-08: ユーザーがGo判断。トップページ`DailyQuizSection`を撤去し`itp-hub`経由のリンクのみに一本化（§5-1）。ビルド検証済み。§5-2〜4は未着手のまま継続課題
