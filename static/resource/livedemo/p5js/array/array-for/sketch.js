let num = 5;
let arr = [];
let step;

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < num; i++) {
    arr.push(random(10, 50));
  }
  step = width / (num - 1);
}

function draw() {
  background(6, 37, 15);
  noStroke();
  fill(31, 183, 77);
  
  for (let i = 0; i < num; i++) {
    circle(i * step, height / 2, arr[i] * 2);
  }
}