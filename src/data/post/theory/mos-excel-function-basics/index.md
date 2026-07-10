---
publishDate: 2026-07-10T00:00:00Z
lastmod: 2026-07-10
title: 'MOS Excel頻出関数まとめ｜SUM・VLOOKUP・IFの使い分けを試験範囲で整理'
excerpt: 'MOS Excel試験で頻出するSUM・VLOOKUP・IF系関数の役割と使い分けを、実務での使用場面とセットで整理します。'
image: '~/data/post/theory/common-cover.png'
category: 'theory'
tags: ['MOS', 'Excel', '関数', 'VLOOKUP', '試験対策']
draft: false
toc: true
persona: 'MOS Excel試験の学習中で、関数の種類と使い分けが整理できていない受験者'
knowledge:
  examId: mos
  type: theory
  syllabusRef: 'MOS Excel-関数'
  difficulty: 'beginner'
metadata:
  description: 'MOS Excel試験に頻出するSUM・AVERAGE・VLOOKUP・IF等の関数を、役割と使い分けの観点で整理。実務での使用場面もセットで解説します。'
---

MOS Excel試験でつまずきやすいのが<strong>関数の使い分け</strong>だ。
似たような関数が複数あり、どの場面でどれを使うべきか判断できないまま暗記しようとすると定着しない。

このページでは、MOS Excel試験に頻出する関数を「何をするための関数か」という役割で整理する。

---

## 集計系関数: SUM・AVERAGE・COUNT

最も基本となるのが集計系の関数だ。

- <strong>SUM</strong>: 指定範囲の合計を出す
- <strong>AVERAGE</strong>: 指定範囲の平均を出す
- <strong>COUNT</strong>: 数値が入力されているセルの個数を数える
- <strong>COUNTA</strong>: 空白でないセルの個数を数える（文字列も含む）

COUNTとCOUNTAの違いは頻出の引っかけポイントだ。数値だけを数えたいのか、入力の有無を数えたいのかで使い分ける。

---

## 条件付き集計: SUMIF・COUNTIF・AVERAGEIF

「条件に合うものだけ」を集計したいときに使うのがIF系の集計関数だ。

- <strong>SUMIF</strong>: 条件に一致する行の合計を出す（例: 部署が「営業」の売上合計）
- <strong>COUNTIF</strong>: 条件に一致する行の件数を数える
- <strong>AVERAGEIF</strong>: 条件に一致する行の平均を出す

いずれも「条件範囲・条件・合計対象範囲」の3つの引数構造を持つ点が共通している。この構造を覚えれば3つまとめて理解できる。

---

## 検索系関数: VLOOKUP

MOS Excel試験で最も混乱しやすいのがVLOOKUPだ。
役割は「表の左端の値を検索し、対応する行の別の列の値を取り出す」こと。

例えば商品コード表から商品名を引っ張ってくる場合、VLOOKUPは「検索値（商品コード）・範囲（検索対象の表）・列番号（何列目を取り出すか）・検索方法（完全一致か近似一致か）」の4つの引数を指定する。

<strong>検索方法の指定を「FALSE（完全一致）」にし忘れる</strong>のが典型的なミスだ。
省略または「TRUE」にすると近似一致になり、意図しない値が返ってくることがある。

---

## 条件分岐: IF・IFS

- <strong>IF</strong>: 1つの条件で真偽を分岐する（例: 点数が60以上なら合格、それ以外は不合格）
- <strong>IFS</strong>: 複数の条件を順に判定する（例: 90点以上はA、80点以上はB、それ以外はC）

IFのネスト（IFの中にIFを入れ子にする）は複雑になりがちなため、条件が3つ以上ある場合はIFSを使う方が可読性が高い。試験でもこの使い分けが問われる。

---

## まとめ

MOS Excel試験の関数問題は、暗記よりも「この関数は何をするためのものか」という役割理解が近道になる。
集計・条件付き集計・検索・条件分岐という4つのカテゴリで整理すれば、似た関数同士の混同を防げる。

MOS試験全体の攻略法は[MOS完全攻略ガイド](/method/mos-hub/)を参照してほしい。
