function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(202, 240, 248);

  rectMode(CENTER);

  noStroke();

  fill(144, 224, 239);
  rect(200, 200, 350, 350);

  fill(0, 180, 216);
  rect(200, 200, 250, 250);

  fill(0, 119, 182);
  rect(200, 200, 150, 150);

  fill(3, 4, 94);
  rect(200, 200, 50, 50);
}