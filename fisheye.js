function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  background(220);
}


function flay(x, y) {

  let size = width*(3/8);
  let rate= size/3;

  for (let i = 0; i <size; i +=rate ) {
    line(x, y, i+x, size+y);
    line(size+x, size+y, x, i+rate+y);
  }
}

function draw() {
  strokeWeight(5);
  flay(0,250);
  //flay(width/2,50);
  
  translate(width/2,50);
  rotate(90);
  flay(-50,50);
  
  translate(width/2,50);
  rotate(90);
  flay(-250,100);
  
   translate(width/2,50);
  rotate(90);
  flay(0,100);
  
  translate(width/2,50);
  rotate(90);
  flay(200,50);
  
  translate(width/2,50);
  rotate(90);
  flay(150,-150);
 
   translate(width/2,50);
  rotate(90);
  flay(-50,-100);
  
  translate(width/2,50);
  rotate(90);
  flay(-200,300);
 
}

// i need  to create this image by dividing it into one shape that is rotated

//the shape could be interpreted as rays from two points converging

//the points are at 90 degrees to eachother

// theres actually just 2 positions in which these are rotated, RLLR.

//these can be tiled and arranged with a loop ?

//
