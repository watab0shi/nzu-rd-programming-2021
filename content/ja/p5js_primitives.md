---
title: 図形を描く
description: ''
position: 6.03
category: p5.js
---

## 座標系

プログラムでグラフィックを描画するにあたって、まず画面の座標系を把握しておく必要があります。
例えば、点をひとつ描画するにしてもどこのピクセルに点を打つのかを正確に数字で示さないといけません。

<img src="/resource/image/p5js_primitives.png"/>

p5.jsの座標系は数学のグラフを上下逆さまにしたものと思ってください。
2Dの座標系の場合は<strong>左上が原点で、右に行くほど x がプラス、下に行くほど y がプラス</strong>になります。  
逆に、左に行くほど x がマイナス、上に行くほど y がマイナスになります。

<alert>

数学が苦手なひとは突然 `x` とか `y` とか知らない文字が出てきて思考停止するかもしれませんが、<strong>`x` はヨコ、`y` はタテ</strong>というだけです。あとは算数のグラフと同じです。落ち着きましょう。

</alert>

## point関数

[point() reference | p5.js](https://p5js.org/reference/#/p5/point)

座標を指定して点を描画します。  
デフォルトだと1ピクセルの点が描画されます。  

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  point(200, 200);
}
```

めちゃくちゃ小さくてわかりづらいですが、ちゃんと表示されています。

<live-demo src="/resource/livedemo/p5js/primitives/point/"></live-demo>

### strokeWeight関数

[strokeWeight() reference | p5.js](https://p5js.org/reference/#/p5/strokeWeight)

`p5.js` では `point` は線扱いなので、`point` の大きさを指定するには線の太さを指定する `strokeWeight` 関数を使用します。  
`strokeWeight` が適用される関数の前に実行します。

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  strokeWeight(15);// 線の太さを 15px に指定
  point(200, 200);
}
```

<live-demo src="/resource/livedemo/p5js/primitives/strokeWeight/"></live-demo>

<alert type="success">

バラバラの大きさの点を３つ書いてみましょう！  
できたら、スケッチ名：`primitives-points-3` で保存して、コレクションに追加しましょう！

</alert>

<!-- ここにスケッチ -->

### stroke関数

[stroke() reference | p5.js](https://p5js.org/reference/#/p5/stroke)

`p5.js` では `point` は線扱いなので、`point` の色を指定するには線の色を指定する `stroke` 関数を使用します。  
色の指定は `background` 関数と同じく、`0` ~ `255` の値で グレースケール か RGB を指定します。  
`stroke` を指定していない場合は線の色は黒色になります。  
図形が描画される前に実行します。

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  stroke(0, 205, 129);// 線の色を緑に指定
  strokeWeight(15);
  point(200, 200);
}
```

<live-demo src="/resource/livedemo/p5js/primitives/stroke/"></live-demo>

<alert>

プログラムは上から順番に実行されるため、グラフィックに関する処理は一番最後の行（最後に実行されたもの）がキャンバス上の一番上のレイヤーに表示されます。グラフィックが重なった場合は下の行に書かれた（最後に呼ばれた）ほうが上にきます。

</alert>

<alert type="success">

バラバラの大きさの点にそれぞれ色をつけてみましょう！  
できたら、スケッチ名：`primitives-points-3-stroke` で保存して、コレクションに追加しましょう！

</alert>

<!-- ここにスケッチ -->

<alert type="success">

点の大きさを、それぞれが重なるくらい大きくしてみましょう！  
できたら、スケッチ名：`primitives-points-3-stroke-order` で保存して、コレクションに追加しましょう！

</alert>

<!-- ここにスケッチ -->

## line関数

[line() reference | p5.js](https://p5js.org/reference/#/p5/line)

始点、終点の座標を指定して線分を描画します。

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  line(50, 50, 350, 350);// (50, 50) から (350, 350) に線を引く
}
```

<live-demo src="/resource/livedemo/p5js/primitives/line/"></live-demo>

<alert type="success">

直線を２本引いて、十字を描いてみましょう！  
できたら、スケッチ名：`primitives-line-cross` で保存して、コレクションに追加しましょう！

</alert>

<alert type="success">

直線を２本引いて、対角線にXを描いてみましょう！  
できたら、スケッチ名：`primitives-line-x` で保存して、コレクションに追加しましょう！

</alert>

<!-- ここにスケッチ -->

