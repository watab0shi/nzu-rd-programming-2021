function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(249, 239, 231);
  stroke(193, 97, 12);

  for (let i = 0; i < 20; i++) {
    let x = 100 + i * 10;
    line(x, 180, x, 220);
  }
}