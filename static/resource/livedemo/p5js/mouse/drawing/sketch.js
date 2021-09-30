function setup() {
  createCanvas(400, 400);
  background(100, 220, 220);
}

function draw() {
  // background(100, 220, 220);

  noStroke();
  fill(255);
  // stroke(255);
  // strokeWeight(5);
  if (mouseIsPressed) {
    circle(mouseX, mouseY, 10);
    // line(pmouseX, pmouseY, mouseX, mouseY);
  }
}
