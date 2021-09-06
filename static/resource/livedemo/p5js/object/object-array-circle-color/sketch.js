let NUM = 30;
let data = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 100);

  for (let i = 0; i < NUM; i++) {
    let r_ = random(10, 30);
    data.push({
      x:random(r_, width - r_),
      y:random(r_, height - r_),
      vx:random(-3, 3),
      vy:random(-3, 3),
      r:r_,
      color: color(random(100), 30, 100)
    });
  }
}

function draw() {
  background(240);
  noStroke();
  
  for (let i = 0; i < NUM; i++) {
    // 位置を更新
    data[i].x += data[i].vx;
    data[i].y += data[i].vy;
  
    // xが端にきたらx方向の移動の向きを反転
    if (data[i].x < data[i].r) {
      data[i].vx *= -1;
      data[i].x = data[i].r;
    }
    if (data[i].x > width - data[i].r) {
      data[i].vx *= -1;
      data[i].x = width - data[i].r;
    }
    // yが端にきたらy方向の移動の向きを反転
    if (data[i].y < data[i].r) {
      data[i].vy *= -1;
      data[i].y = data[i].r;
    }
    if (data[i].y > height - data[i].r) {
      data[i].vy *= -1;
      data[i].y = height - data[i].r;
    }

    fill(data[i].color);
    circle(data[i].x, data[i].y, data[i].r * 2);
  }
}