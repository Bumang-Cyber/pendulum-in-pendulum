let i = 0;
// p5.js는 setup과 draw 안에서만 써야하나?
function setup() {
  createCanvas(500, 500, WEBGL);
  // console.log(random())
  // console.log(noise())
  // console.log(noise(100))
  // random은 항상 다른 값이 나오는데
  // noise는 계수?가 같다면 항상 같은 값이 나온다.
  describe("A wavy white surface spins around on gray canvas.");
}

// 빠르게 frame이 돌아가고 있다.
function draw() {
  // 패러미터 숫자는 밝기인듯?
  // console.log(width, "what is width? -> the canvas size..")
  background(51);
  // let x = random(width);

  // noise(펄린노이즈)가 한 번 생성되면 고정적인 값을 가지긴 해도,
  // 새로고침할 때마다 새로운 펄린 노이즈가 생성된다.
  let x = map(noise(1000), 0, 1, 0, width);

  // ellipse(x, 200, 24, 24);
  rotateY(frameCount * 0.01);
  quad(-60, -60, 0, 60, -60, 0, 60, 60, 40, -60, 60, -40);
}

// map(value, start1, stop1, start2, stop2, [withinBounds])
// value 숫자: 변환할 값
// start1 숫자: 값의 현재 범위의 하한 [가로]
// stop1 숫자: 값의 현재 범위의 상한 [가로]
// start2 숫자: 값의 대상 범위의 하한 [세로]
// stop2 숫자: 값의 대상 범위의 상한 [세로]
// withinBounds 불리언: (선택 사항) 값을 새로 매핑된 범위에 제한

// describe()
// 스크린리더 (Screen Reader)를 위한 캔버스의 전체적인 서술적 묘사를 설정합니다. 첫 번째 매개변수는 문자열이며, 설정할 묘사입니다.
