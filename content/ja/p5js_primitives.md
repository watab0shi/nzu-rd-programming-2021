---
title: 図形を描く
description: ''
position: 6.03
category: p5.js
---

## 座標系

プログラムでグラフィックを描画するにあたって、まず画面の座標系を把握しておく必要があります。
例えば、点をひとつ描画するにしても**どこのピクセルに点を打つのか**を**正確な数字で**示さないといけません。

<img src="/resource/image/p5js_primitives.png"/>

p5.jsの座標系は**数学のグラフを上下逆さまにしたもの**と思ってください。
2Dの座標系の場合は<strong>左上が原点で、右に行くほど x がプラス、下に行くほど y がプラス</strong>になります。  
逆に、左に行くほど x がマイナス、上に行くほど y がマイナスになります。

<alert>

数学が苦手なひとは突然 `x` とか `y` とか知らない文字が出てきて思考停止するかもしれませんが、<strong>`x` はヨコ、`y` はタテ</strong>というだけです。一旦落ち着きましょう。

</alert>

<alert>

この章は**座標系に慣れる**ことが目的です。  
授業が進むにつれて、関数に直接座標の値を入れる書き方はしなくなりますが、ここで**座標や色の指定の感覚**を身につけておきましょう！

</alert>

<alert>

これから紹介する、図形を描画する関数には**線と塗りの概念**があります。**イラストレーターと同じ**ですね。🎨  
ほとんどの図形は線と塗りの両方を持っています。

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

  // point(X座標, Y座標)
  point(200, 200);// (200, 200) に点を描画
}
```

めちゃくちゃ小さくてわかりづらいですが、ちゃんと表示されています。

<live-demo src="/resource/livedemo/p5js/primitives/point/"></live-demo>

### strokeWeight関数

[strokeWeight() reference | p5.js](https://p5js.org/reference/#/p5/strokeWeight)

`p5.js` では `point` は線扱いなので、`point` の大きさを指定するには線の太さを指定する `strokeWeight` 関数を使用します。  
`strokeWeight` 関数を実行すると、それより下の行で書いている線を持ったグラフィックに対して全て適用されます。

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // strokeWeight(線の太さpx)
  strokeWeight(15);// 線の太さを 15px に指定
  point(200, 200);
}
```

<live-demo src="/resource/livedemo/p5js/primitives/strokeWeight/"></live-demo>

引数には、数字だけでなく四則演算の計算式も入れることができます！  
**面倒な計算はコンピューターに任せちゃいましょう！**

<nuxt-link to="/js-basic_variables#数値number">JavaScript基礎 - データ型（プリミティブ型）- 数値（Number）</nuxt-link>を参照

```javascript
// (200, 200) を基準として 100px ずつ右下に移動した座標
point(200 + 100, 200 + 100);
```


<alert type="success">

**位置と大きさがバラバラの点を３つ書いてみましょう！**  
できたら、スケッチ名：`primitives-points-3` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/primitives/points-3/"></live-demo>

<!-- ここにスケッチ -->

### stroke関数

