---
name: quiz-app-rules
description: Syllabus Hack クイズアプリ（Preact/Islands）の開発規約。LocalStorage・型定義・CSS・examIdカタログを網羅。
---

# クイズアプリ開発ルール

クイズアプリ（CBTシミュレーター）の新規作成・改修に関する統一ルールです。
**新規アプリ作成前に必ずこのファイルを参照してください。**

---

## 1. 開発フロー

```
1. 要件定義: 00_templates/quiz-app-requirement-template.md をコピーして
             .workspace/.task/requirement-{app-slug}.md に保存
2. データ作成: quiz_data_rules.md に従い questions-{examId}.json を作成
              → src/data/master/questions-{examId}.json
3. アプリ実装: src/apps/{app-slug}/ に配置（ファイル構成は §3 参照）
4. レジストリ登録: src/apps/index.ts に AppMetadata を追加
5. 記事作成: src/data/post/app/{app-slug}/index.mdx を Page Bundle 形式で作成
```

---

## 2. examId カタログ（使用中の値）

MDX から `examId=` で渡す実際の文字列と、対応する LocalStorage キー。

| examId 文字列      | アプリ/用途                        | LocalStorage キー          |
| ------------------ | ---------------------------------- | -------------------------- |
| `it-passport`      | ITパスポート 模擬試験              | `sh_quiz_it-passport`      |
| `it-passport-mgmt` | ITパスポート マネジメント系ドリル  | `sh_quiz_it-passport-mgmt` |
| `it-passport-tech` | ITパスポート テクノロジ系ドリル    | `sh_quiz_it-passport-tech` |
| `ap-a-quiz`        | 応用情報 科目A                     | `sh_quiz_ap-a-quiz`        |
| `sg`               | 情報セキュリティマネジメント       | `sh_quiz_sg`               |
| `fe`               | 基本情報技術者                     | `sh_quiz_fe`               |
| `genai-pass`       | 生成AIパスポート                   | `sh_quiz_genai-pass`       |
| `genai-ip`         | 生成AI導入実務者検定               | `sh_quiz_genai-ip`         |
| `common`           | genai-trend-quiz（汎用 common 系） | `sh_quiz_common`           |
| `genai-ethics`     | genai-ethics-quiz（固定キー）      | `sh_quiz_genai-ethics`     |
| `sg-subject-b`     | SG 科目B シナリオ演習              | `sh_quiz_sg-subject-b`     |

> **新規追加時のルール**: examId は kebab-case、LocalStorage キーは `sh_quiz_{examId}` で自動決定。
> 他アプリと examId が衝突しないことを上記カタログで確認してから追加する。

---

## 3. ディレクトリ構造

```
src/
├── apps/
│   ├── index.ts                    # アプリレジストリ（全アプリ必須登録）
│   └── {app-slug}/
│       ├── types.ts                # 型定義（§4 のテンプレートに従う）
│       ├── progress.ts             # 進捗管理（§5 のテンプレートに従う）
│       ├── QuizApp.tsx             # メインUIコンポーネント（Preact）
│       ├── DailyQuiz.tsx           # 「今日の1問」（任意）
│       └── quiz.css                # スタイル（ダークモード必須）
├── data/
│   ├── master/
│   │   └── questions-{examId}.json # 問題データ（quiz_data_rules.md 準拠）
│   └── post/app/{app-slug}/
│       ├── index.mdx               # アプリ記事ページ
│       └── cover.jpg               # カバー画像（ピクトグラムスタイル）
└── components/widgets/
    └── DailyQuizSection.astro      # トップページ用 Islands ラッパー
```

> **禁止**: `App.ts` のようなスタブファイルは作成しない。
> 将来的に使う可能性があっても空ファイルは作らない。実装が完成してから追加する。

---

## 4. types.ts テンプレート

`it-passport-quiz/types.ts` を正規の共通基盤とする。新規アプリはこの型を再利用するか `extends` する。

