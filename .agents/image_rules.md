---
name: image-creation-rules
description: Rules for generating article cover images. Design spec and placement rules for Syllabus Hack brand.
---

# 画像作成ルール（Image Creation Rules）

## 1. ファイル仕様

- **ファイル名**: `cover.jpg`（原則）
- **フォーマット**: JPEG
- **アスペクト比**: 16:9（横長）
- **配置場所**: 記事の Page Bundle ディレクトリ内
  - 例: `src/data/post/method/my-hack/cover.jpg`
- **フロントマターの参照パス**: `~/data/post/{category}/{slug}/cover.jpg`（`~/` エイリアス必須）

## 2. デザイン制約

- **テキスト禁止**: 画像内にテキストを含めない（タイトルはテーマ側でオーバーレイされる）
- **被写体**: トピックを抽象的・象徴的に表現する。一般的なストックフォト風は避ける。

## 3. ビジュアルテーマ（Syllabus Hack ブランド）

- **スタイル**: ミニマリスト・ピクトグラム形式のイラスト。フラットデザイン、白のシンプルアイコン。
- **背景**: 単色（Deep Indigo / Navy / Charcoal）または控えめなグラデーション。
- **キーワード**: Blueprint, Digital Network, AI Neural Nodes, Terminal Green, Abstract data visualization, Minimalist icon.
- **ヴァイブ**: "Hacking the system", "Digital intelligence", "Future of learning".

## 4. AI画像生成プロンプト構造

**スタイル修飾子（必須）**:

```
minimalist pictogram, flat design, white icon on dark solid background,
vector style, simple shapes, 16:9 aspect ratio
```

**ネガティブプロンプト（必須）**:

```
text, letters, words, realistic photo, complex details, gradient overkill, human faces
```

## 5. 生成ツール・ワークフロー

画像生成は **外部ツール・スクリプトを使用** する。Claude Code からの直接生成は行わない。

1. 上記のスタイル仕様に従い、英語プロンプトを作成する。
2. **ドラフト段階**: Markdownファイル内にプロンプトをコメントとして残す。
   ```markdown
   <!-- IMAGE_PROMPT: minimalist pictogram, white circuit board icon, deep indigo background, flat design, 16:9 -->
   ```
3. **本番移行前**: 生成した `cover.jpg` を Page Bundle ディレクトリに配置し、コメントを削除する。
4. 画像が未生成の場合は `image` フロントマターフィールドを省略するか、`src/assets/images/post/common/` の共通画像を使用する。
