function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  for (let x = 100; x < 400; x += 100) {
    line(x, 180, x, 220);
  }
}