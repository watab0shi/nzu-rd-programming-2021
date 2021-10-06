let img;
let num = 32;
let size;

function preload() {
  img = loadImage('/resource/assets/cat.png');
}

function setup() {
  createCanvas(400, 400);
  noStroke();

  size = width / num;
  img.resize(num, num);// 画像が大きいと負荷がかかるので小さめにリサイズしておく
  img.loadPixels();// img.pixels にピクセルデータが格納される

  // img.pixels には [R0,G0,B0,A0, R1,G1,B1,A1, ...] の順に
  // ひと続きの配列の中に画像の全てのピクセルデータが入っています
  console.log(img.pixels.length);// -> 画像幅 x 画像高さ x 4
}

function draw() {
  background(220);
  for (let y = 0; y < num; y++) {
    for (let x = 0; x < num; x++) {
      let index = ((y * num) + x) * 4;// 配列の要素番号
      let R = img.pixels[index + 0];
      let G = img.pixels[index + 1];
      let B = img.pixels[index + 2];
      let A = img.pixels[index + 3];
      fill(R, G, B, A);
      square(x * size, y * size, size);
    }
  }
}