```typescript
// ExamField: 分野区分（試験によって使用する分野が異なる）
export type ExamField =
  | 'strategy' // ストラテジ系
  | 'management' // マネジメント系
  | 'technology' // テクノロジ系
  | 'generative-ai' // 生成AI特化
  | 'practical'; // 科目B・実践

export const FIELD_LABELS: Record<ExamField, string> = {
  strategy: 'ストラテジ系',
  management: 'マネジメント系',
  technology: 'テクノロジ系',
  'generative-ai': '生成AI特化',
  practical: '科目B・実践',
};

export interface Choice {
  label: string; // "ア" | "イ" | "ウ" | "エ"
  text: string;
}

export interface Question {
  id: string;
  examId: string;
  field: ExamField;
  scenario?: string; // 長文シナリオ（科目B用）
  subField?: string; // 中分類名
  year?: string; // 出典年度 例: "R05秋"
  questionNumber?: number;
  text: string;
  choices: Choice[];
  correctLabel: string;
  explanation: string;
  keywords?: string[]; // AI解説プロンプト用
  syllabusRef?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface AnswerRecord {
  questionId: string;
  selectedLabel: string;
  isCorrect: boolean;
  answeredAt: number; // Unix timestamp (ms)
}

export interface UserProgress {
  totalAnswered: number;
  totalCorrect: number;
  fieldStats: Record<string, { answered: number; correct: number }>;
  history: AnswerRecord[];
  lastUpdated: number;
}

export interface QuizAppProps {
  questions: Question[];
  examId: string;
  examName: string;
}
```

---

## 5. progress.ts テンプレート（必須規約）

### キー規約

| アプリ種別       | キー形式                | 例                    |
| ---------------- | ----------------------- | --------------------- |
| 標準クイズアプリ | `sh_quiz_{examId}`      | `sh_quiz_it-passport` |
| フラッシュカード | `sh_flashcard_{deckId}` | `sh_flashcard_sc`     |

### 旧キーからのマイグレーション

旧キーが存在する場合のみ新キーへコピーして旧キーを削除する。ユーザーデータを失わない。

```typescript
import type { UserProgress, AnswerRecord } from './types';

const STORAGE_KEY_PREFIX = 'sh_quiz_';
// 旧キーがある場合のみ定義（ない場合は不要）
const LEGACY_KEY_PREFIX = 'sh_old_prefix_';

const createDefaultProgress = (): UserProgress => ({
  totalAnswered: 0,
  totalCorrect: 0,
  fieldStats: {},
  history: [],
  lastUpdated: Date.now(),
});

function migrateIfNeeded(examId: string): void {
  if (typeof window === 'undefined') return;
  const newKey = `${STORAGE_KEY_PREFIX}${examId}`;
  const oldKey = `${LEGACY_KEY_PREFIX}${examId}`;
  if (!localStorage.getItem(newKey) && localStorage.getItem(oldKey)) {
    localStorage.setItem(newKey, localStorage.getItem(oldKey)!);
    localStorage.removeItem(oldKey);
  }
}

export const loadProgress = (examId: string): UserProgress => {
  migrateIfNeeded(examId);
  if (typeof window === 'undefined') return createDefaultProgress();
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}${examId}`);
    if (!raw) return createDefaultProgress();
    return JSON.parse(raw) as UserProgress;
  } catch {
    return createDefaultProgress();
  }
};

export const saveProgress = (examId: string, progress: UserProgress): void => {
  if (typeof window === 'undefined') return;
  try {
    progress.lastUpdated = Date.now();
    localStorage.setItem(`${STORAGE_KEY_PREFIX}${examId}`, JSON.stringify(progress));
  } catch {
    // Storage full — ignore silently
  }
};

export const recordAnswer = (
  examId: string,
  questionId: string,
  selectedLabel: string,
  correctLabel: string,
  field: string
): UserProgress => {
  const progress = loadProgress(examId);
  const isCorrect = selectedLabel === correctLabel;

  const record: AnswerRecord = {
    questionId,
    selectedLabel,
    isCorrect,
    answeredAt: Date.now(),
  };

  progress.totalAnswered += 1;
  if (isCorrect) progress.totalCorrect += 1;

  if (!progress.fieldStats[field]) {
    progress.fieldStats[field] = { answered: 0, correct: 0 };
  }
  progress.fieldStats[field].answered += 1;
  if (isCorrect) progress.fieldStats[field].correct += 1;

  // 直近 100 件のみ保持（超過分は切り捨て）
  progress.history = [record, ...progress.history].slice(0, 100);

  saveProgress(examId, progress);
  return progress;
};

export const getFieldAccuracy = (progress: UserProgress, field: string): number => {
  const stats = progress.fieldStats[field];
  if (!stats || stats.answered === 0) return 0;
  return Math.round((stats.correct / stats.answered) * 100);
};