## rect関数

[rect() reference | p5.js](https://p5js.org/reference/#/p5/rect)

左上の点と幅、高さを指定して矩形（四角形）を描画します。

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rect(150, 150, 100, 100);// 左上を (150, 150) とする、幅100px 高さ100px の矩形を描画
}
```

<live-demo src="/resource/livedemo/p5js/primitives/rect/"></live-demo>

### rectMode関数

[rectMode() reference | p5.js](https://p5js.org/reference/#/p5/rectMode)

`rect` 関数の座標を左上で指定するか、中心座標で指定するかを設定できます。

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rectMode(CORNER);// 矩形の左上座標指定モード
  rect(150, 150, 100, 100);
  rectMode(CENTER);// 矩形の中心座標指定モード
  rect(150, 150, 100, 100);
}
```

<live-demo src="/resource/livedemo/p5js/primitives/rectMode/"></live-demo>

### noStroke関数

[noStroke() reference | p5.js](https://p5js.org/reference/#/p5/noStroke)

図形の線を非表示にします。
デフォルトでは線と塗りの両方が表示されるため、塗りのみ表示したい場合に使用します。

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();// 線を非表示
  rect(150, 150, 100, 100);
}
```

<live-demo src="/resource/livedemo/p5js/primitives/noStroke/"></live-demo>

### fill関数

[fill() reference | p5.js](https://p5js.org/reference/#/p5/fill)

図形の塗りつぶしの色を指定します。  
色の指定は `background` 関数と同じく、`0` ~ `255` の値で グレースケール か RGB を指定します。  
図形が描画される前に実行します。

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  fill(0, 205, 129);// 塗りの色を緑に指定
  rect(150, 150, 100, 100);
}
```

<live-demo src="/resource/livedemo/p5js/primitives/fill/"></live-demo>

## circle関数

[circle() reference | p5.js](https://p5js.org/reference/#/p5/circle)

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(200, 200, 100);// (200, 200) に 直径100px の正円を描画
}
```

<live-demo src="/resource/livedemo/p5js/primitives/circle/"></live-demo>

## ellipse関数

[ellipse() reference | p5.js](https://p5js.org/reference/#/p5/ellipse)

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(200, 200, 100, 50);// (200, 200) に 幅100px 高さ50px の楕円を描画
}
```

<live-demo src="/resource/livedemo/p5js/primitives/ellipse/"></live-demo>

## triangle関数

[triangle() reference | p5.js](https://p5js.org/reference/#/p5/triangle)

３点の座標を指定して、三角形を描画します。

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  triangle(150, 150, 250, 150, 200, 240);// (150, 150) (250, 150) (200, 240) からなる三角形を描画
}
```

<live-demo src="/resource/livedemo/p5js/primitives/triangle/"></live-demo>

<alert type="success">

<strong>上記全ての描画関数を少なくとも一回以上使って簡単な絵を書いてみましょう！</strong>（なんでも構いません、アイスクリームでも、顔でもキャラのデフォルメでも）  
ひとつのスケッチに無理して全ての関数を詰め込む必要はないので、複数のスケッチで合計して上記全ての関数を使っていれば大丈夫です。  
保存するスケッチの名前は `primitives-絵の名前`（例 顔を描いたスケッチの場合：`primitives-face`）としてください。
<strong>少なくともひとり3枚は制作しましょう！</strong>

</alert>

<!-- ここにスケッチ -->

<!-- ここにスケッチ -->

<!-- ここにスケッチ -->


## エラーの読み方

<alert type="danger">

`🌸 p5.js says: circle() was expecting at least 3 arguments, but received only 2`

</alert>

`cirlce()` 関数は３つの引数をとりますが、２つしか入っていません。

<alert type="danger">

`関数名 is not defined (sketch: line 6)`

</alert>

スケッチの6行目にある `関数名` は宣言されていません。  
スペルミスの可能性があります。

<alert type="danger">

`Uncaught SyntaxError: missing ) after argument list (sketch: line 10)`

</alert>

構文エラー：スケッチ10行目の引数リストの後ろに`)`がありません

上記のような単純なエラーであれば、エラーコードをコピペで翻訳するだけでなんとなく意味がわかるのですが、場合によっては原因と関係のない場所でエラーが出ることもあります。  
一度翻訳をかけてみて、まるで意味がわからなかったら聞いてください。
