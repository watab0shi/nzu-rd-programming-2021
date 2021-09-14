let x = 200;
let y = 200;
let r = 10;
let b = 0;
let s = 0;

function setup() {
  createCanvas(400, 400);
  background(232, 240, 254);
}

function draw() {
  x = map(noise(frameCount * 0.01), 0, 1, 0, 400);
  y = map(noise(frameCount * 0.01 + 123.4567), 0, 1, 0, 400);
  r = map(noise(frameCount * 0.01 + 456.789), 0, 1, 1, 100);
  b = map(noise(frameCount * 0.06 + 789.0123), 0, 1, 0, 255);
  s = map(noise(frameCount * 0.06 + 123.4567), 0, 1, 100, 255);

  stroke(s);
  fill(0, 0, b);
  circle(x, y, r);
}