let cx, cy;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  cx = width / 2;
  cy = height / 2;
}

function draw() {
  background(220);

  stroke(0);
  noFill();
  beginShape();

  let b = 0.1;

  for (let theta = 0; theta < 720; theta += 1) {
    let r = b * theta;
    let x = cx + r * cos(theta);
    let y = cy + r * sin(theta);
    vertex(x, y);
  }
  endShape();
}
