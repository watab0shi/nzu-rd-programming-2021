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
  fill(244, 228, 9);
  circle(x, y, 100);
}