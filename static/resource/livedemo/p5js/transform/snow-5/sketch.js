let NUM = 6;
let ANGLE = 0;

function setup() {
  createCanvas(400, 400);
  strokeWeight(3);
  rectMode(CENTER);

  ANGLE = TWO_PI / NUM;
}

function draw() {
  background(240);

  push();
  translate(width / 2, width / 2);

  let sec = millis() / 1000;
  rotate(sec * 0.2);

  for (let i = 0; i < NUM; i++) {
    push();
    rotate(i * ANGLE);

    stroke(100, 220, 220);
    line(0, 0, 0, -90);

    line(0, 35, -20, 45);
    line(0, 35, 20, 45);

    line(0, 55, -30, 70);
    line(0, 55, 30, 70);

    line(0, 75, -10, 85);
    line(0, 75, 10, 85);

    pop();
  }
  pop();
}