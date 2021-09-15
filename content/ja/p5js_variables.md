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

```javascript[sketch.js]
let x = 0;// 変数定義 & 代入

function setup() {
  // ここでも変数定義できるけど、この { } の中でしか使えない
}

function draw() {
  // ここでも変数定義できるけど、この { } の中でしか使えない
}
```

<alert>

同じ名前の変数を定義することもできますが、コードの読みにくさやバグの原因になったりするので**変数名はなるべく被らない名前をつけましょう！**

[JavaScript基礎 - 関数 - 命名規則について](/js-basic_function#命名規則について)

</alert>

<alert type="warning">

**変数に代入をせず定義のみ行なうと**、その時点では変数の中身が未定義（`undefined`）になり、**バグの原因になったりします。**  
**変数定義と同時に代入できるときはしましょう。**

</alert>

## 変数を使って図形を描画

<alert type="success">

**３つの変数 `x` `y` `diameter`（意味：直径） を作って それぞれに `200` `200` `150` を代入し `circle` 関数の引数に渡してみましょう！**  
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
|`frameCount`|アニメーションのフレーム数（あとの章でやります）|
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
// 書き方１
変数名 = 変数名 + 1;// 1 を足す

// 書き方２
変数名 += 1;// ↑の省略記法

// サンプル１
x = x + 1;// x に 1 を足して代入する

// サンプル２
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
// 書き方１
変数名 = 変数名 - 1;// 1 を引く

// 書き方２
変数名 -= 1;// ↑の省略記法

// サンプル１
x = x - 1;// x に 1 を足して代入する

// サンプル２
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
let y = 200;
let diameter = 150;

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
  circle(x, y, diameter);
  // ↑ ここまでグラフィック描画 ↑
}
```

## 画像を扱う

### 画像をアップロード

こちらの猫の画像（`120` x `120`）を p5.js Editor にアップロードします。

<img src="/resource/assets/cat.png" alt="cat"/>

画像のアップロード方法はこちらを参照。  
[エディタの使い方 - アップロード](/p5js_editor#アップロード)

絵文字の画像は  
[📙 Emojipedia — 😃 Home of Emoji Meanings 💁👌🎍😍](https://emojipedia.org/) からDLしました。

### 画像を読み込む

`preload` 関数の中で `loadImage` 関数を呼ぶことで画像の読み込みができます。

[loadImage() reference | p5.js](https://p5js.org/reference/#/p5/loadImage)

```javascript
let img;// 読み込んだ画像を入れる用の変数

function preload() {
  // ファイル名をシングルクォーテーション '' で囲う
  img = loadImage('cat.png');// 読み込んだ画像を img に代入
}
```

### 画像を表示

`image` 関数を使うと、読み込んだ画像を描画することができます。

第一引数に読み込んだ画像が入り、第二〜第五引数は [rect関数](/p5js_primitives#rect関数) と同じ書き方です。

[image() reference | p5.js](https://p5js.org/reference/#/p5/image)

```javascript
// 書き方１
image(読み込んだ画像, X座標, Y座標);

// 書き方２
image(読み込んだ画像, X座標, Y座標, 幅, 高さ);

// サンプル１
image(img, 0, 0);// キャンバスの左上に原寸で表示

// サンプル２
image(img, 0, 0, 400, 400);// キャンバスの左上に 400 x 400 で表示
```

<alert type="success">

**`preload` `loadImage` `image` 関数を使って、画像を読み込んでキャンバスに原寸表示してみましょう！**  
できたら、スケッチ名： `variables-image` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/variables/image/"></live-demo>

### imageMode関数

`imageMode` 関数を使うと、[rectmode関数](/p5js_primitives#rectmode関数) と同様に `image` の引数で渡す座標の位置指定を変更できます。

```javascript
// 書き方
imageMode(CORNER または CENTER);

// サンプル
imageMode(CORNER);// 画像の左上指定
imageMode(CENTER);// 画像の中心指定
```

<alert type="success">

`imageMode` 関数と、`image` 関数の第四引数と第五引数を使って、**画像をキャンバスの中心に全体表示してみましょう！**  
できたら、スケッチ名： `variables-image-mode` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/variables/image-mode/"></live-demo>


### 複数の画像を表示

<alert type="success">

読み込んだ画像を入れる変数と `loadImage` `image` 関数の記述を増やして、 **複数枚の画像を読み込み/表示してみましょう！**  
できたら、スケッチ名： `variables-image-multiple` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/variables/image-multiple/"></live-demo>
