let x = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  x = map(noise(frameCount * 0.01), 0, 1, 0, 400);
  y = map(noise(frameCount * 0.01 + 123.4567), 0, 1, 0, 400);

  background(232, 240, 254);
  noStroke();
  fill(24, 100, 240);
  circle(x, y, 20);
}