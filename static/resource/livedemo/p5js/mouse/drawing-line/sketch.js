function setup() {
  createCanvas(400, 400);
  background(100, 220, 220);
}

function draw() {
  // background(100, 220, 220);

  stroke(255);
  strokeWeight(5);
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}
