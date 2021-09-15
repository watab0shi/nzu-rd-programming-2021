---
title: アニメーション
description: ''
position: 6.05
category: p5.js
---

`draw` 関数内で変数を更新することで、アニメーションさせることができます。

## いろんな引数をアニメーションさせてみる

### 直径をアニメーション

<alert type="success">

**`diameter` の値を `draw` 関数の中で `0.1` ずつ足してみましょう！**  
`0.1` を `1` や `0.01` に変更してみたり、プラスをマイナスに変えてみたりして、動きがどう変化するかみてみましょう！  
直径がマイナスになると...？？🤔  
できたら、スケッチ名： `animation-circle-diameter` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/animation/circle-diameter/"></live-demo>

↑動いていなかったら、リロード（再読み込み）してみてください。

### 座標をアニメーション

<alert type="success">

**`x` の値を `draw` 関数の中で `0.1` ずつ足してみましょう！**  
`0.1` を `1` や `0.01` に変更してみたり、プラスをマイナスに変えてみたりして、動きがどう変化するかみてみましょう！  
できたら、スケッチ名： `animation-circle-x` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/animation/circle-x/"></live-demo>

↑動いていなかったら、リロード（再読み込み）してみてください。

アニメーションするようにはなりましたが、**このままだと永遠に右に進んで戻ってこない**ので、
次の頁では画面外に出たら反対側から戻ってくる条件分岐の処理を追加します。

### 色をアニメーション

<alert type="success">

**新たに変数 `red` を定義して `0` を代入し、`draw` 関数の中で `0.1` ずつ足して `fill` に渡してみましょう！**  
`0.1` を `1` や `0.01` に変更してみたり、初期値を `0` から `255` にしてみたり、プラスをマイナスに変えてみたりして、動きがどう変化するかみてみましょう！  
できたら、スケッチ名： `animation-circle-fill` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/animation/circle-fill/"></live-demo>

↑動いていなかったら、リロード（再読み込み）してみてください。


## ループアニメーション

### 剰余演算子

`%` 記号を使って `数値１ % 数値２` と書くことで、**`数値１` を `数値２` で割った余り**を求めることができます。  
増え続ける数値に対して制限を設けることで、ループアニメーションをつくることができます。

```javascript
0 % 200// 0
20 % 200// 20
200 % 200// 0 (余りなので、左側が 200 以上になったら 0 に戻る)
201 % 200// 1
412 % 200// 12

let x = 399;
x += 1;
x = x % 400;// x が 400 以上になったら 0 に戻る
```

<alert type="success">

