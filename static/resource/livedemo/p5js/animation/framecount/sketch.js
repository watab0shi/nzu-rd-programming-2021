let h = 10;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51, 23, 0);
  noStroke();
  fill(255, 117, 0);
  rect(0, height / 2 - h / 2, frameCount % (width + 1), h);
}