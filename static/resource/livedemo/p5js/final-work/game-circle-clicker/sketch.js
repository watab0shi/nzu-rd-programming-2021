let isPlaying = false;
let isTimeUp = false;
let score = 0;// スコア
let timeLimit = 10;// 時間制限
let time = 0;
let startTime = 0;
let vmin;

let x, y;
let diameter;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  textFont('Sigmar One');
  
  vmin = (width < height) ? width : height;
  x = random(width);
  y = random(height);
  diameter = vmin * 0.1;
}

// スタンバイ
function drawStandbyView() {
  fill(39, 205, 32);
  circle(width / 2, height / 2, vmin * 0.55);
  
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(vmin * 0.05);
  text('CIRCLE CLICKER', 0, height / 2, width);
  
  textSize(vmin * 0.03);
  text('CLICK TO START!', 0, height / 2 + vmin * 0.05, width);
}

// プレイ中
function drawPlayingView() {
  // ↓ ここにゲームの描画などを書く
  fill(39, 205, 32);
  circle(x, y, diameter);
  
  let w = map(time, timeLimit, 0, 0, width);
  rect(0, 0, w, 5);
  // ↑ ここにゲームの描画などを書く
  
  fill(255);
  textAlign(LEFT);
  textSize(vmin * 0.03);
  text('TIME : ' + floor(time), 5, 20);
  text('SCORE : ' + score, 5, 40);
}

// タイムアップ
function drawTimeUpView() {
  textAlign(CENTER, CENTER);
  textSize(vmin * 0.05);
  text('TIME UP!', 0, height / 2, width);
  textSize(vmin * 0.03);
  text('SCORE : ' + score, 0, height / 2 + vmin * 0.05, width);
}

function draw() {
  background(8, 41, 6);
  
  // 画面振り分け
  if (isPlaying) {
    // タイマー更新
    time = timeLimit - ((millis() / 1000) - startTime);
    if (time < 0) {
      time = 0;
      isTimeUp = true;
    }
    if (isTimeUp) {
      drawTimeUpView();
    } else {
      drawPlayingView();
    }
  } else {
    drawStandbyView();
  }
}

function mousePressed() {
  if (isPlaying) {
    // ゲーム中のクリック
    let d = dist(mouseX, mouseY, x, y);
    if (d < diameter / 2) {
      x = random(width);
      y = random(height);
      score += 10;
    }
  } else {
    isPlaying = true;
    startTime = millis() / 1000;
  }
}

