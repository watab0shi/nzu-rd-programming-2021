let NUM = 3;
let x = [];
let y = [];
let vx = [];
let vy = [];
let r = [];

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < NUM; i++) {
    let r_ = random(10, 100);
    r.push(r_);
    x.push(random(r_, width - r_));
    y.push(random(r_, height - r_));
    vx.push(random(-3, 3));
    vy.push(random(-3, 3));
  }
}

function draw() {
  background(240);
  noStroke();
  fill(100, 220, 220);
  
  for (let i = 0; i < NUM; i++) {
    // 位置を更新
    x[i] += vx[i];
    y[i] += vy[i];
  
    // xが端にきたらx方向の移動の向きを反転
    if (x[i] < r[i]) {
      vx[i] *= -1;
      x[i] = r[i];
    }
    if (x[i] > width - r[i]) {
      vx[i] *= -1;
      x[i] = width - r[i];
    }
    // yが端にきたらy方向の移動の向きを反転
    if (y[i] < r[i]) {
      vy[i] *= -1;
      y[i] = r[i];
    }
    if (y[i] > height - r[i]) {
      vy[i] *= -1;
      y[i] = height - r[i];
    }
  
    circle(x[i], y[i], r[i] * 2);
  }
}