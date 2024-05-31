function setLayerInside() {
  layerInside = createGraphics(width, height);
  layerInside.colorMode(HSB, 360, 100, 100, 100);
  layerInside.rectMode(CENTER);
}

function drawLayerInside() {
  image(layerInside, width / 2, height / 2);
  // push();

  layerInside.imageMode(CENTER);
  layerInside.image(layerInsideImage, width / 2, height / 2, width, height);

  layerInside.erase();
  layerInside.rect(width / 2, height / 2, 400, 400, 30);
  layerInside.noErase();
  // pop();
}
