function drawBlur(target, way) {
  push();
  clear(); // 캔버스를 지움 (투명한 배경으로 초기화)

  // 블러 강도를 점차 줄이기
  if (way === "DOWN" || undefined) {
    blurAmount -= 0.1;
    if (blurAmount < 0) blurAmount = 0;

    // 원본 이미지를 그리고 블러 필터 적용
    image(target, width / 2, height / 2);
    if (blurAmount > 0) {
      filter(BLUR, blurAmount);
    }
  }

  if (way === "UP") {
    blurAmount += 0.5;
    if (blurAmount > 20) blurAmount = 20;

    // 원본 이미지를 그리고 블러 필터 적용
    image(target, width / 2, height / 2);
    filter(BLUR, blurAmount);
  }

  pop();
}
