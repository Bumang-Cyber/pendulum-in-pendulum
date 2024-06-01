class Pendulum {
  constructor(gravity) {
    this.bob;
    this.len;
    this.gravity = gravity || 1;
    this.origin;
    this.angle = 0;
    this.angleV;
    this.angleA;
  }

  setPendulumSettings(origin, angle, bob, len) {
    this.origin = origin;
    this.angle = angle;
    this.bob = bob;
    this.len = len;
    this.angleV = 0; // 각속도 초기화
    this.angleA = 0.001; // 각가속도 초기화
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

    layerInside.stroke(255);
    layerInside.strokeWeight(4);
    // 시작점의 x,y, bob의 x,y를 라인으로 이음
    layerInside.line(this.origin.x, this.origin.y, this.bob.x, this.bob.y);
    // bob의 x, y를 중점으로 반지름 64의 원을 생성

    layerInside.stroke(75, 100, 255);
    layerInside.strokeWeight(8);
    layerInside.fill(255, 0, 0, 0);
    layerInside.circle(this.bob.x, this.bob.y, 410);
    layerInside.erase();
    layerInside.circle(this.bob.x, this.bob.y, 400);
    layerInside.noErase();
    pop(); // 이전의 그리기 상태로 복원
  }
}
