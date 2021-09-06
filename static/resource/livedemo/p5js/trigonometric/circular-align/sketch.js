let NUM = 30;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  let sec = millis() / 1000;
  let r = 150;

  for (let i = 0; i < NUM; i++) {
    let angle = i * TWO_PI / NUM + sec * 0.5;
    let x = width / 2 + cos(angle) * r;
    let y = height / 2 + sin(angle) * r;
    noStroke();
    fill(0, 205, 129);
    circle(x, y, 5);
  }
}