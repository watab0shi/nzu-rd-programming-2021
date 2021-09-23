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
  background(249, 239, 231);
  stroke(193, 97, 12);

  // ヨコに 10 ずつずらして線を引く
  line(100, 180, 100, 220);
  line(110, 180, 110, 220);
  line(120, 180, 120, 220);
  ...
  line(290, 180, 290, 220);
}
```

<live-demo src="/resource/livedemo/p5js/loop/plain/"></live-demo>

## while文

**while文**は `()` の中の条件が `true` の間ずっと `{}` の中に記述した処理を繰り返します。

<alert type="warning">

`()` 内の条件がずっと `true` のままだと**無限ループに陥ってしまい、ブラウザがクラッシュしてしまう**ので注意しましょう！

</alert>

```javascript
// 書き方
while (条件式) {
  // 繰り返したい処理
}

// サンプル
let x = 0;
while (x < 100) {// x が 100 より小さいとき
  // 繰り返したい処理
  x += 10;// x を更新
}
// ループを抜けたら x は 100 になっている
```

|ループ回数|xの値（更新前）|条件|
|:--|:--|:--|
|1|`0`|`true`|
|2|`10`|`true`|
|3|`20`|`true`|
|...|...|...|
|9|`80`|`true`|
|10|`90`|`true`|
|11|`100`|`false`|

<live-demo src="/resource/livedemo/p5js/loop/while/"></live-demo>

<alert type="success">

**`while` 文を使って等間隔にずらした直線を20本描いてみましょう！**  
できたら、スケッチ名： `loop-while` で保存して、コレクションに追加しましょう！

</alert>


## for文

while文と挙動は同じですが、繰り返し用の**変数定義**とそれを使った**継続条件**/**変数更新**のセットで繰り返しを定義します。  
for文の方が一般的によく使われます。

変数定義と継続条件の後ろにはセミコロン `;` がきます。

```javascript
// 書き方
for (変数定義; 継続条件; 変数更新) {
  // 繰り返したい処理
}

// サンプル
for (let i = 100; i < 300; i += 10) {// 100 <= i < 300 の間で 10 ずつ足される
  // 繰り返したい処理
}
```

<alert>

一般的に `for` 文で定義する変数名には一般的に `i` や `j` を使用しますが、深い理由はありません。**処理に応じてわかりやすい変数名をつけましょう。**

</alert>

<alert type="warning">

むしろタイプミスで**バグの原因になりやすい**部分なので、`i` や `j` は**避けるべき**かもしれません。

</alert>

<alert type="success">

**`while` 文を `for` 文に書き換えてみましょう！**  
できたら、スケッチ名： `loop-for` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/loop/for/"></live-demo>

### 繰り返す回数を指定

上記のfor文の書き方だとコードを見ただけでは何回ループが回っているのかがわかりにくいため、繰り返す回数を明示する書き方に変更しましょう。  
こちらの書き方のほうがループする回数がぱっと見ですぐわかりますね。

```javascript
for (let i = 0; i < 3; i++) {// ３回繰り返す
  // 100, 200, 300 にするには i を使って計算する
  // 100 + i * 100
}
```

<alert type="success">

`for` 文を**繰り返し回数を明示する書き方**に書き換えて、`i` を使って **右にいくほど線が下に伸びるようにしてみましょう！**  
できたら、スケッチ名： `loop-for-offset` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/loop/for-offset/"></live-demo>

<alert type="success">

`for` 文と `sin` 関数を使って直線の連続で **波を描いてしてみましょう！**  
できたら、スケッチ名： `loop-for-sin` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/loop/for-sin/"></live-demo>

<alert type="success">

`for` 文を使って、**正方形をヨコ向きに10個敷き詰めてみましょう！**  
できたら、スケッチ名： `loop-for-rect` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/loop/for-rect/"></live-demo>

<alert type="success">

**正方形の塗りの色も繰り返す回数 `i` を使ってグラデーションにしてみましょう！**  
できたら、スケッチ名： `loop-for-rect-fill` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/loop/for-rect-fill/"></live-demo>

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

それぞれ `x` `y` を変数に持つ二重 `for` 文をつくり、**グリッド状に正方形を複製してみましょう！**  
できたら、スケッチ名： `loop-for-double` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/loop/for-double/"></live-demo>

<alert type="success">

`x` や `y` の**繰り返し回数に応じて上下左右に広がるグラデーションを作ってみましょう！**  
できたら、スケッチ名： `loop-for-double-gradient` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/loop/for-double-gradient/"></live-demo>

<alert type="success">

二重 `for` 文と、 `sin` `map` `frameCount` を組み合わせて、**斜めに流れるアニメーションを作ってみましょう！**  
できたら、スケッチ名： `loop-for-double-anim` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/loop/for-double-anim/"></live-demo>
