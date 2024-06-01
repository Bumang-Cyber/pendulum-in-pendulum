const pendulum = new Pendulum(0.1);

function setup() {
  setLayerOutside();
  pendulum.setPendulumSettings(createVector(width / 2, -1000), PI / 2, createVector(), 1400);
  setLayerInside();
}

function draw() {
  drawBlurToClear();
  drawLayerInside();
  pendulum.swingPendulum();
}
