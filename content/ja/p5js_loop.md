---
title: 繰り返し
description: ''
position: 6.07
category: p5.js
---

同じ図形を位置だけ変えて複製したいとき、ここまでは以下のように関数実行を回数分手書きしていましたが、繰り返しを表現できる <strong>while文</strong> や <strong>for文</strong> を使うと冗長な繰り返し記述を完結に書くことができます。

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // ヨコに 100 ずつずらして線を引く
  line(100, 180, 100, 220);
  line(200, 180, 200, 220);
  line(300, 180, 300, 220);
}
```

<live-demo src="/resource/livedemo/p5js/loop/plain/"></live-demo>

## while文

<strong>while文</strong>は `()` の中の条件が `true` の間ずっと `{}` の中に記述した処理を繰り返します。

<alert type="warning">

`()` 内の条件がずっと `true` のままだと無限ループに陥ってしまい、ブラウザがクラッシュしてしまうので注意しましょう！

</alert>

```javascript
// 書き方
while (true または false) {
  // 繰り返したい処理
}

// サンプル
let x = 0;
while (x < 100) {// i が 100 より小さいとき
  // 繰り返したい処理
  x += 30;// i を更新
}
```

|ループ回数|xの値（更新前）|条件|
|:--|:--|:--|
|1|`0`|`true`|
|2|`30`|`true`|
|3|`60`|`true`|
|4|`90`|`true`|
|5|`120`|`false`|

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let x = 100;
  while (x < 400) {// x が 400 より小さい間繰り返す
    line(x, 180, x, 220);
    x += 100;// x を更新
  }
}
```

<live-demo src="/resource/livedemo/p5js/loop/while/"></live-demo>

<alert type="success">

`while` 文を使って等間隔にずらした図形を描画してみましょう！

</alert>


## for文

while文と挙動は同じですが、繰り返し用の変数定義とそれを使った継続条件/変数更新のセットで繰り返しを定義します。  
for文の方が一般的によく使われます。

```javascript
// 書き方
for (変数定義; 継続条件; 変数更新) {
  // 繰り返したい処理
}

// サンプル
for (let i = 100; i < 400; i += 100) {
  // 繰り返したい処理
}
```

<alert>

一般的に `for` 文で定義する変数名には `i` を使用しますが、深い理由はありません。処理に応じてわかりやすい変数名をつけましょう。

</alert>

<live-demo src="/resource/livedemo/p5js/loop/for/"></live-demo>

<alert type="success">

`while` 文を `for` 文に書き換えてみましょう！

</alert>

### 繰り返す回数を指定

上記のfor文の書き方だとコードを見ただけでは何回ループが回っているのかがわかりにくいため、繰り返す回数を明示する書き方に変更しましょう。

```javascript
for (let i = 0; i < 3; i++) {
  // 100, 200, 300 にするには i を使って計算する
  // 100 + i * 100
}
```

<alert type="success">

`for` 文を繰り返し回数を明示する書き方に書き換えて、座標を `i` を使った計算に書き換えましょう！

</alert>

## 二重for文

```javascript
// 10 x 10 = 100 回繰り返す
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    // 繰り返したい処理
  }
}
```

<alert type="success">

それぞれ `x` `y` を変数に持つ二重 `for` 文をつくり、グリッド状に図形を複製しよう！

</alert>

<alert type="success">

`x` や `y` の繰り返し回数に応じて図形の大きさや色、線幅などを変えてみよう！

</alert>

<live-demo src="/resource/livedemo/p5js/loop/for-double/"></live-demo>