---
title: クラス
description: ''
position: 6.14
category: p5.js
---


クラスを使うと、オブジェクトだけではできなかった関数を含めた構造化が可能になります。


## クラスの書き方

```javascript
// 書き方
class クラス名 {
  constructor(引数1, 引数2, ...) {
    this.プロパティ名 = 値;
  }

  関数名() {// function いらない
  }
}


// クラスの定義（これだけでは何も起きない）
class Animal {
  constructor(name) {
    // コンストラクタ
    this.name = name;// this.プロパティ名 = 値 このクラスので（オブジェクトと同じ）
    this.age = 0;
  }

  say(message) {
    console.log(this.name + ' < ' + message);
  }

  addAge() {
    this.age++;// 加齢
  }
}

// クラスの利用
let cat = new Animal('cat');// コンストラクタを new することで新しいCatクラスのインスタンス（実体）を作る
cat.say('Hello');// cat < Hello

// 変数名.プロパティ名 で値を取得できる（オブジェクトと同じ）
console.log(cat.name);// cat
console.log(cat.age);// 0

cat.addAge();// cat内部のageを加算
console.log(cat.age);// 1
```

### コンストラクタ

クラス定義内の `constructor` で定義している関数のことをコンストラクタといい、 `new クラス名()` と書いた時に呼ばれます。

### メンバ変数

クラス定義内で持っているプロパティをメンバ変数といいます。  
↑の例では `name` と `age` がメンバ変数にあたります。

### メンバ関数

クラス定義内で持っている関数をメンバ関数といいます。  
↑の例では `say` と `addAge` がメンバ関数にあたります。


## p5.js におけるクラス定義

```javascript

class CustomCircle {
  constructor() {
  }

  setup() {
  }

  draw() {
  }
}
```