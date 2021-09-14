let h = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  h = sin(frameCount * 0.025) * height / 2;

  background(252, 234, 237);
  noStroke();
  fill(226, 44, 78);
  rect(0, height / 2, width, h);
}