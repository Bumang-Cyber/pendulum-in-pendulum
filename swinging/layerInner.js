function setlayerInner() {
  layerInner = createGraphics(width, height);
  layerInner.colorMode(HSB, 360, 100, 100, 100);
  layerInner.rectMode(CENTER);
}

function drawlayerInner() {
  image(layerInner, width / 2, height / 2);
  layerInner.imageMode(CENTER);
  layerInner.image(layerInnerImage, width / 2, height / 2, width, height);
}
