---
title: ブロック / スコープ / インデント
description: ''
position: 20.06
category: JavaScript基礎
---

## ブロック

関数やfor文、if文などの `{` と `}` の間を <strong>ブロック</strong> といいます。

```javascript
// ブロックではない

function draw() {
  // ブロック
}

if (x < 100) {
  // ブロック
}

for (let i = 0; i < 5; i++) {
  // ブロック1
  for (let j = 0; j < 5; j++) {
    // ブロック2
  }
}
```

## スコープ

`let` 変数にはスコープと呼ばれる有効範囲があり、ブロック内で宣言した変数はそのブロックの外では使うことができません。  
また、変数の宣言前にその変数を使ってもエラーになります。

```javascript
let x = 123;

if (x > 100) {
  console.log(x, y);// Uncaught ReferenceError: Cannot access 'y' before initialization
  let y = 345;
  console.log(x, y);// 123 345
}

console.log(x, y);// Uncaught ReferenceError: y is not defined
```

## インデント

ブロックの `{` `}` の中の処理を書く時は <strong>インデント</strong>（字下げ）と呼ばれるスペースを空けることでブロックの階層や変数のスコープがひと目でわかりやすくなります。

プログラム的にはインデントはなくても動作はしますが、視認性やコーディング効率が下がるため、なるべく整えるようにしましょう。

```javascript
// 悪い例
function draw() {
if (x < 200) {
background(0);
 }
}

// 良い例
function draw() {
  // 1階層目なので2スペース
  if (x < 200) {
    // 2階層目なので4スペース
    background(0);
  }
}
```

<alert>

インデントは 2スペース / 4スペース / Tab の3通り書き方がありますが、本演習では 2スペース を採用しています。

</alert>

<alert>

p5.js Editor では `Shift + Tab` キーでコード整形（インデントや構文のスペースを自動修正する機能）が可能なので、インデントがおかしくなった時や保存する時に `Shift + Tab` する癖をつけましょう！

</alert>