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

  background(113, 0, 0);
  noStroke();

  if (x < 200) {// x が左半分にいるとき
    fill(244, 228, 9);
  } else {// それ以外
    fill(166, 60, 6);
  }

  circle(x, y, 100);
}