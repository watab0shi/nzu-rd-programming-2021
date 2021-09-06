let obj = {
  x: 200,
  y: 200,
  width: 200,
  height: 50,
  color: {
    r: 0,
    g: 129,
    b: 205
  }
};

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(240);
  noStroke();
  fill(obj.color.r, obj.color.g, obj.color.b);
  rect(obj.x, obj.y, obj.width, obj.height);
}