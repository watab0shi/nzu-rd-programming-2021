let x = 200;
let y = 200;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(240);
  noStroke();
  fill(0, 205, 129);
  rect(x, y, 100, 100);
}

function keyPressed() {
  if (key === 'ArrowUp') {
    y -= 10;
    if (y < 0) {
      y = 400;
    }
  }
  if (key === 'ArrowDown') {
    y += 10;
    if (y > 400) {
      y = 0;
    }
  }
  if (key === 'ArrowLeft') {
    x -= 10;
    if (x < 0) {
      x = 400;
    }
  }
  if (key === 'ArrowRight') {
    x += 10;
    if (x > 400) {
      x = 0;
    }
  }
}