let NUM = 6;

function setup() {
  createCanvas(400, 400);
}

function drawSnow01(x, y, angle, radius, col) {
  strokeWeight(15);
  stroke(col);

  push();
  {
    translate(x, y);
    rotate(angle);
    scale(radius / 100);

    for (let i = 0; i < NUM; i++) {
      push();
      {
        rotate(i * TWO_PI / NUM);
        line(0, 0, 0, -100);
        line(0, 30, 30, 60);
        line(0, 30, -30, 60);
      }
      pop();
    }
  }
  pop();
}

function drawSnow02(x, y, angle, radius, col) {
  push();
  {
    translate(x, y);
    rotate(angle);
    scale(radius / 100);
    
    stroke(col);
    strokeWeight(5);
    
    for (let i = 0; i < NUM; i++) {
      push();
      {
        rotate(i * TWO_PI / NUM);
        
        line(0, 0, 0, -100);
        
        line(0, 0, 30, 60);
        line(0, 0, -30, 60);
        
        line(0, 90, 30, 60);
        line(0, 90, -30, 60);
      }
      pop();
    }
  }
  pop();
}

function drawSnow03(x, y, angle, radius, col) {
  push();
  {
    translate(x, y);
    rotate(angle);
    scale(radius / 100);
    
    stroke(col);
    strokeWeight(3);
    
    for (let i = 0; i < NUM; i++) {
      push();
      {
        rotate(i * TWO_PI / NUM);
        
        line(0, 0, 0, -100);
        
        line(0, 0, 15, 60);
        line(0, 0, -15, 60);
        
        line(0, 90, 30, 30);
        line(0, 90, -30, 30);
        
        noStroke();
        fill(col);
        circle(0, -100, 10);
      }
      pop();
    }
  }
  pop();
}

function drawSnow04(x, y, angle, radius, col) {
  push();
  {
    translate(x, y);
    rotate(angle);
    scale(radius / 100);
    
    rectMode(CENTER);
    stroke(col);
    strokeWeight(3);
    
    for (let i = 0; i < NUM; i++) {
      push();
      {
        rotate(i * TWO_PI / NUM);
        
        line(0, 0, 0, -90);
        
        line(-20, 35, 20, 35);
        line(-20, 55, 20, 55);
        line(-10, 70, 10, 70);
        
        noFill();
        translate(0, -100);
        rotate(PI / 4);
        square(0, 0, 15);
      }
      pop();
    }
  }
  pop();
}

function drawSnow05(x, y, angle, radius, col) {
  push();
  {
    translate(x, y);
    rotate(angle);
    scale(radius / 100);
    
    stroke(col);
    strokeWeight(3);
    
    for (let i = 0; i < NUM; i++) {
      push();
      {
        rotate(i * TWO_PI / NUM);
        
        line(0, 0, 0, -90);
        
        line(0, 35, 20, 45);
        line(0, 35, -20, 45);
        
        line(0, 55, 30, 70);
        line(0, 55, -30, 70);
        
        line(0, 75, 10, 85);
        line(0, 75, -10, 85);
      }
      pop();
    }
  }
  pop();
}

function draw() {
  background(240);

  let sec = millis() / 1000;
  drawSnow01(75, 125, sec * 0.1, 20, color(150, 180, 255));
  drawSnow02(200, 125, sec * 0.2, 30, color(180, 150, 255));
  drawSnow03(325, 125, sec * 0.3, 40, color(120, 180, 255));
  drawSnow04(125, 275, sec * 0.4, 50, color(150, 200, 255));
  drawSnow05(250, 275, sec * 0.5, 60, color(180, 220, 255));
}