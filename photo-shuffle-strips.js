let img; 
let cols= 50; let stripWidth;
let strips = [];

function preload(){
 img = loadImage("banff.jpg");
}

function setup() {
  img.resize(500,0);
  createCanvas(img.width, img.height);
  stripWidth= width/cols;
    for(let i =0; i<cols; i++){
      strips[i]= img.get(i*stripWidth,0, stripWidth, height); 
    }
  noLoop();
}

function draw() {
  background(220);
  // image(img,0,0);
  let shuffledStrips = shuffle(strips);
  for(let i =0; i<cols; i++){
    image(shuffledStrips[i], i*stripWidth,0);
  }
}
