---
title: 変数
description: ''
position: 6.04
category: p5.js
---

これまではグラフィックの関数実行時の引数に個別に数字を渡していましたが、同じ数値を何度も入力したり、座標を考えて頭の中でいちいち計算するのは面倒ですよね。  
**変数と言う名前のついた箱に値を格納する**ことで、値の管理や計算、時間を伴う値の変化が簡単になります。

```javascript
// 書き方１
let 変数名;// 変数定義
変数名 = 値;// 代入

// 書き方２（書き方１と同じ意味）
let 変数名 = 値;// 変数定義 & 代入

// サンプル１
let x;// 変数 x を定義
x = 123;// x に 123 を代入

// サンプル２（サンプル１と同じ意味）
let x = 123;// 変数定義 & 代入

// サンプル３
circle(x, 200, 100)// 変数 x を circle 関数の引数として使う
```

<alert type="warning">

**変数に代入をせず定義のみ行なうと**、その時点では変数の中身が未定義（`undefined`）になり、**バグの原因になったりします。**  
**変数定義と同時に代入できるときはしましょう。**

</alert>

## 変数を使って図形を描画

<alert type="success">

スケッチを新規作成し、`setup` 関数より上の行に**変数 `x` `y` を定義**して、それぞれに **`200` を代入**しましょう！

</alert>

<alert type="success">

変数 `x` `y` を `circle` 関数の **第一引数（X座標）** と **第二引数（Y座標）** に渡してみましょう！（直径は適当でOK）

</alert>

<alert type="success">

新たに `diameter`（意味：直径） という変数を作って `150` を代入し `circle` 関数の**第三引数（直径）** に渡してみましょう！  
できたら、スケッチ名： `variables-circle` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/variables/circle/"></live-demo>

## 何度も使う値を変数で置き換える

キャンバスの中心座標など、スケッチ内で何度も使う値を変数に格納しておくことで、変数に代入する値を変えるだけで影響する部分に変更をまとめて反映させることができます。

<alert type="success">

[p5js_primitives#triangle関数](/p5js_primitives#triangle関数) で作成した **`triangle-quarter` を複製して、中心座標を変数に置き換え、代入する座標を変えてみましょう！**

できたら、スケッチ名： `variables-triangle-quarter` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/variables/triangle-quarter/"></live-demo>

## システム変数

p5.js には、ライブラリ側ですでに用意されている**システム変数**というものがあります。  
これらはライブラリ側で定義＆更新されるので、`setup` `draw` の中で自由に使うことができます。

<alert type="warning">

**システム変数は**自分で定義する変数と違って、**代入や更新ができません！**

</alert>

|変数名|説明|
|:--|:--|
|`width`|`createCanvas` で指定したキャンバスの幅|
|`height`|`createCanvas` で指定したキャンバスの高さ|
|`mouseX`|キャンバス上のマウスのX座標（あとの章でやります）|
|`mouseY`|キャンバス上のマウスのY座標（あとの章でやります）|
|...|...|


### キャンバスサイズに依存する書き方

数値をキャンバスの中心座標として直接引数に渡していると、キャンバスサイズを変えたときに数値を再計算する必要がでてきます。

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // 400 x 400 の中心は (200, 200)
  // キャンバスピッタリの直径は 400
  circle(200, 200, 400);
}
```

`400 x 400`のときはいいけど、
<live-demo src="/resource/livedemo/p5js/variables/system-sample-1/"></live-demo>

サイズを変えると `(200, 200)` が中心じゃなくなっちゃう。
<live-demo src="/resource/livedemo/p5js/variables/system-sample-2/"></live-demo>

キャンバスの中心座標と直径をシステム変数 `width` `height` を使って書くと、`createCanvas` のサイズ指定を変更してもコードを修正する必要がなくなります。

```javascript[sketch.js]
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);

  // 常にキャンバスの中心＆キャンバスの横幅いっぱいの直径
  circle(width / 2, height / 2, width);
}
```

`200 x 200`
<live-demo src="/resource/livedemo/p5js/variables/system-sample-3/"></live-demo>

`500 x 500`
<live-demo src="/resource/livedemo/p5js/variables/system-sample-4/"></live-demo>

<alert type="success">

**`width` `height` を使って、キャンバスサイズを変更しても図形が常に同じ位置になるスケッチを書いてみましょう！**  
できたら、スケッチ名： `variables-system` で保存して、コレクションに追加しましょう！

</alert>

`200 x 200`
<live-demo src="/resource/livedemo/p5js/variables/system-1/"></live-demo>

`500 x 500`
<live-demo src="/resource/livedemo/p5js/variables/system-2/"></live-demo>


## 変数の更新

四則演算（加減乗除）については、  
<nuxt-link to="/js-basic_variables#数値number">JavaScript基礎 - データ型（プリミティブ型）- 数値（Number）</nuxt-link>を参照

### 加算

```javascript
// 書き方
変数名 = 変数名 + 1;// 1 を足す
変数名 += 1;// ↑の省略記法

// サンプル
x = x + 1;// x に 1 を足して代入する
x += 1;// ↑の省略記法
```

#### インクリメント

変数名の直後に `++` と書くと、`変数名 = 変数名 + 1;` や `変数名 += 1;` と同じ意味になります。

<alert>

**変数に `1` を足す**ときのみ使える省略記法です。

</alert>

```javascript
// 書き方
変数名++;// 1 を足す

// サンプル
x++;// x に 1を足す
```

### 減算

```javascript
// 書き方
変数名 = 変数名 - 1;// 1 を引く
変数名 -= 1;// ↑の省略記法

// サンプル
x = x - 1;// x に 1 を足して代入する
x -= 1;// ↑の省略記法
```

#### デクリメント

変数名の直後に `--` と書くと、`変数名 = 変数名 - 1;` や `変数名 -= 1;` と同じ意味になります。

<alert>

**変数から `1` を引く**ときのみ使える省略記法です。

</alert>

```javascript
// 書き方
変数名--;// 1 を引く

// サンプル
x--;// x に 1を引く
```


<img src="/resource/image/p5js_variables.png" alt="変数"/>

### 変数の更新を書く場所

**変数の更新は、`draw` 関数の中の最初にまとめて行いましょう！**  
変数の更新とグラフィックの処理をそれぞれ分けて書いておくと、処理が増えたときにコードが見やすくなります！✨

```javascript[sketch.js]
let x = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // ↓ ここから変数更新 ↓
  x += 0.1;
  // ↑ ここまで変数更新 ↑

  // ↓ここからグラフィック描画 ↓
  background(220);
  noStroke();
  fill(0, 205, 129);
  circle(x, 200, 150);
  // ↑ ここまでグラフィック描画 ↑
}
```

