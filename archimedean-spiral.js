let cx, cy;
function setup() {
  createCanvas(400,400);
  cx = width/2;
  cy = height/2;
}

function draw() {
  background(220);
  
  let angle = 0;
  for(let r=0;r<100; r++){
   let x = cx + r*cos(angle);
   let y = cy +r*sin(angle);
   
   ellipse(x,y,3,3);
   angle +=1;
  }
}
