# クイズデータ作成・管理ルール

クイズアプリで使用する JSON データの作成、更新、管理に関するルールです。

## 1. ファイル構成

試験区分ごとに JSON ファイルを分割して管理します。ファイル名は `questions-{examId}.json`（examId は `quiz_app_rules.md` §2 のアプリ用 examId に準拠、記事フロントマターの examId とは体系が異なる場合がある点に注意）。

現在の実ファイル一覧は `src/data/master/` を直接確認するのが正本（Glob("src/data/master/questions-*.json")）。代表例:

- `questions-it-passport.json` （ITパスポート）
- `questions-sg-b.json` （情報セキュリティマネジメント 科目B）
- `questions-genai.json` / `questions-genai-ethics.json` （生成AI系）
- `questions-boki.json`（日商簿記）, `questions-takken.json`（宅建）, `questions-fp2.json`（FP2級）, `questions-g-kentei.json`（G検定）

新規資格を追加したら、examId の衝突がないか `src/data/master/` を Glob で確認してから配置する。

> **別系統のデータ（2026-09-09追記）**: ITパスポート関連アプリ（`it-passport-quiz`／`ip-strategy-drill`／`ip-management-drill`／`ip-technology-drill`）は上記に加えて `src/data/quiz/it-passport/{generative-ai,management,predicted,strategy,technology}.json`（計334問）も使用する。こちらはスキーマが異なり（`question`/`options`/`answer`/`middleCategory`等、下記§2の`Question`型とは別体系）、`src/apps/it-passport-quiz/transformQuestions.ts` の `transformRawQuestions()` で正規化してから使う。`it-passport-quiz`本体は `src/pages/data/questions-it-passport.json.ts` がmaster側とこちらを統合したAPIエンドポイントとして提供し、`ip-*-drill`系は分野別JSONを直接importする。新規にITパスポート系問題を追加する場合は、この334問バンクとの重複がないか確認すること。

## 2. JSON スキーマ

`src/apps/it-passport-quiz/types.ts` の `Question` インターフェースに準拠します。

| フィールド       | 型         | 内容                               | 例                                           |
| :--------------- | :--------- | :--------------------------------- | :------------------------------------------- |
| `id`             | `string`   | 一意のID（命名規則参照）           | `"ip-r05-01"`                                |
| `examId`         | `string`   | 試験区分                           | `"it-passport"`, `"sg"`, `"fe"`              |
| `field`          | `string`   | 大分類（3つの固定値のみ）          | `"strategy"`, `"management"`, `"technology"` |
| `subField`       | `string`   | 中分類・分野名（シラバス準拠）     | `"企業活動"`, `"セキュリティ"`               |
| `year`           | `string`   | 出典・年度                         | `"R05秋"`, `"予想問題"`                      |
| `questionNumber` | `number`   | 問題番号                           | `1`                                          |
| `text`           | `string`   | 問題文（Markdown使用可）           | `"〜〜の説明はどれか。"`                     |
| `choices`        | `array`    | 選択肢（ア〜エの4つ）              | `[{ "label": "ア", "text": "〜" }, ...]`     |
| `correctLabel`   | `string`   | 正解のラベル                       | `"ア"`                                       |
| `explanation`    | `string`   | 解説文                             | `"〜〜は××のことである。"`                   |
| `keywords`       | `string[]` | 重要なキーワード（AI解説・検索用） | `["経営方針", "行動規範"]`                   |
| `syllabusRef`    | `string`   | シラバス参照コード                 | `"マネジメント系-大分類4-中分類11"`          |
| `difficulty`     | `string`   | 難易度                             | `"beginner"`, `"intermediate"`, `"advanced"` |

## 3. ID 命名規則

`{試験区分簡略}-${年度}-${連番}` で統一します。

- ITパスポート: `ip-r05-01`
- セキュマネ: `sg-r05-01`
- 基本情報: `fe-r05-01`

## 4. 試験区分別の最適化ガイドライン

### ITパスポート (it-passport)

- **ターゲット**: 初学者、非IT職。
- **最適化**: 専門用語を日常のビジネス用語で噛み砕いた解説を心がける。3分野（ストラテジ・マネジメント・テクノロジ）をバランスよく含める。

### 情報セキュリティマネジメント (sg)

- **ターゲット**: セキュリティ担当者、部門リーダー。
- **最適化**: 「management」と「technology」に重点を置く。特に組織的なリスク管理、最新の脅威（ランサムウェア等）、法規（個人情報保護法）を強化する。

### 基本情報技術者 (fe)

- **ターゲット**: 若手ITエンジニア。
- **最適化**:
  - **科目B対応**: `text` 内に擬似言語のコードブロックを含める。
  - **深掘り**: 基数変換、アルゴリズム、データ構造など、論理的な解説を厚くする。
  - `subField` に「アルゴリズム」や「プログラミング」を明記する。
  - **【重要コード翻訳禁止】**: 生成AIを用いた作問時、擬似コードやプログラム中の「変数名（current 等）」や「真偽値・予約語（true/false/return 等）」が不自然に日本語に直訳される（例：「戻る」「真」）現象を防ぐこと。必ず元の英語を保持して出力させるルールの明記が必要。

### 横展開資格（宅建・簿記・FP・G検定 等）

IT系以外の資格（`boki` / `takken` / `fp2` / `g-kentei` 等）の作問最適化・詰まりポイントは `.agents/cert_keyword_db.md` §5「横展開資格の詰まりポイント早見表」と対応する `.workspace/data-set/cert-keyword-db/{examId}-kw-db.md` を参照する。本ファイルには IT系（IPA試験）の作問ノウハウのみを記載する。

## 5. キーワード（keywords）の選定

- Pythonスクリプト等でAIに解説を求める際の「最小限のヒント」として機能するように選定する。
- 3語〜5語程度。
- 被りがない一般的な用語と、その問題特有の用語を組み合わせる。

## 6. AI連携の配慮

- `explanation` には公式的な正解根拠を記載する。
- `keywords` には、AIが補足情報を生成しやすい「文脈」を含める。
- Geminiなどの生成AIに渡すプロンプトの種になるように、問題文や選択肢の用語を整理して格納する。
