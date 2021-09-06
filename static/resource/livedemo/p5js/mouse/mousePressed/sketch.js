let diameter = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100, 220, 220);

  noStroke();
  fill(255);
  circle(mouseX, mouseY, diameter);
}

function mousePressed() {
  diameter += 10;
}