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

基本的にプログラムは**上から順番に実行されます。**

</alert>

<alert type="success">

プログラム内の `400` や `220` の**数値を変えて実行し、実行結果のどこが変化するか**試してみましょう！

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

`createCanvas(400, 400)`と`background(220)`の**説明をコメントで書いてみましょう！**  
できたら、スケッチ名：`comment` で保存して、コレクションに追加しましょう！

</alert>

## 関数（function）

<img src="/resource/image/p5js_flow_function.png" alt="function"/>

↑お寿司関数🍣

`function` は工場をイメージするとわかりやすいです。  
何かしらの入力をもらって、工場内で処理をして、結果を出力します。  
**※ 処理をまとめただけの、入力、出力がない関数もあります。**

### 関数定義（definition）

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

処理のまとまりに名前と入力（引数：`arguments`）と出力（戻り値：`return`）をつけたものなので**関数定義だけでは何も起きません。**  
工場を建てただけの状態です。

自分で定義する関数の`()`の中に入る引数は用途に応じて増減や省略が可能です。

関数内で `return 戻り値;` とすることで、関数内で行った計算の結果や処理後のデータなど実行元に戻すことができます。  
`return` 以降の処理は実行されません。  
処理のみ行いたい場合は `return` は省略できます。

#### 命名規則について

関数や変数（このあと出てきます）の名前は自由に決められますが、いくつかの制約があります。

半角英数 `abc...xyz` `ABC...XYZ` `012...789` と `_` （アンダーバー）が使用できますが、**先頭の文字は数字にはできません。**

関数や変数の働きを表す英単語をつけます。  
２語以上の英単語で命名する場合は、先頭小文字、２語目以降の先頭を大文字にする、**ローワーキャメルケース**で書くのが通例となっています。

<div class="flex justify-around items-center">
  <img class="w-2/4" src="/resource/image/p5js_flow_camelcase.png" alt="camelCase"/>
</div>

[キャメルケース - Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%AD%E3%83%A3%E3%83%A1%E3%83%AB%E3%82%B1%E3%83%BC%E3%82%B9)

### 関数実行（execution）

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

#### 行末のセミコロンについて
実行する行の終わりには、「次の処理へいくよ」の合図として改行の前にセミコロン `;` をつけます。

<alert>

実を言うとJavaScriptでは、**行末のセミコロンはなくても動作します。**  
セミコロンを省略した場合、改行位置やコードの次に来る文字からブラウザが自動で解釈してくれます。  

</alert>

<alert type="warning">

**セミコロン必要派か不要派かは職業プログラマーでも意見が分かれる**くらいなので本当はどっちでも大丈夫なのですが、`p5.js`のコードはセミコロンありで書かれているため、**本演習ではセミコロンありを採用しています。**  
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

「 `0` ~ `255` がわかりにくい！」という方は、Googleで「カラーピッカー」と検索してみてください。  
推しカラーにしてみるのもいいかも！

</small>

できたら、スケッチ名：`background-RGB` で保存して、コレクションに追加しましょう！

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

コードをあとで見返したときや、他のひとが見た時のことを考えて、なるべく**簡潔でわかりやすいコメントを残すようにしましょう！**

</alert>
