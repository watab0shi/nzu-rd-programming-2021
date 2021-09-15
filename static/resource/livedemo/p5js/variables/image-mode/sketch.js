let img;

function preload() {
  img = loadImage('/resource/assets/cat.png');
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
}

function draw() {
  background(50, 43, 19);
  image(img, width / 2, height / 2, width, height);
}