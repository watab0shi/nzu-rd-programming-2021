let x = 200;
let y = 200;
let vx = 1;
let vy = 1.5;
let r = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  noStroke();
  fill(100, 220, 220);
  
  // 位置を更新
  x += vx;
  y += vy;

  // xが端にきたらx方向の移動の向きを反転
  if (x < r) {
    vx *= -1;
    x = r;
  }
  if (x > width - r) {
    vx *= -1;
    x = width - r;
  }
  // yが端にきたらy方向の移動の向きを反転
  if (y < r) {
    vy *= -1;
    y = r;
  }
  if (y > height - r) {
    vy *= -1;
    y = height - r;
  }

  circle(x, y, r * 2);
}