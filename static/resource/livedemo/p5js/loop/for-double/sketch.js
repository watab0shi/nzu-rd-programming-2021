let spacing = 40;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  noStroke();

  for (let y = 0; y < 11; ++y) {
    for (let x = 0; x < 11; ++x) {
      fill(x * 25.5, y * 25.5, 200);
      circle(x * spacing, y * spacing, (x + y) * 3);
    }
  }
}