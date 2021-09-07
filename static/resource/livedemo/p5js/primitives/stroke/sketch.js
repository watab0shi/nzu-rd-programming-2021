function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // stroke(グレースケール 0~255)
  // stroke(Red 0~255, Green 0~255, Blue 0~255)
  stroke(0, 205, 129);// 線の色を緑に指定
  strokeWeight(15);
  point(200, 200);
}