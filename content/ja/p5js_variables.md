---
title: 変数
description: ''
position: 6.04
category: p5.js
---

これまではグラフィックの関数実行時の引数に個別に数字を渡していましたが、同じ数値を何度も入力したり、座標を考えて頭の中でいちいち計算するのは面倒ですよね。  
**変数と言う名前のついた箱に値を格納する**ことで、値の管理や計算、時間を伴う値の変化が簡単になります。

```javascript
// 書き方
let 変数名;// 変数定義
変数名 = 値;// 代入
let 変数名 = 値;// 変数定義 & 代入

// サンプル
let num;// 変数定義
num = 123;// 代入
let num = 123;// 変数定義 & 代入
```

<alert type="warning">

変数に代入をせず定義のみ行なった場合、その時点では変数の中身が未定義（`undefined`）になり、バグの原因になったりします。  
**変数定義と同時に代入できるときはしましょう。**

</alert>

## 変数を使って図形を描画

<alert type="success">

スケッチを新規作成し、以下のコードをコピペしましょう！  
色や円の大きさは自由に変えてください。

</alert>

```javascript[sketch.js]
let x = 200;
let y = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  fill(0, 205, 129);
  circle(x, y, 100);
}
```

<live-demo src="/resource/livedemo/p5js/variables/circle/"></live-demo>

<alert type="success">

新たに `diameter`（直径） という変数を作って `100` を代入し、`circle` に渡している部分を変数で置き換えましょう！  
できたら、スケッチ名： `variables` で保存して、コレクションに追加しましょう！

</alert>


## 変数の更新

### 加算

```javascript
変数名 = 変数名 + 1;// 1 を足す
変数名 += 1;// 1 を足す
```

#### インクリメント
変数に `1` を足すときのみ使える省略記法です。

```javascript
変数名++;// 1 を足す
```

### 減算

```javascript
変数名 = 変数名 - 1;// 1 を引く
変数名 -= 1;// 1 を引く
```

#### デクリメント

変数から `1` を引くときのみ使える省略記法です。

```javascript
変数名--;// 1 を引く
```

## アニメーション

`draw` 関数内で変数を更新することで、アニメーションさせることができます。

<!-- ```javascript[sketch.js]
let x = 200;
let y = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  x += 0.2;// x を 0.2px ずつ足す

  background(220);
  noStroke();
  fill(0, 205, 129);
  circle(x, y, 100);
}
``` -->

<alert type="success">

**`x` の値を `draw` 関数の中で `0.1` ずつ足してみましょう！**  
`0.1` を `1` や `0.01` に変更してみたり、プラスをマイナスに変えてみたりして、動きがどう変化するかみてみましょう！  
できたら、スケッチ名： `variables-animation` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/variables/animation/"></live-demo>

アニメーションするようにはなりましたが、**このままだと永遠に右に進んで戻ってこない**ので、
次の頁では画面外に出たら反対側から戻ってくる条件分岐の処理を追加します。
