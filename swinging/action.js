const pendulum = new Pendulum(0.5);

function setCanvas() {
  createCanvas(layerOuterImage.width, layerOuterImage.height);
  imageMode(CENTER); // 이미지를 중앙에 위치시키기 위해 모드 설정
}

function setup() {
  setCanvas();
  // origin, angle, bob, len
  setlayerOuter();
  setlayerInner();
}

function draw() {
  drawBlur(layerOuterImage, "DOWN");
  drawlayerInner();
  drawlayerOuter();
  pendulum.swingPendulum();
}
