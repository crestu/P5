let r1 = 150;
let r2 = 20;

function setup() {
  createCanvas(400,400,WEBGL);
  angleMode(DEGREES);
}


function draw(){
  background(220);
  orbitControl();
  
  noFill();
  stroke(0);
  beginShape(POINTS);
  for(let theta = 0; theta<  360; theta +=10){
    for(phi = 0; phi <360; phi +=10){
  let x = (r1+r2*cos(phi))*cos(theta);
  let y = (r1+r2*cos(phi))*sin(theta);
  let z = r2*sin(phi)
  vertex(x,y,z);
    }
  }
  endShape();
  strokeWeight(3);
  stroke(255,0,0);
   beginShape();
  for(let theta = 0; theta<  360; theta +=10){
  let x = (r1+r2*cos(theta))*cos(theta);
  let y = (r1+r2*cos(theta))*sin(theta);
  let z = r2*sin(theta)
  vertex(x,y,z);
  }
  stroke(0,0,255);
  endShape();
  
  ellipse(r1+r2,0,3,3);
}
