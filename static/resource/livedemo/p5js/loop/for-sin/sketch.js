function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(249, 239, 231);
  stroke(193, 97, 12);

  for (let i = 0; i < 100; i++) {
    let x = i * 4;
    let y = 200 + sin(i * 0.1) * 100;
    line(x, 200, x, y);
  }
}