export const getWeakestField = (progress: UserProgress): string | null => {
  let weakest: string | null = null;
  let lowestAccuracy = 101;
  for (const [field, stats] of Object.entries(progress.fieldStats)) {
    if (stats.answered < 1) continue;
    const accuracy = (stats.correct / stats.answered) * 100;
    if (accuracy < lowestAccuracy) {
      lowestAccuracy = accuracy;
      weakest = field;
    }
  }
  return weakest;
};
```

### 重要制約

- **履歴上限は必ず 100 件** (`.slice(0, 100)`) — 1000件など大きな値は禁止
- `typeof window === 'undefined'` チェックを必ず入れる（SSR対策）
- catch 内でエラーを再スローしない（Storage full 時に静かにフォールバック）

---

## 6. CSS クラス命名規則

| プレフィックス | 用途                   | 使用コンポーネント            |
| -------------- | ---------------------- | ----------------------------- |
| `qa-`          | QuizApp メイン UI      | QuizApp.tsx（汎用）           |
| `dq-`          | DailyQuiz「今日の1問」 | DailyQuiz.tsx                 |
| `sg-`          | SG 科目B シナリオ演習  | sg-subject-b-quiz/QuizApp.tsx |
| `fc-`          | フラッシュカード       | flashcard-app/CardSession.tsx |

**ダークモードは必須**。`.dark .qa-xxx` セレクタと `@media (prefers-color-scheme: dark)` の両方を実装すること（`dark_mode_css.md` 参照）。

### ブランドカラー

| 用途                   | カラーコード |
| ---------------------- | ------------ |
| 主カラー（インディゴ） | `#6366f1`    |
| 主カラー・ダーク       | `#818cf8`    |
| 背景ダーク             | `#1e1b4b`    |
| 正解                   | `#22c55e`    |
| 不正解                 | `#ef4444`    |
| 背景カード（dark）     | `#1e293b`    |

---

## 7. コンポーネント設計原則

### 技術スタック

- **Preact** (`@astrojs/preact`) + Islands Architecture
- ハイドレーション: **`client:load`** を使用（`client:visible` は使わない）
- スタイル: **Vanilla CSS**（quiz.css）+ Tailwindの `dark:` クラス

### AI解説リンク

```tsx
const generateAiPrompt = (q: Question, userAnswer: string) => {
  const keywordsText = q.keywords?.length
    ? `【解答キーワード】\n${q.keywords.map((k) => `・${k}`).join('\n')}\n\n`
    : '';
  return `以下の${examName}の問題について解説してください。\n\n${keywordsText}【問題】\n${q.text}\n\n${q.choices.map((c) => `${c.label}. ${c.text}`).join('\n')}\n\n正解: ${q.correctLabel}\n私の回答: ${userAnswer}`;
};

// リンク先
`https://gemini.google.com/app?q=${encodeURIComponent(generateAiPrompt(q, userAnswer))}`;
```

### 共通ロジックの再利用

- `types.ts`: `it-passport-quiz/types.ts` を基準として同一構造のアプリは import して再利用
- `progress.ts`: 上記テンプレートから生成。既存の progress.ts をコピーして examId・旧キーを変更
- Fisher-Yates シャッフル: 既存実装をそのまま再利用

---

## 8. MDX 統合ルール

```mdx
---
# ... frontmatter
appId: '{app-slug}'
knowledge:
  examId: '{examId}' # src/apps/index.ts の examId と一致させる
---

import QuizApp from '~/apps/{app-slug}/QuizApp';
import '~/apps/{app-slug}/quiz.css';
import questions from '~/data/master/questions-{examId}.json';

<QuizApp client:load questions={questions} examId="{examId}" examName="{試験名}" />
```

- `client:load` 必須（クイズはページの主役）
- `appId` フロントマターは必須
- tags: `試験名の正規タグ` + `CBT` + `模擬試験` + `SyllabusHack`

---

## 9. src/apps/index.ts への登録

```typescript
'{app-slug}': {
  id: '{app-slug}',
  slug: '{app-slug}',
  title: '試験名 + アプリ種別',
  description: '100文字以内の説明',
  category: 'quiz',           // 'quiz' | 'tool' | 'converter'
  status: 'development',      // 'development' | 'beta' | 'stable'
  examId: '{examId}',
},
```

---

## 10. リリース前チェックリスト

- [ ] 問題データが `quiz_data_rules.md` に準拠している
- [ ] `src/apps/index.ts` にレジストリ登録済み
- [ ] LocalStorage キーが `sh_quiz_{examId}` 形式
- [ ] 履歴上限が `.slice(0, 100)` になっている
- [ ] `typeof window === 'undefined'` チェックあり
- [ ] ダークモードで表示崩れがない（`.dark` クラス対応）
- [ ] モバイル（375px幅）で操作可能
- [ ] AI解説リンクが正しいプロンプトを生成する
- [ ] LocalStorage への進捗保存が動作する
- [ ] `pnpm build` でエラーなし
- [ ] カバー画像（cover.jpg）が配置されている
- [ ] `App.ts` などのスタブファイルが残っていない
- [ ] TypeScript `any` を使っていない

> スラッシュコマンド `/app-audit {app-slug}` でチェックを自動実行できる。
