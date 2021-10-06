let url = 'https://coolors.co/f15bb5-fee440-00bbf9';
let palette = url.replace('https://coolors.co/', '').split('-').map(c => '#' + c);
let vmin, vmax;
let num = 12;
let size;
let s2;
let typeArr = [];
let colorArr = [];

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  
  vmin = (width < height) ? width : height;
  vmax = (width < height) ? height : width;
  size = vmax / num;
  s2 = size / 2;
  
  for (let i = 0; i < num * num; i++) {
    typeArr.push(floor(random(10)));
    colorArr.push(palette[floor(random(palette.length))]);
  }
}

function draw() {
  background(255);
  noStroke();
  
  for (let i = 0; i < num; i++) {
    let y = i * size + (size / 2);
    for (let j = 0; j < num; j++) {
      let x = j * size + (size / 2);
      let idx = i * num + j;// 配列の要素の番号
      let t = typeArr[idx];
      let c = colorArr[idx];
      fill(c);
      if (t === 0) {
        triangle(x - s2, y - s2, x + s2, y - s2, x - s2, y + s2);
      } else if (t === 1) {
        triangle(x + s2, y - s2, x + s2, y + s2, x - s2, y - s2);
      } else if (t === 2) {
        triangle(x + s2, y + s2, x - s2, y + s2, x + s2, y - s2);
      } else if (t === 3) {
        triangle(x - s2, y + s2, x - s2, y - s2, x + s2, y + s2);
      } else if (t === 4) {
        arc(x - s2, y - s2, size*2, size*2, HALF_PI*0, HALF_PI*1);
      } else if (t === 5) {
        arc(x + s2, y - s2, size*2, size*2, HALF_PI*1, HALF_PI*2);
      } else if (t === 6) {
        arc(x + s2, y + s2, size*2, size*2, HALF_PI*2, HALF_PI*3);
      } else if (t === 7) {
        arc(x - s2, y + s2, size*2, size*2, HALF_PI*3, HALF_PI*4);
      } else if (t === 8) {
        circle(x, y, size);
      } else if(t === 9) {
        square(x, y, size);
      }
    }
  }
  
  let index = floor(random(num * num));
  typeArr[index] = floor(random(10));
  colorArr[index] = palette[floor(random(palette.length))];
}