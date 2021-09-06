let NUM = 3;
let x = [200, 200, 200];
let y = [200, 200, 200];
let vx = [1, 2, 3];
let vy = [1.5, 1, 0.5];
let r = [50, 50, 50];

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < NUM; i++) {
    vx[i] = random(-3, 3);// x の移動量
    vy[i] = random(-3, 3);// y の移動量
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