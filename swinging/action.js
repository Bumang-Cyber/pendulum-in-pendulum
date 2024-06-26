let pendulum;
let curScene = 1;
let maxScene = 4;
let intervalAnimation = true;

let bobExpendingV = 1.005;

function setup() {
  createCanvas(layerOuterImage.width, layerOuterImage.height);
  imageMode(CENTER); // 이미지를 중앙에 위치시키기 위해 모드 설정
  // origin, angle, bob, len

  pendulum = new Pendulum();
  setlayerOuter();
  setlayerInner();
}

function draw() {
  const pendulumStatus = pendulum.getPendulumStatus();
  drawBlur(layerOuterImage, "DOWN");
  drawlayerInner();
  drawlayerOuter();

  useSceneController(curScene, { ...pendulumStatus });
}

function useSceneController(scene, { ...props }) {
  if (intervalAnimation) {
    const timeout = setTimeout(() => {
      // Initial Animation
      console.log("Interval Animation Played!");
      curScene = 3;
    }, 9000);
    intervalAnimation = false;
    return;
  }

  // console.log(curScene, "curScene");

  // pendulum의 세부 항목을 각 조건문 안에서 조작할 예정
  const { origin, angle, angleV, angleA, len, bob, gravity, r, way } = props;

  if (scene === 0) {
    pendulum.swingPendulumContinuously();
  } else if (scene === 1) {
    pendulum.swingPendulumDecremently();
    // console.log("it's 1 now");
  } else if (scene === 2) {
    pendulum.swingPendulumIncremently(1.01, 0.4);
  } else if (scene === 3) {
    pendulum.swingPendulumDecremently();

    console.log(bobExpendingV, "bobExpendingV");
    bobExpendingV *= 1.001;
    if (r > 700) {
      bobExpendingV *= 1.006;
    }
    pendulum.setBobExpand(bobExpendingV);

    if (r > 1500) {
      pendulum.setPendulumSettings(
        createVector(width / 2, -1000), //
        way === "RtL" ? -PI / 3 : PI / 3,
        0,
        0.001,
        1400,
        1,
        400,
        switchWay(way)
      );

      pendulum.convertScenes();
      curScene = 1;
      intervalAnimation = true;
      bobExpendingV = 1.005;
    }
  }
}

function switchWay(way) {
  if (way === "RtL") {
    return "LtR";
  } else if (way === "LtR") {
    return "RtL";
  }
}
