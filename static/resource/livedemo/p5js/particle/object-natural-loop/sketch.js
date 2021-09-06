let NUM = 6;
let obj = {};// 空のオブジェクト randomやcolorを使うのでここではプロパティを定義しない

function setup() {
  createCanvas(400, 400);

  let radius = 50;
  obj = {
    x: width / 2,
    y: -radius,
    angle: 0,
    radius: radius,
    col: color(150, 200, 255)
  };
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

  obj.y += 1;
  obj.angle += 0.01;

  if (obj.y - obj.radius > height) {
    obj.y = -obj.radius;
  }

  drawSnow01(obj.x, obj.y, obj.angle, obj.radius, obj.col);
}