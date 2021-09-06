let NUM = 6;
let NUM_SNOW = 50;// 雪の結晶の数
let data = [];// 空の配列
let snowType = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);// ウィンドウサイズでキャンバスを作成

  textFont('Henny Penny');
  textSize(36);

  for (let i = 0; i < NUM_SNOW; i++) {
    data.push({// 配列にオブジェクトを追加
      x: random(width),
      y: random(height),
      angle: random(TWO_PI),
      radius: random(10, 40),
      col: color(random(80, 200), 200, 255),
      speed: random(0.5, 2)
    });
  }
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

  for (let i = 0; i < data.length; i++) {
    let obj = data[i];// data[i]だらけになっちゃうので、変数にいれる

    obj.y += obj.speed;
    obj.angle += 0.01;

    if (obj.y - obj.radius > height) {
      obj.radius = random(10, 40);
      obj.x = random(width);
      obj.y = -obj.radius;
      obj.angle = random(TWO_PI);
      obj.color = color(random(80, 200), 200, 255);
      obj.speed = random(0.5, 2);
    }

    if (snowType === 1) {
      drawSnow01(obj.x, obj.y, obj.angle, obj.radius, obj.col);
    }
    if (snowType === 2) {
      drawSnow02(obj.x, obj.y, obj.angle, obj.radius, obj.col);
    }
    if (snowType === 3) {
      drawSnow03(obj.x, obj.y, obj.angle, obj.radius, obj.col);
    }
    if (snowType === 4) {
      drawSnow04(obj.x, obj.y, obj.angle, obj.radius, obj.col);
    }
    if (snowType === 5) {
      drawSnow05(obj.x, obj.y, obj.angle, obj.radius, obj.col);
    }
  }

  noStroke();
  fill(0, 30, 100);
  text('Press key 1 ~ 5', 20, height - 20);
}

function keyTyped() {
  if (key === '1') {
    snowType = 1;
  }
  if (key === '2') {
    snowType = 2;
  }
  if (key === '3') {
    snowType = 3;
  }
  if (key === '4') {
    snowType = 4;
  }
  if (key === '5') {
    snowType = 5;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
