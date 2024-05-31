const pendulum = new Pendulum();

function setup() {
  setLayerOutside();
  pendulum.setPendulum(createVector(width / 2, -200), PI / 2, createVector(), 600);
  setLayerInside();
}

function draw() {
  drawBlurToClear();
  pendulum.swingPendulum();
  drawLayerInside();
}
