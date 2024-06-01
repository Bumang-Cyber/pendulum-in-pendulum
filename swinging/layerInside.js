function setLayerInside() {
  layerInside = createGraphics(width, height);
  layerInside.colorMode(HSB, 360, 100, 100, 100);
  layerInside.rectMode(CENTER);
}

function drawLayerInside() {
  image(layerInside, width / 2, height / 2);
  layerInside.imageMode(CENTER);
  layerInside.image(layerInsideImage, width / 2, height / 2, width, height);
}

function drawEraseWithPendulum() {}
