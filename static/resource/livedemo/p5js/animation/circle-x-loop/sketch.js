let x = 200;
let y = 200;
let diameter = 150;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  x += 0.2;
  x = x % 400;

  background(220);
  noStroke();
  fill(0, 205, 129);
  circle(x, y, diameter);
}