let size = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  size = map(sin(frameCount * 0.025), -1, 1, width / 2, width);

  background(252, 234, 237);
  noStroke();
  fill(226, 44, 78);
  rect(width / 2, height / 2, size, size);
}