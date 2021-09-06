---
title: JavaScriptについて
description: ''
position: 20.00
category: JavaScript基礎
---

## JavaScriptの役割

<div class="flex justify-around">
  <img src="/resource/image/common_logo-html5-light.svg" class="light-img" width="128" height="128" alt="HTML5ロゴ"/>
  <img src="/resource/image/common_logo-html5-dark.svg" class="dark-img" width="128" height="128" alt="HTML5ロゴ"/>
  <img src="/resource/image/common_logo-css3-light.svg" class="light-img" width="128" height="128" alt="CSS3ロゴ"/>
  <img src="/resource/image/common_logo-css3-dark.svg" class="dark-img" width="128" height="128" alt="CSS3ロゴ"/>
  <img src="/resource/image/common_logo-js.svg" width="128" height="128" alt="JavaScriptロゴ"/>
</div>

JavaScriptはWebブラウザー上で動作するプログラミング言語です。  
Webページは `HTML` `CSS` `JavaScript` の3つの言語によって構成されています。それぞれの言語の役割は以下です。


|言語|役割|例|
|:--|:--|:--|
|HTML|文書構造|文中の<strong>どこが見出し/段落なのか</strong>|
|CSS|見た目|見出しの<strong>色/文字サイズ/幅/高さ</strong>など|
|<strong>JavaScript</strong>|<strong>動作</strong>|インタラクションや要素の追加/削除など<br><strong>ページ表示後の動作</strong>|

### HTMLのみ

#### ソースコード
```html[index.html]
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NZU RD Programming 2021</title>
</head>
<body>
  <h1 class="hdg-1">NZU RD Programming 2021</h1>
</body>
</html>
```

<live-demo src="/resource/livedemo/js-about/html/"></live-demo>

「NZU RD Programming 2021」という見出しテキストを設置しただけの状態です。  
HTMLのみの場合、表示しているブラウザのデフォルトのスタイルが適用されます。

### CSSでスタイルを追加

#### ソースコード

```html[index.html]
<head>
  ...
  <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css">
  <link rel="stylesheet" href="./style.css">
</head>
```

```css[style.css]
body {
  background-color: #dddddd;
}
.hdg-1 {
  font-size: 50px;
}
```

<live-demo src="/resource/livedemo/js-about/html-css/"></live-demo>

CSSでスタイルを追加すると、ブラウザのデフォルトスタイルを上書きして見た目をカスタマイズできます。  
`ress.min.css`はブラウザごとに異なるデフォルトスタイルの差異をなくすためのものです。  
ここでは背景を薄いグレーにして見出しのフォントサイズを`50px`にしています。

### JavaScriptで動作を追加

#### ソースコード

```html[index.html]
<body>
  ...
  <script src="./script.js"></script>
</body>
```

```css[style.css]
...
.text-green {
  color: #00CD81;
}
```

```javascript[script.js]
let element = document.querySelector('.hdg-1');
element.onclick = function() {
  element.classList.toggle('text-green');
};
```

見出しをクリック

<live-demo src="/resource/livedemo/js-about/html-css-js/"></live-demo>

JavaScriptを使用すると、ページ表示後の動作を定義できます。  
ここでは見出しをクリックしたときにh1要素のクラスを付け外しして、文字色が緑と黒に切り替わるようにしています。

## JavaとJavaScript

<div class="flex items-center justify-around text-center">
  <img src="/resource/image/common_logo-java.svg" width="128" height="128" alt="Javaロゴ"/>
  <span class="text-6xl">≠</span>
  <img src="/resource/image/common_logo-js.svg" width="128" height="128" alt="JavaScriptロゴ"/>
</div>

JavaScriptと名前のよく似た「Java」というプログラミング言語も存在しますが、<strong>「Java」と「JavaScript」は全く別物</strong>です！メロンとメロンパンくらい違います！  

混乱を避けるため<strong>略称は「Java」ではなく「JS」</strong>と呼んでください。

## JavaScriptの種類

JavaScriptについて検索すると「<strong>ECMAScript（ES）</strong>」や「<strong>TypeScript（TS）</strong>」といったワードを含む記事がヒットします。

<strong>「ECMAScript」とはJavaScriptの文法を定める仕様の名称</strong>で、様々なバージョンが存在します。  
ですので、<strong>JavaScriptとECMAScriptは同じもの</strong>という認識で構いません。
ECMAScriptのバージョンによって文法が少しずつ異なりますが、本演習では2021年現在のモダンブラウザで標準的に動作が保証されている<strong>「ECMAScript 2015（ES 6）」の仕様に則って進めていきます。</strong>

一方「TypeScript」はコンパイルすることでWebブラウザ上で動作するJavaScriptに変換する言語です。（そのままではブラウザで動作しません）  
JavaScriptと似た別の言語と思っておいてください。