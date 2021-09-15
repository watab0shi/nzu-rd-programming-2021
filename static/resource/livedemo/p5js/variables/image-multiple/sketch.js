let img1;
let img2;

function preload() {
  img1 = loadImage('/resource/assets/rabbit.png');
  img2 = loadImage('/resource/assets/bear.png');
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
}

function draw() {
  background(255, 176, 238);
  image(img1, width / 2 - 80, height / 2);
  image(img2, width / 2 + 80, height / 2);
}