---
title: 条件分岐
description: ''
position: 6.05
category: p5.js
---

## if文

もし◯◯が△△だったら、特定の処理を実行する。という `JavaScript` の構文です。

前頁のケースの場合、やりたいことを上の文章に倣って書くと  
「もし `x` が `画面幅` を超えたら、 `x` を `0` に戻す。」となります。

```javascript
// 書き方
if (true または false) {
  // 処理
}

// サンプル１（真偽値）
if (true) {
  // () の中が true のときだけこの中が処理される
}

// サンプル２（条件式）
if (x < 100) {// 実行時に x < 100 が評価された結果 true か false になります
  // x の値が 100 より小さいときだけこの中が処理される
}
```

### Boolean

`true` か `false` のどちらかしか状態を持たない**真偽値**のことを **Boolean** といいます。  
if文の `()` の中に `true` が入ると `{}` の中の処理が呼ばれ、`false` が入るとスキップされます。  
条件式を書くことによってプログラム実行時に `Boolean` を返すことができます。

ゲームなどで、あるイベントの条件を満たした時に「フラグが立った」という言い方をよくしますが、**「フラグ」は Boolean のこと**です。

```javascript
let flag1 = true;
let flag2 = false;
let flag3 = 10 < 100;// true
let flag4 = 10 > 100;// false

let x = 100;
let isLeft = x < 200;// x が 200 より小さいとき true それ以外は false
let isRight = x > 200;// x が 200 より大きいとき true それ以外は false
let isCenter = x === 200;// x が 200 のとき true それ以外は false

let isCenter = (x === 200);// 条件式を()で括るとコードが見やすくなります（意味は変わりません）
```

### 条件式

#### 比較演算子
`>` `>=` `<` `<=` `===` `!==`  
数値や文字列、真偽値などを比較するときに使う演算子です。  
比較演算子を使って書いた式を <strong>条件式</strong> といいます。

|比較演算子|条件式|意味|
|:--|:--|:--|
|`>`|`A > B`|A が B より大きいとき `true`|
|`>=`|`A >= B`|A が B 以上のとき `true`|
|`<`|`A < B`|A が B より小さいとき `true`|
|`<=`|`A <= B`|A が B 以下のとき `true`|
|`===`|`A === B`|A が B と等しいとき `true`|
|`!==`|`A !== B`|A が B と等しくないとき `true`|

### if文を使ってループさせる

```javascript[sketch.js]
let x = 200;
let y = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  x += 0.5;

  // x がキャンバスの横幅を超えたらゼロに戻す
  if (x > 400) {
    x = 0;
  }

  background(220);
  noStroke();
  fill(0, 205, 129);
  circle(x, y, 100);
}
```

<live-demo src="/resource/livedemo/p5js/conditions/if/"></live-demo>

<alert type="success">

`y`の値も`x`同様にアニメーションさせ、円が斜めにループするようにしましょう！

</alert>

## if else文

if文は指定した条件に一致したときのみ中の処理を行うものでしたが、一致していない時に別の処理をさせたい場合もあります。  
そんなときは <strong>if else文</strong> を使います。

```javascript
// 書き方
if (true または false) {
  // 条件が true のときの処理
} else {
  // 条件が false のときの処理
}

// サンプル
if (x < 100) {
  // x が 100 より小さいとき
} else {
  // それ以外のとき（x が 100 以上のとき）
}
```

<alert type="success">

`if else`文を使って円がキャンバスの左半分にあるときと、右半分にある時で色を変えてみましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/conditions/if-else/"></live-demo>

## else if 文

if else 文を使えばひとつの条件に対して `true` / `false` の時の処理を割り当てることができました。  
<strong>else if 文</strong> を使用すると、if文の条件に一致しなかったパターンの中でさらに条件分岐を行うことができます。  
else if 文はif文の後ろにいくつでも追加することができます。

```javascript
// 書き方
if (条件1) {
  // 条件1が true のとき
} else if (条件2) {
  // 条件1が false で、条件2が true のとき
} else {
  // それ以外
}

// サンプル
if (x < 100) {
  // x が 100 より小さいとき
} else if (x < 200) {
  // x が 100 以上で 200 より小さいとき
} else {
  // それ以外
}
```

<alert type="success">

`else if`文を使って`x`の移動に応じて円の色が3色以上に変化するようにしてみましょう！

</alert>

<live-demo src="/resource/livedemo/p5js/conditions/if-else-if/"></live-demo>