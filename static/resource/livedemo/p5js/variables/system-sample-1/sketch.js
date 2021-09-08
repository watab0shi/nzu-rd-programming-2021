function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // 400 x 400 の中心は (200, 200)
  // キャンバスピッタリの直径は 400
  circle(200, 200, 400);
}