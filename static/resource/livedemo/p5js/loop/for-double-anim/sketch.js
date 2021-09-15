let spacing = 40;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(3, 3, 26);
  stroke(255);

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      let step = width / 10;
      let x2 = x * step;
      let y2 = y * step;
      let size = map(sin(((x + y) * 0.1 + frameCount * 0.03)), -1, 1, 0, 50);
      fill(x * 25, y * 25, 255);
      rect(x2, y2, size, size);
    }
  }
}