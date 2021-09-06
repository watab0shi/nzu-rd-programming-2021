function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let x = 100;
  while (x < 400) {// x が 400 より小さい間繰り返す
    line(x, 180, x, 220);
    x += 100;// x を更新
  }
}