let NUM = 6;

function setup() {
  createCanvas(400, 400);
}

function drawSnow01() {
  strokeWeight(15);
  stroke(100, 220, 220);

  translate(width / 2, width / 2);

  for (let i = 0; i < NUM; i++) {
    push();
    rotate(i * TWO_PI / NUM);
    line(0, 0, 0, -100);
    line(0, 30, 30, 60);
    line(0, 30, -30, 60);
    pop();
  }
}

function draw() {
  background(240);

  drawSnow01();
}