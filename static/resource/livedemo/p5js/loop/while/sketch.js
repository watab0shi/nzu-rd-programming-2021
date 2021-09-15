function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(249, 239, 231);
  stroke(193, 97, 12);

  let x = 100;
  while (x < 300) {// x が 400 より小さい間繰り返す
    line(x, 180, x, 220);
    x += 10;// x を更新
  }
}