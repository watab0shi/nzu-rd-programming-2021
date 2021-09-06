function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // ヨコに 100 ずつずらして線を引く
  line(100, 180, 100, 220);
  line(200, 180, 200, 220);
  line(300, 180, 300, 220);
}