[stroke() reference | p5.js](https://p5js.org/reference/#/p5/stroke)

`p5.js` では `point` は線扱いなので、`point` の色を指定するには線の色を指定する `stroke` 関数を使用します。  
色の指定は `background` 関数と同じく、`0` ~ `255` の値をひとつ入れると グレースケール、 ３つ入れると RGB 指定になります。  
`stroke` を指定していない場合は線の色は黒色になります。  
`stroke` 関数を実行すると、それより下の行で書いている線を持ったグラフィックを描画する関数に対して全て適用されます。

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // stroke(グレースケール 0~255)
  // stroke(Red 0~255, Green 0~255, Blue 0~255)
  stroke(0, 205, 129);// 線の色を緑に指定
  strokeWeight(15);
  point(200, 200);
}
```

<live-demo src="/resource/livedemo/p5js/primitives/stroke/"></live-demo>

<alert>

**プログラムは上から順番に実行される**ため、グラフィックに関する処理は**一番最後の行**（最後に実行されたもの）**が**キャンバス上の**一番上のレイヤー**に表示されます。グラフィックが重なった場合は下の行に書かれた（最後に呼ばれた）ほうが上にきます。

</alert>

<alert type="success">

**バラバラの大きさの点にそれぞれ色をつけてみましょう！**  
できたら、スケッチ名：`primitives-points-3-stroke` で保存して、コレクションに追加しましょう！  

</alert>

<alert>

配色に迷ったら、カラーパレット生成ツールを活用しましょう！  
<nuxt-link to="/web-basic_color#カラーパレット生成ツール">Web基礎知識 - 色について - カラーパレット生成ツール</nuxt-link>

</alert>

<live-demo src="/resource/livedemo/p5js/primitives/points-3-stroke/"></live-demo>

<alert type="success">

**点の大きさを、それぞれが重なるくらい大きくしてみましょう！**  
`point()` を実行する順番も変えて、どう変化するか見てみましょう！  
できたら、スケッチ名：`primitives-points-3-stroke-order` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/primitives/points-3-stroke-order/"></live-demo>

## line関数

[line() reference | p5.js](https://p5js.org/reference/#/p5/line)

始点、終点の座標を指定して線分を描画します。

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // line(始点X, 始点Y, 終点X, 終点Y)
  line(50, 50, 350, 350);// (50, 50) から (350, 350) に線を引く
}
```

<live-demo src="/resource/livedemo/p5js/primitives/line/"></live-demo>

<alert type="success">

**直線を２本引いて、十字を描いてみましょう！**  
`strokeWeight` や `stroke` で線の幅や色も変えてみましょう！  
できたら、スケッチ名：`primitives-line-cross` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/primitives/line-cross/"></live-demo>

<alert type="success">

**直線を２本引いて、対角線にXを描いてみましょう！**  
`strokeWeight` や `stroke` で線の幅や色も変えてみましょう！  
できたら、スケッチ名：`primitives-line-x` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/primitives/line-x/"></live-demo>

## rect関数

[rect() reference | p5.js](https://p5js.org/reference/#/p5/rect)

左上の点と幅、高さを指定して矩形（四角形）を描画します。  
幅と高さを同じにすると正方形になります。

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // rect(左上X, 左上Y, 幅, 高さ)
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

  // rectMode(CORNER または CENTER)
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

  // noStroke(引数なし)
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

  // fill(グレースケール 0~255)
  // fill(Red 0~255, Green 0~255, Blue 0~255)
  fill(0, 205, 129);// 塗りの色を緑に指定
  rect(150, 150, 100, 100);
}
```

<live-demo src="/resource/livedemo/p5js/primitives/fill/"></live-demo>

<alert type="success">

**`rect` `noStroke` `fill` を使って、市松模様を描いてみましょう！**  
できたら、スケッチ名：`primitives-rect-checkerboard` で保存して、コレクションに追加しましょう！  
（`background` も使うと `rect` 2行だけで書けます）

</alert>

<live-demo src="/resource/livedemo/p5js/primitives/rect-checkerboard/"></live-demo>

↑どこかでみたことあるなあ？🤔 👺 🌊 ⚔️ 👹

<alert type="success">

**`rectMode(CENTER)` を使って、キャンバスの中心から外に向かって広がる４つの正方形を描いてみましょう！**（実行順に注意！）  
できたら、スケッチ名：`primitives-rect-center` で保存して、コレクションに追加しましょう！  

</alert>

<live-demo src="/resource/livedemo/p5js/primitives/rect-center/"></live-demo>

## circle関数

[circle() reference | p5.js](https://p5js.org/reference/#/p5/circle)

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // circle(中心X, 中心Y, 直径)
  circle(200, 200, 100);// (200, 200) に 直径100px の正円を描画
}
```

<live-demo src="/resource/livedemo/p5js/primitives/circle/"></live-demo>

<alert type="success">

