function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);

  // キャンバスサイズが変わると座標と直径も書き換えないといけない
  circle(200, 200, 400);
}