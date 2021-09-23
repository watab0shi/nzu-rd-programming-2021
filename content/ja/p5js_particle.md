---
title: パーティクル表現
description: ''
position: 6.13
category: p5.js
---

## 雪の結晶を関数化する

雪の結晶を降らせるためには、雪の結晶を描く処理をまとめておいた方がいいので、雪の結晶を描く関数をつくります。

<alert type="success">

スケッチ名：`particle-snow-fucntion`  
前頁で作った `transform-snow-01` のスケッチを複製し、 `drawSnow01` という関数を作って、`background`以外の雪の描画に関係する処理をすべて関数の中に移動してみましょう！  
ヒント： 座標変換を `push` `pop` で囲う。 `setup` に `rectMode` や `strokeWidth`などを書いていたら、それも `drawSnow01` 関数内に移動する。

</alert>

```javascript[sketch.js]
let NUM = 6;

function setup() {
  createCanvas(400, 400);
}

function drawSnow01() {
  // ここに雪の描画に関する処理を全てもってくる
}

function draw() {
  background(240);

  drawSnow01();// 実行
}
```

<live-demo src="/resource/livedemo/p5js/particle/snow-function/"></live-demo>


## 位置 回転 大きさ 色 を指定できるようにする

### 位置を指定する

<alert type="success">

スケッチ名：`particle-snow-fucntion-args-pos`  
`drawSnow01` 関数に中心座標を指定する引数 `x` `y` を追加して、マウス座標を中心に雪が描画されるようにしてみよう！

</alert>

```javascript[sketch.js]
...

function drawSnow01(x, y) {
  ...
}

function draw() {
  background(240);

  drawSnow01(mouseX, mouseY);// マウス座標に表示
}
```

<live-demo src="/resource/livedemo/p5js/particle/snow-function-args-pos/"></live-demo>

### 回転を指定する

<alert type="success">

スケッチ名：`particle-snow-fucntion-args-angle`  
`drawSnow01` 関数に角度を指定する引数 `angle` を追加して、任意の角度に回転できるようにしよう！

</alert>

```javascript[sketch.js]
...

function drawSnow01(x, y, angle) {
  ...
}

function draw() {
  background(240);

  let sec = millis() / 1000;
  drawSnow01(mouseX, mouseY, sec * 0.2);// 時間で回転させる
}
```

<live-demo src="/resource/livedemo/p5js/particle/snow-function-args-angle/"></live-demo>

### 半径を指定する

<alert type="success">

スケッチ名：`particle-snow-fucntion-args-radius`  
`drawSnow01` 関数に半径を指定する引数 `radius` を追加して、大きさを指定できるようにしよう！  
ヒント：`radius / もともとの半径` で目的の半径に変更するスケールの倍率を求めることができます。

</alert>

```javascript[sketch.js]
...

function drawSnow01(x, y, angle, radius) {
  ...
  scale(radius / もともとの半径);
  ...
}

function draw() {
  background(240);

  let sec = millis() / 1000;
  drawSnow01(mouseX, mouseY, sec * 0.2, 50);// 半径50pxで表示
}
```

<live-demo src="/resource/livedemo/p5js/particle/snow-function-args-radius/"></live-demo>

### 色を指定する

<alert type="success">

