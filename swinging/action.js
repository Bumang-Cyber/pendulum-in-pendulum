let pendulum;
let curScene = 1;
let maxScene = 4;
let InitialAnimation = true;

let bobVel = 1.005;

function setup() {
  createCanvas(layerOuterImage.width, layerOuterImage.height);
  imageMode(CENTER); // 이미지를 중앙에 위치시키기 위해 모드 설정
  // origin, angle, bob, len

  pendulum = new Pendulum();
  pendulum.setPendulumAngleGravity(0.7);
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
  if (InitialAnimation) {
    const timeout = setTimeout(() => {
      // Initial Animation
      console.log("Initial Animation Played!");
      curScene = 3;
    }, 10000);
    InitialAnimation = false;
    return;
  }

  // console.log(curScene, "curScene");

  // pendulum의 세부 항목을 각 조건문 안에서 조작할 예정
  const { origin, angle, angleV, angleA, len, bob, gravity, r } = props;

  if (scene === 0) {
    pendulum.swingPendulumContinuously();
  } else if (scene === 1) {
    pendulum.swingPendulumDecremently();
  } else if (scene === 2) {
    pendulum.swingPendulumIncremently(1.01, 0.4);
  } else if (scene === 3) {
    pendulum.swingPendulumDecremently();
    bobVel *= 1.001;
    if (r > 700) {
      bobVel *= 1.006;
    }
    pendulum.setBobExpand(bobVel);

    if (r > 1500) {
      pendulum.setPendulumSettings();
      console.log(r, "r");
      pendulum.convertScenes();
      curScene = 1;
    }
  }
}
