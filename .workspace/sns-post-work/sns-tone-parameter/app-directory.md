# app-directory — 型F（クイズ誘導型）用アプリ一覧

型F（クイズ誘導型）で「本番形式の演習はアプリで」と誘導する際に使うアプリ一覧。正本は `src/apps/index.ts`（`appRegistry`）。**このファイルは抜粋・要約であり、正本ではない**。誘導先のURLや新規アプリの有無は投稿作成のたびに `src/apps/index.ts` で最新状態を確認すること。

## 誘導してよいアプリ（status: stable / beta のみ）

`status: development` のアプリは未完成の可能性があるため、型Fでの誘導対象にしない。

| slug | examId | タイトル | status | URL |
|---|---|---|---|---|
| `fe-quiz` | fe | 基本情報技術者 攻略シミュレーター | stable | `/app/fe-quiz/` |
| `sg-quiz` | sg | 情報セキュリティマネジメント 攻略マスター | stable | `/app/sg-quiz/` |
| `ap-quiz` | ap | 応用情報技術者(AP) 試験 攻略シミュレーター | stable | `/app/ap-quiz/` |
| `it-passport-quiz` | ip | ITパスポート 模擬試験シミュレーター | beta | `/app/it-passport-quiz/` |
| `ip-strategy-drill` | ip | ITパスポート ストラテジ系 集中100問ドリル | beta | `/app/ip-strategy-drill/` |
| `ip-management-drill` | ip | ITパスポート マネジメント系 集中80問ドリル | beta | `/app/ip-management-drill/` |
| `ip-technology-drill` | ip | ITパスポート テクノロジ系 集中100問ドリル | beta | `/app/ip-technology-drill/` |
| `genai-passport-quiz` | genai-pass | 生成AIパスポート 模擬試験シミュレーター | beta | `/app/genai-passport-quiz/` |
| `genai-ip-quiz` | genai-ip | 生成AI導入実務者検定 攻略マスター | beta | `/app/genai-ip-quiz/` |
| `pm-essay-gacha` | common（PM/ST向け） | Theme-Gacha-Next（論文構成案シミュレーター） | beta | `/app/pm-essay-gacha/` |

## 誘導を避ける（development状態。2026-09-28時点）

`sc-specialist-quiz`（sc）、`genai-ethics-quiz`、`sg-subject-b-quiz`（sg）、`genai-trend-quiz`、`genai-cert-quiz`、`boki-shiwake-drill`（boki）、`takken-kenri-quiz`（takken）、`fp2-calc-drill`（fp2）、`g-kentei-mock-exam`（g-kentei）、`aws-cert-diagnosis`、`pdf-to-text`、`flashcard-app`

これらのexamIdに該当する記事（SC・簿記・宅建・FP2級・G検定・AWS等）で型Fをやりたくなった場合は、対応アプリの`status`が`stable`/`beta`に上がっているか`src/apps/index.ts`で確認してから使う。development状態のままなら型Fは組めないので、その週は他の型（A〜E・G）で代替する。

## 型Fの組み立て例

`examId: ip` の場合、theory記事や `course/ip/` の内容から1問切り出し、「〇〇の問題、あなたなら解けますか？」と選択肢付きで出題 → 出題はスレッド1（答えは出さない）、正解・解説は答えのスレッド（スレッド3）、`it-passport-quiz`（または分野別ドリル）のURLは最終スレッドで提示する（連投形式。[`posting-strategy.md`](../../draft/sns/posting-strategy.md)「スレッド形式」参照）。

Threadsの投票（アンケート）機能が使える場合は、選択肢をポール形式で出題すると自然にエンゲージメントが取れる。ポールを使わない場合は、スレッド1に問題と選択肢A〜Dを書き（答えは出さない）、スレッド2で「間違えやすい理由」、スレッド3で正解と正誤の分かれ目、最終スレッドで「詳しい解説と演習量はアプリで」とURLを置く。「答えは明日の投稿で」と別の日に分けず、同じ連投の中で回収する。
