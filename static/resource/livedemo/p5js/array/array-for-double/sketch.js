let num = 5;
let data = [];
let step = 0;

function setup() {
  createCanvas(400, 400);
  
  step = width / (num - 1);
  
  for (let y = 0; y < num; y++) {
    const arr = [];
    for (let x = 0; x < num; x++) {
      arr.push(random(10, step));
    }
    data.push(arr);
  }
}

function draw() {
  background(6, 37, 15);
  noStroke();
  fill(31, 183, 77);
  
  for (let y = 0; y < data.length; y++) {
    for (let x = 0; x < data[y].length; x++) {
      circle(x * step, y * step, data[y][x]);
    }
  }
}