**`circle` と `noStroke` を使って、ゆきだるまを描いてみましょう！**  
できたら、スケッチ名：`primitives-circle-snowman` で保存して、コレクションに追加しましょう！  

</alert>

<live-demo src="/resource/livedemo/p5js/primitives/circle-snowman/"></live-demo>

## ellipse関数

[ellipse() reference | p5.js](https://p5js.org/reference/#/p5/ellipse)

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // ellipse(中心X, 中心Y, 幅, 高さ)
  ellipse(200, 200, 100, 50);// (200, 200) に 幅100px 高さ50px の楕円を描画
}
```

<live-demo src="/resource/livedemo/p5js/primitives/ellipse/"></live-demo>

<alert type="success">

**`circle` と `ellipse` と `noStroke` と `fill` を使って、鏡餅を描いてみましょう！**  
できたら、スケッチ名：`primitives-ellipse-mochi` で保存して、コレクションに追加しましょう！（影までつけなくてもOKです）

</alert>

<live-demo src="/resource/livedemo/p5js/primitives/ellipse-mochi/"></live-demo>

## triangle関数

[triangle() reference | p5.js](https://p5js.org/reference/#/p5/triangle)

３点の座標を指定して、三角形を描画します。

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // triangle(座標１X, 座標１Y, 座標２X, 座標２Y, 座標３X, 座標３Y)
  triangle(150, 150, 250, 150, 200, 240);// (150, 150) (250, 150) (200, 240) からなる三角形を描画
}
```

<live-demo src="/resource/livedemo/p5js/primitives/triangle/"></live-demo>

<alert type="success">

**`triangle` と `noStroke` と `fill` を使ってキャンバスを４等分してみましょう！**  
できたら、スケッチ名：`primitives-triangle-quarter` で保存して、コレクションに追加しましょう！  

</alert>

<live-demo src="/resource/livedemo/p5js/primitives/triangle-quarter/"></live-demo>

## イラストを描いてみよう

<alert type="success">

**上記の描画関数を組み合わせて簡単な絵を書いてみましょう！**  
（アイスクリームでも、顔でもキャラのデフォルメでも、なんでもOK）  
できたら、スケッチ名：`primitives-illust-絵の名前`（アイスを描いたスケッチの場合：`primitives-illust-icecream`）で保存して、コレクションに追加しましょう！

</alert>

<alert type="success">

保存とコレクション追加までできたら、以下の内容を**Teamsのスレッドに投稿**してください！  
＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝  
**スケッチURL**  
https://...

<br>

**モチーフ**  
アイスクリーム

<br>

**こだわりポイント**  
line と strokeWeight でアイスが溶けている様子を表現しました！  
＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

</alert>

<live-demo src="/resource/livedemo/p5js/primitives/illust-icecream/"></live-demo>


## エラーの読み方

プログラムが英語なので、エラーコードも英語で表示されます！  
エラーが起こったら、まず翻訳しましょう！  
[Google翻訳](https://translate.google.co.jp/) でも [DeepL翻訳](https://www.deepl.com/ja/translator) でもなんでもOKです

エラーコードに`(sketch: line 10)` と書いてあったら、10行目か、その前後の行が怪しいです。

<alert type="danger">

`🌸 p5.js says: circle() was expecting at least 3 arguments, but received only 2`

</alert>

`cirlce()` 関数は３つの引数をとりますが、２つしか入っていません。

<alert type="danger">

`関数名 is not defined (sketch: line 6)`

</alert>

スケッチの**6行目**にある `関数名` は宣言されていません。  
スペルミスの可能性があります。

<alert type="danger">

`Uncaught SyntaxError: missing ) after argument list (sketch: line 10)`

</alert>

構文エラー：スケッチ**10行目**の引数リストの後ろに`)`がありません

上記のような単純なエラーであれば、エラーコードをコピペで翻訳するだけでなんとなく意味がわかるのですが、場合によっては原因と関係のない場所でエラーが出ることもあります。  
一度翻訳をかけてみて、まるで意味がわからなかったら聞いてください。
