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

Webブラウザ上で動作するプログラミング言語である **JavaScript** の構文（書き方）やロジックの組み立て方を学びながら、そのライブラリである **p5.js** を使用して**グラフィックスプログラミング**の基礎を並行して学び、**ジェネラティブアート／インタラクティブアート**の制作を行います。

<alert type="success">

毎回この資料に沿って授業を進めていくので、**このページをブックマーク**しておきましょう！  

<small>
Google Chrome の場合：URLバー右側の☆マークをクリックするとブックマークに追加できます。
</small>

</alert>

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

↑ 右下の **↻** をクリックすると再度最初から実行します。

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

**みなさんへの作業指示は緑色で表示されます。**  
ほとんどが授業課題の指示です。  
例）○○○を使ったコードを書いてみましょう！

</alert>

### カラーテーマ

<div class="flex items-center">
  <p>このボタンでページのカラーテーマを変更できます：</p>
  <app-color-switcher></app-color-switcher>
</div>

ライトモード / ダークモード の好きなほうを使ってください。  
モード切り替えボタンは全てのページの最下部の右側にあります。