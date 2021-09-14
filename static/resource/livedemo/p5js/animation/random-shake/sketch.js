let x = 200;
let y = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  x = width / 2 + random(-5, 5);
  y = height / 2 + random(-5, 5);

  background(24, 100, 240);
  noStroke();
  fill(232, 240, 254);
  circle(x, y, 100);
}