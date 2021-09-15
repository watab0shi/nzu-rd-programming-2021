let x = 200;
let y = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  x += (mouseX - x) * 0.2;
  y += (mouseY - y) * 0.2;

  background(100, 220, 220);
  noStroke();
  fill(255);
  circle(x, y, 10);
}