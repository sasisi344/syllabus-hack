# T-01 AIの実行例18本（H-27 ④）

- 完了日: 2026-10-31
- 種別: 施策
- テーマ: AdSense, リッチ化, AIの実行例, 事実確認
- 対象: inventory.csv で「不足」に AIの実行例 がある「強化・残す」の18本（一覧は入力シート）
- 起票元: hq:H-27

## 何をしたか

- 1〜5（強化分: nw-mermaid-hack・ccna-vs-aws-saa・ipa-2026-cbt-schedule-guide・doboku-sekou-hub・new-ipa-exam-study-strategy）は 10/27〜28 に反映済みだったことを確認
- 残り13本は、CC が入力シートを作り（記事ごとのプロンプトと入力欄）、ユーザーが ChatGPT・Gemini・Claude・NotebookLM で実行して貼った回答を、CC が各記事の「〇〇で実行した結果」の節に入れた（使ったAI・プラン・2026年10月を明記。lastmod 2026-10-31）
- 回答の誤りは消さずに、記事の材料にした: 電工二種の日程の誤り（bilmen。令和8年度の公式日程と照合）、加圧式粉末消火器のガス容器・二酸化炭素消火器の設置制限との混同（shobo）、文字数の数え間違い（gemini-cert-complete）、例えと実物のずれ（fintech）
- ai-dj-pomodoro に Gemini の生成画面のスクショ（`gemini-lofi-result.png`）を追加
- ユーザーの「ひとこと」は boiler-refrigeration-hub の1件だけで、`[!exp]` としてそのまま入れた
- `pnpm build` は通った

## 使ったデータ・資料

- 入力シート: `.workspace/.task/ai-example-prompts-2026-10-31.md`（旧版 `ai-example-prompts-2026-10-28.md` は強化分のみ）
- 対象の抽出: `.workspace/.task/adsense-inventory/inventory.csv`

## 結果

- 18本すべてに実際の回答が入った（11/05 のデプロイ対象）
- fintech-it-cert-intro・shobo-setsubi-kanbetsu-ai-hack・bilmen-4tenset-junban は、全面リライト（T-11 A01・A02）でプロンプトが書き直された後だった。実行したのは前の形のプロンプトなので、「根拠・日程を渡さずに頼むとどうなるか」の比較として入れ、リライトで置かれた `AI_EXAMPLE` マーカーは外した。新しいプロンプトの実行例はまだない
- gemini-cert-complete は Claude、ai-dj-pomodoro は Suno ではなく Gemini で実行された。記事にはそのとおり書いた

## 次に使える知見

- 入力シートを作る前に、対象記事がリライト中（作業ツリーに未コミットの変更がある）かを `git status` で確かめる。プロンプトが変わると、実行し直しになる
- AI の誤答は、正しい情報と並べると「うのみにしない」例としてそのまま記事の材料になる。シートに「間違えても貼ってよい」と書いておくと集まりやすい
- 実行するAIを記事の主題に合わせたいとき（Gemini の記事など）は、シートの推奨欄だけでは伝わらないことがある。必須なら「必須」と書く
