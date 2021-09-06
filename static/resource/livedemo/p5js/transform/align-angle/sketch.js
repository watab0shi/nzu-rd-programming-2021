let NUM = 3;
let ANGLE = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);

  ANGLE = TWO_PI / NUM;
}

function draw() {
  background(240);

  translate(width / 2, width / 2);

  for (let i = 0; i < NUM; i++) {
    push();
    rotate(i * ANGLE);

    noStroke();
    fill(220, 100, 100);
    square(0, -100, 100);

    pop();
  }
}