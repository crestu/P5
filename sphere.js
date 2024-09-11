let r = 100;

function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  orbitControl(1, 1);

  beginShape(POINTS);
  for (let theta = 0; theta < 180; theta +=10) {
    for (let phi = 0; phi<360; phi+=10) {
      let x = r* sin(theta)*cos(phi);
      let y = r*sin(theta)*sin(phi);
      let z = r* cos(theta);
      vertex(x,y,z);
    }
  }
  endShape();
}
