function setup() {
  const canvas = createCanvas(400, 400);
  background(200);
}

let inc = 0.01;
let start = 0;

function draw() {
  background(50);
  stroke(255);
  noFill();
  // beginShape-endShape는 한 장의 그림을 그림.
  beginShape();
  let xoff = start;
  for (let x = 0; x < width; x++) {
    stroke(255);
    strokeWeight(1);

    let n = map(noise(xoff), 0, 1, 0, height);
    let s = map(sin(xoff), -1, 1, -50, 50);
    let y = s + n;
    vertex(x, y);

    xoff += inc;
  }
  endShape();

  //
  start += inc;
}
