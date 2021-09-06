let NUM = 6;

function setup() {
  createCanvas(400, 400);
}

function drawSnow01(x, y) {
  strokeWeight(15);
  stroke(100, 220, 220);

  push();
  {
    translate(x, y);

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

  drawSnow01(mouseX, mouseY);
}