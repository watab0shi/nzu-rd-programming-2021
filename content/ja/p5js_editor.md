---
title: エディタの使い方
description: ''
position: 6.01
category: p5.js
---

<img src="/resource/image/p5js_editor_explain.png" alt="p5.js Editor の説明"/>

## コードエディタ

プログラムを書くところです。

## プレビュー

コード（プログラム）の実行結果が表示されます。

## 実行 / 停止 ボタン

再生ボタンを押すとプログラムを実行します。  
プログラム実行中に停止ボタンを押すとプログラムが停止します。

<alert>

右隣にある `Auto-refresh` にチェックを入れると、実行中にコードを編集してもリアルタイムにプレビューに反映されます。  
この機能は便利ですが、コードを書いている最中にエラーが出るので、最初のうちはオフにしておくのをおすすめします。

</alert>

## コンソール

自分で書いたコンソール出力のテキストがここに表示されます。  
また、プログラムにエラーがあった場合も表示されます。

## スケッチ名

このスケッチ（プログラム）の名前です。

新規作成した場合はランダムな英単語で命名されるため、保存する際にスケッチの内容に応じて名前をつけましょう。
クリックすると編集ができます。

## ファイル

コードエディタ左上の矢印をクリックするとこのスケッチを構成する `index.html` `style.css` `sketch.js` のファイルが確認できます。

<img src="/resource/image/p5js_editor_files.png" alt="p5.js Editor ファイル"/>

デフォルトで以下の `html` `css` `js` が記載されています。

```html[index.html]
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/addons/p5.sound.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />
  </head>
  <body>
    <script src="sketch.js"></script>
  </body>
</html>
```

`head` 内の `script` タグで読み込んでいるのが `p5.js` のライブラリ本体です。
`p5.sound.min.js` のほうは、サウンド機能を使うときのみ必要なものなので、サウンドを使用しない場合はなくても大丈夫です。

`body` の中の `script` タグで自分で書いた `sketch.js` を読み込んでいます。

```css[style.css]
html, body {
  margin: 0;
  padding: 0;
}
canvas {
  display: block;
}
```

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
```

## ログイン

p5.js Editor にログインするとスケッチを保存することができます。

<alert type="success">

Googleアカウントで `p5.js Editor` にログインしよう！

</alert>

<img src="/resource/image/p5js_editor_login.png" alt="Googleアカウントでログイン"/>

## ユーザー名を編集

<alert type="success">

ユーザー名を学籍番号に変更しよう！

</alert>

エディタ右上のアカウント名 > Settings をクリック。

<img src="/resource/image/p5js_editor_account-settings.png" alt="Googleアカウントでログイン"/>

ユーザー名はデフォルトでGoogleアカウントのユーザー名になっているため、学籍番号に変更して保存。

<img src="/resource/image/p5js_editor_edit-username.png" alt="ユーザー名を学籍番号に変更"/>

ユーザー名を学籍番号にするのは、以下の２つの理由からです。

<alert type="warning">

ユーザー名はURLの一部として公開されるので、Googleアカウントでログインしたデフォルト設定のままだと<strong>第三者がメールアドレスを推測できてしまうのを防ぐため</strong>にユーザー名を変更します。

</alert>

<alert type="warning">

教員がみなさんのスケッチを確認しやすくするためでもあります。  
ユーザー名を学籍番号に変えていないと<strong>成績採点ができないので、必ず行ってください！</strong>

</alert>

## 保存

`メニュー > File > Save` をクリック または、`Ctrl + S`　でスケッチを保存できます。

<img src="/resource/image/p5js_editor_save.png" alt="保存"/>

## 自分のスケッチ一覧

`メニュー > File > Open` をクリック または、`右上のアカウント名 > My Sketches` で保存したスケッチの一覧ページに遷移します。

<img src="/resource/image/p5js_editor_my-sketches.png" alt="スケッチ一覧"/>

また、リストの右端にある矢印から「スケッチ名変更」「ファイル一式ダウンロード」「複製」「コレクションに追加」「削除」ができます。

<img src="/resource/image/p5js_editor_my-sketches-menu.png" alt="スケッチ一覧 メニュー"/>

<alert>

`Collections` はスケッチのブックマークのようなものです。  
他の人が作ったスケッチも登録できるので、気に入ったスケッチがあったら `Collections` に追加していきましょう。

</alert>

<alert type="success">

授業日ごとに毎回コレクションを作成して、その日作ったスケッチをコレクションに追加していきます。  
`NZU RD Programming 2021 4桁日付`の名前でコレクションを作成してみましょう！
例）９月９日の場合 → `NZU RD Programming 2021 0909`

</alert>
