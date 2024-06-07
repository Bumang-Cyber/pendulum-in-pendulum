let pendulum;
let scene = 0;

let pendulumVectorControl = {
  // CONTINUOUSLY | INCREMENT | DECREMENT
  CURRENT: "CONTINUOUSLY",
};

// let interval = setInterval(() => {
//   scene++;
// }, 2000);

function useSceneController(scene, ...props) {
  const currentSequence = scene % 3;
  console.log("current Sequence is ...", currentSequence);

  // 씬의 세부 항목
  const { origin, angle, angleV, angleA, len, bob, gravity } = props;

  if (currentSequence === 0) {
  } else if (currentSequence === 1) {
  } else if (currentSequence === 2) {
  } else if (currentSequence === 3) {
  }
}

function setup() {
  createCanvas(layerOuterImage.width, layerOuterImage.height);
  imageMode(CENTER); // 이미지를 중앙에 위치시키기 위해 모드 설정
  // origin, angle, bob, len

  pendulum = new Pendulum();
  pendulum.setPendulumAngleGravity(0.7);
  setlayerOuter();
  setlayerInner();
}

pendulumVectorControl.CURRENT = "DECREMENT";

function draw() {
  const pendulumStatus = pendulum.getPendulumStatus();
  drawBlur(layerOuterImage, "DOWN");
  drawlayerInner();
  drawlayerOuter();

  if (pendulumVectorControl.CURRENT === "CONTINUOUSLY") {
    pendulum.swingPendulumContinuously();
  } else if (pendulumVectorControl.CURRENT === "DECREMENT") {
    pendulum.swingPendulumDecremently();
  } else if (pendulumVectorControl.CURRENT === "INCREMENT") {
    pendulum.swingPendulumIncremently(1.01, 0.4);
  }

  useSceneController(scene, { ...pendulumStatus });
}
