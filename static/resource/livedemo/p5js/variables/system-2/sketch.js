function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
}

function draw() {
  background(226, 205, 252);
  
  noStroke();
  fill(108, 5, 242);
  circle(0, 0, width / 2);
  circle(width, 0, width / 2);
  circle(width, height, width / 2);
  circle(0, height, width / 2);

  circle(width / 2, height / 2, width / 2);
}