スケッチ名：`particle-snow-fucntion-args-color`  
`drawSnow01` 関数に色を指定する引数 `col` を追加して、`stroke` `fill` に入れている色を `col` に置き換えてみましょう！  
ヒント：`color(R, G, B)` [color() reference | p5.js](https://p5js.org/reference/#/p5/color)

</alert>

```javascript[sketch.js]
...

function drawSnow01(x, y, angle, radius, col) {
  ...
  stroke(col);
  fill(col);
  ...
}

function draw() {
  background(240);

  let sec = millis() / 1000;
  drawSnow01(mouseX, mouseY, sec * 0.2, 50, color(150, 180, 255));// 引数から色を指定
}
```

<live-demo src="/resource/livedemo/p5js/particle/snow-function-args-color/"></live-demo>

## 残りスケッチも関数化

<alert type="success">

スケッチ名：`particle-snow-fucntions`  
前頁で作った残りの `transform-snow-02` ~ `transform-snow-05` のスケッチの雪の結晶もそれぞれ `drawSnow02` ~ `drawSnow05` 関数にして、ひとつのスケッチの中で `drawSnow01` ~ `drawSnow05` 関数が使えるようにしよう！

</alert>

```javascript[sketch.js]
...

function drawSnow01(x, y, angle, radius, col) {
  ...
}

function drawSnow02(x, y, angle, radius, col) {
  ...
}

function drawSnow03(x, y, angle, radius, col) {
  ...
}

function drawSnow04(x, y, angle, radius, col) {
  ...
}

function drawSnow05(x, y, angle, radius, col) {
  ...
}

function draw() {
  background(240);

  let sec = millis() / 1000;
  drawSnow01(75, 125, sec * 0.1, 20, color(150, 180, 255));
  drawSnow02(200, 125, sec * 0.2, 30, color(180, 150, 255));
  drawSnow03(325, 125, sec * 0.3, 40, color(120, 180, 255));
  drawSnow04(125, 275, sec * 0.4, 50, color(150, 200, 255));
  drawSnow05(250, 275, sec * 0.5, 60, color(180, 220, 255));
}
```

<live-demo src="/resource/livedemo/p5js/particle/snow-functions/"></live-demo>

## 雪をひとつ降らせる

### 雪のデータをオブジェクトで管理する

<alert type="success">

スケッチ名：`particle-snow-object`  
`drawSnow01` ~ `drawSnow05` の引数 `x` `y` `angle` `radius` `col` のプロパティを持つオブジェクトを作り、オブジェクトのプロパティを元に雪の結晶が描画させるようにしよう！  
`draw`関数の中で `y` と `angle` を更新して、キャンバスの高さを超えたら上にループするようにしよう！

</alert>

```javascript[sketch.js]
let NUM = 6;
let obj = {};// 空のオブジェクト randomやcolorを使うのでここではプロパティを定義しない

function setup() {
  createCanvas(400, 400);

  obj = {
    x: width / 2,
    y: 0,
    angle: 0,
    radius: 50,
    col: color(150, 200, 255)
  };
}

function drawSnow01(x, y, angle, radius, col) {
  ...
}

...

function draw() {
  background(240);

  // obj.y を更新
  // obj.angle を更新
  // obj.y が height を超えたら、obj.y を 0 に戻す

  // obj のプロパティを使って drawSnow01 ~ drawSnow05 のどれかを表示
}
```

<live-demo src="/resource/livedemo/p5js/particle/object/"></live-demo>

### 自然にループさせる

<alert type="success">

スケッチ名：`particle-snow-object-narutal-loop`  
ループするときに半分見えた状態で消えて、半分見えた状態で出てきてしまっているので、雪の結晶が完全にフレームアウトしたときにループして、見切れていない高さから降ってくるように変えてみよう！  
ヒント：`obj.y` の初期値とループ時に代入する `obj.y` の値、ループ判定の高さを `obj.radius` の分マイナスする

</alert>

<live-demo src="/resource/livedemo/p5js/particle/object-natural-loop/"></live-demo>


### ランダム性を持たせる

<alert type="success">

スケッチ名：`particle-snow-object-random`  
`x` `y` `angle` `radius` `col` の初期値をランダムにして、ループするごとに `x` `angle` `radius` `col` がランダムに再設定されるようにしよう！  
ついでに `obj` に `speed` というプロパティを増やして、降るスピードもランダムにしてみよう！

</alert>

<live-demo src="/resource/livedemo/p5js/particle/object-random/"></live-demo>

## オブジェクトを配列にして雪をいっぱい降らせる

<alert type="success">

スケッチ名：`particle-snow-object-array`  
<strong>オブジェクトを配列化</strong>して、雪の結晶を<strong>10個</strong>降らせてみよう！  

</alert>

<alert>

配列を `for` 文で回すときにどうしても `配列名[i]` の記述が多くなりがちですが、何度も同じ記述を書くのは面倒なので、<strong>ループ内の最初の行で `配列名[i]` を変数にいれておく</strong>と便利です。

</alert>

```javascript[sketch.js]
let NUM = 6;
let NUM_SNOW = 10;// 雪の結晶の数
let data = [];// 空の配列

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < NUM_SNOW; i++) {
    let r = random(10, 30);
    data.push({// 配列にオブジェクトを追加
      x: random(width),
      ...
    });
  }
}

...

function draw() {
  background(240);

  for (let i = 0; i < data.length; i++) {
    let obj = data[i];// data[i]だらけになっちゃうので、変数にいれる

    // obj の更新
    // obj をつかって雪の結晶を描画
  }
}
```

<live-demo src="/resource/livedemo/p5js/particle/object-array/"></live-demo>

<alert type="success">

スケッチ名：`particle-snow-object-array-random`  
実行した最初の高さが不自然に揃っているので、`obj.y` の初期位置をランダムにしよう！

</alert>

<live-demo src="/resource/livedemo/p5js/particle/object-array-fix/"></live-demo>

### 結晶の種類のデータを持たせる

<alert type="success">

スケッチ名：`particle-snow-object-array-snow-type`  
`obj` に `snowType` というプロパティを追加して `1` ~ `5` のランダムな整数を入れよう！  
`obj.snowType` がそれぞれの雪の結晶の番号と一致する時に、対応する `drawSnow` 関数を実行して5種類がランダムで表示されるようにしよう！  
ループ時にも `obj.snowType` に `1` ~ `5` のランダムな整数を入れて種類が変わるようにしよう！  
ヒント：`floor` 関数で少数を整数に変換できます。

</alert>

#### ランダムな整数

`random` 関数が返す値は常に少数なので、ランダムな整数が欲しい場合は、自分で少数から整数に変換する必要があります。
整数に変換するには `floor` 関数を使用します。

[floor() reference | p5.js](https://p5js.org/reference/#/p5/floor)

```javascript
let num1 = floor(0.567);
let num2 = floor(1.234);
let num3 = floor(random(1, 6));// 1 < x < 6 の範囲のランダム整数 1 ~ 5
console.log(num1);// 0
console.log(num2);// 1
console.log(num3);// 1 or 2 or 3 or 4 or 5
```


```javascript[sketch.js]
...

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < NUM_SNOW; i++) {
    data.push({// 配列にオブジェクトを追加
      ...
      // snowType に 1 ~ 5 のランダムな整数を代入 
    });
  }
}

function draw() {
  background(240);

  for (let i = 0; i < data.length; i++) {
    let obj = data[i];// data[i]だらけになっちゃうので、変数にいれる

    ...

    if (obj.y - obj.radius > height) {
      ...
      // obj.snowType に 1 ~ 5 のランダムな整数を代入
    }

    if (obj.snowType === 1) {// snowType が 1 のとき drawSnow01 を実行
      drawSnow01(obj.x, obj.y, obj.angle, obj.radius, obj.col);
    }
    ...
  }
}
```

<live-demo src="/resource/livedemo/p5js/particle/object-array-snow-type/"></live-demo>


### 画面いっぱいにスケッチを表示する

これまで `createCanvas(400, 400)` で `400px x 400px` の固定サイズでやってきましたが、`createCanvas` に `windowWidth` `windowHeight` をいれることでウィンドウいっぱいのサイズでスケッチを作ることができます。

```javascript[sketch.js]
function setup() {
  createCanvas(windowWidth, windowHeight);// ウィンドウサイズでキャンバスを作成
  ...
}
```

<live-demo src="/resource/livedemo/p5js/particle/object-array-snow-type-window-size/"></live-demo>

### ウィンドウリサイズに対応する

`window`

```javascript[sketch.js]
function setup() {
  createCanvas(windowWidth, windowHeight);
  ...
}

...

// ウィンドウリサイズ時に呼ばれる
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);// キャンバスを新しいウィンドウサイズにリサイズ
}
```

<live-demo src="/resource/livedemo/p5js/particle/object-array-snow-type-window-resize/"></live-demo>

## 応用編

以下の例を参考にして、<strong>値の調整やグラフィックの追加、インタラクションの追加をしてスケッチにオリジナリティを出してみましょう！</strong>

<alert type="success">

スケッチ名：`particle-snow-advanced-01` `particle-snow-advanced-02` ...  

</alert>

<alert type="success">背景や雪の<strong>色を変えてみる。</strong></alert>
<alert type="success">雪の結晶の多きさや、降る速さの<strong>ランダム値の範囲を変えてみる。</strong></alert>
<alert type="success"><strong>雪の結晶の種類を増やしてみる。</strong></alert>
<alert type="success"><strong>雪の降る向きを変えてみる。</strong></alert>

<alert type="success">

背景に木や雪だるま、かまくらなど<strong>装飾を足してみる。</strong>  
<a href="/resource/livedemo/p5js/particle/snow-advanced-decoration/" target="_blank">デモ</a>

</alert>

<alert type="success">

<strong>マウスが重なると雪の色が変わる。</strong>（ヒント：[dist() reference | p5.js](https://p5js.org/reference/#/p5/dist)）  
<a href="/resource/livedemo/p5js/particle/snow-advanced-hover/" target="_blank">デモ</a>

</alert>

<alert type="success">常にランダムな種類ではなく、<strong>時計の時間によって種類が変わる。</strong></alert>

<alert type="success">

常にランダムな種類ではなく、<strong>マウスクリックで１種類ずつ変わる。</strong>  
<a href="/resource/livedemo/p5js/particle/snow-advanced-click/" target="_blank">デモ</a>

</alert>

<alert type="success">

常にランダムな種類ではなく、<strong>キーの `1` ~ `5` を押したら種類が変わる。</strong>  
<a href="/resource/livedemo/p5js/particle/snow-advanced-key/" target="_blank">デモ</a>

</alert>

<alert type="success">

結晶がループした回数をカウントしてテキストで表示してみる  
<a href="/resource/livedemo/p5js/particle/snow-advanced-loop-count/" target="_blank">デモ</a>

</alert>