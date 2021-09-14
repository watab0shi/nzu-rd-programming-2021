---
title: オブジェクト
description: ''
position: 6.11
category: p5.js
---

## データ構造

`Object` を使うと、キー（`key`）と値（`value`）の組み合わせを持つデータ構造（まとまり）を定義することができます。

```javascript
// 書き方
let 変数名 = {
  キー1: 値1,
  キー2: 値2,
  キー3: 値3
};

let 変数名 = { キー1: 値1, キー2: 値2, キー3: 値3 };// 一行でも書ける

変数名.キー1// キー1に対応している値1を取得
変数名['キー1']// 配列のように [] でも値を取得できる（ただし中に入るのはインデックスではなくキーの文字列）

// サンプル
let data = {
  id: 123,
  name: 'Kani',
  favorite: ['cake', 'cookie', 'icecream'],
  color: { r: 100, g: 220, b: 220 }
};

console.log(data.id);// 123
console.log(data['name']);// Kani
console.log(data.favorite);// ['cake', 'cookie', 'icecream']
console.log(data.favorite[2]);// icecream
console.log(data.color);// { r: 100, g: 220, b: 220 }
console.log(data.color.r);// 100
```

<alert type="warning">

オブジェクトの定義では、値を代入する際に `=` ではなく `:` を使い、次のキーの定義に行くときは `;` ではなく `,` を使います。  
<strong>ブロックの中に `=` や `;` が混ざっているとエラーになるので注意しましょう！</strong>

</alert>

## 図形のプロパティをオブジェクトで表現する

```javascript
let obj = {
  x: 200,
  y: 200,
  width: 200,
  height: 50
};
```

<alert type="success">

スケッチ名：`object-simple`  
矩形の 位置 / 幅 / 高さ をオブジェクトで定義して、`rect` の引数にいれよう！

</alert>

<live-demo src="/resource/livedemo/p5js/object/object-simple/"></live-demo>

<alert type="success">

スケッチ名：`object-simple-color`  
`obj` に `color` というキーを追加し、`color` に `r` `g` `b` の数値を持つオブジェクトを設定して、矩形の色に反映させてみよう！

</alert>

<live-demo src="/resource/livedemo/p5js/object/object-simple-color/"></live-demo>

## オブジェクトの配列

同じデータ構造の大量のデータがある場合、オブジェクトを配列化することで効率よく処理することができます。

```javascript
let data = [
  { x: 134, y: 50 },
  { x: 20, y: 237 },
  { x: 78, y: 127 }
];

console.log(data[0]);// { x: 134, y: 50 }
console.log(data[0].x);// 134
console.log(data[1].y);// 237
```

<alert type="success">

スケッチ名：`object-array-cirle`  
前頁で書いたうごめく円のスケッチをオブジェクトの配列に書き換えてみよう！

</alert>

<live-demo src="/resource/livedemo/p5js/object/object-array-circle/"></live-demo>

<alert type="success">

スケッチ名：`object-array-cirle-color`  
オブジェクトのキーに `color` を追加して、円の色をそれぞれ変えてみましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/object/object-array-circle-color/"></live-demo>

### 色を変数に入れる

#### color関数

`color` 関数を使うことで変数に `RGB` の色情報を代入することができます。

[color() reference | p5.js](https://p5js.org/reference/#/p5/color)

```javascript
let rgb = color(100, 220, 220);
background(rgb);
```

#### colorMode関数
`colorMode` 関数を使うことで色指定のモードを `RGB`（Res, Green, Blue） から `HSB`（Hue, Saturation, Brightness） に変更することができます。
また、色指定はデフォルトだと `0` ~ `255` までの数値ですが、`colorMode` 関数を使うと色指定の値の範囲も変更することができます。

[colorMode() reference | p5.js](https://p5js.org/reference/#/p5/colorMode)

```javascript
colorMode(HSB, 100);// HSBモード, 0 ~ 100 に変更

let rgb = color(0, 100, 100);// 赤
background(rgb);
```