let NUM = 5;
let data = [];
let step = 0;

function setup() {
  createCanvas(400, 400);
  step = width / (NUM - 1);
  for (let y = 0; y < NUM; y++) {
    const arr = [];
    for (let x = 0; x < NUM; x++) {
      arr.push(random(10, step));
    }
    data.push(arr);
  }
}

function draw() {
  background(240);
  noStroke();
  fill(100, 220, 100);
  
  for (let y = 0; y < data.length; y++) {
    for (let x = 0; x < data[y].length; x++) {
      circle(x * step, y * step, data[y][x]);
    }
  }
}