let x1 = 200;
let y1 = 200;
let x2 = 200;
let y2 = 200;
let x3 = 200;
let y3 = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  x1 += (mouseX - x1) * 0.2;
  y1 += (mouseY - y1) * 0.2;

  x2 += (mouseX - x2) * 0.15;
  y2 += (mouseY - y2) * 0.15;

  x3 += (mouseX - x3) * 0.1;
  y3 += (mouseY - y3) * 0.1;

  background(20, 44, 44);
  noStroke();

  fill(70, 154, 154);
  circle(x3, y3, 30);

  fill(100, 220, 220);
  circle(x2, y2, 20);

  fill(240, 252, 252);
  circle(x1, y1, 10);
}