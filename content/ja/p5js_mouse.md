---
title: マウス入力
description: ''
position: 6.07
category: p5.js
---

## クリック

`p5.js` 側で定義されている `mouseIsPressed` 変数を使うことで、現在マウスがクリックされているか/いないかを Boolean（ `true` / `false` ）で知ることができます。

```javascript
if (mouseIsPressed) {
  // マウスが押されているとき
} else {
  // マウスが押されていないとき
}
```

<alert type="success">

スケッチ名：`mouse-mouseIsPressed`  
`mouseIsPressed` を使ってマウスが押されている時と押されていない時で背景色を変えてみよう！

</alert>

<live-demo src="/resource/livedemo/p5js/mouse/mouseIsPressed/"></live-demo>

## マウス座標

`p5.js` 側で定義されている `mouseX` `mouseY` 変数を使うことで、現在のキャンバス上のマウス座標を知ることができます。

```javascript
circle(mouseX, mouseY, 10);
```

<alert type="success">

スケッチ名：`mouse-mouseXY`  
`mouseX` `mouseY` を使ってマウス座標に図形を描画してみよう！

</alert>

<live-demo src="/resource/livedemo/p5js/mouse/mouseXY/"></live-demo>

<alert type="success">

スケッチ名：`mouse-mouseXY-advanced`  
`mouseX` `mouseY` を色や大きさや線幅など、座標以外の引数に入れてみよう！

</alert>

<live-demo src="/resource/livedemo/p5js/mouse/mouseXY-color/"></live-demo>

### ヒント：値の範囲を変換する

```javascript
// 元の最小値/最大値を min1/max1
// 変換後の最小値/最大値を min2/max2 としたとき
let value = (値 - min1) / (max1 - min1) * (max2 - min2) + min2;
```

`(値 - min1) / (max1 - min1)` の部分で値を一度 `0` ~ `1` に変換したあと、`* (max2 - min2) + min2` の部分で `0` ~ `1` から任意の範囲に変換しています。

#### map関数

`map` 関数を使うと簡単に値の範囲を任意の範囲に割り当てることができます。

[map() reference | p5.js](https://p5js.org/reference/#/p5/map)

```javascript
// 0 ~ 400 を 0 ~ 255 に割り当てた数値を mouseColor に代入
let xColor = map(mouseX, 0, 400, 0, 255);

// 5番目の引数に true を渡すとクランプされる（最低値/最大値の範囲を超えないようにする）
let yColor = map(mouseY, 100, 300, 0, 255, true);
```

## クリックイベント

`mousePressed` 関数を定義することで、マウスがクリックされた瞬間に処理を割り当てることができます。

```javascript
function mousePressed() {
  // マウスが押された瞬間に一度だけ呼ばれる
}
```

<alert type="success">

スケッチ名：`mouse-mousPressed`  
`mousePressed` を使ってクリックするたびに円を大きくしてみよう！

</alert>

<live-demo src="/resource/livedemo/p5js/mouse/mousePressed/"></live-demo>


### ダブルクリック

`doubleClicked` 関数を定義することで、マウスがクリックされた瞬間に処理を割り当てることができます。

```javascript
function doubleClicked() {
  // マウスが押された瞬間に一度だけ呼ばれる
}
```

<alert type="success">

スケッチ名：`mouse-doubleClicked`  
`doubleClicked` を使ってダブルクリックしたときに円の大きさがリセットされるようにしてみよう！

</alert>

<live-demo src="/resource/livedemo/p5js/mouse/doubleClicked/"></live-demo>


## 応用編

### イージング

```javascript
let easeValue = 0;

function draw() {
  // 現在の値と目標値の差分の 20% 分を加算
  easeValue += (目標値 - easeValue) * 0.2;
}
```

<img src="/resource/image/p5js_mouse_easing.png" alt="イージングの説明"/>

<alert type="success">

スケッチ名：`mouse-easinng`  
<strong>イージング</strong> を使ってマウス座標と円のサイズを滑らかに変化させてみよう！  
（クリックしている間は円を大きく、通常時は小さく）

</alert>

<live-demo src="/resource/livedemo/p5js/mouse/easing/"></live-demo>
