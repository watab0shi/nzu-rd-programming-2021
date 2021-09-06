function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
}

function draw() {
  background(240);

  translate(width / 2, height / 2);

  let sx = map(mouseX, 0, width, 1, 2);
  let sy = map(mouseY, 0, height, 1, 2);
  scale(sx, sy);

  noStroke();
  fill(220, 100, 100);
  square(0, 0, 100);
}