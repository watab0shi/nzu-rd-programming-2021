let img;

function preload() {
  img = loadImage('/resource/assets/cat.png');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50, 43, 19);
  image(img, 0, 0);
}