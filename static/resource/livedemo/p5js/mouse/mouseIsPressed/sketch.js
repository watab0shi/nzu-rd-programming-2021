function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (mouseIsPressed) {
    background(100, 220, 100);
  } else {
    background(220, 100, 100);
  }
}