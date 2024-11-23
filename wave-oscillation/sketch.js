let d;

let dots = []; let cols; let rows; let size=10; 
let margin = 30; 
let speed = 0.03; let scale = 0.1;

function setup() {
  createCanvas(400, 400);
  cols = (width - margin*2)/size;
  rows = (height-margin*2) /size;
  
  for(let i=0; i< cols; i++){
    dots[i] = [];
    for(let j=0; j<rows; j++){
      let x= margin + size/2 + i*size;
      let y= margin + size/2+ j*size;
      let distance = dist(x,y,width/2,height/2);
      let angle =map(distance,0,width/2, 0, TWO_PI)
      dots[i][j] = new Dot(x,y,angle,speed,scale);
  }
  }
  
}

function draw() {
  background(0);
  
    for(let i=0; i< cols; i++){
    for(let j=0; j<rows; j++){
  
      dots[i][j].update();
      dots[i][j].display();
  }
    }


}
