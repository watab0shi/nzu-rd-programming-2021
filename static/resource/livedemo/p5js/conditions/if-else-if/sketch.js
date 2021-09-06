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

  if (x < 100) {// ~ 99
    fill(205, 129, 129);// 赤
  } else if (x < 200) {// 100 ~ 199
    fill(129, 205, 129);// 緑
  } else if (x < 300) {// 200 ~ 299
    fill(129, 205, 129);// 緑
  } else {// それ以外
    fill(205, 205, 129);// 黄
  }

  circle(x, y, 100);
}