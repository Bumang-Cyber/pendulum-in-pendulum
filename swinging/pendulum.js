class Pendulum {
  constructor() {
    this.bob;
    this.len;
    this.gravity = 1;
    this.origin;
    this.angle = 0;
    this.angleV;
    this.angleA;
  }

  setPendulum(origin, angle, bob, len) {
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

    this.angleA = (-1 * force) / (this.len + 1000);
    this.angleV += this.angleA;
    this.angle += this.angleV;

    // 추의 x, y
    this.bob.x = this.len * sin(this.angle) + this.origin.x;
    this.bob.y = this.len * cos(this.angle) + this.origin.y;

    stroke(0);
    strokeWeight(8);
    fill(0, 255, 0, 127);

    // 시작점의 x,y, bob의 x,y를 라인으로 이음
    // console.log(this.origin.x, this.origin.y, this.bob.x, this.bob.y);
    line(this.origin.x, this.origin.y, this.bob.x, this.bob.y);
    // bob의 x, y를 중점으로 반지름 64의 원을 생성

    circle(this.bob.x, this.bob.y, 250);
    pop(); // 이전의 그리기 상태로 복원
  }
}
