let NUM = 12;
let ANGLE = 0;

function setup() {
  createCanvas(400, 400);

  ANGLE = TWO_PI / NUM;
}

function draw() {
  background(240);

  push();
  translate(width / 2, width / 2);

  noStroke();
  fill(0, 205, 129);
  for (let i = 0; i < NUM; i++) {
    push();
    rotate(i * ANGLE);
    circle(0, -180, 10);
    pop();
  }

  let hourAngle = map(hour() + minute() / 60 + second() / 3600, 0, 24, 0, TWO_PI * 2);
  let minuteAngle = map(minute() + second() / 60, 0, 60, 0, TWO_PI);
  let secondAngle = map(second(), 0, 60, 0, TWO_PI);

  // hour
  push();
  rotate(hourAngle);
  stroke(0, 205, 129);
  strokeWeight(8);
  line(0, 0, 0, -80);
  pop();

  // minute
  push();
  rotate(minuteAngle);
  stroke(0, 205, 129);
  strokeWeight(8);
  line(0, 0, 0, -150);
  pop();

  // minute
  push();
  rotate(secondAngle);
  stroke(0, 205, 129);
  strokeWeight(3);
  line(0, 0, 0, -150);
  pop();

  pop();
}