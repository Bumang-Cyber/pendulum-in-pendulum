function setlayerOuter() {
  layerOuter = createGraphics(width, height);
  layerOuter.colorMode(HSB, 360, 100, 100, 100);
  layerOuter.rectMode(CENTER);
}

function drawlayerOuter() {
  image(layerOuter, width / 2, height / 2);
  layerOuter.imageMode(CENTER);
  layerOuter.image(layerOuterImage, width / 2, height / 2, (innerHeight * IMGWIDTH) / IMGHEIGHT, innerHeight);

  // if (OVERALL_SCENE === "FORGIVEME") {
  //   drawlayerRabbit();
  //   drawlayerRacoon();
  // }
}
