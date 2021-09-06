---
title: パスについて
description: ''
position: 30.1
category: Web基礎知識
---

`HTML` `CSS` `JS` から他のページやファイルを参照するには、参照したいページやファイルのパスを指定する必要があります。  
パスの指定には「絶対パス」「相対パス」「ルートパス」の3つの方法があります。

#### ディレクトリ構造

以下のディレクトリ構造を想定して説明していきます。

```
/
├── index.html
├── about
│    └── index.html
└── resource
      ├── css
      │    └── style.css
      └── images
            └── image.png
```

<alert type="warning">

以下の説明は `VSCode` の `Live Server` を使って `localhost:5500` にサーバーを立てている想定で書いてあります。

</alert>

## 絶対パス

プロトコル（`http:` or `https:`）から始まるパスを「絶対パス」といいます。

通常は自分のWebサイトから別のWebサイトへリンクする際に使います。

```html[index.html]
<!-- 絶対パスで image.png を指定 -->
<img src="http://localhost:5500/resource/images/image.png"/>

<!-- 絶対パスで /about/ を指定 -->
<a href="http://localhost:5500/about/">ABOUT</a>
```

```css[style.css]
/* 絶対パスで image.png を指定 */
background-image: url('http://localhost:5500/resource/images/image.png');
```

## 相対パス

絶対パス以外で、`/`から始まらないパスを「相対パス」といいます。  
パスを記述するファイルからみた、対象のファイルまでの相対的なパスを指定します。

通常はローカルファイルのHTMLを直接ブラウザで開いて確認するとき以外はあまり使いません。

|||
|:--|:--|
|`./`|カレントディレクトリ（このファイルがあるディレクトリ）を指します（省略可）|
|`../`|カレントディレクトリの一つ上のディレクトリを指します|
|`../../`|ふたつ以上上のディレクトリを指したい場合は`../`を繰り返します|

```html[index.html]
<!-- index.html からの相対パスで image.png を指定 -->
<img src="./resource/images/image.png"/>

<!-- 相対パスで /about/ を指定（./省略） -->
<a href="about/">ABOUT</a>
```

```css[style.css]
/* style.css からの相対パスで image.png を指定 */
background-image: url('../images/image.png');
```

## ルートパス

`/`から始まるパスを「ルートパス」といいます。

サーバールート（トップページの`index.html`があるディレクトリ）から目的のファイルまでのパスを指定します。
通常はファイルの指定やページのリンクなどはこのルートパスの書き方で記述します。

相対パスの場合パスを記述するファイルごとに書き方が変わってしまいますが、ルートパスの場合はどのファイルでも同じディレクトリからの記述になるため一般的によく使われます。

```html[index.html]
<!-- ルートパスで image.png を指定 -->
<img src="/resource/images/image.png"/>

<!-- ルートパスで about を指定（./省略） -->
<a href="/about/">ABOUT</a>
```

```css[style.css]
/* ルートパスで image.png を指定 */
background-image: url('/resource/images/image.png');
```

## 補足：URL用語

||||
|:--|:--|:--|
|URL|`http://localhost:5500/about/`|`https://www.google.com/`|
|プロトコル|`http:`|`https:`|
|ホスト|`localhost:5500`|`www.google.com`|
|ポート|`5500`<sup>*1</sup>|`443`<sup>*2</sup>|
|オリジン|`http://localhost:5500`|`https://www.google.com`|
|ルートパス|`/about/`|`/`|

<sup>*1</sup>：VSCodeのLiveServerは`5500`番から順にポートを開けていきます。

<sup>*2</sup>：一般的に`http`は`80`番、`https`は`443`番と決まっているため、URLのポート番号は省略されます。