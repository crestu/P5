let uRange = [-2, 2];
let vRange = [-2, 2];
let step = 0.1;

function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background(30);
  orbitControl(); 

  stroke(255);
  noFill();

  beginShape(POINTS);
  for (let u = uRange[0]; u <= uRange[1]; u += step) {
    for (let v = vRange[0]; v <= vRange[1]; v += step) {
      let x = (1 / 3) * u * (1 - (1 / 3) * u * u + v * v);
      let y = (1 / 3) * v * (1 - (1 / 3) * v * v + u * u);
      let z = (1 / 3) * (u * u - v * v);
      vertex(x * 100, y * 100, z * 100);
    }
  }
  endShape();
  stroke(0);
}
