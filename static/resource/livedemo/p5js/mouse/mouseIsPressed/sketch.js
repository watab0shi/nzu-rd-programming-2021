function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(253, 239, 236);
  noStroke();
  fill(231, 97, 60);

  if (mouseIsPressed) {
    rect(width / 2, height / 2, 200, 200);
  } else {
    circle(width / 2, height / 2, 200);
  }
}