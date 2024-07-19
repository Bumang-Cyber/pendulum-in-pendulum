function setlayerInner() {
  layerInner = createGraphics(width, height);
  layerInner.colorMode(HSB, 360, 100, 100, 100);
  layerInner.rectMode(CENTER);
}

function drawlayerInner() {
  image(layerInner, width / 2, height / 2);
  layerInner.imageMode(CENTER);
  layerInner.image(layerInnerImage, width / 2, height / 2, (innerHeight * IMGWIDTH) / IMGHEIGHT, innerHeight);

  // if (OVERALL_SCENE === "NATURE") {
  //   drawlayerRabbit();
  //   drawlayerRacoon();
  // }
}

function setlayerRabbit() {
  rabbitLayer = createGraphics(width, height);
  rabbitLayer.colorMode(HSB, 360, 100, 100, 100);
  rabbitLayer.rectMode(CENTER);
}

function drawlayerRabbit(center = 2) {
  image(rabbitLayer, width / center, height / center);
  rabbitLayer.imageMode(CENTER);
  rabbitLayer.image(rabbitImage, width / 2, height / 2, (innerHeight * IMGWIDTH) / IMGHEIGHT, innerHeight);
}

function setlayerRacoon() {
  racoonLayer = createGraphics(width, height);
  racoonLayer.colorMode(HSB, 360, 100, 100, 100);
  racoonLayer.rectMode(CENTER);
}

function drawlayerRacoon(center = 2) {
  image(racoonLayer, width / center, height / center);
  racoonLayer.imageMode(CENTER);
  racoonLayer.image(racoonImage, width / 2, height / 2, (innerHeight * IMGWIDTH) / IMGHEIGHT, innerHeight);
}
