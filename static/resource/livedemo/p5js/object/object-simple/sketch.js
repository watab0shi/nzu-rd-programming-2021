let obj = {
  x: 200,
  y: 200,
  width: 200,
  height: 50
};

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(240);
  noStroke();
  fill(0, 205, 129);
  rect(obj.x, obj.y, obj.width, obj.height);
}