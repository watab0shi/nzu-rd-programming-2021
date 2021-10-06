---
title: 配列
description: ''
position: 6.10
category: p5.js
---

配列を使うと、大量の値を一つの変数で管理することができます。

## 配列の書き方

```javascript
// 書き方
let 変数名 = [];// 空の配列を作成
let 変数名 = [データ１, データ２, データ３];// 配列作成と同時にデータを格納
変数名[インデックス（何番目）];// インデックス番目のデータを取り出す（0始まりなので先頭は[0]）
変数名.push(データ);// 配列の末尾にデータを追加
変数名.length;// 配列の長さ（要素数）を取得

// サンプル
let arr1 = [123, 0.75, 2];// 初期化代入（３つの値を配列に入れる）
console.log(arr1[0]);// 123
console.log(arr1[1]);// 0.75
console.log(arr1[2]);// 2

let arr2 = [];// 空の配列を作成
arr2.push(123);// 配列.push() でデータを追加
arr2.push(0.75);
arr2.push(2);
console.log(arr1[0]);// 123
console.log(arr1[1]);// 0.75
console.log(arr1[2]);// 2

// for文で配列を回す
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);// 123 0.75 2
}
```

|[ 0 ]|[ 1 ]|[ 2 ]|
|:--|:--|:--|
|`123`|`0.75`|`2`|

<alert type="success">

**配列とfor文を使ってランダムな大きさの図形を描いてみましょう！**  
できたら、スケッチ名： `array-for` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/array/array-for/"></live-demo>

<!--
## グラフを描く

<alert type="success">

スケッチ名：`array-graph`  
配列とfor文を使って棒グラフを書いてみよう！  
ヒント：`let data = [100, 200...];` で `0` ~ `400` の適当な値を10個配列に入れて、 `for` 文と `rect` で表示。ひとつの幅は `let step = width / data.length;` 。  

</alert>

<live-demo src="/resource/livedemo/p5js/array/array-graph/"></live-demo>
-->

<!-- 
<alert type="success">

スケッチ名：`array-graph-advanced`  
棒グラフの隙間をあけ、目盛りを追加してグラフを見やすくしてみよう！  
ヒント：`rect(x + 5, y, w - 10, h)`

</alert>

<live-demo src="/resource/livedemo/p5js/array/array-graph-advanced/"></live-demo>
-->

<!--
### ランダム

`random` 関数で任意の範囲内のランダムな数値を取得することができます。

