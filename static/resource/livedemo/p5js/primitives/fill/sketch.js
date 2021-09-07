function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();

  // fill(グレースケール 0~255)
  // fill(Red 0~255, Green 0~255, Blue 0~255)
  fill(0, 205, 129);// 塗りの色を緑に指定
  rect(150, 150, 100, 100);
}