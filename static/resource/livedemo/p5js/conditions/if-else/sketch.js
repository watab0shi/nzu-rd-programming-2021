let x = 200;
let y = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  x += 0.5;

  // x がキャンバスの横幅を超えたらゼロに戻す
  if (x > 400) {
    x = 0;
  }

  background(220);
  noStroke();

  if (x < 200) {// x が左半分にいるとき
    fill(205, 129, 129);// 赤
  } else {// それ以外
    fill(0, 205, 129);// 緑
  }

  circle(x, y, 100);
}