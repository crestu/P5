let molds = []; let num = 4000;
let d;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  d= pixelDensity();

  for(let i = 0; i< num; i++){
      molds[i] = new Mold();
  }
 }

function draw() {
  background(0,5);
  loadPixels();
  
  for(let i = 0; i< num; i++){
    molds[i].update();
    molds[i].display();
  }
}
