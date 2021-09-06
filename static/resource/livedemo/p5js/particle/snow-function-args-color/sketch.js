let NUM = 6;

function setup() {
  createCanvas(400, 400);
}

function drawSnow01(x, y, angle, radius, col) {
  strokeWeight(15);
  stroke(col);

  push();
  {
    translate(x, y);
    rotate(angle);
    scale(radius / 100);

    for (let i = 0; i < NUM; i++) {
      push();
      {
        rotate(i * TWO_PI / NUM);
        line(0, 0, 0, -100);
        line(0, 30, 30, 60);
        line(0, 30, -30, 60);
      }
      pop();
    }
  }
  pop();
}

function draw() {
  background(240);

  let sec = millis() / 1000;
  drawSnow01(mouseX, mouseY, sec * 0.2, 50, color(150, 180, 255));// 引数から色を指定
}