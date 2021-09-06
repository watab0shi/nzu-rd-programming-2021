function setup() {
  createCanvas(400, 400);
}

function draw() {
  // background(240);
  noStroke();
  fill(0, 8);
  rect(0, 0, width, height);

  let sec = millis() / 1000;
  let angle = sec;
  let r = 150;
  let x = width / 2 + cos(angle) * r;
  let y = height / 2 + sin(angle * 3) * r;

  noStroke();
  fill(0, 205, 129);
  circle(x, y, 5);
}