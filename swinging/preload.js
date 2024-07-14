const IMGWIDTH = 3640;
const IMGHEIGHT = 2048;

let layerOuter;
let layerOuterImage;
let layerInner;
let layerInnerImage;
let layerAlt;
let layerAltImage;

function preload() {
  layerOuterImage = loadImage("../asset/p51.png");
  layerInnerImage = loadImage("../asset/p53.png");
  layerAltImage = loadImage("../asset/p52.png");
}
