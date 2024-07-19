const IMGWIDTH = 3640;
const IMGHEIGHT = 2048;

let OVERALL_SCENE = "NATURE";

let layerOuter;
let layerOuterImage;

let layerInner;
let layerInnerImage;

let layerAlt;
let layerAltImage;

let lensImage;

let rabbitLayer;
let rabbitImage;
let racoonLayer;
let racoonImage;

let echoSound = new Audio("../asset/audio_echo.mp3");

function preload() {
  layerOuterImage = loadImage("../asset/p51.gif");
  layerInnerImage = loadImage("../asset/p53.gif");
  layerAltImage = loadImage("../asset/p52.gif");

  rabbitImage = loadImage("../asset/p53_rabbit.png");
  racoonImage = loadImage("../asset/p53_racoon.png");
  lensImage = loadImage("../asset/lens.png");
}
