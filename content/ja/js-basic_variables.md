---
title: 変数
description: ''
position: 20.03
category: JavaScript基礎
---

```javascript
// 書き方
let 変数名;// 変数定義
変数名 = 値;// 代入
let 変数名 = 値;// 変数定義 & 代入

// サンプル
let num;// 変数定義
num = 123;// 代入
let num = 123;// 変数定義 & 代入
```

<alert type="warning">

変数に代入をせず定義のみ行なった場合、その時点では変数の中身が未定義（`undefined`）になり、バグの原因になったりします。  
変数定義と同時に代入できるときはしましょう。

</alert>

## 変数の更新

### 加算

```javascript
変数名 = 変数名 + 1;// 1 を足す
変数名 += 1;// 1 を足す
```

#### インクリメント
変数に `1` を足すときのみ使える省略記法です。

```javascript
変数名++;// 1 を足す
```

### 減算

```javascript
変数名 = 変数名 - 1;// 1 を引く
変数名 -= 1;// 1 を引く
```

#### デクリメント

変数から `1` を引くときのみ使える省略記法です。

```javascript
変数名--;// 1 を引く
```

## データ型（プリミティブ型）

### 数値（Number）

演算子 `+` `-` `*` `/` を用いることで四則演算が可能です。  
掛ける `×` と 割る `÷` はそれぞれ `*` と `/` になるので注意しましょう。  
`()` を用いることで計算順序の制御も可能です。

||記号|演算子|
|:--|:--|:--|
|足す|`+`|`+`|
|引く|`-`|`-`|
|掛ける|`×`|`*`|
|割る|`÷`|`/`|

```javascript
console.log(1);// 1
console.log(1.234);// 1.234
console.log(-5.678);// -5.678
console.log(1 + 2);// 3
console.log(2 - 3);// -1
console.log(3 * 4);// 12
console.log(4 / 5);// 0.8

let num = (1 + 2) * 3;
console.log(num);// 9
```

### 文字列（String）

シングルクォーテーション `''` またはダブルクォーテーション `""` で囲った中身はプログラム上で <strong>文字列</strong> として扱われます。（絵文字も使えます）  
`+` 演算子を使うことで文字列同士の連結が可能です。

```javascript
console.log('moji');// moji
console.log("文字");// 文字

let moji = 'あ' + 'い' + 'う';
console.log(moji);// あいう
```

### 真偽値（Boolean）

`true` か `false` のどちらかしか状態を持たない真偽値のことを <strong>Boolean</strong> といいます。  
比較演算子を使った条件式が実行されたときにBooleanの値が返ってきます。

```javascript
console.log(true);// true
console.log(false);// false
console.log(1 < 10);// true
console.log(11 < 10);// false
console.log('A' === 'A');// true

let isAB = 'A' === 'B';
console.log(isAB);// false
```