let x = 200;
let y = 200;

function setup() {
  createCanvas(400, 400);

  x = random(0, width);
  y = random(0, height);
}

function draw() {
  background(24, 100, 240);
  noStroke();
  fill(232, 240, 254);
  circle(x, y, 100);
}