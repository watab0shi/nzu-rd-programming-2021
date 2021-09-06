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
    line(-20, 35, 20, 35);
    line(-20, 55, 20, 55);
    line(-10, 70, 10, 70);

    noFill();
    translate(0, -100);
    rotate(QUARTER_PI);
    square(0, 0, 15);
    pop();
  }
  pop();
}