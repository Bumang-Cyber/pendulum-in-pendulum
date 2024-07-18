const IMGWIDTH = 3640;
const IMGHEIGHT = 2048;

let layerOuter;
let layerOuterImage;
let layerInner;
let layerInnerImage;

let layerAlt;
let layerAltImage;

let lensImage;
let echoSound = new Audio("../asset/audio_echo.mp3");

function preload() {
  layerOuterImage = loadImage("../asset/p51.png");
  layerInnerImage = loadImage("../asset/p53.png");
  layerAltImage = loadImage("../asset/p52.png");
  lensImage = loadImage("../asset/lens.png");
}

// const IMGWIDTH = 3640;
// const IMGHEIGHT = 2048;

// let layerOuter;
// let layerOuterImage;
// let layerOuterRightUpperImage;
// let layerOuterLeftUpperImage;
// let layerOuterCenterImage;

// let layerInner;
// let layerInnerImage;
// let layerInnerRightUpperImage;
// let layerInnerLeftUpperImage;
// let layerInnerCenterImage;

// let layerAlt;
// let layerAltImage;

// let lensImage;
// let echoSound = new Audio("../asset/audio_echo.mp3");

// function preload() {
//   layerAltImage = loadImage("../asset/p52.png");
//   lensImage = loadImage("../asset/lens.png");

//   layerInnerImage = loadImage("../asset/p53.png");
//   layerInnerCenterImage = loadImage("../asset/p53_");
//   layerInnerLeftUpperImage = loadImage("../asset/p53_rabbit.png");
//   layerInnerRightUpperImage = loadImage("../asset/p53_racoon.png");

//   layerOuterImage = loadImage("../asset/p51.png");
//   layerOuterCenterImage = loadImage("../asset/p53_human.png");
//   layerOuterLeftUpperImage = loadImage("../asset/p53_rabbit.png");
//   layerOuterRightUpperImage = loadImage("../asset/p53_racoon.png");
// }
