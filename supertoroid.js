let r1 =100; let r2 = 50;

// let angle = 0;
function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  
  orbitControl(1,1);

  let t = 1;
  let s = 1;

  noFill();
  beginShape(POINTS);
  for(let theta = 0; theta<360; theta+=10){
    for(let phi =0; phi<360; phi+=10){
      
      let a = cos(theta);
      let b= sin(theta);
      let c = cos(phi);
      let d = sin(phi);

      let an = xn(a,t);
      let bn = xn(b,t);
      let cn = xn(c,s);
      let dn = xn(d,s);
      
      let x = (r1+r2*cn)*an;
      let y = (r1+r2*cn)*bn;
      let z = r2*dn;
      vertex(x,y,z);
    }
  }
  endShape();
  // angle +=1;
}

function xn(x,n){
  let xn = Math.sign(x) * pow(abs(x),n);
  return xn;
  }
