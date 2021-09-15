let x = 200;
let y = 200;
let targetX = 200;
let targetY = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  x += (targetX - x) * 0.2;
  y += (targetY - y) * 0.2;

  background(100, 220, 220);
  noStroke();
  fill(255);
  circle(x, y, 10);
}

function mousePressed() {
  targetX = mouseX;
  targetY = mouseY;
}