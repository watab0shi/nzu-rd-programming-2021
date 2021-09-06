function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
}

function draw() {
  background(240);

  translate(mouseX, mouseY);

  let sec = millis() / 1000;
  rotate(sec);
  scale(sin(sec));

  noStroke();
  fill(220, 100, 100);
  square(0, 0, 100);
}