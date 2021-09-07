---
title: 色について
description: ''
position: 30.2
category: Web基礎知識
---

## RGB

**R**ed（赤） **G**reen（緑） **B**lue（青） の略です。

### 光の三原色

<img src="/resource/image/web-basic_color_rgb-light.svg" width="256" height="256" alt="光の三原色"/>

## 24bitカラー

> <strong>24ビットカラー（16,777,216色）</strong>、トゥルーカラー（truecolor, true colors）。<strong>1原色あたり8ビットを割り当てる。</strong>日本語の仕様書では1677万色、英語では16 million colorsと書かれることが多い。現代のパソコン業界では、トゥルーカラーのみをフルカラーと呼ぶことが多い（[Wikipedia](https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%AB%E3%82%AB%E3%83%A9%E3%83%BC)より引用）

### bitとは

コンピューターの低レイヤー（メモリ）ではすべての情報を `0` と `1` だけで表現する二進数で扱っています。

<strong>bit とは二進数の一桁のこと</strong>を指します。  
bit が増えるごとに桁が増えるので、表現できる組み合わせも増えていきます。

|１bit|２bit|３bit|４bit|N bit|
|:--:|:--:|:--:|:--:|:--:|
|`0`|`00`|`000`|`0000`|`000...000`|
|`1`|`01`|`001`|`0001`| |
| |`10`|`010`|`0010`| |
| |`11`|`011`|`0011`| |
| | |`100`|`0100`| |
| | |`101`|`0101`| |
| | |`110`|`0110`| |
| | |`111`|`0111`| |
| | | |`1000`| |
| | | |`1001`| |
| | | |`1010`| |
| | | |`1011`| |
| | | |`1100`| |
| | | |`1101`| |
| | | |`1110`| |
| | | |`1111`| |
| | | | |`111...111`|
|<strong>２</strong>通り|<strong>４</strong>通り|<strong>８</strong>通り|<strong>１６</strong>通り|<strong>２<sup>N<sup></strong> 通り|

24bitカラーではひとつのチャンネル（ R / G / B ）につき `8bit` が割り当てられます。

`R( 8bit ) + G( 8bit ) + B( 8bit ) = RGB( 24bit )`

<alert type="success">

8bitで表現できる組み合わせは何通りあるか計算してみましょう！

</alert>

<details>
  <summary>こたえ</summary>
  <strong>256通り</strong>
  <p>2<sup>8</sup> = 256通り</p>
</details>

## 16進数

16進数（hex）は10進数の `0` ~ `15` までの数値を、`0` ~ `9` までの数字と `a` ~ `f` までの数字を組み合わせて `0` ~ `f` までの一桁で表現します。

|10進数|16進数|
|--:|--:|
|`0`|`0`|
|...|...|
|`9`|`9`|
|`10`|`a`|
|`11`|`b`|
|`12`|`c`|
|`13`|`d`|
|`14`|`e`|
|`15`|`f`|

<alert type="success">

16進数の色指定では各チャンネル（ R / G / B ）ごとに２桁の16進数（`00` ~ `ff`）で表現しますが、２桁の16進数で表現できる組み合わせは何通りあるか計算してみましょう！

</alert>

<details>
  <summary>こたえ</summary>
  <strong>256通り</strong>
  <p>16進数１桁で表現できる組み合わせは16通りなので、<br>
  16<sup>2</sup> = 256通り</p>
</details>

## カラーパレット生成ツール

[Coolors - The super fast color schemes generator!](https://coolors.co/)

[Color palette generator | Canva Colors](https://www.canva.com/colors/color-palette-generator/)

[Color Palettes for Designers and Artists - Color Hunt](https://colorhunt.co/)

「color palette ganerator」で検索するとオンラインでパレットを生成してくれるツールがいっぱい出てきます。