function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  noStroke();

  // 影
  fill(90, 60, 20);
  triangle(130, 155, 290, 180, 180, 370);
  circle(210, 160, 150);
  circle(250, 80, 90);

  fill(240, 190, 190);
  circle(200, 150, 150);

  fill(255, 220, 220);
  circle(150, 110, 13);
  
  fill(190, 210, 240);
  circle(240, 70, 90);

  fill(220, 230, 255);
  circle(215, 45, 10);

  fill(211, 179, 62);
  triangle(120, 145, 280, 170, 170, 360);

  stroke(141, 128, 84);
  strokeWeight(3);
  line(200, 190, 240, 230);
  line(200, 210, 240, 250);
  line(200, 230, 240, 270);
  line(200, 250, 240, 290);

  stroke(240, 190, 190);
  strokeWeight(10);
  line(235, 160, 235, 180);
  line(250, 160, 250, 200);
}