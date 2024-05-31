let x = 100;
let y = 100;
let xspeed = 5;
let yspeed = 2;
let radious = 24;
// 공의 위치와 속도에 대한 변수

setInterval(() => {
  if (Math.abs(xspeed) < 0.2 || Math.abs(yspeed) < 0.2) {
    xspeed = 0;
    yspeed = 0;
    return;
  }
  if (xspeed > 0) {
    xspeed = xspeed - 0.1 === 0 ? 0 : xspeed - 0.1;
  } else {
    xspeed = xspeed + 0.1 === 0 ? 0 : xspeed + 0.1;
  }
  if (yspeed > 0) {
    yspeed = yspeed - 0.1 === 0 ? 0 : yspeed - 0.1;
  } else {
    yspeed = yspeed + 0.1 === 0 ? 0 : yspeed + 0.1;
  }
}, 1000);

function setup() {
  createCanvas(640, 240);
}

function draw() {
  background(50);

  // 절차적이네
  x = x + xspeed;
  y = y + yspeed;
  // 속도에 따라 공을 움직입니다.

  if (x + radious > width || x - radious < 0) {
    xspeed = xspeed * -1;
    console.log("Xhit!");
  }
  if (y + radious > height || y - radious < 0) {
    yspeed = yspeed * -1;
    console.log("Yhit!");
  }

  stroke(0);
  fill(127);
  circle(x, y, radious * 2);
}
