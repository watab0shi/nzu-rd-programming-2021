let NUM = 6;
let ANGLE = 0;

function setup() {
  createCanvas(400, 400);
  strokeWeight(5);

  ANGLE = TWO_PI / NUM;
}

function draw() {
  background(240);
  stroke(100, 220, 220);

  translate(width / 2, width / 2);

  let sec = millis() / 1000;
  rotate(sec * 0.2);

  for (let i = 0; i < NUM; i++) {
    push();
    rotate(i * ANGLE);
    line(0, 0, 0, -100);

    line(0, 0, 30, 60);
    line(0, 0, -30, 60);

    line(0, 90, 30, 60);
    line(0, 90, -30, 60);
    pop();
  }
}