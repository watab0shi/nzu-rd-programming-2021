let message = '';

function setup() {
  createCanvas(400, 400);
  textSize(60);
  textFont('Sansita Swashed');
}

function draw() {
  background(255);
  noStroke();
  fill(0);
  text(message, 10, 200);
}

function keyTyped() {
  message += key;
}

function keyPressed() {
  if (key === 'Backspace') {
    message = message.slice(0, -1);
  }
}