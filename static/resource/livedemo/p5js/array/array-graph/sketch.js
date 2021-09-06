let data = [100, 200, 370, 320, 150, 280, 340, 390, 60, 280];
let step = 0;

function setup() {
  createCanvas(400, 400);
  step = width / data.length;
}

function draw() {
  background(240);

  noStroke();
  fill(0, 205, 129);
  for (let i = 0; i < data.length; i++) {
    rect(i * step, height, step, -data[i]);
  }
}