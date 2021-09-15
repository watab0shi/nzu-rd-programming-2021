---
title: マウス入力
description: ''
position: 6.08
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

`mouseIsPressed` を使って**マウスが押されている時と押されていない時で表示される図形を変えてみよう！**  
できたら、スケッチ名： `mouse-mouseIsPressed` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/mouse/mouseIsPressed/"></live-demo>

## マウス座標

`p5.js` 側で定義されている `mouseX` `mouseY` 変数を使うことで、現在のキャンバス上のマウス座標を知ることができます。

```javascript
circle(mouseX, mouseY, 10);
```

<alert type="success">

`mouseX` `mouseY` を使って**マウス座標に図形を描画してみよう！**  
できたら、スケッチ名： `mouse-mouseXY` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/mouse/mouseXY/"></live-demo>

<alert type="success">

`mouseX` `mouseY` を**色や大きさや線幅など、座標以外の引数に入れてみよう！**  
できたら、スケッチ名： `mouse-mouseXY-advanced` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/mouse/mouseXY-advanced/"></live-demo>

### 値の範囲を変換する

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

`mousePressed` 関数を定義することで、**マウスが押された瞬間**に処理を割り当てることができます。

```javascript
function mousePressed() {
  // マウスが押された瞬間に一度だけ呼ばれる
}
```

<alert type="success">

`mousePressed` を使って**マウスが押されるたびに円を大きくしてみよう！**  
できたら、スケッチ名： `mouse-mousPressed` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/mouse/mousePressed/"></live-demo>


### ダブルクリック

`doubleClicked` 関数を定義することで、**マウスがダブルクリックされた瞬間**に処理を割り当てることができます。

```javascript
function doubleClicked() {
  // マウスが押された瞬間に一度だけ呼ばれる
}
```

<alert type="success">

`doubleClicked` を使って**ダブルクリックしたときに円の大きさがリセットされるようにしてみよう！**  
できたら、スケッチ名： `mouse-doubleClicked` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/mouse/doubleClicked/"></live-demo>

## イージング

```javascript
// 書き方
現在値 += (目標値 - 現在値) * 係数;
```

```javascript[sketch.js]
let currentValue = 0;
let targetValue = 1;

function draw() {
  // 現在値と目標値の差分の 20% 分を加算
  currentValue += (targetValue - currentValue) * 0.2;// currentValue がゆっくり 1 に近づいていく
}
```

<img src="/resource/image/p5js_mouse_easing.png" alt="イージングの説明"/>

<alert type="success">

**イージングを使って円がマウス座標にゆっくり追従するようにしてみよう！**  
できたら、スケッチ名： `mouse-easing` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/mouse/easing/"></live-demo>

<alert type="success">

**イージングを使ってクリックしている間は円を大きく、通常時は小さくさせてみよう！**  
できたら、スケッチ名： `mouse-easing-size` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/mouse/easing-size/"></live-demo>


### 応用編

<alert type="success">

**変数を複数作って、複数の円が異なるスピードで追従するようにしてみよう！**  
できたら、スケッチ名： `mouse-easing-multiple` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/mouse/easing-multiple/"></live-demo>

<alert type="success">

**`mousePressed` 関数とイージングを使って、マウスを押した座標に円が移動するようにしてみよう！**  
できたら、スケッチ名： `mouse-easing-mousePressed` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/mouse/easing-mousePressed/"></live-demo>
