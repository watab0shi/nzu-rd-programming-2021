---
title: 処理の流れ
description: ''
position: 6.02
category: p5.js
---

新規にスケッチを開くと、デフォルトで以下のコードが書かれた状態になっています。  
最も簡単なこのコードから説明していきます。

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
```

<alert>

基本的にプログラムは上から順番に実行されます。

</alert>

<alert type="success">

プログラム内の `400` や `220` の数値を変えて実行し、実行結果のどこが変化するか試してみましょう！

</alert>

## コメント

プログラムの実行に影響しないメモを残すことができます。  
`//` 以降の改行までの文字はコメント扱いになります。  
複数行のコメントを書く場合は、`/*` `*/` でコメントを挟みます。

またコメントの仕様を利用して、一時的に不要なコードをコメントにすることで実行させないようにすることもできます。これを<strong>コメントアウト</strong>といいます。

```javascript
// 一行のコメント

/*
複数行の
コメント
*/

// background(0); コメントアウト
```

<alert type="success">

`createCanvas(400, 400)`と`background(220)`の説明をコメントで書いてみましょう！

</alert>

## 関数定義

関数を定義するときの書き方です。

```javascript
// 書き方１
function 関数名(引数１, 引数２, ...) {
  // なにか処理
  return 戻り値;// 計算結果や処理後のデータなどを実行元に戻す
}

// 書き方２
// 引数 戻り値 がない(省略された) 関数
function 関数名() {
  // なにか処理
}

// サンプル
// 個数に応じてりんごの合計値段を返す関数定義
function getApplePrice(num) {
  return 100 * num;
}
```

`function setup() {}` と `function draw() {}` は関数定義です。  

処理のまとまりに名前と引数（入力）をつけたものなので、関数定義だけでは何も起きません。

自分で定義する関数の`()`の中に入る引数は用途に応じて増減や省略が可能です。

関数内で `return 戻り値;` とすることで、関数内で行った計算の結果や処理後のデータなど実行元に戻すことができます。  
`return` 以降の処理は実行されません。  
処理のみ行いたい場合は `return` は省略できます。

### 関数実行

定義された関数を実行する際の書き方です。  
実行することではじめて関数内の処理が動作します。

```javascript
// 書き方
関数名(引数);

// サンプル
getApplePrice(2);// 200
```

|コード|関数名|引数|
|:--|:--|:--|
|`createCanvas(400, 400)`|`createCanvas`|`400` `400`|
|`background(220)`|`background`|`220`|

### 行末のセミコロン
実行する行の終わりには、「次の処理へいくよ」の合図として改行の前にセミコロン `;` をつけます。

<alert>

実を言うとJavaScriptでは、<strong>行末のセミコロンはなくても動作します。</strong>  
セミコロンを省略した場合、改行位置やコードの次に来る文字からブラウザが自動で解釈してくれます。  

</alert>

<alert type="warning">

<strong>セミコロン必要派か不要派かは職業プログラマーでも意見が分かれる</strong>くらいなので本当はどっちでも大丈夫なのですが、`p5.js`のコードはセミコロンありで書かれているため、<strong>本演習ではセミコロンありを採用しています。</strong>  
行末にセミコロンがなかったからといって減点したりはしませんので安心してください！

</alert>

## setup関数

スケッチの初期化をするところです。  
ページ表示時に `p5.js` 側で一度だけ実行されます。

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}
```

`createCanvas(400, 400);` でHTMLに `400px x 400px` の `canvas` 要素を追加しています。

参照：[createCanvas() reference | p5.js](https://p5js.org/reference/#/p5/createCanvas)

### canvas要素とは

実行結果の背景色が付いている上で `右クリック > 検証` して開発者ツール（DevTools）で要素を確認すると、以下のような`canvas`要素が生成されていることがわかります。

```html
<canvas id="defaultCanvas0" class="p5Canvas" width="400" height="400" style="width: 400px; height: 400px;"></canvas>
```

`canvas` 要素はWebページ上でグラフィックを描画するための要素です。

<alert>

ライブラリ（ `p5.js` ） を使わなくても `JavaScript` から直接 `canvas` 要素にグラフィックを描画することは可能ですが、複雑な設定が多くコードが長くなるため、`p5.js` ではそれらを簡単に扱えるようにいいかんじに統合してくれています。

</alert>

## draw関数

描画処理を書くところです。  
`p5.js` 側で `setup()` が実行されたあと、プログラムを停止するまで毎秒約60回実行されます。  
グラフィックを描画する関数に渡す数値を実行中に動的に変化させることでアニメーションさせることができます。

```javascript[sketch.js]
function draw() {
  background(220);
}
```

`background(220);` で `canvas` の背景を指定した色（この場合明るいグレー）で塗りつぶします。

### background関数

`background` 関数はその名の通り背景の色を指定する関数です。  
色の指定は `0` ~ `255` までの数値で行います。

引数の渡し方のパターンはたくさんありますが、ここでは `0` ~ `255` の数値を渡して色を指定する２つのパターンを紹介します。

```javascript
background(220);
```

引数に１つの数値を渡した場合、グレースケールの指定になります。  
`0`のときは黒、`255`のときは白になります。

```javascript
background(0, 205, 129);
```

引数に３つの数値を渡した場合、<strong>RGB</strong> での色指定になります。

参照：[background() reference | p5.js](https://p5js.org/reference/#/p5/background)

<alert type="success">

スケッチの `background` 関数をグレースケール指定から<strong> RGB 指定にして、好きな色に変えてみましょう！</strong>  
<small>
「`0` ~ `255` がわかりにくい！」という方は、Googleで「カラーピッカー」と検索してみてください。  
推しカラーにしてみるのもいいかも！
</small>

</alert>

<alert type="success">

RGB 指定にできたら、<strong>スケッチの名前を「`background-RGB`」に変更して保存</strong>しましょう！

</alert>

<alert type="success">

保存したスケッチを<strong>今日の授業用のコレクションに追加しましょう！</strong>  
追加方法（<nuxt-link to="/p5js_editor#自分のスケッチ一覧">p5js_editor#自分のスケッチ一覧</nuxt-link>）

</alert>

<alert>

なぜ RGB が `0` ~ `255` なのかは
<nuxt-link to="/web-basic_color">Web基礎知識 - 色について</nuxt-link>
を参照

</alert>

## フロー図
<img src="/resource/image/p5js_flow.png" alt="フロー図"/>

```javascript[sketch.js]
// 初期化
function setup() {
  createCanvas(400, 400);// タテヨコ 400px の canvas を作成
}

// 描画ループ
function draw() {
  background(220);// 背景をグレーに塗る
  // background(200); コメントアウト
}
```

<alert>

コードをあとで見返したときや、他のひとが見た時のことを考えて、なるべく簡潔でわかりやすいコメントを残すようにしましょう

</alert>
