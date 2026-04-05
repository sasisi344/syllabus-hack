---
publishDate: 2026-04-01
title: "BIOSとデバイスドライバとは？OSを支える密かな「橋渡し」役"
excerpt: "起動時の立役者BIOS、周辺機器をあやつるドライバ。ハードウェアとソフトを仲介する、目立たないけど重要な影の主役。"
image: ~/data/post/term/common-cover.png
category: "glossary"
tags: ["BIOS", "UEFI", "デバイスドライバ", "OS", "ITパスポート", "ソフトウェア"]
knowledge:
  type: term
  exams: ["ip", "fe"]
  syllabusRef: "ソフトウェア / 基本ソフトウェア / OS・ミドルウェア"
  difficulty: beginner
metadata:
  description: "ITパスポート試験で出題される。BIOS（Basic Input/Output System）とUEFI、およびデバイスドライバの役割と動作について解説。"
---

## 3行まとめ
*   <strong>BIOS (Basic Input/Output System)</strong>: コンピュータの電源を入れた直後に、最初に動き出す <strong>基本制御ソフト</strong> 。
*   <strong>デバイスドライバ</strong>: OS（Windowsなど）が周辺機器（マウス、モニター等）を正しく動かせるようにするための <strong>橋渡し用ソフト</strong> 。
*   <strong>UEFI</strong>: 従来のBIOSをより高機能にした、後継のインタフェース規格。

## 試験での出題ポイント
試験では、特に「起動の順番」と「ドライバの役割」が問われます。

1.  <strong>BIOSの動作</strong>: HDDやSSDからOSを読み込む前の、 <strong>初期診断</strong> や <strong>起動デバイスの選択</strong> を行います。
2.  <strong>デバイスドライバ</strong>: 指名する機器ごとに、OSが通信できるようにする「通訳者」のような役割です。
3.  <strong>プラグアンドプレイ (PnP)</strong>: ドライバを自動で組み込み、設定を行ってくれる便利な機能。

## 【AIハック】生成AIで「周辺機器が認識されないトラブル」
BIOSの設定やドライバの更新といった、トラブル対策をAIに「擬人化」させることで理解が深まります。

### プロンプト例:
> 「あなたはPC修理の専門家です。 <strong>BIOS</strong> 画面は映るけど、新しく買ったキーボードが <strong>OS</strong> 上で認識されないというユーザーに、 <strong>デバイスドライバ</strong> のインストールや <strong>PnP</strong> の仕組みを、分かりやすくITパスポートの試験用語で教えてください。」

AIが「ハードの初期診断（BIOS）」と「ソフトの橋渡し（ドライバ）」の違いを、具体的に解説してくれるため、ハードウェアとソフトウェアの境界が明確になります。

## まとめ：見えないところでの「連携」
BIOSが目覚ましをかけ、ドライバが仲立りすることで、初めて私たちはPCや周辺機器を自由に扱えます。

試験では、 <strong>電源オン直後</strong> に動くのは <strong>BIOS</strong> 、 <strong>周辺機器との通訳</strong> を行うのが <strong>デバイスドライバ</strong> 、という覚え分けをしましょう。

