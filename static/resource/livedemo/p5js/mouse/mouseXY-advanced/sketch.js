function setup() {
  createCanvas(400, 400);
}

function draw() {
  let g = map(mouseX, 0, 400, 100, 255);
  let b = map(mouseY, 0, 400, 100, 255);
  background(100, g, b);

  let diameter = mouseX + mouseY;
  noStroke();
  fill(255);
  circle(mouseX, mouseY, diameter);
}