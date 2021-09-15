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

  if (x < 100) {// ~ 99
    fill(244, 228, 9);
  } else if (x < 200) {// 100 ~ 199
    fill(238, 186, 11);
  } else if (x < 300) {// 200 ~ 299
    fill(195, 111, 9);
  } else {// それ以外
    fill(166, 60, 6);
  }

  circle(x, y, 100);
}