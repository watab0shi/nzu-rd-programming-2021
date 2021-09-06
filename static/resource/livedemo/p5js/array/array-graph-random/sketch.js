let NUM = 10;
let data = [];
let step = 0;

function setup() {
  createCanvas(400, 400);
  step = width / NUM;
  for (let i = 0; i < NUM; ++i) {
    data.push(random(0, 400));
  }
}

function draw() {
  background(240);

  stroke(180);
  fill(180);
  for (let i = 0; i < 3; i++) {
    let y = (i + 1) * 100;
    line(0, height - y, width, height - y);
    text(y, 0, height - y - 5);
  }

  noStroke();
  fill(0, 205, 129);
  for (let i = 0; i < data.length; i++) {
    rect(i * step + 5, height, step - 10, -data[i]);
  }
}