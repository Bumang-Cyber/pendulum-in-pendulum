let blurAmount = 20; // 초기 블러 강도 (0에서 20까지)

function setLayerOutside() {
  createCanvas(layerOutside.width, layerOutside.height);
  imageMode(CENTER); // 이미지를 중앙에 위치시키기 위해 모드 설정
}

function drawBlurToClear() {
  push();
  clear(); // 캔버스를 지움 (투명한 배경으로 초기화)

  // 블러 강도를 점차 줄이기
  blurAmount -= 0.5;
  if (blurAmount < 0) blurAmount = 0;

  // 원본 이미지를 그리고 블러 필터 적용
  image(layerOutside, width / 2, height / 2);
  if (blurAmount > 0) {
    filter(BLUR, blurAmount);
  }
  pop();
}
