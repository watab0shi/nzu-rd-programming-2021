---
title: 座標変換
description: ''
position: 6.11
category: p5.js
---

## 座標変換とは

図形を描画する際に使っている <strong>座標そのものを変換（移動 / 回転 / 拡大）</strong>するものです。

## 移動

`translate` 関数を使うことで座標の原点を任意の座標に移動させることができます。

[translate() reference | p5.js](https://p5js.org/reference/#/p5/translate)

```javascript
translate(200, 200);// (200, 200)に原点を移動させる
```

<alert type="success">

スケッチ名：`transform-translate`  
`translate` 関数を使って、マウス座標に矩形を描画してみよう！  
ヒント：`rect(0, 0, 100, 100);`

</alert>

<live-demo src="/resource/livedemo/p5js/transform/translate/"></live-demo>

## 回転

`rotate` 関数を使うことで座標自体を原点を中心として回転させることができます。

[rotate() reference | p5.js](https://p5js.org/reference/#/p5/rotate)

```javascript
rotate(PI);// 回転する角度をラジアンで指定 PI = 180°
```

### ラジアン

ラジアンとは、円周率 `π`（`PI`）（`3.141592...`） を `1` とする角度の単位のこと。

`p5.js`側で `PI` `TWO_PI` `HALF_PI` の変数が定義されている。

<img src="/resource/image/p5js_transform_angle-radian.png" alt="ラジアンと度数法"/>

また、`angleMode` 関数を使うとラジアンから度数法での指定に変更することもできます。  
引数に `DEGREES` を渡すと度数法での指定になり、`RADIANS` を渡すとラジアンでの指定になります。

[angleMode() reference | p5.js](https://p5js.org/reference/#/p5/angleMode)

```javascript
angleMode(DEGREES);
rotate(180);// 180°
```

<alert type="success">

スケッチ名：`transform-rotate`  
`rotate` 関数を使って、マウス座標を中心にして矩形を回転させてみよう！

</alert>

<live-demo src="/resource/livedemo/p5js/transform/rotate/"></live-demo>

### 経過時間の取得

`millis` 関数を使うと、スケッチを実行してからの経過時間がミリ秒（1/1000秒）で取得できます。  
ミリ秒を `1000` で割ると単位を秒に変換できます。

```javascript
let sec = millis() / 1000;
```

## 拡大縮小

`scale` 関数を使うことで、座標のXY軸の 拡大 / 縮小 ができます。

[scale() reference | p5.js](https://p5js.org/reference/#/p5/scale)

```javascript
scale(0.5);// XY を 50% に縮小
scale(1, 2);// Y だけ 200% に拡大
```

<alert type="success">

スケッチ名：`transform-scale-xy`  
`scale` 関数を使って、マウス座標に応じて座標系の `x` 軸 `y` 軸を 拡大 / 縮小 させてみよう！  
ヒント：`translate(width / 2, height / 2);` `map`関数でマウス座標の範囲を変換。`square(0, 0, 100);`

</alert>

<live-demo src="/resource/livedemo/p5js/transform/scale-xy/"></live-demo>

<alert type="success">

スケッチ名：`transform-scale`  
`scale` 関数を使って、マウス座標を中心にして矩形を 拡大 / 縮小 させてみよう！

</alert>

<live-demo src="/resource/livedemo/p5js/transform/scale/"></live-demo>

### ループアニメーション

`sin` 関数や `cos` 関数の引数に時間などの動く値を渡すことで、`-1` ~ `1` の範囲をループし続ける値を取得することができます。

<img src="/resource/image/p5js_transform_sin-cos.gif" alt="sin cos"/>
<small><a href="https://ja.wikipedia.org/wiki/%E4%B8%89%E8%A7%92%E9%96%A2%E6%95%B0">Wikipedia</a> より引用</small>

## 座標変換の保存/復元

座標変換の関数は、実行したら（打ち消さない限り）次のフレームがくるまで設定が継続されるため、影響範囲が大きいのが難点です。  

そこで、座標変換を適用する前の座標の状態の 保存 / 復元 を行う `push` `pop` 関数と組み合わせて座標変換を行うことで、座標変換の影響範囲を限定することができます。

```javascript
// 変換前の座標

push();// 変換前の座標を保存
translate(200, 200);// 原点を移動
rotate(PI);// 180° 回転
scale(0.5);// XY を 50% に縮小
pop();// 変換前の座標を復元

// 変換前の座標
```

### 等角度配置

`rotate`と`for`文を組み合わせることで、簡単に等角度での配置をつくることができます。

```javascript
let NUM = 3;

translate(width / 2, height / 2);// 原点を中心に移動

for (let i = 0; i < NUM; i++) {
  push();
  rotate(i * TWO_PI / NUM);// 回転
  // 図形を描画
  pop();
}
```

<alert type="success">

スケッチ名：`transform-align-angle`  
`for` 文と `push` `pop` `transfrom` `roate` を駆使して正多角形の点上に矩形を配置してみよう！

</alert>

<live-demo src="/resource/livedemo/p5js/transform/align-angle/"></live-demo>


<alert type="success">

スケッチ名：`transform-align-angle-rotate`  
正多角形の点上に配置した矩形をそれぞれの中心で回転させてみよう！

</alert>

<live-demo src="/resource/livedemo/p5js/transform/align-angle-rotate/"></live-demo>

## 応用編１

<alert type="success">

スケッチ名：`transform-snow-01` `transform-snow-02` `transform-snow-03` `transform-snow-04` `transform-snow-05`  
座標変換 と `for`文 を駆使して <strong>雪の結晶を5パターン描いてみよう！</strong>  
線の数や太さを変えたり、円や矩形をあしらってもOK！  
ヒント：上向きに伸びる一本の枝を描く処理を `for`文 で60°ずつ回転させながら6回繰り返す

</alert>

<live-demo src="/resource/livedemo/p5js/transform/snow-1/"></live-demo>
<live-demo src="/resource/livedemo/p5js/transform/snow-2/"></live-demo>
<live-demo src="/resource/livedemo/p5js/transform/snow-3/"></live-demo>
<live-demo src="/resource/livedemo/p5js/transform/snow-4/"></live-demo>
<live-demo src="/resource/livedemo/p5js/transform/snow-5/"></live-demo>

## 応用編２

<alert type="success">

スケッチ名：`transform-clock`  
座標変換 と `for`文 を駆使して <strong>アナログ時計を描いてみよう！</strong>  
ヒント：`map`関数を使って時間の値の範囲を角度に割り当てる。

</alert>

### 時間の取得

時 / 分 / 秒 の数値はそれぞれ以下の関数で取得することができます。

`hour`：`0` ~ `23` で現在の時間を返す。  
[hour() reference | p5.js](https://p5js.org/reference/#/p5/hour)

`minute`：`0` ~ `59` で現在の分を返す。  
[minute() reference | p5.js](https://p5js.org/reference/#/p5/minute)

`second`：`0` ~ `59` で現在の秒を返す。  
[second() reference | p5.js](https://p5js.org/reference/#/p5/second)

<live-demo src="/resource/livedemo/p5js/transform/clock/"></live-demo>

<alert type="success">

スケッチ名：`transform-clock-accurate`  
<strong>長針と短針に秒と分も反映</strong>されるようにしよう！

</alert>

<live-demo src="/resource/livedemo/p5js/transform/clock-accurate/"></live-demo>
