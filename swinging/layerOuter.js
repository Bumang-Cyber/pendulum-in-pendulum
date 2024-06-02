let blurAmount = 20; // 초기 블러 강도 (0에서 20까지)

function setlayerOuter() {
  layerOuter = createGraphics(width, height);
  layerOuter.colorMode(HSB, 360, 100, 100, 100);
  layerOuter.rectMode(CENTER);
}

function drawlayerOuter() {
  image(layerOuter, width / 2, height / 2);
  layerOuter.imageMode(CENTER);
  layerOuter.image(layerOuterImage, width / 2, height / 2, width, height);
}
