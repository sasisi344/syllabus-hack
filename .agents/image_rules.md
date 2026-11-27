---
name: image-creation-rules
description: Rules for generating article cover images. Design spec and placement rules for Syllabus Hack brand.
---

# 画像作成ルール（Image Creation Rules）

## 0. 共通カバーの運用方針（2026-07-12 ユーザー決定）

**既存記事の共通カバー（`common-cover.png`）流用は意図的なコスト設計であり、一括で個別カバーに置き換えない。**

- theory カテゴリ: `theory/common-cover.png` を共通利用（従来どおり・個別生成不要）
- method / trend / career の一部・アプリ記事: ジャンル単位で共通カバーを使うことでコストダウンを図っている。**「共通カバー＝画像がない」ではない**ので、監査で個別化対象として一括起票しないこと
- **course コレクション**（2026-09-09追記）: 同じ設計思想を適用し、デフォルトで `course/common-cover.png` を共通利用する。章ごとの個別カバーはWeek3実装時にユーザーが明示的に指示した場合のみ生成する
- 個別カバーは、記事に画像生成プロンプトを書いた段階で生成してよい（2026-11-06 ユーザー決定。全サイト共通）

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

## 5. 生成ツール・ワークフロー（2026-11-27 改定）

画像作成は **Codex に任せ、Codex の組み込み画像生成 `image_gen` を標準手段** とする。既存のAPIスクリプトは標準手段にしない。

1. 上記のスタイル仕様に従い、英語プロンプトを作成する。
2. **ドラフト段階**: Markdownファイル内にプロンプトをコメントとして残す。
   ```markdown
   <!-- IMAGE_PROMPT: minimalist pictogram, white circuit board icon, deep indigo background, flat design, 16:9 -->
   ```
3. Codex で生成後、出力を対象記事の Page Bundle にコピーする。サムネイルは原則 `cover.jpg` とし、`image` の参照を合わせる。既定の生成先にしか画像がない状態で作業を終えない。
4. **本番移行前**: 記事から参照されている画像を確認し、必要ならプロンプトコメントを削除する。
5. Codex の組み込み画像生成が利用できない、または失敗した場合は、自動でAPIスクリプトに切り替えずユーザーに伝える。APIスクリプトの実行は、ユーザーが明示的に指定した場合に限る。
6. 個別画像を作らない場合は、`image` フロントマターフィールドを省略するか、`src/assets/images/post/common/` の共通画像を使用する。
