let x = 200;
let y = 200;
let size = 10;
let targetSize = 10;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100, 220, 220);

  if (mouseIsPressed) {
    targetSize = 400;
  } else {
    targetSize = 10;
  }

  x += (mouseX - x) * 0.2;
  y += (mouseY - y) * 0.2;
  size += (targetSize - size) * 0.2;

  noStroke();
  fill(255);
  circle(x, y, size);
}