class Pendulum {
  constructor() {
    this.origin = createVector(width / 2, -1000);
    this.angle = PI / 3;
    this.angleV = 0; // 각속도 초기화
    this.angleA = 0.001; // 각가속도 초기화

    this.bob = createVector();
    this.len = 1400;
    this.this.gravity = 1;
  }

  setPendulumSettings(origin, angle, angleV, angleA, len, bob, gravity) {
    this.origin = origin;
    this.angle = angle;
    this.angleV = angleV;
    this.angleA = angleA;
    this.len = len;
    this.bob = bob;
    this.gravity = gravity;
  }

  setPendulumOrigin(origin) {
    this.origin = origin;
  }

  setPendulumAngle(angle) {
    this.angle = angle;
  }

  setPendulumAngleVelocity(angleV) {
    this.angleV = angleV;
  }

  setPendulumAngleAcceleration(angleA) {
    this.angleA = angleA;
  }

  setPendulumLength(len) {
    this.len = len;
  }

  setPendulumAngleGravity(gravity) {
    this.gravity = gravity;
  }

  getPendulumStatus() {
    return {
      origin: this.origin,
      angle: this.angle,
      angleV: this.angleV,
      angleA: this.angleA,
      len: this.len,
      bob: this.bob,
      gravity: this.gravity,
    };
  }

  swingPendulum() {
    // push와 pop으로 그리기 상태를 저장할 수 있다.
    push(); // 현재의 그리기 상태를 저장
    let force = this.gravity * sin(this.angle);

    this.angleA = (-1 * force) / this.len;
    this.angleV += this.angleA;
    this.angle += this.angleV;

    // 추의 x, y
    this.bob.x = this.len * sin(this.angle) + this.origin.x;
    this.bob.y = this.len * cos(this.angle) + this.origin.y;

    // layerOuter에 pendulum이 그려짐
    layerOuter.stroke(255);
    layerOuter.strokeWeight(4);
    // 시작점의 x,y, bob의 x,y를 라인으로 이음
    layerOuter.line(this.origin.x, this.origin.y, this.bob.x, this.bob.y);
    // bob의 x, y를 중점으로 반지름 64의 원을 생성

    layerOuter.stroke(75, 100, 255);
    layerOuter.strokeWeight(8);
    layerOuter.fill(255, 0, 0, 0);
    layerOuter.circle(this.bob.x, this.bob.y, 410);
    layerOuter.erase();
    layerOuter.circle(this.bob.x, this.bob.y, 400);
    layerOuter.noErase();
    pop(); // 이전의 그리기 상태로 복원
  }

  convertScenes() {
    let temp1 = layerOuterImage;
    let temp2 = layerInnerImage;

    layerOuterImage = temp2;
    layerInnerImage = temp1;
  }
}
