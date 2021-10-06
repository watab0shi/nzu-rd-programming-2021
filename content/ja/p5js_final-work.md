---
title: 最終課題
description: ''
position: 6.80
category: p5.js
---


<alert type="success">

以下の**どちらか**を選んで自由に作品を作ってみましょう！  

**・二重 for 文を使ったグラフィックアニメーション**  
**・マウスやキー入力を使ったゲーム**

最初から完成系を想像して制作するのもいいですが、「今度はここを変えてみよう」の繰り返しで作ってみると思わぬところでおもしろい結果になったりします。

できたら、スケッチ名： `final-work-graphic` または `final-work-game` で保存して、コレクションに追加しましょう！

</alert>

## 参考

### ゲームのテンプレートスケッチ

テキストをWebフォントにしてみたり、キー入力を使ってみたり、いろいろアレンジしてみましょう！  
https://editor.p5js.org/wataru-kani/sketches/XG-BE4rAy

<live-demo src="/resource/livedemo/p5js/final-work/game-template/"></live-demo>

### ウィンドウサイズ
ウィンドウサイズのシステム変数。キャンバスサイズをウィンドウ全画面にしたいときに使う。  
[windowWidth reference | p5.js](https://p5js.org/reference/#/p5/windowWidth)  
[windowHeight reference | p5.js](https://p5js.org/reference/#/p5/windowHeight)

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
}
```

### 距離を測る

二点間の距離を測る関数。マウス座標からの距離が楽にとれる。あたり判定にも使える。  
[dist() reference | p5.js](https://p5js.org/reference/#/p5/dist)

```javascript
let d = dist(mouseX, mouseY, 200, 200);// (mouseX, mouseY) から （200, 200） までの距離を返す
```

### 座標変換

座標変換（座標系の移動、回転、スケール）大抵の場合は `push` `pop` で挟んで使う。  
[translate() reference | p5.js](https://p5js.org/reference/#/p5/translate)  
[rotate() reference | p5.js](https://p5js.org/reference/#/p5/rotate)  
[scale() reference | p5.js](https://p5js.org/reference/#/p5/scale)  
[push() reference | p5.js](https://p5js.org/reference/#/p5/push)  
[pop() reference | p5.js](https://p5js.org/reference/#/p5/pop)  

```javascript
function draw() {
  rectMode(CENTER);
  push();
  {
    translate(mouseX, mouseY);// 座標系の原点をマウス座標に移動
    rotate(frameCount * 0.01);// 原点を中心に回転
    scale(sin(frameCount * 0.01));// 原点を中心にスケール
    square(0, 0, 100);// 
  }
  pop();
}
```

### 3DCG

3DCGの描画。座標変換と組み合わせて使います。  
[box() reference | p5.js](https://p5js.org/reference/#/p5/box)  
[sphere() reference | p5.js](https://p5js.org/reference/#/p5/sphere)  
[cylinder() reference | p5.js](https://p5js.org/reference/#/p5/cylinder)  
[cone() reference | p5.js](https://p5js.org/reference/#/p5/cone)  
[torus() reference | p5.js](https://p5js.org/reference/#/p5/torus)  

```javascript
function setup() {
  createCanvas(400, 400, WEBGL);// 3Dをつかうときは第三引数に WEBGL を指定
}

function draw() {
  background(220);
  // WEBGL モードだとキャンバスの中心が原点になります。
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(50);
}
```

### カラーモード
HSB（色相, 彩度, 明度）指定に変更可能。  
[colorMode() reference | p5.js](https://p5js.org/reference/#/p5/colorMode)

```javascript
colorMode(HSB, 255);// RGB -> HSB 0 ~ 255 指定に変更
```

### カラーパレット配列生成

[coolors.co](https://coolors.co/) のURLから色のパレットを生成。  

```javascript
let url = 'https://coolors.co/072ac8-1e96fc-a2d6f9-fcf300-ffc600';
let palette = url.replace('https://coolors.co/', '').split('-').map(c => '#' + c);

fill(palette[0]);// 16進数のカラーコードで指定
```


## 作例

デイリーコーディングのコレクション。授業でやってないものもありますが参考程度に。  
[DailyCoding - p5.js Web Editor | My collections](https://editor.p5js.org/wataru-kani/collections/-ckcjZYlm)

`index` `random` の組み合わせ。
<live-demo src="/resource/livedemo/p5js/final-work/grid-pattern/"></live-demo>

`img.pixel` `dist` の組み合わせ。
<live-demo src="/resource/livedemo/p5js/final-work/pixel-circle-wave/"></live-demo>

`WEBGL` `box` `cylinder` `translate` `scale` `noise` の組み合わせ。
<live-demo src="/resource/livedemo/p5js/final-work/3d-ortho-lego/"></live-demo>

ランダムに移動する円をクリックするゲーム。
<live-demo src="/resource/livedemo/p5js/final-work/game-circle-clicker/"></live-demo>

