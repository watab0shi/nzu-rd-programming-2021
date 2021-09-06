---
title: 繰り返し
description: ''
position: 20.05
category: JavaScript基礎
---

繰り返しを表現できる <strong>while文</strong> や <strong>for文</strong> を使うと冗長な繰り返し記述を完結に書くことができます。

## while文

<strong>while文</strong>は `()` の中の条件が `true` の間ずっと `{}` の中に記述した処理を繰り返します。

<alert type="warning">

`()` 内の条件がずっと `true` のままだと無限ループに陥ってしまい、ブラウザがクラッシュしてしまうので注意しましょう！

</alert>

```javascript
// 書き方
while (true または false) {
  // 繰り返したい処理
}

// サンプル
let x = 0;
while (x < 100) {// i が 100 より小さいとき
  // 繰り返したい処理
  x += 30;// i を更新
}
```

|ループ回数|xの値（更新前）|条件|
|:--|:--|:--|
|1|`0`|`true`|
|2|`30`|`true`|
|3|`60`|`true`|
|4|`90`|`true`|
|5|`120`|`false`|

## for文

while文と挙動は同じですが、繰り返し用の変数定義とそれを使った継続条件/変数更新のセットで繰り返しを定義します。  
for文の方が一般的によく使われます。

```javascript
// 書き方
for (変数定義; 継続条件; 変数更新) {
  // 繰り返したい処理
}

// サンプル
for (let i = 100; i < 400; i += 100) {
  // 繰り返したい処理
}
```

<alert>

一般的に `for` 文で定義する変数名には `i` を使用しますが、深い理由はありません。処理に応じてわかりやすい変数名をつけましょう。

</alert>

### 繰り返す回数を指定

上記のfor文の書き方だとコードを見ただけでは何回ループが回っているのかがわかりにくいため、繰り返す回数を明示する書き方に変更しましょう。

```javascript
for (let i = 0; i < 3; i++) {
  // 100, 200, 300 にするには i を使って計算する
  // 100 + i * 100
}
```

## 二重for文

```javascript
// 10 x 10 = 100 回繰り返す
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    // 繰り返したい処理
  }
}
```

## break

`while` 文や `for` 文のループが終了する前にループを抜けたいというケースが稀にあります。  
ループの中で `break` と書くとその時点で今いるループからすぐに抜け出すことができます。

```javascript
let i = 0;
while (i < 10) {
  console.log(i);
  if (i === 5) break;// i が 5 になったらループ終了
  i++;
}

for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i === 5) break;// i が 5 になったらループ終了
}
```

実行結果

```
0
1
2
3
4
```