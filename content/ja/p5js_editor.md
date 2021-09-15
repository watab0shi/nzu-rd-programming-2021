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

新規作成した場合はランダムな英単語で命名されるため、**保存する際にスケッチの内容に応じて名前をつけましょう。**  
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

### アップロード

画像や音声など、スケッチ内で使用したい素材は **Sketch Files** の右にある **▼** をクリックして出るメニューの **Upload file** からアップロードします。

<img src="/resource/image/p5js_editor_files-upload.png" alt="p5.js Editor ファイル アップロード"/>

「**Drop files here or click to use file browser**」のところにファイルを**ドラッグ & ドロップ**、または**クリックしてファイルを選択。**

<img src="/resource/image/p5js_editor_files-upload-drop.png" alt="p5.js Editor ファイル アップロード"/>

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

ユーザー名はURLの一部として公開されるので、Googleアカウントでログインしたデフォルト設定のままだと**第三者がメールアドレスを推測できてしまうのを防ぐため**にユーザー名を変更します。

</alert>

<alert type="warning">

**教員がみなさんのスケッチを確認しやすくするため**でもあります。  
ユーザー名を学籍番号に変えていないと**成績採点ができないので、必ず行ってください！**

</alert>

## 新規スケッチ

**メニュー > File > New** をクリック でスケッチを新規作成できます。

<img src="/resource/image/p5js_editor_new.png" alt="新規スケッチ"/>

## 保存

**メニュー > File > Save** をクリック または、`Ctrl + S`　でスケッチを保存できます。

<img src="/resource/image/p5js_editor_save.png" alt="保存"/>

<alert type="success">

スケッチ名を `test` に変更して、**スケッチを保存してみましょう！**  
スケッチ名の右側に `by ユーザー名` と表示されていればOK！

</alert>

## 複製

**メニュー > File > Duplicate** をクリック でスケッチを複製できます。  
保存されたスケッチを元に、新たに別の名前でスケッチを作成したいときに便利です。

<img src="/resource/image/p5js_editor_duplicate.png" alt="複製"/>

## スケッチ一覧

**メニュー > File > Open** をクリック または、**右上のアカウント名 > My Sketches** で保存したスケッチの一覧ページに遷移します。

<img src="/resource/image/p5js_editor_my-sketches.png" alt="スケッチ一覧"/>

また、リストの右端にある矢印から「スケッチ名変更」「ファイル一式ダウンロード」「複製」「コレクションに追加」「削除」ができます。

<img src="/resource/image/p5js_editor_my-sketches-menu.png" alt="スケッチ一覧 メニュー"/>

## コレクション一覧

**右上のアカウント名 > My Collections** をクリック でコレクションの一覧ページに遷移します。

<img src="/resource/image/p5js_editor_my-collections.png" alt="コレクション一覧"/>

### コレクションを作成

コレクションページ右上の **Create Collection** をクリックするとコレクションを作成できます。

<img src="/resource/image/p5js_editor_my-collections-create-1.png" alt="コレクション作成"/>

<alert type="success">

授業日ごとに毎回コレクションを作成して、その日作ったスケッチをコレクションに追加していきます。  
**`NZU RD Programming 2021 4桁日付`の名前でコレクションを作成してみましょう！**  
例）９月９日の場合 → `NZU RD Programming 2021 0909`

</alert>

<img src="/resource/image/p5js_editor_my-collections-create-2.png" alt="コレクション作成 リネーム"/>

### コレクションにスケッチを追加

コレクションページ左上の **Add Sketch** をクリックするとコレクションにスケッチを追加できます。

<img src="/resource/image/p5js_editor_my-collections-add-1.png" alt="コレクション追加 ボタン"/>

<img src="/resource/image/p5js_editor_my-collections-add-2.png" alt="コレクション追加 スケッチを選択"/>

<img src="/resource/image/p5js_editor_my-collections-add-3.png" alt="コレクション追加 スケッチ追加後"/>

## 毎回やること

以下工程はスケッチを作るたびに毎回行います。癖をつけておきましょう。

[コレクションを作成](#コレクションを作成)  
[新規スケッチ](#新規スケッチ)  
[保存](#保存)  
[スケッチ名の編集](#スケッチ名)  
[コレクションにスケッチを追加](#コレクションにスケッチを追加)
