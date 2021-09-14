let radius = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  radius = map(noise(frameCount * 0.01), 0, 1, 10, 300);

  background(232, 240, 254);
  noStroke();
  fill(24, 100, 240);
  circle(width / 2, height / 2, radius);
}