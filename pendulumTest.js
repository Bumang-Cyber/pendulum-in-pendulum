let angle;

// angleVelocity
let angleV = 0;
// angleAcceleration
let angleA = 0.001;

let bob;
let len;

let gravity = 1;
let origin;

function setup() {
  createCanvas(600, 800);
  origin = createVector(300, 0);
  angle = PI / 4; // 0.78
  bob = createVector();
  len = 300;
}

function draw() {
  background(0);
  // origin.x += 1;
  // origin.y += 1;

  let force = gravity * sin(angle);

  angleA = (-1 * force) / len;
  angleV += angleA;
  angle += angleV;

  angleV *= 0.99;

  bob.x = len * sin(angle) + origin.x;
  bob.y = len * cos(angle) + origin.y;

  stroke(255);
  strokeWeight(8);
  fill(127);

  // 시작점의 x,y, bob의 x,y를 라인으로 이음
  line(origin.x, origin.y, bob.x, bob.y);
  // bob의 x, y를 중점으로 반지름 64의 원을 생성
  circle(bob.x, bob.y, 64);
}
