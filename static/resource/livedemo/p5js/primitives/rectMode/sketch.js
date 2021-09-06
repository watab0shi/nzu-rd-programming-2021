function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rectMode(CORNER);// 矩形の左上座標指定モード
  rect(150, 150, 100, 100);
  rectMode(CENTER);// 矩形の中心座標指定モード
  rect(150, 150, 100, 100);
}