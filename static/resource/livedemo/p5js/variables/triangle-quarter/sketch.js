let x = 100;
let y = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  noStroke();

  fill(141, 128, 84);
  triangle(0, 0, 400, 0, x, y);

  fill(233, 231, 207);
  triangle(400, 0, 400, 400, x, y);

  fill(208, 201, 107);
  triangle(400, 400, 0, 400, x, y);

  fill(211, 179, 62);
  triangle(0, 400, 0, 0, x, y);
}