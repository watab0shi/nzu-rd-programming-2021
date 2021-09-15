function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(249, 239, 231);
  stroke(249, 239, 231);
  fill(193, 97, 12);

  for (let i = 0; i < 10; i++) {
    let size = width / 10;
    let x = i * size;
    rect(x, height / 2 - size / 2, size, size);
  }
}