let spacing = 40;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(249, 239, 231);
  stroke(255);

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      let size = width / 10;
      let x2 = x * size;
      let y2 = y * size;
      fill(x * 25, 0, 0);
      rect(x2, y2, size, size);
    }
  }
}