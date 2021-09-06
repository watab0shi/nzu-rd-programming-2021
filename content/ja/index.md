---
title: プログラミング基礎
description: ''
position: 1.0
category: 'はじめに'
---

## 演習内容

<div class="flex justify-around items-center">
  <img src="/resource/image/common_logo-js.svg" width="128" height="128" alt="JavaScriptロゴ"/>
  <img src="/resource/image/common_logo-p5js.svg" width="128" height="58" alt="p5.jsロゴ"/>
</div>

<strong>JavaScript</strong>（じゃばすくりぷと）（略称：JS じぇーえす）の基礎を学びながら、そのライブラリである<strong>p5.js</strong>（ぴーふぁいぶじぇーえす）を使用して<strong>ジェネラティブアート / インタラクティブアートの制作</strong>を行います。

## Javascriptとは

<nuxt-link to="/js-basic_about">JavaScript基礎 - JavaScriptについて</nuxt-link>を参照

## この資料の見方

それぞれ以下のように表示されます。

### プログラム

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(frameCount % 256);
}
```

### 実行結果

<live-demo src="/resource/livedemo/intro/"></live-demo>

### 補足情報

<alert>

補足情報は青色で表示されます。

</alert>

### 注意事項

<alert type="warning">

注意すべき点はオレンジ色で表示されます。

</alert>

### エラー

<alert type="danger">

エラーは赤色で表示されます。  
例）`Uncaught SyntaxError: Unexpected token ';' (sketch: line 6)`

</alert>

### 作業箇所

<alert type="success">

みなさんへの作業指示は緑色で表示されます。  
例）○○○を使ったコードを書いてみましょう！

</alert>

### カラーテーマ

<div class="flex items-center">
  <p>このボタンでページのカラーテーマを変更できます：</p>
  <app-color-switcher></app-color-switcher>
</div>

ライトモード / ダークモード の好きなほうを使ってください。  
モード切り替えボタンは全てのページの最下部の右側にあります。