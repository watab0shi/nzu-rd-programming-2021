let x = 200;
let y = 200;
let diameter = 150;
let red = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  red += 0.2;

  background(220);
  noStroke();
  fill(red, 0, 0);
  circle(x, y, diameter);
}