[random() reference | p5.js](https://p5js.org/reference/#/p5/random)

<alert type="warning">

`random` 関数は `p5.js` 側の関数のため、`setup` 関数が実行されるまで使えません！  
`p5.js` 側の関数をつかって変数を初期化したい場合、宣言時には一時的な値を入れておいて、`setup`関数内で代入するようにしましょう！

</alert>

```javascript
// let rand = random(-1, 1);// エラー！
let rand = 0;// 一旦 0 を入れておく

function setup() {
  ...
  rand = random(-1, 1);// -1 ~ -1 の範囲のランダムな値を取得
}
```

<alert type="success">

スケッチ名：`array-graph-random`  
配列とfor文を使って棒グラフを書いてみよう！  
ヒント：配列の個数を変数で定義 `let NUM = 10;` 、空の配列で初期化 `let data = [];` して、`data.push(random(0, 400))` で配列に`0` ~ `400` のランダムな値を追加。

</alert>

<live-demo src="/resource/livedemo/p5js/array/array-graph-random/"></live-demo>
-->

## 二重配列

配列の中に配列を入れることで、二重配列をつくることができます。

```javascript
// 初期化代入する方法
let arr1 = [
  [0.1, 2.34, 52],
  [3.2, 40, 8.3],
  [79, 23.1, 10.7]
];
console.log(arr1[0]);// [0.1, 2.34, 52]
console.log(arr1[0][1]);// 2.34
console.log(arr1[2]);// [79, 23.1, 10.7]
console.log(arr1[2][2]);// 10.7
```

||[ 0 ]|[ 1 ]|[ 2 ]|
|:--|:--|:--|:--|
|<strong>arr[ 0 ]</strong>|0.1|2.34|52|
|<strong>arr[ 1 ]</strong>|3.2|40|8.3|
|<strong>arr[ 2 ]</strong>|79|23.1|10.7|

```javascript
// あとから追加する方法
let NUM = 3;
let arr2 = [];// 空の配列

for (let y = 0; y < NUM; y++) {
  let arr = [];// 一行分の配列
  for (let x = 0; x < NUM; x++) {
    arr.push(random(0, 100));
  }
  arr2.push(arr);
}

for (let y = 0; y < arr2.length; y++) {
  for (let x = 0; x < arr2[y].length; x++) {// arr2[y] で一行分の配列を取得
    console.log(y, x, arr[y][x]);
  }
}
```

<alert type="success">

**`5 x 5` のランダムな値を入れた二重配列を作って、配列の値を直径とする円をグリッド上に描画してましょう！**  
できたら、スケッチ名： `array-for-double` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/array/array-for-double/"></live-demo>

## 画像のピクセル色を参照する

`loadPixels` 関数を使うことで、画像のピクセルの色情報をシステム変数 `pixels` に読み出すことができます。
画像の変数 `img` で `img.loadPixels` 関数を使うことで、画像のピクセルの色情報をシステム変数 `img.pixels` に読み出すことができます。

[loadPixels() reference | p5.js](https://p5js.org/reference/#/p5/loadPixels)

```javascript
let img;
let num = 32;

function preload() {
  img = loadImage('cat.png');
}

function setup() {
  pixelDensity(1);
  createCanvas(400, 400);

  img.resize(num, num);// 画像が大きいと負荷がかかるので小さめにリサイズしておく
  img.loadPixels();// img.pixels にピクセルデータが格納される

  // img.pixels には [R0,G0,B0,A0, R1,G1,B1,A1, ...] の順に
  // ひと続きの配列の中に画像の全てのピクセルデータが入っています
  console.log(img.pixels.length);// -> 画像幅 x 画像高さ x 4
}

function draw() {
  background(220);
  for (let y = 0; y < num; y++) {
    for (let x = 0; x < num; x++) {
      let index = ((y * num) + x) * 4;// 配列の要素番号
      let R = img.pixels[index + 0];
      let G = img.pixels[index + 1];
      let B = img.pixels[index + 2];
      let A = img.pixels[index + 3];
      // fill or stroke
      // 図形
    }
  }
}
```


高解像度ディスプレイの場合、p5.jsが自動的に画像サイズを大きくして高解像度対応する仕様になっているので、`pixels`の参照がずれる場合があります。
[pixelDensity() reference | p5.js](https://p5js.org/reference/#/p5/pixelDensity)

```javascript
function setup() {
  // 高解像度ディスプレイでもピクセル比 1x1 を保つ
  pixelDensity(1);
  createCanvas(400, 400);
}
```

<live-demo src="/resource/livedemo/p5js/array/array-image-pixel/"></live-demo>

## 大量の円を動かす

配列（`Array`）を使用すると、大量のデータの管理が簡単にできます。

### まずはひとつの動く円を作る

```javascript[sketch.js]
let x = 200;
let y = 200;
let vx = 1;
let vy = 1.5;
let r = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  noStroke();
  fill(100, 220, 220);
  
  // 位置を更新
  x += vx;
  y += vy;

  // xが端にきたらx方向の移動の向きを反転
  if (x < r) {
    vx *= -1;
    x = r;
  }
  if (x > width - r) {
    vx *= -1;
    x = width - r;
  }
  // yが端にきたらy方向の移動の向きを反転
  if (y < r) {
    vy *= -1;
    y = r;
  }
  if (y > height - r) {
    vy *= -1;
    y = height - r;
  }

  circle(x, y, r * 2);
}
```

`width` `height` 変数を使うと、スケッチのキャンバスサイズが取得できます。

[width reference | p5.js](https://p5js.org/reference/#/p5/width)
[height reference | p5.js](https://p5js.org/reference/#/p5/height)

<img src="/resource/image/p5js_array_single-circle.png" alt="跳ね返り判定の図"/>

<live-demo src="/resource/livedemo/p5js/array/single-circle/"></live-demo>

### 配列で複製する

<alert type="success">

スケッチ名：`array-cirle`  
↑のスケッチの `x` `y` `vx` `vy` `r` を配列にして、<strong>動く円を複数にしてみよう！</strong>

</alert>

<alert type="warning">

配列の要素ごとに座標（`x` `y`）か移動量（`vx` `vy`）どちらか（または両方）を変えないと複数の円が同じ場所に表示されてしまうので注意しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/array/array-circle/"></live-demo>

### 要素ごとにパラメーターをランダムにする

<alert type="success">

スケッチ名：`array-cirle-random`  
円の位置、サイズ、移動量を<strong>ランダム</strong>にしてみよう！

</alert>

<live-demo src="/resource/livedemo/p5js/array/array-circle-random/"></live-demo>

### 要素数を簡単に変更できるようにする

<alert type="success">

スケッチ名：`array-cirle-number`  
円の数を簡単に増減できるようにして、<strong>円を30個にしてみよう！</strong>  
ヒント：要素数の変数`NUM`を作る、`[]`で配列を初期化、`配列.push()`で要素を追加

</alert>

<live-demo src="/resource/livedemo/p5js/array/array-circle-number/"></live-demo>
