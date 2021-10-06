let isPlaying = false;
let isTimeUp = false;
let score = 0;// スコア
let timeLimit = 10;// 時間制限
let time = 0;
let startTime = 0;

let x, y;
let diameter = 50;

function setup() {
  createCanvas(400, 400);
  
  x = random(width);
  y = random(height);
}

// スタンバイ
function drawStandbyView() {
  textAlign(CENTER, CENTER);
  text('CLICK TO START!', 0, height / 2, width);
  text('CLICK THE CIRCLE!', 0, height / 2 + 20, width);
}

// プレイ中
function drawPlayingView() {
  // ↓ ここにゲームの描画などを書く
  circle(x, y, diameter);
  // ↑ ここにゲームの描画などを書く
  
  textAlign(LEFT);
  text('TIME : ' + floor(time), 5, 15);
  text('SCORE : ' + score, 5, 35);
}

// タイムアップ
function drawTimeUpView() {
  textAlign(CENTER, CENTER);
  text('TIME UP!', 0, height / 2, width);
  text('SCORE : ' + score, 0, height / 2 + 30, width);
}

function draw() {
  background(220);
  
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
    if (d < diameter) {
      x = random(width);
      y = random(width);
      score += 10;
    }
  } else {
    isPlaying = true;
    startTime = millis() / 1000;
  }
}