[直径をアニメーション](#直径をアニメーション) で作った、**`animation-circle-diameter` を `%` を使ってループさせてみましょう！**  
できたら、スケッチ名： `animation-circle-diameter-loop` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/animation/circle-diameter-loop/"></live-demo>

<alert type="success">

[座標をアニメーション](#座標をアニメーション) で作った、**`animation-circle-x` を `%` を使ってループさせてみましょう！**  
できたら、スケッチ名： `animation-circle-x-loop` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/animation/circle-x-loop/"></live-demo>

<alert type="success">

[色をアニメーション](#色をアニメーション) で作った、**`animation-circle-fill` を `%` を使ってループさせてみましょう！**  
できたら、スケッチ名： `animation-circle-fill-loop` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/animation/circle-fill-loop/"></live-demo>

### frameCount

p5.js のアニメーションは１秒間に約60枚の絵を繰り返し描画することで動きを表現しています。
その１枚の絵のことをフレームといい、システム変数 `frameCount` にはスケッチを実行したときから足され続けるフレーム番号が入っています。

自分で変数を作って更新しなくても、`frameCount` を使うだけでアニメーションをさせることもできます。

<img src="/resource/image/p5js_animation_frameCount.png" alt="frameCount"/>

<alert type="success">

**`frameCount` と `%` を使ってループアニメーションを作ってみましょう！**  
できたら、スケッチ名： `animation-framecount` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/animation/framecount/"></live-demo>

### sin cos

三角関数の `sin` `cos` 関数の引数に、変化する値を渡すことで、`-1` ~ `+1` の間で規則的に動く値を作ることができます。  
引数の値が `6.28...` (`3.14 * 2`) 増えるごとに戻り値が１周期しますが、詳しい話はここでは割愛します。

#### sin

`y=sin(x)`で[Google検索](https://www.google.com/search?q=y%3Dsin(x))  
`sin` は `0` から始まります。

[sin() reference | p5.js](https://p5js.org/reference/#/p5/sin)

```javascript
// 書き方
sin(値);

// サンプル
sin(0);// 0
sin(3.141592);// ほぼ 0
sin(3.141592 / 2);// ほぼ 1
sin(frameCount * 0.05);// 時間経過で上下 -1 ~ +1 の間を往復する
```

<img src="/resource/image/p5js_trigonometric_sin.png" alt="sin"/>

#### cos

`y=cos(x)`で[Google検索](https://www.google.com/search?q=y%3Dcos(x))  
`cos` は `1` から始まります。

[cos() reference | p5.js](https://p5js.org/reference/#/p5/cos)

```javascript
// 書き方
cos(値);

// サンプル
cos(0);// 1
cos(3.141592);// ほぼ -1
cos(3.141592 / 2);// ほぼ 0
cos(frameCount * 0.05);// 時間経過で上下 -1 ~ +1 の間を往復する
```

<img src="/resource/image/p5js_trigonometric_cos.png" alt="cos" />

<alert type="success">

**`sin` または `cos` 関数と `frameCount` を使ってループアニメーションを作ってみましょう！**  
できたら、スケッチ名： `animation-sin-cos` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/animation/sin-cos/"></live-demo>

### 値の範囲を変更する

`sin` `cos` 関数では `-1` ~ `+1` の範囲の値が返ってきて、それを座標や色に変換するにはいちいち計算しないといけなくて面倒です。  
`map` 関数を使うと、**任意の範囲内で動く値を別の範囲で動く値に変換**することができます。

```javascript
// 書き方
map(値, 値の最低値, 値の最大値, 変換後の最小値, 変換後の最大値);

// サンプル
map(sin(0), -1, 1, 200, 400);// 0 を (-1 ~ +1) の範囲から (200 ~ 400) の範囲に変換 >> 300
```

<alert type="success">

**`map` 関数を使って `sin` または `cos` 関数の値の範囲を変えてループアニメーションを作ってみましょう！**  
できたら、スケッチ名： `animation-sin-cos-map` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/animation/sin-cos-map/"></live-demo>


## 不規則なアニメーション

### random

`random` 関数を使うと、引数で指定した範囲のランダムな `0` ~ `1` の範囲の値を取得することができます。

[random() reference | p5.js](https://p5js.org/reference/#/p5/random)

```javascript
// 書き方１
random(最大値);// 0 ~ 最大値 までのランダムな値を返す

// 書き方１
random(最小値, 最大値);// 最小値 ~ 最大値 までのランダムな値を返す

// サンプル１
let x = random(400);// 0 ~ 400 までのランダムな値を x に代入

// サンプル２
background(random(200, 255));// 背景色を 200 ~ 255 までのランダムな値に指定
```

<alert type="success">

`setup` 関数の中で一度だけ変数に `random` 関数の値を代入して、**実行するたびに位置が変わる円を作ってみましょう！**  
できたら、スケッチ名： `animation-random-setup` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/animation/random/"></live-demo>

<alert type="success">

`draw` 関数の中で変数に `random` 関数を使った値を代入して、**キャンバスの中心で震える円を作ってみましょう！**  
できたら、スケッチ名： `animation-random-shake` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/animation/random-shake/"></live-demo>

### noise

`random` 関数は連続性のないランダムな値ですが、`noise` 関数を使うと連続性のあるランダムに動く `0` ~ `1` の範囲の値を作ることができます。  

<alert>

`noise` はスケッチを実行するごとに**毎回違う値**が返ってきます。

</alert>

[noise() reference | p5.js](https://p5js.org/reference/#/p5/noise)

```javascript
// 書き方
noise(値);

// サンプル
noise(frameCount * 0.01);
```

<alert type="success">

`noise` 関数と `map` 関数を使って、**不規則に大小する円を作ってみましょう！**  
できたら、スケッチ名： `animation-noise` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/animation/noise/"></live-demo>

<alert type="success">

`noise` 関数と `map` 関数を使って、**不規則に移動する円を作ってみましょう！**  
できたら、スケッチ名： `animation-noise-xy` で保存して、コレクションに追加しましょう！  

XYに同じ引数から作った `noise` を与えると斜めに動いてしまうので、適当にオフセットしてずらしましょう。
例）`noise(frameCount * 0.01 + 123.45678)`

</alert>

<live-demo src="/resource/livedemo/p5js/animation/noise-xy/"></live-demo>

## 軌跡を残す

`draw` 関数の `background` をなくすことで、前フレームの**描画結果を画面に残す**ことができます。

<alert>

スケッチ内で一度も `background` 関数を呼ばないと、**背景色が透明**になります。

</alert>

背景色を適用したい場合は、`setup` 関数の中で一度だけ `background` 関数を実行すると最初だけ反映されます。

<alert type="success">

**円の位置、直径、色を `noise` 関数で変化するようにして、軌跡を残してみましょう！**  
できたら、スケッチ名： `animation-trail` で保存して、コレクションに追加しましょう！  

</alert>

<live-demo src="/resource/livedemo/p5js/animation/trail/"></live-demo>

軌跡を残した状態だと、`stroke` の有無で全く違う印象の画ができます。

<alert type="success">

**`stroke` も `noise` 関数で変化するようにしてみましょう！**  
できたら、スケッチ名： `animation-trail-stroke` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/animation/trail-stroke/"></live-demo>

### フェードアウト

`background` 関数の４つ目の引数に値を入れると、背景色の透明度を指定することができます。

```javascript
// 書き方
background(Red値, Green値, Blue値, Alpha値);

// サンプル
background(255, 255, 255, 8);// 白でフェードアウト
```

<alert type="success">

**`animation-trail` のスケッチの背景をフェードアウトさせてみましょう！**  
できたら、スケッチ名： `animation-trail-fadeout` で保存して、コレクションに追加しましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/animation/trail-fadeout/"